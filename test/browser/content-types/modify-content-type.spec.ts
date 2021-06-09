import { ContentTypeResponses } from '../../../lib';
import * as responseJson from '../fake-responses/content-types/fake-modify-content-type.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';

describe('Modify content type', () => {
    let response: ContentTypeResponses.ModifyContentTypeResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .modifyContentType()
            .byTypeCodename('x')
            .withData([])
            .toPromise();
    });

    it(`url should be correct`, () => {
        const urlByCodename = cmLiveClient.modifyContentType().byTypeCodename('x').withData([]).getUrl();
        const urlByInternalId = cmLiveClient.modifyContentType().byTypeId('y').withData([]).getUrl();
        const urlByExternalId = cmLiveClient.modifyContentType().byTypeExternalId('c').withData([]).getUrl();

        expect(urlByCodename).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/types/codename/x`);
        expect(urlByInternalId).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/types/y`);
        expect(urlByExternalId).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/types/external-id/c`);
    });

    it(`response should be instance of ModifyContentTypeResponse class`, () => {
        expect(response).toEqual(jasmine.any(ContentTypeResponses.ModifyContentTypeResponse));
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
