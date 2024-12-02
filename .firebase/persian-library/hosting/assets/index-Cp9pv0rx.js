(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ol(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ie={},br=[],Ot=()=>{},Cg=()=>!1,ao=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),al=n=>n.startsWith("onUpdate:"),We=Object.assign,ll=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Dg=Object.prototype.hasOwnProperty,ye=(n,e)=>Dg.call(n,e),se=Array.isArray,Rr=n=>lo(n)==="[object Map]",Wh=n=>lo(n)==="[object Set]",oe=n=>typeof n=="function",Ve=n=>typeof n=="string",On=n=>typeof n=="symbol",Se=n=>n!==null&&typeof n=="object",Kh=n=>(Se(n)||oe(n))&&oe(n.then)&&oe(n.catch),Gh=Object.prototype.toString,lo=n=>Gh.call(n),kg=n=>lo(n).slice(8,-1),Qh=n=>lo(n)==="[object Object]",cl=n=>Ve(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,_s=ol(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),co=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Vg=/-(\w)/g,Pn=co(n=>n.replace(Vg,(e,t)=>t?t.toUpperCase():"")),Ng=/\B([A-Z])/g,or=co(n=>n.replace(Ng,"-$1").toLowerCase()),Jh=co(n=>n.charAt(0).toUpperCase()+n.slice(1)),ta=co(n=>n?`on${Jh(n)}`:""),wn=(n,e)=>!Object.is(n,e),Ii=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Xh=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Ra=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let tu;const uo=()=>tu||(tu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ul(n){if(se(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Ve(r)?Lg(r):ul(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ve(n)||Se(n))return n}const Og=/;(?![^(]*\))/g,xg=/:([^]+)/,Mg=/\/\*[^]*?\*\//g;function Lg(n){const e={};return n.replace(Mg,"").split(Og).forEach(t=>{if(t){const r=t.split(xg);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ho(n){let e="";if(Ve(n))e=n;else if(se(n))for(let t=0;t<n.length;t++){const r=ho(n[t]);r&&(e+=r+" ")}else if(Se(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Fg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ug=ol(Fg);function Yh(n){return!!n||n===""}const Zh=n=>!!(n&&n.__v_isRef===!0),Et=n=>Ve(n)?n:n==null?"":se(n)||Se(n)&&(n.toString===Gh||!oe(n.toString))?Zh(n)?Et(n.value):JSON.stringify(n,ed,2):String(n),ed=(n,e)=>Zh(e)?ed(n,e.value):Rr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[na(r,i)+" =>"]=s,t),{})}:Wh(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>na(t))}:On(e)?na(e):Se(e)&&!se(e)&&!Qh(e)?String(e):e,na=(n,e="")=>{var t;return On(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gt;class Bg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=gt;try{return gt=this,e()}finally{gt=t}}}on(){gt=this}off(){gt=this.parent}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function jg(){return gt}let we;const ra=new WeakSet;class td{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,gt&&gt.active&&gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ra.has(this)&&(ra.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||rd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nu(this),sd(this);const e=we,t=St;we=this,St=!0;try{return this.fn()}finally{id(this),we=e,St=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fl(e);this.deps=this.depsTail=void 0,nu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ra.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Sa(this)&&this.run()}get dirty(){return Sa(this)}}let nd=0,ys,vs;function rd(n,e=!1){if(n.flags|=8,e){n.next=vs,vs=n;return}n.next=ys,ys=n}function hl(){nd++}function dl(){if(--nd>0)return;if(vs){let e=vs;for(vs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ys;){let e=ys;for(ys=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function sd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function id(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),fl(r),$g(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function Sa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(od(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function od(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ps))return;n.globalVersion=Ps;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Sa(n)){n.flags&=-3;return}const t=we,r=St;we=n,St=!0;try{sd(n);const s=n.fn(n._value);(e.version===0||wn(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{we=t,St=r,id(n),n.flags&=-3}}function fl(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)fl(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function $g(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let St=!0;const ad=[];function xn(){ad.push(St),St=!1}function Mn(){const n=ad.pop();St=n===void 0?!0:n}function nu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=we;we=void 0;try{e()}finally{we=t}}}let Ps=0;class qg{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!we||!St||we===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==we)t=this.activeLink=new qg(we,this),we.deps?(t.prevDep=we.depsTail,we.depsTail.nextDep=t,we.depsTail=t):we.deps=we.depsTail=t,ld(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=we.depsTail,t.nextDep=void 0,we.depsTail.nextDep=t,we.depsTail=t,we.deps===t&&(we.deps=r)}return t}trigger(e){this.version++,Ps++,this.notify(e)}notify(e){hl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{dl()}}}function ld(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ld(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Pa=new WeakMap,Xn=Symbol(""),Ca=Symbol(""),Cs=Symbol("");function et(n,e,t){if(St&&we){let r=Pa.get(n);r||Pa.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new pl),s.map=r,s.key=t),s.track()}}function Qt(n,e,t,r,s,i){const a=Pa.get(n);if(!a){Ps++;return}const l=c=>{c&&c.trigger()};if(hl(),e==="clear")a.forEach(l);else{const c=se(n),d=c&&cl(t);if(c&&t==="length"){const f=Number(r);a.forEach((g,E)=>{(E==="length"||E===Cs||!On(E)&&E>=f)&&l(g)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),d&&l(a.get(Cs)),e){case"add":c?d&&l(a.get("length")):(l(a.get(Xn)),Rr(n)&&l(a.get(Ca)));break;case"delete":c||(l(a.get(Xn)),Rr(n)&&l(a.get(Ca)));break;case"set":Rr(n)&&l(a.get(Xn));break}}dl()}function _r(n){const e=_e(n);return e===n?e:(et(e,"iterate",Cs),It(n)?e:e.map(tt))}function fo(n){return et(n=_e(n),"iterate",Cs),n}const zg={__proto__:null,[Symbol.iterator](){return sa(this,Symbol.iterator,tt)},concat(...n){return _r(this).concat(...n.map(e=>se(e)?_r(e):e))},entries(){return sa(this,"entries",n=>(n[1]=tt(n[1]),n))},every(n,e){return Kt(this,"every",n,e,void 0,arguments)},filter(n,e){return Kt(this,"filter",n,e,t=>t.map(tt),arguments)},find(n,e){return Kt(this,"find",n,e,tt,arguments)},findIndex(n,e){return Kt(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Kt(this,"findLast",n,e,tt,arguments)},findLastIndex(n,e){return Kt(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Kt(this,"forEach",n,e,void 0,arguments)},includes(...n){return ia(this,"includes",n)},indexOf(...n){return ia(this,"indexOf",n)},join(n){return _r(this).join(n)},lastIndexOf(...n){return ia(this,"lastIndexOf",n)},map(n,e){return Kt(this,"map",n,e,void 0,arguments)},pop(){return us(this,"pop")},push(...n){return us(this,"push",n)},reduce(n,...e){return ru(this,"reduce",n,e)},reduceRight(n,...e){return ru(this,"reduceRight",n,e)},shift(){return us(this,"shift")},some(n,e){return Kt(this,"some",n,e,void 0,arguments)},splice(...n){return us(this,"splice",n)},toReversed(){return _r(this).toReversed()},toSorted(n){return _r(this).toSorted(n)},toSpliced(...n){return _r(this).toSpliced(...n)},unshift(...n){return us(this,"unshift",n)},values(){return sa(this,"values",tt)}};function sa(n,e,t){const r=fo(n),s=r[e]();return r!==n&&!It(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=t(i.value)),i}),s}const Hg=Array.prototype;function Kt(n,e,t,r,s,i){const a=fo(n),l=a!==n&&!It(n),c=a[e];if(c!==Hg[e]){const g=c.apply(n,i);return l?tt(g):g}let d=t;a!==n&&(l?d=function(g,E){return t.call(this,tt(g),E,n)}:t.length>2&&(d=function(g,E){return t.call(this,g,E,n)}));const f=c.call(a,d,r);return l&&s?s(f):f}function ru(n,e,t,r){const s=fo(n);let i=t;return s!==n&&(It(n)?t.length>3&&(i=function(a,l,c){return t.call(this,a,l,c,n)}):i=function(a,l,c){return t.call(this,a,tt(l),c,n)}),s[e](i,...r)}function ia(n,e,t){const r=_e(n);et(r,"iterate",Cs);const s=r[e](...t);return(s===-1||s===!1)&&yl(t[0])?(t[0]=_e(t[0]),r[e](...t)):s}function us(n,e,t=[]){xn(),hl();const r=_e(n)[e].apply(n,t);return dl(),Mn(),r}const Wg=ol("__proto__,__v_isRef,__isVue"),cd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(On));function Kg(n){On(n)||(n=String(n));const e=_e(this);return et(e,"has",n),e.hasOwnProperty(n)}class ud{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?rm:pd:i?fd:dd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=se(e);if(!s){let c;if(a&&(c=zg[t]))return c;if(t==="hasOwnProperty")return Kg}const l=Reflect.get(e,t,rt(e)?e:r);return(On(t)?cd.has(t):Wg(t))||(s||et(e,"get",t),i)?l:rt(l)?a&&cl(t)?l:l.value:Se(l)?s?gd(l):ml(l):l}}class hd extends ud{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const c=tr(i);if(!It(r)&&!tr(r)&&(i=_e(i),r=_e(r)),!se(e)&&rt(i)&&!rt(r))return c?!1:(i.value=r,!0)}const a=se(e)&&cl(t)?Number(t)<e.length:ye(e,t),l=Reflect.set(e,t,r,rt(e)?e:s);return e===_e(s)&&(a?wn(r,i)&&Qt(e,"set",t,r):Qt(e,"add",t,r)),l}deleteProperty(e,t){const r=ye(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&Qt(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!On(t)||!cd.has(t))&&et(e,"has",t),r}ownKeys(e){return et(e,"iterate",se(e)?"length":Xn),Reflect.ownKeys(e)}}class Gg extends ud{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Qg=new hd,Jg=new Gg,Xg=new hd(!0);const Da=n=>n,fi=n=>Reflect.getPrototypeOf(n);function Yg(n,e,t){return function(...r){const s=this.__v_raw,i=_e(s),a=Rr(i),l=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,d=s[n](...r),f=t?Da:e?ka:tt;return!e&&et(i,"iterate",c?Ca:Xn),{next(){const{value:g,done:E}=d.next();return E?{value:g,done:E}:{value:l?[f(g[0]),f(g[1])]:f(g),done:E}},[Symbol.iterator](){return this}}}}function pi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Zg(n,e){const t={get(s){const i=this.__v_raw,a=_e(i),l=_e(s);n||(wn(s,l)&&et(a,"get",s),et(a,"get",l));const{has:c}=fi(a),d=e?Da:n?ka:tt;if(c.call(a,s))return d(i.get(s));if(c.call(a,l))return d(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&et(_e(s),"iterate",Xn),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=_e(i),l=_e(s);return n||(wn(s,l)&&et(a,"has",s),et(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=_e(l),d=e?Da:n?ka:tt;return!n&&et(c,"iterate",Xn),l.forEach((f,g)=>s.call(i,d(f),d(g),a))}};return We(t,n?{add:pi("add"),set:pi("set"),delete:pi("delete"),clear:pi("clear")}:{add(s){!e&&!It(s)&&!tr(s)&&(s=_e(s));const i=_e(this);return fi(i).has.call(i,s)||(i.add(s),Qt(i,"add",s,s)),this},set(s,i){!e&&!It(i)&&!tr(i)&&(i=_e(i));const a=_e(this),{has:l,get:c}=fi(a);let d=l.call(a,s);d||(s=_e(s),d=l.call(a,s));const f=c.call(a,s);return a.set(s,i),d?wn(i,f)&&Qt(a,"set",s,i):Qt(a,"add",s,i),this},delete(s){const i=_e(this),{has:a,get:l}=fi(i);let c=a.call(i,s);c||(s=_e(s),c=a.call(i,s)),l&&l.call(i,s);const d=i.delete(s);return c&&Qt(i,"delete",s,void 0),d},clear(){const s=_e(this),i=s.size!==0,a=s.clear();return i&&Qt(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Yg(s,n,e)}),t}function gl(n,e){const t=Zg(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(ye(t,s)&&s in r?t:r,s,i)}const em={get:gl(!1,!1)},tm={get:gl(!1,!0)},nm={get:gl(!0,!1)};const dd=new WeakMap,fd=new WeakMap,pd=new WeakMap,rm=new WeakMap;function sm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function im(n){return n.__v_skip||!Object.isExtensible(n)?0:sm(kg(n))}function ml(n){return tr(n)?n:_l(n,!1,Qg,em,dd)}function om(n){return _l(n,!1,Xg,tm,fd)}function gd(n){return _l(n,!0,Jg,nm,pd)}function _l(n,e,t,r,s){if(!Se(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=s.get(n);if(i)return i;const a=im(n);if(a===0)return n;const l=new Proxy(n,a===2?r:t);return s.set(n,l),l}function Sr(n){return tr(n)?Sr(n.__v_raw):!!(n&&n.__v_isReactive)}function tr(n){return!!(n&&n.__v_isReadonly)}function It(n){return!!(n&&n.__v_isShallow)}function yl(n){return n?!!n.__v_raw:!1}function _e(n){const e=n&&n.__v_raw;return e?_e(e):n}function am(n){return!ye(n,"__v_skip")&&Object.isExtensible(n)&&Xh(n,"__v_skip",!0),n}const tt=n=>Se(n)?ml(n):n,ka=n=>Se(n)?gd(n):n;function rt(n){return n?n.__v_isRef===!0:!1}function oa(n){return lm(n,!1)}function lm(n,e){return rt(n)?n:new cm(n,e)}class cm{constructor(e,t){this.dep=new pl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:_e(e),this._value=t?e:tt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||It(e)||tr(e);e=r?e:_e(e),wn(e,t)&&(this._rawValue=e,this._value=r?e:tt(e),this.dep.trigger())}}function um(n){return rt(n)?n.value:n}const hm={get:(n,e,t)=>e==="__v_raw"?n:um(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return rt(s)&&!rt(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function md(n){return Sr(n)?n:new Proxy(n,hm)}class dm{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new pl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ps-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&we!==this)return rd(this,!0),!0}get value(){const e=this.dep.track();return od(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function fm(n,e,t=!1){let r,s;return oe(n)?r=n:(r=n.get,s=n.set),new dm(r,s,t)}const gi={},Mi=new WeakMap;let Gn;function pm(n,e=!1,t=Gn){if(t){let r=Mi.get(t);r||Mi.set(t,r=[]),r.push(n)}}function gm(n,e,t=Ie){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=t,d=H=>s?H:It(H)||s===!1||s===0?Jt(H,1):Jt(H);let f,g,E,R,k=!1,L=!1;if(rt(n)?(g=()=>n.value,k=It(n)):Sr(n)?(g=()=>d(n),k=!0):se(n)?(L=!0,k=n.some(H=>Sr(H)||It(H)),g=()=>n.map(H=>{if(rt(H))return H.value;if(Sr(H))return d(H);if(oe(H))return c?c(H,2):H()})):oe(n)?e?g=c?()=>c(n,2):n:g=()=>{if(E){xn();try{E()}finally{Mn()}}const H=Gn;Gn=f;try{return c?c(n,3,[R]):n(R)}finally{Gn=H}}:g=Ot,e&&s){const H=g,he=s===!0?1/0:s;g=()=>Jt(H(),he)}const F=jg(),W=()=>{f.stop(),F&&F.active&&ll(F.effects,f)};if(i&&e){const H=e;e=(...he)=>{H(...he),W()}}let Q=L?new Array(n.length).fill(gi):gi;const J=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const he=f.run();if(s||k||(L?he.some((me,w)=>wn(me,Q[w])):wn(he,Q))){E&&E();const me=Gn;Gn=f;try{const w=[he,Q===gi?void 0:L&&Q[0]===gi?[]:Q,R];c?c(e,3,w):e(...w),Q=he}finally{Gn=me}}}else f.run()};return l&&l(J),f=new td(g),f.scheduler=a?()=>a(J,!1):J,R=H=>pm(H,!1,f),E=f.onStop=()=>{const H=Mi.get(f);if(H){if(c)c(H,4);else for(const he of H)he();Mi.delete(f)}},e?r?J(!0):Q=f.run():a?a(J.bind(null,!0),!0):f.run(),W.pause=f.pause.bind(f),W.resume=f.resume.bind(f),W.stop=W,W}function Jt(n,e=1/0,t){if(e<=0||!Se(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,rt(n))Jt(n.value,e,t);else if(se(n))for(let r=0;r<n.length;r++)Jt(n[r],e,t);else if(Wh(n)||Rr(n))n.forEach(r=>{Jt(r,e,t)});else if(Qh(n)){for(const r in n)Jt(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Jt(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function js(n,e,t,r){try{return r?n(...r):n()}catch(s){po(s,e,t)}}function Bt(n,e,t,r){if(oe(n)){const s=js(n,e,t,r);return s&&Kh(s)&&s.catch(i=>{po(i,e,t)}),s}if(se(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Bt(n[i],e,t,r));return s}}function po(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ie;if(e){let l=e.parent;const c=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const f=l.ec;if(f){for(let g=0;g<f.length;g++)if(f[g](n,c,d)===!1)return}l=l.parent}if(i){xn(),js(i,null,10,[n,c,d]),Mn();return}}mm(n,t,s,r,a)}function mm(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const lt=[];let kt=-1;const Pr=[];let gn=null,yr=0;const _d=Promise.resolve();let Li=null;function _m(n){const e=Li||_d;return n?e.then(this?n.bind(this):n):e}function ym(n){let e=kt+1,t=lt.length;for(;e<t;){const r=e+t>>>1,s=lt[r],i=Ds(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function vl(n){if(!(n.flags&1)){const e=Ds(n),t=lt[lt.length-1];!t||!(n.flags&2)&&e>=Ds(t)?lt.push(n):lt.splice(ym(e),0,n),n.flags|=1,yd()}}function yd(){Li||(Li=_d.then(Ed))}function vm(n){se(n)?Pr.push(...n):gn&&n.id===-1?gn.splice(yr+1,0,n):n.flags&1||(Pr.push(n),n.flags|=1),yd()}function su(n,e,t=kt+1){for(;t<lt.length;t++){const r=lt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;lt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function vd(n){if(Pr.length){const e=[...new Set(Pr)].sort((t,r)=>Ds(t)-Ds(r));if(Pr.length=0,gn){gn.push(...e);return}for(gn=e,yr=0;yr<gn.length;yr++){const t=gn[yr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}gn=null,yr=0}}const Ds=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Ed(n){try{for(kt=0;kt<lt.length;kt++){const e=lt[kt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),js(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;kt<lt.length;kt++){const e=lt[kt];e&&(e.flags&=-2)}kt=-1,lt.length=0,vd(),Li=null,(lt.length||Pr.length)&&Ed()}}let Tt=null,Td=null;function Fi(n){const e=Tt;return Tt=n,Td=n&&n.type.__scopeId||null,e}function Em(n,e=Tt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&du(-1);const i=Fi(e);let a;try{a=n(...s)}finally{Fi(i),r._d&&du(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Tm(n,e){if(Tt===null)return n;const t=yo(Tt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Ie]=e[s];i&&(oe(i)&&(i={mounted:i,updated:i}),i.deep&&Jt(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function Wn(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(xn(),Bt(c,t,8,[n.el,l,n,e]),Mn())}}const Im=Symbol("_vte"),wm=n=>n.__isTeleport;function El(n,e){n.shapeFlag&6&&n.component?(n.transition=e,El(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Id(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Ui(n,e,t,r,s=!1){if(se(n)){n.forEach((k,L)=>Ui(k,e&&(se(e)?e[L]:e),t,r,s));return}if(Es(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ui(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?yo(r.component):r.el,a=s?null:i,{i:l,r:c}=n,d=e&&e.r,f=l.refs===Ie?l.refs={}:l.refs,g=l.setupState,E=_e(g),R=g===Ie?()=>!1:k=>ye(E,k);if(d!=null&&d!==c&&(Ve(d)?(f[d]=null,R(d)&&(g[d]=null)):rt(d)&&(d.value=null)),oe(c))js(c,l,12,[a,f]);else{const k=Ve(c),L=rt(c);if(k||L){const F=()=>{if(n.f){const W=k?R(c)?g[c]:f[c]:c.value;s?se(W)&&ll(W,i):se(W)?W.includes(i)||W.push(i):k?(f[c]=[i],R(c)&&(g[c]=f[c])):(c.value=[i],n.k&&(f[n.k]=c.value))}else k?(f[c]=a,R(c)&&(g[c]=a)):L&&(c.value=a,n.k&&(f[n.k]=a))};a?(F.id=-1,pt(F,t)):F()}}}uo().requestIdleCallback;uo().cancelIdleCallback;const Es=n=>!!n.type.__asyncLoader,wd=n=>n.type.__isKeepAlive;function Am(n,e){Ad(n,"a",e)}function bm(n,e){Ad(n,"da",e)}function Ad(n,e,t=ct){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(go(e,r,t),t){let s=t.parent;for(;s&&s.parent;)wd(s.parent.vnode)&&Rm(r,e,t,s),s=s.parent}}function Rm(n,e,t,r){const s=go(e,n,r,!0);Rd(()=>{ll(r[e],s)},t)}function go(n,e,t=ct,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{xn();const l=$s(t),c=Bt(e,t,n,a);return l(),Mn(),c});return r?s.unshift(i):s.push(i),i}}const an=n=>(e,t=ct)=>{(!Vs||n==="sp")&&go(n,(...r)=>e(...r),t)},Sm=an("bm"),bd=an("m"),Pm=an("bu"),Cm=an("u"),Dm=an("bum"),Rd=an("um"),km=an("sp"),Vm=an("rtg"),Nm=an("rtc");function Om(n,e=ct){go("ec",n,e)}const xm=Symbol.for("v-ndc");function Mm(n,e,t,r){let s;const i=t,a=se(n);if(a||Ve(n)){const l=a&&Sr(n);let c=!1;l&&(c=!It(n),n=fo(n)),s=new Array(n.length);for(let d=0,f=n.length;d<f;d++)s[d]=e(c?tt(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(Se(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,d=l.length;c<d;c++){const f=l[c];s[c]=e(n[f],f,c,i)}}else s=[];return s}const Va=n=>n?Kd(n)?yo(n):Va(n.parent):null,Ts=We(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Va(n.parent),$root:n=>Va(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Tl(n),$forceUpdate:n=>n.f||(n.f=()=>{vl(n.update)}),$nextTick:n=>n.n||(n.n=_m.bind(n.proxy)),$watch:n=>s_.bind(n)}),aa=(n,e)=>n!==Ie&&!n.__isScriptSetup&&ye(n,e),Lm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=n;let d;if(e[0]!=="$"){const R=a[e];if(R!==void 0)switch(R){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(aa(r,e))return a[e]=1,r[e];if(s!==Ie&&ye(s,e))return a[e]=2,s[e];if((d=n.propsOptions[0])&&ye(d,e))return a[e]=3,i[e];if(t!==Ie&&ye(t,e))return a[e]=4,t[e];Na&&(a[e]=0)}}const f=Ts[e];let g,E;if(f)return e==="$attrs"&&et(n.attrs,"get",""),f(n);if((g=l.__cssModules)&&(g=g[e]))return g;if(t!==Ie&&ye(t,e))return a[e]=4,t[e];if(E=c.config.globalProperties,ye(E,e))return E[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return aa(s,e)?(s[e]=t,!0):r!==Ie&&ye(r,e)?(r[e]=t,!0):ye(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!t[a]||n!==Ie&&ye(n,a)||aa(e,a)||(l=i[0])&&ye(l,a)||ye(r,a)||ye(Ts,a)||ye(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ye(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function iu(n){return se(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Na=!0;function Fm(n){const e=Tl(n),t=n.proxy,r=n.ctx;Na=!1,e.beforeCreate&&ou(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:d,created:f,beforeMount:g,mounted:E,beforeUpdate:R,updated:k,activated:L,deactivated:F,beforeDestroy:W,beforeUnmount:Q,destroyed:J,unmounted:H,render:he,renderTracked:me,renderTriggered:w,errorCaptured:m,serverPrefetch:v,expose:I,inheritAttrs:A,components:S,directives:y,filters:dt}=e;if(d&&Um(d,r,null),a)for(const Ee in a){const de=a[Ee];oe(de)&&(r[Ee]=de.bind(t))}if(s){const Ee=s.call(t,t);Se(Ee)&&(n.data=ml(Ee))}if(Na=!0,i)for(const Ee in i){const de=i[Ee],wt=oe(de)?de.bind(t,t):oe(de.get)?de.get.bind(t,t):Ot,Fn=!oe(de)&&oe(de.set)?de.set.bind(t):Ot,qt=Qd({get:wt,set:Fn});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>qt.value,set:Ne=>qt.value=Ne})}if(l)for(const Ee in l)Sd(l[Ee],r,t,Ee);if(c){const Ee=oe(c)?c.call(t):c;Reflect.ownKeys(Ee).forEach(de=>{Hm(de,Ee[de])})}f&&ou(f,n,"c");function je(Ee,de){se(de)?de.forEach(wt=>Ee(wt.bind(t))):de&&Ee(de.bind(t))}if(je(Sm,g),je(bd,E),je(Pm,R),je(Cm,k),je(Am,L),je(bm,F),je(Om,m),je(Nm,me),je(Vm,w),je(Dm,Q),je(Rd,H),je(km,v),se(I))if(I.length){const Ee=n.exposed||(n.exposed={});I.forEach(de=>{Object.defineProperty(Ee,de,{get:()=>t[de],set:wt=>t[de]=wt})})}else n.exposed||(n.exposed={});he&&n.render===Ot&&(n.render=he),A!=null&&(n.inheritAttrs=A),S&&(n.components=S),y&&(n.directives=y),v&&Id(n)}function Um(n,e,t=Ot){se(n)&&(n=Oa(n));for(const r in n){const s=n[r];let i;Se(s)?"default"in s?i=wi(s.from||r,s.default,!0):i=wi(s.from||r):i=wi(s),rt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function ou(n,e,t){Bt(se(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Sd(n,e,t,r){let s=r.includes(".")?jd(t,r):()=>t[r];if(Ve(n)){const i=e[n];oe(i)&&ca(s,i)}else if(oe(n))ca(s,n.bind(t));else if(Se(n))if(se(n))n.forEach(i=>Sd(i,e,t,r));else{const i=oe(n.handler)?n.handler.bind(t):e[n.handler];oe(i)&&ca(s,i,n)}}function Tl(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(d=>Bi(c,d,a,!0)),Bi(c,e,a)),Se(e)&&i.set(e,c),c}function Bi(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Bi(n,i,t,!0),s&&s.forEach(a=>Bi(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const l=Bm[a]||t&&t[a];n[a]=l?l(n[a],e[a]):e[a]}return n}const Bm={data:au,props:lu,emits:lu,methods:ds,computed:ds,beforeCreate:at,created:at,beforeMount:at,mounted:at,beforeUpdate:at,updated:at,beforeDestroy:at,beforeUnmount:at,destroyed:at,unmounted:at,activated:at,deactivated:at,errorCaptured:at,serverPrefetch:at,components:ds,directives:ds,watch:$m,provide:au,inject:jm};function au(n,e){return e?n?function(){return We(oe(n)?n.call(this,this):n,oe(e)?e.call(this,this):e)}:e:n}function jm(n,e){return ds(Oa(n),Oa(e))}function Oa(n){if(se(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function at(n,e){return n?[...new Set([].concat(n,e))]:e}function ds(n,e){return n?We(Object.create(null),n,e):e}function lu(n,e){return n?se(n)&&se(e)?[...new Set([...n,...e])]:We(Object.create(null),iu(n),iu(e??{})):e}function $m(n,e){if(!n)return e;if(!e)return n;const t=We(Object.create(null),n);for(const r in e)t[r]=at(n[r],e[r]);return t}function Pd(){return{app:null,config:{isNativeTag:Cg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qm=0;function zm(n,e){return function(r,s=null){oe(r)||(r=We({},r)),s!=null&&!Se(s)&&(s=null);const i=Pd(),a=new WeakSet,l=[];let c=!1;const d=i.app={_uid:qm++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:R_,get config(){return i.config},set config(f){},use(f,...g){return a.has(f)||(f&&oe(f.install)?(a.add(f),f.install(d,...g)):oe(f)&&(a.add(f),f(d,...g))),d},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),d},component(f,g){return g?(i.components[f]=g,d):i.components[f]},directive(f,g){return g?(i.directives[f]=g,d):i.directives[f]},mount(f,g,E){if(!c){const R=d._ceVNode||xt(r,s);return R.appContext=i,E===!0?E="svg":E===!1&&(E=void 0),g&&e?e(R,f):n(R,f,E),c=!0,d._container=f,f.__vue_app__=d,yo(R.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Bt(l,d._instance,16),n(null,d._container),delete d._container.__vue_app__)},provide(f,g){return i.provides[f]=g,d},runWithContext(f){const g=Cr;Cr=d;try{return f()}finally{Cr=g}}};return d}}let Cr=null;function Hm(n,e){if(ct){let t=ct.provides;const r=ct.parent&&ct.parent.provides;r===t&&(t=ct.provides=Object.create(r)),t[n]=e}}function wi(n,e,t=!1){const r=ct||Tt;if(r||Cr){const s=Cr?Cr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&oe(e)?e.call(r&&r.proxy):e}}const Cd={},Dd=()=>Object.create(Cd),kd=n=>Object.getPrototypeOf(n)===Cd;function Wm(n,e,t,r=!1){const s={},i=Dd();n.propsDefaults=Object.create(null),Vd(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:om(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function Km(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,l=_e(s),[c]=n.propsOptions;let d=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=n.vnode.dynamicProps;for(let g=0;g<f.length;g++){let E=f[g];if(mo(n.emitsOptions,E))continue;const R=e[E];if(c)if(ye(i,E))R!==i[E]&&(i[E]=R,d=!0);else{const k=Pn(E);s[k]=xa(c,l,k,R,n,!1)}else R!==i[E]&&(i[E]=R,d=!0)}}}else{Vd(n,e,s,i)&&(d=!0);let f;for(const g in l)(!e||!ye(e,g)&&((f=or(g))===g||!ye(e,f)))&&(c?t&&(t[g]!==void 0||t[f]!==void 0)&&(s[g]=xa(c,l,g,void 0,n,!0)):delete s[g]);if(i!==l)for(const g in i)(!e||!ye(e,g))&&(delete i[g],d=!0)}d&&Qt(n.attrs,"set","")}function Vd(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,l;if(e)for(let c in e){if(_s(c))continue;const d=e[c];let f;s&&ye(s,f=Pn(c))?!i||!i.includes(f)?t[f]=d:(l||(l={}))[f]=d:mo(n.emitsOptions,c)||(!(c in r)||d!==r[c])&&(r[c]=d,a=!0)}if(i){const c=_e(t),d=l||Ie;for(let f=0;f<i.length;f++){const g=i[f];t[g]=xa(s,c,g,d[g],n,!ye(d,g))}}return a}function xa(n,e,t,r,s,i){const a=n[t];if(a!=null){const l=ye(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&oe(c)){const{propsDefaults:d}=s;if(t in d)r=d[t];else{const f=$s(s);r=d[t]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===or(t))&&(r=!0))}return r}const Gm=new WeakMap;function Nd(n,e,t=!1){const r=t?Gm:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},l=[];let c=!1;if(!oe(n)){const f=g=>{c=!0;const[E,R]=Nd(g,e,!0);We(a,E),R&&l.push(...R)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!i&&!c)return Se(n)&&r.set(n,br),br;if(se(i))for(let f=0;f<i.length;f++){const g=Pn(i[f]);cu(g)&&(a[g]=Ie)}else if(i)for(const f in i){const g=Pn(f);if(cu(g)){const E=i[f],R=a[g]=se(E)||oe(E)?{type:E}:We({},E),k=R.type;let L=!1,F=!0;if(se(k))for(let W=0;W<k.length;++W){const Q=k[W],J=oe(Q)&&Q.name;if(J==="Boolean"){L=!0;break}else J==="String"&&(F=!1)}else L=oe(k)&&k.name==="Boolean";R[0]=L,R[1]=F,(L||ye(R,"default"))&&l.push(g)}}const d=[a,l];return Se(n)&&r.set(n,d),d}function cu(n){return n[0]!=="$"&&!_s(n)}const Od=n=>n[0]==="_"||n==="$stable",Il=n=>se(n)?n.map(Nt):[Nt(n)],Qm=(n,e,t)=>{if(e._n)return e;const r=Em((...s)=>Il(e(...s)),t);return r._c=!1,r},xd=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Od(s))continue;const i=n[s];if(oe(i))e[s]=Qm(s,i,r);else if(i!=null){const a=Il(i);e[s]=()=>a}}},Md=(n,e)=>{const t=Il(e);n.slots.default=()=>t},Ld=(n,e,t)=>{for(const r in e)(t||r!=="_")&&(n[r]=e[r])},Jm=(n,e,t)=>{const r=n.slots=Dd();if(n.vnode.shapeFlag&32){const s=e._;s?(Ld(r,e,t),t&&Xh(r,"_",s,!0)):xd(e,r)}else e&&Md(n,e)},Xm=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Ie;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:Ld(s,e,t):(i=!e.$stable,xd(e,s)),a=e}else e&&(Md(n,e),a={default:1});if(i)for(const l in s)!Od(l)&&a[l]==null&&delete s[l]},pt=h_;function Ym(n){return Zm(n)}function Zm(n,e){const t=uo();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:d,setElementText:f,parentNode:g,nextSibling:E,setScopeId:R=Ot,insertStaticContent:k}=n,L=(_,T,C,x=null,V=null,N=null,$=void 0,B=null,U=!!T.dynamicChildren)=>{if(_===T)return;_&&!hs(_,T)&&(x=zt(_),Ne(_,V,N,!0),_=null),T.patchFlag===-2&&(U=!1,T.dynamicChildren=null);const{type:M,ref:X,shapeFlag:q}=T;switch(M){case _o:F(_,T,C,x);break;case nr:W(_,T,C,x);break;case ha:_==null&&Q(T,C,x,$);break;case Vt:S(_,T,C,x,V,N,$,B,U);break;default:q&1?he(_,T,C,x,V,N,$,B,U):q&6?y(_,T,C,x,V,N,$,B,U):(q&64||q&128)&&M.process(_,T,C,x,V,N,$,B,U,Pt)}X!=null&&V&&Ui(X,_&&_.ref,N,T||_,!T)},F=(_,T,C,x)=>{if(_==null)r(T.el=l(T.children),C,x);else{const V=T.el=_.el;T.children!==_.children&&d(V,T.children)}},W=(_,T,C,x)=>{_==null?r(T.el=c(T.children||""),C,x):T.el=_.el},Q=(_,T,C,x)=>{[_.el,_.anchor]=k(_.children,T,C,x,_.el,_.anchor)},J=({el:_,anchor:T},C,x)=>{let V;for(;_&&_!==T;)V=E(_),r(_,C,x),_=V;r(T,C,x)},H=({el:_,anchor:T})=>{let C;for(;_&&_!==T;)C=E(_),s(_),_=C;s(T)},he=(_,T,C,x,V,N,$,B,U)=>{T.type==="svg"?$="svg":T.type==="math"&&($="mathml"),_==null?me(T,C,x,V,N,$,B,U):v(_,T,V,N,$,B,U)},me=(_,T,C,x,V,N,$,B)=>{let U,M;const{props:X,shapeFlag:q,transition:G,dirs:K}=_;if(U=_.el=a(_.type,N,X&&X.is,X),q&8?f(U,_.children):q&16&&m(_.children,U,null,x,V,la(_,N),$,B),K&&Wn(_,null,x,"created"),w(U,_,_.scopeId,$,x),X){for(const ge in X)ge!=="value"&&!_s(ge)&&i(U,ge,null,X[ge],N,x);"value"in X&&i(U,"value",null,X.value,N),(M=X.onVnodeBeforeMount)&&Ct(M,x,_)}K&&Wn(_,null,x,"beforeMount");const ee=e_(V,G);ee&&G.beforeEnter(U),r(U,T,C),((M=X&&X.onVnodeMounted)||ee||K)&&pt(()=>{M&&Ct(M,x,_),ee&&G.enter(U),K&&Wn(_,null,x,"mounted")},V)},w=(_,T,C,x,V)=>{if(C&&R(_,C),x)for(let N=0;N<x.length;N++)R(_,x[N]);if(V){let N=V.subTree;if(T===N||qd(N.type)&&(N.ssContent===T||N.ssFallback===T)){const $=V.vnode;w(_,$,$.scopeId,$.slotScopeIds,V.parent)}}},m=(_,T,C,x,V,N,$,B,U=0)=>{for(let M=U;M<_.length;M++){const X=_[M]=B?mn(_[M]):Nt(_[M]);L(null,X,T,C,x,V,N,$,B)}},v=(_,T,C,x,V,N,$)=>{const B=T.el=_.el;let{patchFlag:U,dynamicChildren:M,dirs:X}=T;U|=_.patchFlag&16;const q=_.props||Ie,G=T.props||Ie;let K;if(C&&Kn(C,!1),(K=G.onVnodeBeforeUpdate)&&Ct(K,C,T,_),X&&Wn(T,_,C,"beforeUpdate"),C&&Kn(C,!0),(q.innerHTML&&G.innerHTML==null||q.textContent&&G.textContent==null)&&f(B,""),M?I(_.dynamicChildren,M,B,C,x,la(T,V),N):$||de(_,T,B,null,C,x,la(T,V),N,!1),U>0){if(U&16)A(B,q,G,C,V);else if(U&2&&q.class!==G.class&&i(B,"class",null,G.class,V),U&4&&i(B,"style",q.style,G.style,V),U&8){const ee=T.dynamicProps;for(let ge=0;ge<ee.length;ge++){const fe=ee[ge],Ge=q[fe],Fe=G[fe];(Fe!==Ge||fe==="value")&&i(B,fe,Ge,Fe,V,C)}}U&1&&_.children!==T.children&&f(B,T.children)}else!$&&M==null&&A(B,q,G,C,V);((K=G.onVnodeUpdated)||X)&&pt(()=>{K&&Ct(K,C,T,_),X&&Wn(T,_,C,"updated")},x)},I=(_,T,C,x,V,N,$)=>{for(let B=0;B<T.length;B++){const U=_[B],M=T[B],X=U.el&&(U.type===Vt||!hs(U,M)||U.shapeFlag&70)?g(U.el):C;L(U,M,X,null,x,V,N,$,!0)}},A=(_,T,C,x,V)=>{if(T!==C){if(T!==Ie)for(const N in T)!_s(N)&&!(N in C)&&i(_,N,T[N],null,V,x);for(const N in C){if(_s(N))continue;const $=C[N],B=T[N];$!==B&&N!=="value"&&i(_,N,B,$,V,x)}"value"in C&&i(_,"value",T.value,C.value,V)}},S=(_,T,C,x,V,N,$,B,U)=>{const M=T.el=_?_.el:l(""),X=T.anchor=_?_.anchor:l("");let{patchFlag:q,dynamicChildren:G,slotScopeIds:K}=T;K&&(B=B?B.concat(K):K),_==null?(r(M,C,x),r(X,C,x),m(T.children||[],C,X,V,N,$,B,U)):q>0&&q&64&&G&&_.dynamicChildren?(I(_.dynamicChildren,G,C,V,N,$,B),(T.key!=null||V&&T===V.subTree)&&Fd(_,T,!0)):de(_,T,C,X,V,N,$,B,U)},y=(_,T,C,x,V,N,$,B,U)=>{T.slotScopeIds=B,_==null?T.shapeFlag&512?V.ctx.activate(T,C,x,$,U):dt(T,C,x,V,N,$,U):cn(_,T,U)},dt=(_,T,C,x,V,N,$)=>{const B=_.component=E_(_,x,V);if(wd(_)&&(B.ctx.renderer=Pt),T_(B,!1,$),B.asyncDep){if(V&&V.registerDep(B,je,$),!_.el){const U=B.subTree=xt(nr);W(null,U,T,C)}}else je(B,_,T,C,V,N,$)},cn=(_,T,C)=>{const x=T.component=_.component;if(c_(_,T,C))if(x.asyncDep&&!x.asyncResolved){Ee(x,T,C);return}else x.next=T,x.update();else T.el=_.el,x.vnode=T},je=(_,T,C,x,V,N,$)=>{const B=()=>{if(_.isMounted){let{next:q,bu:G,u:K,parent:ee,vnode:ge}=_;{const Qe=Ud(_);if(Qe){q&&(q.el=ge.el,Ee(_,q,$)),Qe.asyncDep.then(()=>{_.isUnmounted||B()});return}}let fe=q,Ge;Kn(_,!1),q?(q.el=ge.el,Ee(_,q,$)):q=ge,G&&Ii(G),(Ge=q.props&&q.props.onVnodeBeforeUpdate)&&Ct(Ge,ee,q,ge),Kn(_,!0);const Fe=ua(_),$e=_.subTree;_.subTree=Fe,L($e,Fe,g($e.el),zt($e),_,V,N),q.el=Fe.el,fe===null&&u_(_,Fe.el),K&&pt(K,V),(Ge=q.props&&q.props.onVnodeUpdated)&&pt(()=>Ct(Ge,ee,q,ge),V)}else{let q;const{el:G,props:K}=T,{bm:ee,m:ge,parent:fe,root:Ge,type:Fe}=_,$e=Es(T);if(Kn(_,!1),ee&&Ii(ee),!$e&&(q=K&&K.onVnodeBeforeMount)&&Ct(q,fe,T),Kn(_,!0),G&&ur){const Qe=()=>{_.subTree=ua(_),ur(G,_.subTree,_,V,null)};$e&&Fe.__asyncHydrate?Fe.__asyncHydrate(G,_,Qe):Qe()}else{Ge.ce&&Ge.ce._injectChildStyle(Fe);const Qe=_.subTree=ua(_);L(null,Qe,C,x,_,V,N),T.el=Qe.el}if(ge&&pt(ge,V),!$e&&(q=K&&K.onVnodeMounted)){const Qe=T;pt(()=>Ct(q,fe,Qe),V)}(T.shapeFlag&256||fe&&Es(fe.vnode)&&fe.vnode.shapeFlag&256)&&_.a&&pt(_.a,V),_.isMounted=!0,T=C=x=null}};_.scope.on();const U=_.effect=new td(B);_.scope.off();const M=_.update=U.run.bind(U),X=_.job=U.runIfDirty.bind(U);X.i=_,X.id=_.uid,U.scheduler=()=>vl(X),Kn(_,!0),M()},Ee=(_,T,C)=>{T.component=_;const x=_.vnode.props;_.vnode=T,_.next=null,Km(_,T.props,x,C),Xm(_,T.children,C),xn(),su(_),Mn()},de=(_,T,C,x,V,N,$,B,U=!1)=>{const M=_&&_.children,X=_?_.shapeFlag:0,q=T.children,{patchFlag:G,shapeFlag:K}=T;if(G>0){if(G&128){Fn(M,q,C,x,V,N,$,B,U);return}else if(G&256){wt(M,q,C,x,V,N,$,B,U);return}}K&8?(X&16&&Bn(M,V,N),q!==M&&f(C,q)):X&16?K&16?Fn(M,q,C,x,V,N,$,B,U):Bn(M,V,N,!0):(X&8&&f(C,""),K&16&&m(q,C,x,V,N,$,B,U))},wt=(_,T,C,x,V,N,$,B,U)=>{_=_||br,T=T||br;const M=_.length,X=T.length,q=Math.min(M,X);let G;for(G=0;G<q;G++){const K=T[G]=U?mn(T[G]):Nt(T[G]);L(_[G],K,C,null,V,N,$,B,U)}M>X?Bn(_,V,N,!0,!1,q):m(T,C,x,V,N,$,B,U,q)},Fn=(_,T,C,x,V,N,$,B,U)=>{let M=0;const X=T.length;let q=_.length-1,G=X-1;for(;M<=q&&M<=G;){const K=_[M],ee=T[M]=U?mn(T[M]):Nt(T[M]);if(hs(K,ee))L(K,ee,C,null,V,N,$,B,U);else break;M++}for(;M<=q&&M<=G;){const K=_[q],ee=T[G]=U?mn(T[G]):Nt(T[G]);if(hs(K,ee))L(K,ee,C,null,V,N,$,B,U);else break;q--,G--}if(M>q){if(M<=G){const K=G+1,ee=K<X?T[K].el:x;for(;M<=G;)L(null,T[M]=U?mn(T[M]):Nt(T[M]),C,ee,V,N,$,B,U),M++}}else if(M>G)for(;M<=q;)Ne(_[M],V,N,!0),M++;else{const K=M,ee=M,ge=new Map;for(M=ee;M<=G;M++){const it=T[M]=U?mn(T[M]):Nt(T[M]);it.key!=null&&ge.set(it.key,M)}let fe,Ge=0;const Fe=G-ee+1;let $e=!1,Qe=0;const un=new Array(Fe);for(M=0;M<Fe;M++)un[M]=0;for(M=K;M<=q;M++){const it=_[M];if(Ge>=Fe){Ne(it,V,N,!0);continue}let vt;if(it.key!=null)vt=ge.get(it.key);else for(fe=ee;fe<=G;fe++)if(un[fe-ee]===0&&hs(it,T[fe])){vt=fe;break}vt===void 0?Ne(it,V,N,!0):(un[vt-ee]=M+1,vt>=Qe?Qe=vt:$e=!0,L(it,T[vt],C,null,V,N,$,B,U),Ge++)}const hr=$e?t_(un):br;for(fe=hr.length-1,M=Fe-1;M>=0;M--){const it=ee+M,vt=T[it],dr=it+1<X?T[it+1].el:x;un[M]===0?L(null,vt,C,dr,V,N,$,B,U):$e&&(fe<0||M!==hr[fe]?qt(vt,C,dr,2):fe--)}}},qt=(_,T,C,x,V=null)=>{const{el:N,type:$,transition:B,children:U,shapeFlag:M}=_;if(M&6){qt(_.component.subTree,T,C,x);return}if(M&128){_.suspense.move(T,C,x);return}if(M&64){$.move(_,T,C,Pt);return}if($===Vt){r(N,T,C);for(let q=0;q<U.length;q++)qt(U[q],T,C,x);r(_.anchor,T,C);return}if($===ha){J(_,T,C);return}if(x!==2&&M&1&&B)if(x===0)B.beforeEnter(N),r(N,T,C),pt(()=>B.enter(N),V);else{const{leave:q,delayLeave:G,afterLeave:K}=B,ee=()=>r(N,T,C),ge=()=>{q(N,()=>{ee(),K&&K()})};G?G(N,ee,ge):ge()}else r(N,T,C)},Ne=(_,T,C,x=!1,V=!1)=>{const{type:N,props:$,ref:B,children:U,dynamicChildren:M,shapeFlag:X,patchFlag:q,dirs:G,cacheIndex:K}=_;if(q===-2&&(V=!1),B!=null&&Ui(B,null,C,_,!0),K!=null&&(T.renderCache[K]=void 0),X&256){T.ctx.deactivate(_);return}const ee=X&1&&G,ge=!Es(_);let fe;if(ge&&(fe=$&&$.onVnodeBeforeUnmount)&&Ct(fe,T,_),X&6)Un(_.component,C,x);else{if(X&128){_.suspense.unmount(C,x);return}ee&&Wn(_,null,T,"beforeUnmount"),X&64?_.type.remove(_,T,C,Pt,x):M&&!M.hasOnce&&(N!==Vt||q>0&&q&64)?Bn(M,T,C,!1,!0):(N===Vt&&q&384||!V&&X&16)&&Bn(U,T,C),x&&Oe(_)}(ge&&(fe=$&&$.onVnodeUnmounted)||ee)&&pt(()=>{fe&&Ct(fe,T,_),ee&&Wn(_,null,T,"unmounted")},C)},Oe=_=>{const{type:T,el:C,anchor:x,transition:V}=_;if(T===Vt){Bo(C,x);return}if(T===ha){H(_);return}const N=()=>{s(C),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(_.shapeFlag&1&&V&&!V.persisted){const{leave:$,delayLeave:B}=V,U=()=>$(C,N);B?B(_.el,N,U):U()}else N()},Bo=(_,T)=>{let C;for(;_!==T;)C=E(_),s(_),_=C;s(T)},Un=(_,T,C)=>{const{bum:x,scope:V,job:N,subTree:$,um:B,m:U,a:M}=_;uu(U),uu(M),x&&Ii(x),V.stop(),N&&(N.flags|=8,Ne($,_,T,C)),B&&pt(B,T),pt(()=>{_.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Bn=(_,T,C,x=!1,V=!1,N=0)=>{for(let $=N;$<_.length;$++)Ne(_[$],T,C,x,V)},zt=_=>{if(_.shapeFlag&6)return zt(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const T=E(_.anchor||_.el),C=T&&T[Im];return C?E(C):T};let Xr=!1;const Xs=(_,T,C)=>{_==null?T._vnode&&Ne(T._vnode,null,null,!0):L(T._vnode||null,_,T,null,null,null,C),T._vnode=_,Xr||(Xr=!0,su(),vd(),Xr=!1)},Pt={p:L,um:Ne,m:qt,r:Oe,mt:dt,mc:m,pc:de,pbc:I,n:zt,o:n};let jn,ur;return{render:Xs,hydrate:jn,createApp:zm(Xs,jn)}}function la({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Kn({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function e_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Fd(n,e,t=!1){const r=n.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=mn(s[i]),l.el=a.el),!t&&l.patchFlag!==-2&&Fd(a,l)),l.type===_o&&(l.el=a.el)}}function t_(n){const e=n.slice(),t=[0];let r,s,i,a,l;const c=n.length;for(r=0;r<c;r++){const d=n[r];if(d!==0){if(s=t[t.length-1],n[s]<d){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)l=i+a>>1,n[t[l]]<d?i=l+1:a=l;d<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function Ud(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ud(e)}function uu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const n_=Symbol.for("v-scx"),r_=()=>wi(n_);function ca(n,e,t){return Bd(n,e,t)}function Bd(n,e,t=Ie){const{immediate:r,deep:s,flush:i,once:a}=t,l=We({},t),c=e&&r||!e&&i!=="post";let d;if(Vs){if(i==="sync"){const R=r_();d=R.__watcherHandles||(R.__watcherHandles=[])}else if(!c){const R=()=>{};return R.stop=Ot,R.resume=Ot,R.pause=Ot,R}}const f=ct;l.call=(R,k,L)=>Bt(R,f,k,L);let g=!1;i==="post"?l.scheduler=R=>{pt(R,f&&f.suspense)}:i!=="sync"&&(g=!0,l.scheduler=(R,k)=>{k?R():vl(R)}),l.augmentJob=R=>{e&&(R.flags|=4),g&&(R.flags|=2,f&&(R.id=f.uid,R.i=f))};const E=gm(n,e,l);return Vs&&(d?d.push(E):c&&E()),E}function s_(n,e,t){const r=this.proxy,s=Ve(n)?n.includes(".")?jd(r,n):()=>r[n]:n.bind(r,r);let i;oe(e)?i=e:(i=e.handler,t=e);const a=$s(this),l=Bd(s,i.bind(r),t);return a(),l}function jd(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const i_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Pn(e)}Modifiers`]||n[`${or(e)}Modifiers`];function o_(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ie;let s=t;const i=e.startsWith("update:"),a=i&&i_(r,e.slice(7));a&&(a.trim&&(s=t.map(f=>Ve(f)?f.trim():f)),a.number&&(s=t.map(Ra)));let l,c=r[l=ta(e)]||r[l=ta(Pn(e))];!c&&i&&(c=r[l=ta(or(e))]),c&&Bt(c,n,6,s);const d=r[l+"Once"];if(d){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Bt(d,n,6,s)}}function $d(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},l=!1;if(!oe(n)){const c=d=>{const f=$d(d,e,!0);f&&(l=!0,We(a,f))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(Se(n)&&r.set(n,null),null):(se(i)?i.forEach(c=>a[c]=null):We(a,i),Se(n)&&r.set(n,a),a)}function mo(n,e){return!n||!ao(e)?!1:(e=e.slice(2).replace(/Once$/,""),ye(n,e[0].toLowerCase()+e.slice(1))||ye(n,or(e))||ye(n,e))}function ua(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:d,renderCache:f,props:g,data:E,setupState:R,ctx:k,inheritAttrs:L}=n,F=Fi(n);let W,Q;try{if(t.shapeFlag&4){const H=s||r,he=H;W=Nt(d.call(he,H,f,g,R,E,k)),Q=l}else{const H=e;W=Nt(H.length>1?H(g,{attrs:l,slots:a,emit:c}):H(g,null)),Q=e.props?l:a_(l)}}catch(H){Is.length=0,po(H,n,1),W=xt(nr)}let J=W;if(Q&&L!==!1){const H=Object.keys(Q),{shapeFlag:he}=J;H.length&&he&7&&(i&&H.some(al)&&(Q=l_(Q,i)),J=xr(J,Q,!1,!0))}return t.dirs&&(J=xr(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(t.dirs):t.dirs),t.transition&&El(J,t.transition),W=J,Fi(F),W}const a_=n=>{let e;for(const t in n)(t==="class"||t==="style"||ao(t))&&((e||(e={}))[t]=n[t]);return e},l_=(n,e)=>{const t={};for(const r in n)(!al(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function c_(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:l,patchFlag:c}=e,d=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?hu(r,a,d):!!a;if(c&8){const f=e.dynamicProps;for(let g=0;g<f.length;g++){const E=f[g];if(a[E]!==r[E]&&!mo(d,E))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?hu(r,a,d):!0:!!a;return!1}function hu(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!mo(t,i))return!0}return!1}function u_({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const qd=n=>n.__isSuspense;function h_(n,e){e&&e.pendingBranch?se(n)?e.effects.push(...n):e.effects.push(n):vm(n)}const Vt=Symbol.for("v-fgt"),_o=Symbol.for("v-txt"),nr=Symbol.for("v-cmt"),ha=Symbol.for("v-stc"),Is=[];let _t=null;function bt(n=!1){Is.push(_t=n?null:[])}function d_(){Is.pop(),_t=Is[Is.length-1]||null}let ks=1;function du(n,e=!1){ks+=n,n<0&&_t&&e&&(_t.hasOnce=!0)}function zd(n){return n.dynamicChildren=ks>0?_t||br:null,d_(),ks>0&&_t&&_t.push(n),n}function Dt(n,e,t,r,s,i){return zd(be(n,e,t,r,s,i,!0))}function f_(n,e,t,r,s){return zd(xt(n,e,t,r,s,!0))}function Hd(n){return n?n.__v_isVNode===!0:!1}function hs(n,e){return n.type===e.type&&n.key===e.key}const Wd=({key:n})=>n??null,Ai=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ve(n)||rt(n)||oe(n)?{i:Tt,r:n,k:e,f:!!t}:n:null);function be(n,e=null,t=null,r=0,s=null,i=n===Vt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Wd(e),ref:e&&Ai(e),scopeId:Td,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Tt};return l?(wl(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Ve(t)?8:16),ks>0&&!a&&_t&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&_t.push(c),c}const xt=p_;function p_(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===xm)&&(n=nr),Hd(n)){const l=xr(n,e,!0);return t&&wl(l,t),ks>0&&!i&&_t&&(l.shapeFlag&6?_t[_t.indexOf(n)]=l:_t.push(l)),l.patchFlag=-2,l}if(b_(n)&&(n=n.__vccOpts),e){e=g_(e);let{class:l,style:c}=e;l&&!Ve(l)&&(e.class=ho(l)),Se(c)&&(yl(c)&&!se(c)&&(c=We({},c)),e.style=ul(c))}const a=Ve(n)?1:qd(n)?128:wm(n)?64:Se(n)?4:oe(n)?2:0;return be(n,e,t,r,s,a,i,!0)}function g_(n){return n?yl(n)||kd(n)?We({},n):n:null}function xr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=n,d=e?__(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:d,key:d&&Wd(d),ref:e&&e.ref?t&&i?se(i)?i.concat(Ai(e)):[i,Ai(e)]:Ai(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Vt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&xr(n.ssContent),ssFallback:n.ssFallback&&xr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&El(f,c.clone(f)),f}function m_(n=" ",e=0){return xt(_o,null,n,e)}function Ue(n="",e=!1){return e?(bt(),f_(nr,null,n)):xt(nr,null,n)}function Nt(n){return n==null||typeof n=="boolean"?xt(nr):se(n)?xt(Vt,null,n.slice()):Hd(n)?mn(n):xt(_o,null,String(n))}function mn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:xr(n)}function wl(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(se(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),wl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!kd(e)?e._ctx=Tt:s===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:Tt},t=32):(e=String(e),r&64?(t=16,e=[m_(e)]):t=8);n.children=e,n.shapeFlag|=t}function __(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ho([e.class,r.class]));else if(s==="style")e.style=ul([e.style,r.style]);else if(ao(s)){const i=e[s],a=r[s];a&&i!==a&&!(se(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Ct(n,e,t,r=null){Bt(n,e,7,[t,r])}const y_=Pd();let v_=0;function E_(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||y_,i={uid:v_++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Bg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nd(r,s),emitsOptions:$d(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=o_.bind(null,i),n.ce&&n.ce(i),i}let ct=null,ji,Ma;{const n=uo(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};ji=e("__VUE_INSTANCE_SETTERS__",t=>ct=t),Ma=e("__VUE_SSR_SETTERS__",t=>Vs=t)}const $s=n=>{const e=ct;return ji(n),n.scope.on(),()=>{n.scope.off(),ji(e)}},fu=()=>{ct&&ct.scope.off(),ji(null)};function Kd(n){return n.vnode.shapeFlag&4}let Vs=!1;function T_(n,e=!1,t=!1){e&&Ma(e);const{props:r,children:s}=n.vnode,i=Kd(n);Wm(n,r,i,e),Jm(n,s,t);const a=i?I_(n,e):void 0;return e&&Ma(!1),a}function I_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Lm);const{setup:r}=t;if(r){xn();const s=n.setupContext=r.length>1?A_(n):null,i=$s(n),a=js(r,n,0,[n.props,s]),l=Kh(a);if(Mn(),i(),(l||n.sp)&&!Es(n)&&Id(n),l){if(a.then(fu,fu),e)return a.then(c=>{pu(n,c,e)}).catch(c=>{po(c,n,0)});n.asyncDep=a}else pu(n,a,e)}else Gd(n,e)}function pu(n,e,t){oe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Se(e)&&(n.setupState=md(e)),Gd(n,t)}let gu;function Gd(n,e,t){const r=n.type;if(!n.render){if(!e&&gu&&!r.render){const s=r.template||Tl(n).template;if(s){const{isCustomElement:i,compilerOptions:a}=n.appContext.config,{delimiters:l,compilerOptions:c}=r,d=We(We({isCustomElement:i,delimiters:l},a),c);r.render=gu(s,d)}}n.render=r.render||Ot}{const s=$s(n);xn();try{Fm(n)}finally{Mn(),s()}}}const w_={get(n,e){return et(n,"get",""),n[e]}};function A_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,w_),slots:n.slots,emit:n.emit,expose:e}}function yo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(md(am(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ts)return Ts[t](n)},has(e,t){return t in e||t in Ts}})):n.proxy}function b_(n){return oe(n)&&"__vccOpts"in n}const Qd=(n,e)=>fm(n,e,Vs),R_="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let La;const mu=typeof window<"u"&&window.trustedTypes;if(mu)try{La=mu.createPolicy("vue",{createHTML:n=>n})}catch{}const Jd=La?n=>La.createHTML(n):n=>n,S_="http://www.w3.org/2000/svg",P_="http://www.w3.org/1998/Math/MathML",Gt=typeof document<"u"?document:null,_u=Gt&&Gt.createElement("template"),C_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?Gt.createElementNS(S_,n):e==="mathml"?Gt.createElementNS(P_,n):t?Gt.createElement(n,{is:t}):Gt.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>Gt.createTextNode(n),createComment:n=>Gt.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Gt.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{_u.innerHTML=Jd(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=_u.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},D_=Symbol("_vtc");function k_(n,e,t){const r=n[D_];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const yu=Symbol("_vod"),V_=Symbol("_vsh"),N_=Symbol(""),O_=/(^|;)\s*display\s*:/;function x_(n,e,t){const r=n.style,s=Ve(t);let i=!1;if(t&&!s){if(e)if(Ve(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&bi(r,l,"")}else for(const a in e)t[a]==null&&bi(r,a,"");for(const a in t)a==="display"&&(i=!0),bi(r,a,t[a])}else if(s){if(e!==t){const a=r[N_];a&&(t+=";"+a),r.cssText=t,i=O_.test(t)}}else e&&n.removeAttribute("style");yu in n&&(n[yu]=i?r.display:"",n[V_]&&(r.display="none"))}const vu=/\s*!important$/;function bi(n,e,t){if(se(t))t.forEach(r=>bi(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=M_(n,e);vu.test(t)?n.setProperty(or(r),t.replace(vu,""),"important"):n[r]=t}}const Eu=["Webkit","Moz","ms"],da={};function M_(n,e){const t=da[e];if(t)return t;let r=Pn(e);if(r!=="filter"&&r in n)return da[e]=r;r=Jh(r);for(let s=0;s<Eu.length;s++){const i=Eu[s]+r;if(i in n)return da[e]=i}return e}const Tu="http://www.w3.org/1999/xlink";function Iu(n,e,t,r,s,i=Ug(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Tu,e.slice(6,e.length)):n.setAttributeNS(Tu,e,t):t==null||i&&!Yh(t)?n.removeAttribute(e):n.setAttribute(e,i?"":On(t)?String(t):t)}function wu(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Jd(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Yh(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function vr(n,e,t,r){n.addEventListener(e,t,r)}function L_(n,e,t,r){n.removeEventListener(e,t,r)}const Au=Symbol("_vei");function F_(n,e,t,r,s=null){const i=n[Au]||(n[Au]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=U_(e);if(r){const d=i[e]=$_(r,s);vr(n,l,d,c)}else a&&(L_(n,l,a,c),i[e]=void 0)}}const bu=/(?:Once|Passive|Capture)$/;function U_(n){let e;if(bu.test(n)){e={};let r;for(;r=n.match(bu);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):or(n.slice(2)),e]}let fa=0;const B_=Promise.resolve(),j_=()=>fa||(B_.then(()=>fa=0),fa=Date.now());function $_(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Bt(q_(r,t.value),e,5,[r])};return t.value=n,t.attached=j_(),t}function q_(n,e){if(se(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ru=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,z_=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?k_(n,r,a):e==="style"?x_(n,t,r):ao(e)?al(e)||F_(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):H_(n,e,r,a))?(wu(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Iu(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ve(r))?wu(n,Pn(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Iu(n,e,r,a))};function H_(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Ru(e)&&oe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ru(e)&&Ve(t)?!1:e in n}const Su=n=>{const e=n.props["onUpdate:modelValue"]||!1;return se(e)?t=>Ii(e,t):e};function W_(n){n.target.composing=!0}function Pu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const pa=Symbol("_assign"),K_={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[pa]=Su(s);const i=r||s.props&&s.props.type==="number";vr(n,e?"change":"input",a=>{if(a.target.composing)return;let l=n.value;t&&(l=l.trim()),i&&(l=Ra(l)),n[pa](l)}),t&&vr(n,"change",()=>{n.value=n.value.trim()}),e||(vr(n,"compositionstart",W_),vr(n,"compositionend",Pu),vr(n,"change",Pu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[pa]=Su(a),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?Ra(n.value):n.value,c=e??"";l!==c&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c))}},G_=We({patchProp:z_},C_);let Cu;function Q_(){return Cu||(Cu=Ym(G_))}const J_=(...n)=>{const e=Q_().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=Y_(r);if(!s)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,X_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function X_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Y_(n){return Ve(n)?document.querySelector(n):n}var Du={};/**
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
 */const Xd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Z_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Yd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,d=c?n[s+2]:0,f=i>>2,g=(i&3)<<4|l>>4;let E=(l&15)<<2|d>>6,R=d&63;c||(R=64,a||(E=64)),r.push(t[f],t[g],t[E],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Xd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Z_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||d==null||g==null)throw new ey;const E=i<<2|l>>4;if(r.push(E),d!==64){const R=l<<4&240|d>>2;if(r.push(R),g!==64){const k=d<<6&192|g;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ey extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ty=function(n){const e=Xd(n);return Yd.encodeByteArray(e,!0)},$i=function(n){return ty(n).replace(/\./g,"")},Zd=function(n){try{return Yd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ny(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ry=()=>ny().__FIREBASE_DEFAULTS__,sy=()=>{if(typeof process>"u"||typeof Du>"u")return;const n=Du.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},iy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zd(n[1]);return e&&JSON.parse(e)},vo=()=>{try{return ry()||sy()||iy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ef=n=>{var e,t;return(t=(e=vo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},oy=n=>{const e=ef(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},tf=()=>{var n;return(n=vo())===null||n===void 0?void 0:n.config},nf=n=>{var e;return(e=vo())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class ay{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function ly(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[$i(JSON.stringify(t)),$i(JSON.stringify(a)),""].join(".")}/**
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
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function uy(){var n;const e=(n=vo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function fy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function py(){const n=st();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gy(){return!uy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function my(){try{return typeof indexedDB=="object"}catch{return!1}}function _y(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const yy="FirebaseError";class ln extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=yy,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qs.prototype.create)}}class qs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?vy(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new ln(s,l,r)}}function vy(n,e){return n.replace(Ey,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ey=/\{\$([^}]+)}/g;function Ty(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function qi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(ku(i)&&ku(a)){if(!qi(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function ku(n){return n!==null&&typeof n=="object"}/**
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
 */function zs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Iy(n,e){const t=new wy(n,e);return t.subscribe.bind(t)}class wy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ay(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ga),s.error===void 0&&(s.error=ga),s.complete===void 0&&(s.complete=ga);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ay(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ga(){}/**
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
 */function ut(n){return n&&n._delegate?n._delegate:n}class rr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qn="[DEFAULT]";/**
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
 */class by{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ay;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sy(e))try{this.getOrInitializeService({instanceIdentifier:Qn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qn){return this.instances.has(e)}getOptions(e=Qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ry(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qn){return this.component?this.component.multipleInstances?e:Qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ry(n){return n===Qn?void 0:n}function Sy(n){return n.instantiationMode==="EAGER"}/**
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
 */class Py{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new by(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ae||(ae={}));const Cy={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Dy=ae.INFO,ky={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Vy=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=ky[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Al{constructor(e){this.name=e,this._logLevel=Dy,this._logHandler=Vy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cy[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Ny=(n,e)=>e.some(t=>n instanceof t);let Vu,Nu;function Oy(){return Vu||(Vu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xy(){return Nu||(Nu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rf=new WeakMap,Fa=new WeakMap,sf=new WeakMap,ma=new WeakMap,bl=new WeakMap;function My(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(An(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&rf.set(t,n)}).catch(()=>{}),bl.set(e,n),e}function Ly(n){if(Fa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Fa.set(n,e)}let Ua={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Fa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||sf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return An(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Fy(n){Ua=n(Ua)}function Uy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(_a(this),e,...t);return sf.set(r,e.sort?e.sort():[e]),An(r)}:xy().includes(n)?function(...e){return n.apply(_a(this),e),An(rf.get(this))}:function(...e){return An(n.apply(_a(this),e))}}function By(n){return typeof n=="function"?Uy(n):(n instanceof IDBTransaction&&Ly(n),Ny(n,Oy())?new Proxy(n,Ua):n)}function An(n){if(n instanceof IDBRequest)return My(n);if(ma.has(n))return ma.get(n);const e=By(n);return e!==n&&(ma.set(n,e),bl.set(e,n)),e}const _a=n=>bl.get(n);function jy(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=An(a);return r&&a.addEventListener("upgradeneeded",c=>{r(An(a.result),c.oldVersion,c.newVersion,An(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const $y=["get","getKey","getAll","getAllKeys","count"],qy=["put","add","delete","clear"],ya=new Map;function Ou(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ya.get(e))return ya.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=qy.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$y.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&c.done]))[0]};return ya.set(e,i),i}Fy(n=>({...n,get:(e,t,r)=>Ou(e,t)||n.get(e,t,r),has:(e,t)=>!!Ou(e,t)||n.has(e,t)}));/**
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
 */class zy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Hy(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Hy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ba="@firebase/app",xu="0.10.16";/**
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
 */const tn=new Al("@firebase/app"),Wy="@firebase/app-compat",Ky="@firebase/analytics-compat",Gy="@firebase/analytics",Qy="@firebase/app-check-compat",Jy="@firebase/app-check",Xy="@firebase/auth",Yy="@firebase/auth-compat",Zy="@firebase/database",ev="@firebase/data-connect",tv="@firebase/database-compat",nv="@firebase/functions",rv="@firebase/functions-compat",sv="@firebase/installations",iv="@firebase/installations-compat",ov="@firebase/messaging",av="@firebase/messaging-compat",lv="@firebase/performance",cv="@firebase/performance-compat",uv="@firebase/remote-config",hv="@firebase/remote-config-compat",dv="@firebase/storage",fv="@firebase/storage-compat",pv="@firebase/firestore",gv="@firebase/vertexai",mv="@firebase/firestore-compat",_v="firebase",yv="11.0.2";/**
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
 */const ja="[DEFAULT]",vv={[Ba]:"fire-core",[Wy]:"fire-core-compat",[Gy]:"fire-analytics",[Ky]:"fire-analytics-compat",[Jy]:"fire-app-check",[Qy]:"fire-app-check-compat",[Xy]:"fire-auth",[Yy]:"fire-auth-compat",[Zy]:"fire-rtdb",[ev]:"fire-data-connect",[tv]:"fire-rtdb-compat",[nv]:"fire-fn",[rv]:"fire-fn-compat",[sv]:"fire-iid",[iv]:"fire-iid-compat",[ov]:"fire-fcm",[av]:"fire-fcm-compat",[lv]:"fire-perf",[cv]:"fire-perf-compat",[uv]:"fire-rc",[hv]:"fire-rc-compat",[dv]:"fire-gcs",[fv]:"fire-gcs-compat",[pv]:"fire-fst",[mv]:"fire-fst-compat",[gv]:"fire-vertex","fire-js":"fire-js",[_v]:"fire-js-all"};/**
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
 */const zi=new Map,Ev=new Map,$a=new Map;function Mu(n,e){try{n.container.addComponent(e)}catch(t){tn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Mr(n){const e=n.name;if($a.has(e))return tn.debug(`There were multiple attempts to register component ${e}.`),!1;$a.set(e,n);for(const t of zi.values())Mu(t,n);for(const t of Ev.values())Mu(t,n);return!0}function Rl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Tn(n){return n.settings!==void 0}/**
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
 */const Tv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bn=new qs("app","Firebase",Tv);/**
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
 */class Iv{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
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
 */const Hr=yv;function of(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ja,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw bn.create("bad-app-name",{appName:String(s)});if(t||(t=tf()),!t)throw bn.create("no-options");const i=zi.get(s);if(i){if(qi(t,i.options)&&qi(r,i.config))return i;throw bn.create("duplicate-app",{appName:s})}const a=new Py(s);for(const c of $a.values())a.addComponent(c);const l=new Iv(t,r,a);return zi.set(s,l),l}function af(n=ja){const e=zi.get(n);if(!e&&n===ja&&tf())return of();if(!e)throw bn.create("no-app",{appName:n});return e}function Rn(n,e,t){var r;let s=(r=vv[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tn.warn(l.join(" "));return}Mr(new rr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const wv="firebase-heartbeat-database",Av=1,Ns="firebase-heartbeat-store";let va=null;function lf(){return va||(va=jy(wv,Av,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ns)}catch(t){console.warn(t)}}}}).catch(n=>{throw bn.create("idb-open",{originalErrorMessage:n.message})})),va}async function bv(n){try{const t=(await lf()).transaction(Ns),r=await t.objectStore(Ns).get(cf(n));return await t.done,r}catch(e){if(e instanceof ln)tn.warn(e.message);else{const t=bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tn.warn(t.message)}}}async function Lu(n,e){try{const r=(await lf()).transaction(Ns,"readwrite");await r.objectStore(Ns).put(e,cf(n)),await r.done}catch(t){if(t instanceof ln)tn.warn(t.message);else{const r=bn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});tn.warn(r.message)}}}function cf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Rv=1024,Sv=30*24*60*60*1e3;class Pv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Dv(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Fu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Sv}),this._storage.overwrite(this._heartbeatsCache))}catch(r){tn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Fu(),{heartbeatsToSend:r,unsentEntries:s}=Cv(this._heartbeatsCache.heartbeats),i=$i(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return tn.warn(t),""}}}function Fu(){return new Date().toISOString().substring(0,10)}function Cv(n,e=Rv){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Uu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Uu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Dv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return my()?_y().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await bv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Uu(n){return $i(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function kv(n){Mr(new rr("platform-logger",e=>new zy(e),"PRIVATE")),Mr(new rr("heartbeat",e=>new Pv(e),"PRIVATE")),Rn(Ba,xu,n),Rn(Ba,xu,"esm2017"),Rn("fire-js","")}kv("");var Bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yn,uf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function v(){}v.prototype=m.prototype,w.D=m.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(I,A,S){for(var y=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)y[dt-2]=arguments[dt];return m.prototype[A].apply(I,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,v){v||(v=0);var I=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)I[A]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(A=0;16>A;++A)I[A]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=w.g[0],v=w.g[1],A=w.g[2];var S=w.g[3],y=m+(S^v&(A^S))+I[0]+3614090360&4294967295;m=v+(y<<7&4294967295|y>>>25),y=S+(A^m&(v^A))+I[1]+3905402710&4294967295,S=m+(y<<12&4294967295|y>>>20),y=A+(v^S&(m^v))+I[2]+606105819&4294967295,A=S+(y<<17&4294967295|y>>>15),y=v+(m^A&(S^m))+I[3]+3250441966&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(S^v&(A^S))+I[4]+4118548399&4294967295,m=v+(y<<7&4294967295|y>>>25),y=S+(A^m&(v^A))+I[5]+1200080426&4294967295,S=m+(y<<12&4294967295|y>>>20),y=A+(v^S&(m^v))+I[6]+2821735955&4294967295,A=S+(y<<17&4294967295|y>>>15),y=v+(m^A&(S^m))+I[7]+4249261313&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(S^v&(A^S))+I[8]+1770035416&4294967295,m=v+(y<<7&4294967295|y>>>25),y=S+(A^m&(v^A))+I[9]+2336552879&4294967295,S=m+(y<<12&4294967295|y>>>20),y=A+(v^S&(m^v))+I[10]+4294925233&4294967295,A=S+(y<<17&4294967295|y>>>15),y=v+(m^A&(S^m))+I[11]+2304563134&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(S^v&(A^S))+I[12]+1804603682&4294967295,m=v+(y<<7&4294967295|y>>>25),y=S+(A^m&(v^A))+I[13]+4254626195&4294967295,S=m+(y<<12&4294967295|y>>>20),y=A+(v^S&(m^v))+I[14]+2792965006&4294967295,A=S+(y<<17&4294967295|y>>>15),y=v+(m^A&(S^m))+I[15]+1236535329&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(A^S&(v^A))+I[1]+4129170786&4294967295,m=v+(y<<5&4294967295|y>>>27),y=S+(v^A&(m^v))+I[6]+3225465664&4294967295,S=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(S^m))+I[11]+643717713&4294967295,A=S+(y<<14&4294967295|y>>>18),y=v+(S^m&(A^S))+I[0]+3921069994&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^S&(v^A))+I[5]+3593408605&4294967295,m=v+(y<<5&4294967295|y>>>27),y=S+(v^A&(m^v))+I[10]+38016083&4294967295,S=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(S^m))+I[15]+3634488961&4294967295,A=S+(y<<14&4294967295|y>>>18),y=v+(S^m&(A^S))+I[4]+3889429448&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^S&(v^A))+I[9]+568446438&4294967295,m=v+(y<<5&4294967295|y>>>27),y=S+(v^A&(m^v))+I[14]+3275163606&4294967295,S=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(S^m))+I[3]+4107603335&4294967295,A=S+(y<<14&4294967295|y>>>18),y=v+(S^m&(A^S))+I[8]+1163531501&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^S&(v^A))+I[13]+2850285829&4294967295,m=v+(y<<5&4294967295|y>>>27),y=S+(v^A&(m^v))+I[2]+4243563512&4294967295,S=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(S^m))+I[7]+1735328473&4294967295,A=S+(y<<14&4294967295|y>>>18),y=v+(S^m&(A^S))+I[12]+2368359562&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(v^A^S)+I[5]+4294588738&4294967295,m=v+(y<<4&4294967295|y>>>28),y=S+(m^v^A)+I[8]+2272392833&4294967295,S=m+(y<<11&4294967295|y>>>21),y=A+(S^m^v)+I[11]+1839030562&4294967295,A=S+(y<<16&4294967295|y>>>16),y=v+(A^S^m)+I[14]+4259657740&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^S)+I[1]+2763975236&4294967295,m=v+(y<<4&4294967295|y>>>28),y=S+(m^v^A)+I[4]+1272893353&4294967295,S=m+(y<<11&4294967295|y>>>21),y=A+(S^m^v)+I[7]+4139469664&4294967295,A=S+(y<<16&4294967295|y>>>16),y=v+(A^S^m)+I[10]+3200236656&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^S)+I[13]+681279174&4294967295,m=v+(y<<4&4294967295|y>>>28),y=S+(m^v^A)+I[0]+3936430074&4294967295,S=m+(y<<11&4294967295|y>>>21),y=A+(S^m^v)+I[3]+3572445317&4294967295,A=S+(y<<16&4294967295|y>>>16),y=v+(A^S^m)+I[6]+76029189&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^S)+I[9]+3654602809&4294967295,m=v+(y<<4&4294967295|y>>>28),y=S+(m^v^A)+I[12]+3873151461&4294967295,S=m+(y<<11&4294967295|y>>>21),y=A+(S^m^v)+I[15]+530742520&4294967295,A=S+(y<<16&4294967295|y>>>16),y=v+(A^S^m)+I[2]+3299628645&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(A^(v|~S))+I[0]+4096336452&4294967295,m=v+(y<<6&4294967295|y>>>26),y=S+(v^(m|~A))+I[7]+1126891415&4294967295,S=m+(y<<10&4294967295|y>>>22),y=A+(m^(S|~v))+I[14]+2878612391&4294967295,A=S+(y<<15&4294967295|y>>>17),y=v+(S^(A|~m))+I[5]+4237533241&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~S))+I[12]+1700485571&4294967295,m=v+(y<<6&4294967295|y>>>26),y=S+(v^(m|~A))+I[3]+2399980690&4294967295,S=m+(y<<10&4294967295|y>>>22),y=A+(m^(S|~v))+I[10]+4293915773&4294967295,A=S+(y<<15&4294967295|y>>>17),y=v+(S^(A|~m))+I[1]+2240044497&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~S))+I[8]+1873313359&4294967295,m=v+(y<<6&4294967295|y>>>26),y=S+(v^(m|~A))+I[15]+4264355552&4294967295,S=m+(y<<10&4294967295|y>>>22),y=A+(m^(S|~v))+I[6]+2734768916&4294967295,A=S+(y<<15&4294967295|y>>>17),y=v+(S^(A|~m))+I[13]+1309151649&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~S))+I[4]+4149444226&4294967295,m=v+(y<<6&4294967295|y>>>26),y=S+(v^(m|~A))+I[11]+3174756917&4294967295,S=m+(y<<10&4294967295|y>>>22),y=A+(m^(S|~v))+I[2]+718787259&4294967295,A=S+(y<<15&4294967295|y>>>17),y=v+(S^(A|~m))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(A+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var v=m-this.blockSize,I=this.B,A=this.h,S=0;S<m;){if(A==0)for(;S<=v;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<m;)if(I[A++]=w.charCodeAt(S++),A==this.blockSize){s(this,I),A=0;break}}else for(;S<m;)if(I[A++]=w[S++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var v=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=v&255,v/=256;for(this.u(w),w=Array(16),m=v=0;4>m;++m)for(var I=0;32>I;I+=8)w[v++]=this.g[m]>>>I&255;return w};function i(w,m){var v=l;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=m(w)}function a(w,m){this.h=m;for(var v=[],I=!0,A=w.length-1;0<=A;A--){var S=w[A]|0;I&&S==m||(v[A]=S,I=!1)}this.g=v}var l={};function c(w){return-128<=w&&128>w?i(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return F(d(-w));for(var m=[],v=1,I=0;w>=v;I++)m[I]=w/v|0,v*=4294967296;return new a(m,0)}function f(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return F(f(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(m,8)),I=g,A=0;A<w.length;A+=8){var S=Math.min(8,w.length-A),y=parseInt(w.substring(A,A+S),m);8>S?(S=d(Math.pow(m,S)),I=I.j(S).add(d(y))):(I=I.j(v),I=I.add(d(y)))}return I}var g=c(0),E=c(1),R=c(16777216);n=a.prototype,n.m=function(){if(L(this))return-F(this).m();for(var w=0,m=1,v=0;v<this.g.length;v++){var I=this.i(v);w+=(0<=I?I:4294967296+I)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(L(this))return"-"+F(this).toString(w);for(var m=d(Math.pow(w,6)),v=this,I="";;){var A=H(v,m).g;v=W(v,A.j(m));var S=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=A,k(v))return S+I;for(;6>S.length;)S="0"+S;I=S+I}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function L(w){return w.h==-1}n.l=function(w){return w=W(this,w),L(w)?-1:k(w)?0:1};function F(w){for(var m=w.g.length,v=[],I=0;I<m;I++)v[I]=~w.g[I];return new a(v,~w.h).add(E)}n.abs=function(){return L(this)?F(this):this},n.add=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],I=0,A=0;A<=m;A++){var S=I+(this.i(A)&65535)+(w.i(A)&65535),y=(S>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);I=y>>>16,S&=65535,y&=65535,v[A]=y<<16|S}return new a(v,v[v.length-1]&-2147483648?-1:0)};function W(w,m){return w.add(F(m))}n.j=function(w){if(k(this)||k(w))return g;if(L(this))return L(w)?F(this).j(F(w)):F(F(this).j(w));if(L(w))return F(this.j(F(w)));if(0>this.l(R)&&0>w.l(R))return d(this.m()*w.m());for(var m=this.g.length+w.g.length,v=[],I=0;I<2*m;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<w.g.length;A++){var S=this.i(I)>>>16,y=this.i(I)&65535,dt=w.i(A)>>>16,cn=w.i(A)&65535;v[2*I+2*A]+=y*cn,Q(v,2*I+2*A),v[2*I+2*A+1]+=S*cn,Q(v,2*I+2*A+1),v[2*I+2*A+1]+=y*dt,Q(v,2*I+2*A+1),v[2*I+2*A+2]+=S*dt,Q(v,2*I+2*A+2)}for(I=0;I<m;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=m;I<2*m;I++)v[I]=0;return new a(v,0)};function Q(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function J(w,m){this.g=w,this.h=m}function H(w,m){if(k(m))throw Error("division by zero");if(k(w))return new J(g,g);if(L(w))return m=H(F(w),m),new J(F(m.g),F(m.h));if(L(m))return m=H(w,F(m)),new J(F(m.g),m.h);if(30<w.g.length){if(L(w)||L(m))throw Error("slowDivide_ only works with positive integers.");for(var v=E,I=m;0>=I.l(w);)v=he(v),I=he(I);var A=me(v,1),S=me(I,1);for(I=me(I,2),v=me(v,2);!k(I);){var y=S.add(I);0>=y.l(w)&&(A=A.add(v),S=y),I=me(I,1),v=me(v,1)}return m=W(w,A.j(m)),new J(A,m)}for(A=g;0<=w.l(m);){for(v=Math.max(1,Math.floor(w.m()/m.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),S=d(v),y=S.j(m);L(y)||0<y.l(w);)v-=I,S=d(v),y=S.j(m);k(S)&&(S=E),A=A.add(S),w=W(w,y)}return new J(A,w)}n.A=function(w){return H(this,w).h},n.and=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)&w.i(I);return new a(v,this.h&w.h)},n.or=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)|w.i(I);return new a(v,this.h|w.h)},n.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)^w.i(I);return new a(v,this.h^w.h)};function he(w){for(var m=w.g.length+1,v=[],I=0;I<m;I++)v[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(v,w.h)}function me(w,m){var v=m>>5;m%=32;for(var I=w.g.length-v,A=[],S=0;S<I;S++)A[S]=0<m?w.i(S+v)>>>m|w.i(S+v+1)<<32-m:w.i(S+v);return new a(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,uf=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Yn=a}).apply(typeof Bu<"u"?Bu:typeof self<"u"?self:typeof window<"u"?window:{});var mi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hf,fs,df,Ri,qa,ff,pf,gf;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof mi=="object"&&mi];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in h))break e;h=h[b]}o=o[o.length-1],p=h[o],u=u(p),u!=p&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var h=0,p=!1,b={next:function(){if(!p&&h<o.length){var P=h++;return{value:u(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function d(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,h){return o.call.apply(o.bind,arguments)}function g(o,u,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),o.apply(u,b)}}return function(){return o.apply(u,arguments)}}function E(o,u,h){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,E.apply(null,arguments)}function R(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function k(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,b,P){for(var j=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)j[Te-2]=arguments[Te];return u.prototype[b].apply(p,j)}}function L(o){const u=o.length;if(0<u){const h=Array(u);for(let p=0;p<u;p++)h[p]=o[p];return h}return[]}function F(o,u){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(c(p)){const b=o.length||0,P=p.length||0;o.length=b+P;for(let j=0;j<P;j++)o[b+j]=p[j]}else o.push(p)}}class W{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function Q(o){return/^[\s\xa0]*$/.test(o)}function J(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var he=J().indexOf("Gecko")!=-1&&!(J().toLowerCase().indexOf("webkit")!=-1&&J().indexOf("Edge")==-1)&&!(J().indexOf("Trident")!=-1||J().indexOf("MSIE")!=-1)&&J().indexOf("Edge")==-1;function me(o,u,h){for(const p in o)u.call(h,o[p],p,o)}function w(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function m(o){const u={};for(const h in o)u[h]=o[h];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)o[h]=p[h];for(let P=0;P<v.length;P++)h=v[P],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function A(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function S(o){l.setTimeout(()=>{throw o},0)}function y(){var o=wt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class dt{constructor(){this.h=this.g=null}add(u,h){const p=cn.get();p.set(u,h),this.h?this.h.next=p:this.g=p,this.h=p}}var cn=new W(()=>new je,o=>o.reset());class je{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Ee,de=!1,wt=new dt,Fn=()=>{const o=l.Promise.resolve(void 0);Ee=()=>{o.then(qt)}};var qt=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){S(h)}var u=cn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}de=!1};function Ne(){this.s=this.s,this.C=this.C}Ne.prototype.s=!1,Ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Oe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Oe.prototype.h=function(){this.defaultPrevented=!0};var Bo=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,u),l.removeEventListener("test",h,u)}catch{}return o}();function Un(o,u){if(Oe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(he){e:{try{H(u.nodeName);var b=!0;break e}catch{}b=!1}b||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Bn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Un.aa.h.call(this)}}k(Un,Oe);var Bn={2:"touch",3:"pen",4:"mouse"};Un.prototype.h=function(){Un.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var zt="closure_listenable_"+(1e6*Math.random()|0),Xr=0;function Xs(o,u,h,p,b){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!p,this.ha=b,this.key=++Xr,this.da=this.fa=!1}function Pt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function jn(o){this.src=o,this.g={},this.h=0}jn.prototype.add=function(o,u,h,p,b){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var j=_(o,u,p,b);return-1<j?(u=o[j],h||(u.fa=!1)):(u=new Xs(u,this.src,P,!!p,b),u.fa=h,o.push(u)),u};function ur(o,u){var h=u.type;if(h in o.g){var p=o.g[h],b=Array.prototype.indexOf.call(p,u,void 0),P;(P=0<=b)&&Array.prototype.splice.call(p,b,1),P&&(Pt(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function _(o,u,h,p){for(var b=0;b<o.length;++b){var P=o[b];if(!P.da&&P.listener==u&&P.capture==!!h&&P.ha==p)return b}return-1}var T="closure_lm_"+(1e6*Math.random()|0),C={};function x(o,u,h,p,b){if(Array.isArray(u)){for(var P=0;P<u.length;P++)x(o,u[P],h,p,b);return null}return h=G(h),o&&o[zt]?o.K(u,h,d(p)?!!p.capture:!!p,b):V(o,u,h,!1,p,b)}function V(o,u,h,p,b,P){if(!u)throw Error("Invalid event type");var j=d(b)?!!b.capture:!!b,Te=X(o);if(Te||(o[T]=Te=new jn(o)),h=Te.add(u,h,p,j,P),h.proxy)return h;if(p=N(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Bo||(b=j),b===void 0&&(b=!1),o.addEventListener(u.toString(),p,b);else if(o.attachEvent)o.attachEvent(U(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function N(){function o(h){return u.call(o.src,o.listener,h)}const u=M;return o}function $(o,u,h,p,b){if(Array.isArray(u))for(var P=0;P<u.length;P++)$(o,u[P],h,p,b);else p=d(p)?!!p.capture:!!p,h=G(h),o&&o[zt]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],h=_(P,h,p,b),-1<h&&(Pt(P[h]),Array.prototype.splice.call(P,h,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=X(o))&&(u=o.g[u.toString()],o=-1,u&&(o=_(u,h,p,b)),(h=-1<o?u[o]:null)&&B(h))}function B(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[zt])ur(u.i,o);else{var h=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(h,p,o.capture):u.detachEvent?u.detachEvent(U(h),p):u.addListener&&u.removeListener&&u.removeListener(p),(h=X(u))?(ur(h,o),h.h==0&&(h.src=null,u[T]=null)):Pt(o)}}}function U(o){return o in C?C[o]:C[o]="on"+o}function M(o,u){if(o.da)o=!0;else{u=new Un(u,this);var h=o.listener,p=o.ha||o.src;o.fa&&B(o),o=h.call(p,u)}return o}function X(o){return o=o[T],o instanceof jn?o:null}var q="__closure_events_fn_"+(1e9*Math.random()>>>0);function G(o){return typeof o=="function"?o:(o[q]||(o[q]=function(u){return o.handleEvent(u)}),o[q])}function K(){Ne.call(this),this.i=new jn(this),this.M=this,this.F=null}k(K,Ne),K.prototype[zt]=!0,K.prototype.removeEventListener=function(o,u,h,p){$(this,o,u,h,p)};function ee(o,u){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Oe(u,o);else if(u instanceof Oe)u.target=u.target||o;else{var b=u;u=new Oe(p,o),I(u,b)}if(b=!0,h)for(var P=h.length-1;0<=P;P--){var j=u.g=h[P];b=ge(j,p,!0,u)&&b}if(j=u.g=o,b=ge(j,p,!0,u)&&b,b=ge(j,p,!1,u)&&b,h)for(P=0;P<h.length;P++)j=u.g=h[P],b=ge(j,p,!1,u)&&b}K.prototype.N=function(){if(K.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],p=0;p<h.length;p++)Pt(h[p]);delete o.g[u],o.h--}}this.F=null},K.prototype.K=function(o,u,h,p){return this.i.add(String(o),u,!1,h,p)},K.prototype.L=function(o,u,h,p){return this.i.add(String(o),u,!0,h,p)};function ge(o,u,h,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var b=!0,P=0;P<u.length;++P){var j=u[P];if(j&&!j.da&&j.capture==h){var Te=j.listener,qe=j.ha||j.src;j.fa&&ur(o.i,j),b=Te.call(qe,p)!==!1&&b}}return b&&!p.defaultPrevented}function fe(o,u,h){if(typeof o=="function")h&&(o=E(o,h));else if(o&&typeof o.handleEvent=="function")o=E(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Ge(o){o.g=fe(()=>{o.g=null,o.i&&(o.i=!1,Ge(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Fe extends Ne{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ge(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $e(o){Ne.call(this),this.h=o,this.g={}}k($e,Ne);var Qe=[];function un(o){me(o.g,function(u,h){this.g.hasOwnProperty(h)&&B(u)},o),o.g={}}$e.prototype.N=function(){$e.aa.N.call(this),un(this)},$e.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hr=l.JSON.stringify,it=l.JSON.parse,vt=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function dr(){}dr.prototype.h=null;function uc(o){return o.h||(o.h=o.i())}function hc(){}var Yr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jo(){Oe.call(this,"d")}k(jo,Oe);function $o(){Oe.call(this,"c")}k($o,Oe);var $n={},dc=null;function Ys(){return dc=dc||new K}$n.La="serverreachability";function fc(o){Oe.call(this,$n.La,o)}k(fc,Oe);function Zr(o){const u=Ys();ee(u,new fc(u))}$n.STAT_EVENT="statevent";function pc(o,u){Oe.call(this,$n.STAT_EVENT,o),this.stat=u}k(pc,Oe);function ot(o){const u=Ys();ee(u,new pc(u,o))}$n.Ma="timingevent";function gc(o,u){Oe.call(this,$n.Ma,o),this.size=u}k(gc,Oe);function es(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function ts(){this.g=!0}ts.prototype.xa=function(){this.g=!1};function og(o,u,h,p,b,P){o.info(function(){if(o.g)if(P)for(var j="",Te=P.split("&"),qe=0;qe<Te.length;qe++){var pe=Te[qe].split("=");if(1<pe.length){var Je=pe[0];pe=pe[1];var Xe=Je.split("_");j=2<=Xe.length&&Xe[1]=="type"?j+(Je+"="+pe+"&"):j+(Je+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+u+`
`+h+`
`+j})}function ag(o,u,h,p,b,P,j){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+u+`
`+h+`
`+P+" "+j})}function fr(o,u,h,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+cg(o,h)+(p?" "+p:"")})}function lg(o,u){o.info(function(){return"TIMEOUT: "+u})}ts.prototype.info=function(){};function cg(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var P=b[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<b.length;j++)b[j]=""}}}}return hr(h)}catch{return u}}var Zs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qo;function ei(){}k(ei,dr),ei.prototype.g=function(){return new XMLHttpRequest},ei.prototype.i=function(){return{}},qo=new ei;function hn(o,u,h,p){this.j=o,this.i=u,this.l=h,this.R=p||1,this.U=new $e(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _c}function _c(){this.i=null,this.g="",this.h=!1}var yc={},zo={};function Ho(o,u,h){o.L=1,o.v=si(Ht(u)),o.m=h,o.P=!0,vc(o,null)}function vc(o,u){o.F=Date.now(),ti(o),o.A=Ht(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Nc(h.i,"t",p),o.C=0,h=o.j.J,o.h=new _c,o.g=Xc(o.j,h?u:null,!o.m),0<o.O&&(o.M=new Fe(E(o.Y,o,o.g),o.O)),u=o.U,h=o.g,p=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(Qe[0]=b.toString()),b=Qe);for(var P=0;P<b.length;P++){var j=x(h,b[P],p||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Zr(),og(o.i,o.u,o.A,o.l,o.R,o.m)}hn.prototype.ca=function(o){o=o.target;const u=this.M;u&&Wt(o)==3?u.j():this.Y(o)},hn.prototype.Y=function(o){try{if(o==this.g)e:{const Xe=Wt(this.g);var u=this.g.Ba();const mr=this.g.Z();if(!(3>Xe)&&(Xe!=3||this.g&&(this.h.h||this.g.oa()||Bc(this.g)))){this.J||Xe!=4||u==7||(u==8||0>=mr?Zr(3):Zr(2)),Wo(this);var h=this.g.Z();this.X=h;t:if(Ec(this)){var p=Bc(this.g);o="";var b=p.length,P=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qn(this),ns(this);var j="";break t}this.h.i=new l.TextDecoder}for(u=0;u<b;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(P&&u==b-1)});p.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=h==200,ag(this.i,this.u,this.A,this.l,this.R,Xe,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Te,qe=this.g;if((Te=qe.g?qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(Te)){var pe=Te;break t}}pe=null}if(h=pe)fr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ko(this,h);else{this.o=!1,this.s=3,ot(12),qn(this),ns(this);break e}}if(this.P){h=!0;let At;for(;!this.J&&this.C<j.length;)if(At=ug(this,j),At==zo){Xe==4&&(this.s=4,ot(14),h=!1),fr(this.i,this.l,null,"[Incomplete Response]");break}else if(At==yc){this.s=4,ot(15),fr(this.i,this.l,j,"[Invalid Chunk]"),h=!1;break}else fr(this.i,this.l,At,null),Ko(this,At);if(Ec(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Xe!=4||j.length!=0||this.h.h||(this.s=1,ot(16),h=!1),this.o=this.o&&h,!h)fr(this.i,this.l,j,"[Invalid Chunked Response]"),qn(this),ns(this);else if(0<j.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Zo(Je),Je.M=!0,ot(11))}}else fr(this.i,this.l,j,null),Ko(this,j);Xe==4&&qn(this),this.o&&!this.J&&(Xe==4?Kc(this.j,this):(this.o=!1,ti(this)))}else Sg(this.g),h==400&&0<j.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),qn(this),ns(this)}}}catch{}finally{}};function Ec(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function ug(o,u){var h=o.C,p=u.indexOf(`
`,h);return p==-1?zo:(h=Number(u.substring(h,p)),isNaN(h)?yc:(p+=1,p+h>u.length?zo:(u=u.slice(p,p+h),o.C=p+h,u)))}hn.prototype.cancel=function(){this.J=!0,qn(this)};function ti(o){o.S=Date.now()+o.I,Tc(o,o.I)}function Tc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=es(E(o.ba,o),u)}function Wo(o){o.B&&(l.clearTimeout(o.B),o.B=null)}hn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(lg(this.i,this.A),this.L!=2&&(Zr(),ot(17)),qn(this),this.s=2,ns(this)):Tc(this,this.S-o)};function ns(o){o.j.G==0||o.J||Kc(o.j,o)}function qn(o){Wo(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,un(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ko(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||Go(h.h,o))){if(!o.K&&Go(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ui(h),li(h);else break e;Yo(h),ot(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=es(E(h.Za,h),6e3));if(1>=Ac(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Hn(h,11)}else if((o.K||h.g==o)&&ui(h),!Q(u))for(b=h.Da.g.parse(u),u=0;u<b.length;u++){let pe=b[u];if(h.T=pe[0],pe=pe[1],h.G==2)if(pe[0]=="c"){h.K=pe[1],h.ia=pe[2];const Je=pe[3];Je!=null&&(h.la=Je,h.j.info("VER="+h.la));const Xe=pe[4];Xe!=null&&(h.Aa=Xe,h.j.info("SVER="+h.Aa));const mr=pe[5];mr!=null&&typeof mr=="number"&&0<mr&&(p=1.5*mr,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const At=o.g;if(At){const di=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(di){var P=p.h;P.g||di.indexOf("spdy")==-1&&di.indexOf("quic")==-1&&di.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Qo(P,P.h),P.h=null))}if(p.D){const ea=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;ea&&(p.ya=ea,Ae(p.I,p.D,ea))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var j=o;if(p.qa=Jc(p,p.J?p.ia:null,p.W),j.K){bc(p.h,j);var Te=j,qe=p.L;qe&&(Te.I=qe),Te.B&&(Wo(Te),ti(Te)),p.g=j}else Hc(p);0<h.i.length&&ci(h)}else pe[0]!="stop"&&pe[0]!="close"||Hn(h,7);else h.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?Hn(h,7):Xo(h):pe[0]!="noop"&&h.l&&h.l.ta(pe),h.v=0)}}Zr(4)}catch{}}var hg=class{constructor(o,u){this.g=o,this.map=u}};function Ic(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ac(o){return o.h?1:o.g?o.g.size:0}function Go(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Qo(o,u){o.g?o.g.add(u):o.h=u}function bc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Ic.prototype.cancel=function(){if(this.i=Rc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Rc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return L(o.i)}function dg(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],h=o.length,p=0;p<h;p++)u.push(o[p]);return u}u=[],h=0;for(p in o)u[h++]=o[p];return u}function fg(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const p in o)u[h++]=p;return u}}}function Sc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=fg(o),p=dg(o),b=p.length,P=0;P<b;P++)u.call(void 0,p[P],h&&h[P],o)}var Pc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pg(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),b=null;if(0<=p){var P=o[h].substring(0,p);b=o[h].substring(p+1)}else P=o[h];u(P,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function zn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof zn){this.h=o.h,ni(this,o.j),this.o=o.o,this.g=o.g,ri(this,o.s),this.l=o.l;var u=o.i,h=new is;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),Cc(this,h),this.m=o.m}else o&&(u=String(o).match(Pc))?(this.h=!1,ni(this,u[1]||"",!0),this.o=rs(u[2]||""),this.g=rs(u[3]||"",!0),ri(this,u[4]),this.l=rs(u[5]||"",!0),Cc(this,u[6]||"",!0),this.m=rs(u[7]||"")):(this.h=!1,this.i=new is(null,this.h))}zn.prototype.toString=function(){var o=[],u=this.j;u&&o.push(ss(u,Dc,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ss(u,Dc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(ss(h,h.charAt(0)=="/"?_g:mg,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",ss(h,vg)),o.join("")};function Ht(o){return new zn(o)}function ni(o,u,h){o.j=h?rs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ri(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Cc(o,u,h){u instanceof is?(o.i=u,Eg(o.i,o.h)):(h||(u=ss(u,yg)),o.i=new is(u,o.h))}function Ae(o,u,h){o.i.set(u,h)}function si(o){return Ae(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function rs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ss(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,gg),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function gg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Dc=/[#\/\?@]/g,mg=/[#\?:]/g,_g=/[#\?]/g,yg=/[#\?@]/g,vg=/#/g;function is(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function dn(o){o.g||(o.g=new Map,o.h=0,o.i&&pg(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=is.prototype,n.add=function(o,u){dn(this),this.i=null,o=pr(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function kc(o,u){dn(o),u=pr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Vc(o,u){return dn(o),u=pr(o,u),o.g.has(u)}n.forEach=function(o,u){dn(this),this.g.forEach(function(h,p){h.forEach(function(b){o.call(u,b,p,this)},this)},this)},n.na=function(){dn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let p=0;p<u.length;p++){const b=o[p];for(let P=0;P<b.length;P++)h.push(u[p])}return h},n.V=function(o){dn(this);let u=[];if(typeof o=="string")Vc(this,o)&&(u=u.concat(this.g.get(pr(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},n.set=function(o,u){return dn(this),this.i=null,o=pr(this,o),Vc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Nc(o,u,h){kc(o,u),0<h.length&&(o.i=null,o.g.set(pr(o,u),L(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var p=u[h];const P=encodeURIComponent(String(p)),j=this.V(p);for(p=0;p<j.length;p++){var b=P;j[p]!==""&&(b+="="+encodeURIComponent(String(j[p]))),o.push(b)}}return this.i=o.join("&")};function pr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Eg(o,u){u&&!o.j&&(dn(o),o.i=null,o.g.forEach(function(h,p){var b=p.toLowerCase();p!=b&&(kc(this,p),Nc(this,b,h))},o)),o.j=u}function Tg(o,u){const h=new ts;if(l.Image){const p=new Image;p.onload=R(fn,h,"TestLoadImage: loaded",!0,u,p),p.onerror=R(fn,h,"TestLoadImage: error",!1,u,p),p.onabort=R(fn,h,"TestLoadImage: abort",!1,u,p),p.ontimeout=R(fn,h,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Ig(o,u){const h=new ts,p=new AbortController,b=setTimeout(()=>{p.abort(),fn(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(b),P.ok?fn(h,"TestPingServer: ok",!0,u):fn(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),fn(h,"TestPingServer: error",!1,u)})}function fn(o,u,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function wg(){this.g=new vt}function Ag(o,u,h){const p=h||"";try{Sc(o,function(b,P){let j=b;d(b)&&(j=hr(b)),u.push(p+P+"="+encodeURIComponent(j))})}catch(b){throw u.push(p+"type="+encodeURIComponent("_badmap")),b}}function ii(o){this.l=o.Ub||null,this.j=o.eb||!1}k(ii,dr),ii.prototype.g=function(){return new oi(this.l,this.j)},ii.prototype.i=function(o){return function(){return o}}({});function oi(o,u){K.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(oi,K),n=oi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,as(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,os(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,as(this)),this.g&&(this.readyState=3,as(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Oc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Oc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?os(this):as(this),this.readyState==3&&Oc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,os(this))},n.Qa=function(o){this.g&&(this.response=o,os(this))},n.ga=function(){this.g&&os(this)};function os(o){o.readyState=4,o.l=null,o.j=null,o.v=null,as(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function as(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function xc(o){let u="";return me(o,function(h,p){u+=p,u+=":",u+=h,u+=`\r
`}),u}function Jo(o,u,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=xc(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):Ae(o,u,h))}function Ce(o){K.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Ce,K);var bg=/^https?$/i,Rg=["POST","PUT"];n=Ce.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qo.g(),this.v=this.o?uc(this.o):uc(qo),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){Mc(this,P);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())h.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),b=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Rg,u,void 0))||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of h)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Uc(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Mc(this,P)}};function Mc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Lc(o),ai(o)}function Lc(o){o.A||(o.A=!0,ee(o,"complete"),ee(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ee(this,"complete"),ee(this,"abort"),ai(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ai(this,!0)),Ce.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Fc(this):this.bb())},n.bb=function(){Fc(this)};function Fc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Wt(o)!=4||o.Z()!=2)){if(o.u&&Wt(o)==4)fe(o.Ea,0,o);else if(ee(o,"readystatechange"),Wt(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var p;if(p=j===0){var b=String(o.D).match(Pc)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),p=!bg.test(b?b.toLowerCase():"")}h=p}if(h)ee(o,"complete"),ee(o,"success");else{o.m=6;try{var P=2<Wt(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Lc(o)}}finally{ai(o)}}}}function ai(o,u){if(o.g){Uc(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ee(o,"ready");try{h.onreadystatechange=p}catch{}}}function Uc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function Wt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),it(u)}};function Bc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Sg(o){const u={};o=(o.g&&2<=Wt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(Q(o[p]))continue;var h=A(o[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=u[b]||[];u[b]=P,P.push(h)}w(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ls(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function jc(o){this.Aa=0,this.i=[],this.j=new ts,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ls("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ls("baseRetryDelayMs",5e3,o),this.cb=ls("retryDelaySeedMs",1e4,o),this.Wa=ls("forwardChannelMaxRetries",2,o),this.wa=ls("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ic(o&&o.concurrentRequestLimit),this.Da=new wg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=jc.prototype,n.la=8,n.G=1,n.connect=function(o,u,h,p){ot(0),this.W=o,this.H=u||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Jc(this,null,this.W),ci(this)};function Xo(o){if($c(o),o.G==3){var u=o.U++,h=Ht(o.I);if(Ae(h,"SID",o.K),Ae(h,"RID",u),Ae(h,"TYPE","terminate"),cs(o,h),u=new hn(o,o.j,u),u.L=2,u.v=si(Ht(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=u.v,h=!0),h||(u.g=Xc(u.j,null),u.g.ea(u.v)),u.F=Date.now(),ti(u)}Qc(o)}function li(o){o.g&&(Zo(o),o.g.cancel(),o.g=null)}function $c(o){li(o),o.u&&(l.clearTimeout(o.u),o.u=null),ui(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function ci(o){if(!wc(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ee||Fn(),de||(Ee(),de=!0),wt.add(u,o),o.B=0}}function Pg(o,u){return Ac(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=es(E(o.Ga,o,u),Gc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new hn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=m(P),I(P,this.S)):P=this.S),this.m!==null||this.O||(b.H=P,P=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=zc(this,b,u),h=Ht(this.I),Ae(h,"RID",o),Ae(h,"CVER",22),this.D&&Ae(h,"X-HTTP-Session-Id",this.D),cs(this,h),P&&(this.O?u="headers="+encodeURIComponent(String(xc(P)))+"&"+u:this.m&&Jo(h,this.m,P)),Qo(this.h,b),this.Ua&&Ae(h,"TYPE","init"),this.P?(Ae(h,"$req",u),Ae(h,"SID","null"),b.T=!0,Ho(b,h,null)):Ho(b,h,u),this.G=2}}else this.G==3&&(o?qc(this,o):this.i.length==0||wc(this.h)||qc(this))};function qc(o,u){var h;u?h=u.l:h=o.U++;const p=Ht(o.I);Ae(p,"SID",o.K),Ae(p,"RID",h),Ae(p,"AID",o.T),cs(o,p),o.m&&o.o&&Jo(p,o.m,o.o),h=new hn(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=zc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Qo(o.h,h),Ho(h,p,u)}function cs(o,u){o.H&&me(o.H,function(h,p){Ae(u,p,h)}),o.l&&Sc({},function(h,p){Ae(u,p,h)})}function zc(o,u,h){h=Math.min(o.i.length,h);var p=o.l?E(o.l.Na,o.l,o):null;e:{var b=o.i;let P=-1;for(;;){const j=["count="+h];P==-1?0<h?(P=b[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let Te=!0;for(let qe=0;qe<h;qe++){let pe=b[qe].g;const Je=b[qe].map;if(pe-=P,0>pe)P=Math.max(0,b[qe].g-100),Te=!1;else try{Ag(Je,j,"req"+pe+"_")}catch{p&&p(Je)}}if(Te){p=j.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,p}function Hc(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ee||Fn(),de||(Ee(),de=!0),wt.add(u,o),o.v=0}}function Yo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=es(E(o.Fa,o),Gc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Wc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=es(E(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),li(this),Wc(this))};function Zo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Wc(o){o.g=new hn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Ht(o.qa);Ae(u,"RID","rpc"),Ae(u,"SID",o.K),Ae(u,"AID",o.T),Ae(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ae(u,"TO",o.ja),Ae(u,"TYPE","xmlhttp"),cs(o,u),o.m&&o.o&&Jo(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=si(Ht(u)),h.m=null,h.P=!0,vc(h,o)}n.Za=function(){this.C!=null&&(this.C=null,li(this),Yo(this),ot(19))};function ui(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Kc(o,u){var h=null;if(o.g==u){ui(o),Zo(o),o.g=null;var p=2}else if(Go(o.h,u))h=u.D,bc(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var b=o.B;p=Ys(),ee(p,new gc(p,h)),ci(o)}else Hc(o);else if(b=u.s,b==3||b==0&&0<u.X||!(p==1&&Pg(o,u)||p==2&&Yo(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),b){case 1:Hn(o,5);break;case 4:Hn(o,10);break;case 3:Hn(o,6);break;default:Hn(o,2)}}}function Gc(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function Hn(o,u){if(o.j.info("Error code "+u),u==2){var h=E(o.fb,o),p=o.Xa;const b=!p;p=new zn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ni(p,"https"),si(p),b?Tg(p.toString(),h):Ig(p.toString(),h)}else ot(2);o.G=0,o.l&&o.l.sa(u),Qc(o),$c(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Qc(o){if(o.G=0,o.ka=[],o.l){const u=Rc(o.h);(u.length!=0||o.i.length!=0)&&(F(o.ka,u),F(o.ka,o.i),o.h.i.length=0,L(o.i),o.i.length=0),o.l.ra()}}function Jc(o,u,h){var p=h instanceof zn?Ht(h):new zn(h);if(p.g!="")u&&(p.g=u+"."+p.g),ri(p,p.s);else{var b=l.location;p=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;var P=new zn(null);p&&ni(P,p),u&&(P.g=u),b&&ri(P,b),h&&(P.l=h),p=P}return h=o.D,u=o.ya,h&&u&&Ae(p,h,u),Ae(p,"VER",o.la),cs(o,p),p}function Xc(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ce(new ii({eb:h})):new Ce(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yc(){}n=Yc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function hi(){}hi.prototype.g=function(o,u){return new ft(o,u)};function ft(o,u){K.call(this),this.g=new jc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!Q(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!Q(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new gr(this)}k(ft,K),ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ft.prototype.close=function(){Xo(this.g)},ft.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=hr(o),o=h);u.i.push(new hg(u.Ya++,o)),u.G==3&&ci(u)},ft.prototype.N=function(){this.g.l=null,delete this.j,Xo(this.g),delete this.g,ft.aa.N.call(this)};function Zc(o){jo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(Zc,jo);function eu(){$o.call(this),this.status=1}k(eu,$o);function gr(o){this.g=o}k(gr,Yc),gr.prototype.ua=function(){ee(this.g,"a")},gr.prototype.ta=function(o){ee(this.g,new Zc(o))},gr.prototype.sa=function(o){ee(this.g,new eu)},gr.prototype.ra=function(){ee(this.g,"b")},hi.prototype.createWebChannel=hi.prototype.g,ft.prototype.send=ft.prototype.o,ft.prototype.open=ft.prototype.m,ft.prototype.close=ft.prototype.close,gf=function(){return new hi},pf=function(){return Ys()},ff=$n,qa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zs.NO_ERROR=0,Zs.TIMEOUT=8,Zs.HTTP_ERROR=6,Ri=Zs,mc.COMPLETE="complete",df=mc,hc.EventType=Yr,Yr.OPEN="a",Yr.CLOSE="b",Yr.ERROR="c",Yr.MESSAGE="d",K.prototype.listen=K.prototype.K,fs=hc,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,hf=Ce}).apply(typeof mi<"u"?mi:typeof self<"u"?self:typeof window<"u"?window:{});const ju="@firebase/firestore";/**
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
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
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
 */let Wr="11.0.2";/**
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
 */const sr=new Al("@firebase/firestore");function Er(){return sr.logLevel}function z(n,...e){if(sr.logLevel<=ae.DEBUG){const t=e.map(Sl);sr.debug(`Firestore (${Wr}): ${n}`,...t)}}function nn(n,...e){if(sr.logLevel<=ae.ERROR){const t=e.map(Sl);sr.error(`Firestore (${Wr}): ${n}`,...t)}}function Lr(n,...e){if(sr.logLevel<=ae.WARN){const t=e.map(Sl);sr.warn(`Firestore (${Wr}): ${n}`,...t)}}function Sl(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function te(n="Unexpected state"){const e=`FIRESTORE (${Wr}) INTERNAL ASSERTION FAILED: `+n;throw nn(e),new Error(e)}function ve(n,e){n||te()}function ie(n,e){return n}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends ln{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class mf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ze.UNAUTHENTICATED))}shutdown(){}}class Nv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Ov{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ve(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Zn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new mf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new Ze(e)}}class xv{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Mv{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new xv(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fv{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){ve(this.o===void 0);const r=i=>{i.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ve(typeof t.token=="string"),this.R=t.token,new Lv(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Uv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class _f{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Uv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function ce(n,e){return n<e?-1:n>e?1:0}function Fr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */class Me{static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Me(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Y(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class re{static fromTimestamp(e){return new re(e)}static min(){return new re(new Me(0,0))}static max(){return new re(new Me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Os{constructor(e,t,r){t===void 0?t=0:t>e.length&&te(),r===void 0?r=e.length-t:r>e.length-t&&te(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Os.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Os?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),a=t.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Re extends Os{construct(e,t,r){return new Re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Re(t)}static emptyPath(){return new Re([])}}const Bv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends Os{construct(e,t,r){return new He(e,t,r)}static isValidIdentifier(e){return Bv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new He(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new Y(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Y(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new Y(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(t)}static emptyPath(){return new He([])}}/**
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
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Re.fromString(e))}static fromName(e){return new Z(Re.fromString(e).popFirst(5))}static empty(){return new Z(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Re(e.slice()))}}function jv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new Me(t+1,0):new Me(t,r));return new Cn(s,Z.empty(),e)}function $v(n){return new Cn(n.readTime,n.key,-1)}class Cn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Cn(re.min(),Z.empty(),-1)}static max(){return new Cn(re.max(),Z.empty(),-1)}}function qv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(n.documentKey,e.documentKey),t!==0?t:ce(n.largestBatchId,e.largestBatchId))}/**
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
 */const zv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Kr(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==zv)throw n;z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&te(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(s=>s?D.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new D((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const d=c;t(e[d]).next(f=>{a[d]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new D((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Wv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Gr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Eo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Eo.oe=-1;function To(n){return n==null}function Hi(n){return n===0&&1/n==-1/0}function Kv(n){return typeof n=="number"&&Number.isInteger(n)&&!Hi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Gv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=$u(e)),e=Qv(n.get(t),e);return $u(e)}function Qv(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function $u(n){return n+""}/**
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
 */function qu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ln(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function yf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Pe{constructor(e,t){this.comparator=e,this.root=t||ze.EMPTY}insert(e,t){return new Pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _i(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _i(this.root,e,this.comparator,!1)}getReverseIterator(){return new _i(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _i(this.root,e,this.comparator,!0)}}class _i{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ze.RED,this.left=s??ze.EMPTY,this.right=i??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ze(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw te();const e=this.left.check();if(e!==this.right.check())throw te();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw te()}get value(){throw te()}get color(){throw te()}get left(){throw te()}get right(){throw te()}copy(e,t,r,s,i){return this}insert(e,t,r){return new ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Le{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zu(this.data.getIterator())}getIteratorFrom(e){return new zu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Le(this.comparator);return t.data=e,t}}class zu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new Rt([])}unionWith(e){let t=new Le(He.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Rt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Fr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class vf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new vf("Invalid base64 string: "+i):i}}(e);return new Ke(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Ke(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const Jv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dn(n){if(ve(!!n),typeof n=="string"){let e=0;const t=Jv.exec(n);if(ve(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(n.seconds),nanos:De(n.nanos)}}function De(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function kn(n){return typeof n=="string"?Ke.fromBase64String(n):Ke.fromUint8Array(n)}/**
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
 */function Pl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Io(n){const e=n.mapValue.fields.__previous_value__;return Pl(e)?Io(e):e}function xs(n){const e=Dn(n.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
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
 */class Xv{constructor(e,t,r,s,i,a,l,c,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=d}}class Ms{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ms("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ms&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const yi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pl(n)?4:Zv(n)?9007199254740991:Yv(n)?10:11:te()}function jt(n,e){if(n===e)return!0;const t=Vn(n);if(t!==Vn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return xs(n).isEqual(xs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Dn(s.timestampValue),l=Dn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return kn(s.bytesValue).isEqual(kn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return De(s.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(s.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return De(s.integerValue)===De(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=De(s.doubleValue),l=De(i.doubleValue);return a===l?Hi(a)===Hi(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Fr(n.arrayValue.values||[],e.arrayValue.values||[],jt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(qu(a)!==qu(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!jt(a[c],l[c])))return!1;return!0}(n,e);default:return te()}}function Ls(n,e){return(n.values||[]).find(t=>jt(t,e))!==void 0}function Ur(n,e){if(n===e)return 0;const t=Vn(n),r=Vn(e);if(t!==r)return ce(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ce(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=De(i.integerValue||i.doubleValue),c=De(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Hu(n.timestampValue,e.timestampValue);case 4:return Hu(xs(n),xs(e));case 5:return ce(n.stringValue,e.stringValue);case 6:return function(i,a){const l=kn(i),c=kn(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let d=0;d<l.length&&d<c.length;d++){const f=ce(l[d],c[d]);if(f!==0)return f}return ce(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ce(De(i.latitude),De(a.latitude));return l!==0?l:ce(De(i.longitude),De(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Wu(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,d,f;const g=i.fields||{},E=a.fields||{},R=(l=g.value)===null||l===void 0?void 0:l.arrayValue,k=(c=E.value)===null||c===void 0?void 0:c.arrayValue,L=ce(((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return L!==0?L:Wu(R,k)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===yi.mapValue&&a===yi.mapValue)return 0;if(i===yi.mapValue)return 1;if(a===yi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),d=a.fields||{},f=Object.keys(d);c.sort(),f.sort();for(let g=0;g<c.length&&g<f.length;++g){const E=ce(c[g],f[g]);if(E!==0)return E;const R=Ur(l[c[g]],d[f[g]]);if(R!==0)return R}return ce(c.length,f.length)}(n.mapValue,e.mapValue);default:throw te()}}function Hu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ce(n,e);const t=Dn(n),r=Dn(e),s=ce(t.seconds,r.seconds);return s!==0?s:ce(t.nanos,r.nanos)}function Wu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Ur(t[s],r[s]);if(i)return i}return ce(t.length,r.length)}function Br(n){return za(n)}function za(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Dn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return kn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=za(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${za(t.fields[a])}`;return s+"}"}(n.mapValue):te()}function Si(n){switch(Vn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Io(n);return e?16+Si(e):16;case 5:return 2*n.stringValue.length;case 6:return kn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Si(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Ln(r.fields,(i,a)=>{s+=i.length+Si(a)}),s}(n.mapValue);default:throw te()}}function Ha(n){return!!n&&"integerValue"in n}function Cl(n){return!!n&&"arrayValue"in n}function Ku(n){return!!n&&"nullValue"in n}function Gu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Pi(n){return!!n&&"mapValue"in n}function Yv(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ws(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ln(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ws(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ws(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Zv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Pi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ws(t)}setAll(e){let t=He.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=ws(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Pi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return jt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Pi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ln(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new mt(ws(this.value))}}function Ef(n){const e=[];return Ln(n.fields,(t,r)=>{const s=new He([t]);if(Pi(r)){const i=Ef(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Rt(e)}/**
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
 */class nt{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new nt(e,0,re.min(),re.min(),re.min(),mt.empty(),0)}static newFoundDocument(e,t,r,s){return new nt(e,1,t,re.min(),r,s,0)}static newNoDocument(e,t){return new nt(e,2,t,re.min(),re.min(),mt.empty(),0)}static newUnknownDocument(e,t){return new nt(e,3,t,re.min(),re.min(),mt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Wi{constructor(e,t){this.position=e,this.inclusive=t}}function Qu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(a.referenceValue),t.key):r=Ur(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ju(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!jt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ki{constructor(e,t="asc"){this.field=e,this.dir=t}}function eE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Tf{}class xe extends Tf{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new nE(e,t,r):t==="array-contains"?new iE(e,r):t==="in"?new oE(e,r):t==="not-in"?new aE(e,r):t==="array-contains-any"?new lE(e,r):new xe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new rE(e,r):new sE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Ur(t,this.value)):t!==null&&Vn(this.value)===Vn(t)&&this.matchesComparison(Ur(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $t extends Tf{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new $t(e,t)}matches(e){return If(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function If(n){return n.op==="and"}function wf(n){return tE(n)&&If(n)}function tE(n){for(const e of n.filters)if(e instanceof $t)return!1;return!0}function Wa(n){if(n instanceof xe)return n.field.canonicalString()+n.op.toString()+Br(n.value);if(wf(n))return n.filters.map(e=>Wa(e)).join(",");{const e=n.filters.map(t=>Wa(t)).join(",");return`${n.op}(${e})`}}function Af(n,e){return n instanceof xe?function(r,s){return s instanceof xe&&r.op===s.op&&r.field.isEqual(s.field)&&jt(r.value,s.value)}(n,e):n instanceof $t?function(r,s){return s instanceof $t&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Af(a,s.filters[l]),!0):!1}(n,e):void te()}function bf(n){return n instanceof xe?function(t){return`${t.field.canonicalString()} ${t.op} ${Br(t.value)}`}(n):n instanceof $t?function(t){return t.op.toString()+" {"+t.getFilters().map(bf).join(" ,")+"}"}(n):"Filter"}class nE extends xe{constructor(e,t,r){super(e,t,r),this.key=Z.fromName(r.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class rE extends xe{constructor(e,t){super(e,"in",t),this.keys=Rf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class sE extends xe{constructor(e,t){super(e,"not-in",t),this.keys=Rf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Rf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Z.fromName(r.referenceValue))}class iE extends xe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Cl(t)&&Ls(t.arrayValue,this.value)}}class oE extends xe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ls(this.value.arrayValue,t)}}class aE extends xe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ls(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ls(this.value.arrayValue,t)}}class lE extends xe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Cl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ls(this.value.arrayValue,r))}}/**
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
 */class cE{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function Xu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new cE(n,e,t,r,s,i,a)}function Dl(n){const e=ie(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Wa(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),To(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Br(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Br(r)).join(",")),e.ue=t}return e.ue}function kl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!eE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Af(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ju(n.startAt,e.startAt)&&Ju(n.endAt,e.endAt)}function Ka(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class wo{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function uE(n,e,t,r,s,i,a,l){return new wo(n,e,t,r,s,i,a,l)}function Vl(n){return new wo(n)}function Yu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function hE(n){return n.collectionGroup!==null}function As(n){const e=ie(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Le(He.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Ki(i,r))}),t.has(He.keyField().canonicalString())||e.ce.push(new Ki(He.keyField(),r))}return e.ce}function Mt(n){const e=ie(n);return e.le||(e.le=dE(e,As(n))),e.le}function dE(n,e){if(n.limitType==="F")return Xu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ki(s.field,i)});const t=n.endAt?new Wi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Wi(n.startAt.position,n.startAt.inclusive):null;return Xu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ga(n,e,t){return new wo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ao(n,e){return kl(Mt(n),Mt(e))&&n.limitType===e.limitType}function Sf(n){return`${Dl(Mt(n))}|lt:${n.limitType}`}function Tr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>bf(s)).join(", ")}]`),To(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Br(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Br(s)).join(",")),`Target(${r})`}(Mt(n))}; limitType=${n.limitType})`}function bo(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of As(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const d=Qu(a,l,c);return a.inclusive?d<=0:d<0}(r.startAt,As(r),s)||r.endAt&&!function(a,l,c){const d=Qu(a,l,c);return a.inclusive?d>=0:d>0}(r.endAt,As(r),s))}(n,e)}function fE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Pf(n){return(e,t)=>{let r=!1;for(const s of As(n)){const i=pE(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function pE(n,e,t){const r=n.field.isKeyField()?Z.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),d=l.data.field(i);return c!==null&&d!==null?Ur(c,d):te()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return te()}}/**
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
 */class ar{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ln(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return yf(this.inner)}size(){return this.innerSize}}/**
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
 */const gE=new Pe(Z.comparator);function rn(){return gE}const Cf=new Pe(Z.comparator);function ps(...n){let e=Cf;for(const t of n)e=e.insert(t.key,t);return e}function Df(n){let e=Cf;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Jn(){return bs()}function kf(){return bs()}function bs(){return new ar(n=>n.toString(),(n,e)=>n.isEqual(e))}const mE=new Pe(Z.comparator),_E=new Le(Z.comparator);function le(...n){let e=_E;for(const t of n)e=e.add(t);return e}const yE=new Le(ce);function vE(){return yE}/**
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
 */function Nl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hi(e)?"-0":e}}function Vf(n){return{integerValue:""+n}}function EE(n,e){return Kv(e)?Vf(e):Nl(n,e)}/**
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
 */class Ro{constructor(){this._=void 0}}function TE(n,e,t){return n instanceof Gi?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Pl(i)&&(i=Io(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(t,e):n instanceof Fs?Of(n,e):n instanceof Us?xf(n,e):function(s,i){const a=Nf(s,i),l=Zu(a)+Zu(s.Pe);return Ha(a)&&Ha(s.Pe)?Vf(l):Nl(s.serializer,l)}(n,e)}function IE(n,e,t){return n instanceof Fs?Of(n,e):n instanceof Us?xf(n,e):t}function Nf(n,e){return n instanceof Qi?function(r){return Ha(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Gi extends Ro{}class Fs extends Ro{constructor(e){super(),this.elements=e}}function Of(n,e){const t=Mf(e);for(const r of n.elements)t.some(s=>jt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Us extends Ro{constructor(e){super(),this.elements=e}}function xf(n,e){let t=Mf(e);for(const r of n.elements)t=t.filter(s=>!jt(s,r));return{arrayValue:{values:t}}}class Qi extends Ro{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Zu(n){return De(n.integerValue||n.doubleValue)}function Mf(n){return Cl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function wE(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Fs&&s instanceof Fs||r instanceof Us&&s instanceof Us?Fr(r.elements,s.elements,jt):r instanceof Qi&&s instanceof Qi?jt(r.Pe,s.Pe):r instanceof Gi&&s instanceof Gi}(n.transform,e.transform)}class AE{constructor(e,t){this.version=e,this.transformResults=t}}class en{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ci(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class So{}function Lf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Uf(n.key,en.none()):new Po(n.key,n.data,en.none());{const t=n.data,r=mt.empty();let s=new Le(He.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new lr(n.key,r,new Rt(s.toArray()),en.none())}}function bE(n,e,t){n instanceof Po?function(s,i,a){const l=s.value.clone(),c=th(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof lr?function(s,i,a){if(!Ci(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=th(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Ff(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Rs(n,e,t,r){return n instanceof Po?function(i,a,l,c){if(!Ci(i.precondition,a))return l;const d=i.value.clone(),f=nh(i.fieldTransforms,c,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof lr?function(i,a,l,c){if(!Ci(i.precondition,a))return l;const d=nh(i.fieldTransforms,c,a),f=a.data;return f.setAll(Ff(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,l){return Ci(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function RE(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Nf(r.transform,s||null);i!=null&&(t===null&&(t=mt.empty()),t.set(r.field,i))}return t||null}function eh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Fr(r,s,(i,a)=>wE(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Po extends So{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class lr extends So{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ff(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function th(n,e,t){const r=new Map;ve(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,IE(a,l,t[s]))}return r}function nh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,TE(i,a,e))}return r}class Uf extends So{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class SE extends So{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class PE{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&bE(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Rs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Rs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=kf();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=Lf(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),le())}isEqual(e){return this.batchId===e.batchId&&Fr(this.mutations,e.mutations,(t,r)=>eh(t,r))&&Fr(this.baseMutations,e.baseMutations,(t,r)=>eh(t,r))}}class Ol{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ve(e.mutations.length===r.length);let s=function(){return mE}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ol(e,t,r,s)}}/**
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
 */class CE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class DE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ke,ue;function kE(n){switch(n){default:return te();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function Bf(n){if(n===void 0)return nn("GRPC error has no .code"),O.UNKNOWN;switch(n){case ke.OK:return O.OK;case ke.CANCELLED:return O.CANCELLED;case ke.UNKNOWN:return O.UNKNOWN;case ke.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case ke.INTERNAL:return O.INTERNAL;case ke.UNAVAILABLE:return O.UNAVAILABLE;case ke.UNAUTHENTICATED:return O.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case ke.NOT_FOUND:return O.NOT_FOUND;case ke.ALREADY_EXISTS:return O.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return O.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case ke.ABORTED:return O.ABORTED;case ke.OUT_OF_RANGE:return O.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return O.UNIMPLEMENTED;case ke.DATA_LOSS:return O.DATA_LOSS;default:return te()}}(ue=ke||(ke={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function VE(){return new TextEncoder}/**
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
 */const NE=new Yn([4294967295,4294967295],0);function rh(n){const e=VE().encode(n),t=new uf;return t.update(e),new Uint8Array(t.digest())}function sh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Yn([t,r],0),new Yn([s,i],0)]}class xl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new gs(`Invalid padding: ${t}`);if(r<0)throw new gs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new gs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new gs(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Yn.fromNumber(this.Te)}Ee(e,t,r){let s=e.add(t.multiply(Yn.fromNumber(r)));return s.compare(NE)===1&&(s=new Yn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=rh(e),[r,s]=sh(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new xl(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Te===0)return;const t=rh(e),[r,s]=sh(t);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class gs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Co{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Hs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Co(re.min(),s,new Pe(ce),rn(),le())}}class Hs{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Hs(r,t,le(),le(),le())}}/**
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
 */class Di{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class jf{constructor(e,t){this.targetId=e,this.me=t}}class $f{constructor(e,t,r=Ke.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class ih{constructor(){this.fe=0,this.ge=oh(),this.pe=Ke.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=le(),t=le(),r=le();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:te()}}),new Hs(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=oh()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class OE{constructor(e){this.Le=e,this.Be=new Map,this.ke=rn(),this.qe=vi(),this.Qe=vi(),this.Ke=new Pe(ce)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.je(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.De(e.resumeToken));break;default:te()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,r=e.me.count,s=this.Ye(t);if(s){const i=s.target;if(Ka(i))if(r===0){const a=new Z(i.path);this.We(t,a,nt.newNoDocument(a,re.min()))}else ve(r===1);else{const a=this.Ze(t);if(a!==r){const l=this.Xe(e),c=l?this.et(l,e,a):1;if(c!==0){this.He(t);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=kn(r).toUint8Array()}catch(c){if(c instanceof vf)return Lr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new xl(a,s,i)}catch(c){return Lr(c instanceof gs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,t,r){return t.me.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Le.nt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(t,i,null),s++)}),s}it(e){const t=new Map;this.Be.forEach((i,a)=>{const l=this.Ye(a);if(l){if(i.current&&Ka(l.target)){const c=new Z(l.target.path);this.st(c).has(a)||this.ot(a,c)||this.We(a,c,nt.newNoDocument(c,e))}i.be&&(t.set(a,i.ve()),i.Ce())}});let r=le();this.Qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const d=this.Ye(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new Co(e,t,this.Ke,this.ke,r);return this.ke=rn(),this.qe=vi(),this.Qe=vi(),this.Ke=new Pe(ce),s}Ue(e,t){if(!this.je(e))return;const r=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,t)?s.Fe(t,1):s.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new ih,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new Le(ce),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Le(ce),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||z("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new ih),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function vi(){return new Pe(Z.comparator)}function oh(){return new Pe(Z.comparator)}const xE={asc:"ASCENDING",desc:"DESCENDING"},ME={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LE={and:"AND",or:"OR"};class FE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qa(n,e){return n.useProto3Json||To(e)?e:{value:e}}function Ji(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function UE(n,e){return Ji(n,e.toTimestamp())}function Lt(n){return ve(!!n),re.fromTimestamp(function(t){const r=Dn(t);return new Me(r.seconds,r.nanos)}(n))}function Ml(n,e){return Ja(n,e).canonicalString()}function Ja(n,e){const t=function(s){return new Re(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function zf(n){const e=Re.fromString(n);return ve(Qf(e)),e}function Xa(n,e){return Ml(n.databaseId,e.path)}function Ea(n,e){const t=zf(e);if(t.get(1)!==n.databaseId.projectId)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Y(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Z(Wf(t))}function Hf(n,e){return Ml(n.databaseId,e)}function BE(n){const e=zf(n);return e.length===4?Re.emptyPath():Wf(e)}function Ya(n){return new Re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Wf(n){return ve(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ah(n,e,t){return{name:Xa(n,e),fields:t.value.mapValue.fields}}function jE(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:te()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(ve(f===void 0||typeof f=="string"),Ke.fromBase64String(f||"")):(ve(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ke.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const f=d.code===void 0?O.UNKNOWN:Bf(d.code);return new Y(f,d.message||"")}(a);t=new $f(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ea(n,r.document.name),i=Lt(r.document.updateTime),a=r.document.createTime?Lt(r.document.createTime):re.min(),l=new mt({mapValue:{fields:r.document.fields}}),c=nt.newFoundDocument(s,i,a,l),d=r.targetIds||[],f=r.removedTargetIds||[];t=new Di(d,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ea(n,r.document),i=r.readTime?Lt(r.readTime):re.min(),a=nt.newNoDocument(s,i),l=r.removedTargetIds||[];t=new Di([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ea(n,r.document),i=r.removedTargetIds||[];t=new Di([],i,s,null)}else{if(!("filter"in e))return te();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new DE(s,i),l=r.targetId;t=new jf(l,a)}}return t}function $E(n,e){let t;if(e instanceof Po)t={update:ah(n,e.key,e.value)};else if(e instanceof Uf)t={delete:Xa(n,e.key)};else if(e instanceof lr)t={update:ah(n,e.key,e.data),updateMask:XE(e.fieldMask)};else{if(!(e instanceof SE))return te();t={verify:Xa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Gi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Fs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Us)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Qi)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw te()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:UE(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te()}(n,e.precondition)),t}function qE(n,e){return n&&n.length>0?(ve(e!==void 0),n.map(t=>function(s,i){let a=s.updateTime?Lt(s.updateTime):Lt(i);return a.isEqual(re.min())&&(a=Lt(i)),new AE(a,s.transformResults||[])}(t,e))):[]}function zE(n,e){return{documents:[Hf(n,e.path)]}}function HE(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Hf(n,s);const i=function(d){if(d.length!==0)return Gf($t.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(E){return{field:Ir(E.field),direction:GE(E.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Qa(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ct:t,parent:s}}function WE(n){let e=BE(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ve(r===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(g){const E=Kf(g);return E instanceof $t&&wf(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(E=>function(k){return new Ki(wr(k.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(E))}(t.orderBy));let l=null;t.limit&&(l=function(g){let E;return E=typeof g=="object"?g.value:g,To(E)?null:E}(t.limit));let c=null;t.startAt&&(c=function(g){const E=!!g.before,R=g.values||[];return new Wi(R,E)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const E=!g.before,R=g.values||[];return new Wi(R,E)}(t.endAt)),uE(e,s,a,i,l,"F",c,d)}function KE(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Kf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=wr(t.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=wr(t.unaryFilter.field);return xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=wr(t.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=wr(t.unaryFilter.field);return xe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return te()}}(n):n.fieldFilter!==void 0?function(t){return xe.create(wr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return te()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return $t.create(t.compositeFilter.filters.map(r=>Kf(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te()}}(t.compositeFilter.op))}(n):te()}function GE(n){return xE[n]}function QE(n){return ME[n]}function JE(n){return LE[n]}function Ir(n){return{fieldPath:n.canonicalString()}}function wr(n){return He.fromServerFormat(n.fieldPath)}function Gf(n){return n instanceof xe?function(t){if(t.op==="=="){if(Gu(t.value))return{unaryFilter:{field:Ir(t.field),op:"IS_NAN"}};if(Ku(t.value))return{unaryFilter:{field:Ir(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Gu(t.value))return{unaryFilter:{field:Ir(t.field),op:"IS_NOT_NAN"}};if(Ku(t.value))return{unaryFilter:{field:Ir(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ir(t.field),op:QE(t.op),value:t.value}}}(n):n instanceof $t?function(t){const r=t.getFilters().map(s=>Gf(s));return r.length===1?r[0]:{compositeFilter:{op:JE(t.op),filters:r}}}(n):te()}function XE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Qf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class In{constructor(e,t,r,s,i=re.min(),a=re.min(),l=Ke.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new In(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class YE{constructor(e){this.ht=e}}function ZE(n){const e=WE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ga(e,e.limit,"L"):e}/**
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
 */class eT{constructor(){this.ln=new tT}addToCollectionParentIndex(e,t){return this.ln.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Cn.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Cn.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class tT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Le(Re.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Le(Re.comparator)).toArray()}}/**
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
 */const lh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(41943040,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);/**
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
 */class jr{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new jr(0)}static Qn(){return new jr(-1)}}/**
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
 */function ch([n,e],[t,r]){const s=ce(n,t);return s===0?ce(e,r):s}class nT{constructor(e){this.Gn=e,this.buffer=new Le(ch),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ch(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class rT{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Gr(t)?z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Kr(t)}await this.Yn(3e5)})}}class sT{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return D.resolve(Eo.oe);const r=new nT(t);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Zn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(lh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),lh):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let r,s,i,a,l,c,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,t))).next(g=>(i=g,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(d=Date.now(),Er()<=ae.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${g} documents in `+(d-c)+`ms
Total Duration: ${d-f}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function iT(n,e){return new sT(n,e)}/**
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
 */class oT{constructor(){this.changes=new ar(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class aT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class lT{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Rs(r.mutation,s,Rt.empty(),Me.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,t,r=le()){const s=Jn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=ps();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Jn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,le()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=rn();const a=bs(),l=function(){return bs()}();return t.forEach((c,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof lr)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),Rs(f.mutation,d,f.mutation.getFieldMask(),Me.now())):a.set(d.key,Rt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var g;return l.set(d,new aT(f,(g=a.get(d))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,t){const r=bs();let s=new Pe((a,l)=>a-l),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const d=t.get(c);if(d===null)return;let f=r.get(c)||Rt.empty();f=l.applyToLocalView(d,f),r.set(c,f);const g=(s.get(l.batchId)||le()).add(c);s=s.insert(l.batchId,g)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),d=c.key,f=c.value,g=kf();f.forEach(E=>{if(!i.has(E)){const R=Lf(t.get(E),r.get(E));R!==null&&g.set(E,R),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return Z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):hE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):D.resolve(Jn());let l=-1,c=i;return a.next(d=>D.forEach(d,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(f)?D.resolve():this.remoteDocumentCache.getEntry(e,f).next(E=>{c=c.insert(f,E)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,c,d,le())).next(f=>({batchId:l,changes:Df(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next(r=>{let s=ps();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=ps();return this.indexManager.getCollectionParents(e,i).next(l=>D.forEach(l,c=>{const d=function(g,E){return new wo(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((g,E)=>{a=a.insert(g,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,nt.newInvalidDocument(f)))});let l=ps();return a.forEach((c,d)=>{const f=i.get(c);f!==void 0&&Rs(f.mutation,d,Rt.empty(),Me.now()),bo(t,d)&&(l=l.insert(c,d))}),l})}}/**
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
 */class cT{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return D.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Lt(s.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(s){return{name:s.name,query:ZE(s.bundledQuery),readTime:Lt(s.readTime)}}(t)),D.resolve()}}/**
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
 */class uT{constructor(){this.overlays=new Pe(Z.comparator),this.Er=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Jn();return D.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Tt(e,t,i)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const s=Jn(),i=t.length+1,a=new Z(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,d=c.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Pe((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=Jn(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=Jn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=s)););return D.resolve(l)}Tt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new CE(t,r));let i=this.Er.get(t);i===void 0&&(i=le(),this.Er.set(t,i)),this.Er.set(t,i.add(r.key))}}/**
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
 */class hT{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class Ll{constructor(){this.dr=new Le(Be.Ar),this.Rr=new Le(Be.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const r=new Be(e,t);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.gr(new Be(e,t))}pr(e,t){e.forEach(r=>this.removeReference(r,t))}yr(e){const t=new Z(new Re([])),r=new Be(t,e),s=new Be(t,e+1),i=[];return this.Rr.forEachInRange([r,s],a=>{this.gr(a),i.push(a.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new Z(new Re([])),r=new Be(t,e),s=new Be(t,e+1);let i=le();return this.Rr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new Be(e,0),r=this.dr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return Z.comparator(e.key,t.key)||ce(e.br,t.br)}static Vr(e,t){return ce(e.br,t.br)||Z.comparator(e.key,t.key)}}/**
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
 */class dT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new Le(Be.Ar)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new PE(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.vr=this.vr.add(new Be(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Fr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Be(t,0),s=new Be(t,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],a=>{const l=this.Cr(a.br);i.push(l)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Le(ce);return t.forEach(s=>{const i=new Be(s,0),a=new Be(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,a],l=>{r=r.add(l.br)})}),D.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const a=new Be(new Z(i),0);let l=new Le(ce);return this.vr.forEachWhile(c=>{const d=c.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(c.br)),!0)},a),D.resolve(this.Mr(l))}Mr(e){const t=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ve(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return D.forEach(t.mutations,s=>{const i=new Be(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,t){const r=new Be(t,0),s=this.vr.firstAfterOrEqual(r);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class fT{constructor(e){this.Nr=e,this.docs=function(){return new Pe(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.Nr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(t))}getEntries(e,t){let r=rn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():nt.newInvalidDocument(s))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=rn();const a=t.path,l=new Z(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:d,value:{document:f}}=c.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||qv($v(f),r)<=0||(s.has(f.key)||bo(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,r,s){te()}Lr(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new pT(this)}getSize(e){return D.resolve(this.size)}}class pT extends oT{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class gT{constructor(e){this.persistence=e,this.Br=new ar(t=>Dl(t),kl),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.kr=0,this.qr=new Ll,this.targetCount=0,this.Qr=jr.qn()}forEachTarget(e,t){return this.Br.forEach((r,s)=>t(s)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.kr&&(this.kr=t),D.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new jr(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Un(t),D.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Br.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Br.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),D.waitFor(i).next(()=>s)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.Br.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.qr.mr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.qr.pr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.qr.Sr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.qr.containsKey(t))}}/**
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
 */class Jf{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Eo(0),this.Ur=!1,this.Ur=!0,this.Wr=new hT,this.referenceDelegate=e(this),this.Gr=new gT(this),this.indexManager=new eT,this.remoteDocumentCache=function(s){return new fT(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new YE(t),this.jr=new cT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new uT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Kr[e.toKey()];return r||(r=new dT(t,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,r){z("MemoryPersistence","Starting transaction:",e);const s=new mT(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,t){return D.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,t)))}}class mT extends Hv{constructor(e){super(),this.currentSequenceNumber=e}}class Fl{constructor(e){this.persistence=e,this.Zr=new Ll,this.Xr=null}static ei(e){return new Fl(e)}get ti(){if(this.Xr)return this.Xr;throw te()}addReference(e,t,r){return this.Zr.addReference(r,t),this.ti.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Zr.removeReference(r,t),this.ti.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),D.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.ti,r=>{const s=Z.fromPath(r);return this.ni(e,s).next(i=>{i||t.removeEntry(s,re.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(r=>{r?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return D.or([()=>D.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Xi{constructor(e,t){this.persistence=e,this.ri=new ar(r=>Gv(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=iT(this,t)}static ei(e,t){return new Xi(e,t)}Hr(){}Jr(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}nr(e){let t=0;return this.er(e,r=>{t++}).next(()=>t)}er(e,t){return D.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?D.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,a=>this.ir(e,a,t).next(l=>{l||(r++,i.removeEntry(a,re.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,t,r){return this.ri.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),D.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Si(e.data.value)),t}ir(e,t,r){return D.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ri.get(t);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ul{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Wi=r,this.Gi=s}static zi(e,t){let r=le(),s=le();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ul(e,t.fromCache,r,s)}}/**
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
 */class _T{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class yT{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return gy()?8:Wv(st())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Xi(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.es(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new _T;return this.ts(e,t,a).next(l=>{if(i.result=l,this.Hi)return this.ns(e,t,a,l.size)})}).next(()=>i.result)}ns(e,t,r,s){return r.documentReadCount<this.Ji?(Er()<=ae.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Tr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),D.resolve()):(Er()<=ae.DEBUG&&z("QueryEngine","Query:",Tr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Er()<=ae.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Tr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mt(t))):D.resolve())}Xi(e,t){if(Yu(t))return D.resolve(null);let r=Mt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ga(t,null,"F"),r=Mt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=le(...i);return this.Zi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const d=this.rs(t,l);return this.ss(t,d,a,c.readTime)?this.Xi(e,Ga(t,null,"F")):this.os(e,d,t,c)}))})))}es(e,t,r,s){return Yu(t)||s.isEqual(re.min())?D.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const a=this.rs(t,i);return this.ss(t,a,r,s)?D.resolve(null):(Er()<=ae.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Tr(t)),this.os(e,a,t,jv(s,-1)).next(l=>l))})}rs(e,t){let r=new Le(Pf(e));return t.forEach((s,i)=>{bo(e,i)&&(r=r.add(i))}),r}ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,t,r){return Er()<=ae.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Tr(t)),this.Zi.getDocumentsMatchingQuery(e,t,Cn.min(),r)}os(e,t,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class vT{constructor(e,t,r,s){this.persistence=e,this._s=t,this.serializer=s,this.us=new Pe(ce),this.cs=new ar(i=>Dl(i),kl),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lT(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function ET(n,e,t,r){return new vT(n,e,t,r)}async function Xf(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ps(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=le();for(const d of s){a.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}for(const d of i){l.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(d=>({Ts:d,removedBatchIds:a,addedBatchIds:l}))})})}function TT(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.hs.newChangeBuffer({trackRemovals:!0});return function(l,c,d,f){const g=d.batch,E=g.keys();let R=D.resolve();return E.forEach(k=>{R=R.next(()=>f.getEntry(c,k)).next(L=>{const F=d.docVersions.get(k);ve(F!==null),L.version.compareTo(F)<0&&(g.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),f.addEntry(L)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(c,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=le();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(c=c.add(l.batch.mutations[d].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function Yf(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function IT(n,e){const t=ie(n),r=e.snapshotVersion;let s=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.hs.newChangeBuffer({trackRemovals:!0});s=t.us;const l=[];e.targetChanges.forEach((f,g)=>{const E=s.get(g);if(!E)return;l.push(t.Gr.removeMatchingKeys(i,f.removedDocuments,g).next(()=>t.Gr.addMatchingKeys(i,f.addedDocuments,g)));let R=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?R=R.withResumeToken(Ke.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),s=s.insert(g,R),function(L,F,W){return L.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(E,R,f)&&l.push(t.Gr.updateTargetData(i,R))});let c=rn(),d=le();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(wT(i,a,e.documentUpdates).next(f=>{c=f.Is,d=f.Es})),!r.isEqual(re.min())){const f=t.Gr.getLastRemoteSnapshotVersion(i).next(g=>t.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return D.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,d)).next(()=>c)}).then(i=>(t.us=s,i))}function wT(n,e,t){let r=le(),s=le();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=rn();return t.forEach((l,c)=>{const d=i.get(l);c.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",c.version)}),{Is:a,Es:s}})}function AT(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bT(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Gr.getTargetData(r,e).next(i=>i?(s=i,D.resolve(s)):t.Gr.allocateTargetId(r).next(a=>(s=new In(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.us=t.us.insert(r.targetId,r),t.cs.set(e,r.targetId)),r})}async function Za(n,e,t){const r=ie(n),s=r.us.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Gr(a))throw a;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function uh(n,e,t){const r=ie(n);let s=re.min(),i=le();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,d,f){const g=ie(c),E=g.cs.get(f);return E!==void 0?D.resolve(g.us.get(E)):g.Gr.getTargetData(d,f)}(r,a,Mt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,t?s:re.min(),t?i:le())).next(l=>(RT(r,fE(e),l),{documents:l,ds:i})))}function RT(n,e,t){let r=n.ls.get(e)||re.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ls.set(e,r)}class hh{constructor(){this.activeTargetIds=vE()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ST{constructor(){this._o=new hh,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,r){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new hh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class PT{uo(e){}shutdown(){}}/**
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
 */class dh{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ei=null;function Ta(){return Ei===null?Ei=function(){return 268435456+Math.round(2147483648*Math.random())}():Ei++,"0x"+Ei.toString(16)}/**
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
 */const CT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class DT{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Ye="WebChannelConnection";class kT extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+t.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(t,r,s,i,a){const l=Ta(),c=this.No(t,r.toUriEncodedString());z("RestConnection",`Sending RPC '${t}' ${l}:`,c,s);const d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(d,i,a),this.Bo(t,c,d,s).then(f=>(z("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw Lr("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}ko(t,r,s,i,a,l){return this.Oo(t,r,s,i,a)}Lo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),s&&s.headers.forEach((i,a)=>t[a]=i)}No(t,r){const s=CT[t];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,r,s){const i=Ta();return new Promise((a,l)=>{const c=new hf;c.setWithCredentials(!0),c.listenOnce(df.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ri.NO_ERROR:const f=c.getResponseJson();z(Ye,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case Ri.TIMEOUT:z(Ye,`RPC '${e}' ${i} timed out`),l(new Y(O.DEADLINE_EXCEEDED,"Request time out"));break;case Ri.HTTP_ERROR:const g=c.getStatus();if(z(Ye,`RPC '${e}' ${i} failed with status:`,g,"response text:",c.getResponseText()),g>0){let E=c.getResponseJson();Array.isArray(E)&&(E=E[0]);const R=E==null?void 0:E.error;if(R&&R.status&&R.message){const k=function(F){const W=F.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(W)>=0?W:O.UNKNOWN}(R.status);l(new Y(k,R.message))}else l(new Y(O.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Y(O.UNAVAILABLE,"Connection failed."));break;default:te()}}finally{z(Ye,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);z(Ye,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",d,r,15)})}qo(e,t,r){const s=Ta(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=gf(),l=pf(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=i.join("");z(Ye,`Creating RPC '${e}' stream ${s}: ${f}`,c);const g=a.createWebChannel(f,c);let E=!1,R=!1;const k=new DT({Eo:F=>{R?z(Ye,`Not sending because RPC '${e}' stream ${s} is closed:`,F):(E||(z(Ye,`Opening RPC '${e}' stream ${s} transport.`),g.open(),E=!0),z(Ye,`RPC '${e}' stream ${s} sending:`,F),g.send(F))},Ao:()=>g.close()}),L=(F,W,Q)=>{F.listen(W,J=>{try{Q(J)}catch(H){setTimeout(()=>{throw H},0)}})};return L(g,fs.EventType.OPEN,()=>{R||(z(Ye,`RPC '${e}' stream ${s} transport opened.`),k.So())}),L(g,fs.EventType.CLOSE,()=>{R||(R=!0,z(Ye,`RPC '${e}' stream ${s} transport closed`),k.Do())}),L(g,fs.EventType.ERROR,F=>{R||(R=!0,Lr(Ye,`RPC '${e}' stream ${s} transport errored:`,F),k.Do(new Y(O.UNAVAILABLE,"The operation could not be completed")))}),L(g,fs.EventType.MESSAGE,F=>{var W;if(!R){const Q=F.data[0];ve(!!Q);const J=Q,H=(J==null?void 0:J.error)||((W=J[0])===null||W===void 0?void 0:W.error);if(H){z(Ye,`RPC '${e}' stream ${s} received error:`,H);const he=H.status;let me=function(v){const I=ke[v];if(I!==void 0)return Bf(I)}(he),w=H.message;me===void 0&&(me=O.INTERNAL,w="Unknown error status: "+he+" with message "+H.message),R=!0,k.Do(new Y(me,w)),g.close()}else z(Ye,`RPC '${e}' stream ${s} received:`,Q),k.vo(Q)}}),L(l,ff.STAT_EVENT,F=>{F.stat===qa.PROXY?z(Ye,`RPC '${e}' stream ${s} detected buffering proxy`):F.stat===qa.NOPROXY&&z(Ye,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.bo()},0),k}}function Ia(){return typeof document<"u"?document:null}/**
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
 */function Do(n){return new FE(n,!0)}/**
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
 */class Zf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=t,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,t-r);s>0&&z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class ep{constructor(e,t,r,s,i,a,l,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Zf(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(nn(t.toString()),nn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===t&&this.I_(r,s)},r=>{e(()=>{const s=new Y(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,t){const r=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VT extends ep{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=jE(this.serializer,e),r=function(i){if(!("targetChange"in i))return re.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?re.min():a.readTime?Lt(a.readTime):re.min()}(e);return this.listener.R_(t,r)}V_(e){const t={};t.database=Ya(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=Ka(c)?{documents:zE(i,c)}:{query:HE(i,c).ct},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=qf(i,a.resumeToken);const d=Qa(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(re.min())>0){l.readTime=Ji(i,a.snapshotVersion.toTimestamp());const d=Qa(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=KE(this.serializer,e);r&&(t.labels=r),this.c_(t)}m_(e){const t={};t.database=Ya(this.serializer),t.removeTarget=e,this.c_(t)}}class NT extends ep{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return ve(!!e.streamToken),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=qE(e.writeResults,e.commitTime),r=Lt(e.commitTime);return this.listener.y_(r,t)}w_(){const e={};e.database=Ya(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>$E(this.serializer,r))};this.c_(t)}}/**
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
 */class OT extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new Y(O.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Oo(e,Ja(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(O.UNKNOWN,i.toString())})}ko(e,t,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.ko(e,Ja(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Y(O.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class xT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(nn(t),this.C_=!1):z("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class MT{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{cr(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=ie(c);d.k_.add(4),await Ws(d),d.K_.set("Unknown"),d.k_.delete(4),await ko(d)}(this))})}),this.K_=new xT(r,s)}}async function ko(n){if(cr(n))for(const e of n.q_)await e(!0)}async function Ws(n){for(const e of n.q_)await e(!1)}function tp(n,e){const t=ie(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),ql(t)?$l(t):Qr(t).s_()&&jl(t,e))}function Bl(n,e){const t=ie(n),r=Qr(t);t.B_.delete(e),r.s_()&&np(t,e),t.B_.size===0&&(r.s_()?r.a_():cr(t)&&t.K_.set("Unknown"))}function jl(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Qr(n).V_(e)}function np(n,e){n.U_.xe(e),Qr(n).m_(e)}function $l(n){n.U_=new OE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Qr(n).start(),n.K_.F_()}function ql(n){return cr(n)&&!Qr(n).i_()&&n.B_.size>0}function cr(n){return ie(n).k_.size===0}function rp(n){n.U_=void 0}async function LT(n){n.K_.set("Online")}async function FT(n){n.B_.forEach((e,t)=>{jl(n,e)})}async function UT(n,e){rp(n),ql(n)?(n.K_.O_(e),$l(n)):n.K_.set("Unknown")}async function BT(n,e,t){if(n.K_.set("Online"),e instanceof $f&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.B_.delete(l),s.U_.removeTarget(l))}(n,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Yi(n,r)}else if(e instanceof Di?n.U_.$e(e):e instanceof jf?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(re.min()))try{const r=await Yf(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.U_.it(a);return l.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.B_.get(d);f&&i.B_.set(d,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,d)=>{const f=i.B_.get(c);if(!f)return;i.B_.set(c,f.withResumeToken(Ke.EMPTY_BYTE_STRING,f.snapshotVersion)),np(i,c);const g=new In(f.target,c,d,f.sequenceNumber);jl(i,g)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await Yi(n,r)}}async function Yi(n,e,t){if(!Gr(e))throw e;n.k_.add(1),await Ws(n),n.K_.set("Offline"),t||(t=()=>Yf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await ko(n)})}function sp(n,e){return e().catch(t=>Yi(n,t,e))}async function Vo(n){const e=ie(n),t=Nn(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;jT(e);)try{const s=await AT(e.localStore,r);if(s===null){e.L_.length===0&&t.a_();break}r=s.batchId,$T(e,s)}catch(s){await Yi(e,s)}ip(e)&&op(e)}function jT(n){return cr(n)&&n.L_.length<10}function $T(n,e){n.L_.push(e);const t=Nn(n);t.s_()&&t.f_&&t.g_(e.mutations)}function ip(n){return cr(n)&&!Nn(n).i_()&&n.L_.length>0}function op(n){Nn(n).start()}async function qT(n){Nn(n).w_()}async function zT(n){const e=Nn(n);for(const t of n.L_)e.g_(t.mutations)}async function HT(n,e,t){const r=n.L_.shift(),s=Ol.from(r,e,t);await sp(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Vo(n)}async function WT(n,e){e&&Nn(n).f_&&await async function(r,s){if(function(a){return kE(a)&&a!==O.ABORTED}(s.code)){const i=r.L_.shift();Nn(r).__(),await sp(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Vo(r)}}(n,e),ip(n)&&op(n)}async function fh(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=cr(t);t.k_.add(3),await Ws(t),r&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await ko(t)}async function KT(n,e){const t=ie(n);e?(t.k_.delete(2),await ko(t)):e||(t.k_.add(2),await Ws(t),t.K_.set("Unknown"))}function Qr(n){return n.W_||(n.W_=function(t,r,s){const i=ie(t);return i.b_(),new VT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Ro:LT.bind(null,n),mo:FT.bind(null,n),po:UT.bind(null,n),R_:BT.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),ql(n)?$l(n):n.K_.set("Unknown")):(await n.W_.stop(),rp(n))})),n.W_}function Nn(n){return n.G_||(n.G_=function(t,r,s){const i=ie(t);return i.b_(),new NT(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:qT.bind(null,n),po:WT.bind(null,n),p_:zT.bind(null,n),y_:HT.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await Vo(n)):(await n.G_.stop(),n.L_.length>0&&(z("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
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
 */class zl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Zn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new zl(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hl(n,e){if(nn("AsyncQueue",`${e}: ${n}`),Gr(n))return new Y(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Dr{static emptySet(e){return new Dr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Z.comparator(t.key,r.key):(t,r)=>Z.comparator(t.key,r.key),this.keyedMap=ps(),this.sortedSet=new Pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Dr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Dr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class ph{constructor(){this.z_=new Pe(Z.comparator)}track(e){const t=e.doc.key,r=this.z_.get(t);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(t,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(t):e.type===1&&r.type===2?this.z_=this.z_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):te():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class $r{constructor(e,t,r,s,i,a,l,c,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new $r(e,t,Dr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ao(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class GT{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class QT{constructor(){this.queries=gh(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,r){const s=ie(t),i=s.queries;s.queries=gh(),i.forEach((a,l)=>{for(const c of l.J_)c.onError(r)})})(this,new Y(O.ABORTED,"Firestore shutting down"))}}function gh(){return new ar(n=>Sf(n),Ao)}async function JT(n,e){const t=ie(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new GT,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await t.onListen(s,!0);break;case 1:i.H_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Hl(a,`Initialization of query '${Tr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.J_.push(e),e.ea(t.onlineState),i.H_&&e.ta(i.H_)&&Wl(t)}async function XT(n,e){const t=ie(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.J_.indexOf(e);a>=0&&(i.J_.splice(a,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function YT(n,e){const t=ie(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.J_)l.ta(s)&&(r=!0);a.H_=s}}r&&Wl(t)}function ZT(n,e,t){const r=ie(n),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(t);r.queries.delete(e)}function Wl(n){n.X_.forEach(e=>{e.next()})}var el,mh;(mh=el||(el={})).na="default",mh.Cache="cache";class eI{constructor(e,t,r){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new $r(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const r=t!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=$r.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==el.Cache}}/**
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
 */class ap{constructor(e){this.key=e}}class lp{constructor(e){this.key=e}}class tI{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=le(),this.mutatedKeys=le(),this.Va=Pf(e),this.ma=new Dr(this.Va)}get fa(){return this.da}ga(e,t){const r=t?t.pa:new ph,s=t?t.ma:this.ma;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const E=s.get(f),R=bo(this.query,g)?g:null,k=!!E&&this.mutatedKeys.has(E.key),L=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let F=!1;E&&R?E.data.isEqual(R.data)?k!==L&&(r.track({type:3,doc:R}),F=!0):this.ya(E,R)||(r.track({type:2,doc:R}),F=!0,(c&&this.Va(R,c)>0||d&&this.Va(R,d)<0)&&(l=!0)):!E&&R?(r.track({type:0,doc:R}),F=!0):E&&!R&&(r.track({type:1,doc:E}),F=!0,(c||d)&&(l=!0)),F&&(R?(a=a.add(R),i=L?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{ma:a,pa:r,ss:l,mutatedKeys:i}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((f,g)=>function(R,k){const L=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te()}};return L(R)-L(k)}(f.type,g.type)||this.Va(f.doc,g.doc)),this.wa(r),s=s!=null&&s;const l=t&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,d=c!==this.Aa;return this.Aa=c,a.length!==0||d?{snapshot:new $r(this.query,e.ma,i,a,e.mutatedKeys,c===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new ph,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=le(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const t=[];return e.forEach(r=>{this.Ra.has(r)||t.push(new lp(r))}),this.Ra.forEach(r=>{e.has(r)||t.push(new ap(r))}),t}va(e){this.da=e.ds,this.Ra=le();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return $r.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class nI{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class rI{constructor(e){this.key=e,this.Fa=!1}}class sI{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new ar(l=>Sf(l),Ao),this.Oa=new Map,this.Na=new Set,this.La=new Pe(Z.comparator),this.Ba=new Map,this.ka=new Ll,this.qa={},this.Qa=new Map,this.Ka=jr.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function iI(n,e,t=!0){const r=pp(n);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await cp(r,e,t,!0),s}async function oI(n,e){const t=pp(n);await cp(t,e,!0,!1)}async function cp(n,e,t,r){const s=await bT(n.localStore,Mt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await aI(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&tp(n.remoteStore,s),l}async function aI(n,e,t,r,s){n.Ua=(g,E,R)=>async function(L,F,W,Q){let J=F.view.ga(W);J.ss&&(J=await uh(L.localStore,F.query,!1).then(({documents:w})=>F.view.ga(w,J)));const H=Q&&Q.targetChanges.get(F.targetId),he=Q&&Q.targetMismatches.get(F.targetId)!=null,me=F.view.applyChanges(J,L.isPrimaryClient,H,he);return yh(L,F.targetId,me.ba),me.snapshot}(n,g,E,R);const i=await uh(n.localStore,e,!0),a=new tI(e,i.ds),l=a.ga(i.documents),c=Hs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,c);yh(n,t,d.ba);const f=new nI(e,t,a);return n.xa.set(e,f),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),d.snapshot}async function lI(n,e,t){const r=ie(n),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(a=>!Ao(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Za(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Bl(r.remoteStore,s.targetId),tl(r,s.targetId)}).catch(Kr)):(tl(r,s.targetId),await Za(r.localStore,s.targetId,!0))}async function cI(n,e){const t=ie(n),r=t.xa.get(e),s=t.Oa.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Bl(t.remoteStore,r.targetId))}async function uI(n,e,t){const r=_I(n);try{const s=await function(a,l){const c=ie(a),d=Me.now(),f=l.reduce((R,k)=>R.add(k.key),le());let g,E;return c.persistence.runTransaction("Locally write mutations","readwrite",R=>{let k=rn(),L=le();return c.hs.getEntries(R,f).next(F=>{k=F,k.forEach((W,Q)=>{Q.isValidDocument()||(L=L.add(W))})}).next(()=>c.localDocuments.getOverlayedDocuments(R,k)).next(F=>{g=F;const W=[];for(const Q of l){const J=RE(Q,g.get(Q.key).overlayedDocument);J!=null&&W.push(new lr(Q.key,J,Ef(J.value.mapValue),en.exists(!0)))}return c.mutationQueue.addMutationBatch(R,d,W,l)}).next(F=>{E=F;const W=F.applyToLocalDocumentSet(g,L);return c.documentOverlayCache.saveOverlays(R,F.batchId,W)})}).then(()=>({batchId:E.batchId,changes:Df(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let d=a.qa[a.currentUser.toKey()];d||(d=new Pe(ce)),d=d.insert(l,c),a.qa[a.currentUser.toKey()]=d}(r,s.batchId,t),await Ks(r,s.changes),await Vo(r.remoteStore)}catch(s){const i=Hl(s,"Failed to persist write");t.reject(i)}}async function up(n,e){const t=ie(n);try{const r=await IT(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Ba.get(i);a&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Fa=!0:s.modifiedDocuments.size>0?ve(a.Fa):s.removedDocuments.size>0&&(ve(a.Fa),a.Fa=!1))}),await Ks(t,r,e)}catch(r){await Kr(r)}}function _h(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.xa.forEach((i,a)=>{const l=a.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=ie(a);c.onlineState=l;let d=!1;c.queries.forEach((f,g)=>{for(const E of g.J_)E.ea(l)&&(d=!0)}),d&&Wl(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function hI(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Ba.get(e),i=s&&s.key;if(i){let a=new Pe(Z.comparator);a=a.insert(i,nt.newNoDocument(i,re.min()));const l=le().add(i),c=new Co(re.min(),new Map,new Pe(ce),a,l);await up(r,c),r.La=r.La.remove(i),r.Ba.delete(e),Kl(r)}else await Za(r.localStore,e,!1).then(()=>tl(r,e,t)).catch(Kr)}async function dI(n,e){const t=ie(n),r=e.batch.batchId;try{const s=await TT(t.localStore,e);dp(t,r,null),hp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ks(t,s)}catch(s){await Kr(s)}}async function fI(n,e,t){const r=ie(n);try{const s=await function(a,l){const c=ie(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return c.mutationQueue.lookupMutationBatch(d,l).next(g=>(ve(g!==null),f=g.keys(),c.mutationQueue.removeMutationBatch(d,g))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>c.localDocuments.getDocuments(d,f))})}(r.localStore,e);dp(r,e,t),hp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ks(r,s)}catch(s){await Kr(s)}}function hp(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function dp(n,e,t){const r=ie(n);let s=r.qa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.qa[r.currentUser.toKey()]=s}}function tl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Oa.get(e))n.xa.delete(r),t&&n.Ma.Wa(r,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(r=>{n.ka.containsKey(r)||fp(n,r)})}function fp(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(Bl(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),Kl(n))}function yh(n,e,t){for(const r of t)r instanceof ap?(n.ka.addReference(r.key,e),pI(n,r)):r instanceof lp?(z("SyncEngine","Document no longer in limbo: "+r.key),n.ka.removeReference(r.key,e),n.ka.containsKey(r.key)||fp(n,r.key)):te()}function pI(n,e){const t=e.key,r=t.path.canonicalString();n.La.get(t)||n.Na.has(r)||(z("SyncEngine","New document in limbo: "+t),n.Na.add(r),Kl(n))}function Kl(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new Z(Re.fromString(e)),r=n.Ka.next();n.Ba.set(r,new rI(t)),n.La=n.La.insert(t,r),tp(n.remoteStore,new In(Mt(Vl(t.path)),r,"TargetPurposeLimboResolution",Eo.oe))}}async function Ks(n,e,t){const r=ie(n),s=[],i=[],a=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{a.push(r.Ua(c,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(d){s.push(d);const g=Ul.zi(c.targetId,d);i.push(g)}}))}),await Promise.all(a),r.Ma.R_(s),await async function(c,d){const f=ie(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>D.forEach(d,E=>D.forEach(E.Wi,R=>f.persistence.referenceDelegate.addReference(g,E.targetId,R)).next(()=>D.forEach(E.Gi,R=>f.persistence.referenceDelegate.removeReference(g,E.targetId,R)))))}catch(g){if(!Gr(g))throw g;z("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const E=g.targetId;if(!g.fromCache){const R=f.us.get(E),k=R.snapshotVersion,L=R.withLastLimboFreeSnapshotVersion(k);f.us=f.us.insert(E,L)}}}(r.localStore,i))}async function gI(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await Xf(t.localStore,e);t.currentUser=e,function(i,a){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new Y(O.CANCELLED,a))})}),i.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ks(t,r.Ts)}}function mI(n,e){const t=ie(n),r=t.Ba.get(e);if(r&&r.Fa)return le().add(r.key);{let s=le();const i=t.Oa.get(e);if(!i)return s;for(const a of i){const l=t.xa.get(a);s=s.unionWith(l.view.fa)}return s}}function pp(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=up.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hI.bind(null,e),e.Ma.R_=YT.bind(null,e.eventManager),e.Ma.Wa=ZT.bind(null,e.eventManager),e}function _I(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fI.bind(null,e),e}class Zi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Do(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return ET(this.persistence,new yT,e.initialUser,this.serializer)}ja(e){return new Jf(Fl.ei,this.serializer)}za(e){return new ST}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zi.provider={build:()=>new Zi};class yI extends Zi{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){ve(this.persistence.referenceDelegate instanceof Xi);const r=this.persistence.referenceDelegate.garbageCollector;return new rT(r,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new Jf(r=>Xi.ei(r,t),this.serializer)}}class nl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_h(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gI.bind(null,this.syncEngine),await KT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new QT}()}createDatastore(e){const t=Do(e.databaseInfo.databaseId),r=function(i){return new kT(i)}(e.databaseInfo);return function(i,a,l,c){return new OT(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new MT(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>_h(this.syncEngine,t,0),function(){return dh.p()?new dh:new PT}())}createSyncEngine(e,t){return function(s,i,a,l,c,d,f){const g=new sI(s,i,a,l,c,d);return f&&(g.$a=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=ie(s);z("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await Ws(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}nl.provider={build:()=>new nl};/**
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
 */class vI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):nn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class EI{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ze.UNAUTHENTICATED,this.clientId=_f.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{z("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(z("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Zn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Hl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function wa(n,e){n.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Xf(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function vh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await TI(n);z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>fh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>fh(e.remoteStore,s)),n._onlineComponents=e}async function TI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await wa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Lr("Error using user provided cache. Falling back to memory cache: "+t),await wa(n,new Zi)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await wa(n,new yI(void 0));return n._offlineComponents}async function gp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await vh(n,n._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await vh(n,new nl))),n._onlineComponents}function II(n){return gp(n).then(e=>e.syncEngine)}async function Eh(n){const e=await gp(n),t=e.eventManager;return t.onListen=iI.bind(null,e.syncEngine),t.onUnlisten=lI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=oI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=cI.bind(null,e.syncEngine),t}/**
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
 */function mp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Th=new Map;/**
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
 */function _p(n,e,t){if(!t)throw new Y(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function wI(n,e,t,r){if(e===!0&&r===!0)throw new Y(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ih(n){if(!Z.isDocumentKey(n))throw new Y(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function wh(n){if(Z.isDocumentKey(n))throw new Y(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Gl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":te()}function kr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Y(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Gl(n);throw new Y(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Ah{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Y(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class No{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ah({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ah(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Vv;switch(r.type){case"firstParty":return new Mv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Th.get(t);r&&(z("ComponentProvider","Removing Datastore"),Th.delete(t),r.terminate())}(this),Promise.resolve()}}function AI(n,e,t,r={}){var s;const i=(n=kr(n,No))._getSettings(),a=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Lr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=Ze.MOCK_USER;else{l=ly(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new Y(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ze(d)}n._authCredentials=new Nv(new mf(l,c))}}/**
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
 */class Oo{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Oo(this.firestore,e,this._query)}}class yt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class Sn extends Oo{constructor(e,t,r){super(e,t,Vl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new Z(e))}withConverter(e){return new Sn(this.firestore,e,this._path)}}function bI(n,e,...t){if(n=ut(n),_p("collection","path",e),n instanceof No){const r=Re.fromString(e,...t);return wh(r),new Sn(n,null,r)}{if(!(n instanceof yt||n instanceof Sn))throw new Y(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return wh(r),new Sn(n.firestore,null,r)}}function RI(n,e,...t){if(n=ut(n),arguments.length===1&&(e=_f.newId()),_p("doc","path",e),n instanceof No){const r=Re.fromString(e,...t);return Ih(r),new yt(n,null,new Z(r))}{if(!(n instanceof yt||n instanceof Sn))throw new Y(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return Ih(r),new yt(n.firestore,n instanceof Sn?n.converter:null,new Z(r))}}/**
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
 */class bh{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Zf(this,"async_queue_retry"),this.fu=()=>{const r=Ia();r&&z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const t=Ia();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Ia();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new Zn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Gr(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw nn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=t,t}enqueueAfterDelay(e,t,r){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const s=zl.createAndSchedule(this,e,t,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&te()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function Rh(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class eo extends No{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new bh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bh(e),this._firestoreClient=void 0,await e}}}function SI(n,e){const t=typeof n=="object"?n:af(),r=typeof n=="string"?n:"(default)",s=Rl(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=oy("firestore");i&&AI(s,...i)}return s}function yp(n){if(n._terminated)throw new Y(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||PI(n),n._firestoreClient}function PI(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,d,f){return new Xv(l,c,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,mp(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new EI(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class qr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qr(Ke.fromBase64String(e))}catch(t){throw new Y(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qr(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class xo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Y(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ql{constructor(e){this._methodName=e}}/**
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
 */class Jl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Y(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Y(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}/**
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
 */class Xl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const CI=/^__.*__$/;class vp{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new lr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ep(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te()}}class Yl{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Yl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Lu(e),s}Bu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:r,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return to(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Ep(this.Mu)&&CI.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class DI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Do(e)}$u(e,t,r,s=!1){return new Yl({Mu:e,methodName:t,Ku:r,path:He.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kI(n){const e=n._freezeSettings(),t=Do(n._databaseId);return new DI(n._databaseId,!!e.ignoreUndefinedProperties,t)}class Mo extends Ql{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mo}}function VI(n,e,t,r){const s=n.$u(1,e,t);Ip("Data must be an object, but it was:",s,r);const i=[],a=mt.empty();Ln(r,(c,d)=>{const f=Zl(e,c,t);d=ut(d);const g=s.Bu(f);if(d instanceof Mo)i.push(f);else{const E=Lo(d,g);E!=null&&(i.push(f),a.set(f,E))}});const l=new Rt(i);return new vp(a,l,s.fieldTransforms)}function NI(n,e,t,r,s,i){const a=n.$u(1,e,t),l=[Sh(e,r,t)],c=[s];if(i.length%2!=0)throw new Y(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)l.push(Sh(e,i[E])),c.push(i[E+1]);const d=[],f=mt.empty();for(let E=l.length-1;E>=0;--E)if(!MI(d,l[E])){const R=l[E];let k=c[E];k=ut(k);const L=a.Bu(R);if(k instanceof Mo)d.push(R);else{const F=Lo(k,L);F!=null&&(d.push(R),f.set(R,F))}}const g=new Rt(d);return new vp(f,g,a.fieldTransforms)}function Lo(n,e){if(Tp(n=ut(n)))return Ip("Unsupported field value:",e,n),OI(n,e);if(n instanceof Ql)return function(r,s){if(!Ep(s.Mu))throw s.qu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=Lo(l,s.ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return EE(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Me.fromDate(r);return{timestampValue:Ji(s.serializer,i)}}if(r instanceof Me){const i=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ji(s.serializer,i)}}if(r instanceof Jl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qr)return{bytesValue:qf(s.serializer,r._byteString)};if(r instanceof yt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.qu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ml(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Xl)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.qu("VectorValues must only contain numeric values.");return Nl(l.serializer,c)})}}}}}}(r,s);throw s.qu(`Unsupported field value: ${Gl(r)}`)}(n,e)}function OI(n,e){const t={};return yf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ln(n,(r,s)=>{const i=Lo(s,e.Ou(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Tp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Me||n instanceof Jl||n instanceof qr||n instanceof yt||n instanceof Ql||n instanceof Xl)}function Ip(n,e,t){if(!Tp(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Gl(t);throw r==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+r)}}function Sh(n,e,t){if((e=ut(e))instanceof xo)return e._internalPath;if(typeof e=="string")return Zl(n,e);throw to("Field path arguments must be of type string or ",n,!1,void 0,t)}const xI=new RegExp("[~\\*/\\[\\]]");function Zl(n,e,t){if(e.search(xI)>=0)throw to(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new xo(...e.split("."))._internalPath}catch{throw to(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function to(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new Y(O.INVALID_ARGUMENT,l+n+c)}function MI(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class wp{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ap("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class LI extends wp{data(){return super.data()}}function Ap(n,e){return typeof e=="string"?Zl(n,e):e instanceof xo?e._internalPath:e._delegate._internalPath}/**
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
 */function FI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Y(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class UI{convertValue(e,t="none"){switch(Vn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(kn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw te()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ln(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>De(a.doubleValue));return new Xl(i)}convertGeoPoint(e){return new Jl(De(e.latitude),De(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Io(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(xs(e));default:return null}}convertTimestamp(e){const t=Dn(e);return new Me(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Re.fromString(e);ve(Qf(r));const s=new Ms(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(t)||nn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class ms{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bp extends wp{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ki(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ap("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ki extends bp{data(e={}){return super.data(e)}}class BI{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ms(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ki(this._firestore,this._userDataWriter,r.key,r,new ms(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Y(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new ki(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ms(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new ki(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ms(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:jI(l.type),doc:c,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function jI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te()}}class Rp extends UI{constructor(e){super(),this.firestore=e}convertBytes(e){return new qr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,t)}}function $I(n,e,t,...r){n=kr(n,yt);const s=kr(n.firestore,eo),i=kI(s);let a;return a=typeof(e=ut(e))=="string"||e instanceof xo?NI(i,"updateDoc",n._key,e,t,r):VI(i,"updateDoc",n._key,e),zI(s,[a.toMutation(n._key,en.exists(!0))])}function qI(n,...e){var t,r,s;n=ut(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Rh(e[a])||(i=e[a],a++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Rh(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let c,d,f;if(n instanceof yt)d=kr(n.firestore,eo),f=Vl(n._key.path),c={next:g=>{e[a]&&e[a](HI(d,n,g))},error:e[a+1],complete:e[a+2]};else{const g=kr(n,Oo);d=kr(g.firestore,eo),f=g._query;const E=new Rp(d);c={next:R=>{e[a]&&e[a](new BI(d,E,g,R))},error:e[a+1],complete:e[a+2]},FI(n._query)}return function(E,R,k,L){const F=new vI(L),W=new eI(R,F,k);return E.asyncQueue.enqueueAndForget(async()=>JT(await Eh(E),W)),()=>{F.eu(),E.asyncQueue.enqueueAndForget(async()=>XT(await Eh(E),W))}}(yp(d),f,l,c)}function zI(n,e){return function(r,s){const i=new Zn;return r.asyncQueue.enqueueAndForget(async()=>uI(await II(r),s,i)),i.promise}(yp(n),e)}function HI(n,e,t){const r=t.docs.get(e._key),s=new Rp(n);return new bp(n,s,e._key,r,new ms(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Wr=s})(Hr),Mr(new rr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new eo(new Ov(r.getProvider("auth-internal")),new Fv(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new Y(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ms(d.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Rn(ju,"4.7.5",e),Rn(ju,"4.7.5","esm2017")})();var WI="firebase",KI="11.0.2";/**
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
 */Rn(WI,KI,"app");function ec(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Sp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GI=Sp,Pp=new qs("auth","Firebase",Sp());/**
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
 */const no=new Al("@firebase/auth");function QI(n,...e){no.logLevel<=ae.WARN&&no.warn(`Auth (${Hr}): ${n}`,...e)}function Vi(n,...e){no.logLevel<=ae.ERROR&&no.error(`Auth (${Hr}): ${n}`,...e)}/**
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
 */function sn(n,...e){throw tc(n,...e)}function Ft(n,...e){return tc(n,...e)}function Cp(n,e,t){const r=Object.assign(Object.assign({},GI()),{[e]:t});return new qs("auth","Firebase",r).create(e,{appName:n.name})}function er(n){return Cp(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Pp.create(n,...e)}function ne(n,e,...t){if(!n)throw tc(e,...t)}function Xt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Vi(e),new Error(e)}function on(n,e){n||Xt(e)}/**
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
 */function rl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function JI(){return Ph()==="http:"||Ph()==="https:"}function Ph(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function XI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JI()||dy()||"connection"in navigator)?navigator.onLine:!0}function YI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Gs{constructor(e,t){this.shortDelay=e,this.longDelay=t,on(t>e,"Short delay should be less than long delay!"),this.isMobile=cy()||fy()}get(){return XI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function nc(n,e){on(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Dp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ZI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ew=new Gs(3e4,6e4);function rc(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Jr(n,e,t,r,s={}){return kp(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=zs(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:c},i);return hy()||(d.referrerPolicy="no-referrer"),Dp.fetch()(Vp(n,n.config.apiHost,t,l),d)})}async function kp(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZI),e);try{const s=new nw(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ti(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ti(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Ti(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw Ti(n,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Cp(n,f,d);sn(n,f)}}catch(s){if(s instanceof ln)throw s;sn(n,"network-request-failed",{message:String(s)})}}async function tw(n,e,t,r,s={}){const i=await Jr(n,e,t,r,s);return"mfaPendingCredential"in i&&sn(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Vp(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?nc(n.config,s):`${n.config.apiScheme}://${s}`}class nw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ft(this.auth,"network-request-failed")),ew.get())})}}function Ti(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ft(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function rw(n,e){return Jr(n,"POST","/v1/accounts:delete",e)}async function Np(n,e){return Jr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ss(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sw(n,e=!1){const t=ut(n),r=await t.getIdToken(e),s=sc(r);ne(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ss(Aa(s.auth_time)),issuedAtTime:Ss(Aa(s.iat)),expirationTime:Ss(Aa(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Aa(n){return Number(n)*1e3}function sc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Vi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zd(t);return s?JSON.parse(s):(Vi("Failed to decode base64 JWT payload"),null)}catch(s){return Vi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ch(n){const e=sc(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Bs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ln&&iw(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function iw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ow{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ss(this.lastLoginAt),this.creationTime=Ss(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ro(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Bs(n,Np(t,{idToken:r}));ne(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Op(i.providerUserInfo):[],l=lw(n.providerData,a),c=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?d:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new sl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,g)}async function aw(n){const e=ut(n);await ro(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lw(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Op(n){return n.map(e=>{var{providerId:t}=e,r=ec(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function cw(n,e){const t=await kp(n,{},async()=>{const r=zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=Vp(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Dp.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function uw(n,e){return Jr(n,"POST","/v2/accounts:revokeToken",rc(n,e))}/**
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
 */class Vr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ch(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=Ch(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await cw(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Vr;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vr,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
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
 */function pn(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Yt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=ec(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ow(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new sl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Bs(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return sw(this,e)}reload(){return aw(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Yt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ro(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await Bs(this,rw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,c,d,f;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,E=(s=t.email)!==null&&s!==void 0?s:void 0,R=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=t.photoURL)!==null&&a!==void 0?a:void 0,L=(l=t.tenantId)!==null&&l!==void 0?l:void 0,F=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,W=(d=t.createdAt)!==null&&d!==void 0?d:void 0,Q=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:J,emailVerified:H,isAnonymous:he,providerData:me,stsTokenManager:w}=t;ne(J&&w,e,"internal-error");const m=Vr.fromJSON(this.name,w);ne(typeof J=="string",e,"internal-error"),pn(g,e.name),pn(E,e.name),ne(typeof H=="boolean",e,"internal-error"),ne(typeof he=="boolean",e,"internal-error"),pn(R,e.name),pn(k,e.name),pn(L,e.name),pn(F,e.name),pn(W,e.name),pn(Q,e.name);const v=new Yt({uid:J,auth:e,email:E,emailVerified:H,displayName:g,isAnonymous:he,photoURL:k,phoneNumber:R,tenantId:L,stsTokenManager:m,createdAt:W,lastLoginAt:Q});return me&&Array.isArray(me)&&(v.providerData=me.map(I=>Object.assign({},I))),F&&(v._redirectEventId=F),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new Vr;s.updateFromServerResponse(t);const i=new Yt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ro(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Op(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Vr;l.updateFromIdToken(r);const c=new Yt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new sl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,d),c}}/**
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
 */const Dh=new Map;function Zt(n){on(n instanceof Function,"Expected a class definition");let e=Dh.get(n);return e?(on(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Dh.set(n,e),e)}/**
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
 */class xp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}xp.type="NONE";const kh=xp;/**
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
 */function Ni(n,e,t){return`firebase:${n}:${e}:${t}`}class Nr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ni(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ni("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Nr(Zt(kh),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Zt(kh);const a=Ni(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const f=await d._get(a);if(f){const g=Yt._fromJSON(e,f);d!==i&&(l=g),i=d;break}}catch{}const c=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Nr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new Nr(i,e,r))}}/**
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
 */function Vh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Up(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jp(e))return"Blackberry";if($p(e))return"Webos";if(Lp(e))return"Safari";if((e.includes("chrome/")||Fp(e))&&!e.includes("edge/"))return"Chrome";if(Bp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mp(n=st()){return/firefox\//i.test(n)}function Lp(n=st()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fp(n=st()){return/crios\//i.test(n)}function Up(n=st()){return/iemobile/i.test(n)}function Bp(n=st()){return/android/i.test(n)}function jp(n=st()){return/blackberry/i.test(n)}function $p(n=st()){return/webos/i.test(n)}function ic(n=st()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function hw(n=st()){var e;return ic(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dw(){return py()&&document.documentMode===10}function qp(n=st()){return ic(n)||Bp(n)||$p(n)||jp(n)||/windows phone/i.test(n)||Up(n)}/**
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
 */function zp(n,e=[]){let t;switch(n){case"Browser":t=Vh(st());break;case"Worker":t=`${Vh(st())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Hr}/${r}`}/**
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
 */class fw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function pw(n,e={}){return Jr(n,"GET","/v2/passwordPolicy",rc(n,e))}/**
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
 */const gw=6;class mw{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:gw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class _w{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nh(this),this.idTokenSubscription=new Nh(this),this.beforeStateQueue=new fw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Zt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Nr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Np(this,{idToken:e}),r=await Yt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Tn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ro(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(er(this));const t=e?ut(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pw(this),t=new mw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await uw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Zt(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await Nr.create(this,[Zt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&QI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function oc(n){return ut(n)}class Nh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Iy(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ac={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yw(n){ac=n}function vw(n){return ac.loadJS(n)}function Ew(){return ac.gapiScript}function Tw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Iw(n,e){const t=Rl(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(qi(i,e??{}))return s;sn(s,"already-initialized")}return t.initialize({options:e})}function ww(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Zt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Aw(n,e,t){const r=oc(n);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Hp(e),{host:a,port:l}=bw(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Rw()}function Hp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function bw(n){const e=Hp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Oh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Oh(a)}}}function Oh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Rw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Wp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,t){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}/**
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
 */async function Or(n,e){return tw(n,"POST","/v1/accounts:signInWithIdp",rc(n,e))}/**
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
 */const Sw="http://localhost";class ir extends Wp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):sn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=ec(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new ir(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Or(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Or(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Or(e,t)}buildRequest(){const e={requestUri:Sw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zs(t)}return e}}/**
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
 */class Kp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qs extends Kp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class _n extends Qs{constructor(){super("facebook.com")}static credential(e){return ir._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.FACEBOOK_SIGN_IN_METHOD="facebook.com";_n.PROVIDER_ID="facebook.com";/**
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
 */class yn extends Qs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ir._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return yn.credential(t,r)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
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
 */class vn extends Qs{constructor(){super("github.com")}static credential(e){return ir._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.GITHUB_SIGN_IN_METHOD="github.com";vn.PROVIDER_ID="github.com";/**
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
 */class En extends Qs{constructor(){super("twitter.com")}static credential(e,t){return ir._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return En.credential(t,r)}catch{return null}}}En.TWITTER_SIGN_IN_METHOD="twitter.com";En.PROVIDER_ID="twitter.com";/**
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
 */class zr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Yt._fromIdTokenResponse(e,r,s),a=xh(r);return new zr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=xh(r);return new zr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function xh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class so extends ln{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,so.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new so(e,t,r,s)}}function Gp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?so._fromErrorAndOperation(n,i,e,r):i})}async function Pw(n,e,t=!1){const r=await Bs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return zr._forOperation(n,"link",r)}/**
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
 */async function Cw(n,e,t=!1){const{auth:r}=n;if(Tn(r.app))return Promise.reject(er(r));const s="reauthenticate";try{const i=await Bs(n,Gp(r,s,e,n),t);ne(i.idToken,r,"internal-error");const a=sc(i.idToken);ne(a,r,"internal-error");const{sub:l}=a;return ne(n.uid===l,r,"user-mismatch"),zr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&sn(r,"user-mismatch"),i}}/**
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
 */async function Dw(n,e,t=!1){if(Tn(n.app))return Promise.reject(er(n));const r="signIn",s=await Gp(n,r,e),i=await zr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function kw(n,e,t,r){return ut(n).onIdTokenChanged(e,t,r)}function Vw(n,e,t){return ut(n).beforeAuthStateChanged(e,t)}const io="__sak";/**
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
 */class Qp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(io,"1"),this.storage.removeItem(io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Nw=1e3,Ow=10;class Jp extends Qp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);dw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ow):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Nw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jp.type="LOCAL";const xw=Jp;/**
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
 */class Xp extends Qp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Xp.type="SESSION";const Yp=Xp;/**
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
 */function Mw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Fo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Fo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,i)),c=await Mw(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fo.receivers=[];/**
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
 */function lc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Lw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const d=lc("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const E=g;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(E.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ut(){return window}function Fw(n){Ut().location.href=n}/**
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
 */function Zp(){return typeof Ut().WorkerGlobalScope<"u"&&typeof Ut().importScripts=="function"}async function Uw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Bw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function jw(){return Zp()?self:null}/**
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
 */const eg="firebaseLocalStorageDb",$w=1,oo="firebaseLocalStorage",tg="fbase_key";class Js{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Uo(n,e){return n.transaction([oo],e?"readwrite":"readonly").objectStore(oo)}function qw(){const n=indexedDB.deleteDatabase(eg);return new Js(n).toPromise()}function il(){const n=indexedDB.open(eg,$w);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(oo,{keyPath:tg})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(oo)?e(r):(r.close(),await qw(),e(await il()))})})}async function Mh(n,e,t){const r=Uo(n,!0).put({[tg]:e,value:t});return new Js(r).toPromise()}async function zw(n,e){const t=Uo(n,!1).get(e),r=await new Js(t).toPromise();return r===void 0?null:r.value}function Lh(n,e){const t=Uo(n,!0).delete(e);return new Js(t).toPromise()}const Hw=800,Ww=3;class ng{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await il(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Ww)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fo._getInstance(jw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Uw(),!this.activeServiceWorker)return;this.sender=new Lw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Bw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await il();return await Mh(e,io,"1"),await Lh(e,io),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>zw(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Lh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Uo(s,!1).getAll();return new Js(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ng.type="LOCAL";const Kw=ng;new Gs(3e4,6e4);/**
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
 */function Gw(n,e){return e?Zt(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class cc extends Wp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Or(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Or(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Or(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Qw(n){return Dw(n.auth,new cc(n),n.bypassAuthState)}function Jw(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),Cw(t,new cc(n),n.bypassAuthState)}async function Xw(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),Pw(t,new cc(n),n.bypassAuthState)}/**
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
 */class rg{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qw;case"linkViaPopup":case"linkViaRedirect":return Xw;case"reauthViaPopup":case"reauthViaRedirect":return Jw;default:sn(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Yw=new Gs(2e3,1e4);class Ar extends rg{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ar.currentPopupAction&&Ar.currentPopupAction.cancel(),Ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=lc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Yw.get())};e()}}Ar.currentPopupAction=null;/**
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
 */const Zw="pendingRedirect",Oi=new Map;class e0 extends rg{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Oi.get(this.auth._key());if(!e){try{const r=await t0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Oi.set(this.auth._key(),e)}return this.bypassAuthState||Oi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function t0(n,e){const t=s0(e),r=r0(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function n0(n,e){Oi.set(n._key(),e)}function r0(n){return Zt(n._redirectPersistence)}function s0(n){return Ni(Zw,n.config.apiKey,n.name)}async function i0(n,e,t=!1){if(Tn(n.app))return Promise.reject(er(n));const r=oc(n),s=Gw(r,e),a=await new e0(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const o0=10*60*1e3;class a0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!l0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!sg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ft(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=o0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fh(e))}saveEventToCache(e){this.cachedEventUids.add(Fh(e)),this.lastProcessedEventTime=Date.now()}}function Fh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function sg({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function l0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sg(n);default:return!1}}/**
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
 */async function c0(n,e={}){return Jr(n,"GET","/v1/projects",e)}/**
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
 */const u0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,h0=/^https?/;async function d0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await c0(n);for(const t of e)try{if(f0(t))return}catch{}sn(n,"unauthorized-domain")}function f0(n){const e=rl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!h0.test(t))return!1;if(u0.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const p0=new Gs(3e4,6e4);function Uh(){const n=Ut().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function g0(n){return new Promise((e,t)=>{var r,s,i;function a(){Uh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uh(),t(Ft(n,"network-request-failed"))},timeout:p0.get()})}if(!((s=(r=Ut().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ut().gapi)===null||i===void 0)&&i.load)a();else{const l=Tw("iframefcb");return Ut()[l]=()=>{gapi.load?a():t(Ft(n,"network-request-failed"))},vw(`${Ew()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw xi=null,e})}let xi=null;function m0(n){return xi=xi||g0(n),xi}/**
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
 */const _0=new Gs(5e3,15e3),y0="__/auth/iframe",v0="emulator/auth/iframe",E0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},T0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function I0(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?nc(e,v0):`https://${n.config.authDomain}/${y0}`,r={apiKey:e.apiKey,appName:n.name,v:Hr},s=T0.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${zs(r).slice(1)}`}async function w0(n){const e=await m0(n),t=Ut().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:I0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:E0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ft(n,"network-request-failed"),l=Ut().setTimeout(()=>{i(a)},_0.get());function c(){Ut().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const A0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},b0=500,R0=600,S0="_blank",P0="http://localhost";class Bh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function C0(n,e,t,r=b0,s=R0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},A0),{width:r.toString(),height:s.toString(),top:i,left:a}),d=st().toLowerCase();t&&(l=Fp(d)?S0:t),Mp(d)&&(e=e||P0,c.scrollbars="yes");const f=Object.entries(c).reduce((E,[R,k])=>`${E}${R}=${k},`,"");if(hw(d)&&l!=="_self")return D0(e||"",l),new Bh(null);const g=window.open(e||"",l,f);ne(g,n,"popup-blocked");try{g.focus()}catch{}return new Bh(g)}function D0(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const k0="__/auth/handler",V0="emulator/auth/handler",N0=encodeURIComponent("fac");async function jh(n,e,t,r,s,i){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Hr,eventId:s};if(e instanceof Kp){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Ty(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof Qs){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),d=c?`#${N0}=${encodeURIComponent(c)}`:"";return`${O0(n)}?${zs(l).slice(1)}${d}`}function O0({config:n}){return n.emulator?nc(n,V0):`https://${n.authDomain}/${k0}`}/**
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
 */const ba="webStorageSupport";class x0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yp,this._completeRedirectFn=i0,this._overrideRedirectResult=n0}async _openPopup(e,t,r,s){var i;on((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await jh(e,t,r,rl(),s);return C0(e,a,lc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await jh(e,t,r,rl(),s);return Fw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(on(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await w0(e),r=new a0(e);return t.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ba,{type:ba},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ba];a!==void 0&&t(!!a),sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=d0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return qp()||Lp()||ic()}}const M0=x0;var $h="@firebase/auth",qh="1.8.1";/**
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
 */class L0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function F0(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function U0(n){Mr(new rr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zp(n)},d=new _w(r,s,i,c);return ww(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Mr(new rr("auth-internal",e=>{const t=oc(e.getProvider("auth").getImmediate());return(r=>new L0(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn($h,qh,F0(n)),Rn($h,qh,"esm2017")}/**
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
 */const B0=5*60,j0=nf("authIdTokenMaxAge")||B0;let zh=null;const $0=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>j0)return;const s=t==null?void 0:t.token;zh!==s&&(zh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function q0(n=af()){const e=Rl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Iw(n,{popupRedirectResolver:M0,persistence:[Kw,xw,Yp]}),r=nf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=$0(i.toString());Vw(t,a,()=>a(t.currentUser)),kw(t,l=>a(l))}}const s=ef("auth");return s&&Aw(t,`http://${s}`),t}function z0(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}yw({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ft("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",z0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});U0("Browser");const H0={apiKey:"AIzaSyCaDdwjnRGUG4_YmPY7rRhZFw4Y-5Mmq68",authDomain:"persian-library.firebaseapp.com",projectId:"persian-library",storageBucket:"persian-library.firebasestorage.app",messagingSenderId:"374242993168",appId:"1:374242993168:web:1a71b65d1b43e6406bd695"},ig=of(H0);q0(ig);const Hh=SI(ig),W0={class:"min-h-screen bg-gray-50"},K0={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"},G0={class:"mb-6"},Q0={class:"relative"},J0={class:"mt-2 text-sm text-gray-600",dir:"rtl"},X0={key:0,class:"mb-4 p-4 bg-red-100 text-red-700 rounded-md"},Y0={key:1,class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"},Z0={class:"aspect-w-4 aspect-h-3 w-full"},eA=["src","alt"],tA={class:"p-4"},nA={class:"p-4 text-right"},rA={class:"text-lg font-semibold text-gray-900"},sA={class:"text-sm text-gray-600"},iA={key:0,class:"text-sm text-gray-600"},oA={key:1,class:"text-sm text-gray-600"},aA={key:2,class:"text-sm text-gray-600"},lA={class:"text-sm text-gray-600 mt-2"},cA={class:"mt-2 flex items-center"},uA=["onClick","disabled"],hA={key:2,class:"text-center py-10"},dA={__name:"HomePage",setup(n){const e=oa([]),t=oa(null),r=oa(""),s=Qd(()=>{const a=r.value.toLowerCase().trim();return a?e.value.filter(l=>Object.values(l).some(c=>typeof c=="string"?c.toLowerCase().includes(a):!1)):e.value});bd(()=>{try{const a=qI(bI(Hh,"books"),l=>{e.value=l.docs.map(c=>({id:c.id,...c.data()})),t.value=null},l=>{console.error("Firestore error:",l),t.value="Error loading books. Please try again later."});return()=>a()}catch(a){console.error("Error setting up listener:",a),t.value="Error connecting to database. Please try again later."}});const i=async a=>{const l=prompt("Please enter your name:");if(l)try{const c=RI(Hh,"books",a.id);await $I(c,{isAvailable:!1,borrower:l,borrowedAt:new Date})}catch(c){console.error("Error updating book:",c),alert("Failed to borrow book. Please try again.")}};return(a,l)=>(bt(),Dt("div",W0,[Ue(" Header "),l[3]||(l[3]=be("header",{class:"bg-white shadow-sm"},[be("div",{class:"max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8"},[be("h1",{class:"text-3xl font-bold text-gray-900 text-center"}," Persian Book Library ")])],-1)),Ue(" Main Content "),be("main",K0,[Ue(" Search Input "),be("div",G0,[be("div",Q0,[Tm(be("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=c=>r.value=c),placeholder:"جستجو در همه موارد...",class:"w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black",dir:"rtl"},null,512),[[K_,r.value]]),l[1]||(l[1]=be("div",{class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},[be("svg",{class:"h-5 w-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[be("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})])],-1))]),Ue(" Search Results Count "),be("p",J0," نمایش "+Et(s.value.length)+" از "+Et(e.value.length)+" کتاب ",1)]),Ue(" Error message display "),t.value?(bt(),Dt("div",X0,Et(t.value),1)):Ue("v-if",!0),Ue(" Book Gallery Grid "),t.value?Ue("v-if",!0):(bt(),Dt("div",Y0,[(bt(!0),Dt(Vt,null,Mm(s.value,c=>(bt(),Dt("div",{key:c.id,class:"bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"},[Ue(" Book Cover Image "),be("div",Z0,[be("img",{src:c.coverImage,alt:c.title,class:"w-full h-full object-cover"},null,8,eA)]),Ue(" Book Information "),be("div",tA,[be("div",nA,[Ue(" Align text to right for Persian "),be("h3",rA,Et(c.title),1),be("p",sA,"نویسنده: "+Et(c.author),1),c.translator?(bt(),Dt("p",iA," مترجم: "+Et(c.translator),1)):Ue("v-if",!0),c.illustrator?(bt(),Dt("p",oA," تصویرگر: "+Et(c.illustrator),1)):Ue("v-if",!0),c.age?(bt(),Dt("p",aA," رده سنی: "+Et(c.age),1)):Ue("v-if",!0),be("p",lA,Et(c.description),1)]),Ue(" Availability Status "),be("div",cA,[be("span",{class:ho(["text-sm",c.isAvailable?"text-green-600":"text-red-600"])},Et(c.isAvailable?"Available":"Currently Borrowed"),3)]),Ue(" Borrow Button "),be("button",{onClick:d=>i(c),disabled:!c.isAvailable,class:"mt-3 w-full px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed text-white bg-indigo-600 hover:bg-indigo-700"},Et(c.isAvailable?"Borrow Book":"Not Available"),9,uA)])]))),128))])),Ue(" No Results Message "),s.value.length===0&&!t.value?(bt(),Dt("div",hA,l[2]||(l[2]=[be("p",{class:"text-gray-500"},"No books found matching your search.",-1)]))):Ue("v-if",!0)])]))}},fA={dir:"rtl",class:"font-[Vazir]"},pA={__name:"App",setup(n){return(e,t)=>(bt(),Dt("div",fA,[xt(dA)]))}};J_(pA).mount("#app");
