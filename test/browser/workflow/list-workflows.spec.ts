import { WorkflowResponses } from '../../../lib';
import * as responseJson from '../fake-responses/workflow/fake-list-workflows.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('List workflows', () => {
    let response: WorkflowResponses.ListWorkflowsResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).listWorkflows().toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient.listWorkflows().getUrl();
        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/workflows`);
    });

    it(`response should be instance of ListWorkflowsResponse class`, () => {
        expect(response).toEqual(jasmine.any(WorkflowResponses.ListWorkflowsResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`webhook properties should be mapped`, () => {
        expect(response.data.length).toBeGreaterThan(0);

        for (const workflow of response.data) {
            const originalItem = responseJson.find((m) => m.id === workflow.id);

            if (!originalItem) {
                throw Error(`Original workflow with id '${workflow.id}' was not found`);
            }

            expect(workflow.archivedStep).toEqual(originalItem.archived_step);
            expect(workflow.name).toEqual(originalItem.name);
            expect(workflow.codename).toEqual(originalItem.codename);
            expect(workflow.id).toEqual(originalItem.id);
            expect(workflow.publishedStep).toEqual(originalItem.published_step);
            expect(workflow.scopes).toEqual(originalItem.scopes);
            expect(workflow.steps).toEqual(originalItem.steps);
        }
    });
});
