import{ab as g,a8 as L,ac as S,W as b,a7 as p,x as c,w as R,m as I,B as _,D as O,a6 as V,ad as H,P,F as Y,ae as C,af as M,z as W,p as $,c as j,l as w,L as k,a as z}from"./l2PV5vIv.js";import{a as B,r as N,h}from"./gjsaLME-.js";import{d as F,r as q}from"./BAQlJMdJ.js";const G=["touchstart","touchmove"];function J(t){return G.includes(t)}function Z(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r+"")}function K(t,e){return A(t,e)}function x(t,e){g(),e.intro=e.intro??!1;const r=e.target,u=w,l=_;try{for(var a=L(r);a&&(a.nodeType!==8||a.data!==S);)a=b(a);if(!a)throw p;c(!0),R(a),I();const i=A(t,{...e,anchor:a});if(_===null||_.nodeType!==8||_.data!==O)throw V(),p;return c(!1),i}catch(i){if(i===p)return e.recover===!1&&H(),g(),P(r),c(!1),K(t,e);throw i}finally{c(u),R(l),q()}}const d=new Map;function A(t,{target:e,anchor:r,props:u={},events:l,context:a,intro:i=!0}){g();var v=new Set,y=o=>{for(var s=0;s<o.length;s++){var n=o[s];if(!v.has(n)){v.add(n);var f=J(n);e.addEventListener(n,h,{passive:f});var T=d.get(n);T===void 0?(document.addEventListener(n,h,{passive:f}),d.set(n,1)):d.set(n,T+1)}}};y(Y(B)),N.add(y);var m=void 0,D=C(()=>{var o=r??e.appendChild(M());return W(()=>{if(a){$({});var s=j;s.c=a}l&&(u.$$events=l),w&&F(o,null),m=t(o,u)||{},w&&(k.nodes_end=_),a&&z()}),()=>{var f;for(var s of v){e.removeEventListener(s,h);var n=d.get(s);--n===0?(document.removeEventListener(s,h),d.delete(s)):d.set(s,n)}N.delete(y),o!==r&&((f=o.parentNode)==null||f.removeChild(o))}});return E.set(m,D),m}let E=new WeakMap;function ee(t,e){const r=E.get(t);return r?(E.delete(t),r(e)):Promise.resolve()}export{x as h,K as m,Z as s,ee as u};
