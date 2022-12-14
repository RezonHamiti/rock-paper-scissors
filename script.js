const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const checkWinner = (playerChoice, computerChoice) => {
  if (playerChoice == computerChoice) {
    return "tie";
  } else if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
};

const playRound = (playerChoice, computerChoice) => {
  const result = checkWinner(playerChoice, computerChoice);
  if (result == "tie") {
    return `its a tie. you both picked ${playerChoice}`;
  } else if (result == "player") {
    return `you win. ${playerChoice} beats ${computerChoice}`;
  } else {
    return `Computer wins. ${computerChoice} beats ${playerChoice}`;
  }
};



const getPlayerChoice = () => {
    let validateInput = false;
    while(validateInput == false){
        const choice = prompt("Type Rock, Paper or Scissors: ");
            if(choice == null || !choice.includes(choices)){
                prompt("You need to type in a valid answer. Choose between Rock Paper or Scissors:")
            } 
            const choiceToLowercase = choice.toLowerCase();
            if(choices.includes(choiceToLowercase)){
                validateInput = true;
                return choiceToLowercase;
            }
        }
    }



const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));
        if(checkWinner(playerChoice,computerChoice) == "player"){
            playerScore++;
        } else {
            computerScore++;
        }
    }
    console.log(`Your score: ${playerScore} || Computer score: ${computerScore}`)
    if(playerScore > computerScore){
        console.log("you won!")
    } else if (playerScore < computerScore) {
        console.log("computer won.")
    } else {
        console.log("tie.")
    }
};

game();