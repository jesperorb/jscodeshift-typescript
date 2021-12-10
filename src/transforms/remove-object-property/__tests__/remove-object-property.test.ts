import { defineTest } from 'jscodeshift/src/testUtils';

defineTest(__dirname, 'remove-object-property', {}, 'default', {
  parser: 'ts',
});
