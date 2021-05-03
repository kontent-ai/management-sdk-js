import { flatMap, map } from 'rxjs/operators';

import { BaseResponses, ContentItemResponses } from '../../../lib';
import { cmLiveClient, useLiveTesting } from '../setup';

if (useLiveTesting()) {
    describe('List all query live', () => {
        let response: BaseResponses.ContentManagementListAllResponse<any, any>;

        beforeAll(done => {
            const query = cmLiveClient.listContentItems().withListQueryConfig({
                delayBetweenRequests: 500,
                responseFetched: (listResponse, token) => {
                }
            });

            query.toAllObservable().subscribe(result => {
                response = result;
                done();
            });
        });

        it(`response should be instance of ContentManagementListAllResponse class`, () => {
            expect(response).toEqual(jasmine.any(BaseResponses.ContentManagementListAllResponse));
        });

        it(`response should contain original responses`, () => {
            expect(response.responses).toBeDefined();
            expect(response.responses.length).toBeGreaterThan(0);

            for (const originalResponse of response.responses) {
                expect(originalResponse).toEqual(jasmine.any(ContentItemResponses.ContentItemsResponse));
            }
        });

        it(`response should contain data`, () => {
            expect(response.data).toBeDefined();
            expect(response.data.items).toBeDefined();
        });

        it(`items from responses should be joined`, () => {
            let count = 0;
            for (const originalResponse of response.responses) {
                count += originalResponse.data.items.length;
            }

            console.log(response);
            expect(count).toEqual(response.data.items.length);
        });
    });
}

export function createSampleData(): void {
    for (let i = 0; i < 100; i++) {
        const query = cmLiveClient
            .addContentItem()
            .withData({
                name: 'item_' + i,
                type: {
                    codename: 'testitem'
                }
            })
            .toObservable()
            .pipe(
                flatMap(responseA => {
                    return cmLiveClient
                        .upsertLanguageVariant()
                        .byItemId(responseA.data.id)
                        .byLanguageCodename('en')
                        .withData(builder => [
                            {
                                element: {
                                    codename: 'title'
                                },
                                value: 'test value ' + i
                            }
                        ])
                        .toObservable();
                }),
                flatMap(responseB => {
                    // publish item
                    if (!responseB.data.item.id) {
                        throw Error(`Invalid id`);
                    }
                    return cmLiveClient
                        .publishLanguageVariant()
                        .byItemId(responseB.data.item.id)
                        .byLanguageCodename('en')
                        .withoutData()
                        .toObservable();
                }),
                map(() => {
                    // finished
                })
            );

        query.subscribe();
    }
}
