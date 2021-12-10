import {
  Collection,
  Identifier,
  ObjectProperty,
  JSXAttribute,
} from 'jscodeshift';

/**
 * Extending the default collection so that TypeScript is satisfied
 */
declare module 'jscodeshift/src/Collection' {
  interface Collection<N> {
    findJSXElementProperty: typeof customCollectionMethods.findJSXElementProperty;
    findObjectPropertiesByName: typeof customCollectionMethods.findObjectPropertiesByName;
  }
}

export const customCollectionMethods = {
  findJSXElementProperty: function (
    this: Collection<any>,
    element: string,
    property: string
  ): Collection<JSXAttribute> {
    return this.findJSXElements(element).find(JSXAttribute, {
      name: {
        type: 'JSXIdentifier',
        name: property,
      },
    });
  },
  findObjectPropertiesByName: function (
    this: Collection<any>,
    propertyNames: string[]
  ): Collection<ObjectProperty> {
    return this.find(ObjectProperty).filter((node) => {
      const prop = node.value.key as Identifier;
      return propertyNames.includes(prop.name);
    });
  },
};
