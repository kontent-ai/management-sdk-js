import { BaseResponses } from '../../../lib';
import * as deleteTaxonomyJson from '../fake-responses/taxonomies/fake-delete-taxonomy.json';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Delete taxonomy', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(deleteTaxonomyJson)
            .deleteTaxonomy()
            .byTaxonomyCodename('xxx')
            .toPromise();
    });

    it(`url should be correct`, () => {
        const codenameUrl = cmLiveClient.deleteTaxonomy().byTaxonomyCodename('xCodename').getUrl();
        const internalIdUrl = cmLiveClient.deleteTaxonomy().byTaxonomyId('xInternalId').getUrl();
        const externalIdUrl = cmLiveClient.deleteTaxonomy().byTaxonomyExternalId('xExternalId').getUrl();

        expect(codenameUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/taxonomies/codename/xCodename`
        );
        expect(internalIdUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/taxonomies/xInternalId`);
        expect(externalIdUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/taxonomies/external-id/xExternalId`
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
