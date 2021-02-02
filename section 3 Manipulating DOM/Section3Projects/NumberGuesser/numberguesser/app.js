/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// game values

let min = 1,
  max = 3,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3; //using this format needs to end with a either nothing or a semi colon

//UI elements
const game = document.querySelector("#game");
const minNum = document.querySelector(".min-num");
const maxNum = document.querySelector(".max-num");
const guessBtn = document.querySelector("#guess-btn");
const guessInput = document.querySelector("#guess-input");
const message = document.querySelector(".message");

// assign  UI min and max
minNum.textContent = min; //textContent assigns node the value thats on the webpage
maxNum.textContent = max;

// play again event listener
game.addEventListener("mousedown", function (e) {
  //   console.log(1);
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

//listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  //validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} & ${max}`, "blue"); //connects to color in setMessage()
  }
  //Check if won
  if (guess === winningNum) {
    //disable input
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor = "green";
    console.log("won");
    //call set msg func
    setMessage(`${winningNum} is correct, you WIN!!`, "green");
  } else {
    //setting amount of guesses left
    //wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game over - lost
      gameOver(
        false,
        `you lost, the number you chose was ${guess}, whereas the winning number is ${winningNum}`
      );
    } else {
      // Game continues - answer wrong

      // Change border color
      guessInput.style.borderColor = "red";
      //clear input
      guessInput.value = "";
      // Tell user its the wrong number
      setMessage(
        `${guess} is the wrong number, please try again. you have ${guessesLeft} guesses left.`,
        "red"
      );
    }
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  //disable input
  guessInput.disabled = true;
  //change borderColor input
  guessInput.style.borderColor = color;
  //change message text color
  message.style.color = color;

  setMessage(msg);

  //play again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again"; //appends
}

//set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
//get winning number
function getRandomNum(min, max) {
   const THEnumber = document.createElement("p")
  THEnumber.createTextNode(Math.floor(Math.random() * (max - min + 1) + min));
  return Math.floor(Math.random() * (max - min + 1) + min);
  // console.log(Math.floor(Math.random() * (max - min + 1) + min))
}
