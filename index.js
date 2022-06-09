const rpcArray = ['Rock', 'Paper', 'Scissors'];
let computerScore = 0;
let playerScore = 0;
let tie = 0;

function computerPlay() {
  return rpcArray[Math.floor(Math.random() * rpcArray.length)];
}

function parseInput() {
  let badInput = true;
  while (badInput) {
    let playerSelect = prompt('Select Rock, Paper or Scissors:');
    playerSelect = playerSelect.charAt(0).toUpperCase() + playerSelect.slice(1);
    console.log(playerSelect);
    if (
      playerSelect == 'Rock' ||
      playerSelect == 'Paper' ||
      playerSelect == 'Scissors'
    ) {
      badInput = false;
      return playerSelect;
    } else {
      alert('Please input Rock, Paper or Scissors');
    }
  }
}

function playRound(playerSelect, computerSelect) {
  console.log(playerSelect, computerSelect);
  if (computerSelect == playerSelect) {
    tie++;
    return `\rComputer: ${computerSelect} \rTied!`;
  } else if (
    (computerSelect == 'rock' && playerSelect == 'scissors') ||
    (computerSelect == 'scissors' && playerSelect == 'paper') ||
    (computerSelect == 'paper' && playerSelect == 'rock')
  ) {
    computerScore++;
    return `\rComputer: ${computerSelect}\rYou Lose!`;
  } else {
    playerScore++;
    return `\rComputer: ${computerSelect}\rYou Win!`;
  }
}

function game() {
  for (let i = 1; i < 6; i++) {
    const computerSelect = computerPlay();
    const playerSelect = parseInput();
    console.log(playerSelect, computerSelect);

    alert(`You: ${playerSelect}` + playRound(playerSelect, computerSelect));
  }
  alert(
    'Thank you for playing Rock Paper Scissors.\r' +
      'Score:\rYou: ' +
      playerScore +
      '\rComputer: ' +
      computerScore +
      '\rTie: ' +
      tie
  );
}

game();
