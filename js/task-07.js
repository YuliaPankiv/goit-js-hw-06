let elInput = document.querySelector("#font-size-control");
let textEl = document.querySelector("#text");
elInput.addEventListener("input", updateSizeText);
function updateSizeText(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
  console.log(textEl.style.fontSize);
}
