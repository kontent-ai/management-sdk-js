import { AssetRenditionResponses } from '../../../lib';
import * as rawResponse from '../fake-responses/assset-renditions/fake-modify-asset-rendition.json';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Modify asset rendition', () => {
    let response: AssetRenditionResponses.ModifyAssetRenditionResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(rawResponse)
            .modifyAssetRendition()
            .byAssetId('x')
            .byRenditionId('y')
            .withData({
                transformation: {
                    fit: 'clip',
                    mode: 'rect',
                    height: 400,
                    width: 500,
                    x: 400,
                    y: 500,
                    custom_height: 300,
                    custom_width: 300
                }
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const urlByInternalIds = cmLiveClient
            .modifyAssetRendition()
            .byAssetId('x')
            .byRenditionId('y')
            .withData({} as any)
            .getUrl();
        const urlByExternalIds = cmLiveClient
            .modifyAssetRendition()
            .byAssetExternalId('x')
            .byRenditionExternalId('y')
            .withData({} as any)
            .getUrl();

        expect(urlByInternalIds).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/assets/x/renditions/y`
        );
        expect(urlByExternalIds).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/assets/external-id/x/renditions/external-id/y`
        );
    });

    it(`response should be instance of ModifyAssetRenditionResponse class`, () => {
        expect(response).toEqual(jasmine.any(AssetRenditionResponses.ModifyAssetRenditionResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`asset rendition properties should be mapped`, () => {
        const originalItem = rawResponse;
        const assetRendition = response.data;

        expect(assetRendition.assetId).toEqual(originalItem.asset_id);
        expect(assetRendition.externalId).toEqual(originalItem.external_id);
        expect(assetRendition.renditionId).toEqual(originalItem.rendition_id);
        expect(assetRendition.lastModified).toEqual(new Date(originalItem.last_modified));

        const transformation = assetRendition.transformation;
        const rawTransformation = originalItem.transformation;

        expect(transformation.customHeight).toEqual(rawTransformation.custom_height);
        expect(transformation.customWidth).toEqual(rawTransformation.custom_width);
        expect(transformation.fit).toEqual(rawTransformation.fit);
        expect(transformation.height).toEqual(rawTransformation.height);
        expect(transformation.width).toEqual(rawTransformation.width);
        expect(transformation.mode).toEqual(rawTransformation.mode);
        expect(transformation.x).toEqual(rawTransformation.x);
        expect(transformation.y).toEqual(rawTransformation.y);
    });
});
