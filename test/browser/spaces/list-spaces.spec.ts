import { SpaceResponses, SpaceModels } from '../../../lib';
import * as listSpacesJson from '../fake-responses/spaces/fake-list-spaces.json';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('List spaces', () => {
    let response: SpaceResponses.SpacesListResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(listSpacesJson).listSpaces().toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient.listSpaces().getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/spaces`);
    });

    it(`response should be instance of SpacesListAllResponse class`, () => {
        expect(response).toEqual(jasmine.any(SpaceResponses.SpacesListResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(Array.isArray(response.data)).toBeTruthy();
        expect(response.data.length).toEqual(listSpacesJson.length);
        expect(response.data).toBeTruthy();
    });

    it(`space properties should be mapped`, () => {
        const spaces = response.data;

        spaces.forEach((space) => {
            const originalItem = listSpacesJson.find((m) => m.id === space.id);

            if (!originalItem) {
                throw Error(`Invalid space with id '${space.id}'`);
            }

            expect(space).toEqual(jasmine.any(SpaceModels.Space));
            expect(space.codename).toEqual(originalItem.codename);
            expect(space.name).toEqual(originalItem.name);
            expect(space.webSpotlightRootItem).toEqual(originalItem.webSpotlightRootItem)

        });
    });
});
