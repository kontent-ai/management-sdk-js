import { ProjectResponses } from '../../../lib';
import * as responseJson from '../fake-responses/projects/fake-start-project-validation.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Check project validation', () => {
    let response: ProjectResponses.CheckProjectValidationResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).checkProjectValidation().byTaskId('x').toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient.checkProjectValidation().byTaskId('x').getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/validate-async/tasks/x`);
    });

    it(`response should be instance of CheckProjectValidationResponse class`, () => {
        expect(response).toEqual(jasmine.any(ProjectResponses.CheckProjectValidationResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`project data should by mapped`, () => {
        expect(response.data.id).toEqual(responseJson.id);
        expect(response.data.status).toEqual(responseJson.status);
        expect(response.data.validation_result).toEqual(responseJson.validation_result);
    });
});
