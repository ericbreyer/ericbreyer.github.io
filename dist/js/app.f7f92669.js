(function(){"use strict";var e={4426:function(e,t,r){var n=r(9963),o=r(6252),a=r(3577);const i={id:"body"},l={id:"logo"},u={id:"nav"};function c(e,t,r,n,c,s){const d=(0,o.up)("typewriter"),m=(0,o.up)("router-link"),h=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(d),(0,o._)("div",{id:"mainBody",class:(0,a.C_)({wide:"Gallery"==e.$route.name})},[(0,o._)("div",l,[(0,o._)("img",{src:"/static/logo.png",alt:"crabLogo",width:"75px",height:"75px",onClick:t[0]||(t[0]=(...e)=>s.toggleCoolGold&&s.toggleCoolGold(...e))})]),(0,o._)("div",u,[(0,o.Wm)(m,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1}),(0,o.Wm)(m,{to:"/gallery#me"},{default:(0,o.w5)((()=>[(0,o.Uk)("Gallery")])),_:1}),(0,o.Wm)(m,{to:"/computer"},{default:(0,o.w5)((()=>[(0,o.Uk)("Computer")])),_:1}),(0,o.Wm)(m,{to:"/480"},{default:(0,o.w5)((()=>[(0,o.Uk)("FXLT")])),_:1})]),(0,o.Wm)(h)],2)])}const s=e=>((0,o.dD)("data-v-126cfaa5"),e=e(),(0,o.Cn)(),e),d={id:"intro"},m=s((()=>(0,o._)("div",{id:"line1",class:"line"},"Hello!",-1))),h=s((()=>(0,o._)("div",{id:"line2",class:"line"},[(0,o.Uk)(" My name is "),(0,o._)("span",{class:"coolGold"},"Eric Breyer"),(0,o.Uk)(". ")],-1))),f=s((()=>(0,o._)("div",{id:"line3",class:"line"},"Welcome to my corner of the internet 🌐",-1))),p=[m,h,f];function g(e,t,r,n,a,i){return(0,o.wg)(),(0,o.iD)("div",d,p)}var v={name:"TypeWriter",components:{}},b=r(3744);const y=(0,b.Z)(v,[["render",g],["__scopeId","data-v-126cfaa5"]]);var _=y,w={name:"App",components:{Typewriter:_},data(){return{colorIdx:Math.floor(2*Math.random()),t:void 0}},methods:{toggleCoolGold:function(){this.t&&clearTimeout(this.t),0==this.colorIdx?document.documentElement.style.setProperty("--cool-gold","141, 83, 255"):1==this.colorIdx&&document.documentElement.style.setProperty("--cool-gold","41, 214, 185"),this.colorIdx=1-this.colorIdx,this.t=setTimeout(this.toggleCoolGold,3e4)}},created(){this.toggleCoolGold()}};const k=(0,b.Z)(w,[["render",c]]);var C=k,E=r(2201);const L=e=>((0,o.dD)("data-v-74545900"),e=e(),(0,o.Cn)(),e),S=L((()=>(0,o._)("h1",null,"Me",-1))),T=L((()=>(0,o._)("hr",null,null,-1))),U=L((()=>(0,o._)("h1",null,"Projects",-1))),W=L((()=>(0,o._)("hr",null,null,-1))),I=L((()=>(0,o._)("li",null,[(0,o._)("a",{target:"_blank",href:"https://github.com/ericbreyer/coco"},"Coco"),(0,o.Uk)(": A lightweight, cooperative operating system written in standard C for embedded environments ")],-1))),x=L((()=>(0,o._)("li",null,[(0,o._)("a",{target:"_blank",href:"https://github.com/ericbreyer/serenity"},"Serenity"),(0,o.Uk)(" A custom c-like programming language with closures and struct methods. Lexer, parser, and compiler implemented in Rust targeting LLVM IR ")],-1))),A=L((()=>(0,o._)("li",null,[(0,o._)("a",{target:"_blank",href:"https://github.com/ericbreyer/NondeterministicSudoku"},"Nondeterministic Sudoku Solver"),(0,o.Uk)(": A magic sudoku solver implemented using the "),(0,o._)("code",null,"amb"),(0,o.Uk)(" form in scheme/racket and logic programming ")],-1))),O=L((()=>(0,o._)("li",null,[(0,o._)("a",{target:"_blank",href:"https://github.com/ericbreyer/LambdaCalculus"},"Writing Scheme with Pure Lambda Calculus"),(0,o.Uk)(": A series of Racket macros to transform Scheme syntax into pure lambda calculus computation. "),(0,o._)("i",null," I am also working on a way to represent universal turing machines with pure lambda calculus using these macros. I have not written the writeup yet, but the code is in this repository.")],-1))),j=L((()=>(0,o._)("h1",null,"Writings",-1))),M=L((()=>(0,o._)("hr",null,null,-1))),P=(0,o.uE)('<ul data-v-74545900><li data-v-74545900><a target="_blank" href="/static/introtolc.pdf" data-v-74545900>Lambda Calculus Exploration</a>: Learning about Lambda Calculus, combinators, and functional programming concepts </li><li data-v-74545900><a target="_blank" href="/static/Pure_LC_Scheme_Macros.pdf" data-v-74545900>Writing Scheme in Scheme</a>: Companion for &quot;Writing Scheme with Pure Lambda Calculus&quot; project </li><li data-v-74545900><a target="_blank" href="https://docs.google.com/document/d/1udyeh_N8O74573erzfXaw_pQkFyo9swuM0iWjnVWxM8/edit" data-v-74545900>WC1308-EAL Technical Writeup</a>: Technical writeup for breadboard processor </li><li data-v-74545900><a target="_blank" href="https://eric-breyer.medium.com/" data-v-74545900>Medium Articles</a>: Published some stuff relating to cool functional programming concepts here to try to help others learn </li></ul><h1 data-v-74545900>Find Me Online</h1><hr data-v-74545900><ul data-v-74545900><li data-v-74545900> GitHub: <a target="_blank" href="https://github.com/ericbreyer" data-v-74545900>ericbreyer</a></li><li data-v-74545900> LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/eric-breyer" data-v-74545900>Eric Breyer</a></li><li data-v-74545900> Medium: <a target="_blank" href="https://eric-breyer.medium.com/" data-v-74545900>Eric Breyer</a></li><li data-v-74545900> Itch.io: <a target="_blank" href="https://wild-mortimer.itch.io/" data-v-74545900>Wild_Mortimer</a></li><li data-v-74545900> YouTube: <a target="_blank" href="https://www.youtube.com/channel/UCJUtMYyEcdAQNTKuja74Alg" data-v-74545900>Eric Breyer</a></li><li data-v-74545900> Instagram: <a target="_blank" href="https://www.instagram.com/eric_breyer/" data-v-74545900>eric_breyer</a></li><li data-v-74545900>Discord: @Wild_Mortimer#8607</li></ul>',4);function N(e,t){const r=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[S,T,(0,o.Uk)("     I am a fourth-year computer science student at Rice University with a passion for solving complex computer science problems from embedded C programming to web development. Here are some of the things I have made and written that I think are cool. More on github and elsewhere. "),U,W,(0,o.Uk)("     Some projects I wanted to highlight. There are some more things on my Github. "),(0,o._)("ul",null,[(0,o._)("li",null,[(0,o.Wm)(r,{to:"/computer"},{default:(0,o.w5)((()=>[(0,o.Uk)("WC1308-EAL Breadboard Computer")])),_:1}),(0,o.Uk)(": Processor built with discrete TTL components on breadboards ")]),I,x,(0,o._)("li",null,[(0,o.Wm)(r,{to:"/480"},{default:(0,o.w5)((()=>[(0,o.Uk)("Fuse XORier Lookup Table")])),_:1}),(0,o.Uk)(": Paper for a probabilistic data structure which implements an associative array in sub-linear space, sacrificing a small false positive rate. ")]),A,O]),j,M,(0,o.Uk)("     I write a lot of stuff down about what I am working on/learning about. So why not put it on the internet. "),P])}const G={},B=(0,b.Z)(G,[["render",N],["__scopeId","data-v-74545900"]]);var D=B;const F=[{path:"/",name:"Home",component:D},{path:"/gallery",name:"Gallery",component:()=>r.e(443).then(r.bind(r,8677))},{path:"/computer",name:"Computer",component:()=>r.e(443).then(r.bind(r,1557))},{path:"/480",name:"480",component:()=>r.e(443).then(r.bind(r,2680))}],H=(0,E.p7)({history:(0,E.r5)(),mode:"hash",routes:F});var R=H;(0,n.ri)(C).use(R).mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,a){if(!n){var i=1/0;for(s=0;s<e.length;s++){n=e[s][0],o=e[s][1],a=e[s][2];for(var l=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(l=!1,a<i&&(i=a));if(l){e.splice(s--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[n,o,a]}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/about.67201330.js"}}(),function(){r.miniCssF=function(e){return"css/about.e147a420.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="personal-site:";r.l=function(n,o,a,i){if(e[n])e[n].push(o);else{var l,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){l=d;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+a),l.src=n),e[n]=[o];var m=function(t,r){l.onerror=l.onload=null,clearTimeout(h);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(r)})),t)return t(r)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),u&&document.head.appendChild(l)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,n,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(r){if(a.onerror=a.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=l,a.parentNode&&a.parentNode.removeChild(a),o(u)}};return a.onerror=a.onload=i,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=function(n){return new Promise((function(o,a){var i=r.miniCssF(n),l=r.p+i;if(t(i,l))return o();e(n,l,null,o,a)}))},o={143:0};r.f.miniCss=function(e,t){var r={443:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(r,n){o=e[t]=[r,n]}));n.push(o[2]=a);var i=r.p+r.u(t),l=new Error,u=function(n){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,o[1](l)}};r.l(i,u,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,i=n[0],l=n[1],u=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(u)var s=u(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(s)},n=self["webpackChunkpersonal_site"]=self["webpackChunkpersonal_site"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(4426)}));n=r.O(n)})();
//# sourceMappingURL=app.f7f92669.js.map