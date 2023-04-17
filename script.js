"use strict";

const message = document.querySelector(".message").textContent;
let lives = 3;
let secreatNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secreatNumber);

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    displayMessage("no number");
  } else if (guess === secreatNumber) {
    displayMessage("correct number");
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").textContent = secreatNumber;
  } else if (guess !== secreatNumber) {
    if (lives > 1) {
      displayMessage(guess < secreatNumber ? "too low" : "too high");
      lives--;
      document.querySelector(".score").textContent = lives;
    } else {
      displayMessage("you lost the game");
      document.querySelector(".score").textContent = 0;
      document.body.style.backgroundColor = "red";
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  lives = 3;
  secreatNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secreatNumber);
  document.querySelector(".score").textContent = lives;
  displayMessage("Start guessing...");
  document.body.style.backgroundColor = "#333";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
