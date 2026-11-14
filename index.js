import { assembleCustomSiteTags } from './lib/site-tag-assembler.js';

assembleCustomSiteTags([
    'header',
    'footer',
    'petCardList',
    'petGallerySettings'
]);

const petSwitch = document.querySelector('#pet-toggle');
const galleryContainer = document.querySelector('#gallery-container');
petSwitch.addEventListener('change', (e) => {
    if (e.target.checked === true) {
        galleryContainer.classList.add('showSecondGallery')
    } else {
        galleryContainer.classList.remove('showSecondGallery')
    }
});