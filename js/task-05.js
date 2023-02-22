let inputRes = document.querySelector("#name-input");
let textRef = document.querySelector("#name-output");

inputRes.addEventListener("input", onInputAction);
function onInputAction(event) {
  textRef.textContent = event.currentTarget.value;
  if (textRef.textContent === "") {
    textRef.textContent = "Anonymous";
  }
}
