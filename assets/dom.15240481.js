import{G as i}from"./index.e691a435.js";function u(n,t){return n!==void 0&&n()||t}function c(n,t){if(n!==void 0){const r=n();if(r!=null)return r.slice()}return t}function f(n,t){return n!==void 0?t.concat(n()):t}function a(n,t){const r=n.style;for(const o in t)r[o]=t[o]}function d(n){if(n==null)return;if(typeof n=="string")try{return document.querySelector(n)||void 0}catch{return}const t=i(n);if(t)return t.$el||t}export{c as a,f as b,a as c,d as g,u as h};
