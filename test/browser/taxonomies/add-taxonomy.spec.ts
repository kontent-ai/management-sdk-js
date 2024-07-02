import { TaxonomyModels, TaxonomyResponses } from '../../../lib';
import * as addTaxonomyResponseJson from '../fake-responses/taxonomies/fake-add-taxonomy.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Add taxonomy', () => {
    let response: TaxonomyResponses.AddTaxonomyResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(addTaxonomyResponseJson)
            .addTaxonomy()
            .withData({
                name: 'x',
                terms: []
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmClient
            .addTaxonomy()
            .withData({
                name: 'x',
                terms: []
            })
            .getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/taxonomies`);
    });

    it(`response should be instance of AddTaxonomyResponse class`, () => {
        expect(response).toEqual(jasmine.any(TaxonomyResponses.AddTaxonomyResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data).toEqual(jasmine.any(TaxonomyModels.Taxonomy));
    });

    it(`taxonomy properties should be mapped`, () => {
        const originalItem = addTaxonomyResponseJson;

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
