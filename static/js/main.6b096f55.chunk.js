(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},20:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var s=c(7),i=c.n(s),n=(c(15),c(10)),a=c(2),r=c(1),l=(c(16),c(17),c(18),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(l.jsxs)("div",{className:"content",children:[t.Plot,Object(l.jsx)("br",{})]})]})]})},j=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbID)}))})},d=(c(20),c(8)),m=c.n(d),b=c(6),u=c.n(b),h=c(9),v="http://www.omdbapi.com/?apikey=37176dfa";function O(){return(O=Object(h.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v,"&t=").concat(t));case 2:if((c=e.sent).ok){e.next=5;break}throw new Error("".concat(c.status," - ").concat(c.statusText));case 5:return e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(e){var t=e.addMovie,c=Object(r.useState)(""),s=Object(a.a)(c,2),i=s[0],n=s[1],j=Object(r.useState)(null),d=Object(a.a)(j,2),b=d[0],u=d[1],h=Object(r.useState)(!1),v=Object(a.a)(h,2),x=v[0],f=v[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),b&&(t(b),n(""),u(null),f(!1))},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{value:i,className:m()("input",{"is-danger":x}),onChange:function(e){n(e.target.value),f(!1)},type:"text",id:"movie-title",placeholder:"Enter a title to search"})}),x&&Object(l.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such title"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"button",className:"button is-light",onClick:function(){(function(e){return O.apply(this,arguments)})(i).then((function(e){"False"===e.Response?(u(null),f(!0)):(u(e),f(!1))}))},children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{type:"submit",className:"button is-primary",children:"Add to the list"})})]})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),b&&Object(l.jsx)(o,{movie:b})]})]})},f=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(j,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(x,{addMovie:function(e){c.some((function(t){var c=t.imdbID;return e.imdbID===c}))||s((function(t){return[].concat(Object(n.a)(t),[e])}))}})})]})};i.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.6b096f55.chunk.js.map