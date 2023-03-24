import { EnvironmentResponses } from '../../../lib/responses/environments/environment-responses';
import { EnvironmentModels } from '../../../lib/models/environments/environment.models';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';
import * as responseJson from '../fake-responses/environments/fake-clone-environment.json';

describe('Clone environment', () => {
    let response: EnvironmentResponses.CloneEnvironmentResponse;
    let requestData: EnvironmentModels.ICloneEnvironmentData;

    beforeAll(async () => {
        requestData = {
            name: 'New environment'
        };
        response = await getTestClientWithJson(responseJson)
            .cloneEnvironment()
            .withData(requestData)
            .toPromise();
    });

    it(`should have correct url`, () => {
        const url = cmLiveClient.cloneEnvironment().withData(requestData).getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/clone-environment`);
    });

    it(`response should be instance of CloneEnvironmentResponse class`, () => {
        expect(response).toEqual(jasmine.any(EnvironmentResponses.CloneEnvironmentResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data).toEqual(jasmine.any(EnvironmentModels.CloneEnvironmentModel));
    });

    it(`response properties should be mapped`, () => {
        expect(response.data.id).toEqual(responseJson.id);
        expect(response.data.managementApiKey).toEqual(responseJson.management_api_key);
        expect(response.data.deliveryPreviewApiKey).toEqual(responseJson.delivery_preview_api_key);
        expect(response.data.securedDeliveryApiKey).toEqual(responseJson.secured_delivery_api_key);
    });
});
