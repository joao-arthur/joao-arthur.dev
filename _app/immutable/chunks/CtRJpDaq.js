import{t as n,a as e,b as i}from"./BPHt8eje.js";import"./Devn5Tq6.js";import{A as Y,B as t,C as v,D as g,F as a}from"./lc7zKNTw.js";import{l as G,s as K}from"./Dq5CK-DW.js";import{P as W,H as Z,a as l,b as m}from"./BhtUnja0.js";import{L as d}from"./vCgyL3Yv.js";const F={title:"Arquitetura e Mercado",description:"A arquitetura reutilizável já se provou poderosa. Por que ninguém usa?",created_at:"2023-08-11",updated_at:"2025-02-27"},{title:xo,description:zo,created_at:Ao,updated_at:wo}=F;var oo=n("Conexão com <strong>banco de dados</strong>",1),ro=n("Requisições <strong>HTTP</strong>",1),ao=n("Servidores <strong>FTP</strong>",1),eo=n("Mensagens <strong>TCP</strong>",1),so=n("<strong>Criptografia</strong>"),to=n("<strong>Serialização</strong> e <strong>desserialização</strong> em diversos formatos (XML, JSON, YAML, TOML, etc.)",1),no=n(`É possível isolar os conceitos principais de uma aplicação do resto, em uma <strong>camada de
domínio</strong>. Nesse caso, quando é necessário utilizar alguma tecnologia (algo que não faça parte do
domínio da aplicação ou da biblioteca padrão da linguagem de programação), isso é feito através de
interfaces.`,1),io=n(`<strong>Foco no domínio:</strong> Permite pensar de forma isolada nas <strong>entidades</strong> e <strong>operações</strong> da
aplicação, utilizando uma linguagem ubíqua`,1),lo=n(`<strong>Testabilidade:</strong> A capacidade de testar todo o código do domínio, garantindo um número reduzido
de bugs`,1),mo=n(`<strong>Reusabilidade:</strong> O domínio pode ser usado como uma biblioteca em qualquer aplicação: Aplicativo
desktop, aplicativo mobile, API REST, frontend web, etc.`,1),co=n(`<strong>Arquitetura Hexagonal (Alistair Cockburn):</strong> Prioriza a separação clara entre o núcleo da
aplicação e as interfaces externas`,1),uo=n("<strong>Arquitetura Limpa (Robert Cecil Martin):</strong> Prioriza a independência das camadas",1),po=n("<strong>Design Dirigido a Domínios (Eric Evans):</strong> Prioriza a modelagem do domínio da aplicação",1),vo=n(`No ambiente profissional, o desenvolvimento de software possui um prazo apertado, que obriga os
desenvolvedores a usar o máximo da stack. Isso impede de criar um modelo profundo ou uma arquitetura
reutilizável, acumulando <strong>dívida técnica</strong>.`,1),go=n("<!> <!> <!> <!> <ul><!> <!> <!> <!> <!> <!></ul> <!> <!> <!> <ul><!> <!> <!></ul> <!> <!> <ul><!> <!> <!></ul> <!> <!> <!> <!> <!> <!>",1);function Co(N,O){const U=G(O,["children","$$slots","$$events","$$legacy"]);W(N,K(()=>U,F,{children:(B,_o)=>{var _=go(),$=Y(_);Z($,{children:(o,s)=>{a();var r=i("Arquitetura e Mercado");e(o,r)}});var f=t($,2);l(f,{children:(o,s)=>{a();var r=i("A arquitetura reutilizável já se provou poderosa. Por que ninguém usa?");e(o,r)}});var P=t(f,2);m(P,{children:(o,s)=>{a();var r=i("Tecnologia");e(o,r)}});var h=t(P,2);l(h,{children:(o,s)=>{a();var r=i("Um software de verdade depende de várias tecnologias:");e(o,r)}});var c=t(h,2),b=v(c);d(b,{children:(o,s)=>{a();var r=oo();a(),e(o,r)}});var q=t(b,2);d(q,{children:(o,s)=>{a();var r=ro();a(),e(o,r)}});var x=t(q,2);d(x,{children:(o,s)=>{a();var r=ao();a(),e(o,r)}});var z=t(x,2);d(z,{children:(o,s)=>{a();var r=eo();a(),e(o,r)}});var A=t(z,2);d(A,{children:(o,s)=>{var r=so();e(o,r)}});var J=t(A,2);d(J,{children:(o,s)=>{var r=to();a(3),e(o,r)}}),g(c);var w=t(c,2);m(w,{children:(o,s)=>{a();var r=i("Interfaces");e(o,r)}});var C=t(w,2);l(C,{children:(o,s)=>{a();var r=no();a(2),e(o,r)}});var T=t(C,2);l(T,{children:(o,s)=>{a();var r=i("Essa abordagem oferece as seguintes vantagens:");e(o,r)}});var u=t(T,2),j=v(u);d(j,{children:(o,s)=>{var r=io();a(5),e(o,r)}});var L=t(j,2);d(L,{children:(o,s)=>{var r=lo();a(),e(o,r)}});var Q=t(L,2);d(Q,{children:(o,s)=>{var r=mo();a(),e(o,r)}}),g(u);var M=t(u,2);m(M,{children:(o,s)=>{a();var r=i("Arquiteturas");e(o,r)}});var k=t(M,2);l(k,{children:(o,s)=>{a();var r=i("Várias pessoas já pensaram em arquiteturas que aplicassem esses conceitos. As mais proeminentes são:");e(o,r)}});var p=t(k,2),H=v(p);d(H,{children:(o,s)=>{var r=co();a(),e(o,r)}});var D=t(H,2);d(D,{children:(o,s)=>{var r=uo();a(),e(o,r)}});var V=t(D,2);d(V,{children:(o,s)=>{var r=po();a(),e(o,r)}}),g(p);var E=t(p,2);m(E,{children:(o,s)=>{a();var r=i("Problema Corporativo");e(o,r)}});var I=t(E,2);l(I,{children:(o,s)=>{a();var r=vo();a(2),e(o,r)}});var R=t(I,2);l(R,{children:(o,s)=>{a();var r=i(`Quando se passam alguns anos, e o projeto vai ser migrado (de desktop para web, de web para mobile,
etc.), a tendência natural é ele ser reescrito, reiniciando o mesmo processo.`);e(o,r)}});var S=t(R,2);l(S,{children:(o,s)=>{a();var r=i(`Um software que possui bugs ainda vai possuir clientes utilizando, já que a maioria dos bugs está
em rotinas menos utilizadas, de menor importância para o cliente. Isso significa que uma empresa
pode ganhar mais dinheiro com um software bugado hoje, do que com um software perfeito amanhã, pelo
menos no curto prazo.`);e(o,r)}});var y=t(S,2);m(y,{children:(o,s)=>{a();var r=i("Conclusão");e(o,r)}});var X=t(y,2);l(X,{children:(o,s)=>{a();var r=i(`Arquiteturas que alavancam o valor de um software também atrasam o desenvolvimento a curto prazo, o
que se torna um objetivo desinteressante para a maioria das empresas.`);e(o,r)}}),e(B,_)},$$slots:{default:!0}}))}export{Co as default,F as metadata};
