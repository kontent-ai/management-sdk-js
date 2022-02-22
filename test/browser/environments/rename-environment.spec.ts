import { EnvironmentResponses } from '../../../lib/responses/environments/environment-responses';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';
import * as responseJson from '../fake-responses/environments/fake-rename-environment.json';
import { EnvironmentModels } from '../../../lib/models/environments/environments.model';

describe('Rename environment', () => {
    let response: EnvironmentResponses.RenameEnvironmentResponse;
    let requestData: EnvironmentModels.IRenameEnvironmentData[];

    beforeAll(async () => {
        requestData = [{
            op: 'rename-environment',
            value: 'Cool environment'
        }];
        response = await getTestClientWithJson(responseJson)
            .renameEnvironment()
            .withData(requestData)
            .toPromise();
    });

    it(`should have correct url`, () => {
        const url = cmLiveClient.renameEnvironment().withData(requestData).getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}`);
    });

    it(`response should be instance of RenameEnvironmentResponse class`, () => {
        expect(response).toEqual(jasmine.any(EnvironmentResponses.RenameEnvironmentResponse));
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
