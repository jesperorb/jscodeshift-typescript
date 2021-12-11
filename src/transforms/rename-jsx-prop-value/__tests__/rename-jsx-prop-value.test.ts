import { defineTest } from 'jscodeshift/src/testUtils';

defineTest(
  __dirname,
  'rename-jsx-prop-value',
  {},
  'default',
  {
    parser: 'tsx',
  }
);
