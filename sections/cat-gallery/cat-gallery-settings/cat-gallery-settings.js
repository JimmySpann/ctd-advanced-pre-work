import cssStyles from './cat-gallery-settings.css?raw';
import { getCatBreeds } from '../../../lib/cat-api-handler.js';

const onRender = async (element) => {
    const catBreeds = await getCatBreeds();
    const selectElement = element.querySelector('#gallery-breed');

    catBreeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        selectElement.appendChild(option);
    });
}

export const options = {
    fileLocation: './sections/cat-gallery/cat-gallery-settings/cat-gallery-settings.partial.html',
    cssStyles: cssStyles,
    customElementName: 'site-cat-gallery-settings',
    onRender: onRender
};
