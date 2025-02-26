import{t as n,a as r,b as i}from"./BPHt8eje.js";import"./Devn5Tq6.js";import{A as L,B as t,C as q,D as b,F as e}from"./lc7zKNTw.js";import{h as y}from"./amNWgKlN.js";import{l as z,s as H}from"./Dq5CK-DW.js";import{P as T,H as E,a as d,b as p}from"./BhtUnja0.js";const P={title:"Arquitetura Limpa, DDD e Mercado",description:"Se Arquitetura Limpa e DDD fornecem muitas vantagens, por que não está todo mundo usando?",created_at:"2023-08-11",updated_at:"2025-02-20"},{title:V,description:W,created_at:X,updated_at:Y}=P;var j=n("Se <strong>Clean Architecture</strong> e <strong>DDD</strong> fornecem muitas vantagens, por que não está todo mundo usando?",1),F=n(`Software real depende de tecnologia: Conexão com banco de dados, requisições <strong>HTTP</strong>, servidores <strong>FTP</strong>, mensagens <strong>TCP</strong>, <strong>criptografar</strong> dados, para citar algumas. Em uma perspectiva de
arquitetura em camadas, tudo isso é detalhe, e uma aplicação é essencialmente as <strong>entidades</strong> e as <strong>operações</strong>. Essa abordagem, porém, leva tempo para ser implementada.`,1),J=n("Árvore de uma aplicação de <em>lista todo</em> aplicando <em>arquitetura em camadas</em>.",1),M=n(`Em corporações, software possui um prazo apertado que obriga os desenvolvedores a usar o máximo da
stack, sem tempo para criar um modelo mais profundo ou uma arquitetura reutilizável. A consequência
é que quando é necessário migrar de uma tecnologia para outra, o projeto é reescrito. Isso é
particulamente verdade no desenvolvimento web, que passou por vários períodos diferentes, com <strong>HTML</strong> plano, então <strong>JavaScript</strong>, então <strong>JSF</strong> e <strong>applets</strong>, então <strong>JQuery</strong>, então <strong>React</strong>.`,1),I=n(`Isso ocorre porque companhias lucram mais com software bugado hoje, do que com um software que
funciona amanhã. Esse ciclo não começou hoje e não vai sumir tão cedo. Seus efeitos estão ao nosso
redor, pelo nome de <strong>legado</strong>, e cabe a nós aceitar que software é imperfeito, similar a tudo que
nós criamos.`,1),B=n('<!> <!> <!> <!> <pre class="language-bash"><!></pre> <blockquote><!></blockquote> <!> <!> <!> <!>',1);function Z(D,x){const k=z(x,["children","$$slots","$$events","$$legacy"]);T(D,H(()=>k,P,{children:(S,Q)=>{var l=B(),u=L(l);E(u,{children:(o,s)=>{e();var a=i("Arquitetura Limpa, DDD e Mercado");r(o,a)}});var g=t(u,2);d(g,{children:(o,s)=>{e();var a=j();e(4),r(o,a)}});var v=t(g,2);p(v,{children:(o,s)=>{e();var a=i("Código");r(o,a)}});var _=t(v,2);d(_,{children:(o,s)=>{e();var a=F();e(12),r(o,a)}});var c=t(_,2),w=q(c);y(w,()=>`<code class="language-bash"><span class="token builtin class-name">.</span>
└── todo_app
    ├── aplicacao
    │   └── controlador
    │       ├── todo
    │       └── usuario
    ├── domain
    │   ├── todo
    │   │   ├── atualizar
    │   │   ├── criar
    │   │   ├── excluir
    │   │   └── ler
    │   └── usuario
    │       ├── acessar
    │       ├── atualizar
    │       └── criar
    ├── infra
    │   ├── banco_de_dados
    │   ├── gerador_id
    │   ├── gerador_senha
    │   ├── http
    │   └── validador_schema
    └── principal</code>`),b(c);var m=t(c,2),A=q(m);d(A,{children:(o,s)=>{e();var a=J();e(4),r(o,a)}}),b(m);var $=t(m,2);p($,{children:(o,s)=>{e();var a=i("Stack");r(o,a)}});var f=t($,2);d(f,{children:(o,s)=>{e();var a=M();e(12),r(o,a)}});var h=t(f,2);p(h,{children:(o,s)=>{e();var a=i("Conclusão");r(o,a)}});var C=t(h,2);d(C,{children:(o,s)=>{e();var a=I();e(2),r(o,a)}}),r(S,l)},$$slots:{default:!0}}))}export{Z as default,P as metadata};
