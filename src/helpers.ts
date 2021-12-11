import { jsxAttribute, jsxIdentifier, jsxExpressionContainer, identifier, JSXAttribute } from "jscodeshift"

export const JSXProperty = (name: string, value: string): JSXAttribute => {
  return jsxAttribute(
    jsxIdentifier(name),
    jsxExpressionContainer(identifier(value))
  )
}
