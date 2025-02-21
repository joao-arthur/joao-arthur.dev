import{t as s,b as t}from"./BAQlJMdJ.js";import"./jhujCLip.js";import{s as n,k as i,a4 as d,a5 as c,n as u}from"./l2PV5vIv.js";import{h as p}from"./PcRRlBoN.js";const m={title:"Clean Architecture, DDD And Market",description:"If Clean Architecture and DDD provide many advatanges, why isn't everyone using them?",created_at:"2023-08-11",updated_at:"2025-02-20"},{title:q,description:b,created_at:_,updated_at:k}=m;var l=s(`<h1 id="arquitetura-limpa-ddd-e-mercado"><a aria-hidden="true" tabindex="-1" href="#arquitetura-limpa-ddd-e-mercado"><span class="icon icon-link"></span></a>Arquitetura Limpa, DDD e Mercado</h1> <p>Todo mundo sabe que <strong>Clean Architecture</strong> e <strong>DDD</strong> fornecem muitas vantagens. Por que não está
todo mundo usando?</p> <h2 id="código"><a aria-hidden="true" tabindex="-1" href="#código"><span class="icon icon-link"></span></a>Código</h2> <p>Software real depende de tecnologia: Conexão com banco de dados, requisições <strong>HTTP</strong>, servidores <strong>FTP</strong>, mensagens <strong>TCP</strong>, <strong>criptografar</strong> dados, para citar algumas. Em uma perspectiva de
arquitetura em camadas, tudo isso é detalhe, e uma aplicação é essencialmente as <strong>entidades</strong> e as <strong>operações</strong>. Essa abordagem, porém, leva tempo para ser implementada.</p> <pre class="language-bash"><!></pre> <blockquote><p>Árvore de uma aplicação de <em>lista todo</em> aplicando <em>arquitetura em camadas</em>.</p></blockquote> <h2 id="stack"><a aria-hidden="true" tabindex="-1" href="#stack"><span class="icon icon-link"></span></a>Stack</h2> <p>Em corporações, software possui um prazo apertado que obriga os desenvolvedores a usar o máximo da
stack, sem tempo para criar um modelo mais profundo ou uma arquitetura reutilizável. A consequência
é que quando é necessário migrar de uma tecnologia para outra, o projeto é reescrito. Isso é
particulamente verdade no desenvolvimento web, que passou por vários períodos diferentes, com <strong>HTML</strong> plano, então <strong>JavaScript</strong>, então <strong>JSF</strong> e <strong>applets</strong>, então <strong>JQuery</strong>, então <strong>React</strong>.</p> <h2 id="conclusion"><a aria-hidden="true" tabindex="-1" href="#conclusion"><span class="icon icon-link"></span></a>Conclusion</h2> <p>Isso ocorre porque companhias lucram mais com software bugado hoje, do que com um software que
funciona amanhã. Esse ciclo não começou hoje e não vai sumir tão cedo. Seus efeitos estão ao nosso
redor, pelo nome de <strong>legado</strong>, e cabe a nós aceitar que software é imperfeito, similar a tudo que
nós criamos.</p>`,1);function D(o){var a=l(),e=n(i(a),8),r=d(e);p(r,()=>`<code class="language-bash"><span class="token builtin class-name">.</span>
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
    └── principal</code>`),c(e),u(10),t(o,a)}export{D as default,m as metadata};
