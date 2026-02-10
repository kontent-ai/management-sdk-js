import { LanguageVariantResponses, SharedModels } from '../../../lib';
import * as responseJson from '../fake-responses/language-variants/fake-filter-items-with-variants.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Filter items with variants', () => {
    let response: LanguageVariantResponses.FilterItemsWithVariantsResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .filterItemsWithVariants()
            .withData({
                filters: {
                    search_phrase: 'test',
                    language: { codename: 'en-US' }
                },
                order: {
                    by: 'name',
                    direction: 'asc'
                }
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmClient.filterItemsWithVariants().withData({}).getUrl();

        expect(url).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items-with-variant/filter`
        );
    });

    it(`response should be instance of FilterItemsWithVariantsResponse class`, () => {
        expect(response).toEqual(jasmine.any(LanguageVariantResponses.FilterItemsWithVariantsResponse));
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
        expect(response.data.items.length).toEqual(responseJson.variants.length);
        expect(response.data.pagination).toEqual(jasmine.any(SharedModels.Pagination));

        response.data.items.forEach((result) => {
            const originalItem = responseJson.variants.find((m) => m.item.id === result.item.id);

            if (!originalItem) {
                throw Error(`Could not find original item with id '${result.item.id}'`);
            }

            expect(result.item.id).toEqual(originalItem.item.id);
            expect(result.language.id).toEqual(originalItem.language.id);
        });
    });

    it(`pagination should have continuation token`, () => {
        expect(response.data.pagination.continuationToken).toBeDefined();
        expect(response.data.pagination.continuationToken).toEqual(responseJson.pagination.continuation_token);
    });
});

describe('Filter items with variants using spaces filter', () => {
    let response: LanguageVariantResponses.FilterItemsWithVariantsResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .filterItemsWithVariants()
            .withData({
                filters: {
                    spaces: [
                        { id: '5a5e5a5e-5a5e-5a5e-5a5e-5a5e5a5e5a5e' },
                        { codename: 'my-space' }
                    ]
                }
            })
            .toPromise();
    });

    it(`response should be instance of FilterItemsWithVariantsResponse class`, () => {
        expect(response).toEqual(jasmine.any(LanguageVariantResponses.FilterItemsWithVariantsResponse));
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data.items).toBeDefined();
    });
});

describe('Filter items with variants using collections filter', () => {
    let response: LanguageVariantResponses.FilterItemsWithVariantsResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .filterItemsWithVariants()
            .withData({
                filters: {
                    collections: [
                        { id: '6b6f6b6f-6b6f-6b6f-6b6f-6b6f6b6f6b6f' },
                        { codename: 'my-collection' },
                        { external_id: 'my-external-collection' }
                    ]
                }
            })
            .toPromise();
    });

    it(`response should be instance of FilterItemsWithVariantsResponse class`, () => {
        expect(response).toEqual(jasmine.any(LanguageVariantResponses.FilterItemsWithVariantsResponse));
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data.items).toBeDefined();
    });
});

describe('Filter items with variants using publishing states filter', () => {
    let response: LanguageVariantResponses.FilterItemsWithVariantsResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .filterItemsWithVariants()
            .withData({
                filters: {
                    publishing_states: ['published', 'unpublished', 'not_published_yet']
                }
            })
            .toPromise();
    });

    it(`response should be instance of FilterItemsWithVariantsResponse class`, () => {
        expect(response).toEqual(jasmine.any(LanguageVariantResponses.FilterItemsWithVariantsResponse));
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data.items).toBeDefined();
    });
});

describe('Filter items with variants using all new filters combined', () => {
    let response: LanguageVariantResponses.FilterItemsWithVariantsResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .filterItemsWithVariants()
            .withData({
                filters: {
                    search_phrase: 'test',
                    language: { codename: 'en-US' },
                    spaces: [{ codename: 'my-space' }],
                    collections: [{ id: '6b6f6b6f-6b6f-6b6f-6b6f-6b6f6b6f6b6f' }],
                    publishing_states: ['published']
                },
                order: {
                    by: 'name',
                    direction: 'asc'
                }
            })
            .toPromise();
    });

    it(`response should be instance of FilterItemsWithVariantsResponse class`, () => {
        expect(response).toEqual(jasmine.any(LanguageVariantResponses.FilterItemsWithVariantsResponse));
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data.items).toBeDefined();
    });

    it(`item properties should be mapped`, () => {
        expect(response.data.items.length).toEqual(responseJson.variants.length);
        expect(response.data.pagination).toEqual(jasmine.any(SharedModels.Pagination));
    });
});
