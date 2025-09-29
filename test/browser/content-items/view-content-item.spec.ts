import { ContentItemResponses } from '../../../lib';
import * as viewContentItemJson from '../fake-responses/content-items/view-content-item.json';
import { getTestClientWithJson, cmClient, testEnvironmentId } from '../setup';

describe('View content item', () => {
    let response: ContentItemResponses.ViewContentItemResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(viewContentItemJson)
            .viewContentItem()
            .byItemCodename(viewContentItemJson.codename)
            .toPromise();
    });

    it(`url should be correct`, () => {
        const codenameUrl = cmClient.viewContentItem().byItemCodename('xCodename').getUrl();
        const internalIdUrl = cmClient.viewContentItem().byItemId('xInternalId').getUrl();
        const externalIdUrl = cmClient.viewContentItem().byItemExternalId('xExternalId').getUrl();

        expect(codenameUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/codename/xCodename`
        );
        expect(internalIdUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/xInternalId`);
        expect(externalIdUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/external-id/xExternalId`
        );
    });

    it(`response should be instance of ViewContentItemResponse class`, () => {
        expect(response).toEqual(jasmine.any(ContentItemResponses.ViewContentItemResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`item properties should be mapped`, () => {
        expect(response.data.codename).toEqual(viewContentItemJson.codename);
        expect(response.data.externalId).toEqual(viewContentItemJson.external_id);
        expect(response.data.id).toEqual(viewContentItemJson.id);
        expect(response.data.lastModified).toEqual(jasmine.any(Date));
        expect(response.data.lastModified).toEqual(new Date(viewContentItemJson.last_modified));
        expect(response.data.name).toEqual(viewContentItemJson.name);
        expect(response.data.type).toEqual(viewContentItemJson.type);
        expect(response.data.collection.id).toEqual(viewContentItemJson.collection.id);
        expect(response.data.spaces).toEqual(viewContentItemJson.spaces);
    });
});
