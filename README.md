# JSCodeShift TypeScript (JSX)

> [JsCodeShift](https://github.com/facebook/jscodeshift) is a automatic code refactoring tool. It converts files into AST, tinkers with the tree and the puts it back together into a nice new file.

This repo contains examples on how to use JSCodeShift in combination with TypeScript and JSX. Test it with Jest and generate scaffolding for new transform with [PlopJS](https://github.com/plopjs/plop).

[ASTExplorer](https://astexplorer.net/) is a great tool for exploring how the AST looks like. (set parser to `@typescript-eslint/parser` instead of `acorn` to enable JSX and TypeScript)

## Get started

Clone the repo and install dependencies

```bash
yarn
```

### Running via cli

You can run the included example on a file of your choice via the following command. Either create a new file or run it against on any of the `.input.`-files. This is the same process as running the tests.

```bash
npx jscodeshift --parser=tsx -t ./src/transforms/remove-jsx-prop/remove-jsx-prop.ts {filepath to files you want to run transform on}
```

## Test

```bash
yarn test
```

Each transform has two textfixtures, on `input` and one `output`. `defineTest` sets up to automatically do snapshot testing between these two files.

## Generate transformer

```bash
yarn plop
```

## Dependencies

- `jscodeshift` to run the codemods
- `esbuild`/`esbuild-jest` to run tests in TypeScript (faster than ts-jest)
- `plop` to generate scaffolding
- `ts-node` to run `plop` with TypeScript files. 

## Todo

- Set up interface merging for `Collection` as types are not added when using `.registerMethods()` making custom methods hard to handle in typescript
