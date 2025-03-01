---
title: "Interfaces"
description: "Is there a way to make a big project easy to implement, easy to test and type-safe?"
created_at: "2023-08-12"
updated_at: "2025-02-27"
technologies:
  - "JavaScript"
  - "TypeScript"
  - "Java"
  - "Rust"
---

# Interfaces

Is there a way to make a _big project_ easy to _implement_, easy to _test_ and _type-safe_?

## Data Types

In any programming language, data has types. Numbers, text, binaries, all of them have a _specific
type_. In the same way, an object can be defined by a type, referred to as an _interface_ in most
languages.

> An interface is a set of operations with arguments and return types.

This allows for:

- Multiple implementations
- Hide dependency injection
- Plain objects for testing

## Why?

```ts
type CreateUserService = {
    create: (
        user: UserCreate,
        validator: UserValidator,
        idGenerator: IdGenerator,
        passwordGenerator: PasswordGenerator,
        repository: UserRepository,
    ) => Promise<User>;
};

export const createUserServiceActual: CreateUserService = {
    create: (
        user: UserCreate,
        validator: UserValidator,
        idGenerator: IdGenerator,
        passwordGenerator: PasswordGenerator,
        repository: UserRepository,
    ) => {/* omitted */},
};

export const createUserServiceStub: CreateUserService = {
    create: () => Promise.resolve(userStub),
};

export const createUserServiceErrorStub: CreateUserService = {
    create: () => {
        throw new Error();
    },
};
```

> Sample service to create a user, that also exports its _stubs_

Any function that receives a **CreateUserService** argument can be tested using
**createUserServiceStub** and **createUserServiceErrorStub** instead of mocking all dependencies.
This abstracts implementation and leaves room for you to think about **input** and **output**.

## Pitfalls

- If you apply interfaces exhaustively, the indirection makes it hard to follow the code. As a rule
  of thumb, use interfaces for: **External resources** (HTTP requests, database connections...) and
  **dependency injection** (When these resources are passed as arguments of functions, as in the
  previous example)

- There is two problems that a type-system may not cover:

  - **Null values**
  - **Error handling**

## Language By Language

Take the following example in _JavaScript_:

```js
async function createUser(
    user,
    repository,
) {
    if (!repository) {
        throw new Error("repository is required!");
    }
    return repository.save(user);
}
```

To compare this code with other programming languages, suppose:

- **repository** can be null
- **repository** can throw an error
- **user** is a required argument
- If **user** is correctly saved, the saved user is returned

### TypeScript

TypeScript supports union types, that allow typing required and null values:

```ts
function createUser(
    user: User,
    repository: UserRepository | null,
): DBUser {
    if (!repository) {
        throw new Error("repository is required!");
    }
    return repository.save(user);
}
```

### Java

Java provides:

- Annotation syntax that allows for required and nullable values, although there is no
  implementation of this in the standard library
- **throws** keyword to make error handling explicit
- _Mockito_ and similar libraries to mock injected dependencies during runtime

```java
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public DBUser createUser(
    @NotNull User user,
    @Nullable UserRepository repository
) throws RepositoryException, Exception {
    if (repository == null) {
        throw new Exception("repository is required!");
    }
    return repository.save(user);
}
```

### Rust

Rust has a unique type-system because it has:

- No _null_ pointer
- _Option_ data structure to handle present or absent values
- _Result_ data structure to handle success or error values

The _Option_ and _Result_ are enums, and because Rust demands enum exhaustiveness, this forces the
developer to handle each case:

```rust
enum CreateUserErr {
    Repo(RepoErr),
    MissingRepo(MissingRepoErr)
}

pub fn create_user(
    user: User,
    repo: Option<UserRepo>,
) -> Result<DBUser, CreateUserErr> {
    match repository {
        Some(r) => r
            .save(user)
            .map_err(|e|
                CreateUserErr::Repo(
                    e
                )            
            ),
        None => Err(
            CreateUserErr::MissingRepo(
                MissingRepoErr
            )
        ),
    }
}
```

## Conclusion

The more rigorous a type system of a programming language, the less prone to errors and the more verbose the
code. **Interfaces** are powerful tools, but they can **hide errors and null values**, according to
the programming language.

The way of handling these limitations will depend mostly on what is the tolerance to bugs of
the project, however objectively, a software with fewer bugs is **better**.
