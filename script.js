'use strict';

const message = document.querySelector('.message').textContent;

// document.querySelector('.message').textContent = 'correct Number!';
// console.log(
//   (document.querySelector('.message').textContent = 'correct Number!')
// );
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// const guess = (document.querySelector('.guess').value = 15);
// console.log(guess);
let secreatNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMesssage = function (message) {
  document.querySelector('.message').textContent = message;
};

console.log(secreatNumber);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    displayMesssage('No Number');
  } else if (guess === secreatNumber) {
    displayMesssage('correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '300px';
    document.querySelector('.number').textContent = secreatNumber;
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secreatNumber) {
    if (score > 1) {
      displayMesssage(guess < secreatNumber ? 'too low' : 'too high');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMesssage('you lost the game');
      document.querySelector('.score').textContent = 0;
    }
    // } else if (guess > secreatNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'too high';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'you lost the game';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  document.querySelector('.score').textContent = score;
  displayMesssage('Start guessing...');
  secreatNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '150px';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
