function gameResult() {
  chanceElement.innerHTML = chance - 1;
  numberMessage.style.display = "block";

  // console.log(numberMessage);

  let valueElement = +userInputElement.value;
  //   console.log("okk");

  if (chance !== 0 && chance <= 3) {
  //  console.log(valueElement);
    if (valueElement === randomNumber) {
      showingResultElement.style.display = "block";
      gameOverMassage.innerText = "You Won, Congratulations!!";
      inputDisplayElement.style.display = "none";
      chanceElement.parentElement.style.display = "none";
      correctNumberElement.style.display = "none";
      numberMessage.style.display = "none";
      //    gameOverMassage.innerText = "";
      chance--;
      //    console.log("ok");

      return;
    } else {
      chance--;
      // console.log(chance);
      // numberMessage.style.display = "block";
      if (valueElement > randomNumber && chance != 0) {
        numberMessage.innerText = "Correct answer is smaller!";
      }
      if (valueElement < randomNumber && chance != 0) {
        numberMessage.innerText = "Correct answer is greater!";
      }

      if (chance === 0) {
        showingResultElement.style.display = "block";
        gameOverMassage.innerText = "You Lose !";
        inputDisplayElement.style.display = "none";
        chanceElement.parentElement.style.display = "none";
        numberMessage.style.display = "none";
        correctNumberElement.innerText = `Correct number is ${randomNumber}`;
      }
    }
  }
  userInputElement.value = "";
}

function restartGame() {
  numberMessage.style.display = "block";
  showingResultElement.style.display = "none";
  inputDisplayElement.style.display = "block";
  gameOverMassage.innerText = "";
  inputButtonElement.addEventListener("click", gameResult);
  chance = 3;
  chanceElement.innerText = chance;
  randomNumber = Math.floor(Math.random() * high) + 1;
  console.log(randomNumber);
  chanceElement.parentElement.style.display = "block";
  userInputElement.value = "";
  numberMessage.style.display = "none";
}
