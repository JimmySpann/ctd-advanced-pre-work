import { fetchDataFromAPI, DEFAULT_HEADERS } from '../utils/api-handling.js';

const cat_apiKey = import.meta.env.VITE_CAT_API_KEY;
const dog_apiKey = import.meta.env.VITE_DOG_API_KEY;

const catImagesUrl = 'https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1';
const catBreedsUrl = 'https://api.thecatapi.com/v1/breeds';

const dogImagesUrl = 'https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=1';
const dogBreedsUrl = 'https://api.thedogapi.com/v1/breeds';

const includePagination = {
    paginationCount: 'Pagination-Count',
    paginationLimit: 'Pagination-Limit',
    paginationPage: 'Pagination-Page'
}

export async function getPetImages(species = 'cat', breedIds = '', sort = 'rand', page) {
    const url = '' + ((species === 'cat') ? catImagesUrl : dogImagesUrl)
        + (breedIds ? `&breed_ids=${breedIds}` : '')
        + (sort ? `&order=${sort}` : '')
        + (page ? `&page=${page}` : '');

    const method = 'GET';
    const apiKey = (species === 'cat') ? cat_apiKey : dog_apiKey;
    const headers = new Headers({ DEFAULT_HEADERS, 'x-api-key': apiKey });
    return await fetchDataFromAPI({ url, headers, method, includePagination });
}

export async function getPetBreeds(species = 'cat') {
    const method = 'GET';
    const apiKey = (species === 'cat') ? cat_apiKey : dog_apiKey;
    const headers = new Headers({ DEFAULT_HEADERS, 'x-api-key': apiKey });
    const url = (species === 'cat') ? catBreedsUrl : dogBreedsUrl
    return await fetchDataFromAPI({ url, headers, method });
}
