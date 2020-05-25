import { TaxonomyModels, TaxonomyResponses } from '../../lib';
import * as responseJson from '../fake-responses/taxonomies/fake-update-taxonomy.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Modify taxonomy', () => {
    let response: TaxonomyResponses.ModifyTaxonomyResponse;

    beforeAll((done) => {
        getTestClientWithJson(responseJson)
            .modifyTaxonomy()
            .byTaxonomyCodename('x')
            .withData([
                {
                    op: 'addInto',
                    value: {
                        name: 'name',
                        terms: []
                    }
                }
            ])
            .toObservable()
            .subscribe((result) => {
                response = result;
                done();
            });
    });

    it(`url should be correct`, () => {
        const codenameUrl = cmLiveClient
            .modifyTaxonomy()
            .byTaxonomyCodename('xCodename')
            .withData({} as any)
            .getUrl();
        const internalIdUrl = cmLiveClient
            .modifyTaxonomy()
            .byTaxonomyId('xInternalId')
            .withData({} as any)
            .getUrl();
        const externalIdUrl = cmLiveClient
            .modifyTaxonomy()
            .byTaxonomyExternalId('xExternalId')
            .withData({} as any)
            .getUrl();

        expect(codenameUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/taxonomies/codename/xCodename`
        );
        expect(internalIdUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/taxonomies/xInternalId`);
        expect(externalIdUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/taxonomies/external-id/xExternalId`
        );
    });

    it(`response should be instance of ModifyTaxonomyResponse class`, () => {
        expect(response).toEqual(jasmine.any(TaxonomyResponses.ModifyTaxonomyResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`item properties should be mapped`, () => {
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
