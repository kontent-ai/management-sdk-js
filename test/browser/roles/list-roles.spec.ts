import { RoleModels, RoleResponses } from '../../../lib';
import * as responseJson from '../fake-responses/roles/fake-list-roles.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('List roles', () => {
    let response: RoleResponses.RoleListResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).listRoles().toPromise();
    });

    it(`url should be correct`, () => {
        const listUrl = cmLiveClient.listRoles().getUrl();

        expect(listUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/roles`);
    });

    it(`response should be instance of RoleListResponse class`, () => {
        expect(response).toEqual(jasmine.any(RoleResponses.RoleListResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`collection properties should be mapped`, () => {
        expect(Array.isArray(response.data.roles)).toBeTruthy();
        expect(response.data.roles.length).toEqual(responseJson.roles.length);

        response.data.roles.forEach((m) => {
            // find original item
            const originalItem = responseJson.roles.find((s) => s.id === m.id);

            if (!originalItem) {
                throw Error(`Role with id '${m.id}' was not found in fake response`);
            }

            expect(m).toEqual(jasmine.any(RoleModels.Role));
            expect(m.id).toEqual(originalItem.id);
            expect(m.name).toEqual(originalItem.name);
            expect(m.codename).toEqual(originalItem.codename);
        });
    });
});
