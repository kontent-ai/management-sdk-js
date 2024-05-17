import { AssetModels, AssetResponses, SharedModels } from '../../../lib';
import * as addAssetResponseJson from '../fake-responses/assets/fake-add-asset.json';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Add asset', () => {
    let response: AssetResponses.AddAssetResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(addAssetResponseJson)
            .addAsset()
            .withData((builder) => {
                return {
                    descriptions: [],
                    codename: 'x',
                    collection: {
                        reference: {
                            codename: 'y'
                        }
                    },
                    external_id: 'x',
                    folder: {
                        id: 'x'
                    },
                    title: 'Title',
                    elements: [
                        builder.taxonomyElement({
                            element: {
                                codename: 'taxonomy-categories'
                            },
                            value: [
                                {
                                    codename: 'coffee'
                                },
                                {
                                    codename: 'brewing'
                                }
                            ]
                        })
                    ],
                    file_reference: {
                        id: 'x',
                        type: 'internal'
                    }
                };
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient
            .addAsset()
            .withData((builder) => {
                return {
                    descriptions: [],
                    file_reference: {
                        id: 'x',
                        type: 'internal'
                    },
                    collection: { reference: null }
                };
            })
            .getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/assets`);
    });

    it(`response should be instance of AddAssetResponse class`, () => {
        expect(response).toEqual(jasmine.any(AssetResponses.AddAssetResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data).toEqual(jasmine.any(AssetModels.Asset));
    });

    it(`asset properties should be mapped`, () => {
        const originalItem = addAssetResponseJson;
        const asset = response.data;

        expect(asset.fileName).toEqual(originalItem.file_name);
        expect(asset.type).toEqual(originalItem.type);
        expect(asset.lastModified).toEqual(new Date(originalItem.last_modified));
        expect(asset.imageHeight).toEqual(originalItem.image_height);
        expect(asset.title).toEqual(originalItem.title);
        expect(asset.codename).toEqual(originalItem.codename);
        expect(asset.externalId).toEqual(originalItem.external_id);
        expect(asset.imageWidth).toEqual(originalItem.image_width);
        expect(asset.elements).toEqual(originalItem.elements);
        expect(asset.size).toEqual(originalItem.size);
        expect(asset.fileReference).toEqual(jasmine.any(AssetModels.AssetFileReference));
        expect(asset.fileReference.id).toEqual(originalItem.file_reference.id);
        expect(asset.fileReference.type).toEqual(originalItem.file_reference.type);
        expect(asset.collection).toEqual(originalItem.collection);

        asset.descriptions.forEach((s) => {
            expect(s.description).toBeDefined();
            expect(s.language).toEqual(jasmine.any(SharedModels.ReferenceObject));
        });
    });
});
