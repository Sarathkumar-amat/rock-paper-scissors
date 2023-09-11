console.log("let's start rock papers scissors");
const array = ["rock","paper","scissor"];

function getComputerChoice(){
    return array[(Math.floor(Math.random() * array.length))];
}

function playRound(playerSelection,computerSelection)
{
    const player = playerSelection.toUpperCase();
    const computer = computerSelection.toUpperCase();
    if(player===computer)
    {
        return "TIE"
    }
    else if(player==="ROCK")
    {
        if(computer==="PAPER") return "You Lose";
        else if(computer==="SCISSOR") return "You Win";
    }
    else if(player==="PAPER")
    {
        if(computer==="ROCK") return "You Win";
        else if(computer==="SCISSOR") return "You Lose";
    }
    else if(player==="SCISSOR")
    {
        if(computer==="ROCK") return "You Lose";
        else if(computer==="PAPER") return "You Win";
    }
} 

function game()
{
    let myScore = 0;
    let computerScore = 0;
    for(let i=1;i<=5;i++)
    {
        let playerChoice = prompt("Enter your choice(Rock or Paper or Scissor");
        let result = playRound(playerChoice,getComputerChoice());
        if(result==="TIE")
        {
            myScore++;
            computerScore++;
        }
        else if(result==="You Win")
        {
            myScore++;
        }
        else if(result==="You Lose")
        {
            computerScore++;
        }
        console.log(`Game ${i}: ${result}`);
    }
    if(myScore>computerScore)
    {
        console.log("You won this game")
    }
    else if(myScore<computerScore){
        console.log("You lost this game")
    }
    else{
        console.log("Game Tie");
    }
}
game();
