import { BaseResponses } from '../../../lib';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Change workflow step of language variant', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(undefined)
            .changeWorkflowStepOfLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('y')
            .byWorkflowStepCodename('b')
            .toPromise();
    });

    it(`url should be correct`, () => {
        const w1Url = cmClient
            .changeWorkflowStepOfLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('y')
            .byWorkflowStepId('b')
            .getUrl();
        const w2Url = cmClient
            .changeWorkflowStepOfLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('y')
            .byWorkflowStepCodename('b')
            .getUrl();

        expect(w1Url).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/codename/x/variants/codename/y/workflow/b`
        );
        expect(w2Url).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/codename/x/variants/codename/y/workflow/codename/b`
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
