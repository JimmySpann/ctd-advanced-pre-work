import cssStyles from './pet-gallery-settings.css?raw';
import { getPetBreeds } from '../../../lib/pet-api-handler.js';
import { capitalizeFirstLetter } from '../../../utils/strings.js';

async function updateSettings(species) {
    const parentElement = document.querySelector(`site-pet-gallery-settings[pet-type="${species}"]`)
    const selectedBreedId = parentElement.querySelector(`#gallery-breed-select`).value ?? 'any';
    const selectedSort = parentElement.querySelector('#gallery-sort-select').value ?? 'rand';

    const petCardListElement = document.querySelector(`site-pet-card-list[pet-type="${species}"]`);
    await petCardListElement.fetchAndRender(selectedBreedId, selectedSort);
}

const onRender = async (rootElement) => {
    const loadingSpinnerElement = rootElement.querySelector('.gallery-settings-loading-spinner-container');
    const galleryListContainer = rootElement.querySelector('.pet-gallery-settings-container');

    // Hide list show loading
    loadingSpinnerElement.style.display = 'flex'
    galleryListContainer.style.display = 'none';

    const species = rootElement.getAttribute('pet-type') || 'cat'
    const petBreeds = await getPetBreeds(species);

    // set text context
    rootElement.querySelector('.gallery-settings-header').textContent = capitalizeFirstLetter(species) + " Gallery"
    rootElement.querySelector('.gallery-settings-subheader').textContent = `Configure the settings for the ${species} gallery below.`
    rootElement.querySelector('#gallery-settings-breed-label').textContent = capitalizeFirstLetter(species) + " Breed:"

    // set up select elements
    const breedSelectElement = rootElement.querySelector('#gallery-breed-select');
    const sortSelectElement = rootElement.querySelector('#gallery-sort-select');

    petBreeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelectElement.appendChild(option);
    });

    breedSelectElement.addEventListener('change', () => updateSettings(species));
    sortSelectElement.addEventListener('change', () => updateSettings(species));

    // Show list hide loading
    loadingSpinnerElement.style.display = 'none'
    galleryListContainer.style.display = 'grid'
}

export const options = {
    fileLocation: './sections/pet-gallery/pet-gallery-settings/pet-gallery-settings.partial.html',
    cssStyles: cssStyles,
    customElementName: 'site-pet-gallery-settings',
    onRender: onRender
};
