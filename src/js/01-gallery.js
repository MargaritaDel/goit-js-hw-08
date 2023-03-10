// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

function createGallaryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__item" href="${original}">
  <img   
  class="gallery__image"
   src="${preview}"
  alt="${description}" />
</a>`;
    })
    .join('');
}

const Markup = createGallaryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', Markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
