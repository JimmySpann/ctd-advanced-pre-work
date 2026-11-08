import { createCustomSiteTag } from '../utils/dom-manipulation/site-tag-creator.js';
import { siteTagConfigs } from '../../components/index.js';

import { options as catCardList } from '../../pages/home/cat-card-list/cat-card-list.js';

export function assembleCustomSiteTags(configs) {
    // Temporary place to add page-specific custom site tags
    siteTagConfigs.catCardList = catCardList;

    try {
        configs.forEach(config => {
            if (typeof config === 'string') {
                const tagConfig = siteTagConfigs[config];
                if (tagConfig) {
                    createCustomSiteTag(tagConfig);
                } else {
                    console.error(`No configuration found for tag: ${config}`);
                }
            } else {
                createCustomSiteTag(config);
            }
        });
    } catch (error) {
        console.error('Error assembling custom site tags:', error);
    }
}