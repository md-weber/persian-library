const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-ehScQqZK.js","assets/firebase-DWdmN2kU.js"])))=>i.map(i=>d[i]);
import{c as g,a as y,u as E,b as L,d as v,e as P,_ as A}from"./vendor-ehScQqZK.js";import"./firebase-DWdmN2kU.js";import{e as b,f as O}from"./locales-SMPXp4XP.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&l(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const S="modulepreload",R=function(o){return"/"+o},d={},m=function(a,s,l){let e=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),n=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));e=Promise.allSettled(s.map(i=>{if(i=R(i),i in d)return;d[i]=!0;const u=i.endsWith(".css"),p=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${p}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":S,u||(c.as="script"),c.crossOrigin="",c.href=i,n&&c.setAttribute("nonce",n),document.head.appendChild(c),u)return new Promise((h,_)=>{c.addEventListener("load",h),c.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${i}`)))})}))}function r(t){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=t,window.dispatchEvent(n),!n.defaultPrevented)throw t}return e.then(t=>{for(const n of t||[])n.status==="rejected"&&r(n.reason);return a().catch(r)})},w=[{path:"/",name:"home",component:()=>m(()=>import("./vendor-ehScQqZK.js").then(o=>o.H),__vite__mapDeps([0,1]))},{path:"/login",name:"login",component:()=>m(()=>import("./vendor-ehScQqZK.js").then(o=>o.L),__vite__mapDeps([0,1]))},{path:"/register",name:"register",component:()=>m(()=>import("./vendor-ehScQqZK.js").then(o=>o.R),__vite__mapDeps([0,1]))},{path:"/admin",name:"admin",component:()=>m(()=>import("./vendor-ehScQqZK.js").then(o=>o.A),__vite__mapDeps([0,1])),meta:{requiresAdmin:!0}}],f=g({history:y(),routes:w});f.beforeEach((o,a,s)=>{const l=E();o.meta.requiresAdmin&&!l.isAdmin()?s("/"):s()});const I=localStorage.getItem("userLocale")||"fa",q=L({legacy:!1,locale:I,fallbackLocale:"en",messages:{en:b,fa:O}});v(A).use(q).use(P()).use(f).mount("#app");