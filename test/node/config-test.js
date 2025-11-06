const assert = require('assert');
const { ManagementClient } = require('../../dist/cjs/index');

describe('#Configuration tests', () => {

    it('Should create client with logErrorsToConsole set to false', () => {
        const client = new ManagementClient({
            apiKey: 'test-api-key',
            environmentId: 'test-environment-id',
            logErrorsToConsole: false
        });

        assert.ok(client);
    });

    it('Should create client with logErrorsToConsole set to true', () => {
        const client = new ManagementClient({
            apiKey: 'test-api-key',
            environmentId: 'test-environment-id',
            logErrorsToConsole: true
        });

        assert.ok(client);
    });

    it('Should create client with logErrorsToConsole not specified (default behavior)', () => {
        const client = new ManagementClient({
            apiKey: 'test-api-key',
            environmentId: 'test-environment-id'
        });

        assert.ok(client);
    });

});
