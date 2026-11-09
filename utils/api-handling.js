export const DEFAULT_HEADERS = new Headers({
    "Content-Type": "application/json",
});


export async function fetchDataFromAPI(options) {
    const { url, method, headers } = options;

    const requestOptions = {
        method: method ?? 'GET',
        headers: headers
    };

    return await fetch(url, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error;
        });
}