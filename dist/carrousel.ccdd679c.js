!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){"use strict";n.r(t),n.d(t,"content",(function(){return r}));n(1);const i=document.querySelector(".root");i.insertAdjacentHTML("afterbegin",' <nav>\n                    <div id="left">\n                        <a href="#">STYLE</a>\n                        <a href="#">SNEAKERS</a>\n                        <a href="#">SELECTS</a>\n                        <a href="#">MUSIC</a>\n                        <a href="#">MAGAZINE</a>\n                    </div>\n                    <div>\n                        <div class="logo">HIGHSNOBIETY</div>\n                    </div>\n                    <div id="right">\n                        <a href="#">SHOP</a>\n                        <a href="#">INSTAGRAM</a>\n                        <img src="/src/assets/imgs/search.svg" alt="">\n                        <img src="/src/assets/imgs/user.svg" alt="">\n                        <img src="/src/assets/imgs/bell.svg" alt="">\n                    </div>\n                </nav>'),i.insertAdjacentHTML("beforeend",'<div class="content"><div>');const r=i.querySelector(".content")},function(e,t,n){var i=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};i(r,a);e.exports=r.locals||{}},function(e,t,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function s(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},i=[],r=0;r<e.length;r++){var a=e[r],c=t.base?a[0]+t.base:a[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var u=s(d),g={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(o[u].references++,o[u].updater(g)):o.push({identifier:d,updater:h(g,t),references:1}),i.push(d)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function g(e,t,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var a=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function p(e,t,n){var i=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,m=0;function h(e,t){var n,i,r;if(t.singleton){var a=m++;n=f||(f=l(t)),i=g.bind(null,n,a,!1),r=g.bind(null,n,a,!0)}else n=l(t),i=p.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var r=s(n[i]);o[r].references--}for(var a=c(e,t),l=0;l<n.length;l++){var d=s(n[l]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}n=a}}}},function(e,t,n){var i=n(4),r=n(5),a=n(6),o=n(7),s=n(8),c=n(9);(t=i(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Lora&display=swap);"]);var l=r(a),d=r(o),u=r(s),g=r(c);t.push([e.i,"nav{z-index:3;display:flex;justify-content:space-between;position:absolute;width:90%;border-bottom:1px solid #96949429;left:5%;top:1em;padding-bottom:1em}nav .logo{left:-45%;color:#fff;font-weight:bold;border-bottom:2px solid #fff;position:relative;padding-bottom:3px;letter-spacing:1px;font-size:15px}nav #left a{color:#fff;font-size:10px;letter-spacing:3px;text-decoration:none;margin-right:4em}nav #right{display:flex;align-items:center}nav #right a{color:#5e5e5e;font-size:10px;letter-spacing:3px;font-weight:bold;text-decoration:none;margin-right:4em}nav #right img{width:15px;height:15px;margin-right:3em;filter:invert(38%) sepia(13%) saturate(12%) hue-rotate(341deg) brightness(90%) contrast(87%)}.content{display:flex;height:101.3%;animation:desppear 2s ease}@keyframes desappear{100%{opacity:1}0%{opacity:0}}.content .carrousel-container{height:100%;width:65%}.content .carrousel-container #img1-carrousel{background-image:url("+l+");background-size:cover;height:90%;animation:opac 1.4s}@keyframes opac{from{opacity:0}to{opacity:1}}.content .carrousel-container #img2-carrousel{background-image:url("+d+");background-size:cover;height:90%;animation:opac 1.4s}@keyframes opac{from{opacity:0}to{opacity:1}}.content .carrousel-container #img3-carrousel{background-image:url("+u+");background-size:cover;height:90%;animation:opac 1.4s}@keyframes opac{from{opacity:0}to{opacity:1}}.content .carrousel-container #img4-carrousel{background-image:url("+g+");background-size:cover;height:90%;animation:opac 1.4s}@keyframes opac{from{opacity:0}to{opacity:1}}.content .carrousel-container .mini-footer{color:silver;background-color:#060606;display:flex;height:10%}.content .carrousel-container .mini-footer .article-container{display:flex;align-items:center;padding:1em}.content .carrousel-container .mini-footer .article-container .footer-img{width:3.5em;height:2em;margin-right:1em}.content .carrousel-container .mini-footer .article-container h3{font-size:6px;color:#767373;letter-spacing:2px;margin-bottom:4px}.content .carrousel-container .mini-footer .article-container p{font-size:10px}.content .carrousel-container .mini-footer .article-container #img1{background-image:url("+d+");background-size:cover}.content .carrousel-container .mini-footer .article-container #img2{background-image:url("+u+");background-size:cover}.content .carrousel-container .mini-footer .article-container #img3{background-image:url("+g+");background-size:cover}.content aside{width:50%;margin-top:6%}.content aside .aside-container{padding:3em 0em 0 2em}.content aside .aside-container h1{padding:0 4em 0 0;font-size:2em}.content aside .aside-container h2{font-size:16px;margin-bottom:15px;color:#b0adad}.content aside .aside-container #author{margin:6px 0 13px;display:flex;align-items:center;text-transform:uppercase}.content aside .aside-container #author img{border-radius:50%;width:20px;height:20px}.content aside .aside-container #author .author{letter-spacing:3px;font-size:10px;color:#fa8275;margin-left:5px}.content aside .aside-container .content-article{display:flex}.content aside .aside-container .content-article p{font-size:13px}.content aside .aside-container .content-article .social{filter:invert(1);padding:0 2em 0 4em}.content aside .aside-container .content-article .social img{width:20px;height:20px;margin-bottom:.5em}.content aside .aside-container .see-article{margin-top:10px;display:flex;align-items:center;margin-top:1em}.content aside .aside-container .see-article a{display:flex;justify-content:center;align-items:center;border-radius:50%;width:25px;height:25px;background:#fa8275;margin-right:10px}.content aside .aside-container .see-article a img{width:10px;height:15px;filter:invert(100%) sepia(0%) saturate(0%) hue-rotate(294deg) brightness(104%) contrast(102%)}.content aside .aside-container .see-article p{font-size:10px;letter-spacing:3px;text-decoration:none}.content aside .aside-container .next-previous{display:flex;position:relative;top:2em}.content aside .aside-container .next-previous div img{border-radius:50%;width:20px;height:20px;margin-right:1em}.content aside .aside-container .next-previous div img:hover{cursor:pointer;filter:invert(0.5);transition:500ms ease}.content .carrousel{display:flex;position:absolute;bottom:0;height:5em;width:100%}.content .carrousel .img1-item{width:33.3%;height:100%;background-image:url("+l+");background-size:cover}.content .carrousel .img2-item{width:33.3%;height:33.3%;background-image:url("+d+");background-size:cover}.content .carrousel .img3-item{width:33.3%;height:33.3%;background-image:url("+u+");background-size:cover}.content .carrousel .img4-item{width:33.3%;height:33.3%;background-image:url("+g+');background-size:cover}*{margin:0;padding:0;box-sizing:border-box}html{height:100%}body{height:94%;overflow-y:hidden;font-family:"Lora",serif;background-color:#f3f3f3}.root{height:105%}.hidden{display:none}',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var r=(o=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([r]).join("\n")}var o,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(i)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);i&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"d238cbf196d82f43675f2ead13270e1c.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"f276fda4e56f272253e833e24986f5e2.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"4a6fbff08edfa63087192330c2a3e946.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"6cd1ac93cdf686bd1bd2df1228bb47c4.jpg"},function(e,t,n){"use strict";n.r(t);var i=n(0);const r=[{author:"Danny Schwartz",title:"The Milan Fashion Week Crowd Really Nailed It in the Detailes Department",img:"img1",p1:"A lot of armchair contract law expert have come out of the woodwork this week to comment on the rapidly escalating.",p2:"Regardless of what anyone actually knows about record contracts, rap fans are justifial concerned for megan"},{author:"Flo Bookamer",title:"Simonton Howe & Schneider Pc89992 E 15th St Alliance Box Butte NE",img:"img2",p1:"Suppose end get boy warrant general natural. Delightful met sufficient projection ask. Decisively everything principles if preference do impression of.",p2:"Preserved oh so difficult repulsive on in household. In what do miss time be. Valley as be appear"},{author:"Biddy Jani",title:"Do greatest at in learning steepest. Breakfast.",img:"img3",p1:"Wholly uneasy at missed be of pretty whence. John way sir high than law who week. Surrounded prosperous ",p2:"To they four in love. Settling you has separate supplied bed. Concluded resembled suspected his resources curiosity joy. Led all "},{author:"Motley Chauncey",title:"On projection apartments unsatiable so if he entreaties ",img:"img4",p1:"Des attacks gay compact out you. Continuing no simplicity no favourable on reasonabl",p2:" melancholy estimating. Own hence views two ask right whole ten seems. What near kept met call old west dine. Our announcing sufficient"}];let a,o,s,c,l=-1,d=0,u=1,g=2;setInterval(()=>{l+=1,d+=1,u+=1,g+=1,4==l&&(l=0),4==d&&(d=0),4==u&&(u=0),4==g&&(g=0),a=r[l],o=r[d],s=r[u],c=r[g],i.content.innerHTML="",i.content.insertAdjacentHTML("beforeend",`<div class="carrousel-container" >\n                                            <div class="img-carrousel" data-barba="container" data-barba-namespace="home" id="${a.img}-carrousel"> </div>\n                                            <div class="mini-footer">\n                                            <div class="article-container">\n                                                <div class="footer-img" id="img1"></div>\n                                                <div>\n                                                    <h3>SNEAKERS</h3>\n                                                    <p>Your Chance to Cop the Travis Scott x Nicke SB Punk</p>\n                                                </div>\n                                            </div>\n                                            <div class="article-container">\n                                                <div class="footer-img" id="img2"></div>\n                                                <div>\n                                                    <h3>FASHION</h3>\n                                                    <p>Virgil Abloh Debuts New Off.White x Air Jordan 4</p>\n                                                </div>\n                                            </div>\n                                            <div class="article-container">\n                                                <div class="footer-img" id="img3"></div>\n                                                <div>\n                                                    <h3>MUSIC</h3>\n                                                    <p>Pharrel's $17 Million Beverly Hills Mansion</p>\n                                                </div>\n                                            </div>\n                                            </div>\n                                        </div>`),i.content.insertAdjacentHTML("beforeend",((e,t,n,i)=>(console.log(t),`\n                        <aside>\n                            <div class="aside-container">\n                                <div class="title">\n                                    <h2 class="category">Style/News</h2>\n                                    <h1 >${e.title}</h1>\n                                </div>    \n                                <div id="author">\n                                    <img src="/src/assets/imgs/img1.jpg" alt="">\n                                    <div class="author">by ${e.author}</div>\n                                </div>\n                                <div class="content-article">\n                                    <p>${e.p1}</p>\n                                    <p>${e.p2}</p>\n                                    <div class="social">\n                                        <img src="/src/assets/imgs/facebook.svg" alt="">\n                                        <img src="/src/assets/imgs/instagram.svg" alt="">\n                                        <img src="/src/assets/imgs/twitter.svg" alt="">\n                                    </div>\n                                </div>\n                                <div class="see-article">\n                                    <a href="#"> <img src="/src/assets/imgs/plus.svg" alt=""></a>\n                                    <p>SEE ARTICLE</p>\n                                </div>\n                                <div class="next-previous">\n                                    <div id="previous"><img src="/src/assets/imgs/prev.svg" alt=""></div>\n                                    <div id="next"><img src="/src/assets/imgs/next.svg" alt=""></div>\n                                </div>\n                            </div>    \n                            <div class="carrousel">\n                               \x3c!-- <img src="/src/assets/imgs/img2.jpg" alt="">\n                                <img src="/src/assets/imgs/img3.jpg" alt="">\n                                <img src="/src/assets/imgs/img4.jpg" alt=""> --\x3e\n                                <div class="${t.img}-item"></div>\n                                <div class="${n.img}-item"></div>\n                                <div class="${i.img}-item"></div>\n                            </div>\n                        </aside>`))(a,o,s,c))},1e3)}]);