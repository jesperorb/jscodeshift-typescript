import { Core } from 'jscodeshift';
import { customCollectionMethods } from './methods';

/**
 * Registers all custom methods. Calling this instead
 * of directly registering methods solves the problem
 * of methods being registered twice
 */
export function registerCustomMethods(jscodeshift: Core) {
  jscodeshift.registerMethods(customCollectionMethods);
}
