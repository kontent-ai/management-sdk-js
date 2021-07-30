import { ProjectModels, ProjectResponses } from '../../../lib';
import * as responseJson from '../fake-responses/projects/fake-project-information.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Project information', () => {
    let response: ProjectResponses.ProjectInformationResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).projectInformation().toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient.projectInformation().getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}`);
    });

    it(`response should be instance of ProjectInformationResponse class`, () => {
        expect(response).toEqual(jasmine.any(ProjectResponses.ProjectInformationResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`project data should by mapped`, () => {
        expect(response.data.project).toEqual(jasmine.any(ProjectModels.ProjectInformationModel));

        expect(response.data.project.id).toEqual(responseJson.id);
        expect(response.data.project.name).toEqual(responseJson.name);
        expect(response.data.project.environment).toEqual(responseJson.environment);
    });
});
