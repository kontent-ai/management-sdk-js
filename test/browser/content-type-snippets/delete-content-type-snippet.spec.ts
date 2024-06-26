import { BaseResponses } from '../../../lib';
import * as jsonResponse from '../fake-responses/content-type-snippets/fake-delete-content-type-snippet.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Delete content type snippet', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(jsonResponse)
            .deleteContentTypeSnippet()
            .byTypeCodename('xxx')
            .toPromise();
    });

    it(`url should be correct`, () => {
        const codenameUrl = cmClient.deleteContentTypeSnippet().byTypeCodename('xCodename').getUrl();
        const idUrl = cmClient.deleteContentTypeSnippet().byTypeId('xInternalId').getUrl();
        const externalIdUrl = cmClient.deleteContentTypeSnippet().byTypeExternalId('xExternal').getUrl();

        expect(codenameUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/snippets/codename/xCodename`
        );
        expect(idUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/snippets/xInternalId`);
        expect(externalIdUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/snippets/external-id/xExternal`
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
