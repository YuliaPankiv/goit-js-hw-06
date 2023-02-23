let inputRef = {
  input: document.querySelector("#validation-input"),
};
let correctLengthInput = inputRef.input.dataset;

inputRef.input.addEventListener("blur", checkInputLength);
function checkInputLength(e) {
  if (e.target.value.length === parseInt(correctLengthInput.length)) {
    e.target.classList.remove("invalid");
    e.target.classList.add("valid");
  } else {
    e.target.classList.add("valid");
    e.target.classList.add("invalid");
  }
}
