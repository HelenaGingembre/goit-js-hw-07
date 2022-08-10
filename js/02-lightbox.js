import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
//1.Создание и рендер разметки по массиву данных galleryItems 
const galleryContainer = document.querySelector('.gallery');

function createGalleryTemplate(galleryItem, index) {

    const template = `
        <a class="gallery__item" href="${galleryItem.original}">
            <img class="gallery__image"
            src="${galleryItem.preview}" 
            alt="${galleryItem.description}" />
        </a>`

    return template;
} 

function renderAllGallery() {
    const fullTemplate =  galleryItems.reduce((acc, galleryItem, index) => `${acc} ${createGalleryTemplate(galleryItem, index)}`, '')
    galleryContainer.insertAdjacentHTML('beforeend', fullTemplate)
}

renderAllGallery();

var lightbox = new SimpleLightbox('.gallery a', { 
    
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,

 });
