# Assignment: Problem Solving with TypeScript & OOP

**Batch:** B8A1 · **Modules covered:** 1–3 (types, functions, generics, Promises, OOP)

## Overview

This repository contains my solutions to the eight TypeScript problem-solving tasks, plus two technical blog posts on core TypeScript concepts.

All code lives in a single file, `solutions.ts`, with no `console.log` calls and no sample test calls — every function and method simply returns its value. Every parameter, return type, and class member is explicitly typed, `any` is never used, and the file compiles cleanly in strict mode.

What each problem covers:

| # | Function / Type | Concept |
|---|-----------------|---------|
| 1 | `multiplyValue` | Optional parameters, default fallback, correct handling of `0` |
| 2 | `processInput` | Union types and `typeof` type narrowing |
| 3 | `formatCoordinate` | `readonly` tuple parameters, exact string formatting |
| 4 | `concatenateArrays<T>` | Generics with rest parameters (`...arrays: T[][]`) |
| 5 | `Course`, `getPopularCourses` | Interfaces, filtering without mutating the input array |
| 6 | `pluckValues<T, K extends keyof T>` | Generics with the `keyof` constraint |
| 7 | `Employee`, `Manager` | OOP inheritance with `protected` and `private` modifiers |
| 8 | `validateAgeAsync` | `Promise<string>`, `setTimeout`, rejection with an `Error` |

## File Structure

```
├── solutions.ts          # all eight solutions
├── type-vs-interface.md  # Blog 1
├── type-narrowing.md     # Blog 2
└── README.md             # this file
```

## Blog Posts

1. **[Type Aliases vs Interfaces in TypeScript: How to Choose](./type-vs-interface.md)** — how `type` and `interface` differ (declaration merging, `extends` vs intersections, unions and tuples), and a practical rule for choosing between them.
2. **[Type Narrowing in TypeScript: `typeof`, `instanceof`, and `in`](./type-narrowing.md)** — how TypeScript shrinks a union inside a conditional, with worked examples of all three guards.

## Running the Code

Type-check the solutions without installing anything globally:

```bash
npx -p typescript tsc --strict --noEmit solutions.ts
```

No output means there are no type errors.

To try the functions, create a separate `test.ts` next to `solutions.ts` and import from it:

```ts
// test.ts
import { multiplyValue, Manager, validateAgeAsync } from "./solutions";

console.log(multiplyValue(7, 0));                    // 0
console.log(new Manager("Alice", 50000, "Engineering").getRoleInfo());
// "Manager of Engineering: Alice"

validateAgeAsync(20).then(console.log);              // "Access Granted" (after 1s)
```

Then compile and run both files:

```bash
npx -p typescript tsc --strict test.ts solutions.ts
node test.js
```
