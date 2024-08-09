import{S as w,i as C,s as U,k as b,q as E,a as B,l as v,m as g,r as T,h as i,c as O,n as S,b as $,C as m,D as Y,u as D,E as z,F,G,e as A,y as H,H as J,z as K,A as R,I as Q,J as V,K as W,g as L,d as j,B as X}from"../chunks/index.737bebd0.js";import{c as M,m as Z}from"../chunks/stores.a5f0f004.js";const x=!0,ft=Object.freeze(Object.defineProperty({__proto__:null,prerender:x},Symbol.toStringTag,{value:"Module"}));function q(r){let t,l,e,o;return{c(){t=b("button"),l=E("Install expense splitter ⬇️"),this.h()},l(a){t=v(a,"BUTTON",{class:!0});var s=g(t);l=T(s,"Install expense splitter ⬇️"),s.forEach(i),this.h()},h(){S(t,"class","svelte-1f3uf7m")},m(a,s){$(a,t,s),m(t,l),e||(o=Y(t,"click",r[2]),e=!0)},p:z,d(a){a&&i(t),e=!1,o()}}}function tt(r){let t,l,e,o=r[1].darkTheme?"light ☀️":"dark 🌑",a,s,k,d,_,h,f,n,u,c=r[0].installEvent!=null&&q(r);return{c(){t=b("footer"),l=b("button"),e=E("Set theme to "),a=E(o),s=B(),c&&c.c(),k=B(),d=b("p"),_=E("Made by "),h=b("a"),f=E("@amin-not-found"),this.h()},l(y){t=v(y,"FOOTER",{class:!0});var p=g(t);l=v(p,"BUTTON",{class:!0});var P=g(l);e=T(P,"Set theme to "),a=T(P,o),P.forEach(i),s=O(p),c&&c.l(p),k=O(p),d=v(p,"P",{});var I=g(d);_=T(I,"Made by "),h=v(I,"A",{href:!0});var N=g(h);f=T(N,"@amin-not-found"),N.forEach(i),I.forEach(i),p.forEach(i),this.h()},h(){S(l,"class","svelte-1f3uf7m"),S(h,"href","https://github.com/amin-not-found"),S(t,"class","svelte-1f3uf7m")},m(y,p){$(y,t,p),m(t,l),m(l,e),m(l,a),m(t,s),c&&c.m(t,null),m(t,k),m(t,d),m(d,_),m(d,h),m(h,f),n||(u=Y(l,"click",M.toggleTheme),n=!0)},p(y,[p]){p&2&&o!==(o=y[1].darkTheme?"light ☀️":"dark 🌑")&&D(a,o),y[0].installEvent!=null?c?c.p(y,p):(c=q(y),c.c(),c.m(t,k)):c&&(c.d(1),c=null)},i:z,o:z,d(y){y&&i(t),c&&c.d(),n=!1,u()}}}function et(r,t,l){let e,o;F(r,Z,s=>l(0,e=s)),F(r,M,s=>l(1,o=s));function a(){var s;(s=e.installEvent)==null||s.prompt(),e.setInstallEvent(null)}return[e,o,a]}class nt extends w{constructor(t){super(),C(this,t,et,tt,U,{})}}function lt(r){let t,l;return{c(){t=b("style"),l=E(`:root {
				--c1: #fffffe; /* Background */
				--c2: #d1d1e9; /* Secondary */
				--c3: #6246ea; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #2b2c34; /* Text */
			}`)},l(e){t=v(e,"STYLE",{});var o=g(t);l=T(o,`:root {
				--c1: #fffffe; /* Background */
				--c2: #d1d1e9; /* Secondary */
				--c3: #6246ea; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #2b2c34; /* Text */
			}`),o.forEach(i)},m(e,o){$(e,t,o),m(t,l)},d(e){e&&i(t)}}}function ot(r){let t,l;return{c(){t=b("style"),l=E(`:root {
				--c1: #2b2c34; /* Background */
				--c2: #6246ea; /* Secondary */
				--c3: #d1d1e9; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #fffffe; /* Text */
			}`)},l(e){t=v(e,"STYLE",{});var o=g(t);l=T(o,`:root {
				--c1: #2b2c34; /* Background */
				--c2: #6246ea; /* Secondary */
				--c3: #d1d1e9; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #fffffe; /* Text */
			}`),o.forEach(i)},m(e,o){$(e,t,o),m(t,l)},d(e){e&&i(t)}}}function st(r){let t,l,e,o,a,s;function k(n,u){return n[0].darkTheme?ot:lt}let d=k(r),_=d(r);const h=r[2].default,f=G(h,r,r[1],null);return a=new nt({}),{c(){_.c(),t=A(),l=B(),e=b("main"),f&&f.c(),o=B(),H(a.$$.fragment),this.h()},l(n){const u=J("svelte-lruhyz",document.head);_.l(u),t=A(),u.forEach(i),l=O(n),e=v(n,"MAIN",{class:!0});var c=g(e);f&&f.l(c),c.forEach(i),o=O(n),K(a.$$.fragment,n),this.h()},h(){S(e,"class","svelte-1gziw1k")},m(n,u){_.m(document.head,null),m(document.head,t),$(n,l,u),$(n,e,u),f&&f.m(e,null),$(n,o,u),R(a,n,u),s=!0},p(n,[u]){d!==(d=k(n))&&(_.d(1),_=d(n),_&&(_.c(),_.m(t.parentNode,t))),f&&f.p&&(!s||u&2)&&Q(f,h,n,n[1],s?W(h,n[1],u,null):V(n[1]),null)},i(n){s||(L(f,n),L(a.$$.fragment,n),s=!0)},o(n){j(f,n),j(a.$$.fragment,n),s=!1},d(n){_.d(n),i(t),n&&i(l),n&&i(e),f&&f.d(n),n&&i(o),X(a,n)}}}function at(r,t,l){let e;F(r,M,s=>l(0,e=s));let{$$slots:o={},$$scope:a}=t;return r.$$set=s=>{"$$scope"in s&&l(1,a=s.$$scope)},[e,a,o]}class it extends w{constructor(t){super(),C(this,t,at,st,U,{})}}export{it as component,ft as universal};
