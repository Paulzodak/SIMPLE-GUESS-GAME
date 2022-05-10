let randomNumber = Math.round(Math.random() * 10);
let livesCounter = 3;
let liveCounterMessage = (document.querySelector(
  ".score"
).textContent = `Lives : ${livesCounter}`);
console.log(liveCounterMessage);
document.querySelector(".Highscore").textContent = `Highscore : ${0}`;
console.log(liveCounterMessage);
// let wrongAnswerAnimation = (document.querySelector(
//   ".again"
// ).style.animationName = "answer_container_animation");
const getUserInput = () => {
  let isLiveCounterGreaterThanZero = livesCounter > 0;
  let isLiveCounterLesserThanZero = livesCounter < 0;
  // Getting user input
  const userInput = document.querySelector(".userInput").value;
  // Convert user input to number to avoid bugs
  const userInputToNumber = Number(userInput);
  // let liveCounter = 10;
  // console.log(randomNumber);
  if (userInput < 11 && userInput > 0) {
    console.log(randomNumber);

    // CONDITION 1
    if (userInputToNumber === randomNumber && isLiveCounterGreaterThanZero) {
      document.querySelector(".answer_container").innerHTML =
        randomNumber + "!";
      document.querySelector(".answer_container").style.backgroundColor =
        "green";
      document.querySelector(".hinter").innerHTML = `Yes!,You did it!!`;
      document.querySelector(".answer_container").style.animationName = "none";
      document.querySelector(
        ".Highscore"
      ).innerHTML = `Highscore : ${livesCounter}`;
      console.log(`highscore : ${livesCounter}`);
      document.querySelector("button").style.display = "none";
      document.querySelector(".guess").style.animationName = "blink_animation";
    }
    // CONDITION 2
    else if (userInput !== randomNumber && isLiveCounterGreaterThanZero) {
      livesCounter--;
      let liveCounterMessage = (document.querySelector(
        ".score"
      ).textContent = `Lives : ${livesCounter}`);
      if (
        userInputToNumber === randomNumber + 2 ||
        userInputToNumber === randomNumber + 1 ||
        userInputToNumber === randomNumber - 2 ||
        userInputToNumber === randomNumber - 1
      ) {
        document.querySelector(".again").style.animationName =
          "answer_container_animation";
        liveCounterMessage;
        document.querySelector(".hinter").innerHTML = "You are getting closer";
      } else if (
        userInputToNumber === randomNumber + 3 ||
        userInputToNumber === randomNumber + 4 ||
        userInputToNumber === randomNumber + 5
      ) {
        document.querySelector(".again").style.animationName =
          "answer_container_animation";
        liveCounterMessage;
        document.querySelector(".hinter").innerHTML = "Too High";
      } else if (
        userInputToNumber === randomNumber - 3 ||
        userInputToNumber === randomNumber - 4 ||
        userInputToNumber === randomNumber - 5
      ) {
        document.querySelector(".again").style.animationName =
          "answer_container_animation";
        liveCounterMessage;
        document.querySelector(".hinter").innerHTML = "Too Low !!!";
      } else if (
        userInputToNumber === randomNumber + 6 ||
        userInputToNumber === randomNumber + 7 ||
        userInputToNumber === randomNumber + 8 ||
        userInputToNumber === randomNumber + 9 ||
        userInputToNumber === randomNumber + 10
      ) {
        document.querySelector(".again").style.animationName =
          "answer_container_animation";
        liveCounterMessage;
        document.querySelector(".hinter").innerHTML = "Try Harder !!!";
      } else if (
        userInputToNumber === randomNumber - 6 ||
        userInputToNumber === randomNumber - 7 ||
        userInputToNumber === randomNumber - 8 ||
        userInputToNumber === randomNumber - 9 ||
        userInputToNumber === randomNumber - 10
      ) {
        document.querySelector(".again").style.animationName =
          "answer_container_animation";
        liveCounterMessage;
        document.querySelector(".hinter").innerHTML = "Try Harder !!!";
      } else if (isLiveCounterLesserThanZero) {
        console.log("Game over");
      }
    } // END OF CONDITION 2
    else if (
      userInput !== randomNumber ||
      userInput === randomNumber ||
      isLiveCounterLesserThanZero
    ) {
      document.querySelector("button").style.display = "none";
      document.querySelector(".hinter").innerHTML = `Game over!`;
    }
  } else {
    document.querySelector(".hinter").innerHTML =
      "CHOOSE A DIGIT BETWEEN 1 -10!!";
  }
};

const hover = () => {
  document.querySelector(".again").style.animationName = "none";
};
const reset = () => {
  livesCounter = 3;
  randomNumber = Math.round(Math.random() * 10);
  // document.querySelector(".answer_container").innerHTML = randomNumber + "!";
  // document.querySelector(".answer_container").style.backgroundColor = "green";
  // document.querySelector(".hinter").innerHTML = `Yes!,You did it!!`;
  // document.querySelector(".answer_container").style.animationName = "none";
  document.querySelector(".Highscore").innerHTML = `Highscore : ${0}`;
  document.querySelector(".hinter").innerHTML = ` `;
  let liveCounterMessage = (document.querySelector(
    ".score"
  ).textContent = `Lives : ${livesCounter}`);
  // console.log(`highscore : ${livesCounter}`);
  document.querySelector("button").style.display = "block";
  // document.querySelector(".guess").style.animationName = "blink_animation";
};
