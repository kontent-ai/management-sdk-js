import { writeFile } from 'fs';
import { red, green, cyan, yellow } from 'colors/safe';

export function verifySdkVersion(sdkInfo: any, versionInPackage: string): void {
    if (sdkInfo.version !== versionInPackage) {
        const msg =
            "Versions of '" +
            sdkInfo.name +
            "' SDK don't match. Lib version is '" +
            sdkInfo.version +
            "' while package version is '" +
            versionInPackage +
            "'. Please make sure to use identical versions.";
        throw Error(red(msg));
    } else {
        console.log(green("Version check successful for '" + sdkInfo.version + "' and package '" + sdkInfo.name + "'"));
    }
}

export function createSdkVersionFile(filePath: string, appVersion: string, packageName: string, importFrom: string): void {
    console.log(cyan('\nCreating SDK version file'));

    const src = `
import { ISDKInfo } from '${importFrom}';
export const sdkInfo: ISDKInfo = {
    host: 'npmjs.com',
    version: '${appVersion}',
    name: '${packageName}'
};
`;

    // ensure version module pulls value from package.json
    writeFile(filePath, src, function (err) {
        if (err) {
            return console.log(red(err.message));
        }

        console.log(green(`Updating application version ${yellow(appVersion)}`));
        console.log(`${green('Writing version module to ')}${yellow(filePath)}\n`);
    });
}
