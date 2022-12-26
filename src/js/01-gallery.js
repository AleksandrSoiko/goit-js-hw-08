// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainerRef = document.querySelector('.gallery');
createItemOfGallery(galleryItems);

function createItemOfGallery(array) {
  const galleryItemsRef = array
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    })
    .join('');
  galleryContainerRef.innerHTML = galleryItemsRef;
}

const lightbox = new SimpleLightbox('.gallery a', {
  scrollZoom: false,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
