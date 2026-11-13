import cssStyles from './pagination.css?raw';

import { createCustomElement } from '../../utils/dom-manipulation/element-maker.js';

export const options = {
    fileLocation: './components/pagination/pagination.partial.html',
    cssStyles: cssStyles,
    customElementName: 'site-pagination'
};

export async function createPagination(currentPage, totalPages, onPrev, onNext) {
    const paginationElement = await createCustomElement(options);
    paginationElement.querySelector('.pagination span').textContent = `Page ${currentPage + 1} of ${totalPages}`;

    const prevButton = paginationElement.querySelector('#prev-btn');
    const nextButton = paginationElement.querySelector('#next-btn');

    prevButton.disabled = currentPage <= 0;
    nextButton.disabled = totalPages <= 1 || currentPage >= totalPages - 1;

    prevButton.addEventListener('click', onPrev);
    nextButton.addEventListener('click', onNext);

    return paginationElement;
}