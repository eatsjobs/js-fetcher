!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("JsFetcher",[],e):"object"==typeof exports?exports.JsFetcher=e():t.JsFetcher=e()}(window,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){"use strict";(function(e){
/*!
Copyright (C) 2015-2017 Andrea Giammarchi - @WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
function n(t){var e,n,o,i,u,c,a=Object.create(null);if(this[l]=a,t)if("string"==typeof t)for("?"===t.charAt(0)&&(t=t.slice(1)),u=0,c=(i=t.split("&")).length;u<c;u++)-1<(e=(o=i[u]).indexOf("="))?f(a,h(o.slice(0,e)),h(o.slice(e+1))):o.length&&f(a,h(o),"");else if(r(t))for(u=0,c=t.length;u<c;u++)f(a,(o=t[u])[0],o[1]);else if(t.forEach)t.forEach(s,a);else for(n in t)f(a,n,t[n])}var r=Array.isArray,o=n.prototype,i=/[!'\(\)~]|%20|%00/g,u=/\+/g,c={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},a=function(t){return c[t]},l="__URLSearchParams__:"+Math.random();function s(t,e){f(this,e,t)}function f(t,e,n){var o=r(n)?n.join(","):n;e in t?t[e].push(o):t[e]=[o]}function h(t){return decodeURIComponent(t.replace(u," "))}function d(t){return encodeURIComponent(t).replace(i,a)}o.append=function(t,e){f(this[l],t,e)},o.delete=function(t){delete this[l][t]},o.get=function(t){var e=this[l];return t in e?e[t][0]:null},o.getAll=function(t){var e=this[l];return t in e?e[t].slice(0):[]},o.has=function(t){return t in this[l]},o.set=function(t,e){this[l][t]=[""+e]},o.forEach=function(t,e){var n=this[l];Object.getOwnPropertyNames(n).forEach(function(r){n[r].forEach(function(n){t.call(e,n,r,this)},this)},this)},o.toJSON=function(){return{}},o.toString=function(){var t,e,n,r,o=this[l],i=[];for(e in o)for(n=d(e),t=0,r=o[e];t<r.length;t++)i.push(n+"="+d(r[t]));return i.join("&")},function(t){var e=function(){try{return!!Symbol.iterator}catch(t){return!1}}();"forEach"in t||(t.forEach=function(t,e){var n=Object.create(null);this.toString().replace(/=[\s\S]*?(?:&|$)/g,"=").split("=").forEach(function(r){!r.length||r in n||(n[r]=this.getAll(r)).forEach(function(n){t.call(e,n,r,this)},this)},this)}),"keys"in t||(t.keys=function(){var t=[];this.forEach(function(e,n){t.push(n)});var n={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e&&(n[Symbol.iterator]=function(){return n}),n}),"values"in t||(t.values=function(){var t=[];this.forEach(function(e){t.push(e)});var n={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e&&(n[Symbol.iterator]=function(){return n}),n}),"entries"in t||(t.entries=function(){var t=[];this.forEach(function(e,n){t.push([n,e])});var n={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return e&&(n[Symbol.iterator]=function(){return n}),n}),!e||Symbol.iterator in t||(t[Symbol.iterator]=t.entries),"sort"in t||(t.sort=function(){for(var t,e,n,r=this.entries(),o=r.next(),i=o.done,u=[],c=Object.create(null);!i;)e=(n=o.value)[0],u.push(e),e in c||(c[e]=[]),c[e].push(n[1]),i=(o=r.next()).done;for(u.sort(),t=0;t<u.length;t++)this.delete(u[t]);for(t=0;t<u.length;t++)e=u[t],this.append(e,c[e].shift())})}((n=t.exports=e.URLSearchParams||n).prototype)}).call(this,n(3))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),u=n.n(i),c=n(2),a=n.n(c);function l(t){return t.json()}function s(t){return/(https?)?:?\/\//g.test(t)}function f(t,e){var n=t.split("?"),r=n[0],o=n.length>0?n[1]:"",i=new a.a(o);return Object.keys(e).forEach(function(t){i.set(t,e[t])}),"".concat(r,"?").concat(i.toString())}var h=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.baseURL,r=void 0===n?window.location.origin:n,i=e.options,u=void 0===i?{}:i,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;o()(this,t),this.baseURL=r,this.options=u,this.tokenGenerator=c,this.normalizeURL=this.normalizeURL.bind(this),this.refreshToken=this.refreshToken.bind(this)}return u()(t,[{key:"setTokenGenerator",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t&&"function"==typeof t.generate?this.tokenGenerator=t:this.tokenGenerator=null}},{key:"normalizeURL",value:function(t){if(!t)throw new Error("Not valid url given");return s(t)?t:this.baseURL+t}},{key:"performFetch",value:function(t,e,n,r){var o=this,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];return this.refreshToken().then(function(){return fetch(o.normalizeURL(f(t,e)),Object.assign({},o.options,n,{method:r}))}).then(function(t){return i?l(t):t})}},{key:"get",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return this.performFetch(t,e,n,"GET",r)}},{key:"post",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return this.performFetch(t,e,n,"POST",r)}},{key:"head",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return this.performFetch(t,e,n,"HEAD",r)}},{key:"put",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return this.performFetch(t,e,n,"PUT",r)}},{key:"delete",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return this.performFetch(t,e,n,"DELETE",r)}},{key:"refreshToken",value:function(){var t=this;return this.tokenGenerator?this.tokenGenerator.generate().then(function(e){e?t.options.headers.Authorization="Bearer ".concat(e):delete t.options.headers.Authorization}).catch(function(){return delete t.options.headers.Authorization,Promise.resolve()}):Promise.resolve()}}]),t}(),d=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.url,r=void 0===n?window.location.origin:n,i=e.clientId,u=e.clientSecret;o()(this,t),this.currentCall=null,this.expire=Date.now()-1e3,this.token=null,this.url=r,Object.defineProperty(this,"clientId",{value:i,writable:!1,enumerable:!1,configurable:!1}),Object.defineProperty(this,"clientSecret",{value:u,writable:!1,enumerable:!1,configurable:!1}),this.isExpired=this.isExpired.bind(this)}return u()(t,[{key:"isExpired",value:function(){return Date.now()>=this.expire}},{key:"generate",value:function(){var t=this;return this.isExpired()?this.currentCall?this.currentCall:(this.currentCall=fetch(this.url,{method:"POST",credentials:"include",headers:{"content-type":"application/x-www-form-urlencoded"},body:"k=".concat(this.clientId,"&s=").concat(this.clientSecret)}).then(function(t){return t.json()}).then(function(e){return e.token?(t.currentCall=null,t.token=e.token,t.expire=e.expire,t.token):null}).catch(function(e){throw t.currentCall=null,e}),this.currentCall):Promise.resolve(this.token)}}]),t}();n.d(e,"Fetcher",function(){return v}),n.d(e,"TokenGenerator",function(){return d}),n.d(e,"parseResponse",function(){return l}),n.d(e,"isAbsoluteUrl",function(){return s}),n.d(e,"compose",function(){return f});e.default=h;var v=h}])});
//# sourceMappingURL=index.js.map