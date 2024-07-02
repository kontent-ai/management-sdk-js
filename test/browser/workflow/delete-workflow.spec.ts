import { BaseResponses } from '../../../lib';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Delete workflow', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(undefined).deleteWorkflow().byWorkflowCodename('x').toPromise();
    });

    it(`url should be correct`, () => {
        const urlById = cmClient.deleteWorkflow().byWorkflowId('x').getUrl();
        const urlByCodename = cmClient.deleteWorkflow().byWorkflowCodename('x').getUrl();

        expect(urlById).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/workflows/x`);
        expect(urlByCodename).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/workflows/codename/x`
        );
    });

    it(`response should be instance of EmptyContentManagementResponse class`, () => {
        expect(response).toEqual(jasmine.any(BaseResponses.EmptyContentManagementResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should NOT contain data`, () => {
        expect(response.data).toBeUndefined();
    });
});
