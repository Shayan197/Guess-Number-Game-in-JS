
const checkBtn = document.getElementById("chk-btn");
const guessNum = document.getElementById("guessNum");
const boxNum = document.getElementById("boxNum");

const textChnger = document.getElementById("textChnger");
const lowScore = document.getElementById("lowScore")
const highScore = document.getElementById("highScore")

let score = 20;
let highScor = 0;
lowScore.innerHTML = score;
highScore.innerHTML = highScor
checkBtn.addEventListener('click',function(){
    let randomNum =  Math.floor(Math.random()*20) +1;
    let userGuess = Number(boxNum.value);
    if(userGuess === randomNum){
        guessNum.innerHTML = randomNum;
        textChn("You Win");
        lowScore.innerHTML = score--;
        highScore.innerHTML = highScor++;
    }
    else if(userGuess > randomNum){
        textChn("Very Grater");
        lowScore.innerHTML = score--;
        highScore.innerHTML = highScor++;
    }
    else if(userGuess < randomNum){
        textChn("Very Smaller");
        lowScore.innerHTML = score--;
        highScore.innerHTML = highScor++;
    }
    else{
        console.log("opps.. something went wrong " +textChn("Error"));
    }
});
function textChn(text){
    textChnger.innerHTML = text;
}