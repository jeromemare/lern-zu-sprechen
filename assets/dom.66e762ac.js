import{c as v,k as z,h as u,g as B,G as _}from"./index.728f36ca.js";const M={xs:18,sm:24,md:32,lg:38,xl:46},j={size:String};function k(t,n=M){return v(()=>t.size!==void 0?{fontSize:t.size in n?`${n[t.size]}px`:t.size}:null)}function q(t,n){return t!==void 0&&t()||n}function P(t,n){if(t!==void 0){const r=t();if(r!=null)return r.slice()}return n}function c(t,n){return t!==void 0?n.concat(t()):n}const m="0 0 24 24",h=t=>t,d=t=>`ionicons ${t}`,b={"mdi-":t=>`mdi ${t}`,"icon-":h,"bt-":t=>`bt ${t}`,"eva-":t=>`eva ${t}`,"ion-md":d,"ion-ios":d,"ion-logo":d,"iconfont ":h,"ti-":t=>`themify-icon ${t}`,"bi-":t=>`bootstrap-icons ${t}`},x={o_:"-outlined",r_:"-round",s_:"-sharp"},S={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},F=new RegExp("^("+Object.keys(b).join("|")+")"),I=new RegExp("^("+Object.keys(x).join("|")+")"),y=new RegExp("^("+Object.keys(S).join("|")+")"),O=/^[Mm]\s?[-+]?\.?\d/,Q=/^img:/,C=/^svguse:/,U=/^ion-/,D=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var V=z({name:"QIcon",props:{...j,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(t,{slots:n}){const{proxy:{$q:r}}=B(),a=k(t),E=v(()=>"q-icon"+(t.left===!0?" on-left":"")+(t.right===!0?" on-right":"")+(t.color!==void 0?` text-${t.color}`:"")),o=v(()=>{let s,e=t.name;if(e==="none"||!e)return{none:!0};if(r.iconMapFn!==null){const i=r.iconMapFn(e);if(i!==void 0)if(i.icon!==void 0){if(e=i.icon,e==="none"||!e)return{none:!0}}else return{cls:i.cls,content:i.content!==void 0?i.content:" "}}if(O.test(e)===!0){const[i,f=m]=e.split("|");return{svg:!0,viewBox:f,nodes:i.split("&&").map($=>{const[R,p,w]=$.split("@@");return u("path",{style:p,d:R,transform:w})})}}if(Q.test(e)===!0)return{img:!0,src:e.substring(4)};if(C.test(e)===!0){const[i,f=m]=e.split("|");return{svguse:!0,src:i.substring(7),viewBox:f}}let l=" ";const g=e.match(F);if(g!==null)s=b[g[1]](e);else if(D.test(e)===!0)s=e;else if(U.test(e)===!0)s=`ionicons ion-${r.platform.is.ios===!0?"ios":"md"}${e.substring(3)}`;else if(y.test(e)===!0){s="notranslate material-symbols";const i=e.match(y);i!==null&&(e=e.substring(6),s+=S[i[1]]),l=e}else{s="notranslate material-icons";const i=e.match(I);i!==null&&(e=e.substring(2),s+=x[i[1]]),l=e}return{cls:s,content:l}});return()=>{const s={class:E.value,style:a.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?u(t.tag,s,q(n.default)):o.value.img===!0?u(t.tag,s,c(n.default,[u("img",{src:o.value.src})])):o.value.svg===!0?u(t.tag,s,c(n.default,[u("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?u(t.tag,s,c(n.default,[u("svg",{viewBox:o.value.viewBox},[u("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(s.class+=" "+o.value.cls),u(t.tag,s,c(n.default,[o.value.content])))}}});function A(t,n){const r=t.style;for(const a in n)r[a]=n[a]}function H(t){if(t==null)return;if(typeof t=="string")try{return document.querySelector(t)||void 0}catch{return}const n=_(t);if(n)return n.$el||n}export{V as Q,P as a,c as b,A as c,j as d,k as e,H as g,q as h,M as u};
