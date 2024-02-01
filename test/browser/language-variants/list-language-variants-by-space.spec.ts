import { ElementModels, LanguageVariantResponses, SharedModels } from '../../../lib';
import * as responseJson from '../fake-responses/language-variants/fake-list-language-variants-by-collection.json';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('List language variants by space', () =>{
    let response: LanguageVariantResponses.ListLanguageVariantsBySpaceResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .listLanguageVariantsBySpace()
            .bySpaceCodename('Y')
            .toPromise();
    });

    it(`url should be correct`, () => {
        const codenameUrl = cmLiveClient.listLanguageVariantsBySpace().bySpaceCodename('xCodename').getUrl();
        const idUrl = cmLiveClient.listLanguageVariantsBySpace().bySpaceId('xId').getUrl();
        const externalIdUrl = cmLiveClient
            .listLanguageVariantsBySpace()
            .bySpaceExternalId('xExternalId')
            .getUrl();

        expect(codenameUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/spaces/codename/xCodename/variants`
        );
        expect(idUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/spaces/xId/variants`);
        expect(externalIdUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/spaces/external-id/xExternalId/variants`
        );
    });

})