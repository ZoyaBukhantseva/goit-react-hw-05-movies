"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[581],{642:function(t,n,e){e.d(n,{IR:function(){return p},Jn:function(){return l},LP:function(){return o},M1:function(){return v},Q$:function(){return g},t2:function(){return h},tx:function(){return b}});var r=e(861),u=e(757),a=e.n(u),c=e(912),i="cc6dd9af32d8d8ae276f4cac0bcc6f4a";function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i)).then((function(t){return t.data.results}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false")).then((function(t){return t.data.results}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(i,"&language=en-US")).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t,n){return"https://image.tmdb.org/t/p/w".concat(n,"/").concat(t)}function g(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(i,"&language=en-US")).then((function(t){return t.data.genres}));case 2:return e=t.sent,t.abrupt("return",e.reduce((function(t,e){return n.includes(e.id)&&t.push(e.name),t}),[]));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US")).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1")).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},581:function(t,n,e){e.r(n);var r=e(439),u=e(791),a=e(642),c=e(803),i=e(184),o=(0,u.lazy)((function(){return e.e(443).then(e.bind(e,443))}));n.default=function(){var t=(0,u.useState)([]),n=(0,r.Z)(t,2),e=n[0],s=n[1];return(0,u.useEffect)((function(){(0,a.LP)().then((function(t){return s(t)})).catch((function(){return alert("Some problems with API")}))}),[]),(0,i.jsx)(u.Suspense,{fallback:(0,i.jsx)(c.Z,{}),children:(0,i.jsx)(o,{title:"Trending today",films:e})})}}}]);
//# sourceMappingURL=581.81cce376.chunk.js.map