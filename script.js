function getComputerChoice() {
    let rps = Math.floor(Math.random() *3) +1
    if (rps === 1) {
        return "rock";
    }
       if (rps === 2) {
        return "paper";
    }
       if (rps === 3) {
        return "scissor";
    }
}
// getComputerChoice()

function getHumanChoice() {
    const  userchoice = prompt("Enter your choice : Rock, Paper, or Scissor")
    return userchoice;
}
// getHumanChoice()


function playGame() { 
     let computerScore = 0;
     let humanScore = 0;
     function playRound(humanChoice, computerChoice) {
         humanChoice = humanChoice.toLowerCase();
         if (humanChoice === computerChoice) {
         console.log("tie");
         }
         if (humanChoice === "rock" && computerChoice === "scissor") {
          console.log("you win! rock beats scissor ");
         humanScore++;
         }
         if (humanChoice === "scissor" && computerChoice === "paper") {
         console.log("you win! scissor beats paper");
         humanScore++;
         }
          if (humanChoice === "paper" && computerChoice === "rock"){
          console.log("you win! paper beats rock ");
         humanScore++;
         }
          //  computerlogic
         if (humanChoice === "scissor" && computerChoice === "rock"){
         console.log("you lose! rock beats scissor ");
           computerScore++;
         }
         if (humanChoice === "paper" && computerChoice === "scissor"){
         console.log("you lose! scissor beats paper");
         computerScore++;
            }
         if (humanChoice === "rock" && computerChoice === "paper"){
         console.log("you lose! paper beats rock ");
         computerScore++;
         }
     } 
     playRound(getHumanChoice(), getComputerChoice());
     playRound(getHumanChoice(), getComputerChoice());
     playRound(getHumanChoice(), getComputerChoice());
     playRound(getHumanChoice(), getComputerChoice());
     playRound(getHumanChoice(), getComputerChoice());  
     console.log("Your score is :", humanScore);
     console.log("Computer score is :", computerScore);
     if (humanScore > computerScore) {
        console.log("Congratulations you won");
     }
     if (humanScore < computerScore) {
        console.log("you lose");
     }
     if (humanScore === computerScore) {
        console.log("you tied");
     }
}
playGame();
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();