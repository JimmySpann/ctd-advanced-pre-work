export async function fetchFile(fileLocation) {
    const response = await fetch(fileLocation);

    if (response && !response.ok) {
        throw new Error(`Failed to load ${fileLocation}: ${response.statusText}`);
    } else if (!response) {
        throw new Error(`Failed to load ${fileLocation}: No response received`);
    }

    return await response.text();
}

export function parseHtmlToElement(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    return doc.body.firstElementChild;
}

const loadedCssFiles = new Set();
export async function addCssToHead(cssLocation, name) {
    const cssText = await fetchFile(cssLocation);
    const styleEl = document.createElement('style');
    styleEl.textContent = cssText;
    document.head.appendChild(styleEl);
    loadedCssFiles.add(name);
}

export async function createCustomElement(options) {
    const { fileLocation, customElementName, cssLocation } = options;
    const htmlString = await fetchFile(fileLocation);
    const loadedElement = parseHtmlToElement(htmlString)
    if (cssLocation) await addCssToHead(cssLocation, customElementName);
    return loadedElement
}