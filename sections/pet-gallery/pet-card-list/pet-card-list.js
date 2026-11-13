import cssStyles from './pet-card-list.css?raw';

import { createCard } from '../../../components/card/card.js';
import { createPagination } from '../../../components/pagination/pagination.js';

import { getPetImages } from '../../../lib/pet-api-handler.js';

async function onRender(element) {
    fetchAndRender('any', 'rand', 0, element);
}

async function fetchAndRender(breedId, sort, page, element) {
    const processedBreedId = breedId === 'any' ? null : breedId; // Default to 'any' if no breedId is provided
    const { data: unprocessedPetImagesData, pagination } = await getPetImages(processedBreedId, sort, page);

    const rootElement = this ? this : element; // Use 'this' if available, otherwise use the passed element
    rootElement.querySelector('.pet-gallery-list').innerHTML = ''; // Clear existing cards

    await handleCardListCreation(unprocessedPetImagesData, rootElement);
    await handlePaginationCreation(processedBreedId, sort, rootElement, pagination);

}

async function handleCardListCreation(unprocessedPetImagesData, rootElement) {
    const processedPetImagesData = unprocessedPetImagesData.map(pet => ({
        imageSrc: pet.url,
        imageAlt: pet.breeds[0]?.name || 'Unknown',
        title: pet.breeds[0]?.name || 'Unknown',
        description: pet.breeds[0]?.description || 'No description available.'
    }));

    const petGalleryListElement = rootElement.querySelector('.pet-gallery-list');
    for (const cardData of processedPetImagesData) {
        const newCardElement = await createCard(cardData);
        petGalleryListElement.appendChild(newCardElement);
    }
}

async function handlePaginationCreation(breedId, sort, rootElement, pagination) {
    const petGalleryPaginationElement = rootElement.querySelector('.pet-gallery-pagination');
    petGalleryPaginationElement.innerHTML = "";

    if (sort === 'rand') {
        const refreshButton = Object.assign(document.createElement('button'), {
            textContent: "Refresh",
            className: "refresh-button",
        });

        refreshButton.addEventListener('click', async () => {
            await fetchAndRender(breedId, sort, 0, rootElement);
        });

        petGalleryPaginationElement.appendChild(refreshButton);
    } else {
        const onPrevClick = () => { fetchAndRender(breedId, sort, (pagination.currentPage - 1), rootElement) }
        const onNextClick = () => { fetchAndRender(breedId, sort, (pagination.currentPage + 1), rootElement) }
        const paginationElement = await createPagination(pagination.currentPage, pagination.totalPages, onPrevClick, onNextClick);
        petGalleryPaginationElement.appendChild(paginationElement);
    }
}

export const options = {
    fileLocation: './sections/pet-gallery/pet-card-list/pet-card-list.partial.html',
    cssStyles: cssStyles,
    customElementName: 'site-pet-card-list',
    customFunctions: { fetchAndRender },
    onRender: onRender
};
