import { collection, query, getDocs, orderBy, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { db, loginUser } from './auth.js';
import { setAQuestions } from './setAQuestions.js';
// import { setBQuestions } from './setBQuestions.js';  <-- Uncomment as you add files
// import { setCQuestions } from './setCQuestions.js';
// import { setDQuestions } from './setDQuestions.js';
// import { setEQuestions } from './setEQuestions.js';

document.addEventListener('DOMContentLoaded', () => {
    // Combine all question modules and inject them into the DOM container
    const container = document.getElementById('slides-container');
    if (container) {
        // container.innerHTML = setAQuestions + setBQuestions + setCQuestions + setDQuestions + setEQuestions;
        container.innerHTML = setAQuestions; // Using only Set A for this example
    }
});

window.currentUser = null;
window.currentSlideIndex = 0;
window.slides = []; 
window.orderedSets = [];
window.setSlides = {}; 
window.timerInterval = null;
window.activityName = "FABM Cup Practice";
window.section = "Default"; 
window.studentAnswers = {}; 
window.celebratedSets = new Set(); 
window.targetSetToStart = null;

document.addEventListener('click', function(event) {
    const nav = document.getElementById('slide-navigator');
    const btn = document.getElementById('nav-toggle-btn');
    if (!nav.classList.contains('collapsed') && !nav.contains(event.target) && event.target !== btn) {
        nav.classList.add('collapsed');
    }
});

window.handleLogin = async function() {
    const id = document.getElementById('auth-id').value;
    const pass = document.getElementById('auth-pass').value;
    const btn = document.querySelector('.login-box .start-btn');
    btn.innerText = "Authenticating...";
    
    try {
        const user = await loginUser(id, pass);
        if (user) {
            window.currentUser = user;
            if(user.section) window.section = user.section;
            document.getElementById('login-overlay').style.display = 'none';
            
            if(user.role === 'student') {
                const cName = `results_${window.activityName}_${window.section}`;
                const docId = `${user.CN || '00'}-${user.Idnumber}-${user.LastName} ${user.FirstName}`;
                const docRef = doc(db, cName, docId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    window.studentAnswers = docSnap.data().answers || {};
                }
                initEnvironment();
                showDashboard();
            } else {
                document.getElementById('container').style.display = 'flex';
                document.body.classList.add('role-teacher');
                initEnvironment();
                loadTeacherRoster();
            }
        } else {
            document.getElementById('login-error').style.display = 'block';
            btn.innerText = "Login to Module";
        }
    } catch(e) {
        console.error(e);
        btn.innerText = "Login to Module";
    }
};

function initEnvironment() {
    const diffWeight = { "Easy": 1, "Average": 2, "Difficult": 3 };
    const container = document.getElementById('slides-container');
    const slideArray = Array.from(document.querySelectorAll('.slide'));
    
    slideArray.sort((a, b) => {
        const setA = a.getAttribute('data-set') || '';
        const setB = b.getAttribute('data-set') || '';
        if (setA !== setB) return setA.localeCompare(setB);

        const diffA = a.getAttribute('data-difficulty') || '';
        const diffB = b.getAttribute('data-difficulty') || '';
        if (diffWeight[diffA] !== diffWeight[diffB]) return (diffWeight[diffA] || 0) - (diffWeight[diffB] || 0);

        return 0; 
    });
    
    slideArray.forEach(slide => container.appendChild(slide)); 
    window.slides = document.querySelectorAll('.slide'); 

    window.orderedSets = [];
    window.setSlides = {};
    window.slides.forEach((s, idx) => {
        s.dataset.globalIndex = idx;
        let sSet = s.getAttribute('data-set');
        if(!window.orderedSets.includes(sSet)) window.orderedSets.push(sSet);
        if(!window.setSlides[sSet]) window.setSlides[sSet] = [];
        window.setSlides[sSet].push(s);
    });

    buildNavigator();
    
    window.slides.forEach(slide => {
        const qId = slide.getAttribute('data-question-id');
        const storedAnsData = window.studentAnswers[qId];
        
        if (storedAnsData && window.currentUser && window.currentUser.role === 'student') {
            let userAns = typeof storedAnsData === 'object' ? storedAnsData.val : storedAnsData;
            let isExp = typeof storedAnsData === 'object' ? storedAnsData.expired : false;
            
            slide.setAttribute('data-locked', 'true');
            const inputEl = document.getElementById(`input-${qId}`);
            if(inputEl) {
                inputEl.value = userAns;
                inputEl.disabled = true;
            }
            
            if(slide.getAttribute('data-type') === 'Theory') {
                slide.querySelectorAll('.mcq-option').forEach(el => {
                    el.style.pointerEvents = 'none';
                    let optText = el.innerText.trim();
                    optText = optText.replace(/^([A-D])\)\s*/i, '');
                    if(optText === userAns || el.innerText.startsWith(userAns + ')')) el.classList.add('selected');
                });
            }
            
            document.getElementById(`submit-${qId}`).style.display = 'none';
            document.getElementById(`exp-${qId}`).style.display = 'inline-block';
            
            const fb = document.getElementById(`feedback-${qId}`);
            fb.style.display = 'block';
            const correctVal = slide.getAttribute('data-answer');
            const points = parseInt(slide.getAttribute('data-points'));
            
            if(String(userAns).toLowerCase() === String(correctVal).toLowerCase()) {
                fb.className = 'quiz-feedback feedback-correct';
                if(isExp) fb.innerText = `Correct! However, time expired (0 pts awarded).`;
                else fb.innerText = `Correct! Well done. (+${points} pts)`;
            } else {
                fb.className = 'quiz-feedback feedback-wrong';
                if(isExp) fb.innerText = `Time Expired & Incorrect Answer Saved. (Expected: ${correctVal})`;
                else fb.innerText = `Incorrect Answer Saved. (Expected: ${correctVal})`;
            }
        }
    });
}

function getSetStatus(setName) {
    let answeredCount = 0;
    let total = window.setSlides[setName].length;
    window.setSlides[setName].forEach(s => {
        let qId = s.getAttribute('data-question-id');
        if(window.studentAnswers[qId]) answeredCount++;
    });

    if(answeredCount === total) return { state: 'completed', text: 'Completed', class: 'status-completed' };
    if(answeredCount > 0) return { state: 'in_progress', text: 'In Progress', class: 'status-progress' };
    
    let setIndex = window.orderedSets.indexOf(setName);
    if(setIndex === 0) return { state: 'unlocked', text: 'Unlocked', class: 'status-unlocked' };

    let prevSet = window.orderedSets[setIndex - 1];
    let prevAnswered = 0;
    let prevTotal = window.setSlides[prevSet].length;
    window.setSlides[prevSet].forEach(s => {
        if(window.studentAnswers[s.getAttribute('data-question-id')]) prevAnswered++;
    });
    
    if(prevAnswered === prevTotal) return { state: 'unlocked', text: 'Unlocked', class: 'status-unlocked' };
    return { state: 'locked', text: 'Locked', class: 'status-locked' };
}

window.showDashboard = function() {
    document.getElementById('container').style.display = 'none';
    window.speechSynthesis.cancel();
    clearInterval(window.timerInterval);
    
    const dashOverlay = document.getElementById('dashboard-overlay');
    const setContainer = document.getElementById('dashboard-sets');
    setContainer.innerHTML = '';

    window.orderedSets.forEach((setName, idx) => {
        const status = getSetStatus(setName);
        
        const row = document.createElement('div');
        row.className = 'dashboard-set-row';
        
        const nameEl = document.createElement('div');
        nameEl.className = 'set-name';
        nameEl.innerText = setName;
        
        const statusEl = document.createElement('div');
        statusEl.className = `set-status ${status.class}`;
        statusEl.innerText = status.text;
        
        const actionDiv = document.createElement('div');
        
        if(status.state !== 'locked') {
            const actionBtn = document.createElement('button');
            actionBtn.className = 'start-btn';
            actionBtn.style.padding = "8px 15px";
            actionBtn.style.fontSize = "0.9rem";
            actionBtn.style.width = "auto";
            actionBtn.style.marginTop = "0";
            actionBtn.style.marginRight = "10px";
            actionBtn.innerText = status.state === 'completed' ? 'Review' : (status.state === 'in_progress' ? 'Continue' : 'Start');
            actionBtn.onclick = () => showHeadsUp(setName);
            actionDiv.appendChild(actionBtn);
        }

        if(status.state === 'completed' || status.state === 'in_progress') {
            const resetBtn = document.createElement('button');
            resetBtn.className = 'reset-btn';
            resetBtn.innerText = 'Reset';
            resetBtn.onclick = () => resetSetLogic(setName);
            actionDiv.appendChild(resetBtn);
        }
        
        row.appendChild(nameEl);
        row.appendChild(statusEl);
        row.appendChild(actionDiv);
        setContainer.appendChild(row);
    });

    dashOverlay.style.display = 'flex';
};

window.showHeadsUp = function(setName) {
    document.getElementById('dashboard-overlay').style.display = 'none';
    document.getElementById('headsup-title').innerText = `Prepare for ${setName}`;
    window.targetSetToStart = setName;
    document.getElementById('headsup-overlay').style.display = 'flex';
};

window.executeStartSet = function() {
    document.getElementById('headsup-overlay').style.display = 'none';
    document.getElementById('container').style.display = 'flex';
    document.getElementById('dashboard-toggle-btn').style.display = 'block';
    
    let targetIndex = 0;
    let found = false;
    
    for(let i=0; i<window.slides.length; i++) {
        const s = window.slides[i];
        if(s.getAttribute('data-set') === window.targetSetToStart) {
            if(!found) { targetIndex = i; found = true; }
            const qId = s.getAttribute('data-question-id');
            if(!window.studentAnswers[qId]) {
                targetIndex = i;
                break;
            }
        }
    }
    showSlide(targetIndex);
};

window.resetSetLogic = async function(setName) {
    if(!confirm(`Warning: Resetting ${setName} will erase answers for this set AND all sets after it. Proceed?`)) return;
    
    const setIndex = window.orderedSets.indexOf(setName);
    for(let i = setIndex; i < window.orderedSets.length; i++) {
        const sName = window.orderedSets[i];
        window.setSlides[sName].forEach(s => {
            const qId = s.getAttribute('data-question-id');
            delete window.studentAnswers[qId];
            
            s.removeAttribute('data-locked');
            s.removeAttribute('data-timer-expired');
            const inputEl = document.getElementById(`input-${qId}`);
            if(inputEl) { inputEl.value = ''; inputEl.disabled = false; inputEl.style.backgroundColor = ''; inputEl.style.cursor = 'text'; }
            s.querySelectorAll('.mcq-option').forEach(el => { el.classList.remove('selected'); el.style.pointerEvents = 'auto'; });
            
            const subBtn = document.getElementById(`submit-${qId}`);
            const expBtn = document.getElementById(`exp-${qId}`);
            const fb = document.getElementById(`feedback-${qId}`);
            if(subBtn) subBtn.style.display = 'inline-block';
            if(expBtn) expBtn.style.display = 'none';
            if(fb) fb.style.display = 'none';
        });
        window.celebratedSets.delete(sName);
    }
    
    await saveToFirebase();
    buildNavigator(); 
    showDashboard();
};

function buildNavigator() {
    const navList = document.getElementById('nav-list');
    navList.innerHTML = '';
    let currentSet = null;
    let currentDiff = null;
    let currentSetUl = null;
    let currentDiffUl = null;
    let qCounters = {}; 

    window.slides.forEach((slide, index) => {
        const sSet = slide.getAttribute('data-set') || 'Uncategorized';
        const sDiff = slide.getAttribute('data-difficulty') || 'General';
        const topic = slide.getAttribute('data-topic') || 'General';
        
        const setKey = sSet.replace(/\s+/g, '-');
        const diffKey = setKey + '-' + sDiff.replace(/\s+/g, '-');

        if (sSet !== currentSet) {
            currentSet = sSet;
            currentDiff = null; 

            let setLi = document.createElement('li');
            setLi.className = 'nav-grandparent';
            setLi.setAttribute('data-set', setKey);
            
            const stat = getSetStatus(sSet);
            if(stat.state === 'locked' && window.currentUser && window.currentUser.role === 'student') {
                setLi.classList.add('locked');
                setLi.innerHTML = `<span>🔒 ${sSet}</span>`;
                setLi.onclick = (e) => { e.stopPropagation(); alert(`Finish answering previous sets to unlock ${sSet}.`); };
            } else {
                setLi.innerHTML = `<span>${sSet}</span> <span>▼</span>`;
                currentSetUl = document.createElement('ul');
                currentSetUl.className = 'nav-week-children';
                currentSetUl.setAttribute('data-set-ul', setKey);
                currentSetUl.style.display = 'none'; 
                
                setLi.onclick = (e) => {
                    e.stopPropagation();
                    const isOpening = currentSetUl.style.display !== 'block';
                    document.querySelectorAll('.nav-week-children').forEach(ul => ul.style.display = 'none');
                    if (isOpening) currentSetUl.style.display = 'block';
                };
                navList.appendChild(currentSetUl);
            }
            navList.appendChild(setLi);
        }

        if (sDiff !== currentDiff && currentSetUl) {
            currentDiff = sDiff;
            
            let diffLi = document.createElement('li');
            diffLi.className = 'nav-parent';
            diffLi.setAttribute('data-diff', diffKey);
            diffLi.innerHTML = `<span>${sDiff}</span> <span>▼</span>`;
            
            currentDiffUl = document.createElement('ul');
            currentDiffUl.className = 'nav-day-children';
            currentDiffUl.setAttribute('data-diff-ul', diffKey);
            currentDiffUl.style.display = 'none';
            
            diffLi.onclick = (e) => {
                e.stopPropagation();
                const isOpening = currentDiffUl.style.display !== 'block';
                currentSetUl.querySelectorAll('.nav-day-children').forEach(ul => ul.style.display = 'none');
                if (isOpening) currentDiffUl.style.display = 'block';
            };
            
            currentSetUl.appendChild(diffLi);
            currentSetUl.appendChild(currentDiffUl);
            
            qCounters[diffKey] = 1;
        }

        if(currentDiffUl) {
            const qLi = document.createElement('li');
            qLi.className = 'nav-child-item nav-slide-link';
            qLi.dataset.index = index;
            
            const qNumStr = String(qCounters[diffKey]).padStart(2, '0');
            qLi.innerHTML = `<span>${qNumStr}. ${topic}</span>`;
            
            qLi.onclick = (e) => { 
                e.stopPropagation();
                showSlide(index); 
            };
            currentDiffUl.appendChild(qLi);
            qCounters[diffKey]++;
        }
    });
}

function updateTracker(index) {
    const tracker = document.getElementById('question-tracker');
    tracker.innerHTML = '';
    const currentSlide = window.slides[index];
    if (!currentSlide) return;
    
    const currentSet = currentSlide.getAttribute('data-set');
    const currentDiff = currentSlide.getAttribute('data-difficulty');

    window.slides.forEach((s, idx) => {
        if (s.getAttribute('data-set') === currentSet && s.getAttribute('data-difficulty') === currentDiff) {
            const circle = document.createElement('div');
            circle.className = 'tracker-circle';
            circle.id = `tracker-${idx}`;
            
            const qId = s.getAttribute('data-question-id');
            if (window.studentAnswers[qId]) circle.classList.add('answered');
            if (idx === index) circle.classList.add('active');
            
            tracker.appendChild(circle);
        }
    });
}

function updateSetScoreDisplay(setName) {
    let sScore = 0;
    let sMax = 0;
    window.slides.forEach(s => {
        if(s.getAttribute('data-set') === setName) {
            const qId = s.getAttribute('data-question-id');
            const pts = parseInt(s.getAttribute('data-points')) || 0;
            sMax += pts;
            
            const ansData = window.studentAnswers[qId];
            if(ansData) {
                let userAns = typeof ansData === 'object' ? ansData.val : ansData;
                let isExp = typeof ansData === 'object' ? ansData.expired : false;
                if(String(userAns).toLowerCase() === String(s.getAttribute('data-answer')).toLowerCase() && !isExp) {
                    sScore += pts;
                }
            }
        }
    });
    document.getElementById('user-score').innerText = `${sScore} / ${sMax}`;
    return { sScore, sMax };
}

window.toggleNavigator = function(event) {
    if (event) event.stopPropagation();
    const nav = document.getElementById('slide-navigator');
    nav.classList.toggle('collapsed');
};

window.toggleBookMode = function() {
    document.body.classList.toggle('book-mode');
};

window.returnToDashboardFromCeleb = function() {
    document.getElementById('celebration-modal').style.display = 'none';
    document.getElementById('celeb-box').classList.remove('show');
    showDashboard();
};

function playNarration(slide) {
    window.speechSynthesis.cancel();
    
    const diff = slide.getAttribute('data-difficulty');
    const topic = slide.getAttribute('data-topic');
    
    let qNum = 1;
    const currentSet = slide.getAttribute('data-set');
    for(let i = 0; i < window.currentSlideIndex; i++) {
        if(window.slides[i].getAttribute('data-set') === currentSet && window.slides[i].getAttribute('data-difficulty') === diff) {
            qNum++;
        }
    }
    
    let narrationText = "";
    if (diff) narrationText += `${diff} Round, Question ${qNum}. `;
    if (topic) narrationText += `Topic: ${topic}. `;
    
    const qTextEl = slide.querySelector('.question-text');
    if (qTextEl) narrationText += `${qTextEl.innerText} `;
    
    const options = slide.querySelectorAll('.mcq-option');
    if(options.length > 0) {
        options.forEach(opt => {
            let text = opt.innerText.trim();
            text = text.replace(/^([A-D])\)\s*/i, '$1, ');
            narrationText += `${text}, `;
        });
    }
    
    narrationText += "Timer Starts Now!";

    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(narrationText);
        utterance.rate = 0.8; 
        utterance.onend = () => {
            if(window.currentUser && window.currentUser.role !== 'teacher' && !slide.hasAttribute('data-locked')) {
                startTimer(slide);
            }
        };
        window.speechSynthesis.speak(utterance);
    } else {
        setTimeout(() => { startTimer(slide); }, 3000);
    }
}

function startTimer(slide) {
    clearInterval(window.timerInterval);
    const timerUI = document.getElementById('timer-display');
    timerUI.style.display = 'block';
    
    let duration = 0;
    const type = slide.getAttribute('data-type');
    const diff = slide.getAttribute('data-difficulty');

    if (type === 'Theory') duration = 10;
    else if (diff === 'Easy') duration = 30;
    else if (diff === 'Average') duration = 45;
    else if (diff === 'Difficult') duration = 60;

    let timeLeft = duration;
    timerUI.innerText = formatTime(timeLeft);

    window.timerInterval = setInterval(() => {
        timeLeft--;
        timerUI.innerText = formatTime(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(window.timerInterval);
            const qId = slide.getAttribute('data-question-id');
            
            slide.setAttribute('data-timer-expired', 'true');
            const fb = document.getElementById(`feedback-${qId}`);
            fb.className = 'quiz-feedback feedback-wrong';
            fb.innerText = 'Time Expired! Please submit an answer to proceed (0 points will be awarded).';
            fb.style.display = 'block';
        }
    }, 1000);
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

window.showSlide = function(targetIndex) {
    if (window.currentUser && window.currentUser.role === 'student') {
        let firstUnanswered = window.slides.length;
        for (let i = 0; i < window.slides.length; i++) {
            const qId = window.slides[i].getAttribute('data-question-id');
            if (!window.studentAnswers[qId]) {
                firstUnanswered = i;
                break;
            }
        }
        
        if (targetIndex > firstUnanswered) {
            const currentUnansweredSlide = window.slides[firstUnanswered];
            const currentUnansweredSet = currentUnansweredSlide.getAttribute('data-set');
            const targetSet = window.slides[targetIndex].getAttribute('data-set');
            
            if (targetSet !== currentUnansweredSet) {
                alert(`Please finish answering all questions in ${currentUnansweredSet} first.`);
            } else {
                alert("Questions need to be answered strictly in the order of presentation. Please answer and submit the current question first.");
            }
            return; 
        }
    }

    clearInterval(window.timerInterval);
    document.getElementById('timer-display').style.display = 'none';

    window.slides.forEach(s => s.classList.remove('active'));
    window.currentSlideIndex = targetIndex;
    
    const currentSlide = window.slides[targetIndex];
    currentSlide.classList.add('active');
    
    const tracker = document.getElementById('question-tracker');
    const navControls = document.getElementById('nav-controls');
    currentSlide.appendChild(tracker);
    currentSlide.appendChild(navControls);

    updateTracker(targetIndex);
    updateSetScoreDisplay(currentSlide.getAttribute('data-set'));

    const navItems = document.querySelectorAll('.nav-slide-link');
    navItems.forEach((item) => {
        if (parseInt(item.dataset.index) === window.currentSlideIndex) {
            item.classList.add('active-nav');
            item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            const diffUl = item.closest('.nav-day-children');
            const setUl = item.closest('.nav-week-children');
            
            if (setUl) {
                document.querySelectorAll('.nav-week-children').forEach(ul => ul.style.display = 'none');
                setUl.style.display = 'block';
            }
            if (diffUl) {
                setUl.querySelectorAll('.nav-day-children').forEach(ul => ul.style.display = 'none');
                diffUl.style.display = 'block';
            }
        } else {
            item.classList.remove('active-nav');
        }
    });

    document.getElementById('btn-prev').disabled = targetIndex === 0;
    document.getElementById('btn-next').disabled = targetIndex === window.slides.length - 1;

    if (window.currentUser && window.currentUser.role !== 'teacher' && !currentSlide.hasAttribute('data-locked')) {
        if(targetIndex > 0) {
            setTimeout(() => playNarration(currentSlide), 3000);
        } else {
            playNarration(currentSlide);
        }
    } else {
        window.speechSynthesis.cancel();
    }
};

window.nextSlide = function() {
    if (window.currentSlideIndex < window.slides.length - 1) {
        window.showSlide(window.currentSlideIndex + 1);
    }
};
window.prevSlide = function() {
    if (window.currentSlideIndex > 0) {
        window.showSlide(window.currentSlideIndex - 1);
    }
};

window.selectOption = function(qId, val) {
    const slide = document.getElementById(`slide-${qId}`);
    if(slide.hasAttribute('data-locked')) return;

    slide.querySelectorAll('.mcq-option').forEach(el => {
        el.classList.remove('selected');
    });
    
    document.getElementById(`input-${qId}`).value = val;
    event.currentTarget.classList.add('selected');
};

window.submitAnswer = function(qId) {
    const slide = document.getElementById(`slide-${qId}`);
    const inputEl = document.getElementById(`input-${qId}`);
    const userVal = inputEl.value.trim();
    
    if(userVal === "") {
        alert("Please enter or select an answer before submitting.");
        return;
    }

    window.speechSynthesis.cancel();
    clearInterval(window.timerInterval);
    
    const isExpired = slide.hasAttribute('data-timer-expired');
    const correctVal = slide.getAttribute('data-answer');
    const points = parseInt(slide.getAttribute('data-points'));
    const isCorrect = String(userVal).toLowerCase() === String(correctVal).toLowerCase();

    slide.setAttribute('data-locked', 'true');
    inputEl.disabled = true;
    inputEl.style.backgroundColor = '#f3f4f6';
    inputEl.style.cursor = 'not-allowed';
    slide.querySelectorAll('.mcq-option').forEach(el => el.style.pointerEvents = 'none');
    document.getElementById(`submit-${qId}`).style.display = 'none';
    document.getElementById(`exp-${qId}`).style.display = 'inline-block';

    const fb = document.getElementById(`feedback-${qId}`);
    fb.style.display = 'block';

    if (isCorrect) {
        fb.className = 'quiz-feedback feedback-correct';
        if (isExpired) fb.innerText = `Correct! However, time expired (0 pts awarded).`;
        else fb.innerText = `Correct! Well done. (+${points} pts)`;
    } else {
        fb.className = 'quiz-feedback feedback-wrong';
        if (isExpired) fb.innerText = `Time Expired & Incorrect. (Expected: ${correctVal})`;
        else fb.innerText = `Incorrect. (Expected: ${correctVal})`;
    }

    window.studentAnswers[qId] = { val: userVal, expired: isExpired };
    
    updateTracker(window.currentSlideIndex);
    const currentSet = slide.getAttribute('data-set');
    const { sScore, sMax } = updateSetScoreDisplay(currentSet);
    
    saveToFirebase();

    let allAnswered = true;
    window.slides.forEach(s => {
        if(s.getAttribute('data-set') === currentSet) {
            const sqId = s.getAttribute('data-question-id');
            if(!window.studentAnswers[sqId]) allAnswered = false;
        }
    });

    if (allAnswered && !window.celebratedSets.has(currentSet) && window.currentUser && window.currentUser.role !== 'teacher') {
        window.celebratedSets.add(currentSet);
        setTimeout(() => {
            document.getElementById('celebration-modal').style.display = 'flex';
            setTimeout(() => document.getElementById('celeb-box').classList.add('show'), 50);
            document.getElementById('celeb-msg').innerText = `Thank you for finishing ${currentSet}. You got ${sScore} out of ${sMax} possible points!`;
        }, 1000);
    } else {
         setTimeout(() => {
             if(window.currentSlideIndex < window.slides.length - 1) {
                 window.showSlide(window.currentSlideIndex + 1);
             }
         }, 3000);
    }
};

async function saveToFirebase() {
    if (!db || window.currentUser.role === 'teacher') return;
    
    const cName = `results_${window.activityName}_${window.section}`;
    const u = window.currentUser;
    const docId = `${u.CN || '00'}-${u.Idnumber}-${u.LastName} ${u.FirstName}`;

    let qMap = {};
    window.slides.forEach(s => {
        qMap[s.getAttribute('data-question-id')] = {
            type: s.getAttribute('data-type'),
            topic: s.getAttribute('data-topic'),
            questionText: s.getAttribute('data-text')
        };
    });

    const payload = {
        status: "in_progress",
        answers: window.studentAnswers,
        questionsTaken: qMap,
        metadata: {
            timestamp: new Date().toISOString(),
            studentId: u.Idnumber,
            studentName: `${u.FirstName} ${u.LastName}`,
            CN: u.CN || "00",
            section: window.section
        }
    };

    try {
        await setDoc(doc(db, cName, docId), payload, { merge: true });
        await setDoc(doc(db, 'results_list', `${window.activityName}_${window.section}`), {
            activityName: window.activityName, section: window.section, lastUpdate: new Date().toISOString()
        }, { merge: true });
    } catch (e) {
        console.error("Save Error:", e);
    }
}

async function loadTeacherRoster() {
    if (!db) return;
    const cName = `results_${window.activityName}_${window.section}`;
    const rosterQuery = query(collection(db, cName), orderBy('metadata.studentName'));
    const rosterDiv = document.getElementById('roster-list');
    
    try {
        const snap = await getDocs(rosterQuery);
        if (snap.empty) { rosterDiv.innerHTML = "<p style='color:#8b949e; padding:10px;'>No student submissions found.</p>"; return; }
        
        snap.forEach(docSnap => {
            const data = docSnap.data();
            const div = document.createElement('div');
            div.className = 'roster-item';
            div.innerText = data.metadata.studentName;
            div.onclick = () => previewStudent(data, div);
            rosterDiv.appendChild(div);
        });
    } catch(e) { console.error(e); }
    initEnvironment();
}

function previewStudent(data, rowDiv) {
    document.querySelectorAll('.roster-item').forEach(el => el.classList.remove('active'));
    rowDiv.classList.add('active');
    
    window.studentAnswers = data.answers || {};
    
    window.slides.forEach(slide => {
        const qId = slide.getAttribute('data-question-id');
        const inputEl = document.getElementById(`input-${qId}`);
        const correctVal = slide.getAttribute('data-answer');
        const storedAnsData = window.studentAnswers[qId];

        if (storedAnsData !== undefined) {
            let userAns = typeof storedAnsData === 'object' ? storedAnsData.val : storedAnsData;
            let isExp = typeof storedAnsData === 'object' ? storedAnsData.expired : false;
            
            inputEl.value = userAns;
            slide.setAttribute('data-locked', 'true');
            inputEl.disabled = true;
            
            if(slide.getAttribute('data-type') === 'Theory') {
                slide.querySelectorAll('.mcq-option').forEach(el => {
                    el.style.pointerEvents = 'none';
                    let optText = el.innerText.trim();
                    optText = optText.replace(/^([A-D])\)\s*/i, '');
                    if(optText === userAns || el.innerText.startsWith(userAns + ')')) el.classList.add('selected');
                });
            }
            
            document.getElementById(`submit-${qId}`).style.display = 'none';
            document.getElementById(`exp-${qId}`).style.display = 'inline-block';
            
            const fb = document.getElementById(`feedback-${qId}`);
            fb.style.display = 'block';
            
            if(String(userAns).toLowerCase() === String(correctVal).toLowerCase()) {
                fb.className = 'quiz-feedback feedback-correct';
                if (isExp) fb.innerText = `Student answered correctly, but time expired (0 pts).`;
                else fb.innerText = `Student answered correctly: ${userAns}`;
            } else {
                fb.className = 'quiz-feedback feedback-wrong';
                if (isExp) fb.innerText = `Student answered: ${userAns} (Time Expired / Expected: ${correctVal})`;
                else fb.innerText = `Student answered: ${userAns} (Expected: ${correctVal})`;
            }
        } else {
            slide.removeAttribute('data-locked');
            inputEl.value = '';
            slide.querySelectorAll('.mcq-option').forEach(el => el.classList.remove('selected'));
            document.getElementById(`submit-${qId}`).style.display = 'inline-block';
            document.getElementById(`exp-${qId}`).style.display = 'none';
            document.getElementById(`feedback-${qId}`).style.display = 'none';
        }
    });
    showSlide(0);
}
</script>
