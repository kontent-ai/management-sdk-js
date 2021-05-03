import { AssetResponses } from '../../../lib';
import * as uploadBinaryResponseJson from '../fake-responses/assets/fake-upload-binary-file.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';
import { IHeader } from '@kentico/kontent-core';

describe('Upload binary file', () => {
    let response: AssetResponses.UploadBinaryFileResponse;
    const binaryFileHeaders: IHeader[] = [];

    beforeAll((done) => {
        const query =  getTestClientWithJson(uploadBinaryResponseJson).uploadBinaryFile().withData({
            binaryData: '',
            contentLength: 1212,
            contentType: 'image/jpeg',
            filename: 'xxx.png'
        });

        binaryFileHeaders.push(...query.getHeaders());

        query
            .toObservable()
            .subscribe(result => {
                response = result;
                done();
            });
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient.uploadBinaryFile().withData({
            binaryData: 'c',
            contentLength: 9,
            contentType: 'x',
            filename: 'y'
        }).getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/files/y`);
    });

    it(`url should be encoded using filename`, () => {
        const url = cmLiveClient.uploadBinaryFile().withData({
            binaryData: 'c',
            contentLength: 9,
            contentType: 'x',
            filename: 'name with spaces'
        }).getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/files/name%20with%20spaces`);
    });

    it(`response headers should contain required items`, () => {
        const contentTypeHeader = binaryFileHeaders.find(m => m.header.toLowerCase() === 'Content-type'.toLowerCase());
        const contentLengthHeader = binaryFileHeaders.find(m => m.header.toLowerCase() === 'Content-length'.toLowerCase());

        expect(contentTypeHeader).toBeDefined();
        expect(contentTypeHeader ? contentTypeHeader.value : '').toEqual('image/jpeg');

        expect(contentLengthHeader).toBeDefined();
        expect(contentLengthHeader ? contentLengthHeader.value : '').toEqual('1212');
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

