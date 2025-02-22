import{t as o,b as t}from"./DX_IKd6t.js";import"./BO-ZceVj.js";import{s as i,k as p,a4 as r,a5 as l,n as c}from"./B83JZmIy.js";import{h as u}from"./D26fQw86.js";const m={title:"libre_game_of_life",description:"Implementação FLOSS do Jogo da Vida de Conway",license:"GNU AGPLv3",repository:"https://github.com/joao-arthur/libre_game_of_life",created_at:"2023-05-07",updated_at:"2025-02-12",languages:["Rust","TypeScript"],technologies:["Web Assembly","NextJS"],img_url:"/images/libre_game_of_life.png",app_url:"/app/libre_game_of_life/index.html"},{title:b,description:_,license:v,repository:w,created_at:x,updated_at:A,languages:q,technologies:z,img_url:S,app_url:y}=m;var d=o(`<h1 id="libre_game_of_life"><a aria-hidden="true" tabindex="-1" href="#libre_game_of_life"><span class="icon icon-link"></span></a>libre_game_of_life</h1> <p>Implementação FLOSS do Jogo da Vida de Conway</p> <blockquote><p>O <em>Jogo da Vida</em> é um autômato celular criado pelo matemático britânico John Horton Conway em 1970</p></blockquote> <h2 id="regras"><a aria-hidden="true" tabindex="-1" href="#regras"><span class="icon icon-link"></span></a>Regras</h2> <p>O autômato <em>Jogo da Vida</em> ocorre em um grid onde cada célula pode estar ou <strong>viva</strong> ou <strong>morta</strong>. A
cada etapa de tempo, o que determina o estado de cada célula são as seguintes regras:</p> <ul><li><strong>Células vivas</strong> sobrevivem com 2 ou 3 vizinhos vivos</li> <li><strong>Células mortas</strong> se tornam vivas com 3 vizinhos vivos</li></ul> <h2 id="minha-implementação"><a aria-hidden="true" tabindex="-1" href="#minha-implementação"><span class="icon icon-link"></span></a>Minha implementação</h2> <p>Eu implementei uma versão do <em>Jogo da Vida</em> em <em>Rust</em>.</p> <pre class="language-rust"><!></pre> <blockquote><p>No código acima, a implementação da grid do autômato. Um <em>HashSet</em> também iria funcionar <strong>nesse
cenário</strong>, porque apenas células vivas são consideradas. Porém, algumas variações do Jogo da Vida
possuem mais estados</p></blockquote> <p>Usando um <em>HashMap</em>, nós desacoplamos a <strong>grid</strong> e a <strong>renderização</strong>, permetindo a nós renderizar
qualquer parde do grid, aproximar e afastar o zoom, sem afetar o estado atual.</p> <p>Outro aspecto é que, precisamos de algum <strong>sistema de coordenadas</strong> para identificar uma posição
específica. A mais simples é o <strong>plano cartesiano</strong>, que é o que foi usado.</p> <h3 id="iterando"><a aria-hidden="true" tabindex="-1" href="#iterando"><span class="icon icon-link"></span></a>Iterando</h3> <p>Para criar a próxima geração, o <em>HashMap</em> atual é percorrido, e para célula viva e seus vizinhos, as
regras são aplicadas. As células vivas resultantes são então salvas em um novo <em>HashMap</em>.</p> <h3 id="a-aplicação"><a aria-hidden="true" tabindex="-1" href="#a-aplicação"><span class="icon icon-link"></span></a>A aplicação</h3> <p>Eu implementei o <em>Jogo da Vida</em> na web, renderizado em um <em>canvas</em>. O projeto possui três camadas:</p> <h3 id="lib"><a aria-hidden="true" tabindex="-1" href="#lib"><span class="icon icon-link"></span></a>lib</h3> <p>Uma implementação genérica e reutilizável do <em>Jogo da Vida</em> em <em>Rust</em>.</p> <h3 id="web_backend"><a aria-hidden="true" tabindex="-1" href="#web_backend"><span class="icon icon-link"></span></a>web_backend</h3> <p>Uma aplicação <em>Web Assembly</em> que funciona como uma ponte entre a <em>lib</em> e o <em>web_frontend</em></p> <h3 id="web_frontend"><a aria-hidden="true" tabindex="-1" href="#web_frontend"><span class="icon icon-link"></span></a>web_frontend</h3> <p>A aplicação do usuário, responsável por renderizar o canvas, as configurações, e inicializar o <em>Web
Assembly</em>. Atualmente, as configurações são as seguintes:</p> <ul><li><strong>Preset:</strong> Permite ao usuário escolher entre muitas formas populares (Glider, Blinkder, etc.)</li> <li><strong>Gap:</strong> Uma opção visual, por estética</li> <li><strong>Size:</strong> A quantidade de zoom na tela</li> <li><strong>FPS:</strong> O FPS desejado para a renderização</li></ul> <h2 id="referência"><a aria-hidden="true" tabindex="-1" href="#referência"><span class="icon icon-link"></span></a>Referência</h2> <p><a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" rel="nofollow">https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life</a></p>`,1);function C(s){var a=d(),n=i(p(a),16),e=r(n);u(e,()=>`<code class="language-rust"><span class="token keyword">let</span> grid <span class="token operator">=</span> <span class="token class-name">HashMap</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">(</span><span class="token class-name">Coordinate</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">::</span><span class="token class-name">Alive</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token class-name">Coordinate</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">::</span><span class="token class-name">Alive</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span><span class="token class-name">Coordinate</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">State</span><span class="token punctuation">::</span><span class="token class-name">Alive</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`),l(n),c(32),t(s,a)}export{C as default,m as metadata};
