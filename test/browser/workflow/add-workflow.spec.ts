import { WorkflowResponses } from '../../../lib';
import * as responseJson from '../fake-responses/workflow/fake-add-workflow.json';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Add workflow', () => {
    let response: WorkflowResponses.AddWorkflowResponse;
    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .addWorkflow()
            .withData({
                name: 'My workflow',
                scopes: [
                    {
                        content_types: [
                            {
                                id: '1aeb9220-f167-4f8e-a7db-1bfec365fa80'
                            }
                        ],
                        collections: [
                            {
                                id: 'a7f6887c-33a1-4442-a8599-c40861bb7a65'
                            }
                        ]
                    }
                ],
                steps: [
                    {
                        name: 'First step',
                        codename: 'first_step',
                        color: 'sky-blue',
                        transitions_to: [
                            {
                                step: {
                                    codename: 'x'
                                }
                            }
                        ],
                        role_ids: []
                    },
                    {
                        name: 'Second step',
                        codename: 'second_step',
                        color: 'rose',
                        transitions_to: [
                            {
                                step: {}
                            }
                        ],
                        role_ids: ['e796887c-38a1-4ab2-a999-c40861bb7a4b']
                    }
                ],
                published_step: {
                    unpublish_role_ids: ['e796887c-38a1-4ab2-a999-c40861bb7a4b'],
                    create_new_version_role_ids: []
                },
                archived_step: {
                    role_ids: []
                }
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient
            .addWorkflow()
            .withData({} as any)
            .getUrl();
        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/workflows`);
    });

    it(`response should be instance of AddWorkflowResponse class`, () => {
        expect(response).toEqual(jasmine.any(WorkflowResponses.AddWorkflowResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`webhook properties should be mapped`, () => {
        const originalItem = responseJson;
        const workflow = response.data;

        expect(workflow.archivedStep).toEqual(originalItem.archived_step);
        expect(workflow.name).toEqual(originalItem.name);
        expect(workflow.codename).toEqual(originalItem.codename);
        expect(workflow.id).toEqual(originalItem.id);
        expect(workflow.publishedStep).toEqual(originalItem.published_step);
        expect(workflow.scopes).toEqual(originalItem.scopes);
        expect(workflow.steps).toEqual(originalItem.steps as any);
    });
});
