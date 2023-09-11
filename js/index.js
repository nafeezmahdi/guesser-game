const low = 1;
const high = 100;
let chance = 3;
let randomNumber;
randomNumber = Math.floor(Math.random() * high) + 1;
console.log(randomNumber);

const lowNumberElement = document.getElementById("low-number");
lowNumberElement.innerText = low;
const highNumberElement = document.getElementById("high-number");
highNumberElement.innerText = high;

const showingResultElement = document.getElementById("game-result");
showingResultElement.style.display = "none";

const inputDisplayElement = document.getElementById("input-number");

const inputButtonElement = document.querySelector("#input-number button");
// console.log(inputButtonElement);

let userInputElement = document.getElementById("user-input");
// console.log(userInputElement);

let chanceElement = document.getElementById("game-chance");
// chanceElement.innerText = chance-1;
const gameOverMassage = document.getElementById("massage");
// console.log(gameOverMassage);

const restartButtonElement = document.getElementById("restart");
// console.log(restartButtonElement);
const readChanceElement = document.getElementById("read-chance");
// console.log(readChanceElement);
const correctNumberElement = document.getElementById("correct-number");

const numberMessage = document.getElementById("number-message");
// console.log(numberMessage);

// for(i=1; i<=3; i++){
//     // chanceElement.innerText = chance--;
// }

inputButtonElement.addEventListener("click", gameResult);

restartButtonElement.addEventListener("click", restartGame);
