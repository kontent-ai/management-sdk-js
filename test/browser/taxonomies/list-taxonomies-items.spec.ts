import { TaxonomyModels, TaxonomyResponses } from '../../../lib';
import * as responseJson from '../fake-responses/taxonomies/fake-list-taxonomies.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('List taxonomies', () => {
    let response: TaxonomyResponses.TaxonomyListResponse;
    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).listTaxonomies().toPromise();
    });

    it(`url should be correct`, () => {
        const listUrl = cmClient.listTaxonomies().getUrl();

        expect(listUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/taxonomies`);
    });

    it(`response should be instance of TaxonomyListResponse class`, () => {
        expect(response).toEqual(jasmine.any(TaxonomyResponses.TaxonomyListResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`taxonomy properties should be mapped`, () => {
        expect(Array.isArray(response.data.items)).toBeTruthy();
        expect(response.data.pagination.continuationToken).toEqual(response.data.pagination.continuationToken);
        expect(response.data.pagination.nextPage).toEqual(response.data.pagination.nextPage);
        expect(response.data.items.length).toEqual(responseJson.taxonomies.length);

        response.data.items.forEach((m) => {
            // find original item
            const originalItem = responseJson.taxonomies.find((s) => s.id === m.id);

            if (!originalItem) {
                throw Error(`Taxonomy with id '${m.id}' was not found in fake response`);
            }

            expect(m.codename).toEqual(originalItem.codename);
            expect(m.id).toEqual(originalItem.id);
            expect(m.lastModified).toEqual(new Date(originalItem.last_modified));
            expect(m.name).toEqual(originalItem.name);
            expect(Array.isArray(m.terms)).toBeTruthy();

            m.terms.forEach((s) => {
                expect(s).toEqual(jasmine.any(TaxonomyModels.Taxonomy));
            });
        });
    });
});
