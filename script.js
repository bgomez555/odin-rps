function getComputerChoice(){
    let number = Math.floor((Math.random()*3)+1)
    switch(number){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function determineWinner(playerSelection, computerSelection){
    if(playerSelection===computerSelection){
        return "tie";
    }
    else if (playerSelection === "rock" && computerSelection === "paper"){
        return "computer";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        return "player";
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
        return "player";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "computer";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        return "computer";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "player";
    }
}

function playRound(){
    let input = prompt("Choose your weapon! Pick either rock, paper, or scissors.");
    input = input.toLowerCase();
    return determineWinner(input,getComputerChoice());
}

function playGame(rounds){
    let playerScore = 0;
    let computerScore = 0;

    for(let currentRound = 1; currentRound <= rounds; currentRound++){
        roundsLeft = rounds-currentRound;
        switch(playRound()){
            case "tie":
                computerScore++;
                playerScore++;
                console.log(`You tied this round! The current score is ${playerScore} (you) vs. ${computerScore} (computer), and there are ${roundsLeft} rounds(s) left.`);
                break;
            case "computer":
                computerScore++;
                console.log(`You lost this round! The current score is ${playerScore} (you) vs. ${computerScore} (computer), and there are ${roundsLeft} rounds(s) left.`);
                break;
            case "player":
                playerScore++;
                console.log(`You won this round! The current score is ${playerScore} (you) vs. ${computerScore} (computer), and there are ${roundsLeft} rounds(s) left.`)
        }
    }

    console.log(`The game is over! The final score is ${playerScore} (you) vs. ${computerScore} (computer).`)
}

playGame(5);