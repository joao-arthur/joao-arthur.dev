"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{93038:(e,t,o)=>{o.r(t),o.d(t,{CssVarsProvider:()=>g,Experimental_CssVarsProvider:()=>h,getInitColorSchemeScript:()=>S,useColorScheme:()=>m}),o(76847);var r=o(36919),l=o(66361),n=o(216),c=o(48704),i=o(88886),a=o(51047);let s={colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:d,useColorScheme:m,getInitColorSchemeScript:u}=(0,l.default)({themeId:i.A,theme:()=>(0,n.A)({cssVariables:!0}),colorSchemeStorageKey:s.colorSchemeStorageKey,modeStorageKey:s.modeStorageKey,defaultColorScheme:{light:s.defaultLightColorScheme,dark:s.defaultDarkColorScheme},resolveTheme:e=>{let t={...e,typography:(0,c.A)(e.palette,e.typography)};return t.unstable_sx=function(e){return(0,r.A)({sx:e,theme:this})},t}});function h(e){return(0,a.jsx)(d,{...e})}let f=!1,S=e=>(f||(console.warn("MUI: The getInitColorSchemeScript function has been deprecated.\n\nYou should use `import InitColorSchemeScript from '@mui/material/InitColorSchemeScript'`\nand replace the function call with `<InitColorSchemeScript />` instead."),f=!0),u(e)),g=d},95609:(e,t,o)=>{o.d(t,{A:()=>r});let r=o(76847).createContext(null)},26957:(e,t,o)=>{o.d(t,{A:()=>n});var r=o(76847),l=o(95609);function n(){return r.useContext(l.A)}},96052:(e,t,o)=>{o.r(t),o.d(t,{default:()=>i,useRtl:()=>c});var r=o(76847),l=o(51047);let n=r.createContext(),c=()=>{let e=r.useContext(n);return null!=e&&e},i=function(e){let{value:t,...o}=e;return(0,l.jsx)(n.Provider,{value:null==t||t,...o})}},36832:(e,t,o)=>{o.d(t,{default:()=>S});var r=o(76847),l=o(26957),n=o(95609);let c="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__";var i=o(51047);let a=function(e){let{children:t,theme:o}=e,a=(0,l.A)(),s=r.useMemo(()=>{let e=null===a?{...o}:"function"==typeof o?o(a):{...a,...o};return null!=e&&(e[c]=null!==a),e},[o,a]);return(0,i.jsx)(n.A.Provider,{value:s,children:t})};var s=o(91346),d=o(36799),m=o(96052),u=o(98993);let h={};function f(e,t,o){let l=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return r.useMemo(()=>{let r=e&&t[e]||t;if("function"==typeof o){let n=o(r),c=e?{...t,[e]:n}:n;return l?()=>c:c}return e?{...t,[e]:o}:{...t,...o}},[e,t,o,l])}let S=function(e){let{children:t,theme:o,themeId:r}=e,n=(0,d.default)(h),c=(0,l.A)()||h,S=f(r,n,o),g=f(r,c,o,!0),p="rtl"===(r?S[r]:S).direction;return(0,i.jsx)(a,{theme:g,children:(0,i.jsx)(s.T.Provider,{value:S,children:(0,i.jsx)(m.default,{value:p,children:(0,i.jsx)(u.A,{value:r?S[r].components:S.components,children:t})})})})}},66361:(e,t,o)=>{o.r(t),o.d(t,{DISABLE_CSS_TRANSITION:()=>f,default:()=>S});var r=o(76847),l=o(82374),n=o(26957),c=o(65381),i=o(36832),a=o(51047);let s="mode",d="color-scheme";function m(e){if("undefined"!=typeof window&&"function"==typeof window.matchMedia&&"system"===e)return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function u(e,t){return"light"===e.mode||"system"===e.mode&&"light"===e.systemMode?t("light"):"dark"===e.mode||"system"===e.mode&&"dark"===e.systemMode?t("dark"):void 0}function h(e,t){let o;if("undefined"!=typeof window){try{(o=localStorage.getItem(e)||void 0)||localStorage.setItem(e,t)}catch(e){}return o||t}}let f="*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function S(e){let{themeId:t,theme:o={},modeStorageKey:S=s,colorSchemeStorageKey:g=d,disableTransitionOnChange:p=!1,defaultColorScheme:y,resolveTheme:v}=e,k={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},C=r.createContext(void 0),w={},b={},x="string"==typeof y?y:y.light,I="string"==typeof y?y:y.dark;return{CssVarsProvider:function(e){var k,x,I,M;let{children:A,theme:E,modeStorageKey:$=S,colorSchemeStorageKey:j=g,disableTransitionOnChange:_=p,storageWindow:L="undefined"==typeof window?void 0:window,documentNode:T="undefined"==typeof document?void 0:document,colorSchemeNode:K="undefined"==typeof document?void 0:document.documentElement,disableNestedContext:P=!1,disableStyleSheetGeneration:V=!1,defaultMode:W="system",noSsr:N}=e,D=r.useRef(!1),O=(0,n.A)(),R=r.useContext(C),H=!!R&&!P,q=r.useMemo(()=>E||("function"==typeof o?o():o),[E]),z=q[t],B=z||q,{colorSchemes:F=w,components:U=b,cssVarPrefix:Y}=B,G=Object.keys(F).filter(e=>!!F[e]).join(","),J=r.useMemo(()=>G.split(","),[G]),Q="string"==typeof y?y:y.light,X="string"==typeof y?y:y.dark,Z=F[Q]&&F[X]?W:(null===(x=F[B.defaultColorScheme])||void 0===x?void 0:null===(k=x.palette)||void 0===k?void 0:k.mode)||(null===(I=B.palette)||void 0===I?void 0:I.mode),{mode:ee,setMode:et,systemMode:eo,lightColorScheme:er,darkColorScheme:el,colorScheme:en,setColorScheme:ec}=function(e){let{defaultMode:t="light",defaultLightColorScheme:o,defaultDarkColorScheme:l,supportedColorSchemes:n=[],modeStorageKey:c=s,colorSchemeStorageKey:i=d,storageWindow:a="undefined"==typeof window?void 0:window,noSsr:f=!1}=e,S=n.join(","),g=n.length>1,[p,y]=r.useState(()=>{let e=h(c,t),r=h("".concat(i,"-light"),o),n=h("".concat(i,"-dark"),l);return{mode:e,systemMode:m(e),lightColorScheme:r,darkColorScheme:n}}),[v,k]=r.useState(f||!g);r.useEffect(()=>{k(!0)},[]);let C=u(p,e=>"light"===e?p.lightColorScheme:"dark"===e?p.darkColorScheme:void 0),w=r.useCallback(e=>{y(o=>{if(e===o.mode)return o;let r=null!=e?e:t;try{localStorage.setItem(c,r)}catch(e){}return{...o,mode:r,systemMode:m(r)}})},[c,t]),b=r.useCallback(e=>{e?"string"==typeof e?e&&!S.includes(e)?console.error("`".concat(e,"` does not exist in `theme.colorSchemes`.")):y(t=>{let o={...t};return u(t,t=>{try{localStorage.setItem("".concat(i,"-").concat(t),e)}catch(e){}"light"===t&&(o.lightColorScheme=e),"dark"===t&&(o.darkColorScheme=e)}),o}):y(t=>{let r={...t},n=null===e.light?o:e.light,c=null===e.dark?l:e.dark;if(n){if(S.includes(n)){r.lightColorScheme=n;try{localStorage.setItem("".concat(i,"-light"),n)}catch(e){}}else console.error("`".concat(n,"` does not exist in `theme.colorSchemes`."))}if(c){if(S.includes(c)){r.darkColorScheme=c;try{localStorage.setItem("".concat(i,"-dark"),c)}catch(e){}}else console.error("`".concat(c,"` does not exist in `theme.colorSchemes`."))}return r}):y(e=>{try{localStorage.setItem("".concat(i,"-light"),o),localStorage.setItem("".concat(i,"-dark"),l)}catch(e){}return{...e,lightColorScheme:o,darkColorScheme:l}})},[S,i,o,l]),x=r.useCallback(e=>{"system"===p.mode&&y(t=>{let o=(null==e?void 0:e.matches)?"dark":"light";return t.systemMode===o?t:{...t,systemMode:o}})},[p.mode]),I=r.useRef(x);return I.current=x,r.useEffect(()=>{if("function"!=typeof window.matchMedia||!g)return;let e=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return I.current(...t)},t=window.matchMedia("(prefers-color-scheme: dark)");return t.addListener(e),e(t),()=>{t.removeListener(e)}},[g]),r.useEffect(()=>{if(a&&g){let e=e=>{let o=e.newValue;"string"==typeof e.key&&e.key.startsWith(i)&&(!o||S.match(o))&&(e.key.endsWith("light")&&b({light:o}),e.key.endsWith("dark")&&b({dark:o})),e.key===c&&(!o||["light","dark","system"].includes(o))&&w(o||t)};return a.addEventListener("storage",e),()=>{a.removeEventListener("storage",e)}}},[b,w,c,i,S,t,a,g]),{...p,mode:v?p.mode:void 0,systemMode:v?p.systemMode:void 0,colorScheme:v?C:void 0,setMode:w,setColorScheme:b}}({supportedColorSchemes:J,defaultLightColorScheme:Q,defaultDarkColorScheme:X,modeStorageKey:$,colorSchemeStorageKey:j,defaultMode:Z,storageWindow:L,noSsr:N}),ei=ee,ea=en;H&&(ei=R.mode,ea=R.colorScheme);let es=r.useMemo(()=>{var e;let t=ea||B.defaultColorScheme,o=(null===(e=B.generateThemeVars)||void 0===e?void 0:e.call(B))||B.vars,r={...B,components:U,colorSchemes:F,cssVarPrefix:Y,vars:o};if("function"==typeof r.generateSpacing&&(r.spacing=r.generateSpacing()),t){let e=F[t];e&&"object"==typeof e&&Object.keys(e).forEach(t=>{e[t]&&"object"==typeof e[t]?r[t]={...r[t],...e[t]}:r[t]=e[t]})}return v?v(r):r},[B,ea,U,F,Y]),ed=B.colorSchemeSelector;(0,c.A)(()=>{if(ea&&K&&ed&&"media"!==ed){let e=ed;if("class"===ed&&(e=".%s"),"data"===ed&&(e="[data-%s]"),(null==ed?void 0:ed.startsWith("data-"))&&!ed.includes("%s")&&(e="[".concat(ed,'="%s"]')),e.startsWith("."))K.classList.remove(...J.map(t=>e.substring(1).replace("%s",t))),K.classList.add(e.substring(1).replace("%s",ea));else{let t=e.replace("%s",ea).match(/\[([^\]]+)\]/);if(t){let[e,o]=t[1].split("=");o||J.forEach(t=>{K.removeAttribute(e.replace(ea,t))}),K.setAttribute(e,o?o.replace(/"|'/g,""):"")}else K.setAttribute(e,ea)}}},[ea,ed,K,J]),r.useEffect(()=>{let e;if(_&&D.current&&T){let t=T.createElement("style");t.appendChild(T.createTextNode(f)),T.head.appendChild(t),window.getComputedStyle(T.body),e=setTimeout(()=>{T.head.removeChild(t)},1)}return()=>{clearTimeout(e)}},[ea,_,T]),r.useEffect(()=>(D.current=!0,()=>{D.current=!1}),[]);let em=r.useMemo(()=>({allColorSchemes:J,colorScheme:ea,darkColorScheme:el,lightColorScheme:er,mode:ei,setColorScheme:ec,setMode:et,systemMode:eo}),[J,ea,el,er,ei,ec,et,eo,es.colorSchemeSelector]),eu=!0;(V||!1===B.cssVariables||H&&(null==O?void 0:O.cssVarPrefix)===Y)&&(eu=!1);let eh=(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(i.default,{themeId:z?t:void 0,theme:es,children:A}),eu&&(0,a.jsx)(l.default,{styles:(null===(M=es.generateStyleSheets)||void 0===M?void 0:M.call(es))||[]})]});return H?eh:(0,a.jsx)(C.Provider,{value:em,children:eh})},useColorScheme:()=>r.useContext(C)||k,getInitColorSchemeScript:e=>(function(e){let{defaultMode:t="system",defaultLightColorScheme:o="light",defaultDarkColorScheme:r="dark",modeStorageKey:l=s,colorSchemeStorageKey:n=d,attribute:c="data-color-scheme",colorSchemeNode:i="document.documentElement",nonce:m}=e||{},u="",h=c;if("class"===c&&(h=".%s"),"data"===c&&(h="[data-%s]"),h.startsWith(".")){let e=h.substring(1);u+=`${i}.classList.remove('${e}'.replace('%s', light), '${e}'.replace('%s', dark));
      ${i}.classList.add('${e}'.replace('%s', colorScheme));`}let f=h.match(/\[([^\]]+)\]/);if(f){let[e,t]=f[1].split("=");t||(u+=`${i}.removeAttribute('${e}'.replace('%s', light));
      ${i}.removeAttribute('${e}'.replace('%s', dark));`),u+=`
      ${i}.setAttribute('${e}'.replace('%s', colorScheme), ${t?`${t}.replace('%s', colorScheme)`:'""'});`}else u+=`${i}.setAttribute('${h}', colorScheme);`;return(0,a.jsx)("script",{suppressHydrationWarning:!0,nonce:"undefined"==typeof window?m:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${l}') || '${t}';
  const dark = localStorage.getItem('${n}-dark') || '${r}';
  const light = localStorage.getItem('${n}-light') || '${o}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${u}
  }
} catch(e){}})();`}},"mui-color-scheme-init")})({colorSchemeStorageKey:g,defaultLightColorScheme:x,defaultDarkColorScheme:I,modeStorageKey:S,...e})}}},65381:(e,t,o)=>{o.d(t,{A:()=>l});var r=o(76847);let l="undefined"!=typeof window?r.useLayoutEffect:r.useEffect}}]);