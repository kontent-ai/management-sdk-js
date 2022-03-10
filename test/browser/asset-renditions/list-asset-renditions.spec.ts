import { AssetRenditionResponses, SharedModels } from '../../../lib';
import * as rawResponse from '../fake-responses/assset-renditions/fake-list-asset-renditions.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('List asset renditions', () => {
    let response: AssetRenditionResponses.AssetRenditionsListResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(rawResponse).listAssetRenditions().byAssetId('x').toPromise();
    });

    it(`url should be correct`, () => {
        const urlByAssetId = cmLiveClient.listAssetRenditions().byAssetId('x').getUrl();
        const urlByExternalId = cmLiveClient.listAssetRenditions().byAssetExternalId('x').getUrl();

        expect(urlByAssetId).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/assets/x/renditions`);
        expect(urlByExternalId).toEqual(
            `https://manage.kontent.ai/v2/projects/${testProjectId}/assets/external-id/x/renditions`
        );
    });

    it(`response should be instance of AssetRenditionsListResponse class`, () => {
        expect(response).toEqual(jasmine.any(AssetRenditionResponses.AssetRenditionsListResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`pagination should be correct`, () => {
        expect(response.data.pagination).toEqual(jasmine.any(SharedModels.Pagination));
        expect(response.data.pagination.continuationToken).toEqual(rawResponse.pagination.continuation_token);
        expect(response.data.pagination.nextPage).toEqual(rawResponse.pagination.next_page);
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(Array.isArray(response.data.items)).toBeTruthy();
        expect(response.data.items.length).toEqual(rawResponse.asset_renditions.length);
        expect(response.data.items).toBeTruthy();
    });

    it(`asset rendition properties should be mapped`, () => {
        const assetRenditions = response.data.items;

        assetRenditions.forEach((assetRendition) => {
            const originalItem = rawResponse.asset_renditions.find((m) => m.asset_id === assetRendition.assetId);

            if (!originalItem) {
                throw Error(`Invalid asset rendition with id '${assetRendition.assetId}'`);
            }

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
});
