import { ElementModels, LanguageVariantResponses, SharedModels } from '../../../lib';
import * as jsonResponse from '../fake-responses/language-variants/fake-view-language-variant.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('View language variant published', () => {
    let response: LanguageVariantResponses.ViewLanguageVariantResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(jsonResponse)
            .viewLanguageVariant()
            .byItemCodename('x')
            .byLanguageCodename('x')
            .published()
            .toPromise();
    });

    it(`url should be correct`, () => {
        const codenameUrlWithCodenameLanguage = cmClient
            .viewLanguageVariant()
            .byItemCodename('xCodename')
            .byLanguageCodename('xLanguageCodename')
            .published()
            .getUrl();
        const internalIdUrlWithCodenameLanguage = cmClient
            .viewLanguageVariant()
            .byItemId('xItemId')
            .byLanguageCodename('xLanguageCodename')
            .published()
            .getUrl();
        const externalIdUrlWithCodenameLanguage = cmClient
            .viewLanguageVariant()
            .byItemExternalId('XItemExternal')
            .byLanguageCodename('xLanguageCodename')
            .published()
            .getUrl();

        const codenameUrlWithIdLanguage = cmClient
            .viewLanguageVariant()
            .byItemCodename('xCodename')
            .byLanguageId('xLanguageId')
            .published()
            .getUrl();
        const internalIdUrlWithIdLanguage = cmClient
            .viewLanguageVariant()
            .byItemId('xItemId')
            .byLanguageId('xLanguageId')
            .published()
            .getUrl();
        const externalIdUrlWithIdLanguage = cmClient
            .viewLanguageVariant()
            .byItemExternalId('XItemExternal')
            .byLanguageId('xLanguageId')
            .published()
            .getUrl();

        expect(codenameUrlWithCodenameLanguage).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/codename/xCodename/variants/codename/xLanguageCodename/published`
        );
        expect(internalIdUrlWithCodenameLanguage).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/xItemId/variants/codename/xLanguageCodename/published`
        );
        expect(externalIdUrlWithCodenameLanguage).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/external-id/XItemExternal/variants/codename/xLanguageCodename/published`
        );

        expect(codenameUrlWithIdLanguage).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/codename/xCodename/variants/xLanguageId/published`
        );
        expect(internalIdUrlWithIdLanguage).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/xItemId/variants/xLanguageId/published`
        );
        expect(externalIdUrlWithIdLanguage).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items/external-id/XItemExternal/variants/xLanguageId/published`
        );
    });

    it(`response should be instance of ViewLanguageVariantResponse class`, () => {
        expect(response).toEqual(jasmine.any(LanguageVariantResponses.ViewLanguageVariantResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data.elements).toBeDefined();
        expect(response.data.item).toBeDefined();
        expect(response.data.language).toBeDefined();
        expect(response.data.lastModified).toBeDefined();
    });

    it(`item properties should be mapped`, () => {
        const variant = response.data;
        const originalItem = jsonResponse;

        if (!originalItem) {
            throw Error(`Could not find original item with id '${variant.item.id}'`);
        }

        expect(variant.item.id).toEqual(originalItem.item.id);
        expect(variant.language.id).toEqual(originalItem.language.id);
        expect(variant.lastModified).toEqual(jasmine.any(Date));
        expect(variant.item).toEqual(jasmine.any(SharedModels.ReferenceObject));
        expect(variant.language).toEqual(jasmine.any(SharedModels.ReferenceObject));

        expect(variant.workflow.stepIdentifier.id).toEqual(originalItem.workflow.step_identifier.id);
        expect(variant.workflow.workflowIdentifier.id).toEqual(originalItem.workflow.workflow_identifier.id);

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
