# Type Narrowing in TypeScript: `typeof`, `instanceof`, and `in`

## Introduction

A union type such as `string | number | boolean` is honest but clumsy: TypeScript only allows operations that are safe for *every* member. Inside a conditional, a check shrinks the union to a single member. The rest of that block is then fully type-safe. That shrinking is called narrowing, and it is what makes unions practical.

## Narrowing with `typeof`

The `typeof` guard is the simplest one, and it works on primitives such as `string`, `number`, and `boolean`.

```ts
function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") return value.trim().toLowerCase();
  if (typeof value === "number") return value * 10;
  return value ? "Active" : "Inactive";
}
```

Each branch sees one concrete type, so `.trim()` and `*` are both legal.

## Narrowing with `instanceof`

For class-based values, `instanceof` narrows along the prototype chain. That makes it the natural guard for error handling, where the caught value is `unknown`.

```ts
function describe(error: unknown): string {
  if (error instanceof Error) return error.message;
  return "Unknown failure";
}
```

Outside that block, `error.message` would not even compile.

## Narrowing with `in`

The `in` operator tests whether a property exists, which is ideal for object shapes that share no common class.

```ts
type Admin = { name: string; permissions: string[] };
type Guest = { name: string; sessionId: string };

function greet(user: Admin | Guest): string {
  if ("permissions" in user) return `Admin ${user.name}`;
  return `Guest ${user.name}`;
}
```

Since `permissions` exists only on `Admin`, that branch narrows to `Admin`.

## Conclusion

Narrowing costs nothing at runtime — these guards are ordinary JavaScript. Use `typeof` for primitives, `instanceof` for classes, and `in` for object shapes, and a vague union becomes an exact type.
