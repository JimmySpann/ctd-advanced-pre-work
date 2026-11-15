import cssStyles from './card.css?raw';
import { createCustomElement } from '../../utils/dom-manipulation/element-maker.js';

export const options = {
    fileLocation: './components/card/card.partial.html',
    cssStyles: cssStyles,
    customElementName: 'site-card'
};

export async function createCard(cardData) {
    const card = await createCustomElement(options);
    card.querySelector('.card-description').textContent = cardData.description;
    card.querySelector('.card-title').textContent = cardData.title;
    card.querySelector('.card-image').setAttribute('src', cardData.imageSrc);
    card.querySelector('.card-image').setAttribute('alt', cardData.imageAlt);
    if (cardData.species === 'dog') { card.classList.add('dog-card') }

    card.addEventListener('click', () => {
        const isExpanded = card.classList.contains('expanded');

        document.querySelectorAll('.card.expanded').forEach(() => {
            card.classList.remove('expanded');
        });

        if (!isExpanded) {
            card.classList.add('expanded');
            document.body.classList.add('has-expanded-card')
        } else {
            document.body.classList.remove('has-expanded-card')
        }
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.card')) {
            document.querySelectorAll('.card.expanded').forEach(c => c.classList.remove('expanded'));
            document.body.classList.remove('has-expanded-card');
        }
    });

    return card
}