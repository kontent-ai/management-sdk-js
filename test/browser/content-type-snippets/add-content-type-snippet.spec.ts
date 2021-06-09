import { ContentTypeSnippetResponses, ContentTypeSnippetModels } from '../../../lib';
import * as responseJson from '../fake-responses/content-type-snippets/fake-add-content-type-snippet.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Add content type snippet', () => {
    let response: ContentTypeSnippetResponses.AddContentTypeSnippetResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .addContentTypeSnippet()
            .withData((builder) => {
                return {
                    external_id: 'exId',
                    name: 'name',
                    elements: [
                        builder.numberElement({
                            type: 'number',
                            name: 'xNumber'
                        })
                    ]
                };
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient
            .addContentTypeSnippet()
            .withData({} as any)
            .getUrl();
        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/snippets`);
    });

    it(`response should be instance of AddContentTypeSnippetResponse class`, () => {
        expect(response).toEqual(jasmine.any(ContentTypeSnippetResponses.AddContentTypeSnippetResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`content type properties should be mapped`, () => {
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
