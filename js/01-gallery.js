import { galleryItems } from './gallery-items.js';

// Change code below this line
// console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

// ================
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
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
  })
  .join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

// ================
galleryList.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') return;

  const imgSrc = event.target.dataset.source;
  const imgAlt = event.target.alt;

  openModal(imgSrc, imgAlt);
});

// ================
const openModal = (src, alt) => {
  const modal = basicLightbox.create(`<img src="${src}" alt="${alt}" />`, {
    onShow: () => {
      document.addEventListener('keydown', onKeyDown);
    },
    onClose: () => {
      document.removeEventListener('keydown', onKeyDown);
    },
  });

  const onKeyDown = event => {
    if (event.code === 'Escape') {
      modal.close();
    }
  };

  modal.show();
};