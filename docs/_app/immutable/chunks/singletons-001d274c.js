import{E as f,s as p}from"./index-2e9e6908.js";const n=[];function g(s,b=f){let o;const i=new Set;function c(e){if(p(s,e)&&(s=e,o)){const r=!n.length;for(const t of i)t[1](),n.push(t,s);if(r){for(let t=0;t<n.length;t+=2)n[t][0](n[t+1]);n.length=0}}}function a(e){c(e(s))}function l(e,r=f){const t=[e,r];return i.add(t),i.size===1&&(o=b(c)||f),e(s),()=>{i.delete(t),i.size===0&&(o(),o=null)}}return{set:c,update:a,subscribe:l}}let u="",d="";function q(s){u=s.base,d=s.assets||u}let h;function m(s){h=s.client}export{d as a,u as b,h as c,m as i,q as s,g as w};
