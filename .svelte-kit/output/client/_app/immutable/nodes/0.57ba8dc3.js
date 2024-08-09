import{S as w,i as C,s as U,k as b,q as E,a as B,l as v,m as g,r as T,h as i,c as O,n as S,b as $,C as m,D as Y,u as D,E as z,F,G,e as A,y as H,H as J,z as K,A as R,I as Q,J as V,K as W,g as L,d as j,B as X}from"../chunks/index.737bebd0.js";import{c as M,m as Z}from"../chunks/stores.d1fff28e.js";const x=!0,ft=Object.freeze(Object.defineProperty({__proto__:null,prerender:x},Symbol.toStringTag,{value:"Module"}));function q(r){let t,l,e,s;return{c(){t=b("button"),l=E("Install expense splitter ⬇️"),this.h()},l(a){t=v(a,"BUTTON",{class:!0});var o=g(t);l=T(o,"Install expense splitter ⬇️"),o.forEach(i),this.h()},h(){S(t,"class","svelte-1f3uf7m")},m(a,o){$(a,t,o),m(t,l),e||(s=Y(t,"click",r[2]),e=!0)},p:z,d(a){a&&i(t),e=!1,s()}}}function tt(r){let t,l,e,s=r[1].darkTheme?"light ☀️":"dark 🌑",a,o,k,d,_,h,f,n,u,c=r[0].installEvent!=null&&q(r);return{c(){t=b("footer"),l=b("button"),e=E("Set theme to "),a=E(s),o=B(),c&&c.c(),k=B(),d=b("p"),_=E("Made by "),h=b("a"),f=E("@amin-pro"),this.h()},l(y){t=v(y,"FOOTER",{class:!0});var p=g(t);l=v(p,"BUTTON",{class:!0});var P=g(l);e=T(P,"Set theme to "),a=T(P,s),P.forEach(i),o=O(p),c&&c.l(p),k=O(p),d=v(p,"P",{});var I=g(d);_=T(I,"Made by "),h=v(I,"A",{href:!0});var N=g(h);f=T(N,"@amin-pro"),N.forEach(i),I.forEach(i),p.forEach(i),this.h()},h(){S(l,"class","svelte-1f3uf7m"),S(h,"href","https://github.com/amin-pro"),S(t,"class","svelte-1f3uf7m")},m(y,p){$(y,t,p),m(t,l),m(l,e),m(l,a),m(t,o),c&&c.m(t,null),m(t,k),m(t,d),m(d,_),m(d,h),m(h,f),n||(u=Y(l,"click",M.toggleTheme),n=!0)},p(y,[p]){p&2&&s!==(s=y[1].darkTheme?"light ☀️":"dark 🌑")&&D(a,s),y[0].installEvent!=null?c?c.p(y,p):(c=q(y),c.c(),c.m(t,k)):c&&(c.d(1),c=null)},i:z,o:z,d(y){y&&i(t),c&&c.d(),n=!1,u()}}}function et(r,t,l){let e,s;F(r,Z,o=>l(0,e=o)),F(r,M,o=>l(1,s=o));function a(){var o;(o=e.installEvent)==null||o.prompt(),e.setInstallEvent(null)}return[e,s,a]}class nt extends w{constructor(t){super(),C(this,t,et,tt,U,{})}}function lt(r){let t,l;return{c(){t=b("style"),l=E(`:root {
				--c1: #fffffe; /* Background */
				--c2: #d1d1e9; /* Secondary */
				--c3: #6246ea; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #2b2c34; /* Text */
			}`)},l(e){t=v(e,"STYLE",{});var s=g(t);l=T(s,`:root {
				--c1: #fffffe; /* Background */
				--c2: #d1d1e9; /* Secondary */
				--c3: #6246ea; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #2b2c34; /* Text */
			}`),s.forEach(i)},m(e,s){$(e,t,s),m(t,l)},d(e){e&&i(t)}}}function st(r){let t,l;return{c(){t=b("style"),l=E(`:root {
				--c1: #2b2c34; /* Background */
				--c2: #6246ea; /* Secondary */
				--c3: #d1d1e9; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #fffffe; /* Text */
			}`)},l(e){t=v(e,"STYLE",{});var s=g(t);l=T(s,`:root {
				--c1: #2b2c34; /* Background */
				--c2: #6246ea; /* Secondary */
				--c3: #d1d1e9; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #fffffe; /* Text */
			}`),s.forEach(i)},m(e,s){$(e,t,s),m(t,l)},d(e){e&&i(t)}}}function ot(r){let t,l,e,s,a,o;function k(n,u){return n[0].darkTheme?st:lt}let d=k(r),_=d(r);const h=r[2].default,f=G(h,r,r[1],null);return a=new nt({}),{c(){_.c(),t=A(),l=B(),e=b("main"),f&&f.c(),s=B(),H(a.$$.fragment),this.h()},l(n){const u=J("svelte-lruhyz",document.head);_.l(u),t=A(),u.forEach(i),l=O(n),e=v(n,"MAIN",{class:!0});var c=g(e);f&&f.l(c),c.forEach(i),s=O(n),K(a.$$.fragment,n),this.h()},h(){S(e,"class","svelte-1gziw1k")},m(n,u){_.m(document.head,null),m(document.head,t),$(n,l,u),$(n,e,u),f&&f.m(e,null),$(n,s,u),R(a,n,u),o=!0},p(n,[u]){d!==(d=k(n))&&(_.d(1),_=d(n),_&&(_.c(),_.m(t.parentNode,t))),f&&f.p&&(!o||u&2)&&Q(f,h,n,n[1],o?W(h,n[1],u,null):V(n[1]),null)},i(n){o||(L(f,n),L(a.$$.fragment,n),o=!0)},o(n){j(f,n),j(a.$$.fragment,n),o=!1},d(n){_.d(n),i(t),n&&i(l),n&&i(e),f&&f.d(n),n&&i(s),X(a,n)}}}function at(r,t,l){let e;F(r,M,o=>l(0,e=o));let{$$slots:s={},$$scope:a}=t;return r.$$set=o=>{"$$scope"in o&&l(1,a=o.$$scope)},[e,a,s]}class it extends w{constructor(t){super(),C(this,t,at,ot,U,{})}}export{it as component,ft as universal};
