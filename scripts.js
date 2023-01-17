let arrayofChoice = ["rock", "paper", "scissors"];

const theComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  let ComputerPick = arrayofChoice[randomNumber];
  return ComputerPick;
};

console.log(theComputerChoice);

function checkwinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "it's a tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "player";
  } else return "computer";
}

function playRound(playerSelection, computerSelection) {
  const result = checkwinner(playerSelection, computerSelection);
  if (result == "it's a tie") {
    return "it's a draw";
  } else if (result === "player") {
    return "you win";
  } else {
    return "you lose";
  }
}
function playerchoice() {
  let input = false;
  while (input == false) {
    const choiceOfPlayer = prompt("paper rock  scissors");
    if (choiceOfPlayer == null) {
      continue;
    }
    const choiceOfPlayerLow = choiceOfPlayer.toLocaleLowerCase();
    if (arrayofChoice.includes(choiceOfPlayerLow)) {
      input = true;
      return choiceOfPlayerLow;
    }
  }
}

function game() {
  let scorePlayr = 0;
  let scoreComputer = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = playerchoice();
    const computerSelection = theComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    if (checkwinner(playerSelection, computerSelection) == "player") {
      scorePlayr++;
    } else if (checkwinner(playerSelection, computerSelection) == "computer") {
      scoreComputer++;
    }
  }
  console.log("game over");
  if (scorePlayr > scoreComputer) {
    console.log("player win");
  } else if (scoreComputer > scorePlayr) {
    console.log("computer won dumbass!!");
  } else {
    console.log("we have a tie");
  }
}
game();
