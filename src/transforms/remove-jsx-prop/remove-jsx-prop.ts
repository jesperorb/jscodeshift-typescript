import { Options, FileInfo, API } from 'jscodeshift';
import { defaultSourceConfig } from '../../config';
import { RemovePropertyOptions } from '../../types/options';

/**
 * This function is called when running the file from the CLI or via
 * the tests
 * @param options Core options, if sending custom options be sure to
 * create a custom type and join it together with the default options
 */
export default function transform(
  file: FileInfo,
  { jscodeshift }: API,
  options: Options & RemovePropertyOptions
) {
  // Saving for shorthand, less to write further down
  const j = jscodeshift;
  // Extract any options for this specific transformer
  // (passed in via cli: `--element="div"` or third argument in tests)
  const { element, property } = options;
  // Convert to AST-tree
  return j(file.source)
    .findJSXElements(element)
    .find(j.JSXAttribute, {
      name: {
        type: 'JSXIdentifier',
        name: property,
      },
    })
    // Remove property (key + value in this case) 
    .remove()
    // Convert back to source file. Trailingcomma option
    // depends on setup, prettier etc how the output should be.
    // Can make a differens in tests as input and output 
    // are diffed as snapshots
    .toSource(defaultSourceConfig);
}
