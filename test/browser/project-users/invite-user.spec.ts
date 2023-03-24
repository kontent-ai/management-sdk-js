import { ProjectUserModels, ProjectUsersResponses } from '../../../lib';
import * as responseJson from '../fake-responses/project-users/fake-invite-user.spec.json';
import { cmLiveClient, getTestClientWithJson, testEnvironmentId } from '../setup';

describe('Invite user', () => {
    let response: ProjectUsersResponses.InviteUserResponse;

    beforeAll(async () => {
        response = await getTestClientWithJson(responseJson)
            .inviteUser()
            .withData({
                email: 'x@email.com',
                collection_groups: [
                    {
                        collections: [
                            {
                                id: 'colId'
                            }
                        ],
                        roles: [
                            {
                                id: 'roleId',
                                languages: [
                                    {
                                        id: 'langId'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            })
            .toPromise();
    });

    it(`url should be correct`, () => {
        const url = cmLiveClient
            .inviteUser()
            .withData({
                email: 'y',
                collection_groups: []
            })
            .getUrl();

        expect(url).toEqual(`https://manage.kontent.ai/v2/projects/${testEnvironmentId}/users`);
    });

    it(`response should be instance of InviteUserResponse class`, () => {
        expect(response).toEqual(jasmine.any(ProjectUsersResponses.InviteUserResponse));
    });

    it(`response should contain debug data`, () => {
        expect(response.debug).toBeDefined();
    });

    it(`response should contain data`, () => {
        expect(response.data).toBeDefined();
    });

    it(`collection properties should be mapped`, () => {
        expect(response.data.userId).toEqual(responseJson.user_id);
        response.data.collectionGroups.forEach((m) => {
            expect(m).toEqual(jasmine.any(ProjectUserModels.CollectionGroup));
        });
    });
});
