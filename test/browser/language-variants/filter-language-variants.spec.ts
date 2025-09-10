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

        response.data.items.forEach((itemWrapper) => {
            const originalItem = responseJson.data.find((m) => m.item.id === itemWrapper.item.id);

            if (!originalItem) {
                throw Error(`Could not find original item with id '${itemWrapper.item.id}'`);
            }

            expect(itemWrapper.item).toEqual(originalItem.item);
            expect(itemWrapper.variant).toEqual(originalItem.variant);
        });
    });
});
