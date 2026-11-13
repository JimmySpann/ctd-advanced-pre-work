import cssStyles from './pagination.css?raw';

import { createCustomElement } from '../../utils/dom-manipulation/element-maker.js';

export const options = {
    fileLocation: './components/pagination/pagination.partial.html',
    cssStyles: cssStyles,
    customElementName: 'site-pagination'
};

export async function createPagination(currentPage, totalPages) {
    const paginationElement = await createCustomElement(options);
    paginationElement.querySelector('.pagination span').textContent = `Page ${currentPage + 1} of ${totalPages}`;
    return paginationElement;
}