export const setAQuestions = `
<div class="slide" id="slide-sAeAq01" data-question-id="sAeAq01" data-type="Theory" data-set="Set A" data-difficulty="Easy" data-topic="Introduction to Accounting" data-answer="B" data-points="3">
    <div class="quiz-container">
        <div class="topic-text">Topic: Introduction to Accounting</div>
        <div class="question-text">What is often referred to as the language of business?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="mcq-option" onclick="selectOption('sAeAq01', 'A')">A) Economics</li>
            <li class="mcq-option" onclick="selectOption('sAeAq01', 'B')">B) Accounting</li>
            <li class="mcq-option" onclick="selectOption('sAeAq01', 'C')">C) Management</li>
            <li class="mcq-option" onclick="selectOption('sAeAq01', 'D')">D) Marketing</li>
        </ul>
        <input type="hidden" id="input-sAeAq01" value="">
        <button class="submit-btn" id="submit-sAeAq01" onclick="submitAnswer('sAeAq01')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAeAq01" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAeAq01"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Introduction to Accounting</h2>
        <div class="book-content-question">What is often referred to as the language of business?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="book-mcq-option" onclick="selectOption('sAeAq01', 'A')">A) Economics</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq01', 'B')">B) Accounting</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq01', 'C')">C) Management</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq01', 'D')">D) Marketing</li>
        </ul>
        <p class="correct-line"><strong>Correct Answer: B) Accounting</strong></p>

        <h3>The Conceptual Framework of the "Language"</h3>
    <p>Accounting is universally recognized as the <strong>"language of business"</strong> because it serves as the primary system for communicating financial information about an organization to its stakeholders. Just as spoken languages use structured grammar and vocabulary to share ideas, accounting uses a standardized set of rules (such as GAAP or IFRS) and terms (like assets, liabilities, and equity) to tell a company's financial story.[1, 2] This system translates the daily transactions of a business into a narrative that can be understood and compared by investors, creditors, and managers globally.[1, 2]</p>
    
    <p>The core process of this "language" involves four critical stages:
    <ul>
        <li><strong>Identification:</strong> Selecting economic events that are relevant to the business, such as sales or equipment purchases.[3]</li>
        <li><strong>Measurement:</strong> Quantifying these events in monetary units to create a common denominator for reporting.[3, 4]</li>
        <li><strong>Recording:</strong> Systematically logging transactions in chronological order to create a permanent audit trail.[3, 5]</li>
        <li><strong>Communication:</strong> Preparing financial statements that summarize performance and position for decision-makers.[1, 4]</li>
    </ul></p>

    <h3>Historical Context and Evolution</h3>
    <p>Accounting is far more than a statutory requirement or an administrative burden; it is the narrative of an organization's journey through the economic landscape. This "language" has evolved alongside civilization for millennia.[3] As early as 4000 B.C., practitioners in Babylonia and Egypt used clay tablets and papyrus to track taxes and wages.[3] The modern system we use today, <strong>Double-Entry Bookkeeping</strong>, was formalized in 1494 by Luca Pacioli in Venice. This system ensures mathematical balance and integrity by requiring that every transaction has a dual effect—keeping the fundamental equation ($Assets = Liabilities + Equity$) in perfect equilibrium.[5, 6]</p>

    <h3>Analysis of Alternative Options</h3>
    <p>To understand why <strong>Accounting</strong> is the unique "language" in this context, it is helpful to examine the roles of the other fields and how they relate to the financial narrative:</p>

    <p><strong>A) Economics: The Theoretical Foundation</strong><br>
    Economics is the study of how society allocates scarce resources to meet unlimited wants. While accounting and economics are closely related, they have different focuses. Economics provides the <em>theoretical framework</em> for understanding markets and resource trends, whereas accounting provides the <em>measurement tools</em> to record the results of those trends within a specific firm. Economics is often forward-looking and external, while accounting is primarily historical and internal. Therefore, while economics explains the "why" of the market, accounting speaks the "what" of the business's actual performance.</p>

    <p><strong>C) Management: The Strategic Navigator</strong><br>
    Management involves supervising people and coordinating resources to achieve organizational goals. Management is a user of the "language" rather than the language itself. Managers rely on accounting data—specifically managerial accounting—to make informed decisions about budgets, production levels, and expansion. While management directs the ship, accounting provides the "dashboard" of metrics that tell the manager if the ship is on course.[7]</p>

    <p><strong>D) Marketing: The Brand Communicator</strong><br>
    Marketing is the process of connecting customers with products through advertising, promotion, and creative storytelling. Its focus is on generating external attention and driving revenue. While marketing speaks the "language of the customer" to build brand loyalty, it does not provide the systematic financial reporting required to assess the business's overall health and stability. Accounting records the <em>results</em> of marketing efforts by documenting the sales and expenses they generate.</p>

    <h3>Conclusion: Why Accounting is Indispensable</h3>
    <p>By mastering the "language of business," individuals and organizations gain the ability to make better internal decisions, foster clearer external communications, and build a foundation of trust with stakeholders. Whether it is an investor seeking to build wealth, a manager trying to optimize production, or a regulator ensuring market fairness, all rely on the same structured vocabulary and syntax provided by accounting.[1, 2] As global commerce continues to integrate and complexify, the role of accounting as the universal medium of economic communication will only become more vital, ensuring that every transaction finds its proper place and every business story is told with clarity, integrity, and insight.</p>

    </div>
</div>

<div class="slide" id="slide-sAeAq02" data-question-id="sAeAq02" data-type="Theory" data-set="Set A" data-difficulty="Easy" data-topic="Branches of Accounting" data-answer="C" data-points="3">
    <div class="quiz-container">
        <div class="topic-text">Topic: Branches of Accounting</div>
        <div class="question-text">Which branch of accounting primarily deals with the preparation of general-purpose financial statements for external users?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="mcq-option" onclick="selectOption('sAeAq02', 'A')">A) Management Accounting</li>
            <li class="mcq-option" onclick="selectOption('sAeAq02', 'B')">B) Tax Accounting</li>
            <li class="mcq-option" onclick="selectOption('sAeAq02', 'C')">C) Financial Accounting</li>
            <li class="mcq-option" onclick="selectOption('sAeAq02', 'D')">D) Cost Accounting</li>
        </ul>
        <input type="hidden" id="input-sAeAq02" value="">
        <button class="submit-btn" id="submit-sAeAq02" onclick="submitAnswer('sAeAq02')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAeAq02" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAeAq02"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Branches of Accounting</h2>
        <div class="book-content-question">Which branch of accounting primarily deals with the preparation of general-purpose financial statements for external users?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="book-mcq-option" onclick="selectOption('sAeAq02', 'A')">A) Management Accounting</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq02', 'B')">B) Tax Accounting</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq02', 'C')">C) Financial Accounting</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq02', 'D')">D) Cost Accounting</li>
        </ul>

        <p class="correct-line"><strong>Correct Answer: C) Financial Accounting</strong></p>
        <p>Financial Accounting focuses on recording, summarizing, and reporting the myriad of transactions resulting from business operations over a period of time for the benefit of external users like investors and creditors.</p>
            <h3>Core Definition: Financial Accounting</h3>
    <p>Financial accounting is the branch specifically designed to record, summarize, and report business transactions for <strong>external users</strong>—individuals or entities outside the organization's daily management.[1, 2] Its primary output is a set of "general-purpose financial statements," which include the balance sheet, income statement, and statement of cash flows.[3, 4] These statements provide a "true and fair view" of the entire company’s economic health at a high level, rather than focusing on small, internal departments.[1, 5]</p>
    
    <p>To ensure this information is reliable and comparable across different industries, financial accountants must follow strict regulatory frameworks known as <strong>Generally Accepted Accounting Principles (GAAP)</strong> or <strong>International Financial Reporting Standards (IFRS)</strong>.[1, 3] This standardization allows a bank in London to accurately compare the financial performance of a corporation in New York with one in Tokyo.[3, 4]</p>

    <h3>Comparison and Analysis of Alternative Branches</h3>
    <p>While all branches of accounting use the same underlying transaction data, they serve different masters and follow different rules. Below is an analysis of why the other options are not the primary branch for general-purpose external reporting:</p>

    <p><strong>A) Management Accounting: The Internal Decision Engine</strong><br>
    Management (or Managerial) accounting is the opposite of financial accounting in terms of audience. It is designed exclusively for <strong>internal users</strong>, such as department heads and executives.[1, 6] 
    <ul>
        <li><strong>Why it's incorrect:</strong> Managerial reports are confidential and highly specific—for example, a report on the efficiency of a single assembly line.[1] Because these are for internal eyes only, they are not bound by GAAP and do not follow the "general-purpose" format required for the public or investors.[1, 7]</li>
    </ul></p>

    <p><strong>B) Tax Accounting: The Language of Compliance</strong><br>
    Tax accounting focuses on presenting a company’s financial story through the lens of government tax codes (such as the Internal Revenue Code in the U.S.).[1, 2]
    <ul>
        <li><strong>Why it's incorrect:</strong> The objective of tax accounting is compliance and the legal minimization of tax liability.[1, 7] This often results in a different "version" of profit than what is shown to investors. While financial accounting aims to show a company's true performance to attract investors, tax accounting focuses on following the specific (and often complex) rules set by the government to determine what is owed to the state.[1]</li>
    </ul></p>

    <p><strong>D) Cost Accounting: The Granular Efficiency Tool</strong><br>
    Cost accounting is a specialized subset of managerial accounting that focuses on identifying and controlling the costs associated with producing specific products or services.[3, 6]
    <ul>
        <li><strong>Why it's incorrect:</strong> This branch deals with internal cost-benefit analyses, such as determining if it is cheaper to manufacture a part in-house or buy it from a supplier.[1, 3] While the data from cost accounting eventually feeds into the inventory values on financial statements, the branch itself does not produce the "general-purpose" reports used by external creditors or the public.[3, 6]</li>
    </ul></p>

    <h3>Summary of Differences</h3>
    <p>The distinction between these branches is essentially defined by <strong>who</strong> the information is for and <strong>how</strong> it must be structured:</p>
    <table>
        <thead>
            <tr>
                <th>Feature</th>
                <th>Financial Accounting (Correct)</th>
                <th>Management / Cost Accounting</th>
                <th>Tax Accounting</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Primary User</td>
                <td>External (Investors, Creditors)</td>
                <td>Internal (Managers, Employees)</td>
                <td>Government (Tax Authorities)</td>
            </tr>
            <tr>
                <td>Focus</td>
                <td>The Company as a Whole</td>
                <td>Specific Departments / Products</td>
                <td>Taxable Income / Compliance</td>
            </tr>
            <tr>
                <td>Ruleset</td>
                <td>GAAP / IFRS (Mandatory)</td>
                <td>None (Business-specific needs)</td>
                <td>Internal Revenue Code</td>
            </tr>
            <tr>
                <td>Time Orientation</td>
                <td>Historical (What happened?)</td>
                <td>Future-oriented (What will happen?)</td>
                <td>Periodic (Tax year filings)</td>
            </tr>
        </tbody>
    </table>

    <h3>Conclusion: The Role of the External Narrative</h3>
    <p>Financial accounting remains the cornerstone of the global economy because it provides the transparency needed for external parties to trust a business. Without this standardized branch of the "language of business," potential investors would have no way to verify the claims of a company, and banks would be unable to assess the risk of lending capital.[1, 5] It is the only branch dedicated to creating a holistic, regulated, and public record of an organization's economic journey.[1]</p>
</div>
    </div>
</div>

<div class="slide" id="slide-sAeAq03" data-question-id="sAeAq03" data-type="Theory" data-set="Set A" data-difficulty="Easy" data-topic="Users of Accounting Information" data-answer="D" data-points="3">
    <div class="quiz-container">
        <div class="topic-text">Topic: Users of Accounting Information</div>
        <div class="question-text">Who among the following is considered an internal user of accounting information?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="mcq-option" onclick="selectOption('sAeAq03', 'A')">A) Potential Investors</li>
            <li class="mcq-option" onclick="selectOption('sAeAq03', 'B')">B) Bank Creditors</li>
            <li class="mcq-option" onclick="selectOption('sAeAq03', 'C')">C) Government Regulators</li>
            <li class="mcq-option" onclick="selectOption('sAeAq03', 'D')">D) Company Managers</li>
        </ul>
        <input type="hidden" id="input-sAeAq03" value="">
        <button class="submit-btn" id="submit-sAeAq03" onclick="submitAnswer('sAeAq03')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAeAq03" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAeAq03"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Users of Accounting Information</h2>
        <div class="book-content-question">Who among the following is considered an internal user of accounting information?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="book-mcq-option" onclick="selectOption('sAeAq03', 'A')">A) Potential Investors</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq03', 'B')">B) Bank Creditors</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq03', 'C')">C) Government Regulators</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq03', 'D')">D) Company Managers</li>
        </ul>
        <p class="correct-line"><strong>Correct Answer: D</strong></p>
        <p>Company managers are internal users because they are directly involved in managing and operating the business. Investors, creditors, and the government are external users.</p>
        <h3>Defining the Two Groups of Users</h3>
    <p>The primary objective of accounting is to provide useful information for decision-making to various stakeholders.[1, 2] These stakeholders are generally divided into two broad categories based on their relationship to the business entity:</p>
    <ul>
        <li><strong>Internal Users:</strong> Individuals within the organization who are directly involved in planning, organizing, and running the business.[3, 1]</li>
        <li><strong>External Users:</strong> Individuals or entities outside the business who have a current or potential financial interest but do not participate in daily operations.[3]</li>
    </ul>

    <h3>Correct Option Analysis: Why Managers are "Internal"</h3>
    <p><strong>D) Company Managers:</strong> Managers are the quintessential internal users. They require granular, often confidential information to navigate the firm’s daily and long-term operations.[3, 1]
    <ul>
        <li><strong>Decision-Making Needs:</strong> Production managers use accounting data to determine if the firm can afford to replace machinery; marketing managers use it to set product prices; and HR departments use profitability data to negotiate employee salaries and benefits.[3]</li>
        <li><strong>Tool:</strong> They primarily rely on <em>Managerial Accounting</em>, which provides forward-looking reports, budgets, and internal cost analyses not available to the public.[3, 1]</li>
    </ul></p>

    <h3>Relationship of "External" Users to the Business</h3>
    <p>The other three options represent <strong>external users</strong>. While they rely on the same accounting "language," they are outside the company's internal structure and typically only have access to <em>Financial Accounting</em> reports (published financial statements).</p>

    <p><strong>A) Potential Investors:</strong>
    Investors are external parties who are considering putting their capital into the business.[3]
    <ul>
        <li><strong>Why they are External:</strong> They do not have access to the company’s internal day-to-day records or managerial meetings. They must rely on public financial statements to assess profitability and decide whether to buy, hold, or sell shares.[4, 3]</li>
        <li><strong>Focus:</strong> They evaluate "Is this company worth my money?" and "What is the return on my investment (ROI)?"[4, 5]</li>
    </ul></p>

    <p><strong>B) Bank Creditors:</strong>
    Lenders and finance companies are external entities that provide debt capital to a business.[3]
    <ul>
        <li><strong>Why they are External:</strong> A bank is a separate legal and economic entity from the borrower. It reviews financial statements from the outside to evaluate a company's "creditworthiness" and ability to fulfill interest and principal payments.[4, 3]</li>
        <li><strong>Focus:</strong> They prioritize "Liquidity" (Can they pay short-term bills?) and "Solvency" (Can they survive long-term?).[4, 5]</li>
    </ul></p>

    <p><strong>C) Government Regulators:</strong>
    This group includes agencies like the Internal Revenue Service (IRS), the Securities and Exchange Commission (SEC), and local taxing authorities.[3, 5]
    <ul>
        <li><strong>Why they are External:</strong> They represent the "public interest" or state authority. They monitor the company from the outside to ensure it is paying its fair share of taxes and following transparency and consumer protection laws.[4, 5]</li>
        <li><strong>Focus:</strong> They use <em>Tax Accounting</em> to ensure compliance with the tax code and regulatory frameworks like the Sarbanes-Oxley Act.[3, 5]</li>
    </ul></p>

    <h3>Summary Comparison Table</h3>
    <table>
        <thead>
            <tr>
                <th>User Group</th>
                <th>Classification</th>
                <th>Primary Information Source</th>
                <th>Key Objective</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Managers / Executives</td>
                <td><strong>Internal</strong></td>
                <td>Internal Management Reports</td>
                <td>Operational planning and control</td>
            </tr>
            <tr>
                <td>Investors</td>
                <td>External</td>
                <td>Financial Statements (Public)</td>
                <td>Investment and growth analysis</td>
            </tr>
            <tr>
                <td>Creditors / Banks</td>
                <td>External</td>
                <td>Financial Statements (Audit)</td>
                <td>Assessing risk and repayment ability</td>
            </tr>
            <tr>
                <td>Regulators / IRS</td>
                <td>External</td>
                <td>Tax Returns / SEC Filings</td>
                <td>Compliance and legal oversight</td>
            </tr>
        </tbody>
    </table>

    <h3>Conclusion: The Accountant as Information Provider</h3>
    <p>The role of accounting as an "information system" is to bridge the gap between these groups.[6] By providing a "true and fair view" of economic events, accounting ensures that internal managers can steer the company effectively while external users have the reliable data they need to trust the markets and allocate resources efficiently.[4, 7]</p>
    </div>
</div>

<div class="slide" id="slide-sAeAq04" data-question-id="sAeAq04" data-type="Theory" data-set="Set A" data-difficulty="Easy" data-topic="Forms of Business Organizations" data-answer="C" data-points="3">
    <div class="quiz-container">
        <div class="topic-text">Topic: Forms of Business Organizations</div>
        <div class="question-text">What type of business organization is owned by only one person who has unlimited liability?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="mcq-option" onclick="selectOption('sAeAq04', 'A')">A) Corporation</li>
            <li class="mcq-option" onclick="selectOption('sAeAq04', 'B')">B) Partnership</li>
            <li class="mcq-option" onclick="selectOption('sAeAq04', 'C')">C) Sole Proprietorship</li>
            <li class="mcq-option" onclick="selectOption('sAeAq04', 'D')">D) Cooperative</li>
        </ul>
        <input type="hidden" id="input-sAeAq04" value="">
        <button class="submit-btn" id="submit-sAeAq04" onclick="submitAnswer('sAeAq04')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAeAq04" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAeAq04"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Forms of Business Organizations</h2>
        <div class="book-content-question">What type of business organization is owned by only one person who has unlimited liability?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="book-mcq-option" onclick="selectOption('sAeAq04', 'A')">A) Corporation</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq04', 'B')">B) Partnership</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq04', 'C')">C) Sole Proprietorship</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq04', 'D')">D) Cooperative</li>
        </ul>
        <p class="correct-line"><strong>Correct Answer: C</strong></p>
        <p>A sole proprietorship is the simplest form of business, owned and run by one individual who takes all the profits but also assumes unlimited liability for all business debts.</p>
        <h3>Core Definition: The Sole Proprietorship</h3>
    <p>A <strong>sole proprietorship</strong> is the simplest and most common form of business organization. It is an unincorporated business owned and operated by a single individual. In this structure, there is no legal distinction between the owner and the business entity—the owner <em>is</em> the business. This form is typically chosen by small retail stores, freelancers, and local service providers because it is easy and inexpensive to establish, requiring minimal paperwork and no formal state registration in many jurisdictions.</p>

    <h3>The Concept of Unlimited Liability</h3>
    <p>The defining legal characteristic of a sole proprietorship is <strong>unlimited liability</strong>. Because the owner and the business are one and the same, the owner is personally responsible for all business debts and legal obligations.
    <ul>
        <li><strong>Risk:</strong> If the business cannot pay its creditors or faces a legal judgment, the owner’s personal assets—such as their home, car, and personal bank accounts—can be seized to satisfy those debts.</li>
        <li><strong>Continuity:</strong> Sole proprietorships lack "perpetual existence." If the owner dies or decides to quit, the business legally ceases to exist.</li>
    </ul></p>

    <h3>Analysis of Alternative Options</h3>
    <p>To understand why the other options are incorrect, we must look at how they handle ownership and liability:</p>

    <p><strong>A) Corporation: The Separate Legal Entity</strong><br>
    A corporation is a complex legal entity that is entirely separate from its owners (stockholders).
    <ul>
        <li><strong>Why it's incorrect:</strong> Corporations offer <strong>limited liability</strong>, meaning shareholders generally only risk the amount they have invested in their stock; their personal assets are shielded from the company's debts. Furthermore, corporations are owned by any number of shareholders, not necessarily a single person.</li>
    </ul></p>

    <p><strong>B) Partnership: The Shared Journey</strong><br>
    A partnership is a business owned jointly by <strong>two or more</strong> people who agree to share profits and responsibilities.
    <ul>
        <li><strong>Why it's incorrect:</strong> While general partners often face unlimited liability (just like sole proprietors), the fundamental requirement for a partnership is a minimum of two owners. The question specifically asks for a structure owned by <em>only one</em> person.</li>
    </ul></p>

    <p><strong>D) Cooperative: The Mutual Benefit Model</strong><br>
    A cooperative is a group-owned organization operated for the mutual benefit of its members or users.
    <ul>
        <li><strong>Why it's incorrect:</strong> Cooperatives are owned by their members (who can number in the thousands) and follow a democratic "one member, one vote" system. This collective ownership model is the opposite of the single-person control found in a sole proprietorship. Additionally, most incorporated cooperatives provide limited liability to their members.</li>
    </ul></p>

    <h3>Comparative Summary</h3>
    <table>
        <thead>
            <tr>
                <th>Business Form</th>
                <th>Number of Owners</th>
                <th>Liability Level</th>
                <th>Legal Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Sole Proprietorship</strong></td>
                <td><strong>1</strong></td>
                <td><strong>Unlimited</strong></td>
                <td>Not a separate legal entity</td>
            </tr>
            <tr>
                <td>Partnership</td>
                <td>2 or more</td>
                <td>Unlimited (General Partners)</td>
                <td>Not a separate legal entity</td>
            </tr>
            <tr>
                <td>Corporation</td>
                <td>1 or more (Shareholders)</td>
                <td>Limited</td>
                <td>Separate legal entity</td>
            </tr>
            <tr>
                <td>Cooperative</td>
                <td>Group of Members</td>
                <td>Limited (usually)</td>
                <td>Member-owned entity</td>
            </tr>
        </tbody>
    </table>

    <h3>Conclusion: The Trade-off of Control</h3>
    <p>Entrepreneurs often choose a sole proprietorship for the complete control it offers—the owner makes every decision and keeps every dollar of profit. However, the "price" of this total control is the high personal risk associated with unlimited liability. As businesses grow and take on more financial obligations, many eventually transition into limited liability structures, like corporations, to protect their owners' personal wealth.</p>
    </div>
</div>

<div class="slide" id="slide-sAeAq05" data-question-id="sAeAq05" data-type="Theory" data-set="Set A" data-difficulty="Easy" data-topic="Accounting Concepts and Principles" data-answer="A" data-points="3">
    <div class="quiz-container">
        <div class="topic-text">Topic: Accounting Concepts and Principles</div>
        <div class="question-text">Which accounting principle assumes that a business will continue to operate indefinitely into the foreseeable future?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="mcq-option" onclick="selectOption('sAeAq05', 'A')">A) Going Concern Principle</li>
            <li class="mcq-option" onclick="selectOption('sAeAq05', 'B')">B) Business Entity Principle</li>
            <li class="mcq-option" onclick="selectOption('sAeAq05', 'C')">C) Periodicity Principle</li>
            <li class="mcq-option" onclick="selectOption('sAeAq05', 'D')">D) Objectivity Principle</li>
        </ul>
        <input type="hidden" id="input-sAeAq05" value="">
        <button class="submit-btn" id="submit-sAeAq05" onclick="submitAnswer('sAeAq05')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAeAq05" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAeAq05"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Accounting Concepts and Principles</h2>
        <div class="book-content-question">Which accounting principle assumes that a business will continue to operate indefinitely into the foreseeable future?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="book-mcq-option" onclick="selectOption('sAeAq05', 'A')">A) Going Concern Principle</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq05', 'B')">B) Business Entity Principle</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq05', 'C')">C) Periodicity Principle</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq05', 'D')">D) Objectivity Principle</li>
        </ul>
        <p class="correct-line"><strong>Correct Answer: A</strong></p>
        <p>The Going Concern Principle assumes the business will remain in operation long enough to carry out its existing objectives and commitments, justifying the deferral of certain expenses.</p>
        <h3>Core Definition: The Going Concern (Continuity) Assumption</h3>
    <p>The <strong>Going Concern Principle</strong> (also known as the <em>continuity assumption</em>) is the foundational belief that a business entity will continue to operate indefinitely, or at least long enough to carry out its existing objectives and fulfill its legal commitments.[1, 2] In practical terms, this usually means the accountant assumes the business will survive for at least the next twelve months unless there is significant evidence to the contrary.[1, 3]</p>
    
    <p>This assumption is vital because it dictates how assets are valued on the balance sheet:
    <ul>
        <li><strong>Historical Cost vs. Liquidation Value:</strong> Because we assume the business will stay open, assets are generally recorded at their original cost (historical cost) rather than what they would be worth if the company were forced to have a "fire sale" or liquidation today.[1, 4]</li>
        <li><strong>Long-term Allocation:</strong> It allows accountants to spread the cost of a building or machine over its useful life (depreciation) rather than recording the entire expense immediately.[2, 4]</li>
    </ul></p>

    <h3>Analysis of Alternative Principles (The Incorrect Options)</h3>
    <p>While the other options are critical "grammar rules" of the accounting language, they govern different aspects of financial reporting:</p>

    <p><strong>B) Business Entity Principle: The Separation of Identity</strong><br>
    Also called the <em>Economic Entity</em> assumption, this rule states that the business is a distinct "juridical person" separate from its owners, managers, and employees.[1, 2]
    <ul>
        <li><strong>Why it's incorrect:</strong> This principle is about <strong>identity</strong>, not <strong>longevity</strong>. It ensures that a small business owner’s personal mortgage or grocery bills are not mixed with the company’s operating expenses.[1, 3] It defines *what* is being measured, while Going Concern defines *how long* we expect to measure it.</li>
    </ul></p>

    <p><strong>C) Periodicity Principle: The subdivision of Time</strong><br>
    Also known as the <em>Time Period</em> assumption, this principle recognizes that even though a business has an indefinite life (per Going Concern), stakeholders need updates more frequently than "at the end of the company's life."[1, 2]
    <ul>
        <li><strong>Why it's incorrect:</strong> Periodicity deals with the **frequency** of reporting. It requires the indefinite life of the business to be divided into equal artificial time intervals—such as months, quarters, or years—so that performance can be measured regularly.[2, 4] It is the *reaction* to an indefinite life, not the *assumption* of it.</li>
    </ul></p>

    <p><strong>D) Objectivity Principle: The Mandate for Evidence</strong><br>
    The Objectivity (or <em>Reliability</em>) principle requires that all accounting data be supported by verifiable, neutral evidence rather than the subjective opinions of management.[5, 6]
    <ul>
        <li><strong>Why it's incorrect:</strong> This principle ensures that the financial "words" being used are <strong>honest and unbiased</strong>.[6] For example, an asset's value is based on a purchase receipt (objective) rather than what the owner "feels" it is worth. It governs the <em>quality</em> of the information, not the <em>timeline</em> of the business.</li>
    </ul></p>

    <h3>Summary Comparison Table</h3>
    <table>
        <thead>
            <tr>
                <th>Accounting Principle</th>
                <th>Core Question Answered</th>
                <th>Focus Area</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Going Concern</strong></td>
                <td><strong>How long will the business last?</strong></td>
                <td><strong>Indefinite Life / Continuity</strong></td>
            </tr>
            <tr>
                <td>Business Entity</td>
                <td>Whose transactions are these?</td>
                <td>Identity / Separation</td>
            </tr>
            <tr>
                <td>Periodicity</td>
                <td>When should we report results?</td>
                <td>Time Intervals / Regularity</td>
            </tr>
            <tr>
                <td>Objectivity</td>
                <td>Can this information be proven?</td>
                <td>Evidence / Reliability</td>
            </tr>
        </tbody>
    </table>

    <h3>Conclusion: The "Ripple Effect" of Continuity</h3>
    <p>Without the Going Concern assumption, the entire structure of modern financial reporting would collapse. If accountants had to assume a company might close tomorrow, they could not classify assets as "long-term," they could not use accrual-basis accounting, and they would have to record every item at its immediate "break-up" value.[3, 4] Thus, Going Concern provides the necessary stability for all other accounting principles to function effectively.[3]</p>
    </div>
</div>

<div class="slide" id="slide-sAeAq06" data-question-id="sAeAq06" data-type="Theory" data-set="Set A" data-difficulty="Easy" data-topic="The Accounting Equation" data-answer="B" data-points="3">
    <div class="quiz-container">
        <div class="topic-text">Topic: The Accounting Equation</div>
        <div class="question-text">Which of the following represents the correct and fundamental accounting equation?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="mcq-option" onclick="selectOption('sAeAq06', 'A')">A) Assets = Liabilities - Equity</li>
            <li class="mcq-option" onclick="selectOption('sAeAq06', 'B')">B) Assets = Liabilities + Equity</li>
            <li class="mcq-option" onclick="selectOption('sAeAq06', 'C')">C) Liabilities = Assets + Equity</li>
            <li class="mcq-option" onclick="selectOption('sAeAq06', 'D')">D) Equity = Assets + Liabilities</li>
        </ul>
        <input type="hidden" id="input-sAeAq06" value="">
        <button class="submit-btn" id="submit-sAeAq06" onclick="submitAnswer('sAeAq06')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAeAq06" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAeAq06"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: The Accounting Equation</h2>
        <div class="book-content-question">Which of the following represents the correct and fundamental accounting equation?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="book-mcq-option" onclick="selectOption('sAeAq06', 'A')">A) Assets = Liabilities - Equity</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq06', 'B')">B) Assets = Liabilities + Equity</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq06', 'C')">C) Liabilities = Assets + Equity</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq06', 'D')">D) Equity = Assets + Liabilities</li>
        </ul>
        <p class="correct-line"><strong>Correct Answer: B</strong></p>
        <p>The fundamental accounting equation states that everything a business owns (Assets) is financed either by borrowing money (Liabilities) or by the owners' investments (Equity).</p>
        <h3>The Conceptual Logic: Resources vs. Claims</h3>
    <p>The fundamental accounting equation is the bedrock of all modern financial reporting. It represents a simple but profound economic truth: every resource a company owns was paid for by someone.[1, 2] 
    <ul>
        <li><strong>The Left Side (Assets):</strong> Represents the resources or "economic values" controlled by the business, such as cash, inventory, land, or machinery.[2, 3]</li>
        <li><strong>The Right Side (Liabilities + Equity):</strong> Represents the <em>claims</em> against those resources. These claims come from two sources: creditors (Liabilities) and owners (Equity).[2, 4]</li>
    </ul></p>
    <p>Because every asset is financed either through debt or through the owner's own funds and retained profits, the two sides must <strong>always</strong> be in perfect equilibrium.[1, 5] This balance is what gives the "Balance Sheet" its name.[1, 6]</p>

    <h3>The Three Pillars Defined</h3>
    <ol>
        <li><strong>Assets:</strong> Resources with future economic value controlled by the entity (e.g., cash, equipment, accounts receivable).[2, 7]</li>
        <li><strong>Liabilities:</strong> The company's financial obligations or "owings" to external parties, such as bank loans or unpaid supplier bills.[2, 8]</li>
        <li><strong>Equity:</strong> The "residual interest" or the owner's claim on assets after all liabilities have been settled. It is essentially the "net worth" of the business.[1, 3]</li>
    </ol>

    <h3>Analysis of Wrong Answers: Mathematical & Logical Errors</h3>
    <p>To understand why Option B is the only correct choice, we must examine the logical "impossibilities" presented by the other options:</p>

    <p><strong>A) $Assets = Liabilities - Equity$ (The Inverse Error)</strong><br>
    This formula suggests that as an owner invests more capital into the business (Equity increases), the total Assets would <em>decrease</em>. 
    <ul>
        <li><strong>Relationship:</strong> In reality, Equity and Assets typically move in the same direction. If an owner invests $\$10,000$ in cash, Assets increase by $\$10,000$ and Equity increases by $\$10,000$. Subtracting Equity from Liabilities would result in a nonsensical value that fails to represent the actual resources held by the firm.[1, 5]</li>
    </ul></p>

    <p><strong>C) $Liabilities = Assets + Equity$ (The Cumulative Debt Error)</strong><br>
    This formula implies that a company's total debt (Liabilities) is equal to everything it owns <em>plus</em> everything the owners invested.
    <ul>
        <li><strong>Relationship:</strong> This is a mathematical impossibility. A company cannot owe more than the sum of its total value and its owner's stake unless it is in a state of extreme negative equity. The correct transposition of the formula to solve for Liabilities is $Liabilities = Assets - Equity$.[8]</li>
    </ul></p>

    <p><strong>D) $Equity = Assets + Liabilities$ (The Additive Liability Error)</strong><br>
    This formula suggests that an owner’s value in the business is found by <em>adding</em> the company’s debts to its assets.
    <ul>
        <li><strong>Relationship:</strong> This is the most dangerous misconception. If a company has $\$100,000$ in assets and $\$40,000$ in debt, the owner's actual value is only $\$60,000$ ($Assets - Liabilities$). Option D would incorrectly suggest the owner's value is $\$140,000$, failing to recognize that debt <em>reduces</em> the owner's residual claim on the company's assets.[5, 3]</li>
    </ul></p>

    <h3>The Expanded Equation and the Trading Cycle</h3>
    <p>In practice, the equation is often expanded to show how daily operations (Income Statement activities) affect the company’s net worth over time:[1, 2]
    $$Assets = Liabilities + Capital + Revenue - Expenses - Dividends$$
    
    This expanded version creates a direct bridge between the profit-generating activities (Revenue and Expenses) and the company's final position. Every transaction—from paying rent to making a sale—leaves a "footprint" on both sides of this equation, ensuring that "nothing can hide and everything must find its proper place".[2, 4]</p>

    <h3>Summary Comparison of Formula Logic</h3>
    <table>
        <thead>
            <tr>
                <th>Formula</th>
                <th>Logical Interpretation</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>$A = L + E$</td>
                <td>Resources = Debts + Ownership</td>
                <td><strong>Correct</strong></td>
            </tr>
            <tr>
                <td>$E = A - L$</td>
                <td>Ownership = Resources minus Debts</td>
                <td><strong>Valid Variation</strong></td>
            </tr>
            <tr>
                <td>$L = A - E$</td>
                <td>Debts = Resources minus Ownership</td>
                <td><strong>Valid Variation</strong></td>
            </tr>
            <tr>
                <td>$E = A + L$</td>
                <td>Ownership = Resources plus Debts</td>
                <td><strong>Incorrect (Logic Error)</strong></td>
            </tr>
        </tbody>
    </table>

    <h3>Conclusion: The Integrity of the System</h3>
    <p>The brilliance of the $Assets = Liabilities + Equity$ equation lies in its self-balancing mechanism. It acts as a continuous check-and-balance system; any discrepancy between the recorded assets and the sum of liabilities and equity signals an "anomaly" or error in the accounting records.[8] By strictly adhering to this mathematical law, accountants ensure the financial data remains reliable, transparent, and accurate for all stakeholders.[1, 8]</p>
    </div>
</div>

<div class="slide" id="slide-sAeAq07" data-question-id="sAeAq07" data-type="Theory" data-set="Set A" data-difficulty="Easy" data-topic="Books of Accounts" data-answer="C" data-points="3">
    <div class="quiz-container">
        <div class="topic-text">Topic: Books of Accounts</div>
        <div class="question-text">Which book of accounts is traditionally known as the "book of original entry"?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="mcq-option" onclick="selectOption('sAeAq07', 'A')">A) General Ledger</li>
            <li class="mcq-option" onclick="selectOption('sAeAq07', 'B')">B) Subsidiary Ledger</li>
            <li class="mcq-option" onclick="selectOption('sAeAq07', 'C')">C) General Journal</li>
            <li class="mcq-option" onclick="selectOption('sAeAq07', 'D')">D) Trial Balance</li>
        </ul>
        <input type="hidden" id="input-sAeAq07" value="">
        <button class="submit-btn" id="submit-sAeAq07" onclick="submitAnswer('sAeAq07')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAeAq07" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAeAq07"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Books of Accounts</h2>
        <div class="book-content-question">Which book of accounts is traditionally known as the "book of original entry"?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="book-mcq-option" onclick="selectOption('sAeAq07', 'A')">A) General Ledger</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq07', 'B')">B) Subsidiary Ledger</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq07', 'C')">C) General Journal</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq07', 'D')">D) Trial Balance</li>
        </ul>
        <p class="correct-line"><strong>Correct Answer: C</strong></p>
        <p>The General Journal is called the book of original entry because it is the first place where business transactions are recorded in chronological order before they are posted to the ledger.</p>
        <h3>Core Definition: The Book of Original Entry</h3>
    <p>The <strong>General Journal</strong> is known as the "book of original entry" because it is the first place where a business transaction is officially recorded in the accounting system after it has been identified through a source document (like an invoice or receipt). In this "diary" of the business, transactions are listed in <strong>chronological order</strong> (by date), ensuring a complete historical record of every financial event as it happened.</p>
    
    <p>Each entry in the journal typically includes:
    <ul>
        <li>The date of the transaction.</li>
        <li>The accounts to be debited and credited.</li>
        <li>A brief explanation called a <strong>narration</strong>.</li>
        <li>A reference number or "folio" for tracking.</li>
    </ul></p>

    <h3>Analysis of Alternative Options (Why they are not "Original")</h3>
    <p>While the other options are essential parts of the accounting cycle, they represent later stages of processing where data has already been "derived" from the journal.</p>

    <p><strong>A) General Ledger: The Book of Final Entry</strong><br>
    The General Ledger is known as the <strong>principal book</strong> or "book of final entry."
    <ul>
        <li><strong>The Relationship:</strong> After a transaction is recorded in the journal, the information is "posted" (transferred) to the ledger.</li>
        <li><strong>Why it's incorrect:</strong> The ledger is an <em>analytical</em> record, not a chronological one. It organizes transactions by account type (Assets, Liabilities, etc.) rather than by date. It summarizes the final balance of each account, which is necessary for creating financial statements, but it is not where the information <em>originally</em> enters the system.</li>
    </ul></p>

    <p><strong>B) Subsidiary Ledger: The Granular Breakdown</strong><br>
    A Subsidiary Ledger (or subledger) is a specialized ledger that provides detailed information about a specific control account in the General Ledger.
    <ul>
        <li><strong>The Relationship:</strong> For example, while the General Ledger shows the total "Accounts Receivable" balance, the Subsidiary Ledger lists exactly how much is owed by every individual customer.</li>
        <li><strong>Why it's incorrect:</strong> These are "lower-level" ledgers that act as backups to ensure accuracy. They provide extreme detail to prevent the General Ledger from becoming cluttered, but like the main ledger, they receive their data <em>after</em> it has been journalized.</li>
    </ul></p>

    <p><strong>D) Trial Balance: The Verification Statement</strong><br>
    The Trial Balance is not actually a "book of account" but a summary <strong>report</strong> or statement.
    <ul>
        <li><strong>The Relationship:</strong> It is prepared at the end of an accounting period by listing the closing balances of all ledger accounts.</li>
        <li><strong>Why it's incorrect:</strong> Its primary purpose is to test the mathematical accuracy of the bookkeeping by ensuring that total debits equal total credits ($$Assets = Liabilities + Equity$$). It is a diagnostic tool used <em>before</em> preparing financial statements, sitting at the very end of the recording process.</li>
    </ul></p>

    <h3>Summary of the Accounting Cycle Flow</h3>
    <table>
        <thead>
            <tr>
                <th>Step</th>
                <th>Document / Book</th>
                <th>Classification</th>
                <th>Primary Function</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Source Document</td>
                <td>Evidence</td>
                <td>Proof that a transaction occurred.</td>
            </tr>
            <tr>
                <td>2</td>
                <td><strong>General Journal</strong></td>
                <td><strong>Original Entry</strong></td>
                <td>Chronological logging of all events.</td>
            </tr>
            <tr>
                <td>3</td>
                <td>General Ledger</td>
                <td>Final Entry</td>
                <td>Summarizing activity by account category.</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Trial Balance</td>
                <td>Verification</td>
                <td>Checking if Debits = Credits.</td>
            </tr>
        </tbody>
    </table>

    <h3>Conclusion: The Foundation of the Audit Trail</h3>
    <p>The General Journal serves as the "raw data" source for the entire accounting system. Because it provides a line-by-line, chronological history of every economic event, it creates an <strong>audit trail</strong> that allows auditors and managers to trace any final number on a balance sheet back to its very first point of entry. Without this book of original entry, the secondary summaries in the ledgers would lack the context and detail necessary for a "true and fair view" of the business.</p>
    </div>
</div>

<div class="slide" id="slide-sAeAq08" data-question-id="sAeAq08" data-type="Problem Solving" data-set="Set A" data-difficulty="Easy" data-topic="Books of Accounts" data-answer="B" data-points="3">
    <div class="quiz-container">
        <div class="topic-text">Topic: Books of Accounts</div>
        <div class="question-text">A company purchases new equipment for ₱10,000 in cash. How is this recorded in the General Journal?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="mcq-option" onclick="selectOption('sAeAq08', 'A')">A) Increase Equipment, Increase Cash</li>
            <li class="mcq-option" onclick="selectOption('sAeAq08', 'B')">B) Increase Equipment, Decrease Cash</li>
            <li class="mcq-option" onclick="selectOption('sAeAq08', 'C')">C) Decrease Equipment, Increase Cash</li>
            <li class="mcq-option" onclick="selectOption('sAeAq08', 'D')">D) Decrease Equipment, Decrease Cash</li>
        </ul>
        <input type="hidden" id="input-sAeAq08" value="">
        <button class="submit-btn" id="submit-sAeAq08" onclick="submitAnswer('sAeAq08')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAeAq08" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAeAq08"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Books of Accounts</h2>
        <div class="book-content-question">A company purchases new equipment for ₱10,000 in cash. How is this recorded in the General Journal?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="book-mcq-option">A) Increase Equipment, Increase Cash</li>
            <li class="book-mcq-option">B) Increase Equipment, Decrease Cash</li>
            <li class="book-mcq-option">C) Decrease Equipment, Increase Cash</li>
            <li class="book-mcq-option">D) Decrease Equipment, Decrease Cash</li>
        </ul>
        <p class="correct-line"><strong>Correct Answer: B</strong></p>
        <p>When you buy equipment for cash, you are acquiring an asset (Equipment goes up) and giving up an asset (Cash goes down) simultaneously.</p>
        
        <h3>The Logic of the "Exchange of Assets"</h3>
        <p>When a business uses cash to buy equipment, it is engaging in what accountants call an <strong>exchange of assets</strong>. In this scenario, the business is not gaining "new" value in the sense of total wealth; rather, it is changing the <em>form</em> of its wealth from a liquid asset (Cash) to a long-term productive asset (Equipment).</p>
        
        <p>This transaction affects the fundamental accounting equation as follows:
        $$Assets (\\uparrow Equipment) + Assets (\\downarrow Cash) = Liabilities (No Change) + Equity (No Change)$$
        
        Because one asset increases and another decreases by the exact same amount (₱10,000), the total assets remain the same, and the equation stays in perfect balance.</p>

        <h3>Step-by-Step Journalization</h3>
        <p>To record this in the <strong>General Journal</strong> (the "book of original entry"), we apply the rules of debits and credits:
        <ol>
            <li><strong>Identify the Accounts:</strong> Both "Equipment" and "Cash" are Asset accounts.</li>
            <li><strong>Determine the Direction:</strong> Equipment is being <em>acquired</em> (increasing), and Cash is being <em>spent</em> (decreasing).</li>
            <li><strong>Apply the Rule:</strong> An increase in an asset is recorded as a <strong>Debit</strong>. A decrease in an asset is recorded as a <strong>Credit</strong>.</li>
        </ol></p>

        <p>The resulting entry looks like this in the General Journal:
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Particulars</th>
                    <th>Debit (₱)</th>
                    <th>Credit (₱)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>202X</td>
                    <td>Equipment</td>
                    <td>10,000</td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;Cash</td>
                    <td></td>
                    <td>10,000</td>
                </tr>
                <tr>
                    <td></td>
                    <td><em>(To record purchase of equipment for cash)</em></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table></p>

        <h3>Analysis of Wrong Answers</h3>
        <p>Understanding why the other options are incorrect is vital for avoiding common bookkeeping errors:</p>

        <p><strong>A) Increase Equipment, Increase Cash: The "Money from Nowhere" Error</strong><br>
        This option suggests that the business somehow gained ₱10,000 in physical equipment while <em>also</em> gaining ₱10,000 in cash. 
        <ul>
            <li><strong>Why it's incorrect:</strong> This would create a "unilateral increase" that breaks the accounting equation (+₱20,000 = 0 + 0). For Cash to increase alongside Equipment, there would have to be a corresponding increase in a Liability (like a loan) or Equity (like an owner's investment), which is not the case here.</li>
        </ul></p>

        <p><strong>C) Decrease Equipment, Increase Cash: The "Sale" Error</strong><br>
        This recording describes the exact <em>opposite</em> of the actual event. 
        <ul>
            <li><strong>Why it's incorrect:</strong> This entry would be used if the company were <strong>selling</strong> its existing equipment for cash. While it keeps the equation balanced, it incorrectly describes the economic reality of the transaction. In accounting, this is often called an "error of reversal."</li>
        </ul></p>

        <p><strong>D) Decrease Equipment, Decrease Cash: The "Double Loss" Error</strong><br>
        This option implies the company lost ₱10,000 worth of equipment and ₱10,000 in cash simultaneously.
        <ul>
            <li><strong>Why it's incorrect:</strong> This would result in a total asset decrease of ₱20,000 without any explanation. This does not happen in a standard purchase. This might only occur in a catastrophic event (like a fire destroying equipment) followed by an unrelated cash theft, which clearly does not match the prompt.</li>
        </ul></p>

        <h3>Broader Impact: Liquidity and Financial Health</h3>
        <p>While the total assets don't change, the <strong>liquidity</strong> of the business does. Cash is a "current asset" used to pay immediate bills, while equipment is a "non-current" or long-term asset. By spending cash on equipment, the company reduces its <strong>working capital</strong>, meaning it has less "ready money" but has gained a resource that will help generate revenue over several years through the process of <strong>depreciation</strong>.</p>

        <h3>Conclusion</h3>
        <p>Accurate journalizing is the foundation of reliable financial statements. By correctly identifying that a cash purchase is an <strong>increase in one asset</strong> (Debit) and a <strong>decrease in another</strong> (Credit), the accountant ensures that the "book of original entry" provides a faithful representation of the firm's economic activities.</p>
    </div>
</div>

<div class="slide" id="slide-sAeAq09" data-question-id="sAeAq09" data-type="Problem Solving" data-set="Set A" data-difficulty="Easy" data-topic="Accounting Cycle (Service)" data-answer="B" data-points="3">
    <div class="quiz-container">
        <div class="topic-text">Topic: Accounting Cycle (Service)</div>
        <div class="question-text">If a service business has total assets amounting to ₱50,000 and total equity of ₱30,000, what is the total amount of its liabilities?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="mcq-option" onclick="selectOption('sAeAq09', 'A')">A) ₱80,000</li>
            <li class="mcq-option" onclick="selectOption('sAeAq09', 'B')">B) ₱20,000</li>
            <li class="mcq-option" onclick="selectOption('sAeAq09', 'C')">C) ₱50,000</li>
            <li class="mcq-option" onclick="selectOption('sAeAq09', 'D')">D) ₱30,000</li>
        </ul>
        <input type="hidden" id="input-sAeAq09" value="">
        <button class="submit-btn" id="submit-sAeAq09" onclick="submitAnswer('sAeAq09')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAeAq09" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAeAq09"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Accounting Cycle (Service)</h2>
        <div class="book-content-question">If a service business has total assets amounting to ₱50,000 and total equity of ₱30,000, what is the total amount of its liabilities?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="book-mcq-option" onclick="selectOption('sAeAq09', 'A')">A) ₱80,000</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq09', 'B')">B) ₱20,000</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq09', 'C')">C) ₱50,000</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq09', 'D')">D) ₱30,000</li>
        </ul>
        <p class="correct-line"><strong>Correct Answer: B</strong></p>
        <p>Using the accounting equation Assets = Liabilities + Equity, we substitute the given values: ₱50,000 = Liabilities + ₱30,000. Therefore, Liabilities = ₱50,000 - ₱30,000 = ₱20,000.</p>
        <h3>1. Analysis of Problem Factors and Elements</h3>
    <p>To solve any accounting word problem, you must first identify which pieces of information are functional components of the mathematical solution and which are merely contextual.</p>
    
    <ul>
        <li><strong>Factor: "Service Business" (Contextual):</strong> While this identifies the type of industry, it is <strong>not</strong> part of the numerical solution. The fundamental accounting equation is universal and applies to service, merchandising, and manufacturing businesses alike.[1, 2]</li>
        <li><strong>Element: Total Assets (₱50,000):</strong> This is a <strong>core part</strong> of the solution. It represents the total economic resources owned or controlled by the business.[1, 3]</li>
        <li><strong>Element: Total Equity (₱30,000):</strong> This is a <strong>core part</strong> of the solution. It represents the residual interest of the owner in those assets after all debts are considered.[4, 5]</li>
        <li><strong>Unknown: Total Liabilities:</strong> This is the target of our calculation. It represents the claims of external creditors against the business assets.[5, 1]</li>
    </ul>

    <h3>2. The Logic: The Accounting Equation</h3>
    <p>The foundation of the double-entry system is the equality of resources and their sources. This is expressed through the <strong>Basic Accounting Equation</strong>:[5, 1]
    $$Assets = Liabilities + Equity$$
    
    Since we are looking for <strong>Liabilities</strong>, we must transpose the formula to isolate the unknown variable:
    $$Liabilities = Assets - Equity$$
    
    This logic tells us that if we know the total value of what the company has (Assets) and we know how much the owner "owns" free and clear (Equity), the difference must be what the company owes to others (Liabilities).</p>

    <h3>3. Step-by-Step Solution</h3>
    <table>
        <thead>
            <tr>
                <th>Step</th>
                <th>Action</th>
                <th>Mathematical Expression</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>State the transposed equation</td>
                <td>$L = A - E$</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Substitute the given values</td>
                <td>$L = ₱50,000 - ₱30,000$</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Calculate the difference</td>
                <td>$L = ₱20,000$</td>
            </tr>
        </tbody>
    </table>

    <h3>4. Analysis of Incorrect Options</h3>
    <p>Distractors in accounting problems are often based on common logical or mathematical errors:</p>
    <ul>
        <li><strong>A) ₱80,000 (Addition Error):</strong> This result comes from <em>adding</em> Assets and Equity ($50,000 + 30,000$). This is conceptually wrong because Equity is a <em>part</em> of the funding for Assets, not an addition to them.[1]</li>
        <li><strong>C) ₱50,000 (Identity Error):</strong> This simply repeats the value of the Total Assets. Liabilities can only equal Assets if Equity is zero, which is not the case here.</li>
        <li><strong>D) ₱30,000 (Identity Error):</strong> This simply repeats the value of the Total Equity. Liabilities can only equal Equity if Assets were double that amount ($60,000$).</li>
    </ul>

    <h3>Conclusion</h3>
    <p>By applying the principle of balance, we determine that ₱20,000 of the company's ₱50,000 in resources was financed through debt. This confirms that the total claims (₱20,000 Liabilities + ₱30,000 Equity) perfectly match the total resources (₱50,000 Assets).[4, 1]</p>
    </div>
</div>

<div class="slide" id="slide-sAeAq10" data-question-id="sAeAq10" data-type="Problem Solving" data-set="Set A" data-difficulty="Easy" data-topic="Accounting Cycle (Merchandising)" data-answer="D" data-points="3">
    <div class="quiz-container">
        <div class="topic-text">Topic: Accounting Cycle (Merchandising)</div>
        <div class="question-text">A merchandising business bought inventory worth ₱5,000 on credit (on account). In which special journal should this transaction be recorded?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="mcq-option" onclick="selectOption('sAeAq10', 'A')">A) Sales Journal</li>
            <li class="mcq-option" onclick="selectOption('sAeAq10', 'B')">B) Cash Receipts Journal</li>
            <li class="mcq-option" onclick="selectOption('sAeAq10', 'C')">C) Cash Payments Journal</li>
            <li class="mcq-option" onclick="selectOption('sAeAq10', 'D')">D) Purchases Journal</li>
        </ul>
        <input type="hidden" id="input-sAeAq10" value="">
        <button class="submit-btn" id="submit-sAeAq10" onclick="submitAnswer('sAeAq10')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAeAq10" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAeAq10"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Accounting Cycle (Merchandising)</h2>
        <div class="book-content-question">A merchandising business bought inventory worth ₱5,000 on credit (on account). In which special journal should this transaction be recorded?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="book-mcq-option" onclick="selectOption('sAeAq10', 'A')">A) Sales Journal</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq10', 'B')">B) Cash Receipts Journal</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq10', 'C')">C) Cash Payments Journal</li>
            <li class="book-mcq-option" onclick="selectOption('sAeAq10', 'D')">D) Purchases Journal</li>
        </ul>
        <p class="correct-line"><strong>Correct Answer: D</strong></p>
        <p>The Purchases Journal is specifically designed to record all acquisitions of merchandise inventory, supplies, and other assets bought on credit (on account).</p>
        <h3>The Purpose of Special Journals</h3>
    <p>In a merchandising business, the volume of daily transactions can be overwhelming. To improve efficiency, businesses use <strong>special journals</strong> to group similar and recurring transactions together. This allows the general journal to be reserved only for non-routine entries like adjusting and closing entries.</p>

    <h3>Core Analysis: Purchases Journal (The Correct Choice)</h3>
    <p>The <strong>Purchases Journal</strong> is specifically designed to record <strong>all purchases made on credit</strong> (also known as "on account"). 
    <ul>
        <li><strong>The Criteria:</strong> For a transaction to enter this journal, it must involve an acquisition (buying) and the payment must be deferred to a future date.</li>
        <li><strong>Scope:</strong> While primarily used for merchandise inventory, many businesses also use it to record the credit purchase of supplies or other assets.</li>
        <li><strong>Logic:</strong> Recording this transaction involves a debit to <em>Inventory</em> (or <em>Purchases</em> in a periodic system) and a credit to <em>Accounts Payable</em>.</li>
    </ul></p>

    <h3>Analysis of Alternative (Incorrect) Options</h3>
    <p>Understanding why the other journals are incorrect requires looking at the "direction" of the transaction and the "medium of exchange" (cash vs. credit):</p>

    <p><strong>A) Sales Journal: The Credit Sales Log</strong><br>
    The Sales Journal is used exclusively to record the sale of merchandise <strong>on credit</strong> to customers.
    <ul>
        <li><strong>Why it's incorrect:</strong> It records <em>outbound</em> transactions (revenue) rather than <em>inbound</em> acquisitions. While the purchase in the problem is "on credit," it is a purchase by the business, not a sale to a customer.</li>
    </ul></p>

    <p><strong>B) Cash Receipts Journal: The Inflow Tracker</strong><br>
    This journal records <strong>all receipts of cash</strong> for any reason, such as cash sales or collections of accounts receivable.
    <ul>
        <li><strong>Why it's incorrect:</strong> In this problem, the business is buying something on credit, meaning <strong>no cash is coming in</strong>. In fact, a liability (Accounts Payable) is being created instead.</li>
    </ul></p>

    <p><strong>C) Cash Payments Journal: The Outflow Tracker</strong><br>
    Also known as the Cash Disbursements Journal, this records <strong>all cash leaving the company</strong>, regardless of the reason.
    <ul>
        <li><strong>Why it's incorrect:</strong> This would only be the correct answer if the inventory was bought <strong>for cash</strong>. Since the purchase was made "on account," no cash has left the business yet. The cash payments journal will only be used later, when the business actually pays the supplier for this ₱5,000 debt.</li>
    </ul></p>

    <h3>Special Journal Decision Matrix</h3>
    <table>
        <thead>
            <tr>
                <th>If the transaction is a...</th>
                <th>And the payment is...</th>
                <th>Use this Special Journal:</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Purchase of Merchandise/Assets</td>
                <td><strong>On Credit (Account)</strong></td>
                <td><strong>Purchases Journal</strong></td>
            </tr>
            <tr>
                <td>Purchase of Merchandise/Assets</td>
                <td>In Cash</td>
                <td>Cash Payments Journal</td>
            </tr>
            <tr>
                <td>Sale of Merchandise</td>
                <td>On Credit (Account)</td>
                <td>Sales Journal</td>
            </tr>
            <tr>
                <td>Sale of Merchandise</td>
                <td>In Cash</td>
                <td>Cash Receipts Journal</td>
            </tr>
        </tbody>
    </table>

    <h3>Conclusion</h3>
    <p>The key to selecting the correct journal lies in identifying the nature of the event (buying vs. selling) and the timing of the payment (immediate cash vs. future credit). Because the business is <strong>buying</strong> inventory <strong>on account</strong>, the transaction must be logged in the Purchases Journal to ensure accurate tracking of the money owed to suppliers in the Accounts Payable subsidiary ledger.</p>
    </div>
</div>


<div class="slide" id="slide-sAaVq01" data-question-id="sAaVq01" data-type="Theory" data-set="Set A" data-difficulty="Average" data-topic="Statement of Financial Position" data-answer="B" data-points="6">
    <div class="quiz-container">
        <div class="topic-text">Topic: Statement of Financial Position</div>
        <div class="question-text">In a properly prepared Statement of Financial Position (Balance Sheet), how are assets and liabilities primarily classified?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="mcq-option" onclick="selectOption('sAaVq01', 'A')">A) Alphabetical order</li>
            <li class="mcq-option" onclick="selectOption('sAaVq01', 'B')">B) Current and Non-current</li>
            <li class="mcq-option" onclick="selectOption('sAaVq01', 'C')">C) Tangible and Intangible</li>
            <li class="mcq-option" onclick="selectOption('sAaVq01', 'D')">D) Operating and Non-operating</li>
        </ul>
        <input type="hidden" id="input-sAaVq01" value="">
        <button class="submit-btn" id="submit-sAaVq01" onclick="submitAnswer('sAaVq01')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAaVq01" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAaVq01"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Statement of Financial Position</h2>
        <div class="book-content-question">In a properly prepared Statement of Financial Position (Balance Sheet), how are assets and liabilities primarily classified?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="book-mcq-option">A) Alphabetical order</li>
            <li class="book-mcq-option">B) Current and Non-current</li>
            <li class="book-mcq-option">C) Tangible and Intangible</li>
            <li class="book-mcq-option">D) Operating and Non-operating</li>
        </ul>
        <p class="correct-line"><strong>Correct Answer: B) Current and Non-current</strong></p>
        <p>Under the Philippine Accounting Standards (PAS 1), an entity must present current and non-current assets, and current and non-current liabilities, as separate classifications in its statement of financial position.</p>
        <h3>The Regulatory Framework (PAS 1 / IAS 1)</h3>
    <p>Under international and local accounting standards (such as PAS 1 or IAS 1), an entity is generally required to present current and non-current assets, and current and non-current liabilities, as separate classifications on the face of its <strong>Statement of Financial Position</strong>. This "classified" format provides a structured overview of an entity's financial structure by grouping items according to the timing of their expected cash flows.</p>

    <h3>Defining the Primary Classifications</h3>
    <ul>
        <li><strong>Current Assets:</strong> Resources expected to be realized, sold, or consumed within twelve months after the reporting period or within the entity's normal operating cycle (whichever is longer). Common examples include cash, accounts receivable, and inventory.</li>
        <li><strong>Non-current Assets:</strong> Resources that are not intended for sale or consumption in the near term and provide value for longer than one year. These include long-term investments and property, plant, and equipment (PPE).</li>
        <li><strong>Current Liabilities:</strong> Obligations expected to be settled within twelve months or the normal operating cycle. Examples include accounts payable and short-term loans.</li>
        <li><strong>Non-current Liabilities:</strong> Debts and obligations that the entity does not expect to settle within the next year, such as mortgages or long-term bonds.</li>
    </ul>

    <h3>Significance: Liquidity and Solvency</h3>
    <p>This distinction is critical for financial analysis. The ratio of current assets to current liabilities (the <strong>Current Ratio</strong>) allows users to assess <strong>liquidity</strong>—the company's ability to pay its short-term bills as they come due. Conversely, the classification of non-current items helps analysts evaluate <strong>solvency</strong>, or the entity's long-term financial stability and capacity to meet major future obligations.</p>

    <h3>Analysis of Alternative (Incorrect) Options</h3>
    <p>To understand why Option B is the primary standard, we must look at how the other options relate to financial reporting:</p>

    <p><strong>A) Alphabetical order:</strong>
    Assets and liabilities are listed based on <strong>liquidity</strong> (ease of conversion to cash), not by name.
    <ul><li><em>Relationship:</em> Listing alphabetically would mix highly liquid items like Cash with illiquid items like Buildings. This would obscure the company's financial health, making it impossible to determine if the business has enough "ready cash" to cover immediate debts.</li></ul></p>

    <p><strong>C) Tangible and Intangible:</strong>
    This classification is based on <strong>physical existence</strong>.
    <ul><li><em>Relationship:</em> While this distinction is vital for valuation and determining how an asset is consumed (depreciation for tangibles vs. amortization for intangibles), it is a <em>sub-category</em> of non-current assets. Because "Current Assets" also include tangibles (like inventory), "Tangible vs. Intangible" cannot serve as the <em>primary</em> structural divider for the entire statement.</li></ul></p>

    <p><strong>D) Operating and Non-operating:</strong>
    This classification is based on <strong>usage or purpose</strong> relative to core business activities.
    <ul><li><em>Relationship:</em> Operating assets (like machinery) support daily revenue generation, while non-operating assets (like vacant land) do not. While useful for internal management to calculate "Net Operating Assets," it is not the standard primary classification for general-purpose external reports, as it does not address the time-based risks (liquidity) that investors and creditors prioritize.</li></ul></p>

    <h3>Summary Comparison Table</h3>
    <table>
        <thead>
            <tr>
                <th>Classification Basis</th>
                <th>Primary Usage</th>
                <th>Required by Standards?</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Convertibility (B)</strong></td>
                <td><strong>Liquidity and Solvency Analysis</strong></td>
                <td><strong>Yes (PAS 1 / IAS 1)</strong></td>
            </tr>
            <tr>
                <td>Physical Form (C)</td>
                <td>Valuation and Depreciation</td>
                <td>Secondary classification</td>
            </tr>
            <tr>
                <td>Business Purpose (D)</td>
                <td>Operational Efficiency analysis</td>
                <td>Supplemental info</td>
            </tr>
            <tr>
                <td>Name (A)</td>
                <td>None (clutters analysis)</td>
                <td>No</td>
            </tr>
        </tbody>
    </table>

    <h3>Conclusion</h3>
    <p>While an entity may provide supplemental information based on physical existence or operating purpose, the <strong>current vs. non-current</strong> distinction remains the fundamental requirement for a properly prepared Statement of Financial Position. It ensures that the financial "story" being told is one of stability and realistic expectations for future cash flows.</p>

    </div>
</div>

<div class="slide" id="slide-sAaVq02" data-question-id="sAaVq02" data-type="Theory" data-set="Set A" data-difficulty="Average" data-topic="Cash Flow Statement" data-answer="C" data-points="6">
    <div class="quiz-container">
        <div class="topic-text">Topic: Cash Flow Statement</div>
        <div class="question-text">Under the indirect method of preparing the Cash Flow Statement, which of the following is added back to net income to determine cash flows from operating activities?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="mcq-option" onclick="selectOption('sAaVq02', 'A')">A) Increase in accounts receivable</li>
            <li class="mcq-option" onclick="selectOption('sAaVq02', 'B')">B) Decrease in accounts payable</li>
            <li class="mcq-option" onclick="selectOption('sAaVq02', 'C')">C) Depreciation expense</li>
            <li class="mcq-option" onclick="selectOption('sAaVq02', 'D')">D) Gain on sale of equipment</li>
        </ul>
        <input type="hidden" id="input-sAaVq02" value="">
        <button class="submit-btn" id="submit-sAaVq02" onclick="submitAnswer('sAaVq02')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAaVq02" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAaVq02"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Cash Flow Statement</h2>
        <div class="book-content-question">Under the indirect method of preparing the Cash Flow Statement, which of the following is added back to net income to determine cash flows from operating activities?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="book-mcq-option">A) Increase in accounts receivable</li>
            <li class="book-mcq-option">B) Decrease in accounts payable</li>
            <li class="book-mcq-option">C) Depreciation expense</li>
            <li class="book-mcq-option">D) Gain on sale of equipment</li>
        </ul>
        <p class="correct-line"><strong>Correct Answer: C) Depreciation expense</strong></p>
        <p>Depreciation is a non-cash expense that was deducted to arrive at Net Income. Since no cash actually left the business for depreciation in the current period, it must be added back to compute the actual operating cash flow.</p>
        <h3>The Logic of the Indirect Method</h3>
    <p>The <strong>Cash Flow Statement</strong> tracks the actual movement of cash in and out of a business. While the Income Statement shows profitability based on <em>accrual accounting</em> (recording revenue when earned and expenses when incurred), the Cash Flow Statement focuses on <em>liquidity</em>—the actual cash available to cover daily expenses and obligations.</p>
    
    <p>Under the <strong>indirect method</strong>, the accountant begins with <strong>Net Income</strong> and performs a series of adjustments to "undo" the effects of accrual-basis accounting, effectively converting profit into actual cash from operations. These adjustments generally fall into three categories: non-cash expenses, non-operating items, and changes in working capital.</p>

    <h3>Analysis of the Correct Answer: Depreciation</h3>
    <p><strong>C) Depreciation expense:</strong> This is a non-cash expense that represents the gradual wear and tear of long-term assets over time. 
    <ul>
        <li><strong>The Adjustment:</strong> When calculating Net Income, depreciation is subtracted as an expense. However, no physical cash leaves the business for depreciation in the current period.</li>
        <li><strong>Why it's added back:</strong> Because Net Income was reduced by an amount that did not actually consume cash, we must <strong>add it back</strong> to show the true amount of cash generated by operations.</li>
    </ul></p>

    <h3>Analysis of Alternative (Incorrect) Options</h3>
    <p>Understanding why the other options are subtracted (or ignored) requires looking at how changes in the Balance Sheet impact cash:</p>

    <p><strong>A) Increase in accounts receivable:</strong> 
    Accounts receivable represents money owed to the company by customers.
    <ul>
        <li><em>Relationship:</em> An increase means the company made more sales on credit than it collected in cash during the period.</li>
        <li><em>Why it's incorrect:</em> This "ties up" cash that would otherwise be available. Because this revenue is included in Net Income but hasn't been received as cash yet, it must be <strong>subtracted</strong> from net income to reach the operating cash flow.</li>
    </ul></p>

    <p><strong>B) Decrease in accounts payable:</strong> 
    Accounts payable represents money the company owes to suppliers.
    <ul>
        <li><em>Relationship:</em> A decrease means the company used its cash to pay off outstanding debts from previous periods.</li>
        <li><em>Why it's incorrect:</em> Paying off a liability is a cash outflow. Since this outflow is not recorded as an "expense" on the Income Statement (it's a reduction of a liability), it must be <strong>subtracted</strong> from net income to accurately reflect the cash spent.</li>
    </ul></p>

    <p><strong>D) Gain on sale of equipment:</strong> 
    A gain occurs when an asset is sold for more than its remaining book value.
    <ul>
        <li><em>Relationship:</em> This gain is included in Net Income, but it is not considered "operating" cash flow; it belongs in the <strong>Investing Activities</strong> section where the total proceeds of the sale are recorded.</li>
        <li><em>Why it's incorrect:</em> To prevent "double-counting" the cash and to isolate core business performance, the non-operating gain must be <strong>subtracted</strong> from net income in the operating section.</li>
    </ul></p>

    <h3>Adjustment Summary Table (Indirect Method)</h3>
    <table>
        <thead>
            <tr>
                <th>Item Type</th>
                <th>Change/Event</th>
                <th>Adjustment to Net Income</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Non-Cash Expense</strong></td>
                <td>Depreciation / Amortization</td>
                <td><strong>Add Back</strong></td>
            </tr>
            <tr>
                <td>Current Asset</td>
                <td>Increase (e.g., A/R, Inventory)</td>
                <td>Subtract</td>
            </tr>
            <tr>
                <td>Current Asset</td>
                <td>Decrease (e.g., A/R, Inventory)</td>
                <td>Add</td>
            </tr>
            <tr>
                <td>Current Liability</td>
                <td>Increase (e.g., A/P, Wages Payable)</td>
                <td>Add</td>
            </tr>
            <tr>
                <td>Current Liability</td>
                <td>Decrease (e.g., A/P, Accrued Expenses)</td>
                <td>Subtract</td>
            </tr>
            <tr>
                <td>Non-Operating Item</td>
                <td>Gain on Sale of Assets</td>
                <td>Subtract</td>
            </tr>
            <tr>
                <td>Non-Operating Item</td>
                <td>Loss on Sale of Assets</td>
                <td>Add Back</td>
            </tr>
        </tbody>
    </table>

    <h3>Conclusion</h3>
    <p>Mastering the indirect method is essential for assessing a company's <strong>Liquidity Analysis</strong>—its ability to cover short-term obligations using the cash actually generated from its core business performance. By correctly adding back non-cash items like depreciation and adjusting for changes in working capital, accountants provide a clear picture of the company's financial health and operational stability.</p>
    </div>
</div>

<div class="slide" id="slide-sAaVq03" data-question-id="sAaVq03" data-type="Theory" data-set="Set A" data-difficulty="Average" data-topic="Financial Statement Analysis" data-answer="C" data-points="6">
    <div class="quiz-container">
        <div class="topic-text">Topic: Financial Statement Analysis</div>
        <div class="question-text">Which financial ratio is a strict measure of a company's immediate liquidity, excluding inventory from its calculation because it may not be easily converted to cash?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="mcq-option" onclick="selectOption('sAaVq03', 'A')">A) Current Ratio</li>
            <li class="mcq-option" onclick="selectOption('sAaVq03', 'B')">B) Debt-to-Equity Ratio</li>
            <li class="mcq-option" onclick="selectOption('sAaVq03', 'C')">C) Acid-Test (Quick) Ratio</li>
            <li class="mcq-option" onclick="selectOption('sAaVq03', 'D')">D) Return on Assets</li>
        </ul>
        <input type="hidden" id="input-sAaVq03" value="">
        <button class="submit-btn" id="submit-sAaVq03" onclick="submitAnswer('sAaVq03')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAaVq03" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAaVq03"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Financial Statement Analysis</h2>
        <div class="book-content-question">Which financial ratio is a strict measure of a company's immediate liquidity, excluding inventory from its calculation because it may not be easily converted to cash?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="book-mcq-option">A) Current Ratio</li>
            <li class="book-mcq-option">B) Debt-to-Equity Ratio</li>
            <li class="book-mcq-option">C) Acid-Test (Quick) Ratio</li>
            <li class="book-mcq-option">D) Return on Assets</li>
        </ul>
        <p class="correct-line"><strong>Correct Answer: C) Acid-Test (Quick) Ratio</strong></p>
        <p>The Acid-Test or Quick Ratio strictly measures immediate liquidity by only using highly liquid assets (Cash, Cash Equivalents, and Receivables) divided by Current Liabilities. It specifically excludes Inventory and Prepaid Expenses.</p>
        <h3>Understanding Liquidity Ratios</h3>
    <p>In financial analysis, <strong>liquidity</strong> refers to a company's ability to meet its short-term financial obligations—such as paying suppliers, staff, and short-term loans—as they fall due. Liquidity ratios transform raw balance sheet data into meaningful insights about a company's immediate cash position and operational stability.</p>

    <h3>The "Strict" Test: Acid-Test (Quick) Ratio</h3>
    <p>The <strong>Acid-Test Ratio</strong> (also commonly called the <strong>Quick Ratio</strong>) is a refined and conservative measure of liquidity. While general liquidity measures look at all current assets, the Acid-Test ratio "strips out" assets that are less liquid to provide a more realistic view of a firm's ability to handle a sudden "cash crunch."</p>
    
    <p>The formula for the Acid-Test Ratio is:
    $$\text{Quick Ratio} = \frac{\text{Current Assets} - \text{Inventory} - \text{Prepaid Expenses}}{\text{Current Liabilities}}$$</p>

    <p><strong>Why exclude Inventory?</strong> Inventory is excluded because it is the least liquid of the current assets. For a company to turn inventory into cash, it must first find a buyer and then collect the payment. In times of financial stress or market downturns, selling inventory quickly may be impossible without a significant price discount. By removing inventory, the ratio focuses only on "quick assets"—cash, cash equivalents, and accounts receivable.</p>

    <h3>Analysis of Alternative (Incorrect) Options</h3>
    <p>Understanding why the other options are incorrect involves distinguishing between different categories of financial performance metrics:</p>

    <p><strong>A) Current Ratio: The Broad Liquidity Measure</strong><br>
    The Current Ratio is the most common liquidity measure, calculated as:
    $$\text{Current Ratio} = \frac{\text{Current Assets}}{\text{Current Liabilities}}$$
    <ul>
        <li><em>Relationship:</em> It is the parent category for the Acid-Test ratio. However, it is not the <strong>strict</strong> measure requested because it includes inventory and supplies. A company could have a high Current Ratio but still be in trouble if most of its value is "tied up" in slow-moving stock.</li>
    </ul></p>

    <p><strong>B) Debt-to-Equity Ratio: The Solvency Metric</strong><br>
    This ratio is used to evaluate a company's <strong>solvency</strong> rather than its liquidity.
    $$\text{Debt-to-Equity} = \frac{\text{Total Liabilities}}{\text{Total Equity}}$$ [1]
    <ul>
        <li><em>Relationship:</em> While liquidity looks at the next few months, solvency looks at the long-term "big picture"—specifically, whether total assets can cover all long-term debts. It measures financial leverage and reliance on borrowed capital rather than immediate cash availability.</li>
    </ul></p>

    <p><strong>D) Return on Assets (ROA): The Profitability Metric</strong><br>
    ROA is a profitability ratio that measures how efficiently a company uses its assets to generate earnings.
    $$\text{ROA} = \frac{\text{Net Income}}{\text{Total Assets}}$$
    <ul>
        <li><em>Relationship:</em> ROA measures <strong>performance</strong>, not survival. A company could be highly profitable (high ROA) but still face bankruptcy if it lacks the liquidity to pay its immediate bills (low Quick Ratio).</li>
    </ul></p>

    <h3>Summary Comparison of Key Ratios</h3>
    <table>
        <thead>
            <tr>
                <th>Metric Type</th>
                <th>Ratio Name</th>
                <th>Conservative Level</th>
                <th>Core Focus</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Liquidity</td>
                <td>Current Ratio</td>
                <td>Moderate</td>
                <td>All short-term resources.</td>
            </tr>
            <tr>
                <td><strong>Liquidity</strong></td>
                <td><strong>Acid-Test (Quick)</strong></td>
                <td><strong>High</strong></td>
                <td><strong>Immediate cash availability.</strong></td>
            </tr>
            <tr>
                <td>Solvency</td>
                <td>Debt-to-Equity</td>
                <td>N/A</td>
                <td>Long-term financial structure.</td>
            </tr>
            <tr>
                <td>Profitability</td>
                <td>Return on Assets</td>
                <td>N/A</td>
                <td>Efficiency in generating profit.</td>
            </tr>
        </tbody>
    </table>

    <h3>Conclusion</h3>
    <p>Analysts use the <strong>Acid-Test Ratio</strong> to ensure a company has enough "buffer" to survive unexpected costs or slow sales periods without needing to rely on future revenue or emergency financing. A ratio of $1.0$ or higher generally indicates that a business is in a strong position to meet its immediate financial commitments using only its most liquid assets.</p>

    </div>
</div>

<div class="slide" id="slide-sAaVq04" data-question-id="sAaVq04" data-type="Theory" data-set="Set A" data-difficulty="Average" data-topic="Bank Reconciliation Statement" data-answer="B" data-points="6">
    <div class="quiz-container">
        <div class="topic-text">Topic: Bank Reconciliation Statement</div>
        <div class="question-text">When preparing a bank reconciliation statement, how should an "outstanding check" be treated?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="mcq-option" onclick="selectOption('sAaVq04', 'A')">A) Added to the bank statement balance</li>
            <li class="mcq-option" onclick="selectOption('sAaVq04', 'B')">B) Deducted from the bank statement balance</li>
            <li class="mcq-option" onclick="selectOption('sAaVq04', 'C')">C) Added to the book balance</li>
            <li class="mcq-option" onclick="selectOption('sAaVq04', 'D')">D) Deducted from the book balance</li>
        </ul>
        <input type="hidden" id="input-sAaVq04" value="">
        <button class="submit-btn" id="submit-sAaVq04" onclick="submitAnswer('sAaVq04')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAaVq04" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAaVq04"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Bank Reconciliation Statement</h2>
        <div class="book-content-question">When preparing a bank reconciliation statement, how should an "outstanding check" be treated?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="book-mcq-option">A) Added to the bank statement balance</li>
            <li class="book-mcq-option">B) Deducted from the bank statement balance</li>
            <li class="book-mcq-option">C) Added to the book balance</li>
            <li class="book-mcq-option">D) Deducted from the book balance</li>
        </ul>
        <p class="correct-line"><strong>Correct Answer: B) Deducted from the bank statement balance</strong></p>
        <p>An outstanding check is a check issued and recorded by the company (already deducted from books) but not yet presented to the bank for payment. Therefore, it must be deducted from the bank balance to reconcile.</p>
        <h3>Conceptual Overview: The Timing Difference</h3>
    <p>A <strong>Bank Reconciliation Statement</strong> is a critical internal control tool used to ensure that a company’s internal cash records (the "books") match the records provided by the financial institution (the "bank statement"). In a perfect system, these balances would be identical, but they almost never match at the end of a month due to <strong>timing differences</strong>. Timing differences occur when a transaction is recorded in one set of records but hasn't yet appeared in the other.</p>

    <h3>Defining the Outstanding Check</h3>
    <p>An <strong>outstanding check</strong> is a check that a business has written, recorded in its own books (crediting the cash account), and delivered to a payee, but which has <strong>not yet been presented</strong> to the bank for payment. From the company's perspective, that money is already spent and gone. However, from the bank's perspective, the money is still in the account because the payee hasn't "cashed" it yet.</p>
    
    <p>Because the bank statement balance appears higher than the company's actual available funds, we must adjust the bank's number downward to reflect reality.</p>

    <h3>Analysis of Alternative (Incorrect) Options</h3>
    <p>Understanding why the other treatments are incorrect requires identifying whether the "error" or "delay" lives on the bank side or the book side of the equation:</p>

    <p><strong>A) Added to the bank statement balance:</strong>
    Adding a check to the bank balance would imply that an outstanding check is a <em>deposit</em> (like a "deposit in transit") rather than a <em>withdrawal</em>.
    <ul>
        <li><em>Relationship:</em> This is the opposite of the correct logic. Since a check represents a future decrease in the bank's cash, adding it would double the discrepancy rather than resolving it.</li>
    </ul></p>

    <p><strong>C) Added to the book balance:</strong>
    This adjustment suggests that the company made a mistake in recording the payment and needs to "put the money back" into its internal records.
    <ul>
        <li><em>Relationship:</em> This is incorrect because the company <em>did</em> legitimately spend that money. Adding it back to the books would overstate the company's available cash and could lead to the business committing to funds that are no longer available, potentially resulting in bounced payments or overdrafts.</li>
    </ul></p>

    <p><strong>D) Deducted from the book balance:</strong>
    This is a common point of confusion for students. 
    <ul>
        <li><em>Relationship:</em> An outstanding check has <strong>already been deducted</strong> from the books at the moment the check was written and journalized. If you were to deduct it again during the reconciliation process, you would be "double-counting" the withdrawal. We only adjust the book balance for items the company <em>didn't</em> know about yet, such as bank service fees or NSF checks.</li>
    </ul></p>

    <h3>The Reconciliation Framework</h3>
    <p>To keep these rules clear, accountants use a two-sided adjustment framework:</p>
    <table>
        <thead>
            <tr>
                <th>Adjustment Side</th>
                <th>Reconciling Item</th>
                <th>Mathematical Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Bank Statement</strong></td>
                <td>Deposits in Transit</td>
                <td>Add ($+$)</td>
            </tr>
            <tr>
                <td><strong>Bank Statement</strong></td>
                <td><strong>Outstanding Checks</strong></td>
                <td><strong>Subtract ($-$)</strong></td>
            </tr>
            <tr>
                <td>Book Records</td>
                <td>Interest Earned / Collections</td>
                <td>Add ($+$)</td>
            </tr>
            <tr>
                <td>Book Records</td>
                <td>Bank Fees / NSF Checks</td>
                <td>Subtract ($-$)</td>
            </tr>
        </tbody>
    </table>

    <h3>Conclusion: The Importance of Accuracy</h3>
    <p>Correctly identifying outstanding checks ensures that a company’s <strong>Adjusted Bank Balance</strong> matches its <strong>Adjusted Book Balance</strong>. This process does more than just fix math; it acts as a safeguard against fraud and provides management with a reliable "snapshot" of actual liquidity, allowing for smarter decisions regarding investments and growth.</p>

    </div>
</div>

<div class="slide" id="slide-sAaVq05" data-question-id="sAaVq05" data-type="Theory" data-set="Set A" data-difficulty="Average" data-topic="Income and Business Taxation" data-answer="C" data-points="6">
    <div class="quiz-container">
        <div class="topic-text">Topic: Income and Business Taxation</div>
        <div class="question-text">In Philippine taxation, what type of tax is applied to entities whose gross sales or receipts do not exceed the VAT registration threshold?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="mcq-option" onclick="selectOption('sAaVq05', 'A')">A) Income Tax</li>
            <li class="mcq-option" onclick="selectOption('sAaVq05', 'B')">B) Excise Tax</li>
            <li class="mcq-option" onclick="selectOption('sAaVq05', 'C')">C) Percentage Tax</li>
            <li class="mcq-option" onclick="selectOption('sAaVq05', 'D')">D) Documentary Stamp Tax</li>
        </ul>
        <input type="hidden" id="input-sAaVq05" value="">
        <button class="submit-btn" id="submit-sAaVq05" onclick="submitAnswer('sAaVq05')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAaVq05" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAaVq05"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Income and Business Taxation</h2>
        <div class="book-content-question">In Philippine taxation, what type of tax is applied to entities whose gross sales or receipts do not exceed the VAT registration threshold?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="book-mcq-option">A) Income Tax</li>
            <li class="book-mcq-option">B) Excise Tax</li>
            <li class="book-mcq-option">C) Percentage Tax</li>
            <li class="book-mcq-option">D) Documentary Stamp Tax</li>
        </ul>
        <p class="correct-line"><strong>Correct Answer: C) Percentage Tax</strong></p>
        <p>Percentage Tax is a business tax imposed on individuals or businesses that sell or lease goods, properties, or services, and whose gross annual sales or receipts do not exceed the VAT threshold.</p>
        <h3>The VAT Registration Threshold</h3>
    <p>In the Philippine tax system, businesses are primarily classified as either <strong>VAT-registered</strong> or <strong>Non-VAT</strong>. The determining factor for this classification is the <strong>VAT registration threshold</strong>, which is currently set at $₱3,000,000$ in annual gross sales or receipts, as updated by the <strong>TRAIN Law</strong> (Republic Act No. 10963).</p>
    
    <p>Entities that exceed this threshold are required to pay the $12\%$ Value-Added Tax (VAT), which is an <em>indirect tax</em> that can be passed on to customers. However, for small businesses, freelancers, and professionals whose annual earnings stay <strong>below the threshold</strong>, the Bureau of Internal Revenue (BIR) imposes a simpler <strong>Percentage Tax</strong> (also known as Other Percentage Tax).</p>

    <h3>Core Analysis: Percentage Tax (The Correct Choice)</h3>
    <p><strong>Percentage Tax</strong> is a direct business tax calculated based on a fixed percentage of the company’s <strong>gross quarterly sales or receipts</strong>.
    <ul>
        <li><strong>The Rate:</strong> The standard rate is $3\%$, though temporary adjustments (like the $1\%$ rate under the CREATE Law) are sometimes implemented during economic shifts.</li>
        <li><strong>Nature:</strong> Unlike VAT, Percentage Tax is a <em>direct tax</em>, meaning it is shouldered by the taxpayer and cannot be legally passed on to the customer by adding it to the invoice.</li>
        <li><strong>Benefit:</strong> It is significantly easier to compute than VAT because the business does not need to track "input" and "output" taxes—they simply pay a percentage of what they earned.</li>
    </ul></p>

    <h3>Analysis of Alternative (Incorrect) Options</h3>
    <p>While the other options are valid Philippine taxes, they serve entirely different fiscal purposes and are not the primary tax for small-scale revenue entities:</p>

    <p><strong>A) Income Tax:</strong>
    Income tax is a national tax imposed on <strong>net earnings</strong> (profit) rather than gross sales.
    <ul>
        <li><em>Relationship:</em> Every business must pay Income Tax <em>in addition</em> to their business tax (VAT or Percentage Tax). While Percentage Tax is based on what you <strong>sold</strong>, Income Tax is based on what you <strong>kept</strong> after expenses. An entity is never exempt from Income Tax just because they are below the VAT threshold.</li>
    </ul></p>

    <p><strong>B) Excise Tax:</strong>
    Excise tax is an "add-on" tax applied to the production, sale, or consumption of <strong>specific commodities</strong> manufactured or produced in the Philippines (e.g., alcohol, tobacco, fuel, automobiles).
    <ul>
        <li><em>Relationship:</em> Excise taxes are intended to raise revenue or discourage the consumption of "sin products" or luxuries. It is applied regardless of whether the business is large or small; a small tobacco shop earns low receipts, but the products themselves are still subject to excise tax before they ever reach the shelf.</li>
    </ul></p>

    <p><strong>D) Documentary Stamp Tax (DST):</strong>
    DST is an excise-natured tax levied on <strong>documents, instruments, and papers</strong> that evidence the acceptance or transfer of an obligation, right, or property (e.g., loan agreements, deeds of sale, issuance of shares).
    <ul>
        <li><em>Relationship:</em> DST is triggered by the <strong>execution of a document</strong>, not by the business's total annual volume of sales. For example, a small shop pays DST on its lease agreement, but that is unrelated to whether its annual sales are above or below the $₱3,000,000$ threshold.</li>
    </ul></p>

    <h3>Comparison Summary Table</h3>
    <table>
        <thead>
            <tr>
                <th>Tax Type</th>
                <th>Tax Base</th>
                <th>Triggering Factor</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Percentage Tax</strong></td>
                <td>Gross Sales/Receipts</td>
                <td><strong>Earnings $\le ₱3,000,000$ (Non-VAT)</strong></td>
            </tr>
            <tr>
                <td>Value-Added Tax (VAT)</td>
                <td>Gross Sales/Receipts</td>
                <td>Earnings $> ₱3,000,000$ (Mandatory)</td>
            </tr>
            <tr>
                <td>Income Tax</td>
                <td>Net Taxable Income</td>
                <td>Profitability / Net Earnings</td>
            </tr>
            <tr>
                <td>Excise Tax</td>
                <td>Units / Weight / Value</td>
                <td>Specific goods (Sin, fuel, etc.)</td>
            </tr>
            <tr>
                <td>Doc. Stamp Tax</td>
                <td>Face Value of Document</td>
                <td>Execution of specific legal papers</td>
            </tr>
        </tbody>
    </table>

    <h3>Conclusion</h3>
    <p>The <strong>Percentage Tax</strong> serves as a relief for micro, small, and medium enterprises (MSMEs) by providing a simplified tax structure. It ensures that businesses with modest revenues do not have to deal with the administrative complexity of the VAT system while still fulfilling their obligation to contribute to national revenue based on their commercial activity.</p>

    </div>
</div>

<div class="slide" id="slide-sAaVq06" data-question-id="sAaVq06" data-type="Problem Solving" data-set="Set A" data-difficulty="Average" data-topic="Statement of Comprehensive Income" data-answer="50000" data-points="6">
    <div class="quiz-container">
        <div class="topic-text">Topic: Statement of Comprehensive Income</div>
        <div class="question-text">A merchandising business has Net Sales of ₱250,000, Cost of Goods Sold of ₱140,000, and Operating Expenses of ₱60,000. What is the Net Income? (Enter numbers only)</div>
        <input type="number" class="input-field" id="input-sAaVq06" placeholder="Enter numerical amount...">
        <button class="submit-btn" id="submit-sAaVq06" onclick="submitAnswer('sAaVq06')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAaVq06" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAaVq06"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Statement of Comprehensive Income</h2>
        <div class="book-content-question">A merchandising business has Net Sales of ₱250,000, Cost of Goods Sold of ₱140,000, and Operating Expenses of ₱60,000. What is the Net Income? (Enter numbers only)</div>
        <p class="correct-line"><strong>Correct Answer: 50,000</strong></p>
        <p>First, calculate Gross Profit: Net Sales (250,000) - Cost of Goods Sold (140,000) = 110,000. Then subtract Operating Expenses: Gross Profit (110,000) - Operating Expenses (60,000) = ₱50,000 Net Income.</p>
        <h3>1. Analysis of Problem Factors and Elements</h3>
    <p>In a merchandising business, the Statement of Comprehensive Income (Income Statement) identifies the various layers of profit. In this specific problem, <strong>all three provided amounts are essential components</strong> of the final solution because they represent the three core stages of the merchandising profit cycle.</p>

    <ul>
        <li><strong>Net Sales (₱250,000):</strong> This is a <strong>core part</strong> of the solution. It represents the primary source of revenue—the total amount received from customers for goods sold, after deducting returns and discounts. It serves as the mathematical starting point.</li>
        <li><strong>Cost of Goods Sold (COGS) (₱140,000):</strong> This is a <strong>core part</strong> of the solution. It represents the direct cost incurred to purchase or produce the inventory that was sold during the period. This factor is required to calculate the "trading profit" or Gross Profit.</li>
        <li><strong>Operating Expenses (₱60,000):</strong> This is a <strong>core part</strong> of the solution. These are the indirect, daily costs of running the business, such as salaries, rent, and utilities. This factor is required to move from Gross Profit to the final Net Income.</li>
    </ul>

    <h3>2. The Logic: The Multi-Step Income Statement</h3>
    <p>Merchandising businesses typically use a multi-step format to distinguish between the <strong>Gross Profit</strong> (the margin made directly on the goods) and <strong>Net Income</strong> (the final profit after all other business costs are paid). The logic follows that the business must first cover the cost of its inventory before it can even begin to address its operating overhead.</p>

    <h3>3. Step-by-Step Solution</h3>
    <p>We solve the problem by applying the merchandising income formula in two distinct stages:</p>

    <table>
        <thead>
            <tr>
                <th>Step</th>
                <th>Action</th>
                <th>Formula / Calculation</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Calculate Gross Profit</td>
                <td>$Net Sales - COGS$ <br> $₱250,000 - ₱140,000$</td>
                <td>₱110,000</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Calculate Net Income</td>
                <td>$Gross Profit - Operating Expenses$ <br> $₱110,000 - ₱60,000$</td>
                <td><strong>₱50,000</strong></td>
            </tr>
        </tbody>
    </table>

    <h3>4. Why No Factors were Excluded</h3>
    <p>There were no "distractor" elements in this problem. For example, if the problem had mentioned <strong>"Beginning Inventory"</strong> or <strong>"Purchase Discounts,"</strong> these might have been excluded if the COGS was already provided, as COGS is a summary figure that already incorporates those values. Similarly, if <strong>"Interest Expense"</strong> were mentioned, it would be treated as a non-operating expense and subtracted <em>after</em> calculating operating income, but it would still be part of the final Net Income calculation.</p>

    <h3>Conclusion</h3>
    <p>The final amount of <strong>₱50,000</strong> represents the "bottom line"—the actual profit the company has earned during the period that can be reinvested into the business or distributed to owners.[1] Understanding this flow ensures that managers can pinpoint whether a lack of profit is due to high inventory costs (low Gross Profit) or excessive administrative overhead (high Operating Expenses).</p>

    </div>
</div>

<div class="slide" id="slide-sAaVq07" data-question-id="sAaVq07" data-type="Problem Solving" data-set="Set A" data-difficulty="Average" data-topic="Statement of Changes in Equity" data-answer="200000" data-points="6">
    <div class="quiz-container">
        <div class="topic-text">Topic: Statement of Changes in Equity</div>
        <div class="question-text">The beginning capital of a sole proprietorship is ₱150,000. During the year, the owner made an additional investment of ₱20,000, withdrew ₱15,000 for personal use, and the business earned a net income of ₱45,000. What is the ending capital balance? (Enter numbers only)</div>
        <input type="number" class="input-field" id="input-sAaVq07" placeholder="Enter numerical amount...">
        <button class="submit-btn" id="submit-sAaVq07" onclick="submitAnswer('sAaVq07')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAaVq07" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAaVq07"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Statement of Changes in Equity</h2>
        <div class="book-content-question">The beginning capital of a sole proprietorship is ₱150,000. During the year, the owner made an additional investment of ₱20,000, withdrew ₱15,000 for personal use, and the business earned a net income of ₱45,000. What is the ending capital balance? (Enter numbers only)</div>
        <p class="correct-line"><strong>Correct Answer: 200,000</strong></p>
        <p>Ending Capital = Beginning Capital (150,000) + Additional Investment (20,000) + Net Income (45,000) - Withdrawals (15,000). Total = ₱200,000.</p>
        <h3>1. Analysis of Financial Elements (The "Inputs")</h3>
    <p>To solve for Net Income in a merchandising context, we must first understand the specific roles of the three figures provided in the problem. In this case, <strong>all three factors are essential parts of the solution</strong> because they represent the distinct layers of profitability.</p>

    <ul>
        <li><strong>Net Sales (₱250,000):</strong> This is the <strong>primary revenue source</strong>. It represents the total amount received from selling merchandise after deducting sales returns, allowances, and discounts. It serves as the starting point (top line) of the income statement.</li>
        <li><strong>Cost of Goods Sold (COGS) (₱140,000):</strong> This is the <strong>direct cost</strong> associated with the inventory that was actually sold during the period.[1] For a merchandiser, this is typically the most significant expense. It is a "part of the solution" because it must be matched against Net Sales to determine the core markup of the products.</li>
        <li><strong>Operating Expenses (₱60,000):</strong> These are the <strong>indirect costs</strong> required to run the daily business activities, such as salaries, rent, utilities, and marketing.[2, 3] Unlike COGS, these are not tied to a specific item sold but are necessary for the business to exist. They are the final deduction needed to reach the "bottom line" (Net Income).</li>
    </ul>

    <h3>2. The Multi-Step Logic: Gross Profit vs. Net Income</h3>
    <p>A "Merchandising Business" typically uses a <strong>Multi-Step Income Statement</strong>. This format is preferred over a single-step version because it highlights <strong>Gross Profit</strong>—a critical metric that shows whether the company is selling its inventory for significantly more than its purchase cost.[1, 4] If Gross Profit is too low, the business will fail even if its operating expenses are well-managed.</p>

    <p>The logical flow is:
    <ol>
        <li>Determine the <strong>Trading Result</strong> (Gross Profit).</li>
        <li>Determine the <strong>Operating Result</strong> (Net Income).</li>
    </ol></p>

    <h3>3. Step-by-Step Solution</h3>
    <p>We apply the formula for the Statement of Comprehensive Income in two distinct mathematical stages:</p>

    <table>
        <thead>
            <tr>
                <th>Step</th>
                <th>Action</th>
                <th>Formula / Calculation</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>1</strong></td>
                <td>Calculate <strong>Gross Profit</strong></td>
                <td>$Net Sales - COGS$ <br> $₱250,000 - ₱140,000$</td>
                <td><strong>₱110,000</strong></td>
            </tr>
            <tr>
                <td><strong>2</strong></td>
                <td>Calculate <strong>Net Income</strong></td>
                <td>$Gross Profit - Operating Expenses$ <br> $₱110,000 - ₱60,000$</td>
                <td><strong>₱50,000</strong></td>
            </tr>
        </tbody>
    </table>

    <h3>4. Why No Factors were Excluded</h3>
    <p>In some advanced problems, you might be given "Other Comprehensive Income" items (like unrealized gains on investments) or "Non-operating items" (like interest expense).[2, 5] In this specific problem, those were not provided. Because the goal was to find the final "Net Income," we utilized the entire set of data. Had the problem provided <strong>"Ending Inventory"</strong> as an extra amount, it would have been <strong>excluded</strong> from the final subtraction because Ending Inventory is already factored into the calculation of COGS (it represents what was <em>not</em> sold).</p>

    <h3>Conclusion: The "Bottom Line" Significance</h3>
    <p>The resulting <strong>₱50,000 Net Income</strong> represents the final "earnings" of the business for the period. This amount will eventually be transferred to <strong>Retained Earnings</strong> in the Statement of Changes in Equity, effectively increasing the owner's stake in the business. By following this multi-step process, stakeholders can see that for every ₱1.00 of sales, the company keeps ₱0.44 as Gross Profit ($110,000/250,000$) but only ₱0.20 as final Net Income ($50,000/250,000$).</p>

    </div>
</div>

<div class="slide" id="slide-sAaVq08" data-question-id="sAaVq08" data-type="Problem Solving" data-set="Set A" data-difficulty="Average" data-topic="Financial Statement Analysis" data-answer="10" data-points="6">
    <div class="quiz-container">
        <div class="topic-text">Topic: Financial Statement Analysis</div>
        <div class="question-text">A business has a Net Income of ₱60,000 and Average Total Assets of ₱600,000. What is the Return on Assets (ROA) percentage? (Enter the percentage number only, e.g., if 15%, enter 15)</div>
        <input type="number" class="input-field" id="input-sAaVq08" placeholder="Enter numerical amount...">
        <button class="submit-btn" id="submit-sAaVq08" onclick="submitAnswer('sAaVq08')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAaVq08" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAaVq08"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Financial Statement Analysis</h2>
        <div class="book-content-question">A business has a Net Income of ₱60,000 and Average Total Assets of ₱600,000. What is the Return on Assets (ROA) percentage? (Enter the percentage number only, e.g., if 15%, enter 15)</div>
        <p class="correct-line"><strong>Correct Answer: 10</strong></p>
        <p>Return on Assets (ROA) = Net Income / Average Total Assets. (60,000 / 600,000 = 0.10). Multiply by 100 to get the percentage format: 10%.</p>
        <h3>1. Analysis of Problem Factors and Elements</h3>
    <p>In financial ratio analysis, identifying the specific "inputs" from the financial statements is the first step toward a correct calculation. In this problem, both given numerical values are <strong>essential components</strong> of the solution.</p>

    <ul>
        <li><strong>Net Income (₱60,000):</strong> This is a <strong>core part</strong> of the solution. Found at the "bottom line" of the Statement of Comprehensive Income, it represents the final profit after all revenues, expenses, and taxes have been accounted for.[1, 2] It serves as the "Return" in the ROA calculation.</li>
        <li><strong>Average Total Assets (₱600,000):</strong> This is a <strong>core part</strong> of the solution. Assets represent the total economic resources (e.g., cash, equipment, inventory) controlled by the firm to generate income. 
            <ul>
                <li><em>Why "Average"?</em> Because Net Income is earned over a <strong>period of time</strong> (a flow), it must be compared to the assets held throughout that same period. Using the average of beginning and ending assets prevents a skewed result that might occur if a large asset was purchased or sold on the very last day of the year.</li>
            </ul>
        </li>
        <li><strong>The Target: ROA Percentage:</strong> This is a <strong>profitability ratio</strong> that measures how efficiently management uses its assets to generate earnings. It essentially answers: "For every ₱1 of assets we own, how many centavos of profit did we make?"</li>
    </ul>

    <h3>2. The Logic: The Efficiency Framework</h3>
    <p>The <strong>Return on Assets (ROA)</strong> is an indicator of the <strong>utilization efficiency</strong> of a company's resource base. Unlike Net Profit Margin (which compares profit to sales), ROA tells stakeholders how well the company is "putting its tools to work." A higher ROA indicates a more "asset-light" or highly efficient business, while a lower ROA suggests the company may have excessive "idle" assets or high non-operating expenses.</p>

    <h3>3. Step-by-Step Solution</h3>
    <p>The solution requires applying the standard profitability formula and converting the decimal result into the requested format:</p>

    <table>
        <thead>
            <tr>
                <th>Step</th>
                <th>Action</th>
                <th>Formula / Calculation</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>1</strong></td>
                <td>State the ROA formula</td>
                <td>$ROA = \frac{\text{Net Income}}{\text{Average Total Assets}}$</td>
                <td>-</td>
            </tr>
            <tr>
                <td><strong>2</strong></td>
                <td>Substitute the given values</td>
                <td>$\frac{₱60,000}{₱600,000}$</td>
                <td>$0.10$</td>
            </tr>
            <tr>
                <td><strong>3</strong></td>
                <td>Convert to percentage</td>
                <td>$0.10 \times 100$</td>
                <td>$10\%$</td>
            </tr>
        </tbody>
    </table>

    <h3>4. Analysis of Potential Errors (Why Alternative Answers are Incorrect)</h3>
    <p>Understanding where calculations often go wrong helps in verifying the 10% result:</p>
    <ul>
        <li><strong>Decimal Error (0.1):</strong> A student might stop at the decimal stage. While mathematically identical to 10%, the problem specifically asks for the "percentage number only," making 0.1 technically incorrect in the context of the input field.</li>
        <li><strong>Inverse Error (1000):</strong> This occurs if a student divides Assets by Income ($\frac{600,000}{60,000} = 10$). This would incorrectly represent the "Asset-to-Income" ratio, which is not a standard measure of return.</li>
        <li><strong>Multiplication Error (3.6B):</strong> Multiplying the two values ($60,000 \times 600,000$) yields a nonsensical number that ignores the "rate of return" logic fundamental to finance.</li>
    </ul>

    <h3>Conclusion: Significance of the 10% ROA</h3>
    <p>A <strong>10% ROA</strong> means that for every peso invested in the company's assets, the business generated 10 centavos of profit. For management, this provides a benchmark for future performance and capital allocation decisions. For investors, this ratio allows for a "level-playing field" comparison between companies of different sizes; a large company and a small company can both be evaluated on their ability to generate a 10% return on whatever resources they have available.</p>

    </div>
</div>

<div class="slide" id="slide-sAaVq09" data-question-id="sAaVq09" data-type="Problem Solving" data-set="Set A" data-difficulty="Average" data-topic="Bank Reconciliation Statement" data-answer="92000" data-points="6">
    <div class="quiz-container">
        <div class="topic-text">Topic: Bank Reconciliation Statement</div>
        <div class="question-text">The cash balance per bank statement is ₱85,000. There is a deposit in transit of ₱15,000 and outstanding checks totaling ₱8,000. What is the adjusted cash balance? (Enter numbers only)</div>
        <input type="number" class="input-field" id="input-sAaVq09" placeholder="Enter numerical amount...">
        <button class="submit-btn" id="submit-sAaVq09" onclick="submitAnswer('sAaVq09')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAaVq09" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAaVq09"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Bank Reconciliation Statement</h2>
        <div class="book-content-question">The cash balance per bank statement is ₱85,000. There is a deposit in transit of ₱15,000 and outstanding checks totaling ₱8,000. What is the adjusted cash balance? (Enter numbers only)</div>
        <p class="correct-line"><strong>Correct Answer: 92,000</strong></p>
        <p>Adjusted Bank Balance = Unadjusted Bank Balance (85,000) + Deposits in Transit (15,000) - Outstanding Checks (8,000) = ₱92,000.</p>
        <h3>1. Analysis of Problem Factors and Elements</h3>
    <p>To determine the "Adjusted Cash Balance," we must identify which items have already been recorded by the business but are missing from the bank's records due to timing differences. In this problem, <strong>all three numerical factors are essential components</strong> of the calculation:</p>

    <ul>
        <li><strong>Cash Balance per Bank Statement (₱85,000):</strong> This is the <strong>starting point</strong> of the solution. It represents the amount of cash the bank believes the company has at the end of the reporting period. It is unadjusted because it does not yet account for transactions currently "in the mail" or "in limbo."</li>
        <li><strong>Deposit in Transit (₱15,000):</strong> This is a <strong>core part</strong> of the solution. It refers to cash receipts that the company has already recorded and deposited, but which the bank has not yet processed. Since this money is already in the bank's possession (or will be shortly), it must be <strong>added</strong> to the bank balance.</li>
        <li><strong>Outstanding Checks (₱8,000):</strong> This is a <strong>core part</strong> of the solution. These are checks written and recorded by the business but not yet presented to the bank for payment. From the company's perspective, this money is already spent, so it must be <strong>deducted</strong> from the bank balance to show the true available cash.</li>
    </ul>

    <h3>2. The Logic: Adjusted Bank vs. Adjusted Book Balance</h3>
    <p>The goal of a bank reconciliation is to reach the <strong>True Cash Balance</strong>. A complete reconciliation has two sides: the bank side and the book side. In this specific problem, we are only given bank-side information. Because the adjusted bank balance <strong>must equal</strong> the adjusted book balance in a correct reconciliation, solving the bank side effectively gives us the final answer for the entire company.</p>

    <h3>3. Step-by-Step Solution</h3>
    <p>We apply the standard bank-side reconciliation formula to arrive at the final result:</p>

    <table>
        <thead>
            <tr>
                <th>Step</th>
                <th>Action</th>
                <th>Formula / Calculation</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>1</strong></td>
                <td>Identify Unadjusted Balance</td>
                <td>₱85,000</td>
                <td>₱85,000</td>
            </tr>
            <tr>
                <td><strong>2</strong></td>
                <td>Add Deposits in Transit</td>
                <td>$85,000 + 15,000$</td>
                <td>₱100,000</td>
            </tr>
            <tr>
                <td><strong>3</strong></td>
                <td>Deduct Outstanding Checks</td>
                <td>$100,000 - 8,000$</td>
                <td><strong>₱92,000</strong></td>
            </tr>
        </tbody>
    </table>

    <h3>4. Why No Factors were Excluded</h3>
    <p>In this problem, no information was provided regarding "Book Side" items, such as bank service charges, NSF checks, or interest earned. If these had been provided <em>alongside</em> the bank balance, they would have been <strong>excluded</strong> from this specific calculation. Why? Because book-side items adjust the company's internal records, not the bank statement balance. Since we started with the bank's figure, we only apply adjustments that the bank is unaware of.</p>

    <h3>Conclusion: The Importance of the Adjusted Balance</h3>
    <p>The resulting <strong>₱92,000 Adjusted Cash Balance</strong> represents the actual amount of cash available for the business to use. If the company were to ignore these adjustments and rely solely on the ₱85,000 shown on the statement, they would be understating their wealth. Conversely, if they didn't account for the ₱8,000 in outstanding checks, they might accidentally overspend and trigger <strong>non-sufficient funds (NSF)</strong> fees or overdrafts.</p>

    </div>
</div>

<div class="slide" id="slide-sAaVq10" data-question-id="sAaVq10" data-type="Problem Solving" data-set="Set A" data-difficulty="Average" data-topic="Cash Flow Statement" data-answer="125000" data-points="6">
    <div class="quiz-container">
        <div class="topic-text">Topic: Cash Flow Statement</div>
        <div class="question-text">A company generated ₱120,000 from operating activities, spent ₱50,000 on investing activities, and received ₱30,000 from financing activities. If the beginning cash balance was ₱25,000, what is the ending cash balance? (Enter numbers only)</div>
        <input type="number" class="input-field" id="input-sAaVq10" placeholder="Enter numerical amount...">
        <button class="submit-btn" id="submit-sAaVq10" onclick="submitAnswer('sAaVq10')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAaVq10" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAaVq10"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Cash Flow Statement</h2>
        <div class="book-content-question">A company generated ₱120,000 from operating activities, spent ₱50,000 on investing activities, and received ₱30,000 from financing activities. If the beginning cash balance was ₱25,000, what is the ending cash balance? (Enter numbers only)</div>
        <p class="correct-line"><strong>Correct Answer: 125,000</strong></p>
        <p>Net Increase in Cash = Operating Cash (120,000) - Investing Cash outflow (50,000) + Financing Cash inflow (30,000) = 100,000. Ending Cash = Net Increase (100,000) + Beginning Cash (25,000) = ₱125,000.</p>
        <h3>1. Analysis of Problem Factors and Elements</h3>
    <p>A Cash Flow Statement provides a clear picture of an entity's liquidity by tracking how cash is generated and spent across three distinct business activities. In this problem, <strong>all four numerical factors are essential</strong> to finding the final ending balance:</p>

    <ul>
        <li><strong>Operating Activities (₱120,000 Inflow):</strong> This represents cash generated from core business operations (e.g., selling goods or services). It is a <strong>positive inflow</strong> and a primary component of the total cash change.</li>
        <li><strong>Investing Activities (₱50,000 Outflow):</strong> This represents cash <em>spent</em> on long-term assets, such as purchasing property, plant, or equipment. Because the problem states the company "spent" this amount, it must be treated as a <strong>negative outflow</strong> in the calculation.</li>
        <li><strong>Financing Activities (₱30,000 Inflow):</strong> This represents cash <em>received</em> from external sources to fund operations, such as issuing new stock or taking out a bank loan. This is a <strong>positive inflow</strong> that contributes to the total liquidity.</li>
        <li><strong>Beginning Cash Balance (₱25,000):</strong> This is the <strong>starting foundation</strong> for the period. It represents the cash on hand at the end of the <em>previous</em> period, which must be added to the current period's net change to find the final result.</li>
    </ul>

    <h3>2. The Logic: Total Net Change in Cash</h3>
    <p>The goal of the statement is to show the <strong>Net Change in Cash</strong>, which is the sum of the results from the three activity sections.
    $$Net Change = Operating Cash Flow + Investing Cash Flow + Financing Cash Flow$$
    
    Once the net change is determined, it is added to the beginning balance to calculate the "Ending Cash Balance," which must match the cash amount reported on the company's year-end Balance Sheet.</p>

    <h3>3. Step-by-Step Solution</h3>
    <table>
        <thead>
            <tr>
                <th>Step</th>
                <th>Action</th>
                <th>Formula / Calculation</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>1</strong></td>
                <td>Determine <strong>Net Change in Cash</strong></td>
                <td>$₱120,000 + (-₱50,000) + ₱30,000$</td>
                <td><strong>₱100,000 (Increase)</strong></td>
            </tr>
            <tr>
                <td><strong>2</strong></td>
                <td>Identify <strong>Beginning Balance</strong></td>
                <td>Given in the problem</td>
                <td>₱25,000</td>
            </tr>
            <tr>
                <td><strong>3</strong></td>
                <td>Calculate <strong>Ending Cash Balance</strong></td>
                <td>$Net Change + Beginning Balance$ <br> $₱100,000 + ₱25,000$</td>
                <td><strong>₱125,000</strong></td>
            </tr>
        </tbody>
    </table>

    <h3>4. Why No Factors were Excluded</h3>
    <p>In this specific case, every amount provided represented an actual cash movement or a required starting/ending point. However, in more complex scenarios, "non-cash transactions" might be mentioned to test your understanding. For example, if the problem had mentioned <strong>"₱10,000 Depreciation Expense"</strong> or <strong>"₱40,000 Stock issued in exchange for Land,"</strong> these would have been <strong>excluded</strong> from the mathematical calculation of the cash balance because no physical money changed hands. We only include items that impact the actual "checkbook" of the business.</p>

    <h3>Conclusion: Significance of the Results</h3>
    <p>The company ended the period with <strong>₱125,000</strong>. Analysis of this result shows a healthy trend: the core business (Operating Activities) generated ₱120,000, which was more than enough to cover the company's infrastructure growth (₱50,000 Investing) and still allow the company to build up its cash reserves. Regularly reviewing these totals helps management plan future investments and ensure they can meet their financial obligations without excessive borrowing.</p>
    </div>
</div>

<div class="slide" id="slide-sAdIq01" data-question-id="sAdIq01" data-type="Theory" data-set="Set A" data-difficulty="Difficult" data-topic="Statement of Financial Position" data-answer="B" data-points="9">
    <div class="quiz-container">
        <div class="topic-text">Topic: Statement of Financial Position</div>
        <div class="question-text">Under PAS 1 (Presentation of Financial Statements), which of the following must be presented as a separate minimum line item on the face of the Statement of Financial Position?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="mcq-option" onclick="selectOption('sAdIq01', 'A')">A) Contingent Liabilities</li>
            <li class="mcq-option" onclick="selectOption('sAdIq01', 'B')">B) Biological Assets</li>
            <li class="mcq-option" onclick="selectOption('sAdIq01', 'C')">C) Advances to Officers</li>
            <li class="mcq-option" onclick="selectOption('sAdIq01', 'D')">D) Unappropriated Retained Earnings</li>
        </ul>
        <input type="hidden" id="input-sAdIq01" value="">
        <button class="submit-btn" id="submit-sAdIq01" onclick="submitAnswer('sAdIq01')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAdIq01" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAdIq01"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Statement of Financial Position</h2>
        <div class="book-content-question">Under PAS 1 (Presentation of Financial Statements), which of the following must be presented as a separate minimum line item on the face of the Statement of Financial Position?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="book-mcq-option">A) Contingent Liabilities</li>
            <li class="book-mcq-option">B) Biological Assets</li>
            <li class="book-mcq-option">C) Advances to Officers</li>
            <li class="book-mcq-option">D) Unappropriated Retained Earnings</li>
        </ul>
        <p class="correct-line"><strong>Correct Answer: B) Biological Assets</strong></p>
        <p>In standard financial reporting frameworks, PAS 1 mandates specific line items to be shown on the face of the SFP if applicable. Biological assets are explicitly required. Contingent liabilities are disclosed in the notes, not on the face. Advances and specific equity breakdowns are generally lumped or shown in the notes or the Statement of Changes in Equity.</p>
        <h3>The Regulatory Framework of PAS 1</h3>
    <p><strong>PAS 1 (Presentation of Financial Statements)</strong> prescribes the basis for presenting general-purpose financial statements to ensure comparability both with the entity's own previous records and with those of other entities. A critical component of this standard is Paragraph 54, which identifies a <strong>minimum list</strong> of line items that must be presented on the face of the <strong>Statement of Financial Position (SFP)</strong>. These items are deemed sufficiently distinct in nature or function to warrant separate visibility to users of the financial statements.</p>

    <h3>Core Analysis: Biological Assets (The Correct Choice)</h3>
    <p><strong>Biological assets</strong> (defined under PAS 41 as living animals or plants) are explicitly required by PAS 1 to be shown as a separate line item on the face of the SFP. 
    <ul>
        <li><strong>The Rationale:</strong> Biological assets have unique characteristics, such as natural transformation (growth, degeneration, and procreation), which require a distinct measurement basis—typically fair value less costs to sell. Because their economic behavior differs significantly from traditional Property, Plant, and Equipment (PPE) or Inventories, they must be isolated to ensure fair representation of the entity’s productive resources.</li>
    </ul></p>

    <h3>Analysis of Alternative (Incorrect) Options</h3>
    <p>Understanding why the other options are excluded from the "mandatory line item" list involves applying the principles of <strong>Materiality and Aggregation</strong>.</p>

    <p><strong>A) Contingent Liabilities: The Disclosure Boundary</strong><br>
    A contingent liability is a potential obligation that depends on the outcome of an uncertain future event (e.g., a pending lawsuit).
    <ul>
        <li><em>Relationship:</em> Under PAS 37, contingent liabilities do not meet the criteria for recognition as a liability on the face of the SFP because they are not yet probable or cannot be measured with sufficient reliability.</li>
        <li><em>Why it's incorrect:</em> PAS 1 mandates that <strong>Provisions</strong> (liabilities of uncertain timing or amount that <em>are</em> probable) be shown on the face, but contingent liabilities are relegated to the <strong>Notes to the Financial Statements</strong>. Including them on the face would violate the fundamental definition of the accounting equation: $Assets = Liabilities + Equity$.[1, 2]</li>
    </ul></p>

    <p><strong>C) Advances to Officers: The Aggregation Principle</strong><br>
    These represent short-term loans or prepayments made by the company to its internal management personnel.
    <ul>
        <li><em>Relationship:</em> While these are valid assets, they fall under the broader functional category of <strong>Trade and other receivables</strong>.</li>
        <li><em>Why it's incorrect:</em> PAS 1 requires the face of the SFP to show "Trade and other receivables" as a summary line item. Specific details, such as the breakdown between trade customers and advances to related parties (officers), are typically disclosed in the <strong>Notes</strong> or a subsidiary schedule. Separating them on the face is permitted if material, but it is not a *mandatory minimum* requirement of the standard.</li>
    </ul></p>

    <p><strong>D) Unappropriated Retained Earnings: The Equity Sub-category</strong><br>
    Retained earnings represent the cumulative profit the company has kept rather than distributed as dividends. "Unappropriated" refers to the portion not restricted for specific future uses.
    <ul>
        <li><em>Relationship:</em> This is a sub-component of the equity section.</li>
        <li><em>Why it's incorrect:</em> PAS 1 requires the face of the SFP to show a summary line item for <strong>Issued capital and reserves attributable to owners of the parent</strong>. The granular breakdown of those reserves—including the distinction between appropriated and unappropriated retained earnings—is mandatory, but it may be presented either in the <strong>Notes</strong> or in the <strong>Statement of Changes in Equity</strong> rather than on the face of the SFP itself.</li>
    </ul></p>

    <h3>Presentation Summary Table</h3>
    <table>
        <thead>
            <tr>
                <th>Line Item / Account</th>
                <th>Standard Treatment</th>
                <th>PAS 1 Requirement</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Biological Assets</strong></td>
                <td><strong>Face of SFP</strong></td>
                <td><strong>Mandatory (Paragraph 54)</strong></td>
            </tr>
            <tr>
                <td>Provisions</td>
                <td>Face of SFP</td>
                <td>Mandatory</td>
            </tr>
            <tr>
                <td>Contingent Liabilities</td>
                <td>Notes Only</td>
                <td>Mandatory Disclosure</td>
            </tr>
            <tr>
                <td>Advances to Officers</td>
                <td>Notes (usually)</td>
                <td>Aggregated on Face</td>
            </tr>
            <tr>
                <td>Retained Earnings</td>
                <td>Face or Notes</td>
                <td>Aggregated on Face</td>
            </tr>
        </tbody>
    </table>

    <h3>Conclusion: The Goal of Financial Structure</h3>
    <p>The selection of line items for the face of the SFP is guided by the objective of providing information that is <strong>relevant</strong> to the economic decisions of users. By mandating the separation of items like biological assets, investment property, and financial assets, PAS 1 ensures that the liquidity, solvency, and operational capacity of an entity are clearly visible through its structural narrative. Any further detail that might clutter this "high-level story" is properly moved to the supplementary notes.</p>

    </div>
</div>

<div class="slide" id="slide-sAdIq02" data-question-id="sAdIq02" data-type="Theory" data-set="Set A" data-difficulty="Difficult" data-topic="Cash Flow Statement" data-answer="D" data-points="9">
    <div class="quiz-container">
        <div class="topic-text">Topic: Cash Flow Statement</div>
        <div class="question-text">An entity purchased a highly liquid 3-month Treasury bill using its excess cash in the bank. How should this specific transaction be reported in the Statement of Cash Flows?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="mcq-option" onclick="selectOption('sAdIq02', 'A')">A) As an outflow from investing activities</li>
            <li class="mcq-option" onclick="selectOption('sAdIq02', 'B')">B) As an outflow from operating activities</li>
            <li class="mcq-option" onclick="selectOption('sAdIq02', 'C')">C) As a deduction to arrive at cash and cash equivalents</li>
            <li class="mcq-option" onclick="selectOption('sAdIq02', 'D')">D) It is not reported as a cash inflow or outflow</li>
        </ul>
        <input type="hidden" id="input-sAdIq02" value="">
        <button class="submit-btn" id="submit-sAdIq02" onclick="submitAnswer('sAdIq02')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAdIq02" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAdIq02"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Cash Flow Statement</h2>
        <div class="book-content-question">An entity purchased a highly liquid 3-month Treasury bill using its excess cash in the bank. How should this specific transaction be reported in the Statement of Cash Flows?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="book-mcq-option">A) As an outflow from investing activities</li>
            <li class="book-mcq-option">B) As an outflow from operating activities</li>
            <li class="book-mcq-option">C) As a deduction to arrive at cash and cash equivalents</li>
            <li class="book-mcq-option">D) It is not reported as a cash inflow or outflow</li>
        </ul>
        <p class="correct-line"><strong>Correct Answer: D) It is not reported as a cash inflow or outflow</strong></p>
        <p>A classic board-level conceptual question: The purchase of a 3-month Treasury bill is merely a transfer between "Cash" and "Cash Equivalents". Since both are part of the total cash pool being reconciled in the CFS, the transaction itself does not constitute a cash flow (inflow or outflow) for the entity.</p>
        <h3>The Conceptual Framework: Defining the Scope of the CFS</h3>
    <p>The <strong>Statement of Cash Flows (CFS)</strong> is designed to provide information about the changes in <strong>Cash and Cash Equivalents (CCE)</strong> of an entity for a specific period. A crucial, yet often misunderstood, principle of this statement is that it reports movements into and out of the "CCE pool" as a whole, rather than movements <em>between</em> items within that pool.</p>

    <p>According to <strong>PAS 7 (Statement of Cash Flows)</strong>, cash equivalents are short-term, highly liquid investments that are readily convertible to known amounts of cash and which are subject to an insignificant risk of changes in value.[1, 2] Generally, an investment only qualifies as a cash equivalent when it has a short maturity of, say, <strong>three months or less</strong> from the date of acquisition.</p>

    <h3>Core Analysis: The Treasury Bill Transaction</h3>
    <p>In this problem, the entity is moving funds from "Cash in Bank" to a "3-month Treasury Bill." 
    <ul>
        <li><strong>Cash in Bank:</strong> Meets the definition of "Cash."[1]</li>
        <li><strong>3-month Treasury Bill:</strong> Meets the definition of a "Cash Equivalent" due to its short maturity and high liquidity.</li>
    </ul>
    Because both accounts belong to the same CCE classification, the transaction is essentially an internal transfer—much like moving money from a savings account to a checking account. Since the <strong>total balance</strong> of "Cash and Cash Equivalents" remains unchanged, no "flow" has occurred from the perspective of the CFS.</p>

    <h3>Analysis of Alternative (Incorrect) Options</h3>
    <p>To master this concept, we must understand why the other classifications would be misleading:</p>

    <p><strong>A) As an outflow from investing activities:</strong>
    Investing activities typically involve the acquisition and disposal of long-term assets and other investments <em>not</em> included in cash equivalents.[3, 4]
    <ul>
        <li><em>Relationship:</em> If the Treasury bill had a maturity of <strong>one year</strong>, this would be the correct answer. Long-term securities are not "cash-like" enough to be in the pool, so buying them would represent cash leaving the pool to acquire a non-cash asset.[3] However, for a 3-month bill, the asset is considered "near-cash" and stays inside the pool limits.</li>
    </ul></p>

    <p><strong>B) As an outflow from operating activities:</strong>
    Operating activities primarily derive from the principal revenue-producing activities of the entity.
    <ul>
        <li><em>Relationship:</em> Operating cash flows include cash receipts from sales and payments to suppliers or employees.[3, 5] Buying a government security is a financial management decision, not a day-to-day operational expense (like paying rent or utilities), and thus can never be an operating outflow.</li>
    </ul></p>

    <p><strong>C) As a deduction to arrive at cash and cash equivalents:</strong>
    This choice is a technical distractor.
    <ul>
        <li><em>Relationship:</em> Cash equivalents are <strong>added</strong> to cash to arrive at the final figure reported on the Statement of Financial Position.[6, 7] They are never deducted to "arrive" at the total; they *are* a component of the total. Furthermore, the CFS reconciles the *change* in the total pool, not the mechanical addition of its parts.</li>
    </ul></p>

    <h3>Summary Classification Table</h3>
    <table>
        <thead>
            <tr>
                <th>Item Purchased</th>
                <th>Maturity from Acquisition</th>
                <th>Classification</th>
                <th>CFS Reporting Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Treasury Bill</strong></td>
                <td><strong>$\le$ 3 Months</strong></td>
                <td><strong>Cash Equivalent</strong></td>
                <td><strong>No Flow (Internal Transfer)</strong></td>
            </tr>
            <tr>
                <td>Treasury Bill</td>
                <td>$>$ 3 Months (e.g., 6 months)</td>
                <td>Short-term Investment</td>
                <td>Investing Activity (Outflow)</td>
            </tr>
            <tr>
                <td>Corporate Bonds</td>
                <td>Long-term (e.g., 5 years)</td>
                <td>Non-current Asset</td>
                <td>Investing Activity (Outflow)</td>
            </tr>
            <tr>
                <td>Inventory</td>
                <td>N/A</td>
                <td>Current Asset</td>
                <td>Operating Activity (Outflow)</td>
            </tr>
        </tbody>
    </table>

    <h3>Conclusion</h3>
    <p>The "Cash and Cash Equivalents" line item is treated as a single, unified bucket of liquidity. Professional accountants must distinguish between investments that represent a <strong>use of cash</strong> (Investments) and investments that are merely <strong>temporary storage for cash</strong> (Cash Equivalents). Because a 3-month Treasury bill is a form of temporary storage, its acquisition does not constitute a "cash flow" event for the entity.</p>
    </div>
</div>

<div class="slide" id="slide-sAdIq03" data-question-id="sAdIq03" data-type="Theory" data-set="Set A" data-difficulty="Difficult" data-topic="Bank Reconciliation Statement" data-answer="C" data-points="9">
    <div class="quiz-container">
        <div class="topic-text">Topic: Bank Reconciliation Statement</div>
        <div class="question-text">A check drawn by a company for ₱5,400 in payment of an account payable was mistakenly recorded in the company's journal as ₱4,500. How is this error treated in the bank reconciliation?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="mcq-option" onclick="selectOption('sAdIq03', 'A')">A) Addition to the bank balance</li>
            <li class="mcq-option" onclick="selectOption('sAdIq03', 'B')">B) Deduction from the bank balance</li>
            <li class="mcq-option" onclick="selectOption('sAdIq03', 'C')">C) Deduction from the book balance</li>
            <li class="mcq-option" onclick="selectOption('sAdIq03', 'D')">D) Addition to the book balance</li>
        </ul>
        <input type="hidden" id="input-sAdIq03" value="">
        <button class="submit-btn" id="submit-sAdIq03" onclick="submitAnswer('sAdIq03')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAdIq03" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAdIq03"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Bank Reconciliation Statement</h2>
        <div class="book-content-question">A check drawn by a company for ₱5,400 in payment of an account payable was mistakenly recorded in the company's journal as ₱4,500. How is this error treated in the bank reconciliation?</div>
        <ul style="list-style: none; padding: 0;">
            <li class="book-mcq-option">A) Addition to the bank balance</li>
            <li class="book-mcq-option">B) Deduction from the bank balance</li>
            <li class="book-mcq-option">C) Deduction from the book balance</li>
            <li class="book-mcq-option">D) Addition to the book balance</li>
        </ul>
        <p class="correct-line"><strong>Correct Answer: C) Deduction from the book balance</strong></p>
        <p>The company issued a check for ₱5,400 but only deducted ₱4,500 in its books (an under-deduction of ₱900). To correct the book balance to match reality (and the bank, which cleared the true ₱5,400 amount), the company must deduct the remaining ₱900 from the book balance.</p>
        <h3>The Mechanics of Book Errors</h3>
    <p>A bank reconciliation statement is a critical accounting control used to verify that the general ledger reflects the company's actual cash position by accounting for discrepancies between the internal records and the bank statement. While many differences arise from "timing" (like deposits in transit), others arise from <strong>clerical errors</strong>.</p>

    <p>In this scenario, the error is a <strong>Company Error</strong> (Book Error) because the mistake occurred during the journalizing process within the company's own records. The company physically wrote a check for ₱5,400 but only "told" its books that it spent ₱4,500. This resulted in an <strong>under-deduction</strong> of cash in the company's ledger.</p>

    <p>To determine the correction, we look at the difference:
    $$Actual Payment (₱5,400) - Recorded Payment (₱4,500) = Under-deduction (₱900)$$
    Because the books currently show ₱900 more than what actually exists, we must <strong>deduct</strong> ₱900 from the book balance to bring it in line with reality.</p>

    <h3>Analysis of Alternative (Incorrect) Options</h3>
    <p>Understanding the "Who made the mistake?" and "How did it affect the balance?" logic helps identify why the other options are incorrect:</p>

    <p><strong>A) Addition to the bank balance / B) Deduction from the bank balance:</strong>
    The bank-side of the reconciliation is reserved only for <strong>Bank Errors</strong> or items the bank doesn't know about yet (like Deposits in Transit or Outstanding Checks).
    <ul>
        <li><em>Relationship:</em> If the <em>bank</em> had cashed the ₱5,400 check but mistakenly recorded it as ₱4,500 on the statement, then Option B would be the correct adjustment to the bank side.</li>
        <li><em>Why they are incorrect:</em> The prompt explicitly states the error was "recorded in the <strong>company's journal</strong>." Adjusting the bank balance for a company mistake would not resolve the discrepancy; it would double the error.</li>
    </ul></p>

    <p><strong>D) Addition to the book balance:</strong>
    This adjustment would be used if the company had <strong>over-recorded</strong> a payment.
    <ul>
        <li><em>Relationship:</em> If the check was for ₱4,500 but the company mistakenly recorded it as ₱5,400, the company would have subtracted <em>too much</em> from its books. In that case, adding ₱900 back (Option D) would be the correct fix.</li>
        <li><em>Why it is incorrect:</em> In this specific problem, the company spent <em>more</em> than it recorded. Adding ₱900 to the books would make the book balance even higher, moving it further away from the actual ₱5,400 withdrawal.</li>
    </ul></p>

    <h3>Summary Correction Matrix for Payment Errors</h3>
    <table>
        <thead>
            <tr>
                <th>Scenario</th>
                <th>Book Balance Condition</th>
                <th>Adjustment Required</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Recorded amount $<$ Actual Check (Under-recorded)</td>
                <td>Overstated (Too high)</td>
                <td><strong>Deduct ($-$)</strong></td>
            </tr>
            <tr>
                <td>Recorded amount $>$ Actual Check (Over-recorded)</td>
                <td>Understated (Too low)</td>
                <td>Add ($+$)</td>
            </tr>
        </tbody>
    </table>

    <h3>Conclusion: The Goal of Reconciliation</h3>
    <p>Properly classifying this as a book deduction ensures that the <strong>Adjusted Book Balance</strong> matches the <strong>Adjusted Bank Balance</strong>. Once the reconciliation is complete, the company must record an <strong>Adjusting Journal Entry</strong> to officially correct the cash account in the general ledger. Without this step, the company's financial statements would overstate its assets, potentially leading to poor management decisions or overdraft risks.</p>
    </div>
</div>

<div class="slide" id="slide-sAdIq04" data-question-id="sAdIq04" data-type="Problem Solving" data-set="Set A" data-difficulty="Difficult" data-topic="Statement of Comprehensive Income" data-answer="3500000" data-points="9">
    <div class="quiz-container">
        <div class="topic-text">Topic: Statement of Comprehensive Income</div>
        <div class="question-text">An entity reported a Gross Profit of ₱1,500,000. Its ending inventory was ₱400,000, and the total Cost of Goods Available for Sale during the period was ₱2,400,000. Using the reconstruction method, what is the amount of Net Sales? (Enter numbers only)</div>
        <input type="number" class="input-field" id="input-sAdIq04" placeholder="Enter numerical amount...">
        <button class="submit-btn" id="submit-sAdIq04" onclick="submitAnswer('sAdIq04')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAdIq04" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAdIq04"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Statement of Comprehensive Income</h2>
        <div class="book-content-question">An entity reported a Gross Profit of ₱1,500,000. Its ending inventory was ₱400,000, and the total Cost of Goods Available for Sale during the period was ₱2,400,000. Using the reconstruction method, what is the amount of Net Sales? (Enter numbers only)</div>
        <p class="correct-line"><strong>Correct Answer: 3,500,000</strong></p>
        <p>A classic reverse-computation problem: First, find Cost of Goods Sold (COGS). COGS = Goods Available for Sale (2,400,000) - Ending Inventory (400,000) = ₱2,000,000. Since Gross Profit = Net Sales - COGS, then Net Sales = Gross Profit (1,500,000) + COGS (2,000,000) = ₱3,500,000.</p>
        <h3>1. Analysis of Problem Factors and Elements</h3>
    <p>To solve for an "unknown" at the top of the income statement (Net Sales), we must use the **reconstruction method** (also known as the reverse-computation method). This requires identifying how each given element relates to the flow of merchandise costs. In this problem, <strong>all three numerical factors are essential components</strong> of the final solution.</p>

    <ul>
        <li><strong>Gross Profit (₱1,500,000):</strong> This is a <strong>core part</strong> of the solution. It represents the "margin" or the excess of sales over the cost of the inventory sold.[1, 2] It serves as the final link in our reverse calculation.</li>
        <li><strong>Cost of Goods Available for Sale (COGAFS) (₱2,400,000):</strong> This is a <strong>core part</strong> of the solution. It represents the total pool of inventory the business had (Beginning Inventory + Net Purchases) that <em>could</em> have been sold during the period. It is the "source" from which COGS is derived.</li>
        <li><strong>Ending Inventory (₱400,000):</strong> This is a <strong>core part</strong> of the solution. It represents the portion of the COGAFS that remained on the shelves and was <em>not</em> sold. Subtracting this from the total pool reveals the cost of what actually left the building.</li>
    </ul>

    <h3>2. The Logic: The Cost Flow Mechanism</h3>
    <p>The reconstruction method relies on the logic that the Statement of Comprehensive Income for a merchandiser is a sequence of linked equations. 
    <ol>
        <li>First, we determine the **Cost of Goods Sold (COGS)**. COGS is not what we *had*, but what we *gave up* to generate revenue.</li>
        <li>Second, we recognize that **Net Sales** is simply the sum of the cost of the items sold and the profit markup added to them.[1, 2]</li>
    </ol></p>

    <h3>3. Step-by-Step Solution</h3>
    <p>We solve the problem by working backward from the inventory pool to the sales figure:</p>

    <table>
        <thead>
            <tr>
                <th>Step</th>
                <th>Action</th>
                <th>Formula / Calculation</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>1</strong></td>
                <td>Calculate <strong>Cost of Goods Sold (COGS)</strong></td>
                <td>$COGAFS - Ending Inventory$ <br> $₱2,400,000 - ₱400,000$</td>
                <td><strong>₱2,000,000</strong></td>
            </tr>
            <tr>
                <td><strong>2</strong></td>
                <td>State the <strong>Gross Profit Formula</strong></td>
                <td>$Gross Profit = Net Sales - COGS$</td>
                <td>-</td>
            </tr>
            <tr>
                <td><strong>3</strong></td>
                <td>Transpose and solve for <strong>Net Sales</strong></td>
                <td>$Net Sales = Gross Profit + COGS$ <br> $₱1,500,000 + ₱2,000,000$</td>
                <td><strong>₱3,500,000</strong></td>
            </tr>
        </tbody>
    </table>

    <h3>4. Why No Factors were Excluded</h3>
    <p>In this "Difficult" level problem, no distractors were included. However, if the problem had provided <strong>"Operating Expenses"</strong> or <strong>"Net Income,"</strong> those figures would have been <strong>excluded</strong> from the solution. Why? Because Gross Profit is calculated <em>before</em> operating expenses are considered. Adding operating expenses to our calculation would lead us to "Net Income," which was not the target variable requested.</p>

    <h3>Conclusion: The Goal of Reconstruction</h3>
    <p>The resulting <strong>₱3,500,000 Net Sales</strong> tells a complete story: The company started with ₱2,400,000 worth of products available. At the end of the year, ₱400,000 remained, meaning ₱2,000,000 was sold (at cost). To achieve a Gross Profit of ₱1,500,000, the company had to sell those ₱2,000,000 worth of items for a total of ₱3,500,000. This analysis allows management to determine if their 42.8% gross margin ($1.5M / 3.5M$) is sufficient to cover their remaining operating costs.</p>
    </div>
</div>

<div class="slide" id="slide-sAdIq05" data-question-id="sAdIq05" data-type="Problem Solving" data-set="Set A" data-difficulty="Difficult" data-topic="Bank Reconciliation Statement" data-answer="638000" data-points="9">
    <div class="quiz-container">
        <div class="topic-text">Topic: Bank Reconciliation Statement</div>
        <div class="question-text">The bank statement shows an unadjusted balance of ₱600,000. Deposits in transit amount to ₱150,000 and outstanding checks total ₱85,000. Upon investigation, a company check for ₱30,000 issued to a supplier was erroneously cleared by the bank as ₱3,000. What is the correct adjusted cash balance? (Enter numbers only)</div>
        <input type="number" class="input-field" id="input-sAdIq05" placeholder="Enter numerical amount...">
        <button class="submit-btn" id="submit-sAdIq05" onclick="submitAnswer('sAdIq05')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAdIq05" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAdIq05"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Bank Reconciliation Statement</h2>
        <div class="book-content-question">The bank statement shows an unadjusted balance of ₱600,000. Deposits in transit amount to ₱150,000 and outstanding checks total ₱85,000. Upon investigation, a company check for ₱30,000 issued to a supplier was erroneously cleared by the bank as ₱3,000. What is the correct adjusted cash balance? (Enter numbers only)</div>
        <p class="correct-line"><strong>Correct Answer: 638,000</strong></p>
        <p>Adjusted Bank Balance = Unadjusted Bank Balance (600,000) + Deposits in Transit (150,000) - Outstanding Checks (85,000) - Bank Error (27,000). The bank error is a deduction because the bank only cleared ₱3,000 instead of the actual ₱30,000 check, meaning the bank balance is currently overstated by ₱27,000.</p>
        <h3>1. Analysis of Problem Factors and Elements</h3>
    <p>To find the <strong>Adjusted Cash Balance</strong> (the "true" cash position), we must identify all items that the bank is currently unaware of or has recorded incorrectly. In this problem, all four provided amounts are essential components of the solution:</p>

    <ul>
        <li><strong>Unadjusted Bank Balance (₱600,000):</strong> This is the <strong>starting point</strong>. It represents the cash on record at the financial institution, which must be adjusted for timing differences and errors.</li>
        <li><strong>Deposits in Transit (₱150,000):</strong> This is a <strong>core part</strong> of the solution. These are cash receipts already recorded in the company's books but not yet processed by the bank. They represent an <strong>addition</strong> to the bank balance.</li>
        <li><strong>Outstanding Checks (₱85,000):</strong> This is a <strong>core part</strong> of the solution. These are checks written and recorded by the company but not yet presented to the bank for payment. They represent a <strong>deduction</strong> from the bank balance.</li>
        <li><strong>Bank Error (₱27,000):</strong> This is a <strong>critical adjustment</strong>. The bank cleared a ₱30,000 check for only ₱3,000.
            <ul>
                <li><em>The Logic:</em> The bank was supposed to subtract ₱30,000 from the account but only subtracted ₱3,000. This means the bank balance is currently <strong>overstated</strong> (too high) by ₱27,000 ($30,000 - 3,000$). To correct this, we must <strong>deduct</strong> the difference from the statement balance.</li>
            </ul>
        </li>
    </ul>

    <h3>2. The Logic: The Bank-Side Formula</h3>
    <p>The reconciliation process follows a specific mathematical structure for the bank statement side:
    $$Adjusted Balance = Unadjusted Balance + Deposits in Transit - Outstanding Checks \pm Bank Errors$$
    
    Because the adjusted bank balance <strong>must match</strong> the adjusted book balance in a successful reconciliation, solving this side provides the final true cash figure for the entire business.</p>

    <h3>3. Step-by-Step Solution</h3>
    <table>
        <thead>
            <tr>
                <th>Step</th>
                <th>Action</th>
                <th>Formula / Calculation</th>
                <th>Running Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>1</strong></td>
                <td>Identify Bank Balance</td>
                <td>₱600,000</td>
                <td>₱600,000</td>
            </tr>
            <tr>
                <td><strong>2</strong></td>
                <td>Add Deposits in Transit</td>
                <td>$600,000 + 150,000$</td>
                <td>₱750,000</td>
            </tr>
            <tr>
                <td><strong>3</strong></td>
                <td>Deduct Outstanding Checks</td>
                <td>$750,000 - 85,000$</td>
                <td>₱665,000</td>
            </tr>
            <tr>
                <td><strong>4</strong></td>
                <td>Adjust for Bank Error</td>
                <td>$665,000 - 27,000$</td>
                <td><strong>₱638,000</strong></td>
            </tr>
        </tbody>
    </table>

    <h3>4. Why No Factors were Excluded</h3>
    <p>In this high-difficulty problem, all factors provided were bank-side reconciling items. Had the problem included "Book-Side" items—such as <strong>bank service charges</strong>, <strong>NSF checks</strong>, or <strong>interest earned</strong>—they would have been <strong>excluded</strong> from this specific bank-side calculation. While those items would eventually lead to the same ₱638,000 result when adjusting the company's internal books, they do not impact the adjustment of the ₱600,000 bank statement figure.</p>

    <h3>Conclusion: The Goal of Financial Integrity</h3>
    <p>The resulting <strong>₱638,000 Adjusted Cash Balance</strong> represents the actual amount of money the company has available to spend. By identifying the ₱27,000 bank under-deduction, the company prevents a situation where they might over-commit funds based on an incorrectly inflated bank statement. Regular bank reconciliation acts as a vital internal control, catching clerical errors and providing management with a reliable snapshot of the firm's liquidity.</p>
    </div>
</div>

<div class="slide" id="slide-sAdIq06" data-question-id="sAdIq06" data-type="Problem Solving" data-set="Set A" data-difficulty="Difficult" data-topic="Cash Flow Statement" data-answer="860000" data-points="9">
    <div class="quiz-container">
        <div class="topic-text">Topic: Cash Flow Statement</div>
        <div class="question-text">Net income for the year is ₱850,000. Additional data: Depreciation is ₱150,000; Gain on sale of equipment is ₱50,000; Accounts receivable increased by ₱120,000; Inventory decreased by ₱90,000; Accounts payable decreased by ₱60,000. Using the indirect method, what is the net cash provided by operating activities? (Enter numbers only)</div>
        <input type="number" class="input-field" id="input-sAdIq06" placeholder="Enter numerical amount...">
        <button class="submit-btn" id="submit-sAdIq06" onclick="submitAnswer('sAdIq06')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAdIq06" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAdIq06"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Cash Flow Statement</h2>
        <div class="book-content-question">Net income for the year is ₱850,000. Additional data: Depreciation is ₱150,000; Gain on sale of equipment is ₱50,000; Accounts receivable increased by ₱120,000; Inventory decreased by ₱90,000; Accounts payable decreased by ₱60,000. Using the indirect method, what is the net cash provided by operating activities? (Enter numbers only)</div>
        <p class="correct-line"><strong>Correct Answer: 860,000</strong></p>
        <p>Net Cash = Net Income (850,000) + Depreciation (150,000) - Gain on Sale (50,000) - AR Increase (120,000) + Inventory Decrease (90,000) - AP Decrease (60,000) = ₱860,000. Gains are deducted to prevent double counting, as the full cash received from the sale goes to Investing Activities.</p>
        <h3>1. Analysis of Factors and Financial Elements</h3>
    <p>Under the indirect method, the objective is to transform <strong>Net Income</strong> (an accrual-basis figure) into <strong>Net Cash from Operating Activities</strong> (a cash-basis figure). In this problem, <strong>every factor provided is an essential component</strong> of the solution because each represents a specific discrepancy between profit and physical cash movement.</p>

    <ul>
        <li><strong>Net Income (₱850,000):</strong> This is the <strong>starting foundation</strong>. It includes all revenues earned and expenses incurred, regardless of whether cash changed hands.</li>
        <li><strong>Depreciation (₱150,000):</strong> This is a <strong>non-cash expense</strong>. It was subtracted to arrive at net income, but no cash actually left the business. Therefore, it must be added back to "undo" the non-cash deduction.</li>
        <li><strong>Gain on Sale of Equipment (₱50,000):</strong> This is a <strong>non-operating item</strong>. While it increased net income, the total cash received from the sale belongs in the <em>Investing Activities</em> section. It is subtracted here to prevent double-counting and to isolate purely "operating" cash.</li>
        <li><strong>Increase in Accounts Receivable (₱120,000):</strong> This represents <strong>sales made on credit</strong> for which cash has not yet been collected. Because this revenue is in net income but the cash is not in the bank, it must be subtracted.</li>
        <li><strong>Decrease in Inventory (₱90,000):</strong> This implies that the company sold more goods than it purchased during the period. This "releases" cash that was previously tied up in stock, acting as a <strong>cash inflow</strong> relative to net income.</li>
        <li><strong>Decrease in Accounts Payable (₱60,000):</strong> This indicates that the company used cash to pay off its suppliers for prior obligations. This <strong>cash outflow</strong> must be subtracted from net income to reflect the true cash position.</li>
    </ul>

    <h3>2. The Logic: Accrual vs. Cash Basis</h3>
    <p>The core logic of these adjustments relies on the relationship between net income and the balance sheet:
    <ul>
        <li><strong>Non-cash items:</strong> Expenses like depreciation reduce profit but not cash (Add back).</li>
        <li><strong>Current Assets:</strong> An increase ties up cash (Subtract); a decrease frees up cash (Add).</li>
        <li><strong>Current Liabilities:</strong> An increase conserves cash by delaying payment (Add); a decrease uses cash to settle debt (Subtract).</li>
    </ul></p>

    <h3>3. Step-by-Step Solution</h3>
    <p>We calculate the net operating cash flow by applying the following adjustments to the net income:</p>

    <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Adjustment Logic</th>
                <th>Amount (₱)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Net Income</strong></td>
                <td>Starting Point</td>
                <td>850,000</td>
            </tr>
            <tr>
                <td>Depreciation</td>
                <td>Add back non-cash expense</td>
                <td>+ 150,000</td>
            </tr>
            <tr>
                <td>Gain on Sale</td>
                <td>Subtract non-operating gain</td>
                <td>- 50,000</td>
            </tr>
            <tr>
                <td>Increase in A/R</td>
                <td>Subtract (Revenue not yet collected)</td>
                <td>- 120,000</td>
            </tr>
            <tr>
                <td>Decrease in Inventory</td>
                <td>Add (Cash released from stock)</td>
                <td>+ 90,000</td>
            </tr>
            <tr>
                <td>Decrease in A/P</td>
                <td>Subtract (Cash used to pay debt)</td>
                <td>- 60,000</td>
            </tr>
            <tr>
                <td><strong>Net Operating Cash</strong></td>
                <td><strong>Final Result</strong></td>
                <td><strong>860,000</strong></td>
            </tr>
        </tbody>
    </table>

    <h3>4. Why No Factors were Excluded</h3>
    <p>In this difficult-level problem, every data point was relevant to the "Operating Activities" section. Had the problem included <strong>"Proceeds from Sale of Land"</strong> or <strong>"Dividends Paid,"</strong> those would have been <strong>excluded</strong> from this specific calculation because they belong in the <em>Investing</em> and <em>Financing</em> sections, respectively. Similarly, <strong>"Interest Expense"</strong> is already factored into Net Income and typically does not require a separate adjustment unless the company uses a specific classification permitted under IFRS.</p>

    <h3>Conclusion: The "Cash Position" Narrative</h3>
    <p>The resulting <strong>₱860,000</strong> indicates that the company's core operations are healthy and generating more cash than the "paper profit" suggests. This surplus is largely due to the high non-cash depreciation and the successful reduction of inventory, which offset the cash used to pay suppliers and the growth in uncollected credit sales.</p>
    </div>
</div>

<div class="slide" id="slide-sAdIq07" data-question-id="sAdIq07" data-type="Problem Solving" data-set="Set A" data-difficulty="Difficult" data-topic="Financial Statement Analysis" data-answer="2.5" data-points="9">
    <div class="quiz-container">
        <div class="topic-text">Topic: Financial Statement Analysis</div>
        <div class="question-text">An entity has current assets of ₱1,200,000 and current liabilities of ₱600,000. If the entity immediately pays ₱200,000 of its accounts payable using cash, what will be the new Current Ratio? (Enter the decimal number only, e.g., if 2.50, enter 2.5)</div>
        <input type="number" step="0.01" class="input-field" id="input-sAdIq07" placeholder="Enter numerical value...">
        <button class="submit-btn" id="submit-sAdIq07" onclick="submitAnswer('sAdIq07')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAdIq07" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAdIq07"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Financial Statement Analysis</h2>
        <div class="book-content-question">An entity has current assets of ₱1,200,000 and current liabilities of ₱600,000. If the entity immediately pays ₱200,000 of its accounts payable using cash, what will be the new Current Ratio? (Enter the decimal number only, e.g., if 2.50, enter 2.5)</div>
        <p class="correct-line"><strong>Correct Answer: 2.5</strong></p>
        <p>Original Current Ratio = 1,200k / 600k = 2.0. Paying accounts payable with cash reduces both Current Assets and Current Liabilities by 200,000. New Current Assets = 1,000,000. New Current Liabilities = 400,000. New Ratio = 1,000,000 / 400,000 = 2.5.</p>
        <h3>1. Analysis of Problem Factors and Financial Elements</h3>
    <p>In advanced financial analysis, we must identify not only the static amounts but how specific transactions alter the components of a ratio. <strong>All numerical factors provided in this problem are essential components</strong> of the solution.</p>

    <ul>
        <li><strong>Initial Current Assets (₱1,200,000):</strong> This is the <strong>starting numerator</strong>. It represents the total liquid resources (Cash, A/R, Inventory) available to the company before the payment.</li>
        <li><strong>Initial Current Liabilities (₱600,000):</strong> This is the <strong>starting denominator</strong>. It represents the total obligations due within one year before the payment.</li>
        <li><strong>Payment Amount (₱200,000):</strong> This is the <strong>active variable</strong> in the solution. It represents the amount of the transaction.</li>
        <li><strong>Accounts Payable & Cash (Qualitative Factors):</strong> These identify <em>where</em> the change occurs. Because Cash is a <strong>Current Asset</strong> and Accounts Payable is a <strong>Current Liability</strong>, both the numerator and the denominator of the ratio are affected equally by the ₱200,000.</li>
    </ul>

    <h3>2. The Logic: The Mathematical Rule of Fractions</h3>
    <p>A fundamental rule of ratio analysis is that an <strong>equal decrease</strong> to both the numerator and denominator will <strong>increase</strong> the ratio if the starting ratio is greater than $1.0$. Conversely, if the ratio were less than $1.0$, an equal decrease would make the ratio worse. This phenomenon is often used in "Window Dressing," where companies pay off debts right before the reporting date to make their liquidity appear stronger.</p>

    <h3>3. Step-by-Step Solution</h3>
    <table>
        <thead>
            <tr>
                <th>Step</th>
                <th>Action</th>
                <th>Calculation</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>1</strong></td>
                <td>Analyze Impact on Assets</td>
                <td>$₱1,200,000 - ₱200,000$ (Cash Outflow)</td>
                <td><strong>₱1,000,000</strong> (New CA)</td>
            </tr>
            <tr>
                <td><strong>2</strong></td>
                <td>Analyze Impact on Liabilities</td>
                <td>$₱600,000 - ₱200,000$ (Debt Paid)</td>
                <td><strong>₱400,000</strong> (New CL)</td>
            </tr>
            <tr>
                <td><strong>3</strong></td>
                <td>Apply Current Ratio Formula</td>
                <td>$\frac{New Current Assets}{New Current Liabilities}$</td>
                <td>-</td>
            </tr>
            <tr>
                <td><strong>4</strong></td>
                <td>Final Calculation</td>
                <td>$\frac{1,000,000}{400,000}$</td>
                <td><strong>2.5</strong></td>
            </tr>
        </tbody>
    </table>

    <h3>4. Analysis of Alternative (Incorrect) Results</h3>
    <p>Understanding the logic behind common distractors helps prevent technical errors:</p>
    <ul>
        <li><strong>2.0 (The "No Change" Error):</strong> This results from assuming that because ₱200,000 was subtracted from both sides, the ratio stays the same. This ignores the mathematical property of proportions.</li>
        <li><strong>1.67 (The "Addition" Error):</strong> This occurs if a student <em>adds</em> the ₱200,000 to both sides ($1.4M / 0.8M$). While this is a valid transaction (e.g., buying inventory on credit), it is the opposite of the "payment" described in the prompt.</li>
        <li><strong>1.50 (One-Sided Asset Error):</strong> This happens if the student only subtracts ₱200,000 from Assets ($1.0M / 600k$). This violates the double-entry principle, as you cannot spend cash without either reducing a liability or increasing another asset.</li>
        <li><strong>3.00 (One-Sided Liability Error):</strong> This happens if the student only subtracts ₱200,000 from Liabilities ($1.2M / 400k$), failing to account for the cash used to make the payment.</li>
    </ul>

    <h3>Conclusion: Significance of the Result</h3>
    <p>The entity improved its Current Ratio from $2.0$ to $2.5$. While the company has ₱200,000 less in absolute cash, its <strong>relative</strong> liquidity position has strengthened because its remaining assets now cover its remaining debts $2.5$ times over. This illustrates why creditors look at ratios rather than just total balances when assessing a company's ability to survive financial challenges.</p>
    </div>
</div>

<div class="slide" id="slide-sAdIq08" data-question-id="sAdIq08" data-type="Problem Solving" data-set="Set A" data-difficulty="Difficult" data-topic="Statement of Changes in Equity" data-answer="750000" data-points="9">
    <div class="quiz-container">
        <div class="topic-text">Topic: Statement of Changes in Equity</div>
        <div class="question-text">Total assets at the beginning of the year were ₱2,000,000 and liabilities were ₱800,000. By year-end, assets increased by ₱500,000 and liabilities decreased by ₱100,000. The owner made no additional investments but withdrew ₱150,000. What is the net income for the year? (Enter numbers only)</div>
        <input type="number" class="input-field" id="input-sAdIq08" placeholder="Enter numerical amount...">
        <button class="submit-btn" id="submit-sAdIq08" onclick="submitAnswer('sAdIq08')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAdIq08" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAdIq08"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Statement of Changes in Equity</h2>
        <div class="book-content-question">Total assets at the beginning of the year were ₱2,000,000 and liabilities were ₱800,000. By year-end, assets increased by ₱500,000 and liabilities decreased by ₱100,000. The owner made no additional investments but withdrew ₱150,000. What is the net income for the year? (Enter numbers only)</div>
        <p class="correct-line"><strong>Correct Answer: 750,000</strong></p>
        <p>Beg Equity = 2M - 800k = 1.2M. End Assets = 2.5M. End Liab = 700k. End Equity = 1.8M. The total increase in equity is 600,000. Change in Equity = Net Income - Withdrawals. 600,000 = Net Income - 150,000. Net Income = ₱750,000.</p>
    </div>
</div>

<div class="slide" id="slide-sAdIq09" data-question-id="sAdIq09" data-type="Problem Solving" data-set="Set A" data-difficulty="Difficult" data-topic="Income and Business Taxation" data-answer="120000" data-points="9">
    <div class="quiz-container">
        <div class="topic-text">Topic: Income and Business Taxation</div>
        <div class="question-text">A VAT-registered merchandising business has gross sales of ₱3,360,000 (inclusive of 12% VAT) for the quarter. Its purchases from VAT-registered suppliers amounted to ₱2,240,000 (inclusive of 12% VAT). What is the VAT payable for the quarter? (Enter numbers only)</div>
        <input type="number" class="input-field" id="input-sAdIq09" placeholder="Enter numerical amount...">
        <button class="submit-btn" id="submit-sAdIq09" onclick="submitAnswer('sAdIq09')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAdIq09" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAdIq09"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Income and Business Taxation</h2>
        <div class="book-content-question">A VAT-registered merchandising business has gross sales of ₱3,360,000 (inclusive of 12% VAT) for the quarter. Its purchases from VAT-registered suppliers amounted to ₱2,240,000 (inclusive of 12% VAT). What is the VAT payable for the quarter? (Enter numbers only)</div>
        <p class="correct-line"><strong>Correct Answer: 120,000</strong></p>
        <p>To extract the VAT from a VAT-inclusive amount, multiply by (12/112). Output VAT = 3,360,000 * (12/112) = 360,000. Input VAT = 2,240,000 * (12/112) = 240,000. VAT Payable = Output VAT (360,000) - Input VAT (240,000) = ₱120,000.</p>
        <h3>1. Analysis of Problem Factors and Elements</h3>
    <p>In advanced accounting, Net Income can be determined even without revenue or expense data by analyzing the "residual interest" of the owner over time. In this problem, <strong>every numerical factor provided is an essential component</strong> of the final solution:</p>

    <ul>
        <li><strong>Beginning Assets (₱2,000,000) & Liabilities (₱800,000):</strong> These are <strong>core parts</strong> of the solution used to establish the "Starting Point" of the owner's investment (Beginning Equity).</li>
        <li><strong>Increase in Assets (₱500,000):</strong> This is a <strong>core part</strong> of the solution. It identifies the growth in the company's resource base, regardless of how that growth was funded.</li>
        <li><strong>Decrease in Liabilities (₱100,000):</strong> This is a <strong>core part</strong> of the solution. A reduction in debt effectively "frees up" more of the company's value for the owner, contributing to an increase in equity.</li>
        <li><strong>Withdrawals (₱150,000):</strong> This is a <strong>core part</strong> of the solution. Withdrawals represent a distribution of wealth <em>out</em> of the business. Since we are solving for profit, we must "add back" this amount to the observed increase in equity to find the total earnings generated before the owner took their share.</li>
        <li><strong>"No Additional Investments":</strong> This <strong>simplifies the solution</strong>. If the owner had invested more capital, that amount would have been excluded from the "income" portion of the equity growth because it didn't come from earnings.</li>
    </ul>

    <h3>2. The Logic: The Bridge between Balance Sheet and Income</h3>
    <p>The solution relies on the **Accounting Equation** ($Assets = Liabilities + Equity$) and the **Equity Formula**:
    $$Ending Equity = Beginning Equity + Investment + Net Income - Withdrawals$$
    
    This logic tells us that any increase in equity that did <em>not</em> come from the owner putting more money in (Investment) must have come from the business performing well (Net Income). However, because the owner <em>took</em> money out (Withdrawals), the observed growth on the Balance Sheet is "net" of those withdrawals. To find the true performance, we must reconstruct the gross earnings.</p>

    <h3>3. Step-by-Step Solution</h3>
    <table>
        <thead>
            <tr>
                <th>Step</th>
                <th>Action</th>
                <th>Formula / Calculation</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>1</strong></td>
                <td>Find <strong>Beginning Equity</strong></td>
                <td>$A_{beg} - L_{beg} = ₱2,000,000 - ₱800,000$</td>
                <td>₱1,200,000</td>
            </tr>
            <tr>
                <td><strong>2</strong></td>
                <td>Find <strong>Ending Assets</strong></td>
                <td>$₱2,000,000 + ₱500,000$</td>
                <td>₱2,500,000</td>
            </tr>
            <tr>
                <td><strong>3</strong></td>
                <td>Find <strong>Ending Liabilities</strong></td>
                <td>$₱800,000 - ₱100,000$</td>
                <td>₱700,000</td>
            </tr>
            <tr>
                <td><strong>4</strong></td>
                <td>Find <strong>Ending Equity</strong></td>
                <td>$A_{end} - L_{end} = ₱2,500,000 - ₱700,000$</td>
                <td>₱1,800,000</td>
            </tr>
            <tr>
                <td><strong>5</strong></td>
                <td>Calculate <strong>Total Growth in Equity</strong></td>
                <td>$E_{end} - E_{beg} = ₱1,800,000 - ₱1,200,000$</td>
                <td>₱600,000</td>
            </tr>
            <tr>
                <td><strong>6</strong></td>
                <td>Solve for <strong>Net Income</strong></td>
                <td>$Growth + Withdrawals = ₱600,000 + ₱150,000$</td>
                <td><strong>₱750,000</strong></td>
            </tr>
        </tbody>
    </table>

    <h3>4. Analysis of Potential Pitfalls</h3>
    <p>Understanding where common errors occur helps verify the ₱750,000 result:</p>
    <ul>
        <li><strong>₱600,000 (The "Net Change" Error):</strong> This occurs if a student stops after Step 5. This figure represents the <em>observed</em> growth, but it ignores the fact that the business actually earned ₱150,000 more than this, which the owner then took home.</li>
        <li><strong>₱450,000 (The "Subtraction" Error):</strong> This happens if a student <em>subtracts</em> the withdrawal from the growth ($600k - 150k$). This is logically flawed because it suggests that taking money out of the business somehow reduces the total profit the business <em>generated</em> during the year.</li>
        <li><strong>₱400,000 (The "Liability Direction" Error):</strong> This occurs if a student adds the ₱100,000 decrease in liabilities to the starting debt rather than subtracting it, leading to a lower ending equity.</li>
    </ul>

    <h3>Conclusion: The "Capital Maintenance" Concept</h3>
    <p>The resulting <strong>₱750,000 Net Income</strong> proves that the business was highly profitable. It was able to support a ₱150,000 lifestyle for the owner while still increasing the company's net worth by ₱600,000 through increased assets and debt reduction. This "big picture" analysis allows stakeholders to evaluate management performance without getting lost in the details of individual revenue or expense accounts.</p>

    </div>
</div>

<div class="slide" id="slide-sAdIq10" data-question-id="sAdIq10" data-type="Problem Solving" data-set="Set A" data-difficulty="Difficult" data-topic="Statement of Financial Position" data-answer="940000" data-points="9">
    <div class="quiz-container">
        <div class="topic-text">Topic: Statement of Financial Position</div>
        <div class="question-text">An entity's trial balance included: Cash in bank ₱400,000; Petty cash fund ₱10,000; Cash restricted for plant expansion ₱500,000; Accounts receivable ₱250,000; Allowance for doubtful accounts ₱20,000; Inventory ₱300,000. What is the correct total amount of Current Assets to be reported? (Enter numbers only)</div>
        <input type="number" class="input-field" id="input-sAdIq10" placeholder="Enter numerical amount...">
        <button class="submit-btn" id="submit-sAdIq10" onclick="submitAnswer('sAdIq10')">Submit Answer</button>
        <button class="exp-btn" id="exp-sAdIq10" onclick="toggleBookMode()">Show Explanation</button>
        <div class="quiz-feedback" id="feedback-sAdIq10"></div>
    </div>
    <div class="book-content">
        <button class="back-quiz-btn" onclick="toggleBookMode()">← Back to Quiz</button>
        <h2>Explanation: Statement of Financial Position</h2>
        <div class="book-content-question">An entity's trial balance included: Cash in bank ₱400,000; Petty cash fund ₱10,000; Cash restricted for plant expansion ₱500,000; Accounts receivable ₱250,000; Allowance for doubtful accounts ₱20,000; Inventory ₱300,000. What is the correct total amount of Current Assets to be reported? (Enter numbers only)</div>
        <p class="correct-line"><strong>Correct Answer: 940,000</strong></p>
        <p>Current Assets = Cash in bank (400,000) + Petty cash (10,000) + Net Accounts Receivable (250,000 - 20,000 = 230,000) + Inventory (300,000) = ₱940,000. Cash restricted for plant expansion is classified as a non-current asset under PFRS.</p>
        <h3>1. Analysis of Problem Factors and Elements</h3>
    <p>Under <strong>PAS 1 (Presentation of Financial Statements)</strong>, current assets are resources expected to be realized, sold, or consumed within twelve months after the reporting period or within the entity's normal operating cycle.[1, 2] To solve this problem, we must evaluate each trial balance item against this liquidity criteria.</p>

    <ul>
        <li><strong>Cash in Bank (₱400,000):</strong> This is a <strong>core part</strong> of the solution. It represents the most liquid asset available for immediate use in operations.</li>
        <li><strong>Petty Cash Fund (₱10,000):</strong> This is a <strong>core part</strong> of the solution. It consists of actual notes and coins held "in hand" for small, routine business expenditures.</li>
        <li><strong>Accounts Receivable (₱250,000) & Allowance for Doubtful Accounts (₱20,000):</strong> These are <strong>core parts</strong> of the solution. Accounts receivable represent money owed by customers. However, the asset must be reported at its <strong>Net Realizable Value (NRV)</strong>, which is the gross amount minus the allowance for those accounts estimated to be uncollectible.</li>
        <li><strong>Inventory (₱300,000):</strong> This is a <strong>core part</strong> of the solution. Inventory consists of goods held for sale in the ordinary course of business and is expected to be converted into cash within the operating cycle.[3, 2]</li>
        <li><strong>Cash Restricted for Plant Expansion (₱500,000):</strong> This factor is <strong>excluded</strong> from the solution.
            <ul>
                <li><em>The Logic:</em> While it is physically "cash," its use is restricted for a long-term capital project (plant expansion). Because this cash is not available to settle current liabilities or fund daily operations, it is classified as a <strong>Non-current Asset</strong> (typically under Long-term Investments or Other Assets).[1, 4, 2]</li>
            </ul>
        </li>
    </ul>

    <h3>2. The Logic: Valuation and Aggregation</h3>
    <p>A properly prepared Statement of Financial Position does not merely list every account; it aggregates them based on their nature and liquidity.[5, 6] For current assets, the logic requires summing all unrestricted cash, near-cash items, and resources expected to turn into cash within the year. Crucially, "Contra-Asset" accounts like the <strong>Allowance for Doubtful Accounts</strong> must be netted against their parent accounts to reflect a "true and fair view" of the entity's expected cash inflows.</p>

    <h3>3. Step-by-Step Solution</h3>
    <table>
        <thead>
            <tr>
                <th>Step</th>
                <th>Action</th>
                <th>Formula / Calculation</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>1</strong></td>
                <td>Calculate <strong>Net Receivables</strong></td>
                <td>$₱250,000 - ₱20,000$</td>
                <td>₱230,000</td>
            </tr>
            <tr>
                <td><strong>2</strong></td>
                <td>Identify <strong>Total Cash</strong></td>
                <td>$₱400,000 (Bank) + ₱10,000 (Petty)$</td>
                <td>₱410,000</td>
            </tr>
            <tr>
                <td><strong>3</strong></td>
                <td>Aggregate All <strong>Current Items</strong></td>
                <td>$Cash + Net AR + Inventory$</td>
                <td>-</td>
            </tr>
            <tr>
                <td><strong>4</strong></td>
                <td>Final Summation</td>
                <td>$₱410,000 + ₱230,000 + ₱300,000$</td>
                <td><strong>₱940,000</strong></td>
            </tr>
        </tbody>
    </table>

    <h3>4. Analysis of Potential Classification Errors</h3>
    <p>Understanding why alternative totals are incorrect is vital for avoiding common reporting mistakes:</p>
    <ul>
        <li><strong>₱1,440,000 (The "Restriction" Error):</strong> This occurs if a student mistakenly includes the ₱500,000 restricted cash. This overstates the company's <strong>liquidity</strong> and would lead to an incorrectly high Current Ratio.[1, 4]</li>
        <li><strong>₱960,000 (The "Gross" Error):</strong> This results from failing to subtract the ₱20,000 Allowance for Doubtful Accounts. This violates the principle of <strong>faithful representation</strong> by reporting receivables at a value the company does not actually expect to collect.</li>
        <li><strong>₱410,000 (The "Cash Only" Error):</strong> This occurs if a student forgets that inventory and receivables are considered "current" because they will become cash within the operating cycle.[3, 2]</li>
    </ul>

    <h3>Conclusion: Significance of the Result</h3>
    <p>The total Current Assets of <strong>₱940,000</strong> represents the entity's working capital base. By correctly excluding the ₱500,000 restricted cash, the accountant ensures that financial analysts have an accurate starting point for calculating <strong>Liquidity Ratios</strong> (like the Current and Quick Ratios). This distinction is fundamental to providing a transparent narrative of the company's ability to meet its upcoming obligations without relying on non-liquid or restricted resources.</p>
    </div>
</div>
`;
