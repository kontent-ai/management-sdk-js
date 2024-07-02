import { BaseResponses } from '../../../lib';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Cancel scheduled publishing of language variant', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(undefined)
            .cancelSheduledPublishingOfLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('y')
            .toPromise();
    });

    it(`url should be correct`, () => {
        const w1Url = cmClient
            .cancelSheduledPublishingOfLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('y')
            .getUrl();

        expect(w1Url).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/codename/x/variants/codename/y/cancel-scheduled-publish`
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
