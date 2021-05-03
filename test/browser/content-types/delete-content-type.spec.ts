import { BaseResponses } from '../../../lib';
import * as deleteContentTypeJson from '../fake-responses/content-types/fake-delete-content-type.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Delete content type', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(done => {
        getTestClientWithJson(deleteContentTypeJson)
            .deleteContentType()
            .byTypeCodename('xxx')
            .toObservable()
            .subscribe(result => {
                response = result;
                done();
            });
    });

    it(`url should be correct`, () => {
        const codenameUrl = cmLiveClient
            .deleteContentType()
            .byTypeCodename('xCodename')
            .getUrl();
        const internalIdUrl = cmLiveClient
            .deleteContentType()
            .byTypeId('xInternalId')
            .getUrl();
        const externalIdUrl = cmLiveClient
            .deleteContentType()
            .byTypeExternalId('xExternalId')
            .getUrl();

        expect(codenameUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/types/codename/xCodename`);
        expect(internalIdUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/types/xInternalId`);
        expect(externalIdUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/types/external-id/xExternalId`
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
