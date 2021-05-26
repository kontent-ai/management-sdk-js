import { BaseResponses } from '../../../lib';
import * as jsonResponse from '../fake-responses/language-variants/fake-upsert-language-variant.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Delete language variant', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(jsonResponse)
            .deleteLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('x')
            .toPromise();
    });

    it(`url should be correct`, () => {
        const codenameUrlWithCodenameLanguage = cmLiveClient
            .deleteLanguageVariant()
            .byItemCodename('xCodename')
            .byLanguageCodename('xLanguageCodename')
            .getUrl();
        const internalIdUrlWithCodenameLanguage = cmLiveClient
            .deleteLanguageVariant()
            .byItemId('xItemId')
            .byLanguageCodename('xLanguageCodename')
            .getUrl();
        const externalIdUrlWithCodenameLanguage = cmLiveClient
            .deleteLanguageVariant()
            .byItemExternalId('XItemExternal')
            .byLanguageCodename('xLanguageCodename')
            .getUrl();

        const codenameUrlWithIdLanguage = cmLiveClient
            .deleteLanguageVariant()
            .byItemCodename('xCodename')
            .byLanguageId('xLanguageId')
            .getUrl();
        const internalIdUrlWithIdLanguage = cmLiveClient
            .deleteLanguageVariant()
            .byItemId('xItemId')
            .byLanguageId('xLanguageId')
            .getUrl();
        const externalIdUrlWithIdLanguage = cmLiveClient
            .deleteLanguageVariant()
            .byItemExternalId('XItemExternal')
            .byLanguageId('xLanguageId')
            .getUrl();

        expect(codenameUrlWithCodenameLanguage).toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/items/codename/xCodename/variants/codename/xLanguageCodename`
        );
        expect(internalIdUrlWithCodenameLanguage).toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/items/xItemId/variants/codename/xLanguageCodename`
        );
        expect(externalIdUrlWithCodenameLanguage).toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/items/external-id/XItemExternal/variants/codename/xLanguageCodename`
        );

        expect(codenameUrlWithIdLanguage).toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/items/codename/xCodename/variants/xLanguageId`
        );
        expect(internalIdUrlWithIdLanguage).toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/items/xItemId/variants/xLanguageId`
        );
        expect(externalIdUrlWithIdLanguage).toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/items/external-id/XItemExternal/variants/xLanguageId`
        );
    });

    it(`response should be instance of EmptyContentManagementResponse class`, () => {
        expect(response).toEqual(jasmine.any(BaseResponses.EmptyContentManagementResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });
});
