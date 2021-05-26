import { GenericResponses } from '../../../lib';
import * as jsonResponse from '../fake-responses/generic/fake-post.response.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Generic POST', () => {
    let response: GenericResponses.GenericResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(jsonResponse)
            .post()
            .withAction('path/x')
            .withData({
                data: 'y'
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient.post().withAction('path/x').withData({}).getUrl();
        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/path/x`);
    });

    it(`response should be instance of GenericResponse class`, () => {
        expect(response).toEqual(jasmine.any(GenericResponses.GenericResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`data should be mapped & available`, () => {
        const responseData = response.data;
        const originalData = jsonResponse;

        expect(responseData).toEqual(originalData);
    });
});
