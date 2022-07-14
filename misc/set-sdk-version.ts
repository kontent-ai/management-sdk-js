import { join } from 'path';
import { version, name } from '../package.json';
import { createSdkVersionFile } from './version-helper';

createSdkVersionFile(join(__dirname + '/../lib/sdk-info.generated.ts'), version, name, '@kontent-ai/core-sdk');
