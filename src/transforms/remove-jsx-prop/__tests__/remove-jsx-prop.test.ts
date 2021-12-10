import { defineTest } from 'jscodeshift/src/testUtils';

defineTest(
  __dirname,
  'remove-jsx-prop',
  {
    element: 'div',
    property: 'onClick',
  },
  // this matches with '__testfixtures__/remove-jsx-prop/default.{input,output}.tsx'
  'default',
  {
    parser: 'tsx',
  }
);

defineTest(
  __dirname,
  'remove-jsx-prop',
  {
    element: 'div',
    property: 'lang',
  },
  // this matches with '__testfixtures__/remove-jsx-prop/multiline.{input,output}.tsx'
  'multiline',
  {
    parser: 'tsx',
  }
);
