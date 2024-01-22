import { BaseResponses } from '../../../lib';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Delete legacy webhook', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(undefined).deleteLegacyWebhook().byId('x').toPromise();
    });

    it(`url should be correct`, () => {
        const w1Url = cmLiveClient.deleteLegacyWebhook().byId('x').getUrl();
        expect(w1Url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/webhooks/x`);
    });

    it(`response should be instance of EmptyContentManagementResponse class`, () => {
        expect(response).toEqual(jasmine.any(BaseResponses.EmptyContentManagementResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should NOT contain data`, () => {
        expect(response.data).toBeUndefined();
    });
});
