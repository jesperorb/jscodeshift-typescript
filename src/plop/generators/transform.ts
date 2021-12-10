import { PlopGeneratorConfig } from 'node-plop';

export const transformGenerator: PlopGeneratorConfig = {
  description: 'Creates a transform with testfile and empty fixture fles',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Input name of transform',
    },
    {
      type: 'list',
      name: 'parser',
      choices: ['tsx', 'ts'],
    },
  ],
  actions: [
    {
      type: 'add',
      skipIfExists: true,
      path: '../transforms/{{name}}/{{name}}.ts',
      templateFile: 'templates/transform.hbs',
    },
    {
      type: 'add',
      skipIfExists: true,
      path: '../transforms/{{name}}/__tests__/{{name}}.test.ts',
      templateFile: 'templates/testfile.hbs',
    },
    {
      type: 'add',
      skipIfExists: true,
      path: '../transforms/{{name}}/__testfixtures__/default.input.{{parser}}',
    },
    {
      type: 'add',
      skipIfExists: true,
      path: '../transforms/{{name}}/__testfixtures__/default.output.{{parser}}',
    },
  ],
};
