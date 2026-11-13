import { fetchDataFromAPI, DEFAULT_HEADERS } from '../utils/api-handling.js';

const apiKey = import.meta.env.VITE_CAT_API_KEY;

const catImagesUrl = 'https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1';
const catBreedsUrl = 'https://api.thecatapi.com/v1/breeds';

const includePagination = {
    paginationCount: 'Pagination-Count',
    paginationLimit: 'Pagination-Limit',
    paginationPage: 'Pagination-Page'
}

export async function getCatImages(breedIds = '', sort = 'rand', page = 0) {
    const url = catImagesUrl
        + (breedIds ? `&breed_ids=${breedIds}` : '')
        + (sort ? `&order=${sort}` : '')
        + (page ? `&page=${page}` : '');

    const method = 'GET';
    const headers = new Headers({ DEFAULT_HEADERS, 'x-api-key': apiKey });
    return await fetchDataFromAPI({ url, headers, method, includePagination });
}

export async function getCatBreeds() {
    const method = 'GET';
    const headers = new Headers({ DEFAULT_HEADERS, 'x-api-key': apiKey });
    return await fetchDataFromAPI({ url: catBreedsUrl, headers, method });
}
