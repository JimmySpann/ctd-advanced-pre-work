/**
 * Creates and registers a custom HTML element that asynchronously loads 
 * and injects an external HTML partial file into its DOM upon connection.
 *
 * @param {Object} options - Configuration options for the custom element.
 * @param {string} options.fileLocation - The URL or path of the HTML file to fetch and render.
 * @param {string} options.customElementName - The name to register the custom element under. Must include a hyphen (e.g., 'my-element'). Leave undefined if you don't want to register a custom element.
 * @param {Object} options.templateProps - Properties to pass to the template for dynamic rendering. Uses {{}} syntax in the HTML partial to reference these properties.
 * @returns {CustomElement}
 * 
 * @example
 * createComponent({
 *     fileLocation: './components/cat-card-list/cat-card-list.partial.html',
 *     customElementName: 'site-cat-card-list',
 *     templateProps: {
 *       imgSrc: 'https://example.com/cat.jpg',
 *       alt: 'A cute cat',
 *       title: 'Fluffy',
 *       description: 'A playful kitten who loves to chase yarn.'
 *     }
 * });
 */
export function createComponent(options) {
    const { fileLocation, customElementName, templateProps, htmlString } = options;

    function replaceTemplatePlaceholders(template, props) {
        Object.keys(props).forEach(key => {
            template = template.replace(`{{${key}}}`, props[key]);
        });
        console.log(props.imgSrc);
        return template;
    }

    class CustomElement extends HTMLElement {
        loadedHTML = null;

        async connectedCallback() {
            try {
                const response = fileLocation ? await fetch(fileLocation) : null;
                if (response && !response.ok) {
                    throw new Error(`Failed to load header: ${response.statusText}`);
                }

                this.loadedHTML = htmlString || (response ? await response.text() : '');

                this.render();

            } catch (error) {
                console.error('Error loading site-cat-card-list component:', error);
            }
        }

        render() {
            this.innerHTML = templateProps ? replaceTemplatePlaceholders(this.loadedHTML, templateProps) : this.loadedHTML;
        }
    }

    if (customElementName) {
        customElements.define(customElementName, CustomElement);
    }

    return CustomElement;
}

export function createListOfComponents(options) {
    const { fileLocation, htmlString, itemData, parentElement } = options;

    itemData.forEach(data => {
        parentElement.appendChild(createComponent({
            fileLocation,
            htmlString,
            templateProps: data
        }));
    });
}