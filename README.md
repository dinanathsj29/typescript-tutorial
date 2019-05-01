<p align="center">
  <img src="_images_typescript_fundamentals_tutorial/ts_logo_1.png" alt="typescript logo" title="typescript logo" width="200" />
</p>

Typescript Fundamentals Beginners Tutorial
=====================
`TypeScript` is an open-source object-oriented language developed and maintained by `Microsoft`. It is a typed superset of JavaScript that compiles to plain JavaScript. Will learn/review the `new keywords-let, const` and `function/object syntax` also shows how the new `class, interface, module syntax` can be used with JavaScript library like Angular, React, Node. TypeScript is pure object oriented with classes, interfaces, modules, import, export and statically typed like C# or Java. The popular JavaScript framework Angular 2.x and above versions are written in TypeScript. Mastering TypeScript can help developers and programmers to write object-oriented programs and have them compiled to JavaScript, both on the server side and client side.

Prerequisites for current course / What you need to know
=====================
`TypeScript` introduces us to the newest language features that can be used in JavaScript code. Due to this, I assume you have some working knowledge/understanding of JavaScript. If you haven't, will recommend watching [JavaScript Essentials Tutorial for beginners](https://github.com/dinanathsj29/javascript-beginners-tutorial). Basic knowledge of JavaScript is required, having a good understanding of OOP concepts and advanced JavaScript is an added advantage. Finally, you will be using a bit of Angular.js, React.js, and Node.js but nothing that requires deep/advanced knowledge. 

Topics include ???
===================== 
1. [Course Introduction](#section-1-course-introduction)
2. [Introduction to Typescript](#section-2-introduction-to-typescript)
3. [Setting up Typescript Development Environment](#section-3-setting-up-typescript-development-environment)
4. [Typescript latest features-concepts](#section-4-typescript-latest-features-concepts)
5. [Reference](#section-5-reference)
6. [Whats Next Step?](#section-6-whats-next-step)

Section 1. Course Introduction
=====================
1.1. Welcome
---------------------
Hi All, I'm **`Dinanath Jayaswal, Senior UI/Web Developer and Adobe Certified Expert Professional`**, I wanna welcome you to `Typescript fundamentals beginners tutorial`. In this course/tutorial will go over how to start with using the Typescript features right with the bang. Will dive into the specifics of Typescript and new features it includes. We'll look at new keywords, syntax, and operators that can be used to simplify code structure. At the end we'll take a look at class, module syntax in Typescript and how that can be used immediately with very popular JavaScript library/frameworks like Angular, React, Node, etc. Let us explore and learn some pretty exciting stuff so let's go ahead and get started with `Typescript`.

`Typescript` will introduce us to the newest language features that can be used in JavaScript code - The Modern JavaScript.

1.2. Who is this for?
---------------------
This course is for anyone and everyone, Almost everyone! who is interested in boost skills and further career - by learning new latest programming/coding standards/features/syntaxes/keywords introduced in the latest version of JavaScript to become a hi-tech developer. Programmers/Developers coming from any language wants to make a career in Web Technologies can learn Typescript.

Section 2. Introduction to Typescript
=====================
2.1. What is Typescript?
---------------------
- Typescript is Open source/free, exciting, dynamic new development language, library from `Microsoft`
- TypeScript is a strongly typed, object oriented, compiled language
- It was designed and developed by `Anders Hejlsberg (designer of C#) at Microsoft` 
- `Typed superset of JavaScript` which Compiles to plain JavaScript
- It consists of variables Data Types string, number, boolean, etc. but it is optional
- One can write safer/meaningful/easily maintainable/scalable code
- The developer can Identify mistakes during development/compilation step (scope of the variable, function parameter, variable datatype mismatch, etc.)
- Angular latest version uses typescript as an official/primary development language
- `Typescript = ECMAScript 5 + 6 + 7 + Latest features`
- TypeScript is JavaScript plus some additional features, Typescript is a language that is meant to be compiled into JavaScript:
  - `Typescript => JavaScript` OR `.ts => .js`

2.2. Why Typescript?
---------------------
- Typescript got a similar syntax to JavaScript
- Typescript integrates easily into JavaScript projects
- TypeScript is extended JavaScript and superior to its other counterparts like `CoffeeScript` and `Dart` programming languages in a way that extends JavaScript
- Currently, it is used in many large projects and many libraries written/developed fully in Typescript:
  - `Google Angular 2.x` and greater version, 
  - `WinJS` (The Windows library for JavaScript) 
- The TypeScript transpiler provides the error-checking feature
- TypeScript comes with an optional static typing and types inference system through the `TLS (TypeScript Language Service)`
- Prevent bugs (data type)
- TypeScript supports Object Oriented Programming concepts like classes, interfaces, inheritance, etc.
- Increases the code quality, readability and makes it an easy to maintain and refactor the code base
- Also integrated with task runners like Grunt & Gulp
- Rapid growth and use

2.3. Components of TypeScript
---------------------
1. `Language` − syntax, keywords, and type annotations
2. `TSC TypeScript Compiler` − converts TypeScript to JavaScript equivalent
3. `TLS TypeScript Language Service` − Supports editor operations like static typing and type inference system, statement completion, code formatting, etc.

Section 3. Setting up Typescript Development Environment
=====================
3.1. Installing Node, NPM and Typescript
---------------------
- Install node from https://nodejs.org/en/
- Open up your terminal window/command prompt (`cmd, git bash, node command prompt`) to run some of node commands
- Verify and check node installation/version by using command: `node -v`
- install typescript globally by using command: `npm install -g typescript`
- Verify typescript Installation by command: `tsc` (tsc = typescript compiler)
- Verify typescript Installation and version both with command: `tsc -v` or `tsc --version`
- Install and use some text editor or IDE (Integrated Development Environment) like `Notepad++, Sublime Text, Adobe Brackets, Visual Studio Code` to type code

3.2. Write first Typescript code/program
---------------------
- Create a new folder to store all typescript/.ts example files
- Create a first .ts file and type basic javascript/typescript or valid javascript code
- Now by using node/npm command compile .ts file into .js, command: `tsc file.ts`
- Use type annotation to eliminate any data variable type error: `let name:string = 'Dinanath';`
- We can use/run .js files in browser or in NodeJs (node command to run any .js file: `node file.js`), NodeJs can not run/understand .ts file
- Use automatic compilation method using watch mode: `tsc file.ts --watch`

> **Syntax & Example**: `Typescript 3_2_ts_basics.ts`
```typescript
// by default typescript consider all files in a folder as a module, so variables defined in one file will be checked on the fly and throws an error: Cannot redeclare block-scoped variable - to solve issue use export {}

export {};

// write valid javascript, basic javascript/typescript
console.log('Welcome to typescript');
// ------------------------------

//type annotation to eliminate any data variable type error
let name:string = 'Dinanath';
//name=123; // error
console.log('My Name is: ' + name);
```

3.3. TypeScript Playground
---------------------
Write and test Typescript without download or install anything: https://www.typescriptlang.org/play

3.4. ScratchJS
---------------------
- Alternatively, Simply we can add/install a `Google Chrome Extention` named `Scratch JS`, an add-on for DevTools which integrates both the Traceur and Babel transpilers, allowing us to test out the new JS features coming with ES6/ES2015
- `Scratch JS` also supports `CoffeeScript`, `LiveScript` and more compile-to-JS languages will be added soon
- To install `Scratch JS` as a `Google Chrome Extention`:
  - In google chrome web store https://chrome.google.com/webstore/category/extensions?hl=en-GB or at https://www.google.com/ search for Scratch JS
  - From searched result select Scratch JS and click -> ADD to Chrome
- Once extension installed properly, open developer tool (F12, Fn12, Right Click on web page Inspect), click on ScratchJS - at left side type ES6 code and right side check ES5 output

Section 4. Typescript latest features-concepts
=====================
4.1. TypeScript - Basic Syntax
---------------------
Syntax is nothing but a set of rules for writing programs. A TypeScript program simply composed of:
- Statements and Expressions
- Variables
- Functions
- Comments
- Modules

4.2. Variable Declarations 
---------------------
- Many things what we do in plain JavaScript works exactly same with typescript (like declaring a variable with `var`)
- Typescript encourages programmers to use `let` and `const` keyword-based variables
- Vanilla JavaScript `var` and `scope` are tricky, they hoist also it has `global` and `functional` scope but not `block` level scope
- `let` and `const` variables have `block` level scope also they cannot be re-declared multiple times

Section 5. Reference
=====================
5.1. Websites / Blogs
---------------------
- Official website: http://www.typescriptlang.org/
- Source code: https://github.com/Microsoft/TypeScript  

5.2. Books
---------------------
- 

Section 6. What's Next Step?
=====================
Many Congratulations! You have done it. Thank you for joining me for `Typescript fundamentals for beginners`. I hope you will start checking/testing and incorporating these features into your code right away. I hope now you have a solid understanding of Typescript new features and usability. Your next step could be looking into [Typescript documentation](https://www.typescriptlang.org/docs/home.html). Now you are fully up to date and set to start with any latest javascript framework/library like Angular, React, Node, Vue.
