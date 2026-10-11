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

// function playGame() { 
     let computerScore = 0;
     let humanScore = 0;
     function playRound(playerSelection) {
        const computerelection = getComputerChoice();
        if (humanScore === 5 || computerScore === 5) {
            return;
        }
         playerSelection = playerSelection.toLowerCase();
         if (playerSelection === computerelection) {
         results.textContent = "tie";
         }
         if (playerSelection === "rock" && computerelection === "scissor") {
         results.textContent = "you win! rock beats scissor ";
         humanScore++;
         }
         if (playerSelection === "scissor" && computerelection === "paper") {
         results.textContent = "you win! scissor beats paper";
         humanScore++;
         }
          if (playerSelection === "paper" && computerelection === "rock"){
           results.textContent = "you win! paper beats rock ";
         humanScore++;
         }
          //  computerlogic
         if (playerSelection === "scissor" && computerelection === "rock"){
         results.textContent = "you lose! rock beats scissor ";
           computerScore++;
         }
         if (playerSelection === "paper" && computerelection === "scissor"){
         results.textContent = "you lose! scissor beats paper";
         computerScore++;
            }
         if (playerSelection === "rock" && computerelection === "paper"){
          results.textContent = "you lose! paper beats rock ";
         computerScore++;
         }
         scores.textContent = `you : ${humanScore} | Computer : ${computerScore} `;
         if (humanScore === 5) {
            results.textContent = "you won the game!";
         }
         if (computer === 5) {
            results.textContent = "computer won the game!";
         }
}
const rockButton = 
document.querySelector("#rock");
const paperButton = 
document.querySelector("#paper");
const scissorButton = 
document.querySelector("#scissor");
 rockButton.addEventListener("click", function () { 
    playRound("rock");
  });
   paperButton.addEventListener("click", function () { 
    playRound("paper");
  });
   scissorButton.addEventListener("click", function () { 
    playRound("scissor");
  });
const results = 
document.querySelector("#results"); 
const scores =
document.querySelector("#score"); 