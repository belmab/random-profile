(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(4),i=n.n(s),o=(n(10),n(2)),u=(n(11),function(e){var t=Object(r.useState)(!1),n=Object(o.a)(t,2),a=n[0],s=n[1];return Object(c.jsxs)("div",{className:"contact-card",children:[Object(c.jsx)("img",{src:e.avatarUrl,alt:"profile"}),Object(c.jsxs)("div",{className:"user-details",children:[Object(c.jsx)("p",{children:e.name}),Object(c.jsx)("p",{children:e.email}),Object(c.jsx)("button",{onClick:function(){return s(!a)},children:"Show Age"}),a&&Object(c.jsxs)("p",{children:["Age: ",e.age]})]})]})}),j=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){fetch("https://randomuser.me/api/?results=6").then((function(e){return e.json()})).then((function(e){console.log(e),a(e.results)}))}),[]),Object(c.jsx)("div",{children:n.map((function(e,t){return Object(c.jsx)(u,{avatarUrl:e.picture.large,name:e.name.first,email:e.email,age:e.dob.age},t)}))})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root")),l()}},[[12,1,2]]]);
//# sourceMappingURL=main.ac1e9d97.chunk.js.map