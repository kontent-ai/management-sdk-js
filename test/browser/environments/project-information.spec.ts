import { EnvironmentModels, EnvironmentResponses } from '../../../lib';
import * as responseJson from '../fake-responses/projects/fake-project-information.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Project information', () => {
    let response: EnvironmentResponses.EnvironmentInformationResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).environmentInformation().toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmClient.environmentInformation().getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}`);
    });

    it(`response should be instance of ProjectInformationResponse class`, () => {
        expect(response).toEqual(jasmine.any(EnvironmentResponses.EnvironmentInformationResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`project data should by mapped`, () => {
        expect(response.data.project).toEqual(jasmine.any(EnvironmentModels.EnvironmentInformationModel));

        expect(response.data.project.id).toEqual(responseJson.id);
        expect(response.data.project.name).toEqual(responseJson.name);
        expect(response.data.project.environment).toEqual(responseJson.environment);
    });
});
