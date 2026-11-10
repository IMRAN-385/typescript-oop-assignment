# Type Aliases vs Interfaces in TypeScript: How to Choose

## Introduction

TypeScript gives us two tools for naming a shape: the `type` alias and the `interface`. They look interchangeable in small examples, which is exactly why the choice feels confusing. Understanding where they differ helps you write types that are easier to extend and safer to refactor.

## Interfaces: built for object shapes and extension

An `interface` describes an object shape and is designed to be extended. It can be reopened later through **declaration merging**, so two declarations with the same name combine automatically. That is how libraries let you augment their types.

```ts
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

interface Course {   // merged into the original
  instructor: string;
}
```

The second `Course` block silently merged into the first, so both now require four properties.

## Type aliases: built for composition

A `type` alias can name *any* type, not just an object shape. It cannot be reopened — one name, one definition — which makes it predictable. That predictability is why many teams reach for `type` first. Aliases also compose with intersections instead of `extends`.

```ts
type ID = string | number;                          // union
type Coordinate = readonly [number, number, string]; // tuple
type PaidCourse = Course & { price: number };       // intersection
```

The first two examples simply cannot be expressed with an `interface`.

## Conclusion

The difference is really about intent: `interface` says "a contract that can grow," while `type` says "a composed shape, fixed as written." Use `interface` for object contracts that other code may extend or augment, and `type` for unions, tuples, and composition with `&`. In a team, consistency beats cleverness — pick this rule and follow it everywhere.
