// let input = document.querySelector("input");
// let createBtn = document.querySelector("[data-create]");
// let destroyBtn = document.querySelector("[data-destroy]");
// let divBoxes = document.querySelector("#boxes");

// input.addEventListener("change", getAmount);
// destroyBtn.addEventListener("click", destroyBoxes);

// function getAmount(event) {
//   let amount = event.currentTarget.value;

//   createBtn.addEventListener("click", createBoxes(amount));
// }

// function createBoxes(amount) {
//   let size = {
//     width: 20,
//     height: 20,
//   };
//   let list = [];

//   for (let index = 0; index < amount; index++) {
//     let div = document.createElement("div");

//     div.style.height += `${(size.height += 10)}px`;
//     div.style.width += `${(size.width += 10)}px`;
//     div.style.backgroundColor = getRandomHexColor();
//     list.push(div);
//   }
//   divBoxes.append(...list);
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function destroyBoxes() {
//   divBoxes.innerHTML = "";
//   input.value = "";
// }

let input = document.querySelector("input");
let createBtn = document.querySelector("[data-create]");
let destroyBtn = document.querySelector("[data-destroy]");
let divBoxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBox);
destroyBtn.addEventListener("click", destroyBoxes);

function createBox() {
  let amount = input.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  divBoxes.innerHTML = "";

  let size = {
    width: 20,
    height: 20,
  };
  let list = [];

  for (let index = 0; index < amount; index++) {
    let div = document.createElement("div");

    div.style.height += `${(size.height += 10)}px`;
    div.style.width += `${(size.width += 10)}px`;
    div.style.backgroundColor = getRandomHexColor();
    list.push(div);
  }
  divBoxes.append(...list);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
  input.value = "";
}
