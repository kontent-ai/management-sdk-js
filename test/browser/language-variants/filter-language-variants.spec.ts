import { LanguageVariantResponses, SharedModels } from '../../../lib';
import * as responseJson from '../fake-responses/language-variants/fake-filter-language-variants.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Filter language variants', () => {
    let response: LanguageVariantResponses.FilterLanguageVariantsResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .earlyAccess.filterLanguageVariants()
            .withData({
                filters: {
                    search_phrase: 'x'
                },
                order: {
                    by: 'last_modified',
                    direction: 'desc'
                },
                include_content: false
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmClient.earlyAccess.filterLanguageVariants().withData({}).getUrl();

        expect(url).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/early-access/variants/filter`
        );
    });

    it(`response should be instance of FilterLanguageVariantsResponse class`, () => {
        expect(response).toEqual(jasmine.any(LanguageVariantResponses.FilterLanguageVariantsResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data.items).toBeDefined();
    });

    it(`item properties should be mapped`, () => {
        expect(response.data.items).toBeDefined();
        expect(response.data.items.length).toEqual(responseJson.data.length);
        expect(response.data.pagination).toEqual(jasmine.any(SharedModels.Pagination));

        response.data.items.forEach((variant) => {
            const originalItem = responseJson.data.find((m) => m.ContentItem.id === variant.ContentItem.id);

            if (!originalItem) {
                throw Error(`Could not find original item with id '${variant.ContentItem.id}'`);
            }

            expect(variant.ContentItem).toBeDefined();
            expect(variant.ContentItem.name).toEqual(originalItem.ContentItem.name);
            expect(variant.ContentItem.codename).toEqual(originalItem.ContentItem.codename);
            expect(variant.ContentItem.type).toEqual(originalItem.ContentItem.type  );
            expect(variant.ContentItem.collection).toEqual(originalItem.ContentItem.collection);
            expect(variant.ContentItem.spaces).toEqual(originalItem.ContentItem.spaces);
            expect(variant.ContentItem.sitemap_locations).toEqual(originalItem.ContentItem.sitemap_locations);
            expect(variant.ContentItem.external_id).toEqual(originalItem.ContentItem.external_id);
            expect(variant.ContentItem.last_modified).toEqual(originalItem.ContentItem.last_modified);
        });
    });
});
