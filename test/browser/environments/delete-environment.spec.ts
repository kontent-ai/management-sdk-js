import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';
import * as responseJson from '../fake-responses/environments/fake-delete-environment.json';
import { BaseResponses } from '../../../lib/responses';

describe('Delete environment', () => {
    let response: BaseResponses.EmptyContentManagementResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).deleteEnvironment().toPromise();
    });

    it(`should have correct url`, () => {
        const url = cmLiveClient.deleteEnvironment().getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}`);
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
