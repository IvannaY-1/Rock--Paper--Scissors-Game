let choices = ["rock", "paper", "scissors"];
let gameStats = { wins: 0, losses: 0, ties: 0 };
let player = { choice: null };

function playRock() {
  player.choice = "rock";
  playGame();
}

function playPaper() {
  player.choice = "paper";
  playGame();
}

function playScissors() {
  player.choice = "scissors";
  playGame();
}

function  playGame() {
let isAlive = true;
if (isAlive) {
let computerChoice = getComputerChoice();
document.getElementById("computer-choice").innerText =
      "Computer's Choice: " + computerChoice;
document.getElementById("player-choice").innerText =
      "Player's choice: " + player.choice;
compareChoices(computerChoice, player.choice);
}
 }

 function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function compareChoices(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
    gameStats.ties++;
      displayMessage("No winner this round, it's a tie!");
    }
    else if (
    (computerChoice === "rock" && playerChoice === "scissors") ||
    (computerChoice === "paper" && playerChoice === "rock") ||
    (computerChoice === "scissors" && playerChoice === "paper") )
    {
      gameStats.losses++;
   displayMessage("You were beaten. Better luck next time!");
    }
    else {
    gameStats.wins++;
    displayMessage("Congratulations, you're the winner!");
    }
    updateGameStats();
}

function displayMessage(message) {
  document.getElementById("result").innerText = message;

}

function updateGameStats() {
  document.getElementById("game-stats").innerText = "Wins:" + gameStats.wins + "|Losses:" + gameStats.losses + "|Ties:" + gameStats.ties;

}




/*
const userInput1 = document.getElementById("num1-el");
const userInput2 = document.getElementById("num2-el");

const result = document.getElementById("result");
const error = document.getElementById("error");


const resetButton = document.getElementById("reset");


function add() {
    let updatedUserInput1 = Number(userInput1.value);
    let updatedUserInput2 = Number(userInput2.value);

    let total = updatedUserInput1 + updatedUserInput2;
    result.textContent = `Result is ${total}`;
}
 
function Subtract() {
    let updatedUserInput1 = Number(userInput1.value);
    let updatedUserInput2 = Number(userInput2.value);
    total = updatedUserInput1 - updatedUserInput2;
    result.textContent = `Result is ${total}`;
}

function Divide() {
    let updatedUserInput1 = Number(userInput1.value);
    let updatedUserInput2 = Number(userInput2.value);
    error.textContent = "";
    if (updatedUserInput2 === 0) {
    error.textContent = "You can't divide by 0";
    return;
  }
    
    total = updatedUserInput1 / updatedUserInput2;
    result.textContent = `Result is ${total}`;
}

function Multiply() {
    let updatedUserInput1 = Number(userInput1.value);
    let updatedUserInput2 = Number(userInput2.value);
    total = updatedUserInput1 * updatedUserInput2;
    result.textContent = `Result is ${total}`;
}

function reset() {
  error.textContent = "";
  userInput1.value = "";
userInput2.value = "";
result.textContent = "";
  dogCounter.textContent = `Result is__`;
}

*/