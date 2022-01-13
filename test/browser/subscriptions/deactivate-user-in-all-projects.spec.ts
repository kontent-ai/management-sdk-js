import { BaseResponses } from '../../../lib';
import * as responseJson from '../fake-responses/subscriptions/fake-view-subscription-user.json';
import { cmLiveClient, getTestClientWithJson, testSubscriptionId } from '../setup';

describe('Deactivate user in all projects', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .deactivateUserInAllProjects()
            .byEmail('xEmail')
            .toPromise();
    });

    it(`url should be correct`, () => {
        const idUrl = cmLiveClient.deactivateUserInAllProjects().byId('xId').getUrl();
        const emailUrl = cmLiveClient.deactivateUserInAllProjects().byEmail('xEmail').getUrl();

        expect(idUrl).toEqual(`https://manage.kontent.ai/v2/subscriptions/${testSubscriptionId}/users/xId/deactivate`);
        expect(emailUrl).toEqual(
            `https://manage.kontent.ai/v2/subscriptions/${testSubscriptionId}/users/email/xEmail/deactivate`
        );
    });

    it(`response should be instance of EmptyContentManagementResponse class`, () => {
        expect(response).toEqual(jasmine.any(BaseResponses.EmptyContentManagementResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });
});
