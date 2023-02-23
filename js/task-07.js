let elInput = document.querySelector("#font-size-control");
let textEl = document.querySelector("#text");
textEl.style.fontSize = `${elInput.value}px`;
elInput.addEventListener("input", updateSizeText);
function updateSizeText(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
  console.log(textEl.style.fontSize);
}
