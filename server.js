!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";var r=f(n(2)),o=f(n(3)),u=n(4),i=f(n(5)),a=f(n(0)),l=f(n(7)),c=n(8);function f(e){return e&&e.__esModule?e:{default:e}}var s=(0,r.default)();s.use((0,o.default)()),s.use(r.default.static("public")),s.get("*",function(e,t,n){(0,c.fetchPopularRepos)().then(function(e){var n=(0,u.renderToString)(a.default.createElement(i.default,{data:e}));t.send('\n\t\t\t<!DOCTYPE html>\n\t\t\t<html>\n\t\t\t\t<head>\n\t\t\t\t\t<meta charset="utf-8">\n\t\t\t\t\t<title>RR SSR</title>\n\t\t\t\t\t<script src="/bundle.js" defer><\/script>\n\t\t\t\t\t<script>window.__INITIAL_DATA__='+(0,l.default)(e)+'<\/script>\n\t\t\t\t</head>\n\t\t\t\t<body>\n\t\t\t\t\t<div id="app">'+n+"</app>\n\t\t\t\t</body>\n\t\t\t</html>\n\t\t")})}),s.listen(3e3,function(){console.log("port 3000")})},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("react-dom/server")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),u=a(o),i=a(n(6));function a(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(i.default,{data:this.props.data}))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),i=(r=u)&&r.__esModule?r:{default:r};var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),o(t,[{key:"render",value:function(){var e=this.props.data;return i.default.createElement("ul",{style:{display:"flex",flexWrap:"wrap"}},e.map(function(e){var t=e.name,n=e.owner,r=e.stargazers_count,o=e.html_url;return i.default.createElement("li",{key:t,style:{margin:30}},i.default.createElement("ul",null,i.default.createElement("li",null,i.default.createElement("a",{href:o},t)),i.default.createElement("li",null,"@",n.login),i.default.createElement("li",null,r," stars")))}))}}]),t}();t.default=a},function(e,t){e.exports=require("serialize-javascript")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPopularRepos=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:"+e+"&sort=stars&order=desc&type=Repositories");return(0,u.default)(t).then(function(e){return e.json()}).then(function(e){return e.items}).catch(function(e){return console.warn(e),null})};var r,o=n(9),u=(r=o)&&r.__esModule?r:{default:r}},function(e,t){e.exports=require("isomorphic-fetch")}]);