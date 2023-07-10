(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>u});var i=t(81),o=t.n(i),a=t(645),c=t.n(a),s=t(667),r=t.n(s),d=new URL(t(937),t.b),p=c()(o()),l=r()(d);p.push([n.id,`*{\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n    color: #222;\n    scroll-behavior: smooth;\n}\n\nbody{\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\na{\n    text-decoration: none;\n}\n\n.sticky-header{\n    background: white;\n    height: 100px;\n    z-index: 9999;\n    top: 0;\n    position: -webkit-sticky;\n    position: sticky;\n    padding: 0px 10%;\n    display: flex;\n    align-items: center;\n}\n\n.kfc-logo{\n    width: 80px;\n    align-self: center;\n}\n\n.nav-bar{\n    font-family: 'Poppins', sans-serif;\n    list-style: none;\n    display: flex;\n    gap: 50px;\n    font-weight: 600;\n    user-select: none;\n    align-items: center;\n}\n\n.nav-bar li{\n    cursor: pointer;\n}\n\n.bucket-cart-container{\n    margin-left: auto;\n    width: 60px;\n}\n\n.bucket-cart{\n\n}\n\n.nav-bar li:hover{\n    color: red;\n}\n\n.selected{\n    color: red;\n    position: relative;\n}\n\n.selected::after{\n    content: '';\n    position: absolute;\n    background-color: red;\n    border-radius: 15%;\n\n    bottom: -6px;\n    left: 50%;\n    transform: translateX(-50%);\n    height: 3px;\n    width: 30px;\n}\n\n.page-content{\n    text-align: center;\n}\n\n/* CTA Bar */\n.cta-bar{\n    display: flex;\n    background-color: #222;\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n    padding: 14px;\n    height: 60px;\n}\n\n.cta-text{\n    color: white;\n    font-family: 'poppins';\n    font-weight: 700;\n    font-size: 18px;\n}\n\n.cta-btn{\n    /* width: 180px; */\n    /* height: 45px; */\n    padding: 12px 32px;\n    max-width: 180px;\n    max-height: 45px;\n    color: white;\n    background-color: red;\n    border-radius: 50px;\n    outline: none;\n    border: none;\n    font-size: 16px;\n    font-weight: 600;\n}\n\n.cta-btn:hover{\n    background-color: rgb(230, 0, 0);\n}\n\n/* Welcome Banner */\n.welcome-banner{\n    background-color: whitesmoke;\n    display: flex;\n    padding: 0px 10%;\n}\n\n.welcome-container{\n    \n}\n\n.welcome-stripe{\n    width: 40px;\n    height: 20px;\n    /* background: repeating-linear-gradient(90deg, red,red 9px,white 0,white 18px); */\n    background: repeating-linear-gradient(90deg,#e4002b,#e4002b 8px,#fff 0,#fff 16px);\n}\n\n.welcome-text{\n    font-family: 'poppins';\n    font-size: 35px;\n    font-weight: 800;\n    padding: 35px 0px;\n    color: #222;\n}\n\n/* Section */\n.section{\n    width: 75%;\n    margin: auto;\n    padding-bottom: 100px;\n}\n\n/* Section Header */\n.section-header{\n    display: flex;\n    padding: 100px 0px 70px 0px;\n    font-family: 'poppins';\n    font-size: 35px;\n    font-weight: 700;\n}\n\n.section-title{\n    padding: 0px 30px 0px 0px;\n}\n\n.line-box{\n    flex: 1;\n    border-top: 2px solid #eee;\n    margin-top: .7em;\n}\n\n/* Categories */\n.cards{\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));\n    gap: 30px;\n}\n\n.card{\n    background-color: whitesmoke;\n    border-radius: 5px;\n    overflow: hidden;\n    transition: all 0.4s;\n}\n\n.category-img-container{\n    height: 230px;\n    background-color: red;\n    overflow: hidden;\n}\n\n.category-img{\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n    object-position: center;\n    transition: all 0.3s;\n}\n\n.category-title{\n    font-family: 'poppins';\n    font-size: 16px;\n    font-weight: 600;\n    padding: 35px 0px;\n}\n\n.card:hover .category-img{\n    transform: scale(1.05);\n}\n.card:hover{\n    transform: scale(1.05);\n}\n\n/* Footer */\n.footer a{\n    color: white;\n    cursor: pointer;\n}\n\n.footer{\n    background-color: #222;\n    color: white;\n    font-size: 16px;\n    font-weight: 300;\n    font-family: 'poppins';\n    padding: 50px;\n\n    display: grid;\n    gap: 100px;\n    grid-template-columns: auto auto auto;\n    justify-content: center;\n    place-items: center;\n    margin-top: auto;\n}\n\n.footer-links{\n    display: flex;\n    gap: 20px;\n}\n\n.footer-logo-container{\n    place-self: start;\n}\n\n.footer-logo{\n    width: 100%;\n}\n\n.store-links-container{\n    display: flex;\n    gap: 50px;\n    justify-self: start;\n}\n\n/* Menu */\n.menu{\n    width: 65%;\n    margin: auto;\n    padding-bottom: 100px;\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: 110px;\n}\n\n/* Food Cards Container */\n.food-card-container{\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 10px;\n}\n\n/* Food Card */\n.food-card{\n    /* min-height: 500px; */\n    background-color: whitesmoke;\n    border-radius: 10px;\n    display: grid;\n    grid-template-rows: auto 1fr auto;\n    overflow: hidden;\n}\n\n.food-image-container{\n    background-color: #aaa;\n    height: 300px;\n    overflow: hidden;\n}\n\n.food-image{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: bottom;\n}\n\n.food-details{\n    text-align: left;\n    font-family: 'poppins';\n    padding: 30px 40px;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n\n.btn-cart{\n    margin: 0px 0px 40px 40px;\n}\n\n.food-title{\n    font-size: 19px;\n    font-weight: 700;\n}\n\n.food-price{\n    font-size: 16px;\n    font-weight: 600;\n}\n\n.food-description{\n    font-size: 16px;\n    font-weight: 400;\n}\n\n/* Menu Nav Card */\n.menu-nav-card{\n    font-family: 'poppins';\n    text-align: left;\n\n    position: sticky;\n    top: 100px;\n    align-self: start;\n}\n\n.menu-nav-title{\n    font-size: 37px;\n    font-weight: 700;\n    margin-bottom: 30px;\n    margin-top: 20px;\n}\n\n.menu-nav-list{\n    font-size: 16px;\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n}\n\n.menu-nav-item{\n    color: #444;\n    font-weight: 500;\n}\n\n\n/* Contact Banner */\n.contact-banner{\n    display: grid;\n    height: 280px;\n    place-content: center;\n    font-family: 'poppins';\n    background: url(${l}) rgba(33, 33, 33, 0.803);\n    background-blend-mode: darken;\n    background-size: cover;\n}\n\n.banner-contact{\n    color: rgb(187, 187, 187);\n    font-size: 22px;\n    font-weight: 600;\n}\n\n.banner-text{\n    color: white;\n    font-size: 45px;\n    font-weight: 800;\n}\n\n/* Contact Main */\n.contact-main{\n    display: grid;\n    grid-template-columns: auto 1fr;\n    width: 65%;\n    margin: auto;\n    gap: 100px;\n    text-align: left;\n    padding-bottom: 100px;\n}\n\n.contact-stripe{\n}\n\n.contact-left-card{\n    font-family: 'poppins';\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    top: 100px;\n    position: sticky;\n    align-self: start;\n}\n\n.contact-left-title{\n    font-size: 37px;\n    font-weight: 700;\n    margin-top: 10px;\n}\n\n.contact-left-desc{\n    font-size: 16px;\n    font-weight: 500;\n}\n\n.contact-left-button{\n    border-radius: 50px;\n    border: none;\n    font-family: 'poppins';\n    font-size: 16px;\n    border: 1px solid #222;\n    padding: 5px 25px;\n    align-self: flex-start;\n    margin-top: 10px;\n}\n\n/* Text input container */\n.form{\n    display: grid;\n    gap: 30px;\n    margin-top: 70px;\n}\n\n.text-input-container{\n    display: flex;\n    flex-direction: column;\n    font-family: 'poppins';\n    gap: 10px;\n}\n\n.text-input{\n    height: 50px;\n    border-radius: 5px;\n    padding: 0px 17px;\n    font-size: 16px;\n    border: 1px solid #aaa;\n    font-family: 'poppins';\n    width: 100%;\n}\n\n.textarea-input{\n    padding: 10px 17px;\n    min-height: 90px;\n    height: 160px;\n    max-height: 350px;\n    resize: vertical;\n}\n\n.text-label{\n    font-size: 14px;\n    font-weight: 800;\n}\n\n.submit-button{\n    place-self: start;\n    border: none;\n    font-family: 'poppins';\n    font-size: 15px;\n    font-weight: 700;\n    background-color: red;\n    color: white;\n    padding: 10px 30px;\n    border-radius: 6px;\n}\n\n/* Contact right card */\n.contact-right-card{\n\n}\n\n@media (max-width: 1450px){\n    .menu{\n        width: 75%;\n        gap: 80px;\n    }\n}\n\n@media (max-width: 1200px){\n    .contact-main{\n        width: 75%;\n        gap: 50px;\n    }\n    .footer{\n        gap: 60px;\n    }\n    .menu{\n        width: 85%;\n        gap: 60px;\n    }\n}\n\n@media (max-width: 900px){\n    .contact-left-card{\n        position: relative;\n        top: 0px;\n        width: 100%;\n    }\n    .contact-main{\n        gap: 30px;\n        grid-template-columns: 1fr;\n        width: 85%;\n    }\n    .form{\n        margin-top: 20px;\n    }\n    .menu{\n        gap: 40px;\n        padding-bottom: 70px;\n    }\n    .section-header{\n        font-size: 28px;\n        padding: 60px 0px 40px 0px;\n    }\n    .menu-nav-title{\n        font-size: 30px;\n    }\n    .section{\n        width: 85%;\n        padding-bottom: 70px;\n    }\n    .contact-main{\n        padding-bottom: 70px;\n    }\n    .cta-text{\n        font-size: 14px;\n    }\n    .cta{\n        font-size: 14px;\n        padding: 8px 24px;\n    }\n    .cards{\n        gap: 20px;\n    }\n}\n\n@media (max-width: 800px){\n    .footer{\n        display: grid;\n        grid-template-columns: auto;\n        place-content: center;\n        gap: 20px;\n    }\n    .footer-logo-container{\n        place-self: center;\n        width: 50px;\n    }\n    .store-links-container{\n        gap: 20px;\n    }\n}\n\n@media (max-width: 600px){\n    .menu-nav-card{\n        display: none;\n    }\n    .section{\n        padding-bottom: 50px;\n    }\n    .menu{\n        display: block;\n        padding-bottom: 50px;\n    }\n    .contact-main{\n        padding-bottom: 50px;\n    }\n    .section-header{\n        display: block;\n    }\n    .cta{\n        display: none;\n    }\n    .cta-bar{\n        height: 40px;\n    }\n    .cta-text{\n        font-size: 12px;\n    }\n    .section-header{\n        font-size: 28px;\n        padding: 40px 0px 30px 0px;\n    }\n    .welcome-banner{\n        justify-content: center;\n    }\n    .welcome-text{\n        font-size: 30px;\n    }\n    .nav-bar{\n        gap: 20px;\n        font-size: 14px;\n        justify-content: center;\n    }\n    .sticky-header{\n        padding: 30px;\n    }\n    .kfc-logo{\n        width: 60px;\n    }\n    .bucket-cart-container{\n        width: 45px;\n    }\n    .footer{\n        gap: 15px;\n        padding: 30px;\n    }\n}`,""]);const u=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",i=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),i&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),i&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,i,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(i)for(var s=0;s<this.length;s++){var r=this[s][0];null!=r&&(c[r]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);i&&c[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,i=0;i<e.length;i++)if(e[i].identifier===n){t=i;break}return t}function i(n,i){for(var a={},c=[],s=0;s<n.length;s++){var r=n[s],d=i.base?r[0]+i.base:r[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var u=t(l),m={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=o(m,i);i.byIndex=s,e.splice(s,0,{identifier:l,updater:g,references:1})}c.push(l)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=i(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var s=t(a[c]);e[s].references--}for(var r=i(n,o),d=0;d<a.length;d++){var p=t(a[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=r}}},569:n=>{var e={};n.exports=function(n,t){var i=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(i,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},937:(n,e,t)=>{n.exports=t.p+"b00e974e752d90db1a60.jpg"}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var a=e[i]={id:i,exports:{}};return n[i](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var i=e.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!n;)n=i[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{const n=t.p+"f3f93e947ab3faac3b2f.png",e=t.p+"907db7a9c767c021ee90.jpg",i=t.p+"92f7eeda0260fdbe5119.jpg",o=t.p+"f8fe8017a2c7381d89f2.jpg",a=t.p+"077cfed680d6fb328b79.jpg",c=t.p+"0eba963f9a1e73ee8a33.jpg",s=t.p+"e2180495974303eb1fd6.jpg",r=t.p+"ca1615122951037643db.jpg",d=t.p+"907db7a9c767c021ee90.jpg";function p(){const n=document.querySelector(".page-content"),e=document.createElement("div");e.classList.add("cta-bar");const t=document.createElement("span");t.classList.add("cta-text"),t.textContent="LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN";const i=document.createElement("button");i.classList.add("cta-btn","cta"),i.textContent="Start Order",e.append(t,i),n.appendChild(e)}function l(n="Browse Categories"){const e=document.createElement("div");e.classList.add("section-header");const t=document.createElement("div");t.textContent=n,t.classList.add("section-title");const i=document.createElement("div");return i.classList.add("line-box"),e.append(t,i),e}function u(n,e){const t=document.createElement("div");t.classList.add("category-container"),t.append(l(n));const i=document.createElement("div");return i.classList.add("food-card-container"),e.forEach((n=>{i.append(function(n){const e=document.createElement("div");e.classList.add("food-card");const t=document.createElement("div");t.classList.add("food-image-container");const i=document.createElement("img");i.classList.add("food-image"),i.src=n.src,t.appendChild(i);const o=document.createElement("div");o.classList.add("food-details");const a=document.createElement("div");a.classList.add("food-title"),a.textContent=n.title;const c=document.createElement("div");c.classList.add("food-price"),c.textContent=n.price;const s=document.createElement("div");s.classList.add("food-description"),s.textContent=n.desc;const r=document.createElement("button");return r.classList.add("cta-btn","btn-cart"),r.textContent="Add to cart",o.append(a,c,s),e.append(t,o,r),e}(n))})),t.id=n.toLocaleLowerCase().split(" ").join("-"),t.append(i),t}function m(n,e,t,i){const o=document.createElement("div");o.classList.add("text-input-container");const a=document.createElement("input");a.classList.add("text-input",`input-${t}`),a.type=i,a.id=t,a.name=t,a.placeholder=e;const c=document.createElement("label");return c.classList.add("text-label",`label-${t}`),c.for=t,c.textContent=n,a.required=!0,"tel"==i&&(a.pattern="[0-9]+",a.title="Enter a valid phone number"),o.append(c,a),o}function g(){const t=document.querySelector(".page-content");p(),function(){const n=document.querySelector(".page-content"),e=document.createElement("div");e.classList.add("welcome-banner");const t=document.createElement("div");t.classList.add("welcome-container");const i=document.createElement("div");i.classList.add("welcome-stripe");const o=document.createElement("div");o.classList.add("welcome-text"),o.textContent="WELCOME TO KFC!",t.append(i,o),e.append(t),n.append(e)}();const u=document.createElement("div");u.classList.add("categories","section");const m=[e,i,o,a,c,s,r,d];u.append(l(),function(n=["Peri Peri Chicken","Chicken Nuggets","Bucket Chicken"],e){const t=document.createElement("div");t.classList.add("cards","cards-categories");for(let i=0;i<n.length;i++){const o=document.createElement("div");o.classList.add("card","card-category");const a=document.createElement("div");a.classList.add("category-img-container");const c=document.createElement("img");c.classList.add("category-img"),c.src=e[i];const s=document.createElement("div");s.classList.add("category-title"),s.textContent=n[i],a.append(c),o.append(a,s),t.append(o)}return t}(["Peri Peri Chicken","Value Snackers","Chicken Rolls","Chicken Buckets","Biriyani Buckets","Box Meals","Burgers","Beverages"],m)),document.createElement("h1").textContent="RFC";const g=new Image;g.src=n,g.width="500",document.createElement("p").textContent="For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates.  We love food, lots of different food, just like you.",t.append(u)}const f=t.p+"875ede04ea522b211e70.jpg",h=t.p+"c2d6c955f37ad8c2c1e2.jpg",x=t.p+"54818762e50a5e61ea09.jpg",b=t.p+"b318bee16d9c65c2e839.jpg";var v=t(379),w=t.n(v),P=t(795),y=t.n(P),L=t(569),k=t.n(L),E=t(565),C=t.n(E),S=t(216),D=t.n(S),j=t(589),z=t.n(j),B=t(426),R={};R.styleTagTransform=z(),R.setAttributes=C(),R.insert=k().bind(null,"head"),R.domAPI=y(),R.insertStyleElement=D(),w()(B.Z,R),B.Z&&B.Z.locals&&B.Z.locals;const M=t.p+"aedbde4f111eb4a37b64.svg",T=t.p+"3344db609ad45e320c09.svg",F=t.p+"039b4df1ea30e8cebe6f.svg",I=t.p+"d2ad11819eca0f28a8ac.svg",N=t.p+"492728c619dd8d6f5bf0.svg",O=document.querySelector(".content"),q=document.createElement("header");q.classList.add("sticky-header");const A=document.createElement("ul");A.classList.add("nav-bar");const $=document.createElement("img");$.src=N,$.width="70",$.classList.add("kfc-logo");const H=document.createElement("li");H.textContent="Menu";const U=document.createElement("li");function K(){Y(),g(),$.classList.add("selected")}function W(){Y(),function(){p();const n=document.querySelector(".page-content"),e=document.createElement("div");e.classList.add("menu");const t=document.createElement("div");t.classList.add("menu-nav-card");const i=document.createElement("div");i.classList.add("menu-nav-title"),i.textContent="KFC Menu";const o=document.createElement("div");o.classList.add("menu-nav-list"),["Peri Peri Chicken","Value Snackers","Chicken Rolls","Chicken Buckets","Biryani Buckets","Box Meals","Burgers","Beverages"].forEach((n=>{const e=document.createElement("a");e.classList.add("menu-nav-item"),e.textContent=n,e.href="#"+n.toLocaleLowerCase().split(" ").join("-"),o.append(e)}));const a=document.createElement("div");a.classList.add("welcome-stripe"),t.append(a,i,o),e.append(t);const c=document.createElement("div");c.classList.add("menu-sections");class s{constructor(n,e,t,i){this.src=i,this.title=n,this.price=e,this.desc=t}}const r=[];r.push(new s("5 Leg Pc & 2 Dips Bucket","₹519.05","Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)",f)),r.push(new s("Peri Peri 10 Pc Chicken Strips & 2 Dips","₹499.05","Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips",h)),r.push(new s("Peri Peri 10 Leg Pc & 4 Dips","₹948.57","Save Rs. 334 on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)",x));const d=u("Peri Peri Chicken",r),l=[];l.push(new s("5 Leg Pc & 2 Dips Bucket","₹519.05","Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)",f)),l.push(new s("Peri Peri 10 Pc Chicken Strips & 2 Dips","₹499.05","Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips",h)),l.push(new s("Peri Peri 6pc Chicken Strips","₹299.05","Save 16% on 6 Spicy Peri Peri chicken boneless strips",b));const m=u("Value Snackers",l),g=[];g.push(new s("5 Leg Pc & 2 Dips Bucket","₹519.05","Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)",f)),g.push(new s("Peri Peri 10 Pc Chicken Strips & 2 Dips","₹499.05","Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips",h)),g.push(new s("Peri Peri 10 Leg Pc & 4 Dips","₹948.57","Save Rs. 334 on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)",x));const v=u("Chicken Rolls",g),w=[];w.push(new s("5 Leg Pc & 2 Dips Bucket","₹519.05","Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)",f)),w.push(new s("Peri Peri 10 Pc Chicken Strips & 2 Dips","₹499.05","Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips",h)),w.push(new s("Peri Peri 10 Leg Pc & 4 Dips","₹948.57","Save Rs. 334 on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)",x));const P=u("Chicken Buckets",w),y=[];y.push(new s("5 Leg Pc & 2 Dips Bucket","₹519.05","Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)",f)),y.push(new s("Peri Peri 10 Pc Chicken Strips & 2 Dips","₹499.05","Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips",h)),y.push(new s("Peri Peri 10 Leg Pc & 4 Dips","₹948.57","Save Rs. 334 on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)",x));const L=u("Biryani Buckets",y),k=[];k.push(new s("5 Leg Pc & 2 Dips Bucket","₹519.05","Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)",f)),k.push(new s("Peri Peri 10 Pc Chicken Strips & 2 Dips","₹499.05","Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips",h)),k.push(new s("Peri Peri 10 Leg Pc & 4 Dips","₹948.57","Save Rs. 334 on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)",x));const E=u("Box Meals",k),C=[];C.push(new s("Peri Peri 10 Pc Chicken Strips & 2 Dips","₹499.05","Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips",h)),C.push(new s("Peri Peri 10 Leg Pc & 4 Dips","₹948.57","Save Rs. 334 on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)",x)),C.push(new s("Peri Peri 6pc Chicken Strips","₹299.05","Save 16% on 6 Spicy Peri Peri chicken boneless strips",b));const S=u("Burgers",C),D=[];D.push(new s("5 Leg Pc & 2 Dips Bucket","₹519.05","Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)",f)),D.push(new s("Peri Peri 10 Leg Pc & 4 Dips","₹948.57","Save Rs. 334 on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)",x)),D.push(new s("Peri Peri 6pc Chicken Strips","₹299.05","Save 16% on 6 Spicy Peri Peri chicken boneless strips",b));const j=u("Beverages",D);c.append(d,m,v,P,L,E,S,j),e.append(c),n.appendChild(e)}(),H.classList.add("selected")}function Z(){Y(),function(){p();const n=document.querySelector(".page-content"),e=document.createElement("div"),t=document.createElement("div");t.classList.add("contact-banner");const i=document.createElement("div");i.classList.add("banner-contact"),i.textContent="Contact";const o=document.createElement("div");o.classList.add("banner-text"),o.textContent="Get In Touch",t.append(i,o);const a=document.createElement("div");a.classList.add("contact-main");const c=document.createElement("div");c.classList.add("contact-left-card");const s=document.createElement("div");s.classList.add("contact-right-card");const r=document.createElement("div");r.classList.add("welcome-stripe","contact-stripe");const d=document.createElement("div");d.classList.add("contact-left-title"),d.textContent="TELL US HOW WE'RE DOING";const l=document.createElement("div");l.classList.add("contact-left-desc"),l.textContent="Contact us here for questions regarding KFC complaints, refunds, and dislikes or likes about your KFC experience!";const u=document.createElement("button");u.classList.add("contact-left-button"),u.textContent="123-456-789",c.append(r,d,l,u);const g=document.createElement("form");g.classList.add("form"),g.target="#";const f=document.createElement("div");f.classList.add("text-input-container");const h=document.createElement("textarea");h.classList.add("text-input","textarea-input"),h.id="feedback",h.name="feedback",h.placeholder="Enter your feedback",h.required=!0;const x=document.createElement("label");x.classList.add("text-label"),x.for="feedback",x.textContent="Your Feedback *",f.append(x,h);const b=document.createElement("button");b.classList.add("submit-button"),b.textContent="Submit",g.append(m("Customer Name *","Enter name","customer-name","text"),m("Email *","Enter email","email","email"),m("Mobile Number *","Enter mobile number","mobile-number","tel"),f,b),s.append(g),a.append(c,s),e.append(t,a),n.appendChild(e)}(),U.classList.add("selected")}U.textContent="Contact",$.addEventListener("click",(n=>{K()})),H.addEventListener("click",(n=>{W()})),U.addEventListener("click",(n=>{Z()}));const V=document.createElement("div");V.classList.add("bucket-cart-container");const _=document.createElement("img");_.classList.add("bucket-cart"),_.src=I,V.append(_),document.createElement("div").classList.add("nav-bar-container"),A.append($,H,U),$.classList.add("selected"),q.append(A,V),O.appendChild(q);const G=document.createElement("div");function Y(){G.innerHTML="",$.classList.remove("selected"),H.classList.remove("selected"),U.classList.remove("selected")}G.classList.add("page-content"),O.appendChild(G),g();const J=document.createElement("div");J.classList.add("footer");const Q=document.createElement("div");Q.classList.add("footer-links");const X=document.createElement("a");X.classList.add("footer-link","home-link"),X.textContent="Home",X.onclick=K;const nn=document.createElement("a");nn.classList.add("footer-link"),nn.textContent="Menu",nn.onclick=W;const en=document.createElement("a");en.classList.add("footer-link","contact-link"),en.textContent="Contact",en.onclick=Z,Q.append(X,nn,en);const tn=document.createElement("div");tn.classList.add("footer-logo-container");const on=document.createElement("img");on.classList.add("footer-logo"),on.src=F,tn.append(on);const an=document.createElement("div");an.classList.add("store-links-container");const cn=document.createElement("div");cn.classList.add("store-img-container","play-img-container");const sn=document.createElement("img");sn.classList.add("playstore-image"),sn.src=T,cn.append(sn);const rn=document.createElement("div");rn.classList.add("store-img-container","apple-img-container");const dn=document.createElement("img");dn.classList.add("applestore-image"),dn.src=M,rn.append(dn),an.append(cn,rn),J.append(tn,Q,an),document.body.append(J)})()})();