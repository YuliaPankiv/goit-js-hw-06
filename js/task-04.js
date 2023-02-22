let counterValue = document.querySelector("#value");
let actions = document.querySelectorAll("#counter button");

let btnDecrement = actions[0].dataset;
let btnIncrement = actions[1].dataset;

actions[0].addEventListener("click", onBtnDecrementClick);

actions[1].addEventListener("click", onBtnIncrementClick);

function onBtnDecrementClick() {
  counterValue.textContent -= 1;
}
function onBtnIncrementClick() {
  counterValue.textContent = parseInt(counterValue.textContent) + 1;
}
