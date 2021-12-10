import { Options, FileInfo, API } from 'jscodeshift';
import { registerCustomMethods } from '../../plugins';
import { defaultSourceConfig } from '../../config';

export default function transform(
  file: FileInfo,
  { jscodeshift }: API,
  _options: Options
) {
  const j = jscodeshift;
  j.use(registerCustomMethods);
  return j(file.source)
    .findObjectPropertiesByName(['gender'])
    .remove()
    .toSource(defaultSourceConfig);
}
