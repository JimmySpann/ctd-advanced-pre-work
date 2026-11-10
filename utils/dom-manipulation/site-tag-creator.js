import { createCustomElement } from './shared.js';

function setupCustomFunctions(customFunctions, element) {
    for (const [name, customFunction] of Object.entries(customFunctions)) {
        element[name] = customFunction.bind(element); // Bind the function to the element's context
    }
}

export function createCustomSiteTag(options) {
    const { customElementName, onRender, customFunctions } = options;

    class CustomElement extends HTMLElement {
        async connectedCallback() {
            try {
                const customElement = await createCustomElement(options);
                this.replaceChildren(customElement);
                if (typeof customFunctions === 'object') setupCustomFunctions(customFunctions, this);
                if (typeof onRender === 'function') await onRender(this);
            } catch (error) {
                console.error(`Error loading ${customElementName} component:`, error);
            }
        }
    }

    if (!customElementName) {
        console.error('Custom element name is required.');
        return;
    }

    customElements.define(customElementName, CustomElement);
}