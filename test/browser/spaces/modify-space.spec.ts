import { SpaceResponses } from '../../../lib';
import * as responseJson from '../fake-responses/spaces/fake-modify-space.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Modify content type', () => {
    let response: SpaceResponses.ModifySpaceResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .modifySpace()
            .bySpaceCodename('x')
            .withData([{
                "op": 'replace',
                "property_name": 'name',
                "value": 'new_name'
            }])
            .toPromise();
    });

    it(`url should be correct`, () => {
        const urlByCodename = cmLiveClient.modifySpace().bySpaceCodename('x').withData([]).getUrl();
        const urlByInternalId = cmLiveClient.modifySpace().bySpaceId('y').withData([]).getUrl();

        expect(urlByCodename).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/spaces/codename/x`);
        expect(urlByInternalId).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/spaces/y`);
    });

    it(`response should be instance of ModifySpaceResponse class`, () => {
        expect(response).toEqual(jasmine.any(SpaceResponses.ModifySpaceResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`space properties should be mapped`, () => {
        const originalItem = responseJson;
        const space = response.data;

        expect(space.codename).toEqual(originalItem.codename);
        expect(space.name).toEqual(originalItem.name);
    });
});
