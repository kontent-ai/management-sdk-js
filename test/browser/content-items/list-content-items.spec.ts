import { IHeader } from '@kontent-ai/core-sdk';
import { ContentItemResponses } from '../../../lib';
import * as listingResponseJson from '../fake-responses/content-items/fake-list-content-items.json';
import { cmClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('List content items', () => {
    let response: ContentItemResponses.ContentItemsResponse;
    const headers: IHeader[] = [];

    beforeAll(async () => {
        const query = getTestClientWithJson(listingResponseJson).listContentItems().xContinuationToken('wda');

        headers.push(...query.getHeaders());

        response = await query.toPromise();
    });

    it(`x-continuation header should be set`, () => {
        const continuationHeader = headers.find((m) => m.header.toLowerCase() === 'x-continuation'.toLowerCase());

        expect(continuationHeader).toBeDefined();
        expect(continuationHeader ? continuationHeader.value : '').toEqual('wda');
    });

    it(`url should be correct`, () => {
        const listUrl = cmClient.listContentItems().getUrl();

        expect(listUrl).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/items`);
    });

    it(`response should be instance of ContentItemsResponse class`, () => {
        expect(response).toEqual(jasmine.any(ContentItemResponses.ContentItemsResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
        expect(response.data.pagination).toBeDefined();
    });

    it(`pagiantion should be correct`, () => {
        expect(response.data.pagination.continuationToken).toEqual(listingResponseJson.pagination.continuation_token);
        expect(response.data.pagination.nextPage).toEqual(listingResponseJson.pagination.next_page);
    });

    it(`item properties should be mapped`, () => {
        expect(response.data.items).toBeDefined();
        expect(Array.isArray(response.data.items)).toBeTruthy();
        expect(response.data.items.length).toBeGreaterThan(0);

        response.data.items.forEach((m) => {
            expect(m.codename).toBeDefined();
            expect(m.id).toBeDefined();
            expect(m.lastModified).toBeDefined();
            expect(m.name).toBeDefined();
            expect(m.type).toBeDefined();
            expect(m.type.id).toBeDefined();
            expect(m.lastModified).toEqual(jasmine.any(Date));
            expect(m.collection.id).toBeDefined();
            expect(m.spaces).toBeDefined();
        });
    });
});
