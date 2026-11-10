import cssStyles from './cat-card-list.css?raw';

import { createCard } from '../../../components/card/card.js';
import { getCatData } from '../../../lib/cat-api-handler.js';

async function onRender(element) {
    fetchAndRender('any', element);
}


async function fetchAndRender(breedId, element) {
    console.log(`Fetching and rendering cats for breed ID: ${breedId}`);
    const processedBreedId = breedId === 'any' ? null : breedId; // Default to 'any' if no breedId is provided
    const unprocessedCatData = await getCatData(processedBreedId);
    const rootElement = this ? this : element; // Use 'this' if available, otherwise use the passed element

    rootElement.querySelector('.cat-gallery-list').innerHTML = ''; // Clear existing cards

    const processedCatData = unprocessedCatData.map(cat => ({
        imageSrc: cat.url,
        imageAlt: cat.breeds[0]?.name || 'Unknown',
        title: cat.breeds[0]?.name || 'Unknown',
        description: cat.breeds[0]?.description || 'No description available.'
    }));

    const catGalleryListElement = rootElement.querySelector('.cat-gallery-list');
    for (const cardData of processedCatData) {
        const newCardElement = await createCard(cardData);
        catGalleryListElement.appendChild(newCardElement);
    }
}

export const options = {
    fileLocation: './sections/cat-gallery/cat-card-list/cat-card-list.partial.html',
    cssStyles: cssStyles,
    customElementName: 'site-cat-card-list',
    customFunctions: { fetchAndRender },
    onRender: onRender
};
