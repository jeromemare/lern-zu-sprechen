import{g as r,c as i}from"./dom.66e762ac.js";const s=[Element,String],d=[null,document,document.body,document.scrollingElement,document.documentElement];function u(o,t){let e=r(t);if(e===void 0){if(o==null)return window;e=o.closest(".scroll,.scroll-y,.overflow-auto")}return d.includes(e)?window:e}function f(o){return o===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:o.scrollTop}function w(o){return o===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:o.scrollLeft}let n;function a(){if(n!==void 0)return n;const o=document.createElement("p"),t=document.createElement("div");i(o,{width:"100%",height:"200px"}),i(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(o),document.body.appendChild(t);const e=o.offsetWidth;t.style.overflow="scroll";let l=o.offsetWidth;return e===l&&(l=t.clientWidth),t.remove(),n=e-l,n}export{f as a,w as b,a as c,u as g,s};
