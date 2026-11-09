import { createCustomSiteTag } from '../utils/dom-manipulation/site-tag-creator.js';
import { siteTagConfigs as componentSiteTagConfigs } from '../components/index.js';
import { siteTagConfigs as sectionSiteTagConfigs } from '../sections/index.js';

export function assembleCustomSiteTags(configs) {
    try {
        const siteTagConfigs = {
            ...componentSiteTagConfigs,
            ...sectionSiteTagConfigs
        };

        configs.forEach(config => {
            // Loads Site Tag from string
            if (typeof config === 'string') {
                const tagConfig = siteTagConfigs[config];
                if (tagConfig) {
                    createCustomSiteTag(tagConfig);
                } else {
                    console.error(`No configuration found for tag: ${config}`);
                }

                // If not a string, assume it's a config object and create the tag directly
            } else {
                createCustomSiteTag(config);
            }
        });
    } catch (error) {
        console.error('Error assembling custom site tags:', error);
    }
}