# Typescript Demos

This is a simple repo that contains a number of small typescript programs, just to demonstrate a digestible amount of TypeScript concepts at a time. This is just for educational purposes, and provide a code-centric documentation of my learnings with TypeScript.

Following along with this walkthrough assumes you're using VSCode. I'm not sure what TypeScript development support other IDEs have.

Each subheading is named after the next mini program in the series.

Also, for better or for worse, each folder is essentially its own app with their own `package.json` files; so before working with the code in each folder, run `npm install` or `yarn install`.

## Introduction

TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript.

One of the biggest benefits of using TypeScript is the tooling you get from IDEs like VS Code. When using TypeScript in your project, your code will be automatically documented in the IDE so you will less often need to refer to online documentation about the libraries that you use.

The biggest value prop for Typescript is that the typescript compiler can catch bugs in advance, making refactoring much more efficient. After all, would you rather have silly bugs during development, or insanity-inducing errors on production?

Another really cool aspect about TypeScript is that you can tell the compiler to compile the typescript code into a variety of different javascript flavours; so it's easy to recompile your code for specific environments if need be.

For this reason, TypeScript code doesn't actually run anywhere. Remember; it has to be compiled. This means that the compiler will generate a `.js` file that has all the compiled code.

Now, let's explore typescript. Using the programs I've written.

## 001 - Typescript Intro

In this folder, all I have is a `package.json` with typescript installed.
This means we can run `npx tsc index.ts` to use the compiler included in the TypeScript package to compile our TypeScript code.

In this case, it's just a `console.log`.

So, try the following:
```bash
npx tsc index.ts # this compiles typescript code
node index.js    # runs the compiled program
```

Try changing the message in the `console.log`, recompiling, then running the program.

## 002 - Compiler Basics

There are actually a lot of options you can pass to `tsc`, but the most common way to specify these options is to create a `tsconfig.json` file, which will automatically get picked up when you run `tsc`.

There are a lot of options but here are the main ones you need to think about:

- `"target"`: Flavour of JS that your code will be compiled to.
- `"watch"`: Recompiles the code automatically whenever you save the file, so you don't have to keep recompiling your code every time you make changes. Although, this can only be specified through the command line.
- `"lib"`: Automatically includes typings for the dom, or es2017 for example.

Try changing the `"target"` field of the `tsconfig.json` file. Observe the effect on the compiled code!

Also, if you're using VS Code, try right clicking on the `url` variable declared on line 4 of the `index.ts` file, and click 'Go to Type Definition'. Because of explicit typing, VSCode can help you understand the structure and shape of data passing through your app.

Note: In this demo, when I tried to import lodash, at first I got the following error:
```
Cannot find module 'lodash'. Did you mean to set the 'moduleResolution' option to 'nodenext', or to add aliases to the 'paths' option?
```

To fix this, all I did was `yarn add @types/lodash`. This means that for typescript programs, to correctly import an installed module, you need to make sure that either the package ships with type declarations included, or install the types for that package using the community maintained types for each package (`@types/`).

## 003 - Typing Introduction

You can either implicitly or explicitly type things.

In this program, (named `program1.ts`), we get a compilation error when trying to compile it. Take a look at it, and see if VS code is giving you an error.
Try compiling it by running `npx tsc program1.ts` from the `003_typing_introduction` directory. You'll get the following error (although the compiler still generates a `program1.js` file):
```bash
➜  003_typing_introduction npx tsc program1.ts
program1.ts:2:1 - error TS2322: Type 'string' is not assignable to type 'number'.

2 age = '23'; // <- we get an error here because we're trying to assign a string to a variable with type "number".
  ~~~


Found 1 error in program1.ts:2
```

You can opt out of the type system by using the `any` type (refer to `program2.ts` for an example).
In general however, if you can strictly annotate your types, do it. Using `any` is pretty much never best practice.

## 004 - Custom Types

Custom types are declared with the special keyword `type` followed by a type name in Pascal case.

```typescript
type UserPreferences = {...}
```

In the `index.ts` file, name, age, and isActive will be required but we can specify any other values in the object under any string key we'd like.

TODO: go into detail about more annotation support that TypeScript comes with.
Put `?` immediately after a type to indicate an optional field. Go to the `index.ts` file in this section for an example.

## 005 - Typing Functions

For functions we can type annotate their parameters and their return values. Go to the index.ts file as an example.

In `index.ts`, we technically don't need to specify the return value of the function because the return type is deferred to the `Math.pow()` function, which has a `number` return value. You can however, annotate the return value as being a string, if the function does indeed return a string.

Sometimes your functions might not return anything, or it might have some kind of side effect. In that case, you can annotate the return value as being `void`.