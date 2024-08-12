import { AssetFolderModels, AssetFolderResponses } from '../../../lib';
import * as responseJson from '../fake-responses/asset-folders/fake-list-asset-folders.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('List asset folders', () => {
    let response: AssetFolderResponses.AssetFoldersListResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).listAssetFolders().toPromise();
    });

    it(`url should be correct`, () => {
        const listUrl = cmClient.listAssetFolders().getUrl();

        expect(listUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/folders`);
    });

    it(`response should be instance of AssetFoldersListResponse class`, () => {
        expect(response).toEqual(jasmine.any(AssetFolderResponses.AssetFoldersListResponse));
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

        response.data.items.forEach((m) => {
            // find original item
            const originalItem = responseJson.folders.find((s) => s.id === m.id);

            if (!originalItem) {
                throw Error(`Asset folder with id '${m.id}' was not found in fake response`);
            }

            expect(m).toEqual(jasmine.any(AssetFolderModels.AssetFolder));
            expect(m.id).toEqual(originalItem.id);
            expect(m.codename).toEqual(originalItem.codename);
            expect(m.name).toEqual(originalItem.name);
            expect(m.externalId).toEqual(originalItem.external_id);
            expect(m.folders).toEqual(jasmine.any(Array));

            for (const nestedFolder of m.folders) {
                const originalNestedFolder = originalItem.folders.find((s) => s.id === nestedFolder.id);

                if (!originalNestedFolder) {
                    throw Error(`Nested Asset folder with id '${m.id}' was not found in fake response`);
                }

                expect(nestedFolder).toEqual(jasmine.any(AssetFolderModels.AssetFolder));
                expect(nestedFolder.id).toEqual(originalNestedFolder.id);
                expect(nestedFolder.name).toEqual(originalNestedFolder.name);
                expect(nestedFolder.externalId).toEqual(originalNestedFolder.external_id);
                expect(nestedFolder.folders).toEqual(jasmine.any(Array));
                expect(nestedFolder.codename).toEqual(originalNestedFolder.codename);
            }
        });
    });
});
