function playGame(user_choice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computer_choice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').textContent = `You chose: ${user_choice}`;
  document.getElementById('computer-choice').textContent = `Computer chose: ${computer_choice}`;

  let result = '';

  if (user_choice === computer_choice) {
    result = "It's a draw!!";
  } else if (
    (user_choice === 'rock' && computer_choice === 'scissors') ||
    (user_choice === 'paper' && computer_choice === 'rock') ||
    (user_choice === 'scissors' && computer_choice === 'paper')
  ) {
    result = "You Win!!";
  } else {
    result = "You Lose!!";
  }

  document.getElementById('winner').textContent = `Result: ${result}`;
}
