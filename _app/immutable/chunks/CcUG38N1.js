import{t as r,a as s}from"./Bv4VJJ99.js";import"./C01Q2Wma.js";import{A as n,B as i,C as c,D as d,F as p}from"./B4rLlicd.js";import{h}from"./C85SoaE1.js";const l={title:"Clean Architecture, DDD And Market",description:"If Clean Architecture and DDD provide many advatanges, why isn't everyone using them?",created_at:"2023-08-11",updated_at:"2025-02-20"},{title:w,description:v,created_at:b,updated_at:D}=l;var g=r(`<h1>Clean Architecture, DDD And Market</h1> <p>If <strong>Clean Architecture</strong> and <strong>DDD</strong> provide many advatanges, why isn’t everyone using them?</p> <h2>Code</h2> <p>Real software depends on technology: Database connection, <strong>HTTP</strong> requests, <strong>FTP</strong> servers, <strong>TCP</strong> messages, <strong>encrypt</strong> data, to name a few. On a <em>layered architecture</em> perspective, all of
that are details, and an application is essentially the <strong>entities</strong> and the <strong>operations</strong>. This
approach, however, takes time to be implemented.</p> <pre class="language-bash"><!></pre> <blockquote><p>Tree structure of a sample <em>todo list</em> application applying <em>layered architecture</em>.</p></blockquote> <h2>Stack</h2> <p>In corporations, software has a tight deadlight that forces developers to use the most of the
technology stack, without time to create a deep model or a reusable architecture. The consequence is
that when it is necessary to migrate from one technology to another, the project is rewritten. This
is particularly true in web development, which faced multiple ages, with plain <strong>HTML</strong>, then <strong>JavaScript</strong>, then <strong>JSF</strong> and <strong>applets</strong>, then <strong>JQuery</strong>, then <strong>React</strong>.</p> <h2>Conclusion</h2> <p>This happens because companies profit more with a buggy software today, than with a software that
works tomorrow. This cycle did not started today, and will not fade away soon. Its effects are all
around us, by the name of <strong>legacy</strong>.</p>`,1);function _(a){var e=g(),t=n(i(e),8),o=c(t);h(o,()=>`<code class="language-bash"><span class="token builtin class-name">.</span>
└── todo_app
    ├── application
    │   └── controller
    │       ├── todo
    │       └── user
    ├── domain
    │   ├── todo
    │   │   ├── create
    │   │   ├── delete
    │   │   ├── <span class="token builtin class-name">read</span>
    │   │   └── update
    │   └── user
    │       ├── create
    │       ├── login
    │       └── update
    ├── infra
    │   ├── database
    │   ├── http
    │   ├── id_generator
    │   ├── password_generator
    │   └── schema_validator
    └── main</code>`),d(t),p(10),s(a,e)}export{_ as default,l as metadata};
