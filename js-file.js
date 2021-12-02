let playerSelection;
let computerSelection;
let win = 0;
let lose = 0;
let tie = 0;
function computerPlay() {
    let rand = Math.floor(Math.random()*3);
    switch (rand) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
    }
}

function playRound(e, computerSelection) {
    if(e.srcElement.nodeName != "BUTTON") return; // stops function if you click non-button
    playerSelection = (e.srcElement.id)
    computerSelection = computerPlay()
    console.log(playerSelection)
    console.log(computerSelection)
     if (
        (playerSelection == "rock") && (computerSelection == "scissors") ||
        (playerSelection == "paper") && (computerSelection == "rock") ||
        (playerSelection == "scissors") && (computerSelection == "paper")) {
            win++;
            score.textContent = `Wins: ${win} Losses: ${lose} Ties: ${tie}`;
            if (win == 5) {
                return alert("You Won!")
            }
            return `You Win! ${playerSelection} beats ${computerSelection}!`
    } else if (
        (playerSelection == "rock") && (computerSelection == "paper") ||
        (playerSelection == "paper") && (computerSelection == "scissors") ||
        (playerSelection == "scissors") && (computerSelection == "rock")) {
            lose++;
            score.textContent = `Wins: ${win} Losses: ${lose} Ties: ${tie}`;
            if (lose == 5) {
                return alert("GG no re")
            }
            return `You Lose! ${computerSelection} beats ${playerSelection}!`
    } else {
            tie++;
            score.textContent = `Wins: ${win} Losses: ${lose} Ties: ${tie}`;
            return "It's a tie!"
    }
} 
window.addEventListener('click', playRound)
const score = document.querySelector("#score")
score.textContent = `Wins: ${win} Losses: ${lose} Ties: ${tie}`;

