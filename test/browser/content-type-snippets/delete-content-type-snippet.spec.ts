import { BaseResponses } from '../../../lib';
import * as jsonResponse from '../fake-responses/content-type-snippets/fake-delete-content-type-snippet.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Delete content type snippet', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(done => {
        getTestClientWithJson(jsonResponse)
            .deleteContentTypeSnippet()
            .byTypeCodename('xxx')
            .toObservable()
            .subscribe(result => {
                response = result;
                done();
            });
    });

    it(`url should be correct`, () => {
        const codenameUrl = cmLiveClient
            .deleteContentTypeSnippet()
            .byTypeCodename('xCodename')
            .getUrl();
        const idUrl = cmLiveClient
            .deleteContentTypeSnippet()
            .byTypeId('xInternalId')
            .getUrl();
        const externalIdUrl = cmLiveClient
            .deleteContentTypeSnippet()
            .byTypeExternalId('xExternal')
            .getUrl();

        expect(codenameUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/snippets/codename/xCodename`
        );
        expect(idUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/snippets/xInternalId`);
        expect(externalIdUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/snippets/external-id/xExternal`
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
