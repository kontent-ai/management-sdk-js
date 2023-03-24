import { CollectionModels, CollectionResponses } from '../../../lib';
import * as responseJson from '../fake-responses/collections/fake-list-collections.json';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('List collections', () => {
    let response: CollectionResponses.CollectionsListResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).listCollections().toPromise();
    });

    it(`url should be correct`, () => {
        const listUrl = cmLiveClient.listCollections().getUrl();

        expect(listUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/collections`);
    });

    it(`response should be instance of CollectionsListResponse class`, () => {
        expect(response).toEqual(jasmine.any(CollectionResponses.CollectionsListResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data.lastModified).toBeDefined();
    });

    it(`last_modified should be correct`, () => {
        expect(response.data.lastModified).toEqual(new Date(responseJson.last_modified));
    });

    it(`collection properties should be mapped`, () => {
        expect(response.data.collections).toBeDefined();
        expect(Array.isArray(response.data.collections)).toBeTruthy();
        expect(response.data.collections.length).toBeGreaterThan(0);

        response.data.collections.forEach((m) => {
            // find original item
            const originalItem = responseJson.collections.find((s) => s.id === m.id);

            if (!originalItem) {
                throw Error(`Collection with id '${m.id}' was not found in fake response`);
            }

            expect(m).toEqual(jasmine.any(CollectionModels.Collection));
            expect(m.id).toEqual(originalItem.id);
            expect(m.name).toEqual(originalItem.name);
            expect(m.codename).toEqual(originalItem.codename);
        });
    });
});
