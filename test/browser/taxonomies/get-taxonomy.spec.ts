import { TaxonomyModels, TaxonomyResponses } from '../../../lib';
import * as responseJson from '../fake-responses/taxonomies/fake-get-taxonomy.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Get taxonomy', () => {
    let response: TaxonomyResponses.GetTaxonomyResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).getTaxonomy().byTaxonomyCodename('x').toPromise();
    });

    it(`url should be correct`, () => {
        const urlCodename = cmLiveClient.getTaxonomy().byTaxonomyCodename('x').getUrl();
        const urlId = cmLiveClient.getTaxonomy().byTaxonomyId('x').getUrl();
        const urlExternalId = cmLiveClient.getTaxonomy().byTaxonomyExternalId('x').getUrl();

        expect(urlCodename).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/taxonomies/codename/x`);
        expect(urlId).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/taxonomies/x`);
        expect(urlExternalId).toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/taxonomies/external-id/x`
        );
    });

    it(`response should be instance of GetTaxonomyResponse class`, () => {
        expect(response).toEqual(jasmine.any(TaxonomyResponses.GetTaxonomyResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data).toEqual(jasmine.any(TaxonomyModels.Taxonomy));
    });

    it(`taxonomy properties should be mapped`, () => {
        const originalItem = responseJson;

        const taxonomy = response.data;

        expect(taxonomy.codename).toEqual(originalItem.codename);
        expect(taxonomy.id).toEqual(originalItem.id);
        expect(taxonomy.lastModified).toEqual(new Date(originalItem.last_modified));
        expect(taxonomy.name).toEqual(originalItem.name);
        expect(Array.isArray(taxonomy.terms)).toBeTruthy();

        taxonomy.terms.forEach((s) => {
            expect(s).toEqual(jasmine.any(TaxonomyModels.Taxonomy));
        });
    });
});
