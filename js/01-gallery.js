import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerEl = document.querySelector('div.gallery');
const imagesMarcup = createGalleryImgMarcup(galleryItems);

galleryContainerEl.insertAdjacentHTML('afterbegin', imagesMarcup);

galleryContainerEl.addEventListener('click', onGalleryContainerClick);

function createGalleryImgMarcup(images) {
    return images.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `;
        })
        .join('');
}

function onGalleryContainerClick(e) {
    e.preventDefault();
    
    const instance = basicLightbox.create(`
        <img
        src="${e.target.dataset.source}"/>
        `);

    galleryContainerEl.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && basicLightbox.visible()) {
        instance.close();
        }
    });

    if(!e.target.classList.contains('gallery__image')) {
        return;
    } else {
        instance.show();
    }  
}