import { BaseResponses } from '../../../lib';
import * as deleteSpaceJson from '../fake-responses/spaces/fake-delete-space.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Delete space', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(deleteSpaceJson)
            .deleteSpace()
            .bySpaceCodename('xxx')
            .toPromise();
    });

    it(`url should be correct`, () => {
        const codenameUrl = cmLiveClient.deleteContentType().byTypeCodename('xCodename').getUrl();
        const internalIdUrl = cmLiveClient.deleteContentType().byTypeId('xInternalId').getUrl();

        expect(codenameUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/types/codename/xCodename`);
        expect(internalIdUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/types/xInternalId`);
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
