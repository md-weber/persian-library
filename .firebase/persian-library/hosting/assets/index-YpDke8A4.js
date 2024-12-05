(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function rh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const We={},Ys=[],Ln=()=>{},bT=()=>!1,_l=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),sh=t=>t.startsWith("onUpdate:"),Pt=Object.assign,ih=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},wT=Object.prototype.hasOwnProperty,Ue=(t,e)=>wT.call(t,e),pe=Array.isArray,Qs=t=>Oo(t)==="[object Map]",yl=t=>Oo(t)==="[object Set]",If=t=>Oo(t)==="[object Date]",Ee=t=>typeof t=="function",gt=t=>typeof t=="string",bn=t=>typeof t=="symbol",ze=t=>t!==null&&typeof t=="object",vg=t=>(ze(t)||Ee(t))&&Ee(t.then)&&Ee(t.catch),Eg=Object.prototype.toString,Oo=t=>Eg.call(t),AT=t=>Oo(t).slice(8,-1),Tg=t=>Oo(t)==="[object Object]",oh=t=>gt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qi=rh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},RT=/-(\w)/g,_n=vl(t=>t.replace(RT,(e,n)=>n?n.toUpperCase():"")),ST=/\B([A-Z])/g,ws=vl(t=>t.replace(ST,"-$1").toLowerCase()),El=vl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Rc=vl(t=>t?`on${El(t)}`:""),Nr=(t,e)=>!Object.is(t,e),ba=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ig=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ua=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let bf;const Tl=()=>bf||(bf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ah(t){if(pe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=gt(r)?NT(r):ah(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(gt(t)||ze(t))return t}const PT=/;(?![^(]*\))/g,CT=/:([^]+)/,kT=/\/\*[^]*?\*\//g;function NT(t){const e={};return t.replace(kT,"").split(PT).forEach(n=>{if(n){const r=n.split(CT);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function As(t){let e="";if(gt(t))e=t;else if(pe(t))for(let n=0;n<t.length;n++){const r=As(t[n]);r&&(e+=r+" ")}else if(ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const OT="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",LT=rh(OT);function bg(t){return!!t||t===""}function DT(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Il(t[r],e[r]);return n}function Il(t,e){if(t===e)return!0;let n=If(t),r=If(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=bn(t),r=bn(e),n||r)return t===e;if(n=pe(t),r=pe(e),n||r)return n&&r?DT(t,e):!1;if(n=ze(t),r=ze(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Il(t[o],e[o]))return!1}}return String(t)===String(e)}function xT(t,e){return t.findIndex(n=>Il(n,e))}const wg=t=>!!(t&&t.__v_isRef===!0),ie=t=>gt(t)?t:t==null?"":pe(t)||ze(t)&&(t.toString===Eg||!Ee(t.toString))?wg(t)?ie(t.value):JSON.stringify(t,Ag,2):String(t),Ag=(t,e)=>wg(e)?Ag(t,e.value):Qs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Sc(r,i)+" =>"]=s,n),{})}:yl(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Sc(n))}:bn(e)?Sc(e):ze(e)&&!pe(e)&&!Tg(e)?String(e):e,Sc=(t,e="")=>{var n;return bn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xt;class Rg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Xt,!e&&Xt&&(this.index=(Xt.scopes||(Xt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Xt;try{return Xt=this,e()}finally{Xt=n}}}on(){Xt=this}off(){Xt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function lh(t){return new Rg(t)}function Sg(){return Xt}function MT(t,e=!1){Xt&&Xt.cleanups.push(t)}let qe;const Pc=new WeakSet;class Pg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xt&&Xt.active&&Xt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pc.has(this)&&(Pc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||kg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wf(this),Ng(this);const e=qe,n=In;qe=this,In=!0;try{return this.fn()}finally{Og(this),qe=e,In=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hh(e);this.deps=this.depsTail=void 0,wf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){su(this)&&this.run()}get dirty(){return su(this)}}let Cg=0,Xi,Ji;function kg(t,e=!1){if(t.flags|=8,e){t.next=Ji,Ji=t;return}t.next=Xi,Xi=t}function ch(){Cg++}function uh(){if(--Cg>0)return;if(Ji){let e=Ji;for(Ji=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Xi;){let e=Xi;for(Xi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Ng(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Og(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),hh(r),VT(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function su(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Lg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Lg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===uo))return;t.globalVersion=uo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!su(t)){t.flags&=-3;return}const n=qe,r=In;qe=t,In=!0;try{Ng(t);const s=t.fn(t._value);(e.version===0||Nr(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{qe=n,In=r,Og(t),t.flags&=-3}}function hh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)hh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function VT(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let In=!0;const Dg=[];function Gr(){Dg.push(In),In=!1}function Kr(){const t=Dg.pop();In=t===void 0?!0:t}function wf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=qe;qe=void 0;try{e()}finally{qe=n}}}let uo=0;class FT{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class dh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!qe||!In||qe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==qe)n=this.activeLink=new FT(qe,this),qe.deps?(n.prevDep=qe.depsTail,qe.depsTail.nextDep=n,qe.depsTail=n):qe.deps=qe.depsTail=n,xg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=qe.depsTail,n.nextDep=void 0,qe.depsTail.nextDep=n,qe.depsTail=n,qe.deps===n&&(qe.deps=r)}return n}trigger(e){this.version++,uo++,this.notify(e)}notify(e){ch();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{uh()}}}function xg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)xg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const $a=new WeakMap,ps=Symbol(""),iu=Symbol(""),ho=Symbol("");function Bt(t,e,n){if(In&&qe){let r=$a.get(t);r||$a.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new dh),s.map=r,s.key=n),s.track()}}function Zn(t,e,n,r,s,i){const o=$a.get(t);if(!o){uo++;return}const a=c=>{c&&c.trigger()};if(ch(),e==="clear")o.forEach(a);else{const c=pe(t),u=c&&oh(n);if(c&&n==="length"){const d=Number(r);o.forEach((f,m)=>{(m==="length"||m===ho||!bn(m)&&m>=d)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(ho)),e){case"add":c?u&&a(o.get("length")):(a(o.get(ps)),Qs(t)&&a(o.get(iu)));break;case"delete":c||(a(o.get(ps)),Qs(t)&&a(o.get(iu)));break;case"set":Qs(t)&&a(o.get(ps));break}}uh()}function UT(t,e){const n=$a.get(t);return n&&n.get(e)}function Vs(t){const e=De(t);return e===t?e:(Bt(e,"iterate",ho),fn(t)?e:e.map(jt))}function bl(t){return Bt(t=De(t),"iterate",ho),t}const $T={__proto__:null,[Symbol.iterator](){return Cc(this,Symbol.iterator,jt)},concat(...t){return Vs(this).concat(...t.map(e=>pe(e)?Vs(e):e))},entries(){return Cc(this,"entries",t=>(t[1]=jt(t[1]),t))},every(t,e){return zn(this,"every",t,e,void 0,arguments)},filter(t,e){return zn(this,"filter",t,e,n=>n.map(jt),arguments)},find(t,e){return zn(this,"find",t,e,jt,arguments)},findIndex(t,e){return zn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return zn(this,"findLast",t,e,jt,arguments)},findLastIndex(t,e){return zn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return zn(this,"forEach",t,e,void 0,arguments)},includes(...t){return kc(this,"includes",t)},indexOf(...t){return kc(this,"indexOf",t)},join(t){return Vs(this).join(t)},lastIndexOf(...t){return kc(this,"lastIndexOf",t)},map(t,e){return zn(this,"map",t,e,void 0,arguments)},pop(){return Fi(this,"pop")},push(...t){return Fi(this,"push",t)},reduce(t,...e){return Af(this,"reduce",t,e)},reduceRight(t,...e){return Af(this,"reduceRight",t,e)},shift(){return Fi(this,"shift")},some(t,e){return zn(this,"some",t,e,void 0,arguments)},splice(...t){return Fi(this,"splice",t)},toReversed(){return Vs(this).toReversed()},toSorted(t){return Vs(this).toSorted(t)},toSpliced(...t){return Vs(this).toSpliced(...t)},unshift(...t){return Fi(this,"unshift",t)},values(){return Cc(this,"values",jt)}};function Cc(t,e,n){const r=bl(t),s=r[e]();return r!==t&&!fn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const BT=Array.prototype;function zn(t,e,n,r,s,i){const o=bl(t),a=o!==t&&!fn(t),c=o[e];if(c!==BT[e]){const f=c.apply(t,i);return a?jt(f):f}let u=n;o!==t&&(a?u=function(f,m){return n.call(this,jt(f),m,t)}:n.length>2&&(u=function(f,m){return n.call(this,f,m,t)}));const d=c.call(o,u,r);return a&&s?s(d):d}function Af(t,e,n,r){const s=bl(t);let i=n;return s!==t&&(fn(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,jt(a),c,t)}),s[e](i,...r)}function kc(t,e,n){const r=De(t);Bt(r,"iterate",ho);const s=r[e](...n);return(s===-1||s===!1)&&mh(n[0])?(n[0]=De(n[0]),r[e](...n)):s}function Fi(t,e,n=[]){Gr(),ch();const r=De(t)[e].apply(t,n);return uh(),Kr(),r}const jT=rh("__proto__,__v_isRef,__isVue"),Mg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(bn));function HT(t){bn(t)||(t=String(t));const e=De(this);return Bt(e,"has",t),e.hasOwnProperty(t)}class Vg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ZT:Bg:i?$g:Ug).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=pe(e);if(!s){let c;if(o&&(c=$T[n]))return c;if(n==="hasOwnProperty")return HT}const a=Reflect.get(e,n,ut(e)?e:r);return(bn(n)?Mg.has(n):jT(n))||(s||Bt(e,"get",n),i)?a:ut(a)?o&&oh(n)?a:a.value:ze(a)?s?Hg(a):Lo(a):a}}class Fg extends Vg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=ys(i);if(!fn(r)&&!ys(r)&&(i=De(i),r=De(r)),!pe(e)&&ut(i)&&!ut(r))return c?!1:(i.value=r,!0)}const o=pe(e)&&oh(n)?Number(n)<e.length:Ue(e,n),a=Reflect.set(e,n,r,ut(e)?e:s);return e===De(s)&&(o?Nr(r,i)&&Zn(e,"set",n,r):Zn(e,"add",n,r)),a}deleteProperty(e,n){const r=Ue(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Zn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!bn(n)||!Mg.has(n))&&Bt(e,"has",n),r}ownKeys(e){return Bt(e,"iterate",pe(e)?"length":ps),Reflect.ownKeys(e)}}class WT extends Vg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const qT=new Fg,GT=new WT,KT=new Fg(!0);const ou=t=>t,ua=t=>Reflect.getPrototypeOf(t);function zT(t,e,n){return function(...r){const s=this.__v_raw,i=De(s),o=Qs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),d=n?ou:e?au:jt;return!e&&Bt(i,"iterate",c?iu:ps),{next(){const{value:f,done:m}=u.next();return m?{value:f,done:m}:{value:a?[d(f[0]),d(f[1])]:d(f),done:m}},[Symbol.iterator](){return this}}}}function ha(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function YT(t,e){const n={get(s){const i=this.__v_raw,o=De(i),a=De(s);t||(Nr(s,a)&&Bt(o,"get",s),Bt(o,"get",a));const{has:c}=ua(o),u=e?ou:t?au:jt;if(c.call(o,s))return u(i.get(s));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Bt(De(s),"iterate",ps),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=De(i),a=De(s);return t||(Nr(s,a)&&Bt(o,"has",s),Bt(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=De(a),u=e?ou:t?au:jt;return!t&&Bt(c,"iterate",ps),a.forEach((d,f)=>s.call(i,u(d),u(f),o))}};return Pt(n,t?{add:ha("add"),set:ha("set"),delete:ha("delete"),clear:ha("clear")}:{add(s){!e&&!fn(s)&&!ys(s)&&(s=De(s));const i=De(this);return ua(i).has.call(i,s)||(i.add(s),Zn(i,"add",s,s)),this},set(s,i){!e&&!fn(i)&&!ys(i)&&(i=De(i));const o=De(this),{has:a,get:c}=ua(o);let u=a.call(o,s);u||(s=De(s),u=a.call(o,s));const d=c.call(o,s);return o.set(s,i),u?Nr(i,d)&&Zn(o,"set",s,i):Zn(o,"add",s,i),this},delete(s){const i=De(this),{has:o,get:a}=ua(i);let c=o.call(i,s);c||(s=De(s),c=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return c&&Zn(i,"delete",s,void 0),u},clear(){const s=De(this),i=s.size!==0,o=s.clear();return i&&Zn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=zT(s,t,e)}),n}function fh(t,e){const n=YT(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ue(n,s)&&s in r?n:r,s,i)}const QT={get:fh(!1,!1)},XT={get:fh(!1,!0)},JT={get:fh(!0,!1)};const Ug=new WeakMap,$g=new WeakMap,Bg=new WeakMap,ZT=new WeakMap;function eI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tI(t){return t.__v_skip||!Object.isExtensible(t)?0:eI(AT(t))}function Lo(t){return ys(t)?t:ph(t,!1,qT,QT,Ug)}function jg(t){return ph(t,!1,KT,XT,$g)}function Hg(t){return ph(t,!0,GT,JT,Bg)}function ph(t,e,n,r,s){if(!ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=tI(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Or(t){return ys(t)?Or(t.__v_raw):!!(t&&t.__v_isReactive)}function ys(t){return!!(t&&t.__v_isReadonly)}function fn(t){return!!(t&&t.__v_isShallow)}function mh(t){return t?!!t.__v_raw:!1}function De(t){const e=t&&t.__v_raw;return e?De(e):t}function gh(t){return!Ue(t,"__v_skip")&&Object.isExtensible(t)&&Ig(t,"__v_skip",!0),t}const jt=t=>ze(t)?Lo(t):t,au=t=>ze(t)?Hg(t):t;function ut(t){return t?t.__v_isRef===!0:!1}function Ve(t){return Wg(t,!1)}function _h(t){return Wg(t,!0)}function Wg(t,e){return ut(t)?t:new nI(t,e)}class nI{constructor(e,n){this.dep=new dh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:De(e),this._value=n?e:jt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||fn(e)||ys(e);e=r?e:De(e),Nr(e,n)&&(this._rawValue=e,this._value=r?e:jt(e),this.dep.trigger())}}function be(t){return ut(t)?t.value:t}const rI={get:(t,e,n)=>e==="__v_raw"?t:be(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ut(s)&&!ut(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function qg(t){return Or(t)?t:new Proxy(t,rI)}function sI(t){const e=pe(t)?new Array(t.length):{};for(const n in t)e[n]=oI(t,n);return e}class iI{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return UT(De(this._object),this._key)}}function oI(t,e,n){const r=t[e];return ut(r)?r:new iI(t,e,n)}class aI{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new dh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=uo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&qe!==this)return kg(this,!0),!0}get value(){const e=this.dep.track();return Lg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function lI(t,e,n=!1){let r,s;return Ee(t)?r=t:(r=t.get,s=t.set),new aI(r,s,n)}const da={},Ba=new WeakMap;let cs;function cI(t,e=!1,n=cs){if(n){let r=Ba.get(n);r||Ba.set(n,r=[]),r.push(t)}}function uI(t,e,n=We){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,u=C=>s?C:fn(C)||s===!1||s===0?er(C,1):er(C);let d,f,m,g,R=!1,L=!1;if(ut(t)?(f=()=>t.value,R=fn(t)):Or(t)?(f=()=>u(t),R=!0):pe(t)?(L=!0,R=t.some(C=>Or(C)||fn(C)),f=()=>t.map(C=>{if(ut(C))return C.value;if(Or(C))return u(C);if(Ee(C))return c?c(C,2):C()})):Ee(t)?e?f=c?()=>c(t,2):t:f=()=>{if(m){Gr();try{m()}finally{Kr()}}const C=cs;cs=d;try{return c?c(t,3,[g]):t(g)}finally{cs=C}}:f=Ln,e&&s){const C=f,j=s===!0?1/0:s;f=()=>er(C(),j)}const k=Sg(),F=()=>{d.stop(),k&&k.active&&ih(k.effects,d)};if(i&&e){const C=e;e=(...j)=>{C(...j),F()}}let H=L?new Array(t.length).fill(da):da;const P=C=>{if(!(!(d.flags&1)||!d.dirty&&!C))if(e){const j=d.run();if(s||R||(L?j.some((U,I)=>Nr(U,H[I])):Nr(j,H))){m&&m();const U=cs;cs=d;try{const I=[j,H===da?void 0:L&&H[0]===da?[]:H,g];c?c(e,3,I):e(...I),H=j}finally{cs=U}}}else d.run()};return a&&a(P),d=new Pg(f),d.scheduler=o?()=>o(P,!1):P,g=C=>cI(C,!1,d),m=d.onStop=()=>{const C=Ba.get(d);if(C){if(c)c(C,4);else for(const j of C)j();Ba.delete(d)}},e?r?P(!0):H=d.run():o?o(P.bind(null,!0),!0):d.run(),F.pause=d.pause.bind(d),F.resume=d.resume.bind(d),F.stop=F,F}function er(t,e=1/0,n){if(e<=0||!ze(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ut(t))er(t.value,e,n);else if(pe(t))for(let r=0;r<t.length;r++)er(t[r],e,n);else if(yl(t)||Qs(t))t.forEach(r=>{er(r,e,n)});else if(Tg(t)){for(const r in t)er(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&er(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Do(t,e,n,r){try{return r?t(...r):t()}catch(s){wl(s,e,n)}}function Bn(t,e,n,r){if(Ee(t)){const s=Do(t,e,n,r);return s&&vg(s)&&s.catch(i=>{wl(i,e,n)}),s}if(pe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Bn(t[i],e,n,r));return s}}function wl(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||We;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const d=a.ec;if(d){for(let f=0;f<d.length;f++)if(d[f](t,c,u)===!1)return}a=a.parent}if(i){Gr(),Do(i,null,10,[t,c,u]),Kr();return}}hI(t,n,s,r,o)}function hI(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Jt=[];let Pn=-1;const Xs=[];let Ir=null,$s=0;const Gg=Promise.resolve();let ja=null;function Al(t){const e=ja||Gg;return t?e.then(this?t.bind(this):t):e}function dI(t){let e=Pn+1,n=Jt.length;for(;e<n;){const r=e+n>>>1,s=Jt[r],i=fo(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function yh(t){if(!(t.flags&1)){const e=fo(t),n=Jt[Jt.length-1];!n||!(t.flags&2)&&e>=fo(n)?Jt.push(t):Jt.splice(dI(e),0,t),t.flags|=1,Kg()}}function Kg(){ja||(ja=Gg.then(Yg))}function fI(t){pe(t)?Xs.push(...t):Ir&&t.id===-1?Ir.splice($s+1,0,t):t.flags&1||(Xs.push(t),t.flags|=1),Kg()}function Rf(t,e,n=Pn+1){for(;n<Jt.length;n++){const r=Jt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Jt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function zg(t){if(Xs.length){const e=[...new Set(Xs)].sort((n,r)=>fo(n)-fo(r));if(Xs.length=0,Ir){Ir.push(...e);return}for(Ir=e,$s=0;$s<Ir.length;$s++){const n=Ir[$s];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ir=null,$s=0}}const fo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Yg(t){try{for(Pn=0;Pn<Jt.length;Pn++){const e=Jt[Pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Do(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Pn<Jt.length;Pn++){const e=Jt[Pn];e&&(e.flags&=-2)}Pn=-1,Jt.length=0,zg(),ja=null,(Jt.length||Xs.length)&&Yg()}}let vt=null,Qg=null;function Ha(t){const e=vt;return vt=t,Qg=t&&t.type.__scopeId||null,e}function Dn(t,e=vt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&xf(-1);const i=Ha(e);let o;try{o=t(...s)}finally{Ha(i),r._d&&xf(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function $t(t,e){if(vt===null)return t;const n=Pl(vt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=We]=e[s];i&&(Ee(i)&&(i={mounted:i,updated:i}),i.deep&&er(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function is(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Gr(),Bn(c,n,8,[t.el,a,t,e]),Kr())}}const pI=Symbol("_vte"),mI=t=>t.__isTeleport;function vh(t,e){t.shapeFlag&6&&t.component?(t.transition=e,vh(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function xo(t,e){return Ee(t)?Pt({name:t.name},e,{setup:t}):t}function Xg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Wa(t,e,n,r,s=!1){if(pe(t)){t.forEach((R,L)=>Wa(R,e&&(pe(e)?e[L]:e),n,r,s));return}if(Js(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Wa(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Pl(r.component):r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,d=a.refs===We?a.refs={}:a.refs,f=a.setupState,m=De(f),g=f===We?()=>!1:R=>Ue(m,R);if(u!=null&&u!==c&&(gt(u)?(d[u]=null,g(u)&&(f[u]=null)):ut(u)&&(u.value=null)),Ee(c))Do(c,a,12,[o,d]);else{const R=gt(c),L=ut(c);if(R||L){const k=()=>{if(t.f){const F=R?g(c)?f[c]:d[c]:c.value;s?pe(F)&&ih(F,i):pe(F)?F.includes(i)||F.push(i):R?(d[c]=[i],g(c)&&(f[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else R?(d[c]=o,g(c)&&(f[c]=o)):L&&(c.value=o,t.k&&(d[t.k]=o))};o?(k.id=-1,on(k,n)):k()}}}Tl().requestIdleCallback;Tl().cancelIdleCallback;const Js=t=>!!t.type.__asyncLoader,Jg=t=>t.type.__isKeepAlive;function gI(t,e){Zg(t,"a",e)}function _I(t,e){Zg(t,"da",e)}function Zg(t,e,n=Rt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Rl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Jg(s.parent.vnode)&&yI(r,e,n,s),s=s.parent}}function yI(t,e,n,r){const s=Rl(e,t,r,!0);Eh(()=>{ih(r[e],s)},n)}function Rl(t,e,n=Rt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Gr();const a=Vo(n),c=Bn(e,n,t,o);return a(),Kr(),c});return r?s.unshift(i):s.push(i),i}}const pr=t=>(e,n=Rt)=>{(!_o||t==="sp")&&Rl(t,(...r)=>e(...r),n)},e_=pr("bm"),yi=pr("m"),vI=pr("bu"),EI=pr("u"),TI=pr("bum"),Eh=pr("um"),II=pr("sp"),bI=pr("rtg"),wI=pr("rtc");function AI(t,e=Rt){Rl("ec",t,e)}const RI="components";function qa(t,e){return PI(RI,t,!0,e)||t}const SI=Symbol.for("v-ndc");function PI(t,e,n=!0,r=!1){const s=vt||Rt;if(s){const i=s.type;{const a=gb(i,!1);if(a&&(a===e||a===_n(e)||a===El(_n(e))))return i}const o=Sf(s[t]||i[t],e)||Sf(s.appContext[t],e);return!o&&r?i:o}}function Sf(t,e){return t&&(t[e]||t[_n(e)]||t[El(_n(e))])}function Th(t,e,n,r){let s;const i=n,o=pe(t);if(o||gt(t)){const a=o&&Or(t);let c=!1;a&&(c=!fn(t),t=bl(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(c?jt(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(ze(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const d=a[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function CI(t,e,n={},r,s){if(vt.ce||vt.parent&&Js(vt.parent)&&vt.parent.ce)return Ce(),xn(At,null,[it("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),Ce();const o=i&&t_(i(n)),a=n.key||o&&o.key,c=xn(At,{key:(a&&!bn(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),i&&i._c&&(i._d=!0),c}function t_(t){return t.some(e=>mo(e)?!(e.type===Vr||e.type===At&&!t_(e.children)):!0)?t:null}const lu=t=>t?T_(t)?Pl(t):lu(t.parent):null,Zi=Pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>lu(t.parent),$root:t=>lu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ih(t),$forceUpdate:t=>t.f||(t.f=()=>{yh(t.update)}),$nextTick:t=>t.n||(t.n=Al.bind(t.proxy)),$watch:t=>XI.bind(t)}),Nc=(t,e)=>t!==We&&!t.__isScriptSetup&&Ue(t,e),kI={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Nc(r,e))return o[e]=1,r[e];if(s!==We&&Ue(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&Ue(u,e))return o[e]=3,i[e];if(n!==We&&Ue(n,e))return o[e]=4,n[e];cu&&(o[e]=0)}}const d=Zi[e];let f,m;if(d)return e==="$attrs"&&Bt(t.attrs,"get",""),d(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==We&&Ue(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Ue(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Nc(s,e)?(s[e]=n,!0):r!==We&&Ue(r,e)?(r[e]=n,!0):Ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==We&&Ue(t,o)||Nc(e,o)||(a=i[0])&&Ue(a,o)||Ue(r,o)||Ue(Zi,o)||Ue(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Pf(t){return pe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let cu=!0;function NI(t){const e=Ih(t),n=t.proxy,r=t.ctx;cu=!1,e.beforeCreate&&Cf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:d,beforeMount:f,mounted:m,beforeUpdate:g,updated:R,activated:L,deactivated:k,beforeDestroy:F,beforeUnmount:H,destroyed:P,unmounted:C,render:j,renderTracked:U,renderTriggered:I,errorCaptured:_,serverPrefetch:y,expose:S,inheritAttrs:O,components:N,directives:A,filters:rt}=e;if(u&&OI(u,r,null),o)for(const he in o){const Te=o[he];Ee(Te)&&(r[he]=Te.bind(n))}if(s){const he=s.call(n,n);ze(he)&&(t.data=Lo(he))}if(cu=!0,i)for(const he in i){const Te=i[he],_t=Ee(Te)?Te.bind(n,n):Ee(Te.get)?Te.get.bind(n,n):Ln,Ct=!Ee(Te)&&Ee(Te.set)?Te.set.bind(n):Ln,et=Ke({get:_t,set:Ct});Object.defineProperty(r,he,{enumerable:!0,configurable:!0,get:()=>et.value,set:Me=>et.value=Me})}if(a)for(const he in a)n_(a[he],r,n,he);if(c){const he=Ee(c)?c.call(n):c;Reflect.ownKeys(he).forEach(Te=>{wa(Te,he[Te])})}d&&Cf(d,t,"c");function Ae(he,Te){pe(Te)?Te.forEach(_t=>he(_t.bind(n))):Te&&he(Te.bind(n))}if(Ae(e_,f),Ae(yi,m),Ae(vI,g),Ae(EI,R),Ae(gI,L),Ae(_I,k),Ae(AI,_),Ae(wI,U),Ae(bI,I),Ae(TI,H),Ae(Eh,C),Ae(II,y),pe(S))if(S.length){const he=t.exposed||(t.exposed={});S.forEach(Te=>{Object.defineProperty(he,Te,{get:()=>n[Te],set:_t=>n[Te]=_t})})}else t.exposed||(t.exposed={});j&&t.render===Ln&&(t.render=j),O!=null&&(t.inheritAttrs=O),N&&(t.components=N),A&&(t.directives=A),y&&Xg(t)}function OI(t,e,n=Ln){pe(t)&&(t=uu(t));for(const r in t){const s=t[r];let i;ze(s)?"default"in s?i=pn(s.from||r,s.default,!0):i=pn(s.from||r):i=pn(s),ut(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Cf(t,e,n){Bn(pe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function n_(t,e,n,r){let s=r.includes(".")?g_(n,r):()=>n[r];if(gt(t)){const i=e[t];Ee(i)&&ir(s,i)}else if(Ee(t))ir(s,t.bind(n));else if(ze(t))if(pe(t))t.forEach(i=>n_(i,e,n,r));else{const i=Ee(t.handler)?t.handler.bind(n):e[t.handler];Ee(i)&&ir(s,i,t)}}function Ih(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Ga(c,u,o,!0)),Ga(c,e,o)),ze(e)&&i.set(e,c),c}function Ga(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ga(t,i,n,!0),s&&s.forEach(o=>Ga(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=LI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const LI={data:kf,props:Nf,emits:Nf,methods:Hi,computed:Hi,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:Hi,directives:Hi,watch:xI,provide:kf,inject:DI};function kf(t,e){return e?t?function(){return Pt(Ee(t)?t.call(this,this):t,Ee(e)?e.call(this,this):e)}:e:t}function DI(t,e){return Hi(uu(t),uu(e))}function uu(t){if(pe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Yt(t,e){return t?[...new Set([].concat(t,e))]:e}function Hi(t,e){return t?Pt(Object.create(null),t,e):e}function Nf(t,e){return t?pe(t)&&pe(e)?[...new Set([...t,...e])]:Pt(Object.create(null),Pf(t),Pf(e??{})):e}function xI(t,e){if(!t)return e;if(!e)return t;const n=Pt(Object.create(null),t);for(const r in e)n[r]=Yt(t[r],e[r]);return n}function r_(){return{app:null,config:{isNativeTag:bT,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let MI=0;function VI(t,e){return function(r,s=null){Ee(r)||(r=Pt({},r)),s!=null&&!ze(s)&&(s=null);const i=r_(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:MI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:yb,get config(){return i.config},set config(d){},use(d,...f){return o.has(d)||(d&&Ee(d.install)?(o.add(d),d.install(u,...f)):Ee(d)&&(o.add(d),d(u,...f))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,f){return f?(i.components[d]=f,u):i.components[d]},directive(d,f){return f?(i.directives[d]=f,u):i.directives[d]},mount(d,f,m){if(!c){const g=u._ceVNode||it(r,s);return g.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),f&&e?e(g,d):t(g,d,m),c=!0,u._container=d,d.__vue_app__=u,Pl(g.component)}},onUnmount(d){a.push(d)},unmount(){c&&(Bn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,f){return i.provides[d]=f,u},runWithContext(d){const f=ms;ms=u;try{return d()}finally{ms=f}}};return u}}let ms=null;function wa(t,e){if(Rt){let n=Rt.provides;const r=Rt.parent&&Rt.parent.provides;r===n&&(n=Rt.provides=Object.create(r)),n[t]=e}}function pn(t,e,n=!1){const r=Rt||vt;if(r||ms){const s=ms?ms._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Ee(e)?e.call(r&&r.proxy):e}}function FI(){return!!(Rt||vt||ms)}const s_={},i_=()=>Object.create(s_),o_=t=>Object.getPrototypeOf(t)===s_;function UI(t,e,n,r=!1){const s={},i=i_();t.propsDefaults=Object.create(null),a_(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:jg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function $I(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=De(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let f=0;f<d.length;f++){let m=d[f];if(Sl(t.emitsOptions,m))continue;const g=e[m];if(c)if(Ue(i,m))g!==i[m]&&(i[m]=g,u=!0);else{const R=_n(m);s[R]=hu(c,a,R,g,t,!1)}else g!==i[m]&&(i[m]=g,u=!0)}}}else{a_(t,e,s,i)&&(u=!0);let d;for(const f in a)(!e||!Ue(e,f)&&((d=ws(f))===f||!Ue(e,d)))&&(c?n&&(n[f]!==void 0||n[d]!==void 0)&&(s[f]=hu(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!Ue(e,f))&&(delete i[f],u=!0)}u&&Zn(t.attrs,"set","")}function a_(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Qi(c))continue;const u=e[c];let d;s&&Ue(s,d=_n(c))?!i||!i.includes(d)?n[d]=u:(a||(a={}))[d]=u:Sl(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=De(n),u=a||We;for(let d=0;d<i.length;d++){const f=i[d];n[f]=hu(s,c,f,u[f],t,!Ue(u,f))}}return o}function hu(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Ue(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Ee(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=Vo(s);r=u[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===ws(n))&&(r=!0))}return r}const BI=new WeakMap;function l_(t,e,n=!1){const r=n?BI:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Ee(t)){const d=f=>{c=!0;const[m,g]=l_(f,e,!0);Pt(o,m),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return ze(t)&&r.set(t,Ys),Ys;if(pe(i))for(let d=0;d<i.length;d++){const f=_n(i[d]);Of(f)&&(o[f]=We)}else if(i)for(const d in i){const f=_n(d);if(Of(f)){const m=i[d],g=o[f]=pe(m)||Ee(m)?{type:m}:Pt({},m),R=g.type;let L=!1,k=!0;if(pe(R))for(let F=0;F<R.length;++F){const H=R[F],P=Ee(H)&&H.name;if(P==="Boolean"){L=!0;break}else P==="String"&&(k=!1)}else L=Ee(R)&&R.name==="Boolean";g[0]=L,g[1]=k,(L||Ue(g,"default"))&&a.push(f)}}const u=[o,a];return ze(t)&&r.set(t,u),u}function Of(t){return t[0]!=="$"&&!Qi(t)}const c_=t=>t[0]==="_"||t==="$stable",bh=t=>pe(t)?t.map(Cn):[Cn(t)],jI=(t,e,n)=>{if(e._n)return e;const r=Dn((...s)=>bh(e(...s)),n);return r._c=!1,r},u_=(t,e,n)=>{const r=t._ctx;for(const s in t){if(c_(s))continue;const i=t[s];if(Ee(i))e[s]=jI(s,i,r);else if(i!=null){const o=bh(i);e[s]=()=>o}}},h_=(t,e)=>{const n=bh(e);t.slots.default=()=>n},d_=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},HI=(t,e,n)=>{const r=t.slots=i_();if(t.vnode.shapeFlag&32){const s=e._;s?(d_(r,e,n),n&&Ig(r,"_",s,!0)):u_(e,r)}else e&&h_(t,e)},WI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=We;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:d_(s,e,n):(i=!e.$stable,u_(e,s)),o=e}else e&&(h_(t,e),o={default:1});if(i)for(const a in s)!c_(a)&&o[a]==null&&delete s[a]},on=sb;function qI(t){return GI(t)}function GI(t,e){const n=Tl();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:d,parentNode:f,nextSibling:m,setScopeId:g=Ln,insertStaticContent:R}=t,L=(w,E,M,Y=null,q=null,X=null,ne=void 0,T=null,b=!!E.dynamicChildren)=>{if(w===E)return;w&&!Ui(w,E)&&(Y=G(w),Me(w,q,X,!0),w=null),E.patchFlag===-2&&(b=!1,E.dynamicChildren=null);const{type:D,ref:z,shapeFlag:Z}=E;switch(D){case Mo:k(w,E,M,Y);break;case Vr:F(w,E,M,Y);break;case Dc:w==null&&H(E,M,Y,ne);break;case At:N(w,E,M,Y,q,X,ne,T,b);break;default:Z&1?j(w,E,M,Y,q,X,ne,T,b):Z&6?A(w,E,M,Y,q,X,ne,T,b):(Z&64||Z&128)&&D.process(w,E,M,Y,q,X,ne,T,b,oe)}z!=null&&q&&Wa(z,w&&w.ref,X,E||w,!E)},k=(w,E,M,Y)=>{if(w==null)r(E.el=a(E.children),M,Y);else{const q=E.el=w.el;E.children!==w.children&&u(q,E.children)}},F=(w,E,M,Y)=>{w==null?r(E.el=c(E.children||""),M,Y):E.el=w.el},H=(w,E,M,Y)=>{[w.el,w.anchor]=R(w.children,E,M,Y,w.el,w.anchor)},P=({el:w,anchor:E},M,Y)=>{let q;for(;w&&w!==E;)q=m(w),r(w,M,Y),w=q;r(E,M,Y)},C=({el:w,anchor:E})=>{let M;for(;w&&w!==E;)M=m(w),s(w),w=M;s(E)},j=(w,E,M,Y,q,X,ne,T,b)=>{E.type==="svg"?ne="svg":E.type==="math"&&(ne="mathml"),w==null?U(E,M,Y,q,X,ne,T,b):y(w,E,q,X,ne,T,b)},U=(w,E,M,Y,q,X,ne,T)=>{let b,D;const{props:z,shapeFlag:Z,transition:Q,dirs:x}=w;if(b=w.el=o(w.type,X,z&&z.is,z),Z&8?d(b,w.children):Z&16&&_(w.children,b,null,Y,q,Oc(w,X),ne,T),x&&is(w,null,Y,"created"),I(b,w,w.scopeId,ne,Y),z){for(const le in z)le!=="value"&&!Qi(le)&&i(b,le,null,z[le],X,Y);"value"in z&&i(b,"value",null,z.value,X),(D=z.onVnodeBeforeMount)&&Sn(D,Y,w)}x&&is(w,null,Y,"beforeMount");const B=KI(q,Q);B&&Q.beforeEnter(b),r(b,E,M),((D=z&&z.onVnodeMounted)||B||x)&&on(()=>{D&&Sn(D,Y,w),B&&Q.enter(b),x&&is(w,null,Y,"mounted")},q)},I=(w,E,M,Y,q)=>{if(M&&g(w,M),Y)for(let X=0;X<Y.length;X++)g(w,Y[X]);if(q){let X=q.subTree;if(E===X||y_(X.type)&&(X.ssContent===E||X.ssFallback===E)){const ne=q.vnode;I(w,ne,ne.scopeId,ne.slotScopeIds,q.parent)}}},_=(w,E,M,Y,q,X,ne,T,b=0)=>{for(let D=b;D<w.length;D++){const z=w[D]=T?br(w[D]):Cn(w[D]);L(null,z,E,M,Y,q,X,ne,T)}},y=(w,E,M,Y,q,X,ne)=>{const T=E.el=w.el;let{patchFlag:b,dynamicChildren:D,dirs:z}=E;b|=w.patchFlag&16;const Z=w.props||We,Q=E.props||We;let x;if(M&&os(M,!1),(x=Q.onVnodeBeforeUpdate)&&Sn(x,M,E,w),z&&is(E,w,M,"beforeUpdate"),M&&os(M,!0),(Z.innerHTML&&Q.innerHTML==null||Z.textContent&&Q.textContent==null)&&d(T,""),D?S(w.dynamicChildren,D,T,M,Y,Oc(E,q),X):ne||Te(w,E,T,null,M,Y,Oc(E,q),X,!1),b>0){if(b&16)O(T,Z,Q,M,q);else if(b&2&&Z.class!==Q.class&&i(T,"class",null,Q.class,q),b&4&&i(T,"style",Z.style,Q.style,q),b&8){const B=E.dynamicProps;for(let le=0;le<B.length;le++){const ue=B[le],Ye=Z[ue],st=Q[ue];(st!==Ye||ue==="value")&&i(T,ue,Ye,st,q,M)}}b&1&&w.children!==E.children&&d(T,E.children)}else!ne&&D==null&&O(T,Z,Q,M,q);((x=Q.onVnodeUpdated)||z)&&on(()=>{x&&Sn(x,M,E,w),z&&is(E,w,M,"updated")},Y)},S=(w,E,M,Y,q,X,ne)=>{for(let T=0;T<E.length;T++){const b=w[T],D=E[T],z=b.el&&(b.type===At||!Ui(b,D)||b.shapeFlag&70)?f(b.el):M;L(b,D,z,null,Y,q,X,ne,!0)}},O=(w,E,M,Y,q)=>{if(E!==M){if(E!==We)for(const X in E)!Qi(X)&&!(X in M)&&i(w,X,E[X],null,q,Y);for(const X in M){if(Qi(X))continue;const ne=M[X],T=E[X];ne!==T&&X!=="value"&&i(w,X,T,ne,q,Y)}"value"in M&&i(w,"value",E.value,M.value,q)}},N=(w,E,M,Y,q,X,ne,T,b)=>{const D=E.el=w?w.el:a(""),z=E.anchor=w?w.anchor:a("");let{patchFlag:Z,dynamicChildren:Q,slotScopeIds:x}=E;x&&(T=T?T.concat(x):x),w==null?(r(D,M,Y),r(z,M,Y),_(E.children||[],M,z,q,X,ne,T,b)):Z>0&&Z&64&&Q&&w.dynamicChildren?(S(w.dynamicChildren,Q,M,q,X,ne,T),(E.key!=null||q&&E===q.subTree)&&f_(w,E,!0)):Te(w,E,M,z,q,X,ne,T,b)},A=(w,E,M,Y,q,X,ne,T,b)=>{E.slotScopeIds=T,w==null?E.shapeFlag&512?q.ctx.activate(E,M,Y,ne,b):rt(E,M,Y,q,X,ne,b):ft(w,E,b)},rt=(w,E,M,Y,q,X,ne)=>{const T=w.component=hb(w,Y,q);if(Jg(w)&&(T.ctx.renderer=oe),db(T,!1,ne),T.asyncDep){if(q&&q.registerDep(T,Ae,ne),!w.el){const b=T.subTree=it(Vr);F(null,b,E,M)}}else Ae(T,w,E,M,q,X,ne)},ft=(w,E,M)=>{const Y=E.component=w.component;if(nb(w,E,M))if(Y.asyncDep&&!Y.asyncResolved){he(Y,E,M);return}else Y.next=E,Y.update();else E.el=w.el,Y.vnode=E},Ae=(w,E,M,Y,q,X,ne)=>{const T=()=>{if(w.isMounted){let{next:Z,bu:Q,u:x,parent:B,vnode:le}=w;{const bt=p_(w);if(bt){Z&&(Z.el=le.el,he(w,Z,ne)),bt.asyncDep.then(()=>{w.isUnmounted||T()});return}}let ue=Z,Ye;os(w,!1),Z?(Z.el=le.el,he(w,Z,ne)):Z=le,Q&&ba(Q),(Ye=Z.props&&Z.props.onVnodeBeforeUpdate)&&Sn(Ye,B,Z,le),os(w,!0);const st=Lc(w),tt=w.subTree;w.subTree=st,L(tt,st,f(tt.el),G(tt),w,q,X),Z.el=st.el,ue===null&&rb(w,st.el),x&&on(x,q),(Ye=Z.props&&Z.props.onVnodeUpdated)&&on(()=>Sn(Ye,B,Z,le),q)}else{let Z;const{el:Q,props:x}=E,{bm:B,m:le,parent:ue,root:Ye,type:st}=w,tt=Js(E);if(os(w,!1),B&&ba(B),!tt&&(Z=x&&x.onVnodeBeforeMount)&&Sn(Z,ue,E),os(w,!0),Q&&Ne){const bt=()=>{w.subTree=Lc(w),Ne(Q,w.subTree,w,q,null)};tt&&st.__asyncHydrate?st.__asyncHydrate(Q,w,bt):bt()}else{Ye.ce&&Ye.ce._injectChildStyle(st);const bt=w.subTree=Lc(w);L(null,bt,M,Y,w,q,X),E.el=bt.el}if(le&&on(le,q),!tt&&(Z=x&&x.onVnodeMounted)){const bt=E;on(()=>Sn(Z,ue,bt),q)}(E.shapeFlag&256||ue&&Js(ue.vnode)&&ue.vnode.shapeFlag&256)&&w.a&&on(w.a,q),w.isMounted=!0,E=M=Y=null}};w.scope.on();const b=w.effect=new Pg(T);w.scope.off();const D=w.update=b.run.bind(b),z=w.job=b.runIfDirty.bind(b);z.i=w,z.id=w.uid,b.scheduler=()=>yh(z),os(w,!0),D()},he=(w,E,M)=>{E.component=w;const Y=w.vnode.props;w.vnode=E,w.next=null,$I(w,E.props,Y,M),WI(w,E.children,M),Gr(),Rf(w),Kr()},Te=(w,E,M,Y,q,X,ne,T,b=!1)=>{const D=w&&w.children,z=w?w.shapeFlag:0,Z=E.children,{patchFlag:Q,shapeFlag:x}=E;if(Q>0){if(Q&128){Ct(D,Z,M,Y,q,X,ne,T,b);return}else if(Q&256){_t(D,Z,M,Y,q,X,ne,T,b);return}}x&8?(z&16&&pt(D,q,X),Z!==D&&d(M,Z)):z&16?x&16?Ct(D,Z,M,Y,q,X,ne,T,b):pt(D,q,X,!0):(z&8&&d(M,""),x&16&&_(Z,M,Y,q,X,ne,T,b))},_t=(w,E,M,Y,q,X,ne,T,b)=>{w=w||Ys,E=E||Ys;const D=w.length,z=E.length,Z=Math.min(D,z);let Q;for(Q=0;Q<Z;Q++){const x=E[Q]=b?br(E[Q]):Cn(E[Q]);L(w[Q],x,M,null,q,X,ne,T,b)}D>z?pt(w,q,X,!0,!1,Z):_(E,M,Y,q,X,ne,T,b,Z)},Ct=(w,E,M,Y,q,X,ne,T,b)=>{let D=0;const z=E.length;let Z=w.length-1,Q=z-1;for(;D<=Z&&D<=Q;){const x=w[D],B=E[D]=b?br(E[D]):Cn(E[D]);if(Ui(x,B))L(x,B,M,null,q,X,ne,T,b);else break;D++}for(;D<=Z&&D<=Q;){const x=w[Z],B=E[Q]=b?br(E[Q]):Cn(E[Q]);if(Ui(x,B))L(x,B,M,null,q,X,ne,T,b);else break;Z--,Q--}if(D>Z){if(D<=Q){const x=Q+1,B=x<z?E[x].el:Y;for(;D<=Q;)L(null,E[D]=b?br(E[D]):Cn(E[D]),M,B,q,X,ne,T,b),D++}}else if(D>Q)for(;D<=Z;)Me(w[D],q,X,!0),D++;else{const x=D,B=D,le=new Map;for(D=B;D<=Q;D++){const Gt=E[D]=b?br(E[D]):Cn(E[D]);Gt.key!=null&&le.set(Gt.key,D)}let ue,Ye=0;const st=Q-B+1;let tt=!1,bt=0;const qn=new Array(st);for(D=0;D<st;D++)qn[D]=0;for(D=x;D<=Z;D++){const Gt=w[D];if(Ye>=st){Me(Gt,q,X,!0);continue}let hn;if(Gt.key!=null)hn=le.get(Gt.key);else for(ue=B;ue<=Q;ue++)if(qn[ue-B]===0&&Ui(Gt,E[ue])){hn=ue;break}hn===void 0?Me(Gt,q,X,!0):(qn[hn-B]=D+1,hn>=bt?bt=hn:tt=!0,L(Gt,E[hn],M,null,q,X,ne,T,b),Ye++)}const Ns=tt?zI(qn):Ys;for(ue=Ns.length-1,D=st-1;D>=0;D--){const Gt=B+D,hn=E[Gt],Os=Gt+1<z?E[Gt+1].el:Y;qn[D]===0?L(null,hn,M,Os,q,X,ne,T,b):tt&&(ue<0||D!==Ns[ue]?et(hn,M,Os,2):ue--)}}},et=(w,E,M,Y,q=null)=>{const{el:X,type:ne,transition:T,children:b,shapeFlag:D}=w;if(D&6){et(w.component.subTree,E,M,Y);return}if(D&128){w.suspense.move(E,M,Y);return}if(D&64){ne.move(w,E,M,oe);return}if(ne===At){r(X,E,M);for(let Z=0;Z<b.length;Z++)et(b[Z],E,M,Y);r(w.anchor,E,M);return}if(ne===Dc){P(w,E,M);return}if(Y!==2&&D&1&&T)if(Y===0)T.beforeEnter(X),r(X,E,M),on(()=>T.enter(X),q);else{const{leave:Z,delayLeave:Q,afterLeave:x}=T,B=()=>r(X,E,M),le=()=>{Z(X,()=>{B(),x&&x()})};Q?Q(X,B,le):le()}else r(X,E,M)},Me=(w,E,M,Y=!1,q=!1)=>{const{type:X,props:ne,ref:T,children:b,dynamicChildren:D,shapeFlag:z,patchFlag:Z,dirs:Q,cacheIndex:x}=w;if(Z===-2&&(q=!1),T!=null&&Wa(T,null,M,w,!0),x!=null&&(E.renderCache[x]=void 0),z&256){E.ctx.deactivate(w);return}const B=z&1&&Q,le=!Js(w);let ue;if(le&&(ue=ne&&ne.onVnodeBeforeUnmount)&&Sn(ue,E,w),z&6)xt(w.component,M,Y);else{if(z&128){w.suspense.unmount(M,Y);return}B&&is(w,null,E,"beforeUnmount"),z&64?w.type.remove(w,E,M,oe,Y):D&&!D.hasOnce&&(X!==At||Z>0&&Z&64)?pt(D,E,M,!1,!0):(X===At&&Z&384||!q&&z&16)&&pt(b,E,M),Y&&Be(w)}(le&&(ue=ne&&ne.onVnodeUnmounted)||B)&&on(()=>{ue&&Sn(ue,E,w),B&&is(w,null,E,"unmounted")},M)},Be=w=>{const{type:E,el:M,anchor:Y,transition:q}=w;if(E===At){qt(M,Y);return}if(E===Dc){C(w);return}const X=()=>{s(M),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(w.shapeFlag&1&&q&&!q.persisted){const{leave:ne,delayLeave:T}=q,b=()=>ne(M,X);T?T(w.el,X,b):b()}else X()},qt=(w,E)=>{let M;for(;w!==E;)M=m(w),s(w),w=M;s(E)},xt=(w,E,M)=>{const{bum:Y,scope:q,job:X,subTree:ne,um:T,m:b,a:D}=w;Lf(b),Lf(D),Y&&ba(Y),q.stop(),X&&(X.flags|=8,Me(ne,w,E,M)),T&&on(T,E),on(()=>{w.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},pt=(w,E,M,Y=!1,q=!1,X=0)=>{for(let ne=X;ne<w.length;ne++)Me(w[ne],E,M,Y,q)},G=w=>{if(w.shapeFlag&6)return G(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const E=m(w.anchor||w.el),M=E&&E[pI];return M?m(M):E};let re=!1;const te=(w,E,M)=>{w==null?E._vnode&&Me(E._vnode,null,null,!0):L(E._vnode||null,w,E,null,null,null,M),E._vnode=w,re||(re=!0,Rf(),zg(),re=!1)},oe={p:L,um:Me,m:et,r:Be,mt:rt,mc:_,pc:Te,pbc:S,n:G,o:t};let Ie,Ne;return{render:te,hydrate:Ie,createApp:VI(te,Ie)}}function Oc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function os({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function KI(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function f_(t,e,n=!1){const r=t.children,s=e.children;if(pe(r)&&pe(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=br(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&f_(o,a)),a.type===Mo&&(a.el=o.el)}}function zI(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function p_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:p_(e)}function Lf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const YI=Symbol.for("v-scx"),QI=()=>pn(YI);function ir(t,e,n){return m_(t,e,n)}function m_(t,e,n=We){const{immediate:r,deep:s,flush:i,once:o}=n,a=Pt({},n),c=e&&r||!e&&i!=="post";let u;if(_o){if(i==="sync"){const g=QI();u=g.__watcherHandles||(g.__watcherHandles=[])}else if(!c){const g=()=>{};return g.stop=Ln,g.resume=Ln,g.pause=Ln,g}}const d=Rt;a.call=(g,R,L)=>Bn(g,d,R,L);let f=!1;i==="post"?a.scheduler=g=>{on(g,d&&d.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(g,R)=>{R?g():yh(g)}),a.augmentJob=g=>{e&&(g.flags|=4),f&&(g.flags|=2,d&&(g.id=d.uid,g.i=d))};const m=uI(t,e,a);return _o&&(u?u.push(m):c&&m()),m}function XI(t,e,n){const r=this.proxy,s=gt(t)?t.includes(".")?g_(r,t):()=>r[t]:t.bind(r,r);let i;Ee(e)?i=e:(i=e.handler,n=e);const o=Vo(this),a=m_(s,i.bind(r),n);return o(),a}function g_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const JI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${_n(e)}Modifiers`]||t[`${ws(e)}Modifiers`];function ZI(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||We;let s=n;const i=e.startsWith("update:"),o=i&&JI(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>gt(d)?d.trim():d)),o.number&&(s=n.map(Ua)));let a,c=r[a=Rc(e)]||r[a=Rc(_n(e))];!c&&i&&(c=r[a=Rc(ws(e))]),c&&Bn(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Bn(u,t,6,s)}}function __(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Ee(t)){const c=u=>{const d=__(u,e,!0);d&&(a=!0,Pt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ze(t)&&r.set(t,null),null):(pe(i)?i.forEach(c=>o[c]=null):Pt(o,i),ze(t)&&r.set(t,o),o)}function Sl(t,e){return!t||!_l(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ue(t,e[0].toLowerCase()+e.slice(1))||Ue(t,ws(e))||Ue(t,e))}function Lc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:d,props:f,data:m,setupState:g,ctx:R,inheritAttrs:L}=t,k=Ha(t);let F,H;try{if(n.shapeFlag&4){const C=s||r,j=C;F=Cn(u.call(j,C,d,f,g,m,R)),H=a}else{const C=e;F=Cn(C.length>1?C(f,{attrs:a,slots:o,emit:c}):C(f,null)),H=e.props?a:eb(a)}}catch(C){eo.length=0,wl(C,t,1),F=it(Vr)}let P=F;if(H&&L!==!1){const C=Object.keys(H),{shapeFlag:j}=P;C.length&&j&7&&(i&&C.some(sh)&&(H=tb(H,i)),P=si(P,H,!1,!0))}return n.dirs&&(P=si(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&vh(P,n.transition),F=P,Ha(k),F}const eb=t=>{let e;for(const n in t)(n==="class"||n==="style"||_l(n))&&((e||(e={}))[n]=t[n]);return e},tb=(t,e)=>{const n={};for(const r in t)(!sh(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function nb(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Df(r,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let f=0;f<d.length;f++){const m=d[f];if(o[m]!==r[m]&&!Sl(u,m))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Df(r,o,u):!0:!!o;return!1}function Df(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Sl(n,i))return!0}return!1}function rb({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const y_=t=>t.__isSuspense;function sb(t,e){e&&e.pendingBranch?pe(t)?e.effects.push(...t):e.effects.push(t):fI(t)}const At=Symbol.for("v-fgt"),Mo=Symbol.for("v-txt"),Vr=Symbol.for("v-cmt"),Dc=Symbol.for("v-stc"),eo=[];let ln=null;function Ce(t=!1){eo.push(ln=t?null:[])}function ib(){eo.pop(),ln=eo[eo.length-1]||null}let po=1;function xf(t,e=!1){po+=t,t<0&&ln&&e&&(ln.hasOnce=!0)}function v_(t){return t.dynamicChildren=po>0?ln||Ys:null,ib(),po>0&&ln&&ln.push(t),t}function Xe(t,e,n,r,s,i){return v_($(t,e,n,r,s,i,!0))}function xn(t,e,n,r,s){return v_(it(t,e,n,r,s,!0))}function mo(t){return t?t.__v_isVNode===!0:!1}function Ui(t,e){return t.type===e.type&&t.key===e.key}const E_=({key:t})=>t??null,Aa=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?gt(t)||ut(t)||Ee(t)?{i:vt,r:t,k:e,f:!!n}:t:null);function $(t,e=null,n=null,r=0,s=null,i=t===At?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&E_(e),ref:e&&Aa(e),scopeId:Qg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:vt};return a?(wh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=gt(n)?8:16),po>0&&!o&&ln&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ln.push(c),c}const it=ob;function ob(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===SI)&&(t=Vr),mo(t)){const a=si(t,e,!0);return n&&wh(a,n),po>0&&!i&&ln&&(a.shapeFlag&6?ln[ln.indexOf(t)]=a:ln.push(a)),a.patchFlag=-2,a}if(_b(t)&&(t=t.__vccOpts),e){e=ab(e);let{class:a,style:c}=e;a&&!gt(a)&&(e.class=As(a)),ze(c)&&(mh(c)&&!pe(c)&&(c=Pt({},c)),e.style=ah(c))}const o=gt(t)?1:y_(t)?128:mI(t)?64:ze(t)?4:Ee(t)?2:0;return $(t,e,n,r,s,o,i,!0)}function ab(t){return t?mh(t)||o_(t)?Pt({},t):t:null}function si(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?lb(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&E_(u),ref:e&&e.ref?n&&i?pe(i)?i.concat(Aa(e)):[i,Aa(e)]:Aa(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==At?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&si(t.ssContent),ssFallback:t.ssFallback&&si(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&vh(d,c.clone(d)),d}function or(t=" ",e=0){return it(Mo,null,t,e)}function Le(t="",e=!1){return e?(Ce(),xn(Vr,null,t)):it(Vr,null,t)}function Cn(t){return t==null||typeof t=="boolean"?it(Vr):pe(t)?it(At,null,t.slice()):mo(t)?br(t):it(Mo,null,String(t))}function br(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:si(t)}function wh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(pe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),wh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!o_(e)?e._ctx=vt:s===3&&vt&&(vt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ee(e)?(e={default:e,_ctx:vt},n=32):(e=String(e),r&64?(n=16,e=[or(e)]):n=8);t.children=e,t.shapeFlag|=n}function lb(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=As([e.class,r.class]));else if(s==="style")e.style=ah([e.style,r.style]);else if(_l(s)){const i=e[s],o=r[s];o&&i!==o&&!(pe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Sn(t,e,n,r=null){Bn(t,e,7,[n,r])}const cb=r_();let ub=0;function hb(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||cb,i={uid:ub++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:l_(r,s),emitsOptions:__(r,s),emit:null,emitted:null,propsDefaults:We,inheritAttrs:r.inheritAttrs,ctx:We,data:We,props:We,attrs:We,slots:We,refs:We,setupState:We,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ZI.bind(null,i),t.ce&&t.ce(i),i}let Rt=null;const go=()=>Rt||vt;let Ka,du;{const t=Tl(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ka=e("__VUE_INSTANCE_SETTERS__",n=>Rt=n),du=e("__VUE_SSR_SETTERS__",n=>_o=n)}const Vo=t=>{const e=Rt;return Ka(t),t.scope.on(),()=>{t.scope.off(),Ka(e)}},Mf=()=>{Rt&&Rt.scope.off(),Ka(null)};function T_(t){return t.vnode.shapeFlag&4}let _o=!1;function db(t,e=!1,n=!1){e&&du(e);const{props:r,children:s}=t.vnode,i=T_(t);UI(t,r,i,e),HI(t,s,n);const o=i?fb(t,e):void 0;return e&&du(!1),o}function fb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,kI);const{setup:r}=n;if(r){Gr();const s=t.setupContext=r.length>1?mb(t):null,i=Vo(t),o=Do(r,t,0,[t.props,s]),a=vg(o);if(Kr(),i(),(a||t.sp)&&!Js(t)&&Xg(t),a){if(o.then(Mf,Mf),e)return o.then(c=>{Vf(t,c,e)}).catch(c=>{wl(c,t,0)});t.asyncDep=o}else Vf(t,o,e)}else I_(t,e)}function Vf(t,e,n){Ee(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ze(e)&&(t.setupState=qg(e)),I_(t,n)}let Ff;function I_(t,e,n){const r=t.type;if(!t.render){if(!e&&Ff&&!r.render){const s=r.template||Ih(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=Pt(Pt({isCustomElement:i,delimiters:a},o),c);r.render=Ff(s,u)}}t.render=r.render||Ln}{const s=Vo(t);Gr();try{NI(t)}finally{Kr(),s()}}}const pb={get(t,e){return Bt(t,"get",""),t[e]}};function mb(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,pb),slots:t.slots,emit:t.emit,expose:e}}function Pl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(qg(gh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Zi)return Zi[n](t)},has(e,n){return n in e||n in Zi}})):t.proxy}function gb(t,e=!0){return Ee(t)?t.displayName||t.name:t.name||e&&t.__name}function _b(t){return Ee(t)&&"__vccOpts"in t}const Ke=(t,e)=>lI(t,e,_o);function Cl(t,e,n){const r=arguments.length;return r===2?ze(e)&&!pe(e)?mo(e)?it(t,null,[e]):it(t,e):it(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&mo(n)&&(n=[n]),it(t,e,n))}const yb="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fu;const Uf=typeof window<"u"&&window.trustedTypes;if(Uf)try{fu=Uf.createPolicy("vue",{createHTML:t=>t})}catch{}const b_=fu?t=>fu.createHTML(t):t=>t,vb="http://www.w3.org/2000/svg",Eb="http://www.w3.org/1998/Math/MathML",Jn=typeof document<"u"?document:null,$f=Jn&&Jn.createElement("template"),Tb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Jn.createElementNS(vb,t):e==="mathml"?Jn.createElementNS(Eb,t):n?Jn.createElement(t,{is:n}):Jn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Jn.createTextNode(t),createComment:t=>Jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{$f.innerHTML=b_(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=$f.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ib=Symbol("_vtc");function bb(t,e,n){const r=t[Ib];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Bf=Symbol("_vod"),wb=Symbol("_vsh"),Ab=Symbol(""),Rb=/(^|;)\s*display\s*:/;function Sb(t,e,n){const r=t.style,s=gt(n);let i=!1;if(n&&!s){if(e)if(gt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ra(r,a,"")}else for(const o in e)n[o]==null&&Ra(r,o,"");for(const o in n)o==="display"&&(i=!0),Ra(r,o,n[o])}else if(s){if(e!==n){const o=r[Ab];o&&(n+=";"+o),r.cssText=n,i=Rb.test(n)}}else e&&t.removeAttribute("style");Bf in t&&(t[Bf]=i?r.display:"",t[wb]&&(r.display="none"))}const jf=/\s*!important$/;function Ra(t,e,n){if(pe(n))n.forEach(r=>Ra(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Pb(t,e);jf.test(n)?t.setProperty(ws(r),n.replace(jf,""),"important"):t[r]=n}}const Hf=["Webkit","Moz","ms"],xc={};function Pb(t,e){const n=xc[e];if(n)return n;let r=_n(e);if(r!=="filter"&&r in t)return xc[e]=r;r=El(r);for(let s=0;s<Hf.length;s++){const i=Hf[s]+r;if(i in t)return xc[e]=i}return e}const Wf="http://www.w3.org/1999/xlink";function qf(t,e,n,r,s,i=LT(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Wf,e.slice(6,e.length)):t.setAttributeNS(Wf,e,n):n==null||i&&!bg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":bn(n)?String(n):n)}function Gf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?b_(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=bg(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function hs(t,e,n,r){t.addEventListener(e,n,r)}function Cb(t,e,n,r){t.removeEventListener(e,n,r)}const Kf=Symbol("_vei");function kb(t,e,n,r,s=null){const i=t[Kf]||(t[Kf]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Nb(e);if(r){const u=i[e]=Db(r,s);hs(t,a,u,c)}else o&&(Cb(t,a,o,c),i[e]=void 0)}}const zf=/(?:Once|Passive|Capture)$/;function Nb(t){let e;if(zf.test(t)){e={};let r;for(;r=t.match(zf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ws(t.slice(2)),e]}let Mc=0;const Ob=Promise.resolve(),Lb=()=>Mc||(Ob.then(()=>Mc=0),Mc=Date.now());function Db(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Bn(xb(r,n.value),e,5,[r])};return n.value=t,n.attached=Lb(),n}function xb(t,e){if(pe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Yf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Mb=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?bb(t,r,o):e==="style"?Sb(t,n,r):_l(e)?sh(e)||kb(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vb(t,e,r,o))?(Gf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qf(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!gt(r))?Gf(t,_n(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),qf(t,e,r,o))};function Vb(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yf(e)&&Ee(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Yf(e)&&gt(n)?!1:e in t}const za=t=>{const e=t.props["onUpdate:modelValue"]||!1;return pe(e)?n=>ba(e,n):e};function Fb(t){t.target.composing=!0}function Qf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zs=Symbol("_assign"),an={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Zs]=za(s);const i=r||s.props&&s.props.type==="number";hs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ua(a)),t[Zs](a)}),n&&hs(t,"change",()=>{t.value=t.value.trim()}),e||(hs(t,"compositionstart",Fb),hs(t,"compositionend",Qf),hs(t,"change",Qf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Zs]=za(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ua(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},pu={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=yl(e);hs(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Ua(Ya(o)):Ya(o));t[Zs](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Al(()=>{t._assigning=!1})}),t[Zs]=za(r)},mounted(t,{value:e}){Xf(t,e)},beforeUpdate(t,e,n){t[Zs]=za(n)},updated(t,{value:e}){t._assigning||Xf(t,e)}};function Xf(t,e){const n=t.multiple,r=pe(e);if(!(n&&!r&&!yl(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=Ya(o);if(n)if(r){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=xT(e,a)>-1}else o.selected=e.has(a);else if(Il(Ya(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ya(t){return"_value"in t?t._value:t.value}const Ub=["ctrl","shift","alt","meta"],$b={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ub.some(n=>t[`${n}Key`]&&!e.includes(n))},Ah=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=$b[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Bb=Pt({patchProp:Mb},Tb);let Jf;function jb(){return Jf||(Jf=qI(Bb))}const Hb=(...t)=>{const e=jb().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=qb(r);if(!s)return;const i=e._component;!Ee(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Wb(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Wb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function qb(t){return gt(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Bs=typeof document<"u";function w_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Gb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&w_(t.default)}const Fe=Object.assign;function Vc(t,e){const n={};for(const r in e){const s=e[r];n[r]=wn(s)?s.map(t):t(s)}return n}const to=()=>{},wn=Array.isArray,A_=/#/g,Kb=/&/g,zb=/\//g,Yb=/=/g,Qb=/\?/g,R_=/\+/g,Xb=/%5B/g,Jb=/%5D/g,S_=/%5E/g,Zb=/%60/g,P_=/%7B/g,ew=/%7C/g,C_=/%7D/g,tw=/%20/g;function Rh(t){return encodeURI(""+t).replace(ew,"|").replace(Xb,"[").replace(Jb,"]")}function nw(t){return Rh(t).replace(P_,"{").replace(C_,"}").replace(S_,"^")}function mu(t){return Rh(t).replace(R_,"%2B").replace(tw,"+").replace(A_,"%23").replace(Kb,"%26").replace(Zb,"`").replace(P_,"{").replace(C_,"}").replace(S_,"^")}function rw(t){return mu(t).replace(Yb,"%3D")}function sw(t){return Rh(t).replace(A_,"%23").replace(Qb,"%3F")}function iw(t){return t==null?"":sw(t).replace(zb,"%2F")}function yo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const ow=/\/$/,aw=t=>t.replace(ow,"");function Fc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=hw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:yo(o)}}function lw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Zf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function cw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ii(e.matched[r],n.matched[s])&&k_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ii(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function k_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!uw(t[n],e[n]))return!1;return!0}function uw(t,e){return wn(t)?ep(t,e):wn(e)?ep(e,t):t===e}function ep(t,e){return wn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function hw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const yr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var vo;(function(t){t.pop="pop",t.push="push"})(vo||(vo={}));var no;(function(t){t.back="back",t.forward="forward",t.unknown=""})(no||(no={}));function dw(t){if(!t)if(Bs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),aw(t)}const fw=/^[^#]+#/;function pw(t,e){return t.replace(fw,"#")+e}function mw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const kl=()=>({left:window.scrollX,top:window.scrollY});function gw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=mw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function tp(t,e){return(history.state?history.state.position-e:-1)+t}const gu=new Map;function _w(t,e){gu.set(t,e)}function yw(t){const e=gu.get(t);return gu.delete(t),e}let vw=()=>location.protocol+"//"+location.host;function N_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Zf(c,"")}return Zf(n,t)+r+s}function Ew(t,e,n,r){let s=[],i=[],o=null;const a=({state:m})=>{const g=N_(t,location),R=n.value,L=e.value;let k=0;if(m){if(n.value=g,e.value=m,o&&o===R){o=null;return}k=L?m.position-L.position:0}else r(g);s.forEach(F=>{F(n.value,R,{delta:k,type:vo.pop,direction:k?k>0?no.forward:no.back:no.unknown})})};function c(){o=n.value}function u(m){s.push(m);const g=()=>{const R=s.indexOf(m);R>-1&&s.splice(R,1)};return i.push(g),g}function d(){const{history:m}=window;m.state&&m.replaceState(Fe({},m.state,{scroll:kl()}),"")}function f(){for(const m of i)m();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function np(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?kl():null}}function Tw(t){const{history:e,location:n}=window,r={value:N_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const f=t.indexOf("#"),m=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:vw()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(g){console.error(g),n[d?"replace":"assign"](m)}}function o(c,u){const d=Fe({},e.state,np(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,d,!0),r.value=c}function a(c,u){const d=Fe({},s.value,e.state,{forward:c,scroll:kl()});i(d.current,d,!0);const f=Fe({},np(r.value,c,null),{position:d.position+1},u);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Iw(t){t=dw(t);const e=Tw(t),n=Ew(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Fe({location:"",base:t,go:r,createHref:pw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function bw(t){return typeof t=="string"||t&&typeof t=="object"}function O_(t){return typeof t=="string"||typeof t=="symbol"}const L_=Symbol("");var rp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(rp||(rp={}));function oi(t,e){return Fe(new Error,{type:t,[L_]:!0},e)}function Yn(t,e){return t instanceof Error&&L_ in t&&(e==null||!!(t.type&e))}const sp="[^/]+?",ww={sensitive:!1,strict:!1,start:!0,end:!0},Aw=/[.+*?^${}()[\]/\\]/g;function Rw(t,e){const n=Fe({},ww,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const m=u[f];let g=40+(n.sensitive?.25:0);if(m.type===0)f||(s+="/"),s+=m.value.replace(Aw,"\\$&"),g+=40;else if(m.type===1){const{value:R,repeatable:L,optional:k,regexp:F}=m;i.push({name:R,repeatable:L,optional:k});const H=F||sp;if(H!==sp){g+=10;try{new RegExp(`(${H})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${R}" (${H}): `+C.message)}}let P=L?`((?:${H})(?:/(?:${H}))*)`:`(${H})`;f||(P=k&&u.length<2?`(?:/${P})`:"/"+P),k&&(P+="?"),s+=P,g+=20,k&&(g+=-8),L&&(g+=-20),H===".*"&&(g+=-50)}d.push(g)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const d=u.match(o),f={};if(!d)return null;for(let m=1;m<d.length;m++){const g=d[m]||"",R=i[m-1];f[R.name]=g&&R.repeatable?g.split("/"):g}return f}function c(u){let d="",f=!1;for(const m of t){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const g of m)if(g.type===0)d+=g.value;else if(g.type===1){const{value:R,repeatable:L,optional:k}=g,F=R in u?u[R]:"";if(wn(F)&&!L)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const H=wn(F)?F.join("/"):F;if(!H)if(k)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${R}"`);d+=H}}return d||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Sw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function D_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Sw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ip(r))return 1;if(ip(s))return-1}return s.length-r.length}function ip(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Pw={type:0,value:""},Cw=/[a-zA-Z0-9_]/;function kw(t){if(!t)return[[]];if(t==="/")return[[Pw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",d="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:Cw.test(c)?m():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}function Nw(t,e,n){const r=Rw(kw(t.path),n),s=Fe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Ow(t,e){const n=[],r=new Map;e=cp({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,m,g){const R=!g,L=ap(f);L.aliasOf=g&&g.record;const k=cp(e,f),F=[L];if("alias"in f){const C=typeof f.alias=="string"?[f.alias]:f.alias;for(const j of C)F.push(ap(Fe({},L,{components:g?g.record.components:L.components,path:j,aliasOf:g?g.record:L})))}let H,P;for(const C of F){const{path:j}=C;if(m&&j[0]!=="/"){const U=m.record.path,I=U[U.length-1]==="/"?"":"/";C.path=m.record.path+(j&&I+j)}if(H=Nw(C,m,k),g?g.alias.push(H):(P=P||H,P!==H&&P.alias.push(H),R&&f.name&&!lp(H)&&o(f.name)),x_(H)&&c(H),L.children){const U=L.children;for(let I=0;I<U.length;I++)i(U[I],H,g&&g.children[I])}g=g||H}return P?()=>{o(P)}:to}function o(f){if(O_(f)){const m=r.get(f);m&&(r.delete(f),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(f);m>-1&&(n.splice(m,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const m=xw(f,n);n.splice(m,0,f),f.record.name&&!lp(f)&&r.set(f.record.name,f)}function u(f,m){let g,R={},L,k;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw oi(1,{location:f});k=g.record.name,R=Fe(op(m.params,g.keys.filter(P=>!P.optional).concat(g.parent?g.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),f.params&&op(f.params,g.keys.map(P=>P.name))),L=g.stringify(R)}else if(f.path!=null)L=f.path,g=n.find(P=>P.re.test(L)),g&&(R=g.parse(L),k=g.record.name);else{if(g=m.name?r.get(m.name):n.find(P=>P.re.test(m.path)),!g)throw oi(1,{location:f,currentLocation:m});k=g.record.name,R=Fe({},m.params,f.params),L=g.stringify(R)}const F=[];let H=g;for(;H;)F.unshift(H.record),H=H.parent;return{name:k,path:L,params:R,matched:F,meta:Dw(F)}}t.forEach(f=>i(f));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:a,getRecordMatcher:s}}function op(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ap(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Lw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Lw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function lp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Dw(t){return t.reduce((e,n)=>Fe(e,n.meta),{})}function cp(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function xw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;D_(t,e[i])<0?r=i:n=i+1}const s=Mw(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Mw(t){let e=t;for(;e=e.parent;)if(x_(e)&&D_(t,e)===0)return e}function x_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Vw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(R_," "),o=i.indexOf("="),a=yo(o<0?i:i.slice(0,o)),c=o<0?null:yo(i.slice(o+1));if(a in e){let u=e[a];wn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function up(t){let e="";for(let n in t){const r=t[n];if(n=rw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(wn(r)?r.map(i=>i&&mu(i)):[r&&mu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Fw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=wn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Uw=Symbol(""),hp=Symbol(""),Nl=Symbol(""),M_=Symbol(""),_u=Symbol("");function $i(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function wr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const u=m=>{m===!1?c(oi(4,{from:n,to:e})):m instanceof Error?c(m):bw(m)?c(oi(2,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),a())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let f=Promise.resolve(d);t.length<3&&(f=f.then(u)),f.catch(m=>c(m))})}function Uc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(w_(c)){const d=(c.__vccOpts||c)[e];d&&i.push(wr(d,n,r,o,a,s))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=Gb(d)?d.default:d;o.mods[a]=d,o.components[a]=f;const g=(f.__vccOpts||f)[e];return g&&wr(g,n,r,o,a,s)()}))}}return i}function dp(t){const e=pn(Nl),n=pn(M_),r=Ke(()=>{const c=be(t.to);return e.resolve(c)}),s=Ke(()=>{const{matched:c}=r.value,{length:u}=c,d=c[u-1],f=n.matched;if(!d||!f.length)return-1;const m=f.findIndex(ii.bind(null,d));if(m>-1)return m;const g=fp(c[u-2]);return u>1&&fp(d)===g&&f[f.length-1].path!==g?f.findIndex(ii.bind(null,c[u-2])):m}),i=Ke(()=>s.value>-1&&Ww(n.params,r.value.params)),o=Ke(()=>s.value>-1&&s.value===n.matched.length-1&&k_(n.params,r.value.params));function a(c={}){if(Hw(c)){const u=e[be(t.replace)?"replace":"push"](be(t.to)).catch(to);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ke(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function $w(t){return t.length===1?t[0]:t}const Bw=xo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:dp,setup(t,{slots:e}){const n=Lo(dp(t)),{options:r}=pn(Nl),s=Ke(()=>({[pp(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[pp(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&$w(e.default(n));return t.custom?i:Cl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),jw=Bw;function Hw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ww(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!wn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function fp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const pp=(t,e,n)=>t??e??n,qw=xo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=pn(_u),s=Ke(()=>t.route||r.value),i=pn(hp,0),o=Ke(()=>{let u=be(i);const{matched:d}=s.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),a=Ke(()=>s.value.matched[o.value]);wa(hp,Ke(()=>o.value+1)),wa(Uw,a),wa(_u,s);const c=Ve();return ir(()=>[c.value,a.value,t.name],([u,d,f],[m,g,R])=>{d&&(d.instances[f]=u,g&&g!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),u&&d&&(!g||!ii(d,g)||!m)&&(d.enterCallbacks[f]||[]).forEach(L=>L(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,f=a.value,m=f&&f.components[d];if(!m)return mp(n.default,{Component:m,route:u});const g=f.props[d],R=g?g===!0?u.params:typeof g=="function"?g(u):g:null,k=Cl(m,Fe({},R,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(f.instances[d]=null)},ref:c}));return mp(n.default,{Component:k,route:u})||k}}});function mp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Gw=qw;function Kw(t){const e=Ow(t.routes,t),n=t.parseQuery||Vw,r=t.stringifyQuery||up,s=t.history,i=$i(),o=$i(),a=$i(),c=_h(yr);let u=yr;Bs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Vc.bind(null,G=>""+G),f=Vc.bind(null,iw),m=Vc.bind(null,yo);function g(G,re){let te,oe;return O_(G)?(te=e.getRecordMatcher(G),oe=re):oe=G,e.addRoute(oe,te)}function R(G){const re=e.getRecordMatcher(G);re&&e.removeRoute(re)}function L(){return e.getRoutes().map(G=>G.record)}function k(G){return!!e.getRecordMatcher(G)}function F(G,re){if(re=Fe({},re||c.value),typeof G=="string"){const E=Fc(n,G,re.path),M=e.resolve({path:E.path},re),Y=s.createHref(E.fullPath);return Fe(E,M,{params:m(M.params),hash:yo(E.hash),redirectedFrom:void 0,href:Y})}let te;if(G.path!=null)te=Fe({},G,{path:Fc(n,G.path,re.path).path});else{const E=Fe({},G.params);for(const M in E)E[M]==null&&delete E[M];te=Fe({},G,{params:f(E)}),re.params=f(re.params)}const oe=e.resolve(te,re),Ie=G.hash||"";oe.params=d(m(oe.params));const Ne=lw(r,Fe({},G,{hash:nw(Ie),path:oe.path})),w=s.createHref(Ne);return Fe({fullPath:Ne,hash:Ie,query:r===up?Fw(G.query):G.query||{}},oe,{redirectedFrom:void 0,href:w})}function H(G){return typeof G=="string"?Fc(n,G,c.value.path):Fe({},G)}function P(G,re){if(u!==G)return oi(8,{from:re,to:G})}function C(G){return I(G)}function j(G){return C(Fe(H(G),{replace:!0}))}function U(G){const re=G.matched[G.matched.length-1];if(re&&re.redirect){const{redirect:te}=re;let oe=typeof te=="function"?te(G):te;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=H(oe):{path:oe},oe.params={}),Fe({query:G.query,hash:G.hash,params:oe.path!=null?{}:G.params},oe)}}function I(G,re){const te=u=F(G),oe=c.value,Ie=G.state,Ne=G.force,w=G.replace===!0,E=U(te);if(E)return I(Fe(H(E),{state:typeof E=="object"?Fe({},Ie,E.state):Ie,force:Ne,replace:w}),re||te);const M=te;M.redirectedFrom=re;let Y;return!Ne&&cw(r,oe,te)&&(Y=oi(16,{to:M,from:oe}),et(oe,oe,!0,!1)),(Y?Promise.resolve(Y):S(M,oe)).catch(q=>Yn(q)?Yn(q,2)?q:Ct(q):Te(q,M,oe)).then(q=>{if(q){if(Yn(q,2))return I(Fe({replace:w},H(q.to),{state:typeof q.to=="object"?Fe({},Ie,q.to.state):Ie,force:Ne}),re||M)}else q=N(M,oe,!0,w,Ie);return O(M,oe,q),q})}function _(G,re){const te=P(G,re);return te?Promise.reject(te):Promise.resolve()}function y(G){const re=qt.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(G):G()}function S(G,re){let te;const[oe,Ie,Ne]=zw(G,re);te=Uc(oe.reverse(),"beforeRouteLeave",G,re);for(const E of oe)E.leaveGuards.forEach(M=>{te.push(wr(M,G,re))});const w=_.bind(null,G,re);return te.push(w),pt(te).then(()=>{te=[];for(const E of i.list())te.push(wr(E,G,re));return te.push(w),pt(te)}).then(()=>{te=Uc(Ie,"beforeRouteUpdate",G,re);for(const E of Ie)E.updateGuards.forEach(M=>{te.push(wr(M,G,re))});return te.push(w),pt(te)}).then(()=>{te=[];for(const E of Ne)if(E.beforeEnter)if(wn(E.beforeEnter))for(const M of E.beforeEnter)te.push(wr(M,G,re));else te.push(wr(E.beforeEnter,G,re));return te.push(w),pt(te)}).then(()=>(G.matched.forEach(E=>E.enterCallbacks={}),te=Uc(Ne,"beforeRouteEnter",G,re,y),te.push(w),pt(te))).then(()=>{te=[];for(const E of o.list())te.push(wr(E,G,re));return te.push(w),pt(te)}).catch(E=>Yn(E,8)?E:Promise.reject(E))}function O(G,re,te){a.list().forEach(oe=>y(()=>oe(G,re,te)))}function N(G,re,te,oe,Ie){const Ne=P(G,re);if(Ne)return Ne;const w=re===yr,E=Bs?history.state:{};te&&(oe||w?s.replace(G.fullPath,Fe({scroll:w&&E&&E.scroll},Ie)):s.push(G.fullPath,Ie)),c.value=G,et(G,re,te,w),Ct()}let A;function rt(){A||(A=s.listen((G,re,te)=>{if(!xt.listening)return;const oe=F(G),Ie=U(oe);if(Ie){I(Fe(Ie,{replace:!0,force:!0}),oe).catch(to);return}u=oe;const Ne=c.value;Bs&&_w(tp(Ne.fullPath,te.delta),kl()),S(oe,Ne).catch(w=>Yn(w,12)?w:Yn(w,2)?(I(Fe(H(w.to),{force:!0}),oe).then(E=>{Yn(E,20)&&!te.delta&&te.type===vo.pop&&s.go(-1,!1)}).catch(to),Promise.reject()):(te.delta&&s.go(-te.delta,!1),Te(w,oe,Ne))).then(w=>{w=w||N(oe,Ne,!1),w&&(te.delta&&!Yn(w,8)?s.go(-te.delta,!1):te.type===vo.pop&&Yn(w,20)&&s.go(-1,!1)),O(oe,Ne,w)}).catch(to)}))}let ft=$i(),Ae=$i(),he;function Te(G,re,te){Ct(G);const oe=Ae.list();return oe.length?oe.forEach(Ie=>Ie(G,re,te)):console.error(G),Promise.reject(G)}function _t(){return he&&c.value!==yr?Promise.resolve():new Promise((G,re)=>{ft.add([G,re])})}function Ct(G){return he||(he=!G,rt(),ft.list().forEach(([re,te])=>G?te(G):re()),ft.reset()),G}function et(G,re,te,oe){const{scrollBehavior:Ie}=t;if(!Bs||!Ie)return Promise.resolve();const Ne=!te&&yw(tp(G.fullPath,0))||(oe||!te)&&history.state&&history.state.scroll||null;return Al().then(()=>Ie(G,re,Ne)).then(w=>w&&gw(w)).catch(w=>Te(w,G,re))}const Me=G=>s.go(G);let Be;const qt=new Set,xt={currentRoute:c,listening:!0,addRoute:g,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:L,resolve:F,options:t,push:C,replace:j,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ae.add,isReady:_t,install(G){const re=this;G.component("RouterLink",jw),G.component("RouterView",Gw),G.config.globalProperties.$router=re,Object.defineProperty(G.config.globalProperties,"$route",{enumerable:!0,get:()=>be(c)}),Bs&&!Be&&c.value===yr&&(Be=!0,C(s.location).catch(Ie=>{}));const te={};for(const Ie in yr)Object.defineProperty(te,Ie,{get:()=>c.value[Ie],enumerable:!0});G.provide(Nl,re),G.provide(M_,jg(te)),G.provide(_u,c);const oe=G.unmount;qt.add(G),G.unmount=function(){qt.delete(G),qt.size<1&&(u=yr,A&&A(),A=null,c.value=yr,Be=!1,he=!1),oe()}}};function pt(G){return G.reduce((re,te)=>re.then(()=>y(te)),Promise.resolve())}return xt}function zw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>ii(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>ii(u,c))||s.push(c))}return[n,r,s]}function Ol(){return pn(Nl)}/*!
  * shared v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const Qa=typeof window<"u",zr=(t,e=!1)=>e?Symbol.for(t):Symbol(t),Yw=(t,e,n)=>Qw({l:t,k:e,s:n}),Qw=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),dt=t=>typeof t=="number"&&isFinite(t),Xw=t=>F_(t)==="[object Date]",Fr=t=>F_(t)==="[object RegExp]",Ll=t=>ye(t)&&Object.keys(t).length===0,Lt=Object.assign,Jw=Object.create,je=(t=null)=>Jw(t);let gp;const tr=()=>gp||(gp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:je());function _p(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const Zw=Object.prototype.hasOwnProperty;function En(t,e){return Zw.call(t,e)}const Je=Array.isArray,Ge=t=>typeof t=="function",se=t=>typeof t=="string",we=t=>typeof t=="boolean",xe=t=>t!==null&&typeof t=="object",e0=t=>xe(t)&&Ge(t.then)&&Ge(t.catch),V_=Object.prototype.toString,F_=t=>V_.call(t),ye=t=>{if(!xe(t))return!1;const e=Object.getPrototypeOf(t);return e===null||e.constructor===Object},t0=t=>t==null?"":Je(t)||ye(t)&&t.toString===V_?JSON.stringify(t,null,2):String(t);function n0(t,e=""){return t.reduce((n,r,s)=>s===0?n+r:n+e+r,"")}function Dl(t){let e=t;return()=>++e}function r0(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const fa=t=>!xe(t)||Je(t);function Sa(t,e){if(fa(t)||fa(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:r,des:s}=n.pop();Object.keys(r).forEach(i=>{i!=="__proto__"&&(xe(r[i])&&!xe(s[i])&&(s[i]=Array.isArray(r[i])?[]:je()),fa(s[i])||fa(r[i])?s[i]=r[i]:n.push({src:r[i],des:s[i]}))})}}/*!
  * message-compiler v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function s0(t,e,n){return{line:t,column:e,offset:n}}function Xa(t,e,n){return{start:t,end:e}}const i0=/\{([0-9a-zA-Z]+)\}/g;function U_(t,...e){return e.length===1&&o0(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),t.replace(i0,(n,r)=>e.hasOwnProperty(r)?e[r]:"")}const $_=Object.assign,yp=t=>typeof t=="string",o0=t=>t!==null&&typeof t=="object";function B_(t,e=""){return t.reduce((n,r,s)=>s===0?n+r:n+e+r,"")}const Sh={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},a0={[Sh.USE_MODULO_SYNTAX]:"Use modulo before '{{0}}'."};function l0(t,e,...n){const r=U_(a0[t],...n||[]),s={message:String(r),code:t};return e&&(s.location=e),s}const fe={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},c0={[fe.EXPECTED_TOKEN]:"Expected token: '{0}'",[fe.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[fe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[fe.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[fe.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[fe.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[fe.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[fe.EMPTY_PLACEHOLDER]:"Empty placeholder",[fe.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[fe.INVALID_LINKED_FORMAT]:"Invalid linked format",[fe.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[fe.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[fe.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[fe.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[fe.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[fe.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function vi(t,e,n={}){const{domain:r,messages:s,args:i}=n,o=U_((s||c0)[t]||"",...i||[]),a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=r,a}function u0(t){throw t}const Qn=" ",h0="\r",Qt=`
`,d0="\u2028",f0="\u2029";function p0(t){const e=t;let n=0,r=1,s=1,i=0;const o=I=>e[I]===h0&&e[I+1]===Qt,a=I=>e[I]===Qt,c=I=>e[I]===f0,u=I=>e[I]===d0,d=I=>o(I)||a(I)||c(I)||u(I),f=()=>n,m=()=>r,g=()=>s,R=()=>i,L=I=>o(I)||c(I)||u(I)?Qt:e[I],k=()=>L(n),F=()=>L(n+i);function H(){return i=0,d(n)&&(r++,s=0),o(n)&&n++,n++,s++,e[n]}function P(){return o(n+i)&&i++,i++,e[n+i]}function C(){n=0,r=1,s=1,i=0}function j(I=0){i=I}function U(){const I=n+i;for(;I!==n;)H();i=0}return{index:f,line:m,column:g,peekOffset:R,charAt:L,currentChar:k,currentPeek:F,next:H,peek:P,reset:C,resetPeek:j,skipToPeek:U}}const vr=void 0,m0=".",vp="'",g0="tokenizer";function _0(t,e={}){const n=e.location!==!1,r=p0(t),s=()=>r.index(),i=()=>s0(r.line(),r.column(),r.index()),o=i(),a=s(),c={currentType:14,offset:a,startLoc:o,endLoc:o,lastType:14,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},u=()=>c,{onError:d}=e;function f(T,b,D,...z){const Z=u();if(b.column+=D,b.offset+=D,d){const Q=n?Xa(Z.startLoc,b):null,x=vi(T,Q,{domain:g0,args:z});d(x)}}function m(T,b,D){T.endLoc=i(),T.currentType=b;const z={type:b};return n&&(z.loc=Xa(T.startLoc,T.endLoc)),D!=null&&(z.value=D),z}const g=T=>m(T,14);function R(T,b){return T.currentChar()===b?(T.next(),b):(f(fe.EXPECTED_TOKEN,i(),0,b),"")}function L(T){let b="";for(;T.currentPeek()===Qn||T.currentPeek()===Qt;)b+=T.currentPeek(),T.peek();return b}function k(T){const b=L(T);return T.skipToPeek(),b}function F(T){if(T===vr)return!1;const b=T.charCodeAt(0);return b>=97&&b<=122||b>=65&&b<=90||b===95}function H(T){if(T===vr)return!1;const b=T.charCodeAt(0);return b>=48&&b<=57}function P(T,b){const{currentType:D}=b;if(D!==2)return!1;L(T);const z=F(T.currentPeek());return T.resetPeek(),z}function C(T,b){const{currentType:D}=b;if(D!==2)return!1;L(T);const z=T.currentPeek()==="-"?T.peek():T.currentPeek(),Z=H(z);return T.resetPeek(),Z}function j(T,b){const{currentType:D}=b;if(D!==2)return!1;L(T);const z=T.currentPeek()===vp;return T.resetPeek(),z}function U(T,b){const{currentType:D}=b;if(D!==8)return!1;L(T);const z=T.currentPeek()===".";return T.resetPeek(),z}function I(T,b){const{currentType:D}=b;if(D!==9)return!1;L(T);const z=F(T.currentPeek());return T.resetPeek(),z}function _(T,b){const{currentType:D}=b;if(!(D===8||D===12))return!1;L(T);const z=T.currentPeek()===":";return T.resetPeek(),z}function y(T,b){const{currentType:D}=b;if(D!==10)return!1;const z=()=>{const Q=T.currentPeek();return Q==="{"?F(T.peek()):Q==="@"||Q==="%"||Q==="|"||Q===":"||Q==="."||Q===Qn||!Q?!1:Q===Qt?(T.peek(),z()):N(T,!1)},Z=z();return T.resetPeek(),Z}function S(T){L(T);const b=T.currentPeek()==="|";return T.resetPeek(),b}function O(T){const b=L(T),D=T.currentPeek()==="%"&&T.peek()==="{";return T.resetPeek(),{isModulo:D,hasSpace:b.length>0}}function N(T,b=!0){const D=(Z=!1,Q="",x=!1)=>{const B=T.currentPeek();return B==="{"?Q==="%"?!1:Z:B==="@"||!B?Q==="%"?!0:Z:B==="%"?(T.peek(),D(Z,"%",!0)):B==="|"?Q==="%"||x?!0:!(Q===Qn||Q===Qt):B===Qn?(T.peek(),D(!0,Qn,x)):B===Qt?(T.peek(),D(!0,Qt,x)):!0},z=D();return b&&T.resetPeek(),z}function A(T,b){const D=T.currentChar();return D===vr?vr:b(D)?(T.next(),D):null}function rt(T){const b=T.charCodeAt(0);return b>=97&&b<=122||b>=65&&b<=90||b>=48&&b<=57||b===95||b===36}function ft(T){return A(T,rt)}function Ae(T){const b=T.charCodeAt(0);return b>=97&&b<=122||b>=65&&b<=90||b>=48&&b<=57||b===95||b===36||b===45}function he(T){return A(T,Ae)}function Te(T){const b=T.charCodeAt(0);return b>=48&&b<=57}function _t(T){return A(T,Te)}function Ct(T){const b=T.charCodeAt(0);return b>=48&&b<=57||b>=65&&b<=70||b>=97&&b<=102}function et(T){return A(T,Ct)}function Me(T){let b="",D="";for(;b=_t(T);)D+=b;return D}function Be(T){k(T);const b=T.currentChar();return b!=="%"&&f(fe.EXPECTED_TOKEN,i(),0,b),T.next(),"%"}function qt(T){let b="";for(;;){const D=T.currentChar();if(D==="{"||D==="}"||D==="@"||D==="|"||!D)break;if(D==="%")if(N(T))b+=D,T.next();else break;else if(D===Qn||D===Qt)if(N(T))b+=D,T.next();else{if(S(T))break;b+=D,T.next()}else b+=D,T.next()}return b}function xt(T){k(T);let b="",D="";for(;b=he(T);)D+=b;return T.currentChar()===vr&&f(fe.UNTERMINATED_CLOSING_BRACE,i(),0),D}function pt(T){k(T);let b="";return T.currentChar()==="-"?(T.next(),b+=`-${Me(T)}`):b+=Me(T),T.currentChar()===vr&&f(fe.UNTERMINATED_CLOSING_BRACE,i(),0),b}function G(T){return T!==vp&&T!==Qt}function re(T){k(T),R(T,"'");let b="",D="";for(;b=A(T,G);)b==="\\"?D+=te(T):D+=b;const z=T.currentChar();return z===Qt||z===vr?(f(fe.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,i(),0),z===Qt&&(T.next(),R(T,"'")),D):(R(T,"'"),D)}function te(T){const b=T.currentChar();switch(b){case"\\":case"'":return T.next(),`\\${b}`;case"u":return oe(T,b,4);case"U":return oe(T,b,6);default:return f(fe.UNKNOWN_ESCAPE_SEQUENCE,i(),0,b),""}}function oe(T,b,D){R(T,b);let z="";for(let Z=0;Z<D;Z++){const Q=et(T);if(!Q){f(fe.INVALID_UNICODE_ESCAPE_SEQUENCE,i(),0,`\\${b}${z}${T.currentChar()}`);break}z+=Q}return`\\${b}${z}`}function Ie(T){return T!=="{"&&T!=="}"&&T!==Qn&&T!==Qt}function Ne(T){k(T);let b="",D="";for(;b=A(T,Ie);)D+=b;return D}function w(T){let b="",D="";for(;b=ft(T);)D+=b;return D}function E(T){const b=D=>{const z=T.currentChar();return z==="{"||z==="%"||z==="@"||z==="|"||z==="("||z===")"||!z||z===Qn?D:(D+=z,T.next(),b(D))};return b("")}function M(T){k(T);const b=R(T,"|");return k(T),b}function Y(T,b){let D=null;switch(T.currentChar()){case"{":return b.braceNest>=1&&f(fe.NOT_ALLOW_NEST_PLACEHOLDER,i(),0),T.next(),D=m(b,2,"{"),k(T),b.braceNest++,D;case"}":return b.braceNest>0&&b.currentType===2&&f(fe.EMPTY_PLACEHOLDER,i(),0),T.next(),D=m(b,3,"}"),b.braceNest--,b.braceNest>0&&k(T),b.inLinked&&b.braceNest===0&&(b.inLinked=!1),D;case"@":return b.braceNest>0&&f(fe.UNTERMINATED_CLOSING_BRACE,i(),0),D=q(T,b)||g(b),b.braceNest=0,D;default:{let Z=!0,Q=!0,x=!0;if(S(T))return b.braceNest>0&&f(fe.UNTERMINATED_CLOSING_BRACE,i(),0),D=m(b,1,M(T)),b.braceNest=0,b.inLinked=!1,D;if(b.braceNest>0&&(b.currentType===5||b.currentType===6||b.currentType===7))return f(fe.UNTERMINATED_CLOSING_BRACE,i(),0),b.braceNest=0,X(T,b);if(Z=P(T,b))return D=m(b,5,xt(T)),k(T),D;if(Q=C(T,b))return D=m(b,6,pt(T)),k(T),D;if(x=j(T,b))return D=m(b,7,re(T)),k(T),D;if(!Z&&!Q&&!x)return D=m(b,13,Ne(T)),f(fe.INVALID_TOKEN_IN_PLACEHOLDER,i(),0,D.value),k(T),D;break}}return D}function q(T,b){const{currentType:D}=b;let z=null;const Z=T.currentChar();switch((D===8||D===9||D===12||D===10)&&(Z===Qt||Z===Qn)&&f(fe.INVALID_LINKED_FORMAT,i(),0),Z){case"@":return T.next(),z=m(b,8,"@"),b.inLinked=!0,z;case".":return k(T),T.next(),m(b,9,".");case":":return k(T),T.next(),m(b,10,":");default:return S(T)?(z=m(b,1,M(T)),b.braceNest=0,b.inLinked=!1,z):U(T,b)||_(T,b)?(k(T),q(T,b)):I(T,b)?(k(T),m(b,12,w(T))):y(T,b)?(k(T),Z==="{"?Y(T,b)||z:m(b,11,E(T))):(D===8&&f(fe.INVALID_LINKED_FORMAT,i(),0),b.braceNest=0,b.inLinked=!1,X(T,b))}}function X(T,b){let D={type:14};if(b.braceNest>0)return Y(T,b)||g(b);if(b.inLinked)return q(T,b)||g(b);switch(T.currentChar()){case"{":return Y(T,b)||g(b);case"}":return f(fe.UNBALANCED_CLOSING_BRACE,i(),0),T.next(),m(b,3,"}");case"@":return q(T,b)||g(b);default:{if(S(T))return D=m(b,1,M(T)),b.braceNest=0,b.inLinked=!1,D;const{isModulo:Z,hasSpace:Q}=O(T);if(Z)return Q?m(b,0,qt(T)):m(b,4,Be(T));if(N(T))return m(b,0,qt(T));break}}return D}function ne(){const{currentType:T,offset:b,startLoc:D,endLoc:z}=c;return c.lastType=T,c.lastOffset=b,c.lastStartLoc=D,c.lastEndLoc=z,c.offset=s(),c.startLoc=i(),r.currentChar()===vr?m(c,14):X(r,c)}return{nextToken:ne,currentOffset:s,currentPosition:i,context:u}}const y0="parser",v0=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function E0(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(e||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function T0(t={}){const e=t.location!==!1,{onError:n,onWarn:r}=t;function s(P,C,j,U,...I){const _=P.currentPosition();if(_.offset+=U,_.column+=U,n){const y=e?Xa(j,_):null,S=vi(C,y,{domain:y0,args:I});n(S)}}function i(P,C,j,U,...I){const _=P.currentPosition();if(_.offset+=U,_.column+=U,r){const y=e?Xa(j,_):null;r(l0(C,y,I))}}function o(P,C,j){const U={type:P};return e&&(U.start=C,U.end=C,U.loc={start:j,end:j}),U}function a(P,C,j,U){e&&(P.end=C,P.loc&&(P.loc.end=j))}function c(P,C){const j=P.context(),U=o(3,j.offset,j.startLoc);return U.value=C,a(U,P.currentOffset(),P.currentPosition()),U}function u(P,C){const j=P.context(),{lastOffset:U,lastStartLoc:I}=j,_=o(5,U,I);return _.index=parseInt(C,10),P.nextToken(),a(_,P.currentOffset(),P.currentPosition()),_}function d(P,C,j){const U=P.context(),{lastOffset:I,lastStartLoc:_}=U,y=o(4,I,_);return y.key=C,j===!0&&(y.modulo=!0),P.nextToken(),a(y,P.currentOffset(),P.currentPosition()),y}function f(P,C){const j=P.context(),{lastOffset:U,lastStartLoc:I}=j,_=o(9,U,I);return _.value=C.replace(v0,E0),P.nextToken(),a(_,P.currentOffset(),P.currentPosition()),_}function m(P){const C=P.nextToken(),j=P.context(),{lastOffset:U,lastStartLoc:I}=j,_=o(8,U,I);return C.type!==12?(s(P,fe.UNEXPECTED_EMPTY_LINKED_MODIFIER,j.lastStartLoc,0),_.value="",a(_,U,I),{nextConsumeToken:C,node:_}):(C.value==null&&s(P,fe.UNEXPECTED_LEXICAL_ANALYSIS,j.lastStartLoc,0,vn(C)),_.value=C.value||"",a(_,P.currentOffset(),P.currentPosition()),{node:_})}function g(P,C){const j=P.context(),U=o(7,j.offset,j.startLoc);return U.value=C,a(U,P.currentOffset(),P.currentPosition()),U}function R(P){const C=P.context(),j=o(6,C.offset,C.startLoc);let U=P.nextToken();if(U.type===9){const I=m(P);j.modifier=I.node,U=I.nextConsumeToken||P.nextToken()}switch(U.type!==10&&s(P,fe.UNEXPECTED_LEXICAL_ANALYSIS,C.lastStartLoc,0,vn(U)),U=P.nextToken(),U.type===2&&(U=P.nextToken()),U.type){case 11:U.value==null&&s(P,fe.UNEXPECTED_LEXICAL_ANALYSIS,C.lastStartLoc,0,vn(U)),j.key=g(P,U.value||"");break;case 5:U.value==null&&s(P,fe.UNEXPECTED_LEXICAL_ANALYSIS,C.lastStartLoc,0,vn(U)),j.key=d(P,U.value||"");break;case 6:U.value==null&&s(P,fe.UNEXPECTED_LEXICAL_ANALYSIS,C.lastStartLoc,0,vn(U)),j.key=u(P,U.value||"");break;case 7:U.value==null&&s(P,fe.UNEXPECTED_LEXICAL_ANALYSIS,C.lastStartLoc,0,vn(U)),j.key=f(P,U.value||"");break;default:{s(P,fe.UNEXPECTED_EMPTY_LINKED_KEY,C.lastStartLoc,0);const I=P.context(),_=o(7,I.offset,I.startLoc);return _.value="",a(_,I.offset,I.startLoc),j.key=_,a(j,I.offset,I.startLoc),{nextConsumeToken:U,node:j}}}return a(j,P.currentOffset(),P.currentPosition()),{node:j}}function L(P){const C=P.context(),j=C.currentType===1?P.currentOffset():C.offset,U=C.currentType===1?C.endLoc:C.startLoc,I=o(2,j,U);I.items=[];let _=null,y=null;do{const N=_||P.nextToken();switch(_=null,N.type){case 0:N.value==null&&s(P,fe.UNEXPECTED_LEXICAL_ANALYSIS,C.lastStartLoc,0,vn(N)),I.items.push(c(P,N.value||""));break;case 6:N.value==null&&s(P,fe.UNEXPECTED_LEXICAL_ANALYSIS,C.lastStartLoc,0,vn(N)),I.items.push(u(P,N.value||""));break;case 4:y=!0;break;case 5:N.value==null&&s(P,fe.UNEXPECTED_LEXICAL_ANALYSIS,C.lastStartLoc,0,vn(N)),I.items.push(d(P,N.value||"",!!y)),y&&(i(P,Sh.USE_MODULO_SYNTAX,C.lastStartLoc,0,vn(N)),y=null);break;case 7:N.value==null&&s(P,fe.UNEXPECTED_LEXICAL_ANALYSIS,C.lastStartLoc,0,vn(N)),I.items.push(f(P,N.value||""));break;case 8:{const A=R(P);I.items.push(A.node),_=A.nextConsumeToken||null;break}}}while(C.currentType!==14&&C.currentType!==1);const S=C.currentType===1?C.lastOffset:P.currentOffset(),O=C.currentType===1?C.lastEndLoc:P.currentPosition();return a(I,S,O),I}function k(P,C,j,U){const I=P.context();let _=U.items.length===0;const y=o(1,C,j);y.cases=[],y.cases.push(U);do{const S=L(P);_||(_=S.items.length===0),y.cases.push(S)}while(I.currentType!==14);return _&&s(P,fe.MUST_HAVE_MESSAGES_IN_PLURAL,j,0),a(y,P.currentOffset(),P.currentPosition()),y}function F(P){const C=P.context(),{offset:j,startLoc:U}=C,I=L(P);return C.currentType===14?I:k(P,j,U,I)}function H(P){const C=_0(P,$_({},t)),j=C.context(),U=o(0,j.offset,j.startLoc);return e&&U.loc&&(U.loc.source=P),U.body=F(C),t.onCacheKey&&(U.cacheKey=t.onCacheKey(P)),j.currentType!==14&&s(C,fe.UNEXPECTED_LEXICAL_ANALYSIS,j.lastStartLoc,0,P[j.offset]||""),a(U,C.currentOffset(),C.currentPosition()),U}return{parse:H}}function vn(t){if(t.type===14)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function I0(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:i=>(n.helpers.add(i),i)}}function Ep(t,e){for(let n=0;n<t.length;n++)Ph(t[n],e)}function Ph(t,e){switch(t.type){case 1:Ep(t.cases,e),e.helper("plural");break;case 2:Ep(t.items,e);break;case 6:{Ph(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function b0(t,e={}){const n=I0(t);n.helper("normalize"),t.body&&Ph(t.body,n);const r=n.context();t.helpers=Array.from(r.helpers)}function w0(t){const e=t.body;return e.type===2?Tp(e):e.cases.forEach(n=>Tp(n)),t}function Tp(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const r=t.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;e.push(r.value)}if(e.length===t.items.length){t.static=B_(e);for(let n=0;n<t.items.length;n++){const r=t.items[n];(r.type===3||r.type===9)&&delete r.value}}}}const A0="minifier";function js(t){switch(t.t=t.type,t.type){case 0:{const e=t;js(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let r=0;r<n.length;r++)js(n[r]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let r=0;r<n.length;r++)js(n[r]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;js(e.key),e.k=e.key,delete e.key,e.modifier&&(js(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}default:throw vi(fe.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:A0,args:[t.type]})}delete t.type}const R0="parser";function S0(t,e){const{sourceMap:n,filename:r,breakLineCode:s,needIndent:i}=e,o=e.location!==!1,a={filename:r,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:s,needIndent:i,indentLevel:0};o&&t.loc&&(a.source=t.loc.source);const c=()=>a;function u(k,F){a.code+=k}function d(k,F=!0){const H=F?s:"";u(i?H+"  ".repeat(k):H)}function f(k=!0){const F=++a.indentLevel;k&&d(F)}function m(k=!0){const F=--a.indentLevel;k&&d(F)}function g(){d(a.indentLevel)}return{context:c,push:u,indent:f,deindent:m,newline:g,helper:k=>`_${k}`,needIndent:()=>a.needIndent}}function P0(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),ai(t,e.key),e.modifier?(t.push(", "),ai(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function C0(t,e){const{helper:n,needIndent:r}=t;t.push(`${n("normalize")}([`),t.indent(r());const s=e.items.length;for(let i=0;i<s&&(ai(t,e.items[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}function k0(t,e){const{helper:n,needIndent:r}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(r());const s=e.cases.length;for(let i=0;i<s&&(ai(t,e.cases[i]),i!==s-1);i++)t.push(", ");t.deindent(r()),t.push("])")}}function N0(t,e){e.body?ai(t,e.body):t.push("null")}function ai(t,e){const{helper:n}=t;switch(e.type){case 0:N0(t,e);break;case 1:k0(t,e);break;case 2:C0(t,e);break;case 6:P0(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break;default:throw vi(fe.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:R0,args:[e.type]})}}const O0=(t,e={})=>{const n=yp(e.mode)?e.mode:"normal",r=yp(e.filename)?e.filename:"message.intl",s=!!e.sourceMap,i=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,o=e.needIndent?e.needIndent:n!=="arrow",a=t.helpers||[],c=S0(t,{mode:n,filename:r,sourceMap:s,breakLineCode:i,needIndent:o});c.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),c.indent(o),a.length>0&&(c.push(`const { ${B_(a.map(f=>`${f}: _${f}`),", ")} } = ctx`),c.newline()),c.push("return "),ai(c,t),c.deindent(o),c.push("}"),delete t.helpers;const{code:u,map:d}=c.context();return{ast:t,code:u,map:d?d.toJSON():void 0}};function L0(t,e={}){const n=$_({},e),r=!!n.jit,s=!!n.minify,i=n.optimize==null?!0:n.optimize,a=T0(n).parse(t);return r?(i&&w0(a),s&&js(a),{ast:a,code:""}):(b0(a,n),O0(a,n))}/*!
  * core-base v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */function D0(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(tr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(tr().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(tr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const Yr=[];Yr[0]={w:[0],i:[3,0],"[":[4],o:[7]};Yr[1]={w:[1],".":[2],"[":[4],o:[7]};Yr[2]={w:[2],i:[3,0],0:[3,0]};Yr[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Yr[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Yr[5]={"'":[4,0],o:8,l:[5,0]};Yr[6]={'"':[4,0],o:8,l:[6,0]};const x0=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function M0(t){return x0.test(t)}function V0(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function F0(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function U0(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:M0(e)?V0(e):"*"+e}function $0(t){const e=[];let n=-1,r=0,s=0,i,o,a,c,u,d,f;const m=[];m[0]=()=>{o===void 0?o=a:o+=a},m[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},m[2]=()=>{m[0](),s++},m[3]=()=>{if(s>0)s--,r=4,m[0]();else{if(s=0,o===void 0||(o=U0(o),o===!1))return!1;m[1]()}};function g(){const R=t[n+1];if(r===5&&R==="'"||r===6&&R==='"')return n++,a="\\"+R,m[0](),!0}for(;r!==null;)if(n++,i=t[n],!(i==="\\"&&g())){if(c=F0(i),f=Yr[r],u=f[c]||f.l||8,u===8||(r=u[0],u[1]!==void 0&&(d=m[u[1]],d&&(a=i,d()===!1))))return;if(r===7)return e}}const Ip=new Map;function B0(t,e){return xe(t)?t[e]:null}function j0(t,e){if(!xe(t))return null;let n=Ip.get(e);if(n||(n=$0(e),n&&Ip.set(e,n)),!n)return null;const r=n.length;let s=t,i=0;for(;i<r;){const o=s[n[i]];if(o===void 0||Ge(s))return null;s=o,i++}return s}const H0=t=>t,W0=t=>"",q0="text",G0=t=>t.length===0?"":n0(t),K0=t0;function bp(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function z0(t){const e=dt(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(dt(t.named.count)||dt(t.named.n))?dt(t.named.count)?t.named.count:dt(t.named.n)?t.named.n:e:e}function Y0(t,e){e.count||(e.count=t),e.n||(e.n=t)}function Q0(t={}){const e=t.locale,n=z0(t),r=xe(t.pluralRules)&&se(e)&&Ge(t.pluralRules[e])?t.pluralRules[e]:bp,s=xe(t.pluralRules)&&se(e)&&Ge(t.pluralRules[e])?bp:void 0,i=F=>F[r(n,F.length,s)],o=t.list||[],a=F=>o[F],c=t.named||je();dt(t.pluralIndex)&&Y0(n,c);const u=F=>c[F];function d(F){const H=Ge(t.messages)?t.messages(F):xe(t.messages)?t.messages[F]:!1;return H||(t.parent?t.parent.message(F):W0)}const f=F=>t.modifiers?t.modifiers[F]:H0,m=ye(t.processor)&&Ge(t.processor.normalize)?t.processor.normalize:G0,g=ye(t.processor)&&Ge(t.processor.interpolate)?t.processor.interpolate:K0,R=ye(t.processor)&&se(t.processor.type)?t.processor.type:q0,k={list:a,named:u,plural:i,linked:(F,...H)=>{const[P,C]=H;let j="text",U="";H.length===1?xe(P)?(U=P.modifier||U,j=P.type||j):se(P)&&(U=P||U):H.length===2&&(se(P)&&(U=P||U),se(C)&&(j=C||j));const I=d(F)(k),_=j==="vnode"&&Je(I)&&U?I[0]:I;return U?f(U)(_,j):_},message:d,type:R,interpolate:g,normalize:m,values:Lt(je(),o,c)};return k}let Eo=null;function X0(t){Eo=t}function J0(t,e,n){Eo&&Eo.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const Z0=eA("function:translate");function eA(t){return e=>Eo&&Eo.emit(t,e)}const j_=Sh.__EXTEND_POINT__,as=Dl(j_),tA={NOT_FOUND_KEY:j_,FALLBACK_TO_TRANSLATE:as(),CANNOT_FORMAT_NUMBER:as(),FALLBACK_TO_NUMBER_FORMAT:as(),CANNOT_FORMAT_DATE:as(),FALLBACK_TO_DATE_FORMAT:as(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:as(),__EXTEND_POINT__:as()},H_=fe.__EXTEND_POINT__,ls=Dl(H_),Tn={INVALID_ARGUMENT:H_,INVALID_DATE_ARGUMENT:ls(),INVALID_ISO_DATE_ARGUMENT:ls(),NOT_SUPPORT_NON_STRING_MESSAGE:ls(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:ls(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:ls(),NOT_SUPPORT_LOCALE_TYPE:ls(),__EXTEND_POINT__:ls()};function kn(t){return vi(t,null,void 0)}function Ch(t,e){return e.locale!=null?wp(e.locale):wp(t.locale)}let $c;function wp(t){if(se(t))return t;if(Ge(t)){if(t.resolvedOnce&&$c!=null)return $c;if(t.constructor.name==="Function"){const e=t();if(e0(e))throw kn(Tn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return $c=e}else throw kn(Tn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw kn(Tn.NOT_SUPPORT_LOCALE_TYPE)}function nA(t,e,n){return[...new Set([n,...Je(e)?e:xe(e)?Object.keys(e):se(e)?[e]:[n]])]}function W_(t,e,n){const r=se(n)?n:li,s=t;s.__localeChainCache||(s.__localeChainCache=new Map);let i=s.__localeChainCache.get(r);if(!i){i=[];let o=[n];for(;Je(o);)o=Ap(i,o,e);const a=Je(e)||!ye(e)?e:e.default?e.default:null;o=se(a)?[a]:a,Je(o)&&Ap(i,o,!1),s.__localeChainCache.set(r,i)}return i}function Ap(t,e,n){let r=!0;for(let s=0;s<e.length&&we(r);s++){const i=e[s];se(i)&&(r=rA(t,e[s],n))}return r}function rA(t,e,n){let r;const s=e.split("-");do{const i=s.join("-");r=sA(t,i,n),s.splice(-1,1)}while(s.length&&r===!0);return r}function sA(t,e,n){let r=!1;if(!t.includes(e)&&(r=!0,e)){r=e[e.length-1]!=="!";const s=e.replace(/!/g,"");t.push(s),(Je(n)||ye(n))&&n[s]&&(r=n[s])}return r}const iA="9.14.2",xl=-1,li="en-US",Rp="",Sp=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function oA(){return{upper:(t,e)=>e==="text"&&se(t)?t.toUpperCase():e==="vnode"&&xe(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&se(t)?t.toLowerCase():e==="vnode"&&xe(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&se(t)?Sp(t):e==="vnode"&&xe(t)&&"__v_isVNode"in t?Sp(t.children):t}}let q_;function Pp(t){q_=t}let G_;function aA(t){G_=t}let K_;function lA(t){K_=t}let z_=null;const cA=t=>{z_=t},uA=()=>z_;let Y_=null;const Cp=t=>{Y_=t},hA=()=>Y_;let kp=0;function dA(t={}){const e=Ge(t.onWarn)?t.onWarn:r0,n=se(t.version)?t.version:iA,r=se(t.locale)||Ge(t.locale)?t.locale:li,s=Ge(r)?li:r,i=Je(t.fallbackLocale)||ye(t.fallbackLocale)||se(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:s,o=ye(t.messages)?t.messages:Bc(s),a=ye(t.datetimeFormats)?t.datetimeFormats:Bc(s),c=ye(t.numberFormats)?t.numberFormats:Bc(s),u=Lt(je(),t.modifiers,oA()),d=t.pluralRules||je(),f=Ge(t.missing)?t.missing:null,m=we(t.missingWarn)||Fr(t.missingWarn)?t.missingWarn:!0,g=we(t.fallbackWarn)||Fr(t.fallbackWarn)?t.fallbackWarn:!0,R=!!t.fallbackFormat,L=!!t.unresolving,k=Ge(t.postTranslation)?t.postTranslation:null,F=ye(t.processor)?t.processor:null,H=we(t.warnHtmlMessage)?t.warnHtmlMessage:!0,P=!!t.escapeParameter,C=Ge(t.messageCompiler)?t.messageCompiler:q_,j=Ge(t.messageResolver)?t.messageResolver:G_||B0,U=Ge(t.localeFallbacker)?t.localeFallbacker:K_||nA,I=xe(t.fallbackContext)?t.fallbackContext:void 0,_=t,y=xe(_.__datetimeFormatters)?_.__datetimeFormatters:new Map,S=xe(_.__numberFormatters)?_.__numberFormatters:new Map,O=xe(_.__meta)?_.__meta:{};kp++;const N={version:n,cid:kp,locale:r,fallbackLocale:i,messages:o,modifiers:u,pluralRules:d,missing:f,missingWarn:m,fallbackWarn:g,fallbackFormat:R,unresolving:L,postTranslation:k,processor:F,warnHtmlMessage:H,escapeParameter:P,messageCompiler:C,messageResolver:j,localeFallbacker:U,fallbackContext:I,onWarn:e,__meta:O};return N.datetimeFormats=a,N.numberFormats=c,N.__datetimeFormatters=y,N.__numberFormatters=S,__INTLIFY_PROD_DEVTOOLS__&&J0(N,n,O),N}const Bc=t=>({[t]:je()});function kh(t,e,n,r,s){const{missing:i,onWarn:o}=t;if(i!==null){const a=i(t,n,e,s);return se(a)?a:e}else return e}function Bi(t,e,n){const r=t;r.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function fA(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function pA(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let r=n+1;r<e.length;r++)if(fA(t,e[r]))return!0;return!1}function jc(t){return n=>mA(n,t)}function mA(t,e){const n=_A(e);if(n==null)throw To(0);if(Nh(n)===1){const i=vA(n);return t.plural(i.reduce((o,a)=>[...o,Np(t,a)],[]))}else return Np(t,n)}const gA=["b","body"];function _A(t){return Qr(t,gA)}const yA=["c","cases"];function vA(t){return Qr(t,yA,[])}function Np(t,e){const n=TA(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const r=bA(e).reduce((s,i)=>[...s,yu(t,i)],[]);return t.normalize(r)}}const EA=["s","static"];function TA(t){return Qr(t,EA)}const IA=["i","items"];function bA(t){return Qr(t,IA,[])}function yu(t,e){const n=Nh(e);switch(n){case 3:return pa(e,n);case 9:return pa(e,n);case 4:{const r=e;if(En(r,"k")&&r.k)return t.interpolate(t.named(r.k));if(En(r,"key")&&r.key)return t.interpolate(t.named(r.key));throw To(n)}case 5:{const r=e;if(En(r,"i")&&dt(r.i))return t.interpolate(t.list(r.i));if(En(r,"index")&&dt(r.index))return t.interpolate(t.list(r.index));throw To(n)}case 6:{const r=e,s=SA(r),i=CA(r);return t.linked(yu(t,i),s?yu(t,s):void 0,t.type)}case 7:return pa(e,n);case 8:return pa(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const wA=["t","type"];function Nh(t){return Qr(t,wA)}const AA=["v","value"];function pa(t,e){const n=Qr(t,AA);if(n)return n;throw To(e)}const RA=["m","modifier"];function SA(t){return Qr(t,RA)}const PA=["k","key"];function CA(t){const e=Qr(t,PA);if(e)return e;throw To(6)}function Qr(t,e,n){for(let r=0;r<e.length;r++){const s=e[r];if(En(t,s)&&t[s]!=null)return t[s]}return n}function To(t){return new Error(`unhandled node type: ${t}`)}const Q_=t=>t;let Ks=je();function ci(t){return xe(t)&&Nh(t)===0&&(En(t,"b")||En(t,"body"))}function X_(t,e={}){let n=!1;const r=e.onError||u0;return e.onError=s=>{n=!0,r(s)},{...L0(t,e),detectError:n}}const kA=(t,e)=>{if(!se(t))throw kn(Tn.NOT_SUPPORT_NON_STRING_MESSAGE);{we(e.warnHtmlMessage)&&e.warnHtmlMessage;const r=(e.onCacheKey||Q_)(t),s=Ks[r];if(s)return s;const{code:i,detectError:o}=X_(t,e),a=new Function(`return ${i}`)();return o?a:Ks[r]=a}};function NA(t,e){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&se(t)){we(e.warnHtmlMessage)&&e.warnHtmlMessage;const r=(e.onCacheKey||Q_)(t),s=Ks[r];if(s)return s;const{ast:i,detectError:o}=X_(t,{...e,location:!1,jit:!0}),a=jc(i);return o?a:Ks[r]=a}else{const n=t.cacheKey;if(n){const r=Ks[n];return r||(Ks[n]=jc(t))}else return jc(t)}}const Op=()=>"",dn=t=>Ge(t);function Lp(t,...e){const{fallbackFormat:n,postTranslation:r,unresolving:s,messageCompiler:i,fallbackLocale:o,messages:a}=t,[c,u]=vu(...e),d=we(u.missingWarn)?u.missingWarn:t.missingWarn,f=we(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn,m=we(u.escapeParameter)?u.escapeParameter:t.escapeParameter,g=!!u.resolvedMessage,R=se(u.default)||we(u.default)?we(u.default)?i?c:()=>c:u.default:n?i?c:()=>c:"",L=n||R!=="",k=Ch(t,u);m&&OA(u);let[F,H,P]=g?[c,k,a[k]||je()]:J_(t,c,k,o,f,d),C=F,j=c;if(!g&&!(se(C)||ci(C)||dn(C))&&L&&(C=R,j=C),!g&&(!(se(C)||ci(C)||dn(C))||!se(H)))return s?xl:c;let U=!1;const I=()=>{U=!0},_=dn(C)?C:Z_(t,c,H,C,j,I);if(U)return C;const y=xA(t,H,P,u),S=Q0(y),O=LA(t,_,S),N=r?r(O,c):O;if(__INTLIFY_PROD_DEVTOOLS__){const A={timestamp:Date.now(),key:se(c)?c:dn(C)?C.key:"",locale:H||(dn(C)?C.locale:""),format:se(C)?C:dn(C)?C.source:"",message:N};A.meta=Lt({},t.__meta,uA()||{}),Z0(A)}return N}function OA(t){Je(t.list)?t.list=t.list.map(e=>se(e)?_p(e):e):xe(t.named)&&Object.keys(t.named).forEach(e=>{se(t.named[e])&&(t.named[e]=_p(t.named[e]))})}function J_(t,e,n,r,s,i){const{messages:o,onWarn:a,messageResolver:c,localeFallbacker:u}=t,d=u(t,r,n);let f=je(),m,g=null;const R="translate";for(let L=0;L<d.length&&(m=d[L],f=o[m]||je(),(g=c(f,e))===null&&(g=f[e]),!(se(g)||ci(g)||dn(g)));L++)if(!pA(m,d)){const k=kh(t,e,m,i,R);k!==e&&(g=k)}return[g,m,f]}function Z_(t,e,n,r,s,i){const{messageCompiler:o,warnHtmlMessage:a}=t;if(dn(r)){const u=r;return u.locale=u.locale||n,u.key=u.key||e,u}if(o==null){const u=()=>r;return u.locale=n,u.key=e,u}const c=o(r,DA(t,n,s,r,a,i));return c.locale=n,c.key=e,c.source=r,c}function LA(t,e,n){return e(n)}function vu(...t){const[e,n,r]=t,s=je();if(!se(e)&&!dt(e)&&!dn(e)&&!ci(e))throw kn(Tn.INVALID_ARGUMENT);const i=dt(e)?String(e):(dn(e),e);return dt(n)?s.plural=n:se(n)?s.default=n:ye(n)&&!Ll(n)?s.named=n:Je(n)&&(s.list=n),dt(r)?s.plural=r:se(r)?s.default=r:ye(r)&&Lt(s,r),[i,s]}function DA(t,e,n,r,s,i){return{locale:e,key:n,warnHtmlMessage:s,onError:o=>{throw i&&i(o),o},onCacheKey:o=>Yw(e,n,o)}}function xA(t,e,n,r){const{modifiers:s,pluralRules:i,messageResolver:o,fallbackLocale:a,fallbackWarn:c,missingWarn:u,fallbackContext:d}=t,m={locale:e,modifiers:s,pluralRules:i,messages:g=>{let R=o(n,g);if(R==null&&d){const[,,L]=J_(d,g,e,a,c,u);R=o(L,g)}if(se(R)||ci(R)){let L=!1;const F=Z_(t,g,e,R,g,()=>{L=!0});return L?Op:F}else return dn(R)?R:Op}};return t.processor&&(m.processor=t.processor),r.list&&(m.list=r.list),r.named&&(m.named=r.named),dt(r.plural)&&(m.pluralIndex=r.plural),m}function Dp(t,...e){const{datetimeFormats:n,unresolving:r,fallbackLocale:s,onWarn:i,localeFallbacker:o}=t,{__datetimeFormatters:a}=t,[c,u,d,f]=Eu(...e),m=we(d.missingWarn)?d.missingWarn:t.missingWarn;we(d.fallbackWarn)?d.fallbackWarn:t.fallbackWarn;const g=!!d.part,R=Ch(t,d),L=o(t,s,R);if(!se(c)||c==="")return new Intl.DateTimeFormat(R,f).format(u);let k={},F,H=null;const P="datetime format";for(let U=0;U<L.length&&(F=L[U],k=n[F]||{},H=k[c],!ye(H));U++)kh(t,c,F,m,P);if(!ye(H)||!se(F))return r?xl:c;let C=`${F}__${c}`;Ll(f)||(C=`${C}__${JSON.stringify(f)}`);let j=a.get(C);return j||(j=new Intl.DateTimeFormat(F,Lt({},H,f)),a.set(C,j)),g?j.formatToParts(u):j.format(u)}const ey=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Eu(...t){const[e,n,r,s]=t,i=je();let o=je(),a;if(se(e)){const c=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!c)throw kn(Tn.INVALID_ISO_DATE_ARGUMENT);const u=c[3]?c[3].trim().startsWith("T")?`${c[1].trim()}${c[3].trim()}`:`${c[1].trim()}T${c[3].trim()}`:c[1].trim();a=new Date(u);try{a.toISOString()}catch{throw kn(Tn.INVALID_ISO_DATE_ARGUMENT)}}else if(Xw(e)){if(isNaN(e.getTime()))throw kn(Tn.INVALID_DATE_ARGUMENT);a=e}else if(dt(e))a=e;else throw kn(Tn.INVALID_ARGUMENT);return se(n)?i.key=n:ye(n)&&Object.keys(n).forEach(c=>{ey.includes(c)?o[c]=n[c]:i[c]=n[c]}),se(r)?i.locale=r:ye(r)&&(o=r),ye(s)&&(o=s),[i.key||"",a,i,o]}function xp(t,e,n){const r=t;for(const s in n){const i=`${e}__${s}`;r.__datetimeFormatters.has(i)&&r.__datetimeFormatters.delete(i)}}function Mp(t,...e){const{numberFormats:n,unresolving:r,fallbackLocale:s,onWarn:i,localeFallbacker:o}=t,{__numberFormatters:a}=t,[c,u,d,f]=Tu(...e),m=we(d.missingWarn)?d.missingWarn:t.missingWarn;we(d.fallbackWarn)?d.fallbackWarn:t.fallbackWarn;const g=!!d.part,R=Ch(t,d),L=o(t,s,R);if(!se(c)||c==="")return new Intl.NumberFormat(R,f).format(u);let k={},F,H=null;const P="number format";for(let U=0;U<L.length&&(F=L[U],k=n[F]||{},H=k[c],!ye(H));U++)kh(t,c,F,m,P);if(!ye(H)||!se(F))return r?xl:c;let C=`${F}__${c}`;Ll(f)||(C=`${C}__${JSON.stringify(f)}`);let j=a.get(C);return j||(j=new Intl.NumberFormat(F,Lt({},H,f)),a.set(C,j)),g?j.formatToParts(u):j.format(u)}const ty=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Tu(...t){const[e,n,r,s]=t,i=je();let o=je();if(!dt(e))throw kn(Tn.INVALID_ARGUMENT);const a=e;return se(n)?i.key=n:ye(n)&&Object.keys(n).forEach(c=>{ty.includes(c)?o[c]=n[c]:i[c]=n[c]}),se(r)?i.locale=r:ye(r)&&(o=r),ye(s)&&(o=s),[i.key||"",a,i,o]}function Vp(t,e,n){const r=t;for(const s in n){const i=`${e}__${s}`;r.__numberFormatters.has(i)&&r.__numberFormatters.delete(i)}}D0();/*!
  * vue-i18n v9.14.2
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const MA="9.14.2";function VA(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(tr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(tr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(tr().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(tr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(tr().__INTLIFY_PROD_DEVTOOLS__=!1)}const ny=tA.__EXTEND_POINT__,Xn=Dl(ny);Xn(),Xn(),Xn(),Xn(),Xn(),Xn(),Xn(),Xn(),Xn();const ry=Tn.__EXTEND_POINT__,en=Dl(ry),Et={UNEXPECTED_RETURN_TYPE:ry,INVALID_ARGUMENT:en(),MUST_BE_CALL_SETUP_TOP:en(),NOT_INSTALLED:en(),NOT_AVAILABLE_IN_LEGACY_MODE:en(),REQUIRED_VALUE:en(),INVALID_VALUE:en(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:en(),NOT_INSTALLED_WITH_PROVIDE:en(),UNEXPECTED_ERROR:en(),NOT_COMPATIBLE_LEGACY_VUE_I18N:en(),BRIDGE_SUPPORT_VUE_2_ONLY:en(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:en(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:en(),__EXTEND_POINT__:en()};function St(t,...e){return vi(t,null,void 0)}const Iu=zr("__translateVNode"),bu=zr("__datetimeParts"),wu=zr("__numberParts"),sy=zr("__setPluralRules"),iy=zr("__injectWithOption"),Au=zr("__dispose");function Io(t){if(!xe(t))return t;for(const e in t)if(En(t,e))if(!e.includes("."))xe(t[e])&&Io(t[e]);else{const n=e.split("."),r=n.length-1;let s=t,i=!1;for(let o=0;o<r;o++){if(n[o]in s||(s[n[o]]=je()),!xe(s[n[o]])){i=!0;break}s=s[n[o]]}i||(s[n[r]]=t[e],delete t[e]),xe(s[n[r]])&&Io(s[n[r]])}return t}function Ml(t,e){const{messages:n,__i18n:r,messageResolver:s,flatJson:i}=e,o=ye(n)?n:Je(r)?je():{[t]:je()};if(Je(r)&&r.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:c,resource:u}=a;c?(o[c]=o[c]||je(),Sa(u,o[c])):Sa(u,o)}else se(a)&&Sa(JSON.parse(a),o)}),s==null&&i)for(const a in o)En(o,a)&&Io(o[a]);return o}function oy(t){return t.type}function ay(t,e,n){let r=xe(e.messages)?e.messages:je();"__i18nGlobal"in n&&(r=Ml(t.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const s=Object.keys(r);s.length&&s.forEach(i=>{t.mergeLocaleMessage(i,r[i])});{if(xe(e.datetimeFormats)){const i=Object.keys(e.datetimeFormats);i.length&&i.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(xe(e.numberFormats)){const i=Object.keys(e.numberFormats);i.length&&i.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function Fp(t){return it(Mo,null,t,0)}const Up="__INTLIFY_META__",$p=()=>[],FA=()=>!1;let Bp=0;function jp(t){return(e,n,r,s)=>t(n,r,go()||void 0,s)}const UA=()=>{const t=go();let e=null;return t&&(e=oy(t)[Up])?{[Up]:e}:null};function Oh(t={},e){const{__root:n,__injectWithOption:r}=t,s=n===void 0,i=t.flatJson,o=Qa?Ve:_h,a=!!t.translateExistCompatible;let c=we(t.inheritLocale)?t.inheritLocale:!0;const u=o(n&&c?n.locale.value:se(t.locale)?t.locale:li),d=o(n&&c?n.fallbackLocale.value:se(t.fallbackLocale)||Je(t.fallbackLocale)||ye(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:u.value),f=o(Ml(u.value,t)),m=o(ye(t.datetimeFormats)?t.datetimeFormats:{[u.value]:{}}),g=o(ye(t.numberFormats)?t.numberFormats:{[u.value]:{}});let R=n?n.missingWarn:we(t.missingWarn)||Fr(t.missingWarn)?t.missingWarn:!0,L=n?n.fallbackWarn:we(t.fallbackWarn)||Fr(t.fallbackWarn)?t.fallbackWarn:!0,k=n?n.fallbackRoot:we(t.fallbackRoot)?t.fallbackRoot:!0,F=!!t.fallbackFormat,H=Ge(t.missing)?t.missing:null,P=Ge(t.missing)?jp(t.missing):null,C=Ge(t.postTranslation)?t.postTranslation:null,j=n?n.warnHtmlMessage:we(t.warnHtmlMessage)?t.warnHtmlMessage:!0,U=!!t.escapeParameter;const I=n?n.modifiers:ye(t.modifiers)?t.modifiers:{};let _=t.pluralRules||n&&n.pluralRules,y;y=(()=>{s&&Cp(null);const x={version:MA,locale:u.value,fallbackLocale:d.value,messages:f.value,modifiers:I,pluralRules:_,missing:P===null?void 0:P,missingWarn:R,fallbackWarn:L,fallbackFormat:F,unresolving:!0,postTranslation:C===null?void 0:C,warnHtmlMessage:j,escapeParameter:U,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};x.datetimeFormats=m.value,x.numberFormats=g.value,x.__datetimeFormatters=ye(y)?y.__datetimeFormatters:void 0,x.__numberFormatters=ye(y)?y.__numberFormatters:void 0;const B=dA(x);return s&&Cp(B),B})(),Bi(y,u.value,d.value);function O(){return[u.value,d.value,f.value,m.value,g.value]}const N=Ke({get:()=>u.value,set:x=>{u.value=x,y.locale=u.value}}),A=Ke({get:()=>d.value,set:x=>{d.value=x,y.fallbackLocale=d.value,Bi(y,u.value,x)}}),rt=Ke(()=>f.value),ft=Ke(()=>m.value),Ae=Ke(()=>g.value);function he(){return Ge(C)?C:null}function Te(x){C=x,y.postTranslation=x}function _t(){return H}function Ct(x){x!==null&&(P=jp(x)),H=x,y.missing=P}const et=(x,B,le,ue,Ye,st)=>{O();let tt;try{__INTLIFY_PROD_DEVTOOLS__,s||(y.fallbackContext=n?hA():void 0),tt=x(y)}finally{__INTLIFY_PROD_DEVTOOLS__,s||(y.fallbackContext=void 0)}if(le!=="translate exists"&&dt(tt)&&tt===xl||le==="translate exists"&&!tt){const[bt,qn]=B();return n&&k?ue(n):Ye(bt)}else{if(st(tt))return tt;throw St(Et.UNEXPECTED_RETURN_TYPE)}};function Me(...x){return et(B=>Reflect.apply(Lp,null,[B,...x]),()=>vu(...x),"translate",B=>Reflect.apply(B.t,B,[...x]),B=>B,B=>se(B))}function Be(...x){const[B,le,ue]=x;if(ue&&!xe(ue))throw St(Et.INVALID_ARGUMENT);return Me(B,le,Lt({resolvedMessage:!0},ue||{}))}function qt(...x){return et(B=>Reflect.apply(Dp,null,[B,...x]),()=>Eu(...x),"datetime format",B=>Reflect.apply(B.d,B,[...x]),()=>Rp,B=>se(B))}function xt(...x){return et(B=>Reflect.apply(Mp,null,[B,...x]),()=>Tu(...x),"number format",B=>Reflect.apply(B.n,B,[...x]),()=>Rp,B=>se(B))}function pt(x){return x.map(B=>se(B)||dt(B)||we(B)?Fp(String(B)):B)}const re={normalize:pt,interpolate:x=>x,type:"vnode"};function te(...x){return et(B=>{let le;const ue=B;try{ue.processor=re,le=Reflect.apply(Lp,null,[ue,...x])}finally{ue.processor=null}return le},()=>vu(...x),"translate",B=>B[Iu](...x),B=>[Fp(B)],B=>Je(B))}function oe(...x){return et(B=>Reflect.apply(Mp,null,[B,...x]),()=>Tu(...x),"number format",B=>B[wu](...x),$p,B=>se(B)||Je(B))}function Ie(...x){return et(B=>Reflect.apply(Dp,null,[B,...x]),()=>Eu(...x),"datetime format",B=>B[bu](...x),$p,B=>se(B)||Je(B))}function Ne(x){_=x,y.pluralRules=_}function w(x,B){return et(()=>{if(!x)return!1;const le=se(B)?B:u.value,ue=Y(le),Ye=y.messageResolver(ue,x);return a?Ye!=null:ci(Ye)||dn(Ye)||se(Ye)},()=>[x],"translate exists",le=>Reflect.apply(le.te,le,[x,B]),FA,le=>we(le))}function E(x){let B=null;const le=W_(y,d.value,u.value);for(let ue=0;ue<le.length;ue++){const Ye=f.value[le[ue]]||{},st=y.messageResolver(Ye,x);if(st!=null){B=st;break}}return B}function M(x){const B=E(x);return B??(n?n.tm(x)||{}:{})}function Y(x){return f.value[x]||{}}function q(x,B){if(i){const le={[x]:B};for(const ue in le)En(le,ue)&&Io(le[ue]);B=le[x]}f.value[x]=B,y.messages=f.value}function X(x,B){f.value[x]=f.value[x]||{};const le={[x]:B};if(i)for(const ue in le)En(le,ue)&&Io(le[ue]);B=le[x],Sa(B,f.value[x]),y.messages=f.value}function ne(x){return m.value[x]||{}}function T(x,B){m.value[x]=B,y.datetimeFormats=m.value,xp(y,x,B)}function b(x,B){m.value[x]=Lt(m.value[x]||{},B),y.datetimeFormats=m.value,xp(y,x,B)}function D(x){return g.value[x]||{}}function z(x,B){g.value[x]=B,y.numberFormats=g.value,Vp(y,x,B)}function Z(x,B){g.value[x]=Lt(g.value[x]||{},B),y.numberFormats=g.value,Vp(y,x,B)}Bp++,n&&Qa&&(ir(n.locale,x=>{c&&(u.value=x,y.locale=x,Bi(y,u.value,d.value))}),ir(n.fallbackLocale,x=>{c&&(d.value=x,y.fallbackLocale=x,Bi(y,u.value,d.value))}));const Q={id:Bp,locale:N,fallbackLocale:A,get inheritLocale(){return c},set inheritLocale(x){c=x,x&&n&&(u.value=n.locale.value,d.value=n.fallbackLocale.value,Bi(y,u.value,d.value))},get availableLocales(){return Object.keys(f.value).sort()},messages:rt,get modifiers(){return I},get pluralRules(){return _||{}},get isGlobal(){return s},get missingWarn(){return R},set missingWarn(x){R=x,y.missingWarn=R},get fallbackWarn(){return L},set fallbackWarn(x){L=x,y.fallbackWarn=L},get fallbackRoot(){return k},set fallbackRoot(x){k=x},get fallbackFormat(){return F},set fallbackFormat(x){F=x,y.fallbackFormat=F},get warnHtmlMessage(){return j},set warnHtmlMessage(x){j=x,y.warnHtmlMessage=x},get escapeParameter(){return U},set escapeParameter(x){U=x,y.escapeParameter=x},t:Me,getLocaleMessage:Y,setLocaleMessage:q,mergeLocaleMessage:X,getPostTranslationHandler:he,setPostTranslationHandler:Te,getMissingHandler:_t,setMissingHandler:Ct,[sy]:Ne};return Q.datetimeFormats=ft,Q.numberFormats=Ae,Q.rt=Be,Q.te=w,Q.tm=M,Q.d=qt,Q.n=xt,Q.getDateTimeFormat=ne,Q.setDateTimeFormat=T,Q.mergeDateTimeFormat=b,Q.getNumberFormat=D,Q.setNumberFormat=z,Q.mergeNumberFormat=Z,Q[iy]=r,Q[Iu]=te,Q[bu]=Ie,Q[wu]=oe,Q}function $A(t){const e=se(t.locale)?t.locale:li,n=se(t.fallbackLocale)||Je(t.fallbackLocale)||ye(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,r=Ge(t.missing)?t.missing:void 0,s=we(t.silentTranslationWarn)||Fr(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,i=we(t.silentFallbackWarn)||Fr(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,o=we(t.fallbackRoot)?t.fallbackRoot:!0,a=!!t.formatFallbackMessages,c=ye(t.modifiers)?t.modifiers:{},u=t.pluralizationRules,d=Ge(t.postTranslation)?t.postTranslation:void 0,f=se(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,m=!!t.escapeParameterHtml,g=we(t.sync)?t.sync:!0;let R=t.messages;if(ye(t.sharedMessages)){const U=t.sharedMessages;R=Object.keys(U).reduce((_,y)=>{const S=_[y]||(_[y]={});return Lt(S,U[y]),_},R||{})}const{__i18n:L,__root:k,__injectWithOption:F}=t,H=t.datetimeFormats,P=t.numberFormats,C=t.flatJson,j=t.translateExistCompatible;return{locale:e,fallbackLocale:n,messages:R,flatJson:C,datetimeFormats:H,numberFormats:P,missing:r,missingWarn:s,fallbackWarn:i,fallbackRoot:o,fallbackFormat:a,modifiers:c,pluralRules:u,postTranslation:d,warnHtmlMessage:f,escapeParameter:m,messageResolver:t.messageResolver,inheritLocale:g,translateExistCompatible:j,__i18n:L,__root:k,__injectWithOption:F}}function Ru(t={},e){{const n=Oh($A(t)),{__extender:r}=t,s={id:n.id,get locale(){return n.locale.value},set locale(i){n.locale.value=i},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(i){n.fallbackLocale.value=i},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(i){},get missing(){return n.getMissingHandler()},set missing(i){n.setMissingHandler(i)},get silentTranslationWarn(){return we(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(i){n.missingWarn=we(i)?!i:i},get silentFallbackWarn(){return we(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(i){n.fallbackWarn=we(i)?!i:i},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(i){n.fallbackFormat=i},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(i){n.setPostTranslationHandler(i)},get sync(){return n.inheritLocale},set sync(i){n.inheritLocale=i},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(i){n.warnHtmlMessage=i!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(i){n.escapeParameter=i},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(i){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...i){const[o,a,c]=i,u={};let d=null,f=null;if(!se(o))throw St(Et.INVALID_ARGUMENT);const m=o;return se(a)?u.locale=a:Je(a)?d=a:ye(a)&&(f=a),Je(c)?d=c:ye(c)&&(f=c),Reflect.apply(n.t,n,[m,d||f||{},u])},rt(...i){return Reflect.apply(n.rt,n,[...i])},tc(...i){const[o,a,c]=i,u={plural:1};let d=null,f=null;if(!se(o))throw St(Et.INVALID_ARGUMENT);const m=o;return se(a)?u.locale=a:dt(a)?u.plural=a:Je(a)?d=a:ye(a)&&(f=a),se(c)?u.locale=c:Je(c)?d=c:ye(c)&&(f=c),Reflect.apply(n.t,n,[m,d||f||{},u])},te(i,o){return n.te(i,o)},tm(i){return n.tm(i)},getLocaleMessage(i){return n.getLocaleMessage(i)},setLocaleMessage(i,o){n.setLocaleMessage(i,o)},mergeLocaleMessage(i,o){n.mergeLocaleMessage(i,o)},d(...i){return Reflect.apply(n.d,n,[...i])},getDateTimeFormat(i){return n.getDateTimeFormat(i)},setDateTimeFormat(i,o){n.setDateTimeFormat(i,o)},mergeDateTimeFormat(i,o){n.mergeDateTimeFormat(i,o)},n(...i){return Reflect.apply(n.n,n,[...i])},getNumberFormat(i){return n.getNumberFormat(i)},setNumberFormat(i,o){n.setNumberFormat(i,o)},mergeNumberFormat(i,o){n.mergeNumberFormat(i,o)},getChoiceIndex(i,o){return-1}};return s.__extender=r,s}}const Lh={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function BA({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((r,s)=>[...r,...s.type===At?s.children:[s]],[]):e.reduce((n,r)=>{const s=t[r];return s&&(n[r]=s()),n},je())}function ly(t){return At}const jA=xo({name:"i18n-t",props:Lt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>dt(t)||!isNaN(t)}},Lh),setup(t,e){const{slots:n,attrs:r}=e,s=t.i18n||Rn({useScope:t.scope,__useComponent:!0});return()=>{const i=Object.keys(n).filter(f=>f!=="_"),o=je();t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=se(t.plural)?+t.plural:t.plural);const a=BA(e,i),c=s[Iu](t.keypath,a,o),u=Lt(je(),r),d=se(t.tag)||xe(t.tag)?t.tag:ly();return Cl(d,u,c)}}}),Hp=jA;function HA(t){return Je(t)&&!se(t[0])}function cy(t,e,n,r){const{slots:s,attrs:i}=e;return()=>{const o={part:!0};let a=je();t.locale&&(o.locale=t.locale),se(t.format)?o.key=t.format:xe(t.format)&&(se(t.format.key)&&(o.key=t.format.key),a=Object.keys(t.format).reduce((m,g)=>n.includes(g)?Lt(je(),m,{[g]:t.format[g]}):m,je()));const c=r(t.value,o,a);let u=[o.key];Je(c)?u=c.map((m,g)=>{const R=s[m.type],L=R?R({[m.type]:m.value,index:g,parts:c}):[m.value];return HA(L)&&(L[0].key=`${m.type}-${g}`),L}):se(c)&&(u=[c]);const d=Lt(je(),i),f=se(t.tag)||xe(t.tag)?t.tag:ly();return Cl(f,d,u)}}const WA=xo({name:"i18n-n",props:Lt({value:{type:Number,required:!0},format:{type:[String,Object]}},Lh),setup(t,e){const n=t.i18n||Rn({useScope:t.scope,__useComponent:!0});return cy(t,e,ty,(...r)=>n[wu](...r))}}),Wp=WA,qA=xo({name:"i18n-d",props:Lt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Lh),setup(t,e){const n=t.i18n||Rn({useScope:t.scope,__useComponent:!0});return cy(t,e,ey,(...r)=>n[bu](...r))}}),qp=qA;function GA(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const r=n.__getInstance(e);return r!=null?r.__composer:t.global.__composer}}function KA(t){const e=o=>{const{instance:a,modifiers:c,value:u}=o;if(!a||!a.$)throw St(Et.UNEXPECTED_ERROR);const d=GA(t,a.$),f=Gp(u);return[Reflect.apply(d.t,d,[...Kp(f)]),d]};return{created:(o,a)=>{const[c,u]=e(a);Qa&&t.global===u&&(o.__i18nWatcher=ir(u.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=u,o.textContent=c},unmounted:o=>{Qa&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const c=o.__composer,u=Gp(a);o.textContent=Reflect.apply(c.t,c,[...Kp(u)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function Gp(t){if(se(t))return{path:t};if(ye(t)){if(!("path"in t))throw St(Et.REQUIRED_VALUE,"path");return t}else throw St(Et.INVALID_VALUE)}function Kp(t){const{path:e,locale:n,args:r,choice:s,plural:i}=t,o={},a=r||{};return se(n)&&(o.locale=n),dt(s)&&(o.plural=s),dt(i)&&(o.plural=i),[e,a,o]}function zA(t,e,...n){const r=ye(n[0])?n[0]:{},s=!!r.useI18nComponentName;(we(r.globalInstall)?r.globalInstall:!0)&&([s?"i18n":Hp.name,"I18nT"].forEach(o=>t.component(o,Hp)),[Wp.name,"I18nN"].forEach(o=>t.component(o,Wp)),[qp.name,"I18nD"].forEach(o=>t.component(o,qp))),t.directive("t",KA(e))}function YA(t,e,n){return{beforeCreate(){const r=go();if(!r)throw St(Et.UNEXPECTED_ERROR);const s=this.$options;if(s.i18n){const i=s.i18n;if(s.__i18n&&(i.__i18n=s.__i18n),i.__root=e,this===this.$root)this.$i18n=zp(t,i);else{i.__injectWithOption=!0,i.__extender=n.__vueI18nExtend,this.$i18n=Ru(i);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(s.__i18n)if(this===this.$root)this.$i18n=zp(t,s);else{this.$i18n=Ru({__i18n:s.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const i=this.$i18n;i.__extender&&(i.__disposer=i.__extender(this.$i18n))}else this.$i18n=t;s.__i18nGlobal&&ay(e,s,s),this.$t=(...i)=>this.$i18n.t(...i),this.$rt=(...i)=>this.$i18n.rt(...i),this.$tc=(...i)=>this.$i18n.tc(...i),this.$te=(i,o)=>this.$i18n.te(i,o),this.$d=(...i)=>this.$i18n.d(...i),this.$n=(...i)=>this.$i18n.n(...i),this.$tm=i=>this.$i18n.tm(i),n.__setInstance(r,this.$i18n)},mounted(){},unmounted(){const r=go();if(!r)throw St(Et.UNEXPECTED_ERROR);const s=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,s.__disposer&&(s.__disposer(),delete s.__disposer,delete s.__extender),n.__deleteInstance(r),delete this.$i18n}}}function zp(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[sy](e.pluralizationRules||t.pluralizationRules);const n=Ml(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(r=>t.mergeLocaleMessage(r,n[r])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(r=>t.mergeDateTimeFormat(r,e.datetimeFormats[r])),e.numberFormats&&Object.keys(e.numberFormats).forEach(r=>t.mergeNumberFormat(r,e.numberFormats[r])),t}const QA=zr("global-vue-i18n");function XA(t={},e){const n=__VUE_I18N_LEGACY_API__&&we(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,r=we(t.globalInjection)?t.globalInjection:!0,s=__VUE_I18N_LEGACY_API__&&n?!!t.allowComposition:!0,i=new Map,[o,a]=JA(t,n),c=zr("");function u(m){return i.get(m)||null}function d(m,g){i.set(m,g)}function f(m){i.delete(m)}{const m={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return s},async install(g,...R){if(g.__VUE_I18N_SYMBOL__=c,g.provide(g.__VUE_I18N_SYMBOL__,m),ye(R[0])){const F=R[0];m.__composerExtend=F.__composerExtend,m.__vueI18nExtend=F.__vueI18nExtend}let L=null;!n&&r&&(L=aR(g,m.global)),__VUE_I18N_FULL_INSTALL__&&zA(g,m,...R),__VUE_I18N_LEGACY_API__&&n&&g.mixin(YA(a,a.__composer,m));const k=g.unmount;g.unmount=()=>{L&&L(),m.dispose(),k()}},get global(){return a},dispose(){o.stop()},__instances:i,__getInstance:u,__setInstance:d,__deleteInstance:f};return m}}function Rn(t={}){const e=go();if(e==null)throw St(Et.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw St(Et.NOT_INSTALLED);const n=ZA(e),r=tR(n),s=oy(e),i=eR(t,s);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!t.__useComponent){if(!n.allowComposition)throw St(Et.NOT_AVAILABLE_IN_LEGACY_MODE);return iR(e,i,r,t)}if(i==="global")return ay(r,t,s),r;if(i==="parent"){let c=nR(n,e,t.__useComponent);return c==null&&(c=r),c}const o=n;let a=o.__getInstance(e);if(a==null){const c=Lt({},t);"__i18n"in s&&(c.__i18n=s.__i18n),r&&(c.__root=r),a=Oh(c),o.__composerExtend&&(a[Au]=o.__composerExtend(a)),sR(o,e,a),o.__setInstance(e,a)}return a}function JA(t,e,n){const r=lh();{const s=__VUE_I18N_LEGACY_API__&&e?r.run(()=>Ru(t)):r.run(()=>Oh(t));if(s==null)throw St(Et.UNEXPECTED_ERROR);return[r,s]}}function ZA(t){{const e=pn(t.isCE?QA:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw St(t.isCE?Et.NOT_INSTALLED_WITH_PROVIDE:Et.UNEXPECTED_ERROR);return e}}function eR(t,e){return Ll(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function tR(t){return t.mode==="composition"?t.global:t.global.__composer}function nR(t,e,n=!1){let r=null;const s=e.root;let i=rR(e,n);for(;i!=null;){const o=t;if(t.mode==="composition")r=o.__getInstance(i);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(i);a!=null&&(r=a.__composer,n&&r&&!r[iy]&&(r=null))}if(r!=null||s===i)break;i=i.parent}return r}function rR(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function sR(t,e,n){yi(()=>{},e),Eh(()=>{const r=n;t.__deleteInstance(e);const s=r[Au];s&&(s(),delete r[Au])},e)}function iR(t,e,n,r={}){const s=e==="local",i=_h(null);if(s&&t.proxy&&!(t.proxy.$options.i18n||t.proxy.$options.__i18n))throw St(Et.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const o=we(r.inheritLocale)?r.inheritLocale:!se(r.locale),a=Ve(!s||o?n.locale.value:se(r.locale)?r.locale:li),c=Ve(!s||o?n.fallbackLocale.value:se(r.fallbackLocale)||Je(r.fallbackLocale)||ye(r.fallbackLocale)||r.fallbackLocale===!1?r.fallbackLocale:a.value),u=Ve(Ml(a.value,r)),d=Ve(ye(r.datetimeFormats)?r.datetimeFormats:{[a.value]:{}}),f=Ve(ye(r.numberFormats)?r.numberFormats:{[a.value]:{}}),m=s?n.missingWarn:we(r.missingWarn)||Fr(r.missingWarn)?r.missingWarn:!0,g=s?n.fallbackWarn:we(r.fallbackWarn)||Fr(r.fallbackWarn)?r.fallbackWarn:!0,R=s?n.fallbackRoot:we(r.fallbackRoot)?r.fallbackRoot:!0,L=!!r.fallbackFormat,k=Ge(r.missing)?r.missing:null,F=Ge(r.postTranslation)?r.postTranslation:null,H=s?n.warnHtmlMessage:we(r.warnHtmlMessage)?r.warnHtmlMessage:!0,P=!!r.escapeParameter,C=s?n.modifiers:ye(r.modifiers)?r.modifiers:{},j=r.pluralRules||s&&n.pluralRules;function U(){return[a.value,c.value,u.value,d.value,f.value]}const I=Ke({get:()=>i.value?i.value.locale.value:a.value,set:E=>{i.value&&(i.value.locale.value=E),a.value=E}}),_=Ke({get:()=>i.value?i.value.fallbackLocale.value:c.value,set:E=>{i.value&&(i.value.fallbackLocale.value=E),c.value=E}}),y=Ke(()=>i.value?i.value.messages.value:u.value),S=Ke(()=>d.value),O=Ke(()=>f.value);function N(){return i.value?i.value.getPostTranslationHandler():F}function A(E){i.value&&i.value.setPostTranslationHandler(E)}function rt(){return i.value?i.value.getMissingHandler():k}function ft(E){i.value&&i.value.setMissingHandler(E)}function Ae(E){return U(),E()}function he(...E){return i.value?Ae(()=>Reflect.apply(i.value.t,null,[...E])):Ae(()=>"")}function Te(...E){return i.value?Reflect.apply(i.value.rt,null,[...E]):""}function _t(...E){return i.value?Ae(()=>Reflect.apply(i.value.d,null,[...E])):Ae(()=>"")}function Ct(...E){return i.value?Ae(()=>Reflect.apply(i.value.n,null,[...E])):Ae(()=>"")}function et(E){return i.value?i.value.tm(E):{}}function Me(E,M){return i.value?i.value.te(E,M):!1}function Be(E){return i.value?i.value.getLocaleMessage(E):{}}function qt(E,M){i.value&&(i.value.setLocaleMessage(E,M),u.value[E]=M)}function xt(E,M){i.value&&i.value.mergeLocaleMessage(E,M)}function pt(E){return i.value?i.value.getDateTimeFormat(E):{}}function G(E,M){i.value&&(i.value.setDateTimeFormat(E,M),d.value[E]=M)}function re(E,M){i.value&&i.value.mergeDateTimeFormat(E,M)}function te(E){return i.value?i.value.getNumberFormat(E):{}}function oe(E,M){i.value&&(i.value.setNumberFormat(E,M),f.value[E]=M)}function Ie(E,M){i.value&&i.value.mergeNumberFormat(E,M)}const Ne={get id(){return i.value?i.value.id:-1},locale:I,fallbackLocale:_,messages:y,datetimeFormats:S,numberFormats:O,get inheritLocale(){return i.value?i.value.inheritLocale:o},set inheritLocale(E){i.value&&(i.value.inheritLocale=E)},get availableLocales(){return i.value?i.value.availableLocales:Object.keys(u.value)},get modifiers(){return i.value?i.value.modifiers:C},get pluralRules(){return i.value?i.value.pluralRules:j},get isGlobal(){return i.value?i.value.isGlobal:!1},get missingWarn(){return i.value?i.value.missingWarn:m},set missingWarn(E){i.value&&(i.value.missingWarn=E)},get fallbackWarn(){return i.value?i.value.fallbackWarn:g},set fallbackWarn(E){i.value&&(i.value.missingWarn=E)},get fallbackRoot(){return i.value?i.value.fallbackRoot:R},set fallbackRoot(E){i.value&&(i.value.fallbackRoot=E)},get fallbackFormat(){return i.value?i.value.fallbackFormat:L},set fallbackFormat(E){i.value&&(i.value.fallbackFormat=E)},get warnHtmlMessage(){return i.value?i.value.warnHtmlMessage:H},set warnHtmlMessage(E){i.value&&(i.value.warnHtmlMessage=E)},get escapeParameter(){return i.value?i.value.escapeParameter:P},set escapeParameter(E){i.value&&(i.value.escapeParameter=E)},t:he,getPostTranslationHandler:N,setPostTranslationHandler:A,getMissingHandler:rt,setMissingHandler:ft,rt:Te,d:_t,n:Ct,tm:et,te:Me,getLocaleMessage:Be,setLocaleMessage:qt,mergeLocaleMessage:xt,getDateTimeFormat:pt,setDateTimeFormat:G,mergeDateTimeFormat:re,getNumberFormat:te,setNumberFormat:oe,mergeNumberFormat:Ie};function w(E){E.locale.value=a.value,E.fallbackLocale.value=c.value,Object.keys(u.value).forEach(M=>{E.mergeLocaleMessage(M,u.value[M])}),Object.keys(d.value).forEach(M=>{E.mergeDateTimeFormat(M,d.value[M])}),Object.keys(f.value).forEach(M=>{E.mergeNumberFormat(M,f.value[M])}),E.escapeParameter=P,E.fallbackFormat=L,E.fallbackRoot=R,E.fallbackWarn=g,E.missingWarn=m,E.warnHtmlMessage=H}return e_(()=>{if(t.proxy==null||t.proxy.$i18n==null)throw St(Et.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const E=i.value=t.proxy.$i18n.__composer;e==="global"?(a.value=E.locale.value,c.value=E.fallbackLocale.value,u.value=E.messages.value,d.value=E.datetimeFormats.value,f.value=E.numberFormats.value):s&&w(E)}),Ne}const oR=["locale","fallbackLocale","availableLocales"],Yp=["t","rt","d","n","tm","te"];function aR(t,e){const n=Object.create(null);return oR.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i)throw St(Et.UNEXPECTED_ERROR);const o=ut(i.value)?{get(){return i.value.value},set(a){i.value.value=a}}:{get(){return i.get&&i.get()}};Object.defineProperty(n,s,o)}),t.config.globalProperties.$i18n=n,Yp.forEach(s=>{const i=Object.getOwnPropertyDescriptor(e,s);if(!i||!i.value)throw St(Et.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${s}`,i)}),()=>{delete t.config.globalProperties.$i18n,Yp.forEach(s=>{delete t.config.globalProperties[`$${s}`]})}}VA();__INTLIFY_JIT_COMPILATION__?Pp(NA):Pp(kA);aA(j0);lA(W_);if(__INTLIFY_PROD_DEVTOOLS__){const t=tr();t.__INTLIFY__=!0,X0(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}var lR=!1;/*!
 * pinia v2.2.8
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let uy;const Vl=t=>uy=t,hy=Symbol();function Su(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ro;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ro||(ro={}));function cR(){const t=lh(!0),e=t.run(()=>Ve({}));let n=[],r=[];const s=gh({install(i){Vl(s),s._a=i,i.provide(hy,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!lR?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const dy=()=>{};function Qp(t,e,n,r=dy){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Sg()&&MT(s),s}function Fs(t,...e){t.slice().forEach(n=>{n(...e)})}const uR=t=>t(),Xp=Symbol(),Hc=Symbol();function Pu(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Su(s)&&Su(r)&&t.hasOwnProperty(n)&&!ut(r)&&!Or(r)?t[n]=Pu(s,r):t[n]=r}return t}const hR=Symbol();function dR(t){return!Su(t)||!t.hasOwnProperty(hR)}const{assign:Tr}=Object;function fR(t){return!!(ut(t)&&t.effect)}function pR(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function u(){a||(n.state.value[t]=s?s():{});const d=sI(n.state.value[t]);return Tr(d,i,Object.keys(o||{}).reduce((f,m)=>(f[m]=gh(Ke(()=>{Vl(n);const g=n._s.get(t);return o[m].call(g,g)})),f),{}))}return c=fy(t,u,e,n,r,!0),c}function fy(t,e,n={},r,s,i){let o;const a=Tr({actions:{}},n),c={deep:!0};let u,d,f=[],m=[],g;const R=r.state.value[t];!i&&!R&&(r.state.value[t]={}),Ve({});let L;function k(_){let y;u=d=!1,typeof _=="function"?(_(r.state.value[t]),y={type:ro.patchFunction,storeId:t,events:g}):(Pu(r.state.value[t],_),y={type:ro.patchObject,payload:_,storeId:t,events:g});const S=L=Symbol();Al().then(()=>{L===S&&(u=!0)}),d=!0,Fs(f,y,r.state.value[t])}const F=i?function(){const{state:y}=n,S=y?y():{};this.$patch(O=>{Tr(O,S)})}:dy;function H(){o.stop(),f=[],m=[],r._s.delete(t)}const P=(_,y="")=>{if(Xp in _)return _[Hc]=y,_;const S=function(){Vl(r);const O=Array.from(arguments),N=[],A=[];function rt(he){N.push(he)}function ft(he){A.push(he)}Fs(m,{args:O,name:S[Hc],store:j,after:rt,onError:ft});let Ae;try{Ae=_.apply(this&&this.$id===t?this:j,O)}catch(he){throw Fs(A,he),he}return Ae instanceof Promise?Ae.then(he=>(Fs(N,he),he)).catch(he=>(Fs(A,he),Promise.reject(he))):(Fs(N,Ae),Ae)};return S[Xp]=!0,S[Hc]=y,S},C={_p:r,$id:t,$onAction:Qp.bind(null,m),$patch:k,$reset:F,$subscribe(_,y={}){const S=Qp(f,_,y.detached,()=>O()),O=o.run(()=>ir(()=>r.state.value[t],N=>{(y.flush==="sync"?d:u)&&_({storeId:t,type:ro.direct,events:g},N)},Tr({},c,y)));return S},$dispose:H},j=Lo(C);r._s.set(t,j);const I=(r._a&&r._a.runWithContext||uR)(()=>r._e.run(()=>(o=lh()).run(()=>e({action:P}))));for(const _ in I){const y=I[_];if(ut(y)&&!fR(y)||Or(y))i||(R&&dR(y)&&(ut(y)?y.value=R[_]:Pu(y,R[_])),r.state.value[t][_]=y);else if(typeof y=="function"){const S=P(y,_);I[_]=S,a.actions[_]=y}}return Tr(j,I),Tr(De(j),I),Object.defineProperty(j,"$state",{get:()=>r.state.value[t],set:_=>{k(y=>{Tr(y,_)})}}),r._p.forEach(_=>{Tr(j,o.run(()=>_({store:j,app:r._a,pinia:r,options:a})))}),R&&i&&n.hydrate&&n.hydrate(j.$state,R),u=!0,d=!0,j}/*! #__NO_SIDE_EFFECTS__ */function mR(t,e,n){let r,s;const i=typeof e=="function";r=t,s=i?n:e;function o(a,c){const u=FI();return a=a||(u?pn(hy,null):null),a&&Vl(a),a=uy,a._s.has(r)||(i?fy(r,e,s,a):pR(r,s,a)),a._s.get(r)}return o.$id=r,o}var Jp={};/**
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
 */const py=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},gR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},my={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,d=i>>2,f=(i&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(m=64)),r.push(n[d],n[f],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(py(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||f==null)throw new _R;const m=i<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const R=u<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _R extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yR=function(t){const e=py(t);return my.encodeByteArray(e,!0)},Ja=function(t){return yR(t).replace(/\./g,"")},gy=function(t){try{return my.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ER=()=>vR().__FIREBASE_DEFAULTS__,TR=()=>{if(typeof process>"u"||typeof Jp>"u")return;const t=Jp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},IR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gy(t[1]);return e&&JSON.parse(e)},Fl=()=>{try{return ER()||TR()||IR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_y=t=>{var e,n;return(n=(e=Fl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yy=t=>{const e=_y(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},vy=()=>{var t;return(t=Fl())===null||t===void 0?void 0:t.config},Ey=t=>{var e;return(e=Fl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class bR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ty(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ja(JSON.stringify(n)),Ja(JSON.stringify(o)),""].join(".")}/**
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
 */function Wt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Wt())}function AR(){var t;const e=(t=Fl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function PR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function CR(){const t=Wt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function kR(){return!AR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function NR(){try{return typeof indexedDB=="object"}catch{return!1}}function OR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const LR="FirebaseError";class Wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=LR,Object.setPrototypeOf(this,Wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fo.prototype.create)}}class Fo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?DR(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Wn(s,a,r)}}function DR(t,e){return t.replace(xR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const xR=/\{\$([^}]+)}/g;function MR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Za(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Zp(i)&&Zp(o)){if(!Za(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Zp(t){return t!==null&&typeof t=="object"}/**
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
 */function Uo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Wi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function qi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function VR(t,e){const n=new FR(t,e);return n.subscribe.bind(n)}class FR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Wc),s.error===void 0&&(s.error=Wc),s.complete===void 0&&(s.complete=Wc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wc(){}/**
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
 */function ot(t){return t&&t._delegate?t._delegate:t}class Ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const us="[DEFAULT]";/**
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
 */class $R{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jR(e))try{this.getOrInitializeService({instanceIdentifier:us})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=us){return this.instances.has(e)}getOptions(e=us){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=us){return this.component?this.component.multipleInstances?e:us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BR(t){return t===us?void 0:t}function jR(t){return t.instantiationMode==="EAGER"}/**
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
 */class HR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $R(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const WR={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},qR=Re.INFO,GR={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},KR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=GR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dh{constructor(e){this.name=e,this._logLevel=qR,this._logHandler=KR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const zR=(t,e)=>e.some(n=>t instanceof n);let em,tm;function YR(){return em||(em=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QR(){return tm||(tm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Iy=new WeakMap,Cu=new WeakMap,by=new WeakMap,qc=new WeakMap,xh=new WeakMap;function XR(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Lr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Iy.set(n,t)}).catch(()=>{}),xh.set(e,t),e}function JR(t){if(Cu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Cu.set(t,e)}let ku={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||by.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZR(t){ku=t(ku)}function eS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gc(this),e,...n);return by.set(r,e.sort?e.sort():[e]),Lr(r)}:QR().includes(t)?function(...e){return t.apply(Gc(this),e),Lr(Iy.get(this))}:function(...e){return Lr(t.apply(Gc(this),e))}}function tS(t){return typeof t=="function"?eS(t):(t instanceof IDBTransaction&&JR(t),zR(t,YR())?new Proxy(t,ku):t)}function Lr(t){if(t instanceof IDBRequest)return XR(t);if(qc.has(t))return qc.get(t);const e=tS(t);return e!==t&&(qc.set(t,e),xh.set(e,t)),e}const Gc=t=>xh.get(t);function nS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Lr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Lr(o.result),c.oldVersion,c.newVersion,Lr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const rS=["get","getKey","getAll","getAllKeys","count"],sS=["put","add","delete","clear"],Kc=new Map;function nm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kc.get(e))return Kc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=sS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rS.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Kc.set(e,i),i}ZR(t=>({...t,get:(e,n,r)=>nm(e,n)||t.get(e,n,r),has:(e,n)=>!!nm(e,n)||t.has(e,n)}));/**
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
 */class iS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function oS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Nu="@firebase/app",rm="0.10.16";/**
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
 */const cr=new Dh("@firebase/app"),aS="@firebase/app-compat",lS="@firebase/analytics-compat",cS="@firebase/analytics",uS="@firebase/app-check-compat",hS="@firebase/app-check",dS="@firebase/auth",fS="@firebase/auth-compat",pS="@firebase/database",mS="@firebase/data-connect",gS="@firebase/database-compat",_S="@firebase/functions",yS="@firebase/functions-compat",vS="@firebase/installations",ES="@firebase/installations-compat",TS="@firebase/messaging",IS="@firebase/messaging-compat",bS="@firebase/performance",wS="@firebase/performance-compat",AS="@firebase/remote-config",RS="@firebase/remote-config-compat",SS="@firebase/storage",PS="@firebase/storage-compat",CS="@firebase/firestore",kS="@firebase/vertexai",NS="@firebase/firestore-compat",OS="firebase",LS="11.0.2";/**
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
 */const Ou="[DEFAULT]",DS={[Nu]:"fire-core",[aS]:"fire-core-compat",[cS]:"fire-analytics",[lS]:"fire-analytics-compat",[hS]:"fire-app-check",[uS]:"fire-app-check-compat",[dS]:"fire-auth",[fS]:"fire-auth-compat",[pS]:"fire-rtdb",[mS]:"fire-data-connect",[gS]:"fire-rtdb-compat",[_S]:"fire-fn",[yS]:"fire-fn-compat",[vS]:"fire-iid",[ES]:"fire-iid-compat",[TS]:"fire-fcm",[IS]:"fire-fcm-compat",[bS]:"fire-perf",[wS]:"fire-perf-compat",[AS]:"fire-rc",[RS]:"fire-rc-compat",[SS]:"fire-gcs",[PS]:"fire-gcs-compat",[CS]:"fire-fst",[NS]:"fire-fst-compat",[kS]:"fire-vertex","fire-js":"fire-js",[OS]:"fire-js-all"};/**
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
 */const el=new Map,xS=new Map,Lu=new Map;function sm(t,e){try{t.container.addComponent(e)}catch(n){cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vs(t){const e=t.name;if(Lu.has(e))return cr.debug(`There were multiple attempts to register component ${e}.`),!1;Lu.set(e,t);for(const n of el.values())sm(n,t);for(const n of xS.values())sm(n,t);return!0}function Ul(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Nn(t){return t.settings!==void 0}/**
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
 */const MS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dr=new Fo("app","Firebase",MS);/**
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
 */class VS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dr.create("app-deleted",{appName:this._name})}}/**
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
 */const Rs=LS;function wy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ou,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Dr.create("bad-app-name",{appName:String(s)});if(n||(n=vy()),!n)throw Dr.create("no-options");const i=el.get(s);if(i){if(Za(n,i.options)&&Za(r,i.config))return i;throw Dr.create("duplicate-app",{appName:s})}const o=new HR(s);for(const c of Lu.values())o.addComponent(c);const a=new VS(n,r,o);return el.set(s,a),a}function Mh(t=Ou){const e=el.get(t);if(!e&&t===Ou&&vy())return wy();if(!e)throw Dr.create("no-app",{appName:t});return e}function Mn(t,e,n){var r;let s=(r=DS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cr.warn(a.join(" "));return}vs(new Ur(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const FS="firebase-heartbeat-database",US=1,bo="firebase-heartbeat-store";let zc=null;function Ay(){return zc||(zc=nS(FS,US,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(bo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dr.create("idb-open",{originalErrorMessage:t.message})})),zc}async function $S(t){try{const n=(await Ay()).transaction(bo),r=await n.objectStore(bo).get(Ry(t));return await n.done,r}catch(e){if(e instanceof Wn)cr.warn(e.message);else{const n=Dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cr.warn(n.message)}}}async function im(t,e){try{const r=(await Ay()).transaction(bo,"readwrite");await r.objectStore(bo).put(e,Ry(t)),await r.done}catch(n){if(n instanceof Wn)cr.warn(n.message);else{const r=Dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cr.warn(r.message)}}}function Ry(t){return`${t.name}!${t.options.appId}`}/**
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
 */const BS=1024,jS=30*24*60*60*1e3;class HS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=om();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=jS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){cr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=om(),{heartbeatsToSend:r,unsentEntries:s}=WS(this._heartbeatsCache.heartbeats),i=Ja(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return cr.warn(n),""}}}function om(){return new Date().toISOString().substring(0,10)}function WS(t,e=BS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),am(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),am(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NR()?OR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $S(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return im(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return im(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function am(t){return Ja(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function GS(t){vs(new Ur("platform-logger",e=>new iS(e),"PRIVATE")),vs(new Ur("heartbeat",e=>new HS(e),"PRIVATE")),Mn(Nu,rm,t),Mn(Nu,rm,"esm2017"),Mn("fire-js","")}GS("");function Vh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Sy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KS=Sy,Py=new Fo("auth","Firebase",Sy());/**
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
 */const tl=new Dh("@firebase/auth");function zS(t,...e){tl.logLevel<=Re.WARN&&tl.warn(`Auth (${Rs}): ${t}`,...e)}function Pa(t,...e){tl.logLevel<=Re.ERROR&&tl.error(`Auth (${Rs}): ${t}`,...e)}/**
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
 */function An(t,...e){throw Fh(t,...e)}function Vn(t,...e){return Fh(t,...e)}function Cy(t,e,n){const r=Object.assign(Object.assign({},KS()),{[e]:n});return new Fo("auth","Firebase",r).create(e,{appName:t.name})}function ar(t){return Cy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Py.create(t,...e)}function me(t,e,...n){if(!t)throw Fh(e,...n)}function nr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pa(e),new Error(e)}function ur(t,e){t||nr(e)}/**
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
 */function Du(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function YS(){return lm()==="http:"||lm()==="https:"}function lm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function QS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YS()||SR()||"connection"in navigator)?navigator.onLine:!0}function XS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $o{constructor(e,n){this.shortDelay=e,this.longDelay=n,ur(n>e,"Short delay should be less than long delay!"),this.isMobile=wR()||PR()}get(){return QS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Uh(t,e){ur(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ky{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const JS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ZS=new $o(3e4,6e4);function Xr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jr(t,e,n,r,s={}){return Ny(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Uo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return RR()||(u.referrerPolicy="no-referrer"),ky.fetch()(Oy(t,t.config.apiHost,n,a),u)})}async function Ny(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},JS),e);try{const s=new tP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ma(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ma(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ma(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ma(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Cy(t,d,u);An(t,d)}}catch(s){if(s instanceof Wn)throw s;An(t,"network-request-failed",{message:String(s)})}}async function Bo(t,e,n,r,s={}){const i=await Jr(t,e,n,r,s);return"mfaPendingCredential"in i&&An(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Oy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Uh(t.config,s):`${t.config.apiScheme}://${s}`}function eP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Vn(this.auth,"network-request-failed")),ZS.get())})}}function ma(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Vn(t,e,r);return s.customData._tokenResponse=n,s}function cm(t){return t!==void 0&&t.enterprise!==void 0}class nP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return eP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rP(t,e){return Jr(t,"GET","/v2/recaptchaConfig",Xr(t,e))}/**
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
 */async function sP(t,e){return Jr(t,"POST","/v1/accounts:delete",e)}async function Ly(t,e){return Jr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function so(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iP(t,e=!1){const n=ot(t),r=await n.getIdToken(e),s=$h(r);me(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:so(Yc(s.auth_time)),issuedAtTime:so(Yc(s.iat)),expirationTime:so(Yc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Yc(t){return Number(t)*1e3}function $h(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pa("JWT malformed, contained fewer than 3 sections"),null;try{const s=gy(n);return s?JSON.parse(s):(Pa("Failed to decode base64 JWT payload"),null)}catch(s){return Pa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function um(t){const e=$h(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wn&&oP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class aP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=so(this.lastLoginAt),this.creationTime=so(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await wo(t,Ly(n,{idToken:r}));me(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Dy(i.providerUserInfo):[],a=cP(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new xu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function lP(t){const e=ot(t);await nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Dy(t){return t.map(e=>{var{providerId:n}=e,r=Vh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function uP(t,e){const n=await Ny(t,{},async()=>{const r=Uo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Oy(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ky.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hP(t,e){return Jr(t,"POST","/v2/accounts:revokeToken",Xr(t,e))}/**
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
 */class ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):um(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){me(e.length!==0,"internal-error");const n=um(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await uP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ei;return r&&(me(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(me(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(me(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ei,this.toJSON())}_performRefresh(){return nr("not implemented")}}/**
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
 */function Er(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Vh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await wo(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iP(this,e)}reload(){return lP(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await nl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nn(this.auth.app))return Promise.reject(ar(this.auth));const e=await this.getIdToken();return await wo(this,sP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,L=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,F=(u=n.createdAt)!==null&&u!==void 0?u:void 0,H=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:P,emailVerified:C,isAnonymous:j,providerData:U,stsTokenManager:I}=n;me(P&&I,e,"internal-error");const _=ei.fromJSON(this.name,I);me(typeof P=="string",e,"internal-error"),Er(f,e.name),Er(m,e.name),me(typeof C=="boolean",e,"internal-error"),me(typeof j=="boolean",e,"internal-error"),Er(g,e.name),Er(R,e.name),Er(L,e.name),Er(k,e.name),Er(F,e.name),Er(H,e.name);const y=new rr({uid:P,auth:e,email:m,emailVerified:C,displayName:f,isAnonymous:j,photoURL:R,phoneNumber:g,tenantId:L,stsTokenManager:_,createdAt:F,lastLoginAt:H});return U&&Array.isArray(U)&&(y.providerData=U.map(S=>Object.assign({},S))),k&&(y._redirectEventId=k),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new ei;s.updateFromServerResponse(n);const i=new rr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await nl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];me(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Dy(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new ei;a.updateFromIdToken(r);const c=new rr({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new xu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const hm=new Map;function sr(t){ur(t instanceof Function,"Expected a class definition");let e=hm.get(t);return e?(ur(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hm.set(t,e),e)}/**
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
 */class xy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xy.type="NONE";const dm=xy;/**
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
 */function Ca(t,e,n){return`firebase:${t}:${e}:${n}`}class ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ca(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ca("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ti(sr(dm),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||sr(dm);const o=Ca(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const f=rr._fromJSON(e,d);u!==i&&(a=f),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ti(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ti(i,e,r))}}/**
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
 */function fm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(My(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(By(e))return"Blackberry";if(jy(e))return"Webos";if(Vy(e))return"Safari";if((e.includes("chrome/")||Fy(e))&&!e.includes("edge/"))return"Chrome";if($y(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function My(t=Wt()){return/firefox\//i.test(t)}function Vy(t=Wt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fy(t=Wt()){return/crios\//i.test(t)}function Uy(t=Wt()){return/iemobile/i.test(t)}function $y(t=Wt()){return/android/i.test(t)}function By(t=Wt()){return/blackberry/i.test(t)}function jy(t=Wt()){return/webos/i.test(t)}function Bh(t=Wt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dP(t=Wt()){var e;return Bh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fP(){return CR()&&document.documentMode===10}function Hy(t=Wt()){return Bh(t)||$y(t)||jy(t)||By(t)||/windows phone/i.test(t)||Uy(t)}/**
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
 */function Wy(t,e=[]){let n;switch(t){case"Browser":n=fm(Wt());break;case"Worker":n=`${fm(Wt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rs}/${r}`}/**
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
 */class pP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function mP(t,e={}){return Jr(t,"GET","/v2/passwordPolicy",Xr(t,e))}/**
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
 */const gP=6;class _P{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class yP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pm(this),this.idTokenSubscription=new pm(this),this.beforeStateQueue=new pP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Py,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ti.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ly(this,{idToken:e}),r=await rr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Nn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nn(this.app))return Promise.reject(ar(this));const n=e?ot(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nn(this.app)?Promise.reject(ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nn(this.app)?Promise.reject(ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mP(this),n=new _P(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Fo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sr(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[sr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&zS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ss(t){return ot(t)}class pm{constructor(e){this.auth=e,this.observer=null,this.addObserver=VR(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $l={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vP(t){$l=t}function qy(t){return $l.loadJS(t)}function EP(){return $l.recaptchaEnterpriseScript}function TP(){return $l.gapiScript}function IP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class bP{constructor(){this.enterprise=new wP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class wP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const AP="recaptcha-enterprise",Gy="NO_RECAPTCHA";class RP{constructor(e){this.type=AP,this.auth=Ss(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{rP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new nP(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;cm(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Gy)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new bP().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&cm(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=EP();c.length!==0&&(c+=a),qy(c).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function mm(t,e,n,r=!1,s=!1){const i=new RP(t);let o;if(s)o=Gy;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Mu(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await mm(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await mm(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function SP(t,e){const n=Ul(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Za(i,e??{}))return s;An(s,"already-initialized")}return n.initialize({options:e})}function PP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(sr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function CP(t,e,n){const r=Ss(t);me(r._canInitEmulator,r,"emulator-config-failed"),me(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Ky(e),{host:o,port:a}=kP(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),NP()}function Ky(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kP(t){const e=Ky(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:gm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:gm(o)}}}function gm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class jh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nr("not implemented")}_getIdTokenResponse(e){return nr("not implemented")}_linkToIdToken(e,n){return nr("not implemented")}_getReauthenticationResolver(e){return nr("not implemented")}}async function OP(t,e){return Jr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function LP(t,e){return Bo(t,"POST","/v1/accounts:signInWithPassword",Xr(t,e))}/**
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
 */async function DP(t,e){return Bo(t,"POST","/v1/accounts:signInWithEmailLink",Xr(t,e))}async function xP(t,e){return Bo(t,"POST","/v1/accounts:signInWithEmailLink",Xr(t,e))}/**
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
 */class Ao extends jh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ao(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ao(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mu(e,n,"signInWithPassword",LP);case"emailLink":return DP(e,{email:this._email,oobCode:this._password});default:An(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mu(e,r,"signUpPassword",OP);case"emailLink":return xP(e,{idToken:n,email:this._email,oobCode:this._password});default:An(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ni(t,e){return Bo(t,"POST","/v1/accounts:signInWithIdp",Xr(t,e))}/**
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
 */const MP="http://localhost";class Es extends jh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):An("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Vh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Es(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ni(e,n)}buildRequest(){const e={requestUri:MP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Uo(n)}return e}}/**
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
 */function VP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FP(t){const e=Wi(qi(t)).link,n=e?Wi(qi(e)).deep_link_id:null,r=Wi(qi(t)).deep_link_id;return(r?Wi(qi(r)).link:null)||r||n||e||t}class Hh{constructor(e){var n,r,s,i,o,a;const c=Wi(qi(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,f=VP((s=c.mode)!==null&&s!==void 0?s:null);me(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=FP(e);try{return new Hh(n)}catch{return null}}}/**
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
 */class Ei{constructor(){this.providerId=Ei.PROVIDER_ID}static credential(e,n){return Ao._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Hh.parseLink(n);return me(r,"argument-error"),Ao._fromEmailAndCode(e,r.code,r.tenantId)}}Ei.PROVIDER_ID="password";Ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class zy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jo extends zy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ar extends jo{constructor(){super("facebook.com")}static credential(e){return Es._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ar.PROVIDER_ID="facebook.com";/**
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
 */class Rr extends jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Es._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rr.credential(n,r)}catch{return null}}}Rr.GOOGLE_SIGN_IN_METHOD="google.com";Rr.PROVIDER_ID="google.com";/**
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
 */class Sr extends jo{constructor(){super("github.com")}static credential(e){return Es._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sr.credential(e.oauthAccessToken)}catch{return null}}}Sr.GITHUB_SIGN_IN_METHOD="github.com";Sr.PROVIDER_ID="github.com";/**
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
 */class Pr extends jo{constructor(){super("twitter.com")}static credential(e,n){return Es._fromParams({providerId:Pr.PROVIDER_ID,signInMethod:Pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Pr.credentialFromTaggedObject(e)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Pr.credential(n,r)}catch{return null}}}Pr.TWITTER_SIGN_IN_METHOD="twitter.com";Pr.PROVIDER_ID="twitter.com";/**
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
 */async function UP(t,e){return Bo(t,"POST","/v1/accounts:signUp",Xr(t,e))}/**
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
 */class Ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await rr._fromIdTokenResponse(e,r,s),o=_m(r);return new Ts({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=_m(r);return new Ts({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function _m(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class rl extends Wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,rl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new rl(e,n,r,s)}}function Yy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?rl._fromErrorAndOperation(t,i,e,r):i})}async function $P(t,e,n=!1){const r=await wo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ts._forOperation(t,"link",r)}/**
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
 */async function BP(t,e,n=!1){const{auth:r}=t;if(Nn(r.app))return Promise.reject(ar(r));const s="reauthenticate";try{const i=await wo(t,Yy(r,s,e,t),n);me(i.idToken,r,"internal-error");const o=$h(i.idToken);me(o,r,"internal-error");const{sub:a}=o;return me(t.uid===a,r,"user-mismatch"),Ts._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&An(r,"user-mismatch"),i}}/**
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
 */async function Qy(t,e,n=!1){if(Nn(t.app))return Promise.reject(ar(t));const r="signIn",s=await Yy(t,r,e),i=await Ts._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function jP(t,e){return Qy(Ss(t),e)}/**
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
 */async function Xy(t){const e=Ss(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function HP(t,e,n){if(Nn(t.app))return Promise.reject(ar(t));const r=Ss(t),o=await Mu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",UP).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Xy(t),c}),a=await Ts._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function WP(t,e,n){return Nn(t.app)?Promise.reject(ar(t)):jP(ot(t),Ei.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Xy(t),r})}function qP(t,e,n,r){return ot(t).onIdTokenChanged(e,n,r)}function GP(t,e,n){return ot(t).beforeAuthStateChanged(e,n)}function KP(t,e,n,r){return ot(t).onAuthStateChanged(e,n,r)}function zP(t){return ot(t).signOut()}const sl="__sak";/**
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
 */class Jy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(sl,"1"),this.storage.removeItem(sl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const YP=1e3,QP=10;class Zy extends Jy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);fP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,QP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zy.type="LOCAL";const XP=Zy;/**
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
 */class ev extends Jy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ev.type="SESSION";const tv=ev;/**
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
 */function JP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Bl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Bl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await JP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bl.receivers=[];/**
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
 */function Wh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ZP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Wh("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Fn(){return window}function eC(t){Fn().location.href=t}/**
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
 */function nv(){return typeof Fn().WorkerGlobalScope<"u"&&typeof Fn().importScripts=="function"}async function tC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rC(){return nv()?self:null}/**
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
 */const rv="firebaseLocalStorageDb",sC=1,il="firebaseLocalStorage",sv="fbase_key";class Ho{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jl(t,e){return t.transaction([il],e?"readwrite":"readonly").objectStore(il)}function iC(){const t=indexedDB.deleteDatabase(rv);return new Ho(t).toPromise()}function Vu(){const t=indexedDB.open(rv,sC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(il,{keyPath:sv})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(il)?e(r):(r.close(),await iC(),e(await Vu()))})})}async function ym(t,e,n){const r=jl(t,!0).put({[sv]:e,value:n});return new Ho(r).toPromise()}async function oC(t,e){const n=jl(t,!1).get(e),r=await new Ho(n).toPromise();return r===void 0?null:r.value}function vm(t,e){const n=jl(t,!0).delete(e);return new Ho(n).toPromise()}const aC=800,lC=3;class iv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>lC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bl._getInstance(rC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tC(),!this.activeServiceWorker)return;this.sender=new ZP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vu();return await ym(e,sl,"1"),await vm(e,sl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ym(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=jl(s,!1).getAll();return new Ho(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iv.type="LOCAL";const cC=iv;new $o(3e4,6e4);/**
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
 */function uC(t,e){return e?sr(e):(me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qh extends jh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hC(t){return Qy(t.auth,new qh(t),t.bypassAuthState)}function dC(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),BP(n,new qh(t),t.bypassAuthState)}async function fC(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),$P(n,new qh(t),t.bypassAuthState)}/**
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
 */class ov{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hC;case"linkViaPopup":case"linkViaRedirect":return fC;case"reauthViaPopup":case"reauthViaRedirect":return dC;default:An(this.auth,"internal-error")}}resolve(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ur(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pC=new $o(2e3,1e4);class zs extends ov{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,zs.currentPopupAction&&zs.currentPopupAction.cancel(),zs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){ur(this.filter.length===1,"Popup operations only handle one event");const e=Wh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pC.get())};e()}}zs.currentPopupAction=null;/**
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
 */const mC="pendingRedirect",ka=new Map;class gC extends ov{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ka.get(this.auth._key());if(!e){try{const r=await _C(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ka.set(this.auth._key(),e)}return this.bypassAuthState||ka.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _C(t,e){const n=EC(e),r=vC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function yC(t,e){ka.set(t._key(),e)}function vC(t){return sr(t._redirectPersistence)}function EC(t){return Ca(mC,t.config.apiKey,t.name)}async function TC(t,e,n=!1){if(Nn(t.app))return Promise.reject(ar(t));const r=Ss(t),s=uC(r,e),o=await new gC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const IC=10*60*1e3;class bC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!av(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Vn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Em(e))}saveEventToCache(e){this.cachedEventUids.add(Em(e)),this.lastProcessedEventTime=Date.now()}}function Em(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function av({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return av(t);default:return!1}}/**
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
 */async function AC(t,e={}){return Jr(t,"GET","/v1/projects",e)}/**
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
 */const RC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SC=/^https?/;async function PC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AC(t);for(const n of e)try{if(CC(n))return}catch{}An(t,"unauthorized-domain")}function CC(t){const e=Du(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!SC.test(n))return!1;if(RC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const kC=new $o(3e4,6e4);function Tm(){const t=Fn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NC(t){return new Promise((e,n)=>{var r,s,i;function o(){Tm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tm(),n(Vn(t,"network-request-failed"))},timeout:kC.get()})}if(!((s=(r=Fn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Fn().gapi)===null||i===void 0)&&i.load)o();else{const a=IP("iframefcb");return Fn()[a]=()=>{gapi.load?o():n(Vn(t,"network-request-failed"))},qy(`${TP()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Na=null,e})}let Na=null;function OC(t){return Na=Na||NC(t),Na}/**
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
 */const LC=new $o(5e3,15e3),DC="__/auth/iframe",xC="emulator/auth/iframe",MC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FC(t){const e=t.config;me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Uh(e,xC):`https://${t.config.authDomain}/${DC}`,r={apiKey:e.apiKey,appName:t.name,v:Rs},s=VC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Uo(r).slice(1)}`}async function UC(t){const e=await OC(t),n=Fn().gapi;return me(n,t,"internal-error"),e.open({where:document.body,url:FC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Vn(t,"network-request-failed"),a=Fn().setTimeout(()=>{i(o)},LC.get());function c(){Fn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const $C={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BC=500,jC=600,HC="_blank",WC="http://localhost";class Im{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qC(t,e,n,r=BC,s=jC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},$C),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Wt().toLowerCase();n&&(a=Fy(u)?HC:n),My(u)&&(e=e||WC,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[g,R])=>`${m}${g}=${R},`,"");if(dP(u)&&a!=="_self")return GC(e||"",a),new Im(null);const f=window.open(e||"",a,d);me(f,t,"popup-blocked");try{f.focus()}catch{}return new Im(f)}function GC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const KC="__/auth/handler",zC="emulator/auth/handler",YC=encodeURIComponent("fac");async function bm(t,e,n,r,s,i){me(t.config.authDomain,t,"auth-domain-config-required"),me(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Rs,eventId:s};if(e instanceof zy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",MR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof jo){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const c=await t._getAppCheckToken(),u=c?`#${YC}=${encodeURIComponent(c)}`:"";return`${QC(t)}?${Uo(a).slice(1)}${u}`}function QC({config:t}){return t.emulator?Uh(t,zC):`https://${t.authDomain}/${KC}`}/**
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
 */const Qc="webStorageSupport";class XC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tv,this._completeRedirectFn=TC,this._overrideRedirectResult=yC}async _openPopup(e,n,r,s){var i;ur((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await bm(e,n,r,Du(),s);return qC(e,o,Wh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await bm(e,n,r,Du(),s);return eC(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ur(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UC(e),r=new bC(e);return n.register("authEvent",s=>(me(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qc,{type:Qc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Qc];o!==void 0&&n(!!o),An(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hy()||Vy()||Bh()}}const JC=XC;var wm="@firebase/auth",Am="1.8.1";/**
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
 */class ZC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ek(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tk(t){vs(new Ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;me(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wy(t)},u=new yP(r,s,i,c);return PP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vs(new Ur("auth-internal",e=>{const n=Ss(e.getProvider("auth").getImmediate());return(r=>new ZC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mn(wm,Am,ek(t)),Mn(wm,Am,"esm2017")}/**
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
 */const nk=5*60,rk=Ey("authIdTokenMaxAge")||nk;let Rm=null;const sk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rk)return;const s=n==null?void 0:n.token;Rm!==s&&(Rm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ik(t=Mh()){const e=Ul(t,"auth");if(e.isInitialized())return e.getImmediate();const n=SP(t,{popupRedirectResolver:JC,persistence:[cC,XP,tv]}),r=Ey("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=sk(i.toString());GP(n,o,()=>o(n.currentUser)),qP(n,a=>o(a))}}const s=_y("auth");return s&&CP(n,`http://${s}`),n}function ok(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}vP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Vn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ok().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tk("Browser");var Sm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gs,lv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function y(){}y.prototype=_.prototype,I.D=_.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(S,O,N){for(var A=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)A[rt-2]=arguments[rt];return _.prototype[O].apply(S,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,y){y||(y=0);var S=Array(16);if(typeof _=="string")for(var O=0;16>O;++O)S[O]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(O=0;16>O;++O)S[O]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=I.g[0],y=I.g[1],O=I.g[2];var N=I.g[3],A=_+(N^y&(O^N))+S[0]+3614090360&4294967295;_=y+(A<<7&4294967295|A>>>25),A=N+(O^_&(y^O))+S[1]+3905402710&4294967295,N=_+(A<<12&4294967295|A>>>20),A=O+(y^N&(_^y))+S[2]+606105819&4294967295,O=N+(A<<17&4294967295|A>>>15),A=y+(_^O&(N^_))+S[3]+3250441966&4294967295,y=O+(A<<22&4294967295|A>>>10),A=_+(N^y&(O^N))+S[4]+4118548399&4294967295,_=y+(A<<7&4294967295|A>>>25),A=N+(O^_&(y^O))+S[5]+1200080426&4294967295,N=_+(A<<12&4294967295|A>>>20),A=O+(y^N&(_^y))+S[6]+2821735955&4294967295,O=N+(A<<17&4294967295|A>>>15),A=y+(_^O&(N^_))+S[7]+4249261313&4294967295,y=O+(A<<22&4294967295|A>>>10),A=_+(N^y&(O^N))+S[8]+1770035416&4294967295,_=y+(A<<7&4294967295|A>>>25),A=N+(O^_&(y^O))+S[9]+2336552879&4294967295,N=_+(A<<12&4294967295|A>>>20),A=O+(y^N&(_^y))+S[10]+4294925233&4294967295,O=N+(A<<17&4294967295|A>>>15),A=y+(_^O&(N^_))+S[11]+2304563134&4294967295,y=O+(A<<22&4294967295|A>>>10),A=_+(N^y&(O^N))+S[12]+1804603682&4294967295,_=y+(A<<7&4294967295|A>>>25),A=N+(O^_&(y^O))+S[13]+4254626195&4294967295,N=_+(A<<12&4294967295|A>>>20),A=O+(y^N&(_^y))+S[14]+2792965006&4294967295,O=N+(A<<17&4294967295|A>>>15),A=y+(_^O&(N^_))+S[15]+1236535329&4294967295,y=O+(A<<22&4294967295|A>>>10),A=_+(O^N&(y^O))+S[1]+4129170786&4294967295,_=y+(A<<5&4294967295|A>>>27),A=N+(y^O&(_^y))+S[6]+3225465664&4294967295,N=_+(A<<9&4294967295|A>>>23),A=O+(_^y&(N^_))+S[11]+643717713&4294967295,O=N+(A<<14&4294967295|A>>>18),A=y+(N^_&(O^N))+S[0]+3921069994&4294967295,y=O+(A<<20&4294967295|A>>>12),A=_+(O^N&(y^O))+S[5]+3593408605&4294967295,_=y+(A<<5&4294967295|A>>>27),A=N+(y^O&(_^y))+S[10]+38016083&4294967295,N=_+(A<<9&4294967295|A>>>23),A=O+(_^y&(N^_))+S[15]+3634488961&4294967295,O=N+(A<<14&4294967295|A>>>18),A=y+(N^_&(O^N))+S[4]+3889429448&4294967295,y=O+(A<<20&4294967295|A>>>12),A=_+(O^N&(y^O))+S[9]+568446438&4294967295,_=y+(A<<5&4294967295|A>>>27),A=N+(y^O&(_^y))+S[14]+3275163606&4294967295,N=_+(A<<9&4294967295|A>>>23),A=O+(_^y&(N^_))+S[3]+4107603335&4294967295,O=N+(A<<14&4294967295|A>>>18),A=y+(N^_&(O^N))+S[8]+1163531501&4294967295,y=O+(A<<20&4294967295|A>>>12),A=_+(O^N&(y^O))+S[13]+2850285829&4294967295,_=y+(A<<5&4294967295|A>>>27),A=N+(y^O&(_^y))+S[2]+4243563512&4294967295,N=_+(A<<9&4294967295|A>>>23),A=O+(_^y&(N^_))+S[7]+1735328473&4294967295,O=N+(A<<14&4294967295|A>>>18),A=y+(N^_&(O^N))+S[12]+2368359562&4294967295,y=O+(A<<20&4294967295|A>>>12),A=_+(y^O^N)+S[5]+4294588738&4294967295,_=y+(A<<4&4294967295|A>>>28),A=N+(_^y^O)+S[8]+2272392833&4294967295,N=_+(A<<11&4294967295|A>>>21),A=O+(N^_^y)+S[11]+1839030562&4294967295,O=N+(A<<16&4294967295|A>>>16),A=y+(O^N^_)+S[14]+4259657740&4294967295,y=O+(A<<23&4294967295|A>>>9),A=_+(y^O^N)+S[1]+2763975236&4294967295,_=y+(A<<4&4294967295|A>>>28),A=N+(_^y^O)+S[4]+1272893353&4294967295,N=_+(A<<11&4294967295|A>>>21),A=O+(N^_^y)+S[7]+4139469664&4294967295,O=N+(A<<16&4294967295|A>>>16),A=y+(O^N^_)+S[10]+3200236656&4294967295,y=O+(A<<23&4294967295|A>>>9),A=_+(y^O^N)+S[13]+681279174&4294967295,_=y+(A<<4&4294967295|A>>>28),A=N+(_^y^O)+S[0]+3936430074&4294967295,N=_+(A<<11&4294967295|A>>>21),A=O+(N^_^y)+S[3]+3572445317&4294967295,O=N+(A<<16&4294967295|A>>>16),A=y+(O^N^_)+S[6]+76029189&4294967295,y=O+(A<<23&4294967295|A>>>9),A=_+(y^O^N)+S[9]+3654602809&4294967295,_=y+(A<<4&4294967295|A>>>28),A=N+(_^y^O)+S[12]+3873151461&4294967295,N=_+(A<<11&4294967295|A>>>21),A=O+(N^_^y)+S[15]+530742520&4294967295,O=N+(A<<16&4294967295|A>>>16),A=y+(O^N^_)+S[2]+3299628645&4294967295,y=O+(A<<23&4294967295|A>>>9),A=_+(O^(y|~N))+S[0]+4096336452&4294967295,_=y+(A<<6&4294967295|A>>>26),A=N+(y^(_|~O))+S[7]+1126891415&4294967295,N=_+(A<<10&4294967295|A>>>22),A=O+(_^(N|~y))+S[14]+2878612391&4294967295,O=N+(A<<15&4294967295|A>>>17),A=y+(N^(O|~_))+S[5]+4237533241&4294967295,y=O+(A<<21&4294967295|A>>>11),A=_+(O^(y|~N))+S[12]+1700485571&4294967295,_=y+(A<<6&4294967295|A>>>26),A=N+(y^(_|~O))+S[3]+2399980690&4294967295,N=_+(A<<10&4294967295|A>>>22),A=O+(_^(N|~y))+S[10]+4293915773&4294967295,O=N+(A<<15&4294967295|A>>>17),A=y+(N^(O|~_))+S[1]+2240044497&4294967295,y=O+(A<<21&4294967295|A>>>11),A=_+(O^(y|~N))+S[8]+1873313359&4294967295,_=y+(A<<6&4294967295|A>>>26),A=N+(y^(_|~O))+S[15]+4264355552&4294967295,N=_+(A<<10&4294967295|A>>>22),A=O+(_^(N|~y))+S[6]+2734768916&4294967295,O=N+(A<<15&4294967295|A>>>17),A=y+(N^(O|~_))+S[13]+1309151649&4294967295,y=O+(A<<21&4294967295|A>>>11),A=_+(O^(y|~N))+S[4]+4149444226&4294967295,_=y+(A<<6&4294967295|A>>>26),A=N+(y^(_|~O))+S[11]+3174756917&4294967295,N=_+(A<<10&4294967295|A>>>22),A=O+(_^(N|~y))+S[2]+718787259&4294967295,O=N+(A<<15&4294967295|A>>>17),A=y+(N^(O|~_))+S[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(O+(A<<21&4294967295|A>>>11))&4294967295,I.g[2]=I.g[2]+O&4294967295,I.g[3]=I.g[3]+N&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var y=_-this.blockSize,S=this.B,O=this.h,N=0;N<_;){if(O==0)for(;N<=y;)s(this,I,N),N+=this.blockSize;if(typeof I=="string"){for(;N<_;)if(S[O++]=I.charCodeAt(N++),O==this.blockSize){s(this,S),O=0;break}}else for(;N<_;)if(S[O++]=I[N++],O==this.blockSize){s(this,S),O=0;break}}this.h=O,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var y=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=y&255,y/=256;for(this.u(I),I=Array(16),_=y=0;4>_;++_)for(var S=0;32>S;S+=8)I[y++]=this.g[_]>>>S&255;return I};function i(I,_){var y=a;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=_(I)}function o(I,_){this.h=_;for(var y=[],S=!0,O=I.length-1;0<=O;O--){var N=I[O]|0;S&&N==_||(y[O]=N,S=!1)}this.g=y}var a={};function c(I){return-128<=I&&128>I?i(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return k(u(-I));for(var _=[],y=1,S=0;I>=y;S++)_[S]=I/y|0,y*=4294967296;return new o(_,0)}function d(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return k(d(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(_,8)),S=f,O=0;O<I.length;O+=8){var N=Math.min(8,I.length-O),A=parseInt(I.substring(O,O+N),_);8>N?(N=u(Math.pow(_,N)),S=S.j(N).add(u(A))):(S=S.j(y),S=S.add(u(A)))}return S}var f=c(0),m=c(1),g=c(16777216);t=o.prototype,t.m=function(){if(L(this))return-k(this).m();for(var I=0,_=1,y=0;y<this.g.length;y++){var S=this.i(y);I+=(0<=S?S:4294967296+S)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(L(this))return"-"+k(this).toString(I);for(var _=u(Math.pow(I,6)),y=this,S="";;){var O=C(y,_).g;y=F(y,O.j(_));var N=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=O,R(y))return N+S;for(;6>N.length;)N="0"+N;S=N+S}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function L(I){return I.h==-1}t.l=function(I){return I=F(this,I),L(I)?-1:R(I)?0:1};function k(I){for(var _=I.g.length,y=[],S=0;S<_;S++)y[S]=~I.g[S];return new o(y,~I.h).add(m)}t.abs=function(){return L(this)?k(this):this},t.add=function(I){for(var _=Math.max(this.g.length,I.g.length),y=[],S=0,O=0;O<=_;O++){var N=S+(this.i(O)&65535)+(I.i(O)&65535),A=(N>>>16)+(this.i(O)>>>16)+(I.i(O)>>>16);S=A>>>16,N&=65535,A&=65535,y[O]=A<<16|N}return new o(y,y[y.length-1]&-2147483648?-1:0)};function F(I,_){return I.add(k(_))}t.j=function(I){if(R(this)||R(I))return f;if(L(this))return L(I)?k(this).j(k(I)):k(k(this).j(I));if(L(I))return k(this.j(k(I)));if(0>this.l(g)&&0>I.l(g))return u(this.m()*I.m());for(var _=this.g.length+I.g.length,y=[],S=0;S<2*_;S++)y[S]=0;for(S=0;S<this.g.length;S++)for(var O=0;O<I.g.length;O++){var N=this.i(S)>>>16,A=this.i(S)&65535,rt=I.i(O)>>>16,ft=I.i(O)&65535;y[2*S+2*O]+=A*ft,H(y,2*S+2*O),y[2*S+2*O+1]+=N*ft,H(y,2*S+2*O+1),y[2*S+2*O+1]+=A*rt,H(y,2*S+2*O+1),y[2*S+2*O+2]+=N*rt,H(y,2*S+2*O+2)}for(S=0;S<_;S++)y[S]=y[2*S+1]<<16|y[2*S];for(S=_;S<2*_;S++)y[S]=0;return new o(y,0)};function H(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function P(I,_){this.g=I,this.h=_}function C(I,_){if(R(_))throw Error("division by zero");if(R(I))return new P(f,f);if(L(I))return _=C(k(I),_),new P(k(_.g),k(_.h));if(L(_))return _=C(I,k(_)),new P(k(_.g),_.h);if(30<I.g.length){if(L(I)||L(_))throw Error("slowDivide_ only works with positive integers.");for(var y=m,S=_;0>=S.l(I);)y=j(y),S=j(S);var O=U(y,1),N=U(S,1);for(S=U(S,2),y=U(y,2);!R(S);){var A=N.add(S);0>=A.l(I)&&(O=O.add(y),N=A),S=U(S,1),y=U(y,1)}return _=F(I,O.j(_)),new P(O,_)}for(O=f;0<=I.l(_);){for(y=Math.max(1,Math.floor(I.m()/_.m())),S=Math.ceil(Math.log(y)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),N=u(y),A=N.j(_);L(A)||0<A.l(I);)y-=S,N=u(y),A=N.j(_);R(N)&&(N=m),O=O.add(N),I=F(I,A)}return new P(O,I)}t.A=function(I){return C(this,I).h},t.and=function(I){for(var _=Math.max(this.g.length,I.g.length),y=[],S=0;S<_;S++)y[S]=this.i(S)&I.i(S);return new o(y,this.h&I.h)},t.or=function(I){for(var _=Math.max(this.g.length,I.g.length),y=[],S=0;S<_;S++)y[S]=this.i(S)|I.i(S);return new o(y,this.h|I.h)},t.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),y=[],S=0;S<_;S++)y[S]=this.i(S)^I.i(S);return new o(y,this.h^I.h)};function j(I){for(var _=I.g.length+1,y=[],S=0;S<_;S++)y[S]=I.i(S)<<1|I.i(S-1)>>>31;return new o(y,I.h)}function U(I,_){var y=_>>5;_%=32;for(var S=I.g.length-y,O=[],N=0;N<S;N++)O[N]=0<_?I.i(N+y)>>>_|I.i(N+y+1)<<32-_:I.i(N+y);return new o(O,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,lv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,gs=o}).apply(typeof Sm<"u"?Sm:typeof self<"u"?self:typeof window<"u"?window:{});var ga=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cv,Gi,uv,Oa,Fu,hv,dv,fv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,p){return l==Array.prototype||l==Object.prototype||(l[h]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ga=="object"&&ga];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(l,h){if(h)e:{var p=r;l=l.split(".");for(var v=0;v<l.length-1;v++){var V=l[v];if(!(V in p))break e;p=p[V]}l=l[l.length-1],v=p[l],h=h(v),h!=v&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}function i(l,h){l instanceof String&&(l+="");var p=0,v=!1,V={next:function(){if(!v&&p<l.length){var W=p++;return{value:h(W,l[W]),done:!1}}return v=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}s("Array.prototype.values",function(l){return l||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function u(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,p){return l.call.apply(l.bind,arguments)}function f(l,h,p){if(!l)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,v),l.apply(h,V)}}return function(){return l.apply(h,arguments)}}function m(l,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function g(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),l.apply(this,v)}}function R(l,h){function p(){}p.prototype=h.prototype,l.aa=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(v,V,W){for(var ee=Array(arguments.length-2),He=2;He<arguments.length;He++)ee[He-2]=arguments[He];return h.prototype[V].apply(v,ee)}}function L(l){const h=l.length;if(0<h){const p=Array(h);for(let v=0;v<h;v++)p[v]=l[v];return p}return[]}function k(l,h){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(c(v)){const V=l.length||0,W=v.length||0;l.length=V+W;for(let ee=0;ee<W;ee++)l[V+ee]=v[ee]}else l.push(v)}}class F{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function H(l){return/^[\s\xa0]*$/.test(l)}function P(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function C(l){return C[" "](l),l}C[" "]=function(){};var j=P().indexOf("Gecko")!=-1&&!(P().toLowerCase().indexOf("webkit")!=-1&&P().indexOf("Edge")==-1)&&!(P().indexOf("Trident")!=-1||P().indexOf("MSIE")!=-1)&&P().indexOf("Edge")==-1;function U(l,h,p){for(const v in l)h.call(p,l[v],v,l)}function I(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function _(l){const h={};for(const p in l)h[p]=l[p];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(l,h){let p,v;for(let V=1;V<arguments.length;V++){v=arguments[V];for(p in v)l[p]=v[p];for(let W=0;W<y.length;W++)p=y[W],Object.prototype.hasOwnProperty.call(v,p)&&(l[p]=v[p])}}function O(l){var h=1;l=l.split(":");const p=[];for(;0<h&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function N(l){a.setTimeout(()=>{throw l},0)}function A(){var l=_t;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class rt{constructor(){this.h=this.g=null}add(h,p){const v=ft.get();v.set(h,p),this.h?this.h.next=v:this.g=v,this.h=v}}var ft=new F(()=>new Ae,l=>l.reset());class Ae{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let he,Te=!1,_t=new rt,Ct=()=>{const l=a.Promise.resolve(void 0);he=()=>{l.then(et)}};var et=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(p){N(p)}var h=ft;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}Te=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Be(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var qt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,h),a.removeEventListener("test",p,h)}catch{}return l}();function xt(l,h){if(Be.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,v=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(j){e:{try{C(h.nodeName);var V=!0;break e}catch{}V=!1}V||(h=null)}}else p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement);this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:pt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&xt.aa.h.call(this)}}R(xt,Be);var pt={2:"touch",3:"pen",4:"mouse"};xt.prototype.h=function(){xt.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var G="closure_listenable_"+(1e6*Math.random()|0),re=0;function te(l,h,p,v,V){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!v,this.ha=V,this.key=++re,this.da=this.fa=!1}function oe(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Ie(l){this.src=l,this.g={},this.h=0}Ie.prototype.add=function(l,h,p,v,V){var W=l.toString();l=this.g[W],l||(l=this.g[W]=[],this.h++);var ee=w(l,h,v,V);return-1<ee?(h=l[ee],p||(h.fa=!1)):(h=new te(h,this.src,W,!!v,V),h.fa=p,l.push(h)),h};function Ne(l,h){var p=h.type;if(p in l.g){var v=l.g[p],V=Array.prototype.indexOf.call(v,h,void 0),W;(W=0<=V)&&Array.prototype.splice.call(v,V,1),W&&(oe(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function w(l,h,p,v){for(var V=0;V<l.length;++V){var W=l[V];if(!W.da&&W.listener==h&&W.capture==!!p&&W.ha==v)return V}return-1}var E="closure_lm_"+(1e6*Math.random()|0),M={};function Y(l,h,p,v,V){if(Array.isArray(h)){for(var W=0;W<h.length;W++)Y(l,h[W],p,v,V);return null}return p=Q(p),l&&l[G]?l.K(h,p,u(v)?!!v.capture:!!v,V):q(l,h,p,!1,v,V)}function q(l,h,p,v,V,W){if(!h)throw Error("Invalid event type");var ee=u(V)?!!V.capture:!!V,He=z(l);if(He||(l[E]=He=new Ie(l)),p=He.add(h,p,v,ee,W),p.proxy)return p;if(v=X(),p.proxy=v,v.src=l,v.listener=p,l.addEventListener)qt||(V=ee),V===void 0&&(V=!1),l.addEventListener(h.toString(),v,V);else if(l.attachEvent)l.attachEvent(b(h.toString()),v);else if(l.addListener&&l.removeListener)l.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function X(){function l(p){return h.call(l.src,l.listener,p)}const h=D;return l}function ne(l,h,p,v,V){if(Array.isArray(h))for(var W=0;W<h.length;W++)ne(l,h[W],p,v,V);else v=u(v)?!!v.capture:!!v,p=Q(p),l&&l[G]?(l=l.i,h=String(h).toString(),h in l.g&&(W=l.g[h],p=w(W,p,v,V),-1<p&&(oe(W[p]),Array.prototype.splice.call(W,p,1),W.length==0&&(delete l.g[h],l.h--)))):l&&(l=z(l))&&(h=l.g[h.toString()],l=-1,h&&(l=w(h,p,v,V)),(p=-1<l?h[l]:null)&&T(p))}function T(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[G])Ne(h.i,l);else{var p=l.type,v=l.proxy;h.removeEventListener?h.removeEventListener(p,v,l.capture):h.detachEvent?h.detachEvent(b(p),v):h.addListener&&h.removeListener&&h.removeListener(v),(p=z(h))?(Ne(p,l),p.h==0&&(p.src=null,h[E]=null)):oe(l)}}}function b(l){return l in M?M[l]:M[l]="on"+l}function D(l,h){if(l.da)l=!0;else{h=new xt(h,this);var p=l.listener,v=l.ha||l.src;l.fa&&T(l),l=p.call(v,h)}return l}function z(l){return l=l[E],l instanceof Ie?l:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function Q(l){return typeof l=="function"?l:(l[Z]||(l[Z]=function(h){return l.handleEvent(h)}),l[Z])}function x(){Me.call(this),this.i=new Ie(this),this.M=this,this.F=null}R(x,Me),x.prototype[G]=!0,x.prototype.removeEventListener=function(l,h,p,v){ne(this,l,h,p,v)};function B(l,h){var p,v=l.F;if(v)for(p=[];v;v=v.F)p.push(v);if(l=l.M,v=h.type||h,typeof h=="string")h=new Be(h,l);else if(h instanceof Be)h.target=h.target||l;else{var V=h;h=new Be(v,l),S(h,V)}if(V=!0,p)for(var W=p.length-1;0<=W;W--){var ee=h.g=p[W];V=le(ee,v,!0,h)&&V}if(ee=h.g=l,V=le(ee,v,!0,h)&&V,V=le(ee,v,!1,h)&&V,p)for(W=0;W<p.length;W++)ee=h.g=p[W],V=le(ee,v,!1,h)&&V}x.prototype.N=function(){if(x.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var p=l.g[h],v=0;v<p.length;v++)oe(p[v]);delete l.g[h],l.h--}}this.F=null},x.prototype.K=function(l,h,p,v){return this.i.add(String(l),h,!1,p,v)},x.prototype.L=function(l,h,p,v){return this.i.add(String(l),h,!0,p,v)};function le(l,h,p,v){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var V=!0,W=0;W<h.length;++W){var ee=h[W];if(ee&&!ee.da&&ee.capture==p){var He=ee.listener,kt=ee.ha||ee.src;ee.fa&&Ne(l.i,ee),V=He.call(kt,v)!==!1&&V}}return V&&!v.defaultPrevented}function ue(l,h,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:a.setTimeout(l,h||0)}function Ye(l){l.g=ue(()=>{l.g=null,l.i&&(l.i=!1,Ye(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class st extends Me{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ye(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(l){Me.call(this),this.h=l,this.g={}}R(tt,Me);var bt=[];function qn(l){U(l.g,function(h,p){this.g.hasOwnProperty(p)&&T(h)},l),l.g={}}tt.prototype.N=function(){tt.aa.N.call(this),qn(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ns=a.JSON.stringify,Gt=a.JSON.parse,hn=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Os(){}Os.prototype.h=null;function kd(l){return l.h||(l.h=l.i())}function Nd(){}var Ri={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function dc(){Be.call(this,"d")}R(dc,Be);function fc(){Be.call(this,"c")}R(fc,Be);var ts={},Od=null;function Yo(){return Od=Od||new x}ts.La="serverreachability";function Ld(l){Be.call(this,ts.La,l)}R(Ld,Be);function Si(l){const h=Yo();B(h,new Ld(h))}ts.STAT_EVENT="statevent";function Dd(l,h){Be.call(this,ts.STAT_EVENT,l),this.stat=h}R(Dd,Be);function Kt(l){const h=Yo();B(h,new Dd(h,l))}ts.Ma="timingevent";function xd(l,h){Be.call(this,ts.Ma,l),this.size=h}R(xd,Be);function Pi(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},h)}function Ci(){this.g=!0}Ci.prototype.xa=function(){this.g=!1};function eT(l,h,p,v,V,W){l.info(function(){if(l.g)if(W)for(var ee="",He=W.split("&"),kt=0;kt<He.length;kt++){var Oe=He[kt].split("=");if(1<Oe.length){var Mt=Oe[0];Oe=Oe[1];var Vt=Mt.split("_");ee=2<=Vt.length&&Vt[1]=="type"?ee+(Mt+"="+Oe+"&"):ee+(Mt+"=redacted&")}}else ee=null;else ee=W;return"XMLHTTP REQ ("+v+") [attempt "+V+"]: "+h+`
`+p+`
`+ee})}function tT(l,h,p,v,V,W,ee){l.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+V+"]: "+h+`
`+p+`
`+W+" "+ee})}function Ls(l,h,p,v){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+rT(l,p)+(v?" "+v:"")})}function nT(l,h){l.info(function(){return"TIMEOUT: "+h})}Ci.prototype.info=function(){};function rT(l,h){if(!l.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var v=p[l];if(!(2>v.length)){var V=v[1];if(Array.isArray(V)&&!(1>V.length)){var W=V[0];if(W!="noop"&&W!="stop"&&W!="close")for(var ee=1;ee<V.length;ee++)V[ee]=""}}}}return Ns(p)}catch{return h}}var Qo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Md={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pc;function Xo(){}R(Xo,Os),Xo.prototype.g=function(){return new XMLHttpRequest},Xo.prototype.i=function(){return{}},pc=new Xo;function mr(l,h,p,v){this.j=l,this.i=h,this.l=p,this.R=v||1,this.U=new tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vd}function Vd(){this.i=null,this.g="",this.h=!1}var Fd={},mc={};function gc(l,h,p){l.L=1,l.v=ta(Gn(h)),l.m=p,l.P=!0,Ud(l,null)}function Ud(l,h){l.F=Date.now(),Jo(l),l.A=Gn(l.v);var p=l.A,v=l.R;Array.isArray(v)||(v=[String(v)]),Zd(p.i,"t",v),l.C=0,p=l.j.J,l.h=new Vd,l.g=yf(l.j,p?h:null,!l.m),0<l.O&&(l.M=new st(m(l.Y,l,l.g),l.O)),h=l.U,p=l.g,v=l.ca;var V="readystatechange";Array.isArray(V)||(V&&(bt[0]=V.toString()),V=bt);for(var W=0;W<V.length;W++){var ee=Y(p,V[W],v||h.handleEvent,!1,h.h||h);if(!ee)break;h.g[ee.key]=ee}h=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Si(),eT(l.i,l.u,l.A,l.l,l.R,l.m)}mr.prototype.ca=function(l){l=l.target;const h=this.M;h&&Kn(l)==3?h.j():this.Y(l)},mr.prototype.Y=function(l){try{if(l==this.g)e:{const Vt=Kn(this.g);var h=this.g.Ba();const Ms=this.g.Z();if(!(3>Vt)&&(Vt!=3||this.g&&(this.h.h||this.g.oa()||af(this.g)))){this.J||Vt!=4||h==7||(h==8||0>=Ms?Si(3):Si(2)),_c(this);var p=this.g.Z();this.X=p;t:if($d(this)){var v=af(this.g);l="";var V=v.length,W=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ns(this),ki(this);var ee="";break t}this.h.i=new a.TextDecoder}for(h=0;h<V;h++)this.h.h=!0,l+=this.h.i.decode(v[h],{stream:!(W&&h==V-1)});v.length=0,this.h.g+=l,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=p==200,tT(this.i,this.u,this.A,this.l,this.R,Vt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var He,kt=this.g;if((He=kt.g?kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(He)){var Oe=He;break t}}Oe=null}if(p=Oe)Ls(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yc(this,p);else{this.o=!1,this.s=3,Kt(12),ns(this),ki(this);break e}}if(this.P){p=!0;let yn;for(;!this.J&&this.C<ee.length;)if(yn=sT(this,ee),yn==mc){Vt==4&&(this.s=4,Kt(14),p=!1),Ls(this.i,this.l,null,"[Incomplete Response]");break}else if(yn==Fd){this.s=4,Kt(15),Ls(this.i,this.l,ee,"[Invalid Chunk]"),p=!1;break}else Ls(this.i,this.l,yn,null),yc(this,yn);if($d(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Vt!=4||ee.length!=0||this.h.h||(this.s=1,Kt(16),p=!1),this.o=this.o&&p,!p)Ls(this.i,this.l,ee,"[Invalid Chunked Response]"),ns(this),ki(this);else if(0<ee.length&&!this.W){this.W=!0;var Mt=this.j;Mt.g==this&&Mt.ba&&!Mt.M&&(Mt.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),wc(Mt),Mt.M=!0,Kt(11))}}else Ls(this.i,this.l,ee,null),yc(this,ee);Vt==4&&ns(this),this.o&&!this.J&&(Vt==4?pf(this.j,this):(this.o=!1,Jo(this)))}else TT(this.g),p==400&&0<ee.indexOf("Unknown SID")?(this.s=3,Kt(12)):(this.s=0,Kt(13)),ns(this),ki(this)}}}catch{}finally{}};function $d(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function sT(l,h){var p=l.C,v=h.indexOf(`
`,p);return v==-1?mc:(p=Number(h.substring(p,v)),isNaN(p)?Fd:(v+=1,v+p>h.length?mc:(h=h.slice(v,v+p),l.C=v+p,h)))}mr.prototype.cancel=function(){this.J=!0,ns(this)};function Jo(l){l.S=Date.now()+l.I,Bd(l,l.I)}function Bd(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Pi(m(l.ba,l),h)}function _c(l){l.B&&(a.clearTimeout(l.B),l.B=null)}mr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(nT(this.i,this.A),this.L!=2&&(Si(),Kt(17)),ns(this),this.s=2,ki(this)):Bd(this,this.S-l)};function ki(l){l.j.G==0||l.J||pf(l.j,l)}function ns(l){_c(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,qn(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function yc(l,h){try{var p=l.j;if(p.G!=0&&(p.g==l||vc(p.h,l))){if(!l.K&&vc(p.h,l)&&p.G==3){try{var v=p.Da.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var V=v;if(V[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)aa(p),ia(p);else break e;bc(p),Kt(18)}}else p.za=V[1],0<p.za-p.T&&37500>V[2]&&p.F&&p.v==0&&!p.C&&(p.C=Pi(m(p.Za,p),6e3));if(1>=Wd(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else ss(p,11)}else if((l.K||p.g==l)&&aa(p),!H(h))for(V=p.Da.g.parse(h),h=0;h<V.length;h++){let Oe=V[h];if(p.T=Oe[0],Oe=Oe[1],p.G==2)if(Oe[0]=="c"){p.K=Oe[1],p.ia=Oe[2];const Mt=Oe[3];Mt!=null&&(p.la=Mt,p.j.info("VER="+p.la));const Vt=Oe[4];Vt!=null&&(p.Aa=Vt,p.j.info("SVER="+p.Aa));const Ms=Oe[5];Ms!=null&&typeof Ms=="number"&&0<Ms&&(v=1.5*Ms,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const yn=l.g;if(yn){const ca=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ca){var W=v.h;W.g||ca.indexOf("spdy")==-1&&ca.indexOf("quic")==-1&&ca.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(Ec(W,W.h),W.h=null))}if(v.D){const Ac=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ac&&(v.ya=Ac,Qe(v.I,v.D,Ac))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var ee=l;if(v.qa=_f(v,v.J?v.ia:null,v.W),ee.K){qd(v.h,ee);var He=ee,kt=v.L;kt&&(He.I=kt),He.B&&(_c(He),Jo(He)),v.g=ee}else df(v);0<p.i.length&&oa(p)}else Oe[0]!="stop"&&Oe[0]!="close"||ss(p,7);else p.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?ss(p,7):Ic(p):Oe[0]!="noop"&&p.l&&p.l.ta(Oe),p.v=0)}}Si(4)}catch{}}var iT=class{constructor(l,h){this.g=l,this.map=h}};function jd(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Hd(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Wd(l){return l.h?1:l.g?l.g.size:0}function vc(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Ec(l,h){l.g?l.g.add(h):l.h=h}function qd(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}jd.prototype.cancel=function(){if(this.i=Gd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Gd(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.D);return h}return L(l.i)}function oT(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var h=[],p=l.length,v=0;v<p;v++)h.push(l[v]);return h}h=[],p=0;for(v in l)h[p++]=l[v];return h}function aT(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var h=[];l=l.length;for(var p=0;p<l;p++)h.push(p);return h}h=[],p=0;for(const v in l)h[p++]=v;return h}}}function Kd(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var p=aT(l),v=oT(l),V=v.length,W=0;W<V;W++)h.call(void 0,v[W],p&&p[W],l)}var zd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lT(l,h){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var v=l[p].indexOf("="),V=null;if(0<=v){var W=l[p].substring(0,v);V=l[p].substring(v+1)}else W=l[p];h(W,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function rs(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof rs){this.h=l.h,Zo(this,l.j),this.o=l.o,this.g=l.g,ea(this,l.s),this.l=l.l;var h=l.i,p=new Li;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Yd(this,p),this.m=l.m}else l&&(h=String(l).match(zd))?(this.h=!1,Zo(this,h[1]||"",!0),this.o=Ni(h[2]||""),this.g=Ni(h[3]||"",!0),ea(this,h[4]),this.l=Ni(h[5]||"",!0),Yd(this,h[6]||"",!0),this.m=Ni(h[7]||"")):(this.h=!1,this.i=new Li(null,this.h))}rs.prototype.toString=function(){var l=[],h=this.j;h&&l.push(Oi(h,Qd,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Oi(h,Qd,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Oi(p,p.charAt(0)=="/"?hT:uT,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Oi(p,fT)),l.join("")};function Gn(l){return new rs(l)}function Zo(l,h,p){l.j=p?Ni(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function ea(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function Yd(l,h,p){h instanceof Li?(l.i=h,pT(l.i,l.h)):(p||(h=Oi(h,dT)),l.i=new Li(h,l.h))}function Qe(l,h,p){l.i.set(h,p)}function ta(l){return Qe(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Ni(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Oi(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,cT),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function cT(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Qd=/[#\/\?@]/g,uT=/[#\?:]/g,hT=/[#\?]/g,dT=/[#\?@]/g,fT=/#/g;function Li(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function gr(l){l.g||(l.g=new Map,l.h=0,l.i&&lT(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Li.prototype,t.add=function(l,h){gr(this),this.i=null,l=Ds(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function Xd(l,h){gr(l),h=Ds(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Jd(l,h){return gr(l),h=Ds(l,h),l.g.has(h)}t.forEach=function(l,h){gr(this),this.g.forEach(function(p,v){p.forEach(function(V){l.call(h,V,v,this)},this)},this)},t.na=function(){gr(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let v=0;v<h.length;v++){const V=l[v];for(let W=0;W<V.length;W++)p.push(h[v])}return p},t.V=function(l){gr(this);let h=[];if(typeof l=="string")Jd(this,l)&&(h=h.concat(this.g.get(Ds(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)h=h.concat(l[p])}return h},t.set=function(l,h){return gr(this),this.i=null,l=Ds(this,l),Jd(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function Zd(l,h,p){Xd(l,h),0<p.length&&(l.i=null,l.g.set(Ds(l,h),L(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var v=h[p];const W=encodeURIComponent(String(v)),ee=this.V(v);for(v=0;v<ee.length;v++){var V=W;ee[v]!==""&&(V+="="+encodeURIComponent(String(ee[v]))),l.push(V)}}return this.i=l.join("&")};function Ds(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function pT(l,h){h&&!l.j&&(gr(l),l.i=null,l.g.forEach(function(p,v){var V=v.toLowerCase();v!=V&&(Xd(this,v),Zd(this,V,p))},l)),l.j=h}function mT(l,h){const p=new Ci;if(a.Image){const v=new Image;v.onload=g(_r,p,"TestLoadImage: loaded",!0,h,v),v.onerror=g(_r,p,"TestLoadImage: error",!1,h,v),v.onabort=g(_r,p,"TestLoadImage: abort",!1,h,v),v.ontimeout=g(_r,p,"TestLoadImage: timeout",!1,h,v),a.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=l}else h(!1)}function gT(l,h){const p=new Ci,v=new AbortController,V=setTimeout(()=>{v.abort(),_r(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:v.signal}).then(W=>{clearTimeout(V),W.ok?_r(p,"TestPingServer: ok",!0,h):_r(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(V),_r(p,"TestPingServer: error",!1,h)})}function _r(l,h,p,v,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),v(p)}catch{}}function _T(){this.g=new hn}function yT(l,h,p){const v=p||"";try{Kd(l,function(V,W){let ee=V;u(V)&&(ee=Ns(V)),h.push(v+W+"="+encodeURIComponent(ee))})}catch(V){throw h.push(v+"type="+encodeURIComponent("_badmap")),V}}function na(l){this.l=l.Ub||null,this.j=l.eb||!1}R(na,Os),na.prototype.g=function(){return new ra(this.l,this.j)},na.prototype.i=function(l){return function(){return l}}({});function ra(l,h){x.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(ra,x),t=ra.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,xi(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||a).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Di(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,xi(this)),this.g&&(this.readyState=3,xi(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ef(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ef(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Di(this):xi(this),this.readyState==3&&ef(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Di(this))},t.Qa=function(l){this.g&&(this.response=l,Di(this))},t.ga=function(){this.g&&Di(this)};function Di(l){l.readyState=4,l.l=null,l.j=null,l.v=null,xi(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function xi(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ra.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function tf(l){let h="";return U(l,function(p,v){h+=v,h+=":",h+=p,h+=`\r
`}),h}function Tc(l,h,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=tf(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):Qe(l,h,p))}function ct(l){x.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(ct,x);var vT=/^https?$/i,ET=["POST","PUT"];t=ct.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pc.g(),this.v=this.o?kd(this.o):kd(pc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(W){nf(this,W);return}if(l=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var V in v)p.set(V,v[V]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const W of v.keys())p.set(W,v.get(W));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(W=>W.toLowerCase()=="content-type"),V=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(ET,h,void 0))||v||V||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,ee]of p)this.g.setRequestHeader(W,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{of(this),this.u=!0,this.g.send(l),this.u=!1}catch(W){nf(this,W)}};function nf(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,rf(l),sa(l)}function rf(l){l.A||(l.A=!0,B(l,"complete"),B(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,B(this,"complete"),B(this,"abort"),sa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sa(this,!0)),ct.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?sf(this):this.bb())},t.bb=function(){sf(this)};function sf(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Kn(l)!=4||l.Z()!=2)){if(l.u&&Kn(l)==4)ue(l.Ea,0,l);else if(B(l,"readystatechange"),Kn(l)==4){l.h=!1;try{const ee=l.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var v;if(v=ee===0){var V=String(l.D).match(zd)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),v=!vT.test(V?V.toLowerCase():"")}p=v}if(p)B(l,"complete"),B(l,"success");else{l.m=6;try{var W=2<Kn(l)?l.g.statusText:""}catch{W=""}l.l=W+" ["+l.Z()+"]",rf(l)}}finally{sa(l)}}}}function sa(l,h){if(l.g){of(l);const p=l.g,v=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||B(l,"ready");try{p.onreadystatechange=v}catch{}}}function of(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Kn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),Gt(h)}};function af(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function TT(l){const h={};l=(l.g&&2<=Kn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<l.length;v++){if(H(l[v]))continue;var p=O(l[v]);const V=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const W=h[V]||[];h[V]=W,W.push(p)}I(h,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mi(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function lf(l){this.Aa=0,this.i=[],this.j=new Ci,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Mi("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Mi("baseRetryDelayMs",5e3,l),this.cb=Mi("retryDelaySeedMs",1e4,l),this.Wa=Mi("forwardChannelMaxRetries",2,l),this.wa=Mi("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new jd(l&&l.concurrentRequestLimit),this.Da=new _T,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=lf.prototype,t.la=8,t.G=1,t.connect=function(l,h,p,v){Kt(0),this.W=l,this.H=h||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=_f(this,null,this.W),oa(this)};function Ic(l){if(cf(l),l.G==3){var h=l.U++,p=Gn(l.I);if(Qe(p,"SID",l.K),Qe(p,"RID",h),Qe(p,"TYPE","terminate"),Vi(l,p),h=new mr(l,l.j,h),h.L=2,h.v=ta(Gn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=h.v,p=!0),p||(h.g=yf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Jo(h)}gf(l)}function ia(l){l.g&&(wc(l),l.g.cancel(),l.g=null)}function cf(l){ia(l),l.u&&(a.clearTimeout(l.u),l.u=null),aa(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function oa(l){if(!Hd(l.h)&&!l.s){l.s=!0;var h=l.Ga;he||Ct(),Te||(he(),Te=!0),_t.add(h,l),l.B=0}}function IT(l,h){return Wd(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Pi(m(l.Ga,l,h),mf(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const V=new mr(this,this.j,l);let W=this.o;if(this.S&&(W?(W=_(W),S(W,this.S)):W=this.S),this.m!==null||this.O||(V.H=W,W=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=hf(this,V,h),p=Gn(this.I),Qe(p,"RID",l),Qe(p,"CVER",22),this.D&&Qe(p,"X-HTTP-Session-Id",this.D),Vi(this,p),W&&(this.O?h="headers="+encodeURIComponent(String(tf(W)))+"&"+h:this.m&&Tc(p,this.m,W)),Ec(this.h,V),this.Ua&&Qe(p,"TYPE","init"),this.P?(Qe(p,"$req",h),Qe(p,"SID","null"),V.T=!0,gc(V,p,null)):gc(V,p,h),this.G=2}}else this.G==3&&(l?uf(this,l):this.i.length==0||Hd(this.h)||uf(this))};function uf(l,h){var p;h?p=h.l:p=l.U++;const v=Gn(l.I);Qe(v,"SID",l.K),Qe(v,"RID",p),Qe(v,"AID",l.T),Vi(l,v),l.m&&l.o&&Tc(v,l.m,l.o),p=new mr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),h&&(l.i=h.D.concat(l.i)),h=hf(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Ec(l.h,p),gc(p,v,h)}function Vi(l,h){l.H&&U(l.H,function(p,v){Qe(h,v,p)}),l.l&&Kd({},function(p,v){Qe(h,v,p)})}function hf(l,h,p){p=Math.min(l.i.length,p);var v=l.l?m(l.l.Na,l.l,l):null;e:{var V=l.i;let W=-1;for(;;){const ee=["count="+p];W==-1?0<p?(W=V[0].g,ee.push("ofs="+W)):W=0:ee.push("ofs="+W);let He=!0;for(let kt=0;kt<p;kt++){let Oe=V[kt].g;const Mt=V[kt].map;if(Oe-=W,0>Oe)W=Math.max(0,V[kt].g-100),He=!1;else try{yT(Mt,ee,"req"+Oe+"_")}catch{v&&v(Mt)}}if(He){v=ee.join("&");break e}}}return l=l.i.splice(0,p),h.D=l,v}function df(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;he||Ct(),Te||(he(),Te=!0),_t.add(h,l),l.v=0}}function bc(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Pi(m(l.Fa,l),mf(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,ff(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Pi(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Kt(10),ia(this),ff(this))};function wc(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function ff(l){l.g=new mr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Gn(l.qa);Qe(h,"RID","rpc"),Qe(h,"SID",l.K),Qe(h,"AID",l.T),Qe(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Qe(h,"TO",l.ja),Qe(h,"TYPE","xmlhttp"),Vi(l,h),l.m&&l.o&&Tc(h,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=ta(Gn(h)),p.m=null,p.P=!0,Ud(p,l)}t.Za=function(){this.C!=null&&(this.C=null,ia(this),bc(this),Kt(19))};function aa(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function pf(l,h){var p=null;if(l.g==h){aa(l),wc(l),l.g=null;var v=2}else if(vc(l.h,h))p=h.D,qd(l.h,h),v=1;else return;if(l.G!=0){if(h.o)if(v==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var V=l.B;v=Yo(),B(v,new xd(v,p)),oa(l)}else df(l);else if(V=h.s,V==3||V==0&&0<h.X||!(v==1&&IT(l,h)||v==2&&bc(l)))switch(p&&0<p.length&&(h=l.h,h.i=h.i.concat(p)),V){case 1:ss(l,5);break;case 4:ss(l,10);break;case 3:ss(l,6);break;default:ss(l,2)}}}function mf(l,h){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*h}function ss(l,h){if(l.j.info("Error code "+h),h==2){var p=m(l.fb,l),v=l.Xa;const V=!v;v=new rs(v||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Zo(v,"https"),ta(v),V?mT(v.toString(),p):gT(v.toString(),p)}else Kt(2);l.G=0,l.l&&l.l.sa(h),gf(l),cf(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Kt(2)):(this.j.info("Failed to ping google.com"),Kt(1))};function gf(l){if(l.G=0,l.ka=[],l.l){const h=Gd(l.h);(h.length!=0||l.i.length!=0)&&(k(l.ka,h),k(l.ka,l.i),l.h.i.length=0,L(l.i),l.i.length=0),l.l.ra()}}function _f(l,h,p){var v=p instanceof rs?Gn(p):new rs(p);if(v.g!="")h&&(v.g=h+"."+v.g),ea(v,v.s);else{var V=a.location;v=V.protocol,h=h?h+"."+V.hostname:V.hostname,V=+V.port;var W=new rs(null);v&&Zo(W,v),h&&(W.g=h),V&&ea(W,V),p&&(W.l=p),v=W}return p=l.D,h=l.ya,p&&h&&Qe(v,p,h),Qe(v,"VER",l.la),Vi(l,v),v}function yf(l,h,p){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new ct(new na({eb:p})):new ct(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function vf(){}t=vf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function la(){}la.prototype.g=function(l,h){return new sn(l,h)};function sn(l,h){x.call(this),this.g=new lf(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!H(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!H(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new xs(this)}R(sn,x),sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},sn.prototype.close=function(){Ic(this.g)},sn.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=Ns(l),l=p);h.i.push(new iT(h.Ya++,l)),h.G==3&&oa(h)},sn.prototype.N=function(){this.g.l=null,delete this.j,Ic(this.g),delete this.g,sn.aa.N.call(this)};function Ef(l){dc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}R(Ef,dc);function Tf(){fc.call(this),this.status=1}R(Tf,fc);function xs(l){this.g=l}R(xs,vf),xs.prototype.ua=function(){B(this.g,"a")},xs.prototype.ta=function(l){B(this.g,new Ef(l))},xs.prototype.sa=function(l){B(this.g,new Tf)},xs.prototype.ra=function(){B(this.g,"b")},la.prototype.createWebChannel=la.prototype.g,sn.prototype.send=sn.prototype.o,sn.prototype.open=sn.prototype.m,sn.prototype.close=sn.prototype.close,fv=function(){return new la},dv=function(){return Yo()},hv=ts,Fu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Qo.NO_ERROR=0,Qo.TIMEOUT=8,Qo.HTTP_ERROR=6,Oa=Qo,Md.COMPLETE="complete",uv=Md,Nd.EventType=Ri,Ri.OPEN="a",Ri.CLOSE="b",Ri.ERROR="c",Ri.MESSAGE="d",x.prototype.listen=x.prototype.K,Gi=Nd,ct.prototype.listenOnce=ct.prototype.L,ct.prototype.getLastError=ct.prototype.Ka,ct.prototype.getLastErrorCode=ct.prototype.Ba,ct.prototype.getStatus=ct.prototype.Z,ct.prototype.getResponseJson=ct.prototype.Oa,ct.prototype.getResponseText=ct.prototype.oa,ct.prototype.send=ct.prototype.ea,ct.prototype.setWithCredentials=ct.prototype.Ha,cv=ct}).apply(typeof ga<"u"?ga:typeof self<"u"?self:typeof window<"u"?window:{});const Pm="@firebase/firestore";/**
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
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
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
 */let Ti="11.0.2";/**
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
 */const Is=new Dh("@firebase/firestore");function Hs(){return Is.logLevel}function ae(t,...e){if(Is.logLevel<=Re.DEBUG){const n=e.map(Gh);Is.debug(`Firestore (${Ti}): ${t}`,...n)}}function hr(t,...e){if(Is.logLevel<=Re.ERROR){const n=e.map(Gh);Is.error(`Firestore (${Ti}): ${t}`,...n)}}function ui(t,...e){if(Is.logLevel<=Re.WARN){const n=e.map(Gh);Is.warn(`Firestore (${Ti}): ${t}`,...n)}}function Gh(t){if(typeof t=="string")return t;try{/**
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
 */function ge(t="Unexpected state"){const e=`FIRESTORE (${Ti}) INTERNAL ASSERTION FAILED: `+t;throw hr(e),new Error(e)}function $e(t,e){t||ge()}function ve(t,e){return t}/**
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
 */const J={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends Wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class xr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class pv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ak{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ut.UNAUTHENTICATED))}shutdown(){}}class lk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ck{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){$e(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new xr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new xr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new xr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($e(typeof r.accessToken=="string"),new pv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string"),new Ut(e)}}class uk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class hk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new uk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){$e(this.o===void 0);const r=i=>{i.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ae("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($e(typeof n.token=="string"),this.R=n.token,new dk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function pk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class mv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=pk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Pe(t,e){return t<e?-1:t>e?1:0}function hi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Tt{static now(){return Tt.fromMillis(Date.now())}static fromDate(e){return Tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Tt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce(J.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ce(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce(J.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class _e{static fromTimestamp(e){return new _e(e)}static min(){return new _e(new Tt(0,0))}static max(){return new _e(new Tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ro{constructor(e,n,r){n===void 0?n=0:n>e.length&&ge(),r===void 0?r=e.length-n:r>e.length-n&&ge(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ro.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ro?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class nt extends Ro{construct(e,n,r){return new nt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce(J.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new nt(n)}static emptyPath(){return new nt([])}}const mk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ot extends Ro{construct(e,n,r){return new Ot(e,n,r)}static isValidIdentifier(e){return mk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ce(J.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new ce(J.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ce(J.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new ce(J.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ot(n)}static emptyPath(){return new Ot([])}}/**
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
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(nt.fromString(e))}static fromName(e){return new de(nt.fromString(e).popFirst(5))}static empty(){return new de(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return nt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new nt(e.slice()))}}function gk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=_e.fromTimestamp(r===1e9?new Tt(n+1,0):new Tt(n,r));return new $r(s,de.empty(),e)}function _k(t){return new $r(t.readTime,t.key,-1)}class $r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new $r(_e.min(),de.empty(),-1)}static max(){return new $r(_e.max(),de.empty(),-1)}}function yk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=de.comparator(t.documentKey,e.documentKey),n!==0?n:Pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const vk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ek{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ii(t){if(t.code!==J.FAILED_PRECONDITION||t.message!==vk)throw t;ae("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ge(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new K((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof K?n:K.resolve(n)}catch(n){return K.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):K.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):K.reject(n)}static resolve(e){return new K((n,r)=>{n(e)})}static reject(e){return new K((n,r)=>{r(e)})}static waitFor(e){return new K((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=K.resolve(!1);for(const r of e)n=n.next(s=>s?K.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new K((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++a,a===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new K((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Tk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Hl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Hl.oe=-1;function Wl(t){return t==null}function ol(t){return t===0&&1/t==-1/0}function Ik(t){return typeof t=="number"&&Number.isInteger(t)&&!ol(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function bk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Cm(e)),e=wk(t.get(n),e);return Cm(e)}function wk(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Cm(t){return t+""}/**
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
 */function km(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Zr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class at{constructor(e,n){this.comparator=e,this.root=n||Nt.EMPTY}insert(e,n){return new at(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new at(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _a(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _a(this.root,e,this.comparator,!1)}getReverseIterator(){return new _a(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _a(this.root,e,this.comparator,!0)}}class _a{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Nt.RED,this.left=s??Nt.EMPTY,this.right=i??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Nt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ge();const e=this.left.check();if(e!==this.right.check())throw ge();return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw ge()}get value(){throw ge()}get color(){throw ge()}get left(){throw ge()}get right(){throw ge()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class It{constructor(e){this.comparator=e,this.data=new at(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Nm(this.data.getIterator())}getIteratorFrom(e){return new Nm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof It)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new It(this.comparator);return n.data=e,n}}class Nm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class cn{constructor(e){this.fields=e,e.sort(Ot.comparator)}static empty(){return new cn([])}unionWith(e){let n=new It(Ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new cn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class _v extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new _v("Invalid base64 string: "+i):i}}(e);return new Dt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Dt.EMPTY_BYTE_STRING=new Dt("");const Ak=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Br(t){if($e(!!t),typeof t=="string"){let e=0;const n=Ak.exec(t);if($e(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ht(t.seconds),nanos:ht(t.nanos)}}function ht(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?Dt.fromBase64String(t):Dt.fromUint8Array(t)}/**
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
 */function Kh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ql(t){const e=t.mapValue.fields.__previous_value__;return Kh(e)?ql(e):e}function So(t){const e=Br(t.mapValue.fields.__local_write_time__.timestampValue);return new Tt(e.seconds,e.nanos)}/**
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
 */class Rk{constructor(e,n,r,s,i,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Po{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Po("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Po&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ya={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kh(t)?4:Pk(t)?9007199254740991:Sk(t)?10:11:ge()}function jn(t,e){if(t===e)return!0;const n=Hr(t);if(n!==Hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return So(t).isEqual(So(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Br(s.timestampValue),a=Br(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return jr(s.bytesValue).isEqual(jr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ht(s.geoPointValue.latitude)===ht(i.geoPointValue.latitude)&&ht(s.geoPointValue.longitude)===ht(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ht(s.integerValue)===ht(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ht(s.doubleValue),a=ht(i.doubleValue);return o===a?ol(o)===ol(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return hi(t.arrayValue.values||[],e.arrayValue.values||[],jn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(km(o)!==km(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!jn(o[c],a[c])))return!1;return!0}(t,e);default:return ge()}}function Co(t,e){return(t.values||[]).find(n=>jn(n,e))!==void 0}function di(t,e){if(t===e)return 0;const n=Hr(t),r=Hr(e);if(n!==r)return Pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ht(i.integerValue||i.doubleValue),c=ht(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Om(t.timestampValue,e.timestampValue);case 4:return Om(So(t),So(e));case 5:return Pe(t.stringValue,e.stringValue);case 6:return function(i,o){const a=jr(i),c=jr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const d=Pe(a[u],c[u]);if(d!==0)return d}return Pe(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Pe(ht(i.latitude),ht(o.latitude));return a!==0?a:Pe(ht(i.longitude),ht(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Lm(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,c,u,d;const f=i.fields||{},m=o.fields||{},g=(a=f.value)===null||a===void 0?void 0:a.arrayValue,R=(c=m.value)===null||c===void 0?void 0:c.arrayValue,L=Pe(((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return L!==0?L:Lm(g,R)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ya.mapValue&&o===ya.mapValue)return 0;if(i===ya.mapValue)return 1;if(o===ya.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let f=0;f<c.length&&f<d.length;++f){const m=Pe(c[f],d[f]);if(m!==0)return m;const g=di(a[c[f]],u[d[f]]);if(g!==0)return g}return Pe(c.length,d.length)}(t.mapValue,e.mapValue);default:throw ge()}}function Om(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);const n=Br(t),r=Br(e),s=Pe(n.seconds,r.seconds);return s!==0?s:Pe(n.nanos,r.nanos)}function Lm(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=di(n[s],r[s]);if(i)return i}return Pe(n.length,r.length)}function fi(t){return Uu(t)}function Uu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return de.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Uu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Uu(n.fields[o])}`;return s+"}"}(t.mapValue):ge()}function La(t){switch(Hr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ql(t);return e?16+La(e):16;case 5:return 2*t.stringValue.length;case 6:return jr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+La(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Zr(r.fields,(i,o)=>{s+=i.length+La(o)}),s}(t.mapValue);default:throw ge()}}function $u(t){return!!t&&"integerValue"in t}function zh(t){return!!t&&"arrayValue"in t}function Dm(t){return!!t&&"nullValue"in t}function xm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Da(t){return!!t&&"mapValue"in t}function Sk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function io(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Zr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=io(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=io(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Pk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Da(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=io(n)}setAll(e){let n=Ot.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=io(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Da(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Da(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Zr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new rn(io(this.value))}}function yv(t){const e=[];return Zr(t.fields,(n,r)=>{const s=new Ot([n]);if(Da(r)){const i=yv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new cn(e)}/**
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
 */class Ht{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ht(e,0,_e.min(),_e.min(),_e.min(),rn.empty(),0)}static newFoundDocument(e,n,r,s){return new Ht(e,1,n,_e.min(),r,s,0)}static newNoDocument(e,n){return new Ht(e,2,n,_e.min(),_e.min(),rn.empty(),0)}static newUnknownDocument(e,n){return new Ht(e,3,n,_e.min(),_e.min(),rn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class al{constructor(e,n){this.position=e,this.inclusive=n}}function Mm(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=de.comparator(de.fromName(o.referenceValue),n.key):r=di(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!jn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ll{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ck(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class vv{}class yt extends vv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Nk(e,n,r):n==="array-contains"?new Dk(e,r):n==="in"?new xk(e,r):n==="not-in"?new Mk(e,r):n==="array-contains-any"?new Vk(e,r):new yt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ok(e,r):new Lk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(di(n,this.value)):n!==null&&Hr(this.value)===Hr(n)&&this.matchesComparison(di(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Hn extends vv{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Hn(e,n)}matches(e){return Ev(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ev(t){return t.op==="and"}function Tv(t){return kk(t)&&Ev(t)}function kk(t){for(const e of t.filters)if(e instanceof Hn)return!1;return!0}function Bu(t){if(t instanceof yt)return t.field.canonicalString()+t.op.toString()+fi(t.value);if(Tv(t))return t.filters.map(e=>Bu(e)).join(",");{const e=t.filters.map(n=>Bu(n)).join(",");return`${t.op}(${e})`}}function Iv(t,e){return t instanceof yt?function(r,s){return s instanceof yt&&r.op===s.op&&r.field.isEqual(s.field)&&jn(r.value,s.value)}(t,e):t instanceof Hn?function(r,s){return s instanceof Hn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Iv(o,s.filters[a]),!0):!1}(t,e):void ge()}function bv(t){return t instanceof yt?function(n){return`${n.field.canonicalString()} ${n.op} ${fi(n.value)}`}(t):t instanceof Hn?function(n){return n.op.toString()+" {"+n.getFilters().map(bv).join(" ,")+"}"}(t):"Filter"}class Nk extends yt{constructor(e,n,r){super(e,n,r),this.key=de.fromName(r.referenceValue)}matches(e){const n=de.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ok extends yt{constructor(e,n){super(e,"in",n),this.keys=wv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Lk extends yt{constructor(e,n){super(e,"not-in",n),this.keys=wv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function wv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>de.fromName(r.referenceValue))}class Dk extends yt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zh(n)&&Co(n.arrayValue,this.value)}}class xk extends yt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Co(this.value.arrayValue,n)}}class Mk extends yt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Co(this.value.arrayValue,n)}}class Vk extends yt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Co(this.value.arrayValue,r))}}/**
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
 */class Fk{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function Fm(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Fk(t,e,n,r,s,i,o)}function Yh(t){const e=ve(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Bu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Wl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fi(r)).join(",")),e.ue=n}return e.ue}function Qh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ck(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Iv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vm(t.startAt,e.startAt)&&Vm(t.endAt,e.endAt)}function ju(t){return de.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Gl{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Uk(t,e,n,r,s,i,o,a){return new Gl(t,e,n,r,s,i,o,a)}function Kl(t){return new Gl(t)}function Um(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $k(t){return t.collectionGroup!==null}function oo(t){const e=ve(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new It(Ot.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ll(i,r))}),n.has(Ot.keyField().canonicalString())||e.ce.push(new ll(Ot.keyField(),r))}return e.ce}function Un(t){const e=ve(t);return e.le||(e.le=Bk(e,oo(t))),e.le}function Bk(t,e){if(t.limitType==="F")return Fm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ll(s.field,i)});const n=t.endAt?new al(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new al(t.startAt.position,t.startAt.inclusive):null;return Fm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Hu(t,e,n){return new Gl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zl(t,e){return Qh(Un(t),Un(e))&&t.limitType===e.limitType}function Av(t){return`${Yh(Un(t))}|lt:${t.limitType}`}function Ws(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>bv(s)).join(", ")}]`),Wl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>fi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>fi(s)).join(",")),`Target(${r})`}(Un(t))}; limitType=${t.limitType})`}function Yl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):de.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of oo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=Mm(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,oo(r),s)||r.endAt&&!function(o,a,c){const u=Mm(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,oo(r),s))}(t,e)}function jk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Rv(t){return(e,n)=>{let r=!1;for(const s of oo(t)){const i=Hk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Hk(t,e,n){const r=t.field.isKeyField()?de.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?di(c,u):ge()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ge()}}/**
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
 */class Ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Zr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return gv(this.inner)}size(){return this.innerSize}}/**
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
 */const Wk=new at(de.comparator);function dr(){return Wk}const Sv=new at(de.comparator);function Ki(...t){let e=Sv;for(const n of t)e=e.insert(n.key,n);return e}function Pv(t){let e=Sv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function fs(){return ao()}function Cv(){return ao()}function ao(){return new Ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const qk=new at(de.comparator),Gk=new It(de.comparator);function Se(...t){let e=Gk;for(const n of t)e=e.add(n);return e}const Kk=new It(Pe);function zk(){return Kk}/**
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
 */function Xh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ol(e)?"-0":e}}function kv(t){return{integerValue:""+t}}function Yk(t,e){return Ik(e)?kv(e):Xh(t,e)}/**
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
 */class Ql{constructor(){this._=void 0}}function Qk(t,e,n){return t instanceof cl?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Kh(i)&&(i=ql(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ko?Ov(t,e):t instanceof No?Lv(t,e):function(s,i){const o=Nv(s,i),a=$m(o)+$m(s.Pe);return $u(o)&&$u(s.Pe)?kv(a):Xh(s.serializer,a)}(t,e)}function Xk(t,e,n){return t instanceof ko?Ov(t,e):t instanceof No?Lv(t,e):n}function Nv(t,e){return t instanceof ul?function(r){return $u(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class cl extends Ql{}class ko extends Ql{constructor(e){super(),this.elements=e}}function Ov(t,e){const n=Dv(e);for(const r of t.elements)n.some(s=>jn(s,r))||n.push(r);return{arrayValue:{values:n}}}class No extends Ql{constructor(e){super(),this.elements=e}}function Lv(t,e){let n=Dv(e);for(const r of t.elements)n=n.filter(s=>!jn(s,r));return{arrayValue:{values:n}}}class ul extends Ql{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function $m(t){return ht(t.integerValue||t.doubleValue)}function Dv(t){return zh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Jk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ko&&s instanceof ko||r instanceof No&&s instanceof No?hi(r.elements,s.elements,jn):r instanceof ul&&s instanceof ul?jn(r.Pe,s.Pe):r instanceof cl&&s instanceof cl}(t.transform,e.transform)}class Zk{constructor(e,n){this.version=e,this.transformResults=n}}class mn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new mn}static exists(e){return new mn(void 0,e)}static updateTime(e){return new mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xl{}function xv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Jh(t.key,mn.none()):new Wo(t.key,t.data,mn.none());{const n=t.data,r=rn.empty();let s=new It(Ot.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new es(t.key,r,new cn(s.toArray()),mn.none())}}function e1(t,e,n){t instanceof Wo?function(s,i,o){const a=s.value.clone(),c=jm(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof es?function(s,i,o){if(!xa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=jm(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Mv(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function lo(t,e,n,r){return t instanceof Wo?function(i,o,a,c){if(!xa(i.precondition,o))return a;const u=i.value.clone(),d=Hm(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof es?function(i,o,a,c){if(!xa(i.precondition,o))return a;const u=Hm(i.fieldTransforms,c,o),d=o.data;return d.setAll(Mv(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return xa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function t1(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Nv(r.transform,s||null);i!=null&&(n===null&&(n=rn.empty()),n.set(r.field,i))}return n||null}function Bm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&hi(r,s,(i,o)=>Jk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Wo extends Xl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class es extends Xl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Mv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jm(t,e,n){const r=new Map;$e(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Xk(o,a,n[s]))}return r}function Hm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Qk(i,o,e))}return r}class Jh extends Xl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class n1 extends Xl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class r1{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&e1(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Cv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=xv(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(_e.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Se())}isEqual(e){return this.batchId===e.batchId&&hi(this.mutations,e.mutations,(n,r)=>Bm(n,r))&&hi(this.baseMutations,e.baseMutations,(n,r)=>Bm(n,r))}}class Zh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){$e(e.mutations.length===r.length);let s=function(){return qk}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Zh(e,n,r,s)}}/**
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
 */class s1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class i1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var mt,ke;function o1(t){switch(t){default:return ge();case J.CANCELLED:case J.UNKNOWN:case J.DEADLINE_EXCEEDED:case J.RESOURCE_EXHAUSTED:case J.INTERNAL:case J.UNAVAILABLE:case J.UNAUTHENTICATED:return!1;case J.INVALID_ARGUMENT:case J.NOT_FOUND:case J.ALREADY_EXISTS:case J.PERMISSION_DENIED:case J.FAILED_PRECONDITION:case J.ABORTED:case J.OUT_OF_RANGE:case J.UNIMPLEMENTED:case J.DATA_LOSS:return!0}}function Vv(t){if(t===void 0)return hr("GRPC error has no .code"),J.UNKNOWN;switch(t){case mt.OK:return J.OK;case mt.CANCELLED:return J.CANCELLED;case mt.UNKNOWN:return J.UNKNOWN;case mt.DEADLINE_EXCEEDED:return J.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return J.RESOURCE_EXHAUSTED;case mt.INTERNAL:return J.INTERNAL;case mt.UNAVAILABLE:return J.UNAVAILABLE;case mt.UNAUTHENTICATED:return J.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return J.INVALID_ARGUMENT;case mt.NOT_FOUND:return J.NOT_FOUND;case mt.ALREADY_EXISTS:return J.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return J.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return J.FAILED_PRECONDITION;case mt.ABORTED:return J.ABORTED;case mt.OUT_OF_RANGE:return J.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return J.UNIMPLEMENTED;case mt.DATA_LOSS:return J.DATA_LOSS;default:return ge()}}(ke=mt||(mt={}))[ke.OK=0]="OK",ke[ke.CANCELLED=1]="CANCELLED",ke[ke.UNKNOWN=2]="UNKNOWN",ke[ke.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ke[ke.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ke[ke.NOT_FOUND=5]="NOT_FOUND",ke[ke.ALREADY_EXISTS=6]="ALREADY_EXISTS",ke[ke.PERMISSION_DENIED=7]="PERMISSION_DENIED",ke[ke.UNAUTHENTICATED=16]="UNAUTHENTICATED",ke[ke.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ke[ke.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ke[ke.ABORTED=10]="ABORTED",ke[ke.OUT_OF_RANGE=11]="OUT_OF_RANGE",ke[ke.UNIMPLEMENTED=12]="UNIMPLEMENTED",ke[ke.INTERNAL=13]="INTERNAL",ke[ke.UNAVAILABLE=14]="UNAVAILABLE",ke[ke.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function a1(){return new TextEncoder}/**
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
 */const l1=new gs([4294967295,4294967295],0);function Wm(t){const e=a1().encode(t),n=new lv;return n.update(e),new Uint8Array(n.digest())}function qm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new gs([n,r],0),new gs([s,i],0)]}class ed{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new zi(`Invalid padding: ${n}`);if(r<0)throw new zi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new zi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new zi(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=gs.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(gs.fromNumber(r)));return s.compare(l1)===1&&(s=new gs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Wm(e),[r,s]=qm(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ed(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Wm(e),[r,s]=qm(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class zi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Jl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,qo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Jl(_e.min(),s,new at(Pe),dr(),Se())}}class qo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new qo(r,n,Se(),Se(),Se())}}/**
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
 */class Ma{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Fv{constructor(e,n){this.targetId=e,this.me=n}}class Uv{constructor(e,n,r=Dt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Gm{constructor(){this.fe=0,this.ge=Km(),this.pe=Dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Se(),n=Se(),r=Se();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ge()}}),new qo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Km()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,$e(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class c1{constructor(e){this.Le=e,this.Be=new Map,this.ke=dr(),this.qe=va(),this.Qe=va(),this.Ke=new at(Pe)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:ge()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(ju(i))if(r===0){const o=new de(i.path);this.We(n,o,Ht.newNoDocument(o,_e.min()))}else $e(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=jr(r).toUint8Array()}catch(c){if(c instanceof _v)return ui("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new ed(o,s,i)}catch(c){return ui(c instanceof zi?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&ju(a.target)){const c=new de(a.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,Ht.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Se();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Jl(e,n,this.Ke,this.ke,r);return this.ke=dr(),this.qe=va(),this.Qe=va(),this.Ke=new at(Pe),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Gm,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new It(Pe),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new It(Pe),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||ae("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Gm),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function va(){return new at(de.comparator)}function Km(){return new at(de.comparator)}const u1={asc:"ASCENDING",desc:"DESCENDING"},h1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},d1={and:"AND",or:"OR"};class f1{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wu(t,e){return t.useProto3Json||Wl(e)?e:{value:e}}function hl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $v(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function p1(t,e){return hl(t,e.toTimestamp())}function $n(t){return $e(!!t),_e.fromTimestamp(function(n){const r=Br(n);return new Tt(r.seconds,r.nanos)}(t))}function td(t,e){return qu(t,e).canonicalString()}function qu(t,e){const n=function(s){return new nt(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Bv(t){const e=nt.fromString(t);return $e(Gv(e)),e}function Gu(t,e){return td(t.databaseId,e.path)}function Xc(t,e){const n=Bv(e);if(n.get(1)!==t.databaseId.projectId)throw new ce(J.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ce(J.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new de(Hv(n))}function jv(t,e){return td(t.databaseId,e)}function m1(t){const e=Bv(t);return e.length===4?nt.emptyPath():Hv(e)}function Ku(t){return new nt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Hv(t){return $e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function zm(t,e,n){return{name:Gu(t,e),fields:n.value.mapValue.fields}}function g1(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ge()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?($e(d===void 0||typeof d=="string"),Dt.fromBase64String(d||"")):($e(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Dt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const d=u.code===void 0?J.UNKNOWN:Vv(u.code);return new ce(d,u.message||"")}(o);n=new Uv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Xc(t,r.document.name),i=$n(r.document.updateTime),o=r.document.createTime?$n(r.document.createTime):_e.min(),a=new rn({mapValue:{fields:r.document.fields}}),c=Ht.newFoundDocument(s,i,o,a),u=r.targetIds||[],d=r.removedTargetIds||[];n=new Ma(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Xc(t,r.document),i=r.readTime?$n(r.readTime):_e.min(),o=Ht.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ma([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Xc(t,r.document),i=r.removedTargetIds||[];n=new Ma([],i,s,null)}else{if(!("filter"in e))return ge();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new i1(s,i),a=r.targetId;n=new Fv(a,o)}}return n}function _1(t,e){let n;if(e instanceof Wo)n={update:zm(t,e.key,e.value)};else if(e instanceof Jh)n={delete:Gu(t,e.key)};else if(e instanceof es)n={update:zm(t,e.key,e.data),updateMask:R1(e.fieldMask)};else{if(!(e instanceof n1))return ge();n={verify:Gu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof cl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ko)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof No)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ul)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ge()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:p1(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ge()}(t,e.precondition)),n}function y1(t,e){return t&&t.length>0?($e(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?$n(s.updateTime):$n(i);return o.isEqual(_e.min())&&(o=$n(i)),new Zk(o,s.transformResults||[])}(n,e))):[]}function v1(t,e){return{documents:[jv(t,e.path)]}}function E1(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=jv(t,s);const i=function(u){if(u.length!==0)return qv(Hn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:qs(m.field),direction:b1(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Wu(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:s}}function T1(t){let e=m1(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){$e(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(f){const m=Wv(f);return m instanceof Hn&&Tv(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(R){return new ll(Gs(R.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Wl(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(f){const m=!!f.before,g=f.values||[];return new al(g,m)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const m=!f.before,g=f.values||[];return new al(g,m)}(n.endAt)),Uk(e,s,o,i,a,"F",c,u)}function I1(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ge()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Wv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Gs(n.unaryFilter.field);return yt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Gs(n.unaryFilter.field);return yt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Gs(n.unaryFilter.field);return yt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Gs(n.unaryFilter.field);return yt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ge()}}(t):t.fieldFilter!==void 0?function(n){return yt.create(Gs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ge()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Hn.create(n.compositeFilter.filters.map(r=>Wv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ge()}}(n.compositeFilter.op))}(t):ge()}function b1(t){return u1[t]}function w1(t){return h1[t]}function A1(t){return d1[t]}function qs(t){return{fieldPath:t.canonicalString()}}function Gs(t){return Ot.fromServerFormat(t.fieldPath)}function qv(t){return t instanceof yt?function(n){if(n.op==="=="){if(xm(n.value))return{unaryFilter:{field:qs(n.field),op:"IS_NAN"}};if(Dm(n.value))return{unaryFilter:{field:qs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xm(n.value))return{unaryFilter:{field:qs(n.field),op:"IS_NOT_NAN"}};if(Dm(n.value))return{unaryFilter:{field:qs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qs(n.field),op:w1(n.op),value:n.value}}}(t):t instanceof Hn?function(n){const r=n.getFilters().map(s=>qv(s));return r.length===1?r[0]:{compositeFilter:{op:A1(n.op),filters:r}}}(t):ge()}function R1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Gv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class kr{constructor(e,n,r,s,i=_e.min(),o=_e.min(),a=Dt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class S1{constructor(e){this.ht=e}}function P1(t){const e=T1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hu(e,e.limit,"L"):e}/**
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
 */class C1{constructor(){this.ln=new k1}addToCollectionParentIndex(e,n){return this.ln.add(n),K.resolve()}getCollectionParents(e,n){return K.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return K.resolve()}deleteFieldIndex(e,n){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,n){return K.resolve()}getDocumentsMatchingTarget(e,n){return K.resolve(null)}getIndexType(e,n){return K.resolve(0)}getFieldIndexes(e,n){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,n){return K.resolve($r.min())}getMinOffsetFromCollectionGroup(e,n){return K.resolve($r.min())}updateCollectionGroup(e,n,r){return K.resolve()}updateIndexEntries(e,n){return K.resolve()}}class k1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new It(nt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new It(nt.comparator)).toArray()}}/**
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
 */const Ym={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class tn{static withCacheSize(e){return new tn(e,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */tn.DEFAULT_COLLECTION_PERCENTILE=10,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tn.DEFAULT=new tn(41943040,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tn.DISABLED=new tn(-1,0,0);/**
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
 */class pi{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new pi(0)}static Qn(){return new pi(-1)}}/**
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
 */function Qm([t,e],[n,r]){const s=Pe(t,n);return s===0?Pe(e,r):s}class N1{constructor(e){this.Gn=e,this.buffer=new It(Qm),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Qm(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class O1{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ae("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){bi(n)?ae("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ii(n)}await this.Yn(3e5)})}}class L1{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return K.resolve(Hl.oe);const r=new N1(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(Ym)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ym):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,o,a,c,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(u=Date.now(),Hs()<=Re.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-d}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function D1(t,e){return new L1(t,e)}/**
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
 */class x1{constructor(){this.changes=new Ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?K.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class M1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class V1{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&lo(r.mutation,s,cn.empty(),Tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Se()){const s=fs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ki();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=fs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=dr();const o=ao(),a=function(){return ao()}();return n.forEach((c,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof es)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),lo(d.mutation,u,d.mutation.getFieldMask(),Tt.now())):o.set(u.key,cn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var f;return a.set(u,new M1(d,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ao();let s=new at((o,a)=>o-a),i=Se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=r.get(c)||cn.empty();d=a.applyToLocalView(u,d),r.set(c,d);const f=(s.get(a.batchId)||Se()).add(c);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,d=c.value,f=Cv();d.forEach(m=>{if(!i.has(m)){const g=xv(n.get(m),r.get(m));g!==null&&f.set(m,g),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return K.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return de.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$k(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):K.resolve(fs());let a=-1,c=i;return o.next(u=>K.forEach(u,(d,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(d)?K.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Se())).next(d=>({batchId:a,changes:Pv(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new de(n)).next(r=>{let s=Ki();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ki();return this.indexManager.getCollectionParents(e,i).next(a=>K.forEach(a,c=>{const u=function(f,m){return new Gl(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Ht.newInvalidDocument(d)))});let a=Ki();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&lo(d.mutation,u,cn.empty(),Tt.now()),Yl(n,u)&&(a=a.insert(c,u))}),a})}}/**
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
 */class F1{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return K.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:$n(s.createTime)}}(n)),K.resolve()}getNamedQuery(e,n){return K.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:P1(s.bundledQuery),readTime:$n(s.readTime)}}(n)),K.resolve()}}/**
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
 */class U1{constructor(){this.overlays=new at(de.comparator),this.Er=new Map}getOverlay(e,n){return K.resolve(this.overlays.get(n))}getOverlays(e,n){const r=fs();return K.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),K.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),K.resolve()}getOverlaysForCollection(e,n,r){const s=fs(),i=n.length+1,o=new de(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return K.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new at((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=fs(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const a=fs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>a.set(u,d)),!(a.size()>=s)););return K.resolve(a)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new s1(n,r));let i=this.Er.get(n);i===void 0&&(i=Se(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
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
 */class $1{constructor(){this.sessionToken=Dt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,K.resolve()}}/**
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
 */class nd{constructor(){this.dr=new It(wt.Ar),this.Rr=new It(wt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new wt(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new wt(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new de(new nt([])),r=new wt(n,e),s=new wt(n,e+1),i=[];return this.Rr.forEachInRange([r,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new de(new nt([])),r=new wt(n,e),s=new wt(n,e+1);let i=Se();return this.Rr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new wt(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class wt{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return de.comparator(e.key,n.key)||Pe(e.br,n.br)}static Vr(e,n){return Pe(e.br,n.br)||de.comparator(e.key,n.key)}}/**
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
 */class B1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new It(wt.Ar)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new r1(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.vr=this.vr.add(new wt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return K.resolve(o)}lookupMutationBatch(e,n){return K.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return K.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new wt(n,0),s=new wt(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],o=>{const a=this.Cr(o.br);i.push(a)}),K.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new It(Pe);return n.forEach(s=>{const i=new wt(s,0),o=new wt(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],a=>{r=r.add(a.br)})}),K.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;de.isDocumentKey(i)||(i=i.child(""));const o=new wt(new de(i),0);let a=new It(Pe);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.br)),!0)},o),K.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){$e(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return K.forEach(n.mutations,s=>{const i=new wt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new wt(n,0),s=this.vr.firstAfterOrEqual(r);return K.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class j1{constructor(e){this.Nr=e,this.docs=function(){return new at(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return K.resolve(r?r.document.mutableCopy():Ht.newInvalidDocument(n))}getEntries(e,n){let r=dr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ht.newInvalidDocument(s))}),K.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=dr();const o=n.path,a=new de(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||yk(_k(d),r)<=0||(s.has(d.key)||Yl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return K.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ge()}Lr(e,n){return K.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new H1(this)}getSize(e){return K.resolve(this.size)}}class H1 extends x1{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),K.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
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
 */class W1{constructor(e){this.persistence=e,this.Br=new Ps(n=>Yh(n),Qh),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.kr=0,this.qr=new nd,this.targetCount=0,this.Qr=pi.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),K.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new pi(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,K.resolve()}updateTargetData(e,n){return this.Un(n),K.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),K.waitFor(i).next(()=>s)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return K.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),K.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),K.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),K.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return K.resolve(r)}containsKey(e,n){return K.resolve(this.qr.containsKey(n))}}/**
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
 */class Kv{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Hl(0),this.Ur=!1,this.Ur=!0,this.Wr=new $1,this.referenceDelegate=e(this),this.Gr=new W1(this),this.indexManager=new C1,this.remoteDocumentCache=function(s){return new j1(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new S1(n),this.jr=new F1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new U1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new B1(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){ae("MemoryPersistence","Starting transaction:",e);const s=new q1(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return K.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class q1 extends Ek{constructor(e){super(),this.currentSequenceNumber=e}}class rd{constructor(e){this.persistence=e,this.Zr=new nd,this.Xr=null}static ei(e){return new rd(e)}get ti(){if(this.Xr)return this.Xr;throw ge()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),K.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),K.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.ti,r=>{const s=de.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,_e.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return K.or([()=>K.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class dl{constructor(e,n){this.persistence=e,this.ri=new Ps(r=>bk(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=D1(this,n)}static ei(e,n){return new dl(e,n)}Hr(){}Jr(e){return K.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return K.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?K.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,n).next(a=>{a||(r++,i.removeEntry(o,_e.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),K.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),K.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),K.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=La(e.data.value)),n}ir(e,n,r){return K.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return K.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class sd{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=Se(),s=Se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new sd(e,n.fromCache,r,s)}}/**
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
 */class G1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class K1{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return kR()?8:Tk(Wt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new G1;return this.ts(e,n,o).next(a=>{if(i.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(Hs()<=Re.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",Ws(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),K.resolve()):(Hs()<=Re.DEBUG&&ae("QueryEngine","Query:",Ws(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Hs()<=Re.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",Ws(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Un(n))):K.resolve())}Xi(e,n){if(Um(n))return K.resolve(null);let r=Un(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Hu(n,null,"F"),r=Un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Se(...i);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.rs(n,a);return this.ss(n,u,o,c.readTime)?this.Xi(e,Hu(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,r,s){return Um(n)||s.isEqual(_e.min())?K.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const o=this.rs(n,i);return this.ss(n,o,r,s)?K.resolve(null):(Hs()<=Re.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ws(n)),this.os(e,o,n,gk(s,-1)).next(a=>a))})}rs(e,n){let r=new It(Rv(e));return n.forEach((s,i)=>{Yl(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return Hs()<=Re.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",Ws(n)),this.Zi.getDocumentsMatchingQuery(e,n,$r.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class z1{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new at(Pe),this.cs=new Ps(i=>Yh(i),Qh),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new V1(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function Y1(t,e,n,r){return new z1(t,e,n,r)}async function zv(t,e){const n=ve(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=Se();for(const u of s){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){a.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function Q1(t,e){const n=ve(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,d){const f=u.batch,m=f.keys();let g=K.resolve();return m.forEach(R=>{g=g.next(()=>d.getEntry(c,R)).next(L=>{const k=u.docVersions.get(R);$e(k!==null),L.version.compareTo(k)<0&&(f.applyToRemoteDocument(L,u),L.isValidDocument()&&(L.setReadTime(u.commitVersion),d.addEntry(L)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Se();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Yv(t){const e=ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function X1(t,e){const n=ve(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const a=[];e.targetChanges.forEach((d,f)=>{const m=s.get(f);if(!m)return;a.push(n.Gr.removeMatchingKeys(i,d.removedDocuments,f).next(()=>n.Gr.addMatchingKeys(i,d.addedDocuments,f)));let g=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Dt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,r)),s=s.insert(f,g),function(L,k,F){return L.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(m,g,d)&&a.push(n.Gr.updateTargetData(i,g))});let c=dr(),u=Se();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),a.push(J1(i,o,e.documentUpdates).next(d=>{c=d.Is,u=d.Es})),!r.isEqual(_e.min())){const d=n.Gr.getLastRemoteSnapshotVersion(i).next(f=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(d)}return K.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.us=s,i))}function J1(t,e,n){let r=Se(),s=Se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=dr();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(_e.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ae("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:s}})}function Z1(t,e){const n=ve(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function eN(t,e){const n=ve(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,K.resolve(s)):n.Gr.allocateTargetId(r).next(o=>(s=new kr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function zu(t,e,n){const r=ve(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!bi(o))throw o;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Xm(t,e,n){const r=ve(t);let s=_e.min(),i=Se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const f=ve(c),m=f.cs.get(d);return m!==void 0?K.resolve(f.us.get(m)):f.Gr.getTargetData(u,d)}(r,o,Un(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?s:_e.min(),n?i:Se())).next(a=>(tN(r,jk(e),a),{documents:a,ds:i})))}function tN(t,e,n){let r=t.ls.get(e)||_e.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class Jm{constructor(){this.activeTargetIds=zk()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nN{constructor(){this._o=new Jm,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Jm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rN{uo(e){}shutdown(){}}/**
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
 */class Zm{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ea=null;function Jc(){return Ea===null?Ea=function(){return 268435456+Math.round(2147483648*Math.random())}():Ea++,"0x"+Ea.toString(16)}/**
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
 */const sN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class iN{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Ft="WebChannelConnection";class oN extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,o){const a=Jc(),c=this.No(n,r.toUriEncodedString());ae("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(n,c,u,s).then(d=>(ae("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw ui("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",c,"request:",s),d})}ko(n,r,s,i,o,a){return this.Oo(n,r,s,i,o)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ti}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}No(n,r){const s=sN[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=Jc();return new Promise((o,a)=>{const c=new cv;c.setWithCredentials(!0),c.listenOnce(uv.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Oa.NO_ERROR:const d=c.getResponseJson();ae(Ft,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Oa.TIMEOUT:ae(Ft,`RPC '${e}' ${i} timed out`),a(new ce(J.DEADLINE_EXCEEDED,"Request time out"));break;case Oa.HTTP_ERROR:const f=c.getStatus();if(ae(Ft,`RPC '${e}' ${i} failed with status:`,f,"response text:",c.getResponseText()),f>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const R=function(k){const F=k.toLowerCase().replace(/_/g,"-");return Object.values(J).indexOf(F)>=0?F:J.UNKNOWN}(g.status);a(new ce(R,g.message))}else a(new ce(J.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new ce(J.UNAVAILABLE,"Connection failed."));break;default:ge()}}finally{ae(Ft,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);ae(Ft,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}qo(e,n,r){const s=Jc(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=fv(),a=dv(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");ae(Ft,`Creating RPC '${e}' stream ${s}: ${d}`,c);const f=o.createWebChannel(d,c);let m=!1,g=!1;const R=new iN({Eo:k=>{g?ae(Ft,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(m||(ae(Ft,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),ae(Ft,`RPC '${e}' stream ${s} sending:`,k),f.send(k))},Ao:()=>f.close()}),L=(k,F,H)=>{k.listen(F,P=>{try{H(P)}catch(C){setTimeout(()=>{throw C},0)}})};return L(f,Gi.EventType.OPEN,()=>{g||(ae(Ft,`RPC '${e}' stream ${s} transport opened.`),R.So())}),L(f,Gi.EventType.CLOSE,()=>{g||(g=!0,ae(Ft,`RPC '${e}' stream ${s} transport closed`),R.Do())}),L(f,Gi.EventType.ERROR,k=>{g||(g=!0,ui(Ft,`RPC '${e}' stream ${s} transport errored:`,k),R.Do(new ce(J.UNAVAILABLE,"The operation could not be completed")))}),L(f,Gi.EventType.MESSAGE,k=>{var F;if(!g){const H=k.data[0];$e(!!H);const P=H,C=(P==null?void 0:P.error)||((F=P[0])===null||F===void 0?void 0:F.error);if(C){ae(Ft,`RPC '${e}' stream ${s} received error:`,C);const j=C.status;let U=function(y){const S=mt[y];if(S!==void 0)return Vv(S)}(j),I=C.message;U===void 0&&(U=J.INTERNAL,I="Unknown error status: "+j+" with message "+C.message),g=!0,R.Do(new ce(U,I)),f.close()}else ae(Ft,`RPC '${e}' stream ${s} received:`,H),R.vo(H)}}),L(a,hv.STAT_EVENT,k=>{k.stat===Fu.PROXY?ae(Ft,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Fu.NOPROXY&&ae(Ft,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.bo()},0),R}}function Zc(){return typeof document<"u"?document:null}/**
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
 */function Zl(t){return new f1(t,!0)}/**
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
 */class Qv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&ae("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class Xv{constructor(e,n,r,s,i,o,a,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Qv(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===J.RESOURCE_EXHAUSTED?(hr(n.toString()),hr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===J.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new ce(J.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aN extends Xv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=g1(this.serializer,e),r=function(i){if(!("targetChange"in i))return _e.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?_e.min():o.readTime?$n(o.readTime):_e.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Ku(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=ju(c)?{documents:v1(i,c)}:{query:E1(i,c).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=$v(i,o.resumeToken);const u=Wu(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(_e.min())>0){a.readTime=hl(i,o.snapshotVersion.toTimestamp());const u=Wu(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=I1(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Ku(this.serializer),n.removeTarget=e,this.c_(n)}}class lN extends Xv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return $e(!!e.streamToken),this.lastStreamToken=e.streamToken,$e(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){$e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=y1(e.writeResults,e.commitTime),r=$n(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=Ku(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>_1(this.serializer,r))};this.c_(n)}}/**
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
 */class cN extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new ce(J.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,qu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ce(J.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,qu(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===J.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ce(J.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class uN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(hr(n),this.C_=!1):ae("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class hN{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{Cs(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ve(c);u.k_.add(4),await Go(u),u.K_.set("Unknown"),u.k_.delete(4),await ec(u)}(this))})}),this.K_=new uN(r,s)}}async function ec(t){if(Cs(t))for(const e of t.q_)await e(!0)}async function Go(t){for(const e of t.q_)await e(!1)}function Jv(t,e){const n=ve(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),ld(n)?ad(n):wi(n).s_()&&od(n,e))}function id(t,e){const n=ve(t),r=wi(n);n.B_.delete(e),r.s_()&&Zv(n,e),n.B_.size===0&&(r.s_()?r.a_():Cs(n)&&n.K_.set("Unknown"))}function od(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}wi(t).V_(e)}function Zv(t,e){t.U_.xe(e),wi(t).m_(e)}function ad(t){t.U_=new c1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),wi(t).start(),t.K_.F_()}function ld(t){return Cs(t)&&!wi(t).i_()&&t.B_.size>0}function Cs(t){return ve(t).k_.size===0}function eE(t){t.U_=void 0}async function dN(t){t.K_.set("Online")}async function fN(t){t.B_.forEach((e,n)=>{od(t,e)})}async function pN(t,e){eE(t),ld(t)?(t.K_.O_(e),ad(t)):t.K_.set("Unknown")}async function mN(t,e,n){if(t.K_.set("Online"),e instanceof Uv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.B_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.B_.delete(a),s.U_.removeTarget(a))}(t,e)}catch(r){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await fl(t,r)}else if(e instanceof Ma?t.U_.$e(e):e instanceof Fv?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(_e.min()))try{const r=await Yv(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.U_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.B_.get(u);d&&i.B_.set(u,d.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const d=i.B_.get(c);if(!d)return;i.B_.set(c,d.withResumeToken(Dt.EMPTY_BYTE_STRING,d.snapshotVersion)),Zv(i,c);const f=new kr(d.target,c,u,d.sequenceNumber);od(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ae("RemoteStore","Failed to raise snapshot:",r),await fl(t,r)}}async function fl(t,e,n){if(!bi(e))throw e;t.k_.add(1),await Go(t),t.K_.set("Offline"),n||(n=()=>Yv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ae("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await ec(t)})}function tE(t,e){return e().catch(n=>fl(t,n,e))}async function tc(t){const e=ve(t),n=Wr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;gN(e);)try{const s=await Z1(e.localStore,r);if(s===null){e.L_.length===0&&n.a_();break}r=s.batchId,_N(e,s)}catch(s){await fl(e,s)}nE(e)&&rE(e)}function gN(t){return Cs(t)&&t.L_.length<10}function _N(t,e){t.L_.push(e);const n=Wr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function nE(t){return Cs(t)&&!Wr(t).i_()&&t.L_.length>0}function rE(t){Wr(t).start()}async function yN(t){Wr(t).w_()}async function vN(t){const e=Wr(t);for(const n of t.L_)e.g_(n.mutations)}async function EN(t,e,n){const r=t.L_.shift(),s=Zh.from(r,e,n);await tE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await tc(t)}async function TN(t,e){e&&Wr(t).f_&&await async function(r,s){if(function(o){return o1(o)&&o!==J.ABORTED}(s.code)){const i=r.L_.shift();Wr(r).__(),await tE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await tc(r)}}(t,e),nE(t)&&rE(t)}async function eg(t,e){const n=ve(t);n.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const r=Cs(n);n.k_.add(3),await Go(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await ec(n)}async function IN(t,e){const n=ve(t);e?(n.k_.delete(2),await ec(n)):e||(n.k_.add(2),await Go(n),n.K_.set("Unknown"))}function wi(t){return t.W_||(t.W_=function(n,r,s){const i=ve(n);return i.b_(),new aN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:dN.bind(null,t),mo:fN.bind(null,t),po:pN.bind(null,t),R_:mN.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),ld(t)?ad(t):t.K_.set("Unknown")):(await t.W_.stop(),eE(t))})),t.W_}function Wr(t){return t.G_||(t.G_=function(n,r,s){const i=ve(n);return i.b_(),new lN(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:yN.bind(null,t),po:TN.bind(null,t),p_:vN.bind(null,t),y_:EN.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await tc(t)):(await t.G_.stop(),t.L_.length>0&&(ae("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
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
 */class cd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new cd(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce(J.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ud(t,e){if(hr("AsyncQueue",`${e}: ${t}`),bi(t))return new ce(J.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ri{static emptySet(e){return new ri(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||de.comparator(n.key,r.key):(n,r)=>de.comparator(n.key,r.key),this.keyedMap=Ki(),this.sortedSet=new at(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ri)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ri;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class tg{constructor(){this.z_=new at(de.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):ge():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class mi{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new mi(e,n,ri.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class bN{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class wN{constructor(){this.queries=ng(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=ve(n),i=s.queries;s.queries=ng(),i.forEach((o,a)=>{for(const c of a.J_)c.onError(r)})})(this,new ce(J.ABORTED,"Firestore shutting down"))}}function ng(){return new Ps(t=>Av(t),zl)}async function sE(t,e){const n=ve(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new bN,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=ud(o,`Initialization of query '${Ws(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&hd(n)}async function iE(t,e){const n=ve(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function AN(t,e){const n=ve(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.J_)a.ta(s)&&(r=!0);o.H_=s}}r&&hd(n)}function RN(t,e,n){const r=ve(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function hd(t){t.X_.forEach(e=>{e.next()})}var Yu,rg;(rg=Yu||(Yu={})).na="default",rg.Cache="cache";class oE{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new mi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Yu.Cache}}/**
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
 */class aE{constructor(e){this.key=e}}class lE{constructor(e){this.key=e}}class SN{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Se(),this.mutatedKeys=Se(),this.Va=Rv(e),this.ma=new ri(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new tg,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,f)=>{const m=s.get(d),g=Yl(this.query,f)?f:null,R=!!m&&this.mutatedKeys.has(m.key),L=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;m&&g?m.data.isEqual(g.data)?R!==L&&(r.track({type:3,doc:g}),k=!0):this.ya(m,g)||(r.track({type:2,doc:g}),k=!0,(c&&this.Va(g,c)>0||u&&this.Va(g,u)<0)&&(a=!0)):!m&&g?(r.track({type:0,doc:g}),k=!0):m&&!g&&(r.track({type:1,doc:m}),k=!0,(c||u)&&(a=!0)),k&&(g?(o=o.add(g),i=L?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:a,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,f)=>function(g,R){const L=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ge()}};return L(g)-L(R)}(d.type,f.type)||this.Va(d.doc,f.doc)),this.wa(r),s=s!=null&&s;const a=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new mi(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new tg,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Se(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new lE(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new aE(r))}),n}va(e){this.da=e.ds,this.Ra=Se();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return mi.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class PN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class CN{constructor(e){this.key=e,this.Fa=!1}}class kN{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Ps(a=>Av(a),zl),this.Oa=new Map,this.Na=new Set,this.La=new at(de.comparator),this.Ba=new Map,this.ka=new nd,this.qa={},this.Qa=new Map,this.Ka=pi.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function NN(t,e,n=!0){const r=pE(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await cE(r,e,n,!0),s}async function ON(t,e){const n=pE(t);await cE(n,e,!0,!1)}async function cE(t,e,n,r){const s=await eN(t.localStore,Un(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await LN(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Jv(t.remoteStore,s),a}async function LN(t,e,n,r,s){t.Ua=(f,m,g)=>async function(L,k,F,H){let P=k.view.ga(F);P.ss&&(P=await Xm(L.localStore,k.query,!1).then(({documents:I})=>k.view.ga(I,P)));const C=H&&H.targetChanges.get(k.targetId),j=H&&H.targetMismatches.get(k.targetId)!=null,U=k.view.applyChanges(P,L.isPrimaryClient,C,j);return ig(L,k.targetId,U.ba),U.snapshot}(t,f,m,g);const i=await Xm(t.localStore,e,!0),o=new SN(e,i.ds),a=o.ga(i.documents),c=qo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);ig(t,n,u.ba);const d=new PN(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function DN(t,e,n){const r=ve(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(o=>!zl(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await zu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&id(r.remoteStore,s.targetId),Qu(r,s.targetId)}).catch(Ii)):(Qu(r,s.targetId),await zu(r.localStore,s.targetId,!0))}async function xN(t,e){const n=ve(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),id(n.remoteStore,r.targetId))}async function MN(t,e,n){const r=HN(t);try{const s=await function(o,a){const c=ve(o),u=Tt.now(),d=a.reduce((g,R)=>g.add(R.key),Se());let f,m;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let R=dr(),L=Se();return c.hs.getEntries(g,d).next(k=>{R=k,R.forEach((F,H)=>{H.isValidDocument()||(L=L.add(F))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,R)).next(k=>{f=k;const F=[];for(const H of a){const P=t1(H,f.get(H.key).overlayedDocument);P!=null&&F.push(new es(H.key,P,yv(P.value.mapValue),mn.exists(!0)))}return c.mutationQueue.addMutationBatch(g,u,F,a)}).next(k=>{m=k;const F=k.applyToLocalDocumentSet(f,L);return c.documentOverlayCache.saveOverlays(g,k.batchId,F)})}).then(()=>({batchId:m.batchId,changes:Pv(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let u=o.qa[o.currentUser.toKey()];u||(u=new at(Pe)),u=u.insert(a,c),o.qa[o.currentUser.toKey()]=u}(r,s.batchId,n),await Ko(r,s.changes),await tc(r.remoteStore)}catch(s){const i=ud(s,"Failed to persist write");n.reject(i)}}async function uE(t,e){const n=ve(t);try{const r=await X1(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ba.get(i);o&&($e(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?$e(o.Fa):s.removedDocuments.size>0&&($e(o.Fa),o.Fa=!1))}),await Ko(n,r,e)}catch(r){await Ii(r)}}function sg(t,e,n){const r=ve(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,o)=>{const a=o.view.ea(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=ve(o);c.onlineState=a;let u=!1;c.queries.forEach((d,f)=>{for(const m of f.J_)m.ea(a)&&(u=!0)}),u&&hd(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function VN(t,e,n){const r=ve(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let o=new at(de.comparator);o=o.insert(i,Ht.newNoDocument(i,_e.min()));const a=Se().add(i),c=new Jl(_e.min(),new Map,new at(Pe),o,a);await uE(r,c),r.La=r.La.remove(i),r.Ba.delete(e),dd(r)}else await zu(r.localStore,e,!1).then(()=>Qu(r,e,n)).catch(Ii)}async function FN(t,e){const n=ve(t),r=e.batch.batchId;try{const s=await Q1(n.localStore,e);dE(n,r,null),hE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ko(n,s)}catch(s){await Ii(s)}}async function UN(t,e,n){const r=ve(t);try{const s=await function(o,a){const c=ve(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>($e(f!==null),d=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(r.localStore,e);dE(r,e,n),hE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ko(r,s)}catch(s){await Ii(s)}}function hE(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function dE(t,e,n){const r=ve(t);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function Qu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||fE(t,r)})}function fE(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(id(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),dd(t))}function ig(t,e,n){for(const r of n)r instanceof aE?(t.ka.addReference(r.key,e),$N(t,r)):r instanceof lE?(ae("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||fE(t,r.key)):ge()}function $N(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(ae("SyncEngine","New document in limbo: "+n),t.Na.add(r),dd(t))}function dd(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new de(nt.fromString(e)),r=t.Ka.next();t.Ba.set(r,new CN(n)),t.La=t.La.insert(n,r),Jv(t.remoteStore,new kr(Un(Kl(n.path)),r,"TargetPurposeLimboResolution",Hl.oe))}}async function Ko(t,e,n){const r=ve(t),s=[],i=[],o=[];r.xa.isEmpty()||(r.xa.forEach((a,c)=>{o.push(r.Ua(c,e,n).then(u=>{var d;if((u||n)&&r.isPrimaryClient){const f=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){s.push(u);const f=sd.zi(c.targetId,u);i.push(f)}}))}),await Promise.all(o),r.Ma.R_(s),await async function(c,u){const d=ve(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>K.forEach(u,m=>K.forEach(m.Wi,g=>d.persistence.referenceDelegate.addReference(f,m.targetId,g)).next(()=>K.forEach(m.Gi,g=>d.persistence.referenceDelegate.removeReference(f,m.targetId,g)))))}catch(f){if(!bi(f))throw f;ae("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const g=d.us.get(m),R=g.snapshotVersion,L=g.withLastLimboFreeSnapshotVersion(R);d.us=d.us.insert(m,L)}}}(r.localStore,i))}async function BN(t,e){const n=ve(t);if(!n.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const r=await zv(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(a=>{a.forEach(c=>{c.reject(new ce(J.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ko(n,r.Ts)}}function jN(t,e){const n=ve(t),r=n.Ba.get(e);if(r&&r.Fa)return Se().add(r.key);{let s=Se();const i=n.Oa.get(e);if(!i)return s;for(const o of i){const a=n.xa.get(o);s=s.unionWith(a.view.fa)}return s}}function pE(t){const e=ve(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=uE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VN.bind(null,e),e.Ma.R_=AN.bind(null,e.eventManager),e.Ma.Wa=RN.bind(null,e.eventManager),e}function HN(t){const e=ve(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=UN.bind(null,e),e}class pl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zl(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return Y1(this.persistence,new K1,e.initialUser,this.serializer)}ja(e){return new Kv(rd.ei,this.serializer)}za(e){return new nN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pl.provider={build:()=>new pl};class WN extends pl{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){$e(this.persistence.referenceDelegate instanceof dl);const r=this.persistence.referenceDelegate.garbageCollector;return new O1(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new Kv(r=>dl.ei(r,n),this.serializer)}}class Xu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>sg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=BN.bind(null,this.syncEngine),await IN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new wN}()}createDatastore(e){const n=Zl(e.databaseInfo.databaseId),r=function(i){return new oN(i)}(e.databaseInfo);return function(i,o,a,c){return new cN(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new hN(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>sg(this.syncEngine,n,0),function(){return Zm.p()?new Zm:new rN}())}createSyncEngine(e,n){return function(s,i,o,a,c,u,d){const f=new kN(s,i,o,a,c,u);return d&&(f.$a=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ve(s);ae("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Go(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Xu.provider={build:()=>new Xu};/**
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
 */class mE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):hr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class qN{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ut.UNAUTHENTICATED,this.clientId=mv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{ae("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ae("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ud(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function eu(t,e){t.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await zv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function og(t,e){t.asyncQueue.verifyOperationInProgress();const n=await GN(t);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>eg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>eg(e.remoteStore,s)),t._onlineComponents=e}async function GN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await eu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===J.FAILED_PRECONDITION||s.code===J.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ui("Error using user provided cache. Falling back to memory cache: "+n),await eu(t,new pl)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await eu(t,new WN(void 0));return t._offlineComponents}async function gE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await og(t,t._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await og(t,new Xu))),t._onlineComponents}function KN(t){return gE(t).then(e=>e.syncEngine)}async function Ju(t){const e=await gE(t),n=e.eventManager;return n.onListen=NN.bind(null,e.syncEngine),n.onUnlisten=DN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ON.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=xN.bind(null,e.syncEngine),n}function zN(t,e,n={}){const r=new xr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const d=new mE({next:m=>{d.eu(),o.enqueueAndForget(()=>iE(i,f));const g=m.docs.has(a);!g&&m.fromCache?u.reject(new ce(J.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&c&&c.source==="server"?u.reject(new ce(J.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new oE(Kl(a.path),d,{includeMetadataChanges:!0,ua:!0});return sE(i,f)}(await Ju(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function _E(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const ag=new Map;/**
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
 */function yE(t,e,n){if(!n)throw new ce(J.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YN(t,e,n,r){if(e===!0&&r===!0)throw new ce(J.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function lg(t){if(!de.isDocumentKey(t))throw new ce(J.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cg(t){if(de.isDocumentKey(t))throw new ce(J.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function fd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge()}function gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce(J.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fd(t);throw new ce(J.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class ug{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce(J.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ce(J.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}YN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_E((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ce(J.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ce(J.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ce(J.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ug({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce(J.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce(J.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ug(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ak;switch(r.type){case"firstParty":return new hk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce(J.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ag.get(n);r&&(ae("ComponentProvider","Removing Datastore"),ag.delete(n),r.terminate())}(this),Promise.resolve()}}function QN(t,e,n,r={}){var s;const i=(t=gn(t,nc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ui("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=Ut.MOCK_USER;else{a=Ty(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new ce(J.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ut(u)}t._authCredentials=new lk(new pv(a,c))}}/**
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
 */class rc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rc(this.firestore,e,this._query)}}class Zt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zt(this.firestore,e,this._key)}}class Mr extends rc{constructor(e,n,r){super(e,n,Kl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zt(this.firestore,null,new de(e))}withConverter(e){return new Mr(this.firestore,e,this._path)}}function sc(t,e,...n){if(t=ot(t),yE("collection","path",e),t instanceof nc){const r=nt.fromString(e,...n);return cg(r),new Mr(t,null,r)}{if(!(t instanceof Zt||t instanceof Mr))throw new ce(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(nt.fromString(e,...n));return cg(r),new Mr(t.firestore,null,r)}}function gi(t,e,...n){if(t=ot(t),arguments.length===1&&(e=mv.newId()),yE("doc","path",e),t instanceof nc){const r=nt.fromString(e,...n);return lg(r),new Zt(t,null,new de(r))}{if(!(t instanceof Zt||t instanceof Mr))throw new ce(J.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(nt.fromString(e,...n));return lg(r),new Zt(t.firestore,t instanceof Mr?t.converter:null,new de(r))}}/**
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
 */class hg{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Qv(this,"async_queue_retry"),this.fu=()=>{const r=Zc();r&&ae("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Zc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new xr;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!bi(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw hr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=cd.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&ge()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}function dg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class qr extends nc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new hg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hg(e),this._firestoreClient=void 0,await e}}}function XN(t,e){const n=typeof t=="object"?t:Mh(),r=typeof t=="string"?t:"(default)",s=Ul(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=yy("firestore");i&&QN(s,...i)}return s}function pd(t){if(t._terminated)throw new ce(J.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||JN(t),t._firestoreClient}function JN(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,u,d){return new Rk(a,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,_E(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new qN(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class _i{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _i(Dt.fromBase64String(e))}catch(n){throw new ce(J.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _i(Dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ic{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce(J.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class md{constructor(e){this._methodName=e}}/**
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
 */class gd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce(J.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce(J.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
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
 */class _d{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const ZN=/^__.*__$/;class eO{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new es(e,this.data,this.fieldMask,n,this.fieldTransforms):new Wo(e,this.data,n,this.fieldTransforms)}}class vE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new es(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function EE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge()}}class yd{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new yd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return ml(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(EE(this.Mu)&&ZN.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class tO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Zl(e)}$u(e,n,r,s=!1){return new yd({Mu:e,methodName:n,Ku:r,path:Ot.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vd(t){const e=t._freezeSettings(),n=Zl(t._databaseId);return new tO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function TE(t,e,n,r,s,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,s);Ed("Data must be an object, but it was:",o,r);const a=IE(r,o);let c,u;if(i.merge)c=new cn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const f of i.mergeFields){const m=Zu(e,f,n);if(!o.contains(m))throw new ce(J.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);wE(d,m)||d.push(m)}c=new cn(d),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new eO(new rn(a),c,u)}class oc extends md{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof oc}}function nO(t,e,n,r){const s=t.$u(1,e,n);Ed("Data must be an object, but it was:",s,r);const i=[],o=rn.empty();Zr(r,(c,u)=>{const d=Td(e,c,n);u=ot(u);const f=s.Bu(d);if(u instanceof oc)i.push(d);else{const m=ac(u,f);m!=null&&(i.push(d),o.set(d,m))}});const a=new cn(i);return new vE(o,a,s.fieldTransforms)}function rO(t,e,n,r,s,i){const o=t.$u(1,e,n),a=[Zu(e,r,n)],c=[s];if(i.length%2!=0)throw new ce(J.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(Zu(e,i[m])),c.push(i[m+1]);const u=[],d=rn.empty();for(let m=a.length-1;m>=0;--m)if(!wE(u,a[m])){const g=a[m];let R=c[m];R=ot(R);const L=o.Bu(g);if(R instanceof oc)u.push(g);else{const k=ac(R,L);k!=null&&(u.push(g),d.set(g,k))}}const f=new cn(u);return new vE(d,f,o.fieldTransforms)}function ac(t,e){if(bE(t=ot(t)))return Ed("Unsupported field value:",e,t),IE(t,e);if(t instanceof md)return function(r,s){if(!EE(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=ac(a,s.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ot(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Yk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Tt.fromDate(r);return{timestampValue:hl(s.serializer,i)}}if(r instanceof Tt){const i=new Tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hl(s.serializer,i)}}if(r instanceof gd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof _i)return{bytesValue:$v(s.serializer,r._byteString)};if(r instanceof Zt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:td(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof _d)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.qu("VectorValues must only contain numeric values.");return Xh(a.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${fd(r)}`)}(t,e)}function IE(t,e){const n={};return gv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Zr(t,(r,s)=>{const i=ac(s,e.Ou(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function bE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Tt||t instanceof gd||t instanceof _i||t instanceof Zt||t instanceof md||t instanceof _d)}function Ed(t,e,n){if(!bE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=fd(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function Zu(t,e,n){if((e=ot(e))instanceof ic)return e._internalPath;if(typeof e=="string")return Td(t,e);throw ml("Field path arguments must be of type string or ",t,!1,void 0,n)}const sO=new RegExp("[~\\*/\\[\\]]");function Td(t,e,n){if(e.search(sO)>=0)throw ml(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ic(...e.split("."))._internalPath}catch{throw ml(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ml(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ce(J.INVALID_ARGUMENT,a+t+c)}function wE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class AE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(RE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class iO extends AE{data(){return super.data()}}function RE(t,e){return typeof e=="string"?Td(t,e):e instanceof ic?e._internalPath:e._delegate._internalPath}/**
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
 */function oO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ce(J.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class aO{convertValue(e,n="none"){switch(Hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ht(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ge()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Zr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>ht(o.doubleValue));return new _d(i)}convertGeoPoint(e){return new gd(ht(e.latitude),ht(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ql(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(So(e));default:return null}}convertTimestamp(e){const n=Br(e);return new Tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=nt.fromString(e);$e(Gv(r));const s=new Po(r.get(1),r.get(3)),i=new de(r.popFirst(5));return s.isEqual(n)||hr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function SE(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Yi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class PE extends AE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Va(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(RE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Va extends PE{data(e={}){return super.data(e)}}class lO{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Yi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Va(this._firestore,this._userDataWriter,r.key,r,new Yi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ce(J.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Va(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Yi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Va(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Yi(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:cO(a.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ge()}}/**
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
 */function CE(t){t=gn(t,Zt);const e=gn(t.firestore,qr);return zN(pd(e),t._key).then(n=>NE(e,t,n))}class kE extends aO{constructor(e){super(),this.firestore=e}convertBytes(e){return new _i(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Zt(this.firestore,null,n)}}function uO(t,e,n){t=gn(t,Zt);const r=gn(t.firestore,qr),s=SE(t.converter,e);return lc(r,[TE(vd(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,mn.none())])}function hO(t,e,n,...r){t=gn(t,Zt);const s=gn(t.firestore,qr),i=vd(s);let o;return o=typeof(e=ot(e))=="string"||e instanceof ic?rO(i,"updateDoc",t._key,e,n,r):nO(i,"updateDoc",t._key,e),lc(s,[o.toMutation(t._key,mn.exists(!0))])}function dO(t){return lc(gn(t.firestore,qr),[new Jh(t._key,mn.none())])}function fO(t,e){const n=gn(t.firestore,qr),r=gi(t),s=SE(t.converter,e);return lc(n,[TE(vd(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,mn.exists(!1))]).then(()=>r)}function Id(t,...e){var n,r,s;t=ot(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||dg(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(dg(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(s=f.complete)===null||s===void 0?void 0:s.bind(f)}let c,u,d;if(t instanceof Zt)u=gn(t.firestore,qr),d=Kl(t._key.path),c={next:f=>{e[o]&&e[o](NE(u,t,f))},error:e[o+1],complete:e[o+2]};else{const f=gn(t,rc);u=gn(f.firestore,qr),d=f._query;const m=new kE(u);c={next:g=>{e[o]&&e[o](new lO(u,m,f,g))},error:e[o+1],complete:e[o+2]},oO(t._query)}return function(m,g,R,L){const k=new mE(L),F=new oE(g,k,R);return m.asyncQueue.enqueueAndForget(async()=>sE(await Ju(m),F)),()=>{k.eu(),m.asyncQueue.enqueueAndForget(async()=>iE(await Ju(m),F))}}(pd(u),d,a,c)}function lc(t,e){return function(r,s){const i=new xr;return r.asyncQueue.enqueueAndForget(async()=>MN(await KN(r),s,i)),i.promise}(pd(t),e)}function NE(t,e,n){const r=n.docs.get(e._key),s=new kE(t);return new PE(t,s,e._key,r,new Yi(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ti=s})(Rs),vs(new Ur("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new qr(new ck(r.getProvider("auth-internal")),new fk(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ce(J.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Po(u.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Mn(Pm,"4.7.5",e),Mn(Pm,"4.7.5","esm2017")})();var pO="firebase",mO="11.0.2";/**
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
 */Mn(pO,mO,"app");/**
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
 */const OE="firebasestorage.googleapis.com",LE="storageBucket",gO=2*60*1e3,_O=10*60*1e3,yO=1e3;/**
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
 */class lt extends Wn{constructor(e,n,r=0){super(tu(e),`Firebase Storage: ${n} (${tu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,lt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return tu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ze;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ze||(Ze={}));function tu(t){return"storage/"+t}function bd(){const t="An unknown error occurred, please check the error payload for server response.";return new lt(Ze.UNKNOWN,t)}function vO(t){return new lt(Ze.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function EO(t){return new lt(Ze.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function TO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new lt(Ze.UNAUTHENTICATED,t)}function IO(){return new lt(Ze.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function bO(t){return new lt(Ze.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function DE(){return new lt(Ze.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xE(){return new lt(Ze.CANCELED,"User canceled the upload/download.")}function wO(t){return new lt(Ze.INVALID_URL,"Invalid URL '"+t+"'.")}function AO(t){return new lt(Ze.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function RO(){return new lt(Ze.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+LE+"' property when initializing the app?")}function ME(){return new lt(Ze.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function SO(){return new lt(Ze.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function PO(){return new lt(Ze.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function CO(t){return new lt(Ze.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function eh(t){return new lt(Ze.INVALID_ARGUMENT,t)}function VE(){return new lt(Ze.APP_DELETED,"The Firebase app was deleted.")}function kO(t){return new lt(Ze.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function co(t,e){return new lt(Ze.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ji(t){throw new lt(Ze.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class un{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=un.makeFromUrl(e,n)}catch{return new un(e,"")}if(r.path==="")return r;throw AO(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function u(C){C.path_=decodeURIComponent(C.path)}const d="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${d}/b/${s}/o${m}`,"i"),R={bucket:1,path:3},L=n===OE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",F=new RegExp(`^https?://${L}/${s}/${k}`,"i"),P=[{regex:a,indices:c,postModify:i},{regex:g,indices:R,postModify:u},{regex:F,indices:{bucket:1,path:2},postModify:u}];for(let C=0;C<P.length;C++){const j=P[C],U=j.regex.exec(e);if(U){const I=U[j.indices.bucket];let _=U[j.indices.path];_||(_=""),r=new un(I,_),j.postModify(r);break}}if(r==null)throw wO(e);return r}}class NO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function OO(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function d(...k){u||(u=!0,e.apply(null,k))}function f(k){s=setTimeout(()=>{s=null,t(g,c())},k)}function m(){i&&clearTimeout(i)}function g(k,...F){if(u){m();return}if(k){m(),d.call(null,k,...F);return}if(c()||o){m(),d.call(null,k,...F);return}r<64&&(r*=2);let P;a===1?(a=2,P=0):P=(r+Math.random())*1e3,f(P)}let R=!1;function L(k){R||(R=!0,m(),!u&&(s!==null?(k||(a=2),clearTimeout(s),f(0)):k||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,L(!0)},n),L}function LO(t){t(!1)}/**
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
 */function DO(t){return t!==void 0}function xO(t){return typeof t=="function"}function MO(t){return typeof t=="object"&&!Array.isArray(t)}function cc(t){return typeof t=="string"||t instanceof String}function fg(t){return wd()&&t instanceof Blob}function wd(){return typeof Blob<"u"}function pg(t,e,n,r){if(r<e)throw eh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw eh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ai(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function FE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var _s;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(_s||(_s={}));/**
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
 */function UE(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class VO{constructor(e,n,r,s,i,o,a,c,u,d,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,R)=>{this.resolve_=g,this.reject_=R,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ta(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===_s.NO_ERROR,c=i.getStatus();if(!a||UE(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===_s.ABORT;r(!1,new Ta(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new Ta(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());DO(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=bd();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?VE():xE();o(c)}else{const c=DE();o(c)}};this.canceled_?n(!1,new Ta(!1,null,!0)):this.backoffId_=OO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&LO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ta{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function FO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function UO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function $O(t,e){e&&(t["X-Firebase-GMPID"]=e)}function BO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function jO(t,e,n,r,s,i,o=!0){const a=FE(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return $O(u,e),FO(u,n),UO(u,i),BO(u,r),new VO(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function HO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function WO(...t){const e=HO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(wd())return new Blob(t);throw new lt(Ze.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function qO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function GO(t){if(typeof atob>"u")throw CO("base-64");return atob(t)}/**
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
 */const On={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class nu{constructor(e,n){this.data=e,this.contentType=n||null}}function KO(t,e){switch(t){case On.RAW:return new nu($E(e));case On.BASE64:case On.BASE64URL:return new nu(BE(t,e));case On.DATA_URL:return new nu(YO(e),QO(e))}throw bd()}function $E(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function zO(t){let e;try{e=decodeURIComponent(t)}catch{throw co(On.DATA_URL,"Malformed data URL.")}return $E(e)}function BE(t,e){switch(t){case On.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw co(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case On.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw co(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=GO(e)}catch(s){throw s.message.includes("polyfill")?s:co(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class jE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw co(On.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=XO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function YO(t){const e=new jE(t);return e.base64?BE(On.BASE64,e.rest):zO(e.rest)}function QO(t){return new jE(t).contentType}function XO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Cr{constructor(e,n){let r=0,s="";fg(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(fg(this.data_)){const r=this.data_,s=qO(r,e,n);return s===null?null:new Cr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Cr(r,!0)}}static getBlob(...e){if(wd()){const n=e.map(r=>r instanceof Cr?r.data_:r);return new Cr(WO.apply(null,n))}else{const n=e.map(o=>cc(o)?KO(On.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Cr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function HE(t){let e;try{e=JSON.parse(t)}catch{return null}return MO(e)?e:null}/**
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
 */function JO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ZO(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function WE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function eL(t,e){return e}class zt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||eL}}let Ia=null;function tL(t){return!cc(t)||t.length<2?t:WE(t)}function qE(){if(Ia)return Ia;const t=[];t.push(new zt("bucket")),t.push(new zt("generation")),t.push(new zt("metageneration")),t.push(new zt("name","fullPath",!0));function e(i,o){return tL(o)}const n=new zt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new zt("size");return s.xform=r,t.push(s),t.push(new zt("timeCreated")),t.push(new zt("updated")),t.push(new zt("md5Hash",null,!0)),t.push(new zt("cacheControl",null,!0)),t.push(new zt("contentDisposition",null,!0)),t.push(new zt("contentEncoding",null,!0)),t.push(new zt("contentLanguage",null,!0)),t.push(new zt("contentType",null,!0)),t.push(new zt("metadata","customMetadata",!0)),Ia=t,Ia}function nL(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new un(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function rL(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return nL(r,t),r}function GE(t,e,n){const r=HE(e);return r===null?null:rL(t,r,n)}function sL(t,e,n,r){const s=HE(e);if(s===null||!cc(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=t.bucket,f=t.fullPath,m="/b/"+o(d)+"/o/"+o(f),g=Ai(m,n,r),R=FE({alt:"media",token:u});return g+R})[0]}function KE(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class ks{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function lr(t){if(!t)throw bd()}function Ad(t,e){function n(r,s){const i=GE(t,s,e);return lr(i!==null),i}return n}function iL(t,e){function n(r,s){const i=GE(t,s,e);return lr(i!==null),sL(i,s,t.host,t._protocol)}return n}function zo(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=IO():s=TO():n.getStatus()===402?s=EO(t.bucket):n.getStatus()===403?s=bO(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Rd(t){const e=zo(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=vO(t.path)),i.serverResponse=s.serverResponse,i}return n}function oL(t,e,n){const r=e.fullServerUrl(),s=Ai(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new ks(s,i,Ad(t,n),o);return a.errorHandler=Rd(e),a}function aL(t,e,n){const r=e.fullServerUrl(),s=Ai(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new ks(s,i,iL(t,n),o);return a.errorHandler=Rd(e),a}function lL(t,e){const n=e.fullServerUrl(),r=Ai(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(c,u){}const a=new ks(r,s,o,i);return a.successCodes=[200,204],a.errorHandler=Rd(e),a}function cL(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function zE(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=cL(null,e)),r}function uL(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let P="";for(let C=0;C<2;C++)P=P+Math.random().toString().slice(2);return P}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=zE(e,r,s),d=KE(u,n),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+c+"--",g=Cr.getBlob(f,r,m);if(g===null)throw ME();const R={name:u.fullPath},L=Ai(i,t.host,t._protocol),k="POST",F=t.maxUploadRetryTime,H=new ks(L,k,Ad(t,n),F);return H.urlParams=R,H.headers=o,H.body=g.uploadData(),H.errorHandler=zo(e),H}class gl{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function Sd(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{lr(!1)}return lr(!!n&&(e||["active"]).indexOf(n)!==-1),n}function hL(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=zE(e,r,s),a={name:o.fullPath},c=Ai(i,t.host,t._protocol),u="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=KE(o,n),m=t.maxUploadRetryTime;function g(L){Sd(L);let k;try{k=L.getResponseHeader("X-Goog-Upload-URL")}catch{lr(!1)}return lr(cc(k)),k}const R=new ks(c,u,g,m);return R.urlParams=a,R.headers=d,R.body=f,R.errorHandler=zo(e),R}function dL(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(u){const d=Sd(u,["active","final"]);let f=null;try{f=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{lr(!1)}f||lr(!1);const m=Number(f);return lr(!isNaN(m)),new gl(m,r.size(),d==="final")}const o="POST",a=t.maxUploadRetryTime,c=new ks(n,o,i,a);return c.headers=s,c.errorHandler=zo(e),c}const mg=256*1024;function fL(t,e,n,r,s,i,o,a){const c=new gl(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw SO();const u=c.total-c.current;let d=u;s>0&&(d=Math.min(d,s));const f=c.current,m=f+d;let g="";d===0?g="finalize":u===d?g="upload, finalize":g="upload";const R={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${c.current}`},L=r.slice(f,m);if(L===null)throw ME();function k(C,j){const U=Sd(C,["active","final"]),I=c.current+d,_=r.size();let y;return U==="final"?y=Ad(e,i)(C,j):y=null,new gl(I,_,U==="final",y)}const F="POST",H=e.maxUploadRetryTime,P=new ks(n,F,k,H);return P.headers=R,P.body=L.uploadData(),P.progressCallback=a||null,P.errorHandler=zo(t),P}const nn={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ru(t){switch(t){case"running":case"pausing":case"canceling":return nn.RUNNING;case"paused":return nn.PAUSED;case"success":return nn.SUCCESS;case"canceled":return nn.CANCELED;case"error":return nn.ERROR;default:return nn.ERROR}}/**
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
 */class pL{constructor(e,n,r){if(xO(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function Us(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class mL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=_s.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=_s.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=_s.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw ji("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ji("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ji("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ji("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ji("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class gL extends mL{initXhr(){this.xhr_.responseType="text"}}function ds(){return new gL}/**
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
 */class _L{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=qE(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(Ze.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(UE(s.status,[]))if(i)s=DE();else{this.sleepTime=Math.max(this.sleepTime*2,yO),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(Ze.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=hL(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,ds,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=dL(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,ds,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=mg*this._chunkMultiplier,n=new gl(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=fL(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(c){this._error=c,this._transition("error");return}const a=this._ref.storage._makeRequest(o,ds,s,i,!1);this._request=a,a.getPromise().then(c=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(c.current),c.finalized?(this._metadata=c.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){mg*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=oL(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,ds,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=uL(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,ds,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=xE(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ru(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new pL(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ru(this._state)){case nn.SUCCESS:Us(this._resolve.bind(null,this.snapshot))();break;case nn.CANCELED:case nn.ERROR:const n=this._reject;Us(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ru(this._state)){case nn.RUNNING:case nn.PAUSED:e.next&&Us(e.next.bind(e,this.snapshot))();break;case nn.SUCCESS:e.complete&&Us(e.complete.bind(e))();break;case nn.CANCELED:case nn.ERROR:e.error&&Us(e.error.bind(e,this._error))();break;default:e.error&&Us(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class bs{constructor(e,n){this._service=e,n instanceof un?this._location=n:this._location=un.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new bs(e,n)}get root(){const e=new un(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return WE(this._location.path)}get storage(){return this._service}get parent(){const e=JO(this._location.path);if(e===null)return null;const n=new un(this._location.bucket,e);return new bs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw kO(e)}}function yL(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new _L(t,new Cr(e),n)}function vL(t){t._throwIfRoot("getDownloadURL");const e=aL(t.storage,t._location,qE());return t.storage.makeRequestWithTokens(e,ds).then(n=>{if(n===null)throw PO();return n})}function EL(t){t._throwIfRoot("deleteObject");const e=lL(t.storage,t._location);return t.storage.makeRequestWithTokens(e,ds)}function TL(t,e){const n=ZO(t._location.path,e),r=new un(t._location.bucket,n);return new bs(t.storage,r)}/**
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
 */function IL(t){return/^[A-Za-z]+:\/\//.test(t)}function bL(t,e){return new bs(t,e)}function YE(t,e){if(t instanceof Pd){const n=t;if(n._bucket==null)throw RO();const r=new bs(n,n._bucket);return e!=null?YE(r,e):r}else return e!==void 0?TL(t,e):t}function wL(t,e){if(e&&IL(e)){if(t instanceof Pd)return bL(t,e);throw eh("To use ref(service, url), the first argument must be a Storage instance.")}else return YE(t,e)}function gg(t,e){const n=e==null?void 0:e[LE];return n==null?null:un.makeFromBucketSpec(n,t)}function AL(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Ty(s,t.app.options.projectId))}class Pd{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=OE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gO,this._maxUploadRetryTime=_O,this._requests=new Set,s!=null?this._bucket=un.makeFromBucketSpec(s,this._host):this._bucket=gg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=un.makeFromBucketSpec(this._url,e):this._bucket=gg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){pg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){pg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new bs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new NO(VE());{const o=jO(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const _g="@firebase/storage",yg="0.13.4";/**
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
 */const QE="storage";function RL(t,e,n){return t=ot(t),yL(t,e,n)}function SL(t){return t=ot(t),vL(t)}function PL(t){return t=ot(t),EL(t)}function th(t,e){return t=ot(t),wL(t,e)}function CL(t=Mh(),e){t=ot(t);const r=Ul(t,QE).getImmediate({identifier:e}),s=yy("storage");return s&&kL(r,...s),r}function kL(t,e,n,r={}){AL(t,e,n,r)}function NL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Pd(n,r,s,e,Rs)}function OL(){vs(new Ur(QE,NL,"PUBLIC").setMultipleInstances(!0)),Mn(_g,yg,""),Mn(_g,yg,"esm2017")}OL();const LL={apiKey:"AIzaSyCaDdwjnRGUG4_YmPY7rRhZFw4Y-5Mmq68",authDomain:"persian-library.firebaseapp.com",projectId:"persian-library",storageBucket:"persian-library.firebasestorage.app",messagingSenderId:"374242993168",appId:"1:374242993168:web:1a71b65d1b43e6406bd695"},Cd=wy(LL),Fa=ik(Cd),fr=XN(Cd),nh=CL(Cd);function XE(){const t=Ve(null),e=Ve(!0),n=async(o,a)=>{await uO(gi(fr,"users",o),{...a,role:"user",createdAt:new Date,updatedAt:new Date})};return{currentUser:t,loading:e,signUp:async(o,a,c)=>{const u=await HP(Fa,o,a);await n(u.user.uid,{email:o,name:c,role:"user"})},signIn:async(o,a)=>{const c=await WP(Fa,o,a),u=await CE(gi(fr,"users",c.user.uid));return u.exists()||await n(c.user.uid,{email:o,name:o.split("@")[0],role:"user"}),u.data()},signOut:()=>zP(Fa)}}const uc=mR("auth",()=>{const t=Ve(null),{signIn:e,signOut:n}=XE();return{user:t,signIn:async(c,u)=>{const d=await e(c,u);t.value=d},signOut:async()=>{await n(),t.value=null},isAuthenticated:()=>!!t.value,isAdmin:()=>{var c;return((c=t.value)==null?void 0:c.role)==="admin"},isUser:()=>{var c;return((c=t.value)==null?void 0:c.role)==="user"}}}),DL={class:"font-[Vazir]"},xL={class:"bg-white shadow-sm"},ML={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"},VL={class:"flex justify-between items-center"},FL={key:1,class:"flex justify-center items-center min-h-screen"},UL={__name:"App",setup(t){const{locale:e}=Rn(),n=Ve(e.value),r=uc(),s=Ol();yi(()=>{KP(Fa,async a=>{if(a){const c=await CE(gi(fr,"users",a.uid));c.exists()&&(r.user={id:a.uid,...c.data()})}else r.user=null;r.loading=!1})});const i=()=>{e.value=n.value,localStorage.setItem("userLocale",n.value),document.documentElement.dir=n.value==="fa"?"rtl":"ltr"};document.documentElement.dir=n.value==="fa"?"rtl":"ltr";const o=async()=>{try{await r.signOut(),s.push("/")}catch(a){console.error("Logout error:",a)}};return(a,c)=>{const u=qa("RouterLink"),d=qa("RouterView");return Ce(),Xe("div",DL,[$("nav",xL,[$("div",ML,[$("div",VL,[Le(" Language switcher "),$t($("select",{"onUpdate:modelValue":c[0]||(c[0]=f=>n.value=f),onChange:i,class:"rounded-md border-gray-300 text-black"},c[1]||(c[1]=[$("option",{value:"fa"},"فارسی",-1),$("option",{value:"en"},"English",-1)]),544),[[pu,n.value]]),it(u,{to:"/",class:"text-indigo-600 hover:text-indigo-800"},{default:Dn(()=>[or(ie(a.$t("routes.home")),1)]),_:1}),$("div",null,[be(r).isAuthenticated()&&be(r).isAdmin()?(Ce(),xn(u,{key:0,to:"/admin",class:"text-indigo-600 hover:text-indigo-800 mr-4"},{default:Dn(()=>[or(ie(a.$t("routes.adminDashboard")),1)]),_:1})):Le("v-if",!0),be(r).isAuthenticated()?(Ce(),Xe("button",{key:1,onClick:o,class:"text-red-600 hover:text-red-800"},ie(a.$t("routes.logout")),1)):(Ce(),xn(u,{key:2,to:"/login",class:"text-indigo-600 hover:text-indigo-800"},{default:Dn(()=>[or(ie(a.$t("routes.login")),1)]),_:1}))])])])]),be(r).loading?(Ce(),Xe("div",FL,ie(a.$t("app.loading")),1)):(Ce(),xn(d,{key:0}))])}}},$L={class:"bg-gray-50 border-t border-gray-200 mt-auto"},BL={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},jL={class:"md:flex md:justify-between"},HL={class:"mb-4 md:mb-0"},WL={class:"text-sm font-semibold text-gray-700"},qL={class:"mt-2 text-sm text-gray-500"},GL={class:"max-w-md"},KL={class:"text-sm font-semibold text-gray-700"},zL={class:"mt-2 text-sm text-gray-500"},YL={class:"mt-2 text-sm text-gray-500"},QL={class:"mt-2 text-sm text-gray-500"},XL={class:"mt-8 border-t border-gray-200 pt-4"},JL={class:"text-xs text-gray-500 text-center"},ZL={__name:"BaseFooter",setup(t){return Rn(),(e,n)=>(Ce(),Xe("footer",$L,[$("div",BL,[$("div",jL,[Le(" Project Info "),$("div",HL,[$("h3",WL,ie(e.$t("footer.title")),1),$("p",qL,ie(e.$t("footer.description")),1)]),Le(" Privacy Info "),$("div",GL,[$("h3",KL,ie(e.$t("footer.dataPrivacy.title")),1),$("p",zL,ie(e.$t("footer.dataPrivacy.storage")),1),$("p",YL,ie(e.$t("footer.dataPrivacy.firebase")),1),$("p",QL,ie(e.$t("footer.dataPrivacy.fairUse")),1)])]),Le(" Copyright "),$("div",XL,[$("p",JL,ie(e.$t("footer.copyright",{year:new Date().getFullYear()})),1)])])]))}},eD={class:"min-h-screen bg-gray-50 text-black"},tD={class:"max-w-7xl mx-auto"},hc={__name:"BaseLayout",setup(t){return(e,n)=>(Ce(),Xe(At,null,[$("div",eD,[$("div",tD,[CI(e.$slots,"default")])]),it(ZL)],64))}},nD={class:"bg-white p-4 rounded-lg shadow-sm mb-6"},rD={class:"flex flex-wrap gap-4"},sD={class:"flex-1 min-w-[200px]"},iD={class:"block text-sm font-medium text-gray-700 mb-2"},oD={value:"all"},aD={value:"available"},lD={value:"borrowed"},cD={class:"flex-1 min-w-[200px]"},uD={class:"block text-sm font-medium text-gray-700 mb-2"},hD={value:"all"},dD=["value"],fD={class:"flex flex-wrap gap-2 items-end flex-1 min-w-[200px]"},pD={__name:"QuickFilters",props:{books:{type:Array,required:!0}},emits:["update:filtered-books"],setup(t,{emit:e}){Rn();const n=t,r=e,s=Ve("all"),i=Ve("all"),o=Ve(!1),a=Ke(()=>{const m=new Set(n.books.map(g=>g.age).filter(Boolean));return Array.from(m).sort()}),c=()=>{let m=[...n.books];if(s.value!=="all"&&(m=m.filter(g=>s.value==="available"?g.isAvailable:!g.isAvailable)),i.value!=="all"&&(m=m.filter(g=>g.age===i.value)),o.value){const g=new Date;g.setDate(g.getDate()-30),m=m.filter(R=>{var k;const L=(k=R.createdAt)==null?void 0:k.toDate();return L&&L>g})}r("update:filtered-books",m)},u=()=>{c()},d=()=>{o.value=!o.value,c()},f=()=>{s.value="all",i.value="all",o.value=!1,c()};return ir(()=>n.books,()=>{c()},{deep:!0}),(m,g)=>(Ce(),Xe("div",nD,[$("div",rD,[Le(" Availability Filter "),$("div",sD,[$("label",iD,ie(m.$t("filters.availability")),1),$t($("select",{"onUpdate:modelValue":g[0]||(g[0]=R=>s.value=R),onChange:u,class:"w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},[$("option",oD,ie(m.$t("filters.all")),1),$("option",aD,ie(m.$t("filters.available")),1),$("option",lD,ie(m.$t("filters.borrowed")),1)],544),[[pu,s.value]])]),Le(" Age Group Filter "),$("div",cD,[$("label",uD,ie(m.$t("filters.ageGroup")),1),$t($("select",{"onUpdate:modelValue":g[1]||(g[1]=R=>i.value=R),onChange:u,class:"w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},[$("option",hD,ie(m.$t("filters.all")),1),(Ce(!0),Xe(At,null,Th(a.value,R=>(Ce(),Xe("option",{key:R,value:R},ie(R),9,dD))),128))],544),[[pu,i.value]])]),Le(" Quick Filter Buttons "),$("div",fD,[$("button",{onClick:d,class:As(["px-4 py-2 rounded-md text-sm font-medium",o.value?"bg-indigo-600 text-white":"bg-gray-100 text-gray-700 hover:bg-gray-200"])},ie(m.$t("filters.newArrivals")),3),Le(" Reset Filters Button "),$("button",{onClick:f,class:"px-4 py-2 rounded-md text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"},ie(m.$t("filters.reset")),1)])])]))}},mD={class:"bg-white shadow-sm"},gD={class:"max-w-7xl mx-auto py-4"},_D={class:"text-3xl font-bold text-gray-900 text-center"},yD={class:"max-w-7xl mx-auto py-4"},vD={class:"mb-4 bg-white px-4 py-4 rounded-lg"},ED={class:"relative"},TD=["placeholder"],ID={class:"mt-2 text-sm text-gray-600"},bD={key:0,class:"mb-4 p-4 bg-red-100 text-red-700 rounded-md"},wD={key:1,class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"},AD={class:"aspect-w-4 aspect-h-3 w-full"},RD=["src","alt"],SD={class:"p-4 flex flex-col flex-grow"},PD={class:"p-4 flex-grow"},CD={class:"text-lg font-semibold text-gray-900"},kD={class:"text-sm text-gray-600"},ND={key:0,class:"text-sm text-gray-600"},OD={key:1,class:"text-sm text-gray-600"},LD={key:2,class:"text-sm text-gray-600"},DD={class:"text-sm text-gray-600 mt-2"},xD={class:"mt-auto"},MD={class:"flex items-center justify-center"},VD=["onClick","disabled"],FD={key:2,class:"text-center py-10"},UD={class:"text-gray-500"},$D={__name:"HomePage",setup(t){const{t:e}=Rn(),n=Ol(),r=uc(),s=Ve([]),i=Ve(null),o=Ve(""),a=Ve([]),c=Ke(()=>{const f=o.value.toLowerCase().trim(),m=a.value.length>0?a.value:s.value;return f?m.filter(g=>Object.values(g).some(R=>typeof R=="string"?R.toLowerCase().includes(f):!1)):m}),u=f=>{a.value=f};yi(()=>{try{const f=Id(sc(fr,"books"),m=>{s.value=m.docs.map(g=>({id:g.id,...g.data()})),i.value=null},m=>{console.error("Firestore error:",m),i.value="Error loading books. Please try again later."});return()=>f()}catch(f){console.error("Error setting up listener:",f),i.value="Error connecting to database. Please try again later."}});const d=async f=>{if(!r.user){n.push("/login");return}try{const m=gi(fr,"books",f.id);await hO(m,{isAvailable:!1,borrowerId:r.user.id,borrowedAt:new Date})}catch(m){console.error("Error updating book:",m),alert(e("home.messages.failed"))}};return(f,m)=>(Ce(),xn(hc,null,{default:Dn(()=>[Le(" Header "),$("header",mD,[$("div",gD,[$("h1",_D,ie(f.$t("app.title")),1)])]),Le(" Main Content "),$("main",yD,[Le(" Search Input "),$("div",vD,[$("div",ED,[$t($("input",{type:"text","onUpdate:modelValue":m[0]||(m[0]=g=>o.value=g),placeholder:f.$t("home.searchPlaceholder"),class:"w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"},null,8,TD),[[an,o.value]]),m[1]||(m[1]=$("div",{class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[$("svg",{class:"h-5 w-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[$("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1))]),Le(" Search Results Count "),$("p",ID,ie(f.$t("home.booksCount",{filtered:c.value.length,total:s.value.length})),1)]),Le(" Quick Filters "),it(pD,{books:s.value,"onUpdate:filteredBooks":u},null,8,["books"]),Le(" Error message display "),i.value?(Ce(),Xe("div",bD,ie(i.value),1)):Le("v-if",!0),Le(" Book Gallery Grid "),i.value?Le("v-if",!0):(Ce(),Xe("div",wD,[(Ce(!0),Xe(At,null,Th(c.value,g=>(Ce(),Xe("div",{seLa:"",key:g.id,class:"bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg duration-300 hover:scale-105 transition-transform flex flex-col"},[Le(" Book Cover Image "),$("div",AD,[$("img",{src:g.coverImage,alt:g.title,class:"w-full h-full object-cover"},null,8,RD)]),Le(" Book Information "),$("div",SD,[$("div",PD,[Le(" Align text to right for Persian "),$("h3",CD,ie(g.title),1),$("p",kD,"نویسنده: "+ie(g.author),1),g.translator?(Ce(),Xe("p",ND,ie(f.$t("home.bookTranslatorLabel",{translator:g.translator})),1)):Le("v-if",!0),g.illustrator?(Ce(),Xe("p",OD,ie(f.$t("home.bookIllustratorLabel",{illustrator:g.illustrator})),1)):Le("v-if",!0),g.age?(Ce(),Xe("p",LD,ie(f.$t("home.bookAgeLabel",{age:g.age})),1)):Le("v-if",!0),$("p",DD,ie(g.description),1)]),Le(" Availability Status "),$("div",xD,[$("div",MD,[$("span",{class:As(["text-sm",g.isAvailable?"text-green-600":"text-red-600"])},ie(g.isAvailable?f.$t("home.status.available"):f.$t("home.status.currentlyBorrowed")),3)]),Le(" Borrow Button "),$("button",{onClick:R=>d(g),disabled:!g.isAvailable,class:"mt-3 w-full px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed text-white bg-indigo-600 hover:bg-indigo-700"},ie(g.isAvailable?f.$t("home.borrowBook"):f.$t("home.notAvailable")),9,VD)])])]))),128))])),Le(" No Results Message "),c.value.length===0&&!i.value?(Ce(),Xe("div",FD,[$("p",UD,ie(f.$t("home.noBooksFound")),1)])):Le("v-if",!0)])]),_:1}))}},BD={class:"bg-white shadow-sm"},jD={class:"max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8"},HD={class:"flex justify-between items-center"},WD={class:"text-3xl font-bold text-gray-900"},qD={__name:"AdminHeader",setup(t){return Rn(),(e,n)=>(Ce(),Xe("header",BD,[$("div",jD,[$("div",HD,[$("h1",WD,ie(e.$t("admin.title")),1)])])]))}};function GD(){const{t}=Rn(),e=Ve({title:"",author:"",translator:"",illustrator:"",age:"",description:"",coverImage:"",isAvailable:!0,owner:"",borrowerId:null}),n=Ve(0),r=["image/jpeg","image/png","image/webp"],s=async a=>{const c=a.target.files[0];if(c){if(!r.includes(c.type)){alert(t("admin.uploadImage.formatError")),a.target.value="";return}try{const u=c.name.split(".").pop(),d=`covers/${Date.now()}-${Math.random().toString(36).substring(2)}.${u}`,f=th(nh,d);RL(f,c).on("state_changed",g=>{n.value=Math.round(g.bytesTransferred/g.totalBytes*100)},g=>{console.error("Upload failed:",g),alert(t("admin.uploadImage.failed"))},async()=>{try{await new Promise(L=>setTimeout(L,2e3));const g=th(nh,`covers/resized_${d.split("/").pop()}`),R=await SL(g);e.value.coverImage=R,n.value=0}catch(g){console.error("Error getting resized image URL:",g),alert(t("admin.uploadImage.failed"))}})}catch(u){console.error("Error handling image upload:",u),alert(t("admin.uploadImage.failed"))}}},i=async()=>{try{await fO(sc(fr,"books"),{...e.value,isAvailable:!0,createdAt:new Date}),e.value={title:"",author:"",translator:"",illustrator:"",age:"",description:"",coverImage:"",isAvailable:!0,owner:"",borrowerId:null},alert(t("admin.addBook.messages.success"))}catch(a){console.error("Error adding book:",a),alert(t("admin.addBook.messages.failed"))}},o=Ke(()=>n.value>0&&n.value<100);return{newBook:e,uploadProgress:n,isUploading:o,handleImageUpload:s,handleSubmit:i}}function JE(){const t=Ve([]);return yi(()=>{const e=Id(sc(fr,"users"),n=>{t.value=n.docs.map(r=>({id:r.id,...r.data()}))});return()=>e()}),{users:t}}const KD={class:"bg-white rounded-lg shadow p-6 mb-8"},zD={class:"text-xl font-semibold mb-4"},YD={class:"grid grid-cols-1 md:grid-cols-2 gap-4"},QD={class:"block text-sm font-medium text-gray-700"},XD={class:"block text-sm font-medium text-gray-700"},JD=["placeholder"],ZD={class:"block text-sm font-medium text-gray-700"},ex={class:"block text-sm font-medium text-gray-700"},tx={class:"block text-sm font-medium text-gray-700"},nx={class:"block text-sm font-medium text-gray-700"},rx={class:"block text-sm font-medium text-gray-700"},sx={class:"mt-1 flex items-center space-x-4"},ix={key:0,class:"text-sm text-gray-500"},ox={key:1,class:"h-20 w-20"},ax=["src"],lx={class:"md:col-span-2"},cx={class:"block text-sm font-medium text-gray-700"},ux={class:"flex justify-end"},hx=["disabled"],dx={__name:"AddBookForm",setup(t){const{newBook:e,handleImageUpload:n,handleSubmit:r,uploadProgress:s,isUploading:i}=GD();return JE(),(o,a)=>(Ce(),Xe("div",KD,[$("h2",zD,ie(o.$t("admin.addBook.title")),1),$("form",{onSubmit:a[8]||(a[8]=Ah((...c)=>be(r)&&be(r)(...c),["prevent"])),class:"space-y-4"},[$("div",YD,[$("div",null,[$("label",QD,ie(o.$t("admin.addBook.form.title")),1),$t($("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>be(e).title=c),type:"text",required:"",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[an,be(e).title]])]),$("div",null,[$("label",XD,ie(o.$t("admin.addBook.form.owner")),1),$t($("input",{"onUpdate:modelValue":a[1]||(a[1]=c=>be(e).owner=c),type:"text",required:"",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",placeholder:o.$t("admin.addBook.form.ownerPlaceholder")},null,8,JD),[[an,be(e).owner]])]),$("div",null,[$("label",ZD,ie(o.$t("admin.addBook.form.author")),1),$t($("input",{"onUpdate:modelValue":a[2]||(a[2]=c=>be(e).author=c),type:"text",required:"",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[an,be(e).author]])]),$("div",null,[$("label",ex,ie(o.$t("admin.addBook.form.translator")),1),$t($("input",{"onUpdate:modelValue":a[3]||(a[3]=c=>be(e).translator=c),type:"text",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[an,be(e).translator]])]),$("div",null,[$("label",tx,ie(o.$t("admin.addBook.form.illustrator")),1),$t($("input",{"onUpdate:modelValue":a[4]||(a[4]=c=>be(e).illustrator=c),type:"text",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[an,be(e).illustrator]])]),$("div",null,[$("label",nx,ie(o.$t("admin.addBook.form.ageGroup")),1),$t($("input",{"onUpdate:modelValue":a[5]||(a[5]=c=>be(e).age=c),type:"text",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[an,be(e).age]])]),$("div",null,[$("label",rx,ie(o.$t("admin.addBook.form.coverImage")),1),$("div",sx,[$("input",{type:"file",accept:".jpg,.jpeg,.png,.webp",onChange:a[6]||(a[6]=(...c)=>be(n)&&be(n)(...c)),class:"block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"},null,32),be(s)>0&&be(s)<100?(Ce(),Xe("div",ix,ie(o.$t("admin.addBook.form.uploadProgress",{progress:be(s)})),1)):Le("v-if",!0),be(e).coverImage?(Ce(),Xe("div",ox,[$("img",{src:be(e).coverImage,alt:"Preview",class:"h-full w-full object-cover rounded-md"},null,8,ax)])):Le("v-if",!0)])]),$("div",lx,[$("label",cx,ie(o.$t("admin.addBook.form.description")),1),$t($("textarea",{"onUpdate:modelValue":a[7]||(a[7]=c=>be(e).description=c),rows:"3",class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,512),[[an,be(e).description]])])]),$("div",ux,[$("button",{type:"submit",disabled:be(i),class:As(["px-4 py-2 rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed",be(i)?"bg-gray-400":"bg-indigo-600 hover:bg-indigo-700"])},ie(be(i)?o.$t("admin.addBook.form.waitForUpload"):o.$t("admin.addBook.form.submit")),11,hx)])],32)]))}},fx={class:"bg-white rounded-lg shadow overflow-hidden"},px={class:"text-xl font-semibold p-6"},mx={class:"min-w-full divide-y divide-gray-200"},gx={class:"bg-gray-50"},_x={class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},yx={class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},vx={class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},Ex={class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},Tx={class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},Ix={class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"},bx={class:"bg-white divide-y divide-gray-200"},wx={class:"px-6 py-4"},Ax={class:"px-6 py-4"},Rx={class:"px-6 py-4"},Sx={class:"px-6 py-4"},Px={class:"px-6 py-4"},Cx={class:"px-6 py-4"},kx=["onClick"],Nx=["onClick"],Ox={__name:"BooksTable",props:{books:{type:Array,required:!0}},emits:["delete-book","edit-book"],setup(t){const e=t,{users:n}=JE();return Ke(()=>e.books.map(r=>({...r,owner:n.value.find(s=>s.id===r.ownerId),borrower:n.value.find(s=>s.id===r.borrowerId)}))),(r,s)=>(Ce(),Xe("div",fx,[$("h2",px,ie(r.$t("admin.manageBooks.title")),1),$("table",mx,[$("thead",gx,[$("tr",null,[$("th",_x,ie(r.$t("admin.manageBooks.table.title")),1),$("th",yx,ie(r.$t("admin.manageBooks.table.author")),1),$("th",vx,ie(r.$t("admin.manageBooks.table.owner")),1),$("th",Ex,ie(r.$t("admin.manageBooks.table.borrower")),1),$("th",Tx,ie(r.$t("admin.manageBooks.table.status")),1),$("th",Ix,ie(r.$t("admin.manageBooks.table.actions")),1)])]),$("tbody",bx,[(Ce(!0),Xe(At,null,Th(t.books,i=>(Ce(),Xe("tr",{key:i.id},[$("td",wx,ie(i.title),1),$("td",Ax,ie(i.author),1),$("td",Rx,ie(i.owner||"-"),1),$("td",Sx,ie(i.borrower||"-"),1),$("td",Px,[$("span",{class:As(i.isAvailable?"text-green-600":"text-red-600")},ie(i.isAvailable?r.$t("admin.manageBooks.table.available"):r.$t("admin.manageBooks.table.borrowed")),3)]),$("td",Cx,[$("button",{onClick:o=>r.deleteBook(i),class:"text-red-600 hover:text-red-800 mr-2"},ie(r.$t("admin.manageBooks.table.delete")),9,kx),s[0]||(s[0]=or(" - ")),$("button",{onClick:o=>r.editBook(i),class:"text-indigo-600 hover:text-indigo-800"},ie(r.$t("admin.manageBooks.table.edit")),9,Nx)])]))),128))])])]))}};function Lx(){const{t}=Rn();return{books:Ve([]),deleteBook:async s=>{if(confirm(t("admin.manageBooks.messages.confirmDelete")))try{if(s.coverImage){const i=th(nh,s.coverImage);await PL(i).catch(o=>{console.log("Error deleting image:",o)})}await dO(gi(fr,"books",s.id)),alert(t("admin.manageBooks.messages.success"))}catch(i){console.error("Error deleting book:",i),alert(t("admin.manageBooks.messages.failed"))}},editBook:s=>{console.log("Edit book:",s)}}}const Dx={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"},xx={__name:"AdminView",setup(t){const{books:e,deleteBook:n,editBook:r}=Lx();return yi(()=>{const s=Id(sc(fr,"books"),i=>{e.value=i.docs.map(o=>({id:o.id,...o.data()}))});return()=>s()}),(s,i)=>(Ce(),xn(hc,null,{default:Dn(()=>[it(qD),$("main",Dx,[it(dx),it(Ox,{books:be(e),onDeleteBook:be(n),onEditBook:be(r)},null,8,["books","onDeleteBook","onEditBook"])])]),_:1}))}},Mx={class:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"},Vx={class:"max-w-md w-full space-y-8"},Fx={class:"mt-6 text-center text-3xl font-extrabold text-gray-900"},Ux={class:"rounded-md shadow-sm -space-y-px"},$x={for:"email-address",class:"sr-only"},Bx=["placeholder"],jx={for:"password",class:"sr-only"},Hx=["placeholder"],Wx={type:"submit",class:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},qx={class:"text-center"},Gx={class:"text-sm text-gray-600"},Kx={key:0,class:"text-red-500 text-center mt-2"},zx={__name:"LoginView",setup(t){const{t:e}=Rn(),n=Ol(),r=uc(),s=Ve(""),i=Ve(""),o=Ve(""),a=async()=>{try{await r.signIn(s.value,i.value),r.isAdmin()?n.push("/admin"):n.push("/")}catch{o.value=e("errors.invalidEmailOrPassword")}};return(c,u)=>{const d=qa("RouterLink");return Ce(),xn(hc,null,{default:Dn(()=>[$("div",Mx,[$("div",Vx,[$("div",null,[$("h2",Fx,ie(c.$t("auth.login.title")),1)]),$("form",{class:"mt-8 space-y-6",onSubmit:Ah(a,["prevent"])},[$("div",Ux,[$("div",null,[$("label",$x,ie(c.$t("auth.login.emailLabel")),1),$t($("input",{"onUpdate:modelValue":u[0]||(u[0]=f=>s.value=f),id:"email-address",name:"email",type:"email",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:c.$t("auth.login.emailPlaceholder")},null,8,Bx),[[an,s.value]])]),$("div",null,[$("label",jx,ie(c.$t("auth.login.passwordLabel")),1),$t($("input",{"onUpdate:modelValue":u[1]||(u[1]=f=>i.value=f),id:"password",name:"password",type:"password",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:c.$t("auth.login.passwordPlaceholder")},null,8,Hx),[[an,i.value]])])]),$("div",null,[$("button",Wx,ie(c.$t("auth.login.signInButton")),1)])],32),$("div",qx,[$("p",Gx,[or(ie(c.$t("auth.login.noAccount"))+" ",1),it(d,{to:"/register",class:"font-medium text-indigo-600 hover:text-indigo-500"},{default:Dn(()=>[or(ie(c.$t("auth.login.registerLink")),1)]),_:1})])]),o.value?(Ce(),Xe("div",Kx,ie(o.value),1)):Le("v-if",!0)])])]),_:1})}}},Yx={class:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"},Qx={class:"max-w-md w-full space-y-8"},Xx={class:"mt-6 text-center text-3xl font-extrabold text-gray-900"},Jx={class:"rounded-md shadow-sm -space-y-px"},Zx=["placeholder"],eM=["placeholder"],tM=["placeholder"],nM={type:"submit",class:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},rM={class:"text-center"},sM={class:"text-sm text-gray-600"},iM={key:0,class:"text-red-500 text-center mt-2"},oM={__name:"RegisterView",setup(t){const e=Ol(),{signUp:n}=XE(),r=Ve(""),s=Ve(""),i=Ve(""),o=Ve(""),a=async()=>{try{await n(s.value,i.value,r.value),e.push("/login")}catch(c){o.value=c.message}};return(c,u)=>{const d=qa("RouterLink");return Ce(),xn(hc,null,{default:Dn(()=>[$("div",Yx,[$("div",Qx,[$("div",null,[$("h2",Xx,ie(c.$t("auth.register.title")),1)]),$("form",{class:"mt-8 space-y-6",onSubmit:Ah(a,["prevent"])},[$("div",Jx,[$("div",null,[$t($("input",{"onUpdate:modelValue":u[0]||(u[0]=f=>r.value=f),type:"text",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:c.$t("auth.register.namePlaceholder")},null,8,Zx),[[an,r.value]])]),$("div",null,[$t($("input",{"onUpdate:modelValue":u[1]||(u[1]=f=>s.value=f),type:"email",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:c.$t("auth.register.emailPlaceholder")},null,8,eM),[[an,s.value]])]),$("div",null,[$t($("input",{"onUpdate:modelValue":u[2]||(u[2]=f=>i.value=f),type:"password",required:"",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:c.$t("auth.register.passwordPlaceholder")},null,8,tM),[[an,i.value]])])]),$("div",null,[$("button",nM,ie(c.$t("auth.register.submitButton")),1)])],32),$("div",rM,[$("p",sM,[or(ie(c.$t("auth.register.haveAccount"))+" ",1),it(d,{to:"/login",class:"font-medium text-indigo-600 hover:text-indigo-500"},{default:Dn(()=>[or(ie(c.$t("auth.register.loginLink")),1)]),_:1})])]),o.value?(Ce(),Xe("div",iM,ie(o.value),1)):Le("v-if",!0)])])]),_:1})}}},aM=[{path:"/",name:"home",component:$D},{path:"/login",name:"login",component:zx},{path:"/register",name:"register",component:oM},{path:"/admin",name:"admin",component:xx,meta:{requiresAdmin:!0}}],ZE=Kw({history:Iw(),routes:aM});ZE.beforeEach((t,e,n)=>{const r=uc();t.meta.requiresAdmin&&!r.isAdmin()?n("/"):n()});const lM={availability:"Availability",all:"All",available:"Available",borrowed:"Borrowed",ageGroup:"Age Group",newArrivals:"New Arrivals",reset:"Reset Filters"},cM={title:"Persian Book Library",loading:"Loading..."},uM={status:{available:"Available",currentlyBorrowed:"Currently Borrowed"},messages:{failed:"Failed to borrow book. Please try again."},searchPlaceholder:"Search...",booksCount:"Showing {filtered} of {total} books",bookTranslatorLabel:"Translator: { translator }",bookIllustratorLabel:"Illustrator: { illustrator }",bookAgeLabel:"Age: { age }",borrowBook:"Borrow book",notAvailable:"Not Available",noBooksFound:"No books found matching your search.",enterYourNamePrompt:"Please enter your name:"},hM={home:"Home",adminDashboard:"Admin Dashboard",logout:"Logout",login:"Login"},dM={title:"Admin Dashboard",uploadImage:{formatError:"Please upload only JPG, PNG or WebP images.",fileSizeError:"File size must be less than 2MB.",failed:"Failed to upload image. Please try again."},addBook:{title:"Add New Book",form:{title:"Title",author:"Author",translator:"Translator",illustrator:"Illustrator",ageGroup:"Age Group",coverImage:"Cover Image",description:"Description",owner:"Owner",ownerPlaceholder:"Enter owner name",submit:"Add Book",uploadProgress:"Uploading: { progress } %",waitForUpload:"Please wait for the image upload to complete"},messages:{success:"Book added successfully!",failed:"Failed to add book. Please try again."}},manageBooks:{title:"Manage Books",messages:{confirmDelete:"Are you sure you want to delete this book?",success:"Book deleted successfully!",failed:"Failed to delete book. Please try again."},table:{title:"Title",author:"Author",status:"Status",actions:"Actions",available:"Available",borrowed:"Borrowed",owner:"Owner",borrower:"Borrowed By",delete:"Delete",edit:"Edit"}}},fM={login:{title:"Login",emailPlaceholder:"Email address",emailLabel:"Email address",passwordLabel:"Password",passwordPlaceholder:"Password",signInButton:"Sign in",noAccount:"Don't have an account?",registerLink:"Register here"},register:{title:"Create an account",haveAccount:"Already have an account?",loginLink:"Sign in",namePlaceholder:"Name",emailPlaceholder:"Email address",passwordPlaceholder:"Password",submitButton:"Register"}},pM={invalidEmailOrPassword:"Invalid email or password"},mM={title:"Persian Children's Library",description:"A digital platform dedicated to making Persian children's literature accessible to a private farsi group.",dataPrivacy:{title:"Data Privacy Information",storage:"Please note that all images and data are stored on servers located in the United States using Google Cloud Infrastructure.",firebase:"This application uses Firebase services for data storage, authentication, and hosting. By using this service, you agree to Google's data processing terms.",fairUse:"This application is only intented to be used from a private Farsi group, therefore no impressum and data-privacy information is needed."},copyright:"© {year} Persian Children's Library. All rights reserved."},gM={filters:lM,app:cM,home:uM,routes:hM,admin:dM,auth:fM,errors:pM,footer:mM},_M={availability:"وضعیت موجودی",all:"همه",available:"موجود",borrowed:"امانت داده شده",ageGroup:"رده سنی",newArrivals:"تازه‌های کتابخانه",reset:"حذف فیلترها"},yM={title:"کتابخانه فارسی",loading:"در حال بارگذاری..."},vM={messages:{failed:"امانت گرفتن کتاب با خطا مواجه شد. لطفا دوباره تلاش کنید."},status:{available:"موجود",currentlyBorrowed:"در حال امانت"},searchPlaceholder:"جستجو...",booksCount:"نمایش {filtered} از {total} کتاب",bookTranslatorLabel:"مترجم: {translator}",bookIllustratorLabel:"تصویرگر: {illustrator}",bookAgeLabel:"رده سنی: {age}",borrowBook:"امانت گرفتن کتاب",notAvailable:"در دسترس نیست",noBooksFound:"کتابی با این مشخصات یافت نشد.",enterYourNamePrompt:"لطفا نام خود را وارد کنید:"},EM={home:"صفحه اصلی",adminDashboard:"پنل مدیریت",logout:"خروج",login:"ورود"},TM={title:"پنل مدیریت",uploadImage:{formatError:"لطفا فقط تصاویر با فرمت JPG، PNG یا WebP آپلود کنید.",fileSizeError:"حجم فایل باید کمتر از ۲ مگابایت باشد.",failed:"آپلود تصویر با خطا مواجه شد. لطفا دوباره تلاش کنید."},addBook:{title:"افزودن کتاب جدید",form:{title:"عنوان",author:"نویسنده",translator:"مترجم",illustrator:"تصویرگر",ageGroup:"گروه سنی",coverImage:"تصویر جلد",description:"توضیحات",submit:"افزودن کتاب",owner:"صاحب کتاب",ownerPlaceholder:"نام صاحب کتاب را وارد کنید",waitForUpload:"لطفا تا پایان آپلود تصویر صبر کنید",uploadProgress:"در حال آپلود: {progress} درصد"},messages:{success:"کتاب با موفقیت اضافه شد!",failed:"افزودن کتاب با خطا مواجه شد. لطفا دوباره تلاش کنید."}},manageBooks:{title:"مدیریت کتاب‌ها",messages:{confirmDelete:"آیا از حذف این کتاب اطمینان دارید؟",success:"کتاب با موفقیت حذف شد!",failed:"حذف کتاب با خطا مواجه شد. لطفا دوباره تلاش کنید."},table:{title:"عنوان",author:"نویسنده",status:"وضعیت",actions:"عملیات",available:"موجود",borrowed:"امانت داده شده",owner:"صاحب کتاب",borrower:"امانت گیرنده",delete:"حذف",edit:"ویرایش"}}},IM={login:{title:"ورود به سیستم",emailPlaceholder:"آدرس ایمیل",emailLabel:"آدرس ایمیل",passwordLabel:"رمز عبور",passwordPlaceholder:"رمز عبور",signInButton:"ورود",noAccount:"حساب کاربری ندارید؟",registerLink:"ثبت نام کنید"},register:{title:"ایجاد حساب کاربری",haveAccount:"قبلاً حساب کاربری دارید؟",loginLink:"وارد شوید",namePlaceholder:"نام",emailPlaceholder:"آدرس ایمیل",passwordPlaceholder:"رمز عبور",submitButton:"ثبت نام"}},bM={invalidEmailOrPassword:"ایمیل یا رمز عبور نامعتبر است"},wM={title:"کتابخانه کودکان فارسی",description:"یک پلتفرم دیجیتال برای دسترسی همگانی به ادبیات کودکان فارسی",dataPrivacy:{fairUse:"این برنامه فقط برای استفاده یک گروه خصوصی فارسی زبان در نظر گرفته شده است، بنابراین نیازی به اطلاعات حقوقی و حریم خصوصی نیست.",title:"اطلاعات حریم خصوصی",storage:"لطفاً توجه داشته باشید که تمام تصاویر و داده‌ها در سرورهای مستقر در ایالات متحده با استفاده از زیرساخت Google Cloud ذخیره می‌شوند.",firebase:"این برنامه از خدمات Firebase برای ذخیره‌سازی داده‌ها، احراز هویت و میزبانی استفاده می‌کند. با استفاده از این سرویس، شما با شرایط پردازش داده Google موافقت می‌کنید."},copyright:"© {year} کتابخانه کودکان فارسی. کلیه حقوق محفوظ است."},AM={filters:_M,app:yM,home:vM,routes:EM,admin:TM,auth:IM,errors:bM,footer:wM},RM=localStorage.getItem("userLocale")||"fa",SM=XA({legacy:!1,locale:RM,fallbackLocale:"en",messages:{en:gM,fa:AM}});Hb(UL).use(SM).use(cR()).use(ZE).mount("#app");
