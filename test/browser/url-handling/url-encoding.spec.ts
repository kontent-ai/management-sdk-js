import * as responseJson from '../fake-responses/projects/fake-project-information.json';
import { getTestClientWithJson, testProjectId } from '../setup';

describe('URL encoding', () => {
    it(`url should be encoded`, () => {
        const url = getTestClientWithJson(responseJson)
            .viewLanguageVariant()
            .byItemExternalId('a b')
            .byLanguageCodename('x')
            .getUrl();

        expect(url).toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/items/external-id/a%20b/variants/codename/x`
        );
        expect(url).not.toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/items/external-id/a b/variants/codename/x`
        );
    });

    it(`url should not be encoded`, () => {
        const url = getTestClientWithJson(responseJson)
            .viewLanguageVariant()
            .byItemExternalId('ignored')
            .byLanguageCodename('ignored')
            .withUrl(`https://manage.kontent.ai/v2/projects/${testProjectId}/items/external-id/a b/variants/codename/x`)
            .getUrl();

        expect(url).toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/items/external-id/a b/variants/codename/x`
        );

        expect(url).not.toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/items/external-id/a%20b/variants/codename/x`
        );
    });
});
