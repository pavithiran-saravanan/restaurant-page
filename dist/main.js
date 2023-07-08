(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(81),r=t.n(o),a=t(645),c=t.n(a)()(r());c.push([e.id,"*{\n    padding: 0px;\n    margin: 0px;\n}\n\n.sticky-header{\n    background: white;\n    height: 100px;\n    z-index: 9999;\n    top: 0;\n    position: -webkit-sticky;\n    position: sticky;\n    padding: 0px 10%;\n    display: flex;\n    align-items: center;\n}\n\n.nav-bar{\n    font-family: 'Poppins', sans-serif;\n    list-style: none;\n    display: flex;\n    gap: 50px;\n    font-weight: 600;\n    user-select: none;\n}\n\n.nav-bar li{\n    cursor: pointer;\n}\n\n.nav-bar li:hover{\n    color: red;\n}\n\n.selected{\n    color: red;\n    position: relative;\n}\n\n.selected::after{\n    content: '';\n    position: absolute;\n    background-color: red;\n    border-radius: 15%;\n\n    bottom: -6px;\n    left: 50%;\n    transform: translateX(-50%);\n    height: 3px;\n    width: 30px;\n}\n\n.page-content{\n    text-align: center;\n}\n\n/* CTA Bar */\n.cta-bar{\n    display: flex;\n    background-color: #222;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n    padding: 14px;\n}\n\n.cta-text{\n    color: white;\n    font-family: 'poppins';\n    font-weight: 700;\n    font-size: 18px;\n}\n\n.cta-btn{\n    width: 180px;\n    height: 45px;\n    color: white;\n    background-color: red;\n    border-radius: 25px;\n    outline: none;\n    border: none;\n    font-size: 16px;\n    font-weight: 600;\n}\n\n.cta-btn:hover{\n    background-color: rgb(230, 0, 0);\n}\n\n/* Welcome Banner */\n.welcome-banner{\n    background-color: whitesmoke;\n    display: flex;\n    padding: 0px 10%;\n}\n\n.welcome-container{\n    \n}\n\n.welcome-stripe{\n    width: 54px;\n    height: 25px;\n    background: repeating-linear-gradient(90deg, red,red 9px,white 0,white 18px);\n}\n\n.welcome-text{\n    font-family: 'poppins';\n    font-size: 35px;\n    font-weight: 800;\n    padding: 35px 0px;\n    color: #222;\n}",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=o.base?s[0]+o.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=r(m,o);o.byIndex=i,n.splice(i,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"f3f93e947ab3faac3b2f.png";function n(){const e=document.querySelector(".page-content"),n=document.createElement("div");n.classList.add("cta-bar");const t=document.createElement("span");t.classList.add("cta-text"),t.textContent="LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN";const o=document.createElement("button");o.classList.add("cta-btn"),o.textContent="Start Order",n.append(t,o),e.appendChild(n)}function o(){n(),function(){const e=document.querySelector(".page-content"),n=document.createElement("div");n.classList.add("welcome-banner");const t=document.createElement("div");t.classList.add("welcome-container");const o=document.createElement("div");o.classList.add("welcome-stripe");const r=document.createElement("div");r.classList.add("welcome-text"),r.textContent="WELCOME TO RFC!",t.append(o,r),n.append(t),e.append(n)}();const t=document.querySelector(".page-content"),o=document.createElement("h1");o.textContent="RFC";const r=new Image;r.src=e,r.width="500";const a=document.createElement("p");a.textContent="For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates.  We love food, lots of different food, just like you.",t.appendChild(o),t.appendChild(r),t.appendChild(a)}var r=t(379),a=t.n(r),c=t(795),i=t.n(c),s=t(569),d=t.n(s),l=t(565),p=t.n(l),u=t(216),m=t.n(u),f=t(589),h=t.n(f),v=t(426),g={};g.styleTagTransform=h(),g.setAttributes=p(),g.insert=d().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=m(),a()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;const x=document.querySelector(".content"),y=document.createElement("header");y.classList.add("sticky-header");const b=document.createElement("ul");b.classList.add("nav-bar");const w=document.createElement("li");w.textContent="Home";const C=document.createElement("li");C.textContent="Menu";const E=document.createElement("li");E.textContent="Contact",w.addEventListener("click",(e=>{k(),o(),w.classList.add("selected")})),C.addEventListener("click",(e=>{k(),function(){n();const e=document.querySelector(".page-content"),t=document.createElement("div"),o=document.createElement("h1");o.textContent="Menu";const r=document.createElement("p");r.textContent="Menu Page Details",t.appendChild(o),t.appendChild(r),e.appendChild(t)}(),C.classList.add("selected")})),E.addEventListener("click",(e=>{k(),function(){n();const e=document.querySelector(".page-content"),t=document.createElement("div"),o=document.createElement("h1");o.textContent="Contact";const r=document.createElement("p");r.textContent="Contact Page Details",t.appendChild(o),t.appendChild(r),e.appendChild(t)}(),E.classList.add("selected")})),b.append(w,C,E),w.classList.add("selected"),y.appendChild(b),x.appendChild(y);const L=document.createElement("div");function k(){L.innerHTML="",w.classList.remove("selected"),C.classList.remove("selected"),E.classList.remove("selected")}L.classList.add("page-content"),x.appendChild(L),o()})()})();