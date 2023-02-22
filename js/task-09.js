let buttonChangeColor = document.querySelector("button.change-color");
let spanColorName = document.querySelector("span.color");
buttonChangeColor.addEventListener("click", changeColor);
function changeColor() {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  spanColorName.textContent = color;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
