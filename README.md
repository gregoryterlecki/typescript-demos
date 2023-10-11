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

## 006 - Generics

Generics allow you to wrap functionality around other types.

We've already been using generics in a way.
Recall how we have two separate ways to declare arrays explicitly.

```typescript
// using string[]
const nameList: string[] = ['Jane', 'Doe'];
// using Array<string>
const nameList2: Array<string> = ['John', 'Dough'];
```

The thing is, that regardless of whether an array contains numbers, strings, or any other data types, the functions we use to operate on the array are the same (`.push()`, `.pop()`, etc).

Referring to the example in `index.ts`; we didn't have to strongly type `a` and `b`. Even though we performed the same operation on two different arrays, the return type is different.

This is what generics is largely about; just like these arrays, generics are about wrapping common functionality around some other type.

The promises are a great example of this as well. We have two promises, which give us the same interface to operate on.

To make it more clear, let's make our own generic and reason about why we need a different syntax for typing.

Refer to `index.ts` in `/006_generics`, below line 16.

Let's use an identity function as an example. This just returns whatever is passed in.

To  make this function work, we could certainly just use the `any` keyword so that we're able to pass anything into the function, but then we'd lose typing information. If you hover over `result`, TypeScript says this type is `any` still, since the identity function returns `any` type.

To make this function better, we need a way to denote that the type returned is the same as the type we passed in.

`identity2` resolves this problem. In effect, we parameterize the type being given to the function, and use that parameter to denote that the return type is the same type.

Now, we can use this to create `result2`. If you hover your mouse over `result2`, you can see that it's typed as a string.

Generics help us type things that are inside functions, even when we may not know the type being given until we use the function. Generics allow us to create functions that are _generic_, but still enforce typing depending on what we pass in.

On line 28, we create a result variable. We don't have to type `result2`, because the function is able to tell TypeScript what the return value is. TypeScript only knows what the type of the return value is because the function was written such that the type of the return value is the same as whatever is passed in.

On line 29, we use what's called _type argument inference_, that is, since TypeScript already knows the type of the argument, TypeScript can automatically set `Type` using the type of what was passed in.

This is a quite short introduction to generics. I'll have to cover more advanced topics / use cases within using generic types in another section.

## 007 - Enums and Tuples
In TypeScript we're given two new data types. Enums and Tuples.

Tuples are fixed-size arrays. Or at least in the case fo TypeScript, their length is controlled in some way.

Enums are finite sets of values. Enums aren't natively supported in JavaScript

## 008 - Interfaces

Interfaces are very similar to types. Typically, the purpose of an interface is to enforce the "shape" of an object. In most common cases, you can can use `type` as a substitute for `interface`, since with `types` you can still describe the shape of an object. That being said, despite how similar they are, here I'll review the differences between the two and give use cases for either.

When I heard that types can be used for basically anything an interface can be used for, my first reaction was to never use interfaces since there's no point. But, perhaps types and interfaces, despite being so similar, are meant to communicate slightly different things to the engineer reading the code. Maybe interfaces are more for readability than anything else. Anyhow, let's step into this.

