(this.webpackJsonpreact_1=this.webpackJsonpreact_1||[]).push([[0],{23:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(24),a=n.n(s),i=(n(23),n(1)),o=function(e){return Object(i.jsx)("img",{src:e.imgsrc,alt:"Poster Pic",className:"image"})},l=n(9);var j=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"cardArea",align:"center",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)(o,{imgsrc:e.imgsrc}),Object(i.jsxs)("div",{className:"cardContent",children:[Object(i.jsx)("h3",{className:"title",children:e.title}),Object(i.jsxs)("div",{className:"info",children:[Object(i.jsx)("p",{className:"infoTxt",children:e.language}),Object(i.jsxs)("p",{className:"infoTxt",style:{borderLeft:"1px solid black"},children:["Genres : ",e.genres.map((function(e){return Object(i.jsx)("span",{style:{marginLeft:"5px"},children:e})}))]})]}),Object(i.jsx)(l.b,{to:"movie/".concat(e.id),className:"link",children:Object(i.jsx)("button",{className:"moredetails",children:"More Details"})})]})]})},e.id)})},u=n(4),d=n.n(u),b=n(6),m=n(5),h=r.a.createContext(),O=function(e){var t=e.children,n=Object(c.useState)([]),r=Object(m.a)(n,2),s=r[0],a=r[1],o=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,a(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){o("https://api.tvmaze.com/search/shows?q=all")}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(h.Provider,{value:s,children:t})})},x=function(){return Object(c.useContext)(h)};var v=function(){var e=x();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"header",children:Object(i.jsx)("h1",{children:"List of Shows"})}),Object(i.jsx)("div",{className:"cards",children:e.map((function(e){var t;return Object(i.jsx)(j,{id:e.show.id,imgsrc:null===(t=e.show.image)||void 0===t?void 0:t.original,language:e.show.language,title:e.show.name,genres:e.show.genres},e.show.id)}))})]})},g=n(3);var f=function(){var e=x(),t=Object(g.o)().id,n=e.filter((function(e){return e.show.id===parseInt(t)}));return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"summaryStructure",children:Object(i.jsxs)("div",{className:"summaryCard",children:[Object(i.jsx)("h2",{className:"headerTxtSummary",children:"Summary "}),Object(i.jsx)("div",{className:"summaryTxt",dangerouslySetInnerHTML:function(){var e,t;return{__html:null===(e=n[0])||void 0===e||null===(t=e.show)||void 0===t?void 0:t.summary}}()}),Object(i.jsx)(l.b,{to:"/booking/".concat(t),className:"link",children:Object(i.jsx)("button",{className:"bookNowBtn",children:"Book Now"})})]})})})};var p=function(){var e,t,n,r,s,a,o,l,j,u,d,b,h=x(),O=Object(g.o)().id,v=h.filter((function(e){return e.show.id===parseInt(O)})),f=Object(c.useState)(null===(e=v[0])||void 0===e||null===(t=e.show)||void 0===t?void 0:t.name),p=Object(m.a)(f,2),N=p[0],w=p[1],S=Object(c.useState)(""),y=Object(m.a)(S,2),k=y[0],C=y[1],F=Object(c.useState)(0),I=Object(m.a)(F,2),T=I[0],q=I[1],L=Object(c.useState)(""),P=Object(m.a)(L,2),_=P[0],B=P[1],H=Object(c.useState)(null===(n=v[0])||void 0===n||null===(r=n.show)||void 0===r||null===(s=r.schedule)||void 0===s?void 0:s.time),z=Object(m.a)(H,2),D=z[0],J=z[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"bookingPageStructure",children:Object(i.jsxs)("div",{className:"bookingFormStructureParent",children:[Object(i.jsxs)("h1",{className:"formHeading",children:[" Hurry!!",Object(i.jsx)("br",{}),"Few Tickits Left..."]}),Object(i.jsxs)("form",{className:"bookingForm",children:[Object(i.jsx)("label",{children:"Show Name"}),Object(i.jsx)("input",{type:"text",name:"showName",autoComplete:"off",style:{textTransform:"capitalize"},value:null===(a=v[0])||void 0===a||null===(o=a.show)||void 0===o?void 0:o.name,required:!0,onChange:function(e){return w(e.target.value)}}),Object(i.jsx)("label",{children:"Name of Customer"}),Object(i.jsx)("input",{type:"text",name:"customerName",autoComplete:"off",required:!0,onChange:function(e){return C(e.target.value)}}),Object(i.jsx)("label",{children:"Number of tickits"}),Object(i.jsxs)("select",{required:!0,onChange:function(e){return q(e.target.value)},children:[Object(i.jsx)("option",{children:"Select..."}),Object(i.jsx)("option",{children:"1"}),Object(i.jsx)("option",{children:"2"}),Object(i.jsx)("option",{children:"3"}),Object(i.jsx)("option",{children:"4"}),Object(i.jsx)("option",{children:"5"})]}),Object(i.jsx)("label",{children:"Day"}),Object(i.jsxs)("select",{required:!0,onChange:function(e){return B(e.target.value)},children:[Object(i.jsx)("option",{children:"Select..."}),null===(l=v[0])||void 0===l||null===(j=l.show)||void 0===j?void 0:j.schedule.days.map((function(e){return Object(i.jsx)("option",{children:e})}))]}),Object(i.jsx)("label",{children:"Timing"}),Object(i.jsx)("input",{type:"text",name:"timing",autoComplete:"off",value:null===(u=v[0])||void 0===u||null===(d=u.show)||void 0===d||null===(b=d.schedule)||void 0===b?void 0:b.time,required:!0,onChange:function(e){return J(e.target.value)}}),Object(i.jsx)("input",{onClick:function(){localStorage.setItem("showName",N),localStorage.setItem("customerName",k),localStorage.setItem("tickitQuantity",T),localStorage.setItem("day",_),localStorage.setItem("timing",D)},type:"submit",value:"Book"})]})]})})})};var N=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(l.a,{children:Object(i.jsxs)(g.c,{children:[Object(i.jsx)(g.a,{path:"/",element:Object(i.jsx)(v,{})}),Object(i.jsx)(g.a,{path:"movie/:id",element:Object(i.jsx)(f,{})}),Object(i.jsx)(g.a,{path:"/booking/:id",element:Object(i.jsx)(p,{})})]})})})};a.a.render(Object(i.jsx)(O,{children:Object(i.jsx)(N,{})}),document.querySelector("#root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.f7f50573.chunk.js.map