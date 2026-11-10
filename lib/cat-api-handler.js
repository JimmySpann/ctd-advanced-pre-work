import { fetchDataFromAPI, DEFAULT_HEADERS } from '../utils/api-handling.js';

const catImagesUrl = 'https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&order=Asc';
const catBreedsUrl = 'https://api.thecatapi.com/v1/breeds';

const apiKey = import.meta.env.VITE_CAT_API_KEY;

export async function getCatData(breedIds = '') {
    const url = catImagesUrl + (breedIds ? `&breed_ids=${breedIds}` : '');
    const method = 'GET';
    const headers = new Headers({ DEFAULT_HEADERS, 'x-api-key': apiKey });
    return await fetchDataFromAPI({ url, headers, method });
}

export async function getCatBreeds() {
    const method = 'GET';
    const headers = new Headers({ DEFAULT_HEADERS, 'x-api-key': apiKey });
    return await fetchDataFromAPI({ url: catBreedsUrl, headers, method });
}