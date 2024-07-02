import { ContentItemResponses } from '../../../lib';
import * as addContentItemResponseJson from '../fake-responses/content-items/fake-add-content-item.json';
import { getTestClientWithJson, cmClient, testEnvironmentId } from '../setup';

describe('Add content item', () => {
    let response: ContentItemResponses.AddContentItemResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(addContentItemResponseJson)
            .addContentItem()
            .withData({
                external_id: undefined,
                name: 'Add article test',
                codename: 'xCodename',
                type: {
                    codename: 'article'
                },
                collection: {
                    codename: 'xCollection'
                }
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const addUrl = cmClient
            .addContentItem()
            .withData({} as any)
            .getUrl();

        expect(addUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items`);
    });

    it(`response should be instance of AddContentItemResponse class`, () => {
        expect(response).toEqual(jasmine.any(ContentItemResponses.AddContentItemResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`item properties should be mapped`, () => {
        expect(response.data.codename).toEqual(addContentItemResponseJson.codename);
        expect(response.data.externalId).toEqual(addContentItemResponseJson.external_id);
        expect(response.data.id).toEqual(addContentItemResponseJson.id);
        expect(response.data.lastModified).toEqual(jasmine.any(Date));
        expect(response.data.lastModified).toEqual(new Date(addContentItemResponseJson.last_modified));
        expect(response.data.name).toEqual(addContentItemResponseJson.name);
        expect(response.data.type).toEqual(addContentItemResponseJson.type);
        expect(response.data.collection.id).toEqual(addContentItemResponseJson.collection.id);
    });
});
