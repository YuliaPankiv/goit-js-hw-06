let categories = document.querySelector("#categories");

function countCategories() {
  let list = categories.querySelectorAll(":scope > li");

  console.log(`Number of categories: ${categories.childElementCount}`);

  list.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
  });
}

countCategories();
