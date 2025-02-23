import './polyfills.server.mjs';
import{A as b2,B as c1,C as f,D as b,E as w,F as v,M as v2,O as l1,P as N2,Q as I,R as S2,S as y2,T as H2,W as w2,_ as k2,a as H1,b as i2,ba as A2,c as g,ca as V2,d as t2,e as f2,f as M1,g as r2,h as m2,i as z2,j as L2,k as Q,l as M2,m as p,n as O,o as p2,p as G,q as C2,r as N,s as o,t as i,u as z,v as h2,w as d2,x as u2,y as x2,z as g2}from"./chunk-EKYUY7D7.mjs";function o4(c,a,l){return(a=t4(a))in c?Object.defineProperty(c,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):c[a]=l,c}function P2(c,a){var l=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),l.push.apply(l,e)}return l}function r(c){for(var a=1;a<arguments.length;a++){var l=arguments[a]!=null?arguments[a]:{};a%2?P2(Object(l),!0).forEach(function(e){o4(c,e,l[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(l)):P2(Object(l)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(l,e))})}return c}function i4(c,a){if(typeof c!="object"||!c)return c;var l=c[Symbol.toPrimitive];if(l!==void 0){var e=l.call(c,a||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(c)}function t4(c){var a=i4(c,"string");return typeof a=="symbol"?a:a+""}var T2=()=>{},X1={},n3={},o3=null,i3={mark:T2,measure:T2};try{typeof window<"u"&&(X1=window),typeof document<"u"&&(n3=document),typeof MutationObserver<"u"&&(o3=MutationObserver),typeof performance<"u"&&(i3=performance)}catch{}var{userAgent:F2=""}=X1.navigator||{},Z=X1,x=n3,E2=o3,p1=i3,w6=!!Z.document,R=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",t3=~F2.indexOf("MSIE")||~F2.indexOf("Trident/"),f4=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,r4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,f3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},m4={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},r3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],S="classic",g1="duotone",z4="sharp",L4="sharp-duotone",m3=[S,g1,z4,L4],M4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},p4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},C4=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),h4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},d4=["fak","fa-kit","fakd","fa-kit-duotone"],D2={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},u4=["kit"],x4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},g4=["fak","fakd"],b4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},q2={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},C1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},v4=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],N4=["fak","fa-kit","fakd","fa-kit-duotone"],S4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},y4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},H4={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},T1={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},w4=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],F1=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...v4,...w4],k4=["solid","regular","light","thin","duotone","brands"],z3=[1,2,3,4,5,6,7,8,9,10],A4=z3.concat([11,12,13,14,15,16,17,18,19,20]),V4=[...Object.keys(H4),...k4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",C1.GROUP,C1.SWAP_OPACITY,C1.PRIMARY,C1.SECONDARY].concat(z3.map(c=>"".concat(c,"x"))).concat(A4.map(c=>"w-".concat(c))),P4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},D="___FONT_AWESOME___",E1=16,L3="fa",M3="svg-inline--fa",K="data-fa-i2svg",D1="data-fa-pseudo-element",T4="data-fa-pseudo-element-pending",$1="data-prefix",J1="data-icon",R2="fontawesome-i2svg",F4="async",E4=["HTML","HEAD","STYLE","SCRIPT"],p3=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})();function z1(c){return new Proxy(c,{get(a,l){return l in a?a[l]:a[S]}})}var C3=r({},f3);C3[S]=r(r(r(r({},{"fa-duotone":"duotone"}),f3[S]),D2.kit),D2["kit-duotone"]);var D4=z1(C3),q1=r({},h4);q1[S]=r(r(r(r({},{duotone:"fad"}),q1[S]),q2.kit),q2["kit-duotone"]);var B2=z1(q1),R1=r({},T1);R1[S]=r(r({},R1[S]),b4.kit);var Q1=z1(R1),B1=r({},y4);B1[S]=r(r({},B1[S]),x4.kit);var k6=z1(B1),q4=f4,h3="fa-layers-text",R4=r4,B4=r({},M4),A6=z1(B4),O4=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],w1=m4,I4=[...u4,...V4],t1=Z.FontAwesomeConfig||{};function _4(c){var a=x.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Z4(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}x&&typeof x.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(a=>{let[l,e]=a,s=Z4(_4(l));s!=null&&(t1[e]=s)});var d3={styleDefault:"solid",familyDefault:S,cssPrefix:L3,replacementClass:M3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};t1.familyPrefix&&(t1.cssPrefix=t1.familyPrefix);var s1=r(r({},d3),t1);s1.autoReplaceSvg||(s1.observeMutations=!1);var L={};Object.keys(d3).forEach(c=>{Object.defineProperty(L,c,{enumerable:!0,set:function(a){s1[c]=a,f1.forEach(l=>l(L))},get:function(){return s1[c]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(c){s1.cssPrefix=c,f1.forEach(a=>a(L))},get:function(){return s1.cssPrefix}});Z.FontAwesomeConfig=L;var f1=[];function j4(c){return f1.push(c),()=>{f1.splice(f1.indexOf(c),1)}}var _=E1,P={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function U4(c){if(!c||!R)return;let a=x.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;let l=x.head.childNodes,e=null;for(let s=l.length-1;s>-1;s--){let n=l[s],t=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(t)>-1&&(e=n)}return x.head.insertBefore(a,e),c}var W4="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function r1(){let c=12,a="";for(;c-- >0;)a+=W4[Math.random()*62|0];return a}function n1(c){let a=[];for(let l=(c||[]).length>>>0;l--;)a[l]=c[l];return a}function c2(c){return c.classList?n1(c.classList):(c.getAttribute("class")||"").split(" ").filter(a=>a)}function u3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function G4(c){return Object.keys(c||{}).reduce((a,l)=>a+"".concat(l,'="').concat(u3(c[l]),'" '),"").trim()}function b1(c){return Object.keys(c||{}).reduce((a,l)=>a+"".concat(l,": ").concat(c[l].trim(),";"),"")}function l2(c){return c.size!==P.size||c.x!==P.x||c.y!==P.y||c.rotate!==P.rotate||c.flipX||c.flipY}function Y4(c){let{transform:a,containerWidth:l,iconWidth:e}=c,s={transform:"translate(".concat(l/2," 256)")},n="translate(".concat(a.x*32,", ").concat(a.y*32,") "),t="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),m="rotate(".concat(a.rotate," 0 0)"),C={transform:"".concat(n," ").concat(t," ").concat(m)},M={transform:"translate(".concat(e/2*-1," -256)")};return{outer:s,inner:C,path:M}}function K4(c){let{transform:a,width:l=E1,height:e=E1,startCentered:s=!1}=c,n="";return s&&t3?n+="translate(".concat(a.x/_-l/2,"em, ").concat(a.y/_-e/2,"em) "):s?n+="translate(calc(-50% + ".concat(a.x/_,"em), calc(-50% + ").concat(a.y/_,"em)) "):n+="translate(".concat(a.x/_,"em, ").concat(a.y/_,"em) "),n+="scale(".concat(a.size/_*(a.flipX?-1:1),", ").concat(a.size/_*(a.flipY?-1:1),") "),n+="rotate(".concat(a.rotate,"deg) "),n}var X4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function x3(){let c=L3,a=M3,l=L.cssPrefix,e=L.replacementClass,s=X4;if(l!==c||e!==a){let n=new RegExp("\\.".concat(c,"\\-"),"g"),t=new RegExp("\\--".concat(c,"\\-"),"g"),m=new RegExp("\\.".concat(a),"g");s=s.replace(n,".".concat(l,"-")).replace(t,"--".concat(l,"-")).replace(m,".".concat(e))}return s}var O2=!1;function k1(){L.autoAddCss&&!O2&&(U4(x3()),O2=!0)}var $4={mixout(){return{dom:{css:x3,insertCss:k1}}},hooks(){return{beforeDOMElementCreation(){k1()},beforeI2svg(){k1()}}}},q=Z||{};q[D]||(q[D]={});q[D].styles||(q[D].styles={});q[D].hooks||(q[D].hooks={});q[D].shims||(q[D].shims=[]);var T=q[D],g3=[],b3=function(){x.removeEventListener("DOMContentLoaded",b3),u1=1,g3.map(c=>c())},u1=!1;R&&(u1=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),u1||x.addEventListener("DOMContentLoaded",b3));function J4(c){R&&(u1?setTimeout(c,0):g3.push(c))}function L1(c){let{tag:a,attributes:l={},children:e=[]}=c;return typeof c=="string"?u3(c):"<".concat(a," ").concat(G4(l),">").concat(e.map(L1).join(""),"</").concat(a,">")}function I2(c,a,l){if(c&&c[a]&&c[a][l])return{prefix:a,iconName:l,icon:c[a][l]}}var Q4=function(a,l){return function(e,s,n,t){return a.call(l,e,s,n,t)}},A1=function(a,l,e,s){var n=Object.keys(a),t=n.length,m=s!==void 0?Q4(l,s):l,C,M,h;for(e===void 0?(C=1,h=a[n[0]]):(C=0,h=e);C<t;C++)M=n[C],h=m(h,a[M],M,a);return h};function c0(c){let a=[],l=0,e=c.length;for(;l<e;){let s=c.charCodeAt(l++);if(s>=55296&&s<=56319&&l<e){let n=c.charCodeAt(l++);(n&64512)==56320?a.push(((s&1023)<<10)+(n&1023)+65536):(a.push(s),l--)}else a.push(s)}return a}function O1(c){let a=c0(c);return a.length===1?a[0].toString(16):null}function l0(c,a){let l=c.length,e=c.charCodeAt(a),s;return e>=55296&&e<=56319&&l>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(e-55296)*1024+s-56320+65536:e}function _2(c){return Object.keys(c).reduce((a,l)=>{let e=c[l];return!!e.icon?a[e.iconName]=e.icon:a[l]=e,a},{})}function I1(c,a){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:e=!1}=l,s=_2(a);typeof T.hooks.addPack=="function"&&!e?T.hooks.addPack(c,_2(a)):T.styles[c]=r(r({},T.styles[c]||{}),s),c==="fas"&&I1("fa",a)}var{styles:m1,shims:a0}=T,v3=Object.keys(Q1),e0=v3.reduce((c,a)=>(c[a]=Object.keys(Q1[a]),c),{}),a2=null,N3={},S3={},y3={},H3={},w3={};function s0(c){return~I4.indexOf(c)}function n0(c,a){let l=a.split("-"),e=l[0],s=l.slice(1).join("-");return e===c&&s!==""&&!s0(s)?s:null}var k3=()=>{let c=e=>A1(m1,(s,n,t)=>(s[t]=A1(n,e,{}),s),{});N3=c((e,s,n)=>(s[3]&&(e[s[3]]=n),s[2]&&s[2].filter(m=>typeof m=="number").forEach(m=>{e[m.toString(16)]=n}),e)),S3=c((e,s,n)=>(e[n]=n,s[2]&&s[2].filter(m=>typeof m=="string").forEach(m=>{e[m]=n}),e)),w3=c((e,s,n)=>{let t=s[2];return e[n]=n,t.forEach(m=>{e[m]=n}),e});let a="far"in m1||L.autoFetchSvg,l=A1(a0,(e,s)=>{let n=s[0],t=s[1],m=s[2];return t==="far"&&!a&&(t="fas"),typeof n=="string"&&(e.names[n]={prefix:t,iconName:m}),typeof n=="number"&&(e.unicodes[n.toString(16)]={prefix:t,iconName:m}),e},{names:{},unicodes:{}});y3=l.names,H3=l.unicodes,a2=v1(L.styleDefault,{family:L.familyDefault})};j4(c=>{a2=v1(c.styleDefault,{family:L.familyDefault})});k3();function e2(c,a){return(N3[c]||{})[a]}function o0(c,a){return(S3[c]||{})[a]}function Y(c,a){return(w3[c]||{})[a]}function A3(c){return y3[c]||{prefix:null,iconName:null}}function i0(c){let a=H3[c],l=e2("fas",c);return a||(l?{prefix:"fas",iconName:l}:null)||{prefix:null,iconName:null}}function j(){return a2}var V3=()=>({prefix:null,iconName:null,rest:[]});function t0(c){let a=S,l=v3.reduce((e,s)=>(e[s]="".concat(L.cssPrefix,"-").concat(s),e),{});return m3.forEach(e=>{(c.includes(l[e])||c.some(s=>e0[e].includes(s)))&&(a=e)}),a}function v1(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:l=S}=a,e=D4[l][c];if(l===g1&&!c)return"fad";let s=B2[l][c]||B2[l][e],n=c in T.styles?c:null;return s||n||null}function f0(c){let a=[],l=null;return c.forEach(e=>{let s=n0(L.cssPrefix,e);s?l=s:e&&a.push(e)}),{iconName:l,rest:a}}function Z2(c){return c.sort().filter((a,l,e)=>e.indexOf(a)===l)}function N1(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:l=!1}=a,e=null,s=F1.concat(N4),n=Z2(c.filter(u=>s.includes(u))),t=Z2(c.filter(u=>!F1.includes(u))),m=n.filter(u=>(e=u,!r3.includes(u))),[C=null]=m,M=t0(n),h=r(r({},f0(t)),{},{prefix:v1(C,{family:M})});return r(r(r({},h),L0({values:c,family:M,styles:m1,config:L,canonical:h,givenPrefix:e})),r0(l,e,h))}function r0(c,a,l){let{prefix:e,iconName:s}=l;if(c||!e||!s)return{prefix:e,iconName:s};let n=a==="fa"?A3(s):{},t=Y(e,s);return s=n.iconName||t||s,e=n.prefix||e,e==="far"&&!m1.far&&m1.fas&&!L.autoFetchSvg&&(e="fas"),{prefix:e,iconName:s}}var m0=m3.filter(c=>c!==S||c!==g1),z0=Object.keys(T1).filter(c=>c!==S).map(c=>Object.keys(T1[c])).flat();function L0(c){let{values:a,family:l,canonical:e,givenPrefix:s="",styles:n={},config:t={}}=c,m=l===g1,C=a.includes("fa-duotone")||a.includes("fad"),M=t.familyDefault==="duotone",h=e.prefix==="fad"||e.prefix==="fa-duotone";if(!m&&(C||M||h)&&(e.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(e.prefix="fab"),!e.prefix&&m0.includes(l)&&(Object.keys(n).find(d=>z0.includes(d))||t.autoFetchSvg)){let d=C4.get(l).defaultShortPrefixId;e.prefix=d,e.iconName=Y(e.prefix,e.iconName)||e.iconName}return(e.prefix==="fa"||s==="fa")&&(e.prefix=j()||"fas"),e}var _1=class{constructor(){this.definitions={}}add(){for(var a=arguments.length,l=new Array(a),e=0;e<a;e++)l[e]=arguments[e];let s=l.reduce(this._pullDefinitions,{});Object.keys(s).forEach(n=>{this.definitions[n]=r(r({},this.definitions[n]||{}),s[n]),I1(n,s[n]);let t=Q1[S][n];t&&I1(t,s[n]),k3()})}reset(){this.definitions={}}_pullDefinitions(a,l){let e=l.prefix&&l.iconName&&l.icon?{0:l}:l;return Object.keys(e).map(s=>{let{prefix:n,iconName:t,icon:m}=e[s],C=m[2];a[n]||(a[n]={}),C.length>0&&C.forEach(M=>{typeof M=="string"&&(a[n][M]=m)}),a[n][t]=m}),a}},j2=[],a1={},e1={},M0=Object.keys(e1);function p0(c,a){let{mixoutsTo:l}=a;return j2=c,a1={},Object.keys(e1).forEach(e=>{M0.indexOf(e)===-1&&delete e1[e]}),j2.forEach(e=>{let s=e.mixout?e.mixout():{};if(Object.keys(s).forEach(n=>{typeof s[n]=="function"&&(l[n]=s[n]),typeof s[n]=="object"&&Object.keys(s[n]).forEach(t=>{l[n]||(l[n]={}),l[n][t]=s[n][t]})}),e.hooks){let n=e.hooks();Object.keys(n).forEach(t=>{a1[t]||(a1[t]=[]),a1[t].push(n[t])})}e.provides&&e.provides(e1)}),l}function Z1(c,a){for(var l=arguments.length,e=new Array(l>2?l-2:0),s=2;s<l;s++)e[s-2]=arguments[s];return(a1[c]||[]).forEach(t=>{a=t.apply(null,[a,...e])}),a}function X(c){for(var a=arguments.length,l=new Array(a>1?a-1:0),e=1;e<a;e++)l[e-1]=arguments[e];(a1[c]||[]).forEach(n=>{n.apply(null,l)})}function U(){let c=arguments[0],a=Array.prototype.slice.call(arguments,1);return e1[c]?e1[c].apply(null,a):void 0}function j1(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:a}=c,l=c.prefix||j();if(a)return a=Y(l,a)||a,I2(P3.definitions,l,a)||I2(T.styles,l,a)}var P3=new _1,C0=()=>{L.autoReplaceSvg=!1,L.observeMutations=!1,X("noAuto")},h0={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(X("beforeI2svg",c),U("pseudoElements2svg",c),U("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:a}=c;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,J4(()=>{u0({autoReplaceSvgRoot:a}),X("watch",c)})}},d0={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:Y(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let a=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],l=v1(c[0]);return{prefix:l,iconName:Y(l,a)||a}}if(typeof c=="string"&&(c.indexOf("".concat(L.cssPrefix,"-"))>-1||c.match(q4))){let a=N1(c.split(" "),{skipLookups:!0});return{prefix:a.prefix||j(),iconName:Y(a.prefix,a.iconName)||a.iconName}}if(typeof c=="string"){let a=j();return{prefix:a,iconName:Y(a,c)||c}}}},k={noAuto:C0,config:L,dom:h0,parse:d0,library:P3,findIconDefinition:j1,toHtml:L1},u0=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:a=x}=c;(Object.keys(T.styles).length>0||L.autoFetchSvg)&&R&&L.autoReplaceSvg&&k.dom.i2svg({node:a})};function S1(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(l=>L1(l))}}),Object.defineProperty(c,"node",{get:function(){if(!R)return;let l=x.createElement("div");return l.innerHTML=c.html,l.children}}),c}function x0(c){let{children:a,main:l,mask:e,attributes:s,styles:n,transform:t}=c;if(l2(t)&&l.found&&!e.found){let{width:m,height:C}=l,M={x:m/C/2,y:.5};s.style=b1(r(r({},n),{},{"transform-origin":"".concat(M.x+t.x/16,"em ").concat(M.y+t.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function g0(c){let{prefix:a,iconName:l,children:e,attributes:s,symbol:n}=c,t=n===!0?"".concat(a,"-").concat(L.cssPrefix,"-").concat(l):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:r(r({},s),{},{id:t}),children:e}]}]}function s2(c){let{icons:{main:a,mask:l},prefix:e,iconName:s,transform:n,symbol:t,title:m,maskId:C,titleId:M,extra:h,watchable:u=!1}=c,{width:d,height:y}=l.found?l:a,B=g4.includes(e),W=[L.replacementClass,s?"".concat(L.cssPrefix,"-").concat(s):""].filter(J=>h.classes.indexOf(J)===-1).filter(J=>J!==""||!!J).concat(h.classes).join(" "),A={children:[],attributes:r(r({},h.attributes),{},{"data-prefix":e,"data-icon":s,class:W,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(y)})},E=B&&!~h.classes.indexOf("fa-fw")?{width:"".concat(d/y*16*.0625,"em")}:{};u&&(A.attributes[K]=""),m&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(M||r1())},children:[m]}),delete A.attributes.title);let H=r(r({},A),{},{prefix:e,iconName:s,main:a,mask:l,maskId:C,transform:n,symbol:t,styles:r(r({},E),h.styles)}),{children:V,attributes:$}=l.found&&a.found?U("generateAbstractMask",H)||{children:[],attributes:{}}:U("generateAbstractIcon",H)||{children:[],attributes:{}};return H.children=V,H.attributes=$,t?g0(H):x0(H)}function U2(c){let{content:a,width:l,height:e,transform:s,title:n,extra:t,watchable:m=!1}=c,C=r(r(r({},t.attributes),n?{title:n}:{}),{},{class:t.classes.join(" ")});m&&(C[K]="");let M=r({},t.styles);l2(s)&&(M.transform=K4({transform:s,startCentered:!0,width:l,height:e}),M["-webkit-transform"]=M.transform);let h=b1(M);h.length>0&&(C.style=h);let u=[];return u.push({tag:"span",attributes:C,children:[a]}),n&&u.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),u}function b0(c){let{content:a,title:l,extra:e}=c,s=r(r(r({},e.attributes),l?{title:l}:{}),{},{class:e.classes.join(" ")}),n=b1(e.styles);n.length>0&&(s.style=n);let t=[];return t.push({tag:"span",attributes:s,children:[a]}),l&&t.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),t}var{styles:V1}=T;function U1(c){let a=c[0],l=c[1],[e]=c.slice(4),s=null;return Array.isArray(e)?s={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(w1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(w1.SECONDARY),fill:"currentColor",d:e[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(w1.PRIMARY),fill:"currentColor",d:e[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:e}},{found:!0,width:a,height:l,icon:s}}var v0={found:!1,width:512,height:512};function N0(c,a){!p3&&!L.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function W1(c,a){let l=a;return a==="fa"&&L.styleDefault!==null&&(a=j()),new Promise((e,s)=>{if(l==="fa"){let n=A3(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&V1[a]&&V1[a][c]){let n=V1[a][c];return e(U1(n))}N0(c,a),e(r(r({},v0),{},{icon:L.showMissingIcons&&c?U("missingIconAbstract")||{}:{}}))})}var W2=()=>{},G1=L.measurePerformance&&p1&&p1.mark&&p1.measure?p1:{mark:W2,measure:W2},i1='FA "6.7.2"',S0=c=>(G1.mark("".concat(i1," ").concat(c," begins")),()=>T3(c)),T3=c=>{G1.mark("".concat(i1," ").concat(c," ends")),G1.measure("".concat(i1," ").concat(c),"".concat(i1," ").concat(c," begins"),"".concat(i1," ").concat(c," ends"))},n2={begin:S0,end:T3},h1=()=>{};function G2(c){return typeof(c.getAttribute?c.getAttribute(K):null)=="string"}function y0(c){let a=c.getAttribute?c.getAttribute($1):null,l=c.getAttribute?c.getAttribute(J1):null;return a&&l}function H0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(L.replacementClass)}function w0(){return L.autoReplaceSvg===!0?d1.replace:d1[L.autoReplaceSvg]||d1.replace}function k0(c){return x.createElementNS("http://www.w3.org/2000/svg",c)}function A0(c){return x.createElement(c)}function F3(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:l=c.tag==="svg"?k0:A0}=a;if(typeof c=="string")return x.createTextNode(c);let e=l(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){e.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){e.appendChild(F3(n,{ceFn:l}))}),e}function V0(c){let a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var d1={replace:function(c){let a=c[0];if(a.parentNode)if(c[1].forEach(l=>{a.parentNode.insertBefore(F3(l),a)}),a.getAttribute(K)===null&&L.keepOriginalSource){let l=x.createComment(V0(a));a.parentNode.replaceChild(l,a)}else a.remove()},nest:function(c){let a=c[0],l=c[1];if(~c2(a).indexOf(L.replacementClass))return d1.replace(c);let e=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete l[0].attributes.id,l[0].attributes.class){let n=l[0].attributes.class.split(" ").reduce((t,m)=>(m===L.replacementClass||m.match(e)?t.toSvg.push(m):t.toNode.push(m),t),{toNode:[],toSvg:[]});l[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",n.toNode.join(" "))}let s=l.map(n=>L1(n)).join(`
`);a.setAttribute(K,""),a.innerHTML=s}};function Y2(c){c()}function E3(c,a){let l=typeof a=="function"?a:h1;if(c.length===0)l();else{let e=Y2;L.mutateApproach===F4&&(e=Z.requestAnimationFrame||Y2),e(()=>{let s=w0(),n=n2.begin("mutate");c.map(s),n(),l()})}}var o2=!1;function D3(){o2=!0}function Y1(){o2=!1}var x1=null;function K2(c){if(!E2||!L.observeMutations)return;let{treeCallback:a=h1,nodeCallback:l=h1,pseudoElementsCallback:e=h1,observeMutationsRoot:s=x}=c;x1=new E2(n=>{if(o2)return;let t=j();n1(n).forEach(m=>{if(m.type==="childList"&&m.addedNodes.length>0&&!G2(m.addedNodes[0])&&(L.searchPseudoElements&&e(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&L.searchPseudoElements&&e(m.target.parentNode),m.type==="attributes"&&G2(m.target)&&~O4.indexOf(m.attributeName))if(m.attributeName==="class"&&y0(m.target)){let{prefix:C,iconName:M}=N1(c2(m.target));m.target.setAttribute($1,C||t),M&&m.target.setAttribute(J1,M)}else H0(m.target)&&l(m.target)})}),R&&x1.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function P0(){x1&&x1.disconnect()}function T0(c){let a=c.getAttribute("style"),l=[];return a&&(l=a.split(";").reduce((e,s)=>{let n=s.split(":"),t=n[0],m=n.slice(1);return t&&m.length>0&&(e[t]=m.join(":").trim()),e},{})),l}function F0(c){let a=c.getAttribute("data-prefix"),l=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",s=N1(c2(c));return s.prefix||(s.prefix=j()),a&&l&&(s.prefix=a,s.iconName=l),s.iconName&&s.prefix||(s.prefix&&e.length>0&&(s.iconName=o0(s.prefix,c.innerText)||e2(s.prefix,O1(c.innerText))),!s.iconName&&L.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function E0(c){let a=n1(c.attributes).reduce((s,n)=>(s.name!=="class"&&s.name!=="style"&&(s[n.name]=n.value),s),{}),l=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return L.autoA11y&&(l?a["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(e||r1()):(a["aria-hidden"]="true",a.focusable="false")),a}function D0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:P,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function X2(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:l,prefix:e,rest:s}=F0(c),n=E0(c),t=Z1("parseNodeAttributes",{},c),m=a.styleParser?T0(c):[];return r({iconName:l,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:e,transform:P,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:m,attributes:n}},t)}var{styles:q0}=T;function q3(c){let a=L.autoReplaceSvg==="nest"?X2(c,{styleParser:!1}):X2(c);return~a.extra.classes.indexOf(h3)?U("generateLayersText",c,a):U("generateSvgReplacementMutation",c,a)}function R0(){return[...d4,...F1]}function $2(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();let l=x.documentElement.classList,e=h=>l.add("".concat(R2,"-").concat(h)),s=h=>l.remove("".concat(R2,"-").concat(h)),n=L.autoFetchSvg?R0():r3.concat(Object.keys(q0));n.includes("fa")||n.push("fa");let t=[".".concat(h3,":not([").concat(K,"])")].concat(n.map(h=>".".concat(h,":not([").concat(K,"])"))).join(", ");if(t.length===0)return Promise.resolve();let m=[];try{m=n1(c.querySelectorAll(t))}catch{}if(m.length>0)e("pending"),s("complete");else return Promise.resolve();let C=n2.begin("onTree"),M=m.reduce((h,u)=>{try{let d=q3(u);d&&h.push(d)}catch(d){p3||d.name==="MissingIcon"&&console.error(d)}return h},[]);return new Promise((h,u)=>{Promise.all(M).then(d=>{E3(d,()=>{e("active"),e("complete"),s("pending"),typeof a=="function"&&a(),C(),h()})}).catch(d=>{C(),u(d)})})}function B0(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;q3(c).then(l=>{l&&E3([l],a)})}function O0(c){return function(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:j1(a||{}),{mask:s}=l;return s&&(s=(s||{}).icon?s:j1(s||{})),c(e,r(r({},l),{},{mask:s}))}}var I0=function(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=P,symbol:e=!1,mask:s=null,maskId:n=null,title:t=null,titleId:m=null,classes:C=[],attributes:M={},styles:h={}}=a;if(!c)return;let{prefix:u,iconName:d,icon:y}=c;return S1(r({type:"icon"},c),()=>(X("beforeDOMElementCreation",{iconDefinition:c,params:a}),L.autoA11y&&(t?M["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(m||r1()):(M["aria-hidden"]="true",M.focusable="false")),s2({icons:{main:U1(y),mask:s?U1(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:u,iconName:d,transform:r(r({},P),l),symbol:e,title:t,maskId:n,titleId:m,extra:{attributes:M,styles:h,classes:C}})))},_0={mixout(){return{icon:O0(I0)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=$2,c.nodeCallback=B0,c}}},provides(c){c.i2svg=function(a){let{node:l=x,callback:e=()=>{}}=a;return $2(l,e)},c.generateSvgReplacementMutation=function(a,l){let{iconName:e,title:s,titleId:n,prefix:t,transform:m,symbol:C,mask:M,maskId:h,extra:u}=l;return new Promise((d,y)=>{Promise.all([W1(e,t),M.iconName?W1(M.iconName,M.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(B=>{let[W,A]=B;d([a,s2({icons:{main:W,mask:A},prefix:t,iconName:e,transform:m,symbol:C,maskId:h,title:s,titleId:n,extra:u,watchable:!0})])}).catch(y)})},c.generateAbstractIcon=function(a){let{children:l,attributes:e,main:s,transform:n,styles:t}=a,m=b1(t);m.length>0&&(e.style=m);let C;return l2(n)&&(C=U("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),l.push(C||s.icon),{children:l,attributes:e}}}},Z0={mixout(){return{layer(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:l=[]}=a;return S1({type:"layer"},()=>{X("beforeDOMElementCreation",{assembler:c,params:a});let e=[];return c(s=>{Array.isArray(s)?s.map(n=>{e=e.concat(n.abstract)}):e=e.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers"),...l].join(" ")},children:e}]})}}}},j0={mixout(){return{counter(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:l=null,classes:e=[],attributes:s={},styles:n={}}=a;return S1({type:"counter",content:c},()=>(X("beforeDOMElementCreation",{content:c,params:a}),b0({content:c.toString(),title:l,extra:{attributes:s,styles:n,classes:["".concat(L.cssPrefix,"-layers-counter"),...e]}})))}}}},U0={mixout(){return{text(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:l=P,title:e=null,classes:s=[],attributes:n={},styles:t={}}=a;return S1({type:"text",content:c},()=>(X("beforeDOMElementCreation",{content:c,params:a}),U2({content:c,transform:r(r({},P),l),title:e,extra:{attributes:n,styles:t,classes:["".concat(L.cssPrefix,"-layers-text"),...s]}})))}}},provides(c){c.generateLayersText=function(a,l){let{title:e,transform:s,extra:n}=l,t=null,m=null;if(t3){let C=parseInt(getComputedStyle(a).fontSize,10),M=a.getBoundingClientRect();t=M.width/C,m=M.height/C}return L.autoA11y&&!e&&(n.attributes["aria-hidden"]="true"),Promise.resolve([a,U2({content:a.innerHTML,width:t,height:m,transform:s,title:e,extra:n,watchable:!0})])}}},W0=new RegExp('"',"ug"),J2=[1105920,1112319],Q2=r(r(r(r({},{FontAwesome:{normal:"fas",400:"fas"}}),p4),P4),S4),K1=Object.keys(Q2).reduce((c,a)=>(c[a.toLowerCase()]=Q2[a],c),{}),G0=Object.keys(K1).reduce((c,a)=>{let l=K1[a];return c[a]=l[900]||[...Object.entries(l)][0][1],c},{});function Y0(c){let a=c.replace(W0,""),l=l0(a,0),e=l>=J2[0]&&l<=J2[1],s=a.length===2?a[0]===a[1]:!1;return{value:O1(s?a[0]:a),isSecondary:e||s}}function K0(c,a){let l=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(a),s=isNaN(e)?"normal":e;return(K1[l]||{})[s]||G0[l]}function c3(c,a){let l="".concat(T4).concat(a.replace(":","-"));return new Promise((e,s)=>{if(c.getAttribute(l)!==null)return e();let t=n1(c.children).filter(d=>d.getAttribute(D1)===a)[0],m=Z.getComputedStyle(c,a),C=m.getPropertyValue("font-family"),M=C.match(R4),h=m.getPropertyValue("font-weight"),u=m.getPropertyValue("content");if(t&&!M)return c.removeChild(t),e();if(M&&u!=="none"&&u!==""){let d=m.getPropertyValue("content"),y=K0(C,h),{value:B,isSecondary:W}=Y0(d),A=M[0].startsWith("FontAwesome"),E=e2(y,B),H=E;if(A){let V=i0(B);V.iconName&&V.prefix&&(E=V.iconName,y=V.prefix)}if(E&&!W&&(!t||t.getAttribute($1)!==y||t.getAttribute(J1)!==H)){c.setAttribute(l,H),t&&c.removeChild(t);let V=D0(),{extra:$}=V;$.attributes[D1]=a,W1(E,y).then(J=>{let s4=s2(r(r({},V),{},{icons:{main:J,mask:V3()},prefix:y,iconName:H,extra:$,watchable:!0})),y1=x.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(y1,c.firstChild):c.appendChild(y1),y1.outerHTML=s4.map(n4=>L1(n4)).join(`
`),c.removeAttribute(l),e()}).catch(s)}else e()}else e()})}function X0(c){return Promise.all([c3(c,"::before"),c3(c,"::after")])}function $0(c){return c.parentNode!==document.head&&!~E4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(D1)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function l3(c){if(R)return new Promise((a,l)=>{let e=n1(c.querySelectorAll("*")).filter($0).map(X0),s=n2.begin("searchPseudoElements");D3(),Promise.all(e).then(()=>{s(),Y1(),a()}).catch(()=>{s(),Y1(),l()})})}var J0={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=l3,c}}},provides(c){c.pseudoElements2svg=function(a){let{node:l=x}=a;L.searchPseudoElements&&l3(l)}}},a3=!1,Q0={mixout(){return{dom:{unwatch(){D3(),a3=!0}}}},hooks(){return{bootstrap(){K2(Z1("mutationObserverCallbacks",{}))},noAuto(){P0()},watch(c){let{observeMutationsRoot:a}=c;a3?Y1():K2(Z1("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},e3=c=>{let a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((l,e)=>{let s=e.toLowerCase().split("-"),n=s[0],t=s.slice(1).join("-");if(n&&t==="h")return l.flipX=!0,l;if(n&&t==="v")return l.flipY=!0,l;if(t=parseFloat(t),isNaN(t))return l;switch(n){case"grow":l.size=l.size+t;break;case"shrink":l.size=l.size-t;break;case"left":l.x=l.x-t;break;case"right":l.x=l.x+t;break;case"up":l.y=l.y-t;break;case"down":l.y=l.y+t;break;case"rotate":l.rotate=l.rotate+t;break}return l},a)},c6={mixout(){return{parse:{transform:c=>e3(c)}}},hooks(){return{parseNodeAttributes(c,a){let l=a.getAttribute("data-fa-transform");return l&&(c.transform=e3(l)),c}}},provides(c){c.generateAbstractTransformGrouping=function(a){let{main:l,transform:e,containerWidth:s,iconWidth:n}=a,t={transform:"translate(".concat(s/2," 256)")},m="translate(".concat(e.x*32,", ").concat(e.y*32,") "),C="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),M="rotate(".concat(e.rotate," 0 0)"),h={transform:"".concat(m," ").concat(C," ").concat(M)},u={transform:"translate(".concat(n/2*-1," -256)")},d={outer:t,inner:h,path:u};return{tag:"g",attributes:r({},d.outer),children:[{tag:"g",attributes:r({},d.inner),children:[{tag:l.icon.tag,children:l.icon.children,attributes:r(r({},l.icon.attributes),d.path)}]}]}}}},P1={x:0,y:0,width:"100%",height:"100%"};function s3(c){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function l6(c){return c.tag==="g"?c.children:[c]}var a6={hooks(){return{parseNodeAttributes(c,a){let l=a.getAttribute("data-fa-mask"),e=l?N1(l.split(" ").map(s=>s.trim())):V3();return e.prefix||(e.prefix=j()),c.mask=e,c.maskId=a.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(a){let{children:l,attributes:e,main:s,mask:n,maskId:t,transform:m}=a,{width:C,icon:M}=s,{width:h,icon:u}=n,d=Y4({transform:m,containerWidth:h,iconWidth:C}),y={tag:"rect",attributes:r(r({},P1),{},{fill:"white"})},B=M.children?{children:M.children.map(s3)}:{},W={tag:"g",attributes:r({},d.inner),children:[s3(r({tag:M.tag,attributes:r(r({},M.attributes),d.path)},B))]},A={tag:"g",attributes:r({},d.outer),children:[W]},E="mask-".concat(t||r1()),H="clip-".concat(t||r1()),V={tag:"mask",attributes:r(r({},P1),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,A]},$={tag:"defs",children:[{tag:"clipPath",attributes:{id:H},children:l6(u)},V]};return l.push($,{tag:"rect",attributes:r({fill:"currentColor","clip-path":"url(#".concat(H,")"),mask:"url(#".concat(E,")")},P1)}),{children:l,attributes:e}}}},e6={provides(c){let a=!1;Z.matchMedia&&(a=Z.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let l=[],e={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};l.push({tag:"path",attributes:r(r({},e),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=r(r({},s),{},{attributeName:"opacity"}),t={tag:"circle",attributes:r(r({},e),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||t.children.push({tag:"animate",attributes:r(r({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:r(r({},n),{},{values:"1;0;1;1;0;1;"})}),l.push(t),l.push({tag:"path",attributes:r(r({},e),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:r(r({},n),{},{values:"1;0;0;0;0;1;"})}]}),a||l.push({tag:"path",attributes:r(r({},e),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:r(r({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:l}}}},s6={hooks(){return{parseNodeAttributes(c,a){let l=a.getAttribute("data-fa-symbol"),e=l===null?!1:l===""?!0:l;return c.symbol=e,c}}}},n6=[$4,_0,Z0,j0,U0,J0,Q0,c6,a6,e6,s6];p0(n6,{mixoutsTo:k});var V6=k.noAuto,P6=k.config,T6=k.library,F6=k.dom,R3=k.parse,E6=k.findIconDefinition,D6=k.toHtml,B3=k.icon,q6=k.layer,o6=k.text,i6=k.counter;var t6=["*"],f6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},r6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},m6=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(l=>a[l]?l:null).filter(l=>l)},z6=c=>c.prefix!==void 0&&c.iconName!==void 0,L6=(c,a)=>z6(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},M6=(()=>{class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275prov=H1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),p6=(()=>{class c{constructor(){this.definitions={}}addIcons(...l){for(let e of l){e.prefix in this.definitions||(this.definitions[e.prefix]={}),this.definitions[e.prefix][e.iconName]=e;for(let s of e.icon[2])typeof s=="string"&&(this.definitions[e.prefix][s]=e)}}addIconPacks(...l){for(let e of l){let s=Object.keys(e).map(n=>e[n]);this.addIcons(...s)}}getIconDefinition(l,e){return l in this.definitions&&e in this.definitions[l]?this.definitions[l][e]:null}static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275prov=H1({token:c,factory:c.\u0275fac,providedIn:"root"})}}return c})(),C6=(()=>{class c{constructor(){this.stackItemSize="1x"}ngOnChanges(l){if("size"in l)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275dir=f2({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[M1]})}}return c})(),h6=(()=>{class c{constructor(l,e){this.renderer=l,this.elementRef=e}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(l){"size"in l&&(l.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${l.size.currentValue}`),l.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${l.size.previousValue}`))}static{this.\u0275fac=function(e){return new(e||c)(O(p2),O(z2))}}static{this.\u0275cmp=g({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[M1,v],ngContentSelectors:t6,decls:1,vars:0,template:function(e,s){e&1&&(g2(),b2(0))},encapsulation:2})}}return c})(),O3=(()=>{class c{set spin(l){this.animation=l?"spin":void 0}set pulse(l){this.animation=l?"spin-pulse":void 0}constructor(l,e,s,n,t){this.sanitizer=l,this.config=e,this.iconLibrary=s,this.stackItem=n,this.classes=[],t!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(l){if(this.icon==null&&this.config.fallbackIcon==null){r6();return}if(l){let e=this.icon!=null?this.icon:this.config.fallbackIcon,s=this.findIconDefinition(e);if(s!=null){let n=this.buildParams();this.renderIcon(s,n)}}}render(){this.ngOnChanges({})}findIconDefinition(l){let e=L6(l,this.config.defaultPrefix);if("icon"in e)return e;let s=this.iconLibrary.getIconDefinition(e.prefix,e.iconName);return s??(f6(e),null)}buildParams(){let l={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},e=typeof this.transform=="string"?R3.transform(this.transform):this.transform;return{title:this.title,transform:e,classes:[...m6(l),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(l,e){let s=B3(l,e);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))}static{this.\u0275fac=function(e){return new(e||c)(O(y2),O(M6),O(p6),O(C6,8),O(h6,8))}}static{this.\u0275cmp=g({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(e,s){e&2&&(d2("innerHTML",s.renderedIconHTML,L2),C2("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[M1,v],decls:0,vars:0,template:function(e,s){},encapsulation:2})}}return c})();var I3=(()=>{class c{static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275mod=t2({type:c})}static{this.\u0275inj=i2({})}}return c})();var _3={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]};var Z3={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var j3={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]};var U3=(()=>{class c{constructor(){this.iconEmail=Z3,this.iconWhatsapp=j3,this.iconPhone=_3}static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275cmp=g({type:c,selectors:[["app-header"]],standalone:!0,features:[v],decls:35,vars:3,consts:[[1,"container"],[1,"navbar","navbar-expand-lg","navbar-light",2,"background-color","rgb(127 164 157)"],[1,"container-fluid"],["href","#",1,"navbar-brand"],["src","../../../assets/images/cktd_logo.png","width","120","alt","",1,"image-fluid","logo-custom"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page","routerLink","home",1,"nav-link","custom-a"],["aria-current","page","routerLink","hotels",1,"nav-link","custom-a"],["aria-current","page","routerLink","food",1,"nav-link","custom-a"],["aria-current","page","routerLink","visit",1,"nav-link","custom-a"],[2,"text-align","right","margin-right","15px","padding","0 auto"],[1,"d-grid"],[3,"icon"]],template:function(e,s){e&1&&(o(0,"div",0)(1,"nav",1)(2,"div",2)(3,"a",3),z(4,"img",4),i(),o(5,"button",5),z(6,"span",6),i(),o(7,"div",7)(8,"ul",8)(9,"li",9)(10,"a",10),f(11,"Home"),i()(),o(12,"li",9)(13,"a",11),f(14,"Stay"),i()(),o(15,"li",9)(16,"a",12),f(17,"Food"),i()(),o(18,"li",9)(19,"a",13),f(20,"Visit"),i()()(),o(21,"h3",14),f(22," \u091A\u093F\u0924\u094D\u0930\u0915\u0942\u091F "),i(),o(23,"div"),f(24,"\xA0\xA0\xA0"),i(),o(25,"div",15)(26,"span"),z(27,"fa-icon",16),f(28," : chitrakoot.kuldeep@gmail.com"),i(),o(29,"span"),z(30,"fa-icon",16),f(31," : +91-7701883719"),i(),o(32,"span"),z(33,"fa-icon",16),f(34," : +91-7701883719"),i()()()()()()),e&2&&(p(27),N("icon",s.iconEmail),p(3),N("icon",s.iconWhatsapp),p(3),N("icon",s.iconPhone))},dependencies:[I,A2,I3,O3],styles:[".navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%]{color:#8a2be2!important}.logo-custom[_ngcontent-%COMP%]{border-radius:30px}.custom-a[_ngcontent-%COMP%]{padding:5px;margin:10px;border:1px solid blueviolet;border-radius:15px;background-color:#8a2be2;font-size:15px;font-weight:700;width:80px;text-align:center;color:#fffaf0}.custom-a[_ngcontent-%COMP%]:hover{background-color:green}.container-custom[_ngcontent-%COMP%]{border:2px solid blueviolet}.caro-img[_ngcontent-%COMP%]{height:300px;width:100%}.caro-text[_ngcontent-%COMP%]{text-align:justify;overflow:auto}.collapse[_ngcontent-%COMP%]{color:#00008b}"]})}}return c})();var W3=(()=>{class c{static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275cmp=g({type:c,selectors:[["app-footer"]],standalone:!0,features:[v],decls:24,vars:0,consts:[[1,"container"],[1,"container-fluid","footer-container"],[1,"row","justify-content-around"],[1,"col-md-6"],["src","../../../assets/images/cktd_logo.png","width","50px","height","20px"],[1,"enquiry","justify-content-between"],["src","../../../assets/images/qr_code/GooglePay_QR.png",1,"scanner"],[1,"col-md-4"],["src",M2`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11079.20471426541!2d80.91675681373347!3d25.215003426499095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3984a635ac470c09%3A0xf77828392d478da7!2sChitrakoot%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1709263709674!5m2!1sen!2sin`,"width","100%","height","240","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"]],template:function(e,s){e&1&&(o(0,"div",0)(1,"footer")(2,"div",1)(3,"div",2)(4,"div",3)(5,"span"),f(6,"All rights reserved \xA9 2024"),i(),z(7,"hr"),o(8,"span"),f(9,"Disclaimer: Designed, Developed, Maintained and Hosted by Owned "),z(10,"img",4),i(),z(11,"hr"),o(12,"div",5)(13,"div"),f(14," For any query or help "),z(15,"br"),o(16,"span"),f(17," Phone: +91-7701883719"),z(18,"br"),f(19," Email: chitrakoot.kuldeep@gmail.com "),i()(),o(20,"div"),z(21,"img",6),i()()(),o(22,"div",7),z(23,"iframe",8),i()()()()())},styles:[".footer-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{background-color:#000;color:#fff;height:255px;margin-top:35px;padding:10px}h4[_ngcontent-%COMP%]{color:#4c00ff}.enquiry[_ngcontent-%COMP%]{display:flex}.scanner[_ngcontent-%COMP%]{height:200px}"]})}}return c})();var G3=(()=>{class c{constructor(){this.title="ckt-yatra"}static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275cmp=g({type:c,selectors:[["app-root"]],standalone:!0,features:[v],decls:4,vars:0,consts:[[1,"container"]],template:function(e,s){e&1&&(o(0,"div",0),z(1,"app-header")(2,"router-outlet")(3,"app-footer"),i())},dependencies:[k2,U3,W3],styles:["div[_ngcontent-%COMP%]{background-color:#fff8dc}"]})}}return c})();var Y3=(()=>{class c{constructor(){this.mainHeading="\u0936\u094D\u0930\u0940 \u0930\u093E\u092E \u0924\u092A\u094B\u092D\u0942\u092E\u093F \u092A\u093E\u0935\u0928 \u091A\u093F\u0924\u094D\u0930\u0915\u0942\u091F \u092E\u0947\u0902 \u0906\u092A\u0915\u093E \u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948",this.aboutKamadgiri=`Kamadgiri is the main holy place of Chitrakoot Dham . The Sanskrit word
                   \u2018Kamadgiri\u2019 means the mountain which fulfills all the wishes and desires. The
                   place is believed to have been the abode of Lord Ram, Sita and Laxman during their exile. Lord Kamtanath,
                   another of His names, is the Ishta Deva principal deity not only of Kamadgiri Parvat but of the whole of
                   Chitrakoot. The religious-minded believe that all the holy places (i.e. teerthas) are in the Parikrama or its
                   pilgrimage-path. The pilgrimage path around this hill is about 5 Km long. There are a large number of temples in the
                   Parikrama Path. Except during the summers, the place remains green throughout the year and appears like a bow
                   seen from any place in Chitrakoot.`,this.aboutHanumanDhara=`One of the top tourist attractions in Chitrakoot is Hanuman Dhara, a hilltop spring with a
                       waterfall. Hanuman Dhara is a popular destination for worshippers because of its cluster of major
                       temples. The spring was supposedly built by Lord Rama to appease Lord Hanuman after he returned from
                       setting fire to Lanka.`,this.aboutGuptGodavari=`Gupt Godavari is the place where the peeping-tom monster, Mayank, tried to spy on
                       Sita while she was bathing in a pool. Enraged by his action, Lakshmana petrified him and stuck
                       him to the roof of this cave. Today, that place is an outcrop of black rock protruding from the
                       paler roof of the cave. The fairly narrow mouth of this cave opens out into a large cavern with two
                       interesting features, one of them being a cave with black rock. The second feature is known as Sita
                       Kund, a small pond in which Sita was bathing when Mayank tried to spy on her.`,this.aboutSatiAnusuya=`Located near the origin of River Mandakini, this ashram is nestled in the hills of Chitrakoot,
                      surrounded by lush greenery, with ample open spaces, and is thus ideal for
                      meditation and reflection. It is believed to be the place where sage Atri meditated with his
                      wife, Anusuya. Its location ensures that peace and quiet abounds in its hallowed pathways and
                      courtyard, so devotees can pray, or even enjoy the serene atmosphere without being disturbed.`,this.detailsChitrakoot=`Chitrakoot is a town with strong spiritual overtones for the Hindus who connect the town with Lord  Rama.
 
                    All the year round there are festivals related to Lord Rama. October and November is the period of
                    Navratri festival with the popular Dussehra celebrations. There is Diwali that follows in a grand manner. Then in January you have the Makar Sankranti
                    when the festival of harvest is celebrated by thanking the Sun for a good bounty.
                    There is kite flying on and around this day. This is followed by Mahashivratri and the Ramayan Mela which goes on for a whole week`,this.weatherCktd=`The weather in Chitrakoot is hot and hotter in summer, most pleasant and cool during monsoon
                 and cold and foggy in winter. The best time to visit Chitrakoot is the monsoon period when
                 rains are not heavy and the temperature is low. Winter is cold but foggy and driving around may
                 be dangerous at times. The details regarding Weather and Best Time are placed below.`,this.summerWeather=`Chitrakoot sizzles in summer with the temperature soaring up to 47\xB0C.
                   The nights are however comfortable when the minimum temperature is around 29\xB0C.
                   However, the weather remains balmy and hot. Summer is hardly the time to visit Chitrakoot
                   since the hot weather does not help make sightseeing enjoyable at all.`,this.mansoonWeather=`Chitrakoot is pleasant in the monsoon since it does not rain all that
                    much and the temperature remains low. Therefore, it is quite all right to visit the place
                    during the August-October period. After the rains, one is treated to dense and lush
                    vegetation with rivulets everywhere. The entire town and its nearby areas are absolutely
                    beautiful with maximum visibility suiting sightseeing. However, visitors are advised to
                    carry their gear for protection against the odd shower.`,this.winterWeather=`Winter in Chitrakoot starts with some fine weather in November
                   and December Visitors will like this weather which is supported by balmy days and clear skies.
                   Chitrakoot is truly the visitor\u2019s delight in the month of December.
                   But, come January there is intense fogging which reduces visibility to a point where
                   driving around on roads is dangerous. However, one can check on full details before visiting
                   Chitrakoot during this period, which also sees a fair number of festivals and celebrations.`}static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275cmp=g({type:c,selectors:[["app-home-page"]],standalone:!0,features:[v],decls:242,vars:10,consts:[[1,"container"],[1,"container-fluid","container-custom"],[1,"row","justify-content-evenly","sliding-row"],[1,"col-12"],["direction","alternate"],["src","https://cdn.s3waas.gov.in/s33b8a614226a953a8cd9526fca6fe9ba5/uploads/2023/03/2023030154.jpg","alt","",1,"scrolling-text"],[1,"parellex_img1"],[1,"parllex_text"],[1,"parellex_img2"],["id","header_text"],[1,"row","justify-content-center","mt-5","mb-5","div_decoration"],[1,"col-md-11","div_img"],["id","chardham_caro","data-bs-ride","carousel",1,"carousel","slide"],[1,"carousel-indicators"],["type","button","data-bs-target","#chardham_caro","data-bs-slide-to","0","aria-current","true","aria-label","Slide 1",1,"active"],["type","button","data-bs-target","#chardham_caro","data-bs-slide-to","1","aria-label","Slide 2"],["type","button","data-bs-target","#chardham_caro","data-bs-slide-to","2","aria-label","Slide 3"],["type","button","data-bs-target","#chardham_caro","data-bs-slide-to","3","aria-label","Slide 4"],[1,"carousel-inner"],[1,"carousel-item","active"],["id","kamtanath_div",1,"row","justify-content-between","mb-5","div_decoration"],[1,"col-md-6","order-1","two_row_div_img"],[1,"row"],[1,"col","align-self-center","div-set"],["src","../../../assets/images/kamtanath_1.jpg",1,"img-fluid"],[1,"col","float-md-end","div-set"],["src","../../../assets/images/kamtanath_2.jpg","alt","",1,"img-fluid"],[1,"col","div-set"],["src","../../../assets/images/kamtanath_3.jpg","alt","",1,"img-fluid"],["src","../../../assets/images/kamtanath_4.jpg","alt","",1,"img-fluid"],[1,"col-md-4","div_text"],[1,"text-center"],[1,"carousel-item"],[1,"row","justify-content-between","mb-5","div_decoration"],[1,"col-md-6","order-0","two_row_div_img"],["src","../../../assets/images/hanumandhara_1.jpg","alt",""],["src","../../../assets/images/hanumandhara_2.jpg","alt",""],["src","../../../assets/images/hanumandhara_3.jpg","alt",""],["src","../../../assets/images/hanumandhara_4.jpg","alt",""],["src","../../../assets/images/gupt-godavari_1.jpg","alt",""],["src","../../../assets/images/gupt-godavari_2.jpg","alt",""],["src","../../../assets/images/gupt-godavari_3.jpg","alt",""],["src","../../../assets/images/gupt-godavari_4.jpg","alt",""],["src","../../../assets/images/sati_ansuya_1.jpg","alt",""],["src","../../../assets/images/sati_ansuya_2.jpg","alt",""],["src","../../../assets/images/sati_ansuya_3.jpg","alt",""],["src","../../../assets/images/sati_ansuya_4.jpg","alt",""],["type","button","data-bs-target","#chardham_caro","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#chardham_caro","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],["id","explore_div",1,"row","justify-content-center","div_decoration"],[1,"col-md-12"],["id","carouselExampleControls","data-bs-ride","carousel",1,"carousel","slide"],[1,"row","justify-content-center"],[1,"col-md-11","justify-content-evenly","explore-div-col"],[1,"card",2,"width","18rem"],["src","../../../assets/images/bharat-koop.jpg","alt","...",1,"card-img-top"],[1,"card-body"],[1,"card-text"],["src","../../../assets/images/bharat_milap.jpg","alt","...",1,"card-img-top"],["src","../../../assets/images/ganesh-bagh.jpg","alt","...",1,"card-img-top"],["src","../../../assets/images/hanuman-dhara-temple.jpg","alt","...",1,"card-img-top"],["src","../../../assets/images/janki-kund.jpg","alt","...",1,"card-img-top"],["src","../../../assets/images/kamadgiri-around.jpg","alt","...",1,"card-img-top"],["src","../../../assets/images/sati-anusuya-temple.jpg","alt","...",1,"card-img-top"],["src","../../../assets/images/sphatik_Shila.jpg","alt","...",1,"card-img-top"],["src","../../../assets/images/ram-ghat.jpg","alt","...",1,"card-img-top"],["id","explore-caro-btn-pre","type","button","data-bs-target","#carouselExampleControls","data-bs-slide","prev",1,"carousel-control-prev"],["id","explore-caro-btn-next","type","button","data-bs-target","#carouselExampleControls","data-bs-slide","next",1,"carousel-control-next"],[1,"parellex_img3"],[1,"col-md-11"],[1,"detail_text"],[1,"parellex_img4"],[1,"row","justify-content-center","div_decoration"],[1,"col-md-11","detail_text"]],template:function(e,s){e&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"marquee",4),z(5,"img",5),i()()(),z(6,"div",6),o(7,"div",7),f(8),i(),z(9,"div",8),o(10,"h3",9),f(11,"Chitrakoot Char Dham"),i(),o(12,"div",10)(13,"div",11)(14,"div",12)(15,"div",13),z(16,"button",14)(17,"button",15)(18,"button",16)(19,"button",17),i(),o(20,"div",18)(21,"div",19)(22,"div",20)(23,"div",21)(24,"div",22)(25,"div",23),z(26,"img",24),i(),o(27,"div",25),z(28,"img",26),i()(),o(29,"div",22)(30,"div",27),z(31,"img",28),i(),o(32,"div",27),z(33,"img",29),i()()(),o(34,"div",30)(35,"h3",31),f(36,"Kamtanath"),i(),o(37,"p"),f(38),i()()()(),o(39,"div",32)(40,"div",33)(41,"div",34)(42,"div",22)(43,"div",23),z(44,"img",35),i(),o(45,"div",25),z(46,"img",36),i()(),o(47,"div",22)(48,"div",27),z(49,"img",37),i(),o(50,"div",27),z(51,"img",38),i()()(),o(52,"div",30)(53,"h3",31),f(54,"Hanuman Dhara"),i(),o(55,"p"),f(56),i()()()(),o(57,"div",32)(58,"div",33)(59,"div",21)(60,"div",22)(61,"div",23),z(62,"img",39),i(),o(63,"div",25),z(64,"img",40),i()(),o(65,"div",22)(66,"div",27),z(67,"img",41),i(),o(68,"div",27),z(69,"img",42),i()()(),o(70,"div",30)(71,"h3",31),f(72,"Gupt Godavari"),i(),o(73,"p"),f(74),i()()()(),o(75,"div",32)(76,"div",33)(77,"div",34)(78,"div",22)(79,"div",23),z(80,"img",43),i(),o(81,"div",25),z(82,"img",44),i()(),o(83,"div",22)(84,"div",27),z(85,"img",45),i(),o(86,"div",27),z(87,"img",46),i()()(),o(88,"div",30)(89,"h3",31),f(90,"Sati Anusuya"),i(),o(91,"p"),f(92),i()()()()(),o(93,"button",47),z(94,"span",48),o(95,"span",49),f(96,"Previous"),i()(),o(97,"button",50),z(98,"span",51),o(99,"span",49),f(100,"Next"),i()()()()(),o(101,"div")(102,"h3",9),f(103,"Explore Chitrakoot"),i()(),o(104,"div",52)(105,"div",53)(106,"div",54)(107,"div",18)(108,"div",19)(109,"div",55)(110,"div",56)(111,"div",57),z(112,"img",58),o(113,"div",59)(114,"p",60),f(115,"Bharat Koop"),i()()(),o(116,"div",57),z(117,"img",61),o(118,"div",59)(119,"p",60),f(120,"Bharat Milap Mandir"),i()()(),o(121,"div",57),z(122,"img",62),o(123,"div",59)(124,"p",60),f(125,"Ganesh Bagh"),i()()()()()(),o(126,"div",32)(127,"div",55)(128,"div",56)(129,"div",57),z(130,"img",63),o(131,"div",59)(132,"p",60),f(133,"Hanuman Dhara Temple"),i()()(),o(134,"div",57),z(135,"img",64),o(136,"div",59)(137,"p",60),f(138,"Janki Kund"),i()()(),o(139,"div",57),z(140,"img",65),o(141,"div",59)(142,"p",60),f(143,"Kamadgiri Temple"),i()()()()()(),o(144,"div",32)(145,"div",55)(146,"div",56)(147,"div",57),z(148,"img",66),o(149,"div",59)(150,"p",60),f(151,"Sati Anusuya Temple"),i()()(),o(152,"div",57),z(153,"img",67),o(154,"div",59)(155,"p",60),f(156,"Sphatik Shila"),i()()(),o(157,"div",57),z(158,"img",68),o(159,"div",59)(160,"p",60),f(161,"Ram Ghat"),i()()()()()()(),o(162,"button",69),z(163,"span",48),o(164,"span",49),f(165,"Previous"),i()(),o(166,"button",70),z(167,"span",51),o(168,"span",49),f(169,"Next"),i()()()()(),z(170,"div",71),o(171,"div")(172,"h3",9),f(173,"Chitrakoot Weather And Best Time To Visit "),i()(),o(174,"div",55)(175,"div",72)(176,"div",73),f(177),z(178,"br"),o(179,"p"),f(180),i(),z(181,"br"),o(182,"h4"),f(183,"Summer (March - June):"),i(),o(184,"p"),f(185),i(),z(186,"br"),o(187,"h4"),f(188,"Monsoon (July - October):"),i(),o(189,"p"),f(190),i(),z(191,"br"),o(192,"h4"),f(193,"Winter (November - February) : "),i(),o(194,"p"),f(195),i()()()(),z(196,"div",74),o(197,"div")(198,"h3",9),f(199,"How To Reach Chitrakoot"),i()(),o(200,"div",75)(201,"div",76)(202,"h4"),f(203,"BY AIR "),i(),z(204,"br"),f(205," The nearest airports are Allahabad (135 kms from Chitrakoot), Khajuraho( 175 kms) and Varanasi (275 kms). These airports have daily flight services to Delhi. "),z(206,"br"),o(207,"h4"),f(208,"BY TRAIN"),i(),z(209,"br"),f(210," Chitrakoot Dham Karwi (CKTD) is the nearest railway station and it is 8km away from Chitrakoot. The station lies on the Jhansi-Manikpur main line and is well connected to all prominent Indian cities. You can also get down at Manikpur Junction, which is 35 kms away from Chitrakoot, or at Satna Junction, which is 75 kms away. "),z(211,"br"),f(212," Main Railway Route from Chitrakoot is as follows "),o(213,"ul")(214,"li"),f(215,"From Chitrakoot to Hajrat Nizamuddin (N. Delhi) via Banda."),i(),o(216,"li"),f(217,"From Chitrakoot to Lucknow via Banda"),i(),o(218,"li"),f(219,"From Chitrakoot to Allahabad, Mughal Sarai, Hawraha via Manikpur."),i(),o(220,"li"),f(221,"From Chitrakoot to Varanasi via Manikpur"),i(),o(222,"li"),f(223,"From Chitrakoot to Kurla (Mumbai) via Jhansi"),i()(),z(224,"br"),o(225,"h4"),f(226,"BY ROAD"),i(),z(227,"br"),f(228," State-owned buses are available from Allahabad, Banda, Kanpur, Satna and Jhansi to reach Chitrakoot. One can also take taxi from Delhi airport to Chitrakoot. "),z(229,"br"),f(230," Main Roadways Route from Chitrakoot is as follows : "),o(231,"ul")(232,"li"),f(233,"From Chitrakoot to Mirzapur via Allahabad. "),i(),o(234,"li"),f(235,"From Chitrakoot to Banda, Kanpur & Lucknow. "),i(),o(236,"li"),f(237,"From Chitrakoot to Rajapur. "),i(),o(238,"li"),f(239,"From Chitrakoot to Sagar via Mahoba. "),i(),o(240,"li"),f(241,"From Chitrakoot to Panna via Attra & Naraini. "),i()()()()()()),e&2&&(p(8),w(" ",s.mainHeading," "),p(30),b(s.aboutKamadgiri),p(18),b(s.aboutHanumanDhara),p(18),b(s.aboutGuptGodavari),p(18),b(s.aboutSatiAnusuya),p(85),w(" ",s.detailsChitrakoot," "),p(3),b(s.weatherCktd),p(5),b(s.summerWeather),p(5),b(s.mansoonWeather),p(5),b(s.winterWeather))},styles:['.custom-a[_ngcontent-%COMP%]:hover{background-color:green}.container-custom[_ngcontent-%COMP%]{border:2px solid rgb(17,0,255)}.sliding-row[_ngcontent-%COMP%]{background-image:url(https://files.yappe.in/place/full/ramghat-chitrakoot-7169226.webp);background-repeat:no-repeat;background-size:100% 100%}.caro-img[_ngcontent-%COMP%]{height:300px;width:100%}.caro-text[_ngcontent-%COMP%]{text-align:justify;overflow:auto}#header_text[_ngcontent-%COMP%]{text-align:center;color:#20036b}.div_decoration[_ngcontent-%COMP%]{box-shadow:15px 15px 15px .5px #383937;height:350px}.div_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:310px;width:100%;margin-top:10px;margin-bottom:4px;border:2px solid black;box-shadow:15px 15px 15px .5px #5b5a5a}.two_row_div_img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:150px;width:100%;margin-top:10px;margin-bottom:4px;border:2px solid black;border-radius:25px;box-shadow:15px 15px 15px .5px #5b5a5a}.div_text[_ngcontent-%COMP%]{border:2px solid black;border-radius:10px;box-shadow:15px 15px 15px .5px #5b5a5a;margin-left:30px;max-height:330px;overflow:scroll;margin-right:20px;background-color:#2f4f4f;color:#fff}.div_text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:justify;text-indent:25px}.card[_ngcontent-%COMP%]{border:0px;border-bottom:5px solid rebeccapurple!important;height:25rem}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;width:100%;border-radius:10px}.card-body[_ngcontent-%COMP%]{width:100%}.card-text[_ngcontent-%COMP%]{text-align:center;margin-top:-10px;font-size:20px;font-weight:600}.explore-div-col[_ngcontent-%COMP%]{display:flex;flex:0 0 auto;overflow:hidden;margin:0 5px}#explore-caro-btn-next[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:-80%;background-color:#8a2be2;border-radius:50px}#explore-caro-btn-pre[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:-80%;background-color:#8a2be2;border-radius:50px}#hanuman_dhara[_ngcontent-%COMP%]{background-color:#0ff;height:300px;border:2px solid red}#explore_div[_ngcontent-%COMP%]{height:400px}.parellex_img1[_ngcontent-%COMP%]{height:500px;background-image:url(https://img.traveltriangle.com/blog/wp-content/uploads/2020/03/shutterstock_14324283861.jpg);background-repeat:no-repeat;background-position:center;background-size:cover;background-attachment:fixed}.parllex_text[_ngcontent-%COMP%]{text-align:center;font-size:20px;font-weight:600;padding:30px}.parellex_img2[_ngcontent-%COMP%]{height:500px;background-image:url(https://newstrack.com/h-upload/2022/07/10/1356182-places-to-visit-in-chitrakoot.webp);background-repeat:no-repeat;background-position:center;background-size:cover;background-attachment:fixed}.parellex_img3[_ngcontent-%COMP%]{height:500px;background-image:url(https://d368ufu7xgcs86.cloudfront.net/16592-1564485304.jpg);background-repeat:no-repeat;background-position:center;background-size:cover;background-attachment:fixed}.parellex_img4[_ngcontent-%COMP%]{height:500px;background-image:url("https://images.firstpost.com/wp-content/uploads/2022/07/Bundelkhand-3-640.jpg?im=FitAndFill=(1200,675)");background-repeat:no-repeat;background-position:center;background-size:cover;background-attachment:fixed}.detail_text[_ngcontent-%COMP%]{height:350px;text-align:justify;overflow:scroll;font-style:oblique;font-family:serif}']})}}return c})();function u6(c,a){if(c&1&&(o(0,"div",2)(1,"div",3),z(2,"img",4),i(),o(3,"div",5)(4,"div",6)(5,"div",7)(6,"div",8),z(7,"p"),o(8,"h3"),f(9),i(),o(10,"span"),f(11),i()(),o(12,"p")(13,"strong"),f(14,"Location:"),i(),f(15),i(),o(16,"p"),f(17),i(),o(18,"p")(19,"strong"),f(20,"Review:"),i(),f(21),i()(),o(22,"div",9)(23,"h4"),f(24),i(),o(25,"ul")(26,"li"),f(27),i(),o(28,"li"),f(29),i()(),o(30,"p")(31,"strong"),f(32,"Price:"),i(),f(33),i(),o(34,"button",10),f(35,"See availability"),i()()()()()),c&2){let l=a.$implicit;p(2),c1("src",l.hotelImage,Q),p(7),b(l.name),p(2),w("\xA0\xA0Rating : ",l.rating,""),p(4),w(" ",l.location,""),p(2),b(l.distance),p(4),w(" ",l.review,""),p(3),b(l.roomType),p(3),b(l.bedType),p(2),b(l.availability),p(4),w(" ",l.price,""),p(),N("disabled",!0)}}var X3=(()=>{class c{constructor(){this.hotelDetails=[{hotelImage:"https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",name:"Hotel Chitrakoot 1",location:"Ramghat Chitrakoot",distance:"2.7 KM from railway station",roomType:"Deluxe Twin Room",bedType:"2 single beds",availability:"Only 2 rooms left at this price",price:"\u20B93,299 + \u20B9396 taxes",review:"7.8 - Good (1,319 real reviews)",rating:"3.5"},{hotelImage:"https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",name:"Hotel Chitrakoot 2",location:"Ramghat Chitrakoot",distance:"2.7 KM from railway station",roomType:"Deluxe Twin Room",bedType:"2 single beds",availability:"Only 2 rooms left at this price",price:"\u20B93,299 + \u20B9396 taxes",review:"7.8 - Good (1,319 real reviews)"},{hotelImage:"https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",name:"Hotel Chitrakoot 3",location:"Ramghat Chitrakoot",distance:"2.7 KM from railway station",roomType:"Deluxe Twin Room",bedType:"2 single beds",availability:"Only 2 rooms left at this price",price:"\u20B93,299 + \u20B9396 taxes",review:"7.8 - Good (1,319 real reviews)"},{hotelImage:"https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",name:"Hotel Chitrakoot 4",location:"Ramghat Chitrakoot",distance:"2.7 KM from railway station",roomType:"Deluxe Twin Room",bedType:"2 single beds",availability:"Only 2 rooms left at this price",price:"\u20B93,299 + \u20B9396 taxes",review:"7.8 - Good (1,319 real reviews)"},{hotelImage:"https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",name:"Hotel Chitrakoot 5",location:"Ramghat Chitrakoot",distance:"2.7 KM from railway station",roomType:"Deluxe Twin Room",bedType:"2 single beds",availability:"Only 2 rooms left at this price",price:"\u20B93,299 + \u20B9396 taxes",review:"7.8 - Good (1,319 real reviews)"},{hotelImage:"https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",name:"Hotel Chitrakoot 6",location:"Ramghat Chitrakoot",distance:"2.7 KM from railway station",roomType:"Deluxe Twin Room",bedType:"2 single beds",availability:"Only 2 rooms left at this price",price:"\u20B93,299 + \u20B9396 taxes",review:"7.8 - Good (1,319 real reviews)"}]}static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275cmp=g({type:c,selectors:[["app-hotel"]],standalone:!0,features:[v],decls:2,vars:1,consts:[[1,"outer"],["class","row","style","margin-top: 2%;margin-bottom: 5%; border: 1px blueviolet solid;",4,"ngFor","ngForOf"],[1,"row",2,"margin-top","2%","margin-bottom","5%","border","1px blueviolet solid"],[1,"col-md-3"],[2,"width","240px","aspect-ratio","auto 240 / 240","height","240px",3,"src"],[1,"col-md-9"],[1,"row"],[1,"col-md-8"],[2,"display","flex"],[1,"col-md-4"],[1,"btn","btn-primary",3,"disabled"]],template:function(e,s){e&1&&(o(0,"div",0),G(1,u6,36,11,"div",1),i()),e&2&&(p(),N("ngForOf",s.hotelDetails))},dependencies:[I,l1],styles:[".row[_ngcontent-%COMP%]{background-color:#fff}"]})}}return c})();function x6(c,a){if(c&1&&(o(0,"div",2)(1,"div",3),z(2,"img",4),i(),o(3,"div",5)(4,"div",6)(5,"div",7)(6,"div",8),z(7,"p"),o(8,"h3"),f(9),i(),o(10,"span"),f(11),i()(),o(12,"p")(13,"strong"),f(14,"Location:"),i(),f(15),i(),o(16,"p"),f(17),i(),o(18,"p")(19,"strong"),f(20,"Review:"),i(),f(21),i()(),o(22,"div",9)(23,"h4"),f(24),i(),o(25,"ul")(26,"li"),f(27),i(),o(28,"li"),f(29),i()(),o(30,"p")(31,"strong"),f(32,"Price:"),i(),f(33),i(),o(34,"button",10),f(35,"See availability"),i()()()()()),c&2){let l=a.$implicit;p(2),c1("src",l.image,Q),p(7),b(l.name),p(2),w("\xA0\xA0Rating : ",l.rating,""),p(4),w(" ",l.location,""),p(2),b(l.distance),p(4),w(" ",l.review,""),p(3),b(l.roomType),p(3),b(l.bedType),p(2),b(l.availability),p(4),w(" ",l.price,""),p(),N("disabled",!0)}}var $3=(()=>{class c{constructor(){this.dharmshalaDetails=[{image:"https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",name:"Kushwaha Dharmshala",location:"Ramghat Chitrakoot",distance:"2.7 KM from railway station",roomType:"Deluxe Twin Room",bedType:"2 single beds",availability:"Only 2 rooms left at this price",price:"\u20B93,299 + \u20B9396 taxes",review:"7.8 - Good (1,319 real reviews)",rating:"3.5"},{image:"https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",name:"Soni Dharmshala",location:"Ramghat Chitrakoot",distance:"2.7 KM from railway station",roomType:"Deluxe Twin Room",bedType:"2 single beds",availability:"Only 2 rooms left at this price",price:"\u20B93,299 + \u20B9396 taxes",review:"7.8 - Good (1,319 real reviews)"},{image:"https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",name:"Hotel Taj",location:"Ramghat Chitrakoot",distance:"2.7 KM from railway station",roomType:"Deluxe Twin Room",bedType:"2 single beds",availability:"Only 2 rooms left at this price",price:"\u20B93,299 + \u20B9396 taxes",review:"7.8 - Good (1,319 real reviews)"},{image:"https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",name:"Hotel Taj",location:"Ramghat Chitrakoot",distance:"2.7 KM from railway station",roomType:"Deluxe Twin Room",bedType:"2 single beds",availability:"Only 2 rooms left at this price",price:"\u20B93,299 + \u20B9396 taxes",review:"7.8 - Good (1,319 real reviews)"},{image:"https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",name:"Hotel Taj",location:"Ramghat Chitrakoot",distance:"2.7 KM from railway station",roomType:"Deluxe Twin Room",bedType:"2 single beds",availability:"Only 2 rooms left at this price",price:"\u20B93,299 + \u20B9396 taxes",review:"7.8 - Good (1,319 real reviews)"},{image:"https://cf.bstatic.com/xdata/images/hotel/square600/438645826.webp?k=1b454bac2a41ab59e9a7453ec86a59e6579c338a3fd6a57dd538bb062ca7c65f&o=",name:"Hotel Taj",location:"Ramghat Chitrakoot",distance:"2.7 KM from railway station",roomType:"Deluxe Twin Room",bedType:"2 single beds",availability:"Only 2 rooms left at this price",price:"\u20B93,299 + \u20B9396 taxes",review:"7.8 - Good (1,319 real reviews)"}]}static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275cmp=g({type:c,selectors:[["app-dharmshala"]],standalone:!0,features:[v],decls:2,vars:1,consts:[[1,"outer"],["class","row","style","margin-top: 2%;margin-bottom: 5%; border: 1px blueviolet solid;",4,"ngFor","ngForOf"],[1,"row",2,"margin-top","2%","margin-bottom","5%","border","1px blueviolet solid"],[1,"col-md-3"],[2,"width","240px","aspect-ratio","auto 240 / 240","height","240px",3,"src"],[1,"col-md-9"],[1,"row"],[1,"col-md-8"],[2,"display","flex"],[1,"col-md-4"],[1,"btn","btn-primary",3,"disabled"]],template:function(e,s){e&1&&(o(0,"div",0),G(1,x6,36,11,"div",1),i()),e&2&&(p(),N("ngForOf",s.dharmshalaDetails))},dependencies:[I,l1],styles:[".row[_ngcontent-%COMP%]{background-color:#fff}"]})}}return c})();var o1=(()=>{class c{static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275cmp=g({type:c,selectors:[["app-in-progress"]],standalone:!0,features:[v],decls:10,vars:0,consts:[[1,"outer"],[1,"container"],[1,"progress"],[1,"progress-bar"],[1,"emoji"]],template:function(e,s){e&1&&(o(0,"div",0)(1,"div",1)(2,"h1"),f(3,"Page Under Construction"),i(),o(4,"div",2),z(5,"div",3),i(),o(6,"p",4),f(7,"\u{1F6A7}"),i(),o(8,"p"),f(9,"We're working hard to bring this page to life. Please check back later!"),i()()())},styles:[".outer[_ngcontent-%COMP%]{font-family:Arial,sans-serif;background-color:#f4f4f9;text-align:center;margin:0;padding:0}.container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column}h1[_ngcontent-%COMP%]{font-size:3rem;color:red;margin-bottom:20px}.progress[_ngcontent-%COMP%]{width:80%;max-width:400px;height:20px;border-radius:10px;background-color:#ddd;overflow:hidden}.progress-bar[_ngcontent-%COMP%]{height:100%;width:0;background-color:#4caf50;animation:_ngcontent-%COMP%_progressAnimation 3s infinite}@keyframes _ngcontent-%COMP%_progressAnimation{0%{width:0}50%{width:50%}to{width:100%}}p[_ngcontent-%COMP%]{font-size:1.2rem;color:#af1616;margin-top:20px}.emoji[_ngcontent-%COMP%]{font-size:2rem}"]})}}return c})();function g6(c,a){if(c&1){let l=h2();o(0,"div",5)(1,"div",6),u2("click",function(){let s=r2(l).$implicit,n=x2();return m2(n.getStayType(s.type))}),z(2,"img",7),o(3,"div",8)(4,"p",9),f(5),i()()()()}if(c&2){let l=a.$implicit;p(2),c1("src",l.image,Q),p(3),b(l.type)}}function b6(c,a){c&1&&(o(0,"div")(1,"div",10)(2,"h3"),f(3,"Currently we are not offering online Hotel booking"),i()(),z(4,"app-hotel"),i())}function v6(c,a){c&1&&(o(0,"div"),z(1,"app-dharmshala"),i())}function N6(c,a){c&1&&(o(0,"div"),z(1,"app-in-progress"),i())}function S6(c,a){c&1&&(o(0,"div"),z(1,"app-in-progress"),i())}var J3=(()=>{class c{constructor(){this.selectCategory="Hotel",this.stayCategory=[{type:"Hotel",message:"Currently we are not offering online Hotel booking",image:"https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550975.jpeg?k=6d2c22368ec017e1f99a4811c8abb1cb2d7fd829c9ddd12a82ff1aa77ab7da19&o="},{type:"Dharmshala",message:"",image:"https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550925.jpeg?k=c0db68290ad93f4dea18b95395397a874a8801159fb4d6308bd6164ebcd28a11&o="},{type:"Guest House",message:"",image:"https://q-xx.bstatic.com/xdata/images/hotel/263x210/595550098.jpeg?k=d1b5a6f6faa0c76496d57dd0d263a88c07ad220b3873e14fcd71c9d8a81c5c25&o="},{type:"Homestays",message:"",image:"https://r-xx.bstatic.com/xdata/images/hotel/263x210/595550377.jpeg?k=ef93cbc1a3af0d6db84e27b6da280a4ef24dbcfeb065fcfeae4fe9c43dddd2da&o="}]}getStayType(l){this.selectCategory=l}static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275cmp=g({type:c,selectors:[["app-stay-home"]],standalone:!0,features:[v],decls:10,vars:5,consts:[[1,"container"],[1,"col-md-12"],[1,"row"],["class","col",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"col"],[1,"card",3,"click"],["alt","...",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-text"],[1,"container-custom",2,"text-align","center","color","red"]],template:function(e,s){e&1&&(o(0,"div",0)(1,"h4"),f(2,"Browse by property type"),i(),o(3,"div",1)(4,"div",2),G(5,g6,6,2,"div",3),i()(),G(6,b6,5,0,"div",4)(7,v6,2,0,"div",4)(8,N6,2,0,"div",4)(9,S6,2,0,"div",4),i()),e&2&&(p(5),N("ngForOf",s.stayCategory),p(),N("ngIf",s.selectCategory==="Hotel"),p(),N("ngIf",s.selectCategory==="Dharmshala"),p(),N("ngIf",s.selectCategory==="Guest House"),p(),N("ngIf",s.selectCategory==="Homestays"))},dependencies:[X3,I,l1,N2,$3,o1],styles:["p[_ngcontent-%COMP%]{color:#8a2be2}"]})}}return c})();var Q3=(()=>{class c{static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275cmp=g({type:c,selectors:[["app-visit-pages"]],standalone:!0,features:[v],decls:1,vars:0,template:function(e,s){e&1&&z(0,"app-in-progress")},dependencies:[o1]})}}return c})();var c4=(()=>{class c{static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275cmp=g({type:c,selectors:[["app-food"]],standalone:!0,features:[v],decls:1,vars:0,template:function(e,s){e&1&&z(0,"app-in-progress")},dependencies:[o1]})}}return c})();var l4=[{path:"home",component:Y3},{path:"hotels",component:J3},{path:"food",component:c4},{path:"visit",component:Q3},{path:"",redirectTo:"home",pathMatch:"full"}];var a4={providers:[V2(l4),H2()]};var y6={providers:[w2()]},e4=v2(a4,y6);var H6=()=>S2(G3,e4),F8=H6;export{F8 as a};
