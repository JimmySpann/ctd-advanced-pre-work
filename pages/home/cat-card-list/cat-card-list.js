import { createCard } from '../../../components/card/card.js';
import { getCatData } from '../../../lib/cat-api-handler.js';

const onRender = async (element) => {
    const unprocessedCatData = await getCatData();

    const processedCatData = unprocessedCatData.map(cat => ({
        imageSrc: cat.url,
        imageAlt: cat.breeds[0]?.name || 'Unknown',
        title: cat.breeds[0]?.name || 'Unknown',
        description: cat.breeds[0]?.description || 'No description available.'
    }));

    const catGalleryListElement = element.querySelector('.cat-gallery-list');
    for (const cardData of processedCatData) {
        const newCardElement = await createCard(cardData);
        catGalleryListElement.appendChild(newCardElement);
    }
}

export const options = {
    fileLocation: './pages/home/cat-card-list/cat-card-list.partial.html',
    customElementName: 'site-cat-card-list',
    onRender: onRender
};
