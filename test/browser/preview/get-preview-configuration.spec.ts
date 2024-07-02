import { PreviewModels, PreviewResponses } from '../../../lib';
import * as responseJson from '../fake-responses/preview/fake-get-preview-configuration.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Get preview configuration', () => {
    let response: PreviewResponses.PreviewConfigurationResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).getPreviewConfiguration().toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmClient.getPreviewConfiguration().getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/preview-configuration`);
    });

    it(`response should be instance of PreviewResponses.PreviewConfigurationResponse class`, () => {
        expect(response).toEqual(jasmine.any(PreviewResponses.PreviewConfigurationResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data).toEqual(jasmine.any(PreviewModels.PreviewConfiguration));
    });
});
