!function(){function n(n,e,t,r){Object.defineProperty(n,e,{get:t,set:r,enumerable:!0,configurable:!0})}function e(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},c={},o=t.parcelRequired7c6;null==o&&((o=function(n){if(n in r)return r[n].exports;if(n in c){var e=c[n];delete c[n];var t={id:n,exports:{}};return r[n]=t,e.call(t.exports,t,t.exports),t.exports}var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(n,e){c[n]=e},t.parcelRequired7c6=o),o.register("iE7OH",(function(e,t){var r,c;n(e.exports,"register",(function(){return r}),(function(n){return r=n})),n(e.exports,"resolve",(function(){return c}),(function(n){return c=n}));var o={};r=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)o[e[t]]=n[e[t]]},c=function(n){var e=o[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),o.register("aNJCr",(function(e,t){var r;n(e.exports,"getBundleURL",(function(){return r}),(function(n){return r=n}));var c={};function o(n){return(""+n).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(n){var e=c[n];return e||(e=function(){try{throw new Error}catch(e){var n=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(n)return o(n[2])}return"/"}(),c[n]=e),e}})),o("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.1dc7b9d5.js","ee16w":"sprite.480a6cd5.svg","h38su":"amazon-icon.16930f9e.png","lAahX":"amazon-icon@2x.c543657e.png","4xzec":"apple-icon.da517aac.png","28Az2":"apple-icon@2x.46a91633.png","7OmxB":"bookshop-icon.af780590.png","6aTGg":"bookshop-icon@2x.52fc7653.png","01IoP":"shopping-list.146e4c1a.js"}'));var i,a=o("1t1Wn");i=o("aNJCr").getBundleURL("jSFKT")+o("iE7OH").resolve("ee16w");var s;s=o("aNJCr").getBundleURL("jSFKT")+o("iE7OH").resolve("h38su");var l;l=o("aNJCr").getBundleURL("jSFKT")+o("iE7OH").resolve("lAahX");var p;p=o("aNJCr").getBundleURL("jSFKT")+o("iE7OH").resolve("4xzec");var u;u=o("aNJCr").getBundleURL("jSFKT")+o("iE7OH").resolve("28Az2");var d;d=o("aNJCr").getBundleURL("jSFKT")+o("iE7OH").resolve("7OmxB");var g;g=o("aNJCr").getBundleURL("jSFKT")+o("iE7OH").resolve("6aTGg"),o("gcnNP"),o("18VO4"),o("llmwH");var f=JSON.parse(localStorage.getItem("shoppingList"))||[],_=document.querySelector(".shopping-list"),h=document.querySelector(".empty-list");function v(){_.innerHTML="",f.forEach((function(n){var t=n.book_image,r=n.title,c=n.list_name,o=n.description,h=n.author,m=n.amazon_product_url,H=e(a)(n.buy_links,5),b=(H[0],H[1]),E=H[4],S='\n      <li class="js-card card-shopping">\n        <div class="card-shopping__container">\n          <img src="'.concat(t,'" alt="').concat(r,'" class="card-shopping__image" />\n          <div class="card-shopping__thumb">\n            <h2 class="card-shopping__title">').concat(r,'</h2>\n            <h3 class="card-shopping__category">').concat(c,'</h3>\n            <p class="card-shopping__description">').concat(o,'</p>\n            <div class="card-shopping__author-links">\n              <p class="card-shopping__author">').concat(h,'</p>\n              <ul class="card-shopping__listLinks">\n                <li class="card-shopping__listItem">\n                  <a href="').concat(m,'" class="card-shopping__link">\n                    <picture>\n                      <source srcset="').concat(e(s)," 1x, ").concat(e(l),' 2x" type="image/png" />\n                      <img class="amazon-icon" src="').concat(e(s),'" alt="Amazon" />\n                    </picture>\n                  </a>\n                </li>\n                <li class="card-shopping__listItem">\n                  <a href="').concat(b.url,'" class="card-shopping__link">\n                    <picture>\n                      <source srcset="').concat(e(p)," 1x, ").concat(e(u),' 2x" type="image/png" />\n                      <img class="apple-icon" src="').concat(e(p),'" alt="Apple" />\n                    </picture>\n                  </a>\n                </li>\n                <li class="card-shopping__listItem">\n                  <a href="').concat(E.url,'" class="card-shopping__link">\n                    <picture>\n                      <source srcset="').concat(e(d)," 1x, ").concat(e(g),' 2x" type="image/png" />\n                      <img class="apple-icon" src="').concat(e(d),'" alt="Bookshop" />\n                    </picture>\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <button class="card-shopping__deleteBtn">\n            <svg width="28" height="28" class="card-shoppin__deleteBtn--icon">\n              <use href="').concat(e(i),'#icon-delete"></use>\n            </svg>\n          </button>\n        </div>\n      </li>\n    ');_.insertAdjacentHTML("beforeend",S),document.querySelectorAll(".card-shopping__deleteBtn").forEach((function(n,e){n.addEventListener("click",(function(){var n,t;n=f[e]._id,t=f.filter((function(e){return e._id!==n})),localStorage.setItem("shoppingList",JSON.stringify(t)),v()}))}))}))}0===f.length?h.style.display="block":h.style.display="none",v()}();
//# sourceMappingURL=shopping-list.1dc7b9d5.js.map