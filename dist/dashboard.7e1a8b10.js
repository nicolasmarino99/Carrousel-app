!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"content",(function(){return r}));n(1);const i=document.querySelector(".root");i.insertAdjacentHTML("afterbegin",' <nav>\n                    <div id="left">\n                        <a href="#">STYLE</a>\n                        <a href="#">SNEAKERS</a>\n                        <a href="#">SELECTS</a>\n                        <a href="#">MUSIC</a>\n                        <a href="#">MAGAZINE</a>\n                    </div>\n                    <div>\n                        <div class="logo">HIGHSNOBIETY</div>\n                    </div>\n                    <div id="right">\n                        <a href="#">SHOP</a>\n                        <a href="#">INSTAGRAM</a>\n                        <img src="/src/assets/imgs/search.svg" alt="">\n                        <img src="/src/assets/imgs/user.svg" alt="">\n                        <img src="/src/assets/imgs/bell.svg" alt="">\n                    </div>\n                </nav>'),i.insertAdjacentHTML("beforeend",'<div class="content"><div>');const r=i.querySelector(".content")},function(e,t,n){var i=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);e.exports=r.locals||{}},function(e,t,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},i=[],r=0;r<e.length;r++){var o=e[r],s=t.base?o[0]+t.base:o[0],d=n[s]||0,l="".concat(s," ").concat(d);n[s]=d+1;var u=c(l),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:l,updater:h(f,t),references:1}),i.push(l)}return i}function d(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var o=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var g=null,m=0;function h(e,t){var n,i,r;if(t.singleton){var o=m++;n=g||(g=d(t)),i=f.bind(null,n,o,!1),r=f.bind(null,n,o,!0)}else n=d(t),i=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=c(n[i]);a[r].references--}for(var o=s(e,t),d=0;d<n.length;d++){var l=c(n[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=o}}}},function(e,t,n){var i=n(4),r=n(5),o=n(6),a=n(7),c=n(8),s=n(9);(t=i(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Lora&display=swap);"]);var d=r(o),l=r(a),u=r(c),f=r(s);t.push([e.i,"nav{z-index:3;display:flex;justify-content:space-between;position:absolute;width:90%;border-bottom:1px solid #96949429;left:5%;top:1em;padding-bottom:1em}nav .logo{left:-45%;color:#fff;font-weight:bold;border-bottom:2px solid #fff;position:relative;padding-bottom:3px;letter-spacing:1px;font-size:15px}nav #left a{color:#fff;font-size:10px;letter-spacing:3px;text-decoration:none;margin-right:4em}nav #right{display:flex;align-items:center}nav #right a{color:#5e5e5e;font-size:10px;letter-spacing:3px;font-weight:bold;text-decoration:none;margin-right:4em}nav #right img{width:15px;height:15px;margin-right:3em;filter:invert(38%) sepia(13%) saturate(12%) hue-rotate(341deg) brightness(90%) contrast(87%)}.content{display:flex;height:101.3%;animation:desppear 2s ease}@keyframes desappear{100%{opacity:1}0%{opacity:0}}.content .carrousel-container{height:100%;width:65%}.content .carrousel-container #img1-carrousel{background-image:url("+d+");background-size:cover;height:90%;animation:opac 1.4s}@keyframes opac{from{opacity:0}to{opacity:1}}.content .carrousel-container #img2-carrousel{background-image:url("+l+");background-size:cover;height:90%;animation:opac 1.4s}@keyframes opac{from{opacity:0}to{opacity:1}}.content .carrousel-container #img3-carrousel{background-image:url("+u+");background-size:cover;height:90%;animation:opac 1.4s}@keyframes opac{from{opacity:0}to{opacity:1}}.content .carrousel-container #img4-carrousel{background-image:url("+f+");background-size:cover;height:90%;animation:opac 1.4s}@keyframes opac{from{opacity:0}to{opacity:1}}.content .carrousel-container .mini-footer{color:silver;background-color:#060606;display:flex;height:10%}.content .carrousel-container .mini-footer .article-container{display:flex;align-items:center;padding:1em}.content .carrousel-container .mini-footer .article-container .footer-img{width:3.5em;height:2em;margin-right:1em}.content .carrousel-container .mini-footer .article-container h3{font-size:6px;color:#767373;letter-spacing:2px;margin-bottom:4px}.content .carrousel-container .mini-footer .article-container p{font-size:10px}.content .carrousel-container .mini-footer .article-container #img1{background-image:url("+l+");background-size:cover}.content .carrousel-container .mini-footer .article-container #img2{background-image:url("+u+");background-size:cover}.content .carrousel-container .mini-footer .article-container #img3{background-image:url("+f+");background-size:cover}.content aside{width:50%;margin-top:6%}.content aside .aside-container{padding:3em 0em 0 2em}.content aside .aside-container h1{padding:0 4em 0 0;font-size:2em}.content aside .aside-container h2{font-size:16px;margin-bottom:15px;color:#b0adad}.content aside .aside-container #author{margin:6px 0 13px;display:flex;align-items:center;text-transform:uppercase}.content aside .aside-container #author img{border-radius:50%;width:20px;height:20px}.content aside .aside-container #author .author{letter-spacing:3px;font-size:10px;color:#fa8275;margin-left:5px}.content aside .aside-container .content-article{display:flex}.content aside .aside-container .content-article p{font-size:13px}.content aside .aside-container .content-article .social{filter:invert(1);padding:0 2em 0 4em}.content aside .aside-container .content-article .social img{width:20px;height:20px;margin-bottom:.5em}.content aside .aside-container .see-article{margin-top:10px;display:flex;align-items:center;margin-top:1em}.content aside .aside-container .see-article a{display:flex;justify-content:center;align-items:center;border-radius:50%;width:25px;height:25px;background:#fa8275;margin-right:10px}.content aside .aside-container .see-article a img{width:10px;height:15px;filter:invert(100%) sepia(0%) saturate(0%) hue-rotate(294deg) brightness(104%) contrast(102%)}.content aside .aside-container .see-article p{font-size:10px;letter-spacing:3px;text-decoration:none}.content aside .aside-container .next-previous{display:flex;position:absolute;bottom:9em}.content aside .aside-container .next-previous div img{border-radius:50%;width:20px;height:20px;margin-right:1em}.content aside .aside-container .next-previous div img:hover{cursor:pointer;filter:invert(0.5);transition:500ms ease}.content .carrousel{display:flex;position:absolute;bottom:0;height:8em;width:43.5%}.content .carrousel .img1-item{width:33.3%;height:100%;background-image:url("+d+");background-size:cover}.content .carrousel .img2-item{width:33.3%;height:100%;background-image:url("+l+");background-size:cover}.content .carrousel .img3-item{width:33.3%;height:100%;background-image:url("+u+");background-size:cover}.content .carrousel .img4-item{width:33.3%;height:100%;background-image:url("+f+');background-size:cover}*{margin:0;padding:0;box-sizing:border-box}html{height:100%}body{height:94%;overflow-y:hidden;font-family:"Lora",serif;background-color:#f3f3f3}.root{height:105%}.hidden{display:none}',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(a=i,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),o=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([r]).join("\n")}var a,c,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);i&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"d34ec35df07a677c0ca7a02971a671e0.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"ece337ba5246de97334d6c9cb000cdce.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"fab2e9206a0dda6a631096f334fde51d.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"a93550b2b3a0547ab5c4665c2498c90e.jpg"}]);