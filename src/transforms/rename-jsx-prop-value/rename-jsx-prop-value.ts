import { FileInfo, API } from 'jscodeshift';
import { registerCustomMethods } from '../../plugins';
import { defaultSourceConfig } from '../../config';
import { JSXProperty } from '../../helpers';

const lookup: { [key: string]: string } = {
  small: '1',
  medium: '2',
  large: '3',
};

export default function transform(
  file: FileInfo,
  { jscodeshift }: API,
) {
  const j = jscodeshift;
  j.use(registerCustomMethods);
  return j(file.source)
    .findJSXElementProperty('Spacer', 'spacing')
    .replaceWith((nodePath) => {
      const node = nodePath.node.value;
      if (node?.type === 'StringLiteral') {
        return JSXProperty('spacing', lookup[node.value]);
      } else {
        return node;
      }
    })
    .toSource(defaultSourceConfig);
}
