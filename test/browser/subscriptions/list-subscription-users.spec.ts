import { SubscriptionModels, SubscriptionResponses } from '../../../lib';
import * as responseJson from '../fake-responses/subscriptions/fake-list-subscription-users.json';
import { cmClient, getTestClientWithJson, testSubscriptionId } from '../setup';

describe('List subscription users', () => {
    let response: SubscriptionResponses.SubscriptionUsersListResponse;
    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).listSubscriptionUsers().toPromise();
    });

    it(`url should be correct`, () => {
        const listUrl = cmClient.listSubscriptionUsers().getUrl();

        expect(listUrl).toEqual(`https://manage.kontent.ai/v2/subscriptions/${testSubscriptionId}/users`);
    });

    it(`response should be instance of SubscriptionUsersListResponse class`, () => {
        expect(response).toEqual(jasmine.any(SubscriptionResponses.SubscriptionUsersListResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`properties should be mapped`, () => {
        expect(Array.isArray(response.data.items)).toBeTruthy();
        expect(response.data.pagination.continuationToken).toEqual(response.data.pagination.continuationToken);
        expect(response.data.pagination.nextPage).toEqual(response.data.pagination.nextPage);
        expect(response.data.items.length).toEqual(responseJson.users.length);

        response.data.items.forEach((m) => {
            // find original item
            const originalItem = responseJson.users.find((s) => s.id === m.id);

            if (!originalItem) {
                throw Error(`User with id '${m.id}' was not found in fake response`);
            }

            expect(m).toEqual(jasmine.any(SubscriptionModels.SubscriptionUser));
        });
    });
});
