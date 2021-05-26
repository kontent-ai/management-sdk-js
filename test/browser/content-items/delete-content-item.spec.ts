import { BaseResponses } from '../../../lib';
import * as deleteContentItemJson from '../fake-responses/content-items/fake-delete-content-item.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Delete content item', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(deleteContentItemJson)
            .deleteContentItem()
            .byItemCodename('xxx')
            .toPromise();
    });

    it(`url should be correct`, () => {
        const codenameUrl = cmLiveClient.deleteContentItem().byItemCodename('xCodename').getUrl();
        const internalIdUrl = cmLiveClient.deleteContentItem().byItemId('xInternalId').getUrl();
        const externalIdUrl = cmLiveClient.deleteContentItem().byItemExternalId('xExternalId').getUrl();

        expect(codenameUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/items/codename/xCodename`);
        expect(internalIdUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/items/xInternalId`);
        expect(externalIdUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/items/external-id/xExternalId`
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
