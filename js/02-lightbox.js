import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

// ================
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}" 
          />
        </a>
      </li>
    `;
  })
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

// ================
var lightbox = new SimpleLightbox(".gallery__item a", {
  captionsData: "alt",
  captionDelay: 250,
});
