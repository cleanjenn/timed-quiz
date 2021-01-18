let ulEl = document.querySelector('#scores');
var returnEl = document.querySelector("#return-button");
var clearEl = document.querySelector("#clear-button");
highScores = [];

let loadScores = function() {
    highScores = localStorage.getItem("scores");
    if(!highScores) {
        highScores = []; 
        return false;
    }
    highScores = JSON.parse(highScores);

    for(i = 0; i < highScores.length; i++) {
        listItemEl = document.createElement("li");
        listItemEl.className = "listed-score";
        
        nameEl = document.createElement("div");
        nameEl.className = "score-info";
        nameEl.textContent = `Initials: ${highScores[i].initials} Score: ${highScores[i].score}`;
        listItemEl.appendChild(nameEl);
        ulEl.appendChild(listItemEl);
    }
};

let goToIndex = function() {
    location.replace("./index.html");
};

let clearScores = function() {
    highScores = [];
    localStorage.setItem("scores", highScores);
    location.reload();
};

returnEl.addEventListener("click", goToIndex);
clearEl.addEventListener("click", clearScores);

loadScores();