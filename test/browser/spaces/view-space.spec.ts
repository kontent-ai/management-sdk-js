import { SpaceResponses, SpaceModels } from '../../../lib';
import * as viewSpaceJson from '../fake-responses/content-types/fake-view-content-type.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('View content type', () => {
    let response: SpaceResponses.ViewSpaceResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(viewSpaceJson).viewSpace().bySpaceCodename('x').toPromise();
    });

    it(`url should be correct`, () => {
        const urlByCodename = cmLiveClient.viewSpace().bySpaceCodename('x').getUrl();
        const urlByInternalId = cmLiveClient.viewSpace().bySpaceId('y').getUrl();

        expect(urlByCodename).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/spaces/codename/x`);
        expect(urlByInternalId).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/spaces/y`);
    });

    it(`response should be instance of ViewSpaceResponse class`, () => {
        expect(response).toEqual(jasmine.any(SpaceResponses.ViewSpaceResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`content type properties should be mapped`, () => {
        const originalItem = viewSpaceJson;
        const Space = response.data;

        expect(Space).toEqual(jasmine.any(SpaceModels.Space));
        expect(Space.codename).toEqual(originalItem.codename);
        expect(Space.name).toEqual(originalItem.name);
    });
});
