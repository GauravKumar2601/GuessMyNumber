'use strict';

//Generating a random number to guess
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//game logic
//checking if the guessed number matches the random number generated
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    //When there is no input
    displayMessage('⛔ No Number');
  } else if (guess === secretNumber) {
    //When the guess is correct i.e. Player Wins
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    //When the guess is incorrect
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      //Decrementing the score every time the guess is incorrect
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You Lost');
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.score').textContent = 0;
    }
  }
  //     else if (guess > secretNumber) {
  //     //When the guess is higher
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too High';
  //       //Decrementing the score every time the guess is incorrect
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You Lost';
  //       document.querySelector('body').style.backgroundColor = 'red';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     //When the guess is lower
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too Low';
  //       //Decrementing the score every time the guess is incorrect
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You Lost';
  //       document.querySelector('body').style.backgroundColor = 'red';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

//Reset functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#100c53';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
