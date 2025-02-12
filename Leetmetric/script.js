document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-card");

    function validateUsername(username) {
        if(username.trim() === "") {
            alert("username should not be empty");
            return false;
        }

        regEx = /^[a-zA-Z0-9_]{1,15}$/;
        if(!regEx.test(username)) {
            alert("username should be 1-15 characters long and can only contain letters, numbers, and underscores");
            return false;
        }

        return true;
    }

    async function getUserStats(username) {
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
        
        try{
            searchButton.textContent = "loading...";
            searchButton.disabled = true;

            const response = await fetch(url);

            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const parsedData = await response.json();
            displayStats(parsedData);
        }catch(error){
            statsContainer.innerHTML = `<p>No content found</p>`;
        }finally{
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
        
    }

    function updateProgress(solved, total, label, circle){
        const progressDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`)
        label.textContent = `${solved}/${total}`;
    }

    function displayStats(parsedData){
        const totalQues = parsedData.totalQuestions;
        const totaleasyQues = parsedData.totalEasy;
        const totalmediumQues = parsedData.totalMedium;
        const totalhardQues = parsedData.totalHard;
        
        const solvedTotalQues = parsedData.totalSolved;
        const solvedEasyQues = parsedData.easySolved;
        const solvedMediumQues = parsedData.mediumSolved;
        const solvedHardQues = parsedData.hardSolved;
    
        updateProgress(solvedEasyQues, totaleasyQues, easyLabel, easyProgressCircle)
        updateProgress(solvedMediumQues, totalmediumQues, mediumLabel, mediumProgressCircle)
        updateProgress(solvedHardQues, totalhardQues, hardLabel, hardProgressCircle)
    
        const cardsData = [
            {label : "AcceptanceRate", value:parsedData.acceptanceRate},
            {label : "Ranking", value:parsedData.ranking},
            {label : "ContributionPoints", value:parsedData.contributionPoints}
        ];

        cardStatsContainer.innerHTML = cardsData.map(
            data => {
                return`
                    <div class="card">
                        <h4>${data.label}</h4>
                        <p>${data.value}</p>
                    </div>
                `
            }
        ).join("")
    }   

    searchButton.addEventListener("click", function() {
        const username = usernameInput.value;
       
        if(validateUsername(username)) {
            getUserStats(username);
        }
    })
});
