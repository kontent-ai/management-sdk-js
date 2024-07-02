import { SpaceResponses, SpaceModels } from '../../../lib';
import * as viewSpaceJson from '../fake-responses/spaces/fake-view-space.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('View space', () => {
    let response: SpaceResponses.ViewSpaceResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(viewSpaceJson).viewSpace().bySpaceCodename('x').toPromise();
    });

    it(`url should be correct`, () => {
        const urlByCodename = cmClient.viewSpace().bySpaceCodename('x').getUrl();
        const urlByInternalId = cmClient.viewSpace().bySpaceId('y').getUrl();

        expect(urlByCodename).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/spaces/codename/x`);
        expect(urlByInternalId).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/spaces/y`);
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

    it(`space properties should be mapped`, () => {
        const originalItem = viewSpaceJson;
        const Space = response.data;
        expect(Space).toEqual(jasmine.any(SpaceModels.Space));
        expect(Space.codename).toEqual(originalItem.codename);
        expect(Space.name).toEqual(originalItem.name);
        expect(Space.webSpotlightRootItem).toEqual(originalItem.web_spotlight_root_item);
        expect(Space.collections).toEqual(originalItem.collections);
    });
});
