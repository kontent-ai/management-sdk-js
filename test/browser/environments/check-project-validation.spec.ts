import { EnvironmentResponses } from '../../../lib';
import * as responseJson from '../fake-responses/projects/fake-start-project-validation.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Check project validation', () => {
    let response: EnvironmentResponses.CheckEnvironmentValidationResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).checkEnvironmentValidation().byTaskId('x').toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmClient.checkEnvironmentValidation().byTaskId('x').getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/validate-async/tasks/x`);
    });

    it(`response should be instance of CheckProjectValidationResponse class`, () => {
        expect(response).toEqual(jasmine.any(EnvironmentResponses.CheckEnvironmentValidationResponse));
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
