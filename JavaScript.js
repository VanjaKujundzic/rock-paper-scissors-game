
function getComputerChoice(){
    console.log("this is the choice");
    let randomNumber= Math.floor(Math.random()*3)+1;
    let answer;
    console.log(randomNumber);
    switch(randomNumber){
        case 1 : answer="rock";break;
        case 2 : answer="paper"; break;
        case 3 : answer="scissors"; break;
    }
    console.log(answer);
    return answer;

}

function playRound(playerSelection, computerSelection){
    
    if(playerSelection ==="rock" && computerSelection ==="scissors"){
        console.log("rock beats scissors, player wins");
    }else if(playerSelection ==="rock" && computerSelection ==="paper"){
        console.log("paper beats rock, computer wins!");
    }else if(playerSelection ==="rock" && computerSelection ==="rock"){
        console.log("It is a tie");
    }else if(playerSelection ==="paper" && computerSelection ==="paper"){
        console.log("its a tie");
    }else if(playerSelection ==="paper" && computerSelection ==="rock"){
        console.log("Paper beats rock, player wins");
    }else if (playerSelection ==="paper" && computerSelection==="scissors"){
        console.log("computer wins, scissors beat paper");
    }else if(playerSelection ==="scissors" && computerSelection ==="paper"){
        console.log("scissors beat paper, player wins");
    }else if(playerSelection ==="scissors" && computerSelection ==="rock"){
        console.log("Rock beats scissors, computer wins");
    }else{
        console.log("it is a tie");
    }
    
}
// const userInput= prompt("Enter rock, paper or scissors");
// playerSelection=userInput.toLowerCase();

// console.log(playRound(playerSelection,computerSelection));

function game(){
    
    for(let i=0; i<5;i++){
        const userInput= prompt("Enter rock, paper or scissors");
        const computerSelection=getComputerChoice();
        playerSelection=userInput.toLowerCase();
        console.log(playerSelection);
        console.log(playRound(playerSelection,computerSelection));
        
    }
}