---
title: "Clean Architecture, DDD And Market"
description: "If Clean Architecture and DDD provide many advatanges, why isn't everyone using them?"
created_at: "2023-08-11"
updated_at: "2025-02-20"
---

# Clean Architecture, DDD And Market

If **Clean Architecture** and **DDD** provide many advatanges, why isn't everyone using them?

## Code

Real software depends on technology: Database connection, **HTTP** requests, **FTP** servers,
**TCP** messages, **encrypt** data, to name a few. On a _layered architecture_ perspective, all of
that are details, and an application is essentially the **entities** and the **operations**. This
approach, however, takes time to be implemented.

```bash
.
└── todo_app
    ├── application
    │   └── controller
    │       ├── todo
    │       └── user
    ├── domain
    │   ├── todo
    │   │   ├── create
    │   │   ├── delete
    │   │   ├── read
    │   │   └── update
    │   └── user
    │       ├── create
    │       ├── login
    │       └── update
    ├── infra
    │   ├── database
    │   ├── http
    │   ├── id_generator
    │   ├── password_generator
    │   └── schema_validator
    └── main
```

> Tree structure of a sample _todo list_ application applying _layered architecture_.

## Stack

In corporations, software has a tight deadlight that forces developers to use the most of the
technology stack, without time to create a deep model or a reusable architecture. The consequence is
that when it is necessary to migrate from one technology to another, the project is rewritten. This
is particularly true in web development, which faced multiple ages, with plain **HTML**, then
**JavaScript**, then **JSF** and **applets**, then **JQuery**, then **React**.

## Conclusion

This happens because companies profit more with a buggy software today, than with a software that
works tomorrow. This cycle did not started today, and will not fade away soon. Its effects are all
around us, by the name of **legacy**.
