import{t as p,b as d}from"./BAQlJMdJ.js";import"./jhujCLip.js";import{s as n,k as h,a4 as s,a5 as o,n as c}from"./l2PV5vIv.js";import{h as r}from"./PcRRlBoN.js";const m={title:"UNIX-Like And Packages",description:"Why sometimes everything seems messy on Linux? why the whole free software community still uses C?",created_at:"2024-06-30",updated_at:"2025-02-20",technologies:["Linux","C"]},{title:w,description:x,created_at:v,updated_at:L,technologies:S}=m;var u=p(`<h1 id="unix-like-and-packages"><a aria-hidden="true" tabindex="-1" href="#unix-like-and-packages"><span class="icon icon-link"></span></a>UNIX-Like And Packages</h1> <p>Why sometimes everything seems messy on Linux? Why the whole Free Software community still uses C?</p> <h2 id="linux-packages"><a aria-hidden="true" tabindex="-1" href="#linux-packages"><span class="icon icon-link"></span></a>Linux Packages</h2> <p>Generalizing, when someone begins on Linux, it happens with a famous distribution. After install, it
is possible to install the programs using terminal commands. Usually, these commands are just <strong>CLIs</strong> that behave as <strong>frontend</strong> for the <strong>package managers</strong>.</p> <table><thead><tr><th>distro</th><th>frontend</th><th>backend</th></tr></thead><tbody><tr><td>debian</td><td>apt</td><td>dpkg</td></tr><tr><td>arch</td><td>pacman</td><td>pacman</td></tr><tr><td>fedora</td><td>yum</td><td>rpm</td></tr><tr><td>fedora</td><td>dnf</td><td>rpm</td></tr><tr><td>gentoo</td><td>emerge</td><td>portage</td></tr></tbody></table> <blockquote><p>Most common <strong>terminal commands</strong> and <strong>package managers</strong> in Linux world</p></blockquote> <p>One of the <strong>free software</strong> principles is the <em>freedom of choise</em>. When it comes to package
managers, each distro uses a specific one.</p> <h2 id="c-the-lingua-franca"><a aria-hidden="true" tabindex="-1" href="#c-the-lingua-franca"><span class="icon icon-link"></span></a>C, The Lingua Franca</h2> <p>The basic programs of every operational system are all written in <strong>C</strong>. This is not just the reflex
of a 50 years legaly, but also something intentional, because a unique feature of this programming
language: <strong>dynamic linking</strong>. This features allow to compile a program that depends on many
libraries without having them avaliable at compile time, just with the <strong>headers</strong> files.</p> <p>Imagine for example that in your Linux, 50 programs use a cryptography library called <strong>libre_crypto</strong>. When running the software update through the package manager, this lib gets
updated from version <strong>2.11</strong> up to <strong>2.12</strong>. All the 50 programs will use this updated lib, with
the bonus of the fixed bugs and the onus of possible new bugs.</p> <p>In practice, it is a bit more complicated, since every package manager has a different strategy of
packaging to minimize breaking changes with updates. For deepening, I recommend the reading of the
excelent article <a href="https://dmerej.info/blog/post/symlinks-and-so-files-on-linux/" rel="nofollow">symlinks and .so files on linux - what you need to know</a>.</p> <h3 id="analogy"><a aria-hidden="true" tabindex="-1" href="#analogy"><span class="icon icon-link"></span></a>Analogy</h3> <p>It is possible to compare this behavior with <strong>NodeJS</strong>. Imagine the following import:</p> <pre class="language-js"><!></pre> <p>When the program gets executed, <strong>NodeJS</strong> will lookup for the directory <strong>node_modules/react</strong>.</p> <p>Similar way, when a <strong>C</strong> program makes the following include:</p> <pre class="language-c"><!></pre> <p>When the program gets executed, the <strong>Operational System</strong> will lookup for the file <strong>/usr/lib/libSDL2.so</strong>.</p> <h2 id="the-father-of-all"><a aria-hidden="true" tabindex="-1" href="#the-father-of-all"><span class="icon icon-link"></span></a>The Father Of All</h2> <p>Let’s briefly return to the <em>beginning of History, january 1st 1970</em>. A new Operational System was
being created at Bell Labs, the <strong>UNIX</strong>. In short period of time, this system becamed used in
universities all along the United States and soon people started creating their own <strong>UNIX</strong>, with
many distributions created. As a result, currently, the main open source <strong>UNIX-like</strong> Operational
Systems are:</p> <ul><li>GNU/Linux</li> <li>OpenBSD</li> <li>FreeBSD</li> <li>Minix</li></ul> <p>All these systems have <strong>more or less</strong> the same <strong>APIs</strong> avalialble for any program. What means
that, any program written thinking on <strong>GNU/Linux</strong> can be ported to <strong>OpenBSD</strong> or to <strong>FreeBSD</strong>,
or vice-versa.</p> <p>This implies that it is possible to run <strong>ZSH</strong>, <strong>fastfetch</strong>, and even <strong>gnome</strong> both on <strong>GNU/Linux</strong> and <strong>OpenBSD</strong>, and these are <em>real examples I found on the Internet</em>.</p> <h2 id="conclusion"><a aria-hidden="true" tabindex="-1" href="#conclusion"><span class="icon icon-link"></span></a>Conclusion</h2> <p>The freedom of free software sometimes can lead to compatibility problems and bugs. But it is
important to understand the challenges and advatanges of keeping a portability of programs between
UNIX-like systems.</p>`,1);function I(i){var t=u(),e=n(h(t),26),l=s(e);r(l,()=>'<code class="language-js"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span></code>'),o(e);var a=n(e,6),g=s(a);r(g,()=>'<code class="language-c"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;SDL2/SDL.h></span></span></code>'),o(a),c(16),d(i,t)}export{I as default,m as metadata};
