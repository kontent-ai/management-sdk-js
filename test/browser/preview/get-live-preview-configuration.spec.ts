import { PreviewModels, PreviewResponses } from '../../../lib';
import * as responseJson from '../fake-responses/preview/fake-get-live-preview-configuration.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Get live preview configuration', () => {
    let response: PreviewResponses.LivePreviewConfigurationResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).getLivePreviewConfiguration().toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmClient.getLivePreviewConfiguration().getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/live-preview-configuration`);
    });

    it(`response should be instance of PreviewResponses.LivePreviewConfigurationResponse class`, () => {
        expect(response).toEqual(jasmine.any(PreviewResponses.LivePreviewConfigurationResponse));
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
