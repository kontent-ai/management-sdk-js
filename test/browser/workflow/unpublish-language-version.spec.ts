import { BaseResponses, UnpublishLanguageVariantQuery } from '../../../lib';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Unpublish a language version', () => {
    let response: BaseResponses.EmptyContentManagementResponse;
    let query: UnpublishLanguageVariantQuery;

    beforeAll((done) => {
        query = getTestClientWithJson(undefined)
            .unpublishLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('y')
            .withData({
                scheduled_to: '2019-01-31T11:00:00+01:00'
            });

        query.toObservable().subscribe((result) => {
            response = result;
            done();
        });
    });

    it(`url should be correct`, () => {
        const w1Url = cmLiveClient
            .unpublishLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('y')
            .withoutData()
            .getUrl();

        expect(w1Url).toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/items/codename/x/variants/codename/y/unpublish-and-archive`
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
