import * as responseJson from '../fake-responses/projects/fake-project-information.json';
import { getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Edit urls', () => {
    const client = getTestClientWithJson(responseJson);

    it(`url to content item without element is correct`, () => {
        const url = client.createLanguageVariantEditUrl({
            languageCodename: 'x',
            variantId: 'y'
        });

        expect(url).toEqual(
            `https://app.kontent.ai/goto/edit-item/project/${testEnvironmentId}/variant-codename/x/item/y`
        );
    });

    it(`url to content item with element is correct`, () => {
        const url = client.createLanguageVariantEditUrl({
            languageCodename: 'x',
            variantId: 'y',
            elementCodename: 'z'
        });

        expect(url).toEqual(
            `https://app.kontent.ai/goto/edit-item/project/${testEnvironmentId}/variant-codename/x/item/y/element/z`
        );
    });

    it(`url to content item with element & nested item is correct`, () => {
        const url = client.createLanguageVariantEditUrl({
            languageCodename: 'x',
            variantId: 'y',
            elementCodename: 'z',
            nestedItemId: 'j',
            nestedItemElementCodename: 'k'
        });

        expect(url).toEqual(
            `https://app.kontent.ai/goto/edit-item/project/${testEnvironmentId}/variant-codename/x/item/y/element/z/item/j/element/k`
        );
    });
});
