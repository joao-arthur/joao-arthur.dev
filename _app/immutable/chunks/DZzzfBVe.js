import{t as m,a as g}from"./WeQXqaOV.js";import"./DZ-DIwRQ.js";import{A as a,B as v,C as n,D as s,F as h}from"./Bbc5DNbi.js";import{h as t}from"./BUU-BBpD.js";const y={title:"HTML E Componentes",description:"Por que o React se tornou tão popular? Como foi o caminho até aqui?",created_at:"2024-06-31",updated_at:"2025-02-20",technologies:["HTML","React"]},{title:x,description:C,created_at:T,updated_at:A,technologies:L}=y;var f=m(`<h1>HTML E Componentes</h1> <p>Por que o React se tornou tão popular? Como foi o caminho até aqui?</p> <h2>Do HTML Ao React</h2> <p>A web é muito mais recente que o computador e os sistemas operacionais, por conta disso seu
desenvolvimento ainda está ocorrendo.</p> <p>Até o início dos anos 2000, os projetos web contavam com <strong>HTML</strong>, <strong>CSS</strong> e <strong>JS</strong> e os sites eram
servidos através de <strong>servidores de aplicação</strong>. Nesse cenário era possível reaproveitar estilos e
script, mas não o layout.</p> <pre class="language-html"><!></pre> <p>Com o desenvolvimento do <strong>XMLHTTPRequest</strong> e do <strong>JQuery</strong>, as aplicações web deram um passo
importante, já que agora, os esqueletos das páginas podiam ser montados e depois alimentados com
requisições <strong>HTTP</strong> no cliente. Nesse momento, houve uma mudança para <strong>client-side render</strong>, e uma
forma rústica de componentização já era possível, através da separação dos arquivos HTML e do
dinamismo no <strong>DOM</strong>.</p> <p>O próximo grande passo foi dado pelo <strong>AngularJS</strong> em 2010, que ajudou a popularizar o <strong>NodeJS</strong> em
aplicações frontend e trouxe de vez o conceito de <em>componentes</em> para construção de estilo e
comportamento, e de <strong>POO</strong> no <strong>JavaScript</strong>.</p> <p>O surgimento do <strong>React</strong> em 2014, desbancou o <strong>AngularJS</strong> por conta da simplicidade que ele
oferecia ao transformar <em>componentes em funções</em>, e a construção de páginas em <em>composição de
componentes</em>.</p> <pre class="language-js"><!></pre> <h2>Os Impactos Da Componentização</h2> <p>Atualmente, mesmo no <strong>JavaScript vanilla</strong> já é possível criar tags HTML customizadas, através da <strong>API de WebComponents</strong>.</p> <pre class="language-html"><!></pre> <p>A ideia de componentes é tão poderosa que não afetou <em>apenas</em> o cenário de desenvolvimento web. Um
exemplo que vale a pena ser citado são os aplicativos <strong>Android</strong>. O Android usa nativamente uma API
de <strong>XML</strong> para definição de layout, o que é <em>conceitualmente</em> muito próximo do <strong>HTML</strong>.</p> <pre class="language-xml"><!></pre> <p>Nos últimos anos, influenciados principalmente pelo <strong>React</strong>, <strong>Kotlin</strong> criou uma nova API de
layouts baseadas em componentes, e o <strong>Flutter</strong> já foi desenvolvido com isso em mente.</p> <h2>Conclusão</h2> <p>Desde o nascimento da web, desenvolvedores buscaram formas de reutilizar o código. A componentização
se mostrou uma <em>forma muito eficaz</em>, e acabou impactando inclusive outras tecnlogias, como o
desenvolvimento de aplicativos móveis.</p>`,1);function H(u){var c=f(),p=a(v(c),10),i=n(p);t(i,()=>`<code class="language-html"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
            <span class="token selector">div</span> <span class="token punctuation">&#123;</span>
                <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
                <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
            <span class="token punctuation">&#125;</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></code>`),s(p);var o=a(p,8),r=n(o);t(r,()=>`<code class="language-js"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">QuadradroVermelho</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div
            style<span class="token operator">=</span><span class="token punctuation">&#123;</span><span class="token punctuation">&#123;</span>
                <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
                <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
                <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token string">"red"</span><span class="token punctuation">,</span>
            <span class="token punctuation">&#125;</span><span class="token punctuation">&#125;</span>
        <span class="token operator">/</span><span class="token operator">></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),s(o);var e=a(o,6),k=n(e);t(k,()=>`<code class="language-html"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
            <span class="token keyword">class</span> <span class="token class-name">QuadradroVermelho</span> <span class="token keyword">extends</span> <span class="token class-name">HTMLElement</span> <span class="token punctuation">&#123;</span>
                <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
                    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">&#125;</span>

                <span class="token function">connectedCallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
                    <span class="token keyword">const</span> shadow <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">attachShadow</span><span class="token punctuation">(</span><span class="token punctuation">&#123;</span> <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">"open"</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">const</span> content <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">const</span> style <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"style"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    style<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">
                        div &#123;
                            width: 200px;
                            height: 200px;
                            background-color: red;
                        &#125;
                    </span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>
                    shadow<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    shadow<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">&#125;</span>
            <span class="token punctuation">&#125;</span>

            customElements<span class="token punctuation">.</span><span class="token function">define</span><span class="token punctuation">(</span><span class="token string">"quadrado-vermelho"</span><span class="token punctuation">,</span> QuadradroVermelho<span class="token punctuation">)</span><span class="token punctuation">;</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>quadrado-vermelho</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>quadrado-vermelho</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></code>`),s(e);var l=a(e,4),d=n(l);t(d,()=>`<code class="language-xml"><span class="token prolog">&lt;?xml version="1.0" encoding="utf-8"?></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>RelativeLayout</span>
    <span class="token attr-name"><span class="token namespace">xmlns:</span>android</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://schemas.android.com/apk/res/android<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>match_parent<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span>
        <span class="token attr-name"><span class="token namespace">android:</span>id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>@+id/QuadradroVermelho<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>layout_width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200dp<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>layout_height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>200dp<span class="token punctuation">"</span></span>
        <span class="token attr-name"><span class="token namespace">android:</span>background</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#FF0000<span class="token punctuation">"</span></span>
    <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>RelativeLayout</span><span class="token punctuation">></span></span></code>`),s(l),h(6),g(u,c)}export{H as default,y as metadata};
