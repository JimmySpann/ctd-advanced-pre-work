import cssStyles from './cat-card-list.css?raw';

import { createCard } from '../../../components/card/card.js';
import { createPagination } from '../../../components/pagination/pagination.js';

import { getCatImages } from '../../../lib/cat-api-handler.js';

async function onRender(element) {
    fetchAndRender('any', 'rand', 0, element);
}

async function fetchAndRender(breedId, sort, page, element) {
    const processedBreedId = breedId === 'any' ? null : breedId; // Default to 'any' if no breedId is provided
    const { data: unprocessedCatImagesData, pagination } = await getCatImages(processedBreedId, sort, page);

    const rootElement = this ? this : element; // Use 'this' if available, otherwise use the passed element
    rootElement.querySelector('.cat-gallery-list').innerHTML = ''; // Clear existing cards

    await handleCardListCreation(unprocessedCatImagesData, rootElement);
    await handlePaginationCreation(processedBreedId, sort, rootElement, pagination);

}

async function handleCardListCreation(unprocessedCatImagesData, rootElement) {
    const processedCatImagesData = unprocessedCatImagesData.map(cat => ({
        imageSrc: cat.url,
        imageAlt: cat.breeds[0]?.name || 'Unknown',
        title: cat.breeds[0]?.name || 'Unknown',
        description: cat.breeds[0]?.description || 'No description available.'
    }));

    const catGalleryListElement = rootElement.querySelector('.cat-gallery-list');
    for (const cardData of processedCatImagesData) {
        const newCardElement = await createCard(cardData);
        catGalleryListElement.appendChild(newCardElement);
    }
}

async function handlePaginationCreation(breedId, sort, rootElement, pagination) {
    const catGalleryPaginationElement = rootElement.querySelector('.cat-gallery-pagination');
    catGalleryPaginationElement.innerHTML = "";

    if (sort === 'rand') {
        const refreshButton = Object.assign(document.createElement('button'), {
            textContent: "Refresh",
            className: "refresh-button",
        });

        refreshButton.addEventListener('click', async () => {
            await fetchAndRender(breedId, sort, 0, rootElement);
        });

        catGalleryPaginationElement.appendChild(refreshButton);
    } else {
        const onPrevClick = () => { fetchAndRender(breedId, sort, (pagination.currentPage - 1), rootElement) }
        const onNextClick = () => { fetchAndRender(breedId, sort, (pagination.currentPage + 1), rootElement) }
        const paginationElement = await createPagination(pagination.currentPage, pagination.totalPages, onPrevClick, onNextClick);
        catGalleryPaginationElement.appendChild(paginationElement);
    }
}

export const options = {
    fileLocation: './sections/cat-gallery/cat-card-list/cat-card-list.partial.html',
    cssStyles: cssStyles,
    customElementName: 'site-cat-card-list',
    customFunctions: { fetchAndRender },
    onRender: onRender
};
