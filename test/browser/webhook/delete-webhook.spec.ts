import { BaseResponses } from '../../../lib';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Delete webhook', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(undefined).deleteLegacyWebhook().byId('x').toPromise();
    });

    it(`url should be correct`, () => {
        const w1Url = cmClient.deleteWebhook().byId('x').getUrl();
        expect(w1Url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/webhooks-vnext/x`);
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
