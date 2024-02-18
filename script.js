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

