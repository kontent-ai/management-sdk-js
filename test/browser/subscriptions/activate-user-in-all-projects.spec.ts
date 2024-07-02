import { BaseResponses } from '../../../lib';
import * as responseJson from '../fake-responses/subscriptions/fake-view-subscription-user.json';
import { cmClient, getTestClientWithJson, testSubscriptionId } from '../setup';

describe('Activate user in all projects', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).activateUserInAllProjects().byEmail('xEmail').toPromise();
    });

    it(`url should be correct`, () => {
        const idUrl = cmClient.activateUserInAllProjects().byId('xId').getUrl();
        const emailUrl = cmClient.activateUserInAllProjects().byEmail('xEmail').getUrl();

        expect(idUrl).toEqual(`https://manage.kontent.ai/v2/subscriptions/${testSubscriptionId}/users/xId/activate`);
        expect(emailUrl).toEqual(
            `https://manage.kontent.ai/v2/subscriptions/${testSubscriptionId}/users/email/xEmail/activate`
        );
    });

    it(`response should be instance of EmptyContentManagementResponse class`, () => {
        expect(response).toEqual(jasmine.any(BaseResponses.EmptyContentManagementResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });
});
