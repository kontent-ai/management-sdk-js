import { BaseResponses } from '../../../lib';
import * as deleteAssetJson from '../fake-responses/assets/fake-delete-asset.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Delete asset', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(deleteAssetJson).deleteAsset().byAssetExternalId('xxx').toPromise();
    });

    it(`url should be correct`, () => {
        const internalIdUrl = cmLiveClient.deleteAsset().byAssetId('xInternalId').getUrl();
        const externalIdUrl = cmLiveClient.deleteAsset().byAssetExternalId('xExternalId').getUrl();

        expect(internalIdUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/assets/xInternalId`);
        expect(externalIdUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/assets/external-id/xExternalId`
        );
    });

    it(`response should be instance of EmptyContentManagementResponse class`, () => {
        expect(response).toEqual(jasmine.any(BaseResponses.EmptyContentManagementResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should be emmpty`, () => {
        expect(response.data).toBeUndefined();
    });
});
