import { SpaceResponses } from '../../../lib';
import * as responseJson from '../fake-responses/spaces/fake-add-space.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Add space', () => {
    let response: SpaceResponses.AddSpaceResponse;
    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .addSpace()
            .withData({
                name: 'Spacename',
                codename: 'My_Workflow',
                webSpotlightRootItem: {
                    codename: "my_root_item"
                }
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient
            .addSpace()
            .withData({} as any)
            .getUrl();
        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/spaces`);
    });

    it(`response should be instance of AddSpaceResponse class`, () => {
        expect(response).toEqual(jasmine.any(SpaceResponses.AddSpaceResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it('space properties should be mapped', () => {
        const originalItem = responseJson;
        const space = response.data;

        expect(space.codename).toEqual(originalItem.codename);
        expect(space.name).toEqual(originalItem.name);
        expect(space.id).toBeDefined();
        expect(space.webSpotlightRootItem).toBeDefined();
    });
});
