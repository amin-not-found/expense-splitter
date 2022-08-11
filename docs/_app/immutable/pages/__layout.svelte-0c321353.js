import{S as U,i as Y,s as C,l as b,r as g,a as B,m as v,n as E,u as $,h as i,c as I,p as S,b as T,F as m,G,v as H,E as M,H as N,I as J,e as L,w as K,J as R,x as j,y as x,K as D,L as Q,M as V,f as q,t as z,B as W}from"../chunks/index-2e9e6908.js";import{c as O,m as X}from"../chunks/stores-a14884fd.js";import"../chunks/singletons-001d274c.js";function A(r){let t,l,e,s;return{c(){t=b("button"),l=g("Install expense splitter \u2B07\uFE0F"),this.h()},l(o){t=v(o,"BUTTON",{class:!0});var a=E(t);l=$(a,"Install expense splitter \u2B07\uFE0F"),a.forEach(i),this.h()},h(){S(t,"class","svelte-1f3uf7m")},m(o,a){T(o,t,a),m(t,l),e||(s=G(t,"click",r[2]),e=!0)},p:M,d(o){o&&i(t),e=!1,s()}}}function Z(r){let t,l,e,s=r[1].darkTheme?"light \u2600\uFE0F":"dark \u{1F311}",o,a,k,d,_,h,f,n,u,c=r[0].installEvent!=null&&A(r);return{c(){t=b("footer"),l=b("button"),e=g("Set theme to "),o=g(s),a=B(),c&&c.c(),k=B(),d=b("p"),_=g("Made by "),h=b("a"),f=g("@amin-pro"),this.h()},l(y){t=v(y,"FOOTER",{class:!0});var p=E(t);l=v(p,"BUTTON",{class:!0});var P=E(l);e=$(P,"Set theme to "),o=$(P,s),P.forEach(i),a=I(p),c&&c.l(p),k=I(p),d=v(p,"P",{});var F=E(d);_=$(F,"Made by "),h=v(F,"A",{href:!0});var w=E(h);f=$(w,"@amin-pro"),w.forEach(i),F.forEach(i),p.forEach(i),this.h()},h(){S(l,"class","svelte-1f3uf7m"),S(h,"href","https://github.com/amin-pro"),S(t,"class","svelte-1f3uf7m")},m(y,p){T(y,t,p),m(t,l),m(l,e),m(l,o),m(t,a),c&&c.m(t,null),m(t,k),m(t,d),m(d,_),m(d,h),m(h,f),n||(u=G(l,"click",O.toggleTheme),n=!0)},p(y,[p]){p&2&&s!==(s=y[1].darkTheme?"light \u2600\uFE0F":"dark \u{1F311}")&&H(o,s),y[0].installEvent!=null?c?c.p(y,p):(c=A(y),c.c(),c.m(t,k)):c&&(c.d(1),c=null)},i:M,o:M,d(y){y&&i(t),c&&c.d(),n=!1,u()}}}function tt(r,t,l){let e,s;N(r,X,a=>l(0,e=a)),N(r,O,a=>l(1,s=a));function o(){var a;(a=e.installEvent)==null||a.prompt(),e.setInstallEvent(null)}return[e,s,o]}class et extends U{constructor(t){super(),Y(this,t,tt,Z,C,{})}}function nt(r){let t,l;return{c(){t=b("style"),l=g(`:root {
				--c1: #fffffe; /* Background */
				--c2: #d1d1e9; /* Secondary */
				--c3: #6246ea; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #2b2c34; /* Text */
			}`)},l(e){t=v(e,"STYLE",{});var s=E(t);l=$(s,`:root {
				--c1: #fffffe; /* Background */
				--c2: #d1d1e9; /* Secondary */
				--c3: #6246ea; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #2b2c34; /* Text */
			}`),s.forEach(i)},m(e,s){T(e,t,s),m(t,l)},d(e){e&&i(t)}}}function lt(r){let t,l;return{c(){t=b("style"),l=g(`:root {
				--c1: #2b2c34; /* Background */
				--c2: #6246ea; /* Secondary */
				--c3: #d1d1e9; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #fffffe; /* Text */
			}`)},l(e){t=v(e,"STYLE",{});var s=E(t);l=$(s,`:root {
				--c1: #2b2c34; /* Background */
				--c2: #6246ea; /* Secondary */
				--c3: #d1d1e9; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #fffffe; /* Text */
			}`),s.forEach(i)},m(e,s){T(e,t,s),m(t,l)},d(e){e&&i(t)}}}function st(r){let t,l,e,s,o,a;function k(n,u){return n[0].darkTheme?lt:nt}let d=k(r),_=d(r);const h=r[2].default,f=J(h,r,r[1],null);return o=new et({}),{c(){_.c(),t=L(),l=B(),e=b("main"),f&&f.c(),s=B(),K(o.$$.fragment),this.h()},l(n){const u=R('[data-svelte="svelte-lruhyz"]',document.head);_.l(u),t=L(),u.forEach(i),l=I(n),e=v(n,"MAIN",{class:!0});var c=E(e);f&&f.l(c),c.forEach(i),s=I(n),j(o.$$.fragment,n),this.h()},h(){S(e,"class","svelte-1gziw1k")},m(n,u){_.m(document.head,null),m(document.head,t),T(n,l,u),T(n,e,u),f&&f.m(e,null),T(n,s,u),x(o,n,u),a=!0},p(n,[u]){d!==(d=k(n))&&(_.d(1),_=d(n),_&&(_.c(),_.m(t.parentNode,t))),f&&f.p&&(!a||u&2)&&D(f,h,n,n[1],a?V(h,n[1],u,null):Q(n[1]),null)},i(n){a||(q(f,n),q(o.$$.fragment,n),a=!0)},o(n){z(f,n),z(o.$$.fragment,n),a=!1},d(n){_.d(n),i(t),n&&i(l),n&&i(e),f&&f.d(n),n&&i(s),W(o,n)}}}function at(r,t,l){let e;N(r,O,a=>l(0,e=a));let{$$slots:s={},$$scope:o}=t;return r.$$set=a=>{"$$scope"in a&&l(1,o=a.$$scope)},[e,o,s]}class ft extends U{constructor(t){super(),Y(this,t,at,st,C,{})}}export{ft as default};
