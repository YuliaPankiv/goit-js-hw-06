const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

let galleryList = document.querySelector(".gallery");

let createImg = (arr) => {
  return arr.map((el) => {
    let li = document.createElement("li");
    let newImg = document.createElement("img");

    newImg.src = el.url;
    newImg.alt = el.alt;

    li.insertAdjacentHTML("beforeend", newImg);
    return newImg;
  });
};
let list = createImg(images);
galleryList.append(...list);

// let galleryList = document.querySelector(".gallery");
// console.log(galleryList);

// function makeMarkup(arr) {
//   return arr.map(({ url, alt }) => {
//     let imgEl = document.createElement("img");
//     imgEl.src = url;
//     imgEl.alt = alt;
//     return imgEl;
//   });
// }

// function showGallery() {
//   const items = makeMarkup(images);
//   galleryList.append(...items);
// }
// showGallery();
