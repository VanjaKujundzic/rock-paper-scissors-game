
function getComputerChoice(){
    
    let randomNumber= Math.floor(Math.random()*3)+1;
    let answer;
    // console.log(randomNumber);
    switch(randomNumber){
        case 1 : answer="rock";break;
        case 2 : answer="paper"; break;
        case 3 : answer="scissors"; break;
    }
    console.log("computer showed: "+ answer);
    return answer;

}
let playerScore= 0;
let computerScore=0;
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "Rock beats scissors, player wins";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "Paper beats rock, computer wins!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "Paper beats rock, player wins";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "Computer wins, scissors beat paper";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "Scissors beat paper, player wins";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "Rock beats scissors, computer wins";
    } else if (playerSelection === computerSelection) {
        return "It's a tie";
    } else {
        return "Invalid input. Please choose rock, paper, or scissors.";
    }
}
    

// const userInput= prompt("Enter rock, paper or scissors");
// playerSelection=userInput.toLowerCase();

// console.log(playRound(playerSelection,computerSelection));

function game(){
    
    for(let i=0; i<5;i++){
        const userInput= prompt("Enter rock, paper or scissors");
        const computerSelection=getComputerChoice();
        const playerSelection=userInput.toLowerCase();
        console.log("we showed: "+playerSelection);
        console.log(playRound(playerSelection,computerSelection));
        console.log("your current score: "+playerScore);
        
    }
    if(playerScore>computerScore){
        console.log("Congrats player, you WIN! :)");
    }else if(computerScore>playerScore){
        console.log("Congrats computer, you WIN!");
    }else console.log("its a tie :(");

}