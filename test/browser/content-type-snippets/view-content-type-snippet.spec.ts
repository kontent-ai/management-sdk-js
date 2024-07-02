import { ContentTypeSnippetModels, ContentTypeSnippetResponses } from '../../../lib';
import * as responseJson from '../fake-responses/content-types/fake-view-content-type.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('View content type snippet', () => {
    let response: ContentTypeSnippetResponses.ViewContentTypeSnippetResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson).viewContentTypeSnippet().byTypeCodename('xxx').toPromise();
    });

    it(`url should be correct`, () => {
        const urlByCodename = cmClient.viewContentTypeSnippet().byTypeCodename('x').getUrl();
        const urlByInternalId = cmClient.viewContentTypeSnippet().byTypeId('y').getUrl();
        const urlByExternalId = cmClient.viewContentTypeSnippet().byTypeExternalId('c').getUrl();

        expect(urlByCodename).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/snippets/codename/x`);
        expect(urlByInternalId).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/snippets/y`);
        expect(urlByExternalId).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/snippets/external-id/c`
        );
    });

    it(`response should be instance of ViewContentTypeSnippetResponse class`, () => {
        expect(response).toEqual(jasmine.any(ContentTypeSnippetResponses.ViewContentTypeSnippetResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`content type snippet properties should be mapped`, () => {
        const originalItem = responseJson;
        const contentTypeSnippet = response.data;

        expect(contentTypeSnippet).toEqual(jasmine.any(ContentTypeSnippetModels.ContentTypeSnippet));
        expect(contentTypeSnippet.codename).toEqual(originalItem.codename);
        expect(contentTypeSnippet.name).toEqual(originalItem.name);
        expect(contentTypeSnippet.lastModified).toEqual(new Date(originalItem.last_modified));
        expect(contentTypeSnippet.elements.length).toEqual(originalItem.elements.length);
        expect(Array.isArray(contentTypeSnippet.elements)).toBeTruthy();

        contentTypeSnippet.elements.forEach((element) => {
            const originalElement = originalItem.elements.find((m) => m.id === element.id);
            if (!originalElement) {
                throw Error(`Invalid element with id '${element.id}'`);
            }

            // all element properties should be identical
            for (const key of Object.keys(element)) {
                const mappedElementValue = (element as any)[key];
                const originalElementValue = (originalElement as any)[key];
                expect(mappedElementValue).toEqual(originalElementValue);
            }
        });
    });
});
