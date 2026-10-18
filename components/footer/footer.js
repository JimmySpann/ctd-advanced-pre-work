class SiteFooter extends HTMLElement {
    async connectedCallback() {
        try {
            const response = await fetch('./components/footer/footer.partial.html');

            if (!response.ok) {
                throw new Error(`Failed to load header: ${response.statusText}`);
            }

            const htmlContent = await response.text();
            this.innerHTML = htmlContent;

        } catch (error) {
            console.error('Error loading site-header component:', error);
        }
    }
}

// Register your custom HTML tag
customElements.define('site-footer', SiteFooter);