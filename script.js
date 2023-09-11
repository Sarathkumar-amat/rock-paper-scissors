console.log("let's start rock papers scissors");
const array = ["rock","paper","scissor"];

function getComputerChoice(){
    return array[(Math.floor(Math.random() * array.length))];
}
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

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