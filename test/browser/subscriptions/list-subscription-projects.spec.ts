import { SubscriptionResponses } from '../../../lib';
import * as responseJson from '../fake-responses/subscriptions/fake-list-subscription-projects.json';
import { cmLiveClient, getTestClientWithJson, testSubscriptionId } from '../setup';

describe('List subscription projects', () => {
    let response: SubscriptionResponses.SubscriptionProjectsListResponse;
    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).listSubscriptionProjects().toPromise();
    });

    it(`url should be correct`, () => {
        const listUrl = cmLiveClient.listSubscriptionProjects().getUrl();

        expect(listUrl).toEqual(`https://manage.kontent.ai/v2/subscriptions/${testSubscriptionId}/projects`);
    });

    it(`response should be instance of SubscriptionProjectsListResponse class`, () => {
        expect(response).toEqual(jasmine.any(SubscriptionResponses.SubscriptionProjectsListResponse));
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
        expect(response.data.items.length).toEqual(responseJson.projects.length);

        response.data.items.forEach((m) => {
            // find original item
            const originalItem = responseJson.projects.find((s) => s.id === m.id);

            if (!originalItem) {
                throw Error(`Project with id '${m.id}' was not found in fake response`);
            }

            expect(m.isActive).toEqual(originalItem.is_active);
            expect(m.id).toEqual(originalItem.id);
            expect(m.environments).toEqual(originalItem.environments);
            expect(m.name).toEqual(originalItem.name);
            expect(Array.isArray(m.environments)).toBeTruthy();
        });
    });
});
