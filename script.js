const randomNumber = Math.round(Math.random() * 10);

const getUserInput = () => {
  // Getting user input
  const userInput = document.querySelector(".userInput").value;
  // Convert user input to number to avoid bugs
  const userInputToNumber = Number(userInput);
  // console.log(randomNumber);
  if (userInput <= 10 && userInput > 0) {
    console.log(randomNumber);
    if (userInputToNumber === randomNumber) {
      document.querySelector(".answer_container").innerHTML =
        randomNumber + "!";
      document.querySelector(".answer_container").style.backgroundColor =
        "green";
      document.querySelector(".hinter").innerHTML = `Yes , You did it!!`;
    } else if (
      userInputToNumber === randomNumber + 2 ||
      userInputToNumber === randomNumber + 1 ||
      userInputToNumber === randomNumber - 2 ||
      userInputToNumber === randomNumber - 1
    ) {
      document.querySelector(".hinter").innerHTML = "You are getting closer";
    } else if (
      userInputToNumber === randomNumber + 3 ||
      userInputToNumber === randomNumber + 4 ||
      userInputToNumber === randomNumber + 5
    ) {
      document.querySelector(".hinter").innerHTML = "Too High";
    } else if (
      userInputToNumber === randomNumber - 3 ||
      userInputToNumber === randomNumber - 4 ||
      userInputToNumber === randomNumber - 5
    ) {
      document.querySelector(".hinter").innerHTML = "Too Low !!!";
    } else if (
      userInputToNumber === randomNumber + 6 ||
      userInputToNumber === randomNumber + 7 ||
      userInputToNumber === randomNumber + 8 ||
      userInputToNumber === randomNumber + 9 ||
      userInputToNumber === randomNumber + 10
    ) {
      document.querySelector(".hinter").innerHTML = "Try Harder !!!";
    } else if (
      userInputToNumber === randomNumber - 6 ||
      userInputToNumber === randomNumber - 7 ||
      userInputToNumber === randomNumber - 8 ||
      userInputToNumber === randomNumber - 9 ||
      userInputToNumber === randomNumber - 10
    ) {
      document.querySelector(".hinter").innerHTML = "Try Harder !!!";
    }
  } else {
    document.querySelector(".hinter").innerHTML =
      "CHOOSE A DIGIT BETWEEN 1 -10!!";
  }
};
