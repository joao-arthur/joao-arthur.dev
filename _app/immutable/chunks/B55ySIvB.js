import{t as n,a as r,b as l}from"./BPHt8eje.js";import"./Devn5Tq6.js";import{A as q,B as o,C as y,D as w,F as a}from"./lc7zKNTw.js";import{h as H}from"./amNWgKlN.js";import{l as I,s as F}from"./Dq5CK-DW.js";import{P as J,H as L,a as i,b as p}from"./BhtUnja0.js";const b={title:"Clean Architecture, DDD And Market",description:"If Clean Architecture and DDD provide many advatanges, why isn't everyone using them?",created_at:"2023-08-11",updated_at:"2025-02-20"},{title:V,description:W,created_at:X,updated_at:Y}=b;var M=n("If <strong>Clean Architecture</strong> and <strong>DDD</strong> provide many advatanges, why isn’t everyone using them?",1),S=n(`Real software depends on technology: Database connection, <strong>HTTP</strong> requests, <strong>FTP</strong> servers, <strong>TCP</strong> messages, <strong>encrypt</strong> data, to name a few. On a <em>layered architecture</em> perspective, all of
that are details, and an application is essentially the <strong>entities</strong> and the <strong>operations</strong>. This
approach, however, takes time to be implemented.`,1),R=n("Tree structure of a sample <em>todo list</em> application applying <em>layered architecture</em>.",1),j=n(`In corporations, software has a tight deadlight that forces developers to use the most of the
technology stack, without time to create a deep model or a reusable architecture. The consequence is
that when it is necessary to migrate from one technology to another, the project is rewritten. This
is particularly true in web development, which faced multiple ages, with plain <strong>HTML</strong>, then <strong>JavaScript</strong>, then <strong>JSF</strong> and <strong>applets</strong>, then <strong>JQuery</strong>, then <strong>React</strong>.`,1),z=n(`This happens because companies profit more with a buggy software today, than with a software that
works tomorrow. This cycle did not started today, and will not fade away soon. Its effects are all
around us, by the name of <strong>legacy</strong>.`,1),B=n('<!> <!> <!> <!> <pre class="language-bash"><!></pre> <blockquote><!></blockquote> <!> <!> <!> <!>',1);function Z(P,D){const k=I(D,["children","$$slots","$$events","$$legacy"]);J(P,F(()=>k,b,{children:(T,O)=>{var h=B(),g=q(h);L(g,{children:(e,s)=>{a();var t=l("Clean Architecture, DDD And Market");r(e,t)}});var m=o(g,2);i(m,{children:(e,s)=>{a();var t=M();a(4),r(e,t)}});var u=o(m,2);p(u,{children:(e,s)=>{a();var t=l("Code");r(e,t)}});var v=o(u,2);i(v,{children:(e,s)=>{a();var t=S();a(14),r(e,t)}});var d=o(v,2),C=y(d);H(C,()=>`<code class="language-bash"><span class="token builtin class-name">.</span>
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
    └── main</code>`),w(d);var c=o(d,2),x=y(c);i(x,{children:(e,s)=>{a();var t=R();a(4),r(e,t)}}),w(c);var _=o(c,2);p(_,{children:(e,s)=>{a();var t=l("Stack");r(e,t)}});var f=o(_,2);i(f,{children:(e,s)=>{a();var t=j();a(12),r(e,t)}});var $=o(f,2);p($,{children:(e,s)=>{a();var t=l("Conclusion");r(e,t)}});var A=o($,2);i(A,{children:(e,s)=>{a();var t=z();a(2),r(e,t)}}),r(T,h)},$$slots:{default:!0}}))}export{Z as default,b as metadata};
