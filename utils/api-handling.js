export const DEFAULT_HEADERS = new Headers({
    "Content-Type": "application/json",
});


function getPaginationData(includePagination, response) {
    const { paginationCount, paginationLimit, paginationPage } = includePagination;
    const totalItems = response.headers.get(paginationCount);
    const pageItemLimit = response.headers.get(paginationLimit);
    const currentPage = response.headers.get(paginationPage);

    const paginationInfo = {
        totalCount: parseInt(totalItems),
        pageItemLimit: parseInt(pageItemLimit),
        totalPages: Math.ceil(totalItems / pageItemLimit),
        currentPage: parseInt(currentPage),
    };
    return paginationInfo
}

export async function fetchDataFromAPI(options) {
    const { url, method, headers, includePagination } = options;

    const requestOptions = {
        method: method ?? 'GET',
        headers: headers
    };

    return await fetch(url, requestOptions)
        .then(async response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            if (includePagination) {
                const paginationInfo = getPaginationData(includePagination, response);
                return { data: await response.json(), pagination: paginationInfo };
            }

            return await response.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            throw error;
        });
}