import { createCustomElement } from '../../utils/dom-manipulation/element-maker.js';

export const options = {
    fileLocation: './components/card/card.partial.html',
    cssLocation: './components/card/card.css',
    customElementName: 'site-card'
};

export async function createCard(cardData) {
    const card = await createCustomElement(options);
    card.querySelector('.card-description').textContent = cardData.description;
    card.querySelector('.card-title').textContent = cardData.title;
    card.querySelector('.card-image').setAttribute('src', cardData.imageSrc);
    card.querySelector('.card-image').setAttribute('alt', cardData.imageAlt);
    return card
}