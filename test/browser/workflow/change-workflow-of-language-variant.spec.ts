import { BaseResponses } from '../../../lib';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Change workflow of language variant', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(undefined)
            .changeWorkflowOfLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('y')
            .withData({
                step_identifier: {
                    codename: 'x'
                },
                workflow_identifier: {
                    codename: 'y'
                }
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const w1Url = cmLiveClient
            .changeWorkflowOfLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('y')
            .withData({
                step_identifier: {
                    codename: 'x'
                },
                workflow_identifier: {
                    codename: 'y'
                }
            })
            .getUrl();
        const w2Url = cmLiveClient
            .changeWorkflowOfLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('y')
            .withData({
                step_identifier: {
                    codename: 'x'
                },
                workflow_identifier: {
                    codename: 'y'
                }
            })
            .getUrl();

        expect(w1Url).toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/items/codename/x/variants/codename/y/change-workflow`
        );
        expect(w2Url).toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/items/codename/x/variants/codename/y/change-workflow`
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
