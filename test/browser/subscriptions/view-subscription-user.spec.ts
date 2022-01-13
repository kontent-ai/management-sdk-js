import { SubscriptionModels, SubscriptionResponses } from '../../../lib';
import * as responseJson from '../fake-responses/subscriptions/fake-view-subscription-user.json';
import { cmLiveClient, getTestClientWithJson, testSubscriptionId } from '../setup';

describe('View subscription user ', () => {
    let response: SubscriptionResponses.ViewSubscriptionUserResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).viewSubscriptionUser().byEmail('xEmail').toPromise();
    });

    it(`url should be correct`, () => {
        const idUrl = cmLiveClient.viewSubscriptionUser().byId('xId').getUrl();
        const emailUrl = cmLiveClient.viewSubscriptionUser().byEmail('xEmail').getUrl();

        expect(idUrl).toEqual(`https://manage.kontent.ai/v2/subscriptions/${testSubscriptionId}/users/xId`);
        expect(emailUrl).toEqual(`https://manage.kontent.ai/v2/subscriptions/${testSubscriptionId}/users/email/xEmail`);
    });

    it(`response should be instance of ViewSubscriptionUserResponse class`, () => {
        expect(response).toEqual(jasmine.any(SubscriptionResponses.ViewSubscriptionUserResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data).toEqual(jasmine.any(SubscriptionModels.SubscriptionUser));
    });

    it(`properties should be mapped`, () => {
        const originalItem = responseJson;
        const item = response.data;

        expect(item.id).toEqual(originalItem.id);
        expect(item.firstName).toEqual(originalItem.first_name);
        expect(item.lastName).toEqual(originalItem.last_name);
        expect(item.hasPendingInvitation).toEqual(originalItem.has_pending_invitation);
    });
});
