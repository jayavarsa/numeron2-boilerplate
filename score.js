// Iteration 8: Making scoreboard functional
var score = localStorage.getItem("score");
var scorediv = document.getElementById("score-board");
scorediv.innerHTML += score;

document.getElementById("play-again-button").addEventListener("click", () => {
    window.location.href = "game.html";
})