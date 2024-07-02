import { ContentItemResponses } from '../../../lib';
import * as upsertContentItemResponseJson from '../fake-responses/content-items/fake-update-content-item.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Upsert content item', () => {
    let response: ContentItemResponses.UpsertContentItemResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(upsertContentItemResponseJson)
            .upsertContentItem()
            .byItemExternalId('x')
            .withData({
                name: 'y',
                type: {
                    codename: 'xType'
                },
                codename: 'xyz',
                collection: {
                    codename: 'xCollection'
                }
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const externalIdUrl = cmClient
            .upsertContentItem()
            .byItemExternalId('xExternalId')
            .withData({} as any)
            .getUrl();
        const internalIdUrl = cmClient
            .upsertContentItem()
            .byItemId('xId')
            .withData({} as any)
            .getUrl();
        const codenameUrl = cmClient
            .upsertContentItem()
            .byItemCodename('xCodename')
            .withData({} as any)
            .getUrl();

        expect(externalIdUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/external-id/xExternalId`
        );
        expect(internalIdUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/xId`);
        expect(codenameUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/codename/xCodename`
        );
    });

    it(`response should be instance of UpsertContentItemResponse class`, () => {
        expect(response).toEqual(jasmine.any(ContentItemResponses.UpsertContentItemResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`item properties should be mapped`, () => {
        expect(response.data.codename).toEqual(upsertContentItemResponseJson.codename);
        expect(response.data.externalId).toEqual(upsertContentItemResponseJson.external_id);
        expect(response.data.id).toEqual(upsertContentItemResponseJson.id);
        expect(response.data.lastModified).toEqual(jasmine.any(Date));
        expect(response.data.lastModified).toEqual(new Date(upsertContentItemResponseJson.last_modified));
        expect(response.data.name).toEqual(upsertContentItemResponseJson.name);
        expect(response.data.type).toEqual(upsertContentItemResponseJson.type);
        expect(response.data.collection.id).toEqual(upsertContentItemResponseJson.collection.id);
    });
});
