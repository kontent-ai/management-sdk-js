import { ProjectResponses } from '../../../lib';
import * as responseJson from '../fake-responses/projects/fake-start-project-validation.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Start project validation', () => {
    let response: ProjectResponses.StartProjectValidationResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).startProjectValidation().toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient.startProjectValidation().getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/validate-async`);
    });

    it(`response should be instance of StartProjectValidationResponse class`, () => {
        expect(response).toEqual(jasmine.any(ProjectResponses.StartProjectValidationResponse));
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
