import{t as c,a as d}from"./Bv4VJJ99.js";import{k as _,O as n,P as g,Q as h,C as v,y,D as A,M as N}from"./B4rLlicd.js";import{s as m}from"./BTv-0rLR.js";import{s as w,c as x}from"./D16LBrjD.js";import{p as i}from"./CHNtH45D.js";function p(r,s,o,t){var a=r.__attributes??(r.__attributes={});_&&(a[s]=r.getAttribute(s),s==="src"||s==="srcset"||s==="href"&&r.nodeName==="LINK")||a[s]!==(a[s]=o)&&(s==="style"&&"__styles"in r&&(r.__styles={}),s==="loading"&&(r[n]=o),o==null?r.removeAttribute(s):typeof o!="string"&&L(r).includes(s)?r[s]=o:r.setAttribute(s,o))}var e=new Map;function L(r){var s=e.get(r.nodeName);if(s)return s;e.set(r.nodeName,s=[]);for(var o,t=r,a=Element.prototype;a!==t;){o=h(t);for(var f in o)o[f].set&&s.push(f);t=g(t)}return s}var M=c("<a><!></a>");function B(r,s){const o=i(s,"target",19,()=>{}),t=i(s,"decorated",3,!1);var a=M(),f=v(a);m(f,()=>s.children??y),A(a),N(()=>{p(a,"href",s.href),p(a,"target",o()),w(a,x(t()?"decorated":""),"svelte-sus4x7")}),d(r,a)}export{B as A,p as s};
