import { BaseResponses, PublishLanguageVariantQuery } from '../../../lib';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Publish language variant', () => {
    let response: BaseResponses.EmptyContentManagementResponse;
    let query: PublishLanguageVariantQuery;
    let queryWithoutData: PublishLanguageVariantQuery;

    beforeAll(async () => {
        queryWithoutData = getTestClientWithJson(undefined)
            .publishLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('y')
            .withoutData();

        query = getTestClientWithJson(undefined)
            .publishLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('y')
            .withData({
                scheduled_to: '2019-01-31T11:00:00+01:00'
            });

        response = await query.toPromise();
    });

    it(`query without data should have undefined data and use proper query`, () => {
        expect(queryWithoutData).toEqual(jasmine.any(PublishLanguageVariantQuery));
        expect(queryWithoutData.data).toBeUndefined();
    });

    it(`query data should be set`, () => {
        expect(query.data ? query.data.scheduled_to : '').toEqual(`2019-01-31T11:00:00+01:00`);
    });

    it(`url should be correct`, () => {
        const w1Url = cmLiveClient
            .publishLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('y')
            .withData({})
            .getUrl();
        expect(w1Url).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/codename/x/variants/codename/y/publish`
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
