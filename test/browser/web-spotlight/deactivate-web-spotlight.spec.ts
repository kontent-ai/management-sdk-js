import { WebSpotlightModels, WebSpotlightResponses } from '../../../lib';
import * as responseJson from '../fake-responses/web-spotlight/fake-deactivate-web-spotlight.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Deactivate web spotlight', () => {
    let response: WebSpotlightResponses.WebSpotlightStatusResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).deactivateWebSpotlight().toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmClient.deactivateWebSpotlight().getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/web-spotlight/deactivate`);
    });

    it(`response should be instance of WebSpotlightStatusResponse class`, () => {
        expect(response).toEqual(jasmine.any(WebSpotlightResponses.WebSpotlightStatusResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data).toEqual(jasmine.any(WebSpotlightModels.WebSpotlightStatus));
    });

    it(`web spotlight status properties should be mapped`, () => {
        const originalItem = responseJson;
        const status = response.data;

        expect(status.enabled).toEqual(originalItem.enabled);
        expect(status._raw).toEqual(originalItem);
        expect(status.rootType).toEqual(originalItem.root_type);
    });
});
