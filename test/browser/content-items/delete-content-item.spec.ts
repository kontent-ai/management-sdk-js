import { BaseResponses } from '../../../lib';
import * as deleteContentItemJson from '../fake-responses/content-items/fake-delete-content-item.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Delete content item', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(deleteContentItemJson)
            .deleteContentItem()
            .byItemCodename('xxx')
            .toPromise();
    });

    it(`url should be correct`, () => {
        const codenameUrl = cmClient.deleteContentItem().byItemCodename('xCodename').getUrl();
        const internalIdUrl = cmClient.deleteContentItem().byItemId('xInternalId').getUrl();
        const externalIdUrl = cmClient.deleteContentItem().byItemExternalId('xExternalId').getUrl();

        expect(codenameUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/codename/xCodename`
        );
        expect(internalIdUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/xInternalId`);
        expect(externalIdUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/external-id/xExternalId`
        );
    });

    it(`response should be instance of EmptyContentManagementResponse class`, () => {
        expect(response).toEqual(jasmine.any(BaseResponses.EmptyContentManagementResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should be empty`, () => {
        expect(response.data).toBeUndefined();
    });
});
