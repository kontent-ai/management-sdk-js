import { AssetRenditionResponses } from '../../../lib';
import * as rawResponse from '../fake-responses/assset-renditions/fake-view-asset-rendition.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('View asset rendition', () => {
    let response: AssetRenditionResponses.ViewAssetRenditionResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(rawResponse)
            .viewAssetRendition()
            .byAssetId('x')
            .byRenditionId('y')
            .toPromise();
    });

    it(`url should be correct`, () => {
        const urlByInternalIds = cmClient.viewAssetRendition().byAssetId('x').byRenditionId('y').getUrl();
        const urlByExternalIds = cmClient
            .viewAssetRendition()
            .byAssetExternalId('x')
            .byRenditionExternalId('y')
            .getUrl();

        expect(urlByInternalIds).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/assets/x/renditions/y`
        );
        expect(urlByExternalIds).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/assets/external-id/x/renditions/external-id/y`
        );
    });

    it(`response should be instance of ViewAssetRenditionResponse class`, () => {
        expect(response).toEqual(jasmine.any(AssetRenditionResponses.ViewAssetRenditionResponse));
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
