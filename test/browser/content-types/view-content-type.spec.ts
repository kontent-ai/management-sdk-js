import { ContentTypeResponses, ContentTypeModels } from '../../../lib';
import * as viewContentTypeJson from '../fake-responses/content-types/fake-view-content-type.json';
import { cmLiveClient, getTestClientWithJson, testProjectId } from '../setup';


describe('View content type', () => {
    let response: ContentTypeResponses.ViewContentTypeResponse;

    beforeAll((done) => {
        getTestClientWithJson(viewContentTypeJson).viewContentType()
            .byTypeCodename('x')
            .toObservable()
            .subscribe(result => {
                response = result;
                done();
            });
    });

    it(`url should be correct`, () => {
        const urlByCodename = cmLiveClient.viewContentType().byTypeCodename('x').getUrl();
        const urlByInternalId = cmLiveClient.viewContentType().byTypeId('y').getUrl();
        const urlByExternalId = cmLiveClient.viewContentType().byTypeExternalId('c').getUrl();

        expect(urlByCodename).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/types/codename/x`);
        expect(urlByInternalId).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/types/y`);
        expect(urlByExternalId).toEqual(`https://manage.kontent.ai/v2/projects/${testProjectId}/types/external-id/c`);
    });

    it(`response should be instance of ViewContentTypeResponse class`, () => {
        expect(response).toEqual(jasmine.any(ContentTypeResponses.ViewContentTypeResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`content type properties should be mapped`, () => {
        const originalItem = viewContentTypeJson;
        const contentType = response.data;

        expect(contentType).toEqual(jasmine.any(ContentTypeModels.ContentType));
        expect(contentType.codename).toEqual(originalItem.codename);
        expect(contentType.externalId).toEqual(originalItem.external_id);
        expect(contentType.name).toEqual(originalItem.name);
        expect(contentType.lastModified).toEqual(new Date(originalItem.last_modified));
        expect(contentType.elements.length).toEqual(originalItem.elements.length);
        expect(Array.isArray(contentType.elements)).toBeTruthy();
        expect(contentType.contentGroups?.length).toEqual(originalItem.content_groups.length);

        for (const contentGroup of contentType.contentGroups ?? []) {
            const originalGroup = originalItem.content_groups.find(m => m.id === contentGroup.id);
            if (!originalGroup) {
                throw Error(`Invalid content group with id '${contentGroup.id}'`);
            }

            expect(contentGroup).toEqual(jasmine.any(ContentTypeModels.ContentTypeGroup));
            expect(contentGroup.codename).toEqual(originalGroup.codename);
            expect(contentGroup.externalId).toEqual(originalGroup.external_id);
            expect(contentGroup.name).toEqual(originalGroup.name);
        }

        contentType.elements.forEach(element => {

            const originalElement = originalItem.elements.find(m => m.id === element.id);
            if (!originalElement) {
                throw Error(`Invalid element with id '${element.id}'`);
            }

            expect(element.codename).toEqual(originalElement.codename);
            expect(element.name).toEqual(originalElement.name);
            expect(element.type.toString().toLowerCase()).toEqual(originalElement.type.toLowerCase());
        });
    });


});


