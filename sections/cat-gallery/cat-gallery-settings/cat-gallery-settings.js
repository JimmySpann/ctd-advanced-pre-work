import cssStyles from './cat-gallery-settings.css?raw';
import { getCatBreeds } from '../../../lib/cat-api-handler.js';

async function updateSettings() {
    const selectedBreedId = document.querySelector('#gallery-breed-select').value ?? 'any';
    const selectedSort = document.querySelector('#gallery-sort-select').value ?? 'rand';

    const catCardListElement = document.querySelector('site-cat-card-list');
    await catCardListElement.fetchAndRender(selectedBreedId, selectedSort);
}

const onRender = async (element) => {
    const catBreeds = await getCatBreeds();
    const breedSelectElement = element.querySelector('#gallery-breed-select');
    const sortSelectElement = element.querySelector('#gallery-sort-select');

    catBreeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelectElement.appendChild(option);
    });

    breedSelectElement.addEventListener('change', updateSettings);
    sortSelectElement.addEventListener('change', updateSettings);
}

export const options = {
    fileLocation: './sections/cat-gallery/cat-gallery-settings/cat-gallery-settings.partial.html',
    cssStyles: cssStyles,
    customElementName: 'site-cat-gallery-settings',
    onRender: onRender
};
