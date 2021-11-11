// local data
const images = [
  { id: 1, src: "./assets/images/image-1.jpg" },
  { id: 2, src: "./assets/images/image-2.jpg" },
  { id: 3, src: "./assets/images/image-3.jpg" },
  { id: 4, src: "./assets/images/image-4.jpg" },
  { id: 5, src: "./assets/images/image-5.jpg" },
  { id: 6, src: "./assets/images/image-6.jpg" },
  { id: 7, src: "./assets/images/image-7.jpg" },
  { id: 8, src: "./assets/images/image-8.jpg" },
  { id: 9, src: "./assets/images/image-9.jpg" },
  { id: 10, src: "./assets/images/image-10.jpg" },
  { id: 11, src: "./assets/images/image-11.jpg" },
  { id: 12, src: "./assets/images/image-12.jpg" },
];

// get elements
const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".modal");
const fullImg = document.querySelector(".full-img");

// render imgs
const tempImg = images
  .map((img) => {
    return `<div class='img-container'>
  <img src=${img.src} />
  </div>`;
  })
  .join("");
gallery.innerHTML = tempImg;

const smallImages = document.querySelectorAll(".img-container img");

// open modal
smallImages.forEach((img) => {
  img.addEventListener("click", () => {
    fullImg.src = img.src;

    fullImg.classList.add("open");
    modal.classList.add("open");
  });
});

// close modal
modal.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    modal.classList.remove("open");
    fullImg.classList.remove("open");
  }
});
