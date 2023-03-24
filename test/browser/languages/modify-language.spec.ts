import { LanguageModels, LanguageResponses } from '../../../lib';
import * as responseJson from '../fake-responses/languages/fake-modify-language.json';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Modify language', () => {
    let response: LanguageResponses.ModifyLanguageResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .modifyLanguage()
            .byLanguageCodename('x')
            .withData([
                {
                    op: 'replace',
                    property_name: 'codename',
                    value: 'y'
                }
            ])
            .toPromise();
    });

    it(`url should be correct`, () => {
        const idUrl = cmLiveClient
            .modifyLanguage()
            .byLanguageId('xId')
            .withData({} as any)
            .getUrl();

        const codenameUrl = cmLiveClient
            .modifyLanguage()
            .byLanguageCodename('xCodename')
            .withData({} as any)
            .getUrl();

        const externalIdUrl = cmLiveClient
            .modifyLanguage()
            .byExternalId('xExternalId')
            .withData({} as any)
            .getUrl();

        expect(idUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/languages/xId`);
        expect(codenameUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/languages/codename/xCodename`
        );
        expect(externalIdUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/languages/external-id/xExternalId`
        );
    });

    it(`response should be instance of ModifyLanguageResponse class`, () => {
        expect(response).toEqual(jasmine.any(LanguageResponses.ModifyLanguageResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data).toEqual(jasmine.any(LanguageModels.LanguageModel));
    });

    it(`properties should be mapped`, () => {
        const originalItem = responseJson;

        const language = response.data;

        expect(language.codename).toEqual(originalItem.codename);
        expect(language.id).toEqual(originalItem.id);
        expect(language.isActive).toEqual(originalItem.is_active);
        expect(language.isDefault).toEqual(originalItem.is_default);
        expect(language.name).toEqual(originalItem.name);
        expect(language.externalId).toEqual(originalItem.external_id);
        expect(language.fallbackLanguage ? language.fallbackLanguage.id : '').toEqual(
            originalItem.fallback_language.id
        );

        expect(language.fallbackLanguage).toEqual(jasmine.any(LanguageModels.FallbackLanguageModel));
    });
});
