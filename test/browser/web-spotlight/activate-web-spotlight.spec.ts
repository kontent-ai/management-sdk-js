import { WebSpotlightModels, WebSpotlightResponses } from '../../../lib';
import * as responseJson from '../fake-responses/web-spotlight/fake-activate-web-spotlight.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Activate web spotlight', () => {
    let response: WebSpotlightResponses.WebSpotlightStatusResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .activateWebSpotlight()
            .withData({
                root_type: {
                    codename: 'x'
                }
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmClient
            .activateWebSpotlight()
            .withData({
                root_type: {
                    codename: 'x'
                }
            })
            .getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/web-spotlight/activate`);
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
