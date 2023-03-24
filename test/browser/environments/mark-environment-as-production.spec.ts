import { EnvironmentModels } from '../../../lib/models/environments/environment.models';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';
import * as responseJson from '../fake-responses/environments/fake-mark-environment-as-production.json';
import { BaseResponses } from '../../../lib/responses';

describe('Mark environment as production', () => {
    let response: BaseResponses.EmptyContentManagementResponse;
    let requestData: EnvironmentModels.IMarkEnvironmentAsProductionData;

    beforeAll(async () => {
        requestData = {
            enable_webhooks: true
        };
        response = await getTestClientWithJson(responseJson)
            .markEnvironmentAsProduction()
            .withData(requestData)
            .toPromise();
    });

    it(`should have correct url`, () => {
        const url = cmLiveClient.markEnvironmentAsProduction().withData(requestData).getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/mark-environment-as-production`);
    });

    it(`response should be instance of EmptyContentManagementResponse class`, () => {
        expect(response).toEqual(jasmine.any(BaseResponses.EmptyContentManagementResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should be empty`, () => {
        expect(response.data).toBeUndefined();
    });
});
