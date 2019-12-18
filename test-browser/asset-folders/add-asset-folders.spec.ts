import { AssetFolderModels, AssetFolderResponses } from '../../lib';
import * as responseJson from '../fake-responses/asset-folders/fake-add-asset-folders.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Add asset folders', () => {
    let response: AssetFolderResponses.AddAssetFoldersResponse;

    beforeAll(done => {
        getTestClientWithJson(responseJson)
            .addAssetFolders()
            .withData({
                folders: [
                    {
                        external_id: 'x',
                        folders: [],
                        name: 'y'
                    }
                ]
            })
            .toObservable()
            .subscribe(result => {
                response = result;
                done();
            });
    });

    it(`url should be correct`, () => {
        const listUrl = cmLiveClient.addAssetFolders().withData({} as any).getUrl();

        expect(listUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/folders`);
    });

    it(`response should be instance of AddAssetFoldersResponse class`, () => {
        expect(response).toEqual(jasmine.any(AssetFolderResponses.AddAssetFoldersResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data.last_modified).toBeDefined();
    });

    it(`last_modified should be correct`, () => {
        expect(response.data.last_modified).toEqual(new Date(responseJson.last_modified));
    });

    it(`asset folder properties should be mapped`, () => {
        expect(response.data.items).toBeDefined();
        expect(Array.isArray(response.data.items)).toBeTruthy();
        expect(response.data.items.length).toBeGreaterThan(0);

        response.data.items.forEach(m => {
            // find original item
            const originalItem = responseJson.folders.find(s => s.id === m.id);

            if (!originalItem) {
                throw Error(`Asset folder with id '${m.id}' was not found in fake response`);
            }

            expect(m).toEqual(jasmine.any(AssetFolderModels.AssetFolder));
            expect(m.id).toEqual(originalItem.id);
            expect(m.name).toEqual(originalItem.name);
            expect(m.externalId).toEqual(originalItem.external_id);
            expect(m.folders).toEqual(jasmine.any(Array));

            for (const nestedFolder of m.folders) {
                const originalNestedFolder = originalItem.folders.find(s => s.id === nestedFolder.id);

                if (!originalNestedFolder) {
                    throw Error(`Nested Asset folder with id '${m.id}' was not found in fake response`);
                }

                expect(nestedFolder).toEqual(jasmine.any(AssetFolderModels.AssetFolder));
                expect(nestedFolder.id).toEqual(originalNestedFolder.id);
                expect(nestedFolder.name).toEqual(originalNestedFolder.name);
                expect(nestedFolder.externalId).toEqual(originalNestedFolder.external_id);
                expect(nestedFolder.folders).toEqual(jasmine.any(Array));
            }
        });
    });
});
