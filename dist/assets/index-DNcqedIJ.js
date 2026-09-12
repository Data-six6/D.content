function Pm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Cm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nu={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tr=Symbol.for("react.element"),_m=Symbol.for("react.portal"),Om=Symbol.for("react.fragment"),zm=Symbol.for("react.strict_mode"),Mm=Symbol.for("react.profiler"),Tm=Symbol.for("react.provider"),Dm=Symbol.for("react.context"),Lm=Symbol.for("react.forward_ref"),Am=Symbol.for("react.suspense"),jm=Symbol.for("react.memo"),Rm=Symbol.for("react.lazy"),gs=Symbol.iterator;function Im(e){return e===null||typeof e!="object"?null:(e=gs&&e[gs]||e["@@iterator"],typeof e=="function"?e:null)}var ru={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},au=Object.assign,ou={};function An(e,t,n){this.props=e,this.context=t,this.refs=ou,this.updater=n||ru}An.prototype.isReactComponent={};An.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};An.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lu(){}lu.prototype=An.prototype;function ui(e,t,n){this.props=e,this.context=t,this.refs=ou,this.updater=n||ru}var di=ui.prototype=new lu;di.constructor=ui;au(di,An.prototype);di.isPureReactComponent=!0;var vs=Array.isArray,iu=Object.prototype.hasOwnProperty,fi={current:null},su={key:!0,ref:!0,__self:!0,__source:!0};function cu(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)iu.call(t,r)&&!su.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Tr,type:e,key:l,ref:i,props:o,_owner:fi.current}}function Fm(e,t){return{$$typeof:Tr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function mi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tr}function $m(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var xs=/\/+/g;function zo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?$m(""+e.key):t.toString(36)}function ga(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Tr:case _m:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+zo(i,0):r,vs(o)?(n="",e!=null&&(n=e.replace(xs,"$&/")+"/"),ga(o,t,n,"",function(u){return u})):o!=null&&(mi(o)&&(o=Fm(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(xs,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",vs(e))for(var s=0;s<e.length;s++){l=e[s];var c=r+zo(l,s);i+=ga(l,t,n,c,o)}else if(c=Im(e),typeof c=="function")for(e=c.call(e),s=0;!(l=e.next()).done;)l=l.value,c=r+zo(l,s++),i+=ga(l,t,n,c,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Wr(e,t,n){if(e==null)return e;var r=[],o=0;return ga(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Um(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},va={transition:null},Bm={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:va,ReactCurrentOwner:fi};function uu(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:Wr,forEach:function(e,t,n){Wr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wr(e,function(){t++}),t},toArray:function(e){return Wr(e,function(t){return t})||[]},only:function(e){if(!mi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=An;R.Fragment=Om;R.Profiler=Mm;R.PureComponent=ui;R.StrictMode=zm;R.Suspense=Am;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bm;R.act=uu;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=au({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=fi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)iu.call(t,c)&&!su.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Tr,type:e.type,key:o,ref:l,props:r,_owner:i}};R.createContext=function(e){return e={$$typeof:Dm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tm,_context:e},e.Consumer=e};R.createElement=cu;R.createFactory=function(e){var t=cu.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Lm,render:e}};R.isValidElement=mi;R.lazy=function(e){return{$$typeof:Rm,_payload:{_status:-1,_result:e},_init:Um}};R.memo=function(e,t){return{$$typeof:jm,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=va.transition;va.transition={};try{e()}finally{va.transition=t}};R.unstable_act=uu;R.useCallback=function(e,t){return be.current.useCallback(e,t)};R.useContext=function(e){return be.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return be.current.useDeferredValue(e)};R.useEffect=function(e,t){return be.current.useEffect(e,t)};R.useId=function(){return be.current.useId()};R.useImperativeHandle=function(e,t,n){return be.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return be.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return be.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return be.current.useMemo(e,t)};R.useReducer=function(e,t,n){return be.current.useReducer(e,t,n)};R.useRef=function(e){return be.current.useRef(e)};R.useState=function(e){return be.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return be.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return be.current.useTransition()};R.version="18.3.1";nu.exports=R;var k=nu.exports;const a=Cm(k),Wm=Pm({__proto__:null,default:a},[k]);var dl={},du={exports:{}},De={},fu={exports:{}},mu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,D){var A=O.length;O.push(D);e:for(;0<A;){var Z=A-1>>>1,le=O[Z];if(0<o(le,D))O[Z]=D,O[A]=le,A=Z;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var D=O[0],A=O.pop();if(A!==D){O[0]=A;e:for(var Z=0,le=O.length,Ur=le>>>1;Z<Ur;){var Ut=2*(Z+1)-1,Oo=O[Ut],Bt=Ut+1,Br=O[Bt];if(0>o(Oo,A))Bt<le&&0>o(Br,Oo)?(O[Z]=Br,O[Bt]=A,Z=Bt):(O[Z]=Oo,O[Ut]=A,Z=Ut);else if(Bt<le&&0>o(Br,A))O[Z]=Br,O[Bt]=A,Z=Bt;else break e}}return D}function o(O,D){var A=O.sortIndex-D.sortIndex;return A!==0?A:O.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var c=[],u=[],p=1,h=null,x=3,b=!1,f=!1,m=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=O)r(u),D.sortIndex=D.expirationTime,t(c,D);else break;D=n(u)}}function w(O){if(m=!1,v(O),!f)if(n(c)!==null)f=!0,Co(S);else{var D=n(u);D!==null&&_o(w,D.startTime-O)}}function S(O,D){f=!1,m&&(m=!1,g(N),N=-1),b=!0;var A=x;try{for(v(D),h=n(c);h!==null&&(!(h.expirationTime>D)||O&&!ne());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,x=h.priorityLevel;var le=Z(h.expirationTime<=D);D=e.unstable_now(),typeof le=="function"?h.callback=le:h===n(c)&&r(c),v(D)}else r(c);h=n(c)}if(h!==null)var Ur=!0;else{var Ut=n(u);Ut!==null&&_o(w,Ut.startTime-D),Ur=!1}return Ur}finally{h=null,x=A,b=!1}}var C=!1,y=null,N=-1,z=5,T=-1;function ne(){return!(e.unstable_now()-T<z)}function $t(){if(y!==null){var O=e.unstable_now();T=O;var D=!0;try{D=y(!0,O)}finally{D?Bn():(C=!1,y=null)}}else C=!1}var Bn;if(typeof d=="function")Bn=function(){d($t)};else if(typeof MessageChannel<"u"){var hs=new MessageChannel,Sm=hs.port2;hs.port1.onmessage=$t,Bn=function(){Sm.postMessage(null)}}else Bn=function(){E($t,0)};function Co(O){y=O,C||(C=!0,Bn())}function _o(O,D){N=E(function(){O(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){f||b||(f=!0,Co(S))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(O){switch(x){case 1:case 2:case 3:var D=3;break;default:D=x}var A=x;x=D;try{return O()}finally{x=A}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,D){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var A=x;x=O;try{return D()}finally{x=A}},e.unstable_scheduleCallback=function(O,D,A){var Z=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?Z+A:Z):A=Z,O){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=A+le,O={id:p++,callback:D,priorityLevel:O,startTime:A,expirationTime:le,sortIndex:-1},A>Z?(O.sortIndex=A,t(u,O),n(c)===null&&O===n(u)&&(m?(g(N),N=-1):m=!0,_o(w,A-Z))):(O.sortIndex=le,t(c,O),f||b||(f=!0,Co(S))),O},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(O){var D=x;return function(){var A=x;x=D;try{return O.apply(this,arguments)}finally{x=A}}}})(mu);fu.exports=mu;var Hm=fu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vm=k,Te=Hm;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pu=new Set,fr={};function an(e,t){Cn(e,t),Cn(e+"Capture",t)}function Cn(e,t){for(fr[e]=t,e=0;e<t.length;e++)pu.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fl=Object.prototype.hasOwnProperty,Qm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ys={},bs={};function qm(e){return fl.call(bs,e)?!0:fl.call(ys,e)?!1:Qm.test(e)?bs[e]=!0:(ys[e]=!0,!1)}function Km(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Gm(e,t,n,r){if(t===null||typeof t>"u"||Km(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var pi=/[\-:]([a-z])/g;function hi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pi,hi);fe[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pi,hi);fe[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pi,hi);fe[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function gi(e,t,n,r){var o=fe.hasOwnProperty(t)?fe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Gm(t,n,o,r)&&(n=null),r||o===null?qm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=Vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hr=Symbol.for("react.element"),cn=Symbol.for("react.portal"),un=Symbol.for("react.fragment"),vi=Symbol.for("react.strict_mode"),ml=Symbol.for("react.profiler"),hu=Symbol.for("react.provider"),gu=Symbol.for("react.context"),xi=Symbol.for("react.forward_ref"),pl=Symbol.for("react.suspense"),hl=Symbol.for("react.suspense_list"),yi=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),vu=Symbol.for("react.offscreen"),Es=Symbol.iterator;function Wn(e){return e===null||typeof e!="object"?null:(e=Es&&e[Es]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Mo;function Zn(e){if(Mo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Mo=t&&t[1]||""}return`
`+Mo+e}var To=!1;function Do(e,t){if(!e||To)return"";To=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var c=`
`+o[i].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=i&&0<=s);break}}}finally{To=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zn(e):""}function Ym(e){switch(e.tag){case 5:return Zn(e.type);case 16:return Zn("Lazy");case 13:return Zn("Suspense");case 19:return Zn("SuspenseList");case 0:case 2:case 15:return e=Do(e.type,!1),e;case 11:return e=Do(e.type.render,!1),e;case 1:return e=Do(e.type,!0),e;default:return""}}function gl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case un:return"Fragment";case cn:return"Portal";case ml:return"Profiler";case vi:return"StrictMode";case pl:return"Suspense";case hl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gu:return(e.displayName||"Context")+".Consumer";case hu:return(e._context.displayName||"Context")+".Provider";case xi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yi:return t=e.displayName||null,t!==null?t:gl(e.type)||"Memo";case xt:t=e._payload,e=e._init;try{return gl(e(t))}catch{}}return null}function Xm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gl(t);case 8:return t===vi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Lt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zm(e){var t=xu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vr(e){e._valueTracker||(e._valueTracker=Zm(e))}function yu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Oa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vl(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ws(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Lt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function bu(e,t){t=t.checked,t!=null&&gi(e,"checked",t,!1)}function xl(e,t){bu(e,t);var n=Lt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&yl(e,t.type,Lt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ks(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function yl(e,t,n){(t!=="number"||Oa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Jn=Array.isArray;function En(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Lt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function bl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ns(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Jn(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Lt(n)}}function Eu(e,t){var n=Lt(t.value),r=Lt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ss(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function El(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qr,ku=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qr=Qr||document.createElement("div"),Qr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var rr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jm=["Webkit","ms","Moz","O"];Object.keys(rr).forEach(function(e){Jm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),rr[t]=rr[e]})});function Nu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||rr.hasOwnProperty(e)&&rr[e]?(""+t).trim():t+"px"}function Su(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Nu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var ep=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wl(e,t){if(t){if(ep[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nl=null;function bi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sl=null,wn=null,kn=null;function Ps(e){if(e=Ar(e)){if(typeof Sl!="function")throw Error(P(280));var t=e.stateNode;t&&(t=so(t),Sl(e.stateNode,e.type,t))}}function Pu(e){wn?kn?kn.push(e):kn=[e]:wn=e}function Cu(){if(wn){var e=wn,t=kn;if(kn=wn=null,Ps(e),t)for(e=0;e<t.length;e++)Ps(t[e])}}function _u(e,t){return e(t)}function Ou(){}var Lo=!1;function zu(e,t,n){if(Lo)return e(t,n);Lo=!0;try{return _u(e,t,n)}finally{Lo=!1,(wn!==null||kn!==null)&&(Ou(),Cu())}}function pr(e,t){var n=e.stateNode;if(n===null)return null;var r=so(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Pl=!1;if(ut)try{var Hn={};Object.defineProperty(Hn,"passive",{get:function(){Pl=!0}}),window.addEventListener("test",Hn,Hn),window.removeEventListener("test",Hn,Hn)}catch{Pl=!1}function tp(e,t,n,r,o,l,i,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var ar=!1,za=null,Ma=!1,Cl=null,np={onError:function(e){ar=!0,za=e}};function rp(e,t,n,r,o,l,i,s,c){ar=!1,za=null,tp.apply(np,arguments)}function ap(e,t,n,r,o,l,i,s,c){if(rp.apply(this,arguments),ar){if(ar){var u=za;ar=!1,za=null}else throw Error(P(198));Ma||(Ma=!0,Cl=u)}}function on(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Mu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cs(e){if(on(e)!==e)throw Error(P(188))}function op(e){var t=e.alternate;if(!t){if(t=on(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Cs(o),e;if(l===r)return Cs(o),t;l=l.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Tu(e){return e=op(e),e!==null?Du(e):null}function Du(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Du(e);if(t!==null)return t;e=e.sibling}return null}var Lu=Te.unstable_scheduleCallback,_s=Te.unstable_cancelCallback,lp=Te.unstable_shouldYield,ip=Te.unstable_requestPaint,ee=Te.unstable_now,sp=Te.unstable_getCurrentPriorityLevel,Ei=Te.unstable_ImmediatePriority,Au=Te.unstable_UserBlockingPriority,Ta=Te.unstable_NormalPriority,cp=Te.unstable_LowPriority,ju=Te.unstable_IdlePriority,ao=null,et=null;function up(e){if(et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(ao,e,void 0,(e.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:mp,dp=Math.log,fp=Math.LN2;function mp(e){return e>>>=0,e===0?32:31-(dp(e)/fp|0)|0}var qr=64,Kr=4194304;function er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Da(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=er(s):(l&=i,l!==0&&(r=er(l)))}else i=n&~o,i!==0?r=er(i):l!==0&&(r=er(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qe(t),o=1<<n,r|=e[n],t&=~o;return r}function pp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-qe(l),s=1<<i,c=o[i];c===-1?(!(s&n)||s&r)&&(o[i]=pp(s,t)):c<=t&&(e.expiredLanes|=s),l&=~s}}function _l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ru(){var e=qr;return qr<<=1,!(qr&4194240)&&(qr=64),e}function Ao(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qe(t),e[t]=n}function gp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-qe(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function wi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var $=0;function Iu(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fu,ki,$u,Uu,Bu,Ol=!1,Gr=[],St=null,Pt=null,Ct=null,hr=new Map,gr=new Map,bt=[],vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Os(e,t){switch(e){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":Pt=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gr.delete(t.pointerId)}}function Vn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Ar(t),t!==null&&ki(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function xp(e,t,n,r,o){switch(t){case"focusin":return St=Vn(St,e,t,n,r,o),!0;case"dragenter":return Pt=Vn(Pt,e,t,n,r,o),!0;case"mouseover":return Ct=Vn(Ct,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return hr.set(l,Vn(hr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,gr.set(l,Vn(gr.get(l)||null,e,t,n,r,o)),!0}return!1}function Wu(e){var t=Qt(e.target);if(t!==null){var n=on(t);if(n!==null){if(t=n.tag,t===13){if(t=Mu(n),t!==null){e.blockedOn=t,Bu(e.priority,function(){$u(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Nl=r,n.target.dispatchEvent(r),Nl=null}else return t=Ar(n),t!==null&&ki(t),e.blockedOn=n,!1;t.shift()}return!0}function zs(e,t,n){xa(e)&&n.delete(t)}function yp(){Ol=!1,St!==null&&xa(St)&&(St=null),Pt!==null&&xa(Pt)&&(Pt=null),Ct!==null&&xa(Ct)&&(Ct=null),hr.forEach(zs),gr.forEach(zs)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ol||(Ol=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,yp)))}function vr(e){function t(o){return Qn(o,e)}if(0<Gr.length){Qn(Gr[0],e);for(var n=1;n<Gr.length;n++){var r=Gr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(St!==null&&Qn(St,e),Pt!==null&&Qn(Pt,e),Ct!==null&&Qn(Ct,e),hr.forEach(t),gr.forEach(t),n=0;n<bt.length;n++)r=bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)Wu(n),n.blockedOn===null&&bt.shift()}var Nn=pt.ReactCurrentBatchConfig,La=!0;function bp(e,t,n,r){var o=$,l=Nn.transition;Nn.transition=null;try{$=1,Ni(e,t,n,r)}finally{$=o,Nn.transition=l}}function Ep(e,t,n,r){var o=$,l=Nn.transition;Nn.transition=null;try{$=4,Ni(e,t,n,r)}finally{$=o,Nn.transition=l}}function Ni(e,t,n,r){if(La){var o=zl(e,t,n,r);if(o===null)Vo(e,t,r,Aa,n),Os(e,r);else if(xp(o,e,t,n,r))r.stopPropagation();else if(Os(e,r),t&4&&-1<vp.indexOf(e)){for(;o!==null;){var l=Ar(o);if(l!==null&&Fu(l),l=zl(e,t,n,r),l===null&&Vo(e,t,r,Aa,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Vo(e,t,r,null,n)}}var Aa=null;function zl(e,t,n,r){if(Aa=null,e=bi(r),e=Qt(e),e!==null)if(t=on(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Mu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Aa=e,null}function Hu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sp()){case Ei:return 1;case Au:return 4;case Ta:case cp:return 16;case ju:return 536870912;default:return 16}default:return 16}}var wt=null,Si=null,ya=null;function Vu(){if(ya)return ya;var e,t=Si,n=t.length,r,o="value"in wt?wt.value:wt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return ya=o.slice(e,1<r?1-r:void 0)}function ba(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yr(){return!0}function Ms(){return!1}function Le(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Yr:Ms,this.isPropagationStopped=Ms,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yr)},persist:function(){},isPersistent:Yr}),t}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pi=Le(jn),Lr=Y({},jn,{view:0,detail:0}),wp=Le(Lr),jo,Ro,qn,oo=Y({},Lr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ci,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qn&&(qn&&e.type==="mousemove"?(jo=e.screenX-qn.screenX,Ro=e.screenY-qn.screenY):Ro=jo=0,qn=e),jo)},movementY:function(e){return"movementY"in e?e.movementY:Ro}}),Ts=Le(oo),kp=Y({},oo,{dataTransfer:0}),Np=Le(kp),Sp=Y({},Lr,{relatedTarget:0}),Io=Le(Sp),Pp=Y({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Cp=Le(Pp),_p=Y({},jn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Op=Le(_p),zp=Y({},jn,{data:0}),Ds=Le(zp),Mp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dp[e])?!!t[e]:!1}function Ci(){return Lp}var Ap=Y({},Lr,{key:function(e){if(e.key){var t=Mp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ba(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ci,charCode:function(e){return e.type==="keypress"?ba(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ba(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jp=Le(Ap),Rp=Y({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ls=Le(Rp),Ip=Y({},Lr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ci}),Fp=Le(Ip),$p=Y({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Up=Le($p),Bp=Y({},oo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wp=Le(Bp),Hp=[9,13,27,32],_i=ut&&"CompositionEvent"in window,or=null;ut&&"documentMode"in document&&(or=document.documentMode);var Vp=ut&&"TextEvent"in window&&!or,Qu=ut&&(!_i||or&&8<or&&11>=or),As=" ",js=!1;function qu(e,t){switch(e){case"keyup":return Hp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ku(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dn=!1;function Qp(e,t){switch(e){case"compositionend":return Ku(t);case"keypress":return t.which!==32?null:(js=!0,As);case"textInput":return e=t.data,e===As&&js?null:e;default:return null}}function qp(e,t){if(dn)return e==="compositionend"||!_i&&qu(e,t)?(e=Vu(),ya=Si=wt=null,dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qu&&t.locale!=="ko"?null:t.data;default:return null}}var Kp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kp[e.type]:t==="textarea"}function Gu(e,t,n,r){Pu(r),t=ja(t,"onChange"),0<t.length&&(n=new Pi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var lr=null,xr=null;function Gp(e){ld(e,0)}function lo(e){var t=pn(e);if(yu(t))return e}function Yp(e,t){if(e==="change")return t}var Yu=!1;if(ut){var Fo;if(ut){var $o="oninput"in document;if(!$o){var Is=document.createElement("div");Is.setAttribute("oninput","return;"),$o=typeof Is.oninput=="function"}Fo=$o}else Fo=!1;Yu=Fo&&(!document.documentMode||9<document.documentMode)}function Fs(){lr&&(lr.detachEvent("onpropertychange",Xu),xr=lr=null)}function Xu(e){if(e.propertyName==="value"&&lo(xr)){var t=[];Gu(t,xr,e,bi(e)),zu(Gp,t)}}function Xp(e,t,n){e==="focusin"?(Fs(),lr=t,xr=n,lr.attachEvent("onpropertychange",Xu)):e==="focusout"&&Fs()}function Zp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return lo(xr)}function Jp(e,t){if(e==="click")return lo(t)}function eh(e,t){if(e==="input"||e==="change")return lo(t)}function th(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:th;function yr(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!fl.call(t,o)||!Ge(e[o],t[o]))return!1}return!0}function $s(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Us(e,t){var n=$s(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$s(n)}}function Zu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ju(){for(var e=window,t=Oa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oa(e.document)}return t}function Oi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nh(e){var t=Ju(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zu(n.ownerDocument.documentElement,n)){if(r!==null&&Oi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Us(n,l);var i=Us(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rh=ut&&"documentMode"in document&&11>=document.documentMode,fn=null,Ml=null,ir=null,Tl=!1;function Bs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tl||fn==null||fn!==Oa(r)||(r=fn,"selectionStart"in r&&Oi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ir&&yr(ir,r)||(ir=r,r=ja(Ml,"onSelect"),0<r.length&&(t=new Pi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fn)))}function Xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mn={animationend:Xr("Animation","AnimationEnd"),animationiteration:Xr("Animation","AnimationIteration"),animationstart:Xr("Animation","AnimationStart"),transitionend:Xr("Transition","TransitionEnd")},Uo={},ed={};ut&&(ed=document.createElement("div").style,"AnimationEvent"in window||(delete mn.animationend.animation,delete mn.animationiteration.animation,delete mn.animationstart.animation),"TransitionEvent"in window||delete mn.transitionend.transition);function io(e){if(Uo[e])return Uo[e];if(!mn[e])return e;var t=mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ed)return Uo[e]=t[n];return e}var td=io("animationend"),nd=io("animationiteration"),rd=io("animationstart"),ad=io("transitionend"),od=new Map,Ws="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jt(e,t){od.set(e,t),an(t,[e])}for(var Bo=0;Bo<Ws.length;Bo++){var Wo=Ws[Bo],ah=Wo.toLowerCase(),oh=Wo[0].toUpperCase()+Wo.slice(1);jt(ah,"on"+oh)}jt(td,"onAnimationEnd");jt(nd,"onAnimationIteration");jt(rd,"onAnimationStart");jt("dblclick","onDoubleClick");jt("focusin","onFocus");jt("focusout","onBlur");jt(ad,"onTransitionEnd");Cn("onMouseEnter",["mouseout","mouseover"]);Cn("onMouseLeave",["mouseout","mouseover"]);Cn("onPointerEnter",["pointerout","pointerover"]);Cn("onPointerLeave",["pointerout","pointerover"]);an("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));an("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));an("onBeforeInput",["compositionend","keypress","textInput","paste"]);an("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));an("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));an("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lh=new Set("cancel close invalid load scroll toggle".split(" ").concat(tr));function Hs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ap(r,t,void 0,e),e.currentTarget=null}function ld(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==l&&o.isPropagationStopped())break e;Hs(o,s,u),l=c}else for(i=0;i<r.length;i++){if(s=r[i],c=s.instance,u=s.currentTarget,s=s.listener,c!==l&&o.isPropagationStopped())break e;Hs(o,s,u),l=c}}}if(Ma)throw e=Cl,Ma=!1,Cl=null,e}function W(e,t){var n=t[Rl];n===void 0&&(n=t[Rl]=new Set);var r=e+"__bubble";n.has(r)||(id(t,e,2,!1),n.add(r))}function Ho(e,t,n){var r=0;t&&(r|=4),id(n,e,r,t)}var Zr="_reactListening"+Math.random().toString(36).slice(2);function br(e){if(!e[Zr]){e[Zr]=!0,pu.forEach(function(n){n!=="selectionchange"&&(lh.has(n)||Ho(n,!1,e),Ho(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zr]||(t[Zr]=!0,Ho("selectionchange",!1,t))}}function id(e,t,n,r){switch(Hu(t)){case 1:var o=bp;break;case 4:o=Ep;break;default:o=Ni}n=o.bind(null,t,n,e),o=void 0,!Pl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Vo(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var c=i.tag;if((c===3||c===4)&&(c=i.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;i=i.return}for(;s!==null;){if(i=Qt(s),i===null)return;if(c=i.tag,c===5||c===6){r=l=i;continue e}s=s.parentNode}}r=r.return}zu(function(){var u=l,p=bi(n),h=[];e:{var x=od.get(e);if(x!==void 0){var b=Pi,f=e;switch(e){case"keypress":if(ba(n)===0)break e;case"keydown":case"keyup":b=jp;break;case"focusin":f="focus",b=Io;break;case"focusout":f="blur",b=Io;break;case"beforeblur":case"afterblur":b=Io;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Ts;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Np;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Fp;break;case td:case nd:case rd:b=Cp;break;case ad:b=Up;break;case"scroll":b=wp;break;case"wheel":b=Wp;break;case"copy":case"cut":case"paste":b=Op;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Ls}var m=(t&4)!==0,E=!m&&e==="scroll",g=m?x!==null?x+"Capture":null:x;m=[];for(var d=u,v;d!==null;){v=d;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,g!==null&&(w=pr(d,g),w!=null&&m.push(Er(d,w,v)))),E)break;d=d.return}0<m.length&&(x=new b(x,f,null,n,p),h.push({event:x,listeners:m}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",x&&n!==Nl&&(f=n.relatedTarget||n.fromElement)&&(Qt(f)||f[dt]))break e;if((b||x)&&(x=p.window===p?p:(x=p.ownerDocument)?x.defaultView||x.parentWindow:window,b?(f=n.relatedTarget||n.toElement,b=u,f=f?Qt(f):null,f!==null&&(E=on(f),f!==E||f.tag!==5&&f.tag!==6)&&(f=null)):(b=null,f=u),b!==f)){if(m=Ts,w="onMouseLeave",g="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(m=Ls,w="onPointerLeave",g="onPointerEnter",d="pointer"),E=b==null?x:pn(b),v=f==null?x:pn(f),x=new m(w,d+"leave",b,n,p),x.target=E,x.relatedTarget=v,w=null,Qt(p)===u&&(m=new m(g,d+"enter",f,n,p),m.target=v,m.relatedTarget=E,w=m),E=w,b&&f)t:{for(m=b,g=f,d=0,v=m;v;v=ln(v))d++;for(v=0,w=g;w;w=ln(w))v++;for(;0<d-v;)m=ln(m),d--;for(;0<v-d;)g=ln(g),v--;for(;d--;){if(m===g||g!==null&&m===g.alternate)break t;m=ln(m),g=ln(g)}m=null}else m=null;b!==null&&Vs(h,x,b,m,!1),f!==null&&E!==null&&Vs(h,E,f,m,!0)}}e:{if(x=u?pn(u):window,b=x.nodeName&&x.nodeName.toLowerCase(),b==="select"||b==="input"&&x.type==="file")var S=Yp;else if(Rs(x))if(Yu)S=eh;else{S=Zp;var C=Xp}else(b=x.nodeName)&&b.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(S=Jp);if(S&&(S=S(e,u))){Gu(h,S,n,p);break e}C&&C(e,x,u),e==="focusout"&&(C=x._wrapperState)&&C.controlled&&x.type==="number"&&yl(x,"number",x.value)}switch(C=u?pn(u):window,e){case"focusin":(Rs(C)||C.contentEditable==="true")&&(fn=C,Ml=u,ir=null);break;case"focusout":ir=Ml=fn=null;break;case"mousedown":Tl=!0;break;case"contextmenu":case"mouseup":case"dragend":Tl=!1,Bs(h,n,p);break;case"selectionchange":if(rh)break;case"keydown":case"keyup":Bs(h,n,p)}var y;if(_i)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else dn?qu(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Qu&&n.locale!=="ko"&&(dn||N!=="onCompositionStart"?N==="onCompositionEnd"&&dn&&(y=Vu()):(wt=p,Si="value"in wt?wt.value:wt.textContent,dn=!0)),C=ja(u,N),0<C.length&&(N=new Ds(N,e,null,n,p),h.push({event:N,listeners:C}),y?N.data=y:(y=Ku(n),y!==null&&(N.data=y)))),(y=Vp?Qp(e,n):qp(e,n))&&(u=ja(u,"onBeforeInput"),0<u.length&&(p=new Ds("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:u}),p.data=y))}ld(h,t)})}function Er(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ja(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=pr(e,n),l!=null&&r.unshift(Er(e,l,o)),l=pr(e,t),l!=null&&r.push(Er(e,l,o))),e=e.return}return r}function ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vs(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var s=n,c=s.alternate,u=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&u!==null&&(s=u,o?(c=pr(n,l),c!=null&&i.unshift(Er(n,c,s))):o||(c=pr(n,l),c!=null&&i.push(Er(n,c,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var ih=/\r\n?/g,sh=/\u0000|\uFFFD/g;function Qs(e){return(typeof e=="string"?e:""+e).replace(ih,`
`).replace(sh,"")}function Jr(e,t,n){if(t=Qs(t),Qs(e)!==t&&n)throw Error(P(425))}function Ra(){}var Dl=null,Ll=null;function Al(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jl=typeof setTimeout=="function"?setTimeout:void 0,ch=typeof clearTimeout=="function"?clearTimeout:void 0,qs=typeof Promise=="function"?Promise:void 0,uh=typeof queueMicrotask=="function"?queueMicrotask:typeof qs<"u"?function(e){return qs.resolve(null).then(e).catch(dh)}:jl;function dh(e){setTimeout(function(){throw e})}function Qo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),vr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);vr(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ks(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Rn=Math.random().toString(36).slice(2),Je="__reactFiber$"+Rn,wr="__reactProps$"+Rn,dt="__reactContainer$"+Rn,Rl="__reactEvents$"+Rn,fh="__reactListeners$"+Rn,mh="__reactHandles$"+Rn;function Qt(e){var t=e[Je];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[Je]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ks(e);e!==null;){if(n=e[Je])return n;e=Ks(e)}return t}e=n,n=e.parentNode}return null}function Ar(e){return e=e[Je]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function so(e){return e[wr]||null}var Il=[],hn=-1;function Rt(e){return{current:e}}function H(e){0>hn||(e.current=Il[hn],Il[hn]=null,hn--)}function B(e,t){hn++,Il[hn]=e.current,e.current=t}var At={},ge=Rt(At),Ne=Rt(!1),Xt=At;function _n(e,t){var n=e.type.contextTypes;if(!n)return At;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Se(e){return e=e.childContextTypes,e!=null}function Ia(){H(Ne),H(ge)}function Gs(e,t,n){if(ge.current!==At)throw Error(P(168));B(ge,t),B(Ne,n)}function sd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,Xm(e)||"Unknown",o));return Y({},n,r)}function Fa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,Xt=ge.current,B(ge,e),B(Ne,Ne.current),!0}function Ys(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=sd(e,t,Xt),r.__reactInternalMemoizedMergedChildContext=e,H(Ne),H(ge),B(ge,e)):H(Ne),B(Ne,n)}var ot=null,co=!1,qo=!1;function cd(e){ot===null?ot=[e]:ot.push(e)}function ph(e){co=!0,cd(e)}function It(){if(!qo&&ot!==null){qo=!0;var e=0,t=$;try{var n=ot;for($=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ot=null,co=!1}catch(o){throw ot!==null&&(ot=ot.slice(e+1)),Lu(Ei,It),o}finally{$=t,qo=!1}}return null}var gn=[],vn=0,$a=null,Ua=0,Ae=[],je=0,Zt=null,lt=1,it="";function Ht(e,t){gn[vn++]=Ua,gn[vn++]=$a,$a=e,Ua=t}function ud(e,t,n){Ae[je++]=lt,Ae[je++]=it,Ae[je++]=Zt,Zt=e;var r=lt;e=it;var o=32-qe(r)-1;r&=~(1<<o),n+=1;var l=32-qe(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,lt=1<<32-qe(t)+o|n<<o|r,it=l+e}else lt=1<<l|n<<o|r,it=e}function zi(e){e.return!==null&&(Ht(e,1),ud(e,1,0))}function Mi(e){for(;e===$a;)$a=gn[--vn],gn[vn]=null,Ua=gn[--vn],gn[vn]=null;for(;e===Zt;)Zt=Ae[--je],Ae[je]=null,it=Ae[--je],Ae[je]=null,lt=Ae[--je],Ae[je]=null}var Me=null,ze=null,Q=!1,Ve=null;function dd(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Me=e,ze=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Me=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:lt,overflow:it}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Re(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Me=e,ze=null,!0):!1;default:return!1}}function Fl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function $l(e){if(Q){var t=ze;if(t){var n=t;if(!Xs(e,t)){if(Fl(e))throw Error(P(418));t=_t(n.nextSibling);var r=Me;t&&Xs(e,t)?dd(r,n):(e.flags=e.flags&-4097|2,Q=!1,Me=e)}}else{if(Fl(e))throw Error(P(418));e.flags=e.flags&-4097|2,Q=!1,Me=e}}}function Zs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function ea(e){if(e!==Me)return!1;if(!Q)return Zs(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Al(e.type,e.memoizedProps)),t&&(t=ze)){if(Fl(e))throw fd(),Error(P(418));for(;t;)dd(e,t),t=_t(t.nextSibling)}if(Zs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=_t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Me?_t(e.stateNode.nextSibling):null;return!0}function fd(){for(var e=ze;e;)e=_t(e.nextSibling)}function On(){ze=Me=null,Q=!1}function Ti(e){Ve===null?Ve=[e]:Ve.push(e)}var hh=pt.ReactCurrentBatchConfig;function Kn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=o.refs;i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function ta(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Js(e){var t=e._init;return t(e._payload)}function md(e){function t(g,d){if(e){var v=g.deletions;v===null?(g.deletions=[d],g.flags|=16):v.push(d)}}function n(g,d){if(!e)return null;for(;d!==null;)t(g,d),d=d.sibling;return null}function r(g,d){for(g=new Map;d!==null;)d.key!==null?g.set(d.key,d):g.set(d.index,d),d=d.sibling;return g}function o(g,d){return g=Tt(g,d),g.index=0,g.sibling=null,g}function l(g,d,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<d?(g.flags|=2,d):v):(g.flags|=2,d)):(g.flags|=1048576,d)}function i(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,d,v,w){return d===null||d.tag!==6?(d=el(v,g.mode,w),d.return=g,d):(d=o(d,v),d.return=g,d)}function c(g,d,v,w){var S=v.type;return S===un?p(g,d,v.props.children,w,v.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xt&&Js(S)===d.type)?(w=o(d,v.props),w.ref=Kn(g,d,v),w.return=g,w):(w=Ca(v.type,v.key,v.props,null,g.mode,w),w.ref=Kn(g,d,v),w.return=g,w)}function u(g,d,v,w){return d===null||d.tag!==4||d.stateNode.containerInfo!==v.containerInfo||d.stateNode.implementation!==v.implementation?(d=tl(v,g.mode,w),d.return=g,d):(d=o(d,v.children||[]),d.return=g,d)}function p(g,d,v,w,S){return d===null||d.tag!==7?(d=Yt(v,g.mode,w,S),d.return=g,d):(d=o(d,v),d.return=g,d)}function h(g,d,v){if(typeof d=="string"&&d!==""||typeof d=="number")return d=el(""+d,g.mode,v),d.return=g,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Hr:return v=Ca(d.type,d.key,d.props,null,g.mode,v),v.ref=Kn(g,null,d),v.return=g,v;case cn:return d=tl(d,g.mode,v),d.return=g,d;case xt:var w=d._init;return h(g,w(d._payload),v)}if(Jn(d)||Wn(d))return d=Yt(d,g.mode,v,null),d.return=g,d;ta(g,d)}return null}function x(g,d,v,w){var S=d!==null?d.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:s(g,d,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Hr:return v.key===S?c(g,d,v,w):null;case cn:return v.key===S?u(g,d,v,w):null;case xt:return S=v._init,x(g,d,S(v._payload),w)}if(Jn(v)||Wn(v))return S!==null?null:p(g,d,v,w,null);ta(g,v)}return null}function b(g,d,v,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(v)||null,s(d,g,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Hr:return g=g.get(w.key===null?v:w.key)||null,c(d,g,w,S);case cn:return g=g.get(w.key===null?v:w.key)||null,u(d,g,w,S);case xt:var C=w._init;return b(g,d,v,C(w._payload),S)}if(Jn(w)||Wn(w))return g=g.get(v)||null,p(d,g,w,S,null);ta(d,w)}return null}function f(g,d,v,w){for(var S=null,C=null,y=d,N=d=0,z=null;y!==null&&N<v.length;N++){y.index>N?(z=y,y=null):z=y.sibling;var T=x(g,y,v[N],w);if(T===null){y===null&&(y=z);break}e&&y&&T.alternate===null&&t(g,y),d=l(T,d,N),C===null?S=T:C.sibling=T,C=T,y=z}if(N===v.length)return n(g,y),Q&&Ht(g,N),S;if(y===null){for(;N<v.length;N++)y=h(g,v[N],w),y!==null&&(d=l(y,d,N),C===null?S=y:C.sibling=y,C=y);return Q&&Ht(g,N),S}for(y=r(g,y);N<v.length;N++)z=b(y,g,N,v[N],w),z!==null&&(e&&z.alternate!==null&&y.delete(z.key===null?N:z.key),d=l(z,d,N),C===null?S=z:C.sibling=z,C=z);return e&&y.forEach(function(ne){return t(g,ne)}),Q&&Ht(g,N),S}function m(g,d,v,w){var S=Wn(v);if(typeof S!="function")throw Error(P(150));if(v=S.call(v),v==null)throw Error(P(151));for(var C=S=null,y=d,N=d=0,z=null,T=v.next();y!==null&&!T.done;N++,T=v.next()){y.index>N?(z=y,y=null):z=y.sibling;var ne=x(g,y,T.value,w);if(ne===null){y===null&&(y=z);break}e&&y&&ne.alternate===null&&t(g,y),d=l(ne,d,N),C===null?S=ne:C.sibling=ne,C=ne,y=z}if(T.done)return n(g,y),Q&&Ht(g,N),S;if(y===null){for(;!T.done;N++,T=v.next())T=h(g,T.value,w),T!==null&&(d=l(T,d,N),C===null?S=T:C.sibling=T,C=T);return Q&&Ht(g,N),S}for(y=r(g,y);!T.done;N++,T=v.next())T=b(y,g,N,T.value,w),T!==null&&(e&&T.alternate!==null&&y.delete(T.key===null?N:T.key),d=l(T,d,N),C===null?S=T:C.sibling=T,C=T);return e&&y.forEach(function($t){return t(g,$t)}),Q&&Ht(g,N),S}function E(g,d,v,w){if(typeof v=="object"&&v!==null&&v.type===un&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Hr:e:{for(var S=v.key,C=d;C!==null;){if(C.key===S){if(S=v.type,S===un){if(C.tag===7){n(g,C.sibling),d=o(C,v.props.children),d.return=g,g=d;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===xt&&Js(S)===C.type){n(g,C.sibling),d=o(C,v.props),d.ref=Kn(g,C,v),d.return=g,g=d;break e}n(g,C);break}else t(g,C);C=C.sibling}v.type===un?(d=Yt(v.props.children,g.mode,w,v.key),d.return=g,g=d):(w=Ca(v.type,v.key,v.props,null,g.mode,w),w.ref=Kn(g,d,v),w.return=g,g=w)}return i(g);case cn:e:{for(C=v.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===v.containerInfo&&d.stateNode.implementation===v.implementation){n(g,d.sibling),d=o(d,v.children||[]),d.return=g,g=d;break e}else{n(g,d);break}else t(g,d);d=d.sibling}d=tl(v,g.mode,w),d.return=g,g=d}return i(g);case xt:return C=v._init,E(g,d,C(v._payload),w)}if(Jn(v))return f(g,d,v,w);if(Wn(v))return m(g,d,v,w);ta(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,d!==null&&d.tag===6?(n(g,d.sibling),d=o(d,v),d.return=g,g=d):(n(g,d),d=el(v,g.mode,w),d.return=g,g=d),i(g)):n(g,d)}return E}var zn=md(!0),pd=md(!1),Ba=Rt(null),Wa=null,xn=null,Di=null;function Li(){Di=xn=Wa=null}function Ai(e){var t=Ba.current;H(Ba),e._currentValue=t}function Ul(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Sn(e,t){Wa=e,Di=xn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(Di!==e)if(e={context:e,memoizedValue:t,next:null},xn===null){if(Wa===null)throw Error(P(308));xn=e,Wa.dependencies={lanes:0,firstContext:e}}else xn=xn.next=e;return t}var qt=null;function ji(e){qt===null?qt=[e]:qt.push(e)}function hd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ji(t)):(n.next=o.next,o.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yt=!1;function Ri(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ot(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ft(e,n)}return o=r.interleaved,o===null?(t.next=t,ji(r)):(t.next=o.next,o.next=t),r.interleaved=t,ft(e,n)}function Ea(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wi(e,n)}}function ec(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ha(e,t,n,r){var o=e.updateQueue;yt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var c=s,u=c.next;c.next=null,i===null?l=u:i.next=u,i=c;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==i&&(s===null?p.firstBaseUpdate=u:s.next=u,p.lastBaseUpdate=c))}if(l!==null){var h=o.baseState;i=0,p=u=c=null,s=l;do{var x=s.lane,b=s.eventTime;if((r&x)===x){p!==null&&(p=p.next={eventTime:b,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var f=e,m=s;switch(x=t,b=n,m.tag){case 1:if(f=m.payload,typeof f=="function"){h=f.call(b,h,x);break e}h=f;break e;case 3:f.flags=f.flags&-65537|128;case 0:if(f=m.payload,x=typeof f=="function"?f.call(b,h,x):f,x==null)break e;h=Y({},h,x);break e;case 2:yt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,x=o.effects,x===null?o.effects=[s]:x.push(s))}else b={eventTime:b,lane:x,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(u=p=b,c=h):p=p.next=b,i|=x;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;x=s,s=x.next,x.next=null,o.lastBaseUpdate=x,o.shared.pending=null}}while(!0);if(p===null&&(c=h),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);en|=i,e.lanes=i,e.memoizedState=h}}function tc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var jr={},tt=Rt(jr),kr=Rt(jr),Nr=Rt(jr);function Kt(e){if(e===jr)throw Error(P(174));return e}function Ii(e,t){switch(B(Nr,t),B(kr,e),B(tt,jr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:El(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=El(t,e)}H(tt),B(tt,t)}function Mn(){H(tt),H(kr),H(Nr)}function vd(e){Kt(Nr.current);var t=Kt(tt.current),n=El(t,e.type);t!==n&&(B(kr,e),B(tt,n))}function Fi(e){kr.current===e&&(H(tt),H(kr))}var q=Rt(0);function Va(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ko=[];function $i(){for(var e=0;e<Ko.length;e++)Ko[e]._workInProgressVersionPrimary=null;Ko.length=0}var wa=pt.ReactCurrentDispatcher,Go=pt.ReactCurrentBatchConfig,Jt=0,K=null,re=null,ie=null,Qa=!1,sr=!1,Sr=0,gh=0;function me(){throw Error(P(321))}function Ui(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function Bi(e,t,n,r,o,l){if(Jt=l,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wa.current=e===null||e.memoizedState===null?bh:Eh,e=n(r,o),sr){l=0;do{if(sr=!1,Sr=0,25<=l)throw Error(P(301));l+=1,ie=re=null,t.updateQueue=null,wa.current=wh,e=n(r,o)}while(sr)}if(wa.current=qa,t=re!==null&&re.next!==null,Jt=0,ie=re=K=null,Qa=!1,t)throw Error(P(300));return e}function Wi(){var e=Sr!==0;return Sr=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?K.memoizedState=ie=e:ie=ie.next=e,ie}function $e(){if(re===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=ie===null?K.memoizedState:ie.next;if(t!==null)ie=t,re=e;else{if(e===null)throw Error(P(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},ie===null?K.memoizedState=ie=e:ie=ie.next=e}return ie}function Pr(e,t){return typeof t=="function"?t(e):t}function Yo(e){var t=$e(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=re,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=i=null,c=null,u=l;do{var p=u.lane;if((Jt&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=h,i=r):c=c.next=h,K.lanes|=p,en|=p}u=u.next}while(u!==null&&u!==l);c===null?i=r:c.next=s,Ge(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,K.lanes|=l,en|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Xo(e){var t=$e(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ge(l,t.memoizedState)||(ke=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function xd(){}function yd(e,t){var n=K,r=$e(),o=t(),l=!Ge(r.memoizedState,o);if(l&&(r.memoizedState=o,ke=!0),r=r.queue,Hi(wd.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,Cr(9,Ed.bind(null,n,r,o,t),void 0,null),se===null)throw Error(P(349));Jt&30||bd(n,t,o)}return o}function bd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ed(e,t,n,r){t.value=n,t.getSnapshot=r,kd(t)&&Nd(e)}function wd(e,t,n){return n(function(){kd(t)&&Nd(e)})}function kd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function Nd(e){var t=ft(e,1);t!==null&&Ke(t,e,1,-1)}function nc(e){var t=Ze();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pr,lastRenderedState:e},t.queue=e,e=e.dispatch=yh.bind(null,K,e),[t.memoizedState,e]}function Cr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Sd(){return $e().memoizedState}function ka(e,t,n,r){var o=Ze();K.flags|=e,o.memoizedState=Cr(1|t,n,void 0,r===void 0?null:r)}function uo(e,t,n,r){var o=$e();r=r===void 0?null:r;var l=void 0;if(re!==null){var i=re.memoizedState;if(l=i.destroy,r!==null&&Ui(r,i.deps)){o.memoizedState=Cr(t,n,l,r);return}}K.flags|=e,o.memoizedState=Cr(1|t,n,l,r)}function rc(e,t){return ka(8390656,8,e,t)}function Hi(e,t){return uo(2048,8,e,t)}function Pd(e,t){return uo(4,2,e,t)}function Cd(e,t){return uo(4,4,e,t)}function _d(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Od(e,t,n){return n=n!=null?n.concat([e]):null,uo(4,4,_d.bind(null,t,e),n)}function Vi(){}function zd(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ui(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Md(e,t){var n=$e();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ui(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Td(e,t,n){return Jt&21?(Ge(n,t)||(n=Ru(),K.lanes|=n,en|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function vh(e,t){var n=$;$=n!==0&&4>n?n:4,e(!0);var r=Go.transition;Go.transition={};try{e(!1),t()}finally{$=n,Go.transition=r}}function Dd(){return $e().memoizedState}function xh(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ld(e))Ad(t,n);else if(n=hd(e,t,n,r),n!==null){var o=ye();Ke(n,e,r,o),jd(n,t,r)}}function yh(e,t,n){var r=Mt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ld(e))Ad(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,n);if(o.hasEagerState=!0,o.eagerState=s,Ge(s,i)){var c=t.interleaved;c===null?(o.next=o,ji(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}n=hd(e,t,o,r),n!==null&&(o=ye(),Ke(n,e,r,o),jd(n,t,r))}}function Ld(e){var t=e.alternate;return e===K||t!==null&&t===K}function Ad(e,t){sr=Qa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jd(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wi(e,n)}}var qa={readContext:Fe,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},bh={readContext:Fe,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:rc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ka(4194308,4,_d.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ka(4194308,4,e,t)},useInsertionEffect:function(e,t){return ka(4,2,e,t)},useMemo:function(e,t){var n=Ze();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ze();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xh.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:nc,useDebugValue:Vi,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=nc(!1),t=e[0];return e=vh.bind(null,e[1]),Ze().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,o=Ze();if(Q){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),se===null)throw Error(P(349));Jt&30||bd(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,rc(wd.bind(null,r,l,e),[e]),r.flags|=2048,Cr(9,Ed.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ze(),t=se.identifierPrefix;if(Q){var n=it,r=lt;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Eh={readContext:Fe,useCallback:zd,useContext:Fe,useEffect:Hi,useImperativeHandle:Od,useInsertionEffect:Pd,useLayoutEffect:Cd,useMemo:Md,useReducer:Yo,useRef:Sd,useState:function(){return Yo(Pr)},useDebugValue:Vi,useDeferredValue:function(e){var t=$e();return Td(t,re.memoizedState,e)},useTransition:function(){var e=Yo(Pr)[0],t=$e().memoizedState;return[e,t]},useMutableSource:xd,useSyncExternalStore:yd,useId:Dd,unstable_isNewReconciler:!1},wh={readContext:Fe,useCallback:zd,useContext:Fe,useEffect:Hi,useImperativeHandle:Od,useInsertionEffect:Pd,useLayoutEffect:Cd,useMemo:Md,useReducer:Xo,useRef:Sd,useState:function(){return Xo(Pr)},useDebugValue:Vi,useDeferredValue:function(e){var t=$e();return re===null?t.memoizedState=e:Td(t,re.memoizedState,e)},useTransition:function(){var e=Xo(Pr)[0],t=$e().memoizedState;return[e,t]},useMutableSource:xd,useSyncExternalStore:yd,useId:Dd,unstable_isNewReconciler:!1};function We(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Bl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fo={isMounted:function(e){return(e=e._reactInternals)?on(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Mt(e),l=ct(r,o);l.payload=t,n!=null&&(l.callback=n),t=Ot(e,l,o),t!==null&&(Ke(t,e,o,r),Ea(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Mt(e),l=ct(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Ot(e,l,o),t!==null&&(Ke(t,e,o,r),Ea(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Mt(e),o=ct(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ot(e,o,r),t!==null&&(Ke(t,e,r,n),Ea(t,e,r))}};function ac(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!yr(n,r)||!yr(o,l):!0}function Rd(e,t,n){var r=!1,o=At,l=t.contextType;return typeof l=="object"&&l!==null?l=Fe(l):(o=Se(t)?Xt:ge.current,r=t.contextTypes,l=(r=r!=null)?_n(e,o):At),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=fo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function oc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fo.enqueueReplaceState(t,t.state,null)}function Wl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ri(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Fe(l):(l=Se(t)?Xt:ge.current,o.context=_n(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Bl(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&fo.enqueueReplaceState(o,o.state,null),Ha(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Tn(e,t){try{var n="",r=t;do n+=Ym(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Zo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var kh=typeof WeakMap=="function"?WeakMap:Map;function Id(e,t,n){n=ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ga||(Ga=!0,ei=r),Hl(e,t)},n}function Fd(e,t,n){n=ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Hl(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Hl(e,t),typeof r!="function"&&(zt===null?zt=new Set([this]):zt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function lc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new kh;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Rh.bind(null,e,t,n),t.then(e,e))}function ic(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function sc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ct(-1,1),t.tag=2,Ot(n,t,1))),n.lanes|=1),e)}var Nh=pt.ReactCurrentOwner,ke=!1;function xe(e,t,n,r){t.child=e===null?pd(t,null,n,r):zn(t,e.child,n,r)}function cc(e,t,n,r,o){n=n.render;var l=t.ref;return Sn(t,o),r=Bi(e,t,n,r,l,o),n=Wi(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,mt(e,t,o)):(Q&&n&&zi(t),t.flags|=1,xe(e,t,r,o),t.child)}function uc(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Ji(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,$d(e,t,l,r,o)):(e=Ca(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:yr,n(i,r)&&e.ref===t.ref)return mt(e,t,o)}return t.flags|=1,e=Tt(l,r),e.ref=t.ref,e.return=t,t.child=e}function $d(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(yr(l,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,mt(e,t,o)}return Vl(e,t,n,r,o)}function Ud(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(bn,Oe),Oe|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(bn,Oe),Oe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,B(bn,Oe),Oe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,B(bn,Oe),Oe|=r;return xe(e,t,o,n),t.child}function Bd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vl(e,t,n,r,o){var l=Se(n)?Xt:ge.current;return l=_n(t,l),Sn(t,o),n=Bi(e,t,n,r,l,o),r=Wi(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,mt(e,t,o)):(Q&&r&&zi(t),t.flags|=1,xe(e,t,n,o),t.child)}function dc(e,t,n,r,o){if(Se(n)){var l=!0;Fa(t)}else l=!1;if(Sn(t,o),t.stateNode===null)Na(e,t),Rd(t,n,r),Wl(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var c=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=Fe(u):(u=Se(n)?Xt:ge.current,u=_n(t,u));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||c!==u)&&oc(t,i,r,u),yt=!1;var x=t.memoizedState;i.state=x,Ha(t,r,i,o),c=t.memoizedState,s!==r||x!==c||Ne.current||yt?(typeof p=="function"&&(Bl(t,n,p,r),c=t.memoizedState),(s=yt||ac(t,n,s,r,x,c,u))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),i.props=r,i.state=c,i.context=u,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,gd(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:We(t.type,s),i.props=u,h=t.pendingProps,x=i.context,c=n.contextType,typeof c=="object"&&c!==null?c=Fe(c):(c=Se(n)?Xt:ge.current,c=_n(t,c));var b=n.getDerivedStateFromProps;(p=typeof b=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==h||x!==c)&&oc(t,i,r,c),yt=!1,x=t.memoizedState,i.state=x,Ha(t,r,i,o);var f=t.memoizedState;s!==h||x!==f||Ne.current||yt?(typeof b=="function"&&(Bl(t,n,b,r),f=t.memoizedState),(u=yt||ac(t,n,u,r,x,f,c)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,f,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,f,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),i.props=r,i.state=f,i.context=c,r=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return Ql(e,t,n,r,l,o)}function Ql(e,t,n,r,o,l){Bd(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Ys(t,n,!1),mt(e,t,l);r=t.stateNode,Nh.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=zn(t,e.child,null,l),t.child=zn(t,null,s,l)):xe(e,t,s,l),t.memoizedState=r.state,o&&Ys(t,n,!0),t.child}function Wd(e){var t=e.stateNode;t.pendingContext?Gs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gs(e,t.context,!1),Ii(e,t.containerInfo)}function fc(e,t,n,r,o){return On(),Ti(o),t.flags|=256,xe(e,t,n,r),t.child}var ql={dehydrated:null,treeContext:null,retryLane:0};function Kl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Hd(e,t,n){var r=t.pendingProps,o=q.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),B(q,o&1),e===null)return $l(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=ho(i,r,0,null),e=Yt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Kl(n),t.memoizedState=ql,e):Qi(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Sh(e,t,i,r,s,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,s=o.sibling;var c={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Tt(o,c),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=Tt(s,l):(l=Yt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Kl(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=ql,r}return l=e.child,e=l.sibling,r=Tt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qi(e,t){return t=ho({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function na(e,t,n,r){return r!==null&&Ti(r),zn(t,e.child,null,n),e=Qi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sh(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Zo(Error(P(422))),na(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=ho({mode:"visible",children:r.children},o,0,null),l=Yt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&zn(t,e.child,null,i),t.child.memoizedState=Kl(i),t.memoizedState=ql,l);if(!(t.mode&1))return na(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(P(419)),r=Zo(l,r,void 0),na(e,t,i,r)}if(s=(i&e.childLanes)!==0,ke||s){if(r=se,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,ft(e,o),Ke(r,e,o,-1))}return Zi(),r=Zo(Error(P(421))),na(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ih.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,ze=_t(o.nextSibling),Me=t,Q=!0,Ve=null,e!==null&&(Ae[je++]=lt,Ae[je++]=it,Ae[je++]=Zt,lt=e.id,it=e.overflow,Zt=t),t=Qi(t,r.children),t.flags|=4096,t)}function mc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ul(e.return,t,n)}function Jo(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Vd(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(xe(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mc(e,n,t);else if(e.tag===19)mc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Va(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Jo(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Va(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Jo(t,!0,n,null,l);break;case"together":Jo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Na(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),en|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Tt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ph(e,t,n){switch(t.tag){case 3:Wd(t),On();break;case 5:vd(t);break;case 1:Se(t.type)&&Fa(t);break;case 4:Ii(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;B(Ba,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?Hd(e,t,n):(B(q,q.current&1),e=mt(e,t,n),e!==null?e.sibling:null);B(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Vd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,Ud(e,t,n)}return mt(e,t,n)}var Qd,Gl,qd,Kd;Qd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gl=function(){};qd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Kt(tt.current);var l=null;switch(n){case"input":o=vl(e,o),r=vl(e,r),l=[];break;case"select":o=Y({},o,{value:void 0}),r=Y({},r,{value:void 0}),l=[];break;case"textarea":o=bl(e,o),r=bl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ra)}wl(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fr.hasOwnProperty(u)?l||(l=[]):(l=l||[]).push(u,null));for(u in r){var c=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||c&&c.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in c)c.hasOwnProperty(i)&&s[i]!==c[i]&&(n||(n={}),n[i]=c[i])}else n||(l||(l=[]),l.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(l=l||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(l=l||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&W("scroll",e),l||s===c||(l=[])):(l=l||[]).push(u,c))}n&&(l=l||[]).push("style",n);var u=l;(t.updateQueue=u)&&(t.flags|=4)}};Kd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gn(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ch(e,t,n){var r=t.pendingProps;switch(Mi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Se(t.type)&&Ia(),pe(t),null;case 3:return r=t.stateNode,Mn(),H(Ne),H(ge),$i(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ea(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(ri(Ve),Ve=null))),Gl(e,t),pe(t),null;case 5:Fi(t);var o=Kt(Nr.current);if(n=t.type,e!==null&&t.stateNode!=null)qd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return pe(t),null}if(e=Kt(tt.current),ea(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Je]=t,r[wr]=l,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(o=0;o<tr.length;o++)W(tr[o],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":ws(r,l),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},W("invalid",r);break;case"textarea":Ns(r,l),W("invalid",r)}wl(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Jr(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Jr(r.textContent,s,e),o=["children",""+s]):fr.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&W("scroll",r)}switch(n){case"input":Vr(r),ks(r,l,!0);break;case"textarea":Vr(r),Ss(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ra)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Je]=t,e[wr]=r,Qd(e,t,!1,!1),t.stateNode=e;e:{switch(i=kl(n,r),n){case"dialog":W("cancel",e),W("close",e),o=r;break;case"iframe":case"object":case"embed":W("load",e),o=r;break;case"video":case"audio":for(o=0;o<tr.length;o++)W(tr[o],e);o=r;break;case"source":W("error",e),o=r;break;case"img":case"image":case"link":W("error",e),W("load",e),o=r;break;case"details":W("toggle",e),o=r;break;case"input":ws(e,r),o=vl(e,r),W("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Y({},r,{value:void 0}),W("invalid",e);break;case"textarea":Ns(e,r),o=bl(e,r),W("invalid",e);break;default:o=r}wl(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var c=s[l];l==="style"?Su(e,c):l==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ku(e,c)):l==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&mr(e,c):typeof c=="number"&&mr(e,""+c):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(fr.hasOwnProperty(l)?c!=null&&l==="onScroll"&&W("scroll",e):c!=null&&gi(e,l,c,i))}switch(n){case"input":Vr(e),ks(e,r,!1);break;case"textarea":Vr(e),Ss(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Lt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?En(e,!!r.multiple,l,!1):r.defaultValue!=null&&En(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ra)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)Kd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=Kt(Nr.current),Kt(tt.current),ea(t)){if(r=t.stateNode,n=t.memoizedProps,r[Je]=t,(l=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:Jr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Je]=t,t.stateNode=r}return pe(t),null;case 13:if(H(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&ze!==null&&t.mode&1&&!(t.flags&128))fd(),On(),t.flags|=98560,l=!1;else if(l=ea(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(P(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(P(317));l[Je]=t}else On(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),l=!1}else Ve!==null&&(ri(Ve),Ve=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?ae===0&&(ae=3):Zi())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return Mn(),Gl(e,t),e===null&&br(t.stateNode.containerInfo),pe(t),null;case 10:return Ai(t.type._context),pe(t),null;case 17:return Se(t.type)&&Ia(),pe(t),null;case 19:if(H(q),l=t.memoizedState,l===null)return pe(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Gn(l,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Va(e),i!==null){for(t.flags|=128,Gn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(q,q.current&1|2),t.child}e=e.sibling}l.tail!==null&&ee()>Dn&&(t.flags|=128,r=!0,Gn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Va(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Q)return pe(t),null}else 2*ee()-l.renderingStartTime>Dn&&n!==1073741824&&(t.flags|=128,r=!0,Gn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ee(),t.sibling=null,n=q.current,B(q,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return Xi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Oe&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function _h(e,t){switch(Mi(t),t.tag){case 1:return Se(t.type)&&Ia(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mn(),H(Ne),H(ge),$i(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fi(t),null;case 13:if(H(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));On()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(q),null;case 4:return Mn(),null;case 10:return Ai(t.type._context),null;case 22:case 23:return Xi(),null;case 24:return null;default:return null}}var ra=!1,he=!1,Oh=typeof WeakSet=="function"?WeakSet:Set,_=null;function yn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Yl(e,t,n){try{n()}catch(r){X(e,t,r)}}var pc=!1;function zh(e,t){if(Dl=La,e=Ju(),Oi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,s=-1,c=-1,u=0,p=0,h=e,x=null;t:for(;;){for(var b;h!==n||o!==0&&h.nodeType!==3||(s=i+o),h!==l||r!==0&&h.nodeType!==3||(c=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(b=h.firstChild)!==null;)x=h,h=b;for(;;){if(h===e)break t;if(x===n&&++u===o&&(s=i),x===l&&++p===r&&(c=i),(b=h.nextSibling)!==null)break;h=x,x=h.parentNode}h=b}n=s===-1||c===-1?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ll={focusedElem:e,selectionRange:n},La=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var f=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(f!==null){var m=f.memoizedProps,E=f.memoizedState,g=t.stateNode,d=g.getSnapshotBeforeUpdate(t.elementType===t.type?m:We(t.type,m),E);g.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){X(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return f=pc,pc=!1,f}function cr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Yl(t,n,l)}o=o.next}while(o!==r)}}function mo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Xl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Gd(e){var t=e.alternate;t!==null&&(e.alternate=null,Gd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Je],delete t[wr],delete t[Rl],delete t[fh],delete t[mh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yd(e){return e.tag===5||e.tag===3||e.tag===4}function hc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ra));else if(r!==4&&(e=e.child,e!==null))for(Zl(e,t,n),e=e.sibling;e!==null;)Zl(e,t,n),e=e.sibling}function Jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Jl(e,t,n),e=e.sibling;e!==null;)Jl(e,t,n),e=e.sibling}var ue=null,He=!1;function gt(e,t,n){for(n=n.child;n!==null;)Xd(e,t,n),n=n.sibling}function Xd(e,t,n){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(ao,n)}catch{}switch(n.tag){case 5:he||yn(n,t);case 6:var r=ue,o=He;ue=null,gt(e,t,n),ue=r,He=o,ue!==null&&(He?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(He?(e=ue,n=n.stateNode,e.nodeType===8?Qo(e.parentNode,n):e.nodeType===1&&Qo(e,n),vr(e)):Qo(ue,n.stateNode));break;case 4:r=ue,o=He,ue=n.stateNode.containerInfo,He=!0,gt(e,t,n),ue=r,He=o;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Yl(n,t,i),o=o.next}while(o!==r)}gt(e,t,n);break;case 1:if(!he&&(yn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,gt(e,t,n),he=r):gt(e,t,n);break;default:gt(e,t,n)}}function gc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Oh),t.forEach(function(r){var o=Fh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ue(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:ue=s.stateNode,He=!1;break e;case 3:ue=s.stateNode.containerInfo,He=!0;break e;case 4:ue=s.stateNode.containerInfo,He=!0;break e}s=s.return}if(ue===null)throw Error(P(160));Xd(l,i,o),ue=null,He=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){X(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Zd(t,e),t=t.sibling}function Zd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ue(t,e),Xe(e),r&4){try{cr(3,e,e.return),mo(3,e)}catch(m){X(e,e.return,m)}try{cr(5,e,e.return)}catch(m){X(e,e.return,m)}}break;case 1:Ue(t,e),Xe(e),r&512&&n!==null&&yn(n,n.return);break;case 5:if(Ue(t,e),Xe(e),r&512&&n!==null&&yn(n,n.return),e.flags&32){var o=e.stateNode;try{mr(o,"")}catch(m){X(e,e.return,m)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&bu(o,l),kl(s,i);var u=kl(s,l);for(i=0;i<c.length;i+=2){var p=c[i],h=c[i+1];p==="style"?Su(o,h):p==="dangerouslySetInnerHTML"?ku(o,h):p==="children"?mr(o,h):gi(o,p,h,u)}switch(s){case"input":xl(o,l);break;case"textarea":Eu(o,l);break;case"select":var x=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var b=l.value;b!=null?En(o,!!l.multiple,b,!1):x!==!!l.multiple&&(l.defaultValue!=null?En(o,!!l.multiple,l.defaultValue,!0):En(o,!!l.multiple,l.multiple?[]:"",!1))}o[wr]=l}catch(m){X(e,e.return,m)}}break;case 6:if(Ue(t,e),Xe(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(m){X(e,e.return,m)}}break;case 3:if(Ue(t,e),Xe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{vr(t.containerInfo)}catch(m){X(e,e.return,m)}break;case 4:Ue(t,e),Xe(e);break;case 13:Ue(t,e),Xe(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Gi=ee())),r&4&&gc(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(he=(u=he)||p,Ue(t,e),he=u):Ue(t,e),Xe(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(_=e,p=e.child;p!==null;){for(h=_=p;_!==null;){switch(x=_,b=x.child,x.tag){case 0:case 11:case 14:case 15:cr(4,x,x.return);break;case 1:yn(x,x.return);var f=x.stateNode;if(typeof f.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,f.props=t.memoizedProps,f.state=t.memoizedState,f.componentWillUnmount()}catch(m){X(r,n,m)}}break;case 5:yn(x,x.return);break;case 22:if(x.memoizedState!==null){xc(h);continue}}b!==null?(b.return=x,_=b):xc(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,u?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=h.stateNode,c=h.memoizedProps.style,i=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=Nu("display",i))}catch(m){X(e,e.return,m)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(m){X(e,e.return,m)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ue(t,e),Xe(e),r&4&&gc(e);break;case 21:break;default:Ue(t,e),Xe(e)}}function Xe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Yd(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(mr(o,""),r.flags&=-33);var l=hc(e);Jl(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=hc(e);Zl(e,s,i);break;default:throw Error(P(161))}}catch(c){X(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mh(e,t,n){_=e,Jd(e)}function Jd(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||ra;if(!i){var s=o.alternate,c=s!==null&&s.memoizedState!==null||he;s=ra;var u=he;if(ra=i,(he=c)&&!u)for(_=o;_!==null;)i=_,c=i.child,i.tag===22&&i.memoizedState!==null?yc(o):c!==null?(c.return=i,_=c):yc(o);for(;l!==null;)_=l,Jd(l),l=l.sibling;_=o,ra=s,he=u}vc(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,_=l):vc(e)}}function vc(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||mo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&tc(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}tc(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&vr(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}he||t.flags&512&&Xl(t)}catch(x){X(t,t.return,x)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function xc(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function yc(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{mo(4,t)}catch(c){X(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(c){X(t,o,c)}}var l=t.return;try{Xl(t)}catch(c){X(t,l,c)}break;case 5:var i=t.return;try{Xl(t)}catch(c){X(t,i,c)}}}catch(c){X(t,t.return,c)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var Th=Math.ceil,Ka=pt.ReactCurrentDispatcher,qi=pt.ReactCurrentOwner,Ie=pt.ReactCurrentBatchConfig,I=0,se=null,te=null,de=0,Oe=0,bn=Rt(0),ae=0,_r=null,en=0,po=0,Ki=0,ur=null,we=null,Gi=0,Dn=1/0,at=null,Ga=!1,ei=null,zt=null,aa=!1,kt=null,Ya=0,dr=0,ti=null,Sa=-1,Pa=0;function ye(){return I&6?ee():Sa!==-1?Sa:Sa=ee()}function Mt(e){return e.mode&1?I&2&&de!==0?de&-de:hh.transition!==null?(Pa===0&&(Pa=Ru()),Pa):(e=$,e!==0||(e=window.event,e=e===void 0?16:Hu(e.type)),e):1}function Ke(e,t,n,r){if(50<dr)throw dr=0,ti=null,Error(P(185));Dr(e,n,r),(!(I&2)||e!==se)&&(e===se&&(!(I&2)&&(po|=n),ae===4&&Et(e,de)),Pe(e,r),n===1&&I===0&&!(t.mode&1)&&(Dn=ee()+500,co&&It()))}function Pe(e,t){var n=e.callbackNode;hp(e,t);var r=Da(e,e===se?de:0);if(r===0)n!==null&&_s(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_s(n),t===1)e.tag===0?ph(bc.bind(null,e)):cd(bc.bind(null,e)),uh(function(){!(I&6)&&It()}),n=null;else{switch(Iu(r)){case 1:n=Ei;break;case 4:n=Au;break;case 16:n=Ta;break;case 536870912:n=ju;break;default:n=Ta}n=sf(n,ef.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ef(e,t){if(Sa=-1,Pa=0,I&6)throw Error(P(327));var n=e.callbackNode;if(Pn()&&e.callbackNode!==n)return null;var r=Da(e,e===se?de:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Xa(e,r);else{t=r;var o=I;I|=2;var l=nf();(se!==e||de!==t)&&(at=null,Dn=ee()+500,Gt(e,t));do try{Ah();break}catch(s){tf(e,s)}while(!0);Li(),Ka.current=l,I=o,te!==null?t=0:(se=null,de=0,t=ae)}if(t!==0){if(t===2&&(o=_l(e),o!==0&&(r=o,t=ni(e,o))),t===1)throw n=_r,Gt(e,0),Et(e,r),Pe(e,ee()),n;if(t===6)Et(e,r);else{if(o=e.current.alternate,!(r&30)&&!Dh(o)&&(t=Xa(e,r),t===2&&(l=_l(e),l!==0&&(r=l,t=ni(e,l))),t===1))throw n=_r,Gt(e,0),Et(e,r),Pe(e,ee()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:Vt(e,we,at);break;case 3:if(Et(e,r),(r&130023424)===r&&(t=Gi+500-ee(),10<t)){if(Da(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=jl(Vt.bind(null,e,we,at),t);break}Vt(e,we,at);break;case 4:if(Et(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-qe(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Th(r/1960))-r,10<r){e.timeoutHandle=jl(Vt.bind(null,e,we,at),r);break}Vt(e,we,at);break;case 5:Vt(e,we,at);break;default:throw Error(P(329))}}}return Pe(e,ee()),e.callbackNode===n?ef.bind(null,e):null}function ni(e,t){var n=ur;return e.current.memoizedState.isDehydrated&&(Gt(e,t).flags|=256),e=Xa(e,t),e!==2&&(t=we,we=n,t!==null&&ri(t)),e}function ri(e){we===null?we=e:we.push.apply(we,e)}function Dh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ge(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Et(e,t){for(t&=~Ki,t&=~po,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qe(t),r=1<<n;e[n]=-1,t&=~r}}function bc(e){if(I&6)throw Error(P(327));Pn();var t=Da(e,0);if(!(t&1))return Pe(e,ee()),null;var n=Xa(e,t);if(e.tag!==0&&n===2){var r=_l(e);r!==0&&(t=r,n=ni(e,r))}if(n===1)throw n=_r,Gt(e,0),Et(e,t),Pe(e,ee()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vt(e,we,at),Pe(e,ee()),null}function Yi(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(Dn=ee()+500,co&&It())}}function tn(e){kt!==null&&kt.tag===0&&!(I&6)&&Pn();var t=I;I|=1;var n=Ie.transition,r=$;try{if(Ie.transition=null,$=1,e)return e()}finally{$=r,Ie.transition=n,I=t,!(I&6)&&It()}}function Xi(){Oe=bn.current,H(bn)}function Gt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ch(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(Mi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ia();break;case 3:Mn(),H(Ne),H(ge),$i();break;case 5:Fi(r);break;case 4:Mn();break;case 13:H(q);break;case 19:H(q);break;case 10:Ai(r.type._context);break;case 22:case 23:Xi()}n=n.return}if(se=e,te=e=Tt(e.current,null),de=Oe=t,ae=0,_r=null,Ki=po=en=0,we=ur=null,qt!==null){for(t=0;t<qt.length;t++)if(n=qt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}qt=null}return e}function tf(e,t){do{var n=te;try{if(Li(),wa.current=qa,Qa){for(var r=K.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Qa=!1}if(Jt=0,ie=re=K=null,sr=!1,Sr=0,qi.current=null,n===null||n.return===null){ae=1,_r=t,te=null;break}e:{var l=e,i=n.return,s=n,c=t;if(t=de,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=s,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var x=p.alternate;x?(p.updateQueue=x.updateQueue,p.memoizedState=x.memoizedState,p.lanes=x.lanes):(p.updateQueue=null,p.memoizedState=null)}var b=ic(i);if(b!==null){b.flags&=-257,sc(b,i,s,l,t),b.mode&1&&lc(l,u,t),t=b,c=u;var f=t.updateQueue;if(f===null){var m=new Set;m.add(c),t.updateQueue=m}else f.add(c);break e}else{if(!(t&1)){lc(l,u,t),Zi();break e}c=Error(P(426))}}else if(Q&&s.mode&1){var E=ic(i);if(E!==null){!(E.flags&65536)&&(E.flags|=256),sc(E,i,s,l,t),Ti(Tn(c,s));break e}}l=c=Tn(c,s),ae!==4&&(ae=2),ur===null?ur=[l]:ur.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var g=Id(l,c,t);ec(l,g);break e;case 1:s=c;var d=l.type,v=l.stateNode;if(!(l.flags&128)&&(typeof d.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(zt===null||!zt.has(v)))){l.flags|=65536,t&=-t,l.lanes|=t;var w=Fd(l,s,t);ec(l,w);break e}}l=l.return}while(l!==null)}af(n)}catch(S){t=S,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function nf(){var e=Ka.current;return Ka.current=qa,e===null?qa:e}function Zi(){(ae===0||ae===3||ae===2)&&(ae=4),se===null||!(en&268435455)&&!(po&268435455)||Et(se,de)}function Xa(e,t){var n=I;I|=2;var r=nf();(se!==e||de!==t)&&(at=null,Gt(e,t));do try{Lh();break}catch(o){tf(e,o)}while(!0);if(Li(),I=n,Ka.current=r,te!==null)throw Error(P(261));return se=null,de=0,ae}function Lh(){for(;te!==null;)rf(te)}function Ah(){for(;te!==null&&!lp();)rf(te)}function rf(e){var t=lf(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,t===null?af(e):te=t,qi.current=null}function af(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_h(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,te=null;return}}else if(n=Ch(n,t,Oe),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);ae===0&&(ae=5)}function Vt(e,t,n){var r=$,o=Ie.transition;try{Ie.transition=null,$=1,jh(e,t,n,r)}finally{Ie.transition=o,$=r}return null}function jh(e,t,n,r){do Pn();while(kt!==null);if(I&6)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(gp(e,l),e===se&&(te=se=null,de=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||aa||(aa=!0,sf(Ta,function(){return Pn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ie.transition,Ie.transition=null;var i=$;$=1;var s=I;I|=4,qi.current=null,zh(e,n),Zd(n,e),nh(Ll),La=!!Dl,Ll=Dl=null,e.current=n,Mh(n),ip(),I=s,$=i,Ie.transition=l}else e.current=n;if(aa&&(aa=!1,kt=e,Ya=o),l=e.pendingLanes,l===0&&(zt=null),up(n.stateNode),Pe(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ga)throw Ga=!1,e=ei,ei=null,e;return Ya&1&&e.tag!==0&&Pn(),l=e.pendingLanes,l&1?e===ti?dr++:(dr=0,ti=e):dr=0,It(),null}function Pn(){if(kt!==null){var e=Iu(Ya),t=Ie.transition,n=$;try{if(Ie.transition=null,$=16>e?16:e,kt===null)var r=!1;else{if(e=kt,kt=null,Ya=0,I&6)throw Error(P(331));var o=I;for(I|=4,_=e.current;_!==null;){var l=_,i=l.child;if(_.flags&16){var s=l.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(_=u;_!==null;){var p=_;switch(p.tag){case 0:case 11:case 15:cr(8,p,l)}var h=p.child;if(h!==null)h.return=p,_=h;else for(;_!==null;){p=_;var x=p.sibling,b=p.return;if(Gd(p),p===u){_=null;break}if(x!==null){x.return=b,_=x;break}_=b}}}var f=l.alternate;if(f!==null){var m=f.child;if(m!==null){f.child=null;do{var E=m.sibling;m.sibling=null,m=E}while(m!==null)}}_=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,_=i;else e:for(;_!==null;){if(l=_,l.flags&2048)switch(l.tag){case 0:case 11:case 15:cr(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,_=g;break e}_=l.return}}var d=e.current;for(_=d;_!==null;){i=_;var v=i.child;if(i.subtreeFlags&2064&&v!==null)v.return=i,_=v;else e:for(i=d;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:mo(9,s)}}catch(S){X(s,s.return,S)}if(s===i){_=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,_=w;break e}_=s.return}}if(I=o,It(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(ao,e)}catch{}r=!0}return r}finally{$=n,Ie.transition=t}}return!1}function Ec(e,t,n){t=Tn(n,t),t=Id(e,t,1),e=Ot(e,t,1),t=ye(),e!==null&&(Dr(e,1,t),Pe(e,t))}function X(e,t,n){if(e.tag===3)Ec(e,e,n);else for(;t!==null;){if(t.tag===3){Ec(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zt===null||!zt.has(r))){e=Tn(n,e),e=Fd(t,e,1),t=Ot(t,e,1),e=ye(),t!==null&&(Dr(t,1,e),Pe(t,e));break}}t=t.return}}function Rh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(de&n)===n&&(ae===4||ae===3&&(de&130023424)===de&&500>ee()-Gi?Gt(e,0):Ki|=n),Pe(e,t)}function of(e,t){t===0&&(e.mode&1?(t=Kr,Kr<<=1,!(Kr&130023424)&&(Kr=4194304)):t=1);var n=ye();e=ft(e,t),e!==null&&(Dr(e,t,n),Pe(e,n))}function Ih(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),of(e,n)}function Fh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),of(e,n)}var lf;lf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,Ph(e,t,n);ke=!!(e.flags&131072)}else ke=!1,Q&&t.flags&1048576&&ud(t,Ua,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Na(e,t),e=t.pendingProps;var o=_n(t,ge.current);Sn(t,n),o=Bi(null,t,r,e,o,n);var l=Wi();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Se(r)?(l=!0,Fa(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ri(t),o.updater=fo,t.stateNode=o,o._reactInternals=t,Wl(t,r,e,n),t=Ql(null,t,r,!0,l,n)):(t.tag=0,Q&&l&&zi(t),xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Na(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Uh(r),e=We(r,e),o){case 0:t=Vl(null,t,r,e,n);break e;case 1:t=dc(null,t,r,e,n);break e;case 11:t=cc(null,t,r,e,n);break e;case 14:t=uc(null,t,r,We(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),Vl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),dc(e,t,r,o,n);case 3:e:{if(Wd(t),e===null)throw Error(P(387));r=t.pendingProps,l=t.memoizedState,o=l.element,gd(e,t),Ha(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Tn(Error(P(423)),t),t=fc(e,t,r,n,o);break e}else if(r!==o){o=Tn(Error(P(424)),t),t=fc(e,t,r,n,o);break e}else for(ze=_t(t.stateNode.containerInfo.firstChild),Me=t,Q=!0,Ve=null,n=pd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(On(),r===o){t=mt(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return vd(t),e===null&&$l(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Al(r,o)?i=null:l!==null&&Al(r,l)&&(t.flags|=32),Bd(e,t),xe(e,t,i,n),t.child;case 6:return e===null&&$l(t),null;case 13:return Hd(e,t,n);case 4:return Ii(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zn(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),cc(e,t,r,o,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,B(Ba,r._currentValue),r._currentValue=i,l!==null)if(Ge(l.value,i)){if(l.children===o.children&&!Ne.current){t=mt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var c=s.firstContext;c!==null;){if(c.context===r){if(l.tag===1){c=ct(-1,n&-n),c.tag=2;var u=l.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Ul(l.return,n,t),s.lanes|=n;break}c=c.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(P(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ul(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Sn(t,n),o=Fe(o),r=r(o),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,o=We(r,t.pendingProps),o=We(r.type,o),uc(e,t,r,o,n);case 15:return $d(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:We(r,o),Na(e,t),t.tag=1,Se(r)?(e=!0,Fa(t)):e=!1,Sn(t,n),Rd(t,r,o),Wl(t,r,o,n),Ql(null,t,r,!0,e,n);case 19:return Vd(e,t,n);case 22:return Ud(e,t,n)}throw Error(P(156,t.tag))};function sf(e,t){return Lu(e,t)}function $h(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new $h(e,t,n,r)}function Ji(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Uh(e){if(typeof e=="function")return Ji(e)?1:0;if(e!=null){if(e=e.$$typeof,e===xi)return 11;if(e===yi)return 14}return 2}function Tt(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ca(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Ji(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case un:return Yt(n.children,o,l,t);case vi:i=8,o|=8;break;case ml:return e=Re(12,n,t,o|2),e.elementType=ml,e.lanes=l,e;case pl:return e=Re(13,n,t,o),e.elementType=pl,e.lanes=l,e;case hl:return e=Re(19,n,t,o),e.elementType=hl,e.lanes=l,e;case vu:return ho(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hu:i=10;break e;case gu:i=9;break e;case xi:i=11;break e;case yi:i=14;break e;case xt:i=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=Re(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Yt(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function ho(e,t,n,r){return e=Re(22,e,r,t),e.elementType=vu,e.lanes=n,e.stateNode={isHidden:!1},e}function el(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function tl(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ao(0),this.expirationTimes=Ao(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ao(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function es(e,t,n,r,o,l,i,s,c){return e=new Bh(e,t,n,s,c),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Re(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ri(l),e}function Wh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cf(e){if(!e)return At;e=e._reactInternals;e:{if(on(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Se(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Se(n))return sd(e,n,t)}return t}function uf(e,t,n,r,o,l,i,s,c){return e=es(n,r,!0,e,o,l,i,s,c),e.context=cf(null),n=e.current,r=ye(),o=Mt(n),l=ct(r,o),l.callback=t??null,Ot(n,l,o),e.current.lanes=o,Dr(e,o,r),Pe(e,r),e}function go(e,t,n,r){var o=t.current,l=ye(),i=Mt(o);return n=cf(n),t.context===null?t.context=n:t.pendingContext=n,t=ct(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ot(o,t,i),e!==null&&(Ke(e,o,i,l),Ea(e,o,i)),i}function Za(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ts(e,t){wc(e,t),(e=e.alternate)&&wc(e,t)}function Hh(){return null}var df=typeof reportError=="function"?reportError:function(e){console.error(e)};function ns(e){this._internalRoot=e}vo.prototype.render=ns.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));go(e,t,null,null)};vo.prototype.unmount=ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tn(function(){go(null,e,null,null)}),t[dt]=null}};function vo(e){this._internalRoot=e}vo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Uu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bt.length&&t!==0&&t<bt[n].priority;n++);bt.splice(n,0,e),n===0&&Wu(e)}};function rs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kc(){}function Vh(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var u=Za(i);l.call(u)}}var i=uf(t,r,e,0,null,!1,!1,"",kc);return e._reactRootContainer=i,e[dt]=i.current,br(e.nodeType===8?e.parentNode:e),tn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=Za(c);s.call(u)}}var c=es(e,0,!1,null,null,!1,!1,"",kc);return e._reactRootContainer=c,e[dt]=c.current,br(e.nodeType===8?e.parentNode:e),tn(function(){go(t,c,n,r)}),c}function yo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var c=Za(i);s.call(c)}}go(t,i,e,o)}else i=Vh(n,t,e,o,r);return Za(i)}Fu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=er(t.pendingLanes);n!==0&&(wi(t,n|1),Pe(t,ee()),!(I&6)&&(Dn=ee()+500,It()))}break;case 13:tn(function(){var r=ft(e,1);if(r!==null){var o=ye();Ke(r,e,1,o)}}),ts(e,1)}};ki=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=ye();Ke(t,e,134217728,n)}ts(e,134217728)}};$u=function(e){if(e.tag===13){var t=Mt(e),n=ft(e,t);if(n!==null){var r=ye();Ke(n,e,t,r)}ts(e,t)}};Uu=function(){return $};Bu=function(e,t){var n=$;try{return $=e,t()}finally{$=n}};Sl=function(e,t,n){switch(t){case"input":if(xl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=so(r);if(!o)throw Error(P(90));yu(r),xl(r,o)}}}break;case"textarea":Eu(e,n);break;case"select":t=n.value,t!=null&&En(e,!!n.multiple,t,!1)}};_u=Yi;Ou=tn;var Qh={usingClientEntryPoint:!1,Events:[Ar,pn,so,Pu,Cu,Yi]},Yn={findFiberByHostInstance:Qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qh={bundleType:Yn.bundleType,version:Yn.version,rendererPackageName:Yn.rendererPackageName,rendererConfig:Yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tu(e),e===null?null:e.stateNode},findFiberByHostInstance:Yn.findFiberByHostInstance||Hh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oa.isDisabled&&oa.supportsFiber)try{ao=oa.inject(qh),et=oa}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qh;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rs(t))throw Error(P(200));return Wh(e,t,null,n)};De.createRoot=function(e,t){if(!rs(e))throw Error(P(299));var n=!1,r="",o=df;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=es(e,1,!1,null,null,n,!1,r,o),e[dt]=t.current,br(e.nodeType===8?e.parentNode:e),new ns(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Tu(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return tn(e)};De.hydrate=function(e,t,n){if(!xo(t))throw Error(P(200));return yo(null,e,t,!0,n)};De.hydrateRoot=function(e,t,n){if(!rs(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=df;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=uf(t,null,e,1,n??null,o,!1,l,i),e[dt]=t.current,br(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new vo(t)};De.render=function(e,t,n){if(!xo(t))throw Error(P(200));return yo(null,e,t,!1,n)};De.unmountComponentAtNode=function(e){if(!xo(e))throw Error(P(40));return e._reactRootContainer?(tn(function(){yo(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};De.unstable_batchedUpdates=Yi;De.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xo(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return yo(e,t,n,!1,r)};De.version="18.3.1-next-f1338f8080-20240426";function ff(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ff)}catch(e){console.error(e)}}ff(),du.exports=De;var Kh=du.exports,Nc=Kh;dl.createRoot=Nc.createRoot,dl.hydrateRoot=Nc.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Or(){return Or=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Or.apply(null,arguments)}var Nt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Nt||(Nt={}));const Sc="popstate";function Gh(e){e===void 0&&(e={});function t(r,o){let{pathname:l,search:i,hash:s}=r.location;return ai("",{pathname:l,search:i,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ja(o)}return Xh(t,n,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function mf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Yh(){return Math.random().toString(36).substr(2,8)}function Pc(e,t){return{usr:e.state,key:e.key,idx:t}}function ai(e,t,n,r){return n===void 0&&(n=null),Or({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?In(t):t,{state:n,key:t&&t.key||r||Yh()})}function Ja(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function In(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Xh(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,s=Nt.Pop,c=null,u=p();u==null&&(u=0,i.replaceState(Or({},i.state,{idx:u}),""));function p(){return(i.state||{idx:null}).idx}function h(){s=Nt.Pop;let E=p(),g=E==null?null:E-u;u=E,c&&c({action:s,location:m.location,delta:g})}function x(E,g){s=Nt.Push;let d=ai(m.location,E,g);u=p()+1;let v=Pc(d,u),w=m.createHref(d);try{i.pushState(v,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;o.location.assign(w)}l&&c&&c({action:s,location:m.location,delta:1})}function b(E,g){s=Nt.Replace;let d=ai(m.location,E,g);u=p();let v=Pc(d,u),w=m.createHref(d);i.replaceState(v,"",w),l&&c&&c({action:s,location:m.location,delta:0})}function f(E){let g=o.location.origin!=="null"?o.location.origin:o.location.href,d=typeof E=="string"?E:Ja(E);return d=d.replace(/ $/,"%20"),G(g,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,g)}let m={get action(){return s},get location(){return e(o,i)},listen(E){if(c)throw new Error("A history only accepts one active listener");return o.addEventListener(Sc,h),c=E,()=>{o.removeEventListener(Sc,h),c=null}},createHref(E){return t(o,E)},createURL:f,encodeLocation(E){let g=f(E);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:x,replace:b,go(E){return i.go(E)}};return m}var Cc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Cc||(Cc={}));function Zh(e,t,n){return n===void 0&&(n="/"),Jh(e,t,n)}function Jh(e,t,n,r){let o=typeof t=="string"?In(t):t,l=Ln(o.pathname||"/",n);if(l==null)return null;let i=pf(e);e0(i);let s=null,c=d0(l);for(let u=0;s==null&&u<i.length;++u)s=c0(i[u],c);return s}function pf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(l,i,s)=>{let c={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};c.relativePath.startsWith("/")&&(G(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Dt([r,c.relativePath]),p=n.concat(c);l.children&&l.children.length>0&&(G(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),pf(l.children,t,p,u)),!(l.path==null&&!l.index)&&t.push({path:u,score:i0(u,l.index),routesMeta:p})};return e.forEach((l,i)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))o(l,i);else for(let c of hf(l.path))o(l,i,c)}),t}function hf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=hf(r.join("/")),s=[];return s.push(...i.map(c=>c===""?l:[l,c].join("/"))),o&&s.push(...i),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function e0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:s0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const t0=/^:[\w-]+$/,n0=3,r0=2,a0=1,o0=10,l0=-2,_c=e=>e==="*";function i0(e,t){let n=e.split("/"),r=n.length;return n.some(_c)&&(r+=l0),t&&(r+=r0),n.filter(o=>!_c(o)).reduce((o,l)=>o+(t0.test(l)?n0:l===""?a0:o0),r)}function s0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function c0(e,t,n){let{routesMeta:r}=e,o={},l="/",i=[];for(let s=0;s<r.length;++s){let c=r[s],u=s===r.length-1,p=l==="/"?t:t.slice(l.length)||"/",h=oi({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},p),x=c.route;if(!h)return null;Object.assign(o,h.params),i.push({params:o,pathname:Dt([l,h.pathname]),pathnameBase:p0(Dt([l,h.pathnameBase])),route:x}),h.pathnameBase!=="/"&&(l=Dt([l,h.pathnameBase]))}return i}function oi(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=u0(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((u,p,h)=>{let{paramName:x,isOptional:b}=p;if(x==="*"){let m=s[h]||"";i=l.slice(0,l.length-m.length).replace(/(.)\/+$/,"$1")}const f=s[h];return b&&!f?u[x]=void 0:u[x]=(f||"").replace(/%2F/g,"/"),u},{}),pathname:l,pathnameBase:i,pattern:e}}function u0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),mf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,c)=>(r.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function d0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return mf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ln(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function f0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?In(e):e,l;return n?(n=gf(n),n.startsWith("/")?l=Oc(n.substring(1),"/"):l=Oc(n,t)):l=t,{pathname:l,search:h0(r),hash:g0(o)}}function Oc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function nl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function m0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function as(e,t){let n=m0(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function os(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=In(e):(o=Or({},e),G(!o.pathname||!o.pathname.includes("?"),nl("?","pathname","search",o)),G(!o.pathname||!o.pathname.includes("#"),nl("#","pathname","hash",o)),G(!o.search||!o.search.includes("#"),nl("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,s;if(i==null)s=n;else{let h=t.length-1;if(!r&&i.startsWith("..")){let x=i.split("/");for(;x[0]==="..";)x.shift(),h-=1;o.pathname=x.join("/")}s=h>=0?t[h]:"/"}let c=f0(o,s),u=i&&i!=="/"&&i.endsWith("/"),p=(l||i===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||p)&&(c.pathname+="/"),c}const gf=e=>e.replace(/\/\/+/g,"/"),Dt=e=>gf(e.join("/")),p0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),h0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,g0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function v0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const vf=["post","put","patch","delete"];new Set(vf);const x0=["get",...vf];new Set(x0);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zr(){return zr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zr.apply(null,arguments)}const bo=k.createContext(null),xf=k.createContext(null),ht=k.createContext(null),Eo=k.createContext(null),Ft=k.createContext({outlet:null,matches:[],isDataRoute:!1}),yf=k.createContext(null);function y0(e,t){let{relative:n}=t===void 0?{}:t;Fn()||G(!1);let{basename:r,navigator:o}=k.useContext(ht),{hash:l,pathname:i,search:s}=wo(e,{relative:n}),c=i;return r!=="/"&&(c=i==="/"?r:Dt([r,i])),o.createHref({pathname:c,search:s,hash:l})}function Fn(){return k.useContext(Eo)!=null}function Ce(){return Fn()||G(!1),k.useContext(Eo).location}function bf(e){k.useContext(ht).static||k.useLayoutEffect(e)}function ve(){let{isDataRoute:e}=k.useContext(Ft);return e?T0():b0()}function b0(){Fn()||G(!1);let e=k.useContext(bo),{basename:t,future:n,navigator:r}=k.useContext(ht),{matches:o}=k.useContext(Ft),{pathname:l}=Ce(),i=JSON.stringify(as(o,n.v7_relativeSplatPath)),s=k.useRef(!1);return bf(()=>{s.current=!0}),k.useCallback(function(u,p){if(p===void 0&&(p={}),!s.current)return;if(typeof u=="number"){r.go(u);return}let h=os(u,JSON.parse(i),l,p.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Dt([t,h.pathname])),(p.replace?r.replace:r.push)(h,p.state,p)},[t,r,i,l,e])}function wo(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(ht),{matches:o}=k.useContext(Ft),{pathname:l}=Ce(),i=JSON.stringify(as(o,r.v7_relativeSplatPath));return k.useMemo(()=>os(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function E0(e,t){return w0(e,t)}function w0(e,t,n,r){Fn()||G(!1);let{navigator:o}=k.useContext(ht),{matches:l}=k.useContext(Ft),i=l[l.length-1],s=i?i.params:{};i&&i.pathname;let c=i?i.pathnameBase:"/";i&&i.route;let u=Ce(),p;if(t){var h;let E=typeof t=="string"?In(t):t;c==="/"||(h=E.pathname)!=null&&h.startsWith(c)||G(!1),p=E}else p=u;let x=p.pathname||"/",b=x;if(c!=="/"){let E=c.replace(/^\//,"").split("/");b="/"+x.replace(/^\//,"").split("/").slice(E.length).join("/")}let f=Zh(e,{pathname:b}),m=C0(f&&f.map(E=>Object.assign({},E,{params:Object.assign({},s,E.params),pathname:Dt([c,o.encodeLocation?o.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?c:Dt([c,o.encodeLocation?o.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),l,n,r);return t&&m?k.createElement(Eo.Provider,{value:{location:zr({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Nt.Pop}},m):m}function k0(){let e=M0(),t=v0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:o},n):null,null)}const N0=k.createElement(k0,null);class S0 extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(Ft.Provider,{value:this.props.routeContext},k.createElement(yf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function P0(e){let{routeContext:t,match:n,children:r}=e,o=k.useContext(bo);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Ft.Provider,{value:t},r)}function C0(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let p=i.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);p>=0||G(!1),i=i.slice(0,Math.min(i.length,p+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<i.length;p++){let h=i[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=p),h.route.id){let{loaderData:x,errors:b}=n,f=h.route.loader&&x[h.route.id]===void 0&&(!b||b[h.route.id]===void 0);if(h.route.lazy||f){c=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((p,h,x)=>{let b,f=!1,m=null,E=null;n&&(b=s&&h.route.id?s[h.route.id]:void 0,m=h.route.errorElement||N0,c&&(u<0&&x===0?(D0("route-fallback"),f=!0,E=null):u===x&&(f=!0,E=h.route.hydrateFallbackElement||null)));let g=t.concat(i.slice(0,x+1)),d=()=>{let v;return b?v=m:f?v=E:h.route.Component?v=k.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=p,k.createElement(P0,{match:h,routeContext:{outlet:p,matches:g,isDataRoute:n!=null},children:v})};return n&&(h.route.ErrorBoundary||h.route.errorElement||x===0)?k.createElement(S0,{location:n.location,revalidation:n.revalidation,component:m,error:b,children:d(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):d()},null)}var Ef=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ef||{}),wf=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(wf||{});function _0(e){let t=k.useContext(bo);return t||G(!1),t}function O0(e){let t=k.useContext(xf);return t||G(!1),t}function z0(e){let t=k.useContext(Ft);return t||G(!1),t}function kf(e){let t=z0(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function M0(){var e;let t=k.useContext(yf),n=O0(),r=kf();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function T0(){let{router:e}=_0(Ef.UseNavigateStable),t=kf(wf.UseNavigateStable),n=k.useRef(!1);return bf(()=>{n.current=!0}),k.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,zr({fromRouteId:t},l)))},[e,t])}const zc={};function D0(e,t,n){zc[e]||(zc[e]=!0)}function L0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ls(e){let{to:t,replace:n,state:r,relative:o}=e;Fn()||G(!1);let{future:l,static:i}=k.useContext(ht),{matches:s}=k.useContext(Ft),{pathname:c}=Ce(),u=ve(),p=os(t,as(s,l.v7_relativeSplatPath),c,o==="path"),h=JSON.stringify(p);return k.useEffect(()=>u(JSON.parse(h),{replace:n,state:r,relative:o}),[u,h,o,n,r]),null}function F(e){G(!1)}function A0(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Nt.Pop,navigator:l,static:i=!1,future:s}=e;Fn()&&G(!1);let c=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:c,navigator:l,static:i,future:zr({v7_relativeSplatPath:!1},s)}),[c,s,l,i]);typeof r=="string"&&(r=In(r));let{pathname:p="/",search:h="",hash:x="",state:b=null,key:f="default"}=r,m=k.useMemo(()=>{let E=Ln(p,c);return E==null?null:{location:{pathname:E,search:h,hash:x,state:b,key:f},navigationType:o}},[c,p,h,x,b,f,o]);return m==null?null:k.createElement(ht.Provider,{value:u},k.createElement(Eo.Provider,{children:n,value:m}))}function j0(e){let{children:t,location:n}=e;return E0(li(t),n)}new Promise(()=>{});function li(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,o)=>{if(!k.isValidElement(r))return;let l=[...t,o];if(r.type===k.Fragment){n.push.apply(n,li(r.props.children,l));return}r.type!==F&&G(!1),!r.props.index||!r.props.children||G(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=li(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eo(){return eo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},eo.apply(null,arguments)}function Nf(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function R0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function I0(e,t){return e.button===0&&(!t||t==="_self")&&!R0(e)}const F0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],$0=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],U0="6";try{window.__reactRouterVersion=U0}catch{}const B0=k.createContext({isTransitioning:!1}),W0="startTransition",Mc=Wm[W0];function H0(e){let{basename:t,children:n,future:r,window:o}=e,l=k.useRef();l.current==null&&(l.current=Gh({window:o,v5Compat:!0}));let i=l.current,[s,c]=k.useState({action:i.action,location:i.location}),{v7_startTransition:u}=r||{},p=k.useCallback(h=>{u&&Mc?Mc(()=>c(h)):c(h)},[c,u]);return k.useLayoutEffect(()=>i.listen(p),[i,p]),k.useEffect(()=>L0(r),[r]),k.createElement(A0,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:i,future:r})}const V0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Q0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,U=k.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:l,replace:i,state:s,target:c,to:u,preventScrollReset:p,viewTransition:h}=t,x=Nf(t,F0),{basename:b}=k.useContext(ht),f,m=!1;if(typeof u=="string"&&Q0.test(u)&&(f=u,V0))try{let v=new URL(window.location.href),w=u.startsWith("//")?new URL(v.protocol+u):new URL(u),S=Ln(w.pathname,b);w.origin===v.origin&&S!=null?u=S+w.search+w.hash:m=!0}catch{}let E=y0(u,{relative:o}),g=K0(u,{replace:i,state:s,target:c,preventScrollReset:p,relative:o,viewTransition:h});function d(v){r&&r(v),v.defaultPrevented||g(v)}return k.createElement("a",eo({},x,{href:f||E,onClick:m||l?r:d,ref:n,target:c}))}),Tc=k.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:l="",end:i=!1,style:s,to:c,viewTransition:u,children:p}=t,h=Nf(t,$0),x=wo(c,{relative:h.relative}),b=Ce(),f=k.useContext(xf),{navigator:m,basename:E}=k.useContext(ht),g=f!=null&&G0(x)&&u===!0,d=m.encodeLocation?m.encodeLocation(x).pathname:x.pathname,v=b.pathname,w=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;o||(v=v.toLowerCase(),w=w?w.toLowerCase():null,d=d.toLowerCase()),w&&E&&(w=Ln(w,E)||w);const S=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let C=v===d||!i&&v.startsWith(d)&&v.charAt(S)==="/",y=w!=null&&(w===d||!i&&w.startsWith(d)&&w.charAt(d.length)==="/"),N={isActive:C,isPending:y,isTransitioning:g},z=C?r:void 0,T;typeof l=="function"?T=l(N):T=[l,C?"active":null,y?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let ne=typeof s=="function"?s(N):s;return k.createElement(U,eo({},h,{"aria-current":z,className:T,ref:n,style:ne,to:c,viewTransition:u}),typeof p=="function"?p(N):p)});var ii;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ii||(ii={}));var Dc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Dc||(Dc={}));function q0(e){let t=k.useContext(bo);return t||G(!1),t}function K0(e,t){let{target:n,replace:r,state:o,preventScrollReset:l,relative:i,viewTransition:s}=t===void 0?{}:t,c=ve(),u=Ce(),p=wo(e,{relative:i});return k.useCallback(h=>{if(I0(h,n)){h.preventDefault();let x=r!==void 0?r:Ja(u)===Ja(p);c(e,{replace:x,state:o,preventScrollReset:l,relative:i,viewTransition:s})}},[u,c,p,r,o,n,e,l,i,s])}function G0(e,t){t===void 0&&(t={});let n=k.useContext(B0);n==null&&G(!1);let{basename:r}=q0(ii.useViewTransitionState),o=wo(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=Ln(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=Ln(n.nextLocation.pathname,r)||n.nextLocation.pathname;return oi(o.pathname,i)!=null||oi(o.pathname,l)!=null}/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=e=>e==null?void 0:e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function X0(e,t,n=[]){if(t==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Y0(e),size:24,node:t,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=e=>{let t="",n=!1;for(const r of e){if(r==="-"||r==="_"||r<=" "){n=t.length>0;continue}t.length===0?t+=r.toLowerCase():t+=n?r.toUpperCase():r,n=!1}return t};/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=e=>{const t=Z0(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function rl(e){return e!=null}function e1(e,t={}){var x,b;const n=t.attributeNames??{},r=f=>n[f]??f,o=e.size??e.width??Wt.width,l=e.size??e.height??Wt.height,i=((x=e.aliases)==null?void 0:x.filter(f=>typeof f=="string"&&f.trim()!=="").map(f=>`lucide-${f}`))??[],s=[...e.name?[`lucide-${e.name}`]:[],...i],c=((b=t.className)==null?void 0:b.split(" ").filter(Boolean))??[],u=t.includeDefaultClasses===!1?si(...c):si("lucide",...s,...c),p=t.absoluteStrokeWidth?Number(t.strokeWidth??Wt["stroke-width"])*Number(e.size??e.width??Wt.width)/Number(t.size??t.width??Wt.width):t.strokeWidth??Wt["stroke-width"];return["svg",{...Object.entries(Wt).reduce((f,[m,E])=>(f[r(m)]=E,f),{}),..."color"in t&&t.color&&{[r("stroke")]:t.color},..."size"in t&&rl(t.size)&&{[r("width")]:t.size,[r("height")]:t.size},..."width"in t&&rl(t.width)&&{[r("width")]:t.width},..."height"in t&&rl(t.height)&&{[r("height")]:t.height},[r("stroke-width")]:p,...u&&{[r("class")]:u},[r("viewBox")]:`0 0 ${o} ${l}`,...t.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in t&&t.attributes},e.node.map(f=>{const[m,E,g]=f,d=t.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...E}:E;return g?[m,d,g]:[m,d]})]}/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function t1(e,t={}){return e1(e,{...t,attributeNames:{...t.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},r1=k.createContext({}),a1=()=>k.useContext(r1),o1=k.forwardRef(({color:e,size:t,width:n,height:r,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:i,className:s="",children:c,iconNode:u=[],icon:p={node:u,aliases:[],size:24},...h},x)=>{const{size:b=24,strokeWidth:f=2,absoluteStrokeWidth:m=!1,nonScalingStroke:E=!1,color:g="currentColor",className:d=""}=a1()??{},v=!!c||n1(h),[w,S,C=[]]=t1(p,{color:e??g,width:n??t??b,height:r??t??b,strokeWidth:o??f,absoluteStrokeWidth:l??m,nonScalingStroke:i??E,className:si(d,s),hasA11yProp:v,attributes:h});return k.createElement(w,{ref:x,...S},[...C.map(([y,N])=>k.createElement(y,N)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function L(e,t=[],n=[]){const r=typeof e=="string"?X0(e,t,n):e,o=k.forwardRef(({className:l,...i},s)=>k.createElement(o1,{ref:s,icon:r,className:l,...i}));return r.name&&(o.displayName=J0(r.name)),o}/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};Sf.node;const l1=L(Sf);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};Pf.node;const nn=L(Pf);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf={name:"bell",size:24,node:[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]};Cf.node;const i1=L(Cf);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};_f.node;const s1=L(_f);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of={name:"bookmark",size:24,node:[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]]};Of.node;const c1=L(Of);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf={name:"calendar-days",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M8 17h.01",key:"p3bg7i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M16 17h.01",key:"ql8jdd"}]]};zf.node;const Mf=L(zf);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};Tf.node;const u1=L(Tf);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};Df.node;const $n=L(Df);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};Lf.node;const d1=L(Lf);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};Af.node;const rn=L(Af);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf={name:"circle-plus",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],aliases:["plus-circle"]};jf.node;const f1=L(jf);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};Rf.node;const is=L(Rf);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If={name:"circle-user",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]],aliases:["user-circle"]};If.node;const m1=L(If);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff={name:"code-xml",size:24,node:[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],aliases:["code-2"]};Ff.node;const p1=L(Ff);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f={name:"credit-card",size:24,node:[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]};$f.node;const Un=L($f);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};Uf.node;const h1=L(Uf);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf={name:"fingerprint-pattern",size:24,node:[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],aliases:["fingerprint"]};Bf.node;const g1=L(Bf);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};Wf.node;const v1=L(Wf);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf={name:"key-round",size:24,node:[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]};Hf.node;const x1=L(Hf);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf={name:"layout-dashboard",size:24,node:[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]};Vf.node;const y1=L(Vf);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf={name:"lightbulb",size:24,node:[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]};Qf.node;const b1=L(Qf);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf={name:"link-2",size:24,node:[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]};qf.node;const E1=L(qf);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf={name:"lock-keyhole",size:24,node:[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]};Kf.node;const ss=L(Kf);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]};Gf.node;const Yf=L(Gf);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};Xf.node;const ko=L(Xf);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};Zf.node;const w1=L(Zf);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf={name:"message-circle",size:24,node:[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]]};Jf.node;const k1=L(Jf);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};em.node;const N1=L(em);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm={name:"rotate-ccw-clock",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],aliases:["history"]};tm.node;const S1=L(tm);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm={name:"save",size:24,node:[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]};nm.node;const P1=L(nm);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};rm.node;const C1=L(rm);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am={name:"settings",size:24,node:[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};am.node;const cs=L(am);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};om.node;const No=L(om);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};lm.node;const us=L(lm);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};im.node;const _1=L(im);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm={name:"ticket",size:24,node:[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]};sm.node;const O1=L(sm);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm={name:"trending-up",size:24,node:[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]};cm.node;const um=L(cm);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm={name:"user-round",size:24,node:[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],aliases:["user-2"]};dm.node;const ds=L(dm);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};fm.node;const z1=L(fm);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm={name:"wallet-cards",size:24,node:[["path",{d:"M3 11h3.75a2 2 0 0 1 1.6.8l.45.6a4 4 0 0 0 6.4 0l.45-.6a2 2 0 0 1 1.6-.8H21",key:"1vwh6y"}],["path",{d:"M3 7h18",key:"1uiuf2"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]};mm.node;const fs=L(mm);/**
 * @license lucide-react v1.42.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};pm.node;const hm=L(pm);function gm(){return a.createElement("div",{className:"relative rounded-[28px] border border-[#dedcff] bg-white p-3 shadow-[0_24px_70px_rgba(75,64,160,0.15)] sm:p-5"},a.createElement("div",{className:"flex items-center justify-between border-b border-[#efeff8] pb-4"},a.createElement("div",{className:"flex items-center gap-2 text-sm font-bold text-[#20233d]"},a.createElement("span",{className:"h-2 w-2 rounded-full bg-[#735fe8]"}),"Content Dashboard"),a.createElement("span",{className:"rounded-full bg-[#e7fbf5] px-2.5 py-1 text-[9px] font-bold text-[#19977e]"},"+24% Growth")),a.createElement("p",{className:"mt-4 text-xs text-slate-400"},"Overview of your upcoming strategy"),a.createElement("div",{className:"mt-4 grid gap-3 sm:grid-cols-2"},a.createElement("div",{className:"rounded-2xl bg-[#f7f6ff] p-4"},a.createElement("p",{className:"text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400"},"Predictor Score"),a.createElement("div",{className:"mt-3 flex items-end justify-between gap-3"},a.createElement("div",null,a.createElement("p",{className:"text-3xl font-extrabold text-[#242541]"},"92"),a.createElement("p",{className:"mt-1 text-xs font-semibold text-[#27a28d]"},"Excellent")),a.createElement(um,{size:20,className:"text-[#6d5ce7]"}))),a.createElement("div",{className:"rounded-2xl border border-[#eeeef7] p-4"},a.createElement("p",{className:"text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400"},"Next Post Timing"),a.createElement("p",{className:"mt-3 text-2xl font-extrabold text-[#242541]"},"14:30"),a.createElement("p",{className:"mt-1 text-xs text-slate-400"},"Today"),a.createElement("div",{className:"mt-3 h-1.5 rounded-full bg-[#ebeafd]"},a.createElement("div",{className:"h-full w-4/5 rounded-full bg-[#735fe8]"})))),a.createElement("div",{className:"mt-3 rounded-2xl border border-[#eeeef7] p-4"},a.createElement("div",{className:"flex items-center justify-between gap-3"},a.createElement("div",null,a.createElement("p",{className:"text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400"},"AI Topic Analysis: Q3 Trends"),a.createElement("p",{className:"mt-2 text-xs leading-5 text-[#4d4e68]"},"High engagement potential detected for"," ",a.createElement("span",{className:"font-bold text-[#6d5ce7]"},'"AI Productivity"')," ","keywords.")),a.createElement(us,{size:19,className:"shrink-0 text-[#e39b3c]"})),a.createElement("div",{className:"mt-4 flex flex-wrap gap-2"},a.createElement("span",{className:"rounded-full bg-[#eeeaff] px-2.5 py-1 text-[9px] font-bold text-[#6355dc]"},"High Intent"),a.createElement("span",{className:"rounded-full bg-[#e7fbf5] px-2.5 py-1 text-[9px] font-bold text-[#19977e]"},"Trending"),a.createElement("span",{className:"rounded-full bg-[#fff2df] px-2.5 py-1 text-[9px] font-bold text-[#b86c12]"},"Q3"))))}function M1(){const e=ve();return a.createElement("section",{id:"home",className:"scroll-mt-24 bg-[radial-gradient(circle_at_82%_18%,#eeeaff_0,transparent_34%),linear-gradient(180deg,#fbfaff_0%,#f8f7ff_100%)] pt-[72px]"},a.createElement("div",{className:"mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:pb-28 lg:pt-24"},a.createElement("div",null,a.createElement("div",{className:"inline-flex items-center gap-2 rounded-full border border-[#dcd7ff] bg-white px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-[#6d5ce7] shadow-sm"},a.createElement(us,{size:13})," INTRODUCING PREDICTOR SCORE"),a.createElement("h1",{className:"mt-6 max-w-xl text-5xl font-extrabold leading-[1.05] tracking-[-0.055em] text-[#20213c] sm:text-6xl"},"Smarter Content,",a.createElement("br",null),a.createElement("span",{className:"text-[#6d5ce7]"},"Faster Growth.")),a.createElement("p",{className:"mt-6 max-w-lg text-base leading-7 text-[#74758b]"},"The AI content engine that analyzes, plans, and predicts performance before you publish. Stop guessing and start growing with Meateka."),a.createElement("div",{className:"mt-8 flex flex-wrap gap-3"},a.createElement("button",{type:"button",onClick:()=>e("/create-content"),className:"inline-flex items-center gap-2 rounded-xl bg-[#6d5ce7] px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_22px_rgba(109,92,231,0.25)] transition hover:bg-[#5948d6]"},"Start Free Trial ",a.createElement(nn,{size:16})),a.createElement("button",{type:"button",onClick:()=>{var t;return(t=document.getElementById("features"))==null?void 0:t.scrollIntoView({behavior:"smooth"})},className:"inline-flex items-center gap-2 rounded-xl border border-[#dedcf0] bg-white px-5 py-3.5 text-sm font-bold text-[#383953] transition hover:border-[#bfb7fa]"},a.createElement("span",{className:"flex h-6 w-6 items-center justify-center rounded-full bg-[#f0edff] text-[#6d5ce7]"},a.createElement(N1,{size:11,fill:"currentColor"})),"Watch Demo")),a.createElement("div",{className:"mt-8 flex items-center gap-3"},a.createElement("div",{className:"flex -space-x-2"},["#f1b996","#d88c72","#f0c6a5","#94614d"].map((t,n)=>a.createElement("span",{key:t,className:"flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#fbfaff] text-[10px] font-bold text-white",style:{backgroundColor:t}},["A","M","J","S"][n]))),a.createElement("p",{className:"text-xs text-[#85869a]"},"Trusted by"," ",a.createElement("strong",{className:"text-[#45465e]"},"10,000+ creators")))),a.createElement(gm,null)))}function al({icon:e,title:t,description:n,children:r,className:o=""}){return a.createElement("div",{className:`rounded-2xl border border-gray-200 bg-white p-5 shadow-sm ${o}`},a.createElement("div",{className:"flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600"},e),a.createElement("h3",{className:"mt-4 text-sm font-semibold text-gray-900"},t),a.createElement("p",{className:"mt-2 text-xs leading-5 text-gray-600"},n),r&&a.createElement("div",{className:"mt-5"},r))}function T1(){return a.createElement("div",{className:"flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"},a.createElement("div",{className:"flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600"},"📊"),a.createElement("h3",{className:"mt-4 text-sm font-semibold text-gray-900"},"Engagement Prediction"),a.createElement("p",{className:"mt-2 text-xs leading-5 text-gray-600"},"Score your content before it goes live. Our models predict likely likes, comments, and shares based on historical data."),a.createElement("div",{className:"mt-auto rounded-xl border border-gray-200 bg-gray-50 px-3 py-3"},a.createElement("div",{className:"flex items-center justify-between"},a.createElement("span",{className:"text-xs text-gray-700"},"Predicted Score"),a.createElement("span",{className:"text-sm font-bold text-teal-600"},"87",a.createElement("span",{className:"text-xs font-normal text-gray-400"},"/100")))))}function vm(){return a.createElement("section",{className:"bg-[#f8f8fc] px-6 py-10"},a.createElement("div",{className:"mx-auto max-w-6xl"},a.createElement("div",{className:"grid grid-cols-1 gap-4 lg:grid-cols-3"},a.createElement(al,{className:"lg:col-span-2",icon:"💡",title:"Content Idea Recommendation",description:"Stop staring at a blank page. Our AI analyzes trending topics in your niche and generates highly relevant, high-potential content ideas tailored to your audience's current interests."},a.createElement(gm,null)),a.createElement(T1,null)),a.createElement("div",{className:"mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3"},a.createElement(al,{icon:"◷",title:"Best Posting Time",description:"Maximize reach with dynamic scheduling. AI pinpoints the exact minute your specific audience is most active online."},a.createElement("div",{className:"rounded-xl bg-indigo-50 p-2"},a.createElement("div",{className:"grid grid-cols-3 gap-1 text-center text-[10px]"},a.createElement("div",{className:"rounded-lg bg-white py-2 text-gray-500"},"9 AM"),a.createElement("div",{className:"rounded-lg bg-indigo-600 py-2 font-semibold text-white"},"11 AM"),a.createElement("div",{className:"rounded-lg bg-white py-2 text-gray-500"},"1 PM")))),a.createElement(al,{className:"lg:col-span-2",icon:"📄",title:"Caption & Hashtag Analysis",description:"Craft the perfect message. Analyze sentiment, readability, and hashtag density to ensure your captions convert readers into followers."},a.createElement("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2"},a.createElement("div",{className:"space-y-2"},a.createElement("span",{className:"inline-block rounded-full border border-gray-200 bg-white px-2 py-1 text-[10px] text-gray-600"},"Tone: Enthusiastic"),a.createElement("br",null),a.createElement("span",{className:"inline-block rounded-full border border-gray-200 bg-white px-2 py-1 text-[10px] text-gray-600"},"Length: Optimal")),a.createElement("div",{className:"rounded-xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50 p-4"},a.createElement("div",{className:"space-y-2"},a.createElement("div",{className:"h-2 w-full rounded bg-gray-200"}),a.createElement("div",{className:"h-2 w-4/5 rounded bg-gray-200"}),a.createElement("div",{className:"h-2 w-3/5 rounded bg-gray-200"})),a.createElement("p",{className:"mt-4 text-[10px] text-indigo-600"},"#Growth #SaaS",a.createElement("span",{className:"text-gray-400"}," ","#TooGeneric")))))),a.createElement("div",{className:"mt-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"},a.createElement("div",{className:"grid grid-cols-1 items-center gap-8 lg:grid-cols-2"},a.createElement("div",{className:"relative h-32 rounded-xl border border-gray-200 bg-[#fafaff] px-6 pt-10"},a.createElement("div",{className:"absolute bottom-0 left-6 right-6 flex items-end justify-around gap-6"},a.createElement("div",{className:"flex flex-col items-center"},a.createElement("span",{className:"mb-2 text-[9px] text-gray-400"},"Tiktok"),a.createElement("div",{className:"h-10 w-16 rounded-t-lg bg-indigo-100"})),a.createElement("div",{className:"flex flex-col items-center"},a.createElement("span",{className:"mb-2 text-[9px] font-semibold text-indigo-600"},"Facebook"),a.createElement("div",{className:"h-20 w-16 rounded-t-lg bg-indigo-200"})),a.createElement("div",{className:"flex flex-col items-center"},a.createElement("span",{className:"mb-2 text-[9px] text-gray-400"},"Insta"),a.createElement("div",{className:"h-8 w-16 rounded-t-lg bg-indigo-100"})))),a.createElement("div",null,a.createElement("div",{className:"flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600"},"⇆"),a.createElement("h3",{className:"mt-4 text-sm font-semibold text-gray-900"},"Platform Comparison"),a.createElement("p",{className:"mt-2 text-xs leading-5 text-gray-600"},"Not all content works everywhere. Instantly see how a topic will perform across different networks and adapt your strategy to the platform with the highest ROI potential."),a.createElement("button",{className:"mt-4 text-xs font-medium text-indigo-600 hover:underline"},"See how it works →"))))))}function D1(){const e=ve();return a.createElement("section",{className:"bg-[#f8f7ff] px-5 py-20 sm:px-8 lg:py-28"},a.createElement("div",{className:"mx-auto max-w-3xl text-center"},a.createElement("span",{className:"inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#6d5ce7] shadow-sm"},a.createElement(_1,{size:13})," AI-Powered Content Engine"),a.createElement("h2",{className:"mt-5 text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-5xl"},"Intelligence that drives your content strategy."),a.createElement("p",{className:"mx-auto mt-4 max-w-xl text-base leading-7 text-slate-500"},"Move beyond guesswork. Meateka analyzes, predicts, and optimizes every piece of content before you hit publish."),a.createElement("button",{type:"button",onClick:()=>e("/dashboard"),className:"mt-7 inline-flex items-center gap-2 rounded-xl bg-[#6d5ce7] px-5 py-3.5 text-sm font-bold text-white shadow-[0_10px_22px_rgba(109,92,231,0.2)] transition hover:bg-[#5948d6]"},"Explore Dashboard ",a.createElement(nn,{size:16}))))}function L1(){return a.createElement("div",{className:"min-h-screen overflow-hidden bg-[#fbfaff] text-[#20233d]"},a.createElement("main",null,a.createElement(M1,null),a.createElement(vm,null),a.createElement(D1,null)))}function A1(){return a.createElement("div",{className:"min-h-screen bg-[#f8f8fc]"},a.createElement("section",{className:"px-6 pb-8 pt-24 text-center"},a.createElement("div",{className:"mx-auto max-w-3xl"},a.createElement("span",{className:"inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"},"Powerful Features"),a.createElement("h1",{className:"mt-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl"},"Everything you need to grow your content"),a.createElement("p",{className:"mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600"},"Make smarter content decisions with AI-powered insights, predictions, and analytics designed to improve your social media performance."))),a.createElement(vm,null),a.createElement("footer",{className:"border-t border-gray-200 bg-[#f8f8fc] px-6 py-5"},a.createElement("div",{className:"mx-auto flex max-w-6xl flex-col justify-between gap-3 text-xs text-gray-500 md:flex-row"},a.createElement("p",null,"© 2024 Meateka AI Analysis. All rights reserved."),a.createElement("div",{className:"flex gap-5 underline"},a.createElement("a",{href:"#"},"Terms of Service"),a.createElement("a",{href:"#"},"Privacy Policy"),a.createElement("a",{href:"#"},"Contact Support")))))}var xm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Lc=a.createContext&&a.createContext(xm),j1=["attr","size","title"];function R1(e,t){if(e==null)return{};var n,r,o=I1(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function I1(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function to(){return to=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},to.apply(null,arguments)}function Ac(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function no(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ac(Object(n),!0).forEach(function(r){F1(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ac(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function F1(e,t,n){return(t=$1(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $1(e){var t=U1(e,"string");return typeof t=="symbol"?t:t+""}function U1(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ym(e){return e&&e.map((t,n)=>a.createElement(t.tag,no({key:n},t.attr),ym(t.child)))}function ce(e){return t=>a.createElement(B1,to({attr:no({},e.attr)},t),ym(e.child))}function B1(e){var t=n=>{var r=e.attr,o=e.size,l=e.title,i=R1(e,j1),s=o||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),a.createElement("svg",to({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,i,{className:c,style:no(no({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&a.createElement("title",null,l),e.children)};return Lc!==void 0?a.createElement(Lc.Consumer,null,n=>t(n)):t(xm)}function bm(e){return ce({attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:`M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z`},child:[]},{tag:"path",attr:{fill:"#FF3D00",d:`M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z`},child:[]},{tag:"path",attr:{fill:"#4CAF50",d:`M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z`},child:[]},{tag:"path",attr:{fill:"#1976D2",d:`M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z`},child:[]}]})(e)}const W1="http://localhost:5000/api";async function jc(e,t={}){const n=localStorage.getItem("meateka_token"),r=await fetch(`${W1}${e}`,{headers:{"Content-Type":"application/json",...n?{Authorization:`Bearer ${n}`}:{}},...t});if(!r.ok)throw new Error(`API request failed: ${r.status}`);return r.json()}const Mr={get:e=>jc(e),post:(e,t,n={})=>jc(e,{...n,method:"POST",body:JSON.stringify(t)})},ol="sl_token",_a="sl_user",H1="sl_plan",Rc={name:"Demo User",email:"demo@meateka.com",role:"Creator",plan:"free",workspace:{name:"My Workspace",createdAt:""}},Em=k.createContext(null);function V1(){try{const e=localStorage.getItem(_a);return e?JSON.parse(e):null}catch{return null}}function Ic(){try{return localStorage.getItem(H1)==="premium"?"premium":"free"}catch{return"free"}}function Q1({children:e}){const[t,n]=k.useState(V1),[r,o]=k.useState(Ic);function l(b,f){localStorage.setItem(ol,b),localStorage.setItem(_a,JSON.stringify(f)),n(f)}async function i(b,f){var m,E;try{const{data:g}=await Mr.post("/auth/login",{email:b,password_hash:f});return l(g.token,g.user),{success:!0}}catch(g){return{success:!1,error:((E=(m=g.response)==null?void 0:m.data)==null?void 0:E.error)||"Invalid email or password."}}}async function s(b,f,m,E){var g,d;try{const{data:v}=await Mr.post("/auth/register",{email:b,password_hash:f,first_name:m,last_name:E});return l(v.token,v.user),{success:!0}}catch(v){return{success:!1,error:((d=(g=v.response)==null?void 0:g.data)==null?void 0:d.error)||"Failed to create account."}}}function c(){localStorage.removeItem(ol),localStorage.setItem(_a,JSON.stringify(Rc)),n(Rc)}function u(){localStorage.removeItem(ol),localStorage.removeItem(_a),n(null),o(Ic())}async function p(b){c()}function h(b){}function x(b){}return a.createElement(Em.Provider,{value:{user:t,isAuthenticated:!!t,signIn:i,signUp:s,signInDemo:c,signOut:u,signInWithGoogle:p,updateProfile:h,updateSecurity:x}},e)}function nt(){const e=k.useContext(Em);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e}function q1(){var d,v;const{isAuthenticated:e,signIn:t,signInDemo:n,signInWithGoogle:r}=nt(),o=ve(),l=Ce(),[i,s]=k.useState(""),[c,u]=k.useState(""),[p,h]=k.useState(""),[x,b]=k.useState(!1),f=((v=(d=l.state)==null?void 0:d.from)==null?void 0:v.pathname)||"/dashboard";if(k.useEffect(()=>{},[]),e)return a.createElement(ls,{to:"/dashboard",replace:!0});async function m(w){if(w.preventDefault(),h(""),!/^\S+@\S+\.\S+$/.test(i)){h("Enter a valid email address.");return}if(!c){h("Enter your password.");return}const S=await t(i,c);if(!S.success){h(S.error||"Invalid email or password. Check your details and try again.");return}o(f,{replace:!0})}function E(){n(),o("/dashboard",{replace:!0})}async function g(){h("");{h("Google sign in is not configured for this environment.");return}}return a.createElement("main",{className:"min-h-screen bg-white text-[#20213c]"},a.createElement("div",{className:"grid min-h-screen lg:grid-cols-[minmax(360px,0.9fr)_1.1fr]"},a.createElement("section",{className:"relative flex min-h-[360px] flex-col overflow-hidden bg-[#eeedff] px-7 py-8 sm:px-12 lg:min-h-screen lg:px-16 lg:py-12"},a.createElement("div",{className:"absolute -right-20 -top-20 h-64 w-64 rounded-full border-[34px] border-white/30"}),a.createElement("div",{className:"absolute bottom-20 -left-28 h-56 w-56 rounded-full border-[28px] border-[#d8d2fb]/70"}),a.createElement("div",{className:"relative z-10 flex items-center gap-2 text-2xl font-extrabold tracking-[-0.05em] text-[#6252db]"},"Meateka",a.createElement("span",{className:"mt-1 h-2 w-2 rounded-full bg-[#7d6ded]"})),a.createElement("div",{className:"relative z-10 flex flex-1 items-center py-12 lg:py-20"},a.createElement("div",{className:"max-w-md"},a.createElement("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-[#7164c9]"},"Content intelligence platform"),a.createElement("h1",{className:"mt-5 text-4xl font-extrabold leading-[1.08] tracking-[-0.055em] text-[#242344] sm:text-5xl lg:text-6xl"},"Intelligence meets productivity."),a.createElement("p",{className:"mt-6 max-w-sm text-sm leading-7 text-[#686887] sm:text-base"},"Make every creative decision with more clarity. Meateka brings your ideas, audience signals, and growth strategy into one focused workspace."),a.createElement("div",{className:"mt-8 flex items-center gap-3 text-xs font-semibold text-[#6252db]"},a.createElement("span",{className:"h-px w-8 bg-[#958be5]"}),"Create with confidence"))),a.createElement("p",{className:"relative z-10 text-xs text-[#8582a5]"},"© 2024 Meateka Content Intelligence. All rights reserved.")),a.createElement("section",{className:"flex min-h-[620px] items-center justify-center bg-white px-6 py-14 sm:px-12 lg:px-16 lg:py-20"},a.createElement("div",{className:"w-full max-w-[430px]"},a.createElement("div",{className:"mb-10"},a.createElement("p",{className:"text-xs font-bold uppercase tracking-[0.18em] text-[#7669d8]"},"Welcome back"),a.createElement("h2",{className:"mt-3 text-3xl font-extrabold tracking-[-0.04em] text-[#20213c] sm:text-4xl"},"Sign in to Meateka"),a.createElement("p",{className:"mt-3 text-sm leading-6 text-[#85869a]"},"Enter your details to continue to your content intelligence dashboard.")),a.createElement("form",{onSubmit:m,className:"space-y-5"},a.createElement("div",null,a.createElement("label",{htmlFor:"email",className:"text-xs font-bold text-[#3d3e58]"},"Email address"),a.createElement("div",{className:"relative mt-2"},a.createElement(ko,{size:17,strokeWidth:1.8,className:"pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#a2a3b7]"}),a.createElement("input",{id:"email",type:"email",autoComplete:"email",value:i,onChange:w=>s(w.target.value),placeholder:"you@example.com",className:"h-12 w-full rounded-xl border border-[#dfdfea] bg-[#fcfcfe] pl-11 pr-4 text-sm text-[#20213c] outline-none transition focus:border-[#7669d8] focus:bg-white focus:ring-4 focus:ring-[#7669d8]/10",required:!0}))),a.createElement("div",null,a.createElement("div",{className:"flex items-center justify-between"},a.createElement("label",{htmlFor:"password",className:"text-xs font-bold text-[#3d3e58]"},"Password"),a.createElement("button",{type:"button",onClick:()=>h("Password reset is not configured yet. Contact your administrator for help."),className:"text-xs font-semibold text-[#7669d8] transition hover:text-[#5748c9]"},"Forgot password?")),a.createElement("div",{className:"relative mt-2"},a.createElement(ss,{size:17,strokeWidth:1.8,className:"pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#a2a3b7]"}),a.createElement("input",{id:"password",type:"password",autoComplete:"current-password",value:c,onChange:w=>u(w.target.value),placeholder:"Enter your password",className:"h-12 w-full rounded-xl border border-[#dfdfea] bg-[#fcfcfe] pl-11 pr-4 text-sm text-[#20213c] outline-none transition focus:border-[#7669d8] focus:bg-white focus:ring-4 focus:ring-[#7669d8]/10",required:!0}))),p&&a.createElement("p",{role:"alert",className:"rounded-lg bg-[#fff0f1] px-3 py-2 text-sm font-medium text-[#c2415b]"},p),a.createElement("button",{type:"submit",className:"flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#6d5ce7] text-sm font-bold text-white shadow-[0_12px_24px_rgba(109,92,231,0.22)] transition hover:bg-[#5948d6] focus:outline-none focus:ring-4 focus:ring-[#7669d8]/20"},"Log in ",a.createElement(nn,{size:17}))),a.createElement("div",{className:"my-8 flex items-center gap-3 text-[11px] text-[#b1b1c0]"},a.createElement("span",{className:"h-px flex-1 bg-[#ecebf2]"}),"or",a.createElement("span",{className:"h-px flex-1 bg-[#ecebf2]"})),a.createElement("div",{className:"grid gap-3"},a.createElement("button",{type:"button",onClick:g,disabled:x,className:"flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#dfdfea] bg-white text-sm font-bold text-[#20213c] transition hover:-translate-y-0.5 hover:border-[#c9c3f3] hover:bg-[#faf9ff] disabled:cursor-wait disabled:opacity-70"},a.createElement(bm,{"aria-hidden":"true",size:19}),x?"Connecting to Google...":"Continue with Google"),a.createElement("button",{type:"button",onClick:E,className:"flex h-12 w-full items-center justify-center rounded-xl border border-[#e3e1ef] bg-white px-4 text-xs font-semibold text-[#66677c] transition hover:border-[#c9c3f3] hover:bg-[#faf9ff]"},"Continue with demo account")),a.createElement("p",{className:"mt-7 text-center text-sm text-[#85869a]"},"Don't have an account?"," ",a.createElement(U,{to:"/signup",className:"font-bold text-[#7669d8] hover:text-[#5748c9]"},"Sign Up"))))))}function Fc({id:e,label:t,placeholder:n,value:r,onChange:o,autoComplete:l}){return a.createElement("label",{htmlFor:e,className:"block text-xs font-bold text-[#3d3e58]"},t,a.createElement("div",{className:"relative mt-2"},a.createElement(ss,{size:17,strokeWidth:1.8,className:"pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#a2a3b7]"}),a.createElement("input",{id:e,type:"password",autoComplete:l,value:r,onChange:i=>o(i.target.value),placeholder:n,className:"h-12 w-full rounded-xl border border-[#dfdfea] bg-[#fcfcfe] pl-11 pr-4 text-sm font-normal text-[#20213c] outline-none transition focus:border-[#7669d8] focus:bg-white focus:ring-4 focus:ring-[#7669d8]/10"})))}function K1({onUnavailable:e}){return a.createElement("div",{className:"grid gap-3"},a.createElement("button",{type:"button",onClick:e,"aria-label":"Continue with Google",className:"flex h-11 items-center justify-center gap-2 rounded-xl border border-[#dfdfea] bg-white text-xs font-bold text-[#475569] transition hover:border-[#c9c3f3] hover:bg-[#faf9ff]"},a.createElement(bm,{"aria-hidden":"true",size:20}),"Continue with Google"))}const G1=[["length","Minimum 8 characters"],["uppercase","At least one uppercase letter"],["number","At least one number"],["special","At least one special character"]];function $c(){const{isAuthenticated:e,signUp:t}=nt(),n=ve(),[r,o]=k.useState({name:"",email:"",password:"",confirm:""}),[l,i]=k.useState(!1),[s,c]=k.useState(""),[u,p]=k.useState(!1),h=k.useMemo(()=>({length:r.password.length>=8,uppercase:/[A-Z]/.test(r.password),number:/\d/.test(r.password),special:/[^A-Za-z0-9]/.test(r.password)}),[r.password]);if(e)return a.createElement(ls,{to:"/dashboard",replace:!0});function x(f,m){o(E=>({...E,[f]:m})),c("")}async function b(f){if(f.preventDefault(),!r.name.trim())return c("Enter your full name.");if(!/^\S+@\S+\.\S+$/.test(r.email))return c("Enter a valid email address.");if(!Object.values(h).every(Boolean))return c("Choose a password that meets every requirement.");if(r.password!==r.confirm)return c("Passwords do not match.");if(!l)return c("Accept the Terms of Service and Privacy Policy to continue.");p(!0);const m=await t(r.email,r.password,r.name,"");if(!m.success){c(m.error||"We could not create your account."),p(!1);return}n("/dashboard",{replace:!0})}return a.createElement("main",{className:"min-h-screen bg-white text-[#20213c]"},a.createElement("div",{className:"grid min-h-screen lg:grid-cols-[1.1fr_minmax(440px,0.9fr)]"},a.createElement("section",{className:"relative order-2 flex min-h-[390px] flex-col overflow-hidden bg-[#eeedff] px-7 py-8 sm:px-12 lg:order-1 lg:min-h-screen lg:px-16 lg:py-12"},a.createElement("div",{className:"absolute -right-20 -top-20 h-64 w-64 rounded-full border-[34px] border-white/30"}),a.createElement("div",{className:"absolute bottom-20 -left-28 h-56 w-56 rounded-full border-[28px] border-[#d8d2fb]/70"}),a.createElement(U,{to:"/",className:"relative z-10 flex w-fit items-center gap-2 text-2xl font-extrabold tracking-[-0.05em] text-[#6252db]"},"Meateka",a.createElement("span",{className:"mt-1 h-2 w-2 rounded-full bg-[#7d6ded]"})),a.createElement("div",{className:"relative z-10 flex flex-1 items-center py-12 lg:py-20"},a.createElement("div",{className:"max-w-md"},a.createElement("p",{className:"text-xs font-bold uppercase tracking-[0.2em] text-[#7164c9]"},"Your creative workspace"),a.createElement("h1",{className:"mt-5 text-4xl font-extrabold leading-[1.08] tracking-[-0.055em] text-[#242344] sm:text-5xl lg:text-6xl"},"Welcome Back!"),a.createElement("p",{className:"mt-6 max-w-sm text-sm leading-7 text-[#686887] sm:text-base"},"Already part of the Meateka community? Log in to pick up where your content strategy left off."),a.createElement(U,{to:"/login",className:"mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#7669d8] px-6 text-sm font-bold text-[#6252db] transition hover:-translate-y-0.5 hover:bg-white/70 hover:shadow-[0_10px_24px_rgba(98,82,219,0.12)] focus:outline-none focus:ring-4 focus:ring-[#7669d8]/20"},"Log In ",a.createElement(nn,{size:17})))),a.createElement("p",{className:"relative z-10 text-xs text-[#8582a5]"},"© 2024 Meateka Content Intelligence. All rights reserved.")),a.createElement("section",{className:"order-1 flex min-h-screen items-center justify-center bg-white px-6 py-12 sm:px-12 lg:order-2 lg:px-16 lg:py-16"},a.createElement("div",{className:"w-full max-w-[470px] rounded-3xl border border-[#e5e3ef] bg-white p-6 shadow-[0_18px_50px_rgba(58,47,130,0.08)] transition-shadow duration-500 hover:shadow-[0_22px_60px_rgba(58,47,130,0.11)] sm:p-9"},a.createElement("div",{className:"mb-8"},a.createElement("p",{className:"text-xs font-bold uppercase tracking-[0.18em] text-[#7669d8]"},"Creator Suite"),a.createElement("h2",{className:"mt-3 text-3xl font-extrabold tracking-[-0.04em] text-[#20213c] sm:text-4xl"},"Create your account"),a.createElement("p",{className:"mt-3 text-sm leading-6 text-[#85869a]"},"Start creating and managing your content today.")),a.createElement("form",{onSubmit:b,className:"space-y-4"},a.createElement("label",{htmlFor:"signup-name",className:"block text-xs font-bold text-[#3d3e58]"},"Full Name",a.createElement("div",{className:"relative mt-2"},a.createElement(ds,{size:17,strokeWidth:1.8,className:"pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#a2a3b7]"}),a.createElement("input",{id:"signup-name",value:r.name,onChange:f=>x("name",f.target.value),placeholder:"Enter your full name",autoComplete:"name",className:"h-12 w-full rounded-xl border border-[#dfdfea] bg-[#fcfcfe] pl-11 pr-4 text-sm font-normal outline-none transition focus:border-[#7669d8] focus:bg-white focus:ring-4 focus:ring-[#7669d8]/10"}))),a.createElement("label",{htmlFor:"signup-email",className:"block text-xs font-bold text-[#3d3e58]"},"Email Address",a.createElement("div",{className:"relative mt-2"},a.createElement(ko,{size:17,strokeWidth:1.8,className:"pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#a2a3b7]"}),a.createElement("input",{id:"signup-email",type:"email",value:r.email,onChange:f=>x("email",f.target.value),placeholder:"Enter your email",autoComplete:"email",className:"h-12 w-full rounded-xl border border-[#dfdfea] bg-[#fcfcfe] pl-11 pr-4 text-sm font-normal outline-none transition focus:border-[#7669d8] focus:bg-white focus:ring-4 focus:ring-[#7669d8]/10"}))),a.createElement(Fc,{id:"signup-password",label:"Password",placeholder:"Create a password",value:r.password,onChange:f=>x("password",f),autoComplete:"new-password"}),a.createElement("div",{className:"grid gap-1 rounded-xl bg-[#faf9ff] p-3"},G1.map(([f,m])=>a.createElement("p",{key:f,className:`flex items-center gap-2 text-[11px] ${h[f]?"text-[#138a6a]":"text-[#94a0b8]"}`},a.createElement("span",{className:`flex h-4 w-4 items-center justify-center rounded-full ${h[f]?"bg-[#e5f8f1]":"bg-[#edf0f6]"}`},h[f]&&a.createElement($n,{size:10})),m))),a.createElement(Fc,{id:"signup-confirm",label:"Confirm Password",placeholder:"Confirm your password",value:r.confirm,onChange:f=>x("confirm",f),autoComplete:"new-password"}),s&&a.createElement("p",{role:"alert",className:"rounded-lg bg-[#fff0f1] px-3 py-2 text-sm font-medium text-[#c2415b]"},s),a.createElement("label",{className:"flex items-start gap-3 py-1 text-xs leading-5 text-[#71809c]"},a.createElement("input",{type:"checkbox",checked:l,onChange:f=>i(f.target.checked),className:"mt-1 h-4 w-4 rounded border-[#cfd2e3] text-[#5146e5] focus:ring-[#eeecff]"})," ",a.createElement("span",null,"I agree to the"," ",a.createElement("button",{type:"button",className:"font-bold text-[#7669d8]"},"Terms of Service")," ","and"," ",a.createElement("button",{type:"button",className:"font-bold text-[#7669d8]"},"Privacy Policy"))),a.createElement("button",{type:"submit",disabled:u,className:"flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#6d5ce7] text-sm font-bold text-white shadow-[0_12px_24px_rgba(109,92,231,0.22)] transition hover:-translate-y-0.5 hover:bg-[#5948d6] disabled:cursor-wait disabled:opacity-70"},u?"Creating account...":a.createElement(a.Fragment,null,"Create Account ",a.createElement(nn,{size:17})))),a.createElement("div",{className:"my-7 flex items-center gap-3 text-[11px] text-[#b1b1c0]"},a.createElement("span",{className:"h-px flex-1 bg-[#ecebf2]"}),"or",a.createElement("span",{className:"h-px flex-1 bg-[#ecebf2]"})),a.createElement(K1,{onUnavailable:()=>c("Social sign up is not connected yet. Use the email form to create your account.")}),a.createElement("p",{className:"mt-7 text-center text-sm text-[#85869a]"},"Already have an account?"," ",a.createElement(U,{to:"/login",className:"font-bold text-[#7669d8] hover:text-[#5748c9]"},"Log In"))))))}function ll({title:e,description:t}){return a.createElement("main",{className:"min-h-screen bg-[#faf9ff] px-5 py-16 text-[#172033] sm:px-8"},a.createElement("div",{className:"mx-auto max-w-xl text-center"},a.createElement(U,{to:"/",className:"text-3xl font-extrabold tracking-tight text-[#3930d8]"},"Meateka"),a.createElement("section",{className:"mt-10 rounded-2xl border border-[#d9dbea] bg-white p-8 shadow-sm"},a.createElement("h1",{className:"text-2xl font-bold"},e),a.createElement("p",{className:"mt-3 text-sm leading-6 text-[#667085]"},t),a.createElement(U,{to:"/",className:"mt-6 inline-flex rounded-lg bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4338ca]"},"Back to Home"))))}const Y1=[["Dashboard",y1,"/dashboard"],["Create Plan",f1,"/create-content"],["History",S1,"/my-plans"],["Saved Ideas",c1,"/saved-ideas"],["Pricing",Un,"/pricing"],["Profile",m1,"/profile"]],X1=[["Help Center",is,"/resources"],["Settings",cs,"/settings"]];function So({isOpen:e=!1,onClose:t}){const n=ve(),{signOut:r}=nt();function o(){r(),t==null||t(),n("/",{replace:!0})}return a.createElement("aside",{className:["fixed left-0 top-0 z-50 flex h-screen w-[180px] shrink-0 flex-col bg-[#f5f6ff] shadow-[18px_0_40px_rgba(15,23,42,0.08)] transition-transform duration-300 ease-in-out","border-r border-[#ebedf7]",e?"translate-x-0":"-translate-x-full","lg:top-[72px] lg:h-[calc(100vh-72px)] lg:translate-x-0 lg:shadow-none"].join(" ")},a.createElement("div",{className:"flex justify-end px-3 pb-1 pt-5 lg:hidden"},a.createElement("button",{type:"button","aria-label":"Close sidebar",onClick:t,className:"inline-flex h-7 w-7 items-center justify-center rounded-md border border-[#dfe2f1] bg-white text-lg font-semibold text-[#4f46e5] transition hover:bg-[#eef0ff] lg:hidden"},"×")),a.createElement("nav",{className:"mt-2 flex-1 px-2.5 lg:mt-5","aria-label":"Dashboard navigation"},a.createElement("ul",{className:"space-y-1.5"},Y1.map(([l,i,s])=>a.createElement("li",{key:l},a.createElement(Tc,{to:s,onClick:t,className:({isActive:c})=>["flex items-center gap-2 rounded-md px-2.5 py-2 text-[11px] font-medium transition-colors duration-150",c?"bg-white text-[#3d42d9] shadow-[0_1px_0_rgba(15,23,42,0.02)]":"text-[#4b5565] hover:bg-white/70 hover:text-[#1f2a44]"].join(" ")},({isActive:c})=>a.createElement(a.Fragment,null,a.createElement(i,{size:15,strokeWidth:1.5,className:c?"shrink-0 text-[#3d42d9]":"shrink-0 text-[#4b5565]"}),a.createElement("span",{className:"truncate"},l))))))),a.createElement("div",{className:"px-2.5 pb-4"},a.createElement("div",{className:"border-t border-[#e5e7f3] pt-3"},a.createElement("div",{className:"space-y-1.5"},X1.map(([l,i,s])=>a.createElement(Tc,{key:l,to:s,onClick:t,className:({isActive:c})=>["flex items-center gap-2 rounded-md px-2.5 py-2 text-[11px] font-medium transition-colors duration-150",c?"bg-white text-[#1f2a44]":"text-[#4b5565] hover:bg-white/70 hover:text-[#1f2a44]"].join(" ")},a.createElement(i,{size:15,strokeWidth:1.5,className:"shrink-0"}),a.createElement("span",{className:"truncate"},l)))),a.createElement("button",{type:"button",onClick:o,className:"mt-1.5 flex w-full items-center gap-2 rounded-md px-2.5 py-2 text-left text-[11px] font-medium text-[#4b5565] transition-colors duration-150 hover:bg-white/70 hover:text-[#1f2a44]"},a.createElement(Yf,{size:15,strokeWidth:1.5,className:"shrink-0"}),a.createElement("span",{className:"truncate"},"Log out")))))}function il({icon:e,iconClass:t,label:n,value:r}){return a.createElement("article",{className:"rounded-xl border border-[#d9dbea] bg-white p-5 shadow-sm"},a.createElement("div",{className:"flex items-center gap-4"},a.createElement("div",{className:`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${t}`},a.createElement("span",{className:"text-xl","aria-hidden":"true"},e)),a.createElement("div",null,a.createElement("p",{className:"text-sm text-[#667085]"},n),a.createElement("p",{className:"mt-1 text-3xl font-bold tracking-tight text-[#172033]"},r))))}const Z1=[{title:["Q3","Product","Launch","Series"],platforms:["LinkedIn","Twitter","☆ LinkedIn"],engagement:"High",date:"Oct 12",progress:"w-[88%]",color:"bg-[#4f46e5]"},{title:["Weekly","Tech Tips"],platforms:["Instagram","TikTok","☆ Instagram"],engagement:"Medium",date:"Oct 05",progress:"w-[57%]",color:"bg-[#8b87ed]"}];function J1(){return a.createElement("section",{id:"dashboard",className:"min-w-0 rounded-xl border border-[#d9dbea] bg-white shadow-sm"},a.createElement("div",{className:"flex items-center justify-between bg-[#f8f8ff] px-5 py-4"},a.createElement("h2",{className:"text-base font-bold text-[#172033]"},"Recent Content Plans"),a.createElement(U,{to:"/my-plans",className:"text-xs font-semibold text-[#4f46e5] hover:underline"},"View All")),a.createElement("div",null,Z1.map(e=>a.createElement("article",{key:e.date,className:"grid min-w-0 gap-4 border-t border-[#eaebf2] px-5 py-5 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1.5fr)] md:items-center xl:grid-cols-[minmax(120px,1.25fr)_minmax(150px,1.5fr)_minmax(110px,0.8fr)_auto]"},a.createElement("h3",{className:"flex min-w-0 flex-col text-sm font-bold leading-5 text-[#172033]"},e.title.map(t=>a.createElement("span",{key:t},t))),a.createElement("div",{className:"flex min-w-0 flex-wrap gap-1.5"},e.platforms.map(t=>a.createElement("span",{key:t,className:"rounded-full bg-[#f1f2f8] px-2.5 py-1 text-[10px] font-medium text-[#667085]"},t))),a.createElement("div",{className:"min-w-0"},a.createElement("div",{className:"flex justify-between text-[10px] text-[#667085]"},a.createElement("span",null,"Eng. Predict"),a.createElement("strong",{className:e.engagement==="High"?"text-[#12a77d]":"text-[#d08a1e]"},e.engagement)),a.createElement("div",{className:"mt-2 h-1.5 w-full rounded-full bg-[#ececf5]"},a.createElement("div",{className:`h-1.5 rounded-full ${e.color} ${e.progress}`}))),a.createElement("time",{className:"text-xs font-medium text-[#667085]"},e.date)))))}function eg(){return a.createElement("aside",{className:"flex flex-col items-center rounded-xl border border-[#d9dbea] bg-[#eeefff] p-6 text-center shadow-sm xl:min-h-[260px]"},a.createElement("div",{className:"flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-[#4f46e5] shadow-sm","aria-hidden":"true"},"✦"),a.createElement("h2",{className:"mt-5 text-xl font-bold leading-6 text-[#172033]"},"Don't know what to",a.createElement("br",null),"post?"),a.createElement("p",{className:"mt-3 text-xs leading-5 text-[#667085]"},"Let our AI analyze your niche and",a.createElement("br",null),"suggest high-performing content",a.createElement("br",null),"ideas instantly."),a.createElement(U,{to:"/content-ideas",className:"mt-auto inline-flex items-center gap-2 rounded-lg border border-[#d9dbea] bg-white px-4 py-2.5 text-xs font-semibold text-[#4f46e5] shadow-sm transition hover:bg-[#f8f8ff]"},a.createElement("span",{className:"text-base","aria-hidden":"true"},"✦"),"Get a Content Idea"))}function Uc(){const e=ve(),{plan:t}=nt(),[n,r]=k.useState(!1);return k.useEffect(()=>{function o(l){l.key==="Escape"&&r(!1)}return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[]),a.createElement("div",{className:"h-screen bg-[#f4f6fb] pt-[72px] text-[#172033]"},a.createElement("div",{className:"flex h-full min-h-0 overflow-hidden"},a.createElement(So,{isOpen:n,onClose:()=>r(!1)}),a.createElement("main",{className:"relative min-w-0 flex-1 overflow-y-auto bg-[#f7f9fd] lg:ml-[180px]"},n&&a.createElement("button",{type:"button","aria-label":"Close sidebar overlay",onClick:()=>r(!1),className:"fixed inset-0 z-40 bg-slate-900/45 backdrop-blur-[1px] lg:hidden"}),a.createElement("div",{className:"mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10"},a.createElement("header",{className:"flex flex-col gap-4 md:flex-row md:items-end md:justify-between"},a.createElement("div",null,a.createElement("p",{className:"text-sm font-medium text-[#667085]"},"Welcome back"),a.createElement("h1",{className:"mt-1 text-3xl font-bold tracking-[-0.04em] text-[#172033] sm:text-4xl"},"Ready to create your next content?"),a.createElement("span",{className:"mt-3 inline-flex rounded-full bg-[#eeecff] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#5146e5]"},t==="premium"?"Pro plan active":"Free plan")),a.createElement("button",{type:"button",onClick:()=>e("/create-content"),className:"inline-flex w-fit items-center gap-2 rounded-xl bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(79,70,229,0.22)] transition hover:bg-[#4338ca]"},a.createElement("span",{className:"text-lg leading-none","aria-hidden":"true"},"+"),"Create Content Plan")),a.createElement("section",{className:"mt-8 grid min-w-0 grid-cols-1 gap-4 md:grid-cols-3","aria-label":"Dashboard statistics"},a.createElement(il,{icon:a.createElement(Mf,{size:16,strokeWidth:2}),iconClass:"bg-[#eeedff] text-[#4f46e5]",label:"Content Plans",value:"12"}),a.createElement(il,{icon:a.createElement(b1,{size:16,strokeWidth:2}),iconClass:"bg-[#e7faf4] text-[#12a77d]",label:"Saved Ideas",value:"8"}),a.createElement(il,{icon:a.createElement(um,{size:16,strokeWidth:2}),iconClass:"bg-[#eeedff] text-[#4f46e5]",label:"Predictions Used",value:"45"})),a.createElement("section",{className:"mt-8 grid min-w-0 grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_320px]"},a.createElement(J1,null),a.createElement(eg,null))))))}function tg(e){return ce({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"},child:[]}]})(e)}function ms(e){return ce({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"},child:[]}]})(e)}function ng(e){return ce({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function rg(e){return ce({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"},child:[]}]})(e)}function Bc(e){return ce({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"},child:[]}]})(e)}function ag(e){return ce({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4.5 12a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5zm3 0a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm3 0a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5z"},child:[]},{tag:"path",attr:{d:"M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"},child:[]}]})(e)}function og(e){return ce({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M15 17h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4zm-6 1H4v-4h5zM2 4h15v2H2z"},child:[]},{tag:"path",attr:{d:"M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"},child:[]}]})(e)}function lg(e){return ce({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4m-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2M1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4m2 0c.2-.71 3.3-2 6-2 2.69 0 5.78 1.28 6 2zm17-3v-3h3v-2h-3V7h-2v3h-3v2h3v3z"},child:[]}]})(e)}function ig(e){return ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M8 2v4"},child:[]},{tag:"path",attr:{d:"M12 2v4"},child:[]},{tag:"path",attr:{d:"M16 2v4"},child:[]},{tag:"rect",attr:{width:"16",height:"18",x:"4",y:"4",rx:"2"},child:[]},{tag:"path",attr:{d:"M8 10h6"},child:[]},{tag:"path",attr:{d:"M8 14h8"},child:[]},{tag:"path",attr:{d:"M8 18h5"},child:[]}]})(e)}function sg(e){return ce({attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M71.49,60.55a12,12,0,0,0-23,0l-36,120A12,12,0,0,0,24,196H96a12,12,0,0,0,11.49-15.45ZM40.13,172,60,105.76,79.87,172ZM212,74a54,54,0,1,0-54,54A54.06,54.06,0,0,0,212,74Zm-84,0a30,30,0,1,1,30,30A30,30,0,0,1,128,74Zm96,70H136a12,12,0,0,0-12,12v52a12,12,0,0,0,12,12h88a12,12,0,0,0,12-12V156A12,12,0,0,0,224,144Zm-12,52H148V168h64Z"},child:[]}]})(e)}function cg(e){return ce({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M6,16 L16,16 L6,16 L6,16 Z M6,12 L18,12 L6,12 L6,12 Z M6,8 L11,8 L6,8 L6,8 Z M14,1 L14,8 L21,8 M3,23 L3,1 L15,1 L21,7 L21,23 L3,23 Z"},child:[]}]})(e)}function ug(e){return ce({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M904 747H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM165.7 621.8l39.7 39.5c3.1 3.1 8.2 3.1 11.3 0l234.7-233.9 97.6 97.3a32.11 32.11 0 0 0 45.2 0l264.2-263.2c3.1-3.1 3.1-8.2 0-11.3l-39.7-39.6a8.03 8.03 0 0 0-11.3 0l-235.7 235-97.7-97.3a32.11 32.11 0 0 0-45.2 0L165.7 610.5a7.94 7.94 0 0 0 0 11.3z"},child:[]}]})(e)}function dg(e){return ce({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(e)}function fg(e){return ce({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M382.1 143.4l-23.1 23c14.7 14.7 23.9 35.2 23.9 57.6s-9.2 42.9-23.9 57.6l23.1 23.1c20.6-20.6 33.4-49.2 33.4-80.6s-12.8-60.1-33.4-80.7z"},child:[]},{tag:"path",attr:{d:"M428.2 99l-22.7 22.7c26.1 26.1 42.3 62.4 42.3 102.3 0 39.8-16.1 76.1-42.3 102.3l22.7 22.7c31.9-32.1 51.8-76.3 51.8-125s-19.8-92.9-51.8-125zM320 184.1V80h-32l-96 80H64l-32 16v112l32 16 80 128h48l-30-128h30l96 64h32V263.9c18.4-1.7 32-18.9 32-39.9s-13.6-38.2-32-39.9z"},child:[]}]})(e)}function mg(e){return ce({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function pg(e){return ce({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"},child:[]}]})(e)}function hg(e){return ce({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32C0 14.3 14.3 0 32 0L64 0 320 0l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 11c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1l0 11c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L64 512l-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-11c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75l0-11C14.3 64 0 49.7 0 32zM96 64l0 11c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9l0-11L96 64zm0 384l192 0 0-11c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9l0 11z"},child:[]}]})(e)}function oe(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}oe(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var j=function(){return j=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},j.apply(this,arguments)};function ro(e){return ro=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ro(e)}var gg=/^\s+/,vg=/\s+$/;function M(e,t){if(t=t||{},(e=e||"")instanceof M)return e;if(!(this instanceof M))return new M(e,t);var n=function(r){var o={r:0,g:0,b:0},l=1,i=null,s=null,c=null,u=!1,p=!1;typeof r=="string"&&(r=function(f){f=f.replace(gg,"").replace(vg,"").toLowerCase();var m,E=!1;if(ci[f])f=ci[f],E=!0;else if(f=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(m=Be.rgb.exec(f))?{r:m[1],g:m[2],b:m[3]}:(m=Be.rgba.exec(f))?{r:m[1],g:m[2],b:m[3],a:m[4]}:(m=Be.hsl.exec(f))?{h:m[1],s:m[2],l:m[3]}:(m=Be.hsla.exec(f))?{h:m[1],s:m[2],l:m[3],a:m[4]}:(m=Be.hsv.exec(f))?{h:m[1],s:m[2],v:m[3]}:(m=Be.hsva.exec(f))?{h:m[1],s:m[2],v:m[3],a:m[4]}:(m=Be.hex8.exec(f))?{r:_e(m[1]),g:_e(m[2]),b:_e(m[3]),a:Kc(m[4]),format:E?"name":"hex8"}:(m=Be.hex6.exec(f))?{r:_e(m[1]),g:_e(m[2]),b:_e(m[3]),format:E?"name":"hex"}:(m=Be.hex4.exec(f))?{r:_e(m[1]+""+m[1]),g:_e(m[2]+""+m[2]),b:_e(m[3]+""+m[3]),a:Kc(m[4]+""+m[4]),format:E?"name":"hex8"}:(m=Be.hex3.exec(f))?{r:_e(m[1]+""+m[1]),g:_e(m[2]+""+m[2]),b:_e(m[3]+""+m[3]),format:E?"name":"hex"}:!1}(r)),ro(r)=="object"&&(rt(r.r)&&rt(r.g)&&rt(r.b)?(h=r.r,x=r.g,b=r.b,o={r:255*V(h,255),g:255*V(x,255),b:255*V(b,255)},u=!0,p=String(r.r).substr(-1)==="%"?"prgb":"rgb"):rt(r.h)&&rt(r.s)&&rt(r.v)?(i=nr(r.s),s=nr(r.v),o=function(f,m,E){f=6*V(f,360),m=V(m,100),E=V(E,100);var g=Math.floor(f),d=f-g,v=E*(1-m),w=E*(1-d*m),S=E*(1-(1-d)*m),C=g%6,y=[E,w,v,v,S,E][C],N=[S,E,E,w,v,v][C],z=[v,v,S,E,E,w][C];return{r:255*y,g:255*N,b:255*z}}(r.h,i,s),u=!0,p="hsv"):rt(r.h)&&rt(r.s)&&rt(r.l)&&(i=nr(r.s),c=nr(r.l),o=function(f,m,E){var g,d,v;function w(y,N,z){return z<0&&(z+=1),z>1&&(z-=1),z<1/6?y+6*(N-y)*z:z<.5?N:z<2/3?y+(N-y)*(2/3-z)*6:y}if(f=V(f,360),m=V(m,100),E=V(E,100),m===0)g=d=v=E;else{var S=E<.5?E*(1+m):E+m-E*m,C=2*E-S;g=w(C,S,f+1/3),d=w(C,S,f),v=w(C,S,f-1/3)}return{r:255*g,g:255*d,b:255*v}}(r.h,i,c),u=!0,p="hsl"),r.hasOwnProperty("a")&&(l=r.a));var h,x,b;return l=wm(l),{ok:u,format:r.format||p,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:l}}(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}function Wc(e,t,n){e=V(e,255),t=V(t,255),n=V(n,255);var r,o,l=Math.max(e,t,n),i=Math.min(e,t,n),s=(l+i)/2;if(l==i)r=o=0;else{var c=l-i;switch(o=s>.5?c/(2-l-i):c/(l+i),l){case e:r=(t-n)/c+(t<n?6:0);break;case t:r=(n-e)/c+2;break;case n:r=(e-t)/c+4}r/=6}return{h:r,s:o,l:s}}function Hc(e,t,n){e=V(e,255),t=V(t,255),n=V(n,255);var r,o,l=Math.max(e,t,n),i=Math.min(e,t,n),s=l,c=l-i;if(o=l===0?0:c/l,l==i)r=0;else{switch(l){case e:r=(t-n)/c+(t<n?6:0);break;case t:r=(n-e)/c+2;break;case n:r=(e-t)/c+4}r/=6}return{h:r,s:o,v:s}}function Vc(e,t,n,r){var o=[Qe(Math.round(e).toString(16)),Qe(Math.round(t).toString(16)),Qe(Math.round(n).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Qc(e,t,n,r){return[Qe(km(r)),Qe(Math.round(e).toString(16)),Qe(Math.round(t).toString(16)),Qe(Math.round(n).toString(16))].join("")}function xg(e,t){t=t===0?0:t||10;var n=M(e).toHsl();return n.s-=t/100,n.s=Po(n.s),M(n)}function yg(e,t){t=t===0?0:t||10;var n=M(e).toHsl();return n.s+=t/100,n.s=Po(n.s),M(n)}function bg(e){return M(e).desaturate(100)}function Eg(e,t){t=t===0?0:t||10;var n=M(e).toHsl();return n.l+=t/100,n.l=Po(n.l),M(n)}function wg(e,t){t=t===0?0:t||10;var n=M(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-t/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-t/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-t/100*255))),M(n)}function kg(e,t){t=t===0?0:t||10;var n=M(e).toHsl();return n.l-=t/100,n.l=Po(n.l),M(n)}function Ng(e,t){var n=M(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,M(n)}function Sg(e){var t=M(e).toHsl();return t.h=(t.h+180)%360,M(t)}function qc(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var n=M(e).toHsl(),r=[M(e)],o=360/t,l=1;l<t;l++)r.push(M({h:(n.h+l*o)%360,s:n.s,l:n.l}));return r}function Pg(e){var t=M(e).toHsl(),n=t.h;return[M(e),M({h:(n+72)%360,s:t.s,l:t.l}),M({h:(n+216)%360,s:t.s,l:t.l})]}function Cg(e,t,n){t=t||6,n=n||30;var r=M(e).toHsl(),o=360/n,l=[M(e)];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,l.push(M(r));return l}function _g(e,t){t=t||6;for(var n=M(e).toHsv(),r=n.h,o=n.s,l=n.v,i=[],s=1/t;t--;)i.push(M({h:r,s:o,v:l})),l=(l+s)%1;return i}M.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r=this.toRgb();return e=r.r/255,t=r.g/255,n=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(e){return this._a=wm(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Hc(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Hc(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=Wc(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Wc(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return Vc(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(t,n,r,o,l){var i=[Qe(Math.round(t).toString(16)),Qe(Math.round(n).toString(16)),Qe(Math.round(r).toString(16)),Qe(km(o))];return l&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*V(this._r,255))+"%",g:Math.round(100*V(this._g,255))+"%",b:Math.round(100*V(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*V(this._r,255))+"%, "+Math.round(100*V(this._g,255))+"%, "+Math.round(100*V(this._b,255))+"%)":"rgba("+Math.round(100*V(this._r,255))+"%, "+Math.round(100*V(this._g,255))+"%, "+Math.round(100*V(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Og[Vc(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+Qc(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=M(e);n="#"+Qc(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return M(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(Eg,arguments)},brighten:function(){return this._applyModification(wg,arguments)},darken:function(){return this._applyModification(kg,arguments)},desaturate:function(){return this._applyModification(xg,arguments)},saturate:function(){return this._applyModification(yg,arguments)},greyscale:function(){return this._applyModification(bg,arguments)},spin:function(){return this._applyModification(Ng,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(Cg,arguments)},complement:function(){return this._applyCombination(Sg,arguments)},monochromatic:function(){return this._applyCombination(_g,arguments)},splitcomplement:function(){return this._applyCombination(Pg,arguments)},triad:function(){return this._applyCombination(qc,[3])},tetrad:function(){return this._applyCombination(qc,[4])}},M.fromRatio=function(e,t){if(ro(e)=="object"){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=r==="a"?e[r]:nr(e[r]));e=n}return M(e,t)},M.equals=function(e,t){return!(!e||!t)&&M(e).toRgbString()==M(t).toRgbString()},M.random=function(){return M.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},M.mix=function(e,t,n){n=n===0?0:n||50;var r=M(e).toRgb(),o=M(t).toRgb(),l=n/100;return M({r:(o.r-r.r)*l+r.r,g:(o.g-r.g)*l+r.g,b:(o.b-r.b)*l+r.b,a:(o.a-r.a)*l+r.a})},M.readability=function(e,t){var n=M(e),r=M(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},M.isReadable=function(e,t,n){var r,o,l=M.readability(e,t);switch(o=!1,(r=function(i){var s,c;return s=((i=i||{level:"AA",size:"small"}).level||"AA").toUpperCase(),c=(i.size||"small").toLowerCase(),s!=="AA"&&s!=="AAA"&&(s="AA"),c!=="small"&&c!=="large"&&(c="small"),{level:s,size:c}}(n)).level+r.size){case"AAsmall":case"AAAlarge":o=l>=4.5;break;case"AAlarge":o=l>=3;break;case"AAAsmall":o=l>=7}return o},M.mostReadable=function(e,t,n){var r,o,l,i,s=null,c=0;o=(n=n||{}).includeFallbackColors,l=n.level,i=n.size;for(var u=0;u<t.length;u++)(r=M.readability(e,t[u]))>c&&(c=r,s=M(t[u]));return M.isReadable(e,s,{level:l,size:i})||!o?s:(n.includeFallbackColors=!1,M.mostReadable(e,["#fff","#000"],n))};var ci=M.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Og=M.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(ci);function wm(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function V(e,t){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var n=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function Po(e){return Math.min(1,Math.max(0,e))}function _e(e){return parseInt(e,16)}function Qe(e){return e.length==1?"0"+e:""+e}function nr(e){return e<=1&&(e=100*e+"%"),e}function km(e){return Math.round(255*parseFloat(e)).toString(16)}function Kc(e){return _e(e)/255}var vt,la,ia,Be=(la="[\\s|\\(]+("+(vt="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+vt+")[,|\\s]+("+vt+")\\s*\\)?",ia="[\\s|\\(]+("+vt+")[,|\\s]+("+vt+")[,|\\s]+("+vt+")[,|\\s]+("+vt+")\\s*\\)?",{CSS_UNIT:new RegExp(vt),rgb:new RegExp("rgb"+la),rgba:new RegExp("rgba"+ia),hsl:new RegExp("hsl"+la),hsla:new RegExp("hsla"+ia),hsv:new RegExp("hsv"+la),hsva:new RegExp("hsva"+ia),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function rt(e){return!!Be.CSS_UNIT.exec(e)}var Rr=function(e,t){var n=(typeof e=="string"?parseInt(e):e)||0;if(n>=-5&&n<=5){var r=n,o=parseFloat(t),l=o+r*(o/5)*-1;return(l==0||l<=Number.EPSILON)&&(l=.1),{animationPeriod:l+"s"}}return{animationPeriod:t}},Ir=function(e,t){var n=e||{},r="";switch(t){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var o={};if(n.fontSize){var l=n.fontSize;o=function(i,s){var c={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&s.indexOf(u)<0&&(c[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function"){var p=0;for(u=Object.getOwnPropertySymbols(i);p<u.length;p++)s.indexOf(u[p])<0&&Object.prototype.propertyIsEnumerable.call(i,u[p])&&(c[u[p]]=i[u[p]])}return c}(n,["fontSize"]),r=l}return{fontSize:r,styles:o}},zg={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Fr=function(e){var t=e.className,n=e.text,r=e.textColor,o=e.staticText,l=e.style;return n?a.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(t||"").trim(),style:j(j(j({},o&&zg),r&&{color:r,mixBlendMode:"unset"}),l&&l)},typeof n=="string"&&n.length?n:"loading"):null},st="rgb(50, 205, 50)";function $r(e,t){if(t===void 0&&(t=0),e.length===0)throw new Error("Input array cannot be empty!");var n=[];return function r(o,l){return l===void 0&&(l=0),n.push.apply(n,o),n.length<l&&r(n,l),n.slice(0,l)}(e,t)}oe(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);M(st).toRgb();Array.from({length:4},function(e,t){return"--atom-phase".concat(t+1,"-rgb")});oe(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--commet-phase".concat(t+1,"-color")});oe(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var sa=Array.from({length:4},function(e,t){return"--OP-annulus-phase".concat(t+1,"-color")}),Mg=function(e){var t,n=Ir(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,l=e==null?void 0:e.easing,i=Rr(e==null?void 0:e.speedPlus,"1.5s").animationPeriod,s=function(u){var p={},h=sa.length;if(u instanceof Array){for(var x=$r(u,h),b=0;b<x.length&&!(b>=4);b++)p[sa[b]]=x[b];return p}try{if(typeof u!="string")throw new Error("Color String expected");for(var f=0;f<h;f++)p[sa[f]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),f=0;f<h;f++)p[sa[f]]=st}return p}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),c=e!=null&&e.dense?4.3:2.9;return a.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:j(j(j(j(j({},o&&{fontSize:o}),i&&{"--rli-animation-duration":i}),l&&{"--rli-animation-function":l}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},a.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},a.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},a.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:c,strokeMiterlimit:"10"})),a.createElement(Fr,{className:"OP-annulus-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};function sl(e){return e&&e.Math===Math&&e}oe(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var sn=sl(typeof window=="object"&&window)||sl(typeof self=="object"&&self)||sl(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function Nm(){var e,t;return!((e=sn==null?void 0:sn.crypto)===null||e===void 0)&&e.randomUUID?sn.crypto.randomUUID():!((t=sn==null?void 0:sn.btoa)===null||t===void 0)&&t.name?sn.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var ca=Array.from({length:4},function(e,t){return"--OP-dotted-phase".concat(t+1,"-color")}),Tg=function(e){var t,n=Ir(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,l=e==null?void 0:e.easing,i=Rr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,s=function(u){var p={},h=ca.length;if(u instanceof Array){for(var x=$r(u,h),b=0;b<x.length&&!(b>=4);b++)p[ca[b]]=x[b];return p}try{if(typeof u!="string")throw new Error("Color String expected");for(var f=0;f<h;f++)p[ca[f]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),f=0;f<h;f++)p[ca[f]]=st}return p}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),c=e!=null&&e.dense?16:12;return a.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:j(j(j(j(j({},o&&{fontSize:o}),i&&{"--rli-animation-duration":i}),l&&{"--rli-animation-function":l}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},a.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:c}).map(function(u,p){var h=function(f,m,E){if(m===16){var g=360*f/m,d=m-f,v=Number.parseFloat(E)/m*d*-1;return{transform:"rotate(".concat(g,"deg)"),animationDelay:"".concat(v,"s")}}return{transform:"",animationDelay:""}}(p,c,i),x=h.animationDelay,b=h.transform;return a.createElement("span",{key:Nm(),className:"rli-d-i-b dot-shape-holder",style:b?{transform:b}:void 0},a.createElement("span",{className:"dot",style:x?{animationDelay:x}:void 0}))}),a.createElement(Fr,{className:"OP-dotted-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};oe(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var ua=Array.from({length:4},function(e,t){return"--OP-spokes-phase".concat(t+1,"-color")}),Dg=function(e){var t,n=Ir(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,l=e==null?void 0:e.easing,i=Rr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,s=function(u){var p={},h=ua.length;if(u instanceof Array){for(var x=$r(u,h),b=0;b<x.length&&!(b>=4);b++)p[ua[b]]=x[b];return p}try{if(typeof u!="string")throw new Error("Color String expected");for(var f=0;f<h;f++)p[ua[f]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" instead with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),f=0;f<h;f++)p[ua[f]]=st}return p}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),c=e!=null&&e.dense?16:12;return a.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:j(j(j(j(j({},o&&{fontSize:o}),i&&{"--rli-animation-duration":i}),l&&{"--rli-animation-function":l}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},a.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:c},function(u,p){return a.createElement("span",{key:Nm(),className:"rli-d-i-b spoke",style:Lg(p,c,i)})})),a.createElement(Fr,{text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};function Lg(e,t,n){if(t===16){var r=t-e,o=Number.parseFloat(n)/t;return{transform:"rotate(".concat(360*e/t,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((r-1)*o*-1,"s")}}}oe(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var da=Array.from({length:4},function(e,t){return"--OP-annulus-dual-sectors-phase".concat(t+1,"-color")}),Ag=function(e){var t,n=Ir(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,l=e==null?void 0:e.easing,i=Rr(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,s=function(u){var p={},h=da.length;if(u instanceof Array){for(var x=$r(u,h),b=0;b<x.length&&!(b>=4);b++)p[da[b]]=x[b];return p}try{if(typeof u!="string")throw new Error("Color String expected");for(var f=0;f<h;f++)p[da[f]]=u}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),f=0;f<h;f++)p[da[f]]=st}return p}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),c=e.dense?"0.45em":"";return a.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:j(j(j(j(j({},o&&{fontSize:o}),i&&{"--rli-animation-duration":i}),l&&{"--rli-animation-function":l}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},a.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},a.createElement("span",{className:"rli-d-i-b annulus-sectors",style:j({},c&&{borderWidth:c})}),a.createElement(Fr,{className:"OP-annulus-dual-sectors-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};oe(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var Xn=Array.from({length:4},function(e,t){return["--OP-annulus-track-phase".concat(t+1,"-color"),"--OP-annulus-sector-phase".concat(t+1,"-color")]}),fa=function(e){return e===void 0&&(e=1),.25*e},jg=function(e){var t,n=Ir(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,l=e==null?void 0:e.easing,i=Rr(e==null?void 0:e.speedPlus,"1s").animationPeriod,s=function(u){var p={},h=Xn.length;if(u instanceof Array){for(var x=$r(u,h),b=0;b<x.length&&!(b>=4);b++){var f=Xn[b];try{if(!(g=M(x[b])).isValid())throw new Error("Invalid Color: ".concat(g.getOriginalInput()));var m=g.setAlpha(fa(g.getAlpha())).toRgbString(),E=x[b];p[f[0]]=m,p[f[1]]=E}catch{E=st,m=(g=M(st)).setAlpha(fa(g.getAlpha())).toRgbString(),p[f[0]]=m,p[f[1]]=E}}return p}try{var g=M(u);if(typeof u!="string")throw new Error("Color String expected");if(!g.isValid())throw new Error("Invalid Color: ".concat(g.getOriginalInput()));E=u,m=g.setAlpha(fa(g.getAlpha())).toRgbString();for(var d=0;d<h;d++)p[(f=Xn[d])[0]]=m,p[f[1]]=E}catch(v){for(v instanceof Error?console.warn("[".concat(v.message,']: Received "').concat(typeof u,'" with value, ').concat(JSON.stringify(u))):console.warn("".concat(JSON.stringify(u),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),E=st,m=(g=M(st)).setAlpha(fa(g.getAlpha())).toRgbString(),d=0;d<Xn.length;d++)p[(f=Xn[d])[0]]=m,p[f[1]]=E}return p}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:""),c=e.dense?"0.45em":"";return a.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:j(j(j(j(j({},o&&{fontSize:o}),i&&{"--rli-animation-duration":i}),l&&{"--rli-animation-function":l}),s),r),role:"status","aria-live":"polite","aria-label":"Loading"},a.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},a.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:j({},c&&{borderWidth:c})}),a.createElement(Fr,{className:"OP-annulus-sector-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))},Rg=function(e){var t=Object(e).variant,n=t===void 0?"disc":t;return n==="dotted"?a.createElement(Tg,j({},e)):n==="spokes"?a.createElement(Dg,j({},e)):n==="disc"?a.createElement(Mg,j({},e)):n==="split-disc"?a.createElement(Ag,j({},e)):n==="track-disc"?a.createElement(jg,j({},e)):null};oe(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--four-square-phase".concat(t+1,"-color")});oe(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--mosaic-phase".concat(t+1,"-color")});oe(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--riple-phase".concat(t+1,"-color")});oe(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--TD-pulsate-phase".concat(t+1,"-color")});oe(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--TD-brick-stack-phase".concat(t+1,"-color")});oe(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--TD-bob-phase".concat(t+1,"-color")});oe(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--TD-bounce-phase".concat(t+1,"-color")});oe(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--shape-phase".concat(t+1,"-color")});oe(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--trophySpin-phase".concat(t+1,"-color")});oe(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--slab-phase".concat(t+1,"-color")});oe(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--life-line-phase".concat(t+1,"-color")});const ma=[{key:"purpose",title:"Purpose",label:"What are you creating content for?"},{key:"product",title:"Product",label:"Describe the content idea and core objective."},{key:"audience",title:"Audience",label:"Who is this content for?"},{key:"goal",title:"Goal",label:"What approach should the content take?"},{key:"channels",title:"Channels",label:"Which channels should this content target?"},{key:"ai",title:"AI Predictor",label:"AI recommendation summary"},{key:"review",title:"Review",label:"Review and save your content plan."}],Ig=["Content Creator","Business","Existing Content"],Fg=["Skincare","Wellness","Beauty","Fashion","Tech","Food & Beverage","Home Goods","Education"],$g=["Under 18","18-24","25-34","35-44","45+"],Ug=["Women","Men","All"],cl=["Beauty","Fashion","Technology","Fitness","Food","Travel","Education","Lifestyle"],Bg=["Maximize Reach","Drive Sales","Increase Followers","Brand Awareness"],Wg=["TikTok","Instagram","Facebook"],pa=["Understanding Audience","Analyzing Category","Finding Patterns","Generating Ideas","Predicting Engagement","Comparing Platforms","Finding Time","Optimizing Caption/Hashtags"];function Hg(e){return new Promise(t=>setTimeout(t,e))}function Vg(){try{return JSON.parse(localStorage.getItem("meateka_content_plans")||"[]")}catch{return[]}}function ul(){const e=ve(),t=Ce(),{plan:n}=nt(),[r,o]=k.useState(!1),[l,i]=k.useState(0),[s,c]=k.useState({purpose:"",product:"",category:"",productDescription:"",age:"",gender:"",interests:[],audienceDescription:"",goal:"",channel:""}),[u,p]=k.useState(!1),[h,x]=k.useState(cl),[b,f]=k.useState(0),m=a.useRef(!1);k.useEffect(()=>{var y;(y=t.state)!=null&&y.resetCreateContent&&(i(0),f(0),p(!1),m.current=!1)},[t.key,t.state]),k.useEffect(()=>{Mr.get("/plan/interest").then(N=>{const z=Array.isArray(N==null?void 0:N.interests)?N.interests:[];x(z.length?z:cl)}).catch(N=>{console.error("Error fetching interest data:",N),x(cl)}).finally(()=>p(!1));const y=N=>{N.key==="Escape"&&o(!1)};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[]);const E=ma[l],g=l===0;k.useEffect(()=>{E.key==="ai"&&!m.current&&(m.current=!0,w()),E.key!=="ai"&&(m.current=!1)},[E.key]);function d(y,N){if(y==="interests"){c(z=>{const T=Array.isArray(z.interests)?z.interests:[],ne=T.includes(N)?T.filter($t=>$t!==N):[...T,N];return{...z,interests:ne}});return}c(z=>({...z,[y]:N}))}function v(){switch(E.key){case"purpose":return!!s.purpose;case"product":return!!s.product&&!!s.category;case"audience":return!!s.age&&!!s.gender&&Array.isArray(s.interests)&&s.interests.length>0;case"goal":return!!s.goal;case"channels":return!!s.channel;default:return!0}}const w=async()=>{var y;if(!u){p(!0),f(0);try{const N={purpose:s.purpose,product:s.product,category:s.category,productDescription:s.productDescription,age:s.age,gender:s.gender,interests:Array.isArray(s.interests)?s.interests:s.interests?[s.interests]:[],audience_description:s.audienceDescription,goal:s.goal,channel:s.channel};for(let z=0;z<pa.length;z++)await Hg(200),f(z+1);await Mr.post("/plan/create-content",N),f(pa.length)}catch(N){console.error("Create plan failed:",((y=N.response)==null?void 0:y.data)||N.message)}finally{p(!1)}}};function S(){if(l<ma.length-1){i(z=>z+1);return}const y={id:Date.now(),title:`${s.product||"New"} content plan`,purpose:s.purpose,details:s.productDescription||"Content concept planning",audience:s.age||"General audience",strategy:s.goal||"Audience-first storytelling",channels:s.channel?[s.channel]:["Instagram"],createdAt:new Date().toISOString()},N=Vg();localStorage.setItem("meateka_content_plans",JSON.stringify([y,...N].slice(0,12))),e("/plan/my-content",{replace:!0})}function C(){switch(E.key){case"purpose":return a.createElement("div",{className:"space-y-5"},a.createElement("div",{className:"flex flex-col items-center justify-center"},a.createElement("h2",{className:"mt-2 font-bold tracking-[-0.04em] text-[#222222] sm:text-[42px]"},"What are you creating content for?"),a.createElement("p",{className:"mt-1.5 text-[16px] leading-5 text-[#667085]"},"Select the primary purpose of this content plan to help us tailor the generation process.")),a.createElement("div",{className:"mt-8 grid gap-4 md:grid-cols-3"},Ig.map(y=>{const N=s.purpose===y;return a.createElement("button",{key:y,type:"button",onClick:()=>d("purpose",y),className:`flex items-center flex-col rounded-2xl border-2 px-5 py-6 text-left transition ${N?"border-[#4f46e5] shadow-sm":"border-[#d9dbea] bg-white hover:border-[#c7c9f7] hover:bg-[#f8f8ff]"}`},a.createElement("div",{className:`flex justify-center items-center border rounded-full p-4 ${y==="Content Creator"?"bg-blue-100":y==="Business"?"bg-green-100":y==="Existing Content"?"bg-violet-100":"bg-amber-100"}`},y==="Content Creator"?a.createElement(rg,{className:"size-8 fill-blue-800"}):y==="Business"?a.createElement(og,{className:"size-8 fill-green-700"}):y==="Existing Content"?a.createElement(ag,{className:"size-8 fill-violet-800"}):a.createElement(Bc,{className:"size-8 fill-amber-700"})),a.createElement("div",{className:"mt-5 text-lg font-bold text-center text-[#222222]"},y),a.createElement("p",{className:"mt-1 px-11 text-sm text-center leading-6 text-[#667085]"},y==="Brand Awareness"?"Build visibility and recognition around your product or message.":y==="Lead Generation"?"Capture interest and convert attention into qualified leads.":y==="Engagement"?"Promote interactive conversations and stronger community connection.":"Turn content into direct conversion opportunities and sales activity."))})));case"product":return a.createElement("div",{className:"space-y-5"},a.createElement("div",null,a.createElement("h2",{className:"mt-2 text-[16px] font-semibold tracking-[0.004em] text-[#444444] sm:text-[16px]"},"Product / Service"),a.createElement("input",{value:s.product,onChange:y=>d("product",y.target.value),placeholder:"Example: SaaS founders, digital marketers, skincare shoppers",className:"mt-2 w-full rounded-2xl border-2 border-[#dddddd] bg-[#fafaff] px-4 py-4 text-sm text-[#333333] outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#eeedff]"})),a.createElement("div",null,a.createElement("h2",{className:"mt-3 text-[16px] font-semibold tracking-[0.004em] text-[#444444] sm:text-[16px]"},"Category"),a.createElement("select",{className:"mt-2 w-full p-5 rounded-2xl border-2 border-[#dddddd] bg-[#fafaff] px-4 py-4 text-sm text-[#172033] outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#eeedff]",value:s.category,onChange:y=>d("category",y.target.value)},a.createElement("option",{value:"",disabled:!0,hidden:!0},"Select a category"),Fg.map(y=>a.createElement("option",{key:y,value:y},y)))),a.createElement("div",null,a.createElement("div",{className:"flex justify-between pr-2"},a.createElement("h2",{className:"mt-2 text-[16px] font-semibold tracking-[0.004em] text-[#444444] sm:text-[16px]"},"Description"),a.createElement("h2",{className:"mt-2 text-[16px] font-medium tracking-[0.004em] text-[#777777] sm:text-[16px]"},"Optional")),a.createElement("textarea",{value:s.productDescription,onChange:y=>d("productDescription",y.target.value),rows:6,placeholder:"Share your content goals, launch themes, or campaign direction...",className:"mt-2 w-full rounded-2xl border-2 border-[#dddddd] bg-[#fafaff] px-4 py-4 text-sm text-[#172033] outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#eeedff]"})));case"audience":return a.createElement("div",{className:"space-y-4 grid gap-4 md:grid-cols-5"},a.createElement("div",{className:"col-span-3"},a.createElement("div",{className:"mt-4 rounded-xl border-[#dddddd] border-2 px-5 py-5 bg-white shadow-sm"},a.createElement("div",{className:"flex flex-row items-center gap-1"},a.createElement(ig,{color:"#3525CD",className:"size-7"}),a.createElement("h2",{className:"text-[22px] font-semibold tracking-[0.004em] text-[#333333] sm:text-[22px]"},"Demographics")),a.createElement("div",{className:"mt-4 grid gap-8 md:grid-cols-2"},a.createElement("div",{className:"space-y-3"},a.createElement("h2",{className:"mt-2 text-[18px] font-[550] tracking-[0.004em] text-[#444444] sm:text-[18px]"},"Age Range"),a.createElement("div",{className:"mt-1 grid gap-3 md:grid-cols-2"},$g.map(y=>{const N=s.age===y;return a.createElement("button",{key:y,type:"button",onClick:()=>d("age",y),className:`rounded-xl border-2 px-1 py-3 text-center transition ${N?"border-[#4b42f1] bg-[#423ae0] shadow-sm":"border-[#cccccc] bg-white hover:border-[#c7c9f7] hover:bg-[#f8f8ff]"}`},a.createElement("div",{className:`text-[16px] font-medium ${N?"text-[#ffffff]":"text-[#444444]"}`},y))}))),a.createElement("div",{className:"space-y-3"},a.createElement("h2",{className:"mt-2 text-[18px] font-semibold tracking-[0.004em] text-[#333333] sm:text-[18px]"},"Gender"),a.createElement("div",{className:"mt-8 grid gap-3 md:grid-cols-1"},Ug.map(y=>{const N=s.gender===y;return a.createElement("button",{key:y,type:"button",onClick:()=>d("gender",y),className:`rounded-xl border-2 px-5 py-3 text-center transition ${N?"border-[#4b42f1] bg-[#423ae0] shadow-sm":"border-[#cccccc] bg-white hover:border-[#c7c9f7] hover:bg-[#f8f8ff]"}`},a.createElement("div",{className:`text-[16px] font-medium ${N?"text-[#ffffff]":"text-[#444444]"}`},y))}))))),a.createElement("div",{className:"mt-8 rounded-xl border-2 px-5 py-5 bg-white border-[#dddddd]"},a.createElement("div",{className:"flex justify-between items-center"},a.createElement("div",{className:"flex flex-row items-center gap-1"},a.createElement(sg,{color:"#3525CD",className:"size-7"}),a.createElement("h2",{className:"text-[22px] font-semibold tracking-[0.004em] text-[#333333] sm:text-[22px]"},"Interests")),a.createElement("div",{className:"rounded-full bg-[#4F46E51A] border-0 text-center px-2"},a.createElement("p",{className:"text-[16px] font-semibold text-[#3525CD]"},"Select min. 1"))),a.createElement("p",{className:"mt-1.5 text-[16px] leading-5 text-[#667085]"},"Select all that apply."),a.createElement("div",{className:"mt-5 gap-3 flex flex-wrap"},h.map(y=>{const N=typeof y=="string"?y:y.interest_name||y.name||"",z=Array.isArray(s.interests)&&s.interests.includes(N);return N?a.createElement("button",{key:N,type:"button",onClick:()=>d("interests",N),className:`rounded-full border-2 px-5 py-3 text-center transition ${z?"border-[#4b42f1] bg-[#423ae0] shadow-sm":"border-[#cccccc] bg-white hover:border-[#c7c9f7] hover:bg-[#f8f8ff]"}`},a.createElement("div",{className:`text-[16px] font-medium ${z?"text-[#ffffff]":"text-[#444444]"}`},N)):null})))),a.createElement("div",{className:"col-span-2 mt-8 rounded-xl border-2 px-5 py-5 bg-white self-stretch border-[#dddddd]"},a.createElement("div",{className:"flex flex-row items-center justify-between"},a.createElement("div",{className:"flex flex-row items-center gap-2"},a.createElement(cg,{color:"#3525CD",className:"size-6"}),a.createElement("h2",{className:"mt-2 text-[22px] font-semibold tracking-[0.004em] text-[#333333] sm:text-[22px]"},"Audience Description")),a.createElement("div",{className:"flex pt-2"},a.createElement("p",{className:"text-[16px] font-medium text-[#777777]"},"Optional"))),a.createElement("p",{className:"mt-1.5 text-[16px] leading-5 text-[#667085]"},"Add any specific nuances about your audience's pain points, desires, or income levels."),a.createElement("textarea",{value:s.audienceDescription,onChange:y=>d("audienceDescription",y.target.value),rows:6,placeholder:"Share your content goals, launch themes, or campaign direction...",className:"mt-2 h-4/5 w-full rounded-2xl border border-[#aaaaaa] bg-[#fafaff] px-4 py-4 text-sm text-[#172033] outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#eeedff]"})));case"goal":return a.createElement("div",{className:"space-y-5"},a.createElement("h2",{className:"text-l text-center font-bold tracking-tight text-[#172033]"},"Define your primary Goal"),a.createElement("p",{className:"mt-1.5 text-[16px] text-center leading-5 text-[#667085]"},"Select the primary purpose of this content plan to help us tailor the generation process."),a.createElement("div",{className:"mt-8 grid gap-6 md:grid-cols-2"},Bg.map(y=>{const N=s.goal===y;return a.createElement("button",{key:y,type:"button",onClick:()=>d("goal",y),className:`rounded-2xl border-2 px-5 flex py-3 text-left transition ${N?"border-[#4b42f1] bg-[#ffffff] shadow-sm":"border-[#dddddd] bg-white hover:border-[#c7c9f7] hover:bg-[#f8f8ff]"}`},a.createElement("div",null,a.createElement("div",{className:"mt-1 inline-block border-2 rounded-2xl px-2 py-3 bg-blue-100"},y==="Maximize Reach"?a.createElement(ug,{color:"#3525CD",className:"size-6"}):y==="Drive Sales"?a.createElement(dg,{color:"#3525CD",className:"size-6"}):y==="Increase Followers"?a.createElement(lg,{color:"#3525CD",className:"size-6"}):a.createElement(fg,{color:"#3525CD",className:"size-6"})),a.createElement("div",{className:"text-lg font-bold text-[#444444]"},y),a.createElement("p",{className:"mt-2 mr-7 text-sm leading-6 text-[#444444]"},y==="Maximize Reach"?"Focus on impressions, virality, and getting your content in front of as many new eyes as possible.":y==="Drive Sales"?"Optimize for conversions, click-through rates to storefronts, and direct revenue generation.":y==="Increase Followers"?"Prioritize engagement metrics, profile visits, and building a loyal, long-term subscriber base.":"Focus on sentiment, share of voice, and establishing authority in your specific niche market.")))})));case"channels":return a.createElement("div",{className:"space-y-5"},a.createElement("h2",{className:"text-l font-bold text-center tracking-tight text-[#172033]"},"Where is this going?"),a.createElement("p",{className:"mt-1.5 text-[16px] text-center leading-5 text-[#667085]"},"Select the primary platforms for this content. We'll tailor the intelligence gathered to fit the specific algorithms and audience behaviors of your chosen destinations."),a.createElement("div",{className:"pt-5 grid gap-6 md:grid-cols-3 px-16"},Wg.map(y=>{const N=s.channel===y;return a.createElement("button",{key:y,type:"button",onClick:()=>d("channel",y),className:`rounded-xl border-2 px-5 pb-8 pr-12 py-3 justify-start flex flex-col text-left transition ${N?"border-[#4b42f1] bg-[#ffffff] shadow-sm":"border-[#dddddd] bg-white hover:border-[#c7c9f7] hover:bg-[#f8f8ff]"}`},a.createElement("div",{className:`flex items-center justify-center text-center border w-fit h-fit rounded-2xl px-1.5 py-1.5 ${y==="TikTok"?"bg-black my-1.5":y==="Instagram"?"my-1.5 bg-gradient-to-tr from-[#f58529] via-[#dd2c7c] to-[#8034b7]":"border-0"}`},y==="TikTok"?a.createElement(tg,{className:"size-6 text-[#ffffff]"}):y==="Instagram"?a.createElement(mg,{className:"size-6 text-[#ffffff]"}):a.createElement(pg,{color:"#3525CD",className:"size-9"})),a.createElement("div",{className:"text-lg font-bold text-[#333333]"},y),a.createElement("p",{className:"mt-2 text-sm leading-6 text-[#444444]"},y==="TikTok"?"Optimize for high-velocity trends, hook retention, and sound-based discovery.":y==="Instagram"?"Plan branded campaigns and performance-focused channels.":"Refresh and repurpose existing assets into a stronger strategy."))})));case"ai":return a.createElement("div",{className:"space-y-5"},a.createElement("div",{className:"flex justify-center items-center flex-col"},a.createElement("div",{className:"bg-[#E1E8FD] border-0 rounded-2xl p-3"},a.createElement(Bc,{color:"#3525CD",className:"size-10"})),a.createElement("h2",{className:"mt-4 text-[32px] font-bold text-center tracking-tight text-[#172033]"},"Meateka is creating your content plan..."),a.createElement("p",{className:"text-[18px] text-center leading-5 text-[#667085]"},"Our intelligence engine is analyzing data to build your optimal schedule.")),a.createElement("div",{className:"mt-6 mx-56 rounded-2xl border border-[#d9dbea] bg-[rgb(244,244,255)] p-6 flex flex-col items-start gap-4"},pa.map((y,N)=>a.createElement("div",{key:N,className:"flex gap-4 items-center justify-center"},N===b?a.createElement("div",{className:"bg-[#4F46E5] rounded-full relative w-6 h-6 overflow-hidden shrink-0"},a.createElement("div",{className:"absolute top-1/2 left-1/2",style:{transform:"translate(-50%, -50%) scale(0.20)"}},a.createElement(Rg,{variant:"split-disc",dense:!0,color:"#ffffff",text:"",textColor:"#623030"}))):N<b?a.createElement(ng,{color:"#12a77d",className:"size-6"}):a.createElement("div",{className:"border-2 rounded-full p-1 border-[#bbbbbb]"},a.createElement(hg,{color:"#bbbbbb",className:"size-3"})),a.createElement("p",{className:"text-[21px] text-center font-medium leading-5 text-[#333333]"},y)))));case"review":return a.createElement("div",{className:"space-y-5"},a.createElement("h2",{className:"text-4xl font-bold tracking-tight text-[#172033]"},"Review your content plan"),a.createElement("div",{className:"mt-6 space-y-4 rounded-2xl border border-[#d9dbea] bg-[#fafaff] p-6"},Object.entries(s).map(([y,N])=>a.createElement("div",{key:y,className:"border-b border-[#eaebf2] pb-3 last:border-b-0 last:pb-0"},a.createElement("div",{className:"text-xs font-semibold uppercase tracking-[0.12em] text-[#667085]"},y),a.createElement("div",{className:"mt-2 text-base font-medium text-[#172033]"},Array.isArray(N)?N.join(", "):N)))));default:return null}}return a.createElement("div",{className:"min-h-screen bg-[#fafaff] text-[#172033]"},a.createElement("div",{className:"flex min-h-screen"},a.createElement(So,{isOpen:r,onClose:()=>o(!1)}),a.createElement("main",{className:"relative min-w-0 flex-1 pt-[72px] transition-all duration-300 ease-in-out lg:ml-[180px]"},r&&a.createElement("button",{type:"button","aria-label":"Close sidebar overlay",onClick:()=>o(!1),className:"fixed inset-0 z-30 bg-[#172033]/10 lg:hidden"}),a.createElement("div",{className:"mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"},a.createElement("div",{className:"overflow-hidden rounded-[28px] border border-[#d9dbea] bg-white shadow-[0_18px_40px_rgba(79,70,229,0.06)]"},a.createElement("div",{className:"flex flex-col items-center border-[#e8eaf2] px-5 py-5 sm:px-7"},a.createElement("div",null,a.createElement("p",{className:"text-[18px] font-bold tracking-[0.0018em] text-[#4f46e5]"},"Planning")),a.createElement("div",{className:"mt-5 overflow-x-auto pb-1"},a.createElement("div",{className:"flex min-w-max items-center gap-6"},ma.map((y,N)=>{const z=N===l,T=N<l,ne=N>l;return a.createElement(a.Fragment,{key:y.key},a.createElement("button",{type:"button",onClick:()=>!ne&&i(N),disabled:ne,className:`flex items-center gap-2 rounded-full border-0 px-2.5 py-1.5 transition ${z?"bg-[#f2f3ff]":T?"bg-[#edfaf3]":"bg-white"} ${ne?"cursor-default opacity-75":"cursor-pointer"}`},a.createElement("span",{className:`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${z?"bg-[#4f46e5] text-white":T?"bg-[#12a77d] text-white":"bg-[#eef0f8] text-[#667085]"}`},T?"✓":N+1),a.createElement("span",{className:`whitespace-nowrap text-[11px] font-semibold ${z?"text-[#3d42d9]":T?"text-[#0d8d68]":"text-[#667085]"}`},y.title)),N<ma.length-1&&a.createElement("div",{className:`h-px w-4 ${N<l?"bg-[#12a77d]":"bg-[#aaaaaa]"}`}))})))),a.createElement("section",{className:"mt-[-2rem] px-6 py-8 sm:px-8 lg:px-10 lg:py-10"},a.createElement("div",{className:"rounded-2xl bg-[#ffffff] px-6 sm:px-8"},C()),a.createElement("div",{className:"mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center"},a.createElement("button",{type:"button",onClick:()=>i(y=>Math.max(0,y-1)),className:`${g||l>4?"hidden":""} inline-flex items-center justify-center rounded-lg border border-[#d9dbea] px-4 py-3 text-sm font-semibold text-[#172033] transition hover:bg-[#f8f8ff] disabled:cursor-not-allowed disabled:opacity-40`},"Back"),a.createElement("button",{type:"button",onClick:S,disabled:u||!v()||l===5&&b<pa.length,className:"items-center justify-center rounded-lg bg-[#4f46e5] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#4338ca] disabled:cursor-not-allowed disabled:opacity-40 sm:ml-auto"},l===4?"Create":"Continue"))))))))}function Ye({title:e,description:t,showBack:n=!1,backTo:r="/dashboard",children:o}){const[l,i]=k.useState(!1);return k.useEffect(()=>{function s(c){c.key==="Escape"&&i(!1)}return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[]),a.createElement("div",{className:"h-screen bg-[#f4f6fb] pt-[72px] text-[#172033]"},a.createElement("div",{className:"flex h-full min-h-0 overflow-hidden"},a.createElement(So,{isOpen:l,onClose:()=>i(!1)}),a.createElement("main",{className:"relative min-w-0 flex-1 overflow-y-auto bg-[#f7f9fd] lg:ml-[180px]"},l&&a.createElement("button",{type:"button","aria-label":"Close sidebar overlay",onClick:()=>i(!1),className:"fixed inset-0 z-40 bg-slate-900/45 backdrop-blur-[1px] lg:hidden"}),a.createElement("div",{className:"mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8"},n&&a.createElement(U,{to:r,className:"text-sm font-semibold text-[#4f46e5] hover:underline"},"← Back"),a.createElement("h1",{className:`${n?"mt-6 ":""}text-3xl font-bold tracking-[-0.04em] text-[#172033]`},e),t&&a.createElement("p",{className:"mt-2 text-sm leading-6 text-[#667085]"},t),a.createElement("section",{className:"mt-8 rounded-[28px] border border-[#e4e7f1] bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.04)] sm:p-8"},o)))))}function Qg(){return a.createElement(Ye,{title:"Caption & Hashtag Generator",description:"Create platform-ready captions and discover relevant hashtags for your content.",backTo:"/create-content"},a.createElement(U,{to:"/prediction",className:"inline-flex rounded-lg bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4338ca]"},"Continue to Prediction"))}function Gc(){return a.createElement(Ye,{title:"Saved Ideas",description:"Review and develop content ideas generated for your audience.",backTo:"/dashboard"},a.createElement(U,{to:"/create-content",className:"inline-flex rounded-lg bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4338ca]"},"Create from an Idea"))}function Yc(){return a.createElement(Ye,{title:"My Content Plans",description:"Keep track of your planned and published content in one place.",backTo:"/dashboard"},a.createElement(U,{to:"/create-content",className:"inline-flex rounded-lg bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4338ca]"},"Create a New Plan"))}function Xc(){return a.createElement(Ye,{title:"Platform Comparison",description:"Compare channels and select the platforms that best fit your audience.",backTo:"/create-content"},a.createElement(U,{to:"/posting",className:"inline-flex rounded-lg bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4338ca]"},"Continue to Posting Time"))}function Zc(){return a.createElement(Ye,{title:"Best Posting Time",description:"Find the strongest times to publish your content across selected platforms.",backTo:"/platform"},a.createElement(U,{to:"/prediction",className:"inline-flex rounded-lg bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4338ca]"},"Continue to Prediction"))}function qg(){return a.createElement(Ye,{title:"Content Prediction",description:"Review predicted engagement and refine your plan before publishing.",backTo:"/create-content"},a.createElement(U,{to:"/my-plans",className:"inline-flex rounded-lg bg-[#4f46e5] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#4338ca]"},"Save to My Plans"))}async function Kg(e,t){const n=new AbortController,r=window.setTimeout(()=>n.abort(),8e3);try{return await Mr.post("/help-center/search",{query:e},{signal:n.signal})}catch(o){throw o.name==="AbortError"?new Error("The Help Center search timed out. Please try again."):o}finally{window.clearTimeout(r)}}const Gg=["Connecting TikTok","AI virality prediction","Exporting plans","Subscription & Billing"],Yg=[{title:"Getting Started",description:"Everything you need to set up your workspace and publish your first plan.",count:12,icon:s1,color:"bg-[#eeecff] text-[#5146e5]"},{title:"Platform Integrations",description:"Connect your social channels and keep analytics flowing into Meateka.",count:18,icon:E1,color:"bg-[#e6f8f4] text-[#159a7b]"},{title:"AI Content Planner & Predictor",description:"Understand predictions, scores, recommendations, and content signals.",count:24,icon:us,color:"bg-[#fff2dc] text-[#d88a22]"},{title:"Workspace & Team Settings",description:"Manage members, permissions, workspaces, and draft reviews.",count:9,icon:z1,color:"bg-[#e9f0ff] text-[#4776ce]"},{title:"Billing & Subscriptions",description:"Find answers about plans, invoices, upgrades, and saved ideas.",count:8,icon:Un,color:"bg-[#ffe9ed] text-[#d35e78]"},{title:"API & Data Export",description:"Export your plans and connect Meateka to your existing workflow.",count:7,icon:p1,color:"bg-[#eaf7f8] text-[#258e98]"}],Xg=["Why isn't my TikTok account syncing real-time analytics?","How does Meateka calculate the Virality Match percentage?","Can I schedule posts directly to Instagram Reels and Facebook?","What happens to my saved ideas if I change my pricing plan?","How do I invite team members or clients to review draft plans?"];function Zg(){const[e,t]=k.useState(!1),[n,r]=k.useState(""),[o,l]=k.useState([]),[i,s]=k.useState(!1),[c,u]=k.useState(""),[p,h]=k.useState(null);k.useEffect(()=>{function f(m){m.key==="Escape"&&t(!1)}return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[]);async function x(f,m=n){var g;f==null||f.preventDefault();const E=m.trim();if(!E){l([]),u("Enter a question or keyword to search the knowledge base.");return}s(!0),u("");try{const d=await Kg(E);l(d.results||[]),(g=d.results)!=null&&g.length||u("No close matches yet. Try a different phrase or browse a category below.")}catch(d){l([]),u(d.message||"Search is unavailable right now. Please try again.")}finally{s(!1)}}function b(){r(""),l([]),u("")}return a.createElement("div",{className:"h-screen bg-[#f4f6fb] pt-[72px] text-[#172033]"},a.createElement("div",{className:"flex h-full min-h-0 overflow-hidden"},a.createElement(So,{isOpen:e,onClose:()=>t(!1)}),a.createElement("main",{className:"relative min-w-0 flex-1 overflow-y-auto bg-[#f7f9fd] lg:ml-[180px]"},e&&a.createElement("button",{type:"button","aria-label":"Close sidebar overlay",onClick:()=>t(!1),className:"fixed inset-0 z-40 bg-slate-900/45 backdrop-blur-[1px] lg:hidden"}),a.createElement("div",{className:"mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-10 lg:py-10"},a.createElement("section",{className:"overflow-hidden rounded-[28px] border border-[#e3e5f1] bg-white shadow-[0_20px_45px_rgba(15,23,42,0.04)]"},a.createElement("div",{className:"bg-[radial-gradient(circle_at_80%_0%,#eeecff_0,transparent_35%),linear-gradient(135deg,#fbfaff_0%,#f7f8ff_100%)] px-6 py-10 sm:px-10 sm:py-14"},a.createElement("div",{className:"max-w-3xl"},a.createElement("span",{className:"inline-flex items-center gap-2 rounded-full border border-[#dcd7ff] bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#5146e5]"},a.createElement(is,{size:13}),"Knowledge Base & Creator Desk"),a.createElement("h1",{className:"mt-5 text-3xl font-extrabold tracking-[-0.05em] text-[#172033] sm:text-5xl"},"How can we help you today?"),a.createElement("p",{className:"mt-4 max-w-2xl text-sm leading-6 text-[#667085] sm:text-base"},"Guides, video tutorials, platform integration troubleshooting, and direct support for Meateka creators.")),a.createElement("form",{onSubmit:x,className:"mt-8 flex max-w-4xl items-center gap-3 rounded-2xl border border-[#dfe2ee] bg-white p-2 shadow-[0_12px_30px_rgba(79,70,229,0.08)]"},a.createElement(C1,{size:20,className:"ml-3 shrink-0 text-[#7c88a9]"}),a.createElement("input",{value:n,onChange:f=>r(f.target.value),className:"min-w-0 flex-1 bg-transparent px-1 py-3 text-sm text-[#172033] outline-none placeholder:text-[#9aa4b8]",placeholder:"Search articles, guides, keywords, or error codes (e.g., TikTok sync, AI virality score)","aria-label":"Search Help Center"}),a.createElement("span",{className:"hidden shrink-0 rounded-md bg-[#f4f5fa] px-2 py-1 text-[10px] font-bold text-[#8a94aa] sm:inline"},"ESC clear"),a.createElement("button",{type:"submit",disabled:i,className:"rounded-xl bg-[#5146e5] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#4539d0] disabled:cursor-wait disabled:opacity-60"},i?"Searching...":"Search")),a.createElement("div",{className:"mt-4 flex flex-wrap items-center gap-2"},a.createElement("span",{className:"mr-1 text-[11px] font-bold text-[#7c88a9]"},"Popular:"),Gg.map(f=>a.createElement("button",{type:"button",key:f,onClick:()=>{r(f),x({preventDefault:()=>{}},f)},className:"rounded-full border border-[#e1e3ef] bg-white px-3 py-1.5 text-[11px] font-semibold text-[#667085] transition hover:border-[#c9c4ff] hover:text-[#5146e5]"},f)))),(i||c||o.length>0)&&a.createElement("div",{className:"border-t border-[#edf0f6] px-6 py-6 sm:px-10"},a.createElement("div",{className:"flex items-center justify-between"},a.createElement("h2",{className:"text-sm font-extrabold text-[#172033]"},"Search results"),o.length>0&&a.createElement("button",{type:"button",onClick:b,className:"text-xs font-bold text-[#5146e5] hover:underline"},"Clear")),i&&a.createElement("p",{className:"mt-4 text-sm text-[#71809c]"},"Finding the most relevant articles..."),c&&!i&&a.createElement("p",{role:"alert",className:"mt-4 rounded-xl border border-[#f2d3d8] bg-[#fff6f7] px-4 py-3 text-sm font-medium text-[#b8445d]"},c),a.createElement("div",{className:"mt-4 grid gap-3 md:grid-cols-2"},o.map(f=>{var m;return a.createElement("article",{key:f.title,className:"rounded-2xl border border-[#e5e7f1] bg-[#fbfcff] p-4"},a.createElement("div",{className:"flex items-start justify-between gap-3"},a.createElement("h3",{className:"text-sm font-bold text-[#26324a]"},f.title),a.createElement("span",{className:"shrink-0 rounded-full bg-[#eeecff] px-2 py-1 text-[9px] font-bold text-[#5146e5]"},f.category)),a.createElement("p",{className:"mt-2 text-xs leading-5 text-[#71809c]"},f.summary),((m=f.relatedArticles)==null?void 0:m.length)>0&&a.createElement("p",{className:"mt-3 text-[10px] font-semibold text-[#8a94aa]"},"Related: ",f.relatedArticles.join(" · ")))})))),a.createElement("section",{className:"mt-10"},a.createElement("div",{className:"flex items-end justify-between gap-4"},a.createElement("div",null,a.createElement("p",{className:"text-[10px] font-bold uppercase tracking-[0.18em] text-[#5146e5]"},"Explore the knowledge base"),a.createElement("h2",{className:"mt-2 text-2xl font-extrabold tracking-[-0.04em] text-[#172033]"},"Browse by category")),a.createElement("span",{className:"hidden text-xs font-semibold text-[#8a94aa] sm:block"},"78 articles for creators")),a.createElement("div",{className:"mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3"},Yg.map(({title:f,description:m,count:E,icon:g,color:d})=>a.createElement("article",{key:f,className:"flex min-h-[218px] flex-col rounded-2xl border border-[#e1e4ef] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.03)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(15,23,42,0.07)]"},a.createElement("div",{className:"flex items-start justify-between"},a.createElement("span",{className:`flex h-10 w-10 items-center justify-center rounded-xl ${d}`},a.createElement(g,{size:19,strokeWidth:1.8})),a.createElement("span",{className:"rounded-full bg-[#f4f5fa] px-2.5 py-1 text-[10px] font-bold text-[#7c88a9]"},E," articles")),a.createElement("h3",{className:"mt-5 text-sm font-extrabold text-[#26324a]"},f),a.createElement("p",{className:"mt-2 text-xs leading-5 text-[#71809c]"},m),a.createElement("button",{type:"button",onClick:()=>{r(f),window.scrollTo({top:0,behavior:"smooth"})},className:"mt-auto flex items-center gap-1 pt-5 text-xs font-bold text-[#5146e5] hover:underline"},"Browse articles ",a.createElement("span",{"aria-hidden":"true"},"→")))))),a.createElement("section",{className:"mt-12 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]"},a.createElement("div",null,a.createElement("div",null,a.createElement("p",{className:"text-[10px] font-bold uppercase tracking-[0.18em] text-[#5146e5]"},"Quick answers"),a.createElement("h2",{className:"mt-2 text-2xl font-extrabold tracking-[-0.04em] text-[#172033]"},"Frequently asked questions")),a.createElement("div",{className:"mt-5 space-y-3"},Xg.map((f,m)=>a.createElement("div",{key:f,className:"rounded-2xl border border-[#e1e4ef] bg-white"},a.createElement("button",{type:"button","aria-expanded":p===m,onClick:()=>h(p===m?null:m),className:"flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold text-[#26324a]"},a.createElement("span",null,f),a.createElement(d1,{size:17,className:`shrink-0 text-[#7c88a9] transition-transform ${p===m?"rotate-180":""}`})),p===m&&a.createElement("p",{className:"border-t border-[#edf0f6] px-5 pb-5 pt-3 text-xs leading-6 text-[#71809c]"},"Our Creator Desk guide walks through this workflow with practical steps and troubleshooting checks. Search the question above to find the most relevant article and related resources."))))),a.createElement("aside",{className:"rounded-2xl border border-[#dcd7ff] bg-[#f6f4ff] p-6"},a.createElement("div",{className:"flex items-start justify-between"},a.createElement("div",{className:"flex h-12 w-12 items-center justify-center rounded-full bg-[#ddd8ff] text-sm font-extrabold text-[#5146e5]"},"CD"),a.createElement("span",{className:"inline-flex items-center gap-1.5 rounded-full bg-[#e6f8f1] px-2.5 py-1 text-[10px] font-bold text-[#168866]"},a.createElement("span",{className:"h-1.5 w-1.5 rounded-full bg-[#18a879]"}),"Online 24/7")),a.createElement("h2",{className:"mt-5 text-xl font-extrabold text-[#172033]"},"Still need help?"),a.createElement("p",{className:"mt-2 text-sm leading-6 text-[#667085]"},"Our Creator Desk is here to help you get back to creating with confidence."),a.createElement("a",{href:"mailto:support@meateka.com",className:"mt-5 flex items-center gap-2 text-xs font-bold text-[#5146e5] hover:underline"},a.createElement(ko,{size:15}),"support@meateka.com"),a.createElement("p",{className:"mt-4 flex items-center gap-2 text-[11px] font-semibold text-[#168866]"},a.createElement(rn,{size:15}),"All Systems Operational"),a.createElement("div",{className:"mt-6 grid gap-2 sm:grid-cols-2 xl:grid-cols-1"},a.createElement("button",{type:"button",className:"inline-flex items-center justify-center gap-2 rounded-xl bg-[#5146e5] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#4539d0]"},a.createElement(k1,{size:15}),"Start Live Chat"),a.createElement("button",{type:"button",className:"inline-flex items-center justify-center gap-2 rounded-xl border border-[#cbc6f4] bg-white px-4 py-3 text-xs font-bold text-[#5146e5] transition hover:bg-[#f0eeff]"},a.createElement(O1,{size:15}),"Submit a Ticket"))))))))}function Jg(){const e=ve(),{plan:t}=nt(),[n,r]=k.useState("monthly"),o=t==="premium";function l(){e("/checkout",{state:{billing:n,plan:"premium"}})}const i=n==="monthly"?"$9.99":"$7.99";return a.createElement(Ye,{title:"Pricing",description:"Choose the plan that fits the way you create and grow."},a.createElement("div",{className:"mx-auto max-w-6xl px-4 pb-10"},a.createElement("div",{className:"flex flex-col gap-6 border-b border-[#e4e7f2] pb-7 md:flex-row md:items-center md:justify-between"},a.createElement("div",null,a.createElement("h2",{className:"text-3xl font-extrabold tracking-tight text-[#182033] sm:text-4xl"},"Simple, transparent pricing"),a.createElement("p",{className:"mt-2 max-w-2xl text-base leading-6 text-[#596174]"},"Unlock your full creative potential with our pro tools. No hidden fees, cancel anytime.")),a.createElement("div",{className:"shrink-0 rounded-xl border border-[#d9ddec] bg-[#f7f8fc] p-1"},a.createElement("div",{className:"flex items-center"},a.createElement("button",{type:"button",onClick:()=>r("monthly"),className:`rounded-lg px-5 py-2.5 text-sm font-bold transition ${n==="monthly"?"bg-white text-[#202638] shadow-sm":"text-[#4f5668] hover:text-[#202638]"}`},"Monthly"),a.createElement("button",{type:"button",onClick:()=>r("annual"),className:`rounded-lg px-5 py-2.5 text-sm font-bold transition ${n==="annual"?"bg-white text-[#202638] shadow-sm":"text-[#4f5668] hover:text-[#202638]"}`},"Annually"),a.createElement("span",{className:"ml-1 rounded-lg bg-[#e5e4ff] px-2.5 py-1.5 text-[9px] font-extrabold uppercase tracking-wide text-[#5146e5]"},"SAVE 20%")))),a.createElement("div",{className:"mt-10 grid items-stretch gap-6 lg:grid-cols-2"},a.createElement("div",{className:"flex h-full flex-col rounded-2xl border border-[#cfd4e3] bg-white p-8"},a.createElement("div",null,a.createElement("h3",{className:"text-xl font-bold text-[#202638]"},"Free"),a.createElement("p",{className:"mt-1 max-w-md text-sm leading-5 text-[#697084]"},"Essential tools for starting creators to plan and organize.")),a.createElement("div",{className:"mt-5 flex items-end"},a.createElement("span",{className:"text-5xl font-extrabold tracking-tight text-[#151d2f]"},"$0"),a.createElement("span",{className:"mb-1 ml-1 text-sm text-[#596174]"},"/month")),a.createElement("button",{type:"button",disabled:!0,className:"mt-8 h-10 w-full rounded-lg border border-[#969caf] bg-white text-sm font-semibold text-[#30384b]"},"Current Plan"),a.createElement("div",{className:"mt-8"},a.createElement("p",{className:"text-xs font-extrabold uppercase tracking-wider text-[#51586a]"},"WHAT'S INCLUDED"),a.createElement("ul",{className:"mt-4 space-y-3"},["Up to 3 Content Plans","Basic analytics dashboard","50 saved ideas limit","Standard support"].map(s=>a.createElement("li",{key:s,className:"flex items-center gap-2.5 text-[15px] text-[#293144]"},a.createElement(rn,{size:15,strokeWidth:2,className:"shrink-0 text-[#5146e5]"}),a.createElement("span",null,s)))))),a.createElement("div",{className:"relative flex h-full flex-col rounded-2xl border-2 border-[#4b3ff0] bg-white p-8 shadow-[0_10px_30px_rgba(70,60,220,0.12)]"},a.createElement("div",{className:"absolute -top-3 right-4 rounded-full bg-[#4b3ff0] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white"},"RECOMMENDED"),a.createElement("div",null,a.createElement("h3",{className:"text-xl font-bold text-[#4b3ff0]"},"Premium"),a.createElement("p",{className:"mt-1 max-w-md text-sm leading-5 text-[#697084]"},"Advanced analysis and unlimited capacity for high-output pros.")),a.createElement("div",{className:"mt-5 flex items-end"},a.createElement("span",{className:"text-5xl font-extrabold tracking-tight text-[#151d2f]"},i),a.createElement("span",{className:"mb-1 ml-1 text-sm text-[#596174]"},"/month")),a.createElement("button",{type:"button",onClick:l,className:"mt-8 h-10 w-full rounded-lg bg-[#5146e5] text-sm font-semibold text-white transition hover:bg-[#4338ca]"},o?"Change billing":"Upgrade to Premium"),a.createElement("div",{className:"mt-8"},a.createElement("p",{className:"text-xs font-extrabold uppercase tracking-wider text-[#51586a]"},"EVERYTHING IN FREE, PLUS:"),a.createElement("ul",{className:"mt-4 space-y-3"},["Unlimited Content Plans","Advanced audience analytics & insights","Unlimited saved ideas","Priority 24/7 support","Custom branding export"].map(s=>a.createElement("li",{key:s,className:"flex items-center gap-2.5 text-[15px] text-[#293144]"},a.createElement(rn,{size:15,strokeWidth:2,className:"shrink-0 text-[#5146e5]"}),a.createElement("span",null,s)))))))))}const Jc=["Checkout","Payment","Confirmation"];function ps({current:e=0}){return a.createElement("ol",{className:"flex items-center justify-center gap-2 sm:gap-6","aria-label":"Checkout progress"},Jc.map((t,n)=>a.createElement(a.Fragment,{key:t},a.createElement("li",{className:"flex items-center gap-2"},a.createElement("span",{className:`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${n<=e?"bg-[#5146e5] text-white":"border border-[#dfe2ee] bg-white text-[#94a0b8]"}`},n<e?a.createElement($n,{size:14}):n+1),a.createElement("span",{className:`hidden text-xs font-bold sm:inline ${n===e?"text-[#5146e5]":"text-[#94a0b8]"}`},t)),n<Jc.length-1&&a.createElement("span",{className:`h-px w-8 sm:w-16 ${n<e?"bg-[#5146e5]":"bg-[#e2e5ef]"}`}))))}function ev(){const e=ve(),{state:t}=Ce(),n=(t==null?void 0:t.billing)==="annual"?"annual":"monthly",r=n==="annual"?"$7.99":"$9.99";return a.createElement(Ye,{title:"Upgrade to Pro",description:"A smarter content workflow, ready when you are.",showBack:!0,backTo:"/pricing"},a.createElement("div",{className:"mx-auto max-w-4xl"},a.createElement(ps,{current:0}),a.createElement("div",{className:"mt-12 grid gap-8 lg:grid-cols-[1fr_320px]"},a.createElement("div",null,a.createElement("div",{className:"rounded-2xl border border-[#e0e3f0] bg-white p-6"},a.createElement("div",{className:"flex items-start gap-4"},a.createElement("span",{className:"flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eeecff] text-[#5146e5]"},a.createElement(Un,{size:20})),a.createElement("div",null,a.createElement("h2",{className:"text-xl font-extrabold text-[#172033]"},"Pro subscription"),a.createElement("p",{className:"mt-1 text-sm leading-6 text-[#64748b]"},"Everything you need to plan with confidence and publish with momentum."))),a.createElement("div",{className:"mt-7 space-y-4"},["Unlimited content analyses","All platforms supported","Deep AI insights and trends","Priority support"].map(o=>a.createElement("div",{key:o,className:"flex items-center gap-3 text-sm text-[#475569]"},a.createElement("span",{className:"flex h-6 w-6 items-center justify-center rounded-full bg-[#e5f8f1] text-[#16a57d]"},a.createElement($n,{size:14})),o)))),a.createElement("div",{className:"mt-5 flex items-center gap-3 rounded-xl bg-[#f7f8fc] p-4 text-xs leading-5 text-[#64748b]"},a.createElement(Mf,{size:17,className:"shrink-0 text-[#5146e5]"}),"Your ",n," plan renews automatically. Cancel anytime from settings.")),a.createElement("aside",{className:"rounded-2xl border border-[#e0e3f0] bg-[#faf9ff] p-5"},a.createElement("p",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-[#71809c]"},"Your selection"),a.createElement("div",{className:"mt-3 flex items-end justify-between"},a.createElement("h3",{className:"text-2xl font-extrabold text-[#172033]"},"Pro"),a.createElement("p",{className:"text-lg font-bold text-[#5146e5]"},r)),a.createElement("p",{className:"mt-2 text-xs text-[#71809c]"},"Billed ",n==="annual"?"annually":"monthly"),a.createElement("button",{type:"button",onClick:()=>e("/payment",{state:{billing:n}}),className:"mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#5146e5] text-sm font-bold text-white transition hover:bg-[#4539d0]"},"Continue to payment ",a.createElement(nn,{size:16})),a.createElement("button",{type:"button",onClick:()=>e("/pricing"),className:"mt-3 flex w-full items-center justify-center gap-2 py-2 text-xs font-semibold text-[#64748b] hover:text-[#5146e5]"},a.createElement(l1,{size:14}),"Change plan")))))}function tv({billing:e="monthly",total:t=29,method:n="card",processing:r=!1,onSubmit:o}){const l=e==="annual"?278.4:t,i=Number((l*.08).toFixed(2)),s=Number((l+i).toFixed(2));return a.createElement("aside",{className:"w-full rounded-2xl border border-[#e0e3f0] bg-white p-6 shadow-[0_10px_30px_rgba(60,60,120,0.04)] lg:min-w-[340px]"},a.createElement("div",{className:"flex items-center justify-between gap-4"},a.createElement("div",null,a.createElement("p",{className:"text-[10px] font-bold uppercase tracking-[0.16em] text-[#71809c]"},"Order Summary"),a.createElement("h2",{className:"mt-1 text-xl font-extrabold text-[#111827]"},"Pro Plan")),a.createElement("span",{className:"rounded-full bg-[#eeecff] px-3 py-1 text-[10px] font-bold text-[#5146e5]"},e==="annual"?"Billed Annually":"Billed Monthly")),a.createElement("div",{className:"my-5 h-px bg-[#e9ebf3]"}),a.createElement("ul",{className:"space-y-3"},["Unlimited Analyses","Deep Insights","Priority Support"].map(c=>a.createElement("li",{key:c,className:"flex gap-2 text-sm text-[#475569]"},a.createElement($n,{size:15,className:"shrink-0 text-[#5146e5]"}),c))),a.createElement("div",{className:"my-5 h-px bg-[#e9ebf3]"}),a.createElement("dl",{className:"space-y-3 text-sm"},a.createElement("div",{className:"flex justify-between text-[#64748b]"},a.createElement("dt",null,"Subtotal"),a.createElement("dd",null,"$",l.toFixed(2))),a.createElement("div",{className:"flex justify-between text-[#64748b]"},a.createElement("dt",null,"Tax"),a.createElement("dd",null,"$",i.toFixed(2))),a.createElement("div",{className:"flex justify-between border-t border-[#e9ebf3] pt-3 text-base font-extrabold text-[#111827]"},a.createElement("dt",null,"Total"),a.createElement("dd",null,"$",s.toFixed(2)))),a.createElement("button",{type:"button",onClick:o,disabled:r,className:"mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#5146e5] text-sm font-bold text-white transition hover:bg-[#4539d0]"},n==="card"&&a.createElement(a.Fragment,null,"🔒 Complete Upgrade"),n==="paypal"&&a.createElement(a.Fragment,null,a.createElement(fs,{size:17})," Pay $29.00 with PayPal"),n==="apple"&&a.createElement(a.Fragment,null,a.createElement(ms,{size:17})," Pay with Apple Pay ($29.00)")),a.createElement("div",{className:"mt-5 flex items-start gap-2 rounded-xl bg-[#f7f8fc] p-3 text-[10px] leading-4 text-[#71809c]"},a.createElement(No,{size:14,className:"shrink-0 text-[#5146e5]"}),"Secure checkout. This demo does not charge a real card."))}function eu(e="monthly",t=29){const n=e==="annual"?278.4:t;return Number((n+Number((n*.08).toFixed(2))).toFixed(2))}function nv(){return a.createElement("div",{className:"mt-4 rounded-2xl border border-[#dce1f3] bg-[#f0f2ff] p-4"},a.createElement("div",{className:"flex items-center gap-3"},a.createElement("div",{className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white"},a.createElement(ms,{size:17})),a.createElement("div",{className:"min-w-0 flex-1"},a.createElement("p",{className:"text-xs font-bold text-[#252b3a]"},"Apple Wallet Connected"),a.createElement("p",{className:"mt-0.5 text-xs text-[#596174]"},"Apple Card (•••• 4092)")),a.createElement(rn,{size:16,fill:"#008b78",className:"shrink-0 text-white"})),a.createElement("div",{className:"my-3 border-t border-[#d8dced]"}),a.createElement("div",{className:"rounded-xl border border-[#dce0ed] bg-white px-3 py-3"},a.createElement("div",{className:"flex items-start gap-2"},a.createElement(g1,{size:16,className:"mt-0.5 shrink-0 text-[#5146e5]"}),a.createElement("p",{className:"text-xs leading-5 text-[#596174]"},"Touch ID, Face ID, or double-click the side button on your device to authorize payment of $29.00."))),a.createElement("div",{className:"mt-3 flex items-start justify-center gap-2"},a.createElement(ss,{size:12,className:"mt-0.5 shrink-0 text-[#008b78]"}),a.createElement("p",{className:"text-center text-[10px] leading-4 text-[#596174]"},"Your card number and identity are not shared with Meateka • Encrypted via Secure Enclave")))}function rv({form:e,onChange:t}){return a.createElement("div",{className:"mt-6 space-y-5"},a.createElement("label",{className:"block"},a.createElement("span",{className:"text-xs font-medium uppercase tracking-wide text-[#565d70]"},"Card Number"),a.createElement("div",{className:"relative mt-2"},a.createElement(Un,{size:18,strokeWidth:2,className:"absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7b8295]"}),a.createElement("input",{type:"text",value:e.cardNumber,onChange:n=>t("cardNumber",n.target.value),inputMode:"numeric",autoComplete:"cc-number",placeholder:"0000 0000 0000 0000",className:"h-12 w-full rounded-xl border border-[#d5d9e7] bg-[#f9f9fd] pl-10 pr-4 text-sm text-[#252b3a] outline-none transition placeholder:text-[#858c9e] focus:border-[#5146e5] focus:bg-white focus:ring-2 focus:ring-[#eeecff]"}))),a.createElement("div",{className:"grid grid-cols-2 gap-4"},a.createElement("label",{className:"block"},a.createElement("span",{className:"text-xs font-medium uppercase tracking-wide text-[#565d70]"},"Expiry Date"),a.createElement("input",{type:"text",value:e.expiry,onChange:n=>t("expiry",n.target.value),inputMode:"numeric",autoComplete:"cc-exp",placeholder:"MM/YY",className:"mt-2 h-12 w-full rounded-xl border border-[#d5d9e7] bg-[#f9f9fd] px-4 text-sm text-[#252b3a] outline-none transition placeholder:text-[#858c9e] focus:border-[#5146e5] focus:bg-white focus:ring-2 focus:ring-[#eeecff]"})),a.createElement("label",{className:"block"},a.createElement("span",{className:"text-xs font-medium uppercase tracking-wide text-[#565d70]"},"CVC"),a.createElement("div",{className:"relative mt-2"},a.createElement("input",{type:"text",value:e.cvc,onChange:n=>t("cvc",n.target.value),inputMode:"numeric",autoComplete:"cc-csc",placeholder:"123",className:"h-12 w-full rounded-xl border border-[#d5d9e7] bg-[#f9f9fd] px-4 pr-10 text-sm text-[#252b3a] outline-none transition placeholder:text-[#858c9e] focus:border-[#5146e5] focus:bg-white focus:ring-2 focus:ring-[#eeecff]"}),a.createElement(is,{size:15,strokeWidth:1.8,className:"absolute right-3.5 top-1/2 -translate-y-1/2 text-[#7c8293]"})))),a.createElement("label",{className:"block"},a.createElement("span",{className:"text-xs font-medium uppercase tracking-wide text-[#565d70]"},"Name on Card"),a.createElement("input",{type:"text",value:e.name,onChange:n=>t("name",n.target.value),autoComplete:"cc-name",placeholder:"John Doe",className:"mt-2 h-12 w-full rounded-xl border border-[#d5d9e7] bg-[#f9f9fd] px-4 text-sm text-[#252b3a] outline-none transition placeholder:text-[#858c9e] focus:border-[#5146e5] focus:bg-white focus:ring-2 focus:ring-[#eeecff]"})))}function av(){return a.createElement("div",{className:"mt-4 rounded-2xl border border-[#dce1f3] bg-[#f0f2ff] p-4"},a.createElement("div",{className:"flex items-start gap-3"},a.createElement("div",{className:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dedfff] text-[#5146e5]"},a.createElement(fs,{size:17})),a.createElement("div",{className:"min-w-0 flex-1"},a.createElement("div",{className:"flex flex-wrap items-center gap-2"},a.createElement("h3",{className:"text-xs font-bold text-[#252b3a]"},"PayPal Express Checkout"),a.createElement("span",{className:"rounded-full bg-[#6ee7d4] px-2 py-0.5 text-[9px] font-medium text-[#087f70]"},"Active")),a.createElement("p",{className:"mt-0.5 text-xs text-[#596174]"},"Fast, secure payment with your PayPal account"))),a.createElement("div",{className:"my-3 border-t border-[#d8dced]"}),a.createElement("div",{className:"rounded-xl border border-[#d7dbea] bg-white px-3 py-3"},a.createElement("div",{className:"flex items-center gap-2.5"},a.createElement(rn,{size:16,fill:"#008b78",className:"shrink-0 text-white"}),a.createElement("div",{className:"min-w-0 flex-1"},a.createElement("p",{className:"text-xs text-[#4d5568]"},"Connected Account"),a.createElement("p",{className:"mt-0.5 truncate text-xs font-bold text-[#252b3a]"},"alex.rivera@example.com")),a.createElement("button",{type:"button",className:"text-xs font-bold text-[#4437d9] hover:text-[#3428c4]"},"Switch"))),a.createElement("div",{className:"mt-3 rounded-xl border border-[#dce0f1] bg-[#f8f8ff] px-3 py-3"},a.createElement("div",{className:"flex items-start gap-2"},a.createElement(v1,{size:15,className:"mt-0.5 shrink-0 text-[#5146e5]"}),a.createElement("p",{className:"text-xs leading-5 text-[#596174]"},"You will be securely billed through your pre-authorized PayPal balance or linked funding source. No sensitive card numbers are stored on our servers."))),a.createElement("div",{className:"mt-3 flex items-start gap-2"},a.createElement(No,{size:15,className:"mt-0.5 shrink-0 text-[#008b78]"}),a.createElement("p",{className:"text-xs leading-5 text-[#007d70]"},"Eligible for PayPal Buyer Protection • Instant activation")))}const ov={cardNumber:"",expiry:"",cvc:"",name:"",address:"",city:"",zip:""};function lv({onComplete:e,processing:t=!1,method:n,setMethod:r}){const[o,l]=k.useState(ov),[i,s]=k.useState("");function c(h,x){l(b=>({...b,[h]:x})),i&&s("")}function u(h){r(h),s("")}function p(h){if(h.preventDefault(),n==="card"&&Object.values(o).some(x=>!x.trim())){s("Complete every billing and card field to continue.");return}e({method:n,form:o})}return a.createElement("form",{id:"payment-form",onSubmit:p,className:"w-full space-y-4"},a.createElement("div",{className:"w-full rounded-2xl border border-[#dfe3f1] bg-white p-6"},a.createElement("fieldset",null,a.createElement("legend",{className:"text-sm font-medium text-[#252b3a]"},"Payment Method"),a.createElement("div",{className:"mt-4 grid grid-cols-3 gap-3"},a.createElement("button",{type:"button",onClick:()=>u("card"),"aria-label":"Pay with Card",className:`flex h-11 items-center justify-center gap-2 rounded-xl border text-sm font-medium transition ${n==="card"?"border-[#4b3ff0] bg-white text-[#252b3a] shadow-[0_0_0_1px_#4b3ff0]":"border-[#dfe3ee] bg-white text-[#252b3a] hover:border-[#bfc4d7]"}`},a.createElement(Un,{size:16,strokeWidth:2}),a.createElement("span",null,"Card")),a.createElement("button",{type:"button",onClick:()=>u("paypal"),"aria-label":"Pay with PayPal",className:`flex h-11 items-center justify-center gap-2 rounded-xl border text-sm font-medium transition ${n==="paypal"?"border-[#4b3ff0] bg-[#f8f7ff] text-[#3026c9] shadow-[0_0_0_1px_#4b3ff0]":"border-[#dfe3ee] bg-white text-[#252b3a] hover:border-[#bfc4d7]"}`},a.createElement(fs,{size:16,strokeWidth:2}),a.createElement("span",null,"PayPal")),a.createElement("button",{type:"button",onClick:()=>u("apple"),"aria-label":"Pay with Apple Pay",className:`flex h-11 items-center justify-center gap-2 rounded-xl border text-sm font-medium transition ${n==="apple"?"border-[#4b3ff0] bg-[#f8f7ff] text-[#3026c9] shadow-[0_0_0_1px_#4b3ff0]":"border-[#dfe3ee] bg-white text-[#252b3a] hover:border-[#bfc4d7]"}`},a.createElement(ms,{size:16}),a.createElement("span",null,"Apple Pay")))),n==="card"&&a.createElement(rv,{form:o,onChange:c}),n==="paypal"&&a.createElement(av,null),n==="apple"&&a.createElement(nv,null)),a.createElement("div",{className:"w-full rounded-2xl border border-[#dfe3f1] bg-white p-6"},a.createElement("h3",{className:"text-sm font-medium text-[#252b3a]"},"Billing Address"),a.createElement("div",{className:"mt-5 space-y-5"},a.createElement("label",{className:"block"},a.createElement("span",{className:"text-xs font-medium uppercase tracking-wide text-[#565d70]"},"Address"),a.createElement("input",{type:"text",value:o.address,onChange:h=>c("address",h.target.value),autoComplete:"street-address",placeholder:"123 Main St",className:"mt-2 h-12 w-full rounded-xl border border-[#d5d9e7] bg-[#f9f9fd] px-4 text-sm text-[#252b3a] outline-none transition placeholder:text-[#858c9e] focus:border-[#5146e5] focus:bg-white focus:ring-2 focus:ring-[#eeecff]"})),a.createElement("div",{className:"grid grid-cols-2 gap-4"},a.createElement("label",{className:"block"},a.createElement("span",{className:"text-xs font-medium uppercase tracking-wide text-[#565d70]"},"City"),a.createElement("input",{type:"text",value:o.city,onChange:h=>c("city",h.target.value),autoComplete:"address-level2",placeholder:"San Francisco",className:"mt-2 h-12 w-full rounded-xl border border-[#d5d9e7] bg-[#f9f9fd] px-4 text-sm text-[#252b3a] outline-none transition placeholder:text-[#858c9e] focus:border-[#5146e5] focus:bg-white focus:ring-2 focus:ring-[#eeecff]"})),a.createElement("label",{className:"block"},a.createElement("span",{className:"text-xs font-medium uppercase tracking-wide text-[#565d70]"},"ZIP Code"),a.createElement("input",{type:"text",value:o.zip,onChange:h=>c("zip",h.target.value),inputMode:"numeric",autoComplete:"postal-code",placeholder:"94105",className:"mt-2 h-12 w-full rounded-xl border border-[#d5d9e7] bg-[#f9f9fd] px-4 text-sm text-[#252b3a] outline-none transition placeholder:text-[#858c9e] focus:border-[#5146e5] focus:bg-white focus:ring-2 focus:ring-[#eeecff]"}))))),i&&a.createElement("p",{role:"alert",className:"rounded-xl border border-[#f3c7cf] bg-[#fff5f6] px-4 py-3 text-sm font-medium text-[#c2415b]"},i),a.createElement("button",{type:"submit",disabled:t,className:"sr-only","aria-hidden":"true",tabIndex:-1},"Complete Payment"))}function iv(){const e=ve(),{state:t}=Ce(),n=(t==null?void 0:t.billing)==="annual"?"annual":"monthly",r=n==="annual"?"$7.99":"$9.99",[o,l]=k.useState(!1),[i,s]=k.useState(""),[c,u]=k.useState("card");function p(){const x=document.getElementById("payment-form");x&&x.requestSubmit()}function h({method:x}){o||(s(""),l(!0),window.setTimeout(()=>{try{const b=`MTK-${Date.now().toString().slice(-8)}`;localStorage.setItem("meateka_last_order",JSON.stringify({orderNumber:b,billing:n,total:eu(n)})),e("/confirmation",{replace:!0,state:{orderNumber:b,billing:n,paymentMethod:x,price:r,total:eu(n)}})}catch{s("We could not complete the upgrade. Please try again."),l(!1)}},900))}return a.createElement(Ye,{title:"Payment",description:"Securely complete your Meateka Pro upgrade.",showBack:!0,backTo:"/checkout"},a.createElement("div",{className:"mx-auto max-w-5xl"},a.createElement(ps,{current:1}),a.createElement("div",{className:"mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]"},a.createElement("div",{className:"rounded-2xl border border-[#e0e3f0] bg-white p-6 sm:p-8"},a.createElement(lv,{onComplete:h,processing:o,method:c,setMethod:u}),i&&a.createElement("p",{role:"alert",className:"mt-4 rounded-lg bg-[#fff0f1] px-3 py-2 text-sm font-medium text-[#c2415b]"},i)),a.createElement(tv,{billing:n,method:c,processing:o,onSubmit:p}))))}function sv({orderNumber:e,total:t,billing:n,onDashboard:r,onDownload:o}){return a.createElement("div",{className:"mx-auto max-w-2xl rounded-3xl border border-[#e0e3f0] bg-white p-7 text-center shadow-[0_18px_45px_rgba(60,60,120,0.07)] sm:p-10"},a.createElement("span",{className:"mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e5f8f1] text-[#16a57d]"},a.createElement(rn,{size:34})),a.createElement("p",{className:"mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#16a57d]"},"Payment Successful"),a.createElement("h1",{className:"mt-3 text-3xl font-extrabold tracking-tight text-[#172033]"},"Pro Plan"),a.createElement("p",{className:"mx-auto mt-3 max-w-md text-sm leading-6 text-[#64748b]"},"Your Meateka workspace is ready with unlimited content intelligence and deeper growth insights."),a.createElement("div",{className:"mt-8 grid gap-3 text-left sm:grid-cols-2"},a.createElement("div",{className:"rounded-xl bg-[#f7f8fc] p-4"},a.createElement("p",{className:"text-[10px] font-bold uppercase tracking-[0.14em] text-[#71809c]"},"Billing"),a.createElement("p",{className:"mt-1 text-sm font-bold capitalize text-[#172033]"},n)),a.createElement("div",{className:"rounded-xl bg-[#f7f8fc] p-4"},a.createElement("p",{className:"text-[10px] font-bold uppercase tracking-[0.14em] text-[#71809c]"},"Payment Method"),a.createElement("p",{className:"mt-1 text-sm font-bold text-[#172033]"},"Secure checkout")),a.createElement("div",{className:"rounded-xl bg-[#f7f8fc] p-4"},a.createElement("p",{className:"text-[10px] font-bold uppercase tracking-[0.14em] text-[#71809c]"},"Total"),a.createElement("p",{className:"mt-1 text-sm font-bold text-[#172033]"},"$",t.toFixed(2))),a.createElement("div",{className:"rounded-xl bg-[#f7f8fc] p-4"},a.createElement("p",{className:"text-[10px] font-bold uppercase tracking-[0.14em] text-[#71809c]"},"Order number"),a.createElement("p",{className:"mt-1 text-sm font-bold text-[#172033]"},e))),a.createElement("div",{className:"mt-7 flex items-center justify-center gap-2 text-xs text-[#71809c]"},a.createElement(No,{size:14,className:"text-[#5146e5]"}),"Confirmation notification sent to your account email."),a.createElement("div",{className:"mt-8 flex flex-col justify-center gap-3 sm:flex-row"},a.createElement("button",{type:"button",onClick:r,className:"inline-flex items-center justify-center gap-2 rounded-xl bg-[#5146e5] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#4539d0]"},"Go to Dashboard ",a.createElement(nn,{size:16})),a.createElement("button",{type:"button",onClick:o,className:"inline-flex items-center justify-center gap-2 rounded-xl border border-[#dfe2ee] px-5 py-3 text-sm font-bold text-[#334155] transition hover:bg-[#f8f9ff]"},a.createElement(h1,{size:16}),"Download Receipt")),a.createElement("p",{className:"mt-5 inline-flex items-center gap-2 text-xs text-[#94a0b8]"},a.createElement(ko,{size:13}),"Email simulation complete"))}function cv(){const e=ve(),{state:t}=Ce();let n=t;if(!n)try{n=JSON.parse(localStorage.getItem("meateka_last_order")||"null")}catch{n=null}const r=(n==null?void 0:n.orderNumber)||"MTK-PENDING",o=(n==null?void 0:n.billing)==="annual"?"annual":"monthly",l=Number((n==null?void 0:n.total)||31.32);function i(){const s=`Meateka Pro receipt
Order: ${r}
Plan: Pro (${o})
Total: $${l.toFixed(2)}`,c=document.createElement("a");c.href=URL.createObjectURL(new Blob([s],{type:"text/plain"})),c.download=`${r}-receipt.txt`,c.click(),URL.revokeObjectURL(c.href)}return a.createElement(Ye,{title:"Confirmation",description:"Your subscription details and receipt are ready.",showBack:!0,backTo:"/payment"},a.createElement("div",{className:"mx-auto max-w-4xl"},a.createElement(ps,{current:2}),a.createElement("div",{className:"mt-12"},a.createElement(sv,{orderNumber:r,total:l,billing:o,onDashboard:()=>e("/dashboard"),onDownload:i}))))}function uv({name:e,avatar:t,onChange:n}){const r=k.useRef(null),o=(e==null?void 0:e.split(" ").map(i=>i[0]).join("").slice(0,2).toUpperCase())||"U";function l(i){var u;const s=(u=i.target.files)==null?void 0:u[0];if(!s||!s.type.startsWith("image/")||s.size>2*1024*1024)return;const c=new FileReader;c.onload=()=>n(c.result),c.readAsDataURL(s)}return a.createElement("div",{className:"flex flex-col items-center sm:items-start"},a.createElement("div",{className:"relative"},a.createElement("div",{className:"flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-[#f0edff] bg-[#eeecff] text-2xl font-extrabold text-[#5146e5] shadow-sm"},t?a.createElement("img",{src:t,alt:`${e} avatar`,className:"h-full w-full object-cover"}):o),a.createElement("button",{type:"button",onClick:()=>{var i;return(i=r.current)==null?void 0:i.click()},"aria-label":"Change avatar",className:"absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-[#5146e5] text-white transition hover:bg-[#4539d0]"},a.createElement(u1,{size:15}))),a.createElement("input",{ref:r,type:"file",accept:"image/png,image/jpeg,image/webp",onChange:l,className:"sr-only"}),a.createElement("button",{type:"button",onClick:()=>{var i;return(i=r.current)==null?void 0:i.click()},className:"mt-3 text-xs font-bold text-[#5146e5] hover:underline"},"Change Avatar"),a.createElement("p",{className:"mt-1 text-[10px] text-[#94a0b8]"},"PNG, JPG up to 2MB"))}function dv({values:e,errors:t,onChange:n}){return a.createElement("div",{className:"grid gap-5 sm:grid-cols-2"},a.createElement("label",{className:"text-xs font-bold text-[#334155]"},"First Name",a.createElement("input",{value:e.firstName,onChange:r=>n("firstName",r.target.value),placeholder:"Jane",className:"mt-2 h-11 w-full rounded-xl border border-[#dfe2ee] px-3 text-sm font-normal text-[#172033] outline-none transition focus:border-[#5146e5] focus:ring-4 focus:ring-[#eeecff]"}),t.firstName&&a.createElement("span",{className:"mt-1 block text-[11px] font-medium text-[#c2415b]"},t.firstName)),a.createElement("label",{className:"text-xs font-bold text-[#334155]"},"Last Name",a.createElement("input",{value:e.lastName,onChange:r=>n("lastName",r.target.value),placeholder:"Doe",className:"mt-2 h-11 w-full rounded-xl border border-[#dfe2ee] px-3 text-sm font-normal text-[#172033] outline-none transition focus:border-[#5146e5] focus:ring-4 focus:ring-[#eeecff]"}),t.lastName&&a.createElement("span",{className:"mt-1 block text-[11px] font-medium text-[#c2415b]"},t.lastName)),a.createElement("label",{className:"text-xs font-bold text-[#334155] sm:col-span-2"},"Email Address",a.createElement("input",{value:e.email,onChange:r=>n("email",r.target.value),type:"email",placeholder:"jane.doe@example.com",className:"mt-2 h-11 w-full rounded-xl border border-[#dfe2ee] px-3 text-sm font-normal text-[#172033] outline-none transition focus:border-[#5146e5] focus:ring-4 focus:ring-[#eeecff]"}),t.email&&a.createElement("span",{className:"mt-1 block text-[11px] font-medium text-[#c2415b]"},t.email)),a.createElement("label",{className:"text-xs font-bold text-[#334155] sm:col-span-2"},"Bio",a.createElement("textarea",{value:e.bio,onChange:r=>n("bio",r.target.value),placeholder:"Digital creator focusing on tech and productivity.",rows:4,className:"mt-2 w-full resize-y rounded-xl border border-[#dfe2ee] px-3 py-3 text-sm font-normal leading-6 text-[#172033] outline-none transition focus:border-[#5146e5] focus:ring-4 focus:ring-[#eeecff]"})))}function fv({enabled:e,onChange:t}){return a.createElement("button",{type:"button",role:"switch","aria-checked":e,onClick:()=>t(!e),className:`relative h-7 w-12 shrink-0 rounded-full transition-colors ${e?"bg-[#5146e5]":"bg-[#d9ddeb]"}`},a.createElement("span",{className:`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${e?"translate-x-6":"translate-x-1"}`},e&&a.createElement($n,{size:12,className:"mx-auto mt-1 text-[#5146e5]"})))}function mv({twoFactorEnabled:e,onToggleTwoFactor:t,onUpdatePassword:n}){return a.createElement("section",{className:"rounded-2xl border border-[#e0e3f0] bg-white"},a.createElement("div",{className:"border-b border-[#edf0f6] px-6 py-5"},a.createElement("h2",{className:"text-base font-extrabold text-[#172033]"},"Security"),a.createElement("p",{className:"mt-1 text-xs text-[#71809c]"},"Protect your account and manage sign-in preferences.")),a.createElement("div",{className:"divide-y divide-[#edf0f6]"},a.createElement("div",{className:"flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"},a.createElement("div",{className:"flex items-start gap-3"},a.createElement("span",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eeecff] text-[#5146e5]"},a.createElement(x1,{size:17})),a.createElement("div",null,a.createElement("h3",{className:"text-sm font-bold text-[#334155]"},"Password"),a.createElement("p",{className:"mt-1 text-xs text-[#71809c]"},"Last changed 3 months ago"))),a.createElement("button",{type:"button",onClick:n,className:"w-fit rounded-xl border border-[#dfe2ee] px-4 py-2.5 text-xs font-bold text-[#5146e5] transition hover:bg-[#f8f9ff]"},"Update Password")),a.createElement("div",{className:"flex items-center justify-between gap-4 px-6 py-5"},a.createElement("div",{className:"flex items-start gap-3"},a.createElement("span",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#e5f8f1] text-[#16a57d]"},a.createElement(No,{size:17})),a.createElement("div",null,a.createElement("div",{className:"flex flex-wrap items-center gap-2"},a.createElement("h3",{className:"text-sm font-bold text-[#334155]"},"Two-Factor Authentication"),a.createElement("span",{className:"rounded-full bg-[#e5f8f1] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-[#138a6a]"},"Recommended")),a.createElement("p",{className:"mt-1 text-xs text-[#71809c]"},"Add an extra layer of security to your account."))),a.createElement(fv,{enabled:e,onChange:t}))))}function pv({onClose:e,onSuccess:t}){const[n,r]=k.useState({current:"",next:"",confirm:""}),[o,l]=k.useState("");function i(c,u){r(p=>({...p,[c]:u})),l("")}function s(c){if(c.preventDefault(),!n.current||!n.next||!n.confirm)return l("Complete all password fields.");if(n.next.length<8)return l("New password must be at least 8 characters.");if(n.next!==n.confirm)return l("New password and confirmation must match.");t()}return a.createElement("div",{className:"fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/45 px-4 py-6",role:"presentation"},a.createElement("div",{role:"dialog","aria-modal":"true","aria-labelledby":"password-title",className:"w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"},a.createElement("div",{className:"flex items-start justify-between"},a.createElement("div",null,a.createElement("h2",{id:"password-title",className:"text-xl font-extrabold text-[#172033]"},"Update Password"),a.createElement("p",{className:"mt-1 text-sm text-[#71809c]"},"Choose a secure password for your account.")),a.createElement("button",{type:"button","aria-label":"Close password modal",onClick:e,className:"rounded-lg p-2 text-[#71809c] hover:bg-[#f4f5fa]"},a.createElement(hm,{size:18}))),a.createElement("form",{onSubmit:s,className:"mt-6 space-y-4"},[["current","Current password"],["next","New password"],["confirm","Confirm password"]].map(([c,u])=>a.createElement("label",{key:c,className:"block text-xs font-bold text-[#334155]"},u,a.createElement("input",{type:"password",value:n[c],onChange:p=>i(c,p.target.value),className:"mt-2 h-11 w-full rounded-xl border border-[#dfe2ee] px-3 text-sm font-normal outline-none focus:border-[#5146e5] focus:ring-4 focus:ring-[#eeecff]"}))),o&&a.createElement("p",{role:"alert",className:"rounded-lg bg-[#fff0f1] px-3 py-2 text-xs font-medium text-[#c2415b]"},o),a.createElement("div",{className:"flex justify-end gap-3 pt-2"},a.createElement("button",{type:"button",onClick:e,className:"rounded-xl border border-[#dfe2ee] px-4 py-2.5 text-sm font-bold text-[#64748b]"},"Cancel"),a.createElement("button",{type:"submit",className:"rounded-xl bg-[#5146e5] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#4539d0]"},"Update Password")))))}function hv({user:e,onProfileSave:t,onSecuritySave:n}){var S,C;const[r,o]=k.useState({firstName:(e==null?void 0:e.firstName)||((S=e==null?void 0:e.name)==null?void 0:S.split(" ")[0])||"",lastName:(e==null?void 0:e.lastName)||((C=e==null?void 0:e.name)==null?void 0:C.split(" ").slice(1).join(" "))||"",email:(e==null?void 0:e.email)||"",bio:(e==null?void 0:e.bio)||""}),[l,i]=k.useState((e==null?void 0:e.avatar)||""),[s,c]=k.useState(!!(e!=null&&e.twoFactorEnabled)),[u,p]=k.useState({}),[h,x]=k.useState(""),[b,f]=k.useState(!1);k.useEffect(()=>{var y,N;o({firstName:(e==null?void 0:e.firstName)||((y=e==null?void 0:e.name)==null?void 0:y.split(" ")[0])||"",lastName:(e==null?void 0:e.lastName)||((N=e==null?void 0:e.name)==null?void 0:N.split(" ").slice(1).join(" "))||"",email:(e==null?void 0:e.email)||"",bio:(e==null?void 0:e.bio)||""}),i((e==null?void 0:e.avatar)||""),c(!!(e!=null&&e.twoFactorEnabled))},[e]);function m(y,N){o(z=>({...z,[y]:N})),p(z=>({...z,[y]:""})),x("")}function E(){const y={};return r.firstName.trim()||(y.firstName="First name is required."),r.lastName.trim()||(y.lastName="Last name is required."),/^\S+@\S+\.\S+$/.test(r.email)||(y.email="Enter a valid email address."),p(y),Object.keys(y).length===0}function g(y){y.preventDefault(),E()&&(t({...r,avatar:l}),x("Profile changes saved successfully."))}function d(y){i(y),t({avatar:y}),x("Profile image updated successfully.")}function v(y){c(y),n({twoFactorEnabled:y}),x(`Two-factor authentication ${y?"enabled":"disabled"}.`)}function w(){f(!1),x("Password updated successfully.")}return a.createElement("div",{className:"space-y-6"},a.createElement("form",{onSubmit:g,className:"rounded-2xl border border-[#e0e3f0] bg-white"},a.createElement("div",{className:"border-b border-[#edf0f6] px-6 py-5"},a.createElement("h2",{className:"text-base font-extrabold text-[#172033]"},"Profile information"),a.createElement("p",{className:"mt-1 text-xs text-[#71809c]"},"Update your personal details and public creator profile.")),a.createElement("div",{className:"grid gap-8 px-6 py-6 lg:grid-cols-[160px_1fr]"},a.createElement(uv,{name:`${r.firstName} ${r.lastName}`,avatar:l,onChange:d}),a.createElement(dv,{values:r,errors:u,onChange:m})),a.createElement("div",{className:"flex justify-end border-t border-[#edf0f6] px-6 py-4"},a.createElement("button",{type:"submit",className:"inline-flex items-center gap-2 rounded-xl bg-[#5146e5] px-5 py-3 text-sm font-bold text-white shadow-[0_8px_18px_rgba(81,70,229,0.18)] transition hover:bg-[#4539d0]"},a.createElement(P1,{size:16}),"Save Changes"))),a.createElement(mv,{twoFactorEnabled:s,onToggleTwoFactor:v,onUpdatePassword:()=>f(!0)}),h&&a.createElement("p",{role:"status",className:"flex items-center gap-2 rounded-xl border border-[#c9eddf] bg-[#effbf6] px-4 py-3 text-sm font-semibold text-[#138a6a]"},a.createElement(rn,{size:17}),h),b&&a.createElement(pv,{onClose:()=>f(!1),onSuccess:w}))}function tu(){const{user:e,updateProfile:t,updateSecurity:n}=nt();return a.createElement(Ye,{title:"Settings",description:"Manage your account preferences and security."},a.createElement(hv,{user:e,onProfileSave:t,onSecuritySave:n}))}function J({children:e}){const{isAuthenticated:t}=nt(),n=Ce();return t?e:a.createElement(ls,{to:"/login",replace:!0,state:{from:n}})}const gv=[{id:1,title:"Your content plan is ready",detail:"Review your latest recommendations.",unread:!0},{id:2,title:"Welcome to Meateka",detail:"Your creator workspace is set up.",unread:!1}];function vv(){const[e,t]=k.useState(!1),[n,r]=k.useState(gv),o=n.some(i=>i.unread);function l(){r(i=>i.map(s=>({...s,unread:!1})))}return a.createElement("div",{className:"relative"},a.createElement("button",{type:"button","aria-label":"Notifications","aria-expanded":e,onClick:()=>t(i=>!i),className:"relative flex h-9 w-9 items-center justify-center rounded-lg text-[#64748b] transition hover:bg-[#f1f2ff] hover:text-[#5146e5]"},a.createElement(i1,{size:18,strokeWidth:1.8}),o&&a.createElement("span",{"aria-label":"Unread notifications",className:"absolute right-2 top-1.5 h-2 w-2 rounded-full bg-[#ef6685] ring-2 ring-white"})),e&&a.createElement("div",{className:"absolute right-0 top-11 z-50 w-80 rounded-2xl border border-[#e4e7f1] bg-white p-3 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"},a.createElement("div",{className:"flex items-center justify-between border-b border-[#edf0f6] px-2 pb-3"},a.createElement("h2",{className:"text-sm font-extrabold text-[#172033]"},"Notifications"),a.createElement("button",{type:"button",onClick:l,className:"inline-flex items-center gap-1 text-[11px] font-bold text-[#5146e5] hover:underline"},a.createElement($n,{size:13}),"Mark all read")),a.createElement("div",{className:"divide-y divide-[#edf0f6]"},n.map(i=>a.createElement("div",{key:i.id,className:"flex gap-3 px-2 py-3"},a.createElement("span",{className:`mt-1 h-2 w-2 shrink-0 rounded-full ${i.unread?"bg-[#ef6685]":"bg-transparent"}`}),a.createElement("div",null,a.createElement("p",{className:"text-xs font-bold text-[#26324a]"},i.title),a.createElement("p",{className:"mt-1 text-[11px] leading-5 text-[#71809c]"},i.detail)))))))}function xv(){const e=ve();return a.createElement("button",{type:"button","aria-label":"Settings",onClick:()=>e("/settings"),className:"flex h-9 w-9 items-center justify-center rounded-lg text-[#64748b] transition hover:bg-[#f1f2ff] hover:text-[#5146e5]"},a.createElement(cs,{size:18,strokeWidth:1.8}))}function yv({user:e,onClick:t,isOpen:n}){const r=(e==null?void 0:e.name)||"User",o=r.split(" ").map(l=>l[0]).join("").slice(0,2).toUpperCase();return a.createElement("button",{type:"button","aria-label":"Open profile menu","aria-expanded":n,onClick:t,className:"flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-[#eeecff] text-xs font-extrabold text-[#5146e5] shadow-[0_0_0_1px_#dfe2ee] transition hover:shadow-[0_0_0_2px_#c9c5ff]"},e!=null&&e.avatar?a.createElement("img",{src:e.avatar,alt:`${r} avatar`,className:"h-full w-full object-cover"}):o||a.createElement(ds,{size:17}))}function bv({user:e,onClose:t}){const n=ve(),{signOut:r}=nt();function o(){r(),t(),n("/login",{replace:!0})}return a.createElement("div",{className:"absolute right-0 top-11 z-50 w-56 rounded-2xl border border-[#e4e7f1] bg-white p-2 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"},a.createElement("div",{className:"border-b border-[#edf0f6] px-3 py-2"},a.createElement("p",{className:"truncate text-xs font-extrabold text-[#172033]"},(e==null?void 0:e.name)||"User"),a.createElement("p",{className:"truncate text-[11px] text-[#71809c]"},e==null?void 0:e.email)),a.createElement("nav",{className:"pt-1","aria-label":"Account menu"},a.createElement(U,{to:"/profile",onClick:t,className:"flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-[#475569] transition hover:bg-[#f5f6ff] hover:text-[#5146e5]"},a.createElement(ds,{size:15}),"Profile"),a.createElement(U,{to:"/settings",onClick:t,className:"flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-[#475569] transition hover:bg-[#f5f6ff] hover:text-[#5146e5]"},a.createElement(cs,{size:15}),"Settings"),a.createElement(U,{to:"/pricing",onClick:t,className:"flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-[#475569] transition hover:bg-[#f5f6ff] hover:text-[#5146e5]"},a.createElement(Un,{size:15}),"Subscription"),a.createElement("button",{type:"button",onClick:o,className:"flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-semibold text-[#475569] transition hover:bg-[#fff1f3] hover:text-[#c2415b]"},a.createElement(Yf,{size:15}),"Logout")))}const ha=[["Home","home"],["Features","features"],["Pricing","pricing"],["About Us","about"]];function Ev(){const{isAuthenticated:e,signOut:t,user:n}=nt(),r=ve(),o=Ce(),[l,i]=k.useState("home"),[s,c]=k.useState(!1),[u,p]=k.useState(!1);k.useEffect(()=>{const f=o.hash.replace("#",""),m=ha.some(([,d])=>d===f)?f:"home";if(i(m),o.pathname!=="/")return;const E=ha.map(([,d])=>document.getElementById(d)).filter(Boolean);function g(){const d=window.scrollY+96,v=E.reduce((w,S)=>S.offsetTop<=d?S:w,E[0]);v&&i(v.id)}return g(),window.addEventListener("scroll",g,{passive:!0}),window.addEventListener("resize",g),()=>{window.removeEventListener("scroll",g),window.removeEventListener("resize",g)}},[o.hash,o.pathname]);function h(f,m){var E;if(f.preventDefault(),c(!1),o.pathname!=="/"){r(`/#${m}`);return}r(`/#${m}`,{replace:!0}),i(m),(E=document.getElementById(m))==null||E.scrollIntoView({behavior:"smooth",block:"start"})}function x(){t(),r("/login",{replace:!0})}function b(f){f.preventDefault(),r("/create-content",{state:{resetCreateContent:!0}})}return e?a.createElement("header",{className:"fixed inset-x-0 top-0 z-40 border-b border-[#e7e5f1]/90 bg-[#fbfaff]/95 backdrop-blur-md"},a.createElement("div",{className:"flex min-h-[72px] items-center justify-between px-4 sm:px-8"},a.createElement(U,{to:"/create-content",onClick:b,className:"text-xl font-extrabold tracking-[-0.04em] text-[#6d5ce7]"},"Meateka"),a.createElement("div",{className:"flex items-center gap-1.5"},a.createElement(vv,null),a.createElement(xv,null),a.createElement("div",{className:"relative ml-1"},a.createElement(yv,{user:n,isOpen:u,onClick:()=>p(f=>!f)}),u&&a.createElement(bv,{user:n,onClose:()=>p(!1)}))))):a.createElement("header",{className:"fixed inset-x-0 top-0 z-50 border-b border-[#e7e5f1]/90 bg-[#fbfaff]/95 backdrop-blur-md"},a.createElement("div",{className:"mx-auto flex min-h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8"},a.createElement(U,{to:"/create-content",onClick:b,className:"text-2xl font-extrabold tracking-[-0.04em] text-[#6d5ce7]"},"Meateka"),a.createElement("nav",{className:"hidden items-center gap-1 lg:flex","aria-label":"Primary navigation"},ha.map(([f,m])=>a.createElement("a",{key:m,href:`/#${m}`,onClick:E=>h(E,m),className:`relative px-4 py-6 text-sm font-semibold transition-colors duration-200 ${l===m?"text-[#6d5ce7]":"text-slate-500 hover:text-[#6d5ce7]"}`},f,a.createElement("span",{"aria-hidden":"true",className:`absolute bottom-0 left-4 right-4 h-0.5 origin-center rounded-full bg-[#6d5ce7] transition-transform duration-200 ${l===m?"scale-x-100":"scale-x-0"}`})))),a.createElement("div",{className:"hidden items-center gap-5 lg:flex"},e?a.createElement(a.Fragment,null,a.createElement(U,{to:"/dashboard",className:"text-sm font-semibold text-[#6d5ce7]"},"Dashboard"),a.createElement("button",{type:"button",onClick:x,className:"rounded-xl bg-[#6d5ce7] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#5948d6]"},"Logout")):a.createElement(a.Fragment,null,a.createElement(U,{to:"/login",className:"text-sm font-semibold text-[#6d5ce7]"},"Log in"),a.createElement(U,{to:"/login",className:"rounded-xl bg-[#6d5ce7] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#5948d6]"},"Start Free Trial"))),a.createElement("button",{type:"button","aria-label":s?"Close menu":"Open menu",onClick:()=>c(f=>!f),className:"rounded-lg p-2 text-[#6d5ce7] lg:hidden"},s?a.createElement(hm,{size:22}):a.createElement(w1,{size:22}))),s&&a.createElement("div",{className:"border-t border-[#e7e5f1] bg-white px-5 py-3 lg:hidden"},a.createElement("nav",{className:"flex flex-col","aria-label":"Mobile navigation"},ha.map(([f,m])=>a.createElement("a",{key:m,href:`/#${m}`,onClick:E=>h(E,m),className:`relative border-b border-[#f0eff6] px-1 py-3 text-sm font-semibold transition-colors duration-200 last:border-0 ${l===m?"text-[#6d5ce7]":"text-slate-500 hover:text-[#6d5ce7]"}`},f,a.createElement("span",{"aria-hidden":"true",className:`absolute bottom-0 left-1 h-0.5 w-12 origin-left rounded-full bg-[#6d5ce7] transition-transform duration-200 ${l===m?"scale-x-100":"scale-x-0"}`}))),a.createElement("div",{className:"flex items-center gap-4 pt-4"},e?a.createElement(a.Fragment,null,a.createElement(U,{to:"/dashboard",onClick:()=>c(!1),className:"text-sm font-semibold text-[#6d5ce7]"},"Dashboard"),a.createElement("button",{type:"button",onClick:x,className:"rounded-xl bg-[#6d5ce7] px-4 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#5948d6]"},"Logout")):a.createElement(a.Fragment,null,a.createElement(U,{to:"/login",onClick:()=>c(!1),className:"text-sm font-semibold text-[#6d5ce7]"},"Log in"),a.createElement(U,{to:"/login",onClick:()=>c(!1),className:"rounded-xl bg-[#6d5ce7] px-4 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#5948d6]"},"Start Free Trial"))))))}function wv(){const{pathname:e}=Ce(),n=!(e==="/login"||e==="/signup"||e==="/register");return a.createElement(a.Fragment,null,n&&a.createElement(Ev,null),a.createElement(j0,null,a.createElement(F,{path:"/",element:a.createElement(L1,null)}),a.createElement(F,{path:"/features",element:a.createElement(A1,null)}),a.createElement(F,{path:"/solutions",element:a.createElement(ll,{title:"Solutions",description:"Explore content intelligence tools for every stage of your publishing workflow."})}),a.createElement(F,{path:"/case-studies",element:a.createElement(ll,{title:"Case Studies",description:"Customer stories and content strategy examples are coming soon."})}),a.createElement(F,{path:"/resources",element:a.createElement(J,null,a.createElement(Zg,null))}),a.createElement(F,{path:"/login",element:a.createElement(q1,null)}),a.createElement(F,{path:"/signup",element:a.createElement($c,null)}),a.createElement(F,{path:"/register",element:a.createElement($c,null)}),a.createElement(F,{path:"/dashboard",element:a.createElement(J,null,a.createElement(Uc,null))}),a.createElement(F,{path:"/plan/dashboard-data",element:a.createElement(J,null,a.createElement(Uc,null))}),a.createElement(F,{path:"/caption-hashtag",element:a.createElement(J,null,a.createElement(Qg,null))}),a.createElement(F,{path:"/content-ideas",element:a.createElement(J,null,a.createElement(Gc,null))}),a.createElement(F,{path:"/plan/saved-ideas",element:a.createElement(J,null,a.createElement(Gc,null))}),a.createElement(F,{path:"/content-type",element:a.createElement(J,null,a.createElement(ul,null))}),a.createElement(F,{path:"/plan/create-content",element:a.createElement(J,null,a.createElement(ul,null))}),a.createElement(F,{path:"/create-content",element:a.createElement(ul,null)}),a.createElement(F,{path:"/plan/my-content",element:a.createElement(J,null,a.createElement(Yc,null))}),a.createElement(F,{path:"/my-plans",element:a.createElement(J,null,a.createElement(Yc,null))}),a.createElement(F,{path:"/platform",element:a.createElement(J,null,a.createElement(Xc,null))}),a.createElement(F,{path:"/platform-comparison",element:a.createElement(J,null,a.createElement(Xc,null))}),a.createElement(F,{path:"/posting",element:a.createElement(J,null,a.createElement(Zc,null))}),a.createElement(F,{path:"/posting-time",element:a.createElement(J,null,a.createElement(Zc,null))}),a.createElement(F,{path:"/prediction",element:a.createElement(J,null,a.createElement(qg,null))}),a.createElement(F,{path:"/pricing",element:a.createElement(J,null,a.createElement(Jg,null))}),a.createElement(F,{path:"/checkout",element:a.createElement(J,null,a.createElement(ev,null))}),a.createElement(F,{path:"/payment",element:a.createElement(J,null,a.createElement(iv,null))}),a.createElement(F,{path:"/confirmation",element:a.createElement(J,null,a.createElement(cv,null))}),a.createElement(F,{path:"/profile",element:a.createElement(J,null,a.createElement(tu,null))}),a.createElement(F,{path:"/settings",element:a.createElement(J,null,a.createElement(tu,null))}),a.createElement(F,{path:"*",element:a.createElement(ll,{title:"Page Not Found",description:"The page you requested could not be found."})})))}function kv(){return a.createElement(Q1,null,a.createElement(H0,null,a.createElement(wv,null)))}dl.createRoot(document.getElementById("root")).render(a.createElement(a.StrictMode,null,a.createElement(kv,null)));
