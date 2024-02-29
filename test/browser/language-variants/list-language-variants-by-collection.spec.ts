import { ElementModels, LanguageVariantResponses, SharedModels } from '../../../lib';
import * as responseJson from '../fake-responses/language-variants/fake-list-language-variants-of-content-type.json';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('List language variants by collection', () => {
    let response: LanguageVariantResponses.ListLanguageVariantsByCollectionResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .listLanguageVariantsByCollection()
            .byCollectionCodename('y')
            .toPromise();
    });

    it(`url should be correct`, () => {
        const codenameUrl = cmLiveClient.listLanguageVariantsByCollection().byCollectionCodename('xCodename').getUrl();
        const idUrl = cmLiveClient.listLanguageVariantsByCollection().byCollectionId('xId').getUrl();
        const externalIdUrl = cmLiveClient
            .listLanguageVariantsByCollection()
            .byCollectionExternalId('xExternalId')
            .getUrl();

        expect(codenameUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/collections/codename/xCodename/variants`
        );
        expect(idUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/collections/xId/variants`);
        expect(externalIdUrl).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/collections/external-id/xExternalId/variants`
        );
    });

    it(`response should be instance of ListLanguageVariantsByCollectionResponse class`, () => {
        expect(response).toEqual(jasmine.any(LanguageVariantResponses.ListLanguageVariantsByCollectionResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data.items).toBeDefined();
    });

    it(`item properties should be mapped`, () => {
        expect(response.data.items).toBeDefined();
        expect(response.data.items.length).toEqual(responseJson.variants.length);
        expect(response.data.pagination).toEqual(jasmine.any(SharedModels.Pagination));

        response.data.items.forEach((variant) => {
            const originalItem = responseJson.variants.find((m) => m.item.id === variant.item.id);

            if (!originalItem) {
                throw Error(`Could not find original item with id '${variant.item.id}'`);
            }

            expect(variant.item).toBeDefined();
            expect(variant.language).toBeDefined();
            expect(variant.elements).toBeDefined();
            expect(variant.lastModified).toEqual(jasmine.any(Date));
            expect(variant.workflow.workflowIdentifier).toBeDefined();
            expect(variant.workflow.stepIdentifier.id).toEqual(originalItem.workflow.step_identifier.id);
            expect(variant.workflow.workflowIdentifier.id).toEqual(originalItem.workflow.workflow_identifier.id);

            expect(variant.item).toEqual(jasmine.any(SharedModels.ReferenceObject));
            expect(variant.language).toEqual(jasmine.any(SharedModels.ReferenceObject));

            variant.elements.forEach((element) => {
                const originalElement = originalItem.elements.find((m) => m.element.id === element.element.id);

                expect(element).toEqual(jasmine.any(ElementModels.ContentItemElement));

                if (!originalElement) {
                    throw Error(`Original element with id '${element.element.id}' was not found`);
                }

                if (Array.isArray(element.value)) {
                    element.value.forEach((elementReference) => {
                        expect(elementReference).toEqual(jasmine.any(SharedModels.ReferenceObject));
                    });
                } else {
                    expect(element.value).toEqual(originalElement.value as string | number);
                }
            });
        });
    });
});
