const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let list = document.querySelector("#ingredients");
let createMarkupList = (el) => {
  return ingredients.map((el) => {
    let newLi = document.createElement("li");
    newLi.classList.add("item");
    newLi.textContent = el;

    return newLi;
  });
};
const li = createMarkupList(ingredients);
list.append(...li);

// let root = document.querySelector("#ingredients");

// function createMarkup(array) {
//   return array.map((item) => `<li>${item}</li>`).join("");
// }
// function showMarkup() {
//   const mark = createMarkup(ingredients);
//   root.insertAdjacentHTML("beforeend", mark);
// }

// showMarkup(ingredients);
