!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=4)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),a=(r=u)&&r.__esModule?r:{default:r};var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),o(t,[{key:"render",value:function(){var e=this.props.data;return a.default.createElement("ul",{style:{display:"flex",flexWrap:"wrap"}},e.map(function(e){var t=e.name,n=e.owner,r=e.stargazers_count,o=e.html_url;return a.default.createElement("li",{key:t,style:{margin:30}},a.default.createElement("ul",null,a.default.createElement("li",null,a.default.createElement("a",{href:o},t)),a.default.createElement("li",null,"@",n.login),a.default.createElement("li",null,r," stars")))}))}}]),t}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(9)),o=a(n(1)),u=n(10);function a(e){return e&&e.__esModule?e:{default:e}}var i=[{path:"/",exact:!0,component:r.default},{path:"/popular/:id",component:o.default,fetchInitialData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,u.fetchPopularRepos)(e.split("/").pop())}}];t.default=i},function(e,t){e.exports=require("react-router-dom")},function(e,t,n){"use strict";var r=s(n(5)),o=s(n(6)),u=n(7),a=s(n(8)),i=s(n(0)),l=s(n(12)),c=n(3),f=s(n(2));function s(e){return e&&e.__esModule?e:{default:e}}var p=(0,r.default)();p.use((0,o.default)()),p.use(r.default.static("public")),p.get("*",function(e,t,n){var r=f.default.find(function(t){return(0,c.matchPath)(e.url,t)})||{};(r.fetchInitialData?r.fetchInitialData(e.path):Promise.resolve()).then(function(n){var r=(0,u.renderToString)(i.default.createElement(c.StaticRouter,{location:e.url,context:{}},i.default.createElement(a.default,{data:n})));t.send('\n\t\t\t<!DOCTYPE html>\n\t\t\t<html>\n\t\t\t\t<head>\n\t\t\t\t\t<meta charset="utf-8">\n\t\t\t\t\t<title>RR SSR</title>\n\t\t\t\t\t<script src="/bundle.js" defer><\/script>\n\t\t\t\t\t<script>window.__INITIAL_DATA__='+(0,l.default)(n)+'<\/script>\n\t\t\t\t</head>\n\t\t\t\t<body>\n\t\t\t\t\t<div id="app">'+r+"</app>\n\t\t\t\t</body>\n\t\t\t</html>\n\t\t")}).catch(n)}),p.listen(3e3,function(){console.log("port 3000")})},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("react-dom/server")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),u=i(o),a=i(n(1));i(n(2)),n(3);function i(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return u.default.createElement("div",null,u.default.createElement(a.default,{data:this.props.data}))}}]),t}();t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return u.default.createElement("div",null,"Select a language")};var r,o=n(0),u=(r=o)&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchPopularRepos=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:"+e+"&sort=stars&order=desc&type=Repositories");return(0,u.default)(t).then(function(e){return e.json()}).then(function(e){return e.items}).catch(function(e){return console.warn(e),null})};var r,o=n(11),u=(r=o)&&r.__esModule?r:{default:r}},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t){e.exports=require("serialize-javascript")}]);