import { ContentItemResponses, ContentItemModels } from '../../lib';
import * as listingResponseJson from '../fake-responses/list-all-query/fake-list-all-query.json';
import { getTestClientWithJson } from '../setup';

describe('List all query', () => {
    let response: ContentItemResponses.ContentItemsListAllResponse;

    beforeAll(done => {
        const query = getTestClientWithJson(listingResponseJson).listContentItems();

        query.toAllObservable().subscribe(result => {
            response = result;
            done();
        });
    });

    it(`response should be instance of ContentItemsListAllResponse class`, () => {
        expect(response).toEqual(jasmine.any(ContentItemResponses.ContentItemsListAllResponse));
    });

    it(`response should contain original responses`, () => {
        expect(response.responses).toBeDefined();
        expect(response.responses.length).toBeGreaterThan(0);

        for (const originalResponse of response.responses) {
            expect(originalResponse).toEqual(jasmine.any(ContentItemResponses.ContentItemsResponse));
        }
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data.items).toBeDefined();
    });

    it(`items should be mapped to proper type`, () => {
        for (const item of response.data.items) {
            expect(item).toEqual(jasmine.any(ContentItemModels.ContentItem));
        }
    });

    it(`items from responses should be joined`, () => {
        let count = 0;
        for (const originalResponse of response.responses) {
            count += originalResponse.data.items.length;
        }

        expect(count).toEqual(response.data.items.length);
    });
});
