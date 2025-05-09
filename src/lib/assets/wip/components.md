---
title: "HTML And Components"
description: "Why React became so popular? How was the way here?"
created_at: "2024-06-31"
updated_at: "2025-02-20"
technologies:
  - "HTML"
  - "React"
---

# HTML And Components

Why React became so popular? How was the way here?

## components
## templates
## angular
## react
## android
## gtk
## qt

## Components

Web projects are made of:

- **HTML:** Corresponds to **layout**
- **CSS:** Corresponds to **style**
- **JS:** Corresponds to **behavior**

A **component** is a concept that represent the union of the three languages into a reusable unit.
For example: a header, a menu, a badge, an input...

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <style>
            .redSquare {
                width: 200px;
                height: 200px;
                background-color: red;
            }
        </style>
        <script>
            function onClick() {
                alert(
                    "You clicked the red square!",
                );
            }
        </script>
    </head>
    <body>
        <div
            class="redSquare"
            onClick="onClick()"
        >
        </div>
    </body>
</html>
```

> A red square "component" in plain **HTML**

In order to have a component, we must embed the code its into a single **HTML** page. It has always
been easy to reuse **CSS** and **JS**, however the same was not true for **HTML**, until recently.

Web applications serve pages through an **application server**. For each route, they return
an **HTML** file, in the form of an **HTTP** response. The **HTML** can link many **CSS** and
**JS** files, but no other **HTML** ones.

## Templates

In the beginning of the web, the solution was to build the **HTML** dinamically on the server. The technique
for this was to use **templates**. The concept is to define a special syntax for text files, in order
to replace the original string with binded values in runtime.

```html
<p>Hello, my name is <TMPL_VAR NAME=USER>!</p>
```

> **Perl** template in (HTML-Template)[https://metacpan.org/pod/HTML::Template]

```php
<p>Hello, my name is {{user}}!</p>
```

> **PHP** template in (Twig)[https://twig.symfony.com/]

```php
<p>Hello, my name is <?=$this->e($name)?></p>
```

> **PHP** template in (Plates)[https://platesphp.com]

Each template could then be reused in many **HTML** files. This solved a problem: Now it was possible to reuse **HTML**, **CSS** and **JS**.
However, styles and js functions are global, so there was no way to scope these contents into a component.

## JQuery

With the development of **XMLHTTPRequest** and **JQuery Ajax**, it became possible to mount the
skeletons on the server, and then feed them with **HTTP** requests on the client. This was a change
from **SSR (server-side rendering)** to **CSR (client-side rendering)**.

```html
<script>
    $.get("/user", function (data) {
        $("p").append(data.firstName);
    });
</script>

<p>Hello,</p>
```

> JQuery HTTP GET, with **DOM** manipulation

## AngularJS

In 2010, **AngularJS** helped popularize **NodeJS** on frontend applications and brought once and
for all the concept of components, with **OOP** on **JavaScript**.

## React

The emergence of **React** in 2014 displaced **AngularJS** because of simplicity. Components are
functions, and page building is to _compose components_.

```js
export function RedSquare() {
    return (
        <div
            style={{
                width: 200,
                height: 200,
                backgroundColor: "red",
            }}
        />
    );
}
```

> A red square component in React

## Web Components

Currently, even on **vanilla JavaScript**, it is possible to create custom **HTML** tags, with the
**WebComponents API**.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <script>
            class RedSquare extends HTMLElement {
                constructor() {
                    super();
                }

                connectedCallback() {
                    const shadow = this.attachShadow(
                        { mode: "open" },
                    );
                    const content = document
                        .createElement("div");
                    const style = document
                        .createElement("style");
                    style.textContent = `
                        div {
                            width: 200px;
                            height: 200px;
                            background-color: red;
                        }
                    `;
                    shadow.appendChild(style);
                    shadow.appendChild(content);
                }
            }

            customElements.define(
                "red-square",
                RedSquare,
            );
        </script>
    </head>
    <body>
        <red-square></red-square>
    </body>
</html>
```

> A red square webcomponent

## Android

The idea of **components** is so powerful that it did not only affected web developmente scenario. A
worth example is the **Android** applications. Android uses natively a **XML** API to define layout,
which is _conceptually_ very close to **HTML**.

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
>
    <View
        android:id="@+id/redSquare"
        android:layout_width="200dp"
        android:layout_height="200dp"
        android:background="#FF0000"
    />
</RelativeLayout>
```

In the last years, influenced mainly by **React**, **Kotlin** created a brand new layout API based
on components, and **Flutter** was development with that in mind.

## Conclusion

Since the web was born, developers searched was to reuse the code. Componentization showed itself to
be a _very effective way_, and it ended impacting even other tecnologies, such as mobile apps
development.

## Reference

https://legacy.reactjs.org/docs/components-and-props.html
