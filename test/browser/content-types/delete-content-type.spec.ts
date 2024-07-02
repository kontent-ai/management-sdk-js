import { BaseResponses } from '../../../lib';
import * as deleteContentTypeJson from '../fake-responses/content-types/fake-delete-content-type.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Delete content type', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(deleteContentTypeJson)
            .deleteContentType()
            .byTypeCodename('xxx')
            .toPromise();
    });

    it(`url should be correct`, () => {
        const codenameUrl = cmClient.deleteContentType().byTypeCodename('xCodename').getUrl();
        const internalIdUrl = cmClient.deleteContentType().byTypeId('xInternalId').getUrl();
        const externalIdUrl = cmClient.deleteContentType().byTypeExternalId('xExternalId').getUrl();

        expect(codenameUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/types/codename/xCodename`
        );
        expect(internalIdUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/types/xInternalId`);
        expect(externalIdUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/types/external-id/xExternalId`
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
