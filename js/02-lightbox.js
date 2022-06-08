import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector('ul.gallery');
const imagesMarcup = createGalleryImgMarcup(galleryItems);

galleryContainerEl.innerHTML = imagesMarcup;

// galleryContainerEl.addEventListener('click', onGalleryContainerClick);

function createGalleryImgMarcup(images) {
    return images.map(({ preview, original, description }) => {
        return `
            <li>
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" 
                    src="${preview}" 
                    alt="${description}" 
                    />
                </a>;
            </li>
        `})
        .join('');
    }

