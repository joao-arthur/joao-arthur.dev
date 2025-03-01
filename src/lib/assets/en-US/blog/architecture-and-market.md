---
title: "Clean Architecture, DDD And Market"
description: "Reusable architecture has prooven to be powerful. Why nobody uses it?"
created_at: "2023-08-11"
updated_at: "2025-02-27"
---

# Architecture And Market

Reusable architecture has prooven to be powerful. Why nobody uses it?

## Technology

A real software depends on many technologies:

- **Database** connection
- **HTTP** requests
- **FTP** servers
- **TCP** messages
- **Cryptography**
- **Serialization** and **deserialization** in diverse formats (XML, JSON, YAML, TOML)

## Interfaces

It is possible to isolate the main concepts of an application from everything else, in a **domain
layer**. In this case, when it is necessary to use a technology (something out of the domain or of
the standard library of the programming language), this is accomplished with interfaces.

This approach offers the following advantages:

- **Focus on the domain:** Allows to think in an isolatted manner on the **entities** and
  **operations** of the application, using an ubiquitous language
- **Testability:** The capacity of testing the whole domain code, ensuring a reduced number of bugs
- **Reusability:** The domain can be used as an library in any application: Desktop app, mobile app,
  REST API, web frontend, etc.

## Architectures

Many people already thought of architectured that apply these concepts. The most prominents are:

- **Hexagonal Architecture (Alistair Cockburn):** Prioritizes a clear segregation of the application
  core and the external interfaces
- **Clean Architecture (Robert Cecil Martin):** Prioritizes the layers independence
- **Domain Driven Design (Eric Evans):** Prioritizes the modeling of the application domain

## Corporative Problem

In the professional environment, software development has a tight deadlight, that forces developers
to use the most out of the stack. This prevents to create a deeper model or a reusable architecture,
accumulating **technical debt**.

When some years pass, and the project will be migrated (from desktop to the web, from the web
to mobile, etc.), the natural tendency is that it will be rewritten, restarting the same process.

A software with bugs, still will have clients using it, since most bugs are in less used routines,
that are less important to the client. This means that a corporation can profit more from a buggy
software today, than with a perfect software tomorrow, at least on the short term.

## Conclusion

Architectures that leverages the value of a software also delay the development on the short term,
what becomes a uninteresting objetive for most firms.
