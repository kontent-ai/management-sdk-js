import { BaseResponses } from '../../lib';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Delete webhook', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll((done) => {
        getTestClientWithJson(undefined).deleteWebhook()
            .byId('x')
            .toObservable()
            .subscribe(result => {
                response = result;
                done();
            });
    });

    it(`url should be correct`, () => {
        const w1Url = cmLiveClient.deleteWebhook().byId('x').getUrl();
        expect(w1Url).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/webhooks/x`);
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

