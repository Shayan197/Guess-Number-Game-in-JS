const checkBtn = document.getElementById("chk-btn");
const guessNum = document.getElementById("guessNum");
const boxNum = document.getElementById("boxNum");

const textChnger = document.getElementById("textChnger");
const lowScore = document.getElementById("lowScore");
const highScore = document.getElementById("highScore");

const playAgain = document.getElementById("playAgain");

let score = 20;
let highScor = 0;
lowScore.innerHTML = score;
highScore.innerHTML = highScor;
playAgain.disabled = true;

checkBtn.addEventListener("click", function () {
  event.preventDefault();
  let randomNum = Math.floor(Math.random() * 20) + 1;
  let userGuess = Number(boxNum.value);
  if (boxNum.value > 20 || boxNum.value < 1) {
    textChn("enter number greater than 0 and smaller than 21");
    boxNum.innerHTML = null;
  } else if (checkInput()) {
    if (userGuess === randomNum) {
      textChn("You Win - Click on play again button for playing again");
      guessNum.innerHTML = randomNum;
      score = 20;
      highScor = 0;
      checkBtn.disabled = true;
      playAgain.disabled = false;
      document.body.style.backgroundColor = "green";
    } else if (userGuess < randomNum) {
      textChn("Grater but almost near");
      lowScore.innerHTML = --score;
      highScore.innerHTML = ++highScor;
      exit();
    } else if (userGuess > randomNum) {
      textChn("Smaller but almost near");
      lowScore.innerHTML = --score;
      highScore.innerHTML = ++highScor;
      exit();
    } else {
      console.log("opps.. something went wrong " + textChn("Error"));
    }
  } else {
    textChn("First you have to input a number");
  }
});

playAgain.addEventListener("click", function () {
  guessNum.innerHTML = "?";
  boxNum.value = null;
  lowScore.innerHTML = score;
  highScore.innerHTML = highScor;
  textChn("Start Guessing ...");
  checkBtn.disabled = false;
  playAgain.disabled = true;
  score = 20;
  highScor = 0;
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.928)";
});

function textChn(text) {
  textChnger.innerHTML = text;
}

function exit() {
  if (score <= 0) {
    textChn("All Tries Finished - Click on Play Again Button ..");
    lowScore.innerHTML = "0";
    highScore.innerHTML = "20";
    checkBtn.disabled = true;
    playAgain.disabled = false;
  }
}

function checkInput() {
  const value = boxNum.value;
  return value.trim() !== "";
}
