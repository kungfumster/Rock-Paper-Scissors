function getComputerChoice() {
    let choices = [`rock`, `paper`, `scissor`];
    return choices[Math.floor(Math.random()*3)]
}

function playRound(playerSelection, computerSelection) {

    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player === computer) {
        return `You Tie!`;
    } 
    
    if (player === `rock` && computer === `scissor`) {
        return `You Win! Rock beats Scissor`;
    } else if (player === `rock` && computer === `paper`){
        return `You Lose! Paper beats Rock`;
    }

    if (player === `paper` && computer === `rock`) {
        return `You Win! Paper beats Rock`;
    } else if (player === `paper` && computer === `scissor`){
        return `You Lose! Scissor beats Paper`;
    }

    if (player  === `scissor` && computer === `paper`) {
        return `You Win! Scissor beats Paper`;
    } else if (player === `scissor` && computer === `rock`){
        return `You Lose! Rock beats Scissor`;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i=0; i<5; i++) {
        let result = playRound(prompt("Rock, Paper, or Scissor?"), getComputerChoice());
        console.log(result);
        playerScore += result.toLowerCase().includes("win");
        computerScore += result.toLowerCase().includes("lose");
    }

    if (playerScore > computerScore) {
        return `You Win, ${playerScore} games to ${computerScore}!`;
    } else if (playerScore < computerScore) {
        return `You Lose, ${playerScore} games to ${computerScore}!`;
    } else {
        return `You Tied, ${playerScore} games to ${computerScore}!`;
    }
}

console.log(playGame());