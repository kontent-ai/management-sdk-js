import { PreviewModels, PreviewResponses } from '../../../lib';
import * as responseJson from '../fake-responses/preview/fake-change-live-preview-configuration.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Change live preview configuration', () => {
    let response: PreviewResponses.ChangeLivePreviewConfigurationResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .changeLivePreviewConfiguration()
            .withData({
                status: 'enabled'
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmClient
            .changeLivePreviewConfiguration()
            .withData({} as any)
            .getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/live-preview-configuration`);
    });

    it(`response should be instance of PreviewResponses.ChangeLivePreviewConfigurationResponse class`, () => {
        expect(response).toEqual(jasmine.any(PreviewResponses.ChangeLivePreviewConfigurationResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data).toEqual(jasmine.any(PreviewModels.LivePreviewConfiguration));
    });

    it(`response data should have correct status`, () => {
        expect(response.data.status).toEqual('enabled');
    });
});
