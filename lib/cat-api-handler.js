import { fetchDataFromAPI, DEFAULT_HEADERS } from '../utils/api-handling.js';

const catImagesUrl = 'https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&order=Asc';

export async function getCatData() {
    const apiKey = import.meta.env.VITE_CAT_API_KEY;

    const url = catImagesUrl;
    const method = 'GET';
    const headers = new Headers({ DEFAULT_HEADERS, 'x-api-key': apiKey });
    return await fetchDataFromAPI({ url, headers, method });
}