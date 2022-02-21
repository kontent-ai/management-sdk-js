import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';
import * as responseJson from '../fake-responses/environments/fake-environment-cloning-state.json';
import { EnvironmentResponses } from '../../../lib/responses/environments/environment-responses';
import { EnvironmentModels } from '../../../lib/models/environments/environments.model';


describe('Get environment cloning state', () => {
    let response: EnvironmentResponses.GetCloningStateResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).getEnvironmentCloningState().toPromise();
    });

    it(`should have correct url`, () => {
        const url = cmLiveClient.getEnvironmentCloningState().getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/environment-cloning-state`);
    });

    it(`response should be instance of GetCloningStateResponse class`, () => {
        expect(response).toEqual(jasmine.any(EnvironmentResponses.GetCloningStateResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`cloning state property should be mapped`, () => {
        expect(response.data.cloningInfo).toEqual(jasmine.any(EnvironmentModels.EnvironmentCloningStateModel));
        expect(response.data.cloningInfo.cloningState).toEqual(responseJson.cloning_state);
    });
});
