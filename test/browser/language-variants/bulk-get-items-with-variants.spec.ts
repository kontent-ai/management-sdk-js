import { LanguageVariantResponses, SharedModels } from '../../../lib';
import * as responseJson from '../fake-responses/language-variants/fake-bulk-get-items-with-variants.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Bulk get items with variants', () => {
    let response: LanguageVariantResponses.BulkGetItemsWithVariantsResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .bulkGetItemsWithVariants()
            .withData({
                variants: [
                    {
                        item: { id: '4b628214-e4fe-4fe0-b1ff-955df33e1515' },
                        language: { id: '00000000-0000-0000-0000-000000000000' }
                    },
                    {
                        item: { id: '6a8b4d04-7d3e-4d3c-8b9a-4c7e8f9a1b2c' },
                        language: { codename: 'en-US' }
                    }
                ]
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmClient.bulkGetItemsWithVariants().withData({ variants: [] }).getUrl();

        expect(url).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items-with-variant/bulk-get`
        );
    });

    it(`response should be instance of BulkGetItemsWithVariantsResponse class`, () => {
        expect(response).toEqual(jasmine.any(LanguageVariantResponses.BulkGetItemsWithVariantsResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data.items).toBeDefined();
    });

    it(`items should be mapped correctly`, () => {
        expect(response.data.items.length).toEqual(responseJson.data.length);
        expect(response.data.pagination).toEqual(jasmine.any(SharedModels.Pagination));

        const firstItem = response.data.items[0];
        expect(firstItem.item).toBeDefined();
        expect(firstItem.item.id).toEqual('4b628214-e4fe-4fe0-b1ff-955df33e1515');
        expect(firstItem.item.name).toEqual('Sample Article');
        expect(firstItem.variant).toBeDefined();

        const secondItem = response.data.items[1];
        expect(secondItem.item).toBeDefined();
        expect(secondItem.item.id).toEqual('6a8b4d04-7d3e-4d3c-8b9a-4c7e8f9a1b2c');
        expect(secondItem.item.name).toEqual('Another Article');
        expect(secondItem.variant).toBeUndefined();
    });

    it(`pagination should indicate no more pages`, () => {
        expect(response.data.pagination.continuationToken).toBeNull();
        expect(response.data.pagination.nextPage).toBeNull();
    });
});
