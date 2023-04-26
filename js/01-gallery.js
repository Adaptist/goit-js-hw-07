import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

// Разметка

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({preview, original, description}) => {
    return `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img 
                class="gallery__image" 
                src="${preview}" 
                data-source="${original}" 
                alt="${description}" 
            />
        </a>
        </li>
    `;
}).join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// Делегирование

gallery.addEventListener('click', event => {
    event.preventDefault();
  
    if (event.target.nodeName !== 'IMG') {
      return;
    }
  
    const imgSrc = event.target.dataset.source;
    const imgAlt = event.target.alt;
  
    openModal(imgSrc, imgAlt);
  });
  
  function openModal(src, alt) {
    const modal = basicLightbox.create(
      `<img src="${src}" alt="${alt}" />`
    );
  
    modal.show();
  }