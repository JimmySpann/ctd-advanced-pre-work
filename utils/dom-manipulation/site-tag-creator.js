import { createCustomElement } from './shared.js';

export function createCustomSiteTag(options) {
    const { customElementName, onRender } = options;

    class CustomElement extends HTMLElement {
        async connectedCallback() {
            try {
                const customElement = await createCustomElement(options);
                this.replaceChildren(customElement);

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