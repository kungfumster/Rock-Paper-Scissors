const body = document.querySelector(`div`);

//Update default values
document.querySelector(`#message`).textContent = "";
document.querySelector(`#player-score`).textContent = `You: 0`;
document.querySelector(`#computer-score`).textContent = `Computer: 0`;
document.querySelector(`#game-counter`).textContent = `Start Game`;


//Create Rock Button
const rockButton = document.createElement(`button`);
rockButton.textContent = "Rock";
body.prepend(rockButton);

//Create Paper Button
const paperButton = document.createElement(`button`);
paperButton.textContent = "Paper";
body.prepend(paperButton);

//Create Scissor Button
const scissorButton = document.createElement(`button`);
scissorButton.textContent = "Scissor";
body.prepend(scissorButton);

let playerScore = 0;
let computerScore = 0;
let gameCounter = 0;

function getComputerChoice() {
    let choices = [`rock`, `paper`, `scissor`];
    return choices[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection) {

    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let message = ``;

    //Return message and update score
    if (player === computer) {
        message = `You Tie!`;
    } 
    
    if (player === `rock` && computer === `scissor`) {
        message = `You Win! Rock beats Scissor`;
        playerScore += 1;
    } else if (player === `rock` && computer === `paper`){
        message = `You Lose! Paper beats Rock`;
        computerScore += 1;
    }

    if (player === `paper` && computer === `rock`) {
        message = `You Win! Paper beats Rock`;
        playerScore += 1;
    } else if (player === `paper` && computer === `scissor`){
        message = `You Lose! Scissor beats Paper`;
        computerScore += 1;
    }

    if (player  === `scissor` && computer === `paper`) {
        message = `You Win! Scissor beats Paper`;
        playerScore += 1;
    } else if (player === `scissor` && computer === `rock`){
        message = `You Lose! Rock beats Scissor`;
        computerScore += 1;
    }

    gameCounter += 1;

    document.querySelector(`#game-counter`).textContent = `Game ${gameCounter}`;
    document.querySelector(`#player-score`).textContent = `You: ${playerScore}`;
    document.querySelector(`#computer-score`).textContent = `Computer: ${computerScore}`;

    //update message if win
    if (gameCounter === 5){
        if (playerScore > computerScore) {
            message = `You Win, ${playerScore} games to ${computerScore}!`;
        } else if (playerScore < computerScore) {
            message = `You Lose, ${playerScore} games to ${computerScore}!`;
        } else {
            message = `You Tied, ${playerScore} games to ${computerScore}!`;
        }
        gameCounter = 0;
        playerScore = 0;
        computerScore = 0;
    }
    


    document.querySelector(`#message`).textContent = message;

}


rockButton.addEventListener(`click`, () => {playRound('rock',getComputerChoice());});
paperButton.addEventListener(`click`, () => {playRound('paper',getComputerChoice());});
scissorButton.addEventListener(`click`, () => {playRound('scissor',getComputerChoice());});
