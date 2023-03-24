import { ContentTypeSnippetResponses } from '../../../lib';
import * as responseJson from '../fake-responses/content-type-snippets/fake-modify-content-type-snippet.json';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Modify content type snippet', () => {
    let response: ContentTypeSnippetResponses.ModifyContentTypeSnippetResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .modifyContentTypeSnippet()
            .byTypeCodename('x')
            .withData([])
            .toPromise();
    });

    it(`url should be correct`, () => {
        const urlByCodename = cmLiveClient.modifyContentTypeSnippet().byTypeCodename('x').withData([]).getUrl();
        const urlByInternalId = cmLiveClient.modifyContentTypeSnippet().byTypeId('y').withData([]).getUrl();
        const urlByExternalId = cmLiveClient.modifyContentTypeSnippet().byTypeExternalId('c').withData([]).getUrl();

        expect(urlByCodename).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/snippets/codename/x`);
        expect(urlByInternalId).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/snippets/y`);
        expect(urlByExternalId).toEqual(
            `https://manage.kontent.ai/v2/projects/${testEnvironmentId}/snippets/external-id/c`
        );
    });

    it(`response should be instance of ModifyContentTypeSnippetsResponse class`, () => {
        expect(response).toEqual(jasmine.any(ContentTypeSnippetResponses.ModifyContentTypeSnippetResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`content type properties should be mapped`, () => {
        const originalItem = responseJson;
        const contentType = response.data;

        expect(contentType.codename).toEqual(originalItem.codename);
        expect(contentType.name).toEqual(originalItem.name);
        expect(contentType.lastModified).toEqual(new Date(originalItem.last_modified));
        expect(contentType.elements.length).toEqual(originalItem.elements.length);
        expect(Array.isArray(contentType.elements)).toBeTruthy();

        contentType.elements.forEach((element) => {
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
