const loadIssues = () => {

    const All = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    const search = ""
    fetch(All)
    .then((response) => response.json())
    .then((json) => {
        displayIssues(json.data)
    });
};

const displayIssues = (issues) => {

    const issueContainer = document.getElementById("issue-container");
    issueContainer.innerHTML = "";

    issues.forEach(issue => {

        const isOpen = issue.status === 'open';
        const border = isOpen ? 'border-green-500' : 'border-purple-500'
        const issueCard = document.createElement("div");

        issueCard.className = `bg-white rounded-lg p-5 shadow-sm border-t-4${border} flex flex-col gap-3`;

        issueCard.innerHTML = `
                <div class="flex items-center justify-between">
                    <span>
                    ${issue.status === "open" ?`<img src="./assets/Open-Status.png" alt=""></img>` : `<img src="./assets/Closed- Status .png" alt=""></img>`}
                        
                    </span>
                    <span class="priority-badge priority-high">${issue.priority.toUpperCase()}</span>
                </div>
    
                <h3 class="card-title">${issue.title}</h3>
                <p class="card-desc">${issue.description}</p>
                <div class="card-labels">
                    <span class="label-badge"><i class="fa-solid fa-bug"></i>BUG</span>
                    <span class="label-badge label-help"> HELP WANTED</span>
                </div>
                
                <div class="flex flex-col text-[0.5] text-gray-400">
                    <span>#${issue.id} by ${issue.author}</span>
                    <span>1/15/2024</span>
                </div>`

        issueContainer.append(issueCard);
    });
};

 loadIssues();