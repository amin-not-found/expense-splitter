import{S as L,i as w,s as U,l as b,r as k,a as S,m as v,n as $,u as E,h as f,c as B,p as g,b as T,F as _,G as z,v as A,E as M,H as Y,I as C,e as N,w as G,J as H,x as J,y as K,K as R,L as j,M as D,f as O,t as q,B as Q}from"../chunks/index-dffa484d.js";import{c as P}from"../chunks/stores-235862f0.js";import"../chunks/index-263b6c91.js";function V(r){let t,s,n,a=r[0].darkTheme?"light \u2600\uFE0F":"dark \u{1F311}",l,c,p,y,u,h,o,e,i;return{c(){t=b("footer"),s=b("button"),n=k("Set theme to "),l=k(a),c=S(),p=b("button"),y=k("Install expense splitter \u2B07\uFE0F"),u=S(),h=b("p"),o=k("Made by @amin-pro"),this.h()},l(m){t=v(m,"FOOTER",{class:!0});var d=$(t);s=v(d,"BUTTON",{class:!0});var x=$(s);n=E(x,"Set theme to "),l=E(x,a),x.forEach(f),c=B(d),p=v(d,"BUTTON",{class:!0});var F=$(p);y=E(F,"Install expense splitter \u2B07\uFE0F"),F.forEach(f),u=B(d),h=v(d,"P",{});var I=$(h);o=E(I,"Made by @amin-pro"),I.forEach(f),d.forEach(f),this.h()},h(){g(s,"class","svelte-1f3uf7m"),g(p,"class","svelte-1f3uf7m"),g(t,"class","svelte-1f3uf7m")},m(m,d){T(m,t,d),_(t,s),_(s,n),_(s,l),_(t,c),_(t,p),_(p,y),_(t,u),_(t,h),_(h,o),e||(i=z(s,"click",P.toggleTheme),e=!0)},p(m,[d]){d&1&&a!==(a=m[0].darkTheme?"light \u2600\uFE0F":"dark \u{1F311}")&&A(l,a)},i:M,o:M,d(m){m&&f(t),e=!1,i()}}}function W(r,t,s){let n;return Y(r,P,a=>s(0,n=a)),[n]}class X extends L{constructor(t){super(),w(this,t,W,V,U,{})}}function Z(r){let t,s;return{c(){t=b("style"),s=k(`:root {
				--c1: #fffffe; /* Background */
				--c2: #d1d1e9; /* Secondary */
				--c3: #6246ea; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #2b2c34; /* Text */
			}`)},l(n){t=v(n,"STYLE",{});var a=$(t);s=E(a,`:root {
				--c1: #fffffe; /* Background */
				--c2: #d1d1e9; /* Secondary */
				--c3: #6246ea; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #2b2c34; /* Text */
			}`),a.forEach(f)},m(n,a){T(n,t,a),_(t,s)},d(n){n&&f(t)}}}function tt(r){let t,s;return{c(){t=b("style"),s=k(`:root {
				--c1: #2b2c34; /* Background */
				--c2: #6246ea; /* Secondary */
				--c3: #d1d1e9; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #fffffe; /* Text */
			}`)},l(n){t=v(n,"STYLE",{});var a=$(t);s=E(a,`:root {
				--c1: #2b2c34; /* Background */
				--c2: #6246ea; /* Secondary */
				--c3: #d1d1e9; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #fffffe; /* Text */
			}`),a.forEach(f)},m(n,a){T(n,t,a),_(t,s)},d(n){n&&f(t)}}}function et(r){let t,s,n,a,l,c;function p(e,i){return e[0].darkTheme?tt:Z}let y=p(r),u=y(r);const h=r[2].default,o=C(h,r,r[1],null);return l=new X({}),{c(){u.c(),t=N(),s=S(),n=b("main"),o&&o.c(),a=S(),G(l.$$.fragment),this.h()},l(e){const i=H('[data-svelte="svelte-lruhyz"]',document.head);u.l(i),t=N(),i.forEach(f),s=B(e),n=v(e,"MAIN",{class:!0});var m=$(n);o&&o.l(m),m.forEach(f),a=B(e),J(l.$$.fragment,e),this.h()},h(){g(n,"class","svelte-m04eqt")},m(e,i){u.m(document.head,null),_(document.head,t),T(e,s,i),T(e,n,i),o&&o.m(n,null),T(e,a,i),K(l,e,i),c=!0},p(e,[i]){y!==(y=p(e))&&(u.d(1),u=y(e),u&&(u.c(),u.m(t.parentNode,t))),o&&o.p&&(!c||i&2)&&R(o,h,e,e[1],c?D(h,e[1],i,null):j(e[1]),null)},i(e){c||(O(o,e),O(l.$$.fragment,e),c=!0)},o(e){q(o,e),q(l.$$.fragment,e),c=!1},d(e){u.d(e),f(t),e&&f(s),e&&f(n),o&&o.d(e),e&&f(a),Q(l,e)}}}function nt(r,t,s){let n;Y(r,P,c=>s(0,n=c));let{$$slots:a={},$$scope:l}=t;return r.$$set=c=>{"$$scope"in c&&s(1,l=c.$$scope)},[n,l,a]}class rt extends L{constructor(t){super(),w(this,t,nt,et,U,{})}}export{rt as default};
