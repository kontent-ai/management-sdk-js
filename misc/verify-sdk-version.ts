import { sdkInfo } from '../lib/sdk-info.generated';
import { verifySdkVersion } from './version-helper';
import { version } from '../package.json';

verifySdkVersion(sdkInfo, version);
