!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequired7c6=a),a.register("euqRf",(function(n,r){t(n.exports,"checkAuthState",(function(){return L}));var i=a("bpxeT"),o=a("2TvXO");a("fkNhc");var s=a("MjY8E");a("gQOBw");var u=a("G0OFq"),c=a("h6c0i"),l=a("7rQOT"),f=(0,s.initializeApp)({apiKey:"AIzaSyCWbs0N9AYzirIviZZUsVMIJ2enE8aYPbw",authDomain:"bookstorecommunity.firebaseapp.com",projectId:"bookstorecommunity",storageBucket:"bookstorecommunity.appspot.com",messagingSenderId:"67705966282",appId:"1:67705966282:web:466a7777f399c2354fae33",measurementId:"G-X61KC3SJ2C"}),d=(0,u.o)(f),p=document.getElementById("shoppingListButton"),h=document.getElementById("userInAuth"),v=document.getElementById("logOutAuth"),m=document.getElementById("signUpAuth"),g=document.getElementById("homeButton"),y=document.getElementById("userNameAuth"),b=document.getElementById("shoppingListButtonMobile"),k=document.getElementById("userInAuthMobile"),x=document.getElementById("logOutAuthMobile"),w=document.getElementById("signUpAuthMobile"),_=document.getElementById("homeButtonMobile"),I=document.getElementById("userNameAuthMobile"),E=document.getElementById("modal-auth"),T=document.getElementById("close"),S=document.getElementById("signin-tab"),N=document.getElementById("signup-tab"),C=document.getElementById("signin-content"),O=document.getElementById("signup-content"),A=document.getElementById("signin-button"),R=document.getElementById("signup-button");document.querySelector(".button-add-shopping-list");function L(){l.Loading.standard("Loading...",{backgroundColor:"rgba(10,10,10,10)"});var e=d.currentUser;window.matchMedia("(min-width: 767px)").matches?e?(h.style.display="flex",p.style.display="flex",g.style.display="block",m.style.display="none",y.textContent=e.displayName):(h.style.display="none",v.style.display="none",p.style.display="none",g.style.display="none",m.style.display="flex"):(p.style.display="none",g.style.display="none",m.style.display="none",v.style.display="none",e?(k.style.display="flex",x.style.display="flex",b.style.display="flex",_.style.display="flex",w.style.display="none",I.textContent=e.displayName):(k.style.display="none",x.style.display="none",b.style.display="none",_.style.display="none",w.style.display="flex")),l.Loading.remove()}function P(){E.style.display="none",C.classList.remove("show"),S.classList.remove("is-active"),N.classList.add("is-active"),L()}function D(){(0,u.B)(d).then((function(){console.log("User logged out"),c.Notify.success("Logged out successfully!")})).catch((function(e){console.error("Error logging out:",e),c.Notify.failure("Error logging out")})),L()}document.addEventListener("DOMContentLoaded",e(i)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{l.Loading.standard("Loading...",{backgroundColor:"rgba(10,10,10,10)",minVisibleDuration:500}),(0,u.x)(d,(function(e){window.matchMedia("(min-width: 767px)").matches?e?(h.style.display="flex",p.style.display="flex",g.style.display="block",m.style.display="none",y.textContent=e.displayName):(h.style.display="none",v.style.display="none",p.style.display="none",g.style.display="none",m.style.display="flex"):(p.style.display="none",g.style.display="none",m.style.display="none",v.style.display="none",e?(k.style.display="flex",x.style.display="flex",b.style.display="flex",_.style.display="flex",w.style.display="none",I.textContent=e.displayName):(k.style.display="none",x.style.display="none",b.style.display="none",_.style.display="none",w.style.display="flex"))})),l.Loading.remove()}catch(e){console.error(e)}case 1:case"end":return e.stop()}}),t)})))),document.addEventListener("keydown",(function(e){"Escape"===e.key&&"none"!==E.style.display&&P()})),T.addEventListener("click",(function(){P(),L()})),w.addEventListener("click",(function(){E.style.display="block",O.classList.add("show"),N.classList.add("is-active")})),m.addEventListener("click",(function(){E.style.display="block",O.classList.add("show"),N.classList.add("is-active")})),x.addEventListener("click",(function(){D()})),v.addEventListener("click",(function(){D()})),S.addEventListener("click",(function(){C.classList.add("show"),O.classList.remove("show"),N.classList.remove("is-active"),S.classList.add("is-active")})),N.addEventListener("click",(function(){C.classList.remove("show"),O.classList.add("show"),S.classList.remove("is-active"),N.classList.add("is-active")})),A.addEventListener("click",(function(){var e,t;e=document.getElementById("email").value,t=document.getElementById("password").value,A.disabled=!0,A.textContent="Loading...",(0,u.a9)(d,e,t).then((function(e){var t=e.user;console.log("Successful user login:",t),c.Notify.success("Successful login!"),P(),L()})).catch((function(e){var t=e.code,n=e.message;console.error("User not found",t,n),c.Notify.failure("User not found")})).finally((function(){A.disabled=!1,A.textContent="SIGN IN"}))})),R.addEventListener("click",(function(){var e,t,n;e=document.getElementById("signup-email").value,t=document.getElementById("signup-password").value,n=document.getElementById("name").value,R.disabled=!0,R.textContent="Loading...",e&&t&&n?(0,u.ad)(d,e).then((function(r){r.length>0?(console.log("Email is already registered:",e),c.Notify.failure("Email is already registered"),R.disabled=!1,R.textContent="Sign Up"):(0,u.a8)(d,e,t).then((function(e){var t=e.user;return console.log("Successful user registration:",t),c.Notify.success("Successful registration!"),P(),(0,u.ai)(d.currentUser,{displayName:n})})).then((function(){console.log("User profile updated:",d.currentUser.displayName),L()})).catch((function(e){var t=e.code,n=e.message;console.error("Error registering user:",t,n),c.Notify.failure("Error registering user")})).finally((function(){R.disabled=!1,R.textContent="Sign Up"}))})).catch((function(e){console.error("Error checking email existence:",e),c.Notify.failure("Error checking email existence"),R.disabled=!1,R.textContent="Sign Up"})):(console.log("Please fill in all fields."),c.Notify.failure("Please fill in all fields."),R.disabled=!1,R.textContent="Sign Up")})),h.addEventListener("click",(function(){"flex"!==v.style.display?v.style.display="flex":v.style.display="none"}))})),a.register("bpxeT",(function(e,t){"use strict";function n(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=e.apply(t,r);function s(e){n(o,i,a,s,u,"next",e)}function u(e){n(o,i,a,s,u,"throw",e)}s(void 0)}))}}})),a.register("2TvXO",(function(e,t){var n=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),o=new N(r||[]);return a._invoke=function(e,t,n){var r=f;return function(i,a){if(r===p)throw new Error("Generator is already running");if(r===h){if("throw"===i)throw a;return O()}for(n.method=i,n.arg=a;;){var o=n.delegate;if(o){var s=E(o,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?h:d,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}(e,n,o),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",v={};function m(){}function g(){}function y(){}var b={};u(b,a,(function(){return this}));var k=Object.getPrototypeOf,x=k&&k(k(C([])));x&&x!==n&&r.call(x,a)&&(b=x);var w=y.prototype=m.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function I(e,t){function n(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(f).then((function(e){c.value=e,o(c)}),(function(e){return n("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function E(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,E(e,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function C(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:O}}function O(){return{value:t,done:!0}}return g.prototype=y,u(w,"constructor",y),u(y,"constructor",g),g.displayName=u(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},_(I.prototype),u(I.prototype,o,(function(){return this})),e.AsyncIterator=I,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new I(c(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},_(w),u(w,s,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=C,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return s.type="throw",s.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),a.register("fkNhc",(function(e,n){t(e.exports,"initializeApp",(function(){return a("MjY8E").initializeApp})),t(e.exports,"registerVersion",(function(){return a("MjY8E").registerVersion}));a("MjY8E");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,a("MjY8E").registerVersion)("firebase","9.22.0","app")})),a.register("MjY8E",(function(n,r){t(n.exports,"_registerComponent",(function(){return T})),t(n.exports,"_getProvider",(function(){return S})),t(n.exports,"SDK_VERSION",(function(){return A})),t(n.exports,"initializeApp",(function(){return R})),t(n.exports,"getApp",(function(){return L})),t(n.exports,"registerVersion",(function(){return P}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("hKHmD"),c=a("8nrFW"),l=a("2TvXO"),f=a("6ExWU"),d=a("kZfxc"),p=a("2xDiJ"),h=a("ajgRO"),v=(p=a("2xDiJ"),function(){"use strict";function t(n){e(o)(this,t),this.container=n}return e(s)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}());var m,g,y="@firebase/app",b="0.9.10",k=new(0,d.Logger)("@firebase/app"),x="[DEFAULT]",w=(m={},e(u)(m,y,"fire-core"),e(u)(m,"@firebase/app-compat","fire-core-compat"),e(u)(m,"@firebase/analytics","fire-analytics"),e(u)(m,"@firebase/analytics-compat","fire-analytics-compat"),e(u)(m,"@firebase/app-check","fire-app-check"),e(u)(m,"@firebase/app-check-compat","fire-app-check-compat"),e(u)(m,"@firebase/auth","fire-auth"),e(u)(m,"@firebase/auth-compat","fire-auth-compat"),e(u)(m,"@firebase/database","fire-rtdb"),e(u)(m,"@firebase/database-compat","fire-rtdb-compat"),e(u)(m,"@firebase/functions","fire-fn"),e(u)(m,"@firebase/functions-compat","fire-fn-compat"),e(u)(m,"@firebase/installations","fire-iid"),e(u)(m,"@firebase/installations-compat","fire-iid-compat"),e(u)(m,"@firebase/messaging","fire-fcm"),e(u)(m,"@firebase/messaging-compat","fire-fcm-compat"),e(u)(m,"@firebase/performance","fire-perf"),e(u)(m,"@firebase/performance-compat","fire-perf-compat"),e(u)(m,"@firebase/remote-config","fire-rc"),e(u)(m,"@firebase/remote-config-compat","fire-rc-compat"),e(u)(m,"@firebase/storage","fire-gcs"),e(u)(m,"@firebase/storage-compat","fire-gcs-compat"),e(u)(m,"@firebase/firestore","fire-fst"),e(u)(m,"@firebase/firestore-compat","fire-fst-compat"),e(u)(m,"fire-js","fire-js"),e(u)(m,"firebase","fire-js-all"),m),_=new Map,I=new Map;function E(e,t){try{e.container.addComponent(t)}catch(n){k.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function T(e){var t=e.name;if(I.has(t))return k.debug("There were multiple attempts to register component ".concat(t,".")),!1;I.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=_.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){E(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function S(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var N=(g={},e(u)(g,"no-app","No Firebase App '{$appName}' has been created - call initializeApp() first"),e(u)(g,"bad-app-name","Illegal App name: '{$appName}"),e(u)(g,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(u)(g,"app-deleted","Firebase App named '{$appName}' already deleted"),e(u)(g,"no-options","Need to provide options, when not being deployed to hosting via source."),e(u)(g,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(u)(g,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(u)(g,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),e(u)(g,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),e(u)(g,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),e(u)(g,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),g),C=new(0,p.ErrorFactory)("app","Firebase",N),O=function(){"use strict";function t(n,r,i){var a=this;e(o)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new(0,f.Component)("app",(function(){return a}),"PUBLIC"))}return e(s)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw C.create("app-deleted",{appName:this._name})}}]),t}(),A="9.22.0";function R(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;if("object"!=typeof t){var r=t;t={name:r}}var i=Object.assign({name:x,automaticDataCollectionEnabled:!1},t),a=i.name;if("string"!=typeof a||!a)throw C.create("bad-app-name",{appName:String(a)});if(n||(n=(0,p.getDefaultAppConfig)()),!n)throw C.create("no-options");var o=_.get(a);if(o){if((0,p.deepEqual)(n,o.options)&&(0,p.deepEqual)(i,o.config))return o;throw C.create("duplicate-app",{appName:a})}var s=new(0,f.ComponentContainer)(a),u=!0,c=!1,l=void 0;try{for(var d,h=I.values()[Symbol.iterator]();!(u=(d=h.next()).done);u=!0){var v=d.value;s.addComponent(v)}}catch(e){c=!0,l=e}finally{try{u||null==h.return||h.return()}finally{if(c)throw l}}var m=new O(n,i,s);return _.set(a,m),m}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=_.get(e);if(!t&&e===x&&(0,p.getDefaultAppConfig)())return R();if(!t)throw C.create("no-app",{appName:e});return t}function P(e,t,n){var r,i=null!==(r=w[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void k.warn(s.join(" "))}T(new(0,f.Component)("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var D="firebase-heartbeat-store",M=null;function U(){return M||(M=(0,h.openDB)("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(D)}}).catch((function(e){throw C.create("idb-open",{originalErrorMessage:e.message})}))),M}function j(e){return B.apply(this,arguments)}function B(){return(B=e(i)(e(l).mark((function t(n){var r,i,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U();case 3:return r=e.sent,e.next=6,r.transaction(D).objectStore(D).get(W(n));case 6:return i=e.sent,e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),e.t0 instanceof p.FirebaseError?k.warn(e.t0.message):(a=C.create("idb-get",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),k.warn(a.message));case 13:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function z(e,t){return F.apply(this,arguments)}function F(){return(F=e(i)(e(l).mark((function t(n,r){var i,a,o,s;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U();case 3:return i=e.sent,a=i.transaction(D,"readwrite"),o=a.objectStore(D),e.next=8,o.put(r,W(n));case 8:return e.next=10,a.done;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),e.t0 instanceof p.FirebaseError?k.warn(e.t0.message):(s=C.create("idb-set",{originalErrorMessage:null===e.t0||void 0===e.t0?void 0:e.t0.message}),k.warn(s.message));case 15:case"end":return e.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function W(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V=function(){"use strict";function t(n){var r=this;e(o)(this,t),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new K(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(s)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(i)(e(l).mark((function n(){var r,i,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=H(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(i)(e(l).mark((function n(){var r,i,a,o,s;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=H(),i=q(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=(0,p.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function H(){return(new Date).toISOString().substring(0,10)}function q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),J(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),J(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var G,K=function(){"use strict";function t(n){e(o)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(s)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(i)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,p.isIndexedDBAvailable)()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",(0,p.validateIndexedDBOpenable)().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(i)(e(l).mark((function n(){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,j(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(i)(e(l).mark((function r(){var i,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return a=e.sent,e.abrupt("return",z(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(i)(e(l).mark((function r(){var i,a;return e(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",z(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(c)(a.heartbeats).concat(e(c)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function J(e){return(0,p.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */G="",T(new(0,f.Component)("platform-logger",(function(e){return new v(e)}),"PRIVATE")),T(new(0,f.Component)("heartbeat",(function(e){return new V(e)}),"PRIVATE")),P(y,b,G),P(y,b,"esm2017"),P("fire-js","")})),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t&&n(e.prototype,t);r&&n(e,r);return e}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n;return e}})),a.register("8nrFW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n.default(e)||r.default(e)||o.default(e)||i.default()};var n=s(a("kMC0W")),r=s(a("7AJDX")),i=s(a("8CtQK")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("6ExWU",(function(n,r){t(n.exports,"Component",(function(){return d})),t(n.exports,"ComponentContainer",(function(){return v}));var i=a("bpxeT"),o=a("8MBJY"),s=a("a2hTj"),u=a("1t1Wn"),c=a("8nrFW"),l=a("2TvXO"),f=a("2xDiJ"),d=function(){"use strict";function t(n,r,i){e(o)(this,t),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(s)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),p="[DEFAULT]",h=function(){"use strict";function t(n,r){e(o)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(s)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new(0,f.Deferred);if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:p})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=e(u)(a.value,2),c=s[0],l=s[1],f=this.normalizeInstanceIdentifier(c);try{var d=this.getOrInitializeService({instanceIdentifier:f});l.resolve(d)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(i)(e(l).mark((function n(){var r;return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(c)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(c)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,c=void 0;try{for(var l,f=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(l=f.next()).done);o=!0){var d=e(u)(l.value,2),p=d[0],h=d[1],v=this.normalizeInstanceIdentifier(p);i===v&&h.resolve(a)}}catch(e){s=!0,c=e}finally{try{o||null==f.return||f.return()}finally{if(s)throw c}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===p?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;return this.component?this.component.multipleInstances?e:p:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();var v=function(){"use strict";function t(n){e(o)(this,t),this.name=n,this.providers=new Map}return e(s)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new h(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}()})),a.register("1t1Wn",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n.default(e)||r.default(e,t)||o.default(e,t)||i.default()};var n=s(a("8slrw")),r=s(a("7AJDX")),i=s(a("ifqQW")),o=s(a("auk6i"));function s(e){return e&&e.__esModule?e:{default:e}}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("2xDiJ",(function(r,i){t(r.exports,"base64urlEncodeWithoutPadding",(function(){return g})),t(r.exports,"base64Decode",(function(){return y})),t(r.exports,"getDefaultEmulatorHost",(function(){return x})),t(r.exports,"getDefaultAppConfig",(function(){return w})),t(r.exports,"getExperimentalSetting",(function(){return _})),t(r.exports,"Deferred",(function(){return I})),t(r.exports,"getUA",(function(){return E})),t(r.exports,"isMobileCordova",(function(){return T})),t(r.exports,"isBrowserExtension",(function(){return S})),t(r.exports,"isReactNative",(function(){return N})),t(r.exports,"isIE",(function(){return C})),t(r.exports,"isIndexedDBAvailable",(function(){return O})),t(r.exports,"validateIndexedDBOpenable",(function(){return A})),t(r.exports,"FirebaseError",(function(){return R})),t(r.exports,"ErrorFactory",(function(){return L})),t(r.exports,"isEmpty",(function(){return M})),t(r.exports,"deepEqual",(function(){return U})),t(r.exports,"querystring",(function(){return B})),t(r.exports,"querystringDecode",(function(){return z})),t(r.exports,"extractQuerystring",(function(){return F})),t(r.exports,"createSubscribe",(function(){return W})),t(r.exports,"getModularInstance",(function(){return q}));var o=a("ds8z5"),s=a("8MBJY"),u=a("a2hTj"),c=a("eYQtU"),l=a("1t1Wn"),f=(a("8nrFW"),a("4c7YB")),d=a("2MbLg"),p=a("6qd2L"),h=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},v={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|s>>4,d=(15&s)<<2|c>>6,p=63&c;u||(p=64,o||(d=64)),r.push(n[l],n[f],n[d],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(h(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw new m;var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var f=s<<6&192|u;r.push(f)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},m=function(t){"use strict";e(c)(r,t);var n=e(d)(r);function r(){var t;return e(s)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).name="DecodeBase64StringError",t}return r}(e(f)(Error)),g=function(e){return function(e){var t=h(e);return v.encodeByteArray(t,!0)}(e).replace(/\./g,"")},y=function(e){try{return v.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var b=function(){
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__},k=function(){try{return b()||function(){if(void 0!==p&&void 0!==p.env);}()||function(){if("undefined"!=typeof document){var e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&y(e[1]);return t&&JSON.parse(t)}}()}catch(e){return void console.info("Unable to get __FIREBASE_DEFAULTS__ due to: ".concat(e))}},x=function(e){var t,n;return null===(n=null===(t=k())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},w=function(){var e;return null===(e=k())||void 0===e?void 0:e.config},_=function(e){var t;return null===(t=k())||void 0===t?void 0:t["_".concat(e)]},I=function(){"use strict";function t(){var n=this;e(s)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(u)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function E(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function T(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(E())}function S(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function N(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function C(){var e=E();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function O(){try{return"object"==typeof indexedDB}catch(e){return!1}}function A(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var R=function(t){"use strict";e(c)(r,t);var n=e(d)(r);function r(t,i,a){var u;return e(s)(this,r),(u=n.call(this,i)).code=t,u.customData=a,u.name="FirebaseError",Object.setPrototypeOf(e(o)(u),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(o)(u),L.prototype.create),u}return r}(e(f)(Error)),L=function(){"use strict";function t(n,r,i){e(s)(this,t),this.service=n,this.serviceName=r,this.errors=i}return e(u)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?P(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new R(a,u,i);return c}}]),t}();function P(e,t){return e.replace(D,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var D=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function U(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],f=t[c];if(j(l)&&j(f)){if(!U(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var d=!0,p=!1,h=void 0;try{for(var v,m=r[Symbol.iterator]();!(d=(v=m.next()).done);d=!0){var g=v.value;if(!n.includes(g))return!1}}catch(e){p=!0,h=e}finally{try{d||null==m.return||m.return()}finally{if(p)throw h}}return!0}function j(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(t,r){var i=e(l)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function z(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(l)(t.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function F(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e,t){var n=new V(e,t);return n.subscribe.bind(n)}var V=function(){"use strict";function t(n,r){var i=this;e(s)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return e(u)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=H),void 0===r.error&&(r.error=H),void 0===r.complete&&(r.complete=H);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function H(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function q(e){return e&&e._delegate?e._delegate:e}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r.default(e,t)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n}})),a.register("gD1JV",(function(e,t){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return n(e,t)}})),a.register("4c7YB",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return u(e)};var n=s(a("ge8co")),r=s(a("cZGw3")),i=s(a("fVNic")),o=s(a("gD1JV"));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){var t="function"==typeof Map?new Map:void 0;return u=function(e){if(null===e||!r.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,a)}function a(){return n.default(e,arguments,i.default(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),o.default(a,e)},u(e)}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return o.apply(null,arguments)};var n,r=(n=a("gD1JV"))&&n.__esModule?n:{default:n};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,n){return(o=i()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&r.default(a,n.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("fVNic",(function(e,t){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return n(e)}})),a.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=n.default();return function(){var n,a=r.default(e);if(t){var o=r.default(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return i.default(this,n)}};var n=o(a("aTHs7")),r=o(a("fVNic")),i=o(a("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==r.default(t)&&"function"!=typeof t?n.default(e):t};var n=i(a("ds8z5")),r=i(a("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),a.register("6qd2L",(function(e,t){var n,r,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var u,c=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&p())}function p(){if(!l){var e=s(d);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||l||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),a.register("kZfxc",(function(n,r){t(n.exports,"LogLevel",(function(){return i})),t(n.exports,"Logger",(function(){return g})),t(n.exports,"setLogLevel",(function(){return y})),t(n.exports,"setUserLogHandler",(function(){return b}));var i,o,s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("8nrFW"),f=[];(o=i||(i={}))[o.DEBUG=0]="DEBUG",o[o.VERBOSE=1]="VERBOSE",o[o.INFO=2]="INFO",o[o.WARN=3]="WARN",o[o.ERROR=4]="ERROR",o[o.SILENT=5]="SILENT";var d,p={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},h=i.INFO,v=(d={},e(c)(d,i.DEBUG,"log"),e(c)(d,i.VERBOSE,"log"),e(c)(d,i.INFO,"info"),e(c)(d,i.WARN,"warn"),e(c)(d,i.ERROR,"error"),d),m=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=v[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(l)(i)))}},g=function(){"use strict";function t(n){e(s)(this,t),this.name=n,this._logLevel=h,this._logHandler=m,this._userLogHandler=null,f.push(this)}return e(u)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in i))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?p[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.DEBUG].concat(e(l)(n))),this._logHandler.apply(this,[this,i.DEBUG].concat(e(l)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.VERBOSE].concat(e(l)(n))),this._logHandler.apply(this,[this,i.VERBOSE].concat(e(l)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.INFO].concat(e(l)(n))),this._logHandler.apply(this,[this,i.INFO].concat(e(l)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.WARN].concat(e(l)(n))),this._logHandler.apply(this,[this,i.WARN].concat(e(l)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,i.ERROR].concat(e(l)(n))),this._logHandler.apply(this,[this,i.ERROR].concat(e(l)(n)))}}]),t}();function y(e){f.forEach((function(t){t.setLogLevel(e)}))}function b(e,t){var n=!0,r=!1,a=void 0;try{for(var o,s=f[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value,c=null;t&&t.level&&(c=p[t.level]),u.userLogHandler=null===e?null:function(t,n){for(var r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];var s=a.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");n>=(null!=c?c:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:a,type:t.name})}}}catch(e){r=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}}})),a.register("ajgRO",(function(n,r){t(n.exports,"openDB",(function(){return l}));var i=a("bpxeT"),o=a("dDDEV"),s=a("8nrFW"),u=a("2TvXO"),c=a("kKOTz");c=a("kKOTz");function l(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=(0,c.w)(s);return i&&s.addEventListener("upgradeneeded",(function(e){i((0,c.w)(s.result),e.oldVersion,e.newVersion,(0,c.w)(s.transaction),e)})),r&&s.addEventListener("blocked",(function(e){return r(e.oldVersion,e.newVersion,e)})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(e){return a(e.oldVersion,e.newVersion,e)}))})).catch((function(){})),u}var f=["get","getKey","getAll","getAllKeys","count"],d=["put","add","delete","clear"],p=new Map;function h(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(p.get(n))return p.get(n);var r=n.replace(/FromIndex$/,""),a=n!==r,o=d.includes(r);if(r in(a?IDBIndex:IDBObjectStore).prototype&&(o||f.includes(r))){var c,l=(c=e(i)(e(u).mark((function t(n){var i,c,l,f,d,p,h=arguments;return e(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(i=h.length,c=new Array(i>1?i-1:0),l=1;l<i;l++)c[l-1]=h[l];return d=this.transaction(n,o?"readwrite":"readonly"),p=d.store,a&&(p=p.index(c.shift())),t.next=7,Promise.all([(f=p)[r].apply(f,e(s)(c)),o&&d.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return c.apply(this,arguments)});return p.set(n,l),l}}}(0,c.r)((function(t){return e(o)({},t,{get:function(e,n,r){return h(e,n)||t.get(e,n,r)},has:function(e,n){return!!h(e,n)||t.has(e,n)}})}))})),a.register("dDDEV",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r.default(e,t,n[t])}))}return e};var n,r=(n=a("hKHmD"))&&n.__esModule?n:{default:n}})),a.register("kKOTz",(function(n,r){t(n.exports,"w",(function(){return g})),t(n.exports,"r",(function(){return h}));var i,o,s=a("8nrFW");var u=new WeakMap,c=new WeakMap,l=new WeakMap,f=new WeakMap,d=new WeakMap;var p={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return g(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function h(e){p=e(p)}function v(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(o||(o=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(y(this),n),g(u.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return g(t.apply(y(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,u=(o=t).call.apply(o,[y(this),n].concat(e(s)(i)));return l.set(u,n.sort?n.sort():[n]),g(u)}}function m(e){return"function"==typeof e?v(e):(e instanceof IDBTransaction&&function(e){if(!c.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));c.set(e,t)}}(e),t=e,(i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,p):e);var t}function g(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(g(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&u.set(e,t)})).catch((function(){})),d.set(n,t),n;var t,n;if(f.has(e))return f.get(e);var r=m(e);return r!==e&&(f.set(e,r),d.set(r,e)),r}var y=function(e){return d.get(e)}})),a.register("gQOBw",(function(e,n){t(e.exports,"getAuth",(function(){return a("G0OFq").o})),t(e.exports,"onAuthStateChanged",(function(){return a("G0OFq").x})),t(e.exports,"signInWithEmailAndPassword",(function(){return a("G0OFq").a9})),t(e.exports,"fetchSignInMethodsForEmail",(function(){return a("G0OFq").ad})),t(e.exports,"createUserWithEmailAndPassword",(function(){return a("G0OFq").a8})),t(e.exports,"updateProfile",(function(){return a("G0OFq").ai})),t(e.exports,"signOut",(function(){return a("G0OFq").B})),a("eMcUM")})),a.register("eMcUM",(function(e,n){t(e.exports,"createUserWithEmailAndPassword",(function(){return a("G0OFq").a8})),t(e.exports,"fetchSignInMethodsForEmail",(function(){return a("G0OFq").ad})),t(e.exports,"getAuth",(function(){return a("G0OFq").o})),t(e.exports,"onAuthStateChanged",(function(){return a("G0OFq").x})),t(e.exports,"signInWithEmailAndPassword",(function(){return a("G0OFq").a9})),t(e.exports,"signOut",(function(){return a("G0OFq").B})),t(e.exports,"updateProfile",(function(){return a("G0OFq").ai})),a("2xDiJ"),a("MjY8E"),a("kZfxc"),a("6ExWU");a("G0OFq")})),a.register("G0OFq",(function(n,r){t(n.exports,"a8",(function(){return Xt})),t(n.exports,"a9",(function(){return Qt})),t(n.exports,"ad",(function(){return en})),t(n.exports,"ai",(function(){return an})),t(n.exports,"x",(function(){return cn})),t(n.exports,"B",(function(){return ln})),t(n.exports,"o",(function(){return ni}));var i=a("ds8z5"),o=a("bpxeT"),s=a("8MBJY"),u=a("a2hTj"),c=a("hKHmD"),l=a("jh8P3"),f=a("fVNic"),d=a("eYQtU"),p=a("1t1Wn"),h=a("8nrFW"),v=a("2MbLg"),m=a("2TvXO"),g=a("2xDiJ"),y=a("MjY8E"),b=a("4tSb9"),k=a("kZfxc"),x=a("6ExWU");function w(){return e(c)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var _=w,I=new(0,g.ErrorFactory)("auth","Firebase",w()),E=new(0,k.Logger)("@firebase/auth");function T(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;E.logLevel<=k.LogLevel.WARN&&(a=E).warn.apply(a,["Auth (".concat(y.SDK_VERSION,"): ").concat(t)].concat(e(h)(r)))}function S(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;E.logLevel<=k.LogLevel.ERROR&&(a=E).error.apply(a,["Auth (".concat(y.SDK_VERSION,"): ").concat(t)].concat(e(h)(r)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw A.apply(void 0,[t].concat(e(h)(r)))}function C(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return A.apply(void 0,[t].concat(e(h)(r)))}function O(t,n,r){var i=Object.assign(Object.assign({},_()),e(c)({},n,r));return new(0,g.ErrorFactory)("auth","Firebase",i).create(n,{appName:t.name})}function A(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof t){var o,s=r[0],u=e(h)(r.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(h)(u)))}return(a=I).create.apply(a,[t].concat(e(h)(r)))}function R(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!t)throw A.apply(void 0,[n].concat(e(h)(i)))}function L(e){var t="INTERNAL ASSERTION FAILED: "+e;throw S(t),new Error(t)}function P(e,t){e||L(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function M(){return"http:"===U()||"https:"===U()}function U(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var j=function(){"use strict";function t(n,r){e(s)(this,t),this.shortDelay=n,this.longDelay=r,P(r>n,"Short delay should be less than long delay!"),this.isMobile=(0,g.isMobileCordova)()||(0,g.isReactNative)()}return e(u)(t,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(M()||(0,g.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e,t){P(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z,F=function(){"use strict";function t(){e(s)(this,t)}return e(u)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void L("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void L("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void L("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),W=(z={},e(c)(z,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(c)(z,"MISSING_CUSTOM_TOKEN","internal-error"),e(c)(z,"INVALID_IDENTIFIER","invalid-email"),e(c)(z,"MISSING_CONTINUE_URI","internal-error"),e(c)(z,"INVALID_PASSWORD","wrong-password"),e(c)(z,"MISSING_PASSWORD","missing-password"),e(c)(z,"EMAIL_EXISTS","email-already-in-use"),e(c)(z,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(c)(z,"INVALID_IDP_RESPONSE","invalid-credential"),e(c)(z,"INVALID_PENDING_TOKEN","invalid-credential"),e(c)(z,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(c)(z,"MISSING_REQ_TYPE","internal-error"),e(c)(z,"EMAIL_NOT_FOUND","user-not-found"),e(c)(z,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(c)(z,"EXPIRED_OOB_CODE","expired-action-code"),e(c)(z,"INVALID_OOB_CODE","invalid-action-code"),e(c)(z,"MISSING_OOB_CODE","internal-error"),e(c)(z,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(c)(z,"INVALID_ID_TOKEN","invalid-user-token"),e(c)(z,"TOKEN_EXPIRED","user-token-expired"),e(c)(z,"USER_NOT_FOUND","user-token-expired"),e(c)(z,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(c)(z,"INVALID_CODE","invalid-verification-code"),e(c)(z,"INVALID_SESSION_INFO","invalid-verification-id"),e(c)(z,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(c)(z,"MISSING_SESSION_INFO","missing-verification-id"),e(c)(z,"SESSION_EXPIRED","code-expired"),e(c)(z,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(c)(z,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(c)(z,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(c)(z,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(c)(z,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(c)(z,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(c)(z,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(c)(z,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(c)(z,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(c)(z,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(c)(z,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),e(c)(z,"RECAPTCHA_NOT_ENABLED","recaptcha-not-enabled"),e(c)(z,"MISSING_RECAPTCHA_TOKEN","missing-recaptcha-token"),e(c)(z,"INVALID_RECAPTCHA_TOKEN","invalid-recaptcha-token"),e(c)(z,"INVALID_RECAPTCHA_ACTION","invalid-recaptcha-action"),e(c)(z,"MISSING_CLIENT_TYPE","missing-client-type"),e(c)(z,"MISSING_RECAPTCHA_VERSION","missing-recaptcha-version"),e(c)(z,"INVALID_RECAPTCHA_VERSION","invalid-recaptcha-version"),e(c)(z,"INVALID_REQ_TYPE","invalid-req-type"),z),V=new j(3e4,6e4);function H(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function q(e,t,n,r){return G.apply(this,arguments)}function G(){return G=e(o)(e(m).mark((function t(n,r,i,a){var s,u=arguments;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:{},t.abrupt("return",K(n,s,e(o)(e(m).mark((function t(){var o,s,u,c;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===r?s=a:o={body:JSON.stringify(a)}),u=(0,g.querystring)(Object.assign({key:n.config.apiKey},s)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",F.fetch()(Q(n,n.config.apiHost,i,u),Object.assign({method:r,headers:c,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),G.apply(this,arguments)}function K(e,t,n){return J.apply(this,arguments)}function J(){return(J=e(o)(e(m).mark((function t(n,r,i){var a,o,s,u,c,l,f,d,h;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},W),r),t.prev=2,o=new $(n),t.next=6,Promise.race([i(),o.promise]);case 6:return s=t.sent,o.clearNetworkTimeout(),t.next=10,s.json();case 10:if(!("needConfirmation"in(u=t.sent))){t.next=13;break}throw Z(n,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){t.next=17;break}return t.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,l=e(p)(c.split(" : "),2),f=l[0],d=l[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){t.next=23;break}throw Z(n,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==f){t.next=27;break}throw Z(n,"email-already-in-use",u);case 27:if("USER_DISABLED"!==f){t.next=29;break}throw Z(n,"user-disabled",u);case 29:if(h=a[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!d){t.next=34;break}throw O(n,h,d);case 34:N(n,h);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof g.FirebaseError)){t.next=41;break}throw t.t0;case 41:N(n,"network-request-failed",{message:String(t.t0)});case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function X(e,t,n,r){return Y.apply(this,arguments)}function Y(){return Y=e(o)(e(m).mark((function t(n,r,i,a){var o,s,u=arguments;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,q(n,r,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&N(n,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),t)}))),Y.apply(this,arguments)}function Q(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?B(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var $=function(){"use strict";function t(n){var r=this;e(s)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(C(n.auth,"network-request-failed"))}),V.get())}))}return e(u)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function Z(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=C(e,t,r);return i.customData._tokenResponse=n,i}function ee(e,t){return te.apply(this,arguments)}function te(){return(te=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(n,r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ne(e,t){return re.apply(this,arguments)}function re(){return(re=e(o)(e(m).mark((function t(n,r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(){return ae=e(o)(e(m).mark((function t(n){var r,i,a,o,s,u,c=arguments;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],i=(0,g.getModularInstance)(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,R((o=se(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:ie(oe(o.auth_time)),issuedAtTime:ie(oe(o.iat)),expirationTime:ie(oe(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),ae.apply(this,arguments)}function oe(e){return 1e3*Number(e)}function se(t){var n=e(p)(t.split("."),3),r=n[0],i=n[1],a=n[2];if(void 0===r||void 0===i||void 0===a)return S("JWT malformed, contained fewer than 3 sections"),null;try{var o=(0,g.base64Decode)(i);return o?JSON.parse(o):(S("Failed to decode base64 JWT payload"),null)}catch(e){return S("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function ue(e,t){return ce.apply(this,arguments)}function ce(){return ce=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(n,r){var i=arguments;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof g.FirebaseError&&le(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),ce.apply(this,arguments)}function le(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe=function(){"use strict";function t(n){e(s)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(u)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(o)(e(m).mark((function t(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(o)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.user.getIdToken(!0);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&t.schedule(!0),e.abrupt("return");case 9:t.schedule();case 10:case"end":return e.stop()}}),n,null,[[0,5]])})))()}}]),t}(),de=function(){"use strict";function t(n,r){e(s)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(u)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=ie(this.lastLoginAt),this.creationTime=ie(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e){return he.apply(this,arguments)}function he(){return(he=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(n){var r,i,a,o,s,u,c,l,f,d,p;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,ue(n,ne(i,{idToken:a}));case 7:R(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],n._notifyReloadListener(s),u=(null===(r=s.providerUserInfo)||void 0===r?void 0:r.length)?ge(s.providerUserInfo):[],c=me(n.providerData,u),l=n.isAnonymous,f=!(n.email&&s.passwordHash||(null==c?void 0:c.length)),d=!!l&&f,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new de(s.createdAt,s.lastLoginAt),isAnonymous:d},Object.assign(n,p);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ve(){return(ve=e(o)(e(m).mark((function t(n){var r;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,g.getModularInstance)(n),e.next=3,pe(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function me(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(h)(r).concat(e(h)(n))}function ge(e){return e.map((function(e){var t=e.providerId,n=(0,b.__rest)(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function ye(e,t){return be.apply(this,arguments)}function be(){return(be=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(n,r){var i;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,K(n,{},e(o)(e(m).mark((function t(){var i,a,o,s,u,c;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,g.querystring)({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,o=a.tokenApiHost,s=a.apiKey,u=Q(n,o,"/v1/token","key=".concat(s)),e.next=5,n._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",F.fetch()(u,{method:"POST",headers:c,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke=function(){"use strict";function t(){e(s)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(u)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){R(e.idToken,"internal-error"),R(void 0!==e.idToken,"internal-error"),R(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,R(n=se(t),"internal-error"),R(void 0!==n.exp,"internal-error"),R(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(o)(e(m).mark((function i(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(o)(e(m).mark((function i(){var a,o,s,u;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ye(t,n);case 2:a=e.sent,o=a.accessToken,s=a.refreshToken,u=a.expiresIn,r.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return L("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new t;return r&&(R("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),i&&(R("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),a&&(R("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(e,t){R("string"==typeof e||void 0===e,"internal-error",{appName:t})}var we=function(){"use strict";function t(n){e(s)(this,t);var r=n.uid,i=n.auth,a=n.stsTokenManager,o=(0,b.__rest)(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fe(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?e(h)(o.providerData):[],this.metadata=new de(o.createdAt||void 0,o.lastLoginAt||void 0)}return e(u)(t,[{key:"getIdToken",value:function(t){var n=this;return e(o)(e(m).mark((function r(){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(R(i=e.sent,n.auth,"internal-error"),n.accessToken===i){e.next=9;break}return n.accessToken=i,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return ae.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return ve.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){var n=new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}},{key:"_onReload",value:function(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(o)(e(m).mark((function i(){var a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),a=!0),!n){e.next=5;break}return e.next=5,pe(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(o)(e(m).mark((function n(){var r;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,ue(t,ee(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,i,a,o,s,u,c,l,f=null!==(r=n.displayName)&&void 0!==r?r:void 0,d=null!==(i=n.email)&&void 0!==i?i:void 0,p=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,h=null!==(o=n.photoURL)&&void 0!==o?o:void 0,v=null!==(s=n.tenantId)&&void 0!==s?s:void 0,m=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=n.createdAt)&&void 0!==c?c:void 0,y=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,b=n.uid,k=n.emailVerified,x=n.isAnonymous,w=n.providerData,_=n.stsTokenManager;R(b&&_,e,"internal-error");var I=ke.fromJSON(this.name,_);R("string"==typeof b,e,"internal-error"),xe(f,e.name),xe(d,e.name),R("boolean"==typeof k,e,"internal-error"),R("boolean"==typeof x,e,"internal-error"),xe(p,e.name),xe(h,e.name),xe(v,e.name),xe(m,e.name),xe(g,e.name),xe(y,e.name);var E=new t({uid:b,auth:e,email:d,emailVerified:k,displayName:f,isAnonymous:x,photoURL:h,phoneNumber:p,tenantId:v,stsTokenManager:I,createdAt:g,lastLoginAt:y});return w&&Array.isArray(w)&&(E.providerData=w.map((function(e){return Object.assign({},e)}))),m&&(E._redirectEventId=m),E}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(o)(e(m).mark((function a(){var o,s;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new ke).updateFromServerResponse(r),s=new t({uid:r.localId,auth:n,stsTokenManager:o,isAnonymous:i}),e.next=5,pe(s);case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),_e=new Map;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e){P(e instanceof Function,"Expected a class definition");var t=_e.get(e);return t?(P(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_e.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee=function(){"use strict";function t(){e(s)(this,t),this.type="NONE",this.storage={}}return e(u)(t,[{key:"_isAvailable",value:function(){return e(o)(e(m).mark((function t(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(o)(e(m).mark((function i(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(o)(e(m).mark((function r(){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(o)(e(m).mark((function r(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();Ee.type="NONE";var Te=Ee;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var Ne=function(){"use strict";function t(n,r,i){e(s)(this,t),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,u=a.name;this.fullUserKey=Se(this.userKey,o.apiKey,u),this.fullPersistenceKey=Se("persistence",o.apiKey,u),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(u)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(o)(e(m).mark((function n(){var r;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?we._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(o)(e(m).mark((function r(){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return i=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!i){e.next=10;break}return e.abrupt("return",n.setCurrentUser(i));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(o)(e(m).mark((function a(){var s,u,c,l,f,d,p,h,v,g,y,b,k;return e(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.length){a.next=2;break}return a.abrupt("return",new t(Ie(Te),n,i));case 2:return a.next=4,Promise.all(r.map(function(){var t=e(o)(e(m).mark((function t(n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:s=a.sent.filter((function(e){return e})),u=s[0]||Ie(Te),c=Se(i,n.config.apiKey,n.name),l=null,f=!0,d=!1,p=void 0,a.prev=9,h=r[Symbol.iterator]();case 11:if(f=(v=h.next()).done){a.next=29;break}return g=v.value,a.prev=13,a.next=16,g._get(c);case 16:if(!(y=a.sent)){a.next=22;break}return b=we._fromJSON(n,y),g!==u&&(l=b),u=g,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:f=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),d=!0,p=a.t1;case 35:a.prev=35,a.prev=36,f||null==h.return||h.return();case 38:if(a.prev=38,!d){a.next=41;break}throw p;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(k=s.filter((function(e){return e._shouldAllowMigration})),u._shouldAllowMigration&&k.length){a.next=46;break}return a.abrupt("return",new t(u,n,i));case 46:if(u=k[0],!l){a.next=50;break}return a.next=50,u._set(c,l.toJSON());case 50:return a.next=52,Promise.all(r.map(function(){var t=e(o)(e(m).mark((function t(n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===u){e.next=8;break}return e.prev=1,e.next=4,n._remove(c);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return a.abrupt("return",new t(u,n,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Le(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Oe(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(De(t))return"Blackberry";if(Me(t))return"Webos";if(Ae(t))return"Safari";if((t.includes("chrome/")||Re(t))&&!t.includes("edge/"))return"Chrome";if(Pe(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function Oe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/firefox\//i.test(e)}function Ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Re(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/crios\//i.test(e)}function Le(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/iemobile/i.test(e)}function Pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/android/i.test(e)}function De(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/blackberry/i.test(e)}function Me(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/webos/i.test(e)}function Ue(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function je(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return Ue(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Be(){return(0,g.isIE)()&&10===document.documentMode}function ze(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,g.getUA)();return Ue(e)||Pe(e)||Me(e)||De(e)||/windows phone/i.test(e)||Le(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fe(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=Ce((0,g.getUA)());break;case"Worker":t="".concat(Ce((0,g.getUA)()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(y.SDK_VERSION,"/").concat(r)}function We(e,t){return Ve.apply(this,arguments)}function Ve(){return(Ve=e(o)(e(m).mark((function t(n,r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q(n,"GET","/v2/recaptchaConfig",H(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(e){return void 0!==e&&void 0!==e.enterprise}var qe=function t(n){"use strict";if(e(s)(this,t),this.siteKey="",this.emailPasswordEnabled=!1,void 0===n.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=n.recaptchaKey.split("/")[3],this.emailPasswordEnabled=n.recaptchaEnforcementState.some((function(e){return"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState}))};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=C("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function Ke(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}var Je="https://www.google.com/recaptcha/enterprise.js?render=",Xe="NO_RECAPTCHA",Ye=function(){"use strict";function t(n){e(s)(this,t),this.type="recaptcha-enterprise",this.auth=tt(n)}return e(u)(t,[{key:"verify",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"verify",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(o)(e(m).mark((function i(){var a,s,u;return e(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return a=function(e){return s.apply(this,arguments)},s=function(){return s=e(o)(e(m).mark((function t(r){return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=5;break}if(null!=r.tenantId||null==r._agentRecaptchaConfig){t.next=3;break}return t.abrupt("return",r._agentRecaptchaConfig.siteKey);case 3:if(null==r.tenantId||void 0===r._tenantRecaptchaConfigs[r.tenantId]){t.next=5;break}return t.abrupt("return",r._tenantRecaptchaConfigs[r.tenantId].siteKey);case 5:return t.abrupt("return",new Promise(function(){var t=e(o)(e(m).mark((function t(n,i){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:We(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((function(e){if(void 0!==e.recaptchaKey){var t=new qe(e);return null==r.tenantId?r._agentRecaptchaConfig=t:r._tenantRecaptchaConfigs[r.tenantId]=t,n(t.siteKey)}i(new Error("recaptcha Enterprise site key undefined"))})).catch((function(e){i(e)}));case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()));case 6:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)},u=function(e,n,r){var i=window.grecaptcha;He(i)?i.enterprise.ready((function(){i.enterprise.execute(e,{action:t}).then((function(e){n(e)})).catch((function(){n(Xe)}))})):r(Error("No reCAPTCHA enterprise script loaded."))},i.abrupt("return",new Promise((function(e,t){a(r.auth).then((function(r){if(!n&&He(window.grecaptcha))u(r,e,t);else{if("undefined"==typeof window)return void t(new Error("RecaptchaVerifier is only supported in browser"));Ge(Je+r).then((function(){u(r,e,t)})).catch((function(e){t(e)}))}})).catch((function(e){t(e)}))})));case 7:case"end":return i.stop()}}),i)})))()}}]),t}();function Qe(e,t,n){return $e.apply(this,arguments)}function $e(){return $e=e(o)(e(m).mark((function t(n,r,i){var a,o,s,u,c=arguments;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>3&&void 0!==c[3]&&c[3],o=new Ye(n),e.prev=3,e.next=6,o.verify(i);case 6:s=e.sent,e.next=14;break;case 9:return e.prev=9,e.t0=e.catch(3),e.next=13,o.verify(i,!0);case 13:s=e.sent;case 14:return u=Object.assign({},r),a?Object.assign(u,{captchaResp:s}):Object.assign(u,{captchaResponse:s}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),e.abrupt("return",u);case 19:case"end":return e.stop()}}),t,null,[[3,9]])}))),$e.apply(this,arguments)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze=function(){"use strict";function t(n){e(s)(this,t),this.auth=n,this.queue=[]}return e(u)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(o)(e(m).mark((function r(){var i,a,o,s,u,c,l,f,d,p,h,v,g;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=2;break}return e.abrupt("return");case 2:i=[],e.prev=3,a=!0,o=!1,s=void 0,e.prev=5,u=n.queue[Symbol.iterator]();case 7:if(a=(c=u.next()).done){e.next=15;break}return l=c.value,e.next=11,l(t);case 11:l.onAbort&&i.push(l.onAbort);case 12:a=!0,e.next=7;break;case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(5),o=!0,s=e.t0;case 21:e.prev=21,e.prev=22,a||null==u.return||u.return();case 24:if(e.prev=24,!o){e.next=27;break}throw s;case 27:return e.finish(24);case 28:return e.finish(21);case 29:e.next=52;break;case 31:for(e.prev=31,e.t1=e.catch(3),i.reverse(),f=!0,d=!1,p=void 0,e.prev=35,h=i[Symbol.iterator]();!(f=(v=h.next()).done);f=!0){g=v.value;try{g()}catch(e){}}e.next=43;break;case 39:e.prev=39,e.t2=e.catch(35),d=!0,p=e.t2;case 43:e.prev=43,e.prev=44,f||null==h.return||h.return();case 46:if(e.prev=46,!d){e.next=49;break}throw p;case 49:return e.finish(46);case 50:return e.finish(43);case 51:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===e.t1||void 0===e.t1?void 0:e.t1.message});case 52:case"end":return e.stop()}}),r,null,[[3,31],[5,17,21,29],[22,,24,28],[35,39,43,51],[44,,46,50]])})))()}}]),t}(),et=function(){"use strict";function t(n,r,i,a){e(s)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nt(this),this.idTokenSubscription=new nt(this),this.beforeStateQueue=new Ze(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=I,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=a.sdkClientVersion}return e(u)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=Ie(n));var r=this;return this._initializationPromise=this.queue(e(o)(e(m).mark((function i(){var a,o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,Ne.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(o=r.currentUser)||void 0===o?void 0:o.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(o)(e(m).mark((function n(){var r;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(o)(e(m).mark((function r(){var i,a,o,s,u,c,l;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,o=a,s=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,c=null==o?void 0:o._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:l=e.sent,u&&u!==c||!(null==l?void 0:l.user)||(o=l.user,s=!0);case 15:if(o){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(o._redirectEventId){e.next=33;break}if(!s){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(o);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),o=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!o){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return R(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==o._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(o));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(o)(e(m).mark((function r(){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(o)(e(m).mark((function r(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pe(t);case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)){e.next=9;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 9:return e.abrupt("return",n.directlySetCurrentUser(t));case 10:case"end":return e.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(o)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(o)(e(m).mark((function r(){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?(0,g.getModularInstance)(t):null)&&R(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(o)(e(m).mark((function i(){return e(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&R(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",r.queue(e(o)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(o)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(o)(e(m).mark((function r(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(Ie(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"initializeRecaptchaConfig",value:function(){var t=this;return e(o)(e(m).mark((function n(){var r,i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,We(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"});case 2:r=e.sent,i=new qe(r),null==t.tenantId?t._agentRecaptchaConfig=i:t._tenantRecaptchaConfigs[t.tenantId]=i,i.emailPasswordEnabled&&new Ye(t).verify();case 6:case"end":return e.stop()}}),n)})))()}},{key:"_getRecaptchaConfig",value:function(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new(0,g.ErrorFactory)("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(o)(e(m).mark((function i(){var a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(o)(e(m).mark((function r(){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return R(i=t&&Ie(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,Ne.create(n,[Ie(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(o)(e(m).mark((function r(){var i,a;return e(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(o)(e(m).mark((function t(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(a=n.redirectUser)||void 0===a?void 0:a._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(o)(e(m).mark((function r(){return e(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(o)(e(m).mark((function r(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return R(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(o)(e(m).mark((function r(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh(),n.currentUser=t,!t){e.next=8;break}return e.next=6,n.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,n.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fe(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(o)(e(m).mark((function n(){var r,i,a,o;return e(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e(c)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.next=9,t._getAppCheckToken();case 9:return(o=n.sent)&&(i["X-Firebase-AppCheck"]=o),n.abrupt("return",i);case 12:case"end":return n.stop()}}),n)})))()}},{key:"_getAppCheckToken",value:function(){var t=this;return e(o)(e(m).mark((function n(){var r,i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,null===(r=t.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getToken();case 3:return(null==(i=e.sent)?void 0:i.error)&&T("Error while retrieving App Check token: ".concat(i.error)),e.abrupt("return",null==i?void 0:i.token);case 6:case"end":return e.stop()}}),n)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(e){return(0,g.getModularInstance)(e)}var nt=function(){"use strict";function t(n){var r=this;e(s)(this,t),this.auth=n,this.observer=null,this.addObserver=(0,g.createSubscribe)((function(e){return r.observer=e}))}return e(u)(t,[{key:"next",get:function(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(e,t){var n=(0,y._getProvider)(e,"auth");if(n.isInitialized()){var r=n.getImmediate(),i=n.getOptions();if((0,g.deepEqual)(i,null!=t?t:{}))return r;N(r,"already-initialized")}return n.initialize({options:t})}function it(t,n,r){var i=tt(t);R(i._canInitEmulator,i,"emulator-config-failed"),R(/^https?:\/\//.test(n),i,"invalid-emulator-scheme");var a=!!(null==r?void 0:r.disableWarnings),o=at(n),s=function(t){var n=at(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!r)return{host:"",port:null};var i=r[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var o=a[1];return{host:o,port:ot(i.substr(o.length+1))}}var s=e(p)(i.split(":"),2);return{host:s[0],port:ot(s[1])}}(n),u=s.host,c=s.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(o,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function at(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function ot(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var st=function(){"use strict";function t(n,r){e(s)(this,t),this.providerId=n,this.signInMethod=r}return e(u)(t,[{key:"toJSON",value:function(){return L("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return L("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return L("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return L("not implemented")}}]),t}();function ut(e,t){return ct.apply(this,arguments)}function ct(){return(ct=e(o)(e(m).mark((function t(n,r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function lt(e,t){return ft.apply(this,arguments)}function ft(){return(ft=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(n,r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",X(n,"POST","/v1/accounts:signInWithPassword",H(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function dt(e,t){return pt.apply(this,arguments)}function pt(){return(pt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(n,r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",X(n,"POST","/v1/accounts:signInWithEmailLink",H(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ht(e,t){return vt.apply(this,arguments)}function vt(){return(vt=e(o)(e(m).mark((function t(n,r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",X(n,"POST","/v1/accounts:signInWithEmailLink",H(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt=function(t){"use strict";e(d)(r,t);var n=e(v)(r);function r(t,i,a){var o,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(s)(this,r),(o=n.call(this,"password",a))._email=t,o._password=i,o._tenantId=u,o}return e(u)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(o)(e(m).mark((function r(){var i,a,s;return e(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.t0=n.signInMethod,r.next="password"===r.t0?4:"emailLink"===r.t0?13:14;break;case 4:if(a={returnSecureToken:!0,email:n._email,password:n._password,clientType:"CLIENT_TYPE_WEB"},!(null===(i=t._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled)){r.next=12;break}return r.next=8,Qe(t,a,"signInWithPassword");case 8:return s=r.sent,r.abrupt("return",lt(t,s));case 12:return r.abrupt("return",lt(t,a).catch(function(){var n=e(o)(e(m).mark((function n(r){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("auth/missing-recaptcha-token"!==r.code){e.next=8;break}return console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow."),e.next=4,Qe(t,a,"signInWithPassword");case 4:return i=e.sent,e.abrupt("return",lt(t,i));case 8:return e.abrupt("return",Promise.reject(r));case 9:case"end":return e.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 13:return r.abrupt("return",dt(t,{email:n._email,oobCode:n._password}));case 14:N(t,"internal-error");case 15:case"end":return r.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(o)(e(m).mark((function i(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",ut(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",ht(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:N(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(st);function gt(e,t){return yt.apply(this,arguments)}function yt(){return(yt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(n,r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",X(n,"POST","/v1/accounts:signInWithIdp",H(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bt=function(t){"use strict";e(d)(r,t);var n=e(v)(r);function r(){var t;return e(s)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(u)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return gt(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,gt(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,gt(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,g.querystring)(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):N("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=(0,b.__rest)(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(st);function kt(e,t){return xt.apply(this,arguments)}function xt(){return(xt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(n,r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q(n,"POST","/v1/accounts:sendVerificationCode",H(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function wt(){return(wt=e(o)(e(m).mark((function t(n,r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",X(n,"POST","/v1/accounts:signInWithPhoneNumber",H(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function _t(){return(_t=e(o)(e(m).mark((function t(n,r){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X(n,"POST","/v1/accounts:signInWithPhoneNumber",H(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Z(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var It=e(c)({},"USER_NOT_FOUND","user-not-found");function Et(){return(Et=e(o)(e(m).mark((function t(n,r){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",X(n,"POST","/v1/accounts:signInWithPhoneNumber",H(n,i),It));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tt=function(t){"use strict";e(d)(r,t);var n=e(v)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this,"phone","phone")).params=t,i}return e(u)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return wt.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return _t.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Et.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(st);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St=function(){"use strict";function t(n){var r,i,a,o,u,c;e(s)(this,t);var l=(0,g.querystringDecode)((0,g.extractQuerystring)(n)),f=null!==(r=l.apiKey)&&void 0!==r?r:null,d=null!==(i=l.oobCode)&&void 0!==i?i:null,p=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=l.mode)&&void 0!==a?a:null);R(f&&d&&p,"argument-error"),this.apiKey=f,this.operation=p,this.code=d,this.continueUrl=null!==(o=l.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return e(u)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=(0,g.querystringDecode)((0,g.extractQuerystring)(e)).link,n=t?(0,g.querystringDecode)((0,g.extractQuerystring)(t)).deep_link_id:null,r=(0,g.querystringDecode)((0,g.extractQuerystring)(e)).deep_link_id;return(r?(0,g.querystringDecode)((0,g.extractQuerystring)(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Nt=function(){"use strict";function t(){e(s)(this,t),this.providerId=t.PROVIDER_ID}return e(u)(t,null,[{key:"credential",value:function(e,t){return mt._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=St.parseLink(t);return R(n,"argument-error"),mt._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();Nt.PROVIDER_ID="password",Nt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Nt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ct=function(){"use strict";function t(n){e(s)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(u)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),Ot=function(t){"use strict";e(d)(r,t);var n=e(v)(r);function r(){var t;return e(s)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(u)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(h)(this.scopes)}}]),r}(Ct),At=function(t){"use strict";e(d)(r,t);var n=e(v)(r);function r(){return e(s)(this,r),n.call(this,"facebook.com")}return e(u)(r,null,[{key:"credential",value:function(e){return bt._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Ot);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At.FACEBOOK_SIGN_IN_METHOD="facebook.com",At.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Rt=function(t){"use strict";e(d)(r,t);var n=e(v)(r);function r(){var t;return e(s)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(u)(r,null,[{key:"credential",value:function(e,t){return bt._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Ot);Rt.GOOGLE_SIGN_IN_METHOD="google.com",Rt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Lt=function(t){"use strict";e(d)(r,t);var n=e(v)(r);function r(){return e(s)(this,r),n.call(this,"github.com")}return e(u)(r,null,[{key:"credential",value:function(e){return bt._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(Ot);Lt.GITHUB_SIGN_IN_METHOD="github.com",Lt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Pt=function(t){"use strict";e(d)(r,t);var n=e(v)(r);function r(){return e(s)(this,r),n.call(this,"twitter.com")}return e(u)(r,null,[{key:"credential",value:function(e,t){return bt._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(Ot);function Dt(e,t){return Mt.apply(this,arguments)}function Mt(){return(Mt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(n,r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",X(n,"POST","/v1/accounts:signUp",H(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt.TWITTER_SIGN_IN_METHOD="twitter.com",Pt.PROVIDER_ID="twitter.com";var Ut=function(){"use strict";function t(n){e(s)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(u)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(o)(e(m).mark((function o(){var s,u,c;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,we._fromIdTokenResponse(n,i,a);case 2:return s=e.sent,u=jt(i),c=new t({user:s,providerId:u,_tokenResponse:i,operationType:r}),e.abrupt("return",c);case 6:case"end":return e.stop()}}),o)})))()}},{key:"_forOperation",value:function(n,r,i){return e(o)(e(m).mark((function a(){var o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(i,!0);case 2:return o=jt(i),e.abrupt("return",new t({user:n,providerId:o,_tokenResponse:i,operationType:r}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function jt(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Bt=function(t){"use strict";e(d)(r,t);var n=e(v)(r);function r(t,a,o,u){var c,l;return e(s)(this,r),(c=n.call(this,a.code,a.message)).operationType=o,c.user=u,Object.setPrototypeOf(e(i)(c),r.prototype),c.customData={appName:t.name,tenantId:null!==(l=t.tenantId)&&void 0!==l?l:void 0,_serverResponse:a.customData._serverResponse,operationType:o},c}return e(u)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(g.FirebaseError);function zt(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw Bt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(e,t){return Wt.apply(this,arguments)}function Wt(){return Wt=e(o)(e(m).mark((function t(n,r){var i,a,o=arguments;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=ue,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",Ut._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),t)}))),Wt.apply(this,arguments)}function Vt(e,t){return Ht.apply(this,arguments)}function Ht(){return Ht=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(n,r){var i,a,o,s,u,c,l=arguments;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=n.auth,o="reauthenticate",e.prev=3,e.next=6,ue(n,zt(a,o,r,n),i);case 6:return R((s=e.sent).idToken,a,"internal-error"),R(u=se(s.idToken),a,"internal-error"),c=u.sub,R(n.uid===c,a,"user-mismatch"),e.abrupt("return",Ut._forOperation(n,o,s));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&N(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),t,null,[[3,15]])}))),Ht.apply(this,arguments)}function qt(e,t){return Gt.apply(this,arguments)}function Gt(){return Gt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(n,r){var i,a,o,s,u=arguments;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,zt(n,a,r);case 4:return o=e.sent,e.next=7,Ut._fromIdTokenResponse(n,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)}))),Gt.apply(this,arguments)}function Kt(e,t){return Jt.apply(this,arguments)}function Jt(){return(Jt=e(o)(e(m).mark((function t(n,r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",qt(tt(n),r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Xt(e,t,n){return Yt.apply(this,arguments)}function Yt(){return Yt=e(o)(e(m).mark((function t(n,r,i){var a,s,u,c,l,f,d;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=tt(n),u={returnSecureToken:!0,email:r,password:i,clientType:"CLIENT_TYPE_WEB"},!(null===(a=s._getRecaptchaConfig())||void 0===a?void 0:a.emailPasswordEnabled)){t.next=11;break}return t.next=7,Qe(s,u,"signUpPassword");case 7:l=t.sent,c=Dt(s,l),t.next=12;break;case 11:c=Dt(s,u).catch(function(){var t=e(o)(e(m).mark((function t(n){var r;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("auth/missing-recaptcha-token"!==n.code){e.next=8;break}return console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow."),e.next=4,Qe(s,u,"signUpPassword");case 4:return r=e.sent,e.abrupt("return",Dt(s,r));case 8:return e.abrupt("return",Promise.reject(n));case 9:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 12:return t.next=14,c.catch((function(e){return Promise.reject(e)}));case 14:return f=t.sent,t.next=17,Ut._fromIdTokenResponse(s,"signIn",f);case 17:return d=t.sent,t.next=20,s._updateCurrentUser(d.user);case 20:return t.abrupt("return",d);case 21:case"end":return t.stop()}}),t)}))),Yt.apply(this,arguments)}function Qt(e,t,n){return Kt((0,g.getModularInstance)(e),Nt.credential(t,n))}function $t(e,t){return Zt.apply(this,arguments)}function Zt(){return(Zt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(n,r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q(n,"POST","/v1/accounts:createAuthUri",H(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function en(e,t){return tn.apply(this,arguments)}function tn(){return(tn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(n,r){var i,a,o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=M()?D():"http://localhost",a={identifier:r,continueUri:i},e.next=4,$t((0,g.getModularInstance)(n),a);case 4:return o=e.sent.signinMethods,e.abrupt("return",o||[]);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function nn(e,t){return rn.apply(this,arguments)}function rn(){return(rn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(n,r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",q(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function an(e,t){return on.apply(this,arguments)}function on(){return(on=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(n,r){var i,a,o,s,u,c,l;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.displayName,a=r.photoURL,void 0!==i||void 0!==a){e.next=3;break}return e.abrupt("return");case 3:return o=(0,g.getModularInstance)(n),e.next=6,o.getIdToken();case 6:return s=e.sent,u={idToken:s,displayName:i,photoUrl:a,returnSecureToken:!0},e.next=10,ue(o,nn(o.auth,u));case 10:return c=e.sent,o.displayName=c.displayName||null,o.photoURL=c.photoUrl||null,(l=o.providerData.find((function(e){return"password"===e.providerId})))&&(l.displayName=o.displayName,l.photoURL=o.photoURL),e.next=17,o._updateTokensIfNecessary(c);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function sn(e,t,n,r){return(0,g.getModularInstance)(e).onIdTokenChanged(t,n,r)}function un(e,t,n){return(0,g.getModularInstance)(e).beforeAuthStateChanged(t,n)}function cn(e,t,n,r){return(0,g.getModularInstance)(e).onAuthStateChanged(t,n,r)}function ln(e){return(0,g.getModularInstance)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fn(e,t){return q(e,"POST","/v2/accounts/mfaEnrollment:start",H(e,t))}function dn(e,t){return q(e,"POST","/v2/accounts/mfaEnrollment:finalize",H(e,t))}new WeakMap;var pn="__sak",hn=function(){"use strict";function t(n,r){e(s)(this,t),this.storageRetriever=n,this.type=r}return e(u)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(pn,"1"),this.storage.removeItem(pn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vn=function(t){"use strict";e(d)(r,t);var n=e(v)(r);function r(){var t,i;return e(s)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(Ae(i=(0,g.getUA)())||Ue(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=ze(),t._shouldAllowMigration=!0,t}return e(u)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);Be()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var i=this,a=this;return e(o)(e(m).mark((function o(){return e(m).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(l)(e(f)(r.prototype),"_set",i).call(a,t,n);case 2:a.localCache[t]=JSON.stringify(n);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(t){var n=this,i=this;return e(o)(e(m).mark((function a(){var o;return e(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(l)(e(f)(r.prototype),"_get",n).call(i,t);case 2:return o=a.sent,i.localCache[t]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var n=this,i=this;return e(o)(e(m).mark((function a(){return e(m).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(l)(e(f)(r.prototype),"_remove",n).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(hn);vn.type="LOCAL";var mn=vn,gn=function(t){"use strict";e(d)(r,t);var n=e(v)(r);function r(){return e(s)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(u)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(hn);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn.type="SESSION";var yn=gn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t){return Promise.all(t.map((n=e(o)(e(m).mark((function t(n){var r;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kn=function(){"use strict";function t(n){e(s)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(u)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(o)(e(m).mark((function r(){var i,a,s,u,c,l,f,d;return e(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a=(i=t).data,s=a.eventId,u=a.eventType,c=a.data,null==(l=n.handlersMap[u])?void 0:l.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:u}),f=Array.from(l).map(function(){var t=e(o)(e(m).mark((function t(n){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,c));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,bn(f);case 9:d=r.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:u,response:d});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xn(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn.receivers=[];var wn=function(){"use strict";function t(n){e(s)(this,t),this.target=n,this.handlers=new Set}return e(u)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(o)(e(m).mark((function a(){var o,s,u;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var c=xn("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);u={messageChannel:o,onMessage:function(t){var n=t;if(n.data.eventId===c)switch(n.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),e(n.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(u),o.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:t,eventId:c,data:n},[o.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return window}function In(e){_n().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){return void 0!==_n().WorkerGlobalScope&&"function"==typeof _n().importScripts}function Tn(){return Sn.apply(this,arguments)}function Sn(){return(Sn=e(o)(e(m).mark((function t(){var n;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Nn="firebaseLocalStorageDb",Cn="firebaseLocalStorage",On="fbase_key",An=function(){"use strict";function t(n){e(s)(this,t),this.request=n}return e(u)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function Rn(e,t){return e.transaction([Cn],t?"readwrite":"readonly").objectStore(Cn)}function Ln(){var e=indexedDB.deleteDatabase(Nn);return new An(e).toPromise()}function Pn(){var t=indexedDB.open(Nn,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(Cn,{keyPath:On})}catch(e){r(e)}})),t.addEventListener("success",e(o)(e(m).mark((function r(){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(Cn)){e.next=12;break}return i.close(),e.next=5,Ln();case 5:return e.t0=n,e.next=8,Pn();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(i);case 13:case"end":return e.stop()}}),r)}))))}))}function Dn(e,t,n){return Mn.apply(this,arguments)}function Mn(){return(Mn=e(o)(e(m).mark((function t(n,r,i){var a,o;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Rn(n,!0).put((a={},e(c)(a,On,r),e(c)(a,"value",i),a)),t.abrupt("return",new An(o).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Un(e,t){return jn.apply(this,arguments)}function jn(){return(jn=e(o)(e(m).mark((function t(n,r){var i,a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Rn(n,!1).get(r),e.next=3,new An(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Bn(e,t){var n=Rn(e,!0).delete(t);return new An(n).toPromise()}var zn=function(){"use strict";function t(){e(s)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(u)(t,[{key:"_openDb",value:function(){var t=this;return e(o)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,Pn();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(o)(e(m).mark((function r(){var i,a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(o)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",En()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(o)(e(m).mark((function n(){return e(m).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=kn._getInstance(En()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(o)(e(m).mark((function n(r,i){var a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(o)(e(m).mark((function t(n,r){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(o)(e(m).mark((function n(){var r,i,a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Tn();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new wn(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(o)(e(m).mark((function r(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(o)(e(m).mark((function t(){var n;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Pn();case 5:return n=e.sent,e.next=8,Dn(n,pn,"1");case 8:return e.next=10,Bn(n,pn);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(o)(e(m).mark((function r(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(o)(e(m).mark((function i(){return e(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(e(o)(e(m).mark((function i(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Dn(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(o)(e(m).mark((function r(){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Un(e,t)}));case 2:return i=e.sent,n.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(o)(e(m).mark((function r(){return e(m).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(o)(e(m).mark((function r(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Bn(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(o)(e(m).mark((function n(){var r,i,a,o,s,u,c,l,f,d,p,h,v,g,y,b,k;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=Rn(e,!1).getAll();return new An(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,u=void 0,e.prev=10,c=r[Symbol.iterator]();!(o=(l=c.next()).done);o=!0)f=l.value,d=f.fbase_key,p=f.value,a.add(d),JSON.stringify(t.localCache[d])!==JSON.stringify(p)&&(t.notifyListeners(d,p),i.push(d));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),s=!0,u=e.t0;case 18:e.prev=18,e.prev=19,o||null==c.return||c.return();case 21:if(e.prev=21,!s){e.next=24;break}throw u;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(h=!0,v=!1,g=void 0,e.prev=27,y=Object.keys(t.localCache)[Symbol.iterator]();!(h=(b=y.next()).done);h=!0)k=b.value,t.localCache[k]&&!a.has(k)&&(t.notifyListeners(k,null),i.push(k));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),v=!0,g=e.t1;case 35:e.prev=35,e.prev=36,h||null==y.return||y.return();case 38:if(e.prev=38,!v){e.next=41;break}throw g;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(o)(e(m).mark((function n(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();zn.type="LOCAL";var Fn=zn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(e,t){return q(e,"POST","/v2/accounts/mfaSignIn:start",H(e,t))}function Vn(e,t){return q(e,"POST","/v2/accounts/mfaSignIn:finalize",H(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ke("rcb"),new j(3e4,6e4);var Hn="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(e,t,n){return Gn.apply(this,arguments)}function Gn(){return(Gn=e(o)(e(m).mark((function t(n,r,i){var a,o,s,u,c,l,f,d;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,R("string"==typeof o,n,"argument-error"),R(i.type===Hn,n,"argument-error"),!("session"in(s="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return R("enroll"===u.type,n,"internal-error"),e.next=15,fn(n,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return R("signin"===u.type,n,"internal-error"),R(l=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,Wn(n,{mfaPendingCredential:u.credential,mfaEnrollmentId:l,phoneSignInInfo:{recaptchaToken:o}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,kt(n,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Kn=function(){"use strict";function t(n){e(s)(this,t),this.providerId=t.PROVIDER_ID,this.auth=tt(n)}return e(u)(t,[{key:"verifyPhoneNumber",value:function(e,t){return qn(this.auth,e,(0,g.getModularInstance)(t))}}],[{key:"credential",value:function(e,t){return Tt._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?Tt._fromTokenResponse(n,r):null}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jn(e,t){return t?Ie(t):(R(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kn.PROVIDER_ID="phone",Kn.PHONE_SIGN_IN_METHOD="phone";var Xn=function(t){"use strict";e(d)(r,t);var n=e(v)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this,"custom","custom")).params=t,i}return e(u)(r,[{key:"_getIdTokenResponse",value:function(e){return gt(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return gt(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return gt(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(st);function Yn(e){return qt(e.auth,new Xn(e),e.bypassAuthState)}function Qn(e){var t=e.auth,n=e.user;return R(n,t,"internal-error"),Vt(n,new Xn(e),e.bypassAuthState)}function $n(e){return Zn.apply(this,arguments)}function Zn(){return(Zn=e(o)(e(m).mark((function t(n){var r,i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,R(i=n.user,r,"internal-error"),e.abrupt("return",Ft(i,new Xn(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var er=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(s)(this,t),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(u)(t,[{key:"execute",value:function(){var t,n=this;return new Promise((t=e(o)(e(m).mark((function t(r,i){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,n){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var n=this;return e(o)(e(m).mark((function r(){var i,a,o,s,u,c,l;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,o=t.postBody,s=t.tenantId,u=t.error,c=t.type,!u){e.next=4;break}return n.reject(u),e.abrupt("return");case 4:return l={auth:n.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(c)(l);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yn;case"linkViaPopup":case"linkViaRedirect":return $n;case"reauthViaPopup":case"reauthViaRedirect":return Qn;default:N(this.auth,"internal-error")}}},{key:"resolve",value:function(e){P(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){P(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),tr=new j(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nr=function(t){"use strict";e(d)(r,t);var n=e(v)(r);function r(t,a,o,u,c){var l;return e(s)(this,r),(l=n.call(this,t,a,u,c)).provider=o,l.authWindow=null,l.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(i)(l),l}return e(u)(r,[{key:"executeNotNull",value:function(){var t=this;return e(o)(e(m).mark((function n(){var r;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return R(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(o)(e(m).mark((function n(){var r;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(1===t.filter.length,"Popup operations only handle one event"),r=xn(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(C(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(C(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(C(i.auth,"popup-closed-by-user"))}),8e3)}else e.pollId=window.setTimeout(t,tr.get())};t()}}]),r}(er);nr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var rr=new Map,ir=function(t){"use strict";e(d)(r,t);var n=e(v)(r);function r(t,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(s)(this,r),(a=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return e(u)(r,[{key:"execute",value:function(){var t=this,n=this;return e(o)(e(m).mark((function i(){var a,o;return e(m).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=rr.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,ar(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(l)(e(f)(r.prototype),"execute",t).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:rr.set(n.auth._key(),a);case 21:return n.bypassAuthState||rr.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,i=this,a=function(){return e(l)(e(f)(r.prototype),"onAuthEvent",n)};return e(o)(e(m).mark((function n(){var r;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",a().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return i.user=r,e.abrupt("return",a().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(o)(e(m).mark((function t(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(er);function ar(e,t){return or.apply(this,arguments)}function or(){return(or=e(o)(e(m).mark((function t(n,r){var i,a,o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=cr(r),a=ur(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function sr(e,t){rr.set(e._key(),t)}function ur(e){return Ie(e._redirectPersistence)}function cr(e){return Se("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(e,t){return fr.apply(this,arguments)}function fr(){return fr=e(o)(e(m).mark((function t(n,r){var i,a,o,s,u,c=arguments;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a=tt(n),o=Jn(a,r),s=new ir(a,o,i),e.next=6,s.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),t)}))),fr.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var dr=function(){"use strict";function t(n){e(s)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(u)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hr(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!hr(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(C(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(pr(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(pr(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function pr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function hr(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function vr(e){return mr.apply(this,arguments)}function mr(){return mr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(o)(e(m).mark((function t(n){var r,i=arguments;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",q(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),mr.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yr=/^https?/;function br(){return(br=e(o)(e(m).mark((function t(n){var r,i,a,o,s,u,c;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,vr(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=r[Symbol.iterator]();case 8:if(i=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!kr(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:N(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function kr(e){var t=D(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!yr.test(r))return!1;if(gr.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xr=new j(3e4,6e4);function wr(){var t=_n().___jsl,n=!0,r=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,o=Object.keys(t.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(h)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var _r=null;function Ir(e){return _r=_r||function(e){return new Promise((function(t,n){var r,i,a;function o(){wr(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){wr(),n(C(e,"network-request-failed"))},timeout:xr.get()})}if(null===(i=null===(r=_n().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=_n().gapi)||void 0===a?void 0:a.load)){var s=Ke("iframefcb");return _n()[s]=function(){gapi.load?o():n(C(e,"network-request-failed"))},Ge("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw _r=null,e}))}(e),_r}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Er=new j(5e3,15e3),Tr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nr(e){var t=e.config;R(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?B(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:y.SDK_VERSION},i=Sr.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat((0,g.querystring)(r).slice(1))}function Cr(e){return Or.apply(this,arguments)}function Or(){return Or=e(o)(e(m).mark((function t(n){var r,i;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ir(n);case 2:return r=t.sent,R(i=_n().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:Nr(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tr,dontclear:!0},(function(t){return new Promise((r=e(o)(e(m).mark((function r(i,a){var o,s,u;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(){_n().clearTimeout(s),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:o=C(n,"network-request-failed"),s=_n().setTimeout((function(){a(o)}),Er.get()),t.ping(u).then(u,(function(){a(o)}));case 7:case"end":return e.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return t.stop()}}),t)}))),Or.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ar={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Rr="_blank",Lr="http://localhost",Pr=function(){"use strict";function t(n){e(s)(this,t),this.window=n,this.associatedEvent=null}return e(u)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function Dr(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Ar),{width:i.toString(),height:a.toString(),top:o,left:s}),l=(0,g.getUA)().toLowerCase();r&&(u=Re(l)?Rr:r),Oe(l)&&(n=n||Lr,c.scrollbars="yes");var f=Object.entries(c).reduce((function(t,n){var r=e(p)(n,2),i=r[0],a=r[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(je(l)&&"_self"!==u)return Mr(n||"",u),new Pr(null);var d=window.open(n||"",u,f);R(d,t,"popup-blocked");try{d.focus()}catch(e){}return new Pr(d)}function Mr(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ur=encodeURIComponent("fac");function jr(e,t,n,r,i,a){return Br.apply(this,arguments)}function Br(){return(Br=e(o)(e(m).mark((function t(n,r,i,a,o,s){var u,c,l,f,d,h,v,b,k,x,w,_,I,E,T,S,N,C,O;return e(m).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(R(n.config.authDomain,n,"auth-domain-config-required"),R(n.config.apiKey,n,"invalid-api-key"),u={apiKey:n.config.apiKey,appName:n.name,authType:i,redirectUrl:a,v:y.SDK_VERSION,eventId:o},!(r instanceof Ct)){t.next=24;break}for(r.setDefaultLanguage(n.languageCode),u.providerId=r.providerId||"",(0,g.isEmpty)(r.getCustomParameters())||(u.customParameters=JSON.stringify(r.getCustomParameters())),c=!0,l=!1,f=void 0,t.prev=8,d=Object.entries(s||{})[Symbol.iterator]();!(c=(h=d.next()).done);c=!0)v=e(p)(h.value,2),b=v[0],k=v[1],u[b]=k;t.next=16;break;case 12:t.prev=12,t.t0=t.catch(8),l=!0,f=t.t0;case 16:t.prev=16,t.prev=17,c||null==d.return||d.return();case 19:if(t.prev=19,!l){t.next=22;break}throw f;case 22:return t.finish(19);case 23:return t.finish(16);case 24:for(r instanceof Ot&&(x=r.getScopes().filter((function(e){return""!==e}))).length>0&&(u.scopes=x.join(",")),n.tenantId&&(u.tid=n.tenantId),w=u,_=!0,I=!1,E=void 0,t.prev=28,T=Object.keys(w)[Symbol.iterator]();!(_=(S=T.next()).done);_=!0)N=S.value,void 0===w[N]&&delete w[N];t.next=36;break;case 32:t.prev=32,t.t1=t.catch(28),I=!0,E=t.t1;case 36:t.prev=36,t.prev=37,_||null==T.return||T.return();case 39:if(t.prev=39,!I){t.next=42;break}throw E;case 42:return t.finish(39);case 43:return t.finish(36);case 44:return t.next=46,n._getAppCheckToken();case 46:return C=t.sent,O=C?"#".concat(Ur,"=").concat(encodeURIComponent(C)):"",t.abrupt("return","".concat(zr(n),"?").concat((0,g.querystring)(w).slice(1)).concat(O));case 49:case"end":return t.stop()}}),t,null,[[8,12,16,24],[17,,19,23],[28,32,36,44],[37,,39,43]])})))).apply(this,arguments)}function zr(e){var t=e.config;return t.emulator?B(t,"emulator/auth/handler"):"https://".concat(t.authDomain,"/").concat("__/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fr="webStorageSupport",Wr=function(){"use strict";function t(){e(s)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yn,this._completeRedirectFn=lr,this._overrideRedirectResult=sr}return e(u)(t,[{key:"_openPopup",value:function(t,n,r,i){var a=this;return e(o)(e(m).mark((function o(){var s,u;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(null===(s=a.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),e.next=4,jr(t,n,r,D(),i);case 4:return u=e.sent,e.abrupt("return",Dr(t,u,xn()));case 6:case"end":return e.stop()}}),o)})))()}},{key:"_openRedirect",value:function(t,n,r,i){var a=this;return e(o)(e(m).mark((function o(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a._originValidation(t);case 2:return e.next=4,jr(t,n,r,D(),i);case 4:return In(e.sent),e.abrupt("return",new Promise((function(){})));case 7:case"end":return e.stop()}}),o)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(P(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(t){var n=this;return e(o)(e(m).mark((function r(){var i,a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Cr(t);case 2:return i=e.sent,a=new dr(t),i.register("authEvent",(function(e){return R(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:a},n.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Fr,{type:Fr},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),N(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return br.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return ze()||Ae()||Ue()}}]),t}(),Vr=Wr,Hr=function(){"use strict";function t(n){e(s)(this,t),this.factorId=n}return e(u)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return L("unexpected MultiFactorSessionType")}}}]),t}(),qr=function(t){"use strict";e(d)(r,t);var n=e(v)(r);function r(t){var i;return e(s)(this,r),(i=n.call(this,"phone")).credential=t,i}return e(u)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return q(e,"POST","/v2/accounts/mfaEnrollment:finalize",H(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return q(e,"POST","/v2/accounts/mfaSignIn:finalize",H(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(Hr);(function(){"use strict";function t(){e(s)(this,t)}return e(u)(t,null,[{key:"assertion",value:function(e){return qr._fromCredential(e)}}]),t}()).FACTOR_ID="phone",(function(){"use strict";function t(){e(s)(this,t)}return e(u)(t,null,[{key:"assertionForEnrollment",value:function(e,t){return Gr._fromSecret(e,t)}},{key:"assertionForSignIn",value:function(e,t){return Gr._fromEnrollmentId(e,t)}},{key:"generateSecret",value:function(t){return e(o)(e(m).mark((function n(){var r,i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(void 0!==(r=t).auth,"internal-error"),e.next=4,n=r.auth,a={idToken:r.credential,totpEnrollmentInfo:{}},q(n,"POST","/v2/accounts/mfaEnrollment:start",H(n,a));case 4:return i=e.sent,e.abrupt("return",Kr._fromStartTotpMfaEnrollmentResponse(i,r.auth));case 6:case"end":return e.stop()}var n,a}),n)})))()}}]),t}()).FACTOR_ID="totp";var Gr=function(t){"use strict";e(d)(r,t);var n=e(v)(r);function r(t,i,a){var o;return e(s)(this,r),(o=n.call(this,"totp")).otp=t,o.enrollmentId=i,o.secret=a,o}return e(u)(r,[{key:"_finalizeEnroll",value:function(t,n,r){var i=this;return e(o)(e(m).mark((function a(){return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(void 0!==i.secret,t,"argument-error"),e.abrupt("return",dn(t,{idToken:n,displayName:r,totpVerificationInfo:i.secret._makeTotpVerificationInfo(i.otp)}));case 2:case"end":return e.stop()}}),a)})))()}},{key:"_finalizeSignIn",value:function(t,n){var r=this;return e(o)(e(m).mark((function i(){var a;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(void 0!==r.enrollmentId&&void 0!==r.otp,t,"argument-error"),a={verificationCode:r.otp},e.abrupt("return",Vn(t,{mfaPendingCredential:n,mfaEnrollmentId:r.enrollmentId,totpVerificationInfo:a}));case 3:case"end":return e.stop()}}),i)})))()}}],[{key:"_fromSecret",value:function(e,t){return new r(t,void 0,e)}},{key:"_fromEnrollmentId",value:function(e,t){return new r(t,e)}}]),r}(Hr),Kr=function(){"use strict";function t(n,r,i,a,o,u,c){e(s)(this,t),this.sessionInfo=u,this.auth=c,this.secretKey=n,this.hashingAlgorithm=r,this.codeLength=i,this.codeIntervalSeconds=a,this.enrollmentCompletionDeadline=o}return e(u)(t,[{key:"_makeTotpVerificationInfo",value:function(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}},{key:"generateQrCodeUrl",value:function(e,t){var n,r=!1;return(Jr(e)||Jr(t))&&(r=!0),r&&(Jr(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Jr(t)&&(t=this.auth.name)),"otpauth://totp/".concat(t,":").concat(e,"?secret=").concat(this.secretKey,"&issuer=").concat(t,"&algorithm=").concat(this.hashingAlgorithm,"&digits=").concat(this.codeLength)}}],[{key:"_fromStartTotpMfaEnrollmentResponse",value:function(e,n){return new t(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}}]),t}();function Jr(e){return void 0===e||0===(null==e?void 0:e.length)}var Xr="@firebase/auth",Yr="0.23.2",Qr=function(){"use strict";function t(n){e(s)(this,t),this.auth=n,this.internalListeners=new Map}return e(u)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(o)(e(m).mark((function r(){var i;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var $r,Zr=(0,g.getExperimentalSetting)("authIdTokenMaxAge")||300,ei=null,ti=function(t){return n=e(o)(e(m).mark((function n(r){var i,a,o;return e(m).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r,!e.t0){e.next=5;break}return e.next=4,r.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(i=e.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>Zr)){e.next=9;break}return e.abrupt("return");case 9:if(o=null==i?void 0:i.token,ei!==o){e.next=12;break}return e.abrupt("return");case 12:return ei=o,e.next=15,fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:"Bearer ".concat(o)}:{}});case 15:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)};var n};function ni(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,y.getApp)(),t=(0,y._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();var n=rt(e,{popupRedirectResolver:Vr,persistence:[Fn,mn,yn]}),r=(0,g.getExperimentalSetting)("authTokenSyncURL");if(r){var i=ti(r);un(n,i,(function(){return i(n.currentUser)})),sn(n,(function(e){return i(e)}))}var a=(0,g.getDefaultEmulatorHost)("auth");return a&&it(n,"http://".concat(a)),n}$r="Browser",(0,y._registerComponent)(new(0,x.Component)("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),o=r.options,s=o.apiKey,u=o.authDomain;R(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});var c={apiKey:s,authDomain:u,clientPlatform:$r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fe($r)},l=new et(r,i,a,c);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ie);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,n),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),(0,y._registerComponent)(new(0,x.Component)("auth-internal",(function(e){var t=tt(e.getProvider("auth").getImmediate());return new Qr(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,y.registerVersion)(Xr,Yr,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}($r)),(0,y.registerVersion)(Xr,Yr,"esm2017")})),a.register("jh8P3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){return i(e,t,n)};var n,r=(n=a("2mz0K"))&&n.__esModule?n:{default:n};function i(e,t,n){return(i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var i=r.default(e,t);if(i){var a=Object.getOwnPropertyDescriptor(i,t);return a.get?a.get.call(n||e):a.value}})(e,t,n)}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=a("fVNic"))&&n.__esModule?n:{default:n}})),a.register("4tSb9",(function(e,n){t(e.exports,"__rest",(function(){return r}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create})),a.register("h6c0i",(function(e,t){var r,i;r=void 0!==n?n:"undefined"!=typeof window?window:e.exports,i=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n="Success",r="Failure",i="Warning",a="Info",o={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},u=function(t){return t||(t="head"),null!==e.document[t]||(s('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=c(e[r],n[r]):e[r]=n[r])};n<arguments.length;n++)r(arguments[n]);return e},l=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},f=0,d=function(s,l,d,h){if(!u("body"))return!1;t||p.Notify.init({});var v=c(!0,t,{});if("object"==typeof d&&!Array.isArray(d)||"object"==typeof h&&!Array.isArray(h)){var m={};"object"==typeof d?m=d:"object"==typeof h&&(m=h),t=c(!0,t,m)}var g,y,b=t[s.toLocaleLowerCase("en")];f++,"string"!=typeof l&&(l="Notiflix "+s),t.plainText&&(g=l,(y=e.document.createElement("div")).innerHTML=g,l=y.textContent||y.innerText||""),!t.plainText&&l.length>t.messageMaxLength&&(t=c(!0,t,{closeButton:!0,messageMaxLength:150}),l='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),l.length>t.messageMaxLength&&(l=l.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(b.fontAwesomeIconColor=b.background),t.cssAnimation||(t.cssAnimationDuration=0);var k=e.document.getElementById(o.wrapID)||e.document.createElement("div");if(k.id=o.wrapID,k.style.width=t.width,k.style.zIndex=t.zindex,k.style.opacity=t.opacity,"center-center"===t.position?(k.style.left=t.distance,k.style.top=t.distance,k.style.right=t.distance,k.style.bottom=t.distance,k.style.margin="auto",k.classList.add("nx-flex-center-center"),k.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",k.style.display="flex",k.style.flexWrap="wrap",k.style.flexDirection="column",k.style.justifyContent="center",k.style.alignItems="center",k.style.pointerEvents="none"):"center-top"===t.position?(k.style.left=t.distance,k.style.right=t.distance,k.style.top=t.distance,k.style.bottom="auto",k.style.margin="auto"):"center-bottom"===t.position?(k.style.left=t.distance,k.style.right=t.distance,k.style.bottom=t.distance,k.style.top="auto",k.style.margin="auto"):"right-bottom"===t.position?(k.style.right=t.distance,k.style.bottom=t.distance,k.style.top="auto",k.style.left="auto"):"left-top"===t.position?(k.style.left=t.distance,k.style.top=t.distance,k.style.right="auto",k.style.bottom="auto"):"left-bottom"===t.position?(k.style.left=t.distance,k.style.bottom=t.distance,k.style.top="auto",k.style.right="auto"):(k.style.right=t.distance,k.style.top=t.distance,k.style.left="auto",k.style.bottom="auto"),t.backOverlay){var x=e.document.getElementById(o.overlayID)||e.document.createElement("div");x.id=o.overlayID,x.style.width="100%",x.style.height="100%",x.style.position="fixed",x.style.zIndex=t.zindex-1,x.style.left=0,x.style.top=0,x.style.right=0,x.style.bottom=0,x.style.background=b.backOverlayColor||t.backOverlayColor,x.className=t.cssAnimation?"nx-with-animation":"",x.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(o.overlayID)||e.document.body.appendChild(x)}e.document.getElementById(o.wrapID)||e.document.body.appendChild(k);var w=e.document.createElement("div");w.id=t.ID+"-"+f,w.className=t.className+" "+b.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof d?"nx-with-close-button":"")+" "+("function"==typeof d?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),w.style.fontSize=t.fontSize,w.style.color=b.textColor,w.style.background=b.background,w.style.borderRadius=t.borderRadius,w.style.pointerEvents="all",t.rtl&&(w.setAttribute("dir","rtl"),w.classList.add("nx-rtl-on")),w.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',t.cssAnimation&&(w.style.animationDuration=t.cssAnimationDuration+"ms");var _="";if(t.closeButton&&"function"!=typeof d&&(_='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+b.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)w.innerHTML='<i style="color:'+b.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+b.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?_:"");else{var I="";s===n?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':s===r?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':s===i?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':s===a&&(I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+b.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),w.innerHTML=I+'<span class="nx-message nx-with-icon">'+l+"</span>"+(t.closeButton?_:"")}else w.innerHTML='<span class="nx-message">'+l+"</span>"+(t.closeButton?_:"");if("left-bottom"===t.position||"right-bottom"===t.position){var E=e.document.getElementById(o.wrapID);E.insertBefore(w,E.firstChild)}else e.document.getElementById(o.wrapID).appendChild(w);var T=e.document.getElementById(w.id);if(T){var S,N,C=function(){T.classList.add("nx-remove");var t=e.document.getElementById(o.overlayID);t&&k.childElementCount<=0&&t.classList.add("nx-remove"),clearTimeout(S)},O=function(){if(T&&null!==T.parentNode&&T.parentNode.removeChild(T),k.childElementCount<=0&&null!==k.parentNode){k.parentNode.removeChild(k);var t=e.document.getElementById(o.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(N)};if(t.closeButton&&"function"!=typeof d&&e.document.getElementById(w.id).querySelector("span.nx-close-button").addEventListener("click",(function(){C();var e=setTimeout((function(){O(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof d||t.clickToClose)&&T.addEventListener("click",(function(){"function"==typeof d&&d(),C();var e=setTimeout((function(){O(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof d){var A=function(){S=setTimeout((function(){C()}),t.timeout),N=setTimeout((function(){O()}),t.timeout+t.cssAnimationDuration)};A(),t.pauseOnHover&&(T.addEventListener("mouseenter",(function(){T.classList.add("nx-paused"),clearTimeout(S),clearTimeout(N)})),T.addEventListener("mouseleave",(function(){T.classList.remove("nx-paused"),A()})))}}if(t.showOnlyTheLastOne&&f>0)for(var R=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+f+"])"),L=0;L<R.length;L++){var P=R[L];null!==P.parentNode&&P.parentNode.removeChild(P)}t=c(!0,t,v)},p={Notify:{init:function(n){t=c(!0,o,n),function(t,n){if(!u("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}}(l,"NotiflixNotifyInternalCSS")},merge:function(e){if(!t)return s("You have to initialize the Notify module before call Merge function."),!1;t=c(!0,t,e)},success:function(e,t,r){d(n,e,t,r)},failure:function(e,t,n){d(r,e,t,n)},warning:function(e,t,n){d(i,e,t,n)},info:function(e,t,n){d(a,e,t,n)}}};return"object"==typeof e.Notiflix?c(!0,e.Notiflix,{Notify:p.Notify}):{Notify:p.Notify}},"function"==typeof define&&define.amd?define([],(function(){return i(r)})):"object"==typeof e.exports?e.exports=i(r):r.Notiflix=i(r)})),a.register("7rQOT",(function(e,t){var r,i;r=void 0!==n?n:"undefined"!=typeof window?window:e.exports,i=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n="Standard",r="Hourglass",i="Circle",a="Arrows",o="Dots",s="Pulse",u="Custom",c="Notiflix",l={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},f=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+"\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation")},d=function(t){return t||(t="head"),null!==e.document[t]||(f('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},p=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var r=function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=p(e[r],n[r]):e[r]=n[r])};n<arguments.length;n++)r(arguments[n]);return e},h=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},v=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},m=function(c,v,m,y,b){if(!d("body"))return!1;t||g.Loading.init({});var k=p(!0,t,{});if("object"==typeof v&&!Array.isArray(v)||"object"==typeof m&&!Array.isArray(m)){var x={};"object"==typeof v?x=v:"object"==typeof m&&(x=m),t=p(!0,t,x)}var w,_,I="";if("string"==typeof v&&v.length>0&&(I=v),y){var E="";(I=I.length>t.messageMaxLength?h(I).toString().substring(0,t.messageMaxLength)+"...":h(I).toString()).length>0&&(E='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+I+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var T="";if(c===n)w=t.svgSize,_=t.svgColor,w||(w="60px"),_||(_="#32c682"),T='<svg xmlns="http://www.w3.org/2000/svg" stroke="'+_+'" width="'+w+'" height="'+w+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';else if(c===r)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'}(t.svgSize,t.svgColor);else if(c===i)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'}(t.svgSize,t.svgColor);else if(c===a)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'}(t.svgSize,t.svgColor);else if(c===o)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===s)T=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'}(t.svgSize,t.svgColor);else if(c===u&&null!==t.customSvgCode&&null===t.customSvgUrl)T=t.customSvgCode||"";else if(c===u&&null!==t.customSvgUrl&&null===t.customSvgCode)T='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(c===u&&(null===t.customSvgUrl||null===t.customSvgCode))return f('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;T=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(t.svgSize,"#f8f8f8","#32c682")}var S=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),N=e.innerWidth,C=S>=N?N-40+"px":S+"px",O='<div style="width:'+C+"; height:"+C+';" class="'+t.className+"-icon"+(I.length>0?" nx-with-message":"")+'">'+T+"</div>",A=e.document.createElement("div");A.id=l.ID,A.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),A.style.zIndex=t.zindex,A.style.background=t.backgroundColor,A.style.animationDuration=t.cssAnimationDuration+"ms",A.style.fontFamily='"'+t.fontFamily+'", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',A.style.display="flex",A.style.flexWrap="wrap",A.style.flexDirection="column",A.style.alignItems="center",A.style.justifyContent="center",t.rtl&&(A.setAttribute("dir","rtl"),A.classList.add("nx-rtl-on")),A.innerHTML=O+E,e.document.getElementById(A.id)||(e.document.body.appendChild(A),t.clickToClose&&e.document.getElementById(A.id).addEventListener("click",(function(){A.classList.add("nx-remove");var e=setTimeout((function(){null!==A.parentNode&&(A.parentNode.removeChild(A),clearTimeout(e))}),t.cssAnimationDuration)})))}else if(e.document.getElementById(l.ID))var R=e.document.getElementById(l.ID),L=setTimeout((function(){R.classList.add("nx-remove");var e=setTimeout((function(){null!==R.parentNode&&(R.parentNode.removeChild(R),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(L)}),b);t=p(!0,t,k)},g={Loading:{init:function(n){t=p(!0,l,n),function(t,n){if(!d("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var r=e.document.createElement("style");r.id=n,r.innerHTML=t(),e.document.head.appendChild(r)}}(v,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return f("You have to initialize the Loading module before call Merge function."),!1;t=p(!0,t,e)},standard:function(e,t){m(n,e,t,!0,0)},hourglass:function(e,t){m(r,e,t,!0,0)},circle:function(e,t){m(i,e,t,!0,0)},arrows:function(e,t){m(a,e,t,!0,0)},dots:function(e,t){m(o,e,t,!0,0)},pulse:function(e,t){m(s,e,t,!0,0)},custom:function(e,t){m(u,e,t,!0,0)},notiflix:function(e,t){m(c,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),m(null,null,null,!1,e)},change:function(n){!function(n){"string"!=typeof n&&(n="");var r=e.document.getElementById(l.ID);if(r)if(n.length>0){n=n.length>t.messageMaxLength?h(n).substring(0,t.messageMaxLength)+"...":h(n);var i=r.getElementsByTagName("p")[0];if(i)i.innerHTML=n;else{var a=e.document.createElement("p");a.id=t.messageID,a.className="nx-loading-message nx-loading-message-new",a.style.color=t.messageColor,a.style.fontSize=t.messageFontSize,a.innerHTML=n,r.appendChild(a)}}else f("Where is the new message?")}(n)}}};return"object"==typeof e.Notiflix?p(!0,e.Notiflix,{Loading:g.Loading}):{Loading:g.Loading}},"function"==typeof define&&define.amd?define([],(function(){return i(r)})):"object"==typeof e.exports?e.exports=i(r):r.Notiflix=i(r)})),a("euqRf")}();
//# sourceMappingURL=shopping-list.c63e3d73.js.map
