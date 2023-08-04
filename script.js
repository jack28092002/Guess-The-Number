'use strict';
let score = 20;
let number = Math.trunc(Math.random() * 20 + 1);
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number');

    // wins
  } else if (guess === number) {
    // document.querySelector('.message').textContent = 'Correct Number';
    displayMessage('Correct number');
    document.querySelector('.number').textContent = number;
    // displayMessage(number);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }

    // guess is wrong
  } else if (guess !== number) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > number ? 'Too High!' : 'Too Low!';
      displayMessage(guess > number ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = '#222';
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start Guessing...');
    score = 20;
    document.querySelector('.score').textContent = score;

    number = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
  });
});
