(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(81),c=t.n(o),i=t(645),a=t.n(i)()(c());a.push([e.id,"*{\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n    color: #222;\n}\n\nbody{\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\n.sticky-header{\n    background: white;\n    height: 100px;\n    z-index: 9999;\n    top: 0;\n    position: -webkit-sticky;\n    position: sticky;\n    padding: 0px 10%;\n    display: flex;\n    align-items: center;\n}\n\n.nav-bar{\n    font-family: 'Poppins', sans-serif;\n    list-style: none;\n    display: flex;\n    gap: 50px;\n    font-weight: 600;\n    user-select: none;\n}\n\n.nav-bar li{\n    cursor: pointer;\n}\n\n.nav-bar li:hover{\n    color: red;\n}\n\n.selected{\n    color: red;\n    position: relative;\n}\n\n.selected::after{\n    content: '';\n    position: absolute;\n    background-color: red;\n    border-radius: 15%;\n\n    bottom: -6px;\n    left: 50%;\n    transform: translateX(-50%);\n    height: 3px;\n    width: 30px;\n}\n\n.page-content{\n    text-align: center;\n}\n\n/* CTA Bar */\n.cta-bar{\n    display: flex;\n    background-color: #222;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n    padding: 14px;\n}\n\n.cta-text{\n    color: white;\n    font-family: 'poppins';\n    font-weight: 700;\n    font-size: 18px;\n}\n\n.cta-btn{\n    width: 180px;\n    height: 45px;\n    color: white;\n    background-color: red;\n    border-radius: 25px;\n    outline: none;\n    border: none;\n    font-size: 16px;\n    font-weight: 600;\n}\n\n.cta-btn:hover{\n    background-color: rgb(230, 0, 0);\n}\n\n/* Welcome Banner */\n.welcome-banner{\n    background-color: whitesmoke;\n    display: flex;\n    padding: 0px 10%;\n}\n\n.welcome-container{\n    \n}\n\n.welcome-stripe{\n    width: 54px;\n    height: 25px;\n    background: repeating-linear-gradient(90deg, red,red 9px,white 0,white 18px);\n}\n\n.welcome-text{\n    font-family: 'poppins';\n    font-size: 35px;\n    font-weight: 800;\n    padding: 35px 0px;\n    color: #222;\n}\n\n/* Section */\n.section{\n    width: 75%;\n    margin: auto;\n    padding-bottom: 100px;\n}\n\n/* Section Header */\n.section-header{\n    display: flex;\n    padding: 100px 0px 70px 0px;\n    font-family: 'poppins';\n    font-size: 35px;\n    font-weight: 700;\n}\n\n.section-title{\n    padding: 0px 30px 0px 0px;\n}\n\n.line-box{\n    flex: 1;\n    border-top: 2px solid #eee;\n    margin-top: .7em;\n}\n\n/* Categories */\n.cards{\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));\n    gap: 30px;\n}\n\n.card{\n    background-color: whitesmoke;\n    border-radius: 5px;\n    overflow: hidden;\n    transition: all 0.4s;\n}\n\n.category-img-container{\n    height: 230px;\n    background-color: red;\n    overflow: hidden;\n}\n\n.category-img{\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    object-position: center;\n    transition: all 0.3s;\n}\n\n.category-title{\n    font-family: 'poppins';\n    font-size: 16px;\n    font-weight: 600;\n    padding: 35px 0px;\n}\n\n.card:hover .category-img{\n    transform: scale(1.05);\n}\n.card:hover{\n    transform: scale(1.05);\n}\n\n/* Footer */\n.footer a{\n    color: white;\n    cursor: pointer;\n}\n\n.footer{\n    background-color: #222;\n    color: white;\n    font-size: 16px;\n    font-weight: 300;\n    font-family: 'poppins';\n    padding: 50px;\n\n    display: grid;\n    gap: 100px;\n    grid-template-columns: auto auto auto;\n    justify-content: center;\n    place-items: center;\n    margin-top: auto;\n}\n\n.footer-links{\n    display: flex;\n    gap: 20px;\n}\n\n.footer-logo-container{\n    place-self: start;\n}\n\n.store-links-container{\n    display: flex;\n    gap: 50px;\n    justify-self: start;\n}\n\n/* Menu */\n.menu{\n    width: 65%;\n    margin: auto;\n    padding-bottom: 100px;\n    display: grid;\n    grid-template-columns: auto 1fr;\n}\n\n/* Food Cards Container */\n.food-card-container{\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));\n    gap: 10px;\n}\n\n/* Food Card */\n.food-card{\n    /* min-height: 500px; */\n    background-color: whitesmoke;\n    border-radius: 10px;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    overflow: hidden;\n}\n\n.food-image-container{\n    background-color: #aaa;\n    height: 300px;\n    overflow: hidden;\n}\n\n.food-image{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: bottom;\n}\n\n.food-details{\n    text-align: left;\n    font-family: 'poppins';\n    padding: 30px 40px;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.btn-cart{\n    margin: 0px 0px 40px 40px;\n}\n\n.food-title{\n    font-size: 19px;\n    font-weight: 700;\n}\n\n.food-price{\n    font-size: 16px;\n    font-weight: 600;\n}\n\n.food-description{\n    font-size: 16px;\n    font-weight: 400;\n}\n\n/* Menu Nav Card */\n.menu-nav-card{\n    padding-right: 120px;\n    font-family: 'poppins';\n    text-align: left;\n\n    position: sticky;\n    top: 100px;\n    align-self: start;\n}\n\n.menu-nav-title{\n    font-size: 37px;\n    font-weight: 700;\n    margin-bottom: 30px;\n    margin-top: 20px;\n}\n\n.menu-nav-list{\n    font-size: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n}\n\n.menu-nav-item{\n    color: #888;\n}\n",""]);const r=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,c,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);o&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),c&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=c):p[4]="".concat(c)),n.push(p))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},a=[],r=0;r<e.length;r++){var s=e[r],d=o.base?s[0]+o.base:s[0],p=i[d]||0,l="".concat(d," ").concat(p);i[d]=p+1;var u=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=c(m,o);o.byIndex=r,n.splice(r,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function c(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,c){var i=o(e=e||[],c=c||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var r=t(i[a]);n[r].references--}for(var s=o(e,c),d=0;d<i.length;d++){var p=t(i[d]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var c=void 0!==t.layer;c&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,c&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var c=n[o];if(void 0!==c)return c.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");if(o.length)for(var c=o.length-1;c>-1&&!e;)e=o[c--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"f3f93e947ab3faac3b2f.png",n=t.p+"907db7a9c767c021ee90.jpg",o=t.p+"92f7eeda0260fdbe5119.jpg",c=t.p+"f8fe8017a2c7381d89f2.jpg",i=t.p+"077cfed680d6fb328b79.jpg",a=t.p+"0eba963f9a1e73ee8a33.jpg",r=t.p+"e2180495974303eb1fd6.jpg",s=t.p+"ca1615122951037643db.jpg",d=t.p+"907db7a9c767c021ee90.jpg";function p(){const e=document.querySelector(".page-content"),n=document.createElement("div");n.classList.add("cta-bar");const t=document.createElement("span");t.classList.add("cta-text"),t.textContent="LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN";const o=document.createElement("button");o.classList.add("cta-btn"),o.textContent="Start Order",n.append(t,o),e.appendChild(n)}function l(e="Browse Categories"){const n=document.createElement("div");n.classList.add("section-header");const t=document.createElement("div");t.textContent=e,t.classList.add("section-title");const o=document.createElement("div");return o.classList.add("line-box"),n.append(t,o),n}function u(e,n){const t=document.createElement("div");t.classList.add("category-container"),t.append(l(e));const o=document.createElement("div");return o.classList.add("food-card-container"),n.forEach((e=>{o.append(function(e){const n=document.createElement("div");n.classList.add("food-card");const t=document.createElement("div");t.classList.add("food-image-container");const o=document.createElement("img");o.classList.add("food-image"),o.src=e.src,t.appendChild(o);const c=document.createElement("div");c.classList.add("food-details");const i=document.createElement("div");i.classList.add("food-title"),i.textContent=e.title;const a=document.createElement("div");a.classList.add("food-price"),a.textContent=e.price;const r=document.createElement("div");r.classList.add("food-description"),r.textContent=e.desc;const s=document.createElement("button");return s.classList.add("cta-btn","btn-cart"),s.textContent="Add to cart",c.append(i,a,r),n.append(t,c,s),n}(e))})),t.append(o),t}function m(){const t=document.querySelector(".page-content");p(),function(){const e=document.querySelector(".page-content"),n=document.createElement("div");n.classList.add("welcome-banner");const t=document.createElement("div");t.classList.add("welcome-container");const o=document.createElement("div");o.classList.add("welcome-stripe");const c=document.createElement("div");c.classList.add("welcome-text"),c.textContent="WELCOME TO RFC!",t.append(o,c),n.append(t),e.append(n)}();const u=document.createElement("div");u.classList.add("categories","section");const m=[n,o,c,i,a,r,s,d];u.append(l(),function(e=["Peri Peri Chicken","Chicken Nuggets","Bucket Chicken"],n){const t=document.createElement("div");t.classList.add("cards","cards-categories");for(let o=0;o<e.length;o++){const c=document.createElement("div");c.classList.add("card","card-category");const i=document.createElement("div");i.classList.add("category-img-container");const a=document.createElement("img");a.classList.add("category-img"),a.src=n[o];const r=document.createElement("div");r.classList.add("category-title"),r.textContent=e[o],i.append(a),c.append(i,r),t.append(c)}return t}(["Peri Peri Chicken","Value Snackers","Chicken Rolls","Chicken Buckets","Biriyani Buckets","Box Meals","Burgers","French Fries"],m)),document.createElement("h1").textContent="RFC";const f=new Image;f.src=e,f.width="500",document.createElement("p").textContent="For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates.  We love food, lots of different food, just like you.",t.append(u)}const f=t.p+"875ede04ea522b211e70.jpg",g=t.p+"c2d6c955f37ad8c2c1e2.jpg",h=t.p+"54818762e50a5e61ea09.jpg",v=t.p+"b318bee16d9c65c2e839.jpg";var x=t(379),b=t.n(x),y=t(795),E=t.n(y),L=t(569),w=t.n(L),C=t(565),k=t.n(C),P=t(216),S=t.n(P),j=t(589),R=t.n(j),I=t(426),T={};T.styleTagTransform=R(),T.setAttributes=k(),T.insert=w().bind(null,"head"),T.domAPI=E(),T.insertStyleElement=S(),b()(I.Z,T),I.Z&&I.Z.locals&&I.Z.locals;const B=t.p+"aedbde4f111eb4a37b64.svg",M=t.p+"3344db609ad45e320c09.svg",D=t.p+"039b4df1ea30e8cebe6f.svg",N=document.querySelector(".content"),z=document.createElement("header");z.classList.add("sticky-header");const F=document.createElement("ul");F.classList.add("nav-bar");const A=document.createElement("li");A.textContent="Home";const O=document.createElement("li");O.textContent="Menu";const H=document.createElement("li");function q(){V(),m(),A.classList.add("selected")}function K(){V(),function(){p();const e=document.querySelector(".page-content"),n=document.createElement("div");n.classList.add("menu");const t=document.createElement("div");t.classList.add("menu-nav-card");const o=document.createElement("div");o.classList.add("menu-nav-title"),o.textContent="RFC Menu";const c=document.createElement("div");c.classList.add("menu-nav-list"),["PERI PERI CHICKEN","VALUE SNACKERS","CHICKEN ROLLS","CHICKEN BUCKETS","BIRYANI BUCKETS","BOX MEALS","BURGERS"].forEach((e=>{const n=document.createElement("div");n.classList.add("menu-nav-item"),n.textContent=e,c.append(n)}));const i=document.createElement("div");i.classList.add("welcome-stripe"),t.append(i,o,c),n.append(t);const a=document.createElement("div");a.classList.add("menu-sections");class r{constructor(e,n,t,o){this.src=o,this.title=e,this.price=n,this.desc=t}}const s=[];s.push(new r("5 Leg Pc & 2 Dips Bucket","₹519.05","Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)",f)),s.push(new r("Peri Peri 10 Pc Chicken Strips & 2 Dips","₹499.05","Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips",g)),s.push(new r("Peri Peri 10 Leg Pc & 4 Dips","₹948.57","Save Rs. 334 on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)",h)),s.push(new r("Peri Peri 6pc Chicken Strips","₹299.05","Save 16% on 6 Spicy Peri Peri chicken boneless strips",v));const d=u("Peri Peri Chicken",s);d.id="peri-peri-chicken";const l=[];l.push(new r("5 Leg Pc & 2 Dips Bucket","₹519.05","Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)",f)),l.push(new r("Peri Peri 10 Pc Chicken Strips & 2 Dips","₹499.05","Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips",g)),l.push(new r("Peri Peri 10 Leg Pc & 4 Dips","₹948.57","Save Rs. 334 on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)",h)),l.push(new r("Peri Peri 6pc Chicken Strips","₹299.05","Save 16% on 6 Spicy Peri Peri chicken boneless strips",v));const m=u("Value Snackers",l);m.id="value-snackers",a.append(d,m),n.append(a),e.appendChild(n)}(),O.classList.add("selected")}function U(){V(),function(){p();const e=document.querySelector(".page-content"),n=document.createElement("div"),t=document.createElement("h1");t.textContent="Contact";const o=document.createElement("p");o.textContent="Contact Page Details",n.appendChild(t),n.appendChild(o),e.appendChild(n)}(),H.classList.add("selected")}H.textContent="Contact",A.addEventListener("click",(e=>{q()})),O.addEventListener("click",(e=>{K()})),H.addEventListener("click",(e=>{U()})),F.append(A,O,H),A.classList.add("selected"),z.appendChild(F),N.appendChild(z);const Z=document.createElement("div");function V(){Z.innerHTML="",A.classList.remove("selected"),O.classList.remove("selected"),H.classList.remove("selected")}Z.classList.add("page-content"),N.appendChild(Z),m();const W=document.createElement("div");W.classList.add("footer");const $=document.createElement("div");$.classList.add("footer-links");const X=document.createElement("a");X.classList.add("footer-link","home-link"),X.textContent="Home",X.onclick=q;const Y=document.createElement("a");Y.classList.add("footer-link"),Y.textContent="Menu",Y.onclick=K;const _=document.createElement("a");_.classList.add("footer-link","contact-link"),_.textContent="Contact",_.onclick=U,$.append(X,Y,_);const G=document.createElement("div");G.classList.add("footer-logo-container");const J=document.createElement("img");J.classList.add("footer-logo"),J.src=D,G.append(J);const Q=document.createElement("div");Q.classList.add("store-links-container");const ee=document.createElement("div");ee.classList.add("store-img-container","play-img-container");const ne=document.createElement("img");ne.classList.add("playstore-image"),ne.src=M,ee.append(ne);const te=document.createElement("div");te.classList.add("store-img-container","apple-img-container");const oe=document.createElement("img");oe.classList.add("applestore-image"),oe.src=B,te.append(oe),Q.append(ee,te),W.append(G,$,Q),document.body.append(W)})()})();