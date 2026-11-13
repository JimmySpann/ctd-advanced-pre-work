import cssStyles from './cat-card-list.css?raw';

import { createCard } from '../../../components/card/card.js';
import { getCatImages } from '../../../lib/cat-api-handler.js';

async function onRender(element) {
    fetchAndRender('any', 'rand', element);
}


async function fetchAndRender(breedId, sort, element) {
    const processedBreedId = breedId === 'any' ? null : breedId; // Default to 'any' if no breedId is provided
    const unprocessedCatImagesData = await getCatImages(processedBreedId, sort);
    const rootElement = this ? this : element; // Use 'this' if available, otherwise use the passed element
    rootElement.querySelector('.cat-gallery-list').innerHTML = ''; // Clear existing cards

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

export const options = {
    fileLocation: './sections/cat-gallery/cat-card-list/cat-card-list.partial.html',
    cssStyles: cssStyles,
    customElementName: 'site-cat-card-list',
    customFunctions: { fetchAndRender },
    onRender: onRender
};
