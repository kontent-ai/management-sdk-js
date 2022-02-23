import { EnvironmentResponses } from '../../../lib/responses/environments/environment-responses';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';
import * as responseJson from '../fake-responses/environments/fake-modify-environment.json';
import { EnvironmentModels } from '../../../lib/models/environments/environment.models';

describe('Modify environment', () => {
    let response: EnvironmentResponses.ModifyEnvironmentResponse;
    let requestData: EnvironmentModels.IModifyEnvironmentData[];

    beforeAll(async () => {
        requestData = [{
            op: 'rename_environment',
            value: 'Cool environment'
        }];
        response = await getTestClientWithJson(responseJson)
            .modifyEnvironment()
            .withData(requestData)
            .toPromise();
    });

    it(`should have correct url`, () => {
        const url = cmLiveClient.modifyEnvironment().withData(requestData).getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}`);
    });

    it(`response should be instance of ModifyEnvironmentResponse class`, () => {
        expect(response).toEqual(jasmine.any(EnvironmentResponses.ModifyEnvironmentResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data).toEqual(jasmine.any(EnvironmentModels.EnvironmentModel));
    });

    it(`response properties should be mapped`, () => {
        expect(response.data.id).toEqual(responseJson.id);
        expect(response.data.name).toEqual(responseJson.name);
        expect(response.data.isProduction).toEqual(responseJson.is_production);
    });
});
