import cssStyles from './pet-gallery-settings.css?raw';
import { getPetBreeds } from '../../../lib/pet-api-handler.js';

async function updateSettings() {
    const selectedBreedId = document.querySelector('#gallery-breed-select').value ?? 'any';
    const selectedSort = document.querySelector('#gallery-sort-select').value ?? 'rand';

    const petCardListElement = document.querySelector('site-pet-card-list');
    await petCardListElement.fetchAndRender(selectedBreedId, selectedSort);
}

const onRender = async (element) => {
    const petBreeds = await getPetBreeds();
    const breedSelectElement = element.querySelector('#gallery-breed-select');
    const sortSelectElement = element.querySelector('#gallery-sort-select');

    petBreeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelectElement.appendChild(option);
    });

    breedSelectElement.addEventListener('change', updateSettings);
    sortSelectElement.addEventListener('change', updateSettings);
}

export const options = {
    fileLocation: './sections/pet-gallery/pet-gallery-settings/pet-gallery-settings.partial.html',
    cssStyles: cssStyles,
    customElementName: 'site-pet-gallery-settings',
    onRender: onRender
};
