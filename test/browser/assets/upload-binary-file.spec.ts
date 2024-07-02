import { AssetResponses } from '../../../lib';
import * as uploadBinaryResponseJson from '../fake-responses/assets/fake-upload-binary-file.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';
import { IHeader } from '@kontent-ai/core-sdk';

describe('Upload binary file', () => {
    let response: AssetResponses.UploadBinaryFileResponse;
    const binaryFileHeaders: IHeader[] = [];

    beforeAll(async () => {
        const query = getTestClientWithJson(uploadBinaryResponseJson).uploadBinaryFile().withData({
            binaryData: '',
            contentLength: 1212,
            contentType: 'image/jpeg',
            filename: 'xxx.png'
        });

        binaryFileHeaders.push(...query.getHeaders());

        response = await query.toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmClient
            .uploadBinaryFile()
            .withData({
                binaryData: 'c',
                contentLength: 9,
                contentType: 'x',
                filename: 'y'
            })
            .getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/files/y`);
    });

    it(`url should be encoded using filename`, () => {
        const url = cmClient
            .uploadBinaryFile()
            .withData({
                binaryData: 'c',
                contentLength: 9,
                contentType: 'x',
                filename: 'name with spaces'
            })
            .getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/files/name%20with%20spaces`);
    });

    it(`response should be instance of UploadBinaryFileResponse class`, () => {
        expect(response).toEqual(jasmine.any(AssetResponses.UploadBinaryFileResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`asset properties should be mapped`, () => {
        expect(response.data.id).toEqual(uploadBinaryResponseJson.id);
        expect(response.data.type).toEqual(uploadBinaryResponseJson.type);
    });
});
