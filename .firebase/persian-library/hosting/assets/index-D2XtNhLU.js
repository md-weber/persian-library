(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ah(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const We={},Qs=[],Mn=()=>{},RT=()=>!1,bl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),lh=t=>t.startsWith("onUpdate:"),kt=Object.assign,ch=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ST=Object.prototype.hasOwnProperty,$e=(t,e)=>ST.call(t,e),me=Array.isArray,Xs=t=>Do(t)==="[object Map]",Il=t=>Do(t)==="[object Set]",Pf=t=>Do(t)==="[object Date]",Te=t=>typeof t=="function",yt=t=>typeof t=="string",Sn=t=>typeof t=="symbol",Ye=t=>t!==null&&typeof t=="object",Ag=t=>(Ye(t)||Te(t))&&Te(t.then)&&Te(t.catch),Rg=Object.prototype.toString,Do=t=>Rg.call(t),PT=t=>Do(t).slice(8,-1),Sg=t=>Do(t)==="[object Object]",uh=t=>yt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ji=ah(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},CT=/-(\w)/g,vn=wl(t=>t.replace(CT,(e,n)=>n?n.toUpperCase():"")),kT=/\B([A-Z])/g,As=wl(t=>t.replace(kT,"-$1").toLowerCase()),Al=wl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Oc=wl(t=>t?`on${Al(t)}`:""),Dr=(t,e)=>!Object.is(t,e),Ra=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Pg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ha=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Cf;const Rl=()=>Cf||(Cf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hh(t){if(me(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=yt(r)?DT(r):hh(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(yt(t)||Ye(t))return t}const NT=/;(?![^(]*\))/g,OT=/:([^]+)/,LT=/\/\*[^]*?\*\//g;function DT(t){const e={};return t.replace(LT,"").split(NT).forEach(n=>{if(n){const r=n.split(OT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Rs(t){let e="";if(yt(t))e=t;else if(me(t))for(let n=0;n<t.length;n++){const r=Rs(t[n]);r&&(e+=r+" ")}else if(Ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const xT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",MT=ah(xT);function Cg(t){return!!t||t===""}function VT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Sl(t[r],e[r]);return n}function Sl(t,e){if(t===e)return!0;let n=Pf(t),r=Pf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Sn(t),r=Sn(e),n||r)return t===e;if(n=me(t),r=me(e),n||r)return n&&r?VT(t,e):!1;if(n=Ye(t),r=Ye(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Sl(t[o],e[o]))return!1}}return String(t)===String(e)}function UT(t,e){return t.findIndex(n=>Sl(n,e))}const kg=t=>!!(t&&t.__v_isRef===!0),ee=t=>yt(t)?t:t==null?"":me(t)||Ye(t)&&(t.toString===Rg||!Te(t.toString))?kg(t)?ee(t.value):JSON.stringify(t,Ng,2):String(t),Ng=(t,e)=>kg(e)?Ng(t,e.value):Xs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Lc(r,i)+" =>"]=s,n),{})}:Il(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Lc(n))}:Sn(e)?Lc(e):Ye(e)&&!me(e)&&!Sg(e)?String(e):e,Lc=(t,e="")=>{var n;return Sn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jt;class Og{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Jt,!e&&Jt&&(this.index=(Jt.scopes||(Jt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Jt;try{return Jt=this,e()}finally{Jt=n}}}on(){Jt=this}off(){Jt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function dh(t){return new Og(t)}function Lg(){return Jt}function FT(t,e=!1){Jt&&Jt.cleanups.push(t)}let Ge;const Dc=new WeakSet;class Dg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Jt&&Jt.active&&Jt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Dc.has(this)&&(Dc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Mg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,kf(this),Vg(this);const e=Ge,n=wn;Ge=this,wn=!0;try{return this.fn()}finally{Ug(this),Ge=e,wn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)mh(e);this.deps=this.depsTail=void 0,kf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Dc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){uu(this)&&this.run()}get dirty(){return uu(this)}}let xg=0,Zi,eo;function Mg(t,e=!1){if(t.flags|=8,e){t.next=eo,eo=t;return}t.next=Zi,Zi=t}function fh(){xg++}function ph(){if(--xg>0)return;if(eo){let e=eo;for(eo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Zi;){let e=Zi;for(Zi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Vg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ug(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),mh(r),$T(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function uu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Fg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Fg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===fo))return;t.globalVersion=fo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!uu(t)){t.flags&=-3;return}const n=Ge,r=wn;Ge=t,wn=!0;try{Vg(t);const s=t.fn(t._value);(e.version===0||Dr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ge=n,wn=r,Ug(t),t.flags&=-3}}function mh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)mh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function $T(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let wn=!0;const $g=[];function Kr(){$g.push(wn),wn=!1}function zr(){const t=$g.pop();wn=t===void 0?!0:t}function kf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ge;Ge=void 0;try{e()}finally{Ge=n}}}let fo=0;class BT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ge||!wn||Ge===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ge)n=this.activeLink=new BT(Ge,this),Ge.deps?(n.prevDep=Ge.depsTail,Ge.depsTail.nextDep=n,Ge.depsTail=n):Ge.deps=Ge.depsTail=n,Bg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ge.depsTail,n.nextDep=void 0,Ge.depsTail.nextDep=n,Ge.depsTail=n,Ge.deps===n&&(Ge.deps=r)}return n}trigger(e){this.version++,fo++,this.notify(e)}notify(e){fh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ph()}}}function Bg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Bg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const qa=new WeakMap,ms=Symbol(""),hu=Symbol(""),po=Symbol("");function jt(t,e,n){if(wn&&Ge){let r=qa.get(t);r||qa.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new gh),s.map=r,s.key=n),s.track()}}function tr(t,e,n,r,s,i){const o=qa.get(t);if(!o){fo++;return}const a=c=>{c&&c.trigger()};if(fh(),e==="clear")o.forEach(a);else{const c=me(t),u=c&&uh(n);if(c&&n==="length"){const h=Number(r);o.forEach((f,m)=>{(m==="length"||m===po||!Sn(m)&&m>=h)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(po)),e){case"add":c?u&&a(o.get("length")):(a(o.get(ms)),Xs(t)&&a(o.get(hu)));break;case"delete":c||(a(o.get(ms)),Xs(t)&&a(o.get(hu)));break;case"set":Xs(t)&&a(o.get(ms));break}}ph()}function jT(t,e){const n=qa.get(t);return n&&n.get(e)}function Us(t){const e=Me(t);return e===t?e:(jt(e,"iterate",po),gn(t)?e:e.map(Ht))}function Pl(t){return jt(t=Me(t),"iterate",po),t}const HT={__proto__:null,[Symbol.iterator](){return xc(this,Symbol.iterator,Ht)},concat(...t){return Us(this).concat(...t.map(e=>me(e)?Us(e):e))},entries(){return xc(this,"entries",t=>(t[1]=Ht(t[1]),t))},every(t,e){return Qn(this,"every",t,e,void 0,arguments)},filter(t,e){return Qn(this,"filter",t,e,n=>n.map(Ht),arguments)},find(t,e){return Qn(this,"find",t,e,Ht,arguments)},findIndex(t,e){return Qn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Qn(this,"findLast",t,e,Ht,arguments)},findLastIndex(t,e){return Qn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Qn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Mc(this,"includes",t)},indexOf(...t){return Mc(this,"indexOf",t)},join(t){return Us(this).join(t)},lastIndexOf(...t){return Mc(this,"lastIndexOf",t)},map(t,e){return Qn(this,"map",t,e,void 0,arguments)},pop(){return $i(this,"pop")},push(...t){return $i(this,"push",t)},reduce(t,...e){return Nf(this,"reduce",t,e)},reduceRight(t,...e){return Nf(this,"reduceRight",t,e)},shift(){return $i(this,"shift")},some(t,e){return Qn(this,"some",t,e,void 0,arguments)},splice(...t){return $i(this,"splice",t)},toReversed(){return Us(this).toReversed()},toSorted(t){return Us(this).toSorted(t)},toSpliced(...t){return Us(this).toSpliced(...t)},unshift(...t){return $i(this,"unshift",t)},values(){return xc(this,"values",Ht)}};function xc(t,e,n){const r=Pl(t),s=r[e]();return r!==t&&!gn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const qT=Array.prototype;function Qn(t,e,n,r,s,i){const o=Pl(t),a=o!==t&&!gn(t),c=o[e];if(c!==qT[e]){const f=c.apply(t,i);return a?Ht(f):f}let u=n;o!==t&&(a?u=function(f,m){return n.call(this,Ht(f),m,t)}:n.length>2&&(u=function(f,m){return n.call(this,f,m,t)}));const h=c.call(o,u,r);return a&&s?s(h):h}function Nf(t,e,n,r){const s=Pl(t);let i=n;return s!==t&&(gn(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,Ht(a),c,t)}),s[e](i,...r)}function Mc(t,e,n){const r=Me(t);jt(r,"iterate",po);const s=r[e](...n);return(s===-1||s===!1)&&vh(n[0])?(n[0]=Me(n[0]),r[e](...n)):s}function $i(t,e,n=[]){Kr(),fh();const r=Me(t)[e].apply(t,n);return ph(),zr(),r}const WT=ah("__proto__,__v_isRef,__isVue"),jg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Sn));function GT(t){Sn(t)||(t=String(t));const e=Me(this);return jt(e,"has",t),e.hasOwnProperty(t)}class Hg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?nb:Kg:i?Gg:Wg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=me(e);if(!s){let c;if(o&&(c=HT[n]))return c;if(n==="hasOwnProperty")return GT}const a=Reflect.get(e,n,ht(e)?e:r);return(Sn(n)?jg.has(n):WT(n))||(s||jt(e,"get",n),i)?a:ht(a)?o&&uh(n)?a:a.value:Ye(a)?s?Yg(a):xo(a):a}}class qg extends Hg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=vs(i);if(!gn(r)&&!vs(r)&&(i=Me(i),r=Me(r)),!me(e)&&ht(i)&&!ht(r))return c?!1:(i.value=r,!0)}const o=me(e)&&uh(n)?Number(n)<e.length:$e(e,n),a=Reflect.set(e,n,r,ht(e)?e:s);return e===Me(s)&&(o?Dr(r,i)&&tr(e,"set",n,r):tr(e,"add",n,r)),a}deleteProperty(e,n){const r=$e(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&tr(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Sn(n)||!jg.has(n))&&jt(e,"has",n),r}ownKeys(e){return jt(e,"iterate",me(e)?"length":ms),Reflect.ownKeys(e)}}class KT extends Hg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const zT=new qg,YT=new KT,QT=new qg(!0);const du=t=>t,fa=t=>Reflect.getPrototypeOf(t);function XT(t,e,n){return function(...r){const s=this.__v_raw,i=Me(s),o=Xs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),h=n?du:e?fu:Ht;return!e&&jt(i,"iterate",c?hu:ms),{next(){const{value:f,done:m}=u.next();return m?{value:f,done:m}:{value:a?[h(f[0]),h(f[1])]:h(f),done:m}},[Symbol.iterator](){return this}}}}function pa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function JT(t,e){const n={get(s){const i=this.__v_raw,o=Me(i),a=Me(s);t||(Dr(s,a)&&jt(o,"get",s),jt(o,"get",a));const{has:c}=fa(o),u=e?du:t?fu:Ht;if(c.call(o,s))return u(i.get(s));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&jt(Me(s),"iterate",ms),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=Me(i),a=Me(s);return t||(Dr(s,a)&&jt(o,"has",s),jt(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=Me(a),u=e?du:t?fu:Ht;return!t&&jt(c,"iterate",ms),a.forEach((h,f)=>s.call(i,u(h),u(f),o))}};return kt(n,t?{add:pa("add"),set:pa("set"),delete:pa("delete"),clear:pa("clear")}:{add(s){!e&&!gn(s)&&!vs(s)&&(s=Me(s));const i=Me(this);return fa(i).has.call(i,s)||(i.add(s),tr(i,"add",s,s)),this},set(s,i){!e&&!gn(i)&&!vs(i)&&(i=Me(i));const o=Me(this),{has:a,get:c}=fa(o);let u=a.call(o,s);u||(s=Me(s),u=a.call(o,s));const h=c.call(o,s);return o.set(s,i),u?Dr(i,h)&&tr(o,"set",s,i):tr(o,"add",s,i),this},delete(s){const i=Me(this),{has:o,get:a}=fa(i);let c=o.call(i,s);c||(s=Me(s),c=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return c&&tr(i,"delete",s,void 0),u},clear(){const s=Me(this),i=s.size!==0,o=s.clear();return i&&tr(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=XT(s,t,e)}),n}function _h(t,e){const n=JT(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get($e(n,s)&&s in r?n:r,s,i)}const ZT={get:_h(!1,!1)},eb={get:_h(!1,!0)},tb={get:_h(!0,!1)};const Wg=new WeakMap,Gg=new WeakMap,Kg=new WeakMap,nb=new WeakMap;function rb(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sb(t){return t.__v_skip||!Object.isExtensible(t)?0:rb(PT(t))}function xo(t){return vs(t)?t:yh(t,!1,zT,ZT,Wg)}function zg(t){return yh(t,!1,QT,eb,Gg)}function Yg(t){return yh(t,!0,YT,tb,Kg)}function yh(t,e,n,r,s){if(!Ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=sb(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function xr(t){return vs(t)?xr(t.__v_raw):!!(t&&t.__v_isReactive)}function vs(t){return!!(t&&t.__v_isReadonly)}function gn(t){return!!(t&&t.__v_isShallow)}function vh(t){return t?!!t.__v_raw:!1}function Me(t){const e=t&&t.__v_raw;return e?Me(e):t}function Eh(t){return!$e(t,"__v_skip")&&Object.isExtensible(t)&&Pg(t,"__v_skip",!0),t}const Ht=t=>Ye(t)?xo(t):t,fu=t=>Ye(t)?Yg(t):t;function ht(t){return t?t.__v_isRef===!0:!1}function Ce(t){return Qg(t,!1)}function Th(t){return Qg(t,!0)}function Qg(t,e){return ht(t)?t:new ib(t,e)}class ib{constructor(e,n){this.dep=new gh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Me(e),this._value=n?e:Ht(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||gn(e)||vs(e);e=r?e:Me(e),Dr(e,n)&&(this._rawValue=e,this._value=r?e:Ht(e),this.dep.trigger())}}function Ie(t){return ht(t)?t.value:t}const ob={get:(t,e,n)=>e==="__v_raw"?t:Ie(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ht(s)&&!ht(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Xg(t){return xr(t)?t:new Proxy(t,ob)}function ab(t){const e=me(t)?new Array(t.length):{};for(const n in t)e[n]=cb(t,n);return e}class lb{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return jT(Me(this._object),this._key)}}function cb(t,e,n){const r=t[e];return ht(r)?r:new lb(t,e,n)}class ub{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new gh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ge!==this)return Mg(this,!0),!0}get value(){const e=this.dep.track();return Fg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function hb(t,e,n=!1){let r,s;return Te(t)?r=t:(r=t.get,s=t.set),new ub(r,s,n)}const ma={},Wa=new WeakMap;let us;function db(t,e=!1,n=us){if(n){let r=Wa.get(n);r||Wa.set(n,r=[]),r.push(t)}}function fb(t,e,n=We){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,u=R=>s?R:gn(R)||s===!1||s===0?nr(R,1):nr(R);let h,f,m,g,P=!1,C=!1;if(ht(t)?(f=()=>t.value,P=gn(t)):xr(t)?(f=()=>u(t),P=!0):me(t)?(C=!0,P=t.some(R=>xr(R)||gn(R)),f=()=>t.map(R=>{if(ht(R))return R.value;if(xr(R))return u(R);if(Te(R))return c?c(R,2):R()})):Te(t)?e?f=c?()=>c(t,2):t:f=()=>{if(m){Kr();try{m()}finally{zr()}}const R=us;us=h;try{return c?c(t,3,[g]):t(g)}finally{us=R}}:f=Mn,e&&s){const R=f,U=s===!0?1/0:s;f=()=>nr(R(),U)}const N=Lg(),F=()=>{h.stop(),N&&N.active&&ch(N.effects,h)};if(i&&e){const R=e;e=(...U)=>{R(...U),F()}}let H=C?new Array(t.length).fill(ma):ma;const w=R=>{if(!(!(h.flags&1)||!h.dirty&&!R))if(e){const U=h.run();if(s||P||(C?U.some((B,b)=>Dr(B,H[b])):Dr(U,H))){m&&m();const B=us;us=h;try{const b=[U,H===ma?void 0:C&&H[0]===ma?[]:H,g];c?c(e,3,b):e(...b),H=U}finally{us=B}}}else h.run()};return a&&a(w),h=new Dg(f),h.scheduler=o?()=>o(w,!1):w,g=R=>db(R,!1,h),m=h.onStop=()=>{const R=Wa.get(h);if(R){if(c)c(R,4);else for(const U of R)U();Wa.delete(h)}},e?r?w(!0):H=h.run():o?o(w.bind(null,!0),!0):h.run(),F.pause=h.pause.bind(h),F.resume=h.resume.bind(h),F.stop=F,F}function nr(t,e=1/0,n){if(e<=0||!Ye(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ht(t))nr(t.value,e,n);else if(me(t))for(let r=0;r<t.length;r++)nr(t[r],e,n);else if(Il(t)||Xs(t))t.forEach(r=>{nr(r,e,n)});else if(Sg(t)){for(const r in t)nr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&nr(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mo(t,e,n,r){try{return r?t(...r):t()}catch(s){Cl(s,e,n)}}function Hn(t,e,n,r){if(Te(t)){const s=Mo(t,e,n,r);return s&&Ag(s)&&s.catch(i=>{Cl(i,e,n)}),s}if(me(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Hn(t[i],e,n,r));return s}}function Cl(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||We;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,c,u)===!1)return}a=a.parent}if(i){Kr(),Mo(i,null,10,[t,c,u]),zr();return}}pb(t,n,s,r,o)}function pb(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Zt=[];let Nn=-1;const Js=[];let Ar=null,Bs=0;const Jg=Promise.resolve();let Ga=null;function kl(t){const e=Ga||Jg;return t?e.then(this?t.bind(this):t):e}function mb(t){let e=Nn+1,n=Zt.length;for(;e<n;){const r=e+n>>>1,s=Zt[r],i=mo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function bh(t){if(!(t.flags&1)){const e=mo(t),n=Zt[Zt.length-1];!n||!(t.flags&2)&&e>=mo(n)?Zt.push(t):Zt.splice(mb(e),0,t),t.flags|=1,Zg()}}function Zg(){Ga||(Ga=Jg.then(t_))}function gb(t){me(t)?Js.push(...t):Ar&&t.id===-1?Ar.splice(Bs+1,0,t):t.flags&1||(Js.push(t),t.flags|=1),Zg()}function Of(t,e,n=Nn+1){for(;n<Zt.length;n++){const r=Zt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Zt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function e_(t){if(Js.length){const e=[...new Set(Js)].sort((n,r)=>mo(n)-mo(r));if(Js.length=0,Ar){Ar.push(...e);return}for(Ar=e,Bs=0;Bs<Ar.length;Bs++){const n=Ar[Bs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ar=null,Bs=0}}const mo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function t_(t){try{for(Nn=0;Nn<Zt.length;Nn++){const e=Zt[Nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Mo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Nn<Zt.length;Nn++){const e=Zt[Nn];e&&(e.flags&=-2)}Nn=-1,Zt.length=0,e_(),Ga=null,(Zt.length||Js.length)&&t_()}}let Tt=null,n_=null;function Ka(t){const e=Tt;return Tt=t,n_=t&&t.type.__scopeId||null,e}function Vn(t,e=Tt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Bf(-1);const i=Ka(e);let o;try{o=t(...s)}finally{Ka(i),r._d&&Bf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function nt(t,e){if(Tt===null)return t;const n=Ll(Tt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=We]=e[s];i&&(Te(i)&&(i={mounted:i,updated:i}),i.deep&&nr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function os(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Kr(),Hn(c,n,8,[t.el,a,t,e]),zr())}}const _b=Symbol("_vte"),yb=t=>t.__isTeleport;function Ih(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ih(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Vo(t,e){return Te(t)?kt({name:t.name},e,{setup:t}):t}function r_(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function za(t,e,n,r,s=!1){if(me(t)){t.forEach((P,C)=>za(P,e&&(me(e)?e[C]:e),n,r,s));return}if(Zs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&za(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ll(r.component):r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,h=a.refs===We?a.refs={}:a.refs,f=a.setupState,m=Me(f),g=f===We?()=>!1:P=>$e(m,P);if(u!=null&&u!==c&&(yt(u)?(h[u]=null,g(u)&&(f[u]=null)):ht(u)&&(u.value=null)),Te(c))Mo(c,a,12,[o,h]);else{const P=yt(c),C=ht(c);if(P||C){const N=()=>{if(t.f){const F=P?g(c)?f[c]:h[c]:c.value;s?me(F)&&ch(F,i):me(F)?F.includes(i)||F.push(i):P?(h[c]=[i],g(c)&&(f[c]=h[c])):(c.value=[i],t.k&&(h[t.k]=c.value))}else P?(h[c]=o,g(c)&&(f[c]=o)):C&&(c.value=o,t.k&&(h[t.k]=o))};o?(N.id=-1,ln(N,n)):N()}}}Rl().requestIdleCallback;Rl().cancelIdleCallback;const Zs=t=>!!t.type.__asyncLoader,s_=t=>t.type.__isKeepAlive;function vb(t,e){i_(t,"a",e)}function Eb(t,e){i_(t,"da",e)}function i_(t,e,n=Pt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Nl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)s_(s.parent.vnode)&&Tb(r,e,n,s),s=s.parent}}function Tb(t,e,n,r){const s=Nl(e,t,r,!0);wh(()=>{ch(r[e],s)},n)}function Nl(t,e,n=Pt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Kr();const a=Fo(n),c=Hn(e,n,t,o);return a(),zr(),c});return r?s.unshift(i):s.push(i),i}}const _r=t=>(e,n=Pt)=>{(!vo||t==="sp")&&Nl(t,(...r)=>e(...r),n)},o_=_r("bm"),Ei=_r("m"),bb=_r("bu"),Ib=_r("u"),wb=_r("bum"),wh=_r("um"),Ab=_r("sp"),Rb=_r("rtg"),Sb=_r("rtc");function Pb(t,e=Pt){Nl("ec",t,e)}const Cb="components";function Ya(t,e){return Nb(Cb,t,!0,e)||t}const kb=Symbol.for("v-ndc");function Nb(t,e,n=!0,r=!1){const s=Tt||Pt;if(s){const i=s.type;{const a=vI(i,!1);if(a&&(a===e||a===vn(e)||a===Al(vn(e))))return i}const o=Lf(s[t]||i[t],e)||Lf(s.appContext[t],e);return!o&&r?i:o}}function Lf(t,e){return t&&(t[e]||t[vn(e)]||t[Al(vn(e))])}function ii(t,e,n,r){let s;const i=n,o=me(t);if(o||yt(t)){const a=o&&xr(t);let c=!1;a&&(c=!gn(t),t=Pl(t)),s=new Array(t.length);for(let u=0,h=t.length;u<h;u++)s[u]=e(c?Ht(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Ye(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}function Ob(t,e,n={},r,s){if(Tt.ce||Tt.parent&&Zs(Tt.parent)&&Tt.parent.ce)return pe(),Rn(ft,null,[ot("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),pe();const o=i&&a_(i(n)),a=n.key||o&&o.key,c=Rn(ft,{key:(a&&!Sn(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function a_(t){return t.some(e=>_o(e)?!(e.type===Fr||e.type===ft&&!a_(e.children)):!0)?t:null}const pu=t=>t?S_(t)?Ll(t):pu(t.parent):null,to=kt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>pu(t.parent),$root:t=>pu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ah(t),$forceUpdate:t=>t.f||(t.f=()=>{bh(t.update)}),$nextTick:t=>t.n||(t.n=kl.bind(t.proxy)),$watch:t=>eI.bind(t)}),Vc=(t,e)=>t!==We&&!t.__isScriptSetup&&$e(t,e),Lb={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Vc(r,e))return o[e]=1,r[e];if(s!==We&&$e(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&$e(u,e))return o[e]=3,i[e];if(n!==We&&$e(n,e))return o[e]=4,n[e];mu&&(o[e]=0)}}const h=to[e];let f,m;if(h)return e==="$attrs"&&jt(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==We&&$e(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,$e(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Vc(s,e)?(s[e]=n,!0):r!==We&&$e(r,e)?(r[e]=n,!0):$e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==We&&$e(t,o)||Vc(e,o)||(a=i[0])&&$e(a,o)||$e(r,o)||$e(to,o)||$e(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:$e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Df(t){return me(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let mu=!0;function Db(t){const e=Ah(t),n=t.proxy,r=t.ctx;mu=!1,e.beforeCreate&&xf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:f,mounted:m,beforeUpdate:g,updated:P,activated:C,deactivated:N,beforeDestroy:F,beforeUnmount:H,destroyed:w,unmounted:R,render:U,renderTracked:B,renderTriggered:b,errorCaptured:_,serverPrefetch:y,expose:k,inheritAttrs:L,components:O,directives:S,filters:st}=e;if(u&&xb(u,r,null),o)for(const he in o){const be=o[he];Te(be)&&(r[he]=be.bind(n))}if(s){const he=s.call(n,n);Ye(he)&&(t.data=xo(he))}if(mu=!0,i)for(const he in i){const be=i[he],vt=Te(be)?be.bind(n,n):Te(be.get)?be.get.bind(n,n):Mn,Nt=!Te(be)&&Te(be.set)?be.set.bind(n):Mn,et=ze({get:vt,set:Nt});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>et.value,set:Ue=>et.value=Ue})}if(a)for(const he in a)l_(a[he],r,n,he);if(c){const he=Te(c)?c.call(n):c;Reflect.ownKeys(he).forEach(be=>{Sa(be,he[be])})}h&&xf(h,t,"c");function Se(he,be){me(be)?be.forEach(vt=>he(vt.bind(n))):be&&he(be.bind(n))}if(Se(o_,f),Se(Ei,m),Se(bb,g),Se(Ib,P),Se(vb,C),Se(Eb,N),Se(Pb,_),Se(Sb,B),Se(Rb,b),Se(wb,H),Se(wh,R),Se(Ab,y),me(k))if(k.length){const he=t.exposed||(t.exposed={});k.forEach(be=>{Object.defineProperty(he,be,{get:()=>n[be],set:vt=>n[be]=vt})})}else t.exposed||(t.exposed={});U&&t.render===Mn&&(t.render=U),L!=null&&(t.inheritAttrs=L),O&&(t.components=O),S&&(t.directives=S),y&&r_(t)}function xb(t,e,n=Mn){me(t)&&(t=gu(t));for(const r in t){const s=t[r];let i;Ye(s)?"default"in s?i=_n(s.from||r,s.default,!0):i=_n(s.from||r):i=_n(s),ht(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function xf(t,e,n){Hn(me(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function l_(t,e,n,r){let s=r.includes(".")?b_(n,r):()=>n[r];if(yt(t)){const i=e[t];Te(i)&&An(s,i)}else if(Te(t))An(s,t.bind(n));else if(Ye(t))if(me(t))t.forEach(i=>l_(i,e,n,r));else{const i=Te(t.handler)?t.handler.bind(n):e[t.handler];Te(i)&&An(s,i,t)}}function Ah(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Qa(c,u,o,!0)),Qa(c,e,o)),Ye(e)&&i.set(e,c),c}function Qa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Qa(t,i,n,!0),s&&s.forEach(o=>Qa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Mb[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Mb={data:Mf,props:Vf,emits:Vf,methods:Wi,computed:Wi,beforeCreate:Qt,created:Qt,beforeMount:Qt,mounted:Qt,beforeUpdate:Qt,updated:Qt,beforeDestroy:Qt,beforeUnmount:Qt,destroyed:Qt,unmounted:Qt,activated:Qt,deactivated:Qt,errorCaptured:Qt,serverPrefetch:Qt,components:Wi,directives:Wi,watch:Ub,provide:Mf,inject:Vb};function Mf(t,e){return e?t?function(){return kt(Te(t)?t.call(this,this):t,Te(e)?e.call(this,this):e)}:e:t}function Vb(t,e){return Wi(gu(t),gu(e))}function gu(t){if(me(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Qt(t,e){return t?[...new Set([].concat(t,e))]:e}function Wi(t,e){return t?kt(Object.create(null),t,e):e}function Vf(t,e){return t?me(t)&&me(e)?[...new Set([...t,...e])]:kt(Object.create(null),Df(t),Df(e??{})):e}function Ub(t,e){if(!t)return e;if(!e)return t;const n=kt(Object.create(null),t);for(const r in e)n[r]=Qt(t[r],e[r]);return n}function c_(){return{app:null,config:{isNativeTag:RT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fb=0;function $b(t,e){return function(r,s=null){Te(r)||(r=kt({},r)),s!=null&&!Ye(s)&&(s=null);const i=c_(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:Fb++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:TI,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&Te(h.install)?(o.add(h),h.install(u,...f)):Te(h)&&(o.add(h),h(u,...f))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,f){return f?(i.components[h]=f,u):i.components[h]},directive(h,f){return f?(i.directives[h]=f,u):i.directives[h]},mount(h,f,m){if(!c){const g=u._ceVNode||ot(r,s);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),f&&e?e(g,h):t(g,h,m),c=!0,u._container=h,h.__vue_app__=u,Ll(g.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Hn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return i.provides[h]=f,u},runWithContext(h){const f=gs;gs=u;try{return h()}finally{gs=f}}};return u}}let gs=null;function Sa(t,e){if(Pt){let n=Pt.provides;const r=Pt.parent&&Pt.parent.provides;r===n&&(n=Pt.provides=Object.create(r)),n[t]=e}}function _n(t,e,n=!1){const r=Pt||Tt;if(r||gs){const s=gs?gs._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Te(e)?e.call(r&&r.proxy):e}}function Bb(){return!!(Pt||Tt||gs)}const u_={},h_=()=>Object.create(u_),d_=t=>Object.getPrototypeOf(t)===u_;function jb(t,e,n,r=!1){const s={},i=h_();t.propsDefaults=Object.create(null),f_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:zg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Hb(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Me(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let m=h[f];if(Ol(t.emitsOptions,m))continue;const g=e[m];if(c)if($e(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const P=vn(m);s[P]=_u(c,a,P,g,t,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{f_(t,e,s,i)&&(u=!0);let h;for(const f in a)(!e||!$e(e,f)&&((h=As(f))===f||!$e(e,h)))&&(c?n&&(n[f]!==void 0||n[h]!==void 0)&&(s[f]=_u(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!$e(e,f))&&(delete i[f],u=!0)}u&&tr(t.attrs,"set","")}function f_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ji(c))continue;const u=e[c];let h;s&&$e(s,h=vn(c))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:Ol(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=Me(n),u=a||We;for(let h=0;h<i.length;h++){const f=i[h];n[f]=_u(s,c,f,u[f],t,!$e(u,f))}}return o}function _u(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=$e(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Te(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=Fo(s);r=u[n]=c.call(null,e),h()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===As(n))&&(r=!0))}return r}const qb=new WeakMap;function p_(t,e,n=!1){const r=n?qb:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Te(t)){const h=f=>{c=!0;const[m,g]=p_(f,e,!0);kt(o,m),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return Ye(t)&&r.set(t,Qs),Qs;if(me(i))for(let h=0;h<i.length;h++){const f=vn(i[h]);Uf(f)&&(o[f]=We)}else if(i)for(const h in i){const f=vn(h);if(Uf(f)){const m=i[h],g=o[f]=me(m)||Te(m)?{type:m}:kt({},m),P=g.type;let C=!1,N=!0;if(me(P))for(let F=0;F<P.length;++F){const H=P[F],w=Te(H)&&H.name;if(w==="Boolean"){C=!0;break}else w==="String"&&(N=!1)}else C=Te(P)&&P.name==="Boolean";g[0]=C,g[1]=N,(C||$e(g,"default"))&&a.push(f)}}const u=[o,a];return Ye(t)&&r.set(t,u),u}function Uf(t){return t[0]!=="$"&&!Ji(t)}const m_=t=>t[0]==="_"||t==="$stable",Rh=t=>me(t)?t.map(On):[On(t)],Wb=(t,e,n)=>{if(e._n)return e;const r=Vn((...s)=>Rh(e(...s)),n);return r._c=!1,r},g_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(m_(s))continue;const i=t[s];if(Te(i))e[s]=Wb(s,i,r);else if(i!=null){const o=Rh(i);e[s]=()=>o}}},__=(t,e)=>{const n=Rh(e);t.slots.default=()=>n},y_=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Gb=(t,e,n)=>{const r=t.slots=h_();if(t.vnode.shapeFlag&32){const s=e._;s?(y_(r,e,n),n&&Pg(r,"_",s,!0)):g_(e,r)}else e&&__(t,e)},Kb=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=We;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:y_(s,e,n):(i=!e.$stable,g_(e,s)),o=e}else e&&(__(t,e),o={default:1});if(i)for(const a in s)!m_(a)&&o[a]==null&&delete s[a]},ln=aI;function zb(t){return Yb(t)}function Yb(t,e){const n=Rl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:m,setScopeId:g=Mn,insertStaticContent:P}=t,C=(A,E,V,Y=null,W=null,X=null,re=void 0,T=null,I=!!E.dynamicChildren)=>{if(A===E)return;A&&!Bi(A,E)&&(Y=G(A),Ue(A,W,X,!0),A=null),E.patchFlag===-2&&(I=!1,E.dynamicChildren=null);const{type:D,ref:z,shapeFlag:Z}=E;switch(D){case Uo:N(A,E,V,Y);break;case Fr:F(A,E,V,Y);break;case $c:A==null&&H(E,V,Y,re);break;case ft:O(A,E,V,Y,W,X,re,T,I);break;default:Z&1?U(A,E,V,Y,W,X,re,T,I):Z&6?S(A,E,V,Y,W,X,re,T,I):(Z&64||Z&128)&&D.process(A,E,V,Y,W,X,re,T,I,oe)}z!=null&&W&&za(z,A&&A.ref,X,E||A,!E)},N=(A,E,V,Y)=>{if(A==null)r(E.el=a(E.children),V,Y);else{const W=E.el=A.el;E.children!==A.children&&u(W,E.children)}},F=(A,E,V,Y)=>{A==null?r(E.el=c(E.children||""),V,Y):E.el=A.el},H=(A,E,V,Y)=>{[A.el,A.anchor]=P(A.children,E,V,Y,A.el,A.anchor)},w=({el:A,anchor:E},V,Y)=>{let W;for(;A&&A!==E;)W=m(A),r(A,V,Y),A=W;r(E,V,Y)},R=({el:A,anchor:E})=>{let V;for(;A&&A!==E;)V=m(A),s(A),A=V;s(E)},U=(A,E,V,Y,W,X,re,T,I)=>{E.type==="svg"?re="svg":E.type==="math"&&(re="mathml"),A==null?B(E,V,Y,W,X,re,T,I):y(A,E,W,X,re,T,I)},B=(A,E,V,Y,W,X,re,T)=>{let I,D;const{props:z,shapeFlag:Z,transition:Q,dirs:M}=A;if(I=A.el=o(A.type,X,z&&z.is,z),Z&8?h(I,A.children):Z&16&&_(A.children,I,null,Y,W,Uc(A,X),re,T),M&&os(A,null,Y,"created"),b(I,A,A.scopeId,re,Y),z){for(const le in z)le!=="value"&&!Ji(le)&&i(I,le,null,z[le],X,Y);"value"in z&&i(I,"value",null,z.value,X),(D=z.onVnodeBeforeMount)&&kn(D,Y,A)}M&&os(A,null,Y,"beforeMount");const j=Qb(W,Q);j&&Q.beforeEnter(I),r(I,E,V),((D=z&&z.onVnodeMounted)||j||M)&&ln(()=>{D&&kn(D,Y,A),j&&Q.enter(I),M&&os(A,null,Y,"mounted")},W)},b=(A,E,V,Y,W)=>{if(V&&g(A,V),Y)for(let X=0;X<Y.length;X++)g(A,Y[X]);if(W){let X=W.subTree;if(E===X||w_(X.type)&&(X.ssContent===E||X.ssFallback===E)){const re=W.vnode;b(A,re,re.scopeId,re.slotScopeIds,W.parent)}}},_=(A,E,V,Y,W,X,re,T,I=0)=>{for(let D=I;D<A.length;D++){const z=A[D]=T?Rr(A[D]):On(A[D]);C(null,z,E,V,Y,W,X,re,T)}},y=(A,E,V,Y,W,X,re)=>{const T=E.el=A.el;let{patchFlag:I,dynamicChildren:D,dirs:z}=E;I|=A.patchFlag&16;const Z=A.props||We,Q=E.props||We;let M;if(V&&as(V,!1),(M=Q.onVnodeBeforeUpdate)&&kn(M,V,E,A),z&&os(E,A,V,"beforeUpdate"),V&&as(V,!0),(Z.innerHTML&&Q.innerHTML==null||Z.textContent&&Q.textContent==null)&&h(T,""),D?k(A.dynamicChildren,D,T,V,Y,Uc(E,W),X):re||be(A,E,T,null,V,Y,Uc(E,W),X,!1),I>0){if(I&16)L(T,Z,Q,V,W);else if(I&2&&Z.class!==Q.class&&i(T,"class",null,Q.class,W),I&4&&i(T,"style",Z.style,Q.style,W),I&8){const j=E.dynamicProps;for(let le=0;le<j.length;le++){const ue=j[le],Qe=Z[ue],it=Q[ue];(it!==Qe||ue==="value")&&i(T,ue,Qe,it,W,V)}}I&1&&A.children!==E.children&&h(T,E.children)}else!re&&D==null&&L(T,Z,Q,V,W);((M=Q.onVnodeUpdated)||z)&&ln(()=>{M&&kn(M,V,E,A),z&&os(E,A,V,"updated")},Y)},k=(A,E,V,Y,W,X,re)=>{for(let T=0;T<E.length;T++){const I=A[T],D=E[T],z=I.el&&(I.type===ft||!Bi(I,D)||I.shapeFlag&70)?f(I.el):V;C(I,D,z,null,Y,W,X,re,!0)}},L=(A,E,V,Y,W)=>{if(E!==V){if(E!==We)for(const X in E)!Ji(X)&&!(X in V)&&i(A,X,E[X],null,W,Y);for(const X in V){if(Ji(X))continue;const re=V[X],T=E[X];re!==T&&X!=="value"&&i(A,X,T,re,W,Y)}"value"in V&&i(A,"value",E.value,V.value,W)}},O=(A,E,V,Y,W,X,re,T,I)=>{const D=E.el=A?A.el:a(""),z=E.anchor=A?A.anchor:a("");let{patchFlag:Z,dynamicChildren:Q,slotScopeIds:M}=E;M&&(T=T?T.concat(M):M),A==null?(r(D,V,Y),r(z,V,Y),_(E.children||[],V,z,W,X,re,T,I)):Z>0&&Z&64&&Q&&A.dynamicChildren?(k(A.dynamicChildren,Q,V,W,X,re,T),(E.key!=null||W&&E===W.subTree)&&v_(A,E,!0)):be(A,E,V,z,W,X,re,T,I)},S=(A,E,V,Y,W,X,re,T,I)=>{E.slotScopeIds=T,A==null?E.shapeFlag&512?W.ctx.activate(E,V,Y,re,I):st(E,V,Y,W,X,re,I):mt(A,E,I)},st=(A,E,V,Y,W,X,re)=>{const T=A.component=pI(A,Y,W);if(s_(A)&&(T.ctx.renderer=oe),mI(T,!1,re),T.asyncDep){if(W&&W.registerDep(T,Se,re),!A.el){const I=T.subTree=ot(Fr);F(null,I,E,V)}}else Se(T,A,E,V,W,X,re)},mt=(A,E,V)=>{const Y=E.component=A.component;if(iI(A,E,V))if(Y.asyncDep&&!Y.asyncResolved){he(Y,E,V);return}else Y.next=E,Y.update();else E.el=A.el,Y.vnode=E},Se=(A,E,V,Y,W,X,re)=>{const T=()=>{if(A.isMounted){let{next:Z,bu:Q,u:M,parent:j,vnode:le}=A;{const At=E_(A);if(At){Z&&(Z.el=le.el,he(A,Z,re)),At.asyncDep.then(()=>{A.isUnmounted||T()});return}}let ue=Z,Qe;as(A,!1),Z?(Z.el=le.el,he(A,Z,re)):Z=le,Q&&Ra(Q),(Qe=Z.props&&Z.props.onVnodeBeforeUpdate)&&kn(Qe,j,Z,le),as(A,!0);const it=Fc(A),tt=A.subTree;A.subTree=it,C(tt,it,f(tt.el),G(tt),A,W,X),Z.el=it.el,ue===null&&oI(A,it.el),M&&ln(M,W),(Qe=Z.props&&Z.props.onVnodeUpdated)&&ln(()=>kn(Qe,j,Z,le),W)}else{let Z;const{el:Q,props:M}=E,{bm:j,m:le,parent:ue,root:Qe,type:it}=A,tt=Zs(E);if(as(A,!1),j&&Ra(j),!tt&&(Z=M&&M.onVnodeBeforeMount)&&kn(Z,ue,E),as(A,!0),Q&&De){const At=()=>{A.subTree=Fc(A),De(Q,A.subTree,A,W,null)};tt&&it.__asyncHydrate?it.__asyncHydrate(Q,A,At):At()}else{Qe.ce&&Qe.ce._injectChildStyle(it);const At=A.subTree=Fc(A);C(null,At,V,Y,A,W,X),E.el=At.el}if(le&&ln(le,W),!tt&&(Z=M&&M.onVnodeMounted)){const At=E;ln(()=>kn(Z,ue,At),W)}(E.shapeFlag&256||ue&&Zs(ue.vnode)&&ue.vnode.shapeFlag&256)&&A.a&&ln(A.a,W),A.isMounted=!0,E=V=Y=null}};A.scope.on();const I=A.effect=new Dg(T);A.scope.off();const D=A.update=I.run.bind(I),z=A.job=I.runIfDirty.bind(I);z.i=A,z.id=A.uid,I.scheduler=()=>bh(z),as(A,!0),D()},he=(A,E,V)=>{E.component=A;const Y=A.vnode.props;A.vnode=E,A.next=null,Hb(A,E.props,Y,V),Kb(A,E.children,V),Kr(),Of(A),zr()},be=(A,E,V,Y,W,X,re,T,I=!1)=>{const D=A&&A.children,z=A?A.shapeFlag:0,Z=E.children,{patchFlag:Q,shapeFlag:M}=E;if(Q>0){if(Q&128){Nt(D,Z,V,Y,W,X,re,T,I);return}else if(Q&256){vt(D,Z,V,Y,W,X,re,T,I);return}}M&8?(z&16&&gt(D,W,X),Z!==D&&h(V,Z)):z&16?M&16?Nt(D,Z,V,Y,W,X,re,T,I):gt(D,W,X,!0):(z&8&&h(V,""),M&16&&_(Z,V,Y,W,X,re,T,I))},vt=(A,E,V,Y,W,X,re,T,I)=>{A=A||Qs,E=E||Qs;const D=A.length,z=E.length,Z=Math.min(D,z);let Q;for(Q=0;Q<Z;Q++){const M=E[Q]=I?Rr(E[Q]):On(E[Q]);C(A[Q],M,V,null,W,X,re,T,I)}D>z?gt(A,W,X,!0,!1,Z):_(E,V,Y,W,X,re,T,I,Z)},Nt=(A,E,V,Y,W,X,re,T,I)=>{let D=0;const z=E.length;let Z=A.length-1,Q=z-1;for(;D<=Z&&D<=Q;){const M=A[D],j=E[D]=I?Rr(E[D]):On(E[D]);if(Bi(M,j))C(M,j,V,null,W,X,re,T,I);else break;D++}for(;D<=Z&&D<=Q;){const M=A[Z],j=E[Q]=I?Rr(E[Q]):On(E[Q]);if(Bi(M,j))C(M,j,V,null,W,X,re,T,I);else break;Z--,Q--}if(D>Z){if(D<=Q){const M=Q+1,j=M<z?E[M].el:Y;for(;D<=Q;)C(null,E[D]=I?Rr(E[D]):On(E[D]),V,j,W,X,re,T,I),D++}}else if(D>Q)for(;D<=Z;)Ue(A[D],W,X,!0),D++;else{const M=D,j=D,le=new Map;for(D=j;D<=Q;D++){const Kt=E[D]=I?Rr(E[D]):On(E[D]);Kt.key!=null&&le.set(Kt.key,D)}let ue,Qe=0;const it=Q-j+1;let tt=!1,At=0;const Kn=new Array(it);for(D=0;D<it;D++)Kn[D]=0;for(D=M;D<=Z;D++){const Kt=A[D];if(Qe>=it){Ue(Kt,W,X,!0);continue}let fn;if(Kt.key!=null)fn=le.get(Kt.key);else for(ue=j;ue<=Q;ue++)if(Kn[ue-j]===0&&Bi(Kt,E[ue])){fn=ue;break}fn===void 0?Ue(Kt,W,X,!0):(Kn[fn-j]=D+1,fn>=At?At=fn:tt=!0,C(Kt,E[fn],V,null,W,X,re,T,I),Qe++)}const Os=tt?Xb(Kn):Qs;for(ue=Os.length-1,D=it-1;D>=0;D--){const Kt=j+D,fn=E[Kt],Ls=Kt+1<z?E[Kt+1].el:Y;Kn[D]===0?C(null,fn,V,Ls,W,X,re,T,I):tt&&(ue<0||D!==Os[ue]?et(fn,V,Ls,2):ue--)}}},et=(A,E,V,Y,W=null)=>{const{el:X,type:re,transition:T,children:I,shapeFlag:D}=A;if(D&6){et(A.component.subTree,E,V,Y);return}if(D&128){A.suspense.move(E,V,Y);return}if(D&64){re.move(A,E,V,oe);return}if(re===ft){r(X,E,V);for(let Z=0;Z<I.length;Z++)et(I[Z],E,V,Y);r(A.anchor,E,V);return}if(re===$c){w(A,E,V);return}if(Y!==2&&D&1&&T)if(Y===0)T.beforeEnter(X),r(X,E,V),ln(()=>T.enter(X),W);else{const{leave:Z,delayLeave:Q,afterLeave:M}=T,j=()=>r(X,E,V),le=()=>{Z(X,()=>{j(),M&&M()})};Q?Q(X,j,le):le()}else r(X,E,V)},Ue=(A,E,V,Y=!1,W=!1)=>{const{type:X,props:re,ref:T,children:I,dynamicChildren:D,shapeFlag:z,patchFlag:Z,dirs:Q,cacheIndex:M}=A;if(Z===-2&&(W=!1),T!=null&&za(T,null,V,A,!0),M!=null&&(E.renderCache[M]=void 0),z&256){E.ctx.deactivate(A);return}const j=z&1&&Q,le=!Zs(A);let ue;if(le&&(ue=re&&re.onVnodeBeforeUnmount)&&kn(ue,E,A),z&6)Vt(A.component,V,Y);else{if(z&128){A.suspense.unmount(V,Y);return}j&&os(A,null,E,"beforeUnmount"),z&64?A.type.remove(A,E,V,oe,Y):D&&!D.hasOnce&&(X!==ft||Z>0&&Z&64)?gt(D,E,V,!1,!0):(X===ft&&Z&384||!W&&z&16)&&gt(I,E,V),Y&&je(A)}(le&&(ue=re&&re.onVnodeUnmounted)||j)&&ln(()=>{ue&&kn(ue,E,A),j&&os(A,null,E,"unmounted")},V)},je=A=>{const{type:E,el:V,anchor:Y,transition:W}=A;if(E===ft){Gt(V,Y);return}if(E===$c){R(A);return}const X=()=>{s(V),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(A.shapeFlag&1&&W&&!W.persisted){const{leave:re,delayLeave:T}=W,I=()=>re(V,X);T?T(A.el,X,I):I()}else X()},Gt=(A,E)=>{let V;for(;A!==E;)V=m(A),s(A),A=V;s(E)},Vt=(A,E,V)=>{const{bum:Y,scope:W,job:X,subTree:re,um:T,m:I,a:D}=A;Ff(I),Ff(D),Y&&Ra(Y),W.stop(),X&&(X.flags|=8,Ue(re,A,E,V)),T&&ln(T,E),ln(()=>{A.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},gt=(A,E,V,Y=!1,W=!1,X=0)=>{for(let re=X;re<A.length;re++)Ue(A[re],E,V,Y,W)},G=A=>{if(A.shapeFlag&6)return G(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const E=m(A.anchor||A.el),V=E&&E[_b];return V?m(V):E};let se=!1;const ne=(A,E,V)=>{A==null?E._vnode&&Ue(E._vnode,null,null,!0):C(E._vnode||null,A,E,null,null,null,V),E._vnode=A,se||(se=!0,Of(),e_(),se=!1)},oe={p:C,um:Ue,m:et,r:je,mt:st,mc:_,pc:be,pbc:k,n:G,o:t};let we,De;return{render:ne,hydrate:we,createApp:$b(ne,we)}}function Uc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function as({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Qb(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function v_(t,e,n=!1){const r=t.children,s=e.children;if(me(r)&&me(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Rr(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&v_(o,a)),a.type===Uo&&(a.el=o.el)}}function Xb(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function E_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:E_(e)}function Ff(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Jb=Symbol.for("v-scx"),Zb=()=>_n(Jb);function An(t,e,n){return T_(t,e,n)}function T_(t,e,n=We){const{immediate:r,deep:s,flush:i,once:o}=n,a=kt({},n),c=e&&r||!e&&i!=="post";let u;if(vo){if(i==="sync"){const g=Zb();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Mn,g.resume=Mn,g.pause=Mn,g}}const h=Pt;a.call=(g,P,C)=>Hn(g,h,P,C);let f=!1;i==="post"?a.scheduler=g=>{ln(g,h&&h.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(g,P)=>{P?g():bh(g)}),a.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const m=fb(t,e,a);return vo&&(u?u.push(m):c&&m()),m}function eI(t,e,n){const r=this.proxy,s=yt(t)?t.includes(".")?b_(r,t):()=>r[t]:t.bind(r,r);let i;Te(e)?i=e:(i=e.handler,n=e);const o=Fo(this),a=T_(s,i.bind(r),n);return o(),a}function b_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const tI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${vn(e)}Modifiers`]||t[`${As(e)}Modifiers`];function nI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||We;let s=n;const i=e.startsWith("update:"),o=i&&tI(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>yt(h)?h.trim():h)),o.number&&(s=n.map(Ha)));let a,c=r[a=Oc(e)]||r[a=Oc(vn(e))];!c&&i&&(c=r[a=Oc(As(e))]),c&&Hn(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Hn(u,t,6,s)}}function I_(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Te(t)){const c=u=>{const h=I_(u,e,!0);h&&(a=!0,kt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ye(t)&&r.set(t,null),null):(me(i)?i.forEach(c=>o[c]=null):kt(o,i),Ye(t)&&r.set(t,o),o)}function Ol(t,e){return!t||!bl(e)?!1:(e=e.slice(2).replace(/Once$/,""),$e(t,e[0].toLowerCase()+e.slice(1))||$e(t,As(e))||$e(t,e))}function Fc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:f,data:m,setupState:g,ctx:P,inheritAttrs:C}=t,N=Ka(t);let F,H;try{if(n.shapeFlag&4){const R=s||r,U=R;F=On(u.call(U,R,h,f,g,m,P)),H=a}else{const R=e;F=On(R.length>1?R(f,{attrs:a,slots:o,emit:c}):R(f,null)),H=e.props?a:rI(a)}}catch(R){no.length=0,Cl(R,t,1),F=ot(Fr)}let w=F;if(H&&C!==!1){const R=Object.keys(H),{shapeFlag:U}=w;R.length&&U&7&&(i&&R.some(lh)&&(H=sI(H,i)),w=oi(w,H,!1,!0))}return n.dirs&&(w=oi(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&Ih(w,n.transition),F=w,Ka(N),F}const rI=t=>{let e;for(const n in t)(n==="class"||n==="style"||bl(n))&&((e||(e={}))[n]=t[n]);return e},sI=(t,e)=>{const n={};for(const r in t)(!lh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function iI(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?$f(r,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const m=h[f];if(o[m]!==r[m]&&!Ol(u,m))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?$f(r,o,u):!0:!!o;return!1}function $f(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ol(n,i))return!0}return!1}function oI({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const w_=t=>t.__isSuspense;function aI(t,e){e&&e.pendingBranch?me(t)?e.effects.push(...t):e.effects.push(t):gb(t)}const ft=Symbol.for("v-fgt"),Uo=Symbol.for("v-txt"),Fr=Symbol.for("v-cmt"),$c=Symbol.for("v-stc"),no=[];let cn=null;function pe(t=!1){no.push(cn=t?null:[])}function lI(){no.pop(),cn=no[no.length-1]||null}let go=1;function Bf(t,e=!1){go+=t,t<0&&cn&&e&&(cn.hasOnce=!0)}function A_(t){return t.dynamicChildren=go>0?cn||Qs:null,lI(),go>0&&cn&&cn.push(t),t}function Ae(t,e,n,r,s,i){return A_(x(t,e,n,r,s,i,!0))}function Rn(t,e,n,r,s){return A_(ot(t,e,n,r,s,!0))}function _o(t){return t?t.__v_isVNode===!0:!1}function Bi(t,e){return t.type===e.type&&t.key===e.key}const R_=({key:t})=>t??null,Pa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?yt(t)||ht(t)||Te(t)?{i:Tt,r:t,k:e,f:!!n}:t:null);function x(t,e=null,n=null,r=0,s=null,i=t===ft?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&R_(e),ref:e&&Pa(e),scopeId:n_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tt};return a?(Sh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=yt(n)?8:16),go>0&&!o&&cn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&cn.push(c),c}const ot=cI;function cI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===kb)&&(t=Fr),_o(t)){const a=oi(t,e,!0);return n&&Sh(a,n),go>0&&!i&&cn&&(a.shapeFlag&6?cn[cn.indexOf(t)]=a:cn.push(a)),a.patchFlag=-2,a}if(EI(t)&&(t=t.__vccOpts),e){e=uI(e);let{class:a,style:c}=e;a&&!yt(a)&&(e.class=Rs(a)),Ye(c)&&(vh(c)&&!me(c)&&(c=kt({},c)),e.style=hh(c))}const o=yt(t)?1:w_(t)?128:yb(t)?64:Ye(t)?4:Te(t)?2:0;return x(t,e,n,r,s,o,i,!0)}function uI(t){return t?vh(t)||d_(t)?kt({},t):t:null}function oi(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?hI(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&R_(u),ref:e&&e.ref?n&&i?me(i)?i.concat(Pa(e)):[i,Pa(e)]:Pa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ft?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&oi(t.ssContent),ssFallback:t.ssFallback&&oi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Ih(h,c.clone(h)),h}function ar(t=" ",e=0){return ot(Uo,null,t,e)}function Pe(t="",e=!1){return e?(pe(),Rn(Fr,null,t)):ot(Fr,null,t)}function On(t){return t==null||typeof t=="boolean"?ot(Fr):me(t)?ot(ft,null,t.slice()):_o(t)?Rr(t):ot(Uo,null,String(t))}function Rr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:oi(t)}function Sh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(me(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Sh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!d_(e)?e._ctx=Tt:s===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Te(e)?(e={default:e,_ctx:Tt},n=32):(e=String(e),r&64?(n=16,e=[ar(e)]):n=8);t.children=e,t.shapeFlag|=n}function hI(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Rs([e.class,r.class]));else if(s==="style")e.style=hh([e.style,r.style]);else if(bl(s)){const i=e[s],o=r[s];o&&i!==o&&!(me(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function kn(t,e,n,r=null){Hn(t,e,7,[n,r])}const dI=c_();let fI=0;function pI(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||dI,i={uid:fI++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Og(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:p_(r,s),emitsOptions:I_(r,s),emit:null,emitted:null,propsDefaults:We,inheritAttrs:r.inheritAttrs,ctx:We,data:We,props:We,attrs:We,slots:We,refs:We,setupState:We,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=nI.bind(null,i),t.ce&&t.ce(i),i}let Pt=null;const yo=()=>Pt||Tt;let Xa,yu;{const t=Rl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Xa=e("__VUE_INSTANCE_SETTERS__",n=>Pt=n),yu=e("__VUE_SSR_SETTERS__",n=>vo=n)}const Fo=t=>{const e=Pt;return Xa(t),t.scope.on(),()=>{t.scope.off(),Xa(e)}},jf=()=>{Pt&&Pt.scope.off(),Xa(null)};function S_(t){return t.vnode.shapeFlag&4}let vo=!1;function mI(t,e=!1,n=!1){e&&yu(e);const{props:r,children:s}=t.vnode,i=S_(t);jb(t,r,i,e),Gb(t,s,n);const o=i?gI(t,e):void 0;return e&&yu(!1),o}function gI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Lb);const{setup:r}=n;if(r){Kr();const s=t.setupContext=r.length>1?yI(t):null,i=Fo(t),o=Mo(r,t,0,[t.props,s]),a=Ag(o);if(zr(),i(),(a||t.sp)&&!Zs(t)&&r_(t),a){if(o.then(jf,jf),e)return o.then(c=>{Hf(t,c,e)}).catch(c=>{Cl(c,t,0)});t.asyncDep=o}else Hf(t,o,e)}else P_(t,e)}function Hf(t,e,n){Te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ye(e)&&(t.setupState=Xg(e)),P_(t,n)}let qf;function P_(t,e,n){const r=t.type;if(!t.render){if(!e&&qf&&!r.render){const s=r.template||Ah(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=kt(kt({isCustomElement:i,delimiters:a},o),c);r.render=qf(s,u)}}t.render=r.render||Mn}{const s=Fo(t);Kr();try{Db(t)}finally{zr(),s()}}}const _I={get(t,e){return jt(t,"get",""),t[e]}};function yI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,_I),slots:t.slots,emit:t.emit,expose:e}}function Ll(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Xg(Eh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in to)return to[n](t)},has(e,n){return n in e||n in to}})):t.proxy}function vI(t,e=!0){return Te(t)?t.displayName||t.name:t.name||e&&t.__name}function EI(t){return Te(t)&&"__vccOpts"in t}const ze=(t,e)=>hb(t,e,vo);function Dl(t,e,n){const r=arguments.length;return r===2?Ye(e)&&!me(e)?_o(e)?ot(t,null,[e]):ot(t,e):ot(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&_o(n)&&(n=[n]),ot(t,e,n))}const TI="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vu;const Wf=typeof window<"u"&&window.trustedTypes;if(Wf)try{vu=Wf.createPolicy("vue",{createHTML:t=>t})}catch{}const C_=vu?t=>vu.createHTML(t):t=>t,bI="http://www.w3.org/2000/svg",II="http://www.w3.org/1998/Math/MathML",er=typeof document<"u"?document:null,Gf=er&&er.createElement("template"),wI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?er.createElementNS(bI,t):e==="mathml"?er.createElementNS(II,t):n?er.createElement(t,{is:n}):er.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>er.createTextNode(t),createComment:t=>er.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>er.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Gf.innerHTML=C_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Gf.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},AI=Symbol("_vtc");function RI(t,e,n){const r=t[AI];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Kf=Symbol("_vod"),SI=Symbol("_vsh"),PI=Symbol(""),CI=/(^|;)\s*display\s*:/;function kI(t,e,n){const r=t.style,s=yt(n);let i=!1;if(n&&!s){if(e)if(yt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ca(r,a,"")}else for(const o in e)n[o]==null&&Ca(r,o,"");for(const o in n)o==="display"&&(i=!0),Ca(r,o,n[o])}else if(s){if(e!==n){const o=r[PI];o&&(n+=";"+o),r.cssText=n,i=CI.test(n)}}else e&&t.removeAttribute("style");Kf in t&&(t[Kf]=i?r.display:"",t[SI]&&(r.display="none"))}const zf=/\s*!important$/;function Ca(t,e,n){if(me(n))n.forEach(r=>Ca(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=NI(t,e);zf.test(n)?t.setProperty(As(r),n.replace(zf,""),"important"):t[r]=n}}const Yf=["Webkit","Moz","ms"],Bc={};function NI(t,e){const n=Bc[e];if(n)return n;let r=vn(e);if(r!=="filter"&&r in t)return Bc[e]=r;r=Al(r);for(let s=0;s<Yf.length;s++){const i=Yf[s]+r;if(i in t)return Bc[e]=i}return e}const Qf="http://www.w3.org/1999/xlink";function Xf(t,e,n,r,s,i=MT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Qf,e.slice(6,e.length)):t.setAttributeNS(Qf,e,n):n==null||i&&!Cg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Sn(n)?String(n):n)}function Jf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?C_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Cg(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function ds(t,e,n,r){t.addEventListener(e,n,r)}function OI(t,e,n,r){t.removeEventListener(e,n,r)}const Zf=Symbol("_vei");function LI(t,e,n,r,s=null){const i=t[Zf]||(t[Zf]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=DI(e);if(r){const u=i[e]=VI(r,s);ds(t,a,u,c)}else o&&(OI(t,a,o,c),i[e]=void 0)}}const ep=/(?:Once|Passive|Capture)$/;function DI(t){let e;if(ep.test(t)){e={};let r;for(;r=t.match(ep);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):As(t.slice(2)),e]}let jc=0;const xI=Promise.resolve(),MI=()=>jc||(xI.then(()=>jc=0),jc=Date.now());function VI(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Hn(UI(r,n.value),e,5,[r])};return n.value=t,n.attached=MI(),n}function UI(t,e){if(me(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const tp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,FI=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?RI(t,r,o):e==="style"?kI(t,n,r):bl(e)?lh(e)||LI(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$I(t,e,r,o))?(Jf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Xf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!yt(r))?Jf(t,vn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Xf(t,e,r,o))};function $I(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&tp(e)&&Te(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return tp(e)&&yt(n)?!1:e in t}const Ja=t=>{const e=t.props["onUpdate:modelValue"]||!1;return me(e)?n=>Ra(e,n):e};function BI(t){t.target.composing=!0}function np(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ei=Symbol("_assign"),St={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ei]=Ja(s);const i=r||s.props&&s.props.type==="number";ds(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ha(a)),t[ei](a)}),n&&ds(t,"change",()=>{t.value=t.value.trim()}),e||(ds(t,"compositionstart",BI),ds(t,"compositionend",np),ds(t,"change",np))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ei]=Ja(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ha(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},ai={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Il(e);ds(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ha(Za(o)):Za(o));t[ei](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,kl(()=>{t._assigning=!1})}),t[ei]=Ja(r)},mounted(t,{value:e}){rp(t,e)},beforeUpdate(t,e,n){t[ei]=Ja(n)},updated(t,{value:e}){t._assigning||rp(t,e)}};function rp(t,e){const n=t.multiple,r=me(e);if(!(n&&!r&&!Il(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=Za(o);if(n)if(r){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=UT(e,a)>-1}else o.selected=e.has(a);else if(Sl(Za(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Za(t){return"_value"in t?t._value:t.value}const jI=["ctrl","shift","alt","meta"],HI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>jI.some(n=>t[`${n}Key`]&&!e.includes(n))},xl=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=HI[e[o]];if(a&&a(s,e))return}return t(s,...i)})},qI=kt({patchProp:FI},wI);let sp;function WI(){return sp||(sp=zb(qI))}const GI=(...t)=>{const e=WI().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=zI(r);if(!s)return;const i=e._component;!Te(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,KI(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function KI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function zI(t){return yt(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const js=typeof document<"u";function k_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function YI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&k_(t.default)}const Fe=Object.assign;function Hc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Pn(s)?s.map(t):t(s)}return n}const ro=()=>{},Pn=Array.isArray,N_=/#/g,QI=/&/g,XI=/\//g,JI=/=/g,ZI=/\?/g,O_=/\+/g,ew=/%5B/g,tw=/%5D/g,L_=/%5E/g,nw=/%60/g,D_=/%7B/g,rw=/%7C/g,x_=/%7D/g,sw=/%20/g;function Ph(t){return encodeURI(""+t).replace(rw,"|").replace(ew,"[").replace(tw,"]")}function iw(t){return Ph(t).replace(D_,"{").replace(x_,"}").replace(L_,"^")}function Eu(t){return Ph(t).replace(O_,"%2B").replace(sw,"+").replace(N_,"%23").replace(QI,"%26").replace(nw,"`").replace(D_,"{").replace(x_,"}").replace(L_,"^")}function ow(t){return Eu(t).replace(JI,"%3D")}function aw(t){return Ph(t).replace(N_,"%23").replace(ZI,"%3F")}function lw(t){return t==null?"":aw(t).replace(XI,"%2F")}function Eo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const cw=/\/$/,uw=t=>t.replace(cw,"");function qc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=pw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Eo(o)}}function hw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ip(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function dw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&li(e.matched[r],n.matched[s])&&M_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function li(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function M_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!fw(t[n],e[n]))return!1;return!0}function fw(t,e){return Pn(t)?op(t,e):Pn(e)?op(e,t):t===e}function op(t,e){return Pn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function pw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Tr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var To;(function(t){t.pop="pop",t.push="push"})(To||(To={}));var so;(function(t){t.back="back",t.forward="forward",t.unknown=""})(so||(so={}));function mw(t){if(!t)if(js){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),uw(t)}const gw=/^[^#]+#/;function _w(t,e){return t.replace(gw,"#")+e}function yw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ml=()=>({left:window.scrollX,top:window.scrollY});function vw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=yw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ap(t,e){return(history.state?history.state.position-e:-1)+t}const Tu=new Map;function Ew(t,e){Tu.set(t,e)}function Tw(t){const e=Tu.get(t);return Tu.delete(t),e}let bw=()=>location.protocol+"//"+location.host;function V_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),ip(c,"")}return ip(n,t)+r+s}function Iw(t,e,n,r){let s=[],i=[],o=null;const a=({state:m})=>{const g=V_(t,location),P=n.value,C=e.value;let N=0;if(m){if(n.value=g,e.value=m,o&&o===P){o=null;return}N=C?m.position-C.position:0}else r(g);s.forEach(F=>{F(n.value,P,{delta:N,type:To.pop,direction:N?N>0?so.forward:so.back:so.unknown})})};function c(){o=n.value}function u(m){s.push(m);const g=()=>{const P=s.indexOf(m);P>-1&&s.splice(P,1)};return i.push(g),g}function h(){const{history:m}=window;m.state&&m.replaceState(Fe({},m.state,{scroll:Ml()}),"")}function f(){for(const m of i)m();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function lp(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ml():null}}function ww(t){const{history:e,location:n}=window,r={value:V_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const f=t.indexOf("#"),m=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:bw()+t+c;try{e[h?"replaceState":"pushState"](u,"",m),s.value=u}catch(g){console.error(g),n[h?"replace":"assign"](m)}}function o(c,u){const h=Fe({},e.state,lp(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,h,!0),r.value=c}function a(c,u){const h=Fe({},s.value,e.state,{forward:c,scroll:Ml()});i(h.current,h,!0);const f=Fe({},lp(r.value,c,null),{position:h.position+1},u);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Aw(t){t=mw(t);const e=ww(t),n=Iw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Fe({location:"",base:t,go:r,createHref:_w.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Rw(t){return typeof t=="string"||t&&typeof t=="object"}function U_(t){return typeof t=="string"||typeof t=="symbol"}const F_=Symbol("");var cp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(cp||(cp={}));function ci(t,e){return Fe(new Error,{type:t,[F_]:!0},e)}function Xn(t,e){return t instanceof Error&&F_ in t&&(e==null||!!(t.type&e))}const up="[^/]+?",Sw={sensitive:!1,strict:!1,start:!0,end:!0},Pw=/[.+*?^${}()[\]/\\]/g;function Cw(t,e){const n=Fe({},Sw,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const m=u[f];let g=40+(n.sensitive?.25:0);if(m.type===0)f||(s+="/"),s+=m.value.replace(Pw,"\\$&"),g+=40;else if(m.type===1){const{value:P,repeatable:C,optional:N,regexp:F}=m;i.push({name:P,repeatable:C,optional:N});const H=F||up;if(H!==up){g+=10;try{new RegExp(`(${H})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${P}" (${H}): `+R.message)}}let w=C?`((?:${H})(?:/(?:${H}))*)`:`(${H})`;f||(w=N&&u.length<2?`(?:/${w})`:"/"+w),N&&(w+="?"),s+=w,g+=20,N&&(g+=-8),C&&(g+=-20),H===".*"&&(g+=-50)}h.push(g)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let m=1;m<h.length;m++){const g=h[m]||"",P=i[m-1];f[P.name]=g&&P.repeatable?g.split("/"):g}return f}function c(u){let h="",f=!1;for(const m of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const g of m)if(g.type===0)h+=g.value;else if(g.type===1){const{value:P,repeatable:C,optional:N}=g,F=P in u?u[P]:"";if(Pn(F)&&!C)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const H=Pn(F)?F.join("/"):F;if(!H)if(N)m.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${P}"`);h+=H}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function kw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=kw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(hp(r))return 1;if(hp(s))return-1}return s.length-r.length}function hp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Nw={type:0,value:""},Ow=/[a-zA-Z0-9_]/;function Lw(t){if(!t)return[[]];if(t==="/")return[[Nw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",h="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:Ow.test(c)?m():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function Dw(t,e,n){const r=Cw(Lw(t.path),n),s=Fe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function xw(t,e){const n=[],r=new Map;e=mp({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,m,g){const P=!g,C=fp(f);C.aliasOf=g&&g.record;const N=mp(e,f),F=[C];if("alias"in f){const R=typeof f.alias=="string"?[f.alias]:f.alias;for(const U of R)F.push(fp(Fe({},C,{components:g?g.record.components:C.components,path:U,aliasOf:g?g.record:C})))}let H,w;for(const R of F){const{path:U}=R;if(m&&U[0]!=="/"){const B=m.record.path,b=B[B.length-1]==="/"?"":"/";R.path=m.record.path+(U&&b+U)}if(H=Dw(R,m,N),g?g.alias.push(H):(w=w||H,w!==H&&w.alias.push(H),P&&f.name&&!pp(H)&&o(f.name)),B_(H)&&c(H),C.children){const B=C.children;for(let b=0;b<B.length;b++)i(B[b],H,g&&g.children[b])}g=g||H}return w?()=>{o(w)}:ro}function o(f){if(U_(f)){const m=r.get(f);m&&(r.delete(f),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(f);m>-1&&(n.splice(m,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const m=Uw(f,n);n.splice(m,0,f),f.record.name&&!pp(f)&&r.set(f.record.name,f)}function u(f,m){let g,P={},C,N;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw ci(1,{location:f});N=g.record.name,P=Fe(dp(m.params,g.keys.filter(w=>!w.optional).concat(g.parent?g.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),f.params&&dp(f.params,g.keys.map(w=>w.name))),C=g.stringify(P)}else if(f.path!=null)C=f.path,g=n.find(w=>w.re.test(C)),g&&(P=g.parse(C),N=g.record.name);else{if(g=m.name?r.get(m.name):n.find(w=>w.re.test(m.path)),!g)throw ci(1,{location:f,currentLocation:m});N=g.record.name,P=Fe({},m.params,f.params),C=g.stringify(P)}const F=[];let H=g;for(;H;)F.unshift(H.record),H=H.parent;return{name:N,path:C,params:P,matched:F,meta:Vw(F)}}t.forEach(f=>i(f));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function dp(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function fp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Mw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Mw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function pp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Vw(t){return t.reduce((e,n)=>Fe(e,n.meta),{})}function mp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Uw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;$_(t,e[i])<0?r=i:n=i+1}const s=Fw(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Fw(t){let e=t;for(;e=e.parent;)if(B_(e)&&$_(t,e)===0)return e}function B_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function $w(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(O_," "),o=i.indexOf("="),a=Eo(o<0?i:i.slice(0,o)),c=o<0?null:Eo(i.slice(o+1));if(a in e){let u=e[a];Pn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function gp(t){let e="";for(let n in t){const r=t[n];if(n=ow(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pn(r)?r.map(i=>i&&Eu(i)):[r&&Eu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Bw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Pn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const jw=Symbol(""),_p=Symbol(""),Vl=Symbol(""),j_=Symbol(""),bu=Symbol("");function ji(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Sr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const u=m=>{m===!1?c(ci(4,{from:n,to:e})):m instanceof Error?c(m):Rw(m)?c(ci(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(m=>c(m))})}function Wc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(k_(c)){const h=(c.__vccOpts||c)[e];h&&i.push(Sr(h,n,r,o,a,s))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=YI(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&Sr(g,n,r,o,a,s)()}))}}return i}function yp(t){const e=_n(Vl),n=_n(j_),r=ze(()=>{const c=Ie(t.to);return e.resolve(c)}),s=ze(()=>{const{matched:c}=r.value,{length:u}=c,h=c[u-1],f=n.matched;if(!h||!f.length)return-1;const m=f.findIndex(li.bind(null,h));if(m>-1)return m;const g=vp(c[u-2]);return u>1&&vp(h)===g&&f[f.length-1].path!==g?f.findIndex(li.bind(null,c[u-2])):m}),i=ze(()=>s.value>-1&&Kw(n.params,r.value.params)),o=ze(()=>s.value>-1&&s.value===n.matched.length-1&&M_(n.params,r.value.params));function a(c={}){if(Gw(c)){const u=e[Ie(t.replace)?"replace":"push"](Ie(t.to)).catch(ro);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:ze(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function Hw(t){return t.length===1?t[0]:t}const qw=Vo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:yp,setup(t,{slots:e}){const n=xo(yp(t)),{options:r}=_n(Vl),s=ze(()=>({[Ep(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ep(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Hw(e.default(n));return t.custom?i:Dl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ww=qw;function Gw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Kw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Pn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function vp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ep=(t,e,n)=>t??e??n,zw=Vo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=_n(bu),s=ze(()=>t.route||r.value),i=_n(_p,0),o=ze(()=>{let u=Ie(i);const{matched:h}=s.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=ze(()=>s.value.matched[o.value]);Sa(_p,ze(()=>o.value+1)),Sa(jw,a),Sa(bu,s);const c=Ce();return An(()=>[c.value,a.value,t.name],([u,h,f],[m,g,P])=>{h&&(h.instances[f]=u,g&&g!==h&&u&&u===m&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),u&&h&&(!g||!li(h,g)||!m)&&(h.enterCallbacks[f]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,f=a.value,m=f&&f.components[h];if(!m)return Tp(n.default,{Component:m,route:u});const g=f.props[h],P=g?g===!0?u.params:typeof g=="function"?g(u):g:null,N=Dl(m,Fe({},P,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return Tp(n.default,{Component:N,route:u})||N}}});function Tp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Yw=zw;function Qw(t){const e=xw(t.routes,t),n=t.parseQuery||$w,r=t.stringifyQuery||gp,s=t.history,i=ji(),o=ji(),a=ji(),c=Th(Tr);let u=Tr;js&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Hc.bind(null,G=>""+G),f=Hc.bind(null,lw),m=Hc.bind(null,Eo);function g(G,se){let ne,oe;return U_(G)?(ne=e.getRecordMatcher(G),oe=se):oe=G,e.addRoute(oe,ne)}function P(G){const se=e.getRecordMatcher(G);se&&e.removeRoute(se)}function C(){return e.getRoutes().map(G=>G.record)}function N(G){return!!e.getRecordMatcher(G)}function F(G,se){if(se=Fe({},se||c.value),typeof G=="string"){const E=qc(n,G,se.path),V=e.resolve({path:E.path},se),Y=s.createHref(E.fullPath);return Fe(E,V,{params:m(V.params),hash:Eo(E.hash),redirectedFrom:void 0,href:Y})}let ne;if(G.path!=null)ne=Fe({},G,{path:qc(n,G.path,se.path).path});else{const E=Fe({},G.params);for(const V in E)E[V]==null&&delete E[V];ne=Fe({},G,{params:f(E)}),se.params=f(se.params)}const oe=e.resolve(ne,se),we=G.hash||"";oe.params=h(m(oe.params));const De=hw(r,Fe({},G,{hash:iw(we),path:oe.path})),A=s.createHref(De);return Fe({fullPath:De,hash:we,query:r===gp?Bw(G.query):G.query||{}},oe,{redirectedFrom:void 0,href:A})}function H(G){return typeof G=="string"?qc(n,G,c.value.path):Fe({},G)}function w(G,se){if(u!==G)return ci(8,{from:se,to:G})}function R(G){return b(G)}function U(G){return R(Fe(H(G),{replace:!0}))}function B(G){const se=G.matched[G.matched.length-1];if(se&&se.redirect){const{redirect:ne}=se;let oe=typeof ne=="function"?ne(G):ne;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=H(oe):{path:oe},oe.params={}),Fe({query:G.query,hash:G.hash,params:oe.path!=null?{}:G.params},oe)}}function b(G,se){const ne=u=F(G),oe=c.value,we=G.state,De=G.force,A=G.replace===!0,E=B(ne);if(E)return b(Fe(H(E),{state:typeof E=="object"?Fe({},we,E.state):we,force:De,replace:A}),se||ne);const V=ne;V.redirectedFrom=se;let Y;return!De&&dw(r,oe,ne)&&(Y=ci(16,{to:V,from:oe}),et(oe,oe,!0,!1)),(Y?Promise.resolve(Y):k(V,oe)).catch(W=>Xn(W)?Xn(W,2)?W:Nt(W):be(W,V,oe)).then(W=>{if(W){if(Xn(W,2))return b(Fe({replace:A},H(W.to),{state:typeof W.to=="object"?Fe({},we,W.to.state):we,force:De}),se||V)}else W=O(V,oe,!0,A,we);return L(V,oe,W),W})}function _(G,se){const ne=w(G,se);return ne?Promise.reject(ne):Promise.resolve()}function y(G){const se=Gt.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(G):G()}function k(G,se){let ne;const[oe,we,De]=Xw(G,se);ne=Wc(oe.reverse(),"beforeRouteLeave",G,se);for(const E of oe)E.leaveGuards.forEach(V=>{ne.push(Sr(V,G,se))});const A=_.bind(null,G,se);return ne.push(A),gt(ne).then(()=>{ne=[];for(const E of i.list())ne.push(Sr(E,G,se));return ne.push(A),gt(ne)}).then(()=>{ne=Wc(we,"beforeRouteUpdate",G,se);for(const E of we)E.updateGuards.forEach(V=>{ne.push(Sr(V,G,se))});return ne.push(A),gt(ne)}).then(()=>{ne=[];for(const E of De)if(E.beforeEnter)if(Pn(E.beforeEnter))for(const V of E.beforeEnter)ne.push(Sr(V,G,se));else ne.push(Sr(E.beforeEnter,G,se));return ne.push(A),gt(ne)}).then(()=>(G.matched.forEach(E=>E.enterCallbacks={}),ne=Wc(De,"beforeRouteEnter",G,se,y),ne.push(A),gt(ne))).then(()=>{ne=[];for(const E of o.list())ne.push(Sr(E,G,se));return ne.push(A),gt(ne)}).catch(E=>Xn(E,8)?E:Promise.reject(E))}function L(G,se,ne){a.list().forEach(oe=>y(()=>oe(G,se,ne)))}function O(G,se,ne,oe,we){const De=w(G,se);if(De)return De;const A=se===Tr,E=js?history.state:{};ne&&(oe||A?s.replace(G.fullPath,Fe({scroll:A&&E&&E.scroll},we)):s.push(G.fullPath,we)),c.value=G,et(G,se,ne,A),Nt()}let S;function st(){S||(S=s.listen((G,se,ne)=>{if(!Vt.listening)return;const oe=F(G),we=B(oe);if(we){b(Fe(we,{replace:!0,force:!0}),oe).catch(ro);return}u=oe;const De=c.value;js&&Ew(ap(De.fullPath,ne.delta),Ml()),k(oe,De).catch(A=>Xn(A,12)?A:Xn(A,2)?(b(Fe(H(A.to),{force:!0}),oe).then(E=>{Xn(E,20)&&!ne.delta&&ne.type===To.pop&&s.go(-1,!1)}).catch(ro),Promise.reject()):(ne.delta&&s.go(-ne.delta,!1),be(A,oe,De))).then(A=>{A=A||O(oe,De,!1),A&&(ne.delta&&!Xn(A,8)?s.go(-ne.delta,!1):ne.type===To.pop&&Xn(A,20)&&s.go(-1,!1)),L(oe,De,A)}).catch(ro)}))}let mt=ji(),Se=ji(),he;function be(G,se,ne){Nt(G);const oe=Se.list();return oe.length?oe.forEach(we=>we(G,se,ne)):console.error(G),Promise.reject(G)}function vt(){return he&&c.value!==Tr?Promise.resolve():new Promise((G,se)=>{mt.add([G,se])})}function Nt(G){return he||(he=!G,st(),mt.list().forEach(([se,ne])=>G?ne(G):se()),mt.reset()),G}function et(G,se,ne,oe){const{scrollBehavior:we}=t;if(!js||!we)return Promise.resolve();const De=!ne&&Tw(ap(G.fullPath,0))||(oe||!ne)&&history.state&&history.state.scroll||null;return kl().then(()=>we(G,se,De)).then(A=>A&&vw(A)).catch(A=>be(A,G,se))}const Ue=G=>s.go(G);let je;const Gt=new Set,Vt={currentRoute:c,listening:!0,addRoute:g,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:C,resolve:F,options:t,push:R,replace:U,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Se.add,isReady:vt,install(G){const se=this;G.component("RouterLink",Ww),G.component("RouterView",Yw),G.config.globalProperties.$router=se,Object.defineProperty(G.config.globalProperties,"$route",{enumerable:!0,get:()=>Ie(c)}),js&&!je&&c.value===Tr&&(je=!0,R(s.location).catch(we=>{}));const ne={};for(const we in Tr)Object.defineProperty(ne,we,{get:()=>c.value[we],enumerable:!0});G.provide(Vl,se),G.provide(j_,zg(ne)),G.provide(bu,c);const oe=G.unmount;Gt.add(G),G.unmount=function(){Gt.delete(G),Gt.size<1&&(u=Tr,S&&S(),S=null,c.value=Tr,je=!1,he=!1),oe()}}};function gt(G){return G.reduce((se,ne)=>se.then(()=>y(ne)),Promise.resolve())}return Vt}function Xw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>li(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>li(u,c))||s.push(c))}return[n,r,s]}function Ul(){return _n(Vl)}/*!
  * shared v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const el=typeof window<"u",Yr=(t,e=!1)=>e?Symbol.for(t):Symbol(t),Jw=(t,e,n)=>Zw({l:t,k:e,s:n}),Zw=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),pt=t=>typeof t=="number"&&isFinite(t),e0=t=>q_(t)==="[object Date]",$r=t=>q_(t)==="[object RegExp]",Fl=t=>ve(t)&&Object.keys(t).length===0,xt=Object.assign,t0=Object.create,He=(t=null)=>t0(t);let bp;const rr=()=>bp||(bp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:He());function Ip(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const n0=Object.prototype.hasOwnProperty;function bn(t,e){return n0.call(t,e)}const Je=Array.isArray,Ke=t=>typeof t=="function",ie=t=>typeof t=="string",Re=t=>typeof t=="boolean",Ve=t=>t!==null&&typeof t=="object",r0=t=>Ve(t)&&Ke(t.then)&&Ke(t.catch),H_=Object.prototype.toString,q_=t=>H_.call(t),ve=t=>{if(!Ve(t))return!1;const e=Object.getPrototypeOf(t);return e===null||e.constructor===Object},s0=t=>t==null?"":Je(t)||ve(t)&&t.toString===H_?JSON.stringify(t,null,2):String(t);function i0(t,e=""){return t.reduce((n,r,s)=>s===0?n+r:n+e+r,"")}function $l(t){let e=t;return()=>++e}function o0(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const ga=t=>!Ve(t)||Je(t);function ka(t,e){if(ga(t)||ga(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:r,des:s}=n.pop();Object.keys(r).forEach(i=>{i!=="__proto__"&&(Ve(r[i])&&!Ve(s[i])&&(s[i]=Array.isArray(r[i])?[]:He()),ga(s[i])||ga(r[i])?s[i]=r[i]:n.push({src:r[i],des:s[i]}))})}}/*!
  * message-compiler v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function a0(t,e,n){return{line:t,column:e,offset:n}}function tl(t,e,n){return{start:t,end:e}}const l0=/\{([0-9a-zA-Z]+)\}/g;function W_(t,...e){return e.length===1&&c0(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),t.replace(l0,(n,r)=>e.hasOwnProperty(r)?e[r]:"")}const G_=Object.assign,wp=t=>typeof t=="string",c0=t=>t!==null&&typeof t=="object";function K_(t,e=""){return t.reduce((n,r,s)=>s===0?n+r:n+e+r,"")}const Ch={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},u0={[Ch.USE_MODULO_SYNTAX]:"Use modulo before '{{0}}'."};function h0(t,e,...n){const r=W_(u0[t],...n||[]),s={message:String(r),code:t};return e&&(s.location=e),s}const fe={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},d0={[fe.EXPECTED_TOKEN]:"Expected token: '{0}'",[fe.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[fe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[fe.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[fe.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[fe.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[fe.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[fe.EMPTY_PLACEHOLDER]:"Empty placeholder",[fe.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[fe.INVALID_LINKED_FORMAT]:"Invalid linked format",[fe.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[fe.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[fe.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[fe.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[fe.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[fe.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function Ti(t,e,n={}){const{domain:r,messages:s,args:i}=n,o=W_((s||d0)[t]||"",...i||[]),a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=r,a}function f0(t){throw t}const Jn=" ",p0="\r",Xt=`
`,m0="\u2028",g0="\u2029";function _0(t){const e=t;let n=0,r=1,s=1,i=0;const o=b=>e[b]===p0&&e[b+1]===Xt,a=b=>e[b]===Xt,c=b=>e[b]===g0,u=b=>e[b]===m0,h=b=>o(b)||a(b)||c(b)||u(b),f=()=>n,m=()=>r,g=()=>s,P=()=>i,C=b=>o(b)||c(b)||u(b)?Xt:e[b],N=()=>C(n),F=()=>C(n+i);function H(){return i=0,h(n)&&(r++,s=0),o(n)&&n++,n++,s++,e[n]}function w(){return o(n+i)&&i++,i++,e[n+i]}function R(){n=0,r=1,s=1,i=0}function U(b=0){i=b}function B(){const b=n+i;for(;b!==n;)H();i=0}return{index:f,line:m,column:g,peekOffset:P,charAt:C,currentChar:N,currentPeek:F,next:H,peek:w,reset:R,resetPeek:U,skipToPeek:B}}const br=void 0,y0=".",Ap="'",v0="tokenizer";function E0(t,e={}){const n=e.location!==!1,r=_0(t),s=()=>r.index(),i=()=>a0(r.line(),r.column(),r.index()),o=i(),a=s(),c={currentType:14,offset:a,startLoc:o,endLoc:o,lastType:14,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},u=()=>c,{onError:h}=e;function f(T,I,D,...z){const Z=u();if(I.column+=D,I.offset+=D,h){const Q=n?tl(Z.startLoc,I):null,M=Ti(T,Q,{domain:v0,args:z});h(M)}}function m(T,I,D){T.endLoc=i(),T.currentType=I;const z={type:I};return n&&(z.loc=tl(T.startLoc,T.endLoc)),D!=null&&(z.value=D),z}const g=T=>m(T,14);function P(T,I){return T.currentChar()===I?(T.next(),I):(f(fe.EXPECTED_TOKEN,i(),0,I),"")}function C(T){let I="";for(;T.currentPeek()===Jn||T.currentPeek()===Xt;)I+=T.currentPeek(),T.peek();return I}function N(T){const I=C(T);return T.skipToPeek(),I}function F(T){if(T===br)return!1;const I=T.charCodeAt(0);return I>=97&&I<=122||I>=65&&I<=90||I===95}function H(T){if(T===br)return!1;const I=T.charCodeAt(0);return I>=48&&I<=57}function w(T,I){const{currentType:D}=I;if(D!==2)return!1;C(T);const z=F(T.currentPeek());return T.resetPeek(),z}function R(T,I){const{currentType:D}=I;if(D!==2)return!1;C(T);const z=T.currentPeek()==="-"?T.peek():T.currentPeek(),Z=H(z);return T.resetPeek(),Z}function U(T,I){const{currentType:D}=I;if(D!==2)return!1;C(T);const z=T.currentPeek()===Ap;return T.resetPeek(),z}function B(T,I){const{currentType:D}=I;if(D!==8)return!1;C(T);const z=T.currentPeek()===".";return T.resetPeek(),z}function b(T,I){const{currentType:D}=I;if(D!==9)return!1;C(T);const z=F(T.currentPeek());return T.resetPeek(),z}function _(T,I){const{currentType:D}=I;if(!(D===8||D===12))return!1;C(T);const z=T.currentPeek()===":";return T.resetPeek(),z}function y(T,I){const{currentType:D}=I;if(D!==10)return!1;const z=()=>{const Q=T.currentPeek();return Q==="{"?F(T.peek()):Q==="@"||Q==="%"||Q==="|"||Q===":"||Q==="."||Q===Jn||!Q?!1:Q===Xt?(T.peek(),z()):O(T,!1)},Z=z();return T.resetPeek(),Z}function k(T){C(T);const I=T.currentPeek()==="|";return T.resetPeek(),I}function L(T){const I=C(T),D=T.currentPeek()==="%"&&T.peek()==="{";return T.resetPeek(),{isModulo:D,hasSpace:I.length>0}}function O(T,I=!0){const D=(Z=!1,Q="",M=!1)=>{const j=T.currentPeek();return j==="{"?Q==="%"?!1:Z:j==="@"||!j?Q==="%"?!0:Z:j==="%"?(T.peek(),D(Z,"%",!0)):j==="|"?Q==="%"||M?!0:!(Q===Jn||Q===Xt):j===Jn?(T.peek(),D(!0,Jn,M)):j===Xt?(T.peek(),D(!0,Xt,M)):!0},z=D();return I&&T.resetPeek(),z}function S(T,I){const D=T.currentChar();return D===br?br:I(D)?(T.next(),D):null}function st(T){const I=T.charCodeAt(0);return I>=97&&I<=122||I>=65&&I<=90||I>=48&&I<=57||I===95||I===36}function mt(T){return S(T,st)}function Se(T){const I=T.charCodeAt(0);return I>=97&&I<=122||I>=65&&I<=90||I>=48&&I<=57||I===95||I===36||I===45}function he(T){return S(T,Se)}function be(T){const I=T.charCodeAt(0);return I>=48&&I<=57}function vt(T){return S(T,be)}function Nt(T){const I=T.charCodeAt(0);return I>=48&&I<=57||I>=65&&I<=70||I>=97&&I<=102}function et(T){return S(T,Nt)}function Ue(T){let I="",D="";for(;I=vt(T);)D+=I;return D}function je(T){N(T);const I=T.currentChar();return I!=="%"&&f(fe.EXPECTED_TOKEN,i(),0,I),T.next(),"%"}function Gt(T){let I="";for(;;){const D=T.currentChar();if(D==="{"||D==="}"||D==="@"||D==="|"||!D)break;if(D==="%")if(O(T))I+=D,T.next();else break;else if(D===Jn||D===Xt)if(O(T))I+=D,T.next();else{if(k(T))break;I+=D,T.next()}else I+=D,T.next()}return I}function Vt(T){N(T);let I="",D="";for(;I=he(T);)D+=I;return T.currentChar()===br&&f(fe.UNTERMINATED_CLOSING_BRACE,i(),0),D}function gt(T){N(T);let I="";return T.currentChar()==="-"?(T.next(),I+=`-${Ue(T)}`):I+=Ue(T),T.currentChar()===br&&f(fe.UNTERMINATED_CLOSING_BRACE,i(),0),I}function G(T){return T!==Ap&&T!==Xt}function se(T){N(T),P(T,"'");let I="",D="";for(;I=S(T,G);)I==="\\"?D+=ne(T):D+=I;const z=T.currentChar();return z===Xt||z===br?(f(fe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),z===Xt&&(T.next(),P(T,"'")),D):(P(T,"'"),D)}function ne(T){const I=T.currentChar();switch(I){case"\\":case"'":return T.next(),`\\${I}`;case"u":return oe(T,I,4);case"U":return oe(T,I,6);default:return f(fe.UNKNOWN_ESCAPE_SEQUENCE,i(),0,I),""}}function oe(T,I,D){P(T,I);let z="";for(let Z=0;Z<D;Z++){const Q=et(T);if(!Q){f(fe.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${I}${z}${T.currentChar()}`);break}z+=Q}return`\\${I}${z}`}function we(T){return T!=="{"&&T!=="}"&&T!==Jn&&T!==Xt}function De(T){N(T);let I="",D="";for(;I=S(T,we);)D+=I;return D}function A(T){let I="",D="";for(;I=mt(T);)D+=I;return D}function E(T){const I=D=>{const z=T.currentChar();return z==="{"||z==="%"||z==="@"||z==="|"||z==="("||z===")"||!z||z===Jn?D:(D+=z,T.next(),I(D))};return I("")}function V(T){N(T);const I=P(T,"|");return N(T),I}function Y(T,I){let D=null;switch(T.currentChar()){case"{":return I.braceNest>=1&&f(fe.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),T.next(),D=m(I,2,"{"),N(T),I.braceNest++,D;case"}":return I.braceNest>0&&I.currentType===2&&f(fe.EMPTY_PLACEHOLDER,i(),0),T.next(),D=m(I,3,"}"),I.braceNest--,I.braceNest>0&&N(T),I.inLinked&&I.braceNest===0&&(I.inLinked=!1),D;case"@":return I.braceNest>0&&f(fe.UNTERMINATED_CLOSING_BRACE,i(),0),D=W(T,I)||g(I),I.braceNest=0,D;default:{let Z=!0,Q=!0,M=!0;if(k(T))return I.braceNest>0&&f(fe.UNTERMINATED_CLOSING_BRACE,i(),0),D=m(I,1,V(T)),I.braceNest=0,I.inLinked=!1,D;if(I.braceNest>0&&(I.currentType===5||I.currentType===6||I.currentType===7))return f(fe.UNTERMINATED_CLOSING_BRACE,i(),0),I.braceNest=0,X(T,I);if(Z=w(T,I))return D=m(I,5,Vt(T)),N(T),D;if(Q=R(T,I))return D=m(I,6,gt(T)),N(T),D;if(M=U(T,I))return D=m(I,7,se(T)),N(T),D;if(!Z&&!Q&&!M)return D=m(I,13,De(T)),f(fe.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,D.value),N(T),D;break}}return D}function W(T,I){const{currentType:D}=I;let z=null;const Z=T.currentChar();switch((D===8||D===9||D===12||D===10)&&(Z===Xt||Z===Jn)&&f(fe.INVALID_LINKED_FORMAT,i(),0),Z){case"@":return T.next(),z=m(I,8,"@"),I.inLinked=!0,z;case".":return N(T),T.next(),m(I,9,".");case":":return N(T),T.next(),m(I,10,":");default:return k(T)?(z=m(I,1,V(T)),I.braceNest=0,I.inLinked=!1,z):B(T,I)||_(T,I)?(N(T),W(T,I)):b(T,I)?(N(T),m(I,12,A(T))):y(T,I)?(N(T),Z==="{"?Y(T,I)||z:m(I,11,E(T))):(D===8&&f(fe.INVALID_LINKED_FORMAT,i(),0),I.braceNest=0,I.inLinked=!1,X(T,I))}}function X(T,I){let D={type:14};if(I.braceNest>0)return Y(T,I)||g(I);if(I.inLinked)return W(T,I)||g(I);switch(T.currentChar()){case"{":return Y(T,I)||g(I);case"}":return f(fe.UNBALANCED_CLOSING_BRACE,i(),0),T.next(),m(I,3,"}");case"@":return W(T,I)||g(I);default:{if(k(T))return D=m(I,1,V(T)),I.braceNest=0,I.inLinked=!1,D;const{isModulo:Z,hasSpace:Q}=L(T);if(Z)return Q?m(I,0,Gt(T)):m(I,4,je(T));if(O(T))return m(I,0,Gt(T));break}}return D}function re(){const{currentType:T,offset:I,startLoc:D,endLoc:z}=c;return c.lastType=T,c.lastOffset=I,c.lastStartLoc=D,c.lastEndLoc=z,c.offset=s(),c.startLoc=i(),r.currentChar()===br?m(c,14):X(r,c)}return{nextToken:re,currentOffset:s,currentPosition:i,context:u}}const T0="parser",b0=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function I0(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(e||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function w0(t={}){const e=t.location!==!1,{onError:n,onWarn:r}=t;function s(w,R,U,B,...b){const _=w.currentPosition();if(_.offset+=B,_.column+=B,n){const y=e?tl(U,_):null,k=Ti(R,y,{domain:T0,args:b});n(k)}}function i(w,R,U,B,...b){const _=w.currentPosition();if(_.offset+=B,_.column+=B,r){const y=e?tl(U,_):null;r(h0(R,y,b))}}function o(w,R,U){const B={type:w};return e&&(B.start=R,B.end=R,B.loc={start:U,end:U}),B}function a(w,R,U,B){e&&(w.end=R,w.loc&&(w.loc.end=U))}function c(w,R){const U=w.context(),B=o(3,U.offset,U.startLoc);return B.value=R,a(B,w.currentOffset(),w.currentPosition()),B}function u(w,R){const U=w.context(),{lastOffset:B,lastStartLoc:b}=U,_=o(5,B,b);return _.index=parseInt(R,10),w.nextToken(),a(_,w.currentOffset(),w.currentPosition()),_}function h(w,R,U){const B=w.context(),{lastOffset:b,lastStartLoc:_}=B,y=o(4,b,_);return y.key=R,U===!0&&(y.modulo=!0),w.nextToken(),a(y,w.currentOffset(),w.currentPosition()),y}function f(w,R){const U=w.context(),{lastOffset:B,lastStartLoc:b}=U,_=o(9,B,b);return _.value=R.replace(b0,I0),w.nextToken(),a(_,w.currentOffset(),w.currentPosition()),_}function m(w){const R=w.nextToken(),U=w.context(),{lastOffset:B,lastStartLoc:b}=U,_=o(8,B,b);return R.type!==12?(s(w,fe.UNEXPECTED_EMPTY_LINKED_MODIFIER,U.lastStartLoc,0),_.value="",a(_,B,b),{nextConsumeToken:R,node:_}):(R.value==null&&s(w,fe.UNEXPECTED_LEXICAL_ANALYSIS,U.lastStartLoc,0,Tn(R)),_.value=R.value||"",a(_,w.currentOffset(),w.currentPosition()),{node:_})}function g(w,R){const U=w.context(),B=o(7,U.offset,U.startLoc);return B.value=R,a(B,w.currentOffset(),w.currentPosition()),B}function P(w){const R=w.context(),U=o(6,R.offset,R.startLoc);let B=w.nextToken();if(B.type===9){const b=m(w);U.modifier=b.node,B=b.nextConsumeToken||w.nextToken()}switch(B.type!==10&&s(w,fe.UNEXPECTED_LEXICAL_ANALYSIS,R.lastStartLoc,0,Tn(B)),B=w.nextToken(),B.type===2&&(B=w.nextToken()),B.type){case 11:B.value==null&&s(w,fe.UNEXPECTED_LEXICAL_ANALYSIS,R.lastStartLoc,0,Tn(B)),U.key=g(w,B.value||"");break;case 5:B.value==null&&s(w,fe.UNEXPECTED_LEXICAL_ANALYSIS,R.lastStartLoc,0,Tn(B)),U.key=h(w,B.value||"");break;case 6:B.value==null&&s(w,fe.UNEXPECTED_LEXICAL_ANALYSIS,R.lastStartLoc,0,Tn(B)),U.key=u(w,B.value||"");break;case 7:B.value==null&&s(w,fe.UNEXPECTED_LEXICAL_ANALYSIS,R.lastStartLoc,0,Tn(B)),U.key=f(w,B.value||"");break;default:{s(w,fe.UNEXPECTED_EMPTY_LINKED_KEY,R.lastStartLoc,0);const b=w.context(),_=o(7,b.offset,b.startLoc);return _.value="",a(_,b.offset,b.startLoc),U.key=_,a(U,b.offset,b.startLoc),{nextConsumeToken:B,node:U}}}return a(U,w.currentOffset(),w.currentPosition()),{node:U}}function C(w){const R=w.context(),U=R.currentType===1?w.currentOffset():R.offset,B=R.currentType===1?R.endLoc:R.startLoc,b=o(2,U,B);b.items=[];let _=null,y=null;do{const O=_||w.nextToken();switch(_=null,O.type){case 0:O.value==null&&s(w,fe.UNEXPECTED_LEXICAL_ANALYSIS,R.lastStartLoc,0,Tn(O)),b.items.push(c(w,O.value||""));break;case 6:O.value==null&&s(w,fe.UNEXPECTED_LEXICAL_ANALYSIS,R.lastStartLoc,0,Tn(O)),b.items.push(u(w,O.value||""));break;case 4:y=!0;break;case 5:O.value==null&&s(w,fe.UNEXPECTED_LEXICAL_ANALYSIS,R.lastStartLoc,0,Tn(O)),b.items.push(h(w,O.value||"",!!y)),y&&(i(w,Ch.USE_MODULO_SYNTAX,R.lastStartLoc,0,Tn(O)),y=null);break;case 7:O.value==null&&s(w,fe.UNEXPECTED_LEXICAL_ANALYSIS,R.lastStartLoc,0,Tn(O)),b.items.push(f(w,O.value||""));break;case 8:{const S=P(w);b.items.push(S.node),_=S.nextConsumeToken||null;break}}}while(R.currentType!==14&&R.currentType!==1);const k=R.currentType===1?R.lastOffset:w.currentOffset(),L=R.currentType===1?R.lastEndLoc:w.currentPosition();return a(b,k,L),b}function N(w,R,U,B){const b=w.context();let _=B.items.length===0;const y=o(1,R,U);y.cases=[],y.cases.push(B);do{const k=C(w);_||(_=k.items.length===0),y.cases.push(k)}while(b.currentType!==14);return _&&s(w,fe.MUST_HAVE_MESSAGES_IN_PLURAL,U,0),a(y,w.currentOffset(),w.currentPosition()),y}function F(w){const R=w.context(),{offset:U,startLoc:B}=R,b=C(w);return R.currentType===14?b:N(w,U,B,b)}function H(w){const R=E0(w,G_({},t)),U=R.context(),B=o(0,U.offset,U.startLoc);return e&&B.loc&&(B.loc.source=w),B.body=F(R),t.onCacheKey&&(B.cacheKey=t.onCacheKey(w)),U.currentType!==14&&s(R,fe.UNEXPECTED_LEXICAL_ANALYSIS,U.lastStartLoc,0,w[U.offset]||""),a(B,R.currentOffset(),R.currentPosition()),B}return{parse:H}}function Tn(t){if(t.type===14)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function A0(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function Rp(t,e){for(let n=0;n<t.length;n++)kh(t[n],e)}function kh(t,e){switch(t.type){case 1:Rp(t.cases,e),e.helper("plural");break;case 2:Rp(t.items,e);break;case 6:{kh(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function R0(t,e={}){const n=A0(t);n.helper("normalize"),t.body&&kh(t.body,n);const r=n.context();t.helpers=Array.from(r.helpers)}function S0(t){const e=t.body;return e.type===2?Sp(e):e.cases.forEach(n=>Sp(n)),t}function Sp(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const r=t.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;e.push(r.value)}if(e.length===t.items.length){t.static=K_(e);for(let n=0;n<t.items.length;n++){const r=t.items[n];(r.type===3||r.type===9)&&delete r.value}}}}const P0="minifier";function Hs(t){switch(t.t=t.type,t.type){case 0:{const e=t;Hs(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let r=0;r<n.length;r++)Hs(n[r]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let r=0;r<n.length;r++)Hs(n[r]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;Hs(e.key),e.k=e.key,delete e.key,e.modifier&&(Hs(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}default:throw Ti(fe.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:P0,args:[t.type]})}delete t.type}const C0="parser";function k0(t,e){const{sourceMap:n,filename:r,breakLineCode:s,needIndent:i}=e,o=e.location!==!1,a={filename:r,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:s,needIndent:i,indentLevel:0};o&&t.loc&&(a.source=t.loc.source);const c=()=>a;function u(N,F){a.code+=N}function h(N,F=!0){const H=F?s:"";u(i?H+"  ".repeat(N):H)}function f(N=!0){const F=++a.indentLevel;N&&h(F)}function m(N=!0){const F=--a.indentLevel;N&&h(F)}function g(){h(a.indentLevel)}return{context:c,push:u,indent:f,deindent:m,newline:g,helper:N=>`_${N}`,needIndent:()=>a.needIndent}}function N0(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),ui(t,e.key),e.modifier?(t.push(", "),ui(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function O0(t,e){const{helper:n,needIndent:r}=t;t.push(`${n("normalize")}([`),t.indent(r());const s=e.items.length;for(let i=0;i<s&&(ui(t,e.items[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}function L0(t,e){const{helper:n,needIndent:r}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(r());const s=e.cases.length;for(let i=0;i<s&&(ui(t,e.cases[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}}function D0(t,e){e.body?ui(t,e.body):t.push("null")}function ui(t,e){const{helper:n}=t;switch(e.type){case 0:D0(t,e);break;case 1:L0(t,e);break;case 2:O0(t,e);break;case 6:N0(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break;default:throw Ti(fe.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:C0,args:[e.type]})}}const x0=(t,e={})=>{const n=wp(e.mode)?e.mode:"normal",r=wp(e.filename)?e.filename:"message.intl",s=!!e.sourceMap,i=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,o=e.needIndent?e.needIndent:n!=="arrow",a=t.helpers||[],c=k0(t,{mode:n,filename:r,sourceMap:s,breakLineCode:i,needIndent:o});c.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),c.indent(o),a.length>0&&(c.push(`const { ${K_(a.map(f=>`${f}: _${f}`),", ")} } = ctx`),c.newline()),c.push("return "),ui(c,t),c.deindent(o),c.push("}"),delete t.helpers;const{code:u,map:h}=c.context();return{ast:t,code:u,map:h?h.toJSON():void 0}};function M0(t,e={}){const n=G_({},e),r=!!n.jit,s=!!n.minify,i=n.optimize==null?!0:n.optimize,a=w0(n).parse(t);return r?(i&&S0(a),s&&Hs(a),{ast:a,code:""}):(R0(a,n),x0(a,n))}/*!
  * core-base v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function V0(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(rr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(rr().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(rr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const Qr=[];Qr[0]={w:[0],i:[3,0],"[":[4],o:[7]};Qr[1]={w:[1],".":[2],"[":[4],o:[7]};Qr[2]={w:[2],i:[3,0],0:[3,0]};Qr[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Qr[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Qr[5]={"'":[4,0],o:8,l:[5,0]};Qr[6]={'"':[4,0],o:8,l:[6,0]};const U0=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function F0(t){return U0.test(t)}function $0(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function B0(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function j0(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:F0(e)?$0(e):"*"+e}function H0(t){const e=[];let n=-1,r=0,s=0,i,o,a,c,u,h,f;const m=[];m[0]=()=>{o===void 0?o=a:o+=a},m[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},m[2]=()=>{m[0](),s++},m[3]=()=>{if(s>0)s--,r=4,m[0]();else{if(s=0,o===void 0||(o=j0(o),o===!1))return!1;m[1]()}};function g(){const P=t[n+1];if(r===5&&P==="'"||r===6&&P==='"')return n++,a="\\"+P,m[0](),!0}for(;r!==null;)if(n++,i=t[n],!(i==="\\"&&g())){if(c=B0(i),f=Qr[r],u=f[c]||f.l||8,u===8||(r=u[0],u[1]!==void 0&&(h=m[u[1]],h&&(a=i,h()===!1))))return;if(r===7)return e}}const Pp=new Map;function q0(t,e){return Ve(t)?t[e]:null}function W0(t,e){if(!Ve(t))return null;let n=Pp.get(e);if(n||(n=H0(e),n&&Pp.set(e,n)),!n)return null;const r=n.length;let s=t,i=0;for(;i<r;){const o=s[n[i]];if(o===void 0||Ke(s))return null;s=o,i++}return s}const G0=t=>t,K0=t=>"",z0="text",Y0=t=>t.length===0?"":i0(t),Q0=s0;function Cp(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function X0(t){const e=pt(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(pt(t.named.count)||pt(t.named.n))?pt(t.named.count)?t.named.count:pt(t.named.n)?t.named.n:e:e}function J0(t,e){e.count||(e.count=t),e.n||(e.n=t)}function Z0(t={}){const e=t.locale,n=X0(t),r=Ve(t.pluralRules)&&ie(e)&&Ke(t.pluralRules[e])?t.pluralRules[e]:Cp,s=Ve(t.pluralRules)&&ie(e)&&Ke(t.pluralRules[e])?Cp:void 0,i=F=>F[r(n,F.length,s)],o=t.list||[],a=F=>o[F],c=t.named||He();pt(t.pluralIndex)&&J0(n,c);const u=F=>c[F];function h(F){const H=Ke(t.messages)?t.messages(F):Ve(t.messages)?t.messages[F]:!1;return H||(t.parent?t.parent.message(F):K0)}const f=F=>t.modifiers?t.modifiers[F]:G0,m=ve(t.processor)&&Ke(t.processor.normalize)?t.processor.normalize:Y0,g=ve(t.processor)&&Ke(t.processor.interpolate)?t.processor.interpolate:Q0,P=ve(t.processor)&&ie(t.processor.type)?t.processor.type:z0,N={list:a,named:u,plural:i,linked:(F,...H)=>{const[w,R]=H;let U="text",B="";H.length===1?Ve(w)?(B=w.modifier||B,U=w.type||U):ie(w)&&(B=w||B):H.length===2&&(ie(w)&&(B=w||B),ie(R)&&(U=R||U));const b=h(F)(N),_=U==="vnode"&&Je(b)&&B?b[0]:b;return B?f(B)(_,U):_},message:h,type:P,interpolate:g,normalize:m,values:xt(He(),o,c)};return N}let bo=null;function eA(t){bo=t}function tA(t,e,n){bo&&bo.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const nA=rA("function:translate");function rA(t){return e=>bo&&bo.emit(t,e)}const z_=Ch.__EXTEND_POINT__,ls=$l(z_),sA={NOT_FOUND_KEY:z_,FALLBACK_TO_TRANSLATE:ls(),CANNOT_FORMAT_NUMBER:ls(),FALLBACK_TO_NUMBER_FORMAT:ls(),CANNOT_FORMAT_DATE:ls(),FALLBACK_TO_DATE_FORMAT:ls(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:ls(),__EXTEND_POINT__:ls()},Y_=fe.__EXTEND_POINT__,cs=$l(Y_),In={INVALID_ARGUMENT:Y_,INVALID_DATE_ARGUMENT:cs(),INVALID_ISO_DATE_ARGUMENT:cs(),NOT_SUPPORT_NON_STRING_MESSAGE:cs(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:cs(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:cs(),NOT_SUPPORT_LOCALE_TYPE:cs(),__EXTEND_POINT__:cs()};function Ln(t){return Ti(t,null,void 0)}function Nh(t,e){return e.locale!=null?kp(e.locale):kp(t.locale)}let Gc;function kp(t){if(ie(t))return t;if(Ke(t)){if(t.resolvedOnce&&Gc!=null)return Gc;if(t.constructor.name==="Function"){const e=t();if(r0(e))throw Ln(In.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Gc=e}else throw Ln(In.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Ln(In.NOT_SUPPORT_LOCALE_TYPE)}function iA(t,e,n){return[...new Set([n,...Je(e)?e:Ve(e)?Object.keys(e):ie(e)?[e]:[n]])]}function Q_(t,e,n){const r=ie(n)?n:hi,s=t;s.__localeChainCache||(s.__localeChainCache=new Map);let i=s.__localeChainCache.get(r);if(!i){i=[];let o=[n];for(;Je(o);)o=Np(i,o,e);const a=Je(e)||!ve(e)?e:e.default?e.default:null;o=ie(a)?[a]:a,Je(o)&&Np(i,o,!1),s.__localeChainCache.set(r,i)}return i}function Np(t,e,n){let r=!0;for(let s=0;s<e.length&&Re(r);s++){const i=e[s];ie(i)&&(r=oA(t,e[s],n))}return r}function oA(t,e,n){let r;const s=e.split("-");do{const i=s.join("-");r=aA(t,i,n),s.splice(-1,1)}while(s.length&&r===!0);return r}function aA(t,e,n){let r=!1;if(!t.includes(e)&&(r=!0,e)){r=e[e.length-1]!=="!";const s=e.replace(/!/g,"");t.push(s),(Je(n)||ve(n))&&n[s]&&(r=n[s])}return r}const lA="9.14.2",Bl=-1,hi="en-US",Op="",Lp=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function cA(){return{upper:(t,e)=>e==="text"&&ie(t)?t.toUpperCase():e==="vnode"&&Ve(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&ie(t)?t.toLowerCase():e==="vnode"&&Ve(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&ie(t)?Lp(t):e==="vnode"&&Ve(t)&&"__v_isVNode"in t?Lp(t.children):t}}let X_;function Dp(t){X_=t}let J_;function uA(t){J_=t}let Z_;function hA(t){Z_=t}let ey=null;const dA=t=>{ey=t},fA=()=>ey;let ty=null;const xp=t=>{ty=t},pA=()=>ty;let Mp=0;function mA(t={}){const e=Ke(t.onWarn)?t.onWarn:o0,n=ie(t.version)?t.version:lA,r=ie(t.locale)||Ke(t.locale)?t.locale:hi,s=Ke(r)?hi:r,i=Je(t.fallbackLocale)||ve(t.fallbackLocale)||ie(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s,o=ve(t.messages)?t.messages:Kc(s),a=ve(t.datetimeFormats)?t.datetimeFormats:Kc(s),c=ve(t.numberFormats)?t.numberFormats:Kc(s),u=xt(He(),t.modifiers,cA()),h=t.pluralRules||He(),f=Ke(t.missing)?t.missing:null,m=Re(t.missingWarn)||$r(t.missingWarn)?t.missingWarn:!0,g=Re(t.fallbackWarn)||$r(t.fallbackWarn)?t.fallbackWarn:!0,P=!!t.fallbackFormat,C=!!t.unresolving,N=Ke(t.postTranslation)?t.postTranslation:null,F=ve(t.processor)?t.processor:null,H=Re(t.warnHtmlMessage)?t.warnHtmlMessage:!0,w=!!t.escapeParameter,R=Ke(t.messageCompiler)?t.messageCompiler:X_,U=Ke(t.messageResolver)?t.messageResolver:J_||q0,B=Ke(t.localeFallbacker)?t.localeFallbacker:Z_||iA,b=Ve(t.fallbackContext)?t.fallbackContext:void 0,_=t,y=Ve(_.__datetimeFormatters)?_.__datetimeFormatters:new Map,k=Ve(_.__numberFormatters)?_.__numberFormatters:new Map,L=Ve(_.__meta)?_.__meta:{};Mp++;const O={version:n,cid:Mp,locale:r,fallbackLocale:i,messages:o,modifiers:u,pluralRules:h,missing:f,missingWarn:m,fallbackWarn:g,fallbackFormat:P,unresolving:C,postTranslation:N,processor:F,warnHtmlMessage:H,escapeParameter:w,messageCompiler:R,messageResolver:U,localeFallbacker:B,fallbackContext:b,onWarn:e,__meta:L};return O.datetimeFormats=a,O.numberFormats=c,O.__datetimeFormatters=y,O.__numberFormatters=k,__INTLIFY_PROD_DEVTOOLS__&&tA(O,n,L),O}const Kc=t=>({[t]:He()});function Oh(t,e,n,r,s){const{missing:i,onWarn:o}=t;if(i!==null){const a=i(t,n,e,s);return ie(a)?a:e}else return e}function Hi(t,e,n){const r=t;r.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function gA(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function _A(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let r=n+1;r<e.length;r++)if(gA(t,e[r]))return!0;return!1}function zc(t){return n=>yA(n,t)}function yA(t,e){const n=EA(e);if(n==null)throw Io(0);if(Lh(n)===1){const i=bA(n);return t.plural(i.reduce((o,a)=>[...o,Vp(t,a)],[]))}else return Vp(t,n)}const vA=["b","body"];function EA(t){return Xr(t,vA)}const TA=["c","cases"];function bA(t){return Xr(t,TA,[])}function Vp(t,e){const n=wA(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const r=RA(e).reduce((s,i)=>[...s,Iu(t,i)],[]);return t.normalize(r)}}const IA=["s","static"];function wA(t){return Xr(t,IA)}const AA=["i","items"];function RA(t){return Xr(t,AA,[])}function Iu(t,e){const n=Lh(e);switch(n){case 3:return _a(e,n);case 9:return _a(e,n);case 4:{const r=e;if(bn(r,"k")&&r.k)return t.interpolate(t.named(r.k));if(bn(r,"key")&&r.key)return t.interpolate(t.named(r.key));throw Io(n)}case 5:{const r=e;if(bn(r,"i")&&pt(r.i))return t.interpolate(t.list(r.i));if(bn(r,"index")&&pt(r.index))return t.interpolate(t.list(r.index));throw Io(n)}case 6:{const r=e,s=kA(r),i=OA(r);return t.linked(Iu(t,i),s?Iu(t,s):void 0,t.type)}case 7:return _a(e,n);case 8:return _a(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const SA=["t","type"];function Lh(t){return Xr(t,SA)}const PA=["v","value"];function _a(t,e){const n=Xr(t,PA);if(n)return n;throw Io(e)}const CA=["m","modifier"];function kA(t){return Xr(t,CA)}const NA=["k","key"];function OA(t){const e=Xr(t,NA);if(e)return e;throw Io(6)}function Xr(t,e,n){for(let r=0;r<e.length;r++){const s=e[r];if(bn(t,s)&&t[s]!=null)return t[s]}return n}function Io(t){return new Error(`unhandled node type: ${t}`)}const ny=t=>t;let zs=He();function di(t){return Ve(t)&&Lh(t)===0&&(bn(t,"b")||bn(t,"body"))}function ry(t,e={}){let n=!1;const r=e.onError||f0;return e.onError=s=>{n=!0,r(s)},{...M0(t,e),detectError:n}}const LA=(t,e)=>{if(!ie(t))throw Ln(In.NOT_SUPPORT_NON_STRING_MESSAGE);{Re(e.warnHtmlMessage)&&e.warnHtmlMessage;const r=(e.onCacheKey||ny)(t),s=zs[r];if(s)return s;const{code:i,detectError:o}=ry(t,e),a=new Function(`return ${i}`)();return o?a:zs[r]=a}};function DA(t,e){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&ie(t)){Re(e.warnHtmlMessage)&&e.warnHtmlMessage;const r=(e.onCacheKey||ny)(t),s=zs[r];if(s)return s;const{ast:i,detectError:o}=ry(t,{...e,location:!1,jit:!0}),a=zc(i);return o?a:zs[r]=a}else{const n=t.cacheKey;if(n){const r=zs[n];return r||(zs[n]=zc(t))}else return zc(t)}}const Up=()=>"",pn=t=>Ke(t);function Fp(t,...e){const{fallbackFormat:n,postTranslation:r,unresolving:s,messageCompiler:i,fallbackLocale:o,messages:a}=t,[c,u]=wu(...e),h=Re(u.missingWarn)?u.missingWarn:t.missingWarn,f=Re(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn,m=Re(u.escapeParameter)?u.escapeParameter:t.escapeParameter,g=!!u.resolvedMessage,P=ie(u.default)||Re(u.default)?Re(u.default)?i?c:()=>c:u.default:n?i?c:()=>c:"",C=n||P!=="",N=Nh(t,u);m&&xA(u);let[F,H,w]=g?[c,N,a[N]||He()]:sy(t,c,N,o,f,h),R=F,U=c;if(!g&&!(ie(R)||di(R)||pn(R))&&C&&(R=P,U=R),!g&&(!(ie(R)||di(R)||pn(R))||!ie(H)))return s?Bl:c;let B=!1;const b=()=>{B=!0},_=pn(R)?R:iy(t,c,H,R,U,b);if(B)return R;const y=UA(t,H,w,u),k=Z0(y),L=MA(t,_,k),O=r?r(L,c):L;if(__INTLIFY_PROD_DEVTOOLS__){const S={timestamp:Date.now(),key:ie(c)?c:pn(R)?R.key:"",locale:H||(pn(R)?R.locale:""),format:ie(R)?R:pn(R)?R.source:"",message:O};S.meta=xt({},t.__meta,fA()||{}),nA(S)}return O}function xA(t){Je(t.list)?t.list=t.list.map(e=>ie(e)?Ip(e):e):Ve(t.named)&&Object.keys(t.named).forEach(e=>{ie(t.named[e])&&(t.named[e]=Ip(t.named[e]))})}function sy(t,e,n,r,s,i){const{messages:o,onWarn:a,messageResolver:c,localeFallbacker:u}=t,h=u(t,r,n);let f=He(),m,g=null;const P="translate";for(let C=0;C<h.length&&(m=h[C],f=o[m]||He(),(g=c(f,e))===null&&(g=f[e]),!(ie(g)||di(g)||pn(g)));C++)if(!_A(m,h)){const N=Oh(t,e,m,i,P);N!==e&&(g=N)}return[g,m,f]}function iy(t,e,n,r,s,i){const{messageCompiler:o,warnHtmlMessage:a}=t;if(pn(r)){const u=r;return u.locale=u.locale||n,u.key=u.key||e,u}if(o==null){const u=()=>r;return u.locale=n,u.key=e,u}const c=o(r,VA(t,n,s,r,a,i));return c.locale=n,c.key=e,c.source=r,c}function MA(t,e,n){return e(n)}function wu(...t){const[e,n,r]=t,s=He();if(!ie(e)&&!pt(e)&&!pn(e)&&!di(e))throw Ln(In.INVALID_ARGUMENT);const i=pt(e)?String(e):(pn(e),e);return pt(n)?s.plural=n:ie(n)?s.default=n:ve(n)&&!Fl(n)?s.named=n:Je(n)&&(s.list=n),pt(r)?s.plural=r:ie(r)?s.default=r:ve(r)&&xt(s,r),[i,s]}function VA(t,e,n,r,s,i){return{locale:e,key:n,warnHtmlMessage:s,onError:o=>{throw i&&i(o),o},onCacheKey:o=>Jw(e,n,o)}}function UA(t,e,n,r){const{modifiers:s,pluralRules:i,messageResolver:o,fallbackLocale:a,fallbackWarn:c,missingWarn:u,fallbackContext:h}=t,m={locale:e,modifiers:s,pluralRules:i,messages:g=>{let P=o(n,g);if(P==null&&h){const[,,C]=sy(h,g,e,a,c,u);P=o(C,g)}if(ie(P)||di(P)){let C=!1;const F=iy(t,g,e,P,g,()=>{C=!0});return C?Up:F}else return pn(P)?P:Up}};return t.processor&&(m.processor=t.processor),r.list&&(m.list=r.list),r.named&&(m.named=r.named),pt(r.plural)&&(m.pluralIndex=r.plural),m}function $p(t,...e){const{datetimeFormats:n,unresolving:r,fallbackLocale:s,onWarn:i,localeFallbacker:o}=t,{__datetimeFormatters:a}=t,[c,u,h,f]=Au(...e),m=Re(h.missingWarn)?h.missingWarn:t.missingWarn;Re(h.fallbackWarn)?h.fallbackWarn:t.fallbackWarn;const g=!!h.part,P=Nh(t,h),C=o(t,s,P);if(!ie(c)||c==="")return new Intl.DateTimeFormat(P,f).format(u);let N={},F,H=null;const w="datetime format";for(let B=0;B<C.length&&(F=C[B],N=n[F]||{},H=N[c],!ve(H));B++)Oh(t,c,F,m,w);if(!ve(H)||!ie(F))return r?Bl:c;let R=`${F}__${c}`;Fl(f)||(R=`${R}__${JSON.stringify(f)}`);let U=a.get(R);return U||(U=new Intl.DateTimeFormat(F,xt({},H,f)),a.set(R,U)),g?U.formatToParts(u):U.format(u)}const oy=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Au(...t){const[e,n,r,s]=t,i=He();let o=He(),a;if(ie(e)){const c=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!c)throw Ln(In.INVALID_ISO_DATE_ARGUMENT);const u=c[3]?c[3].trim().startsWith("T")?`${c[1].trim()}${c[3].trim()}`:`${c[1].trim()}T${c[3].trim()}`:c[1].trim();a=new Date(u);try{a.toISOString()}catch{throw Ln(In.INVALID_ISO_DATE_ARGUMENT)}}else if(e0(e)){if(isNaN(e.getTime()))throw Ln(In.INVALID_DATE_ARGUMENT);a=e}else if(pt(e))a=e;else throw Ln(In.INVALID_ARGUMENT);return ie(n)?i.key=n:ve(n)&&Object.keys(n).forEach(c=>{oy.includes(c)?o[c]=n[c]:i[c]=n[c]}),ie(r)?i.locale=r:ve(r)&&(o=r),ve(s)&&(o=s),[i.key||"",a,i,o]}function Bp(t,e,n){const r=t;for(const s in n){const i=`${e}__${s}`;r.__datetimeFormatters.has(i)&&r.__datetimeFormatters.delete(i)}}function jp(t,...e){const{numberFormats:n,unresolving:r,fallbackLocale:s,onWarn:i,localeFallbacker:o}=t,{__numberFormatters:a}=t,[c,u,h,f]=Ru(...e),m=Re(h.missingWarn)?h.missingWarn:t.missingWarn;Re(h.fallbackWarn)?h.fallbackWarn:t.fallbackWarn;const g=!!h.part,P=Nh(t,h),C=o(t,s,P);if(!ie(c)||c==="")return new Intl.NumberFormat(P,f).format(u);let N={},F,H=null;const w="number format";for(let B=0;B<C.length&&(F=C[B],N=n[F]||{},H=N[c],!ve(H));B++)Oh(t,c,F,m,w);if(!ve(H)||!ie(F))return r?Bl:c;let R=`${F}__${c}`;Fl(f)||(R=`${R}__${JSON.stringify(f)}`);let U=a.get(R);return U||(U=new Intl.NumberFormat(F,xt({},H,f)),a.set(R,U)),g?U.formatToParts(u):U.format(u)}const ay=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Ru(...t){const[e,n,r,s]=t,i=He();let o=He();if(!pt(e))throw Ln(In.INVALID_ARGUMENT);const a=e;return ie(n)?i.key=n:ve(n)&&Object.keys(n).forEach(c=>{ay.includes(c)?o[c]=n[c]:i[c]=n[c]}),ie(r)?i.locale=r:ve(r)&&(o=r),ve(s)&&(o=s),[i.key||"",a,i,o]}function Hp(t,e,n){const r=t;for(const s in n){const i=`${e}__${s}`;r.__numberFormatters.has(i)&&r.__numberFormatters.delete(i)}}V0();/*!
  * vue-i18n v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const FA="9.14.2";function $A(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(rr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(rr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(rr().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(rr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(rr().__INTLIFY_PROD_DEVTOOLS__=!1)}const ly=sA.__EXTEND_POINT__,Zn=$l(ly);Zn(),Zn(),Zn(),Zn(),Zn(),Zn(),Zn(),Zn(),Zn();const cy=In.__EXTEND_POINT__,tn=$l(cy),bt={UNEXPECTED_RETURN_TYPE:cy,INVALID_ARGUMENT:tn(),MUST_BE_CALL_SETUP_TOP:tn(),NOT_INSTALLED:tn(),NOT_AVAILABLE_IN_LEGACY_MODE:tn(),REQUIRED_VALUE:tn(),INVALID_VALUE:tn(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:tn(),NOT_INSTALLED_WITH_PROVIDE:tn(),UNEXPECTED_ERROR:tn(),NOT_COMPATIBLE_LEGACY_VUE_I18N:tn(),BRIDGE_SUPPORT_VUE_2_ONLY:tn(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:tn(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:tn(),__EXTEND_POINT__:tn()};function Ct(t,...e){return Ti(t,null,void 0)}const Su=Yr("__translateVNode"),Pu=Yr("__datetimeParts"),Cu=Yr("__numberParts"),uy=Yr("__setPluralRules"),hy=Yr("__injectWithOption"),ku=Yr("__dispose");function wo(t){if(!Ve(t))return t;for(const e in t)if(bn(t,e))if(!e.includes("."))Ve(t[e])&&wo(t[e]);else{const n=e.split("."),r=n.length-1;let s=t,i=!1;for(let o=0;o<r;o++){if(n[o]in s||(s[n[o]]=He()),!Ve(s[n[o]])){i=!0;break}s=s[n[o]]}i||(s[n[r]]=t[e],delete t[e]),Ve(s[n[r]])&&wo(s[n[r]])}return t}function jl(t,e){const{messages:n,__i18n:r,messageResolver:s,flatJson:i}=e,o=ve(n)?n:Je(r)?He():{[t]:He()};if(Je(r)&&r.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:c,resource:u}=a;c?(o[c]=o[c]||He(),ka(u,o[c])):ka(u,o)}else ie(a)&&ka(JSON.parse(a),o)}),s==null&&i)for(const a in o)bn(o,a)&&wo(o[a]);return o}function dy(t){return t.type}function fy(t,e,n){let r=Ve(e.messages)?e.messages:He();"__i18nGlobal"in n&&(r=jl(t.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const s=Object.keys(r);s.length&&s.forEach(i=>{t.mergeLocaleMessage(i,r[i])});{if(Ve(e.datetimeFormats)){const i=Object.keys(e.datetimeFormats);i.length&&i.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(Ve(e.numberFormats)){const i=Object.keys(e.numberFormats);i.length&&i.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function qp(t){return ot(Uo,null,t,0)}const Wp="__INTLIFY_META__",Gp=()=>[],BA=()=>!1;let Kp=0;function zp(t){return(e,n,r,s)=>t(n,r,yo()||void 0,s)}const jA=()=>{const t=yo();let e=null;return t&&(e=dy(t)[Wp])?{[Wp]:e}:null};function Dh(t={},e){const{__root:n,__injectWithOption:r}=t,s=n===void 0,i=t.flatJson,o=el?Ce:Th,a=!!t.translateExistCompatible;let c=Re(t.inheritLocale)?t.inheritLocale:!0;const u=o(n&&c?n.locale.value:ie(t.locale)?t.locale:hi),h=o(n&&c?n.fallbackLocale.value:ie(t.fallbackLocale)||Je(t.fallbackLocale)||ve(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:u.value),f=o(jl(u.value,t)),m=o(ve(t.datetimeFormats)?t.datetimeFormats:{[u.value]:{}}),g=o(ve(t.numberFormats)?t.numberFormats:{[u.value]:{}});let P=n?n.missingWarn:Re(t.missingWarn)||$r(t.missingWarn)?t.missingWarn:!0,C=n?n.fallbackWarn:Re(t.fallbackWarn)||$r(t.fallbackWarn)?t.fallbackWarn:!0,N=n?n.fallbackRoot:Re(t.fallbackRoot)?t.fallbackRoot:!0,F=!!t.fallbackFormat,H=Ke(t.missing)?t.missing:null,w=Ke(t.missing)?zp(t.missing):null,R=Ke(t.postTranslation)?t.postTranslation:null,U=n?n.warnHtmlMessage:Re(t.warnHtmlMessage)?t.warnHtmlMessage:!0,B=!!t.escapeParameter;const b=n?n.modifiers:ve(t.modifiers)?t.modifiers:{};let _=t.pluralRules||n&&n.pluralRules,y;y=(()=>{s&&xp(null);const M={version:FA,locale:u.value,fallbackLocale:h.value,messages:f.value,modifiers:b,pluralRules:_,missing:w===null?void 0:w,missingWarn:P,fallbackWarn:C,fallbackFormat:F,unresolving:!0,postTranslation:R===null?void 0:R,warnHtmlMessage:U,escapeParameter:B,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};M.datetimeFormats=m.value,M.numberFormats=g.value,M.__datetimeFormatters=ve(y)?y.__datetimeFormatters:void 0,M.__numberFormatters=ve(y)?y.__numberFormatters:void 0;const j=mA(M);return s&&xp(j),j})(),Hi(y,u.value,h.value);function L(){return[u.value,h.value,f.value,m.value,g.value]}const O=ze({get:()=>u.value,set:M=>{u.value=M,y.locale=u.value}}),S=ze({get:()=>h.value,set:M=>{h.value=M,y.fallbackLocale=h.value,Hi(y,u.value,M)}}),st=ze(()=>f.value),mt=ze(()=>m.value),Se=ze(()=>g.value);function he(){return Ke(R)?R:null}function be(M){R=M,y.postTranslation=M}function vt(){return H}function Nt(M){M!==null&&(w=zp(M)),H=M,y.missing=w}const et=(M,j,le,ue,Qe,it)=>{L();let tt;try{__INTLIFY_PROD_DEVTOOLS__,s||(y.fallbackContext=n?pA():void 0),tt=M(y)}finally{__INTLIFY_PROD_DEVTOOLS__,s||(y.fallbackContext=void 0)}if(le!=="translate exists"&&pt(tt)&&tt===Bl||le==="translate exists"&&!tt){const[At,Kn]=j();return n&&N?ue(n):Qe(At)}else{if(it(tt))return tt;throw Ct(bt.UNEXPECTED_RETURN_TYPE)}};function Ue(...M){return et(j=>Reflect.apply(Fp,null,[j,...M]),()=>wu(...M),"translate",j=>Reflect.apply(j.t,j,[...M]),j=>j,j=>ie(j))}function je(...M){const[j,le,ue]=M;if(ue&&!Ve(ue))throw Ct(bt.INVALID_ARGUMENT);return Ue(j,le,xt({resolvedMessage:!0},ue||{}))}function Gt(...M){return et(j=>Reflect.apply($p,null,[j,...M]),()=>Au(...M),"datetime format",j=>Reflect.apply(j.d,j,[...M]),()=>Op,j=>ie(j))}function Vt(...M){return et(j=>Reflect.apply(jp,null,[j,...M]),()=>Ru(...M),"number format",j=>Reflect.apply(j.n,j,[...M]),()=>Op,j=>ie(j))}function gt(M){return M.map(j=>ie(j)||pt(j)||Re(j)?qp(String(j)):j)}const se={normalize:gt,interpolate:M=>M,type:"vnode"};function ne(...M){return et(j=>{let le;const ue=j;try{ue.processor=se,le=Reflect.apply(Fp,null,[ue,...M])}finally{ue.processor=null}return le},()=>wu(...M),"translate",j=>j[Su](...M),j=>[qp(j)],j=>Je(j))}function oe(...M){return et(j=>Reflect.apply(jp,null,[j,...M]),()=>Ru(...M),"number format",j=>j[Cu](...M),Gp,j=>ie(j)||Je(j))}function we(...M){return et(j=>Reflect.apply($p,null,[j,...M]),()=>Au(...M),"datetime format",j=>j[Pu](...M),Gp,j=>ie(j)||Je(j))}function De(M){_=M,y.pluralRules=_}function A(M,j){return et(()=>{if(!M)return!1;const le=ie(j)?j:u.value,ue=Y(le),Qe=y.messageResolver(ue,M);return a?Qe!=null:di(Qe)||pn(Qe)||ie(Qe)},()=>[M],"translate exists",le=>Reflect.apply(le.te,le,[M,j]),BA,le=>Re(le))}function E(M){let j=null;const le=Q_(y,h.value,u.value);for(let ue=0;ue<le.length;ue++){const Qe=f.value[le[ue]]||{},it=y.messageResolver(Qe,M);if(it!=null){j=it;break}}return j}function V(M){const j=E(M);return j??(n?n.tm(M)||{}:{})}function Y(M){return f.value[M]||{}}function W(M,j){if(i){const le={[M]:j};for(const ue in le)bn(le,ue)&&wo(le[ue]);j=le[M]}f.value[M]=j,y.messages=f.value}function X(M,j){f.value[M]=f.value[M]||{};const le={[M]:j};if(i)for(const ue in le)bn(le,ue)&&wo(le[ue]);j=le[M],ka(j,f.value[M]),y.messages=f.value}function re(M){return m.value[M]||{}}function T(M,j){m.value[M]=j,y.datetimeFormats=m.value,Bp(y,M,j)}function I(M,j){m.value[M]=xt(m.value[M]||{},j),y.datetimeFormats=m.value,Bp(y,M,j)}function D(M){return g.value[M]||{}}function z(M,j){g.value[M]=j,y.numberFormats=g.value,Hp(y,M,j)}function Z(M,j){g.value[M]=xt(g.value[M]||{},j),y.numberFormats=g.value,Hp(y,M,j)}Kp++,n&&el&&(An(n.locale,M=>{c&&(u.value=M,y.locale=M,Hi(y,u.value,h.value))}),An(n.fallbackLocale,M=>{c&&(h.value=M,y.fallbackLocale=M,Hi(y,u.value,h.value))}));const Q={id:Kp,locale:O,fallbackLocale:S,get inheritLocale(){return c},set inheritLocale(M){c=M,M&&n&&(u.value=n.locale.value,h.value=n.fallbackLocale.value,Hi(y,u.value,h.value))},get availableLocales(){return Object.keys(f.value).sort()},messages:st,get modifiers(){return b},get pluralRules(){return _||{}},get isGlobal(){return s},get missingWarn(){return P},set missingWarn(M){P=M,y.missingWarn=P},get fallbackWarn(){return C},set fallbackWarn(M){C=M,y.fallbackWarn=C},get fallbackRoot(){return N},set fallbackRoot(M){N=M},get fallbackFormat(){return F},set fallbackFormat(M){F=M,y.fallbackFormat=F},get warnHtmlMessage(){return U},set warnHtmlMessage(M){U=M,y.warnHtmlMessage=M},get escapeParameter(){return B},set escapeParameter(M){B=M,y.escapeParameter=M},t:Ue,getLocaleMessage:Y,setLocaleMessage:W,mergeLocaleMessage:X,getPostTranslationHandler:he,setPostTranslationHandler:be,getMissingHandler:vt,setMissingHandler:Nt,[uy]:De};return Q.datetimeFormats=mt,Q.numberFormats=Se,Q.rt=je,Q.te=A,Q.tm=V,Q.d=Gt,Q.n=Vt,Q.getDateTimeFormat=re,Q.setDateTimeFormat=T,Q.mergeDateTimeFormat=I,Q.getNumberFormat=D,Q.setNumberFormat=z,Q.mergeNumberFormat=Z,Q[hy]=r,Q[Su]=ne,Q[Pu]=we,Q[Cu]=oe,Q}function HA(t){const e=ie(t.locale)?t.locale:hi,n=ie(t.fallbackLocale)||Je(t.fallbackLocale)||ve(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,r=Ke(t.missing)?t.missing:void 0,s=Re(t.silentTranslationWarn)||$r(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,i=Re(t.silentFallbackWarn)||$r(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,o=Re(t.fallbackRoot)?t.fallbackRoot:!0,a=!!t.formatFallbackMessages,c=ve(t.modifiers)?t.modifiers:{},u=t.pluralizationRules,h=Ke(t.postTranslation)?t.postTranslation:void 0,f=ie(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,m=!!t.escapeParameterHtml,g=Re(t.sync)?t.sync:!0;let P=t.messages;if(ve(t.sharedMessages)){const B=t.sharedMessages;P=Object.keys(B).reduce((_,y)=>{const k=_[y]||(_[y]={});return xt(k,B[y]),_},P||{})}const{__i18n:C,__root:N,__injectWithOption:F}=t,H=t.datetimeFormats,w=t.numberFormats,R=t.flatJson,U=t.translateExistCompatible;return{locale:e,fallbackLocale:n,messages:P,flatJson:R,datetimeFormats:H,numberFormats:w,missing:r,missingWarn:s,fallbackWarn:i,fallbackRoot:o,fallbackFormat:a,modifiers:c,pluralRules:u,postTranslation:h,warnHtmlMessage:f,escapeParameter:m,messageResolver:t.messageResolver,inheritLocale:g,translateExistCompatible:U,__i18n:C,__root:N,__injectWithOption:F}}function Nu(t={},e){{const n=Dh(HA(t)),{__extender:r}=t,s={id:n.id,get locale(){return n.locale.value},set locale(i){n.locale.value=i},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(i){n.fallbackLocale.value=i},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(i){},get missing(){return n.getMissingHandler()},set missing(i){n.setMissingHandler(i)},get silentTranslationWarn(){return Re(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(i){n.missingWarn=Re(i)?!i:i},get silentFallbackWarn(){return Re(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(i){n.fallbackWarn=Re(i)?!i:i},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(i){n.fallbackFormat=i},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(i){n.setPostTranslationHandler(i)},get sync(){return n.inheritLocale},set sync(i){n.inheritLocale=i},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(i){n.warnHtmlMessage=i!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(i){n.escapeParameter=i},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(i){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...i){const[o,a,c]=i,u={};let h=null,f=null;if(!ie(o))throw Ct(bt.INVALID_ARGUMENT);const m=o;return ie(a)?u.locale=a:Je(a)?h=a:ve(a)&&(f=a),Je(c)?h=c:ve(c)&&(f=c),Reflect.apply(n.t,n,[m,h||f||{},u])},rt(...i){return Reflect.apply(n.rt,n,[...i])},tc(...i){const[o,a,c]=i,u={plural:1};let h=null,f=null;if(!ie(o))throw Ct(bt.INVALID_ARGUMENT);const m=o;return ie(a)?u.locale=a:pt(a)?u.plural=a:Je(a)?h=a:ve(a)&&(f=a),ie(c)?u.locale=c:Je(c)?h=c:ve(c)&&(f=c),Reflect.apply(n.t,n,[m,h||f||{},u])},te(i,o){return n.te(i,o)},tm(i){return n.tm(i)},getLocaleMessage(i){return n.getLocaleMessage(i)},setLocaleMessage(i,o){n.setLocaleMessage(i,o)},mergeLocaleMessage(i,o){n.mergeLocaleMessage(i,o)},d(...i){return Reflect.apply(n.d,n,[...i])},getDateTimeFormat(i){return n.getDateTimeFormat(i)},setDateTimeFormat(i,o){n.setDateTimeFormat(i,o)},mergeDateTimeFormat(i,o){n.mergeDateTimeFormat(i,o)},n(...i){return Reflect.apply(n.n,n,[...i])},getNumberFormat(i){return n.getNumberFormat(i)},setNumberFormat(i,o){n.setNumberFormat(i,o)},mergeNumberFormat(i,o){n.mergeNumberFormat(i,o)},getChoiceIndex(i,o){return-1}};return s.__extender=r,s}}const xh={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function qA({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((r,s)=>[...r,...s.type===ft?s.children:[s]],[]):e.reduce((n,r)=>{const s=t[r];return s&&(n[r]=s()),n},He())}function py(t){return ft}const WA=Vo({name:"i18n-t",props:xt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>pt(t)||!isNaN(t)}},xh),setup(t,e){const{slots:n,attrs:r}=e,s=t.i18n||dn({useScope:t.scope,__useComponent:!0});return()=>{const i=Object.keys(n).filter(f=>f!=="_"),o=He();t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=ie(t.plural)?+t.plural:t.plural);const a=qA(e,i),c=s[Su](t.keypath,a,o),u=xt(He(),r),h=ie(t.tag)||Ve(t.tag)?t.tag:py();return Dl(h,u,c)}}}),Yp=WA;function GA(t){return Je(t)&&!ie(t[0])}function my(t,e,n,r){const{slots:s,attrs:i}=e;return()=>{const o={part:!0};let a=He();t.locale&&(o.locale=t.locale),ie(t.format)?o.key=t.format:Ve(t.format)&&(ie(t.format.key)&&(o.key=t.format.key),a=Object.keys(t.format).reduce((m,g)=>n.includes(g)?xt(He(),m,{[g]:t.format[g]}):m,He()));const c=r(t.value,o,a);let u=[o.key];Je(c)?u=c.map((m,g)=>{const P=s[m.type],C=P?P({[m.type]:m.value,index:g,parts:c}):[m.value];return GA(C)&&(C[0].key=`${m.type}-${g}`),C}):ie(c)&&(u=[c]);const h=xt(He(),i),f=ie(t.tag)||Ve(t.tag)?t.tag:py();return Dl(f,h,u)}}const KA=Vo({name:"i18n-n",props:xt({value:{type:Number,required:!0},format:{type:[String,Object]}},xh),setup(t,e){const n=t.i18n||dn({useScope:t.scope,__useComponent:!0});return my(t,e,ay,(...r)=>n[Cu](...r))}}),Qp=KA,zA=Vo({name:"i18n-d",props:xt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},xh),setup(t,e){const n=t.i18n||dn({useScope:t.scope,__useComponent:!0});return my(t,e,oy,(...r)=>n[Pu](...r))}}),Xp=zA;function YA(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const r=n.__getInstance(e);return r!=null?r.__composer:t.global.__composer}}function QA(t){const e=o=>{const{instance:a,modifiers:c,value:u}=o;if(!a||!a.$)throw Ct(bt.UNEXPECTED_ERROR);const h=YA(t,a.$),f=Jp(u);return[Reflect.apply(h.t,h,[...Zp(f)]),h]};return{created:(o,a)=>{const[c,u]=e(a);el&&t.global===u&&(o.__i18nWatcher=An(u.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=u,o.textContent=c},unmounted:o=>{el&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const c=o.__composer,u=Jp(a);o.textContent=Reflect.apply(c.t,c,[...Zp(u)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function Jp(t){if(ie(t))return{path:t};if(ve(t)){if(!("path"in t))throw Ct(bt.REQUIRED_VALUE,"path");return t}else throw Ct(bt.INVALID_VALUE)}function Zp(t){const{path:e,locale:n,args:r,choice:s,plural:i}=t,o={},a=r||{};return ie(n)&&(o.locale=n),pt(s)&&(o.plural=s),pt(i)&&(o.plural=i),[e,a,o]}function XA(t,e,...n){const r=ve(n[0])?n[0]:{},s=!!r.useI18nComponentName;(Re(r.globalInstall)?r.globalInstall:!0)&&([s?"i18n":Yp.name,"I18nT"].forEach(o=>t.component(o,Yp)),[Qp.name,"I18nN"].forEach(o=>t.component(o,Qp)),[Xp.name,"I18nD"].forEach(o=>t.component(o,Xp))),t.directive("t",QA(e))}function JA(t,e,n){return{beforeCreate(){const r=yo();if(!r)throw Ct(bt.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const i=s.i18n;if(s.__i18n&&(i.__i18n=s.__i18n),i.__root=e,this===this.$root)this.$i18n=em(t,i);else{i.__injectWithOption=!0,i.__extender=n.__vueI18nExtend,this.$i18n=Nu(i);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=em(t,s);else{this.$i18n=Nu({__i18n:s.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const i=this.$i18n;i.__extender&&(i.__disposer=i.__extender(this.$i18n))}else this.$i18n=t;s.__i18nGlobal&&fy(e,s,s),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$tc=(...i)=>this.$i18n.tc(...i),this.$te=(i,o)=>this.$i18n.te(i,o),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i),n.__setInstance(r,this.$i18n)},mounted(){},unmounted(){const r=yo();if(!r)throw Ct(bt.UNEXPECTED_ERROR);const s=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),n.__deleteInstance(r),delete this.$i18n}}}function em(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[uy](e.pluralizationRules||t.pluralizationRules);const n=jl(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(r=>t.mergeLocaleMessage(r,n[r])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(r=>t.mergeDateTimeFormat(r,e.datetimeFormats[r])),e.numberFormats&&Object.keys(e.numberFormats).forEach(r=>t.mergeNumberFormat(r,e.numberFormats[r])),t}const ZA=Yr("global-vue-i18n");function eR(t={},e){const n=__VUE_I18N_LEGACY_API__&&Re(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,r=Re(t.globalInjection)?t.globalInjection:!0,s=__VUE_I18N_LEGACY_API__&&n?!!t.allowComposition:!0,i=new Map,[o,a]=tR(t,n),c=Yr("");function u(m){return i.get(m)||null}function h(m,g){i.set(m,g)}function f(m){i.delete(m)}{const m={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return s},async install(g,...P){if(g.__VUE_I18N_SYMBOL__=c,g.provide(g.__VUE_I18N_SYMBOL__,m),ve(P[0])){const F=P[0];m.__composerExtend=F.__composerExtend,m.__vueI18nExtend=F.__vueI18nExtend}let C=null;!n&&r&&(C=uR(g,m.global)),__VUE_I18N_FULL_INSTALL__&&XA(g,m,...P),__VUE_I18N_LEGACY_API__&&n&&g.mixin(JA(a,a.__composer,m));const N=g.unmount;g.unmount=()=>{C&&C(),m.dispose(),N()}},get global(){return a},dispose(){o.stop()},__instances:i,__getInstance:u,__setInstance:h,__deleteInstance:f};return m}}function dn(t={}){const e=yo();if(e==null)throw Ct(bt.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw Ct(bt.NOT_INSTALLED);const n=nR(e),r=sR(n),s=dy(e),i=rR(t,s);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!t.__useComponent){if(!n.allowComposition)throw Ct(bt.NOT_AVAILABLE_IN_LEGACY_MODE);return lR(e,i,r,t)}if(i==="global")return fy(r,t,s),r;if(i==="parent"){let c=iR(n,e,t.__useComponent);return c==null&&(c=r),c}const o=n;let a=o.__getInstance(e);if(a==null){const c=xt({},t);"__i18n"in s&&(c.__i18n=s.__i18n),r&&(c.__root=r),a=Dh(c),o.__composerExtend&&(a[ku]=o.__composerExtend(a)),aR(o,e,a),o.__setInstance(e,a)}return a}function tR(t,e,n){const r=dh();{const s=__VUE_I18N_LEGACY_API__&&e?r.run(()=>Nu(t)):r.run(()=>Dh(t));if(s==null)throw Ct(bt.UNEXPECTED_ERROR);return[r,s]}}function nR(t){{const e=_n(t.isCE?ZA:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw Ct(t.isCE?bt.NOT_INSTALLED_WITH_PROVIDE:bt.UNEXPECTED_ERROR);return e}}function rR(t,e){return Fl(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function sR(t){return t.mode==="composition"?t.global:t.global.__composer}function iR(t,e,n=!1){let r=null;const s=e.root;let i=oR(e,n);for(;i!=null;){const o=t;if(t.mode==="composition")r=o.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(i);a!=null&&(r=a.__composer,n&&r&&!r[hy]&&(r=null))}if(r!=null||s===i)break;i=i.parent}return r}function oR(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function aR(t,e,n){Ei(()=>{},e),wh(()=>{const r=n;t.__deleteInstance(e);const s=r[ku];s&&(s(),delete r[ku])},e)}function lR(t,e,n,r={}){const s=e==="local",i=Th(null);if(s&&t.proxy&&!(t.proxy.$options.i18n||t.proxy.$options.__i18n))throw Ct(bt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const o=Re(r.inheritLocale)?r.inheritLocale:!ie(r.locale),a=Ce(!s||o?n.locale.value:ie(r.locale)?r.locale:hi),c=Ce(!s||o?n.fallbackLocale.value:ie(r.fallbackLocale)||Je(r.fallbackLocale)||ve(r.fallbackLocale)||r.fallbackLocale===!1?r.fallbackLocale:a.value),u=Ce(jl(a.value,r)),h=Ce(ve(r.datetimeFormats)?r.datetimeFormats:{[a.value]:{}}),f=Ce(ve(r.numberFormats)?r.numberFormats:{[a.value]:{}}),m=s?n.missingWarn:Re(r.missingWarn)||$r(r.missingWarn)?r.missingWarn:!0,g=s?n.fallbackWarn:Re(r.fallbackWarn)||$r(r.fallbackWarn)?r.fallbackWarn:!0,P=s?n.fallbackRoot:Re(r.fallbackRoot)?r.fallbackRoot:!0,C=!!r.fallbackFormat,N=Ke(r.missing)?r.missing:null,F=Ke(r.postTranslation)?r.postTranslation:null,H=s?n.warnHtmlMessage:Re(r.warnHtmlMessage)?r.warnHtmlMessage:!0,w=!!r.escapeParameter,R=s?n.modifiers:ve(r.modifiers)?r.modifiers:{},U=r.pluralRules||s&&n.pluralRules;function B(){return[a.value,c.value,u.value,h.value,f.value]}const b=ze({get:()=>i.value?i.value.locale.value:a.value,set:E=>{i.value&&(i.value.locale.value=E),a.value=E}}),_=ze({get:()=>i.value?i.value.fallbackLocale.value:c.value,set:E=>{i.value&&(i.value.fallbackLocale.value=E),c.value=E}}),y=ze(()=>i.value?i.value.messages.value:u.value),k=ze(()=>h.value),L=ze(()=>f.value);function O(){return i.value?i.value.getPostTranslationHandler():F}function S(E){i.value&&i.value.setPostTranslationHandler(E)}function st(){return i.value?i.value.getMissingHandler():N}function mt(E){i.value&&i.value.setMissingHandler(E)}function Se(E){return B(),E()}function he(...E){return i.value?Se(()=>Reflect.apply(i.value.t,null,[...E])):Se(()=>"")}function be(...E){return i.value?Reflect.apply(i.value.rt,null,[...E]):""}function vt(...E){return i.value?Se(()=>Reflect.apply(i.value.d,null,[...E])):Se(()=>"")}function Nt(...E){return i.value?Se(()=>Reflect.apply(i.value.n,null,[...E])):Se(()=>"")}function et(E){return i.value?i.value.tm(E):{}}function Ue(E,V){return i.value?i.value.te(E,V):!1}function je(E){return i.value?i.value.getLocaleMessage(E):{}}function Gt(E,V){i.value&&(i.value.setLocaleMessage(E,V),u.value[E]=V)}function Vt(E,V){i.value&&i.value.mergeLocaleMessage(E,V)}function gt(E){return i.value?i.value.getDateTimeFormat(E):{}}function G(E,V){i.value&&(i.value.setDateTimeFormat(E,V),h.value[E]=V)}function se(E,V){i.value&&i.value.mergeDateTimeFormat(E,V)}function ne(E){return i.value?i.value.getNumberFormat(E):{}}function oe(E,V){i.value&&(i.value.setNumberFormat(E,V),f.value[E]=V)}function we(E,V){i.value&&i.value.mergeNumberFormat(E,V)}const De={get id(){return i.value?i.value.id:-1},locale:b,fallbackLocale:_,messages:y,datetimeFormats:k,numberFormats:L,get inheritLocale(){return i.value?i.value.inheritLocale:o},set inheritLocale(E){i.value&&(i.value.inheritLocale=E)},get availableLocales(){return i.value?i.value.availableLocales:Object.keys(u.value)},get modifiers(){return i.value?i.value.modifiers:R},get pluralRules(){return i.value?i.value.pluralRules:U},get isGlobal(){return i.value?i.value.isGlobal:!1},get missingWarn(){return i.value?i.value.missingWarn:m},set missingWarn(E){i.value&&(i.value.missingWarn=E)},get fallbackWarn(){return i.value?i.value.fallbackWarn:g},set fallbackWarn(E){i.value&&(i.value.missingWarn=E)},get fallbackRoot(){return i.value?i.value.fallbackRoot:P},set fallbackRoot(E){i.value&&(i.value.fallbackRoot=E)},get fallbackFormat(){return i.value?i.value.fallbackFormat:C},set fallbackFormat(E){i.value&&(i.value.fallbackFormat=E)},get warnHtmlMessage(){return i.value?i.value.warnHtmlMessage:H},set warnHtmlMessage(E){i.value&&(i.value.warnHtmlMessage=E)},get escapeParameter(){return i.value?i.value.escapeParameter:w},set escapeParameter(E){i.value&&(i.value.escapeParameter=E)},t:he,getPostTranslationHandler:O,setPostTranslationHandler:S,getMissingHandler:st,setMissingHandler:mt,rt:be,d:vt,n:Nt,tm:et,te:Ue,getLocaleMessage:je,setLocaleMessage:Gt,mergeLocaleMessage:Vt,getDateTimeFormat:gt,setDateTimeFormat:G,mergeDateTimeFormat:se,getNumberFormat:ne,setNumberFormat:oe,mergeNumberFormat:we};function A(E){E.locale.value=a.value,E.fallbackLocale.value=c.value,Object.keys(u.value).forEach(V=>{E.mergeLocaleMessage(V,u.value[V])}),Object.keys(h.value).forEach(V=>{E.mergeDateTimeFormat(V,h.value[V])}),Object.keys(f.value).forEach(V=>{E.mergeNumberFormat(V,f.value[V])}),E.escapeParameter=w,E.fallbackFormat=C,E.fallbackRoot=P,E.fallbackWarn=g,E.missingWarn=m,E.warnHtmlMessage=H}return o_(()=>{if(t.proxy==null||t.proxy.$i18n==null)throw Ct(bt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const E=i.value=t.proxy.$i18n.__composer;e==="global"?(a.value=E.locale.value,c.value=E.fallbackLocale.value,u.value=E.messages.value,h.value=E.datetimeFormats.value,f.value=E.numberFormats.value):s&&A(E)}),De}const cR=["locale","fallbackLocale","availableLocales"],tm=["t","rt","d","n","tm","te"];function uR(t,e){const n=Object.create(null);return cR.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i)throw Ct(bt.UNEXPECTED_ERROR);const o=ht(i.value)?{get(){return i.value.value},set(a){i.value.value=a}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,s,o)}),t.config.globalProperties.$i18n=n,tm.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i||!i.value)throw Ct(bt.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${s}`,i)}),()=>{delete t.config.globalProperties.$i18n,tm.forEach(s=>{delete t.config.globalProperties[`$${s}`]})}}$A();__INTLIFY_JIT_COMPILATION__?Dp(DA):Dp(LA);uA(W0);hA(Q_);if(__INTLIFY_PROD_DEVTOOLS__){const t=rr();t.__INTLIFY__=!0,eA(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}var hR=!1;/*!
 * pinia v2.2.8
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let gy;const Hl=t=>gy=t,_y=Symbol();function Ou(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var io;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(io||(io={}));function dR(){const t=dh(!0),e=t.run(()=>Ce({}));let n=[],r=[];const s=Eh({install(i){Hl(s),s._a=i,i.provide(_y,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!hR?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const yy=()=>{};function nm(t,e,n,r=yy){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Lg()&&FT(s),s}function Fs(t,...e){t.slice().forEach(n=>{n(...e)})}const fR=t=>t(),rm=Symbol(),Yc=Symbol();function Lu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Ou(s)&&Ou(r)&&t.hasOwnProperty(n)&&!ht(r)&&!xr(r)?t[n]=Lu(s,r):t[n]=r}return t}const pR=Symbol();function mR(t){return!Ou(t)||!t.hasOwnProperty(pR)}const{assign:wr}=Object;function gR(t){return!!(ht(t)&&t.effect)}function _R(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=s?s():{});const h=ab(n.state.value[t]);return wr(h,i,Object.keys(o||{}).reduce((f,m)=>(f[m]=Eh(ze(()=>{Hl(n);const g=n._s.get(t);return o[m].call(g,g)})),f),{}))}return c=vy(t,u,e,n,r,!0),c}function vy(t,e,n={},r,s,i){let o;const a=wr({actions:{}},n),c={deep:!0};let u,h,f=[],m=[],g;const P=r.state.value[t];!i&&!P&&(r.state.value[t]={}),Ce({});let C;function N(_){let y;u=h=!1,typeof _=="function"?(_(r.state.value[t]),y={type:io.patchFunction,storeId:t,events:g}):(Lu(r.state.value[t],_),y={type:io.patchObject,payload:_,storeId:t,events:g});const k=C=Symbol();kl().then(()=>{C===k&&(u=!0)}),h=!0,Fs(f,y,r.state.value[t])}const F=i?function(){const{state:y}=n,k=y?y():{};this.$patch(L=>{wr(L,k)})}:yy;function H(){o.stop(),f=[],m=[],r._s.delete(t)}const w=(_,y="")=>{if(rm in _)return _[Yc]=y,_;const k=function(){Hl(r);const L=Array.from(arguments),O=[],S=[];function st(he){O.push(he)}function mt(he){S.push(he)}Fs(m,{args:L,name:k[Yc],store:U,after:st,onError:mt});let Se;try{Se=_.apply(this&&this.$id===t?this:U,L)}catch(he){throw Fs(S,he),he}return Se instanceof Promise?Se.then(he=>(Fs(O,he),he)).catch(he=>(Fs(S,he),Promise.reject(he))):(Fs(O,Se),Se)};return k[rm]=!0,k[Yc]=y,k},R={_p:r,$id:t,$onAction:nm.bind(null,m),$patch:N,$reset:F,$subscribe(_,y={}){const k=nm(f,_,y.detached,()=>L()),L=o.run(()=>An(()=>r.state.value[t],O=>{(y.flush==="sync"?h:u)&&_({storeId:t,type:io.direct,events:g},O)},wr({},c,y)));return k},$dispose:H},U=xo(R);r._s.set(t,U);const b=(r._a&&r._a.runWithContext||fR)(()=>r._e.run(()=>(o=dh()).run(()=>e({action:w}))));for(const _ in b){const y=b[_];if(ht(y)&&!gR(y)||xr(y))i||(P&&mR(y)&&(ht(y)?y.value=P[_]:Lu(y,P[_])),r.state.value[t][_]=y);else if(typeof y=="function"){const k=w(y,_);b[_]=k,a.actions[_]=y}}return wr(U,b),wr(Me(U),b),Object.defineProperty(U,"$state",{get:()=>r.state.value[t],set:_=>{N(y=>{wr(y,_)})}}),r._p.forEach(_=>{wr(U,o.run(()=>_({store:U,app:r._a,pinia:r,options:a})))}),P&&i&&n.hydrate&&n.hydrate(U.$state,P),u=!0,h=!0,U}/*! #__NO_SIDE_EFFECTS__ */function yR(t,e,n){let r,s;const i=typeof e=="function";r=t,s=i?n:e;function o(a,c){const u=Bb();return a=a||(u?_n(_y,null):null),a&&Hl(a),a=gy,a._s.has(r)||(i?vy(r,e,s,a):_R(r,s,a)),a._s.get(r)}return o.$id=r,o}var sm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},vR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ty={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),r.push(n[h],n[f],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ey(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new ER;const m=i<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const P=u<<6&192|f;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ER extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TR=function(t){const e=Ey(t);return Ty.encodeByteArray(e,!0)},nl=function(t){return TR(t).replace(/\./g,"")},by=function(t){try{return Ty.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=()=>bR().__FIREBASE_DEFAULTS__,wR=()=>{if(typeof process>"u"||typeof sm>"u")return;const t=sm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&by(t[1]);return e&&JSON.parse(e)},ql=()=>{try{return IR()||wR()||AR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Iy=t=>{var e,n;return(n=(e=ql())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wy=t=>{const e=Iy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ay=()=>{var t;return(t=ql())===null||t===void 0?void 0:t.config},Ry=t=>{var e;return(e=ql())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[nl(JSON.stringify(n)),nl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function SR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function PR(){var t;const e=(t=ql())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function CR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function NR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OR(){const t=Wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function LR(){return!PR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function DR(){try{return typeof indexedDB=="object"}catch{return!1}}function xR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MR="FirebaseError";class Gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=MR,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$o.prototype.create)}}class $o{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?VR(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Gn(s,a,r)}}function VR(t,e){return t.replace(UR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const UR=/\{\$([^}]+)}/g;function FR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function rl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(im(i)&&im(o)){if(!rl(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function im(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ki(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function $R(t,e){const n=new BR(t,e);return n.subscribe.bind(n)}class BR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Qc),s.error===void 0&&(s.error=Qc),s.complete===void 0&&(s.complete=Qc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t){return t&&t._delegate?t._delegate:t}class Br{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new RR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WR(e))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hs){return this.instances.has(e)}getOptions(e=hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hs){return this.component?this.component.multipleInstances?e:hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qR(t){return t===hs?void 0:t}function WR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ke||(ke={}));const KR={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},zR=ke.INFO,YR={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},QR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=YR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mh{constructor(e){this.name=e,this._logLevel=zR,this._logHandler=QR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const XR=(t,e)=>e.some(n=>t instanceof n);let om,am;function JR(){return om||(om=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZR(){return am||(am=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Py=new WeakMap,Du=new WeakMap,Cy=new WeakMap,Xc=new WeakMap,Vh=new WeakMap;function eS(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Py.set(n,t)}).catch(()=>{}),Vh.set(e,t),e}function tS(t){if(Du.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Du.set(t,e)}let xu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Du.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nS(t){xu=t(xu)}function rS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Jc(this),e,...n);return Cy.set(r,e.sort?e.sort():[e]),Mr(r)}:ZR().includes(t)?function(...e){return t.apply(Jc(this),e),Mr(Py.get(this))}:function(...e){return Mr(t.apply(Jc(this),e))}}function sS(t){return typeof t=="function"?rS(t):(t instanceof IDBTransaction&&tS(t),XR(t,JR())?new Proxy(t,xu):t)}function Mr(t){if(t instanceof IDBRequest)return eS(t);if(Xc.has(t))return Xc.get(t);const e=sS(t);return e!==t&&(Xc.set(t,e),Vh.set(e,t)),e}const Jc=t=>Vh.get(t);function iS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Mr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Mr(o.result),c.oldVersion,c.newVersion,Mr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const oS=["get","getKey","getAll","getAllKeys","count"],aS=["put","add","delete","clear"],Zc=new Map;function lm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zc.get(e))return Zc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=aS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||oS.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Zc.set(e,i),i}nS(t=>({...t,get:(e,n,r)=>lm(e,n)||t.get(e,n,r),has:(e,n)=>!!lm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mu="@firebase/app",cm="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Mh("@firebase/app"),uS="@firebase/app-compat",hS="@firebase/analytics-compat",dS="@firebase/analytics",fS="@firebase/app-check-compat",pS="@firebase/app-check",mS="@firebase/auth",gS="@firebase/auth-compat",_S="@firebase/database",yS="@firebase/data-connect",vS="@firebase/database-compat",ES="@firebase/functions",TS="@firebase/functions-compat",bS="@firebase/installations",IS="@firebase/installations-compat",wS="@firebase/messaging",AS="@firebase/messaging-compat",RS="@firebase/performance",SS="@firebase/performance-compat",PS="@firebase/remote-config",CS="@firebase/remote-config-compat",kS="@firebase/storage",NS="@firebase/storage-compat",OS="@firebase/firestore",LS="@firebase/vertexai",DS="@firebase/firestore-compat",xS="firebase",MS="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu="[DEFAULT]",VS={[Mu]:"fire-core",[uS]:"fire-core-compat",[dS]:"fire-analytics",[hS]:"fire-analytics-compat",[pS]:"fire-app-check",[fS]:"fire-app-check-compat",[mS]:"fire-auth",[gS]:"fire-auth-compat",[_S]:"fire-rtdb",[yS]:"fire-data-connect",[vS]:"fire-rtdb-compat",[ES]:"fire-fn",[TS]:"fire-fn-compat",[bS]:"fire-iid",[IS]:"fire-iid-compat",[wS]:"fire-fcm",[AS]:"fire-fcm-compat",[RS]:"fire-perf",[SS]:"fire-perf-compat",[PS]:"fire-rc",[CS]:"fire-rc-compat",[kS]:"fire-gcs",[NS]:"fire-gcs-compat",[OS]:"fire-fst",[DS]:"fire-fst-compat",[LS]:"fire-vertex","fire-js":"fire-js",[xS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=new Map,US=new Map,Uu=new Map;function um(t,e){try{t.container.addComponent(e)}catch(n){dr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Es(t){const e=t.name;if(Uu.has(e))return dr.debug(`There were multiple attempts to register component ${e}.`),!1;Uu.set(e,t);for(const n of sl.values())um(n,t);for(const n of US.values())um(n,t);return!0}function Wl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vr=new $o("app","Firebase",FS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Br("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=MS;function ky(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Vr.create("bad-app-name",{appName:String(s)});if(n||(n=Ay()),!n)throw Vr.create("no-options");const i=sl.get(s);if(i){if(rl(n,i.options)&&rl(r,i.config))return i;throw Vr.create("duplicate-app",{appName:s})}const o=new GR(s);for(const c of Uu.values())o.addComponent(c);const a=new $S(n,r,o);return sl.set(s,a),a}function Uh(t=Vu){const e=sl.get(t);if(!e&&t===Vu&&Ay())return ky();if(!e)throw Vr.create("no-app",{appName:t});return e}function Un(t,e,n){var r;let s=(r=VS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dr.warn(a.join(" "));return}Es(new Br(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS="firebase-heartbeat-database",jS=1,Ao="firebase-heartbeat-store";let eu=null;function Ny(){return eu||(eu=iS(BS,jS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ao)}catch(n){console.warn(n)}}}}).catch(t=>{throw Vr.create("idb-open",{originalErrorMessage:t.message})})),eu}async function HS(t){try{const n=(await Ny()).transaction(Ao),r=await n.objectStore(Ao).get(Oy(t));return await n.done,r}catch(e){if(e instanceof Gn)dr.warn(e.message);else{const n=Vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dr.warn(n.message)}}}async function hm(t,e){try{const r=(await Ny()).transaction(Ao,"readwrite");await r.objectStore(Ao).put(e,Oy(t)),await r.done}catch(n){if(n instanceof Gn)dr.warn(n.message);else{const r=Vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dr.warn(r.message)}}}function Oy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=1024,WS=30*24*60*60*1e3;class GS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=dm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=WS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){dr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=dm(),{heartbeatsToSend:r,unsentEntries:s}=KS(this._heartbeatsCache.heartbeats),i=nl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return dr.warn(n),""}}}function dm(){return new Date().toISOString().substring(0,10)}function KS(t,e=qS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),fm(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),fm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return DR()?xR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await HS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return hm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function fm(t){return nl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t){Es(new Br("platform-logger",e=>new lS(e),"PRIVATE")),Es(new Br("heartbeat",e=>new GS(e),"PRIVATE")),Un(Mu,cm,t),Un(Mu,cm,"esm2017"),Un("fire-js","")}YS("");function Fh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ly(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QS=Ly,Dy=new $o("auth","Firebase",Ly());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=new Mh("@firebase/auth");function XS(t,...e){il.logLevel<=ke.WARN&&il.warn(`Auth (${Ss}): ${t}`,...e)}function Na(t,...e){il.logLevel<=ke.ERROR&&il.error(`Auth (${Ss}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,...e){throw $h(t,...e)}function Fn(t,...e){return $h(t,...e)}function xy(t,e,n){const r=Object.assign(Object.assign({},QS()),{[e]:n});return new $o("auth","Firebase",r).create(e,{appName:t.name})}function lr(t){return xy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $h(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Dy.create(t,...e)}function ge(t,e,...n){if(!t)throw $h(e,...n)}function sr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Na(e),new Error(e)}function fr(t,e){t||sr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function JS(){return pm()==="http:"||pm()==="https:"}function pm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JS()||kR()||"connection"in navigator)?navigator.onLine:!0}function eP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,n){this.shortDelay=e,this.longDelay=n,fr(n>e,"Short delay should be less than long delay!"),this.isMobile=SR()||NR()}get(){return ZS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(t,e){fr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP=new jo(3e4,6e4);function Jr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zr(t,e,n,r,s={}){return Vy(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Bo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return CR()||(u.referrerPolicy="no-referrer"),My.fetch()(Uy(t,t.config.apiHost,n,a),u)})}async function Vy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tP),e);try{const s=new sP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ya(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ya(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ya(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ya(t,"user-disabled",o);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xy(t,h,u);Cn(t,h)}}catch(s){if(s instanceof Gn)throw s;Cn(t,"network-request-failed",{message:String(s)})}}async function Ho(t,e,n,r,s={}){const i=await Zr(t,e,n,r,s);return"mfaPendingCredential"in i&&Cn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Uy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Bh(t.config,s):`${t.config.apiScheme}://${s}`}function rP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Fn(this.auth,"network-request-failed")),nP.get())})}}function ya(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Fn(t,e,r);return s.customData._tokenResponse=n,s}function mm(t){return t!==void 0&&t.enterprise!==void 0}class iP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return rP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function oP(t,e){return Zr(t,"GET","/v2/recaptchaConfig",Jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aP(t,e){return Zr(t,"POST","/v1/accounts:delete",e)}async function Fy(t,e){return Zr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lP(t,e=!1){const n=at(t),r=await n.getIdToken(e),s=jh(r);ge(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:oo(tu(s.auth_time)),issuedAtTime:oo(tu(s.iat)),expirationTime:oo(tu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function tu(t){return Number(t)*1e3}function jh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Na("JWT malformed, contained fewer than 3 sections"),null;try{const s=by(n);return s?JSON.parse(s):(Na("Failed to decode base64 JWT payload"),null)}catch(s){return Na("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function gm(t){const e=jh(t);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gn&&cP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oo(this.lastLoginAt),this.creationTime=oo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ol(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ro(t,Fy(n,{idToken:r}));ge(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?$y(i.providerUserInfo):[],a=dP(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new $u(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function hP(t){const e=at(t);await ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $y(t){return t.map(e=>{var{providerId:n}=e,r=Fh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fP(t,e){const n=await Vy(t,{},async()=>{const r=Bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Uy(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",My.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pP(t,e){return Zr(t,"POST","/v2/accounts:revokeToken",Jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const n=gm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await fP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ti;return r&&(ge(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ge(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ge(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ti,this.toJSON())}_performRefresh(){return sr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t,e){ge(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ir{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Fh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $u(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ro(this,this.stsTokenManager.getToken(this.auth,e));return ge(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lP(this,e)}reload(){return hP(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ir(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ol(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dn(this.auth.app))return Promise.reject(lr(this.auth));const e=await this.getIdToken();return await Ro(this,aP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(o=n.photoURL)!==null&&o!==void 0?o:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,F=(u=n.createdAt)!==null&&u!==void 0?u:void 0,H=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:w,emailVerified:R,isAnonymous:U,providerData:B,stsTokenManager:b}=n;ge(w&&b,e,"internal-error");const _=ti.fromJSON(this.name,b);ge(typeof w=="string",e,"internal-error"),Ir(f,e.name),Ir(m,e.name),ge(typeof R=="boolean",e,"internal-error"),ge(typeof U=="boolean",e,"internal-error"),Ir(g,e.name),Ir(P,e.name),Ir(C,e.name),Ir(N,e.name),Ir(F,e.name),Ir(H,e.name);const y=new ir({uid:w,auth:e,email:m,emailVerified:R,displayName:f,isAnonymous:U,photoURL:P,phoneNumber:g,tenantId:C,stsTokenManager:_,createdAt:F,lastLoginAt:H});return B&&Array.isArray(B)&&(y.providerData=B.map(k=>Object.assign({},k))),N&&(y._redirectEventId=N),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new ti;s.updateFromServerResponse(n);const i=new ir({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ol(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ge(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?$y(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new ti;a.updateFromIdToken(r);const c=new ir({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new $u(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=new Map;function or(t){fr(t instanceof Function,"Expected a class definition");let e=_m.get(t);return e?(fr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_m.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}By.type="NONE";const ym=By;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t,e,n){return`firebase:${t}:${e}:${n}`}class ni{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Oa(this.userKey,s.apiKey,i),this.fullPersistenceKey=Oa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ir._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ni(or(ym),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||or(ym);const o=Oa(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const f=ir._fromJSON(e,h);u!==i&&(a=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ni(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ni(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ky(e))return"Blackberry";if(zy(e))return"Webos";if(Hy(e))return"Safari";if((e.includes("chrome/")||qy(e))&&!e.includes("edge/"))return"Chrome";if(Gy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jy(t=Wt()){return/firefox\//i.test(t)}function Hy(t=Wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qy(t=Wt()){return/crios\//i.test(t)}function Wy(t=Wt()){return/iemobile/i.test(t)}function Gy(t=Wt()){return/android/i.test(t)}function Ky(t=Wt()){return/blackberry/i.test(t)}function zy(t=Wt()){return/webos/i.test(t)}function Hh(t=Wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mP(t=Wt()){var e;return Hh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gP(){return OR()&&document.documentMode===10}function Yy(t=Wt()){return Hh(t)||Gy(t)||zy(t)||Ky(t)||/windows phone/i.test(t)||Wy(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(t,e=[]){let n;switch(t){case"Browser":n=vm(Wt());break;case"Worker":n=`${vm(Wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ss}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yP(t,e={}){return Zr(t,"GET","/v2/passwordPolicy",Jr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=6;class EP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:vP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Em(this),this.idTokenSubscription=new Em(this),this.beforeStateQueue=new _P(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=or(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ni.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Fy(this,{idToken:e}),r=await ir._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Dn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ol(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dn(this.app))return Promise.reject(lr(this));const n=e?at(e):null;return n&&ge(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dn(this.app)?Promise.reject(lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dn(this.app)?Promise.reject(lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yP(this),n=new EP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $o("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&or(e)||this._popupRedirectResolver;ge(n,this,"argument-error"),this.redirectPersistenceManager=await ni.create(this,[or(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&XS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ps(t){return at(t)}class Em{constructor(e){this.auth=e,this.observer=null,this.addObserver=$R(n=>this.observer=n)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bP(t){Gl=t}function Xy(t){return Gl.loadJS(t)}function IP(){return Gl.recaptchaEnterpriseScript}function wP(){return Gl.gapiScript}function AP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class RP{constructor(){this.enterprise=new SP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class SP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const PP="recaptcha-enterprise",Jy="NO_RECAPTCHA";class CP{constructor(e){this.type=PP,this.auth=Ps(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{oP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new iP(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;mm(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Jy)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new RP().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&mm(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=IP();c.length!==0&&(c+=a),Xy(c).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Tm(t,e,n,r=!1,s=!1){const i=new CP(t);let o;if(s)o=Jy;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Bu(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Tm(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Tm(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(t,e){const n=Wl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(rl(i,e??{}))return s;Cn(s,"already-initialized")}return n.initialize({options:e})}function NP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(or);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function OP(t,e,n){const r=Ps(t);ge(r._canInitEmulator,r,"emulator-config-failed"),ge(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Zy(e),{host:o,port:a}=LP(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),DP()}function Zy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LP(t){const e=Zy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:bm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:bm(o)}}}function bm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function DP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sr("not implemented")}_getIdTokenResponse(e){return sr("not implemented")}_linkToIdToken(e,n){return sr("not implemented")}_getReauthenticationResolver(e){return sr("not implemented")}}async function xP(t,e){return Zr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MP(t,e){return Ho(t,"POST","/v1/accounts:signInWithPassword",Jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",Jr(t,e))}async function UP(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",Jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends qh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new So(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new So(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bu(e,n,"signInWithPassword",MP);case"emailLink":return VP(e,{email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bu(e,r,"signUpPassword",xP);case"emailLink":return UP(e,{idToken:n,email:this._email,oobCode:this._password});default:Cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(t,e){return Ho(t,"POST","/v1/accounts:signInWithIdp",Jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP="http://localhost";class Ts extends qh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Fh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ts(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ri(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ri(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ri(e,n)}buildRequest(){const e={requestUri:FP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $P(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BP(t){const e=Gi(Ki(t)).link,n=e?Gi(Ki(e)).deep_link_id:null,r=Gi(Ki(t)).deep_link_id;return(r?Gi(Ki(r)).link:null)||r||n||e||t}class Wh{constructor(e){var n,r,s,i,o,a;const c=Gi(Ki(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,f=$P((s=c.mode)!==null&&s!==void 0?s:null);ge(u&&h&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=h,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=BP(e);try{return new Wh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.providerId=bi.PROVIDER_ID}static credential(e,n){return So._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wh.parseLink(n);return ge(r,"argument-error"),So._fromEmailAndCode(e,r.code,r.tenantId)}}bi.PROVIDER_ID="password";bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends ev{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends qo{constructor(){super("facebook.com")}static credential(e){return Ts._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pr.credential(e.oauthAccessToken)}catch{return null}}}Pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ts._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cr.credentialFromTaggedObject(e)}static credentialFromError(e){return Cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cr.credential(n,r)}catch{return null}}}Cr.GOOGLE_SIGN_IN_METHOD="google.com";Cr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr extends qo{constructor(){super("github.com")}static credential(e){return Ts._fromParams({providerId:kr.PROVIDER_ID,signInMethod:kr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kr.credentialFromTaggedObject(e)}static credentialFromError(e){return kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kr.credential(e.oauthAccessToken)}catch{return null}}}kr.GITHUB_SIGN_IN_METHOD="github.com";kr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends qo{constructor(){super("twitter.com")}static credential(e,n){return Ts._fromParams({providerId:Nr.PROVIDER_ID,signInMethod:Nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nr.credentialFromTaggedObject(e)}static credentialFromError(e){return Nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nr.credential(n,r)}catch{return null}}}Nr.TWITTER_SIGN_IN_METHOD="twitter.com";Nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jP(t,e){return Ho(t,"POST","/v1/accounts:signUp",Jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ir._fromIdTokenResponse(e,r,s),o=Im(r);return new bs({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Im(r);return new bs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Im(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al extends Gn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,al.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new al(e,n,r,s)}}function tv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?al._fromErrorAndOperation(t,i,e,r):i})}async function HP(t,e,n=!1){const r=await Ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return bs._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qP(t,e,n=!1){const{auth:r}=t;if(Dn(r.app))return Promise.reject(lr(r));const s="reauthenticate";try{const i=await Ro(t,tv(r,s,e,t),n);ge(i.idToken,r,"internal-error");const o=jh(i.idToken);ge(o,r,"internal-error");const{sub:a}=o;return ge(t.uid===a,r,"user-mismatch"),bs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Cn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nv(t,e,n=!1){if(Dn(t.app))return Promise.reject(lr(t));const r="signIn",s=await tv(t,r,e),i=await bs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function WP(t,e){return nv(Ps(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rv(t){const e=Ps(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function GP(t,e,n){if(Dn(t.app))return Promise.reject(lr(t));const r=Ps(t),o=await Bu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jP).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&rv(t),c}),a=await bs._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function KP(t,e,n){return Dn(t.app)?Promise.reject(lr(t)):WP(at(t),bi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&rv(t),r})}function zP(t,e,n,r){return at(t).onIdTokenChanged(e,n,r)}function YP(t,e,n){return at(t).beforeAuthStateChanged(e,n)}function QP(t,e,n,r){return at(t).onAuthStateChanged(e,n,r)}function XP(t){return at(t).signOut()}const ll="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ll,"1"),this.storage.removeItem(ll),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=1e3,ZP=10;class iv extends sv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);gP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ZP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},JP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}iv.type="LOCAL";const eC=iv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov extends sv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ov.type="SESSION";const av=ov;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Kl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await tC(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Gh("",20);s.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(){return window}function rC(t){$n().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(){return typeof $n().WorkerGlobalScope<"u"&&typeof $n().importScripts=="function"}async function sC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oC(){return lv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv="firebaseLocalStorageDb",aC=1,cl="firebaseLocalStorage",uv="fbase_key";class Wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function zl(t,e){return t.transaction([cl],e?"readwrite":"readonly").objectStore(cl)}function lC(){const t=indexedDB.deleteDatabase(cv);return new Wo(t).toPromise()}function ju(){const t=indexedDB.open(cv,aC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(cl,{keyPath:uv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(cl)?e(r):(r.close(),await lC(),e(await ju()))})})}async function wm(t,e,n){const r=zl(t,!0).put({[uv]:e,value:n});return new Wo(r).toPromise()}async function cC(t,e){const n=zl(t,!1).get(e),r=await new Wo(n).toPromise();return r===void 0?null:r.value}function Am(t,e){const n=zl(t,!0).delete(e);return new Wo(n).toPromise()}const uC=800,hC=3;class hv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ju(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>hC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kl._getInstance(oC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sC(),!this.activeServiceWorker)return;this.sender=new nC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ju();return await wm(e,ll,"1"),await Am(e,ll),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Am(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=zl(s,!1).getAll();return new Wo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hv.type="LOCAL";const dC=hv;new jo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t,e){return e?or(e):(ge(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh extends qh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pC(t){return nv(t.auth,new Kh(t),t.bypassAuthState)}function mC(t){const{auth:e,user:n}=t;return ge(n,e,"internal-error"),qP(n,new Kh(t),t.bypassAuthState)}async function gC(t){const{auth:e,user:n}=t;return ge(n,e,"internal-error"),HP(n,new Kh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pC;case"linkViaPopup":case"linkViaRedirect":return gC;case"reauthViaPopup":case"reauthViaRedirect":return mC;default:Cn(this.auth,"internal-error")}}resolve(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=new jo(2e3,1e4);class Ys extends dv{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ys.currentPopupAction&&Ys.currentPopupAction.cancel(),Ys.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){fr(this.filter.length===1,"Popup operations only handle one event");const e=Gh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ys.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_C.get())};e()}}Ys.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC="pendingRedirect",La=new Map;class vC extends dv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=La.get(this.auth._key());if(!e){try{const r=await EC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}La.set(this.auth._key(),e)}return this.bypassAuthState||La.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function EC(t,e){const n=IC(e),r=bC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function TC(t,e){La.set(t._key(),e)}function bC(t){return or(t._redirectPersistence)}function IC(t){return Oa(yC,t.config.apiKey,t.name)}async function wC(t,e,n=!1){if(Dn(t.app))return Promise.reject(lr(t));const r=Ps(t),s=fC(r,e),o=await new vC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=10*60*1e3;class RC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!fv(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Fn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rm(e))}saveEventToCache(e){this.cachedEventUids.add(Rm(e)),this.lastProcessedEventTime=Date.now()}}function Rm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PC(t,e={}){return Zr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kC=/^https?/;async function NC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await PC(t);for(const n of e)try{if(OC(n))return}catch{}Cn(t,"unauthorized-domain")}function OC(t){const e=Fu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!kC.test(n))return!1;if(CC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=new jo(3e4,6e4);function Sm(){const t=$n().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DC(t){return new Promise((e,n)=>{var r,s,i;function o(){Sm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sm(),n(Fn(t,"network-request-failed"))},timeout:LC.get()})}if(!((s=(r=$n().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=$n().gapi)===null||i===void 0)&&i.load)o();else{const a=AP("iframefcb");return $n()[a]=()=>{gapi.load?o():n(Fn(t,"network-request-failed"))},Xy(`${wP()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Da=null,e})}let Da=null;function xC(t){return Da=Da||DC(t),Da}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MC=new jo(5e3,15e3),VC="__/auth/iframe",UC="emulator/auth/iframe",FC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$C=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BC(t){const e=t.config;ge(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bh(e,UC):`https://${t.config.authDomain}/${VC}`,r={apiKey:e.apiKey,appName:t.name,v:Ss},s=$C.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Bo(r).slice(1)}`}async function jC(t){const e=await xC(t),n=$n().gapi;return ge(n,t,"internal-error"),e.open({where:document.body,url:BC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Fn(t,"network-request-failed"),a=$n().setTimeout(()=>{i(o)},MC.get());function c(){$n().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qC=500,WC=600,GC="_blank",KC="http://localhost";class Pm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zC(t,e,n,r=qC,s=WC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},HC),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Wt().toLowerCase();n&&(a=qy(u)?GC:n),jy(u)&&(e=e||KC,c.scrollbars="yes");const h=Object.entries(c).reduce((m,[g,P])=>`${m}${g}=${P},`,"");if(mP(u)&&a!=="_self")return YC(e||"",a),new Pm(null);const f=window.open(e||"",a,h);ge(f,t,"popup-blocked");try{f.focus()}catch{}return new Pm(f)}function YC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QC="__/auth/handler",XC="emulator/auth/handler",JC=encodeURIComponent("fac");async function Cm(t,e,n,r,s,i){ge(t.config.authDomain,t,"auth-domain-config-required"),ge(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ss,eventId:s};if(e instanceof ev){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",FR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof qo){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),u=c?`#${JC}=${encodeURIComponent(c)}`:"";return`${ZC(t)}?${Bo(a).slice(1)}${u}`}function ZC({config:t}){return t.emulator?Bh(t,XC):`https://${t.authDomain}/${QC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="webStorageSupport";class ek{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=av,this._completeRedirectFn=wC,this._overrideRedirectResult=TC}async _openPopup(e,n,r,s){var i;fr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Cm(e,n,r,Fu(),s);return zC(e,o,Gh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Cm(e,n,r,Fu(),s);return rC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(fr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jC(e),r=new RC(e);return n.register("authEvent",s=>(ge(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nu,{type:nu},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[nu];o!==void 0&&n(!!o),Cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yy()||Hy()||Hh()}}const tk=ek;var km="@firebase/auth",Nm="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sk(t){Es(new Br("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ge(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qy(t)},u=new TP(r,s,i,c);return NP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Es(new Br("auth-internal",e=>{const n=Ps(e.getProvider("auth").getImmediate());return(r=>new nk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Un(km,Nm,rk(t)),Un(km,Nm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=5*60,ok=Ry("authIdTokenMaxAge")||ik;let Om=null;const ak=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ok)return;const s=n==null?void 0:n.token;Om!==s&&(Om=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lk(t=Uh()){const e=Wl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kP(t,{popupRedirectResolver:tk,persistence:[dC,eC,av]}),r=Ry("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=ak(i.toString());YP(n,o,()=>o(n.currentUser)),zP(n,a=>o(a))}}const s=Iy("auth");return s&&OP(n,`http://${s}`),n}function ck(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}bP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Fn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ck().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sk("Browser");var Lm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _s,pv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,_){function y(){}y.prototype=_.prototype,b.D=_.prototype,b.prototype=new y,b.prototype.constructor=b,b.C=function(k,L,O){for(var S=Array(arguments.length-2),st=2;st<arguments.length;st++)S[st-2]=arguments[st];return _.prototype[L].apply(k,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,_,y){y||(y=0);var k=Array(16);if(typeof _=="string")for(var L=0;16>L;++L)k[L]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(L=0;16>L;++L)k[L]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=b.g[0],y=b.g[1],L=b.g[2];var O=b.g[3],S=_+(O^y&(L^O))+k[0]+3614090360&4294967295;_=y+(S<<7&4294967295|S>>>25),S=O+(L^_&(y^L))+k[1]+3905402710&4294967295,O=_+(S<<12&4294967295|S>>>20),S=L+(y^O&(_^y))+k[2]+606105819&4294967295,L=O+(S<<17&4294967295|S>>>15),S=y+(_^L&(O^_))+k[3]+3250441966&4294967295,y=L+(S<<22&4294967295|S>>>10),S=_+(O^y&(L^O))+k[4]+4118548399&4294967295,_=y+(S<<7&4294967295|S>>>25),S=O+(L^_&(y^L))+k[5]+1200080426&4294967295,O=_+(S<<12&4294967295|S>>>20),S=L+(y^O&(_^y))+k[6]+2821735955&4294967295,L=O+(S<<17&4294967295|S>>>15),S=y+(_^L&(O^_))+k[7]+4249261313&4294967295,y=L+(S<<22&4294967295|S>>>10),S=_+(O^y&(L^O))+k[8]+1770035416&4294967295,_=y+(S<<7&4294967295|S>>>25),S=O+(L^_&(y^L))+k[9]+2336552879&4294967295,O=_+(S<<12&4294967295|S>>>20),S=L+(y^O&(_^y))+k[10]+4294925233&4294967295,L=O+(S<<17&4294967295|S>>>15),S=y+(_^L&(O^_))+k[11]+2304563134&4294967295,y=L+(S<<22&4294967295|S>>>10),S=_+(O^y&(L^O))+k[12]+1804603682&4294967295,_=y+(S<<7&4294967295|S>>>25),S=O+(L^_&(y^L))+k[13]+4254626195&4294967295,O=_+(S<<12&4294967295|S>>>20),S=L+(y^O&(_^y))+k[14]+2792965006&4294967295,L=O+(S<<17&4294967295|S>>>15),S=y+(_^L&(O^_))+k[15]+1236535329&4294967295,y=L+(S<<22&4294967295|S>>>10),S=_+(L^O&(y^L))+k[1]+4129170786&4294967295,_=y+(S<<5&4294967295|S>>>27),S=O+(y^L&(_^y))+k[6]+3225465664&4294967295,O=_+(S<<9&4294967295|S>>>23),S=L+(_^y&(O^_))+k[11]+643717713&4294967295,L=O+(S<<14&4294967295|S>>>18),S=y+(O^_&(L^O))+k[0]+3921069994&4294967295,y=L+(S<<20&4294967295|S>>>12),S=_+(L^O&(y^L))+k[5]+3593408605&4294967295,_=y+(S<<5&4294967295|S>>>27),S=O+(y^L&(_^y))+k[10]+38016083&4294967295,O=_+(S<<9&4294967295|S>>>23),S=L+(_^y&(O^_))+k[15]+3634488961&4294967295,L=O+(S<<14&4294967295|S>>>18),S=y+(O^_&(L^O))+k[4]+3889429448&4294967295,y=L+(S<<20&4294967295|S>>>12),S=_+(L^O&(y^L))+k[9]+568446438&4294967295,_=y+(S<<5&4294967295|S>>>27),S=O+(y^L&(_^y))+k[14]+3275163606&4294967295,O=_+(S<<9&4294967295|S>>>23),S=L+(_^y&(O^_))+k[3]+4107603335&4294967295,L=O+(S<<14&4294967295|S>>>18),S=y+(O^_&(L^O))+k[8]+1163531501&4294967295,y=L+(S<<20&4294967295|S>>>12),S=_+(L^O&(y^L))+k[13]+2850285829&4294967295,_=y+(S<<5&4294967295|S>>>27),S=O+(y^L&(_^y))+k[2]+4243563512&4294967295,O=_+(S<<9&4294967295|S>>>23),S=L+(_^y&(O^_))+k[7]+1735328473&4294967295,L=O+(S<<14&4294967295|S>>>18),S=y+(O^_&(L^O))+k[12]+2368359562&4294967295,y=L+(S<<20&4294967295|S>>>12),S=_+(y^L^O)+k[5]+4294588738&4294967295,_=y+(S<<4&4294967295|S>>>28),S=O+(_^y^L)+k[8]+2272392833&4294967295,O=_+(S<<11&4294967295|S>>>21),S=L+(O^_^y)+k[11]+1839030562&4294967295,L=O+(S<<16&4294967295|S>>>16),S=y+(L^O^_)+k[14]+4259657740&4294967295,y=L+(S<<23&4294967295|S>>>9),S=_+(y^L^O)+k[1]+2763975236&4294967295,_=y+(S<<4&4294967295|S>>>28),S=O+(_^y^L)+k[4]+1272893353&4294967295,O=_+(S<<11&4294967295|S>>>21),S=L+(O^_^y)+k[7]+4139469664&4294967295,L=O+(S<<16&4294967295|S>>>16),S=y+(L^O^_)+k[10]+3200236656&4294967295,y=L+(S<<23&4294967295|S>>>9),S=_+(y^L^O)+k[13]+681279174&4294967295,_=y+(S<<4&4294967295|S>>>28),S=O+(_^y^L)+k[0]+3936430074&4294967295,O=_+(S<<11&4294967295|S>>>21),S=L+(O^_^y)+k[3]+3572445317&4294967295,L=O+(S<<16&4294967295|S>>>16),S=y+(L^O^_)+k[6]+76029189&4294967295,y=L+(S<<23&4294967295|S>>>9),S=_+(y^L^O)+k[9]+3654602809&4294967295,_=y+(S<<4&4294967295|S>>>28),S=O+(_^y^L)+k[12]+3873151461&4294967295,O=_+(S<<11&4294967295|S>>>21),S=L+(O^_^y)+k[15]+530742520&4294967295,L=O+(S<<16&4294967295|S>>>16),S=y+(L^O^_)+k[2]+3299628645&4294967295,y=L+(S<<23&4294967295|S>>>9),S=_+(L^(y|~O))+k[0]+4096336452&4294967295,_=y+(S<<6&4294967295|S>>>26),S=O+(y^(_|~L))+k[7]+1126891415&4294967295,O=_+(S<<10&4294967295|S>>>22),S=L+(_^(O|~y))+k[14]+2878612391&4294967295,L=O+(S<<15&4294967295|S>>>17),S=y+(O^(L|~_))+k[5]+4237533241&4294967295,y=L+(S<<21&4294967295|S>>>11),S=_+(L^(y|~O))+k[12]+1700485571&4294967295,_=y+(S<<6&4294967295|S>>>26),S=O+(y^(_|~L))+k[3]+2399980690&4294967295,O=_+(S<<10&4294967295|S>>>22),S=L+(_^(O|~y))+k[10]+4293915773&4294967295,L=O+(S<<15&4294967295|S>>>17),S=y+(O^(L|~_))+k[1]+2240044497&4294967295,y=L+(S<<21&4294967295|S>>>11),S=_+(L^(y|~O))+k[8]+1873313359&4294967295,_=y+(S<<6&4294967295|S>>>26),S=O+(y^(_|~L))+k[15]+4264355552&4294967295,O=_+(S<<10&4294967295|S>>>22),S=L+(_^(O|~y))+k[6]+2734768916&4294967295,L=O+(S<<15&4294967295|S>>>17),S=y+(O^(L|~_))+k[13]+1309151649&4294967295,y=L+(S<<21&4294967295|S>>>11),S=_+(L^(y|~O))+k[4]+4149444226&4294967295,_=y+(S<<6&4294967295|S>>>26),S=O+(y^(_|~L))+k[11]+3174756917&4294967295,O=_+(S<<10&4294967295|S>>>22),S=L+(_^(O|~y))+k[2]+718787259&4294967295,L=O+(S<<15&4294967295|S>>>17),S=y+(O^(L|~_))+k[9]+3951481745&4294967295,b.g[0]=b.g[0]+_&4294967295,b.g[1]=b.g[1]+(L+(S<<21&4294967295|S>>>11))&4294967295,b.g[2]=b.g[2]+L&4294967295,b.g[3]=b.g[3]+O&4294967295}r.prototype.u=function(b,_){_===void 0&&(_=b.length);for(var y=_-this.blockSize,k=this.B,L=this.h,O=0;O<_;){if(L==0)for(;O<=y;)s(this,b,O),O+=this.blockSize;if(typeof b=="string"){for(;O<_;)if(k[L++]=b.charCodeAt(O++),L==this.blockSize){s(this,k),L=0;break}}else for(;O<_;)if(k[L++]=b[O++],L==this.blockSize){s(this,k),L=0;break}}this.h=L,this.o+=_},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var _=1;_<b.length-8;++_)b[_]=0;var y=8*this.o;for(_=b.length-8;_<b.length;++_)b[_]=y&255,y/=256;for(this.u(b),b=Array(16),_=y=0;4>_;++_)for(var k=0;32>k;k+=8)b[y++]=this.g[_]>>>k&255;return b};function i(b,_){var y=a;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=_(b)}function o(b,_){this.h=_;for(var y=[],k=!0,L=b.length-1;0<=L;L--){var O=b[L]|0;k&&O==_||(y[L]=O,k=!1)}this.g=y}var a={};function c(b){return-128<=b&&128>b?i(b,function(_){return new o([_|0],0>_?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return f;if(0>b)return N(u(-b));for(var _=[],y=1,k=0;b>=y;k++)_[k]=b/y|0,y*=4294967296;return new o(_,0)}function h(b,_){if(b.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(b.charAt(0)=="-")return N(h(b.substring(1),_));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(_,8)),k=f,L=0;L<b.length;L+=8){var O=Math.min(8,b.length-L),S=parseInt(b.substring(L,L+O),_);8>O?(O=u(Math.pow(_,O)),k=k.j(O).add(u(S))):(k=k.j(y),k=k.add(u(S)))}return k}var f=c(0),m=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(C(this))return-N(this).m();for(var b=0,_=1,y=0;y<this.g.length;y++){var k=this.i(y);b+=(0<=k?k:4294967296+k)*_,_*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(P(this))return"0";if(C(this))return"-"+N(this).toString(b);for(var _=u(Math.pow(b,6)),y=this,k="";;){var L=R(y,_).g;y=F(y,L.j(_));var O=((0<y.g.length?y.g[0]:y.h)>>>0).toString(b);if(y=L,P(y))return O+k;for(;6>O.length;)O="0"+O;k=O+k}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function P(b){if(b.h!=0)return!1;for(var _=0;_<b.g.length;_++)if(b.g[_]!=0)return!1;return!0}function C(b){return b.h==-1}t.l=function(b){return b=F(this,b),C(b)?-1:P(b)?0:1};function N(b){for(var _=b.g.length,y=[],k=0;k<_;k++)y[k]=~b.g[k];return new o(y,~b.h).add(m)}t.abs=function(){return C(this)?N(this):this},t.add=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],k=0,L=0;L<=_;L++){var O=k+(this.i(L)&65535)+(b.i(L)&65535),S=(O>>>16)+(this.i(L)>>>16)+(b.i(L)>>>16);k=S>>>16,O&=65535,S&=65535,y[L]=S<<16|O}return new o(y,y[y.length-1]&-2147483648?-1:0)};function F(b,_){return b.add(N(_))}t.j=function(b){if(P(this)||P(b))return f;if(C(this))return C(b)?N(this).j(N(b)):N(N(this).j(b));if(C(b))return N(this.j(N(b)));if(0>this.l(g)&&0>b.l(g))return u(this.m()*b.m());for(var _=this.g.length+b.g.length,y=[],k=0;k<2*_;k++)y[k]=0;for(k=0;k<this.g.length;k++)for(var L=0;L<b.g.length;L++){var O=this.i(k)>>>16,S=this.i(k)&65535,st=b.i(L)>>>16,mt=b.i(L)&65535;y[2*k+2*L]+=S*mt,H(y,2*k+2*L),y[2*k+2*L+1]+=O*mt,H(y,2*k+2*L+1),y[2*k+2*L+1]+=S*st,H(y,2*k+2*L+1),y[2*k+2*L+2]+=O*st,H(y,2*k+2*L+2)}for(k=0;k<_;k++)y[k]=y[2*k+1]<<16|y[2*k];for(k=_;k<2*_;k++)y[k]=0;return new o(y,0)};function H(b,_){for(;(b[_]&65535)!=b[_];)b[_+1]+=b[_]>>>16,b[_]&=65535,_++}function w(b,_){this.g=b,this.h=_}function R(b,_){if(P(_))throw Error("division by zero");if(P(b))return new w(f,f);if(C(b))return _=R(N(b),_),new w(N(_.g),N(_.h));if(C(_))return _=R(b,N(_)),new w(N(_.g),_.h);if(30<b.g.length){if(C(b)||C(_))throw Error("slowDivide_ only works with positive integers.");for(var y=m,k=_;0>=k.l(b);)y=U(y),k=U(k);var L=B(y,1),O=B(k,1);for(k=B(k,2),y=B(y,2);!P(k);){var S=O.add(k);0>=S.l(b)&&(L=L.add(y),O=S),k=B(k,1),y=B(y,1)}return _=F(b,L.j(_)),new w(L,_)}for(L=f;0<=b.l(_);){for(y=Math.max(1,Math.floor(b.m()/_.m())),k=Math.ceil(Math.log(y)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),O=u(y),S=O.j(_);C(S)||0<S.l(b);)y-=k,O=u(y),S=O.j(_);P(O)&&(O=m),L=L.add(O),b=F(b,S)}return new w(L,b)}t.A=function(b){return R(this,b).h},t.and=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],k=0;k<_;k++)y[k]=this.i(k)&b.i(k);return new o(y,this.h&b.h)},t.or=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],k=0;k<_;k++)y[k]=this.i(k)|b.i(k);return new o(y,this.h|b.h)},t.xor=function(b){for(var _=Math.max(this.g.length,b.g.length),y=[],k=0;k<_;k++)y[k]=this.i(k)^b.i(k);return new o(y,this.h^b.h)};function U(b){for(var _=b.g.length+1,y=[],k=0;k<_;k++)y[k]=b.i(k)<<1|b.i(k-1)>>>31;return new o(y,b.h)}function B(b,_){var y=_>>5;_%=32;for(var k=b.g.length-y,L=[],O=0;O<k;O++)L[O]=0<_?b.i(O+y)>>>_|b.i(O+y+1)<<32-_:b.i(O+y);return new o(L,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,pv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,_s=o}).apply(typeof Lm<"u"?Lm:typeof self<"u"?self:typeof window<"u"?window:{});var va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mv,zi,gv,xa,Hu,_v,yv,vv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof va=="object"&&va];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(l,d){if(d)e:{var p=r;l=l.split(".");for(var v=0;v<l.length-1;v++){var $=l[v];if(!($ in p))break e;p=p[$]}l=l[l.length-1],v=p[l],d=d(v),d!=v&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function i(l,d){l instanceof String&&(l+="");var p=0,v=!1,$={next:function(){if(!v&&p<l.length){var q=p++;return{value:d(q,l[q]),done:!1}}return v=!0,{done:!0,value:void 0}}};return $[Symbol.iterator]=function(){return $},$}s("Array.prototype.values",function(l){return l||function(){return i(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var $=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply($,v),l.apply(d,$)}}return function(){return l.apply(d,arguments)}}function m(l,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function g(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),l.apply(this,v)}}function P(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(v,$,q){for(var te=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)te[qe-2]=arguments[qe];return d.prototype[$].apply(v,te)}}function C(l){const d=l.length;if(0<d){const p=Array(d);for(let v=0;v<d;v++)p[v]=l[v];return p}return[]}function N(l,d){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(c(v)){const $=l.length||0,q=v.length||0;l.length=$+q;for(let te=0;te<q;te++)l[$+te]=v[te]}else l.push(v)}}class F{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function H(l){return/^[\s\xa0]*$/.test(l)}function w(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function R(l){return R[" "](l),l}R[" "]=function(){};var U=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function B(l,d,p){for(const v in l)d.call(p,l[v],v,l)}function b(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function _(l){const d={};for(const p in l)d[p]=l[p];return d}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(l,d){let p,v;for(let $=1;$<arguments.length;$++){v=arguments[$];for(p in v)l[p]=v[p];for(let q=0;q<y.length;q++)p=y[q],Object.prototype.hasOwnProperty.call(v,p)&&(l[p]=v[p])}}function L(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function O(l){a.setTimeout(()=>{throw l},0)}function S(){var l=vt;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class st{constructor(){this.h=this.g=null}add(d,p){const v=mt.get();v.set(d,p),this.h?this.h.next=v:this.g=v,this.h=v}}var mt=new F(()=>new Se,l=>l.reset());class Se{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let he,be=!1,vt=new st,Nt=()=>{const l=a.Promise.resolve(void 0);he=()=>{l.then(et)}};var et=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(p){O(p)}var d=mt;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}be=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var Gt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function Vt(l,d){if(je.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,v=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(U){e:{try{R(d.nodeName);var $=!0;break e}catch{}$=!1}$||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:gt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Vt.aa.h.call(this)}}P(Vt,je);var gt={2:"touch",3:"pen",4:"mouse"};Vt.prototype.h=function(){Vt.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var G="closure_listenable_"+(1e6*Math.random()|0),se=0;function ne(l,d,p,v,$){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!v,this.ha=$,this.key=++se,this.da=this.fa=!1}function oe(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function we(l){this.src=l,this.g={},this.h=0}we.prototype.add=function(l,d,p,v,$){var q=l.toString();l=this.g[q],l||(l=this.g[q]=[],this.h++);var te=A(l,d,v,$);return-1<te?(d=l[te],p||(d.fa=!1)):(d=new ne(d,this.src,q,!!v,$),d.fa=p,l.push(d)),d};function De(l,d){var p=d.type;if(p in l.g){var v=l.g[p],$=Array.prototype.indexOf.call(v,d,void 0),q;(q=0<=$)&&Array.prototype.splice.call(v,$,1),q&&(oe(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function A(l,d,p,v){for(var $=0;$<l.length;++$){var q=l[$];if(!q.da&&q.listener==d&&q.capture==!!p&&q.ha==v)return $}return-1}var E="closure_lm_"+(1e6*Math.random()|0),V={};function Y(l,d,p,v,$){if(Array.isArray(d)){for(var q=0;q<d.length;q++)Y(l,d[q],p,v,$);return null}return p=Q(p),l&&l[G]?l.K(d,p,u(v)?!!v.capture:!!v,$):W(l,d,p,!1,v,$)}function W(l,d,p,v,$,q){if(!d)throw Error("Invalid event type");var te=u($)?!!$.capture:!!$,qe=z(l);if(qe||(l[E]=qe=new we(l)),p=qe.add(d,p,v,te,q),p.proxy)return p;if(v=X(),p.proxy=v,v.src=l,v.listener=p,l.addEventListener)Gt||($=te),$===void 0&&($=!1),l.addEventListener(d.toString(),v,$);else if(l.attachEvent)l.attachEvent(I(d.toString()),v);else if(l.addListener&&l.removeListener)l.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function X(){function l(p){return d.call(l.src,l.listener,p)}const d=D;return l}function re(l,d,p,v,$){if(Array.isArray(d))for(var q=0;q<d.length;q++)re(l,d[q],p,v,$);else v=u(v)?!!v.capture:!!v,p=Q(p),l&&l[G]?(l=l.i,d=String(d).toString(),d in l.g&&(q=l.g[d],p=A(q,p,v,$),-1<p&&(oe(q[p]),Array.prototype.splice.call(q,p,1),q.length==0&&(delete l.g[d],l.h--)))):l&&(l=z(l))&&(d=l.g[d.toString()],l=-1,d&&(l=A(d,p,v,$)),(p=-1<l?d[l]:null)&&T(p))}function T(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[G])De(d.i,l);else{var p=l.type,v=l.proxy;d.removeEventListener?d.removeEventListener(p,v,l.capture):d.detachEvent?d.detachEvent(I(p),v):d.addListener&&d.removeListener&&d.removeListener(v),(p=z(d))?(De(p,l),p.h==0&&(p.src=null,d[E]=null)):oe(l)}}}function I(l){return l in V?V[l]:V[l]="on"+l}function D(l,d){if(l.da)l=!0;else{d=new Vt(d,this);var p=l.listener,v=l.ha||l.src;l.fa&&T(l),l=p.call(v,d)}return l}function z(l){return l=l[E],l instanceof we?l:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function Q(l){return typeof l=="function"?l:(l[Z]||(l[Z]=function(d){return l.handleEvent(d)}),l[Z])}function M(){Ue.call(this),this.i=new we(this),this.M=this,this.F=null}P(M,Ue),M.prototype[G]=!0,M.prototype.removeEventListener=function(l,d,p,v){re(this,l,d,p,v)};function j(l,d){var p,v=l.F;if(v)for(p=[];v;v=v.F)p.push(v);if(l=l.M,v=d.type||d,typeof d=="string")d=new je(d,l);else if(d instanceof je)d.target=d.target||l;else{var $=d;d=new je(v,l),k(d,$)}if($=!0,p)for(var q=p.length-1;0<=q;q--){var te=d.g=p[q];$=le(te,v,!0,d)&&$}if(te=d.g=l,$=le(te,v,!0,d)&&$,$=le(te,v,!1,d)&&$,p)for(q=0;q<p.length;q++)te=d.g=p[q],$=le(te,v,!1,d)&&$}M.prototype.N=function(){if(M.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],v=0;v<p.length;v++)oe(p[v]);delete l.g[d],l.h--}}this.F=null},M.prototype.K=function(l,d,p,v){return this.i.add(String(l),d,!1,p,v)},M.prototype.L=function(l,d,p,v){return this.i.add(String(l),d,!0,p,v)};function le(l,d,p,v){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var $=!0,q=0;q<d.length;++q){var te=d[q];if(te&&!te.da&&te.capture==p){var qe=te.listener,Ot=te.ha||te.src;te.fa&&De(l.i,te),$=qe.call(Ot,v)!==!1&&$}}return $&&!v.defaultPrevented}function ue(l,d,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function Qe(l){l.g=ue(()=>{l.g=null,l.i&&(l.i=!1,Qe(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class it extends Ue{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Qe(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(l){Ue.call(this),this.h=l,this.g={}}P(tt,Ue);var At=[];function Kn(l){B(l.g,function(d,p){this.g.hasOwnProperty(p)&&T(d)},l),l.g={}}tt.prototype.N=function(){tt.aa.N.call(this),Kn(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Os=a.JSON.stringify,Kt=a.JSON.parse,fn=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Ls(){}Ls.prototype.h=null;function Md(l){return l.h||(l.h=l.i())}function Vd(){}var Pi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function yc(){je.call(this,"d")}P(yc,je);function vc(){je.call(this,"c")}P(vc,je);var ns={},Ud=null;function Jo(){return Ud=Ud||new M}ns.La="serverreachability";function Fd(l){je.call(this,ns.La,l)}P(Fd,je);function Ci(l){const d=Jo();j(d,new Fd(d))}ns.STAT_EVENT="statevent";function $d(l,d){je.call(this,ns.STAT_EVENT,l),this.stat=d}P($d,je);function zt(l){const d=Jo();j(d,new $d(d,l))}ns.Ma="timingevent";function Bd(l,d){je.call(this,ns.Ma,l),this.size=d}P(Bd,je);function ki(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Ni(){this.g=!0}Ni.prototype.xa=function(){this.g=!1};function rT(l,d,p,v,$,q){l.info(function(){if(l.g)if(q)for(var te="",qe=q.split("&"),Ot=0;Ot<qe.length;Ot++){var xe=qe[Ot].split("=");if(1<xe.length){var Ut=xe[0];xe=xe[1];var Ft=Ut.split("_");te=2<=Ft.length&&Ft[1]=="type"?te+(Ut+"="+xe+"&"):te+(Ut+"=redacted&")}}else te=null;else te=q;return"XMLHTTP REQ ("+v+") [attempt "+$+"]: "+d+`
`+p+`
`+te})}function sT(l,d,p,v,$,q,te){l.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+$+"]: "+d+`
`+p+`
`+q+" "+te})}function Ds(l,d,p,v){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+oT(l,p)+(v?" "+v:"")})}function iT(l,d){l.info(function(){return"TIMEOUT: "+d})}Ni.prototype.info=function(){};function oT(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var v=p[l];if(!(2>v.length)){var $=v[1];if(Array.isArray($)&&!(1>$.length)){var q=$[0];if(q!="noop"&&q!="stop"&&q!="close")for(var te=1;te<$.length;te++)$[te]=""}}}}return Os(p)}catch{return d}}var Zo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},jd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ec;function ea(){}P(ea,Ls),ea.prototype.g=function(){return new XMLHttpRequest},ea.prototype.i=function(){return{}},Ec=new ea;function yr(l,d,p,v){this.j=l,this.i=d,this.l=p,this.R=v||1,this.U=new tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hd}function Hd(){this.i=null,this.g="",this.h=!1}var qd={},Tc={};function bc(l,d,p){l.L=1,l.v=sa(zn(d)),l.m=p,l.P=!0,Wd(l,null)}function Wd(l,d){l.F=Date.now(),ta(l),l.A=zn(l.v);var p=l.A,v=l.R;Array.isArray(v)||(v=[String(v)]),of(p.i,"t",v),l.C=0,p=l.j.J,l.h=new Hd,l.g=wf(l.j,p?d:null,!l.m),0<l.O&&(l.M=new it(m(l.Y,l,l.g),l.O)),d=l.U,p=l.g,v=l.ca;var $="readystatechange";Array.isArray($)||($&&(At[0]=$.toString()),$=At);for(var q=0;q<$.length;q++){var te=Y(p,$[q],v||d.handleEvent,!1,d.h||d);if(!te)break;d.g[te.key]=te}d=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Ci(),rT(l.i,l.u,l.A,l.l,l.R,l.m)}yr.prototype.ca=function(l){l=l.target;const d=this.M;d&&Yn(l)==3?d.j():this.Y(l)},yr.prototype.Y=function(l){try{if(l==this.g)e:{const Ft=Yn(this.g);var d=this.g.Ba();const Vs=this.g.Z();if(!(3>Ft)&&(Ft!=3||this.g&&(this.h.h||this.g.oa()||ff(this.g)))){this.J||Ft!=4||d==7||(d==8||0>=Vs?Ci(3):Ci(2)),Ic(this);var p=this.g.Z();this.X=p;t:if(Gd(this)){var v=ff(this.g);l="";var $=v.length,q=Yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rs(this),Oi(this);var te="";break t}this.h.i=new a.TextDecoder}for(d=0;d<$;d++)this.h.h=!0,l+=this.h.i.decode(v[d],{stream:!(q&&d==$-1)});v.length=0,this.h.g+=l,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=p==200,sT(this.i,this.u,this.A,this.l,this.R,Ft,p),this.o){if(this.T&&!this.K){t:{if(this.g){var qe,Ot=this.g;if((qe=Ot.g?Ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(qe)){var xe=qe;break t}}xe=null}if(p=xe)Ds(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wc(this,p);else{this.o=!1,this.s=3,zt(12),rs(this),Oi(this);break e}}if(this.P){p=!0;let En;for(;!this.J&&this.C<te.length;)if(En=aT(this,te),En==Tc){Ft==4&&(this.s=4,zt(14),p=!1),Ds(this.i,this.l,null,"[Incomplete Response]");break}else if(En==qd){this.s=4,zt(15),Ds(this.i,this.l,te,"[Invalid Chunk]"),p=!1;break}else Ds(this.i,this.l,En,null),wc(this,En);if(Gd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ft!=4||te.length!=0||this.h.h||(this.s=1,zt(16),p=!1),this.o=this.o&&p,!p)Ds(this.i,this.l,te,"[Invalid Chunked Response]"),rs(this),Oi(this);else if(0<te.length&&!this.W){this.W=!0;var Ut=this.j;Ut.g==this&&Ut.ba&&!Ut.M&&(Ut.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),kc(Ut),Ut.M=!0,zt(11))}}else Ds(this.i,this.l,te,null),wc(this,te);Ft==4&&rs(this),this.o&&!this.J&&(Ft==4?Ef(this.j,this):(this.o=!1,ta(this)))}else wT(this.g),p==400&&0<te.indexOf("Unknown SID")?(this.s=3,zt(12)):(this.s=0,zt(13)),rs(this),Oi(this)}}}catch{}finally{}};function Gd(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function aT(l,d){var p=l.C,v=d.indexOf(`
`,p);return v==-1?Tc:(p=Number(d.substring(p,v)),isNaN(p)?qd:(v+=1,v+p>d.length?Tc:(d=d.slice(v,v+p),l.C=v+p,d)))}yr.prototype.cancel=function(){this.J=!0,rs(this)};function ta(l){l.S=Date.now()+l.I,Kd(l,l.I)}function Kd(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=ki(m(l.ba,l),d)}function Ic(l){l.B&&(a.clearTimeout(l.B),l.B=null)}yr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(iT(this.i,this.A),this.L!=2&&(Ci(),zt(17)),rs(this),this.s=2,Oi(this)):Kd(this,this.S-l)};function Oi(l){l.j.G==0||l.J||Ef(l.j,l)}function rs(l){Ic(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Kn(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function wc(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||Ac(p.h,l))){if(!l.K&&Ac(p.h,l)&&p.G==3){try{var v=p.Da.g.parse(d)}catch{v=null}if(Array.isArray(v)&&v.length==3){var $=v;if($[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)ua(p),la(p);else break e;Cc(p),zt(18)}}else p.za=$[1],0<p.za-p.T&&37500>$[2]&&p.F&&p.v==0&&!p.C&&(p.C=ki(m(p.Za,p),6e3));if(1>=Qd(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else is(p,11)}else if((l.K||p.g==l)&&ua(p),!H(d))for($=p.Da.g.parse(d),d=0;d<$.length;d++){let xe=$[d];if(p.T=xe[0],xe=xe[1],p.G==2)if(xe[0]=="c"){p.K=xe[1],p.ia=xe[2];const Ut=xe[3];Ut!=null&&(p.la=Ut,p.j.info("VER="+p.la));const Ft=xe[4];Ft!=null&&(p.Aa=Ft,p.j.info("SVER="+p.Aa));const Vs=xe[5];Vs!=null&&typeof Vs=="number"&&0<Vs&&(v=1.5*Vs,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const En=l.g;if(En){const da=En.g?En.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(da){var q=v.h;q.g||da.indexOf("spdy")==-1&&da.indexOf("quic")==-1&&da.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Rc(q,q.h),q.h=null))}if(v.D){const Nc=En.g?En.g.getResponseHeader("X-HTTP-Session-Id"):null;Nc&&(v.ya=Nc,Xe(v.I,v.D,Nc))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var te=l;if(v.qa=If(v,v.J?v.ia:null,v.W),te.K){Xd(v.h,te);var qe=te,Ot=v.L;Ot&&(qe.I=Ot),qe.B&&(Ic(qe),ta(qe)),v.g=te}else yf(v);0<p.i.length&&ca(p)}else xe[0]!="stop"&&xe[0]!="close"||is(p,7);else p.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?is(p,7):Pc(p):xe[0]!="noop"&&p.l&&p.l.ta(xe),p.v=0)}}Ci(4)}catch{}}var lT=class{constructor(l,d){this.g=l,this.map=d}};function zd(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yd(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Qd(l){return l.h?1:l.g?l.g.size:0}function Ac(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Rc(l,d){l.g?l.g.add(d):l.h=d}function Xd(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}zd.prototype.cancel=function(){if(this.i=Jd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Jd(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return C(l.i)}function cT(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],p=l.length,v=0;v<p;v++)d.push(l[v]);return d}d=[],p=0;for(v in l)d[p++]=l[v];return d}function uT(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const v in l)d[p++]=v;return d}}}function Zd(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=uT(l),v=cT(l),$=v.length,q=0;q<$;q++)d.call(void 0,v[q],p&&p[q],l)}var ef=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hT(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var v=l[p].indexOf("="),$=null;if(0<=v){var q=l[p].substring(0,v);$=l[p].substring(v+1)}else q=l[p];d(q,$?decodeURIComponent($.replace(/\+/g," ")):"")}}}function ss(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ss){this.h=l.h,na(this,l.j),this.o=l.o,this.g=l.g,ra(this,l.s),this.l=l.l;var d=l.i,p=new xi;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),tf(this,p),this.m=l.m}else l&&(d=String(l).match(ef))?(this.h=!1,na(this,d[1]||"",!0),this.o=Li(d[2]||""),this.g=Li(d[3]||"",!0),ra(this,d[4]),this.l=Li(d[5]||"",!0),tf(this,d[6]||"",!0),this.m=Li(d[7]||"")):(this.h=!1,this.i=new xi(null,this.h))}ss.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Di(d,nf,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Di(d,nf,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Di(p,p.charAt(0)=="/"?pT:fT,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Di(p,gT)),l.join("")};function zn(l){return new ss(l)}function na(l,d,p){l.j=p?Li(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function ra(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function tf(l,d,p){d instanceof xi?(l.i=d,_T(l.i,l.h)):(p||(d=Di(d,mT)),l.i=new xi(d,l.h))}function Xe(l,d,p){l.i.set(d,p)}function sa(l){return Xe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Li(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Di(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,dT),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function dT(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var nf=/[#\/\?@]/g,fT=/[#\?:]/g,pT=/[#\?]/g,mT=/[#\?@]/g,gT=/#/g;function xi(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function vr(l){l.g||(l.g=new Map,l.h=0,l.i&&hT(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=xi.prototype,t.add=function(l,d){vr(this),this.i=null,l=xs(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function rf(l,d){vr(l),d=xs(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function sf(l,d){return vr(l),d=xs(l,d),l.g.has(d)}t.forEach=function(l,d){vr(this),this.g.forEach(function(p,v){p.forEach(function($){l.call(d,$,v,this)},this)},this)},t.na=function(){vr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let v=0;v<d.length;v++){const $=l[v];for(let q=0;q<$.length;q++)p.push(d[v])}return p},t.V=function(l){vr(this);let d=[];if(typeof l=="string")sf(this,l)&&(d=d.concat(this.g.get(xs(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},t.set=function(l,d){return vr(this),this.i=null,l=xs(this,l),sf(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function of(l,d,p){rf(l,d),0<p.length&&(l.i=null,l.g.set(xs(l,d),C(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var v=d[p];const q=encodeURIComponent(String(v)),te=this.V(v);for(v=0;v<te.length;v++){var $=q;te[v]!==""&&($+="="+encodeURIComponent(String(te[v]))),l.push($)}}return this.i=l.join("&")};function xs(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function _T(l,d){d&&!l.j&&(vr(l),l.i=null,l.g.forEach(function(p,v){var $=v.toLowerCase();v!=$&&(rf(this,v),of(this,$,p))},l)),l.j=d}function yT(l,d){const p=new Ni;if(a.Image){const v=new Image;v.onload=g(Er,p,"TestLoadImage: loaded",!0,d,v),v.onerror=g(Er,p,"TestLoadImage: error",!1,d,v),v.onabort=g(Er,p,"TestLoadImage: abort",!1,d,v),v.ontimeout=g(Er,p,"TestLoadImage: timeout",!1,d,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=l}else d(!1)}function vT(l,d){const p=new Ni,v=new AbortController,$=setTimeout(()=>{v.abort(),Er(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:v.signal}).then(q=>{clearTimeout($),q.ok?Er(p,"TestPingServer: ok",!0,d):Er(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout($),Er(p,"TestPingServer: error",!1,d)})}function Er(l,d,p,v,$){try{$&&($.onload=null,$.onerror=null,$.onabort=null,$.ontimeout=null),v(p)}catch{}}function ET(){this.g=new fn}function TT(l,d,p){const v=p||"";try{Zd(l,function($,q){let te=$;u($)&&(te=Os($)),d.push(v+q+"="+encodeURIComponent(te))})}catch($){throw d.push(v+"type="+encodeURIComponent("_badmap")),$}}function ia(l){this.l=l.Ub||null,this.j=l.eb||!1}P(ia,Ls),ia.prototype.g=function(){return new oa(this.l,this.j)},ia.prototype.i=function(l){return function(){return l}}({});function oa(l,d){M.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(oa,M),t=oa.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Vi(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mi(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Vi(this)),this.g&&(this.readyState=3,Vi(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;af(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function af(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Mi(this):Vi(this),this.readyState==3&&af(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Mi(this))},t.Qa=function(l){this.g&&(this.response=l,Mi(this))},t.ga=function(){this.g&&Mi(this)};function Mi(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Vi(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function Vi(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function lf(l){let d="";return B(l,function(p,v){d+=v,d+=":",d+=p,d+=`\r
`}),d}function Sc(l,d,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=lf(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Xe(l,d,p))}function ut(l){M.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ut,M);var bT=/^https?$/i,IT=["POST","PUT"];t=ut.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ec.g(),this.v=this.o?Md(this.o):Md(Ec),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(q){cf(this,q);return}if(l=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var $ in v)p.set($,v[$]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const q of v.keys())p.set(q,v.get(q));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(q=>q.toLowerCase()=="content-type"),$=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(IT,d,void 0))||v||$||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,te]of p)this.g.setRequestHeader(q,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{df(this),this.u=!0,this.g.send(l),this.u=!1}catch(q){cf(this,q)}};function cf(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,uf(l),aa(l)}function uf(l){l.A||(l.A=!0,j(l,"complete"),j(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,j(this,"complete"),j(this,"abort"),aa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),aa(this,!0)),ut.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?hf(this):this.bb())},t.bb=function(){hf(this)};function hf(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Yn(l)!=4||l.Z()!=2)){if(l.u&&Yn(l)==4)ue(l.Ea,0,l);else if(j(l,"readystatechange"),Yn(l)==4){l.h=!1;try{const te=l.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var v;if(v=te===0){var $=String(l.D).match(ef)[1]||null;!$&&a.self&&a.self.location&&($=a.self.location.protocol.slice(0,-1)),v=!bT.test($?$.toLowerCase():"")}p=v}if(p)j(l,"complete"),j(l,"success");else{l.m=6;try{var q=2<Yn(l)?l.g.statusText:""}catch{q=""}l.l=q+" ["+l.Z()+"]",uf(l)}}finally{aa(l)}}}}function aa(l,d){if(l.g){df(l);const p=l.g,v=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||j(l,"ready");try{p.onreadystatechange=v}catch{}}}function df(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Yn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Yn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),Kt(d)}};function ff(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function wT(l){const d={};l=(l.g&&2<=Yn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<l.length;v++){if(H(l[v]))continue;var p=L(l[v]);const $=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const q=d[$]||[];d[$]=q,q.push(p)}b(d,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ui(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function pf(l){this.Aa=0,this.i=[],this.j=new Ni,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ui("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ui("baseRetryDelayMs",5e3,l),this.cb=Ui("retryDelaySeedMs",1e4,l),this.Wa=Ui("forwardChannelMaxRetries",2,l),this.wa=Ui("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new zd(l&&l.concurrentRequestLimit),this.Da=new ET,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=pf.prototype,t.la=8,t.G=1,t.connect=function(l,d,p,v){zt(0),this.W=l,this.H=d||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=If(this,null,this.W),ca(this)};function Pc(l){if(mf(l),l.G==3){var d=l.U++,p=zn(l.I);if(Xe(p,"SID",l.K),Xe(p,"RID",d),Xe(p,"TYPE","terminate"),Fi(l,p),d=new yr(l,l.j,d),d.L=2,d.v=sa(zn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=wf(d.j,null),d.g.ea(d.v)),d.F=Date.now(),ta(d)}bf(l)}function la(l){l.g&&(kc(l),l.g.cancel(),l.g=null)}function mf(l){la(l),l.u&&(a.clearTimeout(l.u),l.u=null),ua(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function ca(l){if(!Yd(l.h)&&!l.s){l.s=!0;var d=l.Ga;he||Nt(),be||(he(),be=!0),vt.add(d,l),l.B=0}}function AT(l,d){return Qd(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=ki(m(l.Ga,l,d),Tf(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const $=new yr(this,this.j,l);let q=this.o;if(this.S&&(q?(q=_(q),k(q,this.S)):q=this.S),this.m!==null||this.O||($.H=q,q=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(d+=v,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=_f(this,$,d),p=zn(this.I),Xe(p,"RID",l),Xe(p,"CVER",22),this.D&&Xe(p,"X-HTTP-Session-Id",this.D),Fi(this,p),q&&(this.O?d="headers="+encodeURIComponent(String(lf(q)))+"&"+d:this.m&&Sc(p,this.m,q)),Rc(this.h,$),this.Ua&&Xe(p,"TYPE","init"),this.P?(Xe(p,"$req",d),Xe(p,"SID","null"),$.T=!0,bc($,p,null)):bc($,p,d),this.G=2}}else this.G==3&&(l?gf(this,l):this.i.length==0||Yd(this.h)||gf(this))};function gf(l,d){var p;d?p=d.l:p=l.U++;const v=zn(l.I);Xe(v,"SID",l.K),Xe(v,"RID",p),Xe(v,"AID",l.T),Fi(l,v),l.m&&l.o&&Sc(v,l.m,l.o),p=new yr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=_f(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Rc(l.h,p),bc(p,v,d)}function Fi(l,d){l.H&&B(l.H,function(p,v){Xe(d,v,p)}),l.l&&Zd({},function(p,v){Xe(d,v,p)})}function _f(l,d,p){p=Math.min(l.i.length,p);var v=l.l?m(l.l.Na,l.l,l):null;e:{var $=l.i;let q=-1;for(;;){const te=["count="+p];q==-1?0<p?(q=$[0].g,te.push("ofs="+q)):q=0:te.push("ofs="+q);let qe=!0;for(let Ot=0;Ot<p;Ot++){let xe=$[Ot].g;const Ut=$[Ot].map;if(xe-=q,0>xe)q=Math.max(0,$[Ot].g-100),qe=!1;else try{TT(Ut,te,"req"+xe+"_")}catch{v&&v(Ut)}}if(qe){v=te.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,v}function yf(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;he||Nt(),be||(he(),be=!0),vt.add(d,l),l.v=0}}function Cc(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=ki(m(l.Fa,l),Tf(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,vf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=ki(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,zt(10),la(this),vf(this))};function kc(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function vf(l){l.g=new yr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=zn(l.qa);Xe(d,"RID","rpc"),Xe(d,"SID",l.K),Xe(d,"AID",l.T),Xe(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&Xe(d,"TO",l.ja),Xe(d,"TYPE","xmlhttp"),Fi(l,d),l.m&&l.o&&Sc(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=sa(zn(d)),p.m=null,p.P=!0,Wd(p,l)}t.Za=function(){this.C!=null&&(this.C=null,la(this),Cc(this),zt(19))};function ua(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Ef(l,d){var p=null;if(l.g==d){ua(l),kc(l),l.g=null;var v=2}else if(Ac(l.h,d))p=d.D,Xd(l.h,d),v=1;else return;if(l.G!=0){if(d.o)if(v==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var $=l.B;v=Jo(),j(v,new Bd(v,p)),ca(l)}else yf(l);else if($=d.s,$==3||$==0&&0<d.X||!(v==1&&AT(l,d)||v==2&&Cc(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),$){case 1:is(l,5);break;case 4:is(l,10);break;case 3:is(l,6);break;default:is(l,2)}}}function Tf(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function is(l,d){if(l.j.info("Error code "+d),d==2){var p=m(l.fb,l),v=l.Xa;const $=!v;v=new ss(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||na(v,"https"),sa(v),$?yT(v.toString(),p):vT(v.toString(),p)}else zt(2);l.G=0,l.l&&l.l.sa(d),bf(l),mf(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),zt(2)):(this.j.info("Failed to ping google.com"),zt(1))};function bf(l){if(l.G=0,l.ka=[],l.l){const d=Jd(l.h);(d.length!=0||l.i.length!=0)&&(N(l.ka,d),N(l.ka,l.i),l.h.i.length=0,C(l.i),l.i.length=0),l.l.ra()}}function If(l,d,p){var v=p instanceof ss?zn(p):new ss(p);if(v.g!="")d&&(v.g=d+"."+v.g),ra(v,v.s);else{var $=a.location;v=$.protocol,d=d?d+"."+$.hostname:$.hostname,$=+$.port;var q=new ss(null);v&&na(q,v),d&&(q.g=d),$&&ra(q,$),p&&(q.l=p),v=q}return p=l.D,d=l.ya,p&&d&&Xe(v,p,d),Xe(v,"VER",l.la),Fi(l,v),v}function wf(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new ut(new ia({eb:p})):new ut(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Af(){}t=Af.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ha(){}ha.prototype.g=function(l,d){return new an(l,d)};function an(l,d){M.call(this),this.g=new pf(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!H(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!H(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Ms(this)}P(an,M),an.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},an.prototype.close=function(){Pc(this.g)},an.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=Os(l),l=p);d.i.push(new lT(d.Ya++,l)),d.G==3&&ca(d)},an.prototype.N=function(){this.g.l=null,delete this.j,Pc(this.g),delete this.g,an.aa.N.call(this)};function Rf(l){yc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}P(Rf,yc);function Sf(){vc.call(this),this.status=1}P(Sf,vc);function Ms(l){this.g=l}P(Ms,Af),Ms.prototype.ua=function(){j(this.g,"a")},Ms.prototype.ta=function(l){j(this.g,new Rf(l))},Ms.prototype.sa=function(l){j(this.g,new Sf)},Ms.prototype.ra=function(){j(this.g,"b")},ha.prototype.createWebChannel=ha.prototype.g,an.prototype.send=an.prototype.o,an.prototype.open=an.prototype.m,an.prototype.close=an.prototype.close,vv=function(){return new ha},yv=function(){return Jo()},_v=ns,Hu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zo.NO_ERROR=0,Zo.TIMEOUT=8,Zo.HTTP_ERROR=6,xa=Zo,jd.COMPLETE="complete",gv=jd,Vd.EventType=Pi,Pi.OPEN="a",Pi.CLOSE="b",Pi.ERROR="c",Pi.MESSAGE="d",M.prototype.listen=M.prototype.K,zi=Vd,ut.prototype.listenOnce=ut.prototype.L,ut.prototype.getLastError=ut.prototype.Ka,ut.prototype.getLastErrorCode=ut.prototype.Ba,ut.prototype.getStatus=ut.prototype.Z,ut.prototype.getResponseJson=ut.prototype.Oa,ut.prototype.getResponseText=ut.prototype.oa,ut.prototype.send=ut.prototype.ea,ut.prototype.setWithCredentials=ut.prototype.Ha,mv=ut}).apply(typeof va<"u"?va:typeof self<"u"?self:typeof window<"u"?window:{});const Dm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ii="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new Mh("@firebase/firestore");function qs(){return Is.logLevel}function ae(t,...e){if(Is.logLevel<=ke.DEBUG){const n=e.map(zh);Is.debug(`Firestore (${Ii}): ${t}`,...n)}}function pr(t,...e){if(Is.logLevel<=ke.ERROR){const n=e.map(zh);Is.error(`Firestore (${Ii}): ${t}`,...n)}}function fi(t,...e){if(Is.logLevel<=ke.WARN){const n=e.map(zh);Is.warn(`Firestore (${Ii}): ${t}`,...n)}}function zh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(t="Unexpected state"){const e=`FIRESTORE (${Ii}) INTERNAL ASSERTION FAILED: `+t;throw pr(e),new Error(e)}function Be(t,e){t||_e()}function Ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends Gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Bt.UNAUTHENTICATED))}shutdown(){}}class hk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class dk{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Be(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new cr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new cr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new cr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Be(typeof r.accessToken=="string"),new Ev(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string"),new Bt(e)}}class fk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class pk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new fk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Be(this.o===void 0);const r=i=>{i.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ae("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Be(typeof n.token=="string"),this.R=n.token,new mk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=_k(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Oe(t,e){return t<e?-1:t>e?1:0}function pi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{static now(){return It.fromMillis(Date.now())}static fromDate(e){return It.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new It(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ce(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{static fromTimestamp(e){return new ye(e)}static min(){return new ye(new It(0,0))}static max(){return new ye(new It(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n,r){n===void 0?n=0:n>e.length&&_e(),r===void 0?r=e.length-n:r>e.length-n&&_e(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Po.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Po?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class rt extends Po{construct(e,n,r){return new rt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce(J.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new rt(n)}static emptyPath(){return new rt([])}}const yk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends Po{construct(e,n,r){return new Dt(e,n,r)}static isValidIdentifier(e){return yk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ce(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ce(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ce(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ce(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(n)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(rt.fromString(e))}static fromName(e){return new de(rt.fromString(e).popFirst(5))}static empty(){return new de(rt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&rt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return rt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new rt(e.slice()))}}function vk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ye.fromTimestamp(r===1e9?new It(n+1,0):new It(n,r));return new jr(s,de.empty(),e)}function Ek(t){return new jr(t.readTime,t.key,-1)}class jr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new jr(ye.min(),de.empty(),-1)}static max(){return new jr(ye.max(),de.empty(),-1)}}function Tk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=de.comparator(t.documentKey,e.documentKey),n!==0?n:Oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ik{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(t){if(t.code!==J.FAILED_PRECONDITION||t.message!==bk)throw t;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&_e(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new K((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof K?n:K.resolve(n)}catch(n){return K.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):K.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):K.reject(n)}static resolve(e){return new K((n,r)=>{n(e)})}static reject(e){return new K((n,r)=>{r(e)})}static waitFor(e){return new K((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=K.resolve(!1);for(const r of e)n=n.next(s=>s?K.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new K((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new K((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function wk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ai(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Yl.oe=-1;function Ql(t){return t==null}function ul(t){return t===0&&1/t==-1/0}function Ak(t){return typeof t=="number"&&Number.isInteger(t)&&!ul(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=xm(e)),e=Sk(t.get(n),e);return xm(e)}function Sk(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function xm(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n){this.comparator=e,this.root=n||Lt.EMPTY}insert(e,n){return new lt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ea(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ea(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ea(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ea(this.root,e,this.comparator,!0)}}class Ea{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Lt.RED,this.left=s??Lt.EMPTY,this.right=i??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Lt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _e();const e=this.left.check();if(e!==this.right.check())throw _e();return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e()}get value(){throw _e()}get color(){throw _e()}get left(){throw _e()}get right(){throw _e()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vm(this.data.getIterator())}getIteratorFrom(e){return new Vm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new wt(this.comparator);return n.data=e,n}}class Vm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new un([])}unionWith(e){let n=new wt(Dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return pi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Iv("Invalid base64 string: "+i):i}}(e);return new Mt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const Pk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hr(t){if(Be(!!t),typeof t=="string"){let e=0;const n=Pk.exec(t);if(Be(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:dt(t.seconds),nanos:dt(t.nanos)}}function dt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function qr(t){return typeof t=="string"?Mt.fromBase64String(t):Mt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xl(t){const e=t.mapValue.fields.__previous_value__;return Yh(e)?Xl(e):e}function Co(t){const e=Hr(t.mapValue.fields.__local_write_time__.timestampValue);return new It(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e,n,r,s,i,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class ko{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ko("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ko&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Wr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yh(t)?4:Nk(t)?9007199254740991:kk(t)?10:11:_e()}function qn(t,e){if(t===e)return!0;const n=Wr(t);if(n!==Wr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Co(t).isEqual(Co(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Hr(s.timestampValue),a=Hr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return qr(s.bytesValue).isEqual(qr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return dt(s.geoPointValue.latitude)===dt(i.geoPointValue.latitude)&&dt(s.geoPointValue.longitude)===dt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return dt(s.integerValue)===dt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=dt(s.doubleValue),a=dt(i.doubleValue);return o===a?ul(o)===ul(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return pi(t.arrayValue.values||[],e.arrayValue.values||[],qn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Mm(o)!==Mm(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!qn(o[c],a[c])))return!1;return!0}(t,e);default:return _e()}}function No(t,e){return(t.values||[]).find(n=>qn(n,e))!==void 0}function mi(t,e){if(t===e)return 0;const n=Wr(t),r=Wr(e);if(n!==r)return Oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Oe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=dt(i.integerValue||i.doubleValue),c=dt(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Um(t.timestampValue,e.timestampValue);case 4:return Um(Co(t),Co(e));case 5:return Oe(t.stringValue,e.stringValue);case 6:return function(i,o){const a=qr(i),c=qr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=Oe(a[u],c[u]);if(h!==0)return h}return Oe(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Oe(dt(i.latitude),dt(o.latitude));return a!==0?a:Oe(dt(i.longitude),dt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Fm(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,c,u,h;const f=i.fields||{},m=o.fields||{},g=(a=f.value)===null||a===void 0?void 0:a.arrayValue,P=(c=m.value)===null||c===void 0?void 0:c.arrayValue,C=Oe(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((h=P==null?void 0:P.values)===null||h===void 0?void 0:h.length)||0);return C!==0?C:Fm(g,P)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ta.mapValue&&o===Ta.mapValue)return 0;if(i===Ta.mapValue)return 1;if(o===Ta.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const m=Oe(c[f],h[f]);if(m!==0)return m;const g=mi(a[c[f]],u[h[f]]);if(g!==0)return g}return Oe(c.length,h.length)}(t.mapValue,e.mapValue);default:throw _e()}}function Um(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Oe(t,e);const n=Hr(t),r=Hr(e),s=Oe(n.seconds,r.seconds);return s!==0?s:Oe(n.nanos,r.nanos)}function Fm(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=mi(n[s],r[s]);if(i)return i}return Oe(n.length,r.length)}function gi(t){return qu(t)}function qu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return qr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return de.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=qu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${qu(n.fields[o])}`;return s+"}"}(t.mapValue):_e()}function Ma(t){switch(Wr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xl(t);return e?16+Ma(e):16;case 5:return 2*t.stringValue.length;case 6:return qr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Ma(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return es(r.fields,(i,o)=>{s+=i.length+Ma(o)}),s}(t.mapValue);default:throw _e()}}function Wu(t){return!!t&&"integerValue"in t}function Qh(t){return!!t&&"arrayValue"in t}function $m(t){return!!t&&"nullValue"in t}function Bm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Va(t){return!!t&&"mapValue"in t}function kk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ao(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ao(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ao(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Nk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.value=e}static empty(){return new sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Va(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ao(n)}setAll(e){let n=Dt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ao(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Va(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Va(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){es(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new sn(ao(this.value))}}function wv(t){const e=[];return es(t.fields,(n,r)=>{const s=new Dt([n]);if(Va(r)){const i=wv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new un(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new qt(e,0,ye.min(),ye.min(),ye.min(),sn.empty(),0)}static newFoundDocument(e,n,r,s){return new qt(e,1,n,ye.min(),r,s,0)}static newNoDocument(e,n){return new qt(e,2,n,ye.min(),ye.min(),sn.empty(),0)}static newUnknownDocument(e,n){return new qt(e,3,n,ye.min(),ye.min(),sn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n){this.position=e,this.inclusive=n}}function jm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=de.comparator(de.fromName(o.referenceValue),n.key):r=mi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Hm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ok(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{}class Et extends Av{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Dk(e,n,r):n==="array-contains"?new Vk(e,r):n==="in"?new Uk(e,r):n==="not-in"?new Fk(e,r):n==="array-contains-any"?new $k(e,r):new Et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new xk(e,r):new Mk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(mi(n,this.value)):n!==null&&Wr(this.value)===Wr(n)&&this.matchesComparison(mi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wn extends Av{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Wn(e,n)}matches(e){return Rv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Rv(t){return t.op==="and"}function Sv(t){return Lk(t)&&Rv(t)}function Lk(t){for(const e of t.filters)if(e instanceof Wn)return!1;return!0}function Gu(t){if(t instanceof Et)return t.field.canonicalString()+t.op.toString()+gi(t.value);if(Sv(t))return t.filters.map(e=>Gu(e)).join(",");{const e=t.filters.map(n=>Gu(n)).join(",");return`${t.op}(${e})`}}function Pv(t,e){return t instanceof Et?function(r,s){return s instanceof Et&&r.op===s.op&&r.field.isEqual(s.field)&&qn(r.value,s.value)}(t,e):t instanceof Wn?function(r,s){return s instanceof Wn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Pv(o,s.filters[a]),!0):!1}(t,e):void _e()}function Cv(t){return t instanceof Et?function(n){return`${n.field.canonicalString()} ${n.op} ${gi(n.value)}`}(t):t instanceof Wn?function(n){return n.op.toString()+" {"+n.getFilters().map(Cv).join(" ,")+"}"}(t):"Filter"}class Dk extends Et{constructor(e,n,r){super(e,n,r),this.key=de.fromName(r.referenceValue)}matches(e){const n=de.comparator(e.key,this.key);return this.matchesComparison(n)}}class xk extends Et{constructor(e,n){super(e,"in",n),this.keys=kv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Mk extends Et{constructor(e,n){super(e,"not-in",n),this.keys=kv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>de.fromName(r.referenceValue))}class Vk extends Et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qh(n)&&No(n.arrayValue,this.value)}}class Uk extends Et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&No(this.value.arrayValue,n)}}class Fk extends Et{constructor(e,n){super(e,"not-in",n)}matches(e){if(No(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!No(this.value.arrayValue,n)}}class $k extends Et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>No(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function qm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Bk(t,e,n,r,s,i,o)}function Xh(t){const e=Ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ql(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>gi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>gi(r)).join(",")),e.ue=n}return e.ue}function Jh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ok(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Pv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Hm(t.startAt,e.startAt)&&Hm(t.endAt,e.endAt)}function Ku(t){return de.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function jk(t,e,n,r,s,i,o,a){return new Jl(t,e,n,r,s,i,o,a)}function Zl(t){return new Jl(t)}function Wm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Hk(t){return t.collectionGroup!==null}function lo(t){const e=Ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new wt(Dt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new dl(i,r))}),n.has(Dt.keyField().canonicalString())||e.ce.push(new dl(Dt.keyField(),r))}return e.ce}function Bn(t){const e=Ee(t);return e.le||(e.le=qk(e,lo(t))),e.le}function qk(t,e){if(t.limitType==="F")return qm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new dl(s.field,i)});const n=t.endAt?new hl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new hl(t.startAt.position,t.startAt.inclusive):null;return qm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zu(t,e,n){return new Jl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ec(t,e){return Jh(Bn(t),Bn(e))&&t.limitType===e.limitType}function Nv(t){return`${Xh(Bn(t))}|lt:${t.limitType}`}function Ws(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Cv(s)).join(", ")}]`),Ql(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>gi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>gi(s)).join(",")),`Target(${r})`}(Bn(t))}; limitType=${t.limitType})`}function tc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):de.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of lo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=jm(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,lo(r),s)||r.endAt&&!function(o,a,c){const u=jm(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,lo(r),s))}(t,e)}function Wk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ov(t){return(e,n)=>{let r=!1;for(const s of lo(t)){const i=Gk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Gk(t,e,n){const r=t.field.isKeyField()?de.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?mi(c,u):_e()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return _e()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){es(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return bv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=new lt(de.comparator);function mr(){return Kk}const Lv=new lt(de.comparator);function Yi(...t){let e=Lv;for(const n of t)e=e.insert(n.key,n);return e}function Dv(t){let e=Lv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ps(){return co()}function xv(){return co()}function co(){return new Cs(t=>t.toString(),(t,e)=>t.isEqual(e))}const zk=new lt(de.comparator),Yk=new wt(de.comparator);function Ne(...t){let e=Yk;for(const n of t)e=e.add(n);return e}const Qk=new wt(Oe);function Xk(){return Qk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ul(e)?"-0":e}}function Mv(t){return{integerValue:""+t}}function Jk(t,e){return Ak(e)?Mv(e):Zh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this._=void 0}}function Zk(t,e,n){return t instanceof fl?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Yh(i)&&(i=Xl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Oo?Uv(t,e):t instanceof Lo?Fv(t,e):function(s,i){const o=Vv(s,i),a=Gm(o)+Gm(s.Pe);return Wu(o)&&Wu(s.Pe)?Mv(a):Zh(s.serializer,a)}(t,e)}function e1(t,e,n){return t instanceof Oo?Uv(t,e):t instanceof Lo?Fv(t,e):n}function Vv(t,e){return t instanceof pl?function(r){return Wu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class fl extends nc{}class Oo extends nc{constructor(e){super(),this.elements=e}}function Uv(t,e){const n=$v(e);for(const r of t.elements)n.some(s=>qn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Lo extends nc{constructor(e){super(),this.elements=e}}function Fv(t,e){let n=$v(e);for(const r of t.elements)n=n.filter(s=>!qn(s,r));return{arrayValue:{values:n}}}class pl extends nc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Gm(t){return dt(t.integerValue||t.doubleValue)}function $v(t){return Qh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function t1(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Oo&&s instanceof Oo||r instanceof Lo&&s instanceof Lo?pi(r.elements,s.elements,qn):r instanceof pl&&s instanceof pl?qn(r.Pe,s.Pe):r instanceof fl&&s instanceof fl}(t.transform,e.transform)}class n1{constructor(e,n){this.version=e,this.transformResults=n}}class yn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yn}static exists(e){return new yn(void 0,e)}static updateTime(e){return new yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ua(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class rc{}function Bv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ed(t.key,yn.none()):new Go(t.key,t.data,yn.none());{const n=t.data,r=sn.empty();let s=new wt(Dt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ts(t.key,r,new un(s.toArray()),yn.none())}}function r1(t,e,n){t instanceof Go?function(s,i,o){const a=s.value.clone(),c=zm(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ts?function(s,i,o){if(!Ua(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=zm(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(jv(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function uo(t,e,n,r){return t instanceof Go?function(i,o,a,c){if(!Ua(i.precondition,o))return a;const u=i.value.clone(),h=Ym(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ts?function(i,o,a,c){if(!Ua(i.precondition,o))return a;const u=Ym(i.fieldTransforms,c,o),h=o.data;return h.setAll(jv(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return Ua(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function s1(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Vv(r.transform,s||null);i!=null&&(n===null&&(n=sn.empty()),n.set(r.field,i))}return n||null}function Km(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&pi(r,s,(i,o)=>t1(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Go extends rc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ts extends rc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function jv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zm(t,e,n){const r=new Map;Be(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,e1(o,a,n[s]))}return r}function Ym(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Zk(i,o,e))}return r}class ed extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class i1 extends rc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&r1(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=uo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=uo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=xv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Bv(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ye.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ne())}isEqual(e){return this.batchId===e.batchId&&pi(this.mutations,e.mutations,(n,r)=>Km(n,r))&&pi(this.baseMutations,e.baseMutations,(n,r)=>Km(n,r))}}class td{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Be(e.mutations.length===r.length);let s=function(){return zk}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new td(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t,Le;function c1(t){switch(t){default:return _e();case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0}}function Hv(t){if(t===void 0)return pr("GRPC error has no .code"),J.UNKNOWN;switch(t){case _t.OK:return J.OK;case _t.CANCELLED:return J.CANCELLED;case _t.UNKNOWN:return J.UNKNOWN;case _t.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case _t.INTERNAL:return J.INTERNAL;case _t.UNAVAILABLE:return J.UNAVAILABLE;case _t.UNAUTHENTICATED:return J.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case _t.NOT_FOUND:return J.NOT_FOUND;case _t.ALREADY_EXISTS:return J.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return J.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case _t.ABORTED:return J.ABORTED;case _t.OUT_OF_RANGE:return J.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return J.UNIMPLEMENTED;case _t.DATA_LOSS:return J.DATA_LOSS;default:return _e()}}(Le=_t||(_t={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1=new _s([4294967295,4294967295],0);function Qm(t){const e=u1().encode(t),n=new pv;return n.update(e),new Uint8Array(n.digest())}function Xm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new _s([n,r],0),new _s([s,i],0)]}class nd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qi(`Invalid padding: ${n}`);if(r<0)throw new Qi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qi(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=_s.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(_s.fromNumber(r)));return s.compare(h1)===1&&(s=new _s([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Qm(e),[r,s]=Xm(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new nd(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Qm(e),[r,s]=Xm(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ko.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new sc(ye.min(),s,new lt(Oe),mr(),Ne())}}class Ko{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ko(r,n,Ne(),Ne(),Ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class qv{constructor(e,n){this.targetId=e,this.me=n}}class Wv{constructor(e,n,r=Mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Jm{constructor(){this.fe=0,this.ge=Zm(),this.pe=Mt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ne(),n=Ne(),r=Ne();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:_e()}}),new Ko(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Zm()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Be(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class d1{constructor(e){this.Le=e,this.Be=new Map,this.ke=mr(),this.qe=ba(),this.Qe=ba(),this.Ke=new lt(Oe)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:_e()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(Ku(i))if(r===0){const o=new de(i.path);this.We(n,o,qt.newNoDocument(o,ye.min()))}else Be(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=qr(r).toUint8Array()}catch(c){if(c instanceof Iv)return fi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new nd(o,s,i)}catch(c){return fi(c instanceof Qi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Ku(a.target)){const c=new de(a.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,qt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Ne();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new sc(e,n,this.Ke,this.ke,r);return this.ke=mr(),this.qe=ba(),this.Qe=ba(),this.Ke=new lt(Oe),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Jm,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new wt(Oe),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new wt(Oe),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||ae("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Jm),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ba(){return new lt(de.comparator)}function Zm(){return new lt(de.comparator)}const f1={asc:"ASCENDING",desc:"DESCENDING"},p1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},m1={and:"AND",or:"OR"};class g1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yu(t,e){return t.useProto3Json||Ql(e)?e:{value:e}}function ml(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _1(t,e){return ml(t,e.toTimestamp())}function jn(t){return Be(!!t),ye.fromTimestamp(function(n){const r=Hr(n);return new It(r.seconds,r.nanos)}(t))}function rd(t,e){return Qu(t,e).canonicalString()}function Qu(t,e){const n=function(s){return new rt(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Kv(t){const e=rt.fromString(t);return Be(Jv(e)),e}function Xu(t,e){return rd(t.databaseId,e.path)}function ru(t,e){const n=Kv(e);if(n.get(1)!==t.databaseId.projectId)throw new ce(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new de(Yv(n))}function zv(t,e){return rd(t.databaseId,e)}function y1(t){const e=Kv(t);return e.length===4?rt.emptyPath():Yv(e)}function Ju(t){return new rt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Yv(t){return Be(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function eg(t,e,n){return{name:Xu(t,e),fields:n.value.mapValue.fields}}function v1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:_e()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Be(h===void 0||typeof h=="string"),Mt.fromBase64String(h||"")):(Be(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Mt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?J.UNKNOWN:Hv(u.code);return new ce(h,u.message||"")}(o);n=new Wv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ru(t,r.document.name),i=jn(r.document.updateTime),o=r.document.createTime?jn(r.document.createTime):ye.min(),a=new sn({mapValue:{fields:r.document.fields}}),c=qt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Fa(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ru(t,r.document),i=r.readTime?jn(r.readTime):ye.min(),o=qt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Fa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ru(t,r.document),i=r.removedTargetIds||[];n=new Fa([],i,s,null)}else{if(!("filter"in e))return _e();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new l1(s,i),a=r.targetId;n=new qv(a,o)}}return n}function E1(t,e){let n;if(e instanceof Go)n={update:eg(t,e.key,e.value)};else if(e instanceof ed)n={delete:Xu(t,e.key)};else if(e instanceof ts)n={update:eg(t,e.key,e.data),updateMask:C1(e.fieldMask)};else{if(!(e instanceof i1))return _e();n={verify:Xu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof fl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Oo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Lo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof pl)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw _e()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_1(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:_e()}(t,e.precondition)),n}function T1(t,e){return t&&t.length>0?(Be(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?jn(s.updateTime):jn(i);return o.isEqual(ye.min())&&(o=jn(i)),new n1(o,s.transformResults||[])}(n,e))):[]}function b1(t,e){return{documents:[zv(t,e.path)]}}function I1(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=zv(t,s);const i=function(u){if(u.length!==0)return Xv(Wn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(m){return{field:Gs(m.field),direction:R1(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Yu(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function w1(t){let e=y1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Be(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const m=Qv(f);return m instanceof Wn&&Sv(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(P){return new dl(Ks(P.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Ql(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(f){const m=!!f.before,g=f.values||[];return new hl(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const m=!f.before,g=f.values||[];return new hl(g,m)}(n.endAt)),jk(e,s,o,i,a,"F",c,u)}function A1(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Qv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ks(n.unaryFilter.field);return Et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ks(n.unaryFilter.field);return Et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ks(n.unaryFilter.field);return Et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ks(n.unaryFilter.field);return Et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return _e()}}(t):t.fieldFilter!==void 0?function(n){return Et.create(Ks(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _e()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wn.create(n.compositeFilter.filters.map(r=>Qv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return _e()}}(n.compositeFilter.op))}(t):_e()}function R1(t){return f1[t]}function S1(t){return p1[t]}function P1(t){return m1[t]}function Gs(t){return{fieldPath:t.canonicalString()}}function Ks(t){return Dt.fromServerFormat(t.fieldPath)}function Xv(t){return t instanceof Et?function(n){if(n.op==="=="){if(Bm(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NAN"}};if($m(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Bm(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NAN"}};if($m(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gs(n.field),op:S1(n.op),value:n.value}}}(t):t instanceof Wn?function(n){const r=n.getFilters().map(s=>Xv(s));return r.length===1?r[0]:{compositeFilter:{op:P1(n.op),filters:r}}}(t):_e()}function C1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Jv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n,r,s,i=ye.min(),o=ye.min(),a=Mt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e){this.ht=e}}function N1(t){const e=w1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(){this.ln=new L1}addToCollectionParentIndex(e,n){return this.ln.add(n),K.resolve()}getCollectionParents(e,n){return K.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return K.resolve()}deleteFieldIndex(e,n){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,n){return K.resolve()}getDocumentsMatchingTarget(e,n){return K.resolve(null)}getIndexType(e,n){return K.resolve(0)}getFieldIndexes(e,n){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,n){return K.resolve(jr.min())}getMinOffsetFromCollectionGroup(e,n){return K.resolve(jr.min())}updateCollectionGroup(e,n,r){return K.resolve()}updateIndexEntries(e,n){return K.resolve()}}class L1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new wt(rt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new wt(rt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class nn{static withCacheSize(e){return new nn(e,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nn.DEFAULT_COLLECTION_PERCENTILE=10,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nn.DEFAULT=new nn(41943040,nn.DEFAULT_COLLECTION_PERCENTILE,nn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nn.DISABLED=new nn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new _i(0)}static Qn(){return new _i(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng([t,e],[n,r]){const s=Oe(t,n);return s===0?Oe(e,r):s}class D1{constructor(e){this.Gn=e,this.buffer=new wt(ng),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();ng(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class x1{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ae("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ai(n)?ae("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await wi(n)}await this.Yn(3e5)})}}class M1{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return K.resolve(Yl.oe);const r=new D1(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(tg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),tg):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),qs()<=ke.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function V1(t,e){return new M1(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(){this.changes=new Cs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,qt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?K.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&uo(r.mutation,s,un.empty(),It.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ne()){const s=ps();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Yi();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ps();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ne()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=mr();const o=co(),a=function(){return co()}();return n.forEach((c,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof ts)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),uo(h.mutation,u,h.mutation.getFieldMask(),It.now())):o.set(u.key,un.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new F1(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=co();let s=new lt((o,a)=>o-a),i=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=r.get(c)||un.empty();h=a.applyToLocalView(u,h),r.set(c,h);const f=(s.get(a.batchId)||Ne()).add(c);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=xv();h.forEach(m=>{if(!i.has(m)){const g=Bv(n.get(m),r.get(m));g!==null&&f.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return K.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return de.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Hk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):K.resolve(ps());let a=-1,c=i;return o.next(u=>K.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?K.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{c=c.insert(h,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Ne())).next(h=>({batchId:a,changes:Dv(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new de(n)).next(r=>{let s=Yi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Yi();return this.indexManager.getCollectionParents(e,i).next(a=>K.forEach(a,c=>{const u=function(f,m){return new Jl(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,qt.newInvalidDocument(h)))});let a=Yi();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&uo(h.mutation,u,un.empty(),It.now()),tc(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return K.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:jn(s.createTime)}}(n)),K.resolve()}getNamedQuery(e,n){return K.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:N1(s.bundledQuery),readTime:jn(s.readTime)}}(n)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(){this.overlays=new lt(de.comparator),this.Er=new Map}getOverlay(e,n){return K.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ps();return K.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),K.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),K.resolve()}getOverlaysForCollection(e,n,r){const s=ps(),i=n.length+1,o=new de(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return K.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new lt((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=ps(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=ps(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return K.resolve(a)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new a1(n,r));let i=this.Er.get(n);i===void 0&&(i=Ne(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(){this.sessionToken=Mt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.dr=new wt(Rt.Ar),this.Rr=new wt(Rt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new Rt(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new Rt(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new de(new rt([])),r=new Rt(n,e),s=new Rt(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new de(new rt([])),r=new Rt(n,e),s=new Rt(n,e+1);let i=Ne();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Rt(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Rt{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return de.comparator(e.key,n.key)||Oe(e.br,n.br)}static Vr(e,n){return Oe(e.br,n.br)||de.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new wt(Rt.Ar)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new o1(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.vr=this.vr.add(new Rt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return K.resolve(o)}lookupMutationBatch(e,n){return K.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return K.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Rt(n,0),s=new Rt(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const a=this.Cr(o.br);i.push(a)}),K.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new wt(Oe);return n.forEach(s=>{const i=new Rt(s,0),o=new Rt(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],a=>{r=r.add(a.br)})}),K.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;de.isDocumentKey(i)||(i=i.child(""));const o=new Rt(new de(i),0);let a=new wt(Oe);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.br)),!0)},o),K.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Be(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return K.forEach(n.mutations,s=>{const i=new Rt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new Rt(n,0),s=this.vr.firstAfterOrEqual(r);return K.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e){this.Nr=e,this.docs=function(){return new lt(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return K.resolve(r?r.document.mutableCopy():qt.newInvalidDocument(n))}getEntries(e,n){let r=mr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():qt.newInvalidDocument(s))}),K.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=mr();const o=n.path,a=new de(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Tk(Ek(h),r)<=0||(s.has(h.key)||tc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return K.resolve(i)}getAllFromCollectionGroup(e,n,r,s){_e()}Lr(e,n){return K.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new G1(this)}getSize(e){return K.resolve(this.size)}}class G1 extends U1{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),K.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e){this.persistence=e,this.Br=new Cs(n=>Xh(n),Jh),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.kr=0,this.qr=new sd,this.targetCount=0,this.Qr=_i.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),K.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new _i(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,K.resolve()}updateTargetData(e,n){return this.Un(n),K.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),K.waitFor(i).next(()=>s)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return K.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),K.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),K.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),K.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return K.resolve(r)}containsKey(e,n){return K.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Yl(0),this.Ur=!1,this.Ur=!0,this.Wr=new H1,this.referenceDelegate=e(this),this.Gr=new K1(this),this.indexManager=new O1,this.remoteDocumentCache=function(s){return new W1(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new k1(n),this.jr=new B1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new j1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new q1(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){ae("MemoryPersistence","Starting transaction:",e);const s=new z1(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return K.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class z1 extends Ik{constructor(e){super(),this.currentSequenceNumber=e}}class id{constructor(e){this.persistence=e,this.Zr=new sd,this.Xr=null}static ei(e){return new id(e)}get ti(){if(this.Xr)return this.Xr;throw _e()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),K.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),K.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.ti,r=>{const s=de.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,ye.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return K.or([()=>K.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class gl{constructor(e,n){this.persistence=e,this.ri=new Cs(r=>Rk(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=V1(this,n)}static ei(e,n){return new gl(e,n)}Hr(){}Jr(e){return K.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return K.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?K.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(a=>{a||(r++,i.removeEntry(o,ye.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),K.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),K.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),K.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ma(e.data.value)),n}ir(e,n,r){return K.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return K.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=Ne(),s=Ne();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new od(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return LR()?8:wk(Wt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Y1;return this.ts(e,n,o).next(a=>{if(i.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(qs()<=ke.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",Ws(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),K.resolve()):(qs()<=ke.DEBUG&&ae("QueryEngine","Query:",Ws(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(qs()<=ke.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",Ws(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Bn(n))):K.resolve())}Xi(e,n){if(Wm(n))return K.resolve(null);let r=Bn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=zu(n,null,"F"),r=Bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ne(...i);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.rs(n,a);return this.ss(n,u,o,c.readTime)?this.Xi(e,zu(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,r,s){return Wm(n)||s.isEqual(ye.min())?K.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?K.resolve(null):(qs()<=ke.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ws(n)),this.os(e,o,n,vk(s,-1)).next(a=>a))})}rs(e,n){let r=new wt(Ov(e));return n.forEach((s,i)=>{tc(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return qs()<=ke.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Ws(n)),this.Zi.getDocumentsMatchingQuery(e,n,jr.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new lt(Oe),this.cs=new Cs(i=>Xh(i),Jh),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $1(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function J1(t,e,n,r){return new X1(t,e,n,r)}async function eE(t,e){const n=Ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Ne();for(const u of s){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function Z1(t,e){const n=Ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,m=f.keys();let g=K.resolve();return m.forEach(P=>{g=g.next(()=>h.getEntry(c,P)).next(C=>{const N=u.docVersions.get(P);Be(N!==null),C.version.compareTo(N)<0&&(f.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),h.addEntry(C)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Ne();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function tE(t){const e=Ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function eN(t,e){const n=Ee(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const a=[];e.targetChanges.forEach((h,f)=>{const m=s.get(f);if(!m)return;a.push(n.Gr.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.Gr.addMatchingKeys(i,h.addedDocuments,f)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Mt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),s=s.insert(f,g),function(C,N,F){return C.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(m,g,h)&&a.push(n.Gr.updateTargetData(i,g))});let c=mr(),u=Ne();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(tN(i,o,e.documentUpdates).next(h=>{c=h.Is,u=h.Es})),!r.isEqual(ye.min())){const h=n.Gr.getLastRemoteSnapshotVersion(i).next(f=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return K.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.us=s,i))}function tN(t,e,n){let r=Ne(),s=Ne();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=mr();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ye.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ae("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:s}})}function nN(t,e){const n=Ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function rN(t,e){const n=Ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,K.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new Lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function Zu(t,e,n){const r=Ee(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ai(o))throw o;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function rg(t,e,n){const r=Ee(t);let s=ye.min(),i=Ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=Ee(c),m=f.cs.get(h);return m!==void 0?K.resolve(f.us.get(m)):f.Gr.getTargetData(u,h)}(r,o,Bn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:ye.min(),n?i:Ne())).next(a=>(sN(r,Wk(e),a),{documents:a,ds:i})))}function sN(t,e,n){let r=t.ls.get(e)||ye.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class sg{constructor(){this.activeTargetIds=Xk()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iN{constructor(){this._o=new sg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new sg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ia=null;function su(){return Ia===null?Ia=function(){return 268435456+Math.round(2147483648*Math.random())}():Ia++,"0x"+Ia.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="WebChannelConnection";class cN extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const a=su(),c=this.No(n,r.toUriEncodedString());ae("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(n,c,u,s).then(h=>(ae("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw fi("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",c,"request:",s),h})}ko(n,r,s,i,o,a){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ii}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=aN[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=su();return new Promise((o,a)=>{const c=new mv;c.setWithCredentials(!0),c.listenOnce(gv.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case xa.NO_ERROR:const h=c.getResponseJson();ae($t,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case xa.TIMEOUT:ae($t,`RPC '${e}' ${i} timed out`),a(new ce(J.DEADLINE_EXCEEDED,"Request time out"));break;case xa.HTTP_ERROR:const f=c.getStatus();if(ae($t,`RPC '${e}' ${i} failed with status:`,f,"response text:",c.getResponseText()),f>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const P=function(N){const F=N.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(F)>=0?F:J.UNKNOWN}(g.status);a(new ce(P,g.message))}else a(new ce(J.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new ce(J.UNAVAILABLE,"Connection failed."));break;default:_e()}}finally{ae($t,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ae($t,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}qo(e,n,r){const s=su(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vv(),a=yv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const h=i.join("");ae($t,`Creating RPC '${e}' stream ${s}: ${h}`,c);const f=o.createWebChannel(h,c);let m=!1,g=!1;const P=new lN({Eo:N=>{g?ae($t,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(ae($t,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),ae($t,`RPC '${e}' stream ${s} sending:`,N),f.send(N))},Ao:()=>f.close()}),C=(N,F,H)=>{N.listen(F,w=>{try{H(w)}catch(R){setTimeout(()=>{throw R},0)}})};return C(f,zi.EventType.OPEN,()=>{g||(ae($t,`RPC '${e}' stream ${s} transport opened.`),P.So())}),C(f,zi.EventType.CLOSE,()=>{g||(g=!0,ae($t,`RPC '${e}' stream ${s} transport closed`),P.Do())}),C(f,zi.EventType.ERROR,N=>{g||(g=!0,fi($t,`RPC '${e}' stream ${s} transport errored:`,N),P.Do(new ce(J.UNAVAILABLE,"The operation could not be completed")))}),C(f,zi.EventType.MESSAGE,N=>{var F;if(!g){const H=N.data[0];Be(!!H);const w=H,R=(w==null?void 0:w.error)||((F=w[0])===null||F===void 0?void 0:F.error);if(R){ae($t,`RPC '${e}' stream ${s} received error:`,R);const U=R.status;let B=function(y){const k=_t[y];if(k!==void 0)return Hv(k)}(U),b=R.message;B===void 0&&(B=J.INTERNAL,b="Unknown error status: "+U+" with message "+R.message),g=!0,P.Do(new ce(B,b)),f.close()}else ae($t,`RPC '${e}' stream ${s} received:`,H),P.vo(H)}}),C(a,_v.STAT_EVENT,N=>{N.stat===Hu.PROXY?ae($t,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Hu.NOPROXY&&ae($t,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.bo()},0),P}}function iu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t){return new g1(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&ae("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n,r,s,i,o,a,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new nE(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===J.RESOURCE_EXHAUSTED?(pr(n.toString()),pr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new ce(J.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uN extends rE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=v1(this.serializer,e),r=function(i){if(!("targetChange"in i))return ye.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ye.min():o.readTime?jn(o.readTime):ye.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Ju(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Ku(c)?{documents:b1(i,c)}:{query:I1(i,c).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Gv(i,o.resumeToken);const u=Yu(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ye.min())>0){a.readTime=ml(i,o.snapshotVersion.toTimestamp());const u=Yu(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=A1(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Ju(this.serializer),n.removeTarget=e,this.c_(n)}}class hN extends rE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return Be(!!e.streamToken),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Be(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=T1(e.writeResults,e.commitTime),r=jn(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=Ju(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>E1(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new ce(J.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,Qu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ce(J.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,Qu(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ce(J.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class fN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(pr(n),this.C_=!1):ae("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{ks(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=Ee(c);u.k_.add(4),await zo(u),u.K_.set("Unknown"),u.k_.delete(4),await oc(u)}(this))})}),this.K_=new fN(r,s)}}async function oc(t){if(ks(t))for(const e of t.q_)await e(!0)}async function zo(t){for(const e of t.q_)await e(!1)}function sE(t,e){const n=Ee(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),ud(n)?cd(n):Ri(n).s_()&&ld(n,e))}function ad(t,e){const n=Ee(t),r=Ri(n);n.B_.delete(e),r.s_()&&iE(n,e),n.B_.size===0&&(r.s_()?r.a_():ks(n)&&n.K_.set("Unknown"))}function ld(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ri(t).V_(e)}function iE(t,e){t.U_.xe(e),Ri(t).m_(e)}function cd(t){t.U_=new d1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ri(t).start(),t.K_.F_()}function ud(t){return ks(t)&&!Ri(t).i_()&&t.B_.size>0}function ks(t){return Ee(t).k_.size===0}function oE(t){t.U_=void 0}async function mN(t){t.K_.set("Online")}async function gN(t){t.B_.forEach((e,n)=>{ld(t,e)})}async function _N(t,e){oE(t),ud(t)?(t.K_.O_(e),cd(t)):t.K_.set("Unknown")}async function yN(t,e,n){if(t.K_.set("Online"),e instanceof Wv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.B_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.B_.delete(a),s.U_.removeTarget(a))}(t,e)}catch(r){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await _l(t,r)}else if(e instanceof Fa?t.U_.$e(e):e instanceof qv?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(ye.min()))try{const r=await tE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.U_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.B_.get(u);h&&i.B_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=i.B_.get(c);if(!h)return;i.B_.set(c,h.withResumeToken(Mt.EMPTY_BYTE_STRING,h.snapshotVersion)),iE(i,c);const f=new Lr(h.target,c,u,h.sequenceNumber);ld(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ae("RemoteStore","Failed to raise snapshot:",r),await _l(t,r)}}async function _l(t,e,n){if(!Ai(e))throw e;t.k_.add(1),await zo(t),t.K_.set("Offline"),n||(n=()=>tE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ae("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await oc(t)})}function aE(t,e){return e().catch(n=>_l(t,n,e))}async function ac(t){const e=Ee(t),n=Gr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;vN(e);)try{const s=await nN(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,EN(e,s)}catch(s){await _l(e,s)}lE(e)&&cE(e)}function vN(t){return ks(t)&&t.L_.length<10}function EN(t,e){t.L_.push(e);const n=Gr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function lE(t){return ks(t)&&!Gr(t).i_()&&t.L_.length>0}function cE(t){Gr(t).start()}async function TN(t){Gr(t).w_()}async function bN(t){const e=Gr(t);for(const n of t.L_)e.g_(n.mutations)}async function IN(t,e,n){const r=t.L_.shift(),s=td.from(r,e,n);await aE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ac(t)}async function wN(t,e){e&&Gr(t).f_&&await async function(r,s){if(function(o){return c1(o)&&o!==J.ABORTED}(s.code)){const i=r.L_.shift();Gr(r).__(),await aE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ac(r)}}(t,e),lE(t)&&cE(t)}async function og(t,e){const n=Ee(t);n.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const r=ks(n);n.k_.add(3),await zo(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await oc(n)}async function AN(t,e){const n=Ee(t);e?(n.k_.delete(2),await oc(n)):e||(n.k_.add(2),await zo(n),n.K_.set("Unknown"))}function Ri(t){return t.W_||(t.W_=function(n,r,s){const i=Ee(n);return i.b_(),new uN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:mN.bind(null,t),mo:gN.bind(null,t),po:_N.bind(null,t),R_:yN.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),ud(t)?cd(t):t.K_.set("Unknown")):(await t.W_.stop(),oE(t))})),t.W_}function Gr(t){return t.G_||(t.G_=function(n,r,s){const i=Ee(n);return i.b_(),new hN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:TN.bind(null,t),po:wN.bind(null,t),p_:bN.bind(null,t),y_:IN.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await ac(t)):(await t.G_.stop(),t.L_.length>0&&(ae("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new cr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new hd(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dd(t,e){if(pr("AsyncQueue",`${e}: ${t}`),Ai(t))return new ce(J.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{static emptySet(e){return new si(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||de.comparator(n.key,r.key):(n,r)=>de.comparator(n.key,r.key),this.keyedMap=Yi(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof si)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new si;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(){this.z_=new lt(de.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):_e():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class yi{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new yi(e,n,si.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ec(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RN{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class SN{constructor(){this.queries=lg(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=Ee(n),i=s.queries;s.queries=lg(),i.forEach((o,a)=>{for(const c of a.J_)c.onError(r)})})(this,new ce(J.ABORTED,"Firestore shutting down"))}}function lg(){return new Cs(t=>Nv(t),ec)}async function fd(t,e){const n=Ee(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new RN,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=dd(o,`Initialization of query '${Ws(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&md(n)}async function pd(t,e){const n=Ee(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function PN(t,e){const n=Ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.J_)a.ta(s)&&(r=!0);o.H_=s}}r&&md(n)}function CN(t,e,n){const r=Ee(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function md(t){t.X_.forEach(e=>{e.next()})}var eh,cg;(cg=eh||(eh={})).na="default",cg.Cache="cache";class gd{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new yi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=yi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==eh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e){this.key=e}}class hE{constructor(e){this.key=e}}class kN{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ne(),this.mutatedKeys=Ne(),this.Va=Ov(e),this.ma=new si(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new ag,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,f)=>{const m=s.get(h),g=tc(this.query,f)?f:null,P=!!m&&this.mutatedKeys.has(m.key),C=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let N=!1;m&&g?m.data.isEqual(g.data)?P!==C&&(r.track({type:3,doc:g}),N=!0):this.ya(m,g)||(r.track({type:2,doc:g}),N=!0,(c&&this.Va(g,c)>0||u&&this.Va(g,u)<0)&&(a=!0)):!m&&g?(r.track({type:0,doc:g}),N=!0):m&&!g&&(r.track({type:1,doc:m}),N=!0,(c||u)&&(a=!0)),N&&(g?(o=o.add(g),i=C?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{ma:o,pa:r,ss:a,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,f)=>function(g,P){const C=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e()}};return C(g)-C(P)}(h.type,f.type)||this.Va(h.doc,f.doc)),this.wa(r),s=s!=null&&s;const a=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new yi(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new ag,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ne(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new hE(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new uE(r))}),n}va(e){this.da=e.ds,this.Ra=Ne();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return yi.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class NN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class ON{constructor(e){this.key=e,this.Fa=!1}}class LN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Cs(a=>Nv(a),ec),this.Oa=new Map,this.Na=new Set,this.La=new lt(de.comparator),this.Ba=new Map,this.ka=new sd,this.qa={},this.Qa=new Map,this.Ka=_i.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function DN(t,e,n=!0){const r=_E(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await dE(r,e,n,!0),s}async function xN(t,e){const n=_E(t);await dE(n,e,!0,!1)}async function dE(t,e,n,r){const s=await rN(t.localStore,Bn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await MN(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&sE(t.remoteStore,s),a}async function MN(t,e,n,r,s){t.Ua=(f,m,g)=>async function(C,N,F,H){let w=N.view.ga(F);w.ss&&(w=await rg(C.localStore,N.query,!1).then(({documents:b})=>N.view.ga(b,w)));const R=H&&H.targetChanges.get(N.targetId),U=H&&H.targetMismatches.get(N.targetId)!=null,B=N.view.applyChanges(w,C.isPrimaryClient,R,U);return hg(C,N.targetId,B.ba),B.snapshot}(t,f,m,g);const i=await rg(t.localStore,e,!0),o=new kN(e,i.ds),a=o.ga(i.documents),c=Ko.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);hg(t,n,u.ba);const h=new NN(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function VN(t,e,n){const r=Ee(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!ec(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Zu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ad(r.remoteStore,s.targetId),th(r,s.targetId)}).catch(wi)):(th(r,s.targetId),await Zu(r.localStore,s.targetId,!0))}async function UN(t,e){const n=Ee(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ad(n.remoteStore,r.targetId))}async function FN(t,e,n){const r=GN(t);try{const s=await function(o,a){const c=Ee(o),u=It.now(),h=a.reduce((g,P)=>g.add(P.key),Ne());let f,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let P=mr(),C=Ne();return c.hs.getEntries(g,h).next(N=>{P=N,P.forEach((F,H)=>{H.isValidDocument()||(C=C.add(F))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,P)).next(N=>{f=N;const F=[];for(const H of a){const w=s1(H,f.get(H.key).overlayedDocument);w!=null&&F.push(new ts(H.key,w,wv(w.value.mapValue),yn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,F,a)}).next(N=>{m=N;const F=N.applyToLocalDocumentSet(f,C);return c.documentOverlayCache.saveOverlays(g,N.batchId,F)})}).then(()=>({batchId:m.batchId,changes:Dv(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.qa[o.currentUser.toKey()];u||(u=new lt(Oe)),u=u.insert(a,c),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Yo(r,s.changes),await ac(r.remoteStore)}catch(s){const i=dd(s,"Failed to persist write");n.reject(i)}}async function fE(t,e){const n=Ee(t);try{const r=await eN(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&(Be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?Be(o.Fa):s.removedDocuments.size>0&&(Be(o.Fa),o.Fa=!1))}),await Yo(n,r,e)}catch(r){await wi(r)}}function ug(t,e,n){const r=Ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const a=o.view.ea(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=Ee(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const m of f.J_)m.ea(a)&&(u=!0)}),u&&md(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $N(t,e,n){const r=Ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new lt(de.comparator);o=o.insert(i,qt.newNoDocument(i,ye.min()));const a=Ne().add(i),c=new sc(ye.min(),new Map,new lt(Oe),o,a);await fE(r,c),r.La=r.La.remove(i),r.Ba.delete(e),_d(r)}else await Zu(r.localStore,e,!1).then(()=>th(r,e,n)).catch(wi)}async function BN(t,e){const n=Ee(t),r=e.batch.batchId;try{const s=await Z1(n.localStore,e);mE(n,r,null),pE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yo(n,s)}catch(s){await wi(s)}}async function jN(t,e,n){const r=Ee(t);try{const s=await function(o,a){const c=Ee(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(Be(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(r.localStore,e);mE(r,e,n),pE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Yo(r,s)}catch(s){await wi(s)}}function pE(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function mE(t,e,n){const r=Ee(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function th(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||gE(t,r)})}function gE(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(ad(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),_d(t))}function hg(t,e,n){for(const r of n)r instanceof uE?(t.ka.addReference(r.key,e),HN(t,r)):r instanceof hE?(ae("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||gE(t,r.key)):_e()}function HN(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(ae("SyncEngine","New document in limbo: "+n),t.Na.add(r),_d(t))}function _d(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new de(rt.fromString(e)),r=t.Ka.next();t.Ba.set(r,new ON(n)),t.La=t.La.insert(n,r),sE(t.remoteStore,new Lr(Bn(Zl(n.path)),r,"TargetPurposeLimboResolution",Yl.oe))}}async function Yo(t,e,n){const r=Ee(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((a,c)=>{o.push(r.Ua(c,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=od.zi(c.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(c,u){const h=Ee(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>K.forEach(u,m=>K.forEach(m.Wi,g=>h.persistence.referenceDelegate.addReference(f,m.targetId,g)).next(()=>K.forEach(m.Gi,g=>h.persistence.referenceDelegate.removeReference(f,m.targetId,g)))))}catch(f){if(!Ai(f))throw f;ae("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const g=h.us.get(m),P=g.snapshotVersion,C=g.withLastLimboFreeSnapshotVersion(P);h.us=h.us.insert(m,C)}}}(r.localStore,i))}async function qN(t,e){const n=Ee(t);if(!n.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const r=await eE(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(a=>{a.forEach(c=>{c.reject(new ce(J.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Yo(n,r.Ts)}}function WN(t,e){const n=Ee(t),r=n.Ba.get(e);if(r&&r.Fa)return Ne().add(r.key);{let s=Ne();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const a=n.xa.get(o);s=s.unionWith(a.view.fa)}return s}}function _E(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$N.bind(null,e),e.Ma.R_=PN.bind(null,e.eventManager),e.Ma.Wa=CN.bind(null,e.eventManager),e}function GN(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jN.bind(null,e),e}class yl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ic(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return J1(this.persistence,new Q1,e.initialUser,this.serializer)}ja(e){return new Zv(id.ei,this.serializer)}za(e){return new iN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yl.provider={build:()=>new yl};class KN extends yl{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Be(this.persistence.referenceDelegate instanceof gl);const r=this.persistence.referenceDelegate.garbageCollector;return new x1(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?nn.withCacheSize(this.cacheSizeBytes):nn.DEFAULT;return new Zv(r=>gl.ei(r,n),this.serializer)}}class nh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ug(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=qN.bind(null,this.syncEngine),await AN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new SN}()}createDatastore(e){const n=ic(e.databaseInfo.databaseId),r=function(i){return new cN(i)}(e.databaseInfo);return function(i,o,a,c){return new dN(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new pN(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ug(this.syncEngine,n,0),function(){return ig.p()?new ig:new oN}())}createSyncEngine(e,n){return function(s,i,o,a,c,u,h){const f=new LN(s,i,o,a,c,u);return h&&(f.$a=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Ee(s);ae("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await zo(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}nh.provider={build:()=>new nh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):pr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Bt.UNAUTHENTICATED,this.clientId=Tv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ae("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ae("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ou(t,e){t.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await eE(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function dg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await YN(t);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>og(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>og(e.remoteStore,s)),t._onlineComponents=e}async function YN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await ou(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===J.FAILED_PRECONDITION||s.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;fi("Error using user provided cache. Falling back to memory cache: "+n),await ou(t,new yl)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await ou(t,new KN(void 0));return t._offlineComponents}async function yE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await dg(t,t._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await dg(t,new nh))),t._onlineComponents}function QN(t){return yE(t).then(e=>e.syncEngine)}async function vl(t){const e=await yE(t),n=e.eventManager;return n.onListen=DN.bind(null,e.syncEngine),n.onUnlisten=VN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=xN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=UN.bind(null,e.syncEngine),n}function XN(t,e,n={}){const r=new cr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new yd({next:m=>{h.eu(),o.enqueueAndForget(()=>pd(i,f));const g=m.docs.has(a);!g&&m.fromCache?u.reject(new ce(J.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?u.reject(new ce(J.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new gd(Zl(a.path),h,{includeMetadataChanges:!0,ua:!0});return fd(i,f)}(await vl(t),t.asyncQueue,e,n,r)),r.promise}function JN(t,e,n={}){const r=new cr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new yd({next:m=>{h.eu(),o.enqueueAndForget(()=>pd(i,f)),m.fromCache&&c.source==="server"?u.reject(new ce(J.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new gd(a,h,{includeMetadataChanges:!0,ua:!0});return fd(i,f)}(await vl(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(t,e,n){if(!n)throw new ce(J.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ZN(t,e,n,r){if(e===!0&&r===!0)throw new ce(J.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function pg(t){if(!de.isDocumentKey(t))throw new ce(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function mg(t){if(de.isDocumentKey(t))throw new ce(J.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_e()}function on(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vd(t);throw new ce(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ZN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ce(J.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ce(J.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ce(J.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uk;switch(r.type){case"firstParty":return new pk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=fg.get(n);r&&(ae("ComponentProvider","Removing Datastore"),fg.delete(n),r.terminate())}(this),Promise.resolve()}}function eO(t,e,n,r={}){var s;const i=(t=on(t,lc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&fi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Bt.MOCK_USER;else{a=Sy(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ce(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Bt(u)}t._authCredentials=new hk(new Ev(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qo(this.firestore,e,this._query)}}class en{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ur(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new en(this.firestore,e,this._key)}}class Ur extends Qo{constructor(e,n,r){super(e,n,Zl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new en(this.firestore,null,new de(e))}withConverter(e){return new Ur(this.firestore,e,this._path)}}function cc(t,e,...n){if(t=at(t),EE("collection","path",e),t instanceof lc){const r=rt.fromString(e,...n);return mg(r),new Ur(t,null,r)}{if(!(t instanceof en||t instanceof Ur))throw new ce(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(rt.fromString(e,...n));return mg(r),new Ur(t.firestore,null,r)}}function ur(t,e,...n){if(t=at(t),arguments.length===1&&(e=Tv.newId()),EE("doc","path",e),t instanceof lc){const r=rt.fromString(e,...n);return pg(r),new en(t,null,new de(r))}{if(!(t instanceof en||t instanceof Ur))throw new ce(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(rt.fromString(e,...n));return pg(r),new en(t.firestore,t instanceof Ur?t.converter:null,new de(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new nE(this,"async_queue_retry"),this.fu=()=>{const r=iu();r&&ae("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=iu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=iu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new cr;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Ai(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw pr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=hd.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&_e()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function yg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class gr extends lc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new _g,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _g(e),this._firestoreClient=void 0,await e}}}function tO(t,e){const n=typeof t=="object"?t:Uh(),r=typeof t=="string"?t:"(default)",s=Wl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=wy("firestore");i&&eO(s,...i)}return s}function uc(t){if(t._terminated)throw new ce(J.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||nO(t),t._firestoreClient}function nO(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,u,h){return new Ck(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,vE(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new zN(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vi(Mt.fromBase64String(e))}catch(n){throw new ce(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vi(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO=/^__.*__$/;class sO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ts(e,this.data,this.fieldMask,n,this.fieldTransforms):new Go(e,this.data,n,this.fieldTransforms)}}class TE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ts(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function bE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e()}}class Id{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Id(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return El(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(bE(this.Mu)&&rO.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class iO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ic(e)}$u(e,n,r,s=!1){return new Id({Mu:e,methodName:n,Ku:r,path:Dt.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wd(t){const e=t._freezeSettings(),n=ic(t._databaseId);return new iO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function IE(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);Ad("Data must be an object, but it was:",o,r);const a=wE(r,o);let c,u;if(i.merge)c=new un(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const m=rh(e,f,n);if(!o.contains(m))throw new ce(J.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);RE(h,m)||h.push(m)}c=new un(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new sO(new sn(a),c,u)}class dc extends Ed{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof dc}}function oO(t,e,n,r){const s=t.$u(1,e,n);Ad("Data must be an object, but it was:",s,r);const i=[],o=sn.empty();es(r,(c,u)=>{const h=Rd(e,c,n);u=at(u);const f=s.Bu(h);if(u instanceof dc)i.push(h);else{const m=fc(u,f);m!=null&&(i.push(h),o.set(h,m))}});const a=new un(i);return new TE(o,a,s.fieldTransforms)}function aO(t,e,n,r,s,i){const o=t.$u(1,e,n),a=[rh(e,r,n)],c=[s];if(i.length%2!=0)throw new ce(J.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(rh(e,i[m])),c.push(i[m+1]);const u=[],h=sn.empty();for(let m=a.length-1;m>=0;--m)if(!RE(u,a[m])){const g=a[m];let P=c[m];P=at(P);const C=o.Bu(g);if(P instanceof dc)u.push(g);else{const N=fc(P,C);N!=null&&(u.push(g),h.set(g,N))}}const f=new un(u);return new TE(h,f,o.fieldTransforms)}function fc(t,e){if(AE(t=at(t)))return Ad("Unsupported field value:",e,t),wE(t,e);if(t instanceof Ed)return function(r,s){if(!bE(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=fc(a,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=at(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Jk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=It.fromDate(r);return{timestampValue:ml(s.serializer,i)}}if(r instanceof It){const i=new It(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ml(s.serializer,i)}}if(r instanceof Td)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vi)return{bytesValue:Gv(s.serializer,r._byteString)};if(r instanceof en){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:rd(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof bd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.qu("VectorValues must only contain numeric values.");return Zh(a.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${vd(r)}`)}(t,e)}function wE(t,e){const n={};return bv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):es(t,(r,s)=>{const i=fc(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function AE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof It||t instanceof Td||t instanceof vi||t instanceof en||t instanceof Ed||t instanceof bd)}function Ad(t,e,n){if(!AE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=vd(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function rh(t,e,n){if((e=at(e))instanceof hc)return e._internalPath;if(typeof e=="string")return Rd(t,e);throw El("Field path arguments must be of type string or ",t,!1,void 0,n)}const lO=new RegExp("[~\\*/\\[\\]]");function Rd(t,e,n){if(e.search(lO)>=0)throw El(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hc(...e.split("."))._internalPath}catch{throw El(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function El(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ce(J.INVALID_ARGUMENT,a+t+c)}function RE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new en(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(PE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cO extends SE{data(){return super.data()}}function PE(t,e){return typeof e=="string"?Rd(t,e):e instanceof hc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ce(J.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class uO{convertValue(e,n="none"){switch(Wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return dt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(qr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw _e()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return es(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>dt(o.doubleValue));return new bd(i)}convertGeoPoint(e){return new Td(dt(e.latitude),dt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Xl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Co(e));default:return null}}convertTimestamp(e){const n=Hr(e);return new It(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=rt.fromString(e);Be(Jv(r));const s=new ko(r.get(1),r.get(3)),i=new de(r.popFirst(5));return s.isEqual(n)||pr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class NE extends SE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $a(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(PE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class $a extends NE{data(e={}){return super.data(e)}}class OE{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Xi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new $a(this._firestore,this._userDataWriter,r.key,r,new Xi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ce(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new $a(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Xi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new $a(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Xi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:hO(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function hO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _e()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t){t=on(t,en);const e=on(t.firestore,gr);return XN(uc(e),t._key).then(n=>xE(e,t,n))}class Sd extends uO{constructor(e){super(),this.firestore=e}convertBytes(e){return new vi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new en(this.firestore,null,n)}}function dO(t){t=on(t,Qo);const e=on(t.firestore,gr),n=uc(e),r=new Sd(e);return CE(t._query),JN(n,t._query).then(s=>new OE(e,r,t,s))}function fO(t,e,n){t=on(t,en);const r=on(t.firestore,gr),s=kE(t.converter,e);return pc(r,[IE(wd(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,yn.none())])}function Ba(t,e,n,...r){t=on(t,en);const s=on(t.firestore,gr),i=wd(s);let o;return o=typeof(e=at(e))=="string"||e instanceof hc?aO(i,"updateDoc",t._key,e,n,r):oO(i,"updateDoc",t._key,e),pc(s,[o.toMutation(t._key,yn.exists(!0))])}function pO(t){return pc(on(t.firestore,gr),[new ed(t._key,yn.none())])}function mO(t,e){const n=on(t.firestore,gr),r=ur(t),s=kE(t.converter,e);return pc(n,[IE(wd(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,yn.exists(!1))]).then(()=>r)}function DE(t,...e){var n,r,s;t=at(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||yg(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(yg(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(s=f.complete)===null||s===void 0?void 0:s.bind(f)}let c,u,h;if(t instanceof en)u=on(t.firestore,gr),h=Zl(t._key.path),c={next:f=>{e[o]&&e[o](xE(u,t,f))},error:e[o+1],complete:e[o+2]};else{const f=on(t,Qo);u=on(f.firestore,gr),h=f._query;const m=new Sd(u);c={next:g=>{e[o]&&e[o](new OE(u,m,f,g))},error:e[o+1],complete:e[o+2]},CE(t._query)}return function(m,g,P,C){const N=new yd(C),F=new gd(g,N,P);return m.asyncQueue.enqueueAndForget(async()=>fd(await vl(m),F)),()=>{N.eu(),m.asyncQueue.enqueueAndForget(async()=>pd(await vl(m),F))}}(uc(u),h,a,c)}function pc(t,e){return function(r,s){const i=new cr;return r.asyncQueue.enqueueAndForget(async()=>FN(await QN(r),s,i)),i.promise}(uc(t),e)}function xE(t,e,n){const r=n.docs.get(e._key),s=new Sd(t);return new NE(t,s,e._key,r,new Xi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ii=s})(Ss),Es(new Br("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new gr(new dk(r.getProvider("auth-internal")),new gk(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ce(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ko(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Un(Dm,"4.7.5",e),Un(Dm,"4.7.5","esm2017")})();var gO="firebase",_O="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Un(gO,_O,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME="firebasestorage.googleapis.com",VE="storageBucket",yO=2*60*1e3,vO=10*60*1e3,EO=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Gn{constructor(e,n,r=0){super(au(e),`Firebase Storage: ${n} (${au(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ct.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return au(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ze;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ze||(Ze={}));function au(t){return"storage/"+t}function Pd(){const t="An unknown error occurred, please check the error payload for server response.";return new ct(Ze.UNKNOWN,t)}function TO(t){return new ct(Ze.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function bO(t){return new ct(Ze.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function IO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ct(Ze.UNAUTHENTICATED,t)}function wO(){return new ct(Ze.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function AO(t){return new ct(Ze.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function UE(){return new ct(Ze.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function FE(){return new ct(Ze.CANCELED,"User canceled the upload/download.")}function RO(t){return new ct(Ze.INVALID_URL,"Invalid URL '"+t+"'.")}function SO(t){return new ct(Ze.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function PO(){return new ct(Ze.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+VE+"' property when initializing the app?")}function $E(){return new ct(Ze.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function CO(){return new ct(Ze.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function kO(){return new ct(Ze.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function NO(t){return new ct(Ze.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function sh(t){return new ct(Ze.INVALID_ARGUMENT,t)}function BE(){return new ct(Ze.APP_DELETED,"The Firebase app was deleted.")}function OO(t){return new ct(Ze.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ho(t,e){return new ct(Ze.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function qi(t){throw new ct(Ze.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=hn.makeFromUrl(e,n)}catch{return new hn(e,"")}if(r.path==="")return r;throw SO(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(R){R.path_=decodeURIComponent(R.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${s}/o${m}`,"i"),P={bucket:1,path:3},C=n===ME?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",F=new RegExp(`^https?://${C}/${s}/${N}`,"i"),w=[{regex:a,indices:c,postModify:i},{regex:g,indices:P,postModify:u},{regex:F,indices:{bucket:1,path:2},postModify:u}];for(let R=0;R<w.length;R++){const U=w[R],B=U.regex.exec(e);if(B){const b=B[U.indices.bucket];let _=B[U.indices.path];_||(_=""),r=new hn(b,_),U.postModify(r);break}}if(r==null)throw RO(e);return r}}class LO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DO(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...N){u||(u=!0,e.apply(null,N))}function f(N){s=setTimeout(()=>{s=null,t(g,c())},N)}function m(){i&&clearTimeout(i)}function g(N,...F){if(u){m();return}if(N){m(),h.call(null,N,...F);return}if(c()||o){m(),h.call(null,N,...F);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,f(w)}let P=!1;function C(N){P||(P=!0,m(),!u&&(s!==null?(N||(a=2),clearTimeout(s),f(0)):N||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,C(!0)},n),C}function xO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MO(t){return t!==void 0}function VO(t){return typeof t=="function"}function UO(t){return typeof t=="object"&&!Array.isArray(t)}function mc(t){return typeof t=="string"||t instanceof String}function vg(t){return Cd()&&t instanceof Blob}function Cd(){return typeof Blob<"u"}function Eg(t,e,n,r){if(r<e)throw sh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw sh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function jE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ys;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ys||(ys={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e,n,r,s,i,o,a,c,u,h,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,P)=>{this.resolve_=g,this.reject_=P,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new wa(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ys.NO_ERROR,c=i.getStatus();if(!a||HE(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===ys.ABORT;r(!1,new wa(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new wa(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());MO(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Pd();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?BE():FE();o(c)}else{const c=UE();o(c)}};this.canceled_?n(!1,new wa(!1,null,!0)):this.backoffId_=DO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class wa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function $O(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function BO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function jO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function HO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function qO(t,e,n,r,s,i,o=!0){const a=jE(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return jO(u,e),$O(u,n),BO(u,i),HO(u,r),new FO(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function GO(...t){const e=WO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Cd())return new Blob(t);throw new ct(Ze.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function KO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zO(t){if(typeof atob>"u")throw NO("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class lu{constructor(e,n){this.data=e,this.contentType=n||null}}function YO(t,e){switch(t){case xn.RAW:return new lu(qE(e));case xn.BASE64:case xn.BASE64URL:return new lu(WE(t,e));case xn.DATA_URL:return new lu(XO(e),JO(e))}throw Pd()}function qE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function QO(t){let e;try{e=decodeURIComponent(t)}catch{throw ho(xn.DATA_URL,"Malformed data URL.")}return qE(e)}function WE(t,e){switch(t){case xn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ho(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case xn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ho(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=zO(e)}catch(s){throw s.message.includes("polyfill")?s:ho(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class GE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ho(xn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=ZO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function XO(t){const e=new GE(t);return e.base64?WE(xn.BASE64,e.rest):QO(e.rest)}function JO(t){return new GE(t).contentType}function ZO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n){let r=0,s="";vg(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(vg(this.data_)){const r=this.data_,s=KO(r,e,n);return s===null?null:new Or(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Or(r,!0)}}static getBlob(...e){if(Cd()){const n=e.map(r=>r instanceof Or?r.data_:r);return new Or(GO.apply(null,n))}else{const n=e.map(o=>mc(o)?YO(xn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Or(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(t){let e;try{e=JSON.parse(t)}catch{return null}return UO(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function tL(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function zE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nL(t,e){return e}class Yt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||nL}}let Aa=null;function rL(t){return!mc(t)||t.length<2?t:zE(t)}function YE(){if(Aa)return Aa;const t=[];t.push(new Yt("bucket")),t.push(new Yt("generation")),t.push(new Yt("metageneration")),t.push(new Yt("name","fullPath",!0));function e(i,o){return rL(o)}const n=new Yt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Yt("size");return s.xform=r,t.push(s),t.push(new Yt("timeCreated")),t.push(new Yt("updated")),t.push(new Yt("md5Hash",null,!0)),t.push(new Yt("cacheControl",null,!0)),t.push(new Yt("contentDisposition",null,!0)),t.push(new Yt("contentEncoding",null,!0)),t.push(new Yt("contentLanguage",null,!0)),t.push(new Yt("contentType",null,!0)),t.push(new Yt("metadata","customMetadata",!0)),Aa=t,Aa}function sL(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new hn(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function iL(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return sL(r,t),r}function QE(t,e,n){const r=KE(e);return r===null?null:iL(t,r,n)}function oL(t,e,n,r){const s=KE(e);if(s===null||!mc(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,f=t.fullPath,m="/b/"+o(h)+"/o/"+o(f),g=Si(m,n,r),P=jE({alt:"media",token:u});return g+P})[0]}function XE(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Ns{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(t){if(!t)throw Pd()}function kd(t,e){function n(r,s){const i=QE(t,s,e);return hr(i!==null),i}return n}function aL(t,e){function n(r,s){const i=QE(t,s,e);return hr(i!==null),oL(i,s,t.host,t._protocol)}return n}function Xo(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=wO():s=IO():n.getStatus()===402?s=bO(t.bucket):n.getStatus()===403?s=AO(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Nd(t){const e=Xo(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=TO(t.path)),i.serverResponse=s.serverResponse,i}return n}function lL(t,e,n){const r=e.fullServerUrl(),s=Si(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Ns(s,i,kd(t,n),o);return a.errorHandler=Nd(e),a}function cL(t,e,n){const r=e.fullServerUrl(),s=Si(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Ns(s,i,aL(t,n),o);return a.errorHandler=Nd(e),a}function uL(t,e){const n=e.fullServerUrl(),r=Si(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,u){}const a=new Ns(r,s,o,i);return a.successCodes=[200,204],a.errorHandler=Nd(e),a}function hL(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function JE(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=hL(null,e)),r}function dL(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let R=0;R<2;R++)w=w+Math.random().toString().slice(2);return w}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=JE(e,r,s),h=XE(u,n),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+c+"--",g=Or.getBlob(f,r,m);if(g===null)throw $E();const P={name:u.fullPath},C=Si(i,t.host,t._protocol),N="POST",F=t.maxUploadRetryTime,H=new Ns(C,N,kd(t,n),F);return H.urlParams=P,H.headers=o,H.body=g.uploadData(),H.errorHandler=Xo(e),H}class Tl{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function Od(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{hr(!1)}return hr(!!n&&(e||["active"]).indexOf(n)!==-1),n}function fL(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=JE(e,r,s),a={name:o.fullPath},c=Si(i,t.host,t._protocol),u="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=XE(o,n),m=t.maxUploadRetryTime;function g(C){Od(C);let N;try{N=C.getResponseHeader("X-Goog-Upload-URL")}catch{hr(!1)}return hr(mc(N)),N}const P=new Ns(c,u,g,m);return P.urlParams=a,P.headers=h,P.body=f,P.errorHandler=Xo(e),P}function pL(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(u){const h=Od(u,["active","final"]);let f=null;try{f=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{hr(!1)}f||hr(!1);const m=Number(f);return hr(!isNaN(m)),new Tl(m,r.size(),h==="final")}const o="POST",a=t.maxUploadRetryTime,c=new Ns(n,o,i,a);return c.headers=s,c.errorHandler=Xo(e),c}const Tg=256*1024;function mL(t,e,n,r,s,i,o,a){const c=new Tl(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw CO();const u=c.total-c.current;let h=u;s>0&&(h=Math.min(h,s));const f=c.current,m=f+h;let g="";h===0?g="finalize":u===h?g="upload, finalize":g="upload";const P={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${c.current}`},C=r.slice(f,m);if(C===null)throw $E();function N(R,U){const B=Od(R,["active","final"]),b=c.current+h,_=r.size();let y;return B==="final"?y=kd(e,i)(R,U):y=null,new Tl(b,_,B==="final",y)}const F="POST",H=e.maxUploadRetryTime,w=new Ns(n,F,N,H);return w.headers=P,w.body=C.uploadData(),w.progressCallback=a||null,w.errorHandler=Xo(t),w}const rn={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function cu(t){switch(t){case"running":case"pausing":case"canceling":return rn.RUNNING;case"paused":return rn.PAUSED;case"success":return rn.SUCCESS;case"canceled":return rn.CANCELED;case"error":return rn.ERROR;default:return rn.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(e,n,r){if(VO(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class _L{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ys.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ys.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ys.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw qi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw qi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw qi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw qi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw qi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class yL extends _L{initXhr(){this.xhr_.responseType="text"}}function fs(){return new yL}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vL{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=YE(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(Ze.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(HE(s.status,[]))if(i)s=UE();else{this.sleepTime=Math.max(this.sleepTime*2,EO),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(Ze.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=fL(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,fs,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=pL(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,fs,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Tg*this._chunkMultiplier,n=new Tl(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=mL(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,fs,s,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Tg*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=lL(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,fs,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=dL(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,fs,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=FE(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=cu(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new gL(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(cu(this._state)){case rn.SUCCESS:$s(this._resolve.bind(null,this.snapshot))();break;case rn.CANCELED:case rn.ERROR:const n=this._reject;$s(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(cu(this._state)){case rn.RUNNING:case rn.PAUSED:e.next&&$s(e.next.bind(e,this.snapshot))();break;case rn.SUCCESS:e.complete&&$s(e.complete.bind(e))();break;case rn.CANCELED:case rn.ERROR:e.error&&$s(e.error.bind(e,this._error))();break;default:e.error&&$s(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n){this._service=e,n instanceof hn?this._location=n:this._location=hn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ws(e,n)}get root(){const e=new hn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return zE(this._location.path)}get storage(){return this._service}get parent(){const e=eL(this._location.path);if(e===null)return null;const n=new hn(this._location.bucket,e);return new ws(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw OO(e)}}function EL(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new vL(t,new Or(e),n)}function TL(t){t._throwIfRoot("getDownloadURL");const e=cL(t.storage,t._location,YE());return t.storage.makeRequestWithTokens(e,fs).then(n=>{if(n===null)throw kO();return n})}function bL(t){t._throwIfRoot("deleteObject");const e=uL(t.storage,t._location);return t.storage.makeRequestWithTokens(e,fs)}function IL(t,e){const n=tL(t._location.path,e),r=new hn(t._location.bucket,n);return new ws(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wL(t){return/^[A-Za-z]+:\/\//.test(t)}function AL(t,e){return new ws(t,e)}function ZE(t,e){if(t instanceof Ld){const n=t;if(n._bucket==null)throw PO();const r=new ws(n,n._bucket);return e!=null?ZE(r,e):r}else return e!==void 0?IL(t,e):t}function RL(t,e){if(e&&wL(e)){if(t instanceof Ld)return AL(t,e);throw sh("To use ref(service, url), the first argument must be a Storage instance.")}else return ZE(t,e)}function bg(t,e){const n=e==null?void 0:e[VE];return n==null?null:hn.makeFromBucketSpec(n,t)}function SL(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Sy(s,t.app.options.projectId))}class Ld{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=ME,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yO,this._maxUploadRetryTime=vO,this._requests=new Set,s!=null?this._bucket=hn.makeFromBucketSpec(s,this._host):this._bucket=bg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=hn.makeFromBucketSpec(this._url,e):this._bucket=bg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Eg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Eg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ws(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new LO(BE());{const o=qO(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Ig="@firebase/storage",wg="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eT="storage";function PL(t,e,n){return t=at(t),EL(t,e,n)}function CL(t){return t=at(t),TL(t)}function kL(t){return t=at(t),bL(t)}function ih(t,e){return t=at(t),RL(t,e)}function NL(t=Uh(),e){t=at(t);const r=Wl(t,eT).getImmediate({identifier:e}),s=wy("storage");return s&&OL(r,...s),r}function OL(t,e,n,r={}){SL(t,e,n,r)}function LL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ld(n,r,s,e,Ss)}function DL(){Es(new Br(eT,LL,"PUBLIC").setMultipleInstances(!0)),Un(Ig,wg,""),Un(Ig,wg,"esm2017")}DL();const xL={apiKey:"AIzaSyCaDdwjnRGUG4_YmPY7rRhZFw4Y-5Mmq68",authDomain:"persian-library.firebaseapp.com",projectId:"persian-library",storageBucket:"persian-library.firebasestorage.app",messagingSenderId:"374242993168",appId:"1:374242993168:web:1a71b65d1b43e6406bd695"},Dd=ky(xL),ja=lk(Dd),mn=tO(Dd),oh=NL(Dd);function tT(){const t=Ce(null),e=Ce(!0),n=async(o,a)=>{await fO(ur(mn,"users",o),{...a,role:"user",createdAt:new Date,updatedAt:new Date})};return{currentUser:t,loading:e,signUp:async(o,a,c)=>{const u=await GP(ja,o,a);await n(u.user.uid,{email:o,name:c,role:"user"})},signIn:async(o,a)=>{const c=await KP(ja,o,a),u=await LE(ur(mn,"users",c.user.uid));return u.exists()||await n(c.user.uid,{email:o,name:o.split("@")[0],role:"user"}),u.data()},signOut:()=>XP(ja)}}const gc=yR("auth",()=>{const t=Ce(null),{signIn:e,signOut:n}=tT();return{user:t,signIn:async(c,u)=>{const h=await e(c,u);t.value=h},signOut:async()=>{await n(),t.value=null},isAuthenticated:()=>!!t.value,isAdmin:()=>{var c;return((c=t.value)==null?void 0:c.role)==="admin"},isUser:()=>{var c;return((c=t.value)==null?void 0:c.role)==="user"}}}),ML={class:"font-[Vazir]"},VL={class:"bg-white shadow-sm"},UL={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"},FL={class:"flex justify-between items-center"},$L={key:1,class:"flex justify-center items-center min-h-screen"},BL={__name:"App",setup(t){const{locale:e}=dn(),n=Ce(e.value),r=gc(),s=Ul();Ei(()=>{QP(ja,async a=>{if(a){const c=await LE(ur(mn,"users",a.uid));c.exists()&&(r.user={id:a.uid,...c.data()})}else r.user=null;r.loading=!1})});const i=()=>{e.value=n.value,localStorage.setItem("userLocale",n.value),document.documentElement.dir=n.value==="fa"?"rtl":"ltr"};document.documentElement.dir=n.value==="fa"?"rtl":"ltr";const o=async()=>{try{await r.signOut(),s.push("/")}catch(a){console.error("Logout error:",a)}};return(a,c)=>{const u=Ya("RouterLink"),h=Ya("RouterView");return pe(),Ae("div",ML,[x("nav",VL,[x("div",UL,[x("div",FL,[Pe(" Language switcher "),nt(x("select",{"onUpdate:modelValue":c[0]||(c[0]=f=>n.value=f),onChange:i,class:"rounded-md border-gray-300 text-black"},c[1]||(c[1]=[x("option",{value:"fa"},"فارسی",-1),x("option",{value:"en"},"English",-1)]),544),[[ai,n.value]]),ot(u,{to:"/",class:"text-indigo-600 hover:text-indigo-800"},{default:Vn(()=>[ar(ee(a.$t("routes.home")),1)]),_:1}),x("div",null,[Ie(r).isAuthenticated()&&Ie(r).isAdmin()?(pe(),Rn(u,{key:0,to:"/admin",class:"text-indigo-600 hover:text-indigo-800 mr-4"},{default:Vn(()=>[ar(ee(a.$t("routes.adminDashboard")),1)]),_:1})):Pe("v-if",!0),Ie(r).isAuthenticated()?(pe(),Ae("button",{key:1,onClick:o,class:"text-red-600 hover:text-red-800"},ee(a.$t("routes.logout")),1)):(pe(),Rn(u,{key:2,to:"/login",class:"text-indigo-600 hover:text-indigo-800"},{default:Vn(()=>[ar(ee(a.$t("routes.login")),1)]),_:1}))])])])]),Ie(r).loading?(pe(),Ae("div",$L,ee(a.$t("app.loading")),1)):(pe(),Rn(h,{key:0}))])}}},jL={class:"bg-gray-50 border-t border-gray-200 mt-auto"},HL={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},qL={class:"md:flex md:justify-between"},WL={class:"mb-4 md:mb-0"},GL={class:"text-sm font-semibold text-gray-700"},KL={class:"mt-2 text-sm text-gray-500"},zL={class:"max-w-md"},YL={class:"text-sm font-semibold text-gray-700"},QL={class:"mt-2 text-sm text-gray-500"},XL={class:"mt-2 text-sm text-gray-500"},JL={class:"mt-2 text-sm text-gray-500"},ZL={class:"mt-8 border-t border-gray-200 pt-4"},eD={class:"text-xs text-gray-500 text-center"},tD={__name:"BaseFooter",setup(t){return dn(),(e,n)=>(pe(),Ae("footer",jL,[x("div",HL,[x("div",qL,[Pe(" Project Info "),x("div",WL,[x("h3",GL,ee(e.$t("footer.title")),1),x("p",KL,ee(e.$t("footer.description")),1)]),Pe(" Privacy Info "),x("div",zL,[x("h3",YL,ee(e.$t("footer.dataPrivacy.title")),1),x("p",QL,ee(e.$t("footer.dataPrivacy.storage")),1),x("p",XL,ee(e.$t("footer.dataPrivacy.firebase")),1),x("p",JL,ee(e.$t("footer.dataPrivacy.fairUse")),1)])]),Pe(" Copyright "),x("div",ZL,[x("p",eD,ee(e.$t("footer.copyright",{year:new Date().getFullYear()})),1)])])]))}},nD={class:"min-h-screen bg-gray-50 text-black"},rD={class:"max-w-7xl mx-auto"},_c={__name:"BaseLayout",setup(t){return(e,n)=>(pe(),Ae(ft,null,[x("div",nD,[x("div",rD,[Ob(e.$slots,"default")])]),ot(tD)],64))}},sD={class:"bg-white p-4 rounded-lg shadow-sm mb-6"},iD={class:"flex flex-wrap gap-4"},oD={class:"flex-1 min-w-[200px]"},aD={class:"block text-sm font-medium text-gray-700 mb-2"},lD={value:"all"},cD={value:"available"},uD={value:"borrowed"},hD={class:"flex-1 min-w-[200px]"},dD={class:"block text-sm font-medium text-gray-700 mb-2"},fD={value:"all"},pD=["value"],mD={class:"flex flex-wrap gap-2 items-end flex-1 min-w-[200px]"},gD={__name:"QuickFilters",props:{books:{type:Array,required:!0}},emits:["update:filtered-books"],setup(t,{emit:e}){dn();const n=t,r=e,s=Ce("all"),i=Ce("all"),o=Ce(!1),a=ze(()=>{const m=new Set(n.books.map(g=>g.age).filter(Boolean));return Array.from(m).sort()}),c=()=>{let m=[...n.books];if(s.value!=="all"&&(m=m.filter(g=>s.value==="available"?g.isAvailable:!g.isAvailable)),i.value!=="all"&&(m=m.filter(g=>g.age===i.value)),o.value){const g=new Date;g.setDate(g.getDate()-30),m=m.filter(P=>{var N;const C=(N=P.createdAt)==null?void 0:N.toDate();return C&&C>g})}r("update:filtered-books",m)},u=()=>{c()},h=()=>{o.value=!o.value,c()},f=()=>{s.value="all",i.value="all",o.value=!1,c()};return An(()=>n.books,()=>{c()},{deep:!0}),(m,g)=>(pe(),Ae("div",sD,[x("div",iD,[Pe(" Availability Filter "),x("div",oD,[x("label",aD,ee(m.$t("filters.availability")),1),nt(x("select",{"onUpdate:modelValue":g[0]||(g[0]=P=>s.value=P),onChange:u,class:"w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},[x("option",lD,ee(m.$t("filters.all")),1),x("option",cD,ee(m.$t("filters.available")),1),x("option",uD,ee(m.$t("filters.borrowed")),1)],544),[[ai,s.value]])]),Pe(" Age Group Filter "),x("div",hD,[x("label",dD,ee(m.$t("filters.ageGroup")),1),nt(x("select",{"onUpdate:modelValue":g[1]||(g[1]=P=>i.value=P),onChange:u,class:"w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},[x("option",fD,ee(m.$t("filters.all")),1),(pe(!0),Ae(ft,null,ii(a.value,P=>(pe(),Ae("option",{key:P,value:P},ee(P),9,pD))),128))],544),[[ai,i.value]])]),Pe(" Quick Filter Buttons "),x("div",mD,[x("button",{onClick:h,class:Rs(["px-4 py-2 rounded-md text-sm font-medium",o.value?"bg-indigo-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"])},ee(m.$t("filters.newArrivals")),3),Pe(" Reset Filters Button "),x("button",{onClick:f,class:"px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"},ee(m.$t("filters.reset")),1)])])]))}},_D={class:"bg-white shadow-sm"},yD={class:"max-w-7xl mx-auto py-4"},vD={class:"text-3xl font-bold text-gray-900 text-center"},ED={class:"max-w-7xl mx-auto py-4"},TD={class:"mb-4 bg-white px-4 py-4 rounded-lg"},bD={class:"relative"},ID=["placeholder"],wD={class:"mt-2 text-sm text-gray-600"},AD={key:0,class:"mb-4 p-4 bg-red-100 text-red-700 rounded-md"},RD={key:1,class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"},SD={class:"aspect-w-4 aspect-h-3 w-full"},PD=["src","alt"],CD={class:"p-4 flex flex-col flex-grow"},kD={class:"p-4 flex-grow"},ND={class:"text-lg font-semibold text-gray-900"},OD={class:"text-sm text-gray-600"},LD={key:0,class:"text-sm text-gray-600"},DD={key:1,class:"text-sm text-gray-600"},xD={key:2,class:"text-sm text-gray-600"},MD={class:"text-sm text-gray-600 mt-2"},VD={class:"mt-auto"},UD={class:"flex items-center justify-center"},FD=["onClick","disabled"],$D=["onClick"],BD=["onClick"],jD={key:3,class:"mt-3 text-sm text-center text-gray-600"},HD={key:4,disabled:"",class:"mt-3 w-full px-4 py-2 rounded-md text-sm font-medium text-white bg-gray-400 cursor-not-allowed"},qD={key:2,class:"text-center py-10"},WD={class:"text-gray-500"},GD={__name:"HomePage",setup(t){const{t:e}=dn(),n=Ul(),r=gc(),s=Ce([]),i=Ce(null),o=Ce(""),a=Ce([]),c=w=>w.status==="pending_return"?"text-orange-600":w.isAvailable?"text-green-600":"text-red-600",u=w=>{var R,U,B,b;return w.status==="pending_return"?w.borrowerId===((R=r.user)==null?void 0:R.id)?e("home.status.returnPending"):w.ownerId===((U=r.user)==null?void 0:U.id)?e("home.status.confirmReturn"):e("home.status.pendingReturn"):w.isAvailable?e("home.status.available"):w.borrowerId===((B=r.user)==null?void 0:B.id)?e("home.status.youBorrowed"):w.ownerId===((b=r.user)==null?void 0:b.id)?e("home.status.pendingReturn"):e("home.status.currentlyBorrowed")},h=w=>{var R;return w.isAvailable&&w.ownerId!==((R=r.user)==null?void 0:R.id)&&w.status!=="pending_return"},f=w=>{var R;return!w.isAvailable&&w.borrowerId===((R=r.user)==null?void 0:R.id)&&w.status!=="pending_return"},m=w=>{var R;return!w.isAvailable&&w.ownerId===((R=r.user)==null?void 0:R.id)&&w.status==="pending_return"},g=w=>{var R;return w.status==="pending_return"&&w.borrowerId===((R=r.user)==null?void 0:R.id)},P=ze(()=>{const w=o.value.toLowerCase().trim(),R=a.value.length>0?a.value:s.value;return w?R.filter(U=>Object.values(U).some(B=>typeof B=="string"?B.toLowerCase().includes(w):!1)):R}),C=w=>{a.value=w};Ei(()=>{try{const w=DE(cc(mn,"books"),R=>{s.value=R.docs.map(U=>({id:U.id,...U.data()})),i.value=null},R=>{console.error("Firestore error:",R),i.value="Error loading books. Please try again later."});return()=>w()}catch(w){console.error("Error setting up listener:",w),i.value="Error connecting to database. Please try again later."}});const N=async w=>{try{const R=ur(mn,"books",w.id);await Ba(R,{returnedAt:new Date,status:"pending_return"}),alert(e("home.messages.returnSuccess"))}catch(R){console.error("Error returning book:",R),alert(e("home.messages.failed"))}},F=async w=>{try{const R=ur(mn,"books",w.id);await Ba(R,{isAvailable:!0,borrowerId:null,borrowedAt:null,returnedAt:null,status:"available"}),alert(e("home.messages.receiveSuccess"))}catch(R){console.error("Error receiving book:",R),alert(e("home.messages.failed"))}},H=async w=>{if(!r.user){n.push("/login");return}try{const R=ur(mn,"books",w.id);await Ba(R,{isAvailable:!1,borrowerId:r.user.id,borrowedAt:new Date})}catch(R){console.error("Error updating book:",R),alert(e("home.messages.failed"))}};return(w,R)=>(pe(),Rn(_c,null,{default:Vn(()=>[Pe(" Header "),x("header",_D,[x("div",yD,[x("h1",vD,ee(w.$t("app.title")),1)])]),Pe(" Main Content "),x("main",ED,[Pe(" Search Input "),x("div",TD,[x("div",bD,[nt(x("input",{type:"text","onUpdate:modelValue":R[0]||(R[0]=U=>o.value=U),placeholder:w.$t("home.searchPlaceholder"),class:"w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"},null,8,ID),[[St,o.value]]),R[1]||(R[1]=x("div",{class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[x("svg",{class:"h-5 w-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[x("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1))]),Pe(" Search Results Count "),x("p",wD,ee(w.$t("home.booksCount",{filtered:P.value.length,total:s.value.length})),1)]),Pe(" Quick Filters "),ot(gD,{books:s.value,"onUpdate:filteredBooks":C},null,8,["books"]),Pe(" Error message display "),i.value?(pe(),Ae("div",AD,ee(i.value),1)):Pe("v-if",!0),Pe(" Book Gallery Grid "),i.value?Pe("v-if",!0):(pe(),Ae("div",RD,[(pe(!0),Ae(ft,null,ii(P.value,U=>(pe(),Ae("div",{seLa:"",key:U.id,class:"bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg duration-300 hover:scale-105 transition-transform flex flex-col"},[Pe(" Book Cover Image "),x("div",SD,[x("img",{src:U.coverImage,alt:U.title,class:"w-full h-full object-cover"},null,8,PD)]),Pe(" Book Information "),x("div",CD,[x("div",kD,[Pe(" Align text to right for Persian "),x("h3",ND,ee(U.title),1),x("p",OD,"نویسنده: "+ee(U.author),1),U.translator?(pe(),Ae("p",LD,ee(w.$t("home.bookTranslatorLabel",{translator:U.translator})),1)):Pe("v-if",!0),U.illustrator?(pe(),Ae("p",DD,ee(w.$t("home.bookIllustratorLabel",{illustrator:U.illustrator})),1)):Pe("v-if",!0),U.age?(pe(),Ae("p",xD,ee(w.$t("home.bookAgeLabel",{age:U.age})),1)):Pe("v-if",!0),x("p",MD,ee(U.description),1)]),Pe(" Availability Status "),x("div",VD,[x("div",UD,[x("span",{class:Rs(["text-sm",c(U)])},ee(u(U)),3)]),Pe(" Action Button "),h(U)?(pe(),Ae("button",{key:0,onClick:B=>H(U),disabled:!U.isAvailable,class:"mt-3 w-full px-4 py-2 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"},ee(w.$t("home.borrowBook")),9,FD)):f(U)?(pe(),Ae("button",{key:1,onClick:B=>N(U),class:"mt-3 w-full px-4 py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700"},ee(w.$t("home.returnBook")),9,$D)):m(U)?(pe(),Ae("button",{key:2,onClick:B=>F(U),class:"mt-3 w-full px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"},ee(w.$t("home.receiveBook")),9,BD)):g(U)?(pe(),Ae("div",jD,ee(w.$t("home.status.waitingForOwner")),1)):(pe(),Ae("button",HD,ee(w.$t("home.notAvailable")),1))])])]))),128))])),Pe(" No Results Message "),P.value.length===0&&!i.value?(pe(),Ae("div",qD,[x("p",WD,ee(w.$t("home.noBooksFound")),1)])):Pe("v-if",!0)])]),_:1}))}},KD={class:"bg-white shadow-sm"},zD={class:"max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8"},YD={class:"flex justify-between items-center"},QD={class:"text-3xl font-bold text-gray-900"},XD={__name:"AdminHeader",setup(t){return dn(),(e,n)=>(pe(),Ae("header",KD,[x("div",zD,[x("div",YD,[x("h1",QD,ee(e.$t("admin.title")),1)])])]))}};function JD(){const{t}=dn(),e=Ce({title:"",author:"",translator:"",illustrator:"",age:"",description:"",coverImage:"",isAvailable:!0,ownerId:"",borrowerId:null}),n=Ce(0),r=["image/jpeg","image/png","image/webp"],s=async a=>{const c=a.target.files[0];if(c){if(!r.includes(c.type)){alert(t("admin.uploadImage.formatError")),a.target.value="";return}try{const u=c.name.split(".").pop(),h=`covers/${Date.now()}-${Math.random().toString(36).substring(2)}.${u}`,f=ih(oh,h);PL(f,c).on("state_changed",g=>{n.value=Math.round(g.bytesTransferred/g.totalBytes*100)},g=>{console.error("Upload failed:",g),alert(t("admin.uploadImage.failed"))},async()=>{try{await new Promise(C=>setTimeout(C,2e3));const g=ih(oh,`covers/resized_${h.split("/").pop()}`),P=await CL(g);e.value.coverImage=P,n.value=0}catch(g){console.error("Error getting resized image URL:",g),alert(t("admin.uploadImage.failed"))}})}catch(u){console.error("Error handling image upload:",u),alert(t("admin.uploadImage.failed"))}}},i=async()=>{try{await mO(cc(mn,"books"),{...e.value,isAvailable:!0,createdAt:new Date}),e.value={title:"",author:"",translator:"",illustrator:"",age:"",description:"",coverImage:"",isAvailable:!0,ownerId:"",borrowerId:null},alert(t("admin.addBook.messages.success"))}catch(a){console.error("Error adding book:",a),alert(t("admin.addBook.messages.failed"))}},o=ze(()=>n.value>0&&n.value<100);return{newBook:e,uploadProgress:n,isUploading:o,handleImageUpload:s,handleSubmit:i}}function xd(){const t=Ce([]),e=Ce(!0),n=Ce(null);Ei(()=>{r()});const r=async()=>{try{e.value=!0;const s=await dO(cc(mn,"users"));t.value=s.docs.map(i=>({id:i.id,...i.data()}))}catch(s){console.error("Error fetching users:",s),n.value=s}finally{e.value=!1}};return{users:t,loading:e,error:n,fetchUsers:r}}const ZD={class:"bg-white rounded-lg shadow p-6 mb-8"},ex={class:"text-xl font-semibold mb-4"},tx={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},nx={class:"block text-sm font-medium text-gray-700"},rx={class:"block text-sm font-medium text-gray-700"},sx={value:""},ix=["value"],ox={class:"block text-sm font-medium text-gray-700"},ax={class:"block text-sm font-medium text-gray-700"},lx={class:"block text-sm font-medium text-gray-700"},cx={class:"block text-sm font-medium text-gray-700"},ux={class:"block text-sm font-medium text-gray-700"},hx={class:"mt-1 flex items-center space-x-4"},dx={key:0,class:"text-sm text-gray-500"},fx={key:1,class:"h-20 w-20"},px=["src"],mx={class:"md:col-span-2"},gx={class:"block text-sm font-medium text-gray-700"},_x={class:"flex justify-end"},yx=["disabled"],vx={__name:"AddBookForm",setup(t){const{newBook:e,handleImageUpload:n,handleSubmit:r,uploadProgress:s,isUploading:i}=JD(),{users:o}=xd();return(a,c)=>(pe(),Ae("div",ZD,[x("h2",ex,ee(a.$t("admin.addBook.title")),1),x("form",{onSubmit:c[8]||(c[8]=xl((...u)=>Ie(r)&&Ie(r)(...u),["prevent"])),class:"space-y-4"},[x("div",tx,[x("div",null,[x("label",nx,ee(a.$t("admin.addBook.form.title")),1),nt(x("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>Ie(e).title=u),type:"text",required:"",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[St,Ie(e).title]])]),x("div",null,[x("label",rx,ee(a.$t("admin.addBook.form.owner")),1),nt(x("select",{"onUpdate:modelValue":c[1]||(c[1]=u=>Ie(e).ownerId=u),required:"",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},[x("option",sx,ee(a.$t("admin.addBook.form.selectOwner")),1),(pe(!0),Ae(ft,null,ii(Ie(o),u=>(pe(),Ae("option",{key:u.id,value:u.id},ee(u.name),9,ix))),128))],512),[[ai,Ie(e).ownerId]])]),x("div",null,[x("label",ox,ee(a.$t("admin.addBook.form.author")),1),nt(x("input",{"onUpdate:modelValue":c[2]||(c[2]=u=>Ie(e).author=u),type:"text",required:"",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[St,Ie(e).author]])]),x("div",null,[x("label",ax,ee(a.$t("admin.addBook.form.translator")),1),nt(x("input",{"onUpdate:modelValue":c[3]||(c[3]=u=>Ie(e).translator=u),type:"text",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[St,Ie(e).translator]])]),x("div",null,[x("label",lx,ee(a.$t("admin.addBook.form.illustrator")),1),nt(x("input",{"onUpdate:modelValue":c[4]||(c[4]=u=>Ie(e).illustrator=u),type:"text",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[St,Ie(e).illustrator]])]),x("div",null,[x("label",cx,ee(a.$t("admin.addBook.form.ageGroup")),1),nt(x("input",{"onUpdate:modelValue":c[5]||(c[5]=u=>Ie(e).age=u),type:"text",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[St,Ie(e).age]])]),x("div",null,[x("label",ux,ee(a.$t("admin.addBook.form.coverImage")),1),x("div",hx,[x("input",{type:"file",accept:".jpg,.jpeg,.png,.webp",onChange:c[6]||(c[6]=(...u)=>Ie(n)&&Ie(n)(...u)),class:"block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"},null,32),Ie(s)>0&&Ie(s)<100?(pe(),Ae("div",dx,ee(a.$t("admin.addBook.form.uploadProgress",{progress:Ie(s)})),1)):Pe("v-if",!0),Ie(e).coverImage?(pe(),Ae("div",fx,[x("img",{src:Ie(e).coverImage,alt:"Preview",class:"h-full w-full object-cover rounded-md"},null,8,px)])):Pe("v-if",!0)])]),x("div",mx,[x("label",gx,ee(a.$t("admin.addBook.form.description")),1),nt(x("textarea",{"onUpdate:modelValue":c[7]||(c[7]=u=>Ie(e).description=u),rows:"3",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[St,Ie(e).description]])])]),x("div",_x,[x("button",{type:"submit",disabled:Ie(i),class:Rs(["px-4 py-2 rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed",Ie(i)?"bg-gray-400":"bg-indigo-600 hover:bg-indigo-700"])},ee(Ie(i)?a.$t("admin.addBook.form.waitForUpload"):a.$t("admin.addBook.form.submit")),11,yx)])],32)]))}},Ex={key:0,class:"fixed inset-0 z-50 overflow-y-auto"},Tx={class:"flex items-center justify-center min-h-screen"},bx={class:"relative bg-white rounded-lg w-full max-w-2xl mx-4 p-6"},Ix={class:"text-xl font-semibold mb-4"},wx={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},Ax={class:"block text-sm font-medium text-gray-700"},Rx={class:"block text-sm font-medium text-gray-700"},Sx={value:""},Px=["value"],Cx={class:"block text-sm font-medium text-gray-700"},kx={value:""},Nx=["value"],Ox={class:"block text-sm font-medium text-gray-700"},Lx={class:"block text-sm font-medium text-gray-700"},Dx={class:"block text-sm font-medium text-gray-700"},xx={class:"block text-sm font-medium text-gray-700"},Mx={class:"block text-sm font-medium text-gray-700"},Vx={class:"mt-1 flex items-center space-x-4"},Ux={key:0,class:"h-20 w-20"},Fx=["src"],$x={class:"md:col-span-2"},Bx={class:"block text-sm font-medium text-gray-700"},jx={class:"flex justify-end space-x-3"},Hx=["disabled"],qx={__name:"EditBookModal",props:{show:Boolean,book:{type:Object,required:!0}},emits:["close","update:book"],setup(t,{emit:e}){const{t:n}=dn(),{users:r}=xd(),s=t,i=e,o=Ce({}),a=Ce(!1);An(()=>s.book,u=>{u&&(o.value={...u})},{immediate:!0,deep:!0}),An(()=>s.show,u=>{u&&(o.value={...s.book})});const c=async()=>{try{a.value=!0;const u=ur(mn,"books",o.value.id);await Ba(u,{...o.value,updatedAt:new Date}),i("update:book",o.value),i("close")}catch(u){console.error("Error updating book:",u),alert(n("admin.editBook.error"))}finally{a.value=!1}};return(u,h)=>t.show?(pe(),Ae("div",Ex,[x("div",Tx,[Pe(" Backdrop "),h[10]||(h[10]=x("div",{class:"fixed inset-0 bg-black opacity-50"},null,-1)),Pe(" Modal "),x("div",bx,[x("h2",Ix,ee(u.$t("admin.editBook.title")),1),x("form",{onSubmit:xl(c,["prevent"]),class:"space-y-4"},[x("div",wx,[x("div",null,[x("label",Ax,ee(u.$t("admin.addBook.form.title")),1),nt(x("input",{"onUpdate:modelValue":h[0]||(h[0]=f=>o.value.title=f),type:"text",required:"",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[St,o.value.title]])]),x("div",null,[x("label",Rx,ee(u.$t("admin.addBook.form.owner")),1),nt(x("select",{"onUpdate:modelValue":h[1]||(h[1]=f=>o.value.ownerId=f),required:"",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},[x("option",Sx,ee(u.$t("admin.addBook.form.selectOwner")),1),(pe(!0),Ae(ft,null,ii(Ie(r),f=>(pe(),Ae("option",{key:f.id,value:f.id},ee(f.name),9,Px))),128))],512),[[ai,o.value.ownerId]])]),x("div",null,[x("label",Cx,ee(u.$t("admin.addBook.form.borrower")),1),nt(x("select",{"onUpdate:modelValue":h[2]||(h[2]=f=>o.value.borrowerId=f),class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},[x("option",kx,ee(u.$t("admin.addBook.form.selectBorrower")),1),(pe(!0),Ae(ft,null,ii(Ie(r),f=>(pe(),Ae("option",{key:f.id,value:f.id},ee(f.name),9,Nx))),128))],512),[[ai,o.value.borrowerId]])]),x("div",null,[x("label",Ox,ee(u.$t("admin.addBook.form.author")),1),nt(x("input",{"onUpdate:modelValue":h[3]||(h[3]=f=>o.value.author=f),type:"text",required:"",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[St,o.value.author]])]),x("div",null,[x("label",Lx,ee(u.$t("admin.addBook.form.translator")),1),nt(x("input",{"onUpdate:modelValue":h[4]||(h[4]=f=>o.value.translator=f),type:"text",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[St,o.value.translator]])]),x("div",null,[x("label",Dx,ee(u.$t("admin.addBook.form.illustrator")),1),nt(x("input",{"onUpdate:modelValue":h[5]||(h[5]=f=>o.value.illustrator=f),type:"text",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[St,o.value.illustrator]])]),x("div",null,[x("label",xx,ee(u.$t("admin.addBook.form.ageGroup")),1),nt(x("input",{"onUpdate:modelValue":h[6]||(h[6]=f=>o.value.age=f),type:"text",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[St,o.value.age]])]),x("div",null,[x("label",Mx,ee(u.$t("admin.addBook.form.coverImage")),1),x("div",Vx,[x("input",{type:"file",accept:".jpg,.jpeg,.png,.webp",onChange:h[7]||(h[7]=(...f)=>u.handleImageUpload&&u.handleImageUpload(...f)),class:"block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"},null,32),o.value.coverImage?(pe(),Ae("div",Ux,[x("img",{src:o.value.coverImage,alt:"Preview",class:"h-full w-full object-cover rounded-md"},null,8,Fx)])):Pe("v-if",!0)])]),x("div",$x,[x("label",Bx,ee(u.$t("admin.addBook.form.description")),1),nt(x("textarea",{"onUpdate:modelValue":h[8]||(h[8]=f=>o.value.description=f),rows:"3",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[St,o.value.description]])])]),x("div",jx,[x("button",{type:"button",onClick:h[9]||(h[9]=f=>u.$emit("close")),class:"px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"},ee(u.$t("common.cancel")),1),x("button",{type:"submit",disabled:a.value,class:"px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md disabled:opacity-50"},ee(u.$t("common.save")),9,Hx)])],32)])])])):Pe("v-if",!0)}},Wx={class:"bg-white rounded-lg shadow overflow-hidden"},Gx={class:"text-xl font-semibold p-6"},Kx={class:"min-w-full divide-y divide-gray-200"},zx={class:"bg-gray-50"},Yx={class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},Qx={class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},Xx={class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},Jx={class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},Zx={class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},eM={class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},tM={class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},nM={class:"bg-white divide-y divide-gray-200"},rM={class:"px-6 py-4"},sM={class:"px-6 py-4"},iM={class:"px-6 py-4"},oM={class:"px-6 py-4"},aM={class:"px-6 py-4"},lM={class:"px-6 py-4 text-sm text-gray-500"},cM={class:"px-6 py-4"},uM=["onClick"],hM=["onClick"],dM={__name:"BooksTable",props:{books:{type:Array,required:!0}},emits:["delete-book","update-book"],setup(t,{emit:e}){const{t:n}=dn(),r=Ce(!1),s=Ce(null),i=t,o=e,{users:a}=xd(),c=C=>C.status==="pending_return"&&C.returnedAt?n("admin.manageBooks.table.returnRequestedAt",{date:new Date(C.returnedAt.toDate()).toLocaleDateString()}):C.borrowedAt?n("admin.manageBooks.table.borrowedAt",{date:new Date(C.borrowedAt.toDate()).toLocaleDateString()}):"-",u=C=>C.status==="pending_return"?"text-orange-600":C.isAvailable?"text-green-600":"text-red-600",h=C=>{switch(C.status){case"pending_return":return n("admin.manageBooks.table.status.pendingReturn");case"available":return n("admin.manageBooks.table.status.available");default:return C.isAvailable?n("admin.manageBooks.table.status.available"):n("admin.manageBooks.table.status.borrowed")}},f=C=>{if(!C)return null;const N=a.value.find(F=>F.id===C);return N?N.name:null};ze(()=>i.books.map(C=>({...C,owner:a.value.find(N=>N.id===C.ownerId),borrower:a.value.find(N=>N.id===C.borrowerId)})));const m=C=>{s.value=JSON.parse(JSON.stringify(C)),r.value=!0},g=()=>{r.value=!1,setTimeout(()=>{s.value=null},200)},P=C=>{o("update-book",C)};return(C,N)=>(pe(),Ae("div",Wx,[x("h2",Gx,ee(C.$t("admin.manageBooks.title")),1),x("table",Kx,[x("thead",zx,[x("tr",null,[x("th",Yx,ee(C.$t("admin.manageBooks.table.title")),1),x("th",Qx,ee(C.$t("admin.manageBooks.table.author")),1),x("th",Xx,ee(C.$t("admin.manageBooks.table.owner")),1),x("th",Jx,ee(C.$t("admin.manageBooks.table.borrower")),1),x("th",Zx,ee(C.$t("admin.manageBooks.table.status.title")),1),x("th",eM,ee(C.$t("admin.manageBooks.table.lastAction")),1),x("th",tM,ee(C.$t("admin.manageBooks.table.actions")),1)])]),x("tbody",nM,[(pe(!0),Ae(ft,null,ii(t.books,F=>(pe(),Ae("tr",{key:F.id},[x("td",rM,ee(F.title),1),x("td",sM,ee(F.author),1),x("td",iM,ee(f(F.ownerId)||"-"),1),x("td",oM,ee(f(F.borrowerId)||"-"),1),x("td",aM,[x("span",{class:Rs(u(F))},ee(h(F)),3)]),x("td",lM,ee(c(F)),1),x("td",cM,[x("button",{onClick:H=>C.deleteBook(F),class:"text-red-600 hover:text-red-800 mr-2"},ee(C.$t("admin.manageBooks.table.delete")),9,uM),N[0]||(N[0]=ar(" - ")),x("button",{onClick:H=>m(F),class:"text-indigo-600 hover:text-indigo-800"},ee(C.$t("admin.manageBooks.table.edit")),9,hM)])]))),128))])]),s.value?(pe(),Rn(qx,{key:0,show:r.value,book:s.value,onClose:g,"onUpdate:book":P},null,8,["show","book"])):Pe("v-if",!0)]))}};function fM(){const{t}=dn(),e=Ce([]);return{books:e,deleteBook:async s=>{if(confirm(t("admin.manageBooks.messages.confirmDelete")))try{if(s.coverImage){const i=ih(oh,s.coverImage);await kL(i).catch(o=>{console.log("Error deleting image:",o)})}await pO(ur(mn,"books",s.id)),alert(t("admin.manageBooks.messages.success"))}catch(i){console.error("Error deleting book:",i),alert(t("admin.manageBooks.messages.failed"))}},handleBookUpdate:s=>{e.value=e.value.map(i=>i.id===s.id?s:i)}}}const pM={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"},mM={__name:"AdminView",setup(t){const{books:e,deleteBook:n,handleBookUpdate:r}=fM();return Ei(()=>{const s=DE(cc(mn,"books"),i=>{e.value=i.docs.map(o=>({id:o.id,...o.data()}))});return()=>s()}),(s,i)=>(pe(),Rn(_c,null,{default:Vn(()=>[ot(XD),x("main",pM,[ot(vx),ot(dM,{books:Ie(e),onDeleteBook:Ie(n),onUpdateBook:Ie(r)},null,8,["books","onDeleteBook","onUpdateBook"])])]),_:1}))}},gM={class:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"},_M={class:"max-w-md w-full space-y-8"},yM={class:"mt-6 text-center text-3xl font-extrabold text-gray-900"},vM={class:"rounded-md shadow-sm -space-y-px"},EM={for:"email-address",class:"sr-only"},TM=["placeholder"],bM={for:"password",class:"sr-only"},IM=["placeholder"],wM={type:"submit",class:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},AM={class:"text-center"},RM={class:"text-sm text-gray-600"},SM={key:0,class:"text-red-500 text-center mt-2"},PM={__name:"LoginView",setup(t){const{t:e}=dn(),n=Ul(),r=gc(),s=Ce(""),i=Ce(""),o=Ce(""),a=async()=>{try{await r.signIn(s.value,i.value),r.isAdmin()?n.push("/admin"):n.push("/")}catch{o.value=e("errors.invalidEmailOrPassword")}};return(c,u)=>{const h=Ya("RouterLink");return pe(),Rn(_c,null,{default:Vn(()=>[x("div",gM,[x("div",_M,[x("div",null,[x("h2",yM,ee(c.$t("auth.login.title")),1)]),x("form",{class:"mt-8 space-y-6",onSubmit:xl(a,["prevent"])},[x("div",vM,[x("div",null,[x("label",EM,ee(c.$t("auth.login.emailLabel")),1),nt(x("input",{"onUpdate:modelValue":u[0]||(u[0]=f=>s.value=f),id:"email-address",name:"email",type:"email",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:c.$t("auth.login.emailPlaceholder")},null,8,TM),[[St,s.value]])]),x("div",null,[x("label",bM,ee(c.$t("auth.login.passwordLabel")),1),nt(x("input",{"onUpdate:modelValue":u[1]||(u[1]=f=>i.value=f),id:"password",name:"password",type:"password",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:c.$t("auth.login.passwordPlaceholder")},null,8,IM),[[St,i.value]])])]),x("div",null,[x("button",wM,ee(c.$t("auth.login.signInButton")),1)])],32),x("div",AM,[x("p",RM,[ar(ee(c.$t("auth.login.noAccount"))+" ",1),ot(h,{to:"/register",class:"font-medium text-indigo-600 hover:text-indigo-500"},{default:Vn(()=>[ar(ee(c.$t("auth.login.registerLink")),1)]),_:1})])]),o.value?(pe(),Ae("div",SM,ee(o.value),1)):Pe("v-if",!0)])])]),_:1})}}},CM={class:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"},kM={class:"max-w-md w-full space-y-8"},NM={class:"mt-6 text-center text-3xl font-extrabold text-gray-900"},OM={class:"rounded-md shadow-sm -space-y-px"},LM=["placeholder"],DM=["placeholder"],xM=["placeholder"],MM={type:"submit",class:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},VM={class:"text-center"},UM={class:"text-sm text-gray-600"},FM={key:0,class:"text-red-500 text-center mt-2"},$M={__name:"RegisterView",setup(t){const e=Ul(),{signUp:n}=tT(),r=Ce(""),s=Ce(""),i=Ce(""),o=Ce(""),a=async()=>{try{await n(s.value,i.value,r.value),e.push("/login")}catch(c){o.value=c.message}};return(c,u)=>{const h=Ya("RouterLink");return pe(),Rn(_c,null,{default:Vn(()=>[x("div",CM,[x("div",kM,[x("div",null,[x("h2",NM,ee(c.$t("auth.register.title")),1)]),x("form",{class:"mt-8 space-y-6",onSubmit:xl(a,["prevent"])},[x("div",OM,[x("div",null,[nt(x("input",{"onUpdate:modelValue":u[0]||(u[0]=f=>r.value=f),type:"text",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:c.$t("auth.register.namePlaceholder")},null,8,LM),[[St,r.value]])]),x("div",null,[nt(x("input",{"onUpdate:modelValue":u[1]||(u[1]=f=>s.value=f),type:"email",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:c.$t("auth.register.emailPlaceholder")},null,8,DM),[[St,s.value]])]),x("div",null,[nt(x("input",{"onUpdate:modelValue":u[2]||(u[2]=f=>i.value=f),type:"password",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:c.$t("auth.register.passwordPlaceholder")},null,8,xM),[[St,i.value]])])]),x("div",null,[x("button",MM,ee(c.$t("auth.register.submitButton")),1)])],32),x("div",VM,[x("p",UM,[ar(ee(c.$t("auth.register.haveAccount"))+" ",1),ot(h,{to:"/login",class:"font-medium text-indigo-600 hover:text-indigo-500"},{default:Vn(()=>[ar(ee(c.$t("auth.register.loginLink")),1)]),_:1})])]),o.value?(pe(),Ae("div",FM,ee(o.value),1)):Pe("v-if",!0)])])]),_:1})}}},BM=[{path:"/",name:"home",component:GD},{path:"/login",name:"login",component:PM},{path:"/register",name:"register",component:$M},{path:"/admin",name:"admin",component:mM,meta:{requiresAdmin:!0}}],nT=Qw({history:Aw(),routes:BM});nT.beforeEach((t,e,n)=>{const r=gc();t.meta.requiresAdmin&&!r.isAdmin()?n("/"):n()});const jM={availability:"Availability",all:"All",available:"Available",borrowed:"Borrowed",ageGroup:"Age Group",newArrivals:"New Arrivals",reset:"Reset Filters"},HM={title:"Persian Book Library",loading:"Loading..."},qM={status:{available:"Available",currentlyBorrowed:"Currently Borrowed",youBorrowed:"You borrowed this book",pendingReturn:"Pending Return",returnPending:"Return pending confirmation",confirmReturn:"Waiting for your confirmation",waitingForOwner:"Waiting for owner confirmation"},borrowBook:"Borrow Book",returnBook:"Return Book",receiveBook:"Confirm Return",notAvailable:"Not Available",messages:{returnSuccess:"Return request sent to owner",receiveSuccess:"Book received successfully",failed:"Operation failed. Please try again."},searchPlaceholder:"Search...",booksCount:"Showing {filtered} of {total} books",bookTranslatorLabel:"Translator: { translator }",bookIllustratorLabel:"Illustrator: { illustrator }",bookAgeLabel:"Age: { age }",noBooksFound:"No books found matching your search.",enterYourNamePrompt:"Please enter your name:"},WM={home:"Home",adminDashboard:"Admin Dashboard",logout:"Logout",login:"Login"},GM={title:"Admin Dashboard",uploadImage:{formatError:"Please upload only JPG, PNG or WebP images.",fileSizeError:"File size must be less than 2MB.",failed:"Failed to upload image. Please try again."},addBook:{title:"Add New Book",form:{title:"Title",author:"Author",translator:"Translator",illustrator:"Illustrator",ageGroup:"Age Group",coverImage:"Cover Image",description:"Description",owner:"Owner",selectBorrower:"Select a borrower",borrower:"Borrower",selectOwner:"Select an owner",ownerPlaceholder:"Enter owner name",submit:"Add Book",uploadProgress:"Uploading: { progress } %",waitForUpload:"Please wait for the image upload to complete"},messages:{success:"Book added successfully!",failed:"Failed to add book. Please try again."}},editBook:{title:"Edit Book",error:"Failed to update book. Please try again."},manageBooks:{title:"Manage Books",messages:{confirmDelete:"Are you sure you want to delete this book?",success:"Book deleted successfully!",failed:"Failed to delete book. Please try again."},table:{title:"Title",author:"Author",status:{title:"Status",available:"Available",borrowed:"Borrowed",pendingReturn:"Pending Return"},lastAction:"Last Action",returnRequestedAt:"Return requested: {date}",borrowedAt:"Borrowed: {date}",actions:"Actions",available:"Available",borrowed:"Borrowed",owner:"Owner",borrower:"Borrowed By",delete:"Delete",edit:"Edit"}}},KM={login:{title:"Login",emailPlaceholder:"Email address",emailLabel:"Email address",passwordLabel:"Password",passwordPlaceholder:"Password",signInButton:"Sign in",noAccount:"Don't have an account?",registerLink:"Register here"},register:{title:"Create an account",haveAccount:"Already have an account?",loginLink:"Sign in",namePlaceholder:"Name",emailPlaceholder:"Email address",passwordPlaceholder:"Password",submitButton:"Register"}},zM={invalidEmailOrPassword:"Invalid email or password"},YM={title:"Persian Children's Library",description:"A digital platform dedicated to making Persian children's literature accessible to a private farsi group.",dataPrivacy:{title:"Data Privacy Information",storage:"Please note that all images and data are stored on servers located in the United States using Google Cloud Infrastructure.",firebase:"This application uses Firebase services for data storage, authentication, and hosting. By using this service, you agree to Google's data processing terms.",fairUse:"This application is only intented to be used from a private Farsi group, therefore no impressum and data-privacy information is needed."},copyright:"© {year} Persian Children's Library. All rights reserved."},QM={save:"Save",cancel:"Cancel"},XM={filters:jM,app:HM,home:qM,routes:WM,admin:GM,auth:KM,errors:zM,footer:YM,common:QM},JM={availability:"وضعیت موجودی",all:"همه",available:"موجود",borrowed:"امانت داده شده",ageGroup:"رده سنی",newArrivals:"تازه‌های کتابخانه",reset:"حذف فیلترها"},ZM={title:"کتابخانه فارسی",loading:"در حال بارگذاری..."},eV={status:{youBorrowed:"شما این کتاب را امانت گرفته‌اید",pendingReturn:"در انتظار بازگشت",returnPending:"در انتظار تایید بازگشت",confirmReturn:"در انتظار تایید شما",waitingForOwner:"در انتظار تایید صاحب کتاب"},messages:{returnSuccess:"درخواست بازگشت برای صاحب کتاب ارسال شد",receiveSuccess:"کتاب با موفقیت دریافت شد",failed:"امانت گرفتن کتاب با خطا مواجه شد. لطفا دوباره تلاش کنید."},returnBook:"بازگرداندن کتاب",receiveBook:"تایید بازگشت",searchPlaceholder:"جستجو...",booksCount:"نمایش {filtered} از {total} کتاب",bookTranslatorLabel:"مترجم: {translator}",bookIllustratorLabel:"تصویرگر: {illustrator}",bookAgeLabel:"رده سنی: {age}",borrowBook:"امانت گرفتن کتاب",notAvailable:"در دسترس نیست",noBooksFound:"کتابی با این مشخصات یافت نشد.",enterYourNamePrompt:"لطفا نام خود را وارد کنید:"},tV={home:"صفحه اصلی",adminDashboard:"پنل مدیریت",logout:"خروج",login:"ورود"},nV={title:"پنل مدیریت",uploadImage:{formatError:"لطفا فقط تصاویر با فرمت JPG، PNG یا WebP آپلود کنید.",fileSizeError:"حجم فایل باید کمتر از ۲ مگابایت باشد.",failed:"آپلود تصویر با خطا مواجه شد. لطفا دوباره تلاش کنید."},addBook:{title:"افزودن کتاب جدید",form:{title:"عنوان",author:"نویسنده",translator:"مترجم",illustrator:"تصویرگر",ageGroup:"گروه سنی",coverImage:"تصویر جلد",description:"توضیحات",submit:"افزودن کتاب",owner:"صاحب کتاب",selectOwner:"Select an owner",selectBorrower:"Select a borrower",borrower:"Borrower",ownerPlaceholder:"نام صاحب کتاب را وارد کنید",waitForUpload:"لطفا تا پایان آپلود تصویر صبر کنید",uploadProgress:"در حال آپلود: {progress} درصد"},messages:{success:"کتاب با موفقیت اضافه شد!",failed:"افزودن کتاب با خطا مواجه شد. لطفا دوباره تلاش کنید."}},editBook:{title:"ویرایش کتاب",error:"ویرایش کتاب با خطا مواجه شد. لطفا دوباره تلاش کنید."},manageBooks:{title:"مدیریت کتاب‌ها",messages:{confirmDelete:"آیا از حذف این کتاب اطمینان دارید؟",success:"کتاب با موفقیت حذف شد!",failed:"حذف کتاب با خطا مواجه شد. لطفا دوباره تلاش کنید."},table:{title:"عنوان",author:"نویسنده",status:{title:"وضعیت",available:"موجود",borrowed:"امانت داده شده",pendingReturn:"در انتظار بازگشت"},lastAction:"آخرین عملیات",returnRequestedAt:"درخواست بازگشت: {date}",borrowedAt:"امانت گرفته شده در: {date}",actions:"عملیات",available:"موجود",borrowed:"امانت داده شده",owner:"صاحب کتاب",borrower:"امانت گیرنده",delete:"حذف",edit:"ویرایش"}}},rV={login:{title:"ورود به سیستم",emailPlaceholder:"آدرس ایمیل",emailLabel:"آدرس ایمیل",passwordLabel:"رمز عبور",passwordPlaceholder:"رمز عبور",signInButton:"ورود",noAccount:"حساب کاربری ندارید؟",registerLink:"ثبت نام کنید"},register:{title:"ایجاد حساب کاربری",haveAccount:"قبلاً حساب کاربری دارید؟",loginLink:"وارد شوید",namePlaceholder:"نام",emailPlaceholder:"آدرس ایمیل",passwordPlaceholder:"رمز عبور",submitButton:"ثبت نام"}},sV={invalidEmailOrPassword:"ایمیل یا رمز عبور نامعتبر است"},iV={title:"کتابخانه کودکان فارسی",description:"یک پلتفرم دیجیتال برای دسترسی همگانی به ادبیات کودکان فارسی",dataPrivacy:{fairUse:"این برنامه فقط برای استفاده یک گروه خصوصی فارسی زبان در نظر گرفته شده است، بنابراین نیازی به اطلاعات حقوقی و حریم خصوصی نیست.",title:"اطلاعات حریم خصوصی",storage:"لطفاً توجه داشته باشید که تمام تصاویر و داده‌ها در سرورهای مستقر در ایالات متحده با استفاده از زیرساخت Google Cloud ذخیره می‌شوند.",firebase:"این برنامه از خدمات Firebase برای ذخیره‌سازی داده‌ها، احراز هویت و میزبانی استفاده می‌کند. با استفاده از این سرویس، شما با شرایط پردازش داده Google موافقت می‌کنید."},copyright:"© {year} کتابخانه کودکان فارسی. کلیه حقوق محفوظ است."},oV={save:"ذخیره",cancel:"انصراف"},aV={filters:JM,app:ZM,home:eV,routes:tV,admin:nV,auth:rV,errors:sV,footer:iV,common:oV},lV=localStorage.getItem("userLocale")||"fa",cV=eR({legacy:!1,locale:lV,fallbackLocale:"en",messages:{en:XM,fa:aV}});GI(BL).use(cV).use(dR()).use(nT).mount("#app");
