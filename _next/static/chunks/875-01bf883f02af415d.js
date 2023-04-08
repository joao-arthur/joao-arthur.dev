(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[875],{4875:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var u=o.apply(null,r);u&&e.push(u)}}else if("object"===l){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0!==(r=(function(){return o}).apply(t,[]))&&(e.exports=r)}()},8826:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4604:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(1322).Z,o=r(6239).Z,l=n(r(959)),u=r(9697),a=r(9703),i=r(1921),c=r(8887),f=r(6306),s=r(2659),p=r(7968),d=r(4903),v=r(8826),y=r(3755);let h=new Set;function b(e,t,r,n,o){if(o||a.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+o;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function g(e){return"string"==typeof e?e:i.formatUrl(e)}let m=l.default.forwardRef(function(e,t){let r,n;let{href:i,as:h,children:m,prefetch:O,passHref:C,replace:j,shallow:_,scroll:E,locale:w,onClick:k,onMouseEnter:x,onTouchStart:M,legacyBehavior:P=!1}=e,S=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=m,P&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));let L=!1!==O,N=l.default.useContext(s.RouterContext),I=l.default.useContext(p.AppRouterContext),R=null!=N?N:I,T=!N,{href:A,as:z}=l.default.useMemo(()=>{if(!N){let e=g(i);return{href:e,as:h?g(h):e}}let[e,t]=u.resolveHref(N,i,!0);return{href:e,as:h?u.resolveHref(N,h):t||e}},[N,i,h]),U=l.default.useRef(A),D=l.default.useRef(z);P&&(n=l.default.Children.only(r));let K=P?n&&"object"==typeof n&&n.ref:t,[H,B,Z]=d.useIntersection({rootMargin:"200px"}),q=l.default.useCallback(e=>{(D.current!==z||U.current!==A)&&(Z(),D.current=z,U.current=A),H(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[z,K,A,Z,H]);l.default.useEffect(()=>{R&&B&&L&&b(R,A,z,{locale:w},T)},[z,A,B,w,L,null==N?void 0:N.locale,R,T]);let W={ref:q,onClick(e){P||"function"!=typeof k||k(e),P&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,r,n,o,u,i,c,f,s){let{nodeName:p}=e.currentTarget,d="A"===p.toUpperCase();if(d&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!f&&!a.isLocalURL(r)))return;e.preventDefault();let v=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:u,locale:c,scroll:i}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!s})};f?l.default.startTransition(v):v()}(e,R,A,z,j,_,E,w,T,L)},onMouseEnter(e){P||"function"!=typeof x||x(e),P&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),R&&(L||!T)&&b(R,A,z,{locale:w,priority:!0,bypassPrefetchedCheck:!0},T)},onTouchStart(e){P||"function"!=typeof M||M(e),P&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),R&&(L||!T)&&b(R,A,z,{locale:w,priority:!0,bypassPrefetchedCheck:!0},T)}};if(c.isAbsoluteUrl(z))W.href=z;else if(!P||C||"a"===n.type&&!("href"in n.props)){let e=void 0!==w?w:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&v.getDomainLocale(z,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);W.href=t||y.addBasePath(f.addLocale(z,e,null==N?void 0:N.defaultLocale))}return P?l.default.cloneElement(n,W):l.default.createElement("a",Object.assign({},S,W),r)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4903:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:i}=e,c=i||!l,[f,s]=n.useState(!1),p=n.useRef(null),d=n.useCallback(e=>{p.current=e},[]);n.useEffect(()=>{if(l){if(c||f)return;let e=p.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:o},a.push(r),u.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!f){let e=o.requestIdleCallback(()=>s(!0));return()=>o.cancelIdleCallback(e)}},[c,r,t,f,p.current]);let v=n.useCallback(()=>{s(!1)},[]);return[d,f,v]};var n=r(959),o=r(8e3);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3670:function(e,t,r){e.exports=r(4369)},1525:function(e,t,r){e.exports=r(4604)},847:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var n=r(959),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(o),u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function i(e){return function(t){return n.createElement(c,u({attr:u({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,u({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,o=e.attr,l=e.size,i=e.title,c=a(e,["attr","size","title"]),f=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==l?n.createElement(l.Consumer,null,function(e){return t(e)}):t(o)}}}]);