import { ContentTypeSnippetResponses, SharedModels, ContentTypeSnippetModels } from '../../../lib';
import * as listContentTypesJson from '../fake-responses/content-type-snippets/fake-list-content-type-snippets.json';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('List content type snippets', () => {
    let response: ContentTypeSnippetResponses.ContentTypeSnippetListResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(listContentTypesJson).listContentTypeSnippets().toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient.listContentTypeSnippets().getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/snippets`);
    });

    it(`response should be instance of ContentTypeSnippetListResponse class`, () => {
        expect(response).toEqual(jasmine.any(ContentTypeSnippetResponses.ContentTypeSnippetListResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`pagination should be correct`, () => {
        expect(response.data.pagination).toEqual(jasmine.any(SharedModels.Pagination));
        expect(response.data.pagination.continuationToken).toEqual(listContentTypesJson.pagination.continuation_token);
        expect(response.data.pagination.nextPage).toEqual(listContentTypesJson.pagination.next_page);
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(Array.isArray(response.data.items)).toBeTruthy();
        expect(response.data.items.length).toEqual(listContentTypesJson.snippets.length);
        expect(response.data.items).toBeTruthy();
    });

    it(`content type snippet properties should be mapped`, () => {
        const contentTypeSnippets = response.data.items;

        contentTypeSnippets.forEach((contentTypeSnippet) => {
            const originalItem = listContentTypesJson.snippets.find((m) => m.id === contentTypeSnippet.id);

            if (!originalItem) {
                throw Error(`Invalid content type snippet with id '${contentTypeSnippet.id}'`);
            }

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
});
