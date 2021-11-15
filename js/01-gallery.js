import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const createGalleryCards = createGalleryImages(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", createGalleryCards);
galleryContainer.addEventListener("click", addGalleryContainerClick);

function createGalleryImages(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
        
       return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
        </a>
      </div>
    `;
  }).join("");
  
}

function addGalleryContainerClick(event) {
  
  event.preventDefault();
  
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  addGallery(event);

}

function addGallery(event) {
  
  const galleryLinkEl = event.target.dataset.source;
  
  const instance = basicLightbox.create(`
    <img src="${galleryLinkEl}">`).show();
  
  
  console.log(instance);
}

