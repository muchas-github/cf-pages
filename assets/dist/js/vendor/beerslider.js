!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.BeerSlider=e():t.BeerSlider=e()}(window,function(){return n=[function(t,e){t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")()},function(t,e,n){var r=n(11)("wks"),o=n(33),i=n(0).Symbol,c=n(54);t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object!");return t}},function(t,e,n){var r=n(8),o=n(21);t.exports=n(6)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(6),o=n(31),i=n(2),c=n(32),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var u=n(0),a=n(3),s=n(14),f=n(19),l=n(57);t.exports=function(t,e){var n,r,o,i,c=t.target;if(n=t.global?u:t.stat?u[c]||f(c,{}):(u[c]||{}).prototype)for(r in e){if(o=n[r],i=e[r],!t.forced&&void 0!==o){if(typeof i==typeof o)continue;l(i,o)}(t.sham||o&&o.sham)&&a(i,"sham",!0),s(n,r,i,t.unsafe)}}},function(t,e){t.exports={}},function(t,e,n){var r=n(0),o=n(19),i=r["__core-js_shared__"]||o("__core-js_shared__",{});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.0.0-beta.3",mode:n(13)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=!1},function(t,e,n){var o=n(0),i=n(3),c=n(4),u=n(19),r=n(34),a=n(15),s=a.get,f=a.enforce,l=String(r).split("toString");n(11)("inspectSource",function(t){return r.call(t)}),(t.exports=function(t,e,n,r){"function"==typeof n&&("string"!=typeof e||c(n,"name")||i(n,"name",e),f(n).source=l.join("string"==typeof e?e:"")),t===o?u(e,n):r?t[e]?t[e]=n:i(t,e,n):(delete t[e],i(t,e,n))})(Function.prototype,"toString",function(){return"function"==typeof this&&s(this).source||r.call(this)})},function(t,e,n){var r,o,i,c,u,a,s,f,l=n(0),p=n(34),v=n(5),h=n(3),d=n(4),y=n(22),n=n(23),l=l.WeakMap;s="function"==typeof l&&/native code/.test(p.call(l))?(r=new l,o=r.get,i=r.has,c=r.set,u=function(t,e){return c.call(r,t,e),e},a=function(t){return o.call(r,t)||{}},function(t){return i.call(r,t)}):(n[f=y("state")]=!0,u=function(t,e){return h(t,f,e),e},a=function(t){return d(t,f)?t[f]:{}},function(t){return d(t,f)}),t.exports={set:u,get:a,has:s,enforce:function(t){return s(t)?a(t):u(t,{})},getterFor:function(n){return function(t){var e;if(!v(t)||(e=a(t)).type!==n)throw TypeError("Incompatible receiver, "+n+" required!");return e}}}},function(t,e,n){var r=n(60),o=n(25);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function!");return t}},function(t,e,n){"use strict";var o=n(17);t.exports.f=function(t){return new function(t){var n,r;this.promise=new t(function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e}),this.resolve=o(n),this.reject=o(r)}(t)}},function(t,e,n){var r=n(0),o=n(3);t.exports=function(e,n){try{o(r,e,n)}catch(t){r[e]=n}return n}},function(t,e,n){var r=n(5),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(11)("keys"),o=n(33);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){t.exports={}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(0<t?r:n)(t)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(8).f,o=n(4),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){t.exports=n(0)},function(t,e,n){var r=n(7),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(t=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?t:i?r(e):"Object"==(t=r(e))&&"function"==typeof e.callee?"Arguments":t}},function(t,e,n){t.exports=!n(6)&&!n(12)(function(){return 7!=Object.defineProperty(n(20)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var o=n(5);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){t.exports=n(11)("native-function-to-string",Function.toString)},function(t,e,n){"use strict";function d(){return this}var y=n(9),g=n(66),m=n(39),x=n(71),b=n(27),j=n(3),S=n(14),w=n(13),O=n(1)("iterator"),P=n(10),n=n(38),E=n.IteratorPrototype,T=n.BUGGY_SAFARI_ITERATORS;t.exports=function(t,e,n,r,o,i,c){g(n,e,r);function u(t){if(t===o&&h)return h;if(!T&&t in p)return p[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}}var a,s,f=e+" Iterator",l=!1,p=t.prototype,v=p[O]||p["@@iterator"]||o&&p[o],h=!T&&v||u(o),r="Array"==e&&p.entries||v;if(r&&(t=m(r.call(new t)),E!==Object.prototype&&t.next&&(w||m(t)===E||(x?x(t,E):"function"!=typeof t[O]&&j(t,O,d)),b(t,f,!0,!0),w&&(P[f]=d))),"values"==o&&v&&"values"!==v.name&&(l=!0,h=function(){return v.call(this)}),w&&!c||p[O]===h||j(p,O,h),P[e]=h,o)if(a={values:u("values"),keys:i?h:u("keys"),entries:u("entries")},c)for(s in a)!T&&!l&&s in p||S(p,s,a[s]);else y({target:e,proto:!0,forced:T||l},a);return a}},function(t,e,n){var c=n(4),u=n(16),a=n(61)(!1),s=n(23);t.exports=function(t,e){var n,r=u(t),o=0,i=[];for(n in r)!c(s,n)&&c(r,n)&&i.push(n);for(;e.length>o;)c(r,n=e[o++])&&(~a(i,n)||i.push(n));return i}},function(t,e,n){var r=n(24),o=Math.min;t.exports=function(t){return 0<t?o(r(t),9007199254740991):0}},function(t,e,n){"use strict";var r,o=n(39),i=n(3),c=n(4),u=n(13),a=n(1)("iterator"),s=!1;[].keys&&("next"in(n=[].keys())?(n=o(o(n)))!==Object.prototype&&(r=n):s=!0),null==r&&(r={}),u||c(r,a)||i(r,a,function(){return this}),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:s}},function(t,e,n){var r=n(4),o=n(67),i=n(22)("IE_PROTO"),n=n(68),c=Object.prototype;t.exports=n?Object.getPrototypeOf:function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,e,n){function r(){}var o=n(2),i=n(69),c=n(26),u=n(41),a=n(20),s=n(22)("IE_PROTO"),f=function(){var t=a("iframe"),e=c.length;for(t.style.display="none",u.appendChild(t),t.src="javascript:",(t=t.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;e--;)delete f.prototype[c[e]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(r.prototype=o(t),n=new r,r.prototype=null,n[s]=t):n=f(),void 0===e?n:i(n,e)},n(23)[s]=!0},function(t,e,n){n=n(0).document;t.exports=n&&n.documentElement},function(t,e,n){var f=n(2),l=n(79),p=n(37),v=n(43),h=n(80),d=n(81),y={};(t.exports=function(t,e,n,r,o){var i,c,u,a,s=v(e,n,r?2:1);if(o)i=t;else{if("function"!=typeof(o=h(t)))throw TypeError("Target is not iterable!");if(l(o)){for(c=0,u=p(t.length);c<u;c++)if((r?s(f(a=t[c])[0],a[1]):s(t[c]))===y)return;return}i=o.call(t)}for(;!(a=i.next()).done;)if(d(i,s,a.value,r)===y)return}).BREAK=y},function(t,e,n){var i=n(17);t.exports=function(r,o,t){if(i(r),void 0===o)return r;switch(t){case 0:return function(){return r.call(o)};case 1:return function(t){return r.call(o,t)};case 2:return function(t,e){return r.call(o,t,e)};case 3:return function(t,e,n){return r.call(o,t,e,n)}}return function(){return r.apply(o,arguments)}}},function(t,e,n){var r=n(2),o=n(17),i=n(1)("species");t.exports=function(t,e){var n,t=r(t).constructor;return void 0===t||null==(n=r(t)[i])?e:o(n)}},function(t,e,n){function r(){var t,e=+this;y.hasOwnProperty(e)&&(t=y[e],delete y[e],t())}var o,i=n(0),c=n(7),u=n(43),a=n(41),s=n(20),f=i.setImmediate,l=i.clearImmediate,p=i.process,v=i.MessageChannel,h=i.Dispatch,d=0,y={},n=function(t){r.call(t.data)};f&&l||(f=function(t){for(var e=[],n=1;n<arguments.length;)e.push(arguments[n++]);return y[++d]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},o(d),d},l=function(t){delete y[t]},"process"==c(p)?o=function(t){p.nextTick(u(r,t,1))}:h&&h.now?o=function(t){h.now(u(r,t,1))}:v?(v=(c=new v).port2,c.port1.onmessage=n,o=u(v.postMessage,v,1)):i.addEventListener&&"function"==typeof postMessage&&!i.importScripts?(o=function(t){i.postMessage(t+"","*")},i.addEventListener("message",n,!1)):o="onreadystatechange"in s("script")?function(t){a.appendChild(s("script")).onreadystatechange=function(){a.removeChild(this),r.call(t)}}:function(t){setTimeout(u(r,t,1),0)}),t.exports={set:f,clear:l}},function(t,e,n){var r=n(2),o=n(5),i=n(18);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;t=i.f(t);return(0,t.resolve)(e),t.promise}},function(t,e,n){"use strict";var r;Object.defineProperty(e,"__esModule",{value:!0}),n(48),(r=n(50))&&r.__esModule;n=n(91);e.default=n.BeerSlider},function(t,e,n){},,function(t,e,n){t.exports=n(51),n(89),n(90)},function(t,e,n){n(52),n(55),n(73),n(77),n(88),t.exports=n(29).Promise},function(t,e,n){var r=n(53);r!=={}.toString&&n(14)(Object.prototype,"toString",r,!0)},function(t,e,n){"use strict";var r=n(30),o={};o[n(1)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function(){return"[object "+r(this)+"]"}:o.toString},function(t,e,n){t.exports=!n(12)(function(){String(Symbol())})},function(t,e,n){"use strict";var r=n(56)(!0),o=n(15),n=n(35),i=o.set,c=o.getterFor("String Iterator");n(String,"String",function(t){i(this,{type:"String Iterator",string:String(t),index:0})},function(){var t=c(this),e=t.string,n=t.index;return n>=e.length?{value:void 0,done:!0}:(n=r(e,n),t.index+=n.length,{value:n,done:!1})})},function(t,e,n){var c=n(24),u=n(25);t.exports=function(i){return function(t,e){var n,r=String(u(t)),o=c(e),t=r.length;return o<0||t<=o?i?"":void 0:(e=r.charCodeAt(o))<55296||56319<e||o+1===t||(n=r.charCodeAt(o+1))<56320||57343<n?i?r.charAt(o):e:i?r.slice(o,o+2):n-56320+(e-55296<<10)+65536}}},function(t,e,n){var u=n(4),a=n(58),s=n(64),f=n(8);t.exports=function(t,e){for(var n=a(e),r=f.f,o=s.f,i=0;i<n.length;i++){var c=n[i];u(t,c)||r(t,c,o(e,c))}}},function(t,e,n){var r=n(59),o=n(63),i=n(2),n=n(0).Reflect;t.exports=n&&n.ownKeys||function(t){var e=r.f(i(t)),n=o.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(36),o=n(26).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(7),o="".split;t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?o.call(t,""):Object(t)}},function(t,e,n){var a=n(16),s=n(37),f=n(62);t.exports=function(u){return function(t,e,n){var r,o=a(t),i=s(o.length),c=f(n,i);if(u&&e!=e){for(;c<i;)if((r=o[c++])!=r)return!0}else for(;c<i;c++)if((u||c in o)&&o[c]===e)return u||c||0;return!u&&-1}}},function(t,e,n){var r=n(24),o=Math.max,i=Math.min;t.exports=function(t,e){t=r(t);return t<0?o(t+e,0):i(t,e)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(6),o=n(65),i=n(21),c=n(16),u=n(32),a=n(4),s=n(31),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=c(t),e=u(e,!0),s)try{return f(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){t=o(this,t);return!!t&&t.enumerable}:r},function(t,e,n){"use strict";function r(){return this}var o=n(38).IteratorPrototype,i=n(40),c=n(21),u=n(27),a=n(10);t.exports=function(t,e,n){e+=" Iterator";return t.prototype=i(o,{next:c(1,n)}),u(t,e,!1,!0),a[e]=r,t}},function(t,e,n){var r=n(25);t.exports=function(t){return Object(r(t))}},function(t,e,n){t.exports=!n(12)(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})},function(t,e,n){var r=n(6),c=n(8),u=n(2),a=n(70);t.exports=r?Object.defineProperties:function(t,e){u(t);for(var n,r=a(e),o=r.length,i=0;i<o;)c.f(t,n=r[i++],e[n]);return t}},function(t,e,n){var r=n(36),o=n(26);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var o=n(72);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var n,t={},r=!0;try{(n=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(t,[]),r=t instanceof Array}catch(n){r=!1}return function(t,e){return o(t,e),r?n.call(t,e):t.__proto__=e,t}}():void 0)},function(t,e,n){var r=n(5),o=n(2);t.exports=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(String(e)+": can't set as a prototype!")}},function(t,e,n){var r,o=n(74),i=n(75),c=n(0),u=n(3),n=n(1),a=n("iterator"),s=n("toStringTag"),f=i.values;for(r in o){var l=c[r],p=l&&l.prototype;if(p){if(p[a]!==f)try{u(p,a,f)}catch(t){p[a]=f}if(p[s]||u(p,s,r),o[r])for(var v in i)if(p[v]!==i[v])try{u(p,v,i[v])}catch(t){p[v]=i[v]}}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var r=n(16),o=n(76),i=n(10),c=n(15),n=n(35),u=c.set,a=c.getterFor("Array Iterator");t.exports=n(Array,"Array",function(t,e){u(this,{type:"Array Iterator",target:r(t),index:0,kind:e})},function(){var t=a(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?{value:t.target=void 0,done:!0}:"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,n){var r=n(1)("unscopables"),o=n(40),n=n(3),i=Array.prototype;null==i[r]&&n(i,r,o(null)),t.exports=function(t){i[r][t]=!0}},function(t,e,n){"use strict";var r,o,i,c="Promise",u=n(13),h=n(0),a=n(9),s=n(5),f=n(17),l=n(78),p=n(7),v=n(42),d=n(82),y=n(44),g=n(45).set,m=n(83)(),x=n(46),b=n(84),j=n(18),S=n(28),w=n(85),O=n(1)("species"),P=n(15),E=P.get,T=P.set,_=P.getterFor(c),L=h.Promise,M=h.TypeError,I=h.document,A=h.process,P=A&&A.versions,k=P&&P.v8||"",C=j.f,R=C,F="process"==p(A),B=!!(I&&I.createEvent&&h.dispatchEvent),p=!!function(){try{var t=L.resolve(1),e=function(){},n=(t.constructor={})[O]=function(t){t(e,e)};return(F||"function"==typeof PromiseRejectionEvent)&&(!u||t.finally)&&t.then(e)instanceof n&&0!==k.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),D=function(t){var e;return!(!s(t)||"function"!=typeof(e=t.then))&&e},G=function(p,v,n){var i;v.notified||(v.notified=!0,i=v.reactions,m(function(){for(var r,o,f=v.value,l=1==v.state,t=0,e=function(t){var e,n,r,o,i,c=l?t.ok:t.fail,u=t.resolve,a=t.reject,s=t.domain;try{c?(l||(2===v.rejection&&(o=p,i=v,g.call(h,function(){F?A.emit("rejectionHandled",o):N("rejectionhandled",o,i.value)})),v.rejection=1),!0===c?e=f:(s&&s.enter(),e=c(f),s&&(s.exit(),r=!0)),e===t.promise?a(M("Promise-chain cycle")):(n=D(e))?n.call(e,u,a):u(e)):a(f)}catch(t){s&&!r&&s.exit(),a(t)}};i.length>t;)e(i[t++]);v.reactions=[],v.notified=!1,n&&!v.rejection&&(r=p,o=v,g.call(h,function(){var t,e=o.value,n=V(o);if(n&&(t=S(function(){F?A.emit("unhandledRejection",e,r):N("unhandledrejection",r,e)}),o.rejection=F||V(o)?2:1),n&&t.e)throw t.v}))}))},N=function(t,e,n){var r;B?((r=I.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),h.dispatchEvent(r)):r={promise:e,reason:n},(e=h["on"+t])?e(r):"unhandledrejection"===t&&b("Unhandled promise rejection",n)},V=function(t){return 1!==t.rejection&&!t.parent},W=function(e,n,r,o){return function(t){e(n,r,t,o)}},z=function(t,e,n,r){e.done||(e.done=!0,(e=r?r:e).value=n,e.state=2,G(t,e,!0))},H=function(n,r,t,e){if(!r.done){r.done=!0,e&&(r=e);try{if(n===t)throw M("Promise can't be resolved itself!");var o=D(t);o?m(function(){var e={done:!1};try{o.call(t,W(H,n,e,r),W(z,n,e,r))}catch(t){z(n,e,t,r)}}):(r.value=t,r.state=1,G(n,r,!1))}catch(t){z(n,{done:!1},t,r)}}};p||(L=function(t){l(this,L,c),f(t),r.call(this);var e=E(this);try{t(W(H,this,e),W(z,this,e))}catch(t){z(this,e,t)}},(r=function(t){T(this,{type:c,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=n(86)(L.prototype,{then:function(t,e){var n=_(this),r=C(y(this,L));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=F?A.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&G(this,n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=E(t);this.promise=t,this.resolve=W(H,t,e),this.reject=W(z,t,e)},j.f=C=function(t){return t===L||t===i?new o:R(t)}),a({global:!0,wrap:!0,forced:!p},{Promise:L}),n(27)(L,c,!1,!0),n(87)(c),i=n(29).Promise,a({target:c,stat:!0,forced:!p},{reject:function(t){var e=C(this);return e.reject.call(void 0,t),e.promise}}),a({target:c,stat:!0,forced:u||!p},{resolve:function(t){return x(u&&this===i?L:this,t)}}),a({target:c,stat:!0,forced:!(p&&d(function(t){L.all(t).catch(function(){})}))},{all:function(t){var c=this,e=C(c),u=e.resolve,a=e.reject,n=S(function(){var r=[],o=0,i=1;v(t,function(t){var e=o++,n=!1;r.push(void 0),i++,c.resolve(t).then(function(t){n||(n=!0,r[e]=t,--i||u(r))},a)}),--i||u(r)});return n.e&&a(n.v),e.promise},race:function(t){var e=this,n=C(e),r=n.reject,o=S(function(){v(t,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError((n?n+": i":"I")+"ncorrect invocation!");return t}},function(t,e,n){var r=n(10),o=n(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(30),o=n(1)("iterator"),i=n(10);t.exports=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var o=n(2);t.exports=function(t,e,n,r){try{return r?e(o(n)[0],n[1]):e(n)}catch(e){n=t.return;throw void 0!==n&&o(n.call(t)),e}}},function(t,e,n){var o=n(1)("iterator"),i=!1;try{var r=0,c={next:function(){return{done:!!r++}},return:function(){i=!0}};c[o]=function(){return this},Array.from(c,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var r={};r[o]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(t){}return n}},function(t,e,n){var u=n(0),r=n(7),a=n(45).set,s=u.MutationObserver||u.WebKitMutationObserver,f=u.process,l=u.Promise,p="process"==r(f);t.exports=function(){function t(){var t,e;for(p&&(t=f.domain)&&t.exit();n;){e=n.fn,n=n.next;try{e()}catch(t){throw n?o():r=void 0,t}}r=void 0,t&&t.enter()}var n,r,e,o,i,c;return o=p?function(){f.nextTick(t)}:!s||u.navigator&&u.navigator.standalone?l&&l.resolve?(e=l.resolve(void 0),function(){e.then(t)}):function(){a.call(u,t)}:(i=!0,c=document.createTextNode(""),new s(t).observe(c,{characterData:!0}),function(){c.data=i=!i}),function(t){t={fn:t,next:void 0};r&&(r.next=t),n||(n=t,o()),r=t}}},function(t,e,n){var r=n(0);t.exports=function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}},function(t,e,n){n=n(0).navigator;t.exports=n&&n.userAgent||""},function(t,e,n){var o=n(14);t.exports=function(t,e,n){for(var r in e)o(t,r,e[r],n);return t}},function(t,e,n){"use strict";var r=n(0),o=n(8),i=n(6),c=n(1)("species");t.exports=function(t){t=r[t];i&&t&&!t[c]&&o.f(t,c,{configurable:!0,get:function(){return this}})}},function(t,e,n){"use strict";var r=n(29),o=n(0),i=n(44),c=n(46);n(9)({target:"Promise",proto:!0,real:!0},{finally:function(e){var n=i(this,("function"==typeof r.Promise?r:o).Promise),t="function"==typeof e;return this.then(t?function(t){return c(n,e()).then(function(){return t})}:e,t?function(t){return c(n,e()).then(function(){throw t})}:e)}})},function(t,e,n){"use strict";var o=n(18),i=n(28),a=n(42);n(9)({target:"Promise",stat:!0},{allSettled:function(t){var c=this,e=o.f(c),u=e.resolve,n=e.reject,r=i(function(){var r=[],o=0,i=1;a(t,function(t){var e=o++,n=!1;r.push(void 0),i++,c.resolve(t).then(function(t){n||(n=!0,r[e]={value:t,status:"fulfilled"},--i||u(r))},function(t){n||(n=!0,r[e]={reason:t,status:"rejected"},--i||u(r))})}),--i||u(r)});return r.e&&n(r.v),e.promise}})},function(t,e,n){"use strict";var r=n(18),o=n(28);n(9)({target:"Promise",stat:!0},{try:function(t){var e=r.f(this),t=o(t);return(t.e?e.reject:e.resolve)(t.v),e.promise}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t};function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=e.start,n=void 0===n?"50":n,e=e.prefix,e=void 0===e?"beer":e;!function(t){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this),this.start=parseInt(n)?Math.min(100,Math.max(0,parseInt(n))):50,this.prefix=e,t&&2===t.children.length&&(this.element=t,this.revealContainer=this.element.children[1],this.revealContainer.children.length<1||(this.revealElement=this.revealContainer.children[0],this.range=this.addElement("input",{type:"range",class:this.prefix+"-range","aria-label":"Percent of revealed content","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":this.start,value:this.start,min:"0",max:"100"}),this.handle=this.addElement("span",{class:this.prefix+"-handle"}),this.onImagesLoad()))}e.BeerSlider=(r(i,[{key:"init",value:function(){this.element.classList.add(this.prefix+"-ready"),this.setImgWidth(),this.move(),this.addListeners()}},{key:"loadingImg",value:function(r){return new Promise(function(t,e){r||t();var n=new Image;n.onload=function(){return t()},n.onerror=function(){return e()},n.src=r})}},{key:"loadedBoth",value:function(){var t=this.element.children[0].src||this.element.children[0].getAttribute("data-"+this.prefix+"-src"),e=this.revealElement.src||this.revealElement.getAttribute("data-"+this.prefix+"-src");return Promise.all([this.loadingImg(t),this.loadingImg(e)])}},{key:"onImagesLoad",value:function(){var t=this;this.revealElement&&this.loadedBoth().then(function(){t.init()},function(){console.error("Some errors occurred and images are not loaded.")})}},{key:"addElement",value:function(t,e){var n=document.createElement(t);return Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])}),this.element.appendChild(n),n}},{key:"setImgWidth",value:function(){this.revealElement.style.width=getComputedStyle(this.element).width}},{key:"addListeners",value:function(){var e=this;["input","change"].forEach(function(t){e.range.addEventListener(t,function(){e.move()})}),window.addEventListener("resize",function(){e.setImgWidth()})}},{key:"move",value:function(){this.revealContainer.style.width=this.range.value+"%",this.handle.style.left=this.range.value+"%",this.range.setAttribute("aria-valuenow",this.range.value)}}]),i)}],r={},o.m=n,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=47).default;function o(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}var n,r});