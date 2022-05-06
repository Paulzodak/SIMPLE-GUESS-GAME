const randomNumber = Math.round(Math.random() * 10);
let scorecounter = 10;
const getUserInput = () => {
  // Getting user input
  const userInput = document.querySelector(".userInput").value;
  // Convert user input to number to avoid bugs
  const userInputToNumber = Number(userInput);
  // let liveCounter = 10;
  // console.log(randomNumber);
  if (userInput < 11 && userInput > 0) {
    console.log(randomNumber);
    if (userInputToNumber === randomNumber && scorecounter > 0) {
      document.querySelector(".answer_container").innerHTML =
        randomNumber + "!";
      document.querySelector(".answer_container").style.backgroundColor =
        "green";
      document.querySelector(".hinter").innerHTML = `Yes , You did it!!`;
      document.querySelector(".answer_container").style.animationName = "none";
    } else if (
      userInputToNumber === randomNumber + 2 ||
      userInputToNumber === randomNumber + 1 ||
      userInputToNumber === randomNumber - 2 ||
      (userInputToNumber === randomNumber - 1 && scorecounter > 0)
    ) {
      scorecounter--;
      document.querySelector(".again").style.animationName =
        "answer_container_animation";
      console.log(`score counter : ${scorecounter}`);
      document.querySelector(".hinter").innerHTML = "You are getting closer";
    } else if (
      userInputToNumber === randomNumber + 3 ||
      userInputToNumber === randomNumber + 4 ||
      (userInputToNumber === randomNumber + 5 && scorecounter > 0)
    ) {
      scorecounter--;
      document.querySelector(".again").style.animationName =
        "answer_container_animation";
      console.log(`score counter : ${scorecounter}`);
      document.querySelector(".hinter").innerHTML = "Too High";
    }
    // document.querySelector(".score").innerHTML = `Score : ${(liveCounter =
    //   liveCounter - 1)}`;
    else if (
      userInputToNumber === randomNumber - 3 ||
      userInputToNumber === randomNumber - 4 ||
      (userInputToNumber === randomNumber - 5 && scorecounter > 0)
    ) {
      scorecounter--;
      document.querySelector(".again").style.animationName =
        "answer_container_animation";
      console.log(`score counter : ${scorecounter}`);
      document.querySelector(".hinter").innerHTML = "Too Low !!!";
    }
    // document.querySelector(".score").innerHTML = `Score : ${(liveCounter =
    //   liveCounter - 1)}`;
    else if (
      userInputToNumber === randomNumber + 6 ||
      userInputToNumber === randomNumber + 7 ||
      userInputToNumber === randomNumber + 8 ||
      userInputToNumber === randomNumber + 9 ||
      (userInputToNumber === randomNumber + 10 && scorecounter > 0)
    ) {
      scorecounter--;
      document.querySelector(".again").style.animationName =
        "answer_container_animation";
      console.log(`score counter : ${scorecounter}`);
      document.querySelector(".hinter").innerHTML = "Try Harder !!!";
    } else if (
      userInputToNumber === randomNumber - 6 ||
      userInputToNumber === randomNumber - 7 ||
      userInputToNumber === randomNumber - 8 ||
      userInputToNumber === randomNumber - 9 ||
      (userInputToNumber === randomNumber - 10 && scorecounter > 0)
    ) {
      scorecounter--;
      document.querySelector(".again").style.animationName =
        "answer_container_animation";
      console.log(`score counter : ${scorecounter}`);
      document.querySelector(".hinter").innerHTML = "Try Harder !!!";
    } else {
      document.querySelector(".hinter").innerHTML =
        "CHOOSE A DIGIT BETWEEN 1 -10!!";
    }
  } else {
    console.log("ghjuiop");
  }
};

const hover = () => {
  document.querySelector(".again").style.animationName = "none";
};
