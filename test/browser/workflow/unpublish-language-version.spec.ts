import { BaseResponses, UnpublishLanguageVariantQuery } from '../../../lib';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Unpublish a language version', () => {
    let response: BaseResponses.EmptyContentManagementResponse;
    let query: UnpublishLanguageVariantQuery;

    beforeAll(async () => {
        query = getTestClientWithJson(undefined)
            .unpublishLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('y')
            .withData({
                scheduled_to: '2019-01-31T11:00:00+01:00',
                display_timezone: 'Australia/Sydney'
            });

        response = await query.toPromise();
    });

    it(`url should be correct`, () => {
        const w1Url = cmClient
            .unpublishLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('y')
            .withoutData()
            .getUrl();

        expect(w1Url).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/codename/x/variants/codename/y/unpublish-and-archive`
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

    it(`query data should be set`, () => {
        expect(query.data ? query.data.scheduled_to : '').toEqual(`2019-01-31T11:00:00+01:00`);
    });
});
