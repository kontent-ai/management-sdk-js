import { BaseResponses } from '../../lib';
import * as jsonResponse from '../fake-responses/language-variants/fake-upsert-language-variant.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Delete language variant', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(done => {
        getTestClientWithJson(jsonResponse)
            .deleteLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('x')
            .toObservable()
            .subscribe(result => {
                response = result;
                done();
            });
    });

    it(`url should be correct`, () => {
        const codenameUrlWithCodenameLanguage = cmLiveClient
            .upsertLanguageVariant()
            .byItemCodename('xCodename')
            .byLanguageCodename('xLanguageCodename')
            .withElements([])
            .getUrl();
        const internalIdUrlWithCodenameLanguage = cmLiveClient
            .upsertLanguageVariant()
            .byItemId('xItemId')
            .byLanguageCodename('xLanguageCodename')
            .withElements([])
            .getUrl();
        const externalIdUrlWithCodenameLanguage = cmLiveClient
            .upsertLanguageVariant()
            .byItemExternalId('XItemExternal')
            .byLanguageCodename('xLanguageCodename')
            .withElements([])
            .getUrl();

        const codenameUrlWithIdLanguage = cmLiveClient
            .upsertLanguageVariant()
            .byItemCodename('xCodename')
            .byLanguageId('xLanguageId')
            .withElements([])
            .getUrl();
        const internalIdUrlWithIdLanguage = cmLiveClient
            .upsertLanguageVariant()
            .byItemId('xItemId')
            .byLanguageId('xLanguageId')
            .withElements([])
            .getUrl();
        const externalIdUrlWithIdLanguage = cmLiveClient
            .upsertLanguageVariant()
            .byItemExternalId('XItemExternal')
            .byLanguageId('xLanguageId')
            .withElements([])
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
