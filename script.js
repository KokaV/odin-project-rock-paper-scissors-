let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        console.log("It's a tie!");
    } 
    else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper") 
    ){
            console.log("You Win!");
            humanScore++;
        }
    
    else {
        console.log("You Loose!");
        computerScore++;
    }
}

function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return  "scissors";
    }    
}


function getHumanChoice() {
    let humanChoice = prompt("Choose from: Rock, Paper, Scissors");
    return humanChoice.toLowerCase();
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
