import{S as U,i as $,s as w,l as u,a as g,r as q,J as A,m as d,h as n,c as S,n as x,u as z,p as h,F as c,b as H,G as C,E,H as N}from"../chunks/index-2e9e6908.js";import{m as O}from"../chunks/stores-a14884fd.js";import"../chunks/singletons-001d274c.js";function R(p){let t,o,e,s,r,_,l,f,v,b;return{c(){t=u("meta"),o=g(),e=u("section"),s=u("h1"),r=q("Welcome to expense splitter"),_=g(),l=u("button"),f=q("Use the app"),this.h()},l(a){const i=A('[data-svelte="svelte-ruftz3"]',document.head);t=d(i,"META",{name:!0,content:!0}),i.forEach(n),o=S(a),e=d(a,"SECTION",{class:!0});var m=x(e);s=d(m,"H1",{class:!0});var y=x(s);r=z(y,"Welcome to expense splitter"),y.forEach(n),_=S(m),l=d(m,"BUTTON",{});var T=x(l);f=z(T,"Use the app"),T.forEach(n),m.forEach(n),this.h()},h(){document.title="Home",h(t,"name","description"),h(t,"content","SExpense splitter app"),h(s,"class","svelte-cwvxqz"),h(e,"class","svelte-cwvxqz")},m(a,i){c(document.head,t),H(a,o,i),H(a,e,i),c(e,s),c(s,r),c(e,_),c(e,l),c(l,f),v||(b=C(l,"click",p[0]),v=!0)},p:E,i:E,o:E,d(a){n(t),a&&n(o),a&&n(e),v=!1,b()}}}function W(p,t,o){let e;N(p,O,r=>o(1,e=r));function s(){e.goToRoute("/app")}return[s]}class G extends U{constructor(t){super(),$(this,t,W,R,w,{})}}export{G as default};