import { RoleModels, RoleResponses } from '../../../lib';
import * as responseJson from '../fake-responses/roles/fake-view-role.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('View role', () => {
    let response: RoleResponses.ViewRoleResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).viewRole().byCodename('x').toPromise();
    });

    it(`url should be correct`, () => {
        const idUrl = cmClient.viewRole().byId('xId').getUrl();
        const codenameUrl = cmClient.viewRole().byCodename('xCodename').getUrl();

        expect(idUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/roles/xId`);
        expect(codenameUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/roles/codename/xCodename`
        );
    });

    it(`response should be instance of ViewRoleResponse class`, () => {
        expect(response).toEqual(jasmine.any(RoleResponses.ViewRoleResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data).toEqual(jasmine.any(RoleModels.Role));
    });

    it(`properties should be mapped`, () => {
        const originalItem = responseJson;

        const item = response.data;

        expect(item.codename).toEqual(originalItem.codename);
        expect(item.id).toEqual(originalItem.id);
        expect(item.name).toEqual(originalItem.name);
        expect(item._raw).toEqual(originalItem);
    });
});
