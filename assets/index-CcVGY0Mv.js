var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var oe=/\/+/g;function se(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function ce(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function le(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,le(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+se(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(oe,`$&/`)+`/`),le(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(oe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+se(a,u),c+=le(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+se(a,u++),c+=le(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return le(ce(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ue(e,t,n){if(e==null)return e;var r=[],i=0;return le(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function de(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var w=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},T={map:ue,forEach:function(e,t,n){ue(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ue(e,function(){t++}),t},toArray:function(e){return ue(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=T,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:de}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,w)}catch(e){w(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,ie());else{var t=n(l);t!==null&&se(x,t.startTime-e)}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&se(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ie():ee=!1}}}var ie;if(typeof y==`function`)ie=function(){y(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=re,ie=function(){oe.postMessage(null)}}else ie=function(){_(re,0)};function se(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,se(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ie()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),ie=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),oe=Symbol.for(`react.memo_cache_sentinel`),se=Symbol.iterator;function ce(e){return typeof e!=`object`||!e?null:(e=se&&e[se]||e[`@@iterator`],typeof e==`function`?e:null)}var le=Symbol.for(`react.client.reference`);function ue(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ae:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?ue(e.type)||`Memo`:t;case ie:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}var de=Array.isArray,w=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},pe=[],me=-1;function he(e){return{current:e}}function ge(e){0>me||(e.current=pe[me],pe[me]=null,me--)}function E(e,t){me++,pe[me]=e.current,e.current=t}var _e=he(null),ve=he(null),ye=he(null),be=he(null);function xe(e,t){switch(E(ye,t),E(ve,e),E(_e,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ge(_e),E(_e,e)}function Se(){ge(_e),ge(ve),ge(ye)}function Ce(e){e.memoizedState!==null&&E(be,e);var t=_e.current,n=Hd(t,e.type);t!==n&&(E(ve,e),E(_e,n))}function we(e){ve.current===e&&(ge(_e),ge(ve)),be.current===e&&(ge(be),Qf._currentValue=fe)}var Te,Ee;function De(e){if(Te===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Te=t&&t[1]||``,Ee=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Te+e+Ee}var Oe=!1;function ke(e,t){if(!e||Oe)return``;Oe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Oe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?De(n):``}function D(e,t){switch(e.tag){case 26:case 27:case 5:return De(e.type);case 16:return De(`Lazy`);case 13:return e.child!==t&&t!==null?De(`Suspense Fallback`):De(`Suspense`);case 19:return De(`SuspenseList`);case 0:case 15:return ke(e.type,!1);case 11:return ke(e.type.render,!1);case 1:return ke(e.type,!0);case 31:return De(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=D(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,O=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,k=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,A=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(typeof Ve==`function`&&A(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Ke=Math.log,qe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ke(e)/qe|0)|0}var Ye=256,Xe=262144,Ze=4194304;function Qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $e(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Qe(n))):i=Qe(o):i=Qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Qe(n))):i=Qe(o)):i=Qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function et(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function rt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function it(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function at(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ge(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ot(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ot(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ge(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function st(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ct(e,t){var n=t&-t;return n=n&42?1:lt(n),(n&(e.suspendedLanes|t))===0?n:0}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ut(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function dt(){var e=T.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ft(e,t){var n=T.p;try{return T.p=e,t()}finally{T.p=n}}var pt=Math.random().toString(36).slice(2),mt=`__reactFiber$`+pt,ht=`__reactProps$`+pt,gt=`__reactContainer$`+pt,_t=`__reactEvents$`+pt,vt=`__reactListeners$`+pt,yt=`__reactHandles$`+pt,bt=`__reactResources$`+pt,xt=`__reactMarker$`+pt;function St(e){delete e[mt],delete e[ht],delete e[_t],delete e[vt],delete e[yt]}function Ct(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[mt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function wt(e){if(e=e[mt]||e[gt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Et(e){var t=e[bt];return t||=e[bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Dt(e){e[xt]=!0}var Ot=new Set,kt={};function At(e,t){jt(e,t),jt(e+`Capture`,t)}function jt(e,t){for(kt[e]=t,e=0;e<t.length;e++)Ot.add(t[e])}var Mt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Nt={},Pt={};function Ft(e){return je.call(Pt,e)?!0:je.call(Nt,e)?!1:Mt.test(e)?Pt[e]=!0:(Nt[e]=!0,!1)}function It(e,t,n){if(Ft(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Lt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Rt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function zt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Bt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Vt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ht(e){if(!e._valueTracker){var t=Bt(e)?`checked`:`value`;e._valueTracker=Vt(e,t,``+e[t])}}function Ut(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Bt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Wt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Gt=/[\n"\\]/g;function Kt(e){return e.replace(Gt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function qt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+zt(t)):e.value!==``+zt(t)&&(e.value=``+zt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Yt(e,o,zt(n)):Yt(e,o,zt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+zt(s):e.removeAttribute(`name`)}function Jt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Ht(e);return}n=n==null?``:``+zt(n),t=t==null?n:``+zt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Ht(e)}function Yt(e,t,n){t===`number`&&Wt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Xt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+zt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Zt(e,t,n){if(t!=null&&(t=``+zt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+zt(n)}function Qt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(de(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=zt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Ht(e)}function $t(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var en=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function tn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||en.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function nn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&tn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&tn(e,o,t[o])}function rn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var an=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),on=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sn(e){return on.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function cn(){}var ln=null;function un(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dn=null,fn=null;function pn(e){var t=wt(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;a:switch(e=t.stateNode,t.type){case`input`:if(qt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Kt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ht]||null;if(!a)throw Error(i(90));qt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ut(r)}break a;case`textarea`:Zt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Xt(e,!!n.multiple,t,!1)}}}var mn=!1;function hn(e,t,n){if(mn)return e(t,n);mn=!0;try{return e(t)}finally{if(mn=!1,(dn!==null||fn!==null)&&(bu(),dn&&(t=dn,e=fn,fn=dn=null,pn(t),e)))for(t=0;t<e.length;t++)pn(e[t])}}function gn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ht]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var _n=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),vn=!1;if(_n)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){vn=!0}}),window.addEventListener(`test`,yn,yn),window.removeEventListener(`test`,yn,yn)}catch{vn=!1}var bn=null,xn=null,Sn=null;function Cn(){if(Sn)return Sn;var e,t=xn,n=t.length,r,i=`value`in bn?bn.value:bn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Sn=i.slice(e,1<r?1-r:void 0)}function wn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function En(){return!1}function Dn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Tn:En,this.isPropagationStopped=En,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kn=Dn(On),An=h({},On,{view:0,detail:0}),jn=Dn(An),Mn,Nn,Pn,Fn=h({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Pn&&(Pn&&e.type===`mousemove`?(Mn=e.screenX-Pn.screenX,Nn=e.screenY-Pn.screenY):Nn=Mn=0,Pn=e),Mn)},movementY:function(e){return`movementY`in e?e.movementY:Nn}}),In=Dn(Fn),Ln=Dn(h({},Fn,{dataTransfer:0})),Rn=Dn(h({},An,{relatedTarget:0})),zn=Dn(h({},On,{animationName:0,elapsedTime:0,pseudoElement:0})),Bn=Dn(h({},On,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=Dn(h({},On,{data:0})),Hn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=Dn(h({},An,{key:function(e){if(e.key){var t=Hn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=wn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?wn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?wn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=Dn(h({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=Dn(h({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Xn=Dn(h({},On,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=Dn(h({},Fn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=Dn(h({},On,{newState:0,oldState:0})),$n=[9,13,27,32],er=_n&&`CompositionEvent`in window,tr=null;_n&&`documentMode`in document&&(tr=document.documentMode);var nr=_n&&`TextEvent`in window&&!tr,rr=_n&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Cn(),Sn=xn=bn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){dn?fn?fn.push(r):fn=[r]:dn=r,t=Ed(t,`onChange`),0<t.length&&(n=new kn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){yd(e,0)}function _r(e){if(Ut(Tt(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(_n){var br;if(_n){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,un(e)),hn(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Wt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Wt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=_n&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Wt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Ed(zr,`onSelect`),0<r.length&&(t=new kn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};_n&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),At(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&fi(n,i,a)}}function li(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ui(e,t,n,r){return li(e,t,n,r),pi(e)}function di(e,t){return li(e,null,null,t),pi(e)}function fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function pi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function hi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,t,n,r){return new hi(e,t,n,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vi(e,t){var n=e.alternate;return n===null?(n=gi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)_i(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,_e.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ae:return e=gi(31,n,t,a),e.elementType=ae,e.lanes=o,e;case y:return xi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=gi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=gi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=gi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case ie:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=gi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function xi(e,t,n,r){return e=gi(7,e,r,t),e.lanes=n,e}function Si(e,t,n){return e=gi(6,e,null,t),e.lanes=n,e}function Ci(e){var t=gi(18,null,null,0);return t.stateNode=e,t}function wi(e,t,n){return t=gi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ti=new WeakMap;function Ei(e,t){if(typeof e==`object`&&e){var n=Ti.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},Ti.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var Di=[],Oi=0,ki=null,Ai=0,ji=[],Mi=0,Ni=null,Pi=1,Fi=``;function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ki,ki=e,Ai=t}function Li(e,t,n){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Ni=e;var r=Pi;e=Fi;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pi=1<<32-Ge(t)+i|n<<i|r,Fi=a+e}else Pi=1<<a|n<<i|r,Fi=e}function Ri(e){e.return!==null&&(Ii(e,1),Li(e,1,0))}function zi(e){for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null;for(;e===Ni;)Ni=ji[--Mi],ji[Mi]=null,Fi=ji[--Mi],ji[Mi]=null,Pi=ji[--Mi],ji[Mi]=null}function Bi(e,t){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Pi=t.id,Fi=t.overflow,Ni=e}var Vi=null,j=null,M=!1,Hi=null,Ui=!1,Wi=Error(i(519));function Gi(e){throw Zi(Ei(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Wi}function Ki(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[mt]=e,t[ht]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Jt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Qt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=cn),t=!0):t=!1,t||Gi(e,!0)}function qi(e){for(Vi=e.return;Vi;)switch(Vi.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Vi=Vi.return}}function Ji(e){if(e!==Vi)return!1;if(!M)return qi(e),M=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&j&&Gi(e),qi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=uf(e)}else t===27?(t=j,Zd(e.type)?(e=lf,lf=null,j=e):j=t):j=Vi?cf(e.stateNode.nextSibling):null;return!0}function Yi(){j=Vi=null,M=!1}function Xi(){var e=Hi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Hi=null),e}function Zi(e){Hi===null?Hi=[e]:Hi.push(e)}var Qi=he(null),$i=null,ea=null;function ta(e,t,n){E(Qi,t._currentValue),t._currentValue=n}function na(e){e._currentValue=Qi.current,ge(Qi)}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ia(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ra(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ra(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function aa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ar(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===be.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ia(t,e,n,r),t.flags|=262144}function oa(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){$i=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ca(e){return ua($i,e)}function la(e,t){return $i===null&&sa(e),ua(e,t)}function ua(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error(i(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var da=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},fa=t.unstable_scheduleCallback,pa=t.unstable_NormalPriority,N={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ma(){return{controller:new da,data:new Map,refCount:0}}function ha(e){e.refCount--,e.refCount===0&&fa(pa,function(){e.controller.abort()})}var ga=null,_a=0,va=0,ya=null;function ba(e,t){if(ga===null){var n=ga=[];_a=0,va=dd(),ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return _a++,t.then(xa,xa),t}function xa(){if(--_a===0&&ga!==null){ya!==null&&(ya.status=`fulfilled`);var e=ga;ga=null,va=0,ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ca=w.S;w.S=function(e,t){tu=k(),typeof t==`object`&&t&&typeof t.then==`function`&&ba(e,t),Ca!==null&&Ca(e,t)};var wa=he(null);function Ta(){var e=wa.current;return e===null?G.pooledCache:e}function Ea(e,t){t===null?E(wa,wa.current):E(wa,t.pool)}function Da(){var e=Ta();return e===null?null:{parent:N._currentValue,pool:e}}var Oa=Error(i(460)),ka=Error(i(474)),Aa=Error(i(542)),ja={then:function(){}};function Ma(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Na(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(cn,cn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e;default:if(typeof t.status==`string`)t.then(cn,cn);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e}throw Fa=t,Oa}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Fa=e,Oa):e}}var Fa=null;function Ia(){if(Fa===null)throw Error(i(459));var e=Fa;return Fa=null,e}function La(e){if(e===Oa||e===Aa)throw Error(i(483))}var Ra=null,za=0;function Ba(e){var t=za;return za+=1,Ra===null&&(Ra=[]),Na(Ra,e,t)}function Va(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ha(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ua(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=vi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ie&&Pa(i)===t.type)?(t=a(t,n.props),Va(t,n),t.return=e,t):(t=bi(n.type,n.key,n.props,null,e.mode,r),Va(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=wi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=xi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=bi(t.type,t.key,t.props,null,e.mode,n),Va(n,t),n.return=e,n;case v:return t=wi(t,e.mode,n),t.return=e,t;case ie:return t=Pa(t),f(e,t,n)}if(de(t)||ce(t))return t=xi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ba(t),n);if(t.$$typeof===S)return f(e,la(e,t),n);Ha(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ie:return n=Pa(n),p(e,t,n,r)}if(de(n)||ce(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ba(n),r);if(n.$$typeof===S)return p(e,t,la(e,n),r);Ha(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ie:return r=Pa(r),m(e,t,n,r,i)}if(de(r)||ce(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ba(r),i);if(r.$$typeof===S)return m(e,t,n,la(t,r),i);Ha(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),M&&Ii(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return M&&Ii(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),M&&Ii(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),M&&Ii(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return M&&Ii(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),M&&Ii(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ie&&Pa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Va(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=xi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=bi(o.type,o.key,o.props,null,e.mode,c),Va(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=wi(o,e.mode,c),c.return=e,e=c}return s(e);case ie:return o=Pa(o),b(e,r,o,c)}if(de(o))return h(e,r,o,c);if(ce(o)){if(l=ce(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ba(o),c);if(o.$$typeof===S)return b(e,r,la(e,o),c);Ha(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Si(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{za=0;var i=b(e,t,n,r);return Ra=null,i}catch(t){if(t===Oa||t===Aa)throw t;var a=gi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Wa=Ua(!0),Ga=Ua(!1),Ka=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ja(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=pi(e),fi(e,null,n),t}return li(e,r,t,n),pi(e)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $a=!1;function eo(){if($a){var e=ya;if(e!==null)throw e}}function to(e,t,n,r){$a=!1;var i=e.updateQueue;Ka=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===va&&($a=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ka=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function no(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function ro(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)no(n[e],t)}var io=he(null),ao=he(0);function oo(e,t){e=Gl,E(ao,e),E(io,t),Gl=e|t.baseLanes}function so(){E(ao,Gl),E(io,io.current)}function co(){Gl=ao.current,ge(io),ge(ao)}var lo=he(null),uo=null;function fo(e){var t=e.alternate;E(P,P.current&1),E(lo,e),uo===null&&(t===null||io.current!==null||t.memoizedState!==null)&&(uo=e)}function po(e){E(P,P.current),E(lo,e),uo===null&&(uo=e)}function mo(e){e.tag===22?(E(P,P.current),E(lo,e),uo===null&&(uo=e)):ho(e)}function ho(){E(P,P.current),E(lo,lo.current)}function go(e){ge(lo),uo===e&&(uo=null),ge(P)}var P=he(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=0,F=null,I=null,L=null,yo=!1,bo=!1,xo=!1,So=0,Co=0,wo=null,To=0;function R(){throw Error(i(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return vo=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Us:Ws,xo=!1,a=n(r,i),xo=!1,bo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){w.H=Hs;var t=I!==null&&I.next!==null;if(vo=0,L=I=F=null,yo=!1,Co=0,wo=null,t)throw Error(i(300));e===null||B||(e=e.dependencies,e!==null&&oa(e)&&(B=!0))}function ko(e,t,n,r){F=e;var a=0;do{if(bo&&(wo=null),Co=0,bo=!1,25<=a)throw Error(i(301));if(a+=1,L=I=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}w.H=Gs,o=t(n,r)}while(bo);return o}function Ao(){var e=w.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(I===null?null:I.memoizedState)!==e&&(F.flags|=1024),t}function jo(){var e=So!==0;return So=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yo=!1}vo=0,L=I=F=null,bo=!1,Co=So=0,wo=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return L===null?F.memoizedState=L=e:L=L.next=e,L}function z(){if(I===null){var e=F.alternate;e=e===null?null:e.memoizedState}else e=I.next;var t=L===null?F.memoizedState:L.next;if(t!==null)L=t,I=e;else{if(e===null)throw F.alternate===null?Error(i(467)):Error(i(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},L===null?F.memoizedState=L=e:L=L.next=e}return L}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=Co;return Co+=1,wo===null&&(wo=[]),e=Na(wo,e,t),t=F,(L===null?t.memoizedState:L.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Us:Ws),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===S)return ca(e)}throw Error(i(438,String(e)))}function Ro(e){var t=null,n=F.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=F.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),F.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(z(),I,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(vo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===va&&(d=!0);else if((vo&p)===p){u=u.next,p===va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,F.lanes|=p,Kl|=p;f=u.action,xo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,F.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ar(o,e.memoizedState)&&(B=!0,d&&(n=ya,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=z(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ar(o,t.memoizedState)||(B=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Uo(e,t,n){var r=F,a=z(),o=M;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ar((I||a).memoizedState,n);if(s&&(a.memoizedState=n,B=!0),a=a.queue,ms(Ko.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||L!==null&&L.memoizedState.tag&1){if(r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),G===null)throw Error(i(349));o||vo&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t=Fo(),F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Jo(e){var t=di(e,2);t!==null&&hu(t,e,2)}function Yo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),xo){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,I,typeof r==`function`?r:zo)}function Zo(e,t,n,r,a){if(zs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};w.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=w.T,o={};w.T=o;try{var s=n(i,r),c=w.S;c!==null&&c(o,s),$o(e,t,s)}catch(n){ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),w.T=a}}else try{a=n(i,r),$o(e,t,a)}catch(n){ts(e,t,n)}}function $o(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){es(e,t,n)},function(n){return ts(e,t,n)}):es(e,t,n)}function es(e,t,n){t.status=`fulfilled`,t.value=n,ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ns(t),t=t.next;while(t!==r)}e.action=null}function ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rs(e,t){return t}function is(e,t){if(M){var n=G.formState;if(n!==null){a:{var r=F;if(M){if(j){b:{for(var i=j,a=Ui;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){j=cf(i.nextSibling),r=i.data===`F!`;break a}}Gi(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},n.queue=r,n=Is.bind(null,F,r),r.dispatch=n,r=Yo(!1),a=Rs.bind(null,F,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,F,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function as(e){return os(z(),I,e)}function os(e,t,n){if(t=Vo(e,t,rs)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Oa?Aa:e}else r=t;t=z();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(F.flags|=2048,ls(9,{destroy:void 0},ss.bind(null,i,n),null)),[r,a,e]}function ss(e,t){e.action=t}function cs(e){var t=z(),n=I;if(n!==null)return os(t,n,e);z(),t=t.memoizedState,n=z();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=F.updateQueue,t===null&&(t=Fo(),F.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function us(){return z().memoizedState}function ds(e,t,n,r){var i=Po();F.flags|=e,i.memoizedState=ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function fs(e,t,n,r){var i=z();r=r===void 0?null:r;var a=i.memoizedState.inst;I!==null&&r!==null&&Eo(r,I.memoizedState.deps)?i.memoizedState=ls(t,a,n,r):(F.flags|=e,i.memoizedState=ls(1|t,a,n,r))}function ps(e,t){ds(8390656,8,e,t)}function ms(e,t){fs(2048,8,e,t)}function hs(e){F.flags|=4;var t=F.updateQueue;if(t===null)t=Fo(),F.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function gs(e){var t=z().memoizedState;return hs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function _s(e,t){return fs(4,2,e,t)}function vs(e,t){return fs(4,4,e,t)}function ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bs(e,t,n){n=n==null?null:n.concat([e]),fs(4,4,ys.bind(null,t,e),n)}function xs(){}function Ss(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),xo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r}function ws(e,t,n){return n===void 0||vo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),F.lanes|=e,Kl|=e,n)}function Ts(e,t,n,r){return Ar(n,t)?n:io.current===null?!(vo&42)||vo&1073741824&&!(q&261930)?(B=!0,e.memoizedState=n):(e=mu(),F.lanes|=e,Kl|=e,t):(e=ws(e,n,r),Ar(e,t)||(B=!0),e)}function Es(e,t,n,r,i){var a=T.p;T.p=a!==0&&8>a?a:8;var o=w.T,s={};w.T=s,Rs(e,!1,t,n);try{var c=i(),l=w.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ls(e,t,Sa(c,r),pu(e)):Ls(e,t,r,pu(e))}catch(n){Ls(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{T.p=a,o!==null&&s.types!==null&&(o.types=s.types),w.T=o}}function Ds(){}function Os(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ks(e).queue;Es(e,a,t,fe,n===null?Ds:function(){return As(e),n(r)})}function ks(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:fe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function As(e){var t=ks(e);t.next===null&&(t=e.alternate.memoizedState),Ls(e,t.next.queue,{},pu())}function js(){return ca(Qf)}function Ms(){return z().memoizedState}function Ns(){return z().memoizedState}function Ps(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ya(n);var r=Xa(t,e,n);r!==null&&(hu(r,t,n),Za(r,t,n)),t={cache:ma()},e.payload=t;return}t=t.return}}function Fs(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e)?Bs(t,n):(n=ui(e,t,n,r),n!==null&&(hu(n,e,r),Vs(n,t,r)))}function Is(e,t,n){Ls(e,t,n,pu())}function Ls(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Bs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return li(e,t,i,0),G===null&&ci(),!1}catch{}if(n=ui(e,t,i,r),n!==null)return hu(n,e,r),Vs(n,t,r),!0}return!1}function Rs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(t)throw Error(i(479))}else t=ui(e,n,r,2),t!==null&&hu(t,e,2)}function zs(e){var t=e.alternate;return e===F||t!==null&&t===F}function Bs(e,t){bo=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}var Hs={readContext:ca,use:Lo,useCallback:R,useContext:R,useEffect:R,useImperativeHandle:R,useLayoutEffect:R,useInsertionEffect:R,useMemo:R,useReducer:R,useRef:R,useState:R,useDebugValue:R,useDeferredValue:R,useTransition:R,useSyncExternalStore:R,useId:R,useHostTransitionStatus:R,useFormState:R,useActionState:R,useOptimistic:R,useMemoCache:R,useCacheRefresh:R};Hs.useEffectEvent=R;var Us={readContext:ca,use:Lo,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:ca,useEffect:ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ds(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){ds(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(xo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(xo){We(!0);try{n(t)}finally{We(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fs.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Is.bind(null,F,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xs,useDeferredValue:function(e,t){return ws(Po(),e,t)},useTransition:function(){var e=Yo(!1);return e=Es.bind(null,F,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=F,a=Po();if(M){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Wo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ps(Ko.bind(null,r,o,e),[e]),r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,o,n,t),null),n},useId:function(){var e=Po(),t=G.identifierPrefix;if(M){var n=Fi,r=Pi;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=So++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=To++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:js,useFormState:is,useActionState:is,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,F,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return Po().memoizedState=Ps.bind(null,F)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Bo,useRef:us,useState:function(){return Bo(zo)},useDebugValue:xs,useDeferredValue:function(e,t){return Ts(z(),I.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:as,useActionState:as,useOptimistic:function(e,t){return Xo(z(),I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Ws.useEffectEvent=gs;var Gs={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Ho,useRef:us,useState:function(){return Ho(zo)},useDebugValue:xs,useDeferredValue:function(e,t){var n=z();return I===null?ws(n,e,t):Ts(n,I.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){var n=z();return I===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Gs.useEffectEvent=gs;function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ya(n);r.tag=2,t!=null&&(r.callback=t),t=Xa(e,r,n),t!==null&&(hu(t,e,n),Za(t,e,n))}};function Js(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function Xs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Zs(e){ii(e)}function Qs(e){console.error(e)}function $s(e){ii(e)}function ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){return n=Ya(n),n.tag=3,n.payload={element:null},n.callback=function(){ec(e,t)},n}function rc(e){return e=Ya(e),e.tag=3,e}function ic(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){tc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){tc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ac(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&aa(t,n,a,!0),n=lo.current,n!==null){switch(n.tag){case 31:case 13:return uo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(M)return t=lo.current,t===null?(r!==Wi&&(t=Error(i(423),{cause:r}),Zi(Ei(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ei(r,n),a=nc(e.stateNode,r,a),Qa(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Wi&&(e=Error(i(422),{cause:r}),Zi(Ei(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ei(o,n),Zl===null?Zl=[o]:Zl.push(o),Y!==4&&(Y=2),t===null)return!0;r=Ei(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=nc(n.stateNode,r,e),Qa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=rc(a),ic(a,e,n,r),Qa(n,a),!1}n=n.return}while(n!==null);return!1}var oc=Error(i(461)),B=!1;function sc(e,t,n,r){t.child=e===null?Ga(t,null,n,r):Wa(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return sa(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&s&&Ri(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!_i(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref)if(B=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(B=!0);else return t.lanes=e.lanes,Mc(e,t,i)}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ea(t,a===null?null:a.cachePool),a===null?so():oo(t,a),mo(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ea(t,null),so(),ho(t)):(Ea(t,a.cachePool),oo(t,a),ho(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=Ta();return a=a===null?null:{parent:N._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ea(t,null),so(),mo(t),e!==null&&aa(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return Wa(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,go(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(M){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(po(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return t.lanes=536870912,null}return mc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(po(t),a)if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(B||aa(e,t,n,!1),a=(n&e.childLanes)!==0,B||a){if(r=G,r!==null&&(s=ct(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,di(e,s),hu(r,e,s),oc;Du(),t=hc(e,t,n)}else e=o.treeContext,j=cf(s.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return sa(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return sa(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!B?(Mo(e,t,a),Mc(e,t,a)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(sa(t),t.stateNode===null){var a=mi,o=n.contextType;typeof o==`object`&&o&&(a=ca(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=qs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},qa(t),o=n.contextType,a.context=typeof o==`object`&&o?ca(o):mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ks(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&qs.enqueueReplaceState(a,a.state,null),to(t,r,a,i),eo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Xs(n,s);a.props=c;var l=a.context,u=n.contextType;o=mi,typeof u==`object`&&u&&(o=ca(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ys(t,a,r,o),Ka=!1;var f=t.memoizedState;a.state=f,to(t,r,a,i),eo(),l=t.memoizedState,s||f!==l||Ka?(typeof d==`function`&&(Ks(t,n,d,r),l=t.memoizedState),(c=Ka||Js(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ja(e,t),o=t.memoizedProps,u=Xs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=mi,typeof l==`object`&&l&&(c=ca(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ys(t,a,r,c),Ka=!1,f=t.memoizedState,a.state=f,to(t,r,a,i),eo();var p=t.memoizedState;o!==d||f!==p||Ka||e!==null&&e.dependencies!==null&&oa(e.dependencies)?(typeof s==`function`&&(Ks(t,n,s,r),p=t.memoizedState),(u=Ka||Js(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&oa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Wa(t,e.child,null,i),t.child=Wa(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Yi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:Da()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Tc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(P.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(M){if(a?fo(t):ho(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ho(t),a=t.mode,c=Dc({mode:`hidden`,children:c},a),r=xi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(null,r)):(fo(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(fo(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(ho(t),c=r.fallback,a=t.mode,r=Dc({mode:`visible`,children:r.children},a),c=xi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Wa(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,t=fc(null,r)):(ho(t),t.child=e.child,t.flags|=128,t=null);else if(fo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Zi({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(B||aa(e,t,n,!1),s=(n&e.childLanes)!==0,B||s){if(s=G,s!==null&&(r=ct(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,di(e,r),hu(s,e,r),oc;af(c)||Du(),t=Oc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,j=cf(c.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return a?(ho(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=vi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=xi(c,a,n,null),c.flags|=2):c=vi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(a=c.cachePool,a===null?a=Da():(l=N._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(e.child,r)):(fo(t),n=e.child,e=n.sibling,n=vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=gi(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Wa(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=P.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,E(P,o),sc(e,t,r,n),r=M?Ai:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&oa(e))):!0}function Pc(e,t,n){switch(t.tag){case 3:xe(t,t.stateNode.containerInfo),ta(t,N,e.memoizedState.cache),Yi();break;case 27:case 5:Ce(t);break;case 4:xe(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,po(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(fo(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(fo(t),t.flags|=128,null);fo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),E(P,P.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:ta(t,N,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)B=!0;else{if(!Nc(e,n)&&!(t.flags&128))return B=!1,Pc(e,t,n);B=!!(e.flags&131072)}else B=!1,M&&t.flags&1048576&&Li(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e==`function`)_i(e)?(r=Xs(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=cc(null,t,e,r,n);break a}else if(a===re){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=ue(e)||e,Error(i(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Xs(r,t.pendingProps),bc(e,t,r,a,n);case 3:a:{if(xe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ja(e,t),to(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ta(t,N,r),r!==o.cache&&ia(t,[N],n,!0),eo(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=xc(e,t,r,n);break a}else if(r!==a){a=Ei(Error(i(424)),t),Zi(a),t=xc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(j=cf(e.firstChild),Vi=t,M=!0,Hi=null,Ui=!0,n=Ga(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Yi(),r===a){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:M||(n=t.type,e=t.pendingProps,r=Bd(ye.current).createElement(n),r[mt]=t,r[ht]=e,Pd(r,n,e),Dt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ce(t),e===null&&M&&(r=t.stateNode=ff(t.type,t.pendingProps,ye.current),Vi=t,Ui=!0,a=j,Zd(t.type)?(lf=a,j=cf(r.firstChild)):j=a),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&M&&((a=r=j)&&(r=tf(r,t.type,t.pendingProps,Ui),r===null?a=!1:(t.stateNode=r,Vi=t,j=cf(r.firstChild),Ui=!1,a=!0)),a||Gi(t)),Ce(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Do(e,t,Ao,null,null,n),Qf._currentValue=a),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&M&&((e=n=j)&&(n=nf(n,t.pendingProps,Ui),n===null?e=!1:(t.stateNode=n,Vi=t,j=null,e=!0)),e||Gi(t)),null;case 13:return Tc(e,t,n);case 4:return xe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wa(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ta(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,sa(t),a=ca(a),r=r(a),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return sa(t),r=ca(N),e===null?(a=Ta(),a===null&&(a=G,o=ma(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},qa(t),ta(t,N,a)):((e.lanes&n)!==0&&(Ja(e,t),to(t,null,null,n),eo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ta(t,N,r),r!==a.cache&&ia(t,[N],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ta(t,N,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Fa=ja,ka}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Fa=ja,ka}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:nt(),e.lanes|=t,Xl|=t)}function Bc(e,t){if(!M)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),na(N),Se(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xi())),V(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ic(t),o===null?(V(t),Lc(t,a,null,r,n)):(V(t),Rc(t,o))):o?o===e.memoizedState?(V(t),t.flags&=-16777217):(Ic(t),V(t),Rc(t,o)):(e=e.memoizedProps,e!==r&&Ic(t),V(t),Lc(t,a,e,r,n)),null;case 27:if(we(t),n=ye.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}e=_e.current,Ji(t)?Ki(t,e):(e=ff(a,r,n),t.stateNode=e,Ic(t))}return V(t),null;case 5:if(we(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}if(o=_e.current,Ji(t))Ki(t,o);else{var s=Bd(ye.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[mt]=t,o[ht]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return V(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ye.current,Ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Vi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Gi(t,!0)}else e=Bd(e).createTextNode(r),e[mt]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ji(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[mt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(go(t),t):(go(t),null);if(t.flags&128)throw Error(i(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[mt]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),a=!1}else a=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(go(t),t):(go(t),null)}return go(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),V(t),null);case 4:return Se(),e===null&&Sd(t.stateNode.containerInfo),V(t),null;case 10:return na(t.type),V(t),null;case 19:if(ge(P),r=t.memoizedState,r===null)return V(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Bc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=_o(e),o!==null){for(t.flags|=128,Bc(r,!1),e=o.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yi(n,e),n=n.sibling;return E(P,P.current&1|2),M&&Ii(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&k()>nu&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304)}else{if(!a)if(e=_o(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!M)return V(t),null}else 2*k()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(V(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=k(),e.sibling=null,n=P.current,E(P,a?n&1|2:n&1),M&&Ii(t,r.treeForkCount),e);case 22:case 23:return go(t),co(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ge(wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(N),V(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Hc(e,t){switch(zi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(N),Se(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return we(t),null;case 31:if(t.memoizedState!==null){if(go(t),t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(go(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ge(P),null;case 4:return Se(),null;case 10:return na(t.type),null;case 22:case 23:return go(t),co(),e!==null&&ge(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(N),null;case 25:return null;default:return null}}function Uc(e,t){switch(zi(t),t.tag){case 3:na(N),Se();break;case 26:case 27:case 5:we(t);break;case 4:Se();break;case 31:t.memoizedState!==null&&go(t);break;case 13:go(t);break;case 19:ge(P);break;case 10:na(t.type);break;case 22:case 23:go(t),co(),e!==null&&ge(wa);break;case 24:na(N)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ro(t,n)}catch(t){Z(e,e.return,t)}}}function qc(e,t,n){n.props=Xs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Yc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ht]=t}catch(t){Z(e,e.return,t)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function $c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=cn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[mt]=e,t[ht]=n}catch(t){Z(e,e.return,t)}}var rl=!1,H=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Xs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Wc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Xs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ro(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&nl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Xc(n),r&512&&Jc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||rl,!r){t=t!==null&&t.memoizedState!==null||H,i=rl;var a=H;rl=r,(H=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),rl=i,H=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&St(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:H||Yc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||Yc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:H||Yc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),H||Gc(4,n,t),dl(e,t,n);break;case 1:H||(Yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,dl(e,t,n),H=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(i(160));fl(o,s,a),U=null,ul=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&64&&rl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[xt]||o[mt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[mt]=e,Dt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[mt]=e,Dt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),n!==null&&r&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),e.flags&32){a=e.stateNode;try{$t(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Zc(e,a,n===null?a:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=vl,vl=gf(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}il&&(il=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=k()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=rl,d=H;if(rl=u||a,H=d||l,_l(t,e),H=d,rl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||rl||H||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;tl(e,$c(e),a);break;case 5:var o=n.stateNode;n.flags&32&&($t(o,``),n.flags&=-33),tl(e,$c(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;el(e,$c(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),Cl(t);break;case 1:Yc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Yc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Wc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)no(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:nl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Xc(a),Jc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Jc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ha(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Wc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var zl={getCacheForType:function(e){var t=ca(N),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ca(N).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:w.T===null?dt():dd()}function mu(){if(Yl===0)if(!(q&536870912)||M){var e=Xe;Xe<<=1,!(Xe&3932160)&&(Xe=262144),Yl=e}else Yl=536870912;return e=lo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),it(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||et(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-k(),10<a)){if(yu(r,t,Yl,!Hl),$e(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,`Throttled`,-0,0),a);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:cn},Nl(t,a,d);var m=(a&62914560)===a?eu-k():(a&4194048)===a?tu-k():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ge(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ot(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ea=$i=null,No(e),Ra=null,za=0,e=K;for(;e!==null;)Uc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=vi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=et(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ge(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ci(),n}function Cu(e,t){F=null,w.H=Hs,t===Oa||t===Aa?(t=Ia(),J=3):t===ka?(t=Ia(),J=4):J=t===oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,ec(e,Ei(t,e.current)))}function wu(){var e=lo.current;return e===null?!0:(q&4194048)===q?uo===null:(q&62914560)===q||q&536870912?e===uo:!1}function Tu(){var e=w.H;return w.H=Hs,e===null?Hs:e}function Eu(){var e=w.A;return w.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&lo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:lo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ea=$i=null,W=r,w.H=i,w.A=a,K===null&&(G=null,q=0,ci()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),a=Eu();G!==e||q!==t?(ru=null,nu=k()+500,Su(e,t)):Ul=et(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,o,1);break;case 2:case 9:if(Ma(o)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Ma(o)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Wf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,o,5);break;case 6:J=0,Vl=null,Pu(e,t,o,6);break;case 8:xu(),Y=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ea=$i=null,w.H=r,w.A=a,W=n,K===null?(G=null,q=0,ci(),Y):0}function ju(){for(;K!==null&&!Ne();)Mu(K)}function Mu(e){var t=Fc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:No(t);default:Uc(n,t),t=K=yi(t,Gl),t=Fc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ea=$i=null,No(t),Ra=null,za=0;var i=t.return;try{if(ac(e,i,t,n,q)){Y=1,ec(e,Ei(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,ec(e,Ei(n,e.current)),K=null;return}t.flags&32768?(M||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=lo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Vc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=si,at(e,n,o,s,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Re,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=w.T,w.T=null,a=T.p,T.p=2,s=W,W|=4;try{sl(e,t,n)}finally{W=s,T.p=a,w.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,T.p=r,w.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,T.p=r,w.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Pe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),ut(n),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=w.T,i=T.p,T.p=2,w.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{w.T=t,T.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ha(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=ut(su),r=w.T,a=T.p;try{T.p=32>n?32:n,w.T=null,n=lu,lu=null;var o=au,s=su;if(X=0,ou=au=null,su=0,W&6)throw Error(i(331));var c=W;if(W|=4,Il(o.current),Ol(o,o.current,s,n),W=c,id(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,o)}catch{}return!0}finally{T.p=a,w.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ei(n,t),t=nc(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(it(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ei(n,e),n=rc(2),r=Xa(t,n,2),r!==null&&(ic(n,r,t,e),it(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>k()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=nt()),e=di(e,t),e!==null&&(it(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return O(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ge(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=$e(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||et(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=k(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ge(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=tt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=$e(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||et(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),ut(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=cd.bind(null,e),n=O(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=$e(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,k()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?O(Ie,ad):od()})}function dd(){if(nd===0){var e=va;e===0&&(e=Ye,Ye<<=1,!(Ye&261888)&&(Ye=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:sn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[ht]||null).action),o=r.submitter;o&&(t=(t=o[ht]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new kn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Os(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Os(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ni.length;hd++){var gd=ni[hd];ri(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),jt(`onMouseEnter`,[`mouseout`,`mouseover`]),jt(`onMouseLeave`,[`mouseout`,`mouseover`]),jt(`onPointerEnter`,[`pointerout`,`pointerover`]),jt(`onPointerLeave`,[`pointerout`,`pointerover`]),At(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),At(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),At(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),At(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),At(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[_t];n===void 0&&(n=t[_t]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Ot.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!vn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ct(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}hn(function(){var r=a,i=un(n),s=[];a:{var c=ti.get(e);if(c!==void 0){var l=kn,u=e;switch(e){case`keypress`:if(wn(n)===0)break a;case`keydown`:case`keyup`:l=qn;break;case`focusin`:u=`focus`,l=Rn;break;case`focusout`:u=`blur`,l=Rn;break;case`beforeblur`:case`afterblur`:l=Rn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=In;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Ln;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Yn;break;case Jr:case Yr:case Xr:l=zn;break;case ei:l=Xn;break;case`scroll`:case`scrollend`:l=jn;break;case`wheel`:l=Zn;break;case`copy`:case`cut`:case`paste`:l=Bn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Jn;break;case`toggle`:case`beforetoggle`:l=Qn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=gn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==ln&&(u=n.relatedTarget||n.fromElement)&&(Ct(u)||u[gt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Ct(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=In,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Tt(l),h=u==null?c:Tt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Ct(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Tt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=vr;else if(fr(c))if(yr)v=Or;else{v=Er;var y=Tr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&rn(r.elementType)&&(v=vr):v=Dr;if(v&&=v(e,r)){pr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Yt(c,`number`,c.value)}switch(y=r?Tt(r):window,e){case`focusin`:(fr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(s,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(s,n,i)}var b;if(er)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else cr?or(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(rr&&n.locale!==`ko`&&(cr||x!==`onCompositionStart`?x===`onCompositionEnd`&&cr&&(b=Cn()):(bn=i,xn=`value`in bn?bn.value:bn.textContent,cr=!0)),y=Ed(r,x),0<y.length&&(x=new Vn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=sr(n),b!==null&&(x.data=b)))),(b=nr?lr(e,n):ur(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=gn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=gn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=gn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=gn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&$t(e,``+r);break;case`className`:Lt(e,`class`,r);break;case`tabIndex`:Lt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Lt(e,n,r);break;case`style`:nn(e,r,o);break;case`data`:if(t!==`object`){Lt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=sn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=sn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),It(e,`popover`,r);break;case`xlinkActuate`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Rt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Rt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:It(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=an.get(n)||n,It(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:nn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?$t(e,r):(typeof r==`number`||typeof r==`bigint`)&&$t(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=cn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!kt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[ht]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):It(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Jt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Xt(e,!!r,n,!0):Xt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Qt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(rn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}qt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Xt(e,!!n,n?[]:``,!1):Xt(e,!!n,t,!0)):Xt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Zt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(rn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[xt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),St(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[xt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);St(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=T.d;T.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=wt(e);t!==null&&t.tag===5&&t.type===`form`?As(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Kt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Kt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Kt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Kt(n.imageSizes)+`"]`)):i+=`[href="`+Kt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Kt(r)+`"][href="`+Kt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Dt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Et(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Dt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Et(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Dt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ye.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Et(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Et(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Et(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Kt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Dt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Kt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Kt(n.href)+`"]`);if(r)return t.instance=r,Dt(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Dt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Dt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Dt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Dt(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Dt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[xt]||a[mt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Dt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Dt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.hiddenUpdates=rt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=gi(3,null,null,t),e.current=a,a.stateNode=e,t=ma(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},qa(a),e}function tp(e){return e?(e=mi,e):mi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ya(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Xa(e,r,t),n!==null&&(hu(n,e,t),Za(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=di(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=lt(t);var n=di(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=2,up(e,t,n,r)}finally{T.p=a,w.T=i}}function lp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=8,up(e,t,n,r)}finally{T.p=a,w.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ge(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=k()+500,id(0,!1))}}break;case 31:case 13:s=di(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=un(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Ct(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=wt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Ct(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ft(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ln=r,n.target.dispatchEvent(r),ln=null}else return t=wt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=wt(n);a!==null&&(e.splice(t,3),t-=3,Os(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ht]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ht]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[gt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:w,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{He=zp.inject(Rp),Ue=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Zs,s=Qs,c=$s;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[gt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=c(g(),1),y=`下面按“小芽计划”可直接录入活动库的格式整理。每个游戏都有明确目标、时长、材料、玩法和变化方式，重点适配3—5岁，也可根据孩子状态降低或提高难度。

# 小芽计划 Sprout Plan

## 150个适合3岁以上孩子的早教、亲子、认知与英语启蒙游戏

## 使用原则

1. 每次选择1—3个游戏即可，不要把一天排满。
2. 单个游戏控制在5—20分钟，孩子不感兴趣时可以立即停止。
3. 游戏没有统一答案，重点是观察、表达、尝试和亲子互动。
4. 涉及剪刀、水、厨房、绳子和小物件时，必须由成人全程陪同。
5. 三岁孩子不以认字、写字和计算速度为主要目标。
6. 英语游戏以听、说、动作和生活场景为主，不要求背单词表。

---

# 第一组：语言表达与听说游戏

## 001. 神秘袋子猜一猜

**目标：**触觉认知、语言表达、词汇积累
**时长：**5—10分钟
**材料：**布袋、勺子、积木、小球、毛巾等安全物品

**玩法：**把一个物品放进不透明袋子里，让孩子只用手摸，不拿出来。家长可以问：“它是硬的还是软的？”“圆圆的还是长长的？”孩子猜完后再拿出来验证。

**升级：**让孩子把物品放进袋子，换家长来猜，由孩子提供线索。

---

## 002. 今天我看到了什么

**目标：**回忆、描述、观察
**时长：**5分钟
**材料：**不需要

**玩法：**晚上请孩子说出今天看到的三样东西。家长用问题帮助孩子补充：“在哪里看到的？”“它是什么颜色？”“当时你在做什么？”

**升级：**请孩子按照“先、然后、最后”的顺序讲述。

---

## 003. 玩具自我介绍

**目标：**角色扮演、完整句表达
**时长：**10分钟
**材料：**孩子喜欢的玩具

**玩法：**家长拿着玩具说：“大家好，我叫小熊，我喜欢吃苹果。”再请孩子替另一个玩具做自我介绍。

**升级：**加入年龄、住在哪里、喜欢什么、今天的心情等内容。

---

## 004. 故事接龙

**目标：**想象力、语言组织
**时长：**10分钟
**材料：**不需要

**玩法：**家长先说一句：“今天，小猫在门口发现了一个盒子。”孩子接下一句，家长再继续，轮流把故事讲完。

**升级：**提前规定故事里必须出现“雨伞、苹果、公交车”三个词。

---

## 005. 图片里发生了什么

**目标：**看图表达、因果理解
**时长：**5—10分钟
**材料：**绘本或生活照片

**玩法：**选择一张画面丰富的图片，请孩子说出看到了谁、在哪里、正在做什么。不要急着纠正，先听孩子完整表达。

**升级：**问：“接下来可能会发生什么？”

---

## 006. 声音从哪里来

**目标：**听觉辨别、描述声音
**时长：**5分钟
**材料：**钥匙、纸张、水杯、铃铛等

**玩法：**孩子闭眼，家长在不同方向制造声音。孩子指出声音方向，并猜测是什么发出的。

**升级：**连续发出两个声音，让孩子按顺序说出来。

---

## 007. 相反词动作游戏

**目标：**理解反义词
**时长：**5—8分钟
**材料：**不需要

**玩法：**家长说“大”，两人把手臂张开；说“小”，身体缩起来。继续玩高和低、快和慢、远和近、开和关。

**升级：**家长只做动作，让孩子说出对应的词。

---

## 008. 谁不见了

**目标：**记忆、观察、命名
**时长：**5分钟
**材料：**3—5个玩具

**玩法：**让孩子观察玩具后闭眼，家长拿走一个。孩子睁眼后说出谁不见了。

**升级：**一次拿走两个，或改变玩具的位置。

---

## 009. 给物品找形容词

**目标：**丰富描述词汇
**时长：**5—10分钟
**材料：**家中物品

**玩法：**拿出一个苹果，引导孩子描述：“红色的、圆圆的、甜甜的、硬硬的。”再换毛巾、杯子、鞋子等。

**升级：**规定不能说物品名字，只能描述，让对方猜。

---

## 010. 电话留言游戏

**目标：**倾听、信息复述
**时长：**5分钟
**材料：**玩具电话或纸杯电话

**玩法：**家长说：“请告诉爸爸，下午要带水杯去公园。”孩子拿着电话把信息复述给另一个人或玩偶。

**升级：**逐渐增加两到三个信息点。

---

## 011. 情绪播报员

**目标：**情绪命名、表达原因
**时长：**5分钟
**材料：**表情卡，可不用

**玩法：**家长说：“今天我是开心播报员，因为我喝到了喜欢的咖啡。”再请孩子播报自己的心情和原因。

**升级：**加入“如果心情不舒服，我需要什么”。

---

## 012. 一句话变长

**目标：**扩展句子
**时长：**5分钟
**材料：**不需要

**玩法：**孩子说：“小鸟飞。”家长引导扩展为：“一只小鸟在天空中飞。”再加入颜色、地点和动作。

**升级：**轮流给句子增加一个新信息。

---

## 013. 家庭小记者

**目标：**提问、交流
**时长：**10分钟
**材料：**纸筒或玩具麦克风

**玩法：**孩子采访家人：“你今天做了什么？”“你最喜欢吃什么？”家长回答后，再交换角色。

**升级：**采访结束后，请孩子总结对方说了什么。

---

## 014. 三样东西编故事

**目标：**联想、故事组织
**时长：**10分钟
**材料：**任意三个物品

**玩法：**随机拿出雨伞、积木、香蕉，请孩子编一个包含这三样东西的小故事。

**升级：**加入一个问题，例如“它们遇到了一场大雨”。

---

## 015. 猜猜我是谁

**目标：**特征提取、语言理解
**时长：**5分钟
**材料：**动物或人物图片

**玩法：**家长描述：“它有长耳朵，喜欢跳，爱吃胡萝卜。”孩子猜答案。

**升级：**换孩子描述，家长猜。

---

# 第二组：数量、分类与逻辑游戏

## 016. 给玩具分房间

**目标：**分类能力
**时长：**10分钟
**材料：**玩具、几个纸盒

**玩法：**让动物住一个盒子，车辆住一个盒子，积木住一个盒子。家长问：“为什么它应该住这里？”

**升级：**改成按颜色、大小或材质分类。

---

## 017. 一人一个苹果

**目标：**一一对应
**时长：**5分钟
**材料：**玩偶、积木或水果模型

**玩法：**摆出三个玩偶，请孩子给每个玩偶分一个苹果。分完后一起检查有没有人没有拿到。

**升级：**增加数量，或故意少放一个，让孩子发现问题。

---

## 018. 楼梯数字路

**目标：**1—5数量认知
**时长：**10分钟
**材料：**纸张、积木

**玩法：**在地面放1到5张数字卡。孩子走到数字3时，要拿出三个积木或拍手三次。

**升级：**不用数字卡，只听家长口令完成数量动作。

---

## 019. 谁更多

**目标：**多少比较
**时长：**5分钟
**材料：**两组积木或水果

**玩法：**摆出两组数量差异明显的物品，请孩子判断哪一组更多、哪一组更少。

**升级：**把两组排得长短不同，引导孩子一一配对验证。

---

## 020. 水果小摊

**目标：**数数、角色扮演
**时长：**15分钟
**材料：**水果或玩具水果、篮子

**玩法：**家长当顾客：“我想买两个苹果和一根香蕉。”孩子按要求取出。

**升级：**使用纸片作为钱，练习简单交换。

---

## 021. 找规律小火车

**目标：**规律识别
**时长：**5—10分钟
**材料：**两种颜色积木

**玩法：**家长摆“红、黄、红、黄”，请孩子继续。再尝试“红、红、黄”。

**升级：**使用动作规律，如拍手、跺脚、拍手、跺脚。

---

## 022. 大小排队

**目标：**大小比较、排序
**时长：**5分钟
**材料：**大小不同的杯子或玩具

**玩法：**请孩子从最小排到最大。家长使用“更大、最大、更小、最小”等词。

**升级：**加入五个以上物品。

---

## 023. 盒子装得下吗

**目标：**空间判断、预测
**时长：**10分钟
**材料：**大小不同的盒子和玩具

**玩法：**先让孩子猜某个玩具能否放进盒子，再实际尝试。

**升级：**找出最合适的盒子，而不是最大的盒子。

---

## 024. 数量停车场

**目标：**数字和数量对应
**时长：**10分钟
**材料：**玩具车、画有数字的停车位

**玩法：**数字3的停车位要停三辆车，数字5的位置停五辆。

**升级：**家长说数量，孩子自己找到对应停车位。

---

## 025. 哪个不一样

**目标：**观察、归类
**时长：**5分钟
**材料：**四个物品

**玩法：**摆出三个积木和一个勺子，请孩子找出不同的一个，并解释原因。

**升级：**使用多种合理答案，例如三个红色物品和一个圆形黄色物品。

---

## 026. 影子配对

**目标：**形状辨认、视觉匹配
**时长：**10分钟
**材料：**物品照片和轮廓图

**玩法：**请孩子把物品图片和对应的黑色轮廓配对。

**升级：**使用真实物品，在灯光下观察影子。

---

## 027. 按顺序完成任务

**目标：**顺序理解、工作记忆
**时长：**5分钟
**材料：**不需要

**玩法：**给出两步指令：“先拿杯子，再坐到椅子上。”完成后增加为三步。

**升级：**让孩子给家长发布顺序任务。

---

## 028. 哪里多了一个

**目标：**观察变化
**时长：**5分钟
**材料：**几件桌面物品

**玩法：**孩子观察桌面后转身，家长增加一个物品。孩子找出多出来的东西。

**升级：**同时增加一个、移走一个。

---

## 029. 形状送快递

**目标：**形状分类
**时长：**10分钟
**材料：**圆形、三角形、方形纸片和盒子

**玩法：**每个盒子贴一个形状标志，让孩子把纸片送到正确的“家”。

**升级：**在家中寻找真实的圆形和方形物品。

---

## 030. 小熊分饼干

**目标：**平均分配初步认知
**时长：**5分钟
**材料：**两个玩偶、积木片

**玩法：**把六块“饼干”平均分给两只小熊。让孩子一块一块轮流分。

**升级：**增加三个玩偶，观察是否每个人一样多。

---

# 第三组：颜色、形状与空间认知

## 031. 家庭颜色寻宝

**目标：**颜色认知、观察
**时长：**10分钟
**材料：**颜色卡，可不用

**玩法：**选择一种颜色，例如黄色，请孩子在房间里找到三个黄色物品。

**升级：**比较找到的物品哪个最大、哪个最软。

---

## 032. 彩虹分类篮

**目标：**颜色分类
**时长：**10分钟
**材料：**彩色积木、纸碗

**玩法：**不同颜色放进不同纸碗。家长边玩边说颜色名称。

**升级：**限定时间，或增加浅色和深色。

---

## 033. 形状饼干店

**目标：**形状辨认
**时长：**10分钟
**材料：**彩泥、形状模具

**玩法：**制作圆形、方形、三角形“饼干”。家长点单，孩子制作或选择。

**升级：**让孩子设计一种新的形状饼干并命名。

---

## 034. 身体变形状

**目标：**身体控制、形状理解
**时长：**5分钟
**材料：**不需要

**玩法：**两人用手臂围成圆形，用身体做一条直线，三个人可以尝试组成三角形。

**升级：**听到形状名称后快速摆出动作。

---

## 035. 胶带道路

**目标：**空间方向、路线理解
**时长：**10分钟
**材料：**纸胶带、玩具车

**玩法：**在地面贴出直路、弯路和交叉路口，让孩子开车行驶。

**升级：**加入左转、右转、停下、掉头等口令。

---

## 036. 上面下面躲猫猫

**目标：**方位词理解
**时长：**5分钟
**材料：**一个玩具

**玩法：**把玩具放在桌子上面、椅子下面、盒子里面，让孩子找到并说出位置。

**升级：**加入旁边、中间、后面、前面。

---

## 037. 拼图照片复原

**目标：**整体与部分认知
**时长：**10分钟
**材料：**打印照片，剪成4—6块

**玩法：**把熟悉的家庭照片剪成大块，让孩子重新拼好。

**升级：**逐渐增加块数，但避免过小。

---

## 038. 镜子里的左右

**目标：**身体部位、空间意识
**时长：**5分钟
**材料：**镜子

**玩法：**面对镜子摸左耳、右手、左脚。三岁孩子不必强求完全分清左右，以模仿为主。

**升级：**家长和孩子面对面做相反动作。

---

## 039. 纸杯高塔

**目标：**空间搭建、平衡
**时长：**10分钟
**材料：**纸杯

**玩法：**尝试把纸杯叠成塔，观察怎样放更稳。

**升级：**限定使用六个纸杯，设计不同形状。

---

## 040. 藏在九宫格里

**目标：**位置记忆
**时长：**5分钟
**材料：**九个纸杯、小玩具

**玩法：**在孩子面前把玩具藏进一个纸杯，移动两个杯子后让孩子寻找。

**升级：**增加移动次数。

---

## 041. 一半在哪里

**目标：**对称和配对初步认知
**时长：**10分钟
**材料：**对半剪开的图片

**玩法：**把苹果、蝴蝶、汽车等图片剪成两半，请孩子找到对应的一半。

**升级：**自己画半个图形，让孩子补全另一半。

---

## 042. 路线指挥员

**目标：**方向理解、语言指令
**时长：**10分钟
**材料：**积木、小人偶

**玩法：**搭一个简单场景，孩子指挥人偶：“向前走，绕过树，走到房子旁边。”

**升级：**由家长说路线，孩子执行。

---

## 043. 哪个形状能滚

**目标：**形状特征、实验观察
**时长：**10分钟
**材料：**球、方盒、圆柱体

**玩法：**让孩子先猜哪些物品可以滚，再放在斜坡上测试。

**升级：**比较哪一个滚得更远。

---

## 044. 窗户形状观察员

**目标：**生活中的形状
**时长：**10分钟
**材料：**不需要

**玩法：**在家或散步时寻找圆形、长方形、三角形。可以拍照记录。

**升级：**完成一张“今天发现的形状”小卡片。

---

## 045. 地图找宝物

**目标：**符号理解、空间路线
**时长：**15分钟
**材料：**简单手绘地图、小礼物

**玩法：**画出沙发、桌子、床等位置，用箭头表示路线。孩子根据地图寻找宝物。

**升级：**让孩子画地图给家长找。

---

# 第四组：精细动作与手眼协调

## 046. 袜子夹夹乐

**目标：**手指力量、生活能力
**时长：**10分钟
**材料：**袜子、大号衣夹

**玩法：**把袜子夹到纸盒边缘或晾衣绳上。

**升级：**按颜色或家庭成员分类后再夹。

---

## 047. 勺子搬运队

**目标：**手眼协调
**时长：**5—10分钟
**材料：**勺子、大号绒球或纸团、两个碗

**玩法：**用勺子把物品从一个碗运到另一个碗。

**升级：**使用不同大小的勺子，比较哪一个更容易。

---

## 048. 撕纸小花园

**目标：**双手协调、艺术创造
**时长：**15分钟
**材料：**彩纸、胶棒、白纸

**玩法：**孩子把彩纸撕成大小不同的块，粘成花朵、草地或自由图案。

**升级：**规定使用三种颜色完成画面。

---

## 049. 贴纸回家

**目标：**手指控制、位置匹配
**时长：**10分钟
**材料：**大贴纸、画有圆圈的纸

**玩法：**请孩子把贴纸贴进指定圆圈里。

**升级：**按照颜色或图案贴到不同区域。

---

## 050. 纸条穿山洞

**目标：**穿插动作、专注
**时长：**10分钟
**材料：**纸板、宽纸条

**玩法：**在纸板上剪出宽缝，让孩子把纸条穿进穿出。

**升级：**做成简单的颜色规律。

---

## 051. 彩泥面包店

**目标：**揉、压、搓动作
**时长：**15分钟
**材料：**安全彩泥、盘子

**玩法：**制作面包、饼干、包子和水果。家长当顾客点单。

**升级：**加入大小和数量要求。

---

## 052. 海绵挤水

**目标：**手部力量、感官体验
**时长：**10分钟
**材料：**海绵、两个盆、少量水

**玩法：**用海绵吸水，再挤到另一个盆里。

**升级：**比较大海绵和小海绵谁运水更多。

---

## 053. 纸团投递站

**目标：**手掌控制、投准
**时长：**10分钟
**材料：**废纸、几个纸盒

**玩法：**把纸揉成纸团，投入不同距离的盒子。

**升级：**盒子贴上颜色或数字，按要求投递。

---

## 054. 夹子颜色配对

**目标：**手指力量、颜色匹配
**时长：**10分钟
**材料：**彩色衣夹、彩色卡纸

**玩法：**把相同颜色的夹子夹到卡纸上。

**升级：**按红黄红黄的顺序排列。

---

## 055. 画线送小动物回家

**目标：**运笔准备、路径控制
**时长：**5—10分钟
**材料：**纸、粗蜡笔

**玩法：**画一条宽路，让孩子沿着路把小动物连到房子。

**升级：**道路逐渐出现弯曲和简单障碍。

---

## 056. 安全剪刀理发店

**目标：**剪刀使用、手眼协调
**时长：**10分钟
**材料：**儿童安全剪刀、画有人脸的纸条

**玩法：**把纸条边缘剪成“头发”，孩子给纸上人物理发。

**升级：**从短直线逐渐过渡到较长直线。

---

## 057. 瓶盖旋转站

**目标：**手腕旋转、生活动作
**时长：**5—10分钟
**材料：**几个大小不同的安全塑料瓶

**玩法：**练习拧开和拧紧瓶盖。

**升级：**把瓶盖打乱后找回对应瓶子。

---

## 058. 胶带救援队

**目标：**手指精细动作
**时长：**10分钟
**材料：**纸胶带、塑料玩具

**玩法：**用纸胶带轻轻粘住玩具，孩子负责撕开胶带“救援”。

**升级：**胶带贴成不同方向，增加难度。

---

## 059. 纽扣路线板

**目标：**视觉追踪、手眼协调
**时长：**10分钟
**材料：**大纽扣或大圆片、画有路线的纸

**玩法：**把大圆片沿路线一个一个摆放。

**升级：**路线出现弯道、圆形和交叉。

---

## 060. 小小包装员

**目标：**折叠、粘贴、生活技能
**时长：**15分钟
**材料：**小盒子、包装纸、贴纸

**玩法：**帮助孩子把小玩具包装成礼物。

**升级：**制作标签，决定送给谁并说一句祝福。

---

# 第五组：大运动与身体控制

## 061. 胶带平衡线

**目标：**平衡、身体控制
**时长：**5—10分钟
**材料：**纸胶带

**玩法：**在地上贴直线，让孩子沿线慢慢走。

**升级：**加入弯线、脚尖走、手拿小物品走。

---

## 062. 动物走路模仿

**目标：**大肌肉、想象力
**时长：**10分钟
**材料：**不需要

**玩法：**模仿小兔跳、小猫轻轻走、小鸭摇摆走、小熊慢慢走。

**升级：**孩子选择动物并设计动作。

---

## 063. 音乐停停走

**目标：**听觉反应、控制力
**时长：**10分钟
**材料：**音乐

**玩法：**音乐响时走动或跳舞，音乐停时保持不…1511 tokens truncated…块，孩子放一块，轮流搭楼。

**升级：**每轮搭之前先说“轮到你”“轮到我”。

---

## 086. 家庭感谢站

**目标：**感恩表达、观察他人
**时长：**5分钟
**材料：**不需要

**玩法：**每个人说一件今天感谢家人的事。

**升级：**做一张简单感谢卡。

---

## 087. 生气小火山

**目标：**认识愤怒、学习平静
**时长：**5分钟
**材料：**不需要

**玩法：**把生气比作小火山。练习停下来、抱住自己、深呼吸三次、告诉家长原因。

**升级：**让孩子选择适合自己的冷静方法。

---

## 088. 超市购物清单

**目标：**生活认知、记忆
**时长：**10—20分钟
**材料：**三样物品的图片清单

**玩法：**去超市前一起确认需要买什么，到超市寻找对应物品。

**升级：**让孩子负责检查是否全部买齐。

---

## 089. 小小照顾员

**目标：**责任感、照顾能力
**时长：**5—10分钟
**材料：**植物或玩偶

**玩法：**每天给植物浇少量水，或帮助玩偶穿衣、盖被子。

**升级：**建立简单的一周照顾记录。

---

## 090. 家庭安全侦探

**目标：**安全意识
**时长：**10分钟
**材料：**不需要

**玩法：**在家中寻找哪些东西不能自己碰，例如插座、热水、刀具和窗户。

**升级：**请孩子说出遇到危险时应该找谁。

---

# 第七组：自然、科学与感官探索

## 091. 植物喝水了吗

**目标：**生命观察、责任感
**时长：**5分钟
**材料：**盆栽、喷壶

**玩法：**摸一摸土壤，观察干湿，再决定是否浇水。

**升级：**连续一周拍照，观察植物变化。

---

## 092. 影子变长了

**目标：**光影观察
**时长：**10分钟
**材料：**粉笔或纸张

**玩法：**上午和下午分别观察影子长度和方向。

**升级：**在地面描出影子轮廓进行比较。

---

## 093. 什么会沉下去

**目标：**预测、实验
**时长：**10分钟
**材料：**水盆、木块、勺子、海绵、塑料盖

**玩法：**先猜哪些会浮、哪些会沉，再逐个放入水中验证。

**升级：**讨论物品大小和轻重是否一定决定沉浮。

---

## 094. 冰块搬家

**目标：**冷热变化、物态观察
**时长：**10分钟
**材料：**冰块、碗、温水

**玩法：**观察冰块慢慢融化，比较放在常温和温水中的速度。

**升级：**在冰块中冻入小花瓣或安全玩具。

---

## 095. 声音实验室

**目标：**声音高低和大小
**时长：**10分钟
**材料：**不同容器、木勺

**玩法：**轻敲纸盒、塑料杯和金属锅，听声音有什么不同。

**升级：**把容器从声音最轻排到最响。

---

## 096. 闻一闻猜一猜

**目标：**嗅觉辨别、词汇表达
**时长：**5分钟
**材料：**橘子皮、肥皂、茶叶等安全物品

**玩法：**闭眼闻味道，猜是什么，并说“香香的、清新的、甜甜的”。

**升级：**比较喜欢和不喜欢的味道。

---

## 097. 触觉小路

**目标：**触觉认知
**时长：**10分钟
**材料：**毛巾、海绵、纸板、软垫

**玩法：**用手摸不同材料，描述软、硬、粗糙、光滑。

**升级：**闭眼触摸后猜材料。

---

## 098. 风从哪里来

**目标：**空气和风的初步认知
**时长：**10分钟
**材料：**纸条、扇子

**玩法：**用嘴吹、手扇和扇子制造风，观察纸条怎样移动。

**升级：**比较哪一种方式产生的风更大。

---

## 099. 雨量小观察

**目标：**天气观察、测量意识
**时长：**下雨天进行
**材料：**透明容器

**玩法：**在安全位置接雨水，观察一段时间后水位变化。

**升级：**在容器上贴刻度线进行比较。

---

## 100. 云朵像什么

**目标：**观察、想象、表达
**时长：**10分钟
**材料：**不需要

**玩法：**抬头观察云朵，说说它像动物、食物还是交通工具。

**升级：**回家把看到的云画下来。

---

## 101. 叶子分类站

**目标：**自然分类、比较
**时长：**15分钟
**材料：**散步收集的安全落叶

**玩法：**按大小、颜色、边缘形状分类。

**升级：**制作一张叶子观察卡。

---

## 102. 光会穿过去吗

**目标：**透明和不透明认知
**时长：**10分钟
**材料：**手电筒、纸、塑料片、布

**玩法：**用手电筒照不同材料，观察光是否能穿过。

**升级：**找出半透明材料。

---

## 103. 小种子发芽记

**目标：**植物生长、连续观察
**时长：**每天2分钟
**材料：**容易发芽的种子、湿纸巾、透明袋

**玩法：**把种子放在湿纸巾里，每天观察变化。

**升级：**用简单图画记录第1天、第3天和第5天。

---

## 104. 哪个融化得快

**目标：**实验比较
**时长：**10分钟
**材料：**两小块冰、不同位置

**玩法：**把冰分别放在阳光处和阴凉处，观察谁先融化。

**升级：**加入风扇旁边的第三组。

---

## 105. 自然颜色卡

**目标：**颜色观察、自然认知
**时长：**15分钟
**材料：**颜色卡或彩纸

**玩法：**带着绿色、黄色、棕色卡片去户外寻找接近的自然颜色。

**升级：**拍照制作“今天的自然色板”。

---

# 第八组：艺术、音乐与创造力游戏

## 106. 音乐线条画

**目标：**音乐感受、自由表达
**时长：**10分钟
**材料：**纸、蜡笔、音乐

**玩法：**听慢音乐画慢线，听快音乐画快速线条。

**升级：**比较两段音乐画出的画有什么不同。

---

## 107. 海绵印画

**目标：**颜色混合、手部控制
**时长：**15分钟
**材料：**海绵、安全颜料、纸

**玩法：**用海绵蘸颜料印出圆点、云朵或自由图案。

**升级：**叠加两种颜色观察变化。

---

## 108. 纸杯小房子

**目标：**搭建、想象
**时长：**15分钟
**材料：**纸杯、纸板、贴纸

**玩法：**用纸杯和纸板搭建小房子，为玩偶设计门和窗。

**升级：**增加花园、道路和家具。

---

## 109. 厨房节奏队

**目标：**节奏模仿、声音探索
**时长：**10分钟
**材料：**木勺、塑料碗

**玩法：**家长敲“咚、咚、停”，孩子模仿。

**升级：**让孩子设计节奏，家长跟随。

---

## 110. 三种颜色画

**目标：**颜色使用、限制性创造
**时长：**10分钟
**材料：**三支蜡笔、纸

**玩法：**只用三种颜色完成一幅自由画。

**升级：**让孩子讲述画里的故事。

---

## 111. 旧盒子变身

**目标：**创造力、废物利用
**时长：**20分钟
**材料：**纸盒、贴纸、彩纸

**玩法：**把旧盒子变成公交车、商店、床或小屋。

**升级：**加入角色扮演。

---

## 112. 树叶拼贴

**目标：**自然艺术、形状组合
**时长：**15分钟
**材料：**落叶、纸、胶棒

**玩法：**用叶子拼成小鱼、花朵、人物或自由图案。

**升级：**给作品起名字并讲一个故事。

---

## 113. 音量指挥家

**目标：**声音大小控制
**时长：**5分钟
**材料：**音乐或拍手

**玩法：**家长手举高表示大声，手放低表示小声，孩子根据动作唱或拍手。

**升级：**交换角色。

---

## 114. 故事配音师

**目标：**声音想象、故事理解
**时长：**10分钟
**材料：**绘本

**玩法：**读故事时，请孩子为风声、雨声、脚步声和动物配音。

**升级：**不看绘本，只听声音猜故事场景。

---

## 115. 手指点点花

**目标：**指尖控制、图案创造
**时长：**10分钟
**材料：**安全手指颜料、纸

**玩法：**用手指点出花瓣、果实和雨点。

**升级：**按照大小或颜色完成规律图案。

---

## 116. 家庭小剧场

**目标：**角色扮演、表达
**时长：**15分钟
**材料：**围巾、帽子、玩偶

**玩法：**选择“去看医生”“去超市”“坐公交”等生活情境表演。

**升级：**由孩子决定角色和剧情。

---

## 117. 声音画布

**目标：**听觉联想
**时长：**10分钟
**材料：**纸、蜡笔、环境声音

**玩法：**听雨声、鸟声或交通声，画出听到声音时想到的颜色和线条。

**升级：**让家长猜孩子画的是什么声音。

---

## 118. 纸盘表情脸

**目标：**情绪认知、手工
**时长：**15分钟
**材料：**纸盘、彩纸、胶棒

**玩法：**制作开心、生气、难过和惊讶的表情脸。

**升级：**使用表情脸讲述什么时候会有这种心情。

---

## 119. 我的家庭歌曲

**目标：**语言节奏、家庭认知
**时长：**10分钟
**材料：**熟悉的简单旋律

**玩法：**把家人名字和日常活动编入简单重复的歌曲。

**升级：**让孩子替换歌词。

---

## 120. 一张纸能变什么

**目标：**发散思维、创造
**时长：**10分钟
**材料：**一张纸

**玩法：**纸可以变帽子、望远镜、桥、被子、盘子。轮流想新的用途。

**升级：**规定两分钟内想出五种玩法。

---

# 第九组：基础英语词汇认知游戏

## 121. Hello玩具见面会

**目标：**学习Hello、Hi、Bye
**时长：**5分钟
**材料：**几个玩具

**玩法：**拿起玩具互相打招呼：“Hello, Bear.”“Hi, Rabbit.”结束时说“Bye-bye.”

**升级：**加入“My name is…”

---

## 122. Color Hunt颜色寻宝

**目标：**认识red、yellow、blue、green
**时长：**10分钟
**材料：**不需要

**玩法：**家长说：“Find something red.”孩子在房间里寻找红色物品。

**升级：**找到后说：“It is red.”

---

## 123. Big and Small

**目标：**理解big、small
**时长：**5分钟
**材料：**大小不同的物品

**玩法：**拿出大球和小球，说：“Big ball. Small ball.”请孩子按口令选择。

**升级：**加入“Show me the big one.”

---

## 124. One Two Three动作数数

**目标：**英语1—5
**时长：**5分钟
**材料：**不需要

**玩法：**边说“One, two, three”边拍手、跳跃或拿积木。

**升级：**家长说数字，孩子完成对应次数的动作。

---

## 125. Body Touch身体部位

**目标：**认识head、nose、eyes、ears、hands、feet
**时长：**5分钟
**材料：**不需要

**玩法：**家长说：“Touch your nose.”孩子触摸对应部位。

**升级：**连续给出两个指令：“Touch your head and hands.”

---

## 126. Animal Sound动物声音

**目标：**认识cat、dog、duck、bird、cow
**时长：**5—10分钟
**材料：**动物卡片或玩具

**玩法：**看到动物后说名称并模仿声音：“Cat, meow.”“Dog, woof.”

**升级：**家长只发声音，孩子猜动物英语名称。

---

## 127. Fruit Basket水果篮

**目标：**认识apple、banana、orange、grape
**时长：**10分钟
**材料：**真实水果或模型

**玩法：**家长说：“Give me an apple.”孩子选择并递给家长。

**升级：**说：“I like apples.”

---

## 128. Open and Close

**目标：**理解open、close
**时长：**5分钟
**材料：**盒子、门、书

**玩法：**边操作边说：“Open the box. Close the box.”

**升级：**让孩子给家长发布英语口令。

---

## 129. Up and Down

**目标：**理解up、down
**时长：**5分钟
**材料：**不需要

**玩法：**说“Hands up”举手，说“Hands down”放下。

**升级：**加入“Stand up”“Sit down”。

---

## 130. Happy or Sad

**目标：**认识happy、sad、angry、tired
**时长：**5分钟
**材料：**表情卡

**玩法：**展示表情并说：“He is happy.”请孩子模仿表情。

**升级：**问：“Are you happy?”孩子回答“Yes”或“No”。

---

## 131. Weather Window

**目标：**认识sunny、rainy、cloudy、windy
**时长：**5分钟
**材料：**窗户或天气图

**玩法：**每天看窗外，说：“It is sunny today.”

**升级：**让孩子选择对应天气卡。

---

## 132. Clothes Helper

**目标：**认识shirt、shoes、hat、socks、coat
**时长：**5—10分钟
**材料：**真实衣物

**玩法：**穿衣时说：“Put on your shoes.”“Where is your hat?”

**升级：**孩子帮助玩偶穿衣并说出名称。

---

## 133. Toy Shop玩具商店

**目标：**认识ball、car、book、doll、blocks
**时长：**10分钟
**材料：**玩具

**玩法：**家长说：“I want a ball, please.”孩子找到并递给家长。

**升级：**加入“Here you are.”“Thank you.”

---

## 134. Food or Not Food

**目标：**基础食物词汇和分类
**时长：**5分钟
**材料：**食物和物品图片

**玩法：**看到apple说“Food”，看到shoe说“Not food”。

**升级：**加入drink、toy、clothes分类。

---

## 135. Where Is It

**目标：**认识in、on、under
**时长：**5—10分钟
**材料：**玩具、盒子

**玩法：**把玩具放在盒子里、上面和下面，说：“The bear is in the box.”

**升级：**问：“Where is the bear?”让孩子用单词或短句回答。

---

# 第十组：英语亲子互动与情境游戏

## 136. Good Morning Routine

**目标：**晨间日常英语
**时长：**5分钟
**材料：**不需要

**玩法：**起床后固定说：“Good morning.”“Wake up.”“Let’s get dressed.”

**升级：**让孩子每天主动说一句晨间英语。

---

## 137. Wash Your Hands

**目标：**卫生场景英语
**时长：**3分钟
**材料：**洗手用品

**玩法：**洗手时说：“Wash your hands. Soap, water, rinse, dry.”

**升级：**孩子给玩偶演示并说关键词。

---

## 138. Snack Time

**目标：**食物表达、礼貌用语
**时长：**5分钟
**材料：**点心、水

**玩法：**使用：“I want water, please.”“Here you are.”“Thank you.”

**升级：**加入“More, please.”“All done.”

---

## 139. English Treasure Hunt

**目标：**听懂简单英语指令
**时长：**10分钟
**材料：**家中物品

**玩法：**发布任务：“Find a book.”“Find something blue.”“Find two blocks.”

**升级：**连续完成两个要求。

---

## 140. Clean Up Song Game

**目标：**整理场景英语
**时长：**5分钟
**材料：**玩具

**玩法：**整理时重复：“Clean up, clean up. Toys in the box.”

**升级：**加入分类：“Cars here. Blocks there.”

---

## 141. Simon Says简化版

**目标：**听力理解、动作反应
**时长：**5分钟
**材料：**不需要

**玩法：**家长说：“Simon says touch your head.”孩子做动作。三岁阶段不必强调没有Simon says时不能动。

**升级：**熟练后再加入规则变化。

---

## 142. English Picnic

**目标：**食物、数量和礼貌表达
**时长：**15分钟
**材料：**玩具食物、布

**玩法：**玩野餐游戏：“One apple, two cups.”“Do you want juice?”“Yes, please.”

**升级：**孩子负责邀请玩偶参加野餐。

---

## 143. Bedtime English

**目标：**睡前生活英语
**时长：**5分钟
**材料：**床、玩偶

**玩法：**固定使用：“Time for bed.”“Good night.”“Close your eyes.”“Sweet dreams.”

**升级：**让孩子替玩偶完成睡前流程。

---

## 144. English Bus

**目标：**交通词汇、角色扮演
**时长：**10分钟
**材料：**椅子、纸票

**玩法：**椅子排成公交车，说：“Get on the bus.”“Sit down.”“Let’s go.”“Stop.”

**升级：**加入ticket、driver、window。

---

## 145. Doctor Game

**目标：**身体部位和简单表达
**时长：**10分钟
**材料：**玩具听诊器或安全道具

**玩法：**玩看医生：“What’s wrong?”“My tummy hurts.”“Open your mouth.”

**升级：**让孩子当医生给玩偶检查。

---

## 146. English Cooking

**目标：**动作词和食物词
**时长：**10—15分钟
**材料：**玩具厨房或真实安全食材

**玩法：**边做边说：“Mix, cut, pour, stir.”“Banana, milk, bowl.”

**升级：**孩子按英语动作指令完成步骤。

---

## 147. Feelings Mirror

**目标：**英语情绪表达
**时长：**5分钟
**材料：**镜子

**玩法：**面对镜子做表情，说：“I am happy.”“I am sad.”“I am tired.”

**升级：**问：“How do you feel?”孩子选择回答。

---

## 148. Please and Thank You Shop

**目标：**礼貌用语
**时长：**10分钟
**材料：**玩具商店物品

**玩法：**购物时必须使用：“Apple, please.”“Here you are.”“Thank you.”“You’re welcome.”

**升级：**加入“How many?”“Two, please.”

---

## 149. English Action Dice

**目标：**动作词汇
**时长：**10分钟
**材料：**纸盒骰子

**玩法：**骰子六面画jump、run、clap、turn、sit、stand。掷到哪一面就完成动作并说单词。

**升级：**加入数量：“Jump three times.”

---

## 150. My Little English Day

**目标：**综合复习、生活运用
**时长：**全天零散进行
**材料：**不需要

**玩法：**选择一天中的五个固定场景使用英语：

* 起床：Good morning.
* 穿衣：Put on your shoes.
* 吃饭：I want water, please.
* 整理：Toys in the box.
* 睡觉：Good night.

不要求整天说英语，只使用简单、固定、能理解的句子。

**升级：**每周增加一个新场景，保持重复，不频繁更换词汇。

---

# 活动库标签建议

为了方便“小芽计划”筛选，可以给每个游戏增加以下标签：

## 按时长

* 5分钟
* 10分钟
* 15分钟
* 20分钟

## 按准备难度

* 不用准备
* 家中现有材料
* 简单准备
* 需要提前准备

## 按场景

* 客厅
* 餐桌
* 厨房
* 洗澡时
* 睡前
* 户外
* 超市
* 出门路上
* 下雨天

## 按家长状态

* 今天很累
* 家长正常精力
* 适合周末
* 可以让孩子独立尝试
* 需要亲子合作

## 按能力

* 语言表达
* 数量逻辑
* 颜色形状
* 空间认知
* 精细动作
* 大运动
* 生活能力
* 情绪社交
* 自然科学
* 艺术创造
* 音乐节奏
* 英语启蒙
* 安全意识

# Codex录入建议

每个活动建议保存以下字段：

* 活动编号
* 活动名称
* 年龄范围
* 能力领域
* 活动时长
* 所需材料
* 活动步骤
* 简单版本
* 升级版本
* 家长引导语
* 安全提示
* 活动场景
* 家长精力等级
* 是否包含英语
* 搜索标签

系统生成每日计划时，建议自动组合：

* 1个语言、逻辑或英语游戏
* 1个精细动作、艺术或音乐游戏
* 1个运动、生活或户外游戏
* 1个可选的5分钟轻松游戏

避免一天连续安排多个需要大量准备或高度专注的活动。

这150个游戏已经覆盖语言、数学逻辑、空间认知、精细动作、大运动、生活能力、情绪社交、自然科学、艺术音乐，以及30个基础英语启蒙与情境游戏，可直接作为“小芽计划”的首批活动库。

---

下面继续编号为 **151—200**，全部是新的英语启蒙活动，尽量减少单纯认单词，增加寻宝、表演、制作、运动、故事和亲子合作。

# 小芽计划 Sprout Plan

## 新增50个趣味英语启蒙游戏

## 使用说明

适合年龄：3岁以上

使用原则：

* 每次只学习1—3个新词或一个短句。
* 家长先用动作、表情和实物帮助理解，不急着翻译和纠正。
* 孩子只做动作、不愿意开口，也算参与。
* 同一个游戏可以连续玩几天，比每天换新单词更有效。
* 英语口令保持短小，例如：\`Find it.\`、\`Put it here.\`、\`Your turn.\`

---

# 第一组：英语冒险与寻宝游戏

## 151. 彩色脚印探险

**英语目标：**red、blue、yellow、green、step、jump
**时长：**10分钟
**材料：**彩色纸张或彩色脚印卡

**玩法：**

把不同颜色的纸放在地面上，组成一条探险路线。

家长说：

* \`Step on red.\`
* \`Jump to blue.\`
* \`Find yellow.\`
* \`Stop on green.\`

孩子根据口令走到对应颜色。

**趣味变化：**

把部分颜色卡当成“小河”“石头”或“休息岛”。

**升级玩法：**

一次给两个指令：

\`Jump to red, then sit on blue.\`

---

## 152. 英语藏宝箱

**英语目标：**key、box、open、close、treasure
**时长：**10—15分钟
**材料：**小盒子、玩具钥匙、小礼物或贴纸

**玩法：**

把小礼物藏进盒子，告诉孩子：

\`This is a treasure box.\`

让孩子寻找钥匙。找到后说：

* \`I found the key!\`
* \`Open the box.\`
* \`What is inside?\`

**趣味变化：**

设置两三个假盒子，只有一个藏着宝物。

**升级玩法：**

孩子藏宝物并给家长线索：

\`It is under the chair.\`

---

## 153. 颜色怪兽送信

**英语目标：**letter、red、blue、give、take
**时长：**10分钟
**材料：**彩色信封、玩偶或纸盒角色

**玩法：**

准备几个不同颜色的“怪兽邮箱”，这里的怪兽只做可爱的纸盒角色，不使用恐怖造型。

家长说：

\`Give the red letter to the green friend.\`

孩子按照颜色送信。

**趣味变化：**

信封里放简单动作卡，如clap、jump、turn。

**升级玩法：**

孩子当邮递员问：

\`Who is this for?\`

---

## 154. 神秘脚印找动物

**英语目标：**walk、hop、crawl、animal、footprint
**时长：**10分钟
**材料：**纸质脚印、动物玩具

**玩法：**

在地面贴不同脚印，脚印尽头藏着动物。

孩子沿脚印前进，家长说：

* \`Follow the footprints.\`
* \`Walk slowly.\`
* \`Who is hiding?\`

找到后一起说动物名称。

**趣味变化：**

不同脚印使用不同动作前进。

**升级玩法：**

让孩子自己布置脚印路线。

---

## 155. 魔法颜色药水

**英语目标：**water、color、pour、mix、magic
**时长：**15分钟
**材料：**透明杯、水、安全食用色素

**玩法：**

准备两种颜色的水，让孩子倒入第三个杯子。

边操作边说：

* \`Pour the water.\`
* \`Mix, mix, mix.\`
* \`It is purple!\`
* \`Magic!\`

**趣味变化：**

每杯水起一个魔法名字。

**升级玩法：**

操作前先猜：

\`What color will it be?\`

---

## 156. 英语照片任务

**英语目标：**find、take a picture、smile、look
**时长：**10—20分钟
**材料：**手机，由家长操作

**玩法：**

给孩子发布拍照任务：

* \`Find something round.\`
* \`Find something green.\`
* \`Take a picture of a flower.\`
* \`Smile!\`

由家长负责拍照，孩子负责寻找。

**趣味变化：**

完成后制作“今天的英语发现”相册。

**升级玩法：**

让孩子用短句介绍照片：

\`This is a green leaf.\`

---

## 157. 神秘地图找贴纸

**英语目标：**go、turn、stop、here、there
**时长：**15分钟
**材料：**简单地图、贴纸

**玩法：**

在家里画一张简单地图，标出沙发、桌子和房门。

家长指挥：

* \`Go straight.\`
* \`Turn left.\`
* \`Stop here.\`
* \`Look under the table.\`

孩子找到贴纸。

**趣味变化：**

每个地点藏一块拼图，最后拼成完整图案。

**升级玩法：**

让孩子当地图指挥员。

---

## 158. 迷你超市找标签

**英语目标：**milk、bread、egg、rice、find
**时长：**10分钟
**材料：**食品包装或图片

**玩法：**

把几种食品摆成小超市。

家长发布购物任务：

\`Find the milk.\`
\`Put the bread in the basket.\`

**趣味变化：**

孩子推着小篮子购物，完成后去“收银台”。

**升级玩法：**

一次购买两个物品：

\`I need milk and eggs.\`

---

## 159. 谁藏在颜色门后

**英语目标：**door、behind、knock、open、hello
**时长：**10分钟
**材料：**彩纸小门、动物图片

**玩法：**

用彩纸制作几扇可以打开的小门，在门后藏动物图片。

孩子敲门：

\`Knock, knock.\`

家长问：

\`Who is behind the blue door?\`

打开后说：

\`Hello, little cat!\`

**趣味变化：**

门后也可以藏动作指令。

**升级玩法：**

让孩子给家长选择打开哪一扇门。

---

## 160. 英语救援小队

**英语目标：**help、stuck、save、pull、push
**时长：**10分钟
**材料：**玩偶、积木、纸盒

**玩法：**

把玩偶放在积木围成的“小困境”中。

家长说：

\`The bear is stuck!\`
\`Let’s help.\`
\`Push the box.\`
\`Pull the rope.\`

孩子完成救援。

**趣味变化：**

每次救援使用不同方法。

**升级玩法：**

孩子说：

\`I can help you.\`

---

# 第二组：动作、运动与身体英语游戏

## 161. 英语动作红绿灯

**英语目标：**walk、run、tiptoe、freeze
**时长：**10分钟
**材料：**音乐，可不用

**玩法：**

家长不再只使用红灯绿灯，而是变换动作：

* \`Walk.\`
* \`Run slowly.\`
* \`Tiptoe.\`
* \`Freeze!\`

**趣味变化：**

孩子被冻住后，家长轻碰一下才能“解冻”。

**升级玩法：**

连续发布两个动作指令。

---

## 162. 身体节奏密码

**英语目标：**clap、tap、stomp、shake
**时长：**5—10分钟
**材料：**不需要

**玩法：**

家长设计一个动作密码：

\`Clap, clap, stomp.\`

孩子听后模仿。

**趣味变化：**

完成正确密码才能打开“秘密门”。

**升级玩法：**

由孩子设计动作密码。

---

## 163. 英语枕头岛

**英语目标：**on、off、between、around
**时长：**10分钟
**材料：**枕头或软垫

**玩法：**

把枕头摆成小岛。

家长说：

* \`Stand on the island.\`
* \`Jump off.\`
* \`Stand between two pillows.\`
* \`Walk around the island.\`

**趣味变化：**

地面是“海水”，不能踩到。

**升级玩法：**

加入颜色和位置组合口令。

---

## 164. 小球动作挑战

**英语目标：**roll、bounce、throw、catch
**时长：**10分钟
**材料：**软球

**玩法：**

每次只练一个动作：

* \`Roll the ball.\`
* \`Bounce the ball.\`
* \`Throw the ball.\`
* \`Catch the ball.\`

**趣味变化：**

把球想象成蛋糕、月亮或小包裹。

**升级玩法：**

孩子听到动作词后快速选择正确动作。

---

## 165. 英语动物瑜伽

**英语目标：**stretch、bend、stand、sleep
**时长：**10分钟
**材料：**动物图片

**玩法：**

模仿不同动物动作：

* \`Stretch like a cat.\`
* \`Stand like a flamingo.\`
* \`Bend like a monkey.\`
* \`Sleep like a bear.\`

**趣味变化：**

播放安静音乐，做成早晨或睡前运动。

**升级玩法：**

孩子选择动物并发出英语口令。

---

## 166. 动作转盘

**英语目标：**spin、dance、crawl、kick、wave
**时长：**10分钟
**材料：**纸转盘

**玩法：**

转盘上画六种动作。转到哪一格，就边说单词边做动作。

**趣味变化：**

增加“像机器人一样”“像小鸟一样”等表演要求。

**升级玩法：**

加入次数：

\`Kick four times.\`

---

## 167. 英语隧道送货

**英语目标：**through、over、under、carry
**时长：**10分钟
**材料：**纸箱隧道、玩具

**玩法：**

孩子拿着玩具穿过路线：

* \`Go through the tunnel.\`
* \`Step over the pillow.\`
* \`Go under the table.\`
* \`Carry the box.\`

**趣味变化：**

玩具是需要准时送达的生日礼物。

**升级玩法：**

孩子记住三步路线后一次完成。

---

## 168. 风、雨、太阳动作游戏

**英语目标：**windy、rainy、sunny、cold、hot
**时长：**5—10分钟
**材料：**天气卡

**玩法：**

家长展示天气卡，孩子做动作：

* \`Windy\`：身体左右摇摆
* \`Rainy\`：手指做雨点
* \`Sunny\`：张开双臂
* \`Cold\`：抱紧身体
* \`Hot\`：扇风

**趣味变化：**

天气快速变化，孩子跟着切换。

**升级玩法：**

孩子当“天气导演”。

---

## 169. 慢动作与快动作

**英语目标：**fast、slow、quick、stop
**时长：**5分钟
**材料：**不需要

**玩法：**

家长说：

\`Walk slowly.\`
\`Clap fast.\`
\`Turn quickly.\`
\`Stop.\`

**趣味变化：**

假装进入“慢动作世界”和“快速世界”。

**升级玩法：**

故意做错动作，让孩子当小老师纠正。

---

## 170. 镜子指挥官

**英语目标：**copy me、your turn、my turn、same
**时长：**5—10分钟
**材料：**不需要

**玩法：**

家长说：

\`Copy me.\`

然后做简单动作，孩子像镜子一样模仿。

交换时说：

\`Your turn.\`
\`My turn.\`

**趣味变化：**

加入搞笑表情和机器人动作。

**升级玩法：**

连续模仿三个动作。

---

# 第三组：英语故事、角色扮演与想象游戏

## 171. 丢失的小帽子

**英语目标：**hat、lost、look for、found
**时长：**10分钟
**材料：**玩偶、小帽子

**玩法：**

玩偶的帽子不见了。

家长说：

\`The hat is lost.\`
\`Let’s look for it.\`

孩子寻找后说：

\`I found it!\`

**趣味变化：**

沿途设置两三个错误物品。

**升级玩法：**

孩子给家长位置提示。

---

## 172. 小熊的生日派对

**英语目标：**birthday、cake、gift、candle、party
**时长：**15分钟
**材料：**玩偶、积木蛋糕、纸礼物

**玩法：**

为玩偶举办生日派对。

使用：

* \`Happy birthday!\`
* \`Here is your gift.\`
* \`Blow the candle.\`
* \`Let’s eat cake.\`

**趣味变化：**

孩子负责邀请其他玩偶。

**升级玩法：**

学习说：

\`This gift is for you.\`

---

## 173. 玩偶酒店

**英语目标：**room、bed、key、sleep、welcome
**时长：**15分钟
**材料：**纸盒、玩偶、玩具钥匙

**玩法：**

纸盒变成酒店，家长当接待员：

\`Welcome to the hotel.\`
\`Here is your key.\`
\`This is your room.\`

孩子带玩偶入住。

**趣味变化：**

加入早餐和叫醒服务。

**升级玩法：**

孩子当酒店管理员。

---

## 174. 神奇餐厅

**英语目标：**menu、order、soup、rice、juice
**时长：**15分钟
**材料：**玩具食物、简单菜单

**玩法：**

孩子当服务员或顾客。

使用：

* \`Here is the menu.\`
* \`I want soup, please.\`
* \`Your food is ready.\`
* \`Enjoy!\`

**趣味变化：**

设计“彩虹汤”“星星果汁”等想象菜品。

**升级玩法：**

加入数量：

\`Two cups of juice, please.\`

---

## 175. 英语宠物医院

**英语目标：**pet、hurt、leg、medicine、better
**时长：**15分钟
**材料：**动物玩偶、玩具医疗用品

**玩法：**

玩偶动物来医院。

家长说：

\`The dog hurt its leg.\`
\`Let’s check.\`
\`Take some medicine.\`
\`You are better now.\`

**趣味变化：**

为宠物贴纸“包扎”。

**升级玩法：**

孩子当医生询问：

\`What’s wrong?\`

---

## 176. 月亮邮局

**英语目标：**moon、star、letter、send、good night
**时长：**10分钟
**材料：**纸信封、星星贴纸

**玩法：**

睡前给月亮或星星写一封图画信。

边做边说：

\`A letter for the moon.\`
\`Put in a star.\`
\`Send the letter.\`
\`Good night, moon.\`

**趣味变化：**

第二天早晨由家长准备一封“回信”。

**升级玩法：**

孩子说一句想写进信里的英语。

---

## 177. 玩具火车站

**英语目标：**train、ticket、station、go、wait
**时长：**15分钟
**材料：**椅子或玩具火车、纸票

**玩法：**

设置火车站和目的地。

使用：

* \`Here is your ticket.\`
* \`Wait at the station.\`
* \`The train is coming.\`
* \`Let’s go!\`

**趣味变化：**

每一站有一个小任务。

**升级玩法：**

加入：

\`Where are you going?\`

---

## 178. 小小消防站

**英语目标：**fire truck、water、help、safe、go
**时长：**15分钟
**材料：**玩具车、积木房子、蓝色纸条

**玩法：**

积木房子需要帮助，孩子开消防车前往。

家长说：

\`Help!\`
\`The fire truck is coming.\`
\`Use the water.\`
\`Everyone is safe.\`

**趣味变化：**

使用蓝纸条当水，不使用真实火源。

**升级玩法：**

设置不同路线和救援对象。

---

## 179. 失眠的小星星

**英语目标：**star、sleep、quiet、song、tired
**时长：**10分钟
**材料：**星星玩偶或纸星星

**玩法：**

小星星睡不着，孩子要帮助它。

使用：

\`The star is tired.\`
\`Be quiet.\`
\`Sing a song.\`
\`Close your eyes.\`

**趣味变化：**

给小星星制作小床。

**升级玩法：**

孩子设计完整的睡前步骤。

---

## 180. 玩偶旅行箱

**英语目标：**pack、bag、shirt、book、toothbrush
**时长：**15分钟
**材料：**小包、玩偶用品

**玩法：**

玩偶准备旅行，孩子帮助整理行李。

家长问：

\`What do we need?\`

一起说：

\`Pack the shirt.\`
\`Put in the book.\`
\`Don’t forget the toothbrush.\`

**趣味变化：**

根据去海边、外婆家或公园选择不同物品。

**升级玩法：**

加入不合适的物品，让孩子判断是否需要。

---

# 第四组：英语手工、感官和创作游戏

## 181. 英语表情面具

**英语目标：**happy、sad、angry、surprised、face
**时长：**15分钟
**材料：**纸盘、彩笔、木棒

**玩法：**

制作不同表情面具。

完成后戴上面具说：

\`I am happy.\`
\`I am surprised.\`

**趣味变化：**

家长说一个情境，孩子选择合适的表情。

**升级玩法：**

说出原因：

\`I am happy because…\`

---

## 182. 我的颜色冰淇淋店

**英语目标：**ice cream、scoop、pink、brown、white
**时长：**15分钟
**材料：**彩泥、纸杯

**玩法：**

用不同颜色彩泥制作冰淇淋球。

家长点单：

\`One pink scoop, please.\`
\`Two brown scoops.\`

**趣味变化：**

给口味起有趣的英文名字。

**升级玩法：**

加入top、middle、bottom的位置表达。

---

## 183. 英语纹理拼贴

**英语目标：**soft、rough、smooth、hard
**时长：**15分钟
**材料：**布、棉花、纸板、海绵

**玩法：**

摸一摸不同材料，再粘到纸上制作触觉画。

边摸边说：

\`It is soft.\`
\`It is rough.\`

**趣味变化：**

闭眼摸材料猜是哪一种。

**升级玩法：**

按触感分类。

---

## 184. 彩纸天气窗

**英语目标：**sun、cloud、rain、rainbow
**时长：**15分钟
**材料：**彩纸、胶棒、纸盘

**玩法：**

制作一扇可以更换天气的纸窗。

孩子每天选择：

\`Today is sunny.\`
\`I see a cloud.\`

**趣味变化：**

加入可移动的太阳和雨滴。

**升级玩法：**

说完整句：

\`It is rainy today.\`

---

## 185. 英语气味小瓶

**英语目标：**smell、sweet、fresh、nice、strong
**时长：**10分钟
**材料：**装有柠檬皮、茶叶、香皂的安全小瓶

**玩法：**

逐个闻味道。

家长说：

\`Smell it.\`
\`Is it sweet?\`
\`It smells nice.\`

**趣味变化：**

给每个气味瓶贴上图案，而不是文字。

**升级玩法：**

比较：

\`This smell is stronger.\`

---

## 186. 纸袋英语小怪脸

**英语目标：**eyes、mouth、nose、hair、big、small
**时长：**15分钟
**材料：**纸袋、彩纸、胶棒

**玩法：**

制作一个可爱纸袋角色。

边贴边说：

\`Two big eyes.\`
\`A small nose.\`
\`A funny mouth.\`

**趣味变化：**

完成后用纸袋角色表演。

**升级玩法：**

孩子口述，家长按照指令制作另一个角色。

---

## 187. 英语泡泡观察员

**英语目标：**bubble、big、small、pop、fly
**时长：**10分钟
**材料：**儿童泡泡水

**玩法：**

家长吹泡泡，孩子观察并听指令：

\`Find a big bubble.\`
\`Pop the small bubble.\`
\`The bubbles are flying.\`

**趣味变化：**

数一数眼前的泡泡。

**升级玩法：**

说：

\`I popped three bubbles.\`

---

## 188. 会变色的纸花

**英语目标：**flower、water、change、color、wait
**时长：**15分钟
**材料：**纸花、水彩笔、少量水

**玩法：**

用可吸水纸制作花朵，在花瓣上点颜色，让纸花接触少量水观察变化。

使用：

\`Put the flower in water.\`
\`Wait.\`
\`The color is changing.\`

**趣味变化：**

每朵花使用不同颜色组合。

**升级玩法：**

先预测变化结果。

---

## 189. 英语影子剧场

**英语目标：**shadow、light、big、small、move
**时长：**15分钟
**材料：**手电筒、墙面、纸偶

**玩法：**

用纸偶制作影子故事。

家长说：

\`Turn on the light.\`
\`Look at the shadow.\`
\`It is getting bigger.\`

**趣味变化：**

让两个影子角色见面和对话。

**升级玩法：**

孩子为影子故事配简单英语旁白。

---

## 190. 英语声音瓶

**英语目标：**loud、quiet、shake、listen、sound
**时长：**10分钟
**材料：**密封瓶、米粒、纸团等，由成人制作

**玩法：**

摇动装有不同材料的安全密封瓶。

使用：

\`Shake the bottle.\`
\`Listen.\`
\`It is loud.\`
\`It is quiet.\`

**趣味变化：**

听声音猜是哪一瓶。

**升级玩法：**

按声音从轻到响排序。

---

# 第五组：英语音乐、韵律与语音意识游戏

## 191. 名字拍手歌

**英语目标：**My name is…、节奏感
**时长：**5分钟
**材料：**不需要

**玩法：**

按照名字音节拍手：

\`My name is Lily.\`

每说一段就拍一下。

**趣味变化：**

给玩偶名字也配节奏。

**升级玩法：**

加入：

\`I like apples.\`

---

## 192. 开头声音侦探

**英语目标：**初步感受单词首音
**时长：**5—10分钟
**材料：**实物或图片

**玩法：**

选择容易辨认的词，如ball、banana、book。

夸张说出开头声音：

\`B-b-ball.\`
\`B-b-book.\`

让孩子寻找同样以这个声音开头的图片。

**趣味变化：**

把对应图片放进“B声音篮子”。

**升级玩法：**

一次只比较两个声音，如B和M。

---

## 193. 英语押韵听一听

**英语目标：**听觉韵律，不要求拼读
**时长：**5分钟
**材料：**图片，可不用

**玩法：**

使用简单押韵词：

\`cat—hat\`
\`dog—frog\`
\`star—car\`

家长读两组词，让孩子听哪一组“听起来像朋友”。

**趣味变化：**

每听到押韵词就拍手。

**升级玩法：**

让孩子从图片中配对押韵词。

---

## 194. 声音火车

**英语目标：**单词分段和节奏
**时长：**5—10分钟
**材料：**玩具火车

**玩法：**

每节车厢放一张图片。

火车出发时缓慢读词：

\`Ap-ple.\`
\`Ta-ble.\`
\`Ba-na-na.\`

每个音节让火车前进一节。

**趣味变化：**

单音节词只前进一次，多音节词前进多次。

**升级玩法：**

让孩子判断哪个词更长。

---

## 195. 英语回声山谷

**英语目标：**模仿语音、音量控制
**时长：**5分钟
**材料：**纸筒，可不用

**玩法：**

家长说一个词，孩子像回声一样重复。

家长大声：

\`Hello!\`

孩子轻声回应：

\`Hello…\`

**趣味变化：**

尝试快乐、困倦、惊讶等不同语气。

**升级玩法：**

模仿一个短句：

\`Where are you?\`

---

## 196. 单词鼓点

**英语目标：**听说节奏、词义反应
**时长：**10分钟
**材料：**小鼓或塑料盒

**玩法：**

为不同单词设置不同鼓点：

* sun：敲一下
* rain：敲两下
* rainbow：敲三下

家长说词，孩子敲对应次数。

**趣味变化：**

交换角色，孩子说词，家长敲鼓。

**升级玩法：**

连续听两个词后按顺序敲击。

---

## 197. 英语歌声接力

**英语目标：**短句重复、轮流意识
**时长：**5—10分钟
**材料：**简单熟悉旋律

**玩法：**

家长唱：

\`Hello, hello…\`

孩子接：

\`How are you?\`

也可以使用日常句：

\`Where is my…\`
孩子接：\`little bear?\`

**趣味变化：**

使用玩具麦克风传递演唱。

**升级玩法：**

由孩子自己设计下一句。

---

## 198. 安静声音和大声音

**英语目标：**whisper、loud、quiet、voice
**时长：**5分钟
**材料：**不需要

**玩法：**

家长举起不同卡片：

* 羽毛卡：用whisper轻声说
* 狮子卡：用loud voice说
* 月亮卡：保持quiet

使用简单词和短句练习。

**趣味变化：**

玩“不要吵醒小熊”的任务。

**升级玩法：**

让孩子当声音指挥员。

---

## 199. 英语声音猜角色

**英语目标：**voice、who、baby、robot、giant
**时长：**5—10分钟
**材料：**不需要

**玩法：**

家长用不同声音说同一句：

\`Hello, how are you?\`

可以模仿：

* baby voice
* robot voice
* giant voice
* sleepy voice

孩子猜是哪一种。

**趣味变化：**

孩子躲在门后变换声音。

**升级玩法：**

孩子自己创造一种声音并命名。

---

## 200. 我的英语小舞台

**英语目标：**综合表达、自信展示
**时长：**10—15分钟
**材料：**玩具麦克风、帽子或围巾

**玩法：**

每周安排一次小舞台，只展示本周熟悉的内容。

孩子可以任选：

* 唱一首简单英语歌
* 介绍一个玩具
* 表演三个动作
* 说颜色和数字
* 表演餐厅或商店对话

家长可以先示范：

\`Hello, everyone.\`
\`This is my bear.\`
\`It is brown.\`
\`Thank you.\`

**趣味变化：**

玩偶和家人都作为观众鼓掌。

**升级玩法：**

录制30秒小视频，保存到成长记录中，但不要求孩子反复重录。

---

# 适合加入小芽计划的英语游戏新标签

## 游戏形式

* 英语寻宝
* 英语实验
* 英语手工
* 英语运动
* 英语角色扮演
* 英语音乐
* 英语故事
* 英语感官
* 英语户外
* 英语生活场景

## 语言重点

* 颜色
* 数字
* 动作
* 位置
* 情绪
* 天气
* 食物
* 衣物
* 身体
* 交通
* 动物
* 礼貌表达
* 简单问答
* 自然拼读准备
* 韵律与语音意识

## 难度等级建议

**Level 1｜听懂并做动作**

孩子只需要理解和执行，不要求开口。

**Level 2｜说关键词**

孩子尝试说一个单词，如red、jump、apple。

**Level 3｜说固定短句**

例如：

* \`I found it.\`
* \`It is blue.\`
* \`I want juice.\`
* \`The bear is sleeping.\`

**Level 4｜自由替换**

孩子能把句子中的颜色、物品或动作换成其他词。

---

# 每周英语活动组合建议

每周选择5—7个英语游戏即可：

* 1个英语运动游戏
* 1个英语寻宝游戏
* 1个英语生活情境游戏
* 1个英语角色扮演游戏
* 1个英语手工或实验
* 1个英语音乐或声音游戏
* 1个自由复习活动

同一批核心词建议重复使用一周，不要每天大量增加新词。

这50个游戏更适合做成“小芽计划”中的独立英语活动包，其中有寻宝、旅行、酒店、餐厅、消防、实验、手工、影子剧场和小舞台，和前面的基础英语活动不会太重复。
`,b=`# 小芽计划新增活动（去重版）

# 第一组：英语启蒙新增

## 202. Teddy的旅行护照

**时间｜材料：**15分钟；玩偶、小本子、贴纸。
玩偶每到一个“国家”就完成一个英语任务，例如颜色岛、动物岛和食物岛。

家长说：

* \`Welcome to Color Island.\`
* \`Show me something green.\`
* \`Stamp the passport.\`

完成后在护照上盖章或贴贴纸。

**升级：**孩子自己当海关人员，询问玩偶名字和目的地。

---

---

## 204. Snack Robot点心机器人

**时间｜材料：**10分钟；安全点心或玩具食物。
家长扮演只能听懂英语的机器人。孩子需要用简单表达下达指令：

* \`Take one cookie.\`
* \`Put it on the plate.\`
* \`Give me some water.\`

机器人可以故意拿错，增加笑点。

**升级：**加入数量、颜色和位置组合。

---

---

## 205. 英语天气电视台

**时间｜材料：**10分钟；天气卡、纸筒麦克风。
孩子当小小天气主播：

* \`Today is sunny.\`
* \`It is windy.\`
* \`I need a coat.\`

家长可以扮演外景记者，询问应该穿什么衣服。

**升级：**播报明天的“想象天气”，例如彩虹雨、棉花云。

---

---

## 206. Toy Repair Shop玩具修理店

**时间｜材料：**15分钟；几个玩具、贴纸、胶带。
玩具带着不同问题来到修理店：

* \`The car has no wheel.\`
* \`The doll needs a hat.\`
* \`Can you fix it?\`

孩子完成简单“修理”，并说：

* \`It is ready.\`
* \`Here you are.\`

**升级：**孩子当接待员，询问玩具哪里出了问题。

---

---

## 208. Lost Sound声音寻宝

**时间｜材料：**10分钟；家中安全物品。
家长藏起一个会发声的物品，例如铃铛、纸袋或装米的密封瓶。

孩子根据英语提示寻找：

* \`Listen carefully.\`
* \`Go closer.\`
* \`It is behind you.\`
* \`You found it!\`

**升级：**孩子藏物品并给家长英语方向提示。

---

---

## 210. 英语任务手环

**时间｜材料：**15分钟；纸手环、动作图标。
在纸手环上贴四个英语任务图标，例如jump、clap、find red、hug。

孩子每完成一个任务，就撕下一张或盖一个章。

**升级：**让孩子自己设计第二天的任务手环。

---

# 第二组：语言表达新增

## 212. 失物招领所

**时间｜材料：**10分钟；三个家中物品。
家长扮演失物招领员，孩子描述丢失物品，但不能直接说出名字：

> 它是圆圆的，可以喝水，放在桌子上。

家长根据描述猜物品。

**升级：**增加材质、用途和位置线索。

---

---

## 215. 家庭博物馆讲解员

**时间｜材料：**15分钟；三件有故事的家庭物品。
把旧照片、小玩具、纪念品摆成展览。孩子当讲解员：

> 这是什么？
> 它是谁的？
> 我们什么时候用过？
> 为什么要留下它？

**升级：**给展品设计名字和说明卡。

---

---

## 217. 反过来的故事

**时间｜材料：**10分钟；熟悉的故事。
把熟悉故事反过来讲，例如：

* 小红帽去给大灰狼送药
* 三只小猪帮狼盖房子
* 小兔教乌龟怎样跑步

**升级：**让孩子解释为什么故事会变成这样。

---

---

## 218. 说得更清楚挑战

**时间｜材料：**5—10分钟；不需要。
孩子说“那里有一个东西”，家长不马上理解，而是温和追问：

* 在哪里？
* 什么颜色？
* 有多大？
* 它正在做什么？

目标是把模糊句变成更具体的句子。

**升级：**家长故意说得模糊，让孩子负责追问。

---

---

## 219. 真假线索侦探

**时间｜材料：**10分钟；三个物品。
家长描述一个物品，其中两条线索是真的，一条是假的：

> 它是红色的。
> 它可以吃。
> 它会唱歌。

孩子找出假线索并说明理由。

**升级：**孩子自己设计线索考家长。

---

---

## 220. 给未来的自己留言

**时间｜材料：**10分钟；录音设备或纸。
家长引导孩子说一段给“下个月的自己”的话：

* 最近最喜欢什么
* 学会了什么
* 想去哪里
* 有什么愿望

**升级：**一个月后播放，再请孩子回应过去的自己。

---

# 第三组：数量逻辑新增

## 221. 数字密码藏宝盒

**时间｜材料：**15分钟；数字卡、几个盒子。
每个盒子需要完成数字密码才能打开，例如：

* 拍手3次
* 找出4个积木
* 跳2下
* 放入5个纸团

**升级：**将两个数字任务连在一起。

---

---

## 222. 积木城市供电站

**时间｜材料：**15分钟；积木、数字卡。
搭建几栋房子，每栋房子需要不同数量的“电池积木”。

数字3的房子需要3块，数字5的房子需要5块。

**升级：**故意多放或少放，让孩子检查故障。

---

---

## 224. 会变化的积木队伍

**时间｜材料：**10分钟；5—10块积木。
先摆出一排积木，孩子闭眼后家长进行变化：

* 增加一块
* 拿走两块
* 调换颜色
* 把一块移到另一端

孩子说出发生了什么。

**升级：**一次做两种变化。

---

---

## 225. 数量钓鱼池

**时间｜材料：**15分钟；纸鱼、夹子或磁铁钓竿。
纸鱼上画不同数量的圆点。家长说：

> 请钓一条有4个点的鱼。

**升级：**钓两条鱼后比较谁更多，或合起来有多少。

---

---

## 226. 小动物排队规则

**时间｜材料：**10分钟；动物玩具。
设置排队条件：

* 小动物按大小排队
* 会飞的排前面
* 绿色的站在黄色后面
* 小猫必须在小兔和小熊中间

**升级：**让孩子自己制定一条排队规则。

---

---

## 228. 逻辑门卫

**时间｜材料：**10分钟；玩具或图片卡。
孩子当门卫，只有符合条件的物品可以进入城堡：

* 红色物品可以进入
* 圆形但不能是黄色
* 动物可以进入，车辆不可以

**升级：**同时使用两个筛选条件。

---

---

## 229. 谁坐哪张椅子

**时间｜材料：**10分钟；三个玩偶、三张颜色卡。
给出位置线索：

* 小熊不坐红色椅子
* 小兔坐在小猫旁边
* 小猫坐最右边

孩子根据线索安排座位。

**升级：**增加一个玩偶和一条新线索。

---

---

## 230. 消失的饼干

**时间｜材料：**10分钟；纸片饼干、玩偶。
先放5块饼干，玩偶“吃掉”1块，请孩子判断还剩几块。

三岁阶段可通过实际拿走理解，不要求写算式。

**升级：**加入“又送来2块”等连续变化。

---

# 第四组：空间认知新增

## 231. 房间迷你地图

**时间｜材料：**15分钟；纸、笔、贴纸。
和孩子画出房间里的床、桌子、门和窗户，再把玩具放到地图对应位置。

**升级：**让孩子根据地图去真实房间寻找物品。

---

---

## 232. 箱子空间站

**时间｜材料：**20分钟；大纸箱、小玩具。
把纸箱分成驾驶室、休息区、储物区和观察窗。孩子决定每件物品放在哪里。

**升级：**画一张空间站内部平面图。

---

---

## 236. 蓝图建筑师

**时间｜材料：**15分钟；积木、简单搭建图片。
先给孩子看一个由4—6块积木组成的“蓝图”，再让孩子照着搭建。

**升级：**只观察10秒，然后凭记忆完成。

---

---

## 237. 小人偶视角摄影

**时间｜材料：**10分钟；小人偶、家长手机。
把小人偶放在桌下、盒子中或书架旁，拍下它“看到的世界”。

讨论：

* 它前面有什么
* 后面有什么
* 哪个东西离它最近
* 哪个最高

**升级：**根据照片猜小人偶当时在哪里。

---

---

## 238. 影子建筑工地

**时间｜材料：**15分钟；积木、手电筒。
搭建积木后照出影子，改变积木位置和光源方向，观察影子变化。

**升级：**尝试搭出与指定影子相似的建筑。

---

---

## 239. 帐篷内部设计师

**时间｜材料：**20分钟；毯子、椅子、枕头。
搭一个安全小帐篷，让孩子规划：

* 门在哪里
* 睡觉区在哪里
* 绘本放在哪里
* 灯放在哪里

**升级：**画出帐篷地图，并邀请玩偶入住。

---

---

## 240. 摄像机路线复原

**时间｜材料：**10分钟；手机由家长操作。
家长拍摄一段从客厅走到卧室的短视频。孩子观察后，按同样路线行走。

**升级：**视频中加入一次绕行、一次停留和一次转弯。

---

# 第五组：精细动作新增

## 241. 彩色螺丝维修站

**时间｜材料：**15分钟；儿童大号螺丝玩具。
孩子根据颜色把螺丝拧到对应位置，完成“机器维修”。

**升级：**按照图卡指定的顺序安装。

---

---

## 242. 吸管项链设计室

**时间｜材料：**15分钟；粗吸管段、粗绳。
将吸管剪成较大的安全段，孩子穿成项链或规律链。

**升级：**按颜色规律穿插。

必须成人准备材料并防止误吞。

---

---

## 243. 贴纸小医生

**时间｜材料：**10分钟；大贴纸、玩偶图片。
图片中的玩偶出现“擦伤”，孩子把贴纸准确贴到指定位置。

**升级：**按照指令贴在左手、右脚、膝盖等部位。

---

---

## 245. 纽扣披萨店

**时间｜材料：**15分钟；大纽扣或大圆片、纸盘。
孩子按照“订单”摆放披萨配料：

* 2个红色
* 1个黄色
* 3个绿色

**升级：**制作左右两边相同的对称披萨。

---

---

## 246. 扭扭棒动物救援

**时间｜材料：**15分钟；扭扭棒、大孔纸板。
把扭扭棒穿过纸板孔，制作笼子。孩子需要弯曲、旋转并打开“笼门”救出玩偶。

**升级：**使用扭扭棒制作新的门锁结构。

---

---

## 247. 滴管颜色实验

**时间｜材料：**15分钟；儿童滴管、彩色水、吸水纸。
孩子用滴管把颜色滴到指定圆圈或纸花中。

**升级：**用两种颜色在纸上混合。

注意防止误饮。

---

---

## 248. 图钉板星空

**时间｜材料：**15分钟；儿童安全蘑菇钉板。
按照星星、月亮或小花图案插入大号蘑菇钉。

**升级：**观察图片后凭记忆完成。

---

---

## 249. 拉链城市

**时间｜材料：**15分钟；旧衣物上的安全拉链、布板。
不同拉链代表商店门、车库门和房屋门。孩子完成开门、关门和寻找物品任务。

**升级：**加入纽扣、魔术贴和按扣。

---

---

## 250. 活动纸偶关节师

**时间｜材料：**20分钟；纸板人物、纸质活动钉。
家长提前准备大块身体部件，孩子连接手臂、腿和身体，制作可活动纸偶。

**升级：**摆出不同动作并编小故事。

---

# 第六组：大运动新增

## 251. 会讲故事的障碍路线

**时间｜材料：**15分钟；枕头、纸箱、胶带。
路线不是单纯运动，而是一段故事：

* 跨过小河
* 穿过山洞
* 绕开大石头
* 把药送给小熊

**升级：**孩子设计下一段剧情。

---

---

## 252. 动物快递接力

**时间｜材料：**10分钟；动物玩具、小篮子。
每种动物需要使用不同动作运送：

* 小兔用跳
* 小猫轻轻走
* 小鸭摇摆走
* 乌龟慢慢爬

**升级：**一次运送两个不同动物。

---

---

## 253. 云朵捕捉员

**时间｜材料：**10分钟；白色纸团或棉球、大篮子。
家长把“云朵”轻轻抛出，孩子用篮子接住。

**升级：**按大小或颜色把云送到不同天空站。

避免使用可能误吞的小棉球。

---

---

## 254. 节奏障碍地图

**时间｜材料：**15分钟；音乐、软垫。
不同区域对应不同节奏：

* 快音乐快速走
* 慢音乐慢慢爬
* 鼓声响时跳
* 音乐停时保持不动

**升级：**孩子担任音乐指挥。

---

---

## 255. 气球排球合作赛

**时间｜材料：**10分钟；气球、软绳。
两人隔着低绳拍气球，目标是合作保持气球不落地，而不是竞争得分。

**升级：**只能使用一只手或手背。

---

---

## 258. 追影子游戏

**时间｜材料：**10分钟；有阳光的安全场地。
家长和孩子尝试踩到对方的影子，同时保护自己的影子不被踩。

**升级：**模仿影子动作或摆出特定造型。

---

---

## 260. 丝巾风舞

**时间｜材料：**10分钟；轻薄丝巾、音乐。
根据音乐挥舞丝巾：

* 风小时轻轻飘
* 风大时画大圆
* 下雨时上下点动
* 风停时把丝巾藏起来

**升级：**孩子创造新的天气动作。

---

# 第七组：生活能力新增

## 261. 早餐计划师

**时间｜材料：**10分钟；食物图片卡。
孩子从图片中选择早餐，并检查是否有主食、水果和饮品。

重点不是营养考试，而是练习选择与计划。

**升级：**前一天晚上制作第二天早餐卡。

---

---

## 262. 洗衣分类工厂

**时间｜材料：**10分钟；干净衣物、篮子。
按照家庭成员、颜色、大小或衣物类型进行分类。

**升级：**完成袜子配对和叠毛巾。

---

---

## 263. 背包空间挑战

**时间｜材料：**10分钟；小背包、外出用品。
让孩子尝试把水杯、纸巾、帽子和小玩具合理装入背包。

讨论哪些放里面，哪些放侧袋。

**升级：**根据公园、超市、下雨天选择不同用品。

---

---

## 264. 餐桌颜色暗号

**时间｜材料：**10分钟；安全餐具、颜色卡。
给每位家人分配颜色，孩子按照颜色摆放餐具和杯子。

**升级：**加入人数变化，例如今天多来一位客人。

---

---

## 266. 家庭求助信息练习

**时间｜材料：**5—10分钟；玩具电话。
练习说出：

* 自己的小名
* 家长姓名
* 需要什么帮助
* 找不到家长时应该找谁

不要求孩子记住详细住址，也不要制造恐惧。

**升级：**模拟向工作人员清楚说明情况。

---

---

## 267. 五分钟清洁路线

**时间｜材料：**5分钟；小抹布、收纳盒。
把清洁做成路线：

1. 收三个玩具
2. 擦自己的小桌子
3. 把脏衣服放进篮子
4. 检查地面

**升级：**孩子画自己的清洁路线卡。

---

---

## 268. 食物观察员

**时间｜材料：**10分钟；安全水果或蔬菜。
观察食物的颜色、气味、软硬和外皮是否发生变化，学习“需要先问大人再吃”。

**升级：**比较新鲜和放置较久的同类食材，但不让孩子自行判断能否食用。

---

---

## 269. 植物值日生

**时间｜材料：**每天3分钟；植物、值日卡。
孩子负责观察土壤、擦叶片或提醒家长浇水，并在值日卡上贴一片叶子。

**升级：**每周记录一张植物照片。

---

# 第八组：情绪社交新增

## 271. 情绪邮箱

**时间｜材料：**10分钟；小纸盒、表情卡。
家人把今天的情绪卡放进邮箱。晚上一起抽取并交流：

> 今天什么时候有这种感觉？
> 当时需要什么？

**升级：**孩子用图画制作自己的情绪信。

---

---

## 272. 道歉修理店

**时间｜材料：**10分钟；两个玩偶。
一个玩偶不小心撞倒了另一个的积木。引导孩子理解道歉不只是说“对不起”，还包括：

* 承认发生了什么
* 关心对方
* 想办法修复
* 下次怎样做

**升级：**讨论什么时候不需要被迫道歉。

---

---

## 273. 等待红绿灯

**时间｜材料：**5—10分钟；红黄绿卡。
绿灯可以行动，黄灯准备等待，红灯停下并做一次深呼吸。

逐渐把等待时间从5秒增加到30秒。

**升级：**应用到轮流玩玩具的真实场景。

---

---

## 274. 友谊配方实验室

**时间｜材料：**10分钟；纸杯、图片卡。
把“倾听、轮流、帮助、分享、尊重拒绝”等卡片放入友谊杯。

讨论：

> 如果缺少轮流，会发生什么？
> 分享是不是每次都必须？

**升级：**孩子设计自己的友谊配方。

---

---

## 275. 轮流麦克风

**时间｜材料：**10分钟；玩具麦克风。
拿到麦克风的人说话，其他人负责听。话题可以是：

* 今天最喜欢的事情
* 最近想学什么
* 希望家人怎样帮助自己

**升级：**听完后复述对方的一句话。

---

---

## 276. 我的选择卡

**时间｜材料：**10分钟；选择图片卡。
在孩子不愿意配合时，提供两个可接受选择：

* 先收车还是先收积木
* 画画还是听故事
* 自己穿鞋还是请家长帮忙

**升级：**让孩子提出第三种合理选择。

---

---

## 277. 身体边界小盾牌

**时间｜材料：**10分钟；纸盾牌、彩笔。
在盾牌上画或贴：

* 我不喜欢时可以说“不”
* 我可以离开
* 我可以告诉信任的大人
* 我的身体属于我

**升级：**用玩偶练习清楚、坚定地表达。

---

---

## 278. 冲突漫画结局

**时间｜材料：**15分钟；两到三格情境图片。
图片中两个孩子同时想要一个玩具，请孩子画或说出不同结局：

* 轮流
* 一起玩
* 换玩具
* 先询问对方
* 暂时分开

**升级：**比较每种结局可能产生的感受。

---

---

## 279. 我的平静工具箱

**时间｜材料：**15分钟；小盒子、柔软物品、图片。
和孩子一起放入适合自己的平静工具：

* 小抱枕
* 呼吸图片
* 安静音乐
* 涂画纸
* 捏压玩具
* 请求拥抱卡

**升级：**孩子情绪平稳时练习怎样使用，而不是只在生气时拿出来。

---

---

## 280. 同理心小侦探

**时间｜材料：**10分钟；生活照片或绘本。
观察人物表情、动作和环境，猜测：

* 他可能是什么心情
* 为什么
* 他可能需要什么
* 怎样询问才不会替他决定

**升级：**强调“猜测不一定正确，可以直接问对方”。

---

# 第九组：自然科学新增

## 281. 会走路的彩色水

**时间｜材料：**20分钟以上；透明杯、纸巾、彩色水。
将两个有颜色的水杯和一个空杯排列，用纸巾连接，观察水沿纸巾慢慢移动。

**升级：**预测空杯最终会变成什么颜色。

---

---

## 282. 迷你天气瓶

**时间｜材料：**15分钟；透明瓶、水、泡沫或安全材料。
制作表现晴天、云和雨的观察瓶，摇动后观察“天气”变化。

**升级：**每天根据真实天气选择对应瓶子。

所有瓶盖由成人密封。

---

---

## 283. 种子降落伞

**时间｜材料：**15分钟；纸、棉线、轻纸团。
制作大小不同的纸降落伞，从相同高度放下，观察谁落得更慢。

**升级：**改变伞面大小或线的长度。

---

---

## 284. 磁铁救援船

**时间｜材料：**15分钟；磁铁、回形针纸船、水盆。
让磁铁隔着纸板或盆壁移动带有回形针的纸船。

**升级：**设置水上路线和障碍。

磁铁必须由成人保管，防止误吞。

---

---

## 285. 会跳舞的米粒

**时间｜材料：**10分钟；保鲜膜、碗、少量米粒、音箱。
在碗上拉紧保鲜膜，放少量米粒，靠近声音源观察振动。

**升级：**比较大声、小声和不同音乐的变化。

---

---

## 287. 自制净水观察器

**时间｜材料：**20分钟；透明瓶、棉布、沙石，由成人准备。
让浑浊水经过不同材料，观察外观变化。

必须明确告诉孩子：

> 过滤后的水仍然不能喝。

**升级：**比较不同过滤顺序。

---

---

## 288. 叶子水汽袋

**时间｜材料：**数小时；透明袋、植物叶片。
在成人帮助下，将透明袋轻轻套在植物部分叶片上，观察一段时间后是否出现小水滴。

**升级：**比较阳光处和阴凉处，但不要损伤植物。

---

---

## 289. 水迹消失比赛

**时间｜材料：**15分钟；少量水、不同表面。
在瓷砖、纸板和金属盘上滴相同数量的水，观察哪里干得更快。

**升级：**比较风扇旁边和普通位置。

---

---

## 290. 纸桥承重实验

**时间｜材料：**15分钟；纸张、两个杯子、积木。
一张平纸搭桥，再把纸折成波浪或拱形，比较能承受多少积木。

**升级：**孩子设计一种更坚固的纸桥。

---

# 第十组：艺术创造新增

## 291. 故事影子拼贴

**时间｜材料：**20分钟；黑色纸、彩纸、胶棒。
剪出人物和场景的简单轮廓，拼成有前后层次的影子故事。

**升级：**用手电筒照出真正的影子进行表演。

---

---

## 292. 自然印章设计室

**时间｜材料：**15分钟；树叶、蔬菜切面由成人准备、安全颜料。
使用叶脉、莲藕、秋葵等纹理进行印画。

**升级：**把不同印记组合成城市、花园或人物。

---

---

## 293. 触感城市

**时间｜材料：**20分钟；瓦楞纸、布、海绵、包装纸。
使用不同材质制作城市：

* 粗糙道路
* 柔软公园
* 光滑湖面
* 凸起房屋

**升级：**闭眼触摸并描述城市区域。

---

---

## 294. 立体明信片

**时间｜材料：**20分钟；卡纸、彩笔、胶带。
制作打开后会立起来的花、房子或小树明信片。

**升级：**送给家人，并请孩子口述祝福语。

---

---

## 296. 我的家庭徽章

**时间｜材料：**15分钟；纸板、彩笔、贴纸。
孩子选择代表家庭的颜色、图案和物品，设计一个家庭徽章。

**升级：**解释每个图案代表什么。

---

---

## 297. 光影投影画

**时间｜材料：**15分钟；手电筒、透明彩色片、纸。
把彩色透明片放在光源前，在纸上形成光影，再沿边缘描画或自由创作。

**升级：**重叠两种颜色观察变化。

---

---

## 298. 蜡笔秘密画

**时间｜材料：**15分钟；白色蜡笔、水彩。
先用白色蜡笔画秘密图案，再刷上浅色水彩让图案显现。

**升级：**家长和孩子互相制作秘密留言。

---

---

## 299. 家庭迷你展览

**时间｜材料：**20分钟；近期作品、标签纸。
孩子从自己的作品中挑选3—5件，安排展示顺序、作品名称和展览路线。

**升级：**邀请家人参观，孩子担任讲解员。

---

---

## 300. 折叠故事盒

**时间｜材料：**20分钟；小纸盒、彩纸、玩偶。
盒子打开后变成一个完整场景，例如家、森林、商店或车站。

**升级：**制作两个能连接的故事盒，发展连续剧情。

---

# 第十一组：音乐节奏新增

## 304. 情绪乐器配对

**时间｜材料：**10分钟；几种安全乐器或物品。
为不同情绪选择声音：

* 开心适合什么声音
* 紧张适合什么节奏
* 难过适合快还是慢
* 安静适合哪件乐器

**升级：**用声音演出一段情绪变化。

---

---

## 307. 节奏藏宝地图

**时间｜材料：**15分钟；地图、鼓或拍手。
地图上的每个地点有不同节奏密码。正确模仿节奏后才能前进。

**升级：**最后由孩子设计宝藏地点的密码。

---

---

## 308. 家庭声音宾果

**时间｜材料：**15分钟；声音图片卡。
卡片包括关门声、水声、翻书声、脚步声、钥匙声。听到或制造一个声音，就盖住对应图片。

**升级：**闭眼听声音并判断方向。

---
`,x=[`butter`,`blush`,`powder`,`lilac`,`peach`,`mint`,`sky`,`oat`],ee=`⭐.🌈.☀️.🌙.☁️.🌼.🍓.🫧.🪁.🍪.🧸.🎀.🍋.🐝.🦋.🐚.🌿.🍄.🌻.🍎.🎈.🪴.🧩.💛.🧺.🪵.🎵.✨.🛝.🥕`.split(`.`),S=[[/磁铁/,`🧲`],[/护照/,`🛂`],[/机器人/,`🤖`],[/电视台|主播|麦克风/,`🎙️`],[/修理|维修|工具箱/,`🧰`],[/手环/,`⌚`],[/博物馆|展览/,`🏛️`],[/发布会/,`📣`],[/密码|藏宝盒|逻辑门卫/,`🔐`],[/钓鱼/,`🎣`],[/椅子/,`🪑`],[/螺丝/,`🔩`],[/项链|手链/,`📿`],[/滴管|净水|彩色水/,`🧪`],[/拉链|关节/,`🧵`],[/气球/,`🎈`],[/降落伞/,`🪂`],[/背包/,`🎒`],[/早餐/,`🍞`],[/洗衣/,`👕`],[/餐桌/,`🍽️`],[/求助信息/,`☎️`],[/道歉|友谊|冲突/,`🤝`],[/边界|盾牌|徽章/,`🛡️`],[/同理心|平静/,`💛`],[/明信片/,`💌`],[/纸桥/,`🌉`],[/光影投影/,`🔦`],[/天气瓶/,`🌦️`],[/英语|Hello|Color Hunt|Big and Small|One Two Three|Body Touch|Open and Close|Up and Down|Good Morning|Snack Time|Simon Says|Where Is It/i,`🔤`],[/袋子|盒子|篮|筐/,`🧺`],[/故事|图片|记者|留言|介绍|一句话|形容词|猜猜我/,`💬`],[/声音|听|音乐|歌曲|节奏|配音|音量/,`🎵`],[/玩具|小熊|玩偶|照顾员/,`🧸`],[/数字|数量|数数|更多|分饼干|一人一个|规律/,`🔢`],[/颜色|彩虹|彩色/,`🎨`],[/形状|拼图|九宫格|地图|路线|空间|左右|上面|下面/,`🧩`],[/纸杯|高塔|搭|房子/,`🏠`],[/袜子|衣服|Clothes|穿衣/,`🧦`],[/勺子|厨房|Cooking|水果|苹果|Food|餐|食物/,`🥣`],[/贴纸|拼贴|画|彩泥|海绵印|手指点/,`🖍️`],[/剪刀|理发/,`✂️`],[/夹子|纽扣|瓶盖|包装/,`🖐️`],[/走|跳|平衡|动作|身体|投递|公交|Bus/,`👣`],[/情绪|生气|感谢|Happy|Feelings/,`😊`],[/植物|种子|叶子|花|自然/,`🌱`],[/影子|光/,`☀️`],[/水|冰|雨|沉下|融化/,`💧`],[/风|云/,`☁️`],[/闻|触觉|感官/,`👃`],[/动物|Animal/,`🐾`],[/安全|Doctor/,`🩹`],[/商店|超市|Shop|购物/,`🛒`],[/清理|Clean Up|家务/,`🧹`],[/床|睡|Bedtime/,`🌙`]];function C(e,t,n,r){return e>=201?[[`英语启蒙`,`英语启蒙`],[`语言表达`,`语言表达`],[`数量逻辑`,`数量逻辑`],[`空间认知`,`空间认知`],[`精细动作`,`精细动作`],[`大运动`,`大运动`],[`生活能力`,`生活能力`],[`情绪社交`,`情绪社交`],[`自然科学`,`自然科学`],[`艺术创造`,`艺术创造`],[`音乐节奏`,`音乐节奏`]].find(([e])=>t.includes(e))?.[1]||`生活能力`:e>=121?`英语启蒙`:e>=106?/音乐|节奏|声音|歌曲|配音|音量/.test(`${n}${r}`)?`音乐节奏`:`艺术创造`:e>=91?`自然科学`:e===86||e===87?`情绪社交`:e>=88?`生活能力`:/语言/.test(t)?`语言表达`:/数量/.test(t)?`数量逻辑`:/颜色/.test(t)?`空间认知`:/精细/.test(t)?`精细动作`:/大运动/.test(t)?/音乐/.test(n)?`音乐节奏`:`大运动`:`生活能力`}function te(e){return e.replace(/^---$/gm,``).replace(/^\s*[*-]\s+/gm,``).replace(/`/g,``).replace(/\n{2,}/g,`
`).replace(/\n/g,` `).replace(/\s{2,}/g,` `).trim()}function ne(e,t){let n=t.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`);return te(e.match(RegExp(`\\*\\*${n}：\\*\\*\\s*([\\s\\S]*?)(?=\\n\\s*\\*\\*[^\\n]+：\\*\\*|$)`))?.[1]||``)}function re(e,t){for(let n of t){let t=ne(e,n);if(t)return t}return``}function ie(e){let[t=``,...n]=(e.match(/\*\*时间｜材料：\*\*\s*([^\n]+)/)?.[1]||``).split(/[；;]/);return{duration:t.trim(),materials:n.join(`；`).replace(/[。.]$/,``).trim()}}function ae(e){let t=e.split(/\n\s*\*\*升级：\*\*/)[0];return te(t.replace(/\*\*时间｜材料：\*\*[^\n]*/,``).replace(/^\s*>\s?/gm,``).replace(/^\s*[*-]\s+/gm,`。`).replace(/^\s*\d+[.、]\s+/gm,`。`))}function oe(e){return{英语启蒙:`英语理解、情境表达`,语言表达:`叙事组织、清楚表达`,数量逻辑:`数量关系、逻辑推理`,空间认知:`方位理解、空间规划`,精细动作:`手眼协调、精细控制`,大运动:`身体协调、动作计划`,生活能力:`自主生活、任务规划`,情绪社交:`情绪理解、社会沟通`,自然科学:`观察预测、动手实验`,艺术创造:`材料探索、创意表达`,音乐节奏:`节奏感知、声音创造`}[e]}function se(e){let t=e.split(/(?<=[。！？])|(?:；)/).map(e=>e.trim()).filter(Boolean);return t.length>1?t.slice(0,5):[e]}function ce(e){return S.find(([t])=>t.test(e))?.[1]||`🌟`}function le(e,t,n){return t===`英语启蒙`?e<=135?`英语词汇与动作`:e<=150?`英语生活情境`:e<=160?`英语寻宝探索`:e<=170?`英语动作运动`:e<=180?`英语情境故事`:e<=190?`英语艺术感官`:`英语语音音乐`:n.replace(/^第.+组：/,``)}function ue(e,t,n){let r=`${e}${t}${n}`;return/剪刀|切|刀具/.test(r)?`剪切和刀具步骤由成人完成，孩子使用圆头儿童安全剪刀。`:/磁铁|回形针/.test(r)?`磁铁和回形针由成人全程保管，严防吞咽；活动结束立即清点并收至孩子拿不到的位置。`:/不能喝|净水|浑浊水|过滤后的水/.test(r)?`实验用水和过滤后的水都不能饮用；结束后清洁双手和操作区域。`:/小物|纽扣|瓶盖|种子|蘑菇钉|棉球|米粒|吸管段/.test(r)?`使用足够大的材料并由成人全程保管，避免入口、鼻孔和耳道；活动后清点收好。`:/水|冰|雨量|沉下|海绵/.test(r)?`控制水量并及时擦干地面，避免滑倒；全程由成人陪同。`:/厨房|食物|水果|点心|Cooking|Snack/.test(r)?`先确认食物不过敏，清洁双手，涉及加热或刀具的步骤由成人完成。`:/户外|公园|超市|散步|影子|自然|风|云/.test(r)?`选择安全区域并始终保持在成人视线内，注意天气、防晒与交通。`:``}var de={red:`红色`,blue:`蓝色`,yellow:`黄色`,green:`绿色`,orange:`橙色`,pink:`粉色`,purple:`紫色`,white:`白色`,black:`黑色`,brown:`棕色`,color:`颜色`,rainbow:`彩虹`,one:`一`,two:`二`,three:`三`,four:`四`,jump:`跳`,step:`踩`,walk:`走`,run:`跑`,stop:`停`,go:`出发`,sit:`坐下`,stand:`站起来`,turn:`转身`,clap:`拍手`,dance:`跳舞`,open:`打开`,close:`关上`,find:`找到`,found:`找到了`,look:`看`,listen:`听`,touch:`摸一摸`,smell:`闻一闻`,shake:`摇一摇`,roll:`滚动`,give:`给`,take:`拿`,show:`展示`,stamp:`盖章`,put:`放`,fix:`修理`,hug:`拥抱`,hop:`单脚跳`,crawl:`爬`,follow:`跟随`,pour:`倒入`,mix:`搅拌`,smile:`微笑`,knock:`敲门`,help:`帮助`,save:`救援`,pull:`拉`,push:`推`,tiptoe:`踮脚走`,freeze:`定住`,tap:`轻拍`,stomp:`跺脚`,bounce:`拍球`,throw:`扔`,catch:`接住`,stretch:`伸展`,bend:`弯腰`,sleep:`睡觉`,spin:`旋转`,kick:`踢`,wave:`挥手`,carry:`搬运`,blow:`吹`,eat:`吃`,check:`检查`,send:`寄出`,wait:`等待`,sing:`唱歌`,pack:`收进行李`,change:`变化`,pop:`戳破`,fly:`飞`,move:`移动`,whisper:`轻声说`,copy:`模仿`,order:`点餐`,wake:`醒来`,wash:`清洗`,rinse:`冲洗`,dry:`擦干`,clean:`整理`,box:`盒子`,key:`钥匙`,treasure:`宝藏`,letter:`信`,ball:`球`,book:`书`,bag:`包`,hat:`帽子`,toy:`玩具`,car:`小汽车`,train:`火车`,island:`小岛`,passport:`护照`,plate:`盘子`,wheel:`车轮`,doll:`玩偶`,door:`门`,rope:`绳子`,picture:`照片`,basket:`篮子`,blocks:`积木`,apple:`苹果`,apples:`苹果`,banana:`香蕉`,grape:`葡萄`,milk:`牛奶`,water:`水`,bread:`面包`,cookie:`饼干`,food:`食物`,spoon:`勺子`,cup:`杯子`,cups:`杯子`,egg:`鸡蛋`,eggs:`鸡蛋`,rice:`米饭`,juice:`果汁`,soup:`汤`,cake:`蛋糕`,candle:`蜡烛`,menu:`菜单`,medicine:`药`,cat:`猫`,dog:`狗`,duck:`鸭子`,cow:`奶牛`,bird:`小鸟`,fish:`鱼`,bear:`小熊`,rabbit:`兔子`,lion:`狮子`,elephant:`大象`,animal:`动物`,pet:`宠物`,sun:`太阳`,rain:`雨`,wind:`风`,cloud:`云`,weather:`天气`,flower:`花`,leaf:`叶子`,tree:`树`,moon:`月亮`,star:`星星`,shadow:`影子`,light:`光`,sunny:`晴朗的`,rainy:`下雨的`,cloudy:`多云的`,windy:`有风的`,cold:`冷`,hot:`热`,fresh:`清新的`,head:`头`,nose:`鼻子`,eyes:`眼睛`,ears:`耳朵`,hands:`手`,feet:`脚`,mouth:`嘴巴`,hair:`头发`,face:`脸`,leg:`腿`,tummy:`肚子`,shirt:`衬衫`,shoes:`鞋子`,socks:`袜子`,coat:`外套`,toothbrush:`牙刷`,room:`房间`,bed:`床`,hotel:`旅馆`,station:`车站`,ticket:`车票`,truck:`卡车`,fire:`火`,birthday:`生日`,gift:`礼物`,party:`派对`,song:`歌曲`,sound:`声音`,voice:`嗓音`,bubble:`泡泡`,footprint:`脚印`,magic:`魔法`,round:`圆形的`,straight:`直走`,left:`左边`,right:`右边`,here:`这里`,there:`那里`,behind:`后面`,between:`中间`,around:`周围`,through:`穿过`,over:`越过`,under:`下面`,up:`向上`,down:`向下`,off:`离开`,inside:`里面`,happy:`开心`,sad:`难过`,angry:`生气`,tired:`累`,surprised:`惊讶`,quiet:`安静的`,loud:`大声的`,fast:`快`,slow:`慢`,quick:`快速的`,big:`大`,small:`小`,soft:`柔软的`,rough:`粗糙的`,smooth:`光滑的`,hard:`坚硬的`,sweet:`甜的`,nice:`好闻的`,strong:`浓烈的`,lost:`丢失的`,stuck:`被困的`,safe:`安全的`,hurt:`受伤的`,better:`好一些`,ready:`准备好了`,same:`相同的`,hello:`你好`,hi:`嗨`,bye:`再见`,goodbye:`再见`,welcome:`欢迎`,please:`请`,thanks:`谢谢`,morning:`早晨`,night:`夜晚`,name:`名字`,baby:`宝宝`,robot:`机器人`,giant:`巨人`,carefully:`仔细地`,closer:`更近一些`,today:`今天`},w=new Set(`jump.find.open.close.walk.run.touch.listen.look.smell.shake.roll.give.take.stop.go.sit.stand.turn.clap.dance.step.show.stamp.put.fix.hug.hop.crawl.follow.pour.mix.smile.knock.help.save.pull.push.tiptoe.freeze.tap.stomp.bounce.throw.catch.stretch.bend.sleep.spin.kick.wave.carry.blow.eat.check.send.wait.sing.pack.change.pop.fly.move.whisper.copy.order.wake.wash.rinse.dry.clean`.split(`.`)),T=new Set(`red.blue.yellow.green.orange.pink.purple.white.black.brown.sunny.rainy.cloudy.windy.cold.hot.fresh.happy.sad.angry.tired.surprised.quiet.loud.fast.slow.quick.big.small.soft.rough.smooth.hard.sweet.nice.strong.lost.stuck.safe.hurt.better.ready.same.round`.split(`.`)),fe=new Set([`hello`,`hi`,`bye`,`goodbye`,`welcome`,`thanks`,`morning`,`night`,`yes`,`no`,`name`]);function pe(e,t){return w.has(e.word)?t%2==0?{english:`Let's ${e.word}!`,chinese:`我们一起${e.meaning}吧！`}:{english:`Can you ${e.word}?`,chinese:`你可以${e.meaning}吗？`}:T.has(e.word)?t%2==0?{english:`Let's say “${e.word}”.`,chinese:`我们来说一说“${e.meaning}”。`}:{english:`Can you show me “${e.word}”?`,chinese:`你能用动作或物品表示“${e.meaning}”吗？`}:fe.has(e.word)?t%2==0?{english:`Say “${e.word}”!`,chinese:`说一说“${e.meaning}”！`}:{english:`Can you say “${e.word}”?`,chinese:`你会说“${e.meaning}”吗？`}:t%2==0?{english:`Can you find the ${e.word}?`,chinese:`你能找到${e.meaning}吗？`}:{english:`Show me the ${e.word}.`,chinese:`把${e.meaning}给我看看。`}}function me(e,t){let n=Array.from(t).reduce((e,t)=>e+(t.codePointAt(0)||0),0)%3,[r,i]=e,a=e.find(e=>w.has(e.word)),o=[{english:`Ready? Let's learn “${r.word}”.`,chinese:`准备好了吗？我们来认识“${r.meaning}”。`},{english:`Today we'll use “${r.word}” and “${i.word}”.`,chinese:`今天我们会用到“${r.meaning}”和“${i.meaning}”。`},{english:`Listen first, then say “${r.word}”.`,chinese:`先听一听，再说一说“${r.meaning}”。`}],s=a?{english:`Your turn—${a.word}!`,chinese:`轮到你啦——${a.meaning}！`}:fe.has(i.word)?{english:`Say “${i.word}” one more time.`,chinese:`再说一次“${i.meaning}”吧。`}:T.has(i.word)?{english:`Show me “${i.word}”.`,chinese:`用动作或物品表示“${i.meaning}”。`}:{english:`Can you point to the ${i.word}?`,chinese:`你能指出${i.meaning}吗？`},c=[{english:`Great work! You learned “${r.word}”.`,chinese:`做得真棒！你认识了“${r.meaning}”。`},{english:`You did it! Say “${i.word}” one more time.`,chinese:`你完成啦！再说一次“${i.meaning}”吧。`},{english:`High five! You used “${r.word}” today.`,chinese:`击个掌！今天你用到了“${r.meaning}”。`}];return{opening:o[n],during:[s],ending:c[n]}}function he(e,t,n){if(n.includes(`彩色脚印探险`))return{words:[{word:`red`,meaning:`红色`},{word:`blue`,meaning:`蓝色`},{word:`jump`,meaning:`跳`}],sentences:[{english:`Jump to red.`,chinese:`跳到红色上。`},{english:`Find blue.`,chinese:`找到蓝色。`}],opening:{english:`Let’s play a color game.`,chinese:`我们来玩颜色游戏。`},during:[{english:`Ready—jump to red!`,chinese:`准备好——跳到红色上！`}],ending:{english:`You found all the colors!`,chinese:`你找到了所有颜色！`}};let r=Array.from(e.matchAll(/`([^`]+)`/g)).map(e=>e[1].trim()).filter(Boolean),i=t.match(/[A-Za-z]+(?:'[A-Za-z]+)?/g)||[],a=r.flatMap(e=>e.match(/[A-Za-z]+(?:'[A-Za-z]+)?/g)||[]),o=e.match(/[A-Za-z]+(?:'[A-Za-z]+)?/g)||[],s=new Set(`a.an.the.to.on.in.is.it.this.that.and.or.then.your.my.i.we.you.he.she.they.what.who.where.how.all.of.with.for.from.at.as.be.are.am.was.has.have.had.can.do.did.does.some.something.more.no.not.let.lets.me.our.its.will.would.should.please.good.great.job.play.game.english.time.start.begin.needs.need`.split(`.`)),c=[...i,...a,...o].map(e=>e.toLowerCase().replace(/[’]/g,`'`)).filter(e=>!s.has(e)&&e.length>1&&!!de[e]),l=Array.from(new Set(c)),u=Array.from(w).find(e=>l.includes(e)),d=[...l.filter(e=>e!==u).slice(0,u?2:3),...u?[u]:[]],f=Array.from(new Set([...d,`look`,`listen`,`go`])).slice(0,3).map(e=>({word:e,meaning:de[e]})),p=f.find(e=>e.word===u);return{words:f,sentences:[f[0],p&&p.word!==f[0].word?p:f[1]].map((e,t)=>pe(e,t)),...me(f,n)}}function ge(e){let t=e.replace(/\r/g,``).split(`
`),n=``,r=[];for(let e=0;e<t.length;e+=1){/^# 第.+组/.test(t[e])&&(n=t[e].replace(/^# /,``).trim());let i=t[e].match(/^## (\d{3})\.\s*(.+)$/);if(!i)continue;let a=Number(i[1]),o=i[2].trim(),s=[];for(e+=1;e<t.length&&!/^## \d{3}\./.test(t[e])&&!/^# 第.+组/.test(t[e]);e+=1)s.push(t[e]);--e;let c=s.join(`
`),l=ie(c),u=ne(c,`时长`)||l.duration||`10分钟`,d=ne(c,`材料`)||l.materials||`不需要`,f=ne(c,`玩法`)||ae(c),p=[ne(c,`趣味变化`),re(c,[`升级`,`升级玩法`])].filter(Boolean).join(`；`)||`孩子熟悉后，可以交换角色或加入自己的新规则。`,m=u.match(/\d+/g)?.map(Number)||[10],h=Math.max(...m),g=re(c,[`目标`,`英语目标`]),_=C(a,n,o,g),v=g||oe(_),y=/户外|公园|超市|散步|自然|风|云|影子|雨量/.test(`${o}${f}`),b=ue(o,d,c),S=`${o}${v}${f}${d}`,te=/指一指|拍一拍|摸一摸|闻一闻|听一听|找颜色|认颜色|配对|模仿|传球|撕纸|贴纸|吹泡泡|躲猫猫|身体部位/.test(S),de=/故事接龙|采访|小记者|编故事|复述|排序|序列|规律|测量|统计|地图|迷宫|预测|实验|拼读|押韵|造句|分类理由|角色对话|规则设计/.test(S),w=/拼读|统计|地图|采访|故事接龙|完整复述|设计规则|记录实验|比较结果/.test(S),T=te?2:w?5:de?4:3;h>=20&&T<4&&(T=4),/剪刀|热水|加热|刀具|烤箱|炉灶/.test(S)&&T<4&&(T=4);let fe=T===2&&te?4:T===2?5:6,pe=T<=2?`轻松`:T===3?`适中`:`进阶`,me=/剪刀|热水|加热|刀具|烤箱|炉灶|户外|过马路|蒙眼/.test(S)?`一起完成`:`少量协助`;r.push({id:`activity-${i[1]}`,number:a,title:o,summary:v||f.slice(0,28),goal:v,series:le(a,_,n),category:_,duration:h,durationLabel:u,location:y?`都可以`:`室内`,prep:d===`不需要`?`不用准备`:`简单准备`,minAge:T,maxAge:fe,difficulty:pe,adultSupport:me,materials:d===`不需要`?[]:d.split(/[、，]/).map(e=>e.trim()).filter(Boolean),steps:se(f),opening:`今天我们来试试「${o}」，你想从哪里开始？`,questions:[`在「${o}」里，你发现了什么？`,`如果再玩一次，你想换一种什么办法？`],easy:`先只做第一小步：${se(f)[0]?.replace(/[。！？]$/,``)||`自由探索材料`}。孩子愿意时再继续，不要求完成。`,upgrade:p,safety:b||void 0,color:x[(a-1)%x.length],emoji:ce(`${o}${v}`),accentEmoji:ee[a*7%ee.length],visualIndex:a,englishGuide:_===`英语启蒙`?he(c,v,o):void 0})}return r}var E=ge(`${y}\n${b}`),_e=[`全部`,`英语启蒙`,`语言表达`,`数量逻辑`,`空间认知`,`精细动作`,`大运动`,`生活能力`,`情绪社交`,`自然科学`,`艺术创造`,`音乐节奏`],ve=[`早餐后`,`上午`,`午睡后`,`傍晚`,`睡前`],ye=(e,t)=>t>=e.minAge&&t<=e.maxAge,be=[`语言表达`,`数量逻辑`,`空间认知`,`精细动作`,`大运动`,`生活能力`,`情绪社交`,`自然科学`,`艺术创造`,`音乐节奏`,`英语启蒙`],xe=be.map(e=>E.filter(t=>t.category===e)),Se=e=>E[e%E.length],Ce=(e,t,n,r)=>{let i=Se(r);return{uid:`seed-${e}-${t}`,kind:`activity`,slot:n,activityId:i.id,title:i.title,duration:i.duration}},we=(e,t,n,r,i,a)=>({uid:`rhythm-${e}-${t}`,kind:r,slot:n,title:i,duration:a});function Te(e=0,t=3){let n=be.map(e=>E.filter(n=>n.category===e&&ye(n,t))),r=(e,t)=>{let r=n[e%n.length],i=xe[e%xe.length],a=r.length?r:i;return a[t%a.length]};return Array.from({length:7},(t,n)=>{let i=n*2%xe.length,a=(n*2+3)%xe.length,o=(n*2+7)%xe.length,s=r(i,e+n),c=r(a,e+n*2),l=r(o,e+n*3);return[{...Ce(n,0,`上午`,0),activityId:s.id,title:s.title,duration:s.duration},we(n,1,`上午`,`rest`,`喝水 · 看窗外`,10),{...Ce(n,2,`上午`,0),activityId:c.id,title:c.title,duration:c.duration},we(n,3,`午睡后`,n%2?`chore`:`free`,n%2?`一起收玩具`:`自由玩耍`,15),{...Ce(n,4,`傍晚`,0),activityId:l.id,title:l.title,duration:l.duration},we(n,5,`睡前`,`rest`,`安静拥抱与休息`,10)]})}var Ee=[{kind:`rest`,title:`喝水 · 看窗外`,duration:10,emoji:`☁️`},{kind:`rest`,title:`安静拥抱与休息`,duration:10,emoji:`🤍`},{kind:`free`,title:`孩子自由玩耍`,duration:20,emoji:`🧸`},{kind:`chore`,title:`一起收玩具`,duration:15,emoji:`🧺`},{kind:`chore`,title:`帮忙摆餐具`,duration:10,emoji:`🥄`},{kind:`meal`,title:`水果与点心时间`,duration:20,emoji:`🍎`},{kind:`nap`,title:`午睡与安静时间`,duration:60,emoji:`🌙`}],De=new Set([`page`,`age`,`activity_id`,`category`,`age_band`,`source`,`saved`,`item_kind`,`slot`,`routine_id`,`step_index`,`completed`,`print_type`,`water_level`,`result_count`,`app_version`]),Oe=!1;function ke(){Oe||typeof window>`u`||(Oe=!0,D(`app_opened`))}function D(e,t={}){!Oe||typeof window>`u`||(Object.fromEntries(Object.entries({...t,app_version:`0.1.0`}).filter(([e,t])=>De.has(e)&&t!==void 0).map(([e,t])=>[e,typeof t==`string`?t.slice(0,64):t])),[`localhost`,`127.0.0.1`].includes(window.location.hostname))}function Ae(e,t){return{activity_id:e.id,category:e.category,age_band:`${e.minAge}-${e.maxAge}`,source:t}}var je=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),O=o(((e,t)=>{t.exports=je()}))(),Me=e=>`/sprout-plan-web/${e.replace(/^\/+/,``)}`,Ne=[`周一`,`周二`,`周三`,`周四`,`周五`,`周六`,`周日`],Pe=Object.fromEntries(new Intl.DateTimeFormat(`zh-CN`,{timeZone:`Asia/Shanghai`,year:`numeric`,month:`numeric`,day:`numeric`,weekday:`long`}).formatToParts(new Date).map(e=>[e.type,e.value])),k=`${Pe.year}-${String(Pe.month).padStart(2,`0`)}-${String(Pe.day).padStart(2,`0`)}`,Fe=Pe.weekday.replace(`星期`,`周`),Ie=`${Pe.month}月${Pe.day}日 · ${Fe}`,Le=[{key:`today`,label:`今天`,icon:`home`},{key:`plan`,label:`计划`,icon:`calendar`},{key:`activities`,label:`活动`,icon:`leaf`},{key:`records`,label:`成长`,icon:`book`},{key:`profile`,label:`设置`,icon:`person`}],Re=[{value:`状态不错`,icon:`smile`,hint:`照常玩`},{value:`有点忙碌`,icon:`clock`,hint:`少一点`},{value:`有点累`,icon:`moon`,hint:`轻松玩`},{value:`需要放松`,icon:`cloud`,hint:`安静陪伴`}],ze=e=>{let t=[`语言表达`,`精细动作`,`自然科学`].map(t=>E.find(n=>n.category===t&&ye(n,e))).filter(e=>!!e),n=E.filter(n=>ye(n,e)&&!t.some(e=>e.id===n.id));return[...t,...n].slice(0,3).map(e=>e.id)},Be={version:7,onboarding:!1,nickname:`小树`,age:3,mood:`状态不错`,todayIds:ze(3),plan:Te(0,3),favorites:[],completions:[],avatarKind:`preset`,avatarPreset:1,avatarData:``,dailyMinutes:30,activityTimes:[`上午`,`午睡后`],reminders:!0,interests:[`语言表达`,`生活能力`,`自然观察`],routineDate:k,routineChecks:{},ritualDate:k,ritualWater:0};function Ve(){try{let e=JSON.parse(localStorage.getItem(`sprout-plan-state`)||`{}`),t=new Set(E.map(e=>e.id)),n=Math.min(6,Math.max(2,Number(e.age)||3)),r=(e.version||0)<7,i=!r&&Array.isArray(e.plan)&&e.plan.length===7&&e.plan.every(e=>Array.isArray(e)&&e.every(e=>typeof e==`object`&&e&&`slot`in e))?e.plan:Te(0,n),a=Array.isArray(e.todayIds)?e.todayIds.filter(e=>t.has(e)):[],o=e.routineDate===k&&e.routineChecks?e.routineChecks:{},s=e.ritualDate===k?Math.min(5,Math.max(0,Number(e.ritualWater)||0)):0;return{...Be,...e,version:Be.version,age:n,todayIds:!r&&a.length?a:ze(n),plan:i,favorites:(e.favorites||[]).filter(e=>t.has(e)),completions:(e.completions||[]).filter(e=>t.has(e.activityId)),routineDate:k,routineChecks:o,ritualDate:k,ritualWater:s}}catch{return Be}}function A({name:e,size:t=22}){let n={home:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`path`,{d:`M3 11.5 12 4l9 7.5`}),(0,O.jsx)(`path`,{d:`M5.5 10v10h13V10M9 20v-6h6v6`})]}),calendar:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`rect`,{x:`3`,y:`5`,width:`18`,height:`16`,rx:`3`}),(0,O.jsx)(`path`,{d:`M8 3v4m8-4v4M3 10h18m-13 4 2 2 5-5`})]}),leaf:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`path`,{d:`M19 4C10 4 5 9 5 16c5 1 11-2 14-12Z`}),(0,O.jsx)(`path`,{d:`M4 21c2-6 6-9 11-12`})]}),book:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`path`,{d:`M4 5.5A4 4 0 0 1 8 4h3v16H8a4 4 0 0 0-4 1.5Z`}),(0,O.jsx)(`path`,{d:`M20 5.5A4 4 0 0 0 16 4h-3v16h3a4 4 0 0 1 4 1.5Z`})]}),person:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`circle`,{cx:`12`,cy:`7.5`,r:`3.5`}),(0,O.jsx)(`path`,{d:`M5 21a7 7 0 0 1 14 0`})]}),bell:(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(`path`,{d:`M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Zm-8 12h4`})}),heart:(0,O.jsx)(`path`,{d:`M20.8 5.7c-1.7-2-4.8-2.1-6.7-.2L12 7.6 9.9 5.5C8 3.6 4.9 3.7 3.2 5.7c-1.5 1.8-1.3 4.5.4 6.1L12 20l8.4-8.2c1.7-1.6 1.9-4.3.4-6.1Z`}),search:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`circle`,{cx:`11`,cy:`11`,r:`7`}),(0,O.jsx)(`path`,{d:`m20 20-4-4`})]}),arrow:(0,O.jsx)(`path`,{d:`m9 18 6-6-6-6`}),back:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`path`,{d:`m15 18-6-6 6-6`}),(0,O.jsx)(`path`,{d:`M9 12h11`})]}),check:(0,O.jsx)(`path`,{d:`m5 12 4 4L19 6`}),close:(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),swap:(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(`path`,{d:`M7 7h11l-3-3m3 13H7l3 3`})}),plus:(0,O.jsx)(O.Fragment,{children:(0,O.jsx)(`path`,{d:`M12 5v14M5 12h14`})}),smile:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`}),(0,O.jsx)(`path`,{d:`M8 10h.01M16 10h.01M8 14c2.5 3 5.5 3 8 0`})]}),clock:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`}),(0,O.jsx)(`path`,{d:`M12 7v5l3 2`})]}),moon:(0,O.jsx)(`path`,{d:`M20 15.2A8 8 0 0 1 8.8 4 8 8 0 1 0 20 15.2Z`}),cloud:(0,O.jsx)(`path`,{d:`M7 18h11a4 4 0 0 0 .7-7.9A6 6 0 0 0 7.4 8.3 4.8 4.8 0 0 0 7 18Z`}),download:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`path`,{d:`M12 3v12m-4-4 4 4 4-4`}),(0,O.jsx)(`path`,{d:`M5 20h14`})]}),upload:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`path`,{d:`M12 16V4m-4 4 4-4 4 4`}),(0,O.jsx)(`path`,{d:`M5 20h14`})]}),volume:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`path`,{d:`M5 10v4h4l5 4V6l-5 4Z`}),(0,O.jsx)(`path`,{d:`M17 9a4 4 0 0 1 0 6m2-9a8 8 0 0 1 0 12`})]}),printer:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`path`,{d:`M7 9V3h10v6M7 17H4V9h16v8h-3`}),(0,O.jsx)(`path`,{d:`M7 14h10v7H7Z`}),(0,O.jsx)(`path`,{d:`M17 11h.01`})]}),camera:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`path`,{d:`M4 8h3l1.5-2h7L17 8h3v11H4Z`}),(0,O.jsx)(`circle`,{cx:`12`,cy:`13`,r:`3.2`})]}),settings:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`}),(0,O.jsx)(`path`,{d:`M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1A8 8 0 0 0 15 6l-.3-2.6h-4L10.4 6A8 8 0 0 0 9 7.1l-2.4-1-2 3.4L6.7 11a7 7 0 0 0 0 2L4.6 14.5l2 3.4 2.4-1A8 8 0 0 0 10.4 18l.3 2.6h4L15 18a8 8 0 0 0 1.5-1.1l2.4 1 2-3.4-2-1.5a7 7 0 0 0 .1-1Z`})]}),shield:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`path`,{d:`M12 3 5 6v5c0 4.7 2.7 8 7 10 4.3-2 7-5.3 7-10V6Z`}),(0,O.jsx)(`path`,{d:`m9 12 2 2 4-5`})]}),sparkle:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`path`,{d:`m12 3 1.2 4.3L17 9l-3.8 1.7L12 15l-1.2-4.3L7 9l3.8-1.7Z`}),(0,O.jsx)(`path`,{d:`m19 15 .6 2.2L22 18l-2.4.8L19 21l-.6-2.2L16 18l2.4-.8Z`})]})};return(0,O.jsx)(`svg`,{"aria-hidden":`true`,viewBox:`0 0 24 24`,width:t,height:t,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,children:n[e]||n.leaf})}function He(){return(0,O.jsxs)(`div`,{className:`logo`,children:[(0,O.jsxs)(`span`,{className:`logo-mark`,children:[(0,O.jsx)(`i`,{}),(0,O.jsx)(`i`,{}),(0,O.jsx)(`b`,{})]}),(0,O.jsxs)(`span`,{children:[(0,O.jsx)(`strong`,{children:`小芽计划`}),(0,O.jsx)(`small`,{children:`Sprout Plan`})]})]})}function Ue({data:e,size:t=48}){return e.avatarKind===`upload`&&e.avatarData?(0,O.jsx)(`span`,{className:`child-avatar uploaded`,style:{width:t,height:t},children:(0,O.jsx)(`img`,{src:e.avatarData,alt:`孩子头像`})}):(0,O.jsx)(`span`,{className:`child-avatar preset avatar-${e.avatarPreset}`,style:{width:t,height:t},role:`img`,"aria-label":`孩子的可爱头像`})}function We(){let[e,t]=(0,_.useState)(Ve),[n,r]=(0,_.useState)(`today`),[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(``),f=(0,_.useRef)(null);(0,_.useEffect)(()=>{localStorage.setItem(`sprout-plan-state`,JSON.stringify(e))},[e]),(0,_.useEffect)(()=>{D(`page_viewed`,{page:n===`activities`&&c?`favorites`:n})},[n,c]);let p=e=>{d(e),window.setTimeout(()=>d(``),2200)},m=e=>t(t=>({...t,...e})),h=e=>{e===`activities`&&l(!1),a(null),s(null),r(e),f.current?.scrollTo({top:0,behavior:`auto`}),window.scrollTo({top:0,behavior:`auto`})},g=()=>{l(!0),a(null),s(null),r(`activities`),f.current?.scrollTo({top:0,behavior:`auto`}),window.scrollTo({top:0,behavior:`auto`})},v=n!==`today`||!!i||!!o,y=i||o?`返回活动列表`:n===`activities`&&c?`返回设置`:`返回今天`,b=()=>{if(o){s(null);return}if(i){a(null);return}if(n===`activities`&&c){h(`profile`);return}h(`today`)},x=e.todayIds.map(e=>E.find(t=>t.id===e)).filter(Boolean),ee=e.completions.filter(e=>e.date===k).length,S=(e,t=`activity_library`)=>{D(`activity_opened`,Ae(e,t)),a(e)},C=(e,t=`activity_detail`)=>{D(`activity_started`,Ae(e,t)),s(e)},te=t=>{let n=!e.favorites.includes(t.id);m({favorites:n?[...e.favorites,t.id]:e.favorites.filter(e=>e!==t.id)}),D(`activity_saved`,{...Ae(t,`activity_detail`),saved:n})};return(0,O.jsxs)(`div`,{className:`app-bg`,children:[!e.onboarding&&(0,O.jsx)(Ge,{onDone:(e,t)=>{m({onboarding:!0,nickname:e,age:t,todayIds:ze(t),plan:Te(0,t)}),D(`onboarding_completed`,{age:t})}}),(0,O.jsxs)(`aside`,{className:`desktop-rail`,children:[(0,O.jsx)(He,{}),(0,O.jsx)(`p`,{children:`把每天的陪伴，轻松安排成一份有趣的成长计划。`}),(0,O.jsxs)(`div`,{className:`rail-note`,children:[(0,O.jsx)(`span`,{children:`今天不需要很满`}),(0,O.jsxs)(`strong`,{children:[`留一点空白，`,(0,O.jsx)(`br`,{}),`也留一点惊喜。`]})]}),(0,O.jsx)(`div`,{className:`rail-art`,children:(0,O.jsx)(`img`,{src:Me(`assets/mascot.webp`),alt:`芽芽小助手`})}),(0,O.jsx)(`small`,{children:`资料只保存在这台设备上`})]}),(0,O.jsxs)(`main`,{className:`app-shell`,children:[(0,O.jsxs)(`header`,{className:`topbar`,children:[(0,O.jsxs)(`div`,{className:`topbar-left`,children:[v&&(0,O.jsxs)(`button`,{className:`top-back`,"aria-label":y,onClick:b,children:[(0,O.jsx)(A,{name:`back`,size:20}),(0,O.jsx)(`span`,{children:`返回`})]}),(0,O.jsx)(He,{})]}),(0,O.jsx)(`div`,{className:`top-actions`,children:(0,O.jsx)(`button`,{className:`avatar-shortcut`,"aria-label":`打开孩子设置`,onClick:()=>h(`profile`),children:(0,O.jsx)(Ue,{data:e,size:34})})})]}),(0,O.jsxs)(`div`,{className:`page-wrap`,ref:f,children:[n===`today`&&(0,O.jsx)(qe,{data:e,mood:e.mood,onMood:e=>m({mood:e}),activities:x,completed:ee,completions:e.completions,onOpen:e=>S(e,`today_basket`),onReplace:t=>{let n=E.find(e=>e.id===t),r=E.filter(t=>ye(t,e.age)&&!e.todayIds.includes(t.id)),i=r.find(e=>e.category===n.category)||r[Math.floor(Math.random()*r.length)]||n;m({todayIds:e.todayIds.map(e=>e===t?i.id:e)}),p(`换成了「${i.title}」`)},onRecord:e=>C(e,`today_basket`),onNavigate:h,ritualWater:e.ritualWater,onRitual:()=>{let t=Math.min(5,e.ritualWater+1);m({ritualWater:t,ritualDate:k}),D(`ritual_watered`,{water_level:t}),p(t===5?`今天的小芽喝饱水啦`:`浇了一点水，小芽的水位升高了`)}}),n===`plan`&&(0,O.jsx)(Qe,{plan:e.plan,onPlan:e=>m({plan:e}),onOpen:e=>S(e,`weekly_plan`),notify:p,nickname:e.nickname,childAge:e.age,todayActivities:x,routineChecks:e.routineChecks,onRoutineChecks:e=>m({routineChecks:e,routineDate:k})}),n===`activities`&&(0,O.jsx)(nt,{favorites:e.favorites,savedOnly:c,childAge:e.age,onSavedOnly:l,onFavorites:e=>m({favorites:e}),onOpen:e=>S(e,c?`favorites`:`activity_library`),onAdd:t=>{e.todayIds.includes(t.id)||m({todayIds:[...e.todayIds,t.id]}),D(`plan_item_added`,{...Ae(t,`activity_library`),item_kind:`activity`,slot:`today`}),p(`已经放进今天的成长篮子`)}}),n===`records`&&(0,O.jsx)(rt,{completions:e.completions,onExplore:()=>h(`activities`)}),n===`profile`&&(0,O.jsx)(it,{data:e,onData:t,onOpenFavorites:g,notify:p})]}),(0,O.jsx)(`nav`,{className:`bottom-nav`,"aria-label":`主要页面`,children:Le.map(e=>(0,O.jsxs)(`button`,{className:(n===`activities`&&c?`profile`:n)===e.key?`active`:``,onClick:()=>h(e.key),children:[(0,O.jsx)(`span`,{className:`nav-icon`,children:(0,O.jsx)(A,{name:e.icon})}),(0,O.jsx)(`span`,{children:e.label})]},e.key))})]}),i&&(0,O.jsx)(st,{activity:i,favorite:e.favorites.includes(i.id),onFavorite:()=>te(i),onClose:()=>a(null),onRecord:()=>C(i)}),o&&(0,O.jsx)(ct,{activity:o,onClose:()=>s(null),onSave:(t,n,r)=>{let i=e.completions.filter(e=>!(e.activityId===t.id&&e.date===k));m({completions:[...i,{activityId:t.id,date:k,reaction:n,quote:r.trim()||void 0}]}),s(null),a(null),p(`记下来了，小芽又长大一点点`),D(`activity_completed`,Ae(t,`completion_sheet`))}}),u&&(0,O.jsxs)(`div`,{className:`toast`,children:[(0,O.jsx)(A,{name:`check`,size:18}),u]})]})}function Ge({onDone:e}){let[t,n]=(0,_.useState)(0),[r,i]=(0,_.useState)(`小树`),[a,o]=(0,_.useState)(3),[s,c]=(0,_.useState)([`绘本`,`植物`,`户外散步`]);return(0,O.jsx)(`div`,{className:`onboarding`,children:(0,O.jsxs)(`div`,{className:`onboard-card`,children:[(0,O.jsxs)(`div`,{className:`onboard-art`,children:[(0,O.jsx)(`span`,{className:`sun`}),(0,O.jsx)(`img`,{src:Me(`assets/mascot.webp`),alt:`芽芽欢迎你`})]}),(0,O.jsxs)(`div`,{className:`step-dots`,children:[(0,O.jsx)(`i`,{className:t>=0?`on`:``}),(0,O.jsx)(`i`,{className:t>=1?`on`:``}),(0,O.jsx)(`i`,{className:t>=2?`on`:``})]}),t===0&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`h1`,{children:`欢迎来到小芽计划`}),(0,O.jsx)(`p`,{children:`先花一分钟了解你们的生活节奏，我们会准备更合适的亲子活动。`}),(0,O.jsxs)(`button`,{className:`primary wide`,onClick:()=>n(1),children:[`开始设置 `,(0,O.jsx)(A,{name:`arrow`,size:18})]})]}),t===1&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`h1`,{children:`怎么称呼小朋友？`}),(0,O.jsx)(`p`,{children:`只需要一个家里的小名，再选择年龄来匹配合适的活动。`}),(0,O.jsxs)(`label`,{className:`field`,children:[(0,O.jsx)(`span`,{children:`孩子昵称`}),(0,O.jsx)(`input`,{value:r,onChange:e=>i(e.target.value),placeholder:`例如：小树`})]}),(0,O.jsxs)(`div`,{className:`onboard-age`,children:[(0,O.jsx)(`span`,{children:`孩子年龄`}),(0,O.jsx)(`div`,{children:[2,3,4,5,6].map(e=>(0,O.jsxs)(`button`,{className:a===e?`active`:``,onClick:()=>o(e),children:[e,`岁`]},e))}),(0,O.jsx)(`small`,{children:`以后可以在设置中修改，推荐活动会跟着变化。`})]}),(0,O.jsxs)(`button`,{className:`primary wide`,onClick:()=>n(2),children:[`下一步 `,(0,O.jsx)(A,{name:`arrow`,size:18})]})]}),t===2&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`h1`,{children:`最近喜欢什么？`}),(0,O.jsx)(`p`,{children:`选几个就好，之后随时可以调整。`}),(0,O.jsx)(`div`,{className:`choice-cloud`,children:[`画画`,`音乐`,`绘本`,`车辆`,`水和沙子`,`做饭`,`植物`,`搭建`,`角色扮演`,`户外散步`].map(e=>(0,O.jsx)(`button`,{className:s.includes(e)?`selected`:``,onClick:()=>c(s.includes(e)?s.filter(t=>t!==e):[...s,e]),children:e},e))}),(0,O.jsxs)(`button`,{className:`primary wide`,onClick:()=>e(r||`小芽`,a),children:[`生成第一周计划 `,(0,O.jsx)(A,{name:`leaf`,size:18})]}),(0,O.jsx)(`small`,{className:`privacy`,children:`孩子信息只保存在当前设备`})]})]})})}function Ke({activity:e,className:t=``}){let n=(e.visualIndex*47+18)%360,r={"--art-hue":`${n}`,"--art-hue-two":`${(n+48)%360}`};return(0,O.jsxs)(`span`,{className:`activity-picture ${t}`,style:r,"aria-label":`${e.title}专属插图`,children:[(0,O.jsx)(`i`,{className:`art-spark`,children:e.accentEmoji}),(0,O.jsx)(`b`,{children:e.emoji}),(0,O.jsx)(`small`,{children:String(e.number).padStart(3,`0`)})]})}function qe({data:e,mood:t,onMood:n,activities:r,completed:i,completions:a,onOpen:o,onReplace:s,onRecord:c,onNavigate:l,ritualWater:u,onRitual:d}){let f=t===`有点累`||t===`需要放松`||t===`有点忙碌`?r.slice(0,2):r,p=[`如果今天是一种颜色，你觉得是什么颜色？为什么？`,`如果袜子会说话，它最想去哪里旅行？`,`今天有什么小事情让你觉得暖暖的？`],[m,h]=(0,_.useState)(0);return(0,O.jsxs)(`section`,{className:`page today-page`,children:[(0,O.jsxs)(`div`,{className:`warm-hero`,children:[(0,O.jsx)(`div`,{className:`hello-avatar`,children:(0,O.jsx)(Ue,{data:e,size:62})}),(0,O.jsxs)(`div`,{className:`hero-text`,children:[(0,O.jsx)(`p`,{className:`date-line`,children:Ie}),(0,O.jsxs)(`h1`,{children:[Fe,`好，`,e.nickname,(0,O.jsx)(`span`,{children:`☀`})]}),(0,O.jsx)(`p`,{children:`不用赶进度，今天也会有自己的小惊喜。`})]}),(0,O.jsx)(`img`,{src:Me(`assets/mascot.webp`),alt:`芽芽坐在花盆边`,fetchPriority:`high`})]}),(0,O.jsxs)(`section`,{className:`mood-band`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`h2`,{children:`家长能量`}),(0,O.jsx)(`p`,{children:`今天的你感觉怎么样？`})]}),(0,O.jsx)(`div`,{className:`mood-grid`,children:Re.map(e=>(0,O.jsxs)(`button`,{className:t===e.value?`active`:``,onClick:()=>n(e.value),children:[(0,O.jsx)(`span`,{children:(0,O.jsx)(A,{name:e.icon})}),(0,O.jsx)(`strong`,{children:e.value}),(0,O.jsx)(`small`,{children:e.hint})]},e.value))})]}),e.reminders?(0,O.jsxs)(`section`,{className:`gentle-reminder`,"aria-label":`首页温和提示`,children:[(0,O.jsx)(`span`,{children:(0,O.jsx)(A,{name:`sparkle`,size:19})}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`strong`,{children:`今天的温和提示`}),(0,O.jsxs)(`p`,{children:[`不用把计划全部完成，有空时陪 `,e.nickname,` 选一个 5 分钟活动就很好。`]})]})]}):null,(0,O.jsxs)(`div`,{className:`section-heading`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`span`,{className:`basket-icon`,children:`▰`}),(0,O.jsx)(`h2`,{children:`今日成长篮子`})]}),(0,O.jsxs)(`small`,{children:[f.length,` 个小活动`]})]}),(0,O.jsx)(`div`,{className:`today-basket`,children:f.map((e,t)=>{let n=a.some(t=>t.activityId===e.id&&t.date===k);return(0,O.jsxs)(`article`,{className:`basket-card ${n?`done`:``}`,children:[(0,O.jsxs)(`button`,{className:`basket-main`,onClick:()=>o(e),children:[(0,O.jsx)(Ke,{activity:e}),(0,O.jsx)(`strong`,{children:e.title}),(0,O.jsxs)(`small`,{children:[e.category,` · `,e.durationLabel,` · `,e.minAge,`–`,e.maxAge,`岁`]})]}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`button`,{"aria-label":`更换${e.title}`,onClick:()=>s(e.id),children:(0,O.jsx)(A,{name:`swap`,size:16})}),n?(0,O.jsx)(`button`,{className:`basket-done`,"aria-label":`已完成`,children:(0,O.jsx)(A,{name:`check`,size:17})}):(0,O.jsx)(`button`,{className:`basket-start`,onClick:()=>c(e),children:`开始`})]})]},e.id)})}),(0,O.jsxs)(`section`,{className:`daily-ritual ${u>0?`watered`:``}`,children:[(0,O.jsxs)(`div`,{className:`ritual-visual`,children:[(0,O.jsx)(Ke,{activity:E.find(e=>e.title===`植物喝水了吗`)||E[0]}),(0,O.jsx)(`span`,{className:`ritual-water-gauge`,"aria-label":`今日浇水 ${u} 次`,children:(0,O.jsx)(`i`,{style:{height:`${12+u*17}%`}})}),(0,O.jsxs)(`b`,{children:[u,`/5`]}),u>0?(0,O.jsx)(`em`,{children:`💧`},u):null]}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`small`,{children:`今日小仪式`}),(0,O.jsx)(`h3`,{children:u===5?`小芽今天喝饱水啦`:`一起给小芽浇浇水吧`}),(0,O.jsxs)(`p`,{children:[u,`/5 滴水 · 每次一点点就好`]})]}),(0,O.jsx)(`button`,{disabled:u===5,onClick:d,children:u===0?`开始`:u===5?`已喝饱`:`再浇一点`})]}),(0,O.jsxs)(`section`,{className:`conversation-card`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`small`,{children:`亲子一句话`}),(0,O.jsxs)(`blockquote`,{children:[`“`,p[m],`”`]})]}),(0,O.jsx)(`button`,{"aria-label":`换一个亲子话题`,onClick:()=>h((m+1)%p.length),children:(0,O.jsx)(A,{name:`swap`})})]}),(0,O.jsxs)(`section`,{className:`garden-preview`,children:[(0,O.jsxs)(`div`,{className:`garden-preview-copy`,children:[(0,O.jsx)(`small`,{children:`我们的成长小花园`}),(0,O.jsx)(`h3`,{children:i===0?`今天也留一块柔软的空地`:i<3?`新叶子正在慢慢舒展开`:`今天开了一朵小花`}),(0,O.jsx)(`p`,{children:`连续陪伴 18 天 · 不要求打卡`}),(0,O.jsx)(`div`,{className:`week-dots`,children:Ne.map((e,t)=>(0,O.jsx)(`span`,{className:t<Math.min(7,i+4)?`done`:``,children:t<Math.min(7,i+4)?`✓`:`·`},e))})]}),(0,O.jsxs)(`button`,{onClick:()=>l(`records`),children:[`看看花园 `,(0,O.jsx)(A,{name:`arrow`,size:16})]})]})]})}var Je=[{id:`morning`,title:`早晨流程`,subtitle:`开启元气满满的一天`,emoji:`☀️`,tone:`sunrise`,tip:`固定的小步骤会带来安全感；不催促，完成三项也很棒。`,steps:[{id:`weather`,title:`看天气`,note:`看看窗外，用一个词形容今天`,emoji:`🌤️`},{id:`clothes`,title:`选择衣服`,note:`按天气挑衣服，练习自己决定`,emoji:`👕`},{id:`hello`,title:`英语问候`,note:`一起说一句简单的早安`,emoji:`💬`,english:{english:`Good morning!`,chinese:`早上好！`}},{id:`wash`,title:`自己刷牙洗脸`,note:`按顺序完成自己的清洁任务`,emoji:`🪥`},{id:`choose`,title:`选一个今日活动`,note:`让孩子从成长篮子里自己挑选`,emoji:`🧺`}]},{id:`cooking`,title:`做饭流程`,subtitle:`一起动手，好吃又开心`,emoji:`🍲`,tone:`apricot`,tip:`切、烫、加热由成人完成；孩子负责闻、数、搅拌和摆放。`,steps:[{id:`ingredients`,title:`认识食材`,note:`说出名称、颜色和来自哪里`,emoji:`🥕`},{id:`sort`,title:`数量与分类`,note:`数一数，再按颜色或种类分一分`,emoji:`🔢`},{id:`smell`,title:`闻一闻味道`,note:`用香、甜、清新等词来描述`,emoji:`👃`},{id:`verbs`,title:`英语动作词`,note:`边做边说一个厨房动作`,emoji:`🔤`,english:{english:`Mix, mix, mix!`,chinese:`搅一搅，搅一搅！`}},{id:`help`,title:`帮忙搅拌或摆放`,note:`完成一个安全的小帮手任务`,emoji:`🥄`}]},{id:`outing`,title:`出门流程`,subtitle:`有计划，出门不慌乱`,emoji:`🎒`,tone:`sky`,tip:`让孩子负责一件固定物品；过马路时牵手并由成人做最终安全判断。`,steps:[{id:`weather`,title:`看天气`,note:`决定要不要带帽子、外套或雨具`,emoji:`☁️`},{id:`bag`,title:`准备小背包`,note:`水、纸巾和任务卡逐项确认`,emoji:`🎒`},{id:`transport`,title:`认识交通工具`,note:`观察今天会搭乘或看见什么`,emoji:`🚌`},{id:`safety`,title:`说一遍安全规则`,note:`牵手、停看听、不离开大人视线`,emoji:`🛡️`},{id:`observe`,title:`户外观察任务`,note:`带着外出任务卡去发现`,emoji:`🔎`,english:{english:`What can you see?`,chinese:`你看见了什么？`}}]},{id:`bedtime`,title:`睡前流程`,subtitle:`慢下来，安心进入梦乡`,emoji:`🌙`,tone:`lilac`,tip:`顺序比速度更重要；重复、稳定的睡前流程能帮助孩子慢下来。`,steps:[{id:`tidy`,title:`收玩具`,note:`一次收一类，给玩具说晚安`,emoji:`🧸`},{id:`review`,title:`回顾今天`,note:`说一件开心或印象深刻的事`,emoji:`💭`},{id:`mood`,title:`情绪天气`,note:`今天的心情像晴天、阴天还是雨天？`,emoji:`🌦️`},{id:`book`,title:`睡前绘本`,note:`慢慢读一本喜欢的故事`,emoji:`📖`},{id:`goodnight`,title:`一句英语晚安`,note:`拥抱后轻轻说晚安`,emoji:`✨`,english:{english:`Good night. Sweet dreams!`,chinese:`晚安，做个好梦！`}}]}];function Ye(e){if(!(`speechSynthesis`in window))return!1;window.speechSynthesis.cancel();let t=new SpeechSynthesisUtterance(e);return t.lang=`en-US`,t.rate=.78,t.pitch=1.05,window.speechSynthesis.speak(t),!0}var Xe=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]||e);function Ze(e,t,n,r){let i=window.open(``,`_blank`);if(!i)return!1;i.opener=null;let a=r.flat().map(e=>e.activityId?E.find(t=>t.id===e.activityId):void 0).filter(e=>!!e?.englishGuide),o=(a.length?a:E.filter(e=>e.englishGuide)).slice(0,6),s={today:`今日活动卡`,week:`本周计划表`,english:`英语词汇小卡`,outing:`外出任务卡`},c=``;return e===`today`&&(c=`<div class="cards">${n.map(e=>`<article><div class="label">小芽计划 · ${Xe(t)}的今日活动</div><h2>${Xe(e.title)}</h2><p><b>材料：</b>${Xe(e.materials.join(`、`)||`不需要额外材料`)}</p><h3>三步玩法</h3><ol>${e.steps.slice(0,3).map(e=>`<li>${Xe(e)}</li>`).join(``)}</ol><p><b>家长可以说：</b>“${Xe(e.opening)}”</p><p class="safety"><b>安全提醒：</b>${Xe(e.safety||`保持在成人视线内，尊重孩子想暂停的信号。`)}</p></article>`).join(``)}</div>`),e===`week`&&(c=`<table><thead><tr><th>时间</th>${Ne.map(e=>`<th>${e}</th>`).join(``)}</tr></thead><tbody>${ve.map(e=>`<tr><th>${e}</th>${r.map(t=>`<td>${t.filter(t=>t.slot===e).map(e=>Xe(e.title)).join(`<br>`)||`留白 / 休息`}</td>`).join(``)}</tr>`).join(``)}</tbody></table><p class="footnote">提示：游戏、家务、自由玩、吃饭与休息，都是家庭学习的一部分。</p>`),e===`english`&&(c=`<div class="word-cards">${o.flatMap(e=>e.englishGuide.words.slice(0,3).map(t=>`<article><div class="picture">${e.emoji}</div><h2>${Xe(t.word)}</h2><p>${Xe(t.meaning)}</p><div><b>简单句</b><br>${Xe(e.englishGuide.sentences[0]?.english||`Let’s play!`)}<br><small>${Xe(e.englishGuide.sentences[0]?.chinese||`我们来玩吧！`)}</small></div><div><b>本周游戏</b><br>${Xe(e.title)}</div></article>`)).join(``)}</div>`),e===`outing`&&(c=`<article class="outing"><div class="label">小芽计划 · 外出探索</div><h2>今天去公园，我要找一找</h2><ul><li>□ 找到三种绿色</li><li>□ 听到两种声音</li><li>□ 看到一只小动物</li><li>□ 说一句英语：I see a ______.</li></ul><div class="notes"><b>我的新发现</b><br><br>________________________________<br><br>________________________________</div><p class="safety"><b>安全约定：</b>牵好大人的手，停下来再观察，不独自离开。</p></article>`),i.document.write(`<!doctype html><html lang="zh-CN"><head><meta charset="UTF-8"><title>${s[e]} · 小芽计划</title><style>@page{size:A4;margin:12mm}*{box-sizing:border-box}body{font-family:"Microsoft YaHei",Arial,sans-serif;color:#222;margin:0;font-size:12pt}header{display:flex;justify-content:space-between;align-items:end;border-bottom:2px solid #222;padding-bottom:8px;margin-bottom:14px}header h1{margin:0;font-size:22pt}header p{margin:0}.cards{display:grid;grid-template-columns:1fr 1fr;gap:10mm}.cards article,.word-cards article,.outing{border:1.5px solid #222;border-radius:10px;padding:8mm;break-inside:avoid}.cards h2,.outing h2{margin:5px 0 8px}.cards h3{font-size:12pt;margin:9px 0 4px}.cards p{line-height:1.55}.label{font-size:9pt;letter-spacing:1px}.safety{border-top:1px dashed #555;padding-top:7px}table{width:100%;border-collapse:collapse;table-layout:fixed}th,td{border:1px solid #222;padding:7px;vertical-align:top;font-size:9.5pt;line-height:1.45}th{font-weight:700}.footnote{text-align:center;margin-top:12px}.word-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:7mm}.word-cards article{text-align:center;min-height:74mm}.word-cards .picture{font-size:32pt;filter:grayscale(1)}.word-cards h2{font-size:22pt;margin:4px}.word-cards p{font-size:14pt;margin:2px 0 12px}.word-cards article div{margin-top:10px;line-height:1.5}.outing{max-width:170mm;margin:auto}.outing ul{list-style:none;padding:0;font-size:17pt;line-height:2.35}.notes{border:1px solid #555;padding:8mm;margin:8mm 0;line-height:1.8}@media print{button{display:none}} </style></head><body><header><h1>${s[e]}</h1><p>${Xe(Ie)}</p></header>${c}<script>window.onload=()=>setTimeout(()=>window.print(),250)<\/script></body></html>`),i.document.close(),!0}function Qe({plan:e,onPlan:t,onOpen:n,notify:r,nickname:i,childAge:a,todayActivities:o,routineChecks:s,onRoutineChecks:c}){let l=(new Date().getDay()+6)%7,[u,d]=(0,_.useState)(`week`),[f,p]=(0,_.useState)(l),[m,h]=(0,_.useState)(null),g=e[f]||[],v=e.flat().filter(e=>e.kind===`activity`).length,y=e.flat().length-v,b=new Set(e.flat().map(e=>e.activityId&&E.find(t=>t.id===e.activityId)?.category).filter(Boolean)).size,x=Math.round(e.reduce((e,t)=>e+t.reduce((e,t)=>e+t.duration,0),0)/7),ee=()=>{t(Te(Math.floor(Math.random()*E.length),a)),r(`已经按 ${a} 岁重新安排活动与休息`)},S=n=>{t(e.map((e,t)=>t===f?e.filter(e=>e.uid!==n):[...e])),r(`已经从这一天移除`)},C=n=>{m&&(t(e.map((e,t)=>t===m.day?[...e,{uid:`activity-${Date.now()}-${n.number}`,kind:`activity`,slot:m.slot,activityId:n.id,title:n.title,duration:n.duration}]:[...e])),D(`plan_item_added`,{...Ae(n,`weekly_plan`),item_kind:`activity`,slot:m.slot}),r(`已把「${n.title}」加入${m.slot}`))},te=n=>{m&&(t(e.map((e,t)=>t===m.day?[...e,{uid:`rhythm-${Date.now()}-${n.kind}`,kind:n.kind,slot:m.slot,title:n.title,duration:n.duration}]:[...e])),D(`plan_item_added`,{source:`weekly_plan`,item_kind:n.kind,slot:m.slot}),r(`已加入「${n.title}」`))},ne={week:[`玩一会儿，也好好休息`,`本周生活课表`],routines:[`把真实生活变成课程`,`生活流程课`],print:[`贴在冰箱上也能用`,`打印中心`]};return(0,O.jsxs)(`section`,{className:`page plan-page`,children:[(0,O.jsxs)(`div`,{className:`planner-tabs`,role:`tablist`,"aria-label":`计划工具`,children:[(0,O.jsx)(`button`,{role:`tab`,"aria-selected":u===`week`,className:u===`week`?`active`:``,onClick:()=>d(`week`),children:`周课表`}),(0,O.jsx)(`button`,{role:`tab`,"aria-selected":u===`routines`,className:u===`routines`?`active`:``,onClick:()=>d(`routines`),children:`生活流程`}),(0,O.jsx)(`button`,{role:`tab`,"aria-selected":u===`print`,className:u===`print`?`active`:``,onClick:()=>d(`print`),children:`打印中心`})]}),(0,O.jsxs)(`div`,{className:`title-row planner-title`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`p`,{className:`date-line`,children:ne[u][0]}),(0,O.jsx)(`h1`,{children:ne[u][1]})]}),u===`week`?(0,O.jsx)(`button`,{className:`icon-button`,onClick:ee,"aria-label":`重新生成`,children:(0,O.jsx)(A,{name:`swap`})}):(0,O.jsx)(`img`,{src:Me(`assets/mascot.webp`),alt:`芽芽陪你安排生活课程`})]}),u===`week`&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(`section`,{className:`week-theme`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`small`,{children:`这周的小提醒`}),(0,O.jsx)(`h2`,{children:`不用把一天排满`}),(0,O.jsx)(`p`,{children:`同一时段可以安排多个游戏，也可以穿插喝水、家务、自由玩和午睡。`}),(0,O.jsx)(`button`,{onClick:ee,children:`换一份温柔节奏`})]}),(0,O.jsx)(`img`,{src:Me(`assets/mascot.webp`),alt:`芽芽举着小风车`})]}),(0,O.jsxs)(`div`,{className:`plan-summary`,children:[(0,O.jsxs)(`span`,{children:[(0,O.jsx)(`strong`,{children:v}),(0,O.jsx)(`small`,{children:`个不同活动`})]}),(0,O.jsxs)(`span`,{children:[(0,O.jsx)(`strong`,{children:y}),(0,O.jsx)(`small`,{children:`个休息与生活块`})]}),(0,O.jsxs)(`span`,{children:[(0,O.jsx)(`strong`,{children:x}),(0,O.jsx)(`small`,{children:`分钟 / 天（含休息）`})]})]}),(0,O.jsxs)(`div`,{className:`soft-advice`,children:[(0,O.jsx)(A,{name:`sparkle`}),(0,O.jsxs)(`span`,{children:[`本周覆盖 `,b,` 个成长领域；休息与自由玩也属于孩子的重要课程。`]})]}),(0,O.jsx)(`div`,{className:`week-day-tabs`,role:`tablist`,children:Ne.map((t,n)=>{let r=(e[n]||[]).filter(e=>e.kind===`activity`).length;return(0,O.jsxs)(`button`,{role:`tab`,"aria-selected":f===n,className:`${f===n?`active`:``} ${n===l?`today`:``}`,onClick:()=>p(n),children:[(0,O.jsx)(`strong`,{children:t.slice(1)}),(0,O.jsxs)(`small`,{children:[r,`项`]}),n===l&&(0,O.jsx)(`i`,{children:`今`})]},t)})}),(0,O.jsxs)(`section`,{className:`day-schedule`,children:[(0,O.jsxs)(`div`,{className:`schedule-heading`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsxs)(`small`,{children:[Ne[f],`的安排`]}),(0,O.jsx)(`h2`,{children:`游戏、生活与留白`})]}),(0,O.jsxs)(`span`,{children:[g.length,` 个安排`]})]}),ve.map(e=>{let t=g.filter(t=>t.slot===e);return(0,O.jsxs)(`section`,{className:`time-slot`,children:[(0,O.jsxs)(`header`,{children:[(0,O.jsx)(`span`,{children:e===`早餐后`?`☀️`:e===`上午`?`🌤️`:e===`午睡后`?`🌿`:e===`傍晚`?`🌇`:`🌙`}),(0,O.jsx)(`strong`,{children:e}),(0,O.jsxs)(`small`,{children:[t.reduce((e,t)=>e+t.duration,0),` 分钟`]}),(0,O.jsxs)(`button`,{onClick:()=>h({day:f,slot:e}),children:[(0,O.jsx)(A,{name:`plus`,size:16}),` 添加`]})]}),(0,O.jsx)(`div`,{className:`slot-items`,children:t.length===0?(0,O.jsx)(`button`,{className:`empty-slot`,onClick:()=>h({day:f,slot:e}),children:`这里留白也很好 · 点此添加`}):t.map(e=>{let t=e.activityId?E.find(t=>t.id===e.activityId):void 0;if(t)return(0,O.jsxs)(`article`,{className:`schedule-activity`,children:[(0,O.jsxs)(`button`,{className:`schedule-main`,onClick:()=>n(t),children:[(0,O.jsx)(Ke,{activity:t}),(0,O.jsxs)(`span`,{children:[(0,O.jsx)(`strong`,{children:t.title}),(0,O.jsxs)(`small`,{children:[t.category,` · `,t.durationLabel]})]})]}),(0,O.jsx)(`button`,{className:`remove-plan-item`,"aria-label":`移除${t.title}`,onClick:()=>S(e.uid),children:(0,O.jsx)(A,{name:`close`,size:16})})]},e.uid);let r=Ee.find(t=>t.kind===e.kind&&t.title===e.title);return(0,O.jsxs)(`article`,{className:`schedule-rhythm ${e.kind}`,children:[(0,O.jsx)(`span`,{children:r?.emoji||`🤍`}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`strong`,{children:e.title}),(0,O.jsxs)(`small`,{children:[e.kind===`chore`?`小小家务`:e.kind===`free`?`自由玩耍`:e.kind===`meal`?`用餐时间`:e.kind===`nap`?`睡眠休息`:`休息留白`,` · `,e.duration,` 分钟`]})]}),(0,O.jsx)(`button`,{className:`remove-plan-item`,"aria-label":`移除${e.title}`,onClick:()=>S(e.uid),children:(0,O.jsx)(A,{name:`close`,size:16})})]},e.uid)})})]},e)})]})]}),u===`routines`&&(0,O.jsx)($e,{checks:s,onChecks:c,notify:r}),u===`print`&&(0,O.jsx)(et,{nickname:i,todayActivities:o,plan:e,notify:r}),u===`week`&&m&&(0,O.jsx)(tt,{slot:m.slot,childAge:a,existingIds:g.filter(e=>e.slot===m.slot).map(e=>e.activityId).filter(Boolean),onAddActivity:C,onAddRhythm:te,onClose:()=>h(null)})]})}function $e({checks:e,onChecks:t,notify:n}){let[r,i]=(0,_.useState)(`morning`),a=(n,r)=>{let i=e[n]||[],a=i.includes(r)?i.filter(e=>e!==r):[...i,r];t({...e,[n]:a});let o=Je.find(e=>e.id===n);D(`routine_step_toggled`,{routine_id:n,step_index:Math.max(0,o?.steps.findIndex(e=>e.id===r)??0)+1,completed:a.includes(r)})};return(0,O.jsxs)(`div`,{className:`routine-courses`,children:[(0,O.jsxs)(`section`,{className:`routine-intro`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`span`,{children:`每天都会发生的学习`}),(0,O.jsx)(`h2`,{children:`不用特意“上课”`}),(0,O.jsx)(`p`,{children:`观察、选择、整理和聊天，都能自然长出语言、逻辑与生活能力。`})]}),(0,O.jsx)(`img`,{src:Me(`assets/mascot.webp`),alt:`芽芽准备开始生活流程`})]}),(0,O.jsxs)(`div`,{className:`routine-howto`,children:[(0,O.jsx)(`span`,{children:`👉`}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`strong`,{children:`这样使用`}),(0,O.jsx)(`p`,{children:`先点开一个流程卡，再点击每一步左侧的圆圈完成勾选；进度会自动保存，并在第二天重新开始。`})]})]}),Je.map(t=>{let o=e[t.id]||[],s=r===t.id;return(0,O.jsxs)(`article`,{className:`routine-card ${t.tone} ${s?`open`:``}`,children:[(0,O.jsxs)(`button`,{className:`routine-heading`,"aria-expanded":s,onClick:()=>i(s?``:t.id),children:[(0,O.jsx)(`span`,{className:`routine-emoji`,children:t.emoji}),(0,O.jsxs)(`span`,{children:[(0,O.jsx)(`strong`,{children:t.title}),(0,O.jsx)(`small`,{children:t.subtitle})]}),(0,O.jsxs)(`em`,{children:[o.length,`/`,t.steps.length,` 完成`]}),(0,O.jsx)(A,{name:`arrow`,size:18})]}),s&&(0,O.jsxs)(`div`,{className:`routine-body`,children:[(0,O.jsx)(`div`,{className:`routine-progress`,children:(0,O.jsx)(`i`,{style:{width:`${o.length/t.steps.length*100}%`}})}),(0,O.jsx)(`ol`,{children:t.steps.map((e,r)=>{let i=o.includes(e.id);return(0,O.jsxs)(`li`,{className:i?`done`:``,children:[(0,O.jsx)(`button`,{className:`routine-check`,"aria-label":`${i?`取消完成`:`完成`}${e.title}`,onClick:()=>a(t.id,e.id),children:i?(0,O.jsx)(A,{name:`check`,size:16}):r+1}),(0,O.jsx)(`span`,{className:`routine-step-emoji`,children:e.emoji}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`strong`,{children:e.title}),(0,O.jsx)(`small`,{children:e.note}),e.english&&(0,O.jsxs)(`button`,{className:`mini-speech`,onClick:()=>{Ye(e.english.english)||n(`当前浏览器暂不支持语音朗读`)},children:[(0,O.jsx)(`span`,{children:e.english.english}),(0,O.jsx)(A,{name:`volume`,size:17})]})]})]},e.id)})}),(0,O.jsxs)(`aside`,{children:[(0,O.jsx)(`span`,{children:`♡`}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`strong`,{children:`给家长的小建议`}),(0,O.jsx)(`p`,{children:t.tip})]})]})]})]},t.id)})]})}function et({nickname:e,todayActivities:t,plan:n,notify:r}){let i=[{kind:`today`,title:`今日活动卡`,desc:`材料、三步玩法、家长话术和安全提醒`,emoji:`🗂️`,tone:`sunrise`},{kind:`week`,title:`本周计划表`,desc:`一周安排清晰可见，游戏和休息都能看见`,emoji:`🗓️`,tone:`sky`},{kind:`english`,title:`英语词汇小卡`,desc:`单词、中文、简单句和对应的本周游戏`,emoji:`🔤`,tone:`blush`},{kind:`outing`,title:`外出任务卡`,desc:`出门带任务，观察世界，收获成长`,emoji:`🎒`,tone:`mint`}],a=(i,a)=>{Ze(i,e,t,n)?(D(`print_card_opened`,{print_type:i}),r(`${a}已打开，可打印或保存为 PDF`)):r(`浏览器阻止了打印窗口，请允许弹出窗口后重试`)};return(0,O.jsxs)(`div`,{className:`print-center`,children:[(0,O.jsxs)(`section`,{className:`print-intro`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`span`,{children:`从屏幕回到生活`}),(0,O.jsx)(`h2`,{children:`不用一直拿着手机`}),(0,O.jsx)(`p`,{children:`打印出来贴在冰箱或墙上，孩子也能自己看懂下一步。`})]}),(0,O.jsx)(`span`,{className:`desk-printer`,children:(0,O.jsx)(A,{name:`printer`,size:34})})]}),(0,O.jsx)(`div`,{className:`print-list`,children:i.map(e=>(0,O.jsxs)(`article`,{className:e.tone,children:[(0,O.jsx)(`span`,{className:`print-illustration`,children:e.emoji}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`h3`,{children:e.title}),(0,O.jsx)(`p`,{children:e.desc}),(0,O.jsxs)(`button`,{onClick:()=>a(e.kind,e.title),children:[(0,O.jsx)(A,{name:`printer`,size:16}),` 预览并打印`]})]})]},e.kind))})]})}function tt({slot:e,childAge:t,existingIds:n,onAddActivity:r,onAddRhythm:i,onClose:a}){let[o,s]=(0,_.useState)(``),[c,l]=(0,_.useState)(`全部`),u=E.filter(e=>ye(e,t)&&(c===`全部`||e.category===c)&&(e.title.includes(o)||e.summary.includes(o)||e.materials.join(``).includes(o))).slice(0,40);return(0,O.jsx)(`div`,{className:`modal-backdrop`,onMouseDown:a,children:(0,O.jsxs)(`article`,{className:`sheet schedule-picker`,onMouseDown:e=>e.stopPropagation(),children:[(0,O.jsxs)(`button`,{className:`sheet-back`,"aria-label":`返回计划`,onClick:a,children:[(0,O.jsx)(A,{name:`back`}),(0,O.jsx)(`span`,{children:`返回计划`})]}),(0,O.jsxs)(`div`,{className:`picker-heading`,children:[(0,O.jsxs)(`small`,{children:[`正在安排 · 为 `,t,` 岁筛选`]}),(0,O.jsxs)(`h2`,{children:[e,`可以选多个项目`]}),(0,O.jsx)(`p`,{children:`添加后不会自动关闭，可以继续选择游戏、休息或家务。`})]}),(0,O.jsxs)(`section`,{className:`rhythm-picker`,children:[(0,O.jsx)(`h3`,{children:`先放好生活节奏`}),(0,O.jsx)(`div`,{children:Ee.map(e=>(0,O.jsxs)(`button`,{onClick:()=>i(e),children:[(0,O.jsx)(`span`,{children:e.emoji}),(0,O.jsx)(`strong`,{children:e.title}),(0,O.jsxs)(`small`,{children:[e.duration,`分钟`]})]},`${e.kind}-${e.title}`))})]}),(0,O.jsxs)(`label`,{className:`search-box`,children:[(0,O.jsx)(A,{name:`search`}),(0,O.jsx)(`input`,{value:o,onChange:e=>s(e.target.value),placeholder:`搜索 ${E.length} 个不同活动`})]}),(0,O.jsx)(`div`,{className:`filter-scroll picker-filters`,children:_e.map(e=>(0,O.jsx)(`button`,{className:c===e?`active`:``,onClick:()=>l(e),children:e},e))}),(0,O.jsx)(`div`,{className:`picker-list`,children:u.map(e=>(0,O.jsxs)(`article`,{children:[(0,O.jsx)(Ke,{activity:e}),(0,O.jsxs)(`button`,{className:`picker-copy`,onClick:()=>r(e),children:[(0,O.jsx)(`strong`,{children:e.title}),(0,O.jsxs)(`small`,{children:[e.category,` · `,e.durationLabel,` · `,e.minAge,`–`,e.maxAge,`岁`]})]}),(0,O.jsx)(`button`,{className:n.includes(e.id)?`added`:``,disabled:n.includes(e.id),onClick:()=>r(e),children:n.includes(e.id)?`已添加`:`＋ 添加`})]},e.id))}),(0,O.jsx)(`button`,{className:`primary wide sticky-action`,onClick:a,children:`完成这个时段`})]})})}function nt({favorites:e,savedOnly:t,childAge:n,onSavedOnly:r,onFavorites:i,onOpen:a,onAdd:o}){let[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)(``),[d,f]=(0,_.useState)(`全部`),[p,m]=(0,_.useState)(n),[h,g]=(0,_.useState)(null),v=(0,_.useRef)(null);(0,_.useEffect)(()=>m(n),[n]);let y=(0,_.useMemo)(()=>E.filter(n=>(!t||e.includes(n.id))&&(t||p===`all`||ye(n,p))&&(d===`全部`||n.category===d)&&(n.title.includes(l)||n.summary.includes(l)||n.materials.join(``).includes(l)||n.series.includes(l))),[l,d,p,t,e]),b=()=>{window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>v.current?.scrollIntoView({behavior:`smooth`,block:`start`})))},x=e=>{c(``),u(``),r(!1),f(e),b()},ee=e=>{e.preventDefault();let t=s.trim();u(t),f(`全部`),r(!1),D(`search_used`,{result_count:E.filter(e=>e.title.includes(t)||e.summary.includes(t)||e.materials.join(``).includes(t)||e.series.includes(t)).length}),b()},S=(0,O.jsx)(`div`,{className:`library-list`,children:y.map(t=>(0,O.jsxs)(`article`,{className:`library-card`,children:[(0,O.jsx)(`button`,{className:`library-picture-button`,"aria-label":`${t.title}插图`,onClick:()=>a(t),children:(0,O.jsx)(Ke,{activity:t})}),(0,O.jsxs)(`button`,{className:`library-copy`,onClick:()=>a(t),children:[(0,O.jsx)(`strong`,{children:t.title}),(0,O.jsxs)(`small`,{children:[t.category,` · `,t.durationLabel]}),(0,O.jsxs)(`span`,{className:`activity-age-tag`,children:[t.minAge,`–`,t.maxAge,`岁 · `,t.difficulty]}),(0,O.jsx)(`p`,{children:t.summary})]}),(0,O.jsx)(`button`,{className:`heart-button ${e.includes(t.id)?`active`:``}`,"aria-label":e.includes(t.id)?`取消收藏`:`收藏`,onClick:()=>{let n=!e.includes(t.id);i(n?[...e,t.id]:e.filter(e=>e!==t.id)),D(`activity_saved`,{...Ae(t,`activity_library`),saved:n})},children:(0,O.jsx)(A,{name:`heart`,size:19})}),(0,O.jsxs)(`button`,{className:`tiny-add`,onClick:()=>o(t),children:[(0,O.jsx)(A,{name:`plus`,size:17}),`今天`]})]},t.id))});return t?(0,O.jsxs)(`section`,{className:`page favorites-page`,children:[(0,O.jsxs)(`header`,{className:`favorites-page-header`,children:[(0,O.jsx)(`span`,{children:(0,O.jsx)(A,{name:`heart`,size:28})}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`p`,{children:`收藏与灵感`}),(0,O.jsx)(`h1`,{children:`我的收藏夹`}),(0,O.jsx)(`small`,{children:y.length>0?`这里收着 ${y.length} 个喜欢的活动`:`喜欢的活动会安静地收在这里`})]})]}),y.length===0?(0,O.jsxs)(`section`,{className:`favorites-empty`,children:[(0,O.jsx)(`span`,{children:`♡`}),(0,O.jsx)(`h3`,{children:`收藏夹还是空的`}),(0,O.jsx)(`p`,{children:`回到活动页，看到喜欢的活动时点一下爱心，它就会被收进这里。`}),(0,O.jsx)(`button`,{onClick:()=>x(`全部`),children:`去发现活动`})]}):S]}):(0,O.jsxs)(`section`,{className:`page library-page`,children:[(0,O.jsx)(`div`,{className:`title-row`,children:(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`p`,{className:`date-line`,children:`发现好玩的亲子时光`}),(0,O.jsx)(`h1`,{children:`活动发现`})]})}),(0,O.jsxs)(`form`,{className:`search-box library-search`,onSubmit:ee,children:[(0,O.jsx)(A,{name:`search`}),(0,O.jsx)(`input`,{"aria-label":`搜索活动、材料或场景`,value:s,onChange:e=>c(e.target.value),placeholder:`搜索活动、材料或场景`}),s?(0,O.jsx)(`button`,{type:`button`,className:`search-clear`,"aria-label":`清空搜索`,onClick:()=>{c(``),u(``)},children:(0,O.jsx)(A,{name:`close`,size:16})}):null,(0,O.jsx)(`button`,{className:`search-submit`,type:`submit`,children:`搜索`})]}),(0,O.jsxs)(`section`,{className:`age-filter-panel`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`span`,{children:`按年龄找活动`}),(0,O.jsx)(`strong`,{children:p===`all`?`正在查看全部年龄`:`正在为 ${p} 岁孩子推荐`})]}),(0,O.jsxs)(`div`,{children:[[2,3,4,5,6].map(e=>(0,O.jsxs)(`button`,{className:p===e?`active`:``,"aria-pressed":p===e,onClick:()=>{m(e),D(`age_filter_selected`,{age:e}),b()},children:[e,`岁`]},e)),(0,O.jsx)(`button`,{className:p===`all`?`active`:``,"aria-pressed":p===`all`,onClick:()=>{m(`all`),D(`age_filter_selected`,{age:`all`}),b()},children:`全部`})]}),(0,O.jsx)(`small`,{children:`同一个活动会按适龄范围出现，详情里还有轻松玩法和进阶玩法。`})]}),(0,O.jsx)(`div`,{className:`filter-scroll`,children:_e.map(e=>(0,O.jsx)(`button`,{className:!t&&d===e?`active`:``,onClick:()=>x(e),children:e},e))}),(0,O.jsxs)(`section`,{className:`english-series-banner`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`small`,{children:`EXPANDED · 独立启蒙系列`}),(0,O.jsx)(`h2`,{children:`游戏化英语活动`}),(0,O.jsx)(`p`,{children:`加入寻宝、表演、制作、运动、故事与亲子合作，用动作和真实生活自然开口。`}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`span`,{children:`生活词汇与动作`}),(0,O.jsx)(`span`,{children:`剧情任务与亲子合作`})]}),(0,O.jsx)(`button`,{onClick:()=>x(`英语启蒙`),children:`进入英语启蒙并查看活动`})]}),(0,O.jsxs)(`span`,{className:`english-art`,children:[`A`,(0,O.jsx)(`span`,{children:`🌈`}),(0,O.jsx)(`b`,{children:`hello!`})]})]}),(0,O.jsxs)(`section`,{className:`theme-banner`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`small`,{children:`自然探索主题`}),(0,O.jsx)(`h2`,{children:`风、云、影子和小种子`}),(0,O.jsx)(`p`,{children:`从家门口开始观察，慢慢发现自然里的秘密。`}),(0,O.jsx)(`button`,{onClick:()=>x(`自然科学`),children:`查看主题并定位活动`})]}),(0,O.jsx)(`img`,{src:Me(`assets/mascot.webp`),alt:`芽芽邀请你发现活动`})]}),(0,O.jsxs)(`div`,{className:`section-heading library-results-heading`,ref:v,children:[(0,O.jsx)(`div`,{children:(0,O.jsx)(`h2`,{children:d===`英语启蒙`?`英语启蒙活动`:l?`搜索结果`:p===`all`?`全部活动`:`${p} 岁精选活动`})}),(0,O.jsxs)(`small`,{children:[y.length,` 个`]})]}),y.length>0?S:(0,O.jsxs)(`section`,{className:`search-empty`,children:[(0,O.jsx)(`span`,{children:`🔎`}),(0,O.jsx)(`h3`,{children:`没有找到相关活动`}),(0,O.jsx)(`p`,{children:`换一个短一点的关键词试试，例如“袜子”“颜色”或“英语”。`})]}),(0,O.jsx)(`div`,{className:`library-tools single`,children:(0,O.jsxs)(`button`,{onClick:()=>{let e=y.length?y:E.filter(e=>p===`all`||ye(e,p));g(e[Math.floor(Math.random()*e.length)])},children:[(0,O.jsx)(`span`,{children:`🎲`}),(0,O.jsxs)(`span`,{children:[(0,O.jsx)(`strong`,{children:h?h.title:`随机一个活动`}),(0,O.jsx)(`small`,{children:h?`再换一个惊喜`:`从当前年龄与类别里抽取`})]})]})}),h&&(0,O.jsxs)(`section`,{className:`surprise`,children:[(0,O.jsx)(`img`,{src:Me(`assets/mascot.webp`),alt:`芽芽抽活动`}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`small`,{children:`芽芽帮你选好了`}),(0,O.jsx)(`h3`,{children:h.title}),(0,O.jsx)(`p`,{children:h.summary})]}),(0,O.jsx)(`button`,{onClick:()=>a(h),children:`去看看`})]})]})}function rt({completions:e,onExplore:t}){let n=[...e].filter(e=>e.quote?.trim()).reverse(),r=n[0]?.quote,[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(null),u=(e,t)=>l(n=>({id:e,message:t,tick:(n?.tick||0)+1})),d=[{id:`language`,emoji:`🌻`,title:`语言表达`,categories:[`语言表达`,`英语启蒙`],hint:`愿意多说一点`,next:`继续聊天、复述故事或玩英语动作游戏`},{id:`life`,emoji:`🍄`,title:`生活能力`,categories:[`生活能力`,`精细动作`,`大运动`],hint:`喜欢自己试试`,next:`把收拾、穿衣和小家务交给孩子一点点`},{id:`creative`,emoji:`🌼`,title:`艺术创造`,categories:[`艺术创造`,`音乐节奏`],hint:`有自己的想法`,next:`多提供开放材料，让孩子决定颜色、节奏和做法`},{id:`nature`,emoji:`🌳`,title:`自然观察`,categories:[`自然科学`,`空间认知`,`数量逻辑`],hint:`发现更多细节`,next:`出门带一张观察卡，比较、数一数、说说变化`}].map(t=>{let n=e.filter(e=>{let n=E.find(t=>t.id===e.activityId);return n?t.categories.includes(n.category):!1}).length,r=n===0?`正在发芽`:n<3?`冒出小叶`:n<6?`慢慢长高`:`开出小花`;return{...t,count:n,stage:r}}),f=d.find(e=>e.id===o);return(0,O.jsxs)(`section`,{className:`page garden-page`,children:[(0,O.jsxs)(`div`,{className:`garden-header`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`p`,{className:`date-line`,children:`记录我们一起成长的点滴`}),(0,O.jsx)(`h1`,{children:`成长花园`})]}),(0,O.jsx)(`img`,{src:Me(`assets/mascot.webp`),alt:`芽芽在花园里`})]}),(0,O.jsxs)(`div`,{className:`growth-overview`,children:[(0,O.jsxs)(`span`,{children:[(0,O.jsx)(`strong`,{children:`18`}),(0,O.jsx)(`small`,{children:`连续陪伴天数`})]}),(0,O.jsxs)(`span`,{children:[(0,O.jsx)(`strong`,{children:e.length+6}),(0,O.jsx)(`small`,{children:`本周活动`})]}),(0,O.jsxs)(`button`,{"aria-expanded":i,"aria-controls":`garden-quote-collection`,onClick:()=>a(e=>!e),children:[(0,O.jsx)(`strong`,{children:n.length}),(0,O.jsx)(`small`,{children:`收藏的童言`}),(0,O.jsxs)(`em`,{children:[i?`收起`:`点开看看`,` `,(0,O.jsx)(A,{name:`arrow`,size:12})]})]})]}),i&&(0,O.jsxs)(`section`,{className:`quote-collection`,id:`garden-quote-collection`,children:[(0,O.jsxs)(`header`,{children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`small`,{children:`孩子自己的小小表达`}),(0,O.jsx)(`h2`,{children:`童言收藏`})]}),(0,O.jsx)(`button`,{"aria-label":`收起童言收藏`,onClick:()=>a(!1),children:(0,O.jsx)(A,{name:`close`,size:18})})]}),n.length>0?(0,O.jsx)(`div`,{children:n.slice(0,12).map((e,t)=>{let n=E.find(t=>t.id===e.activityId);return(0,O.jsxs)(`article`,{children:[(0,O.jsx)(`span`,{children:`“`}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`blockquote`,{children:e.quote}),(0,O.jsxs)(`small`,{children:[e.date,n?` · ${n.title}`:``]})]})]},`${e.activityId}-${e.date}-${t}`)})}):(0,O.jsxs)(`div`,{className:`quote-empty`,children:[(0,O.jsx)(`span`,{children:`💬`}),(0,O.jsx)(`h3`,{children:`第一句话还在路上`}),(0,O.jsx)(`p`,{children:`完成活动后，在记录里写下孩子今天说过的话，它就会自动收藏在这里。`}),(0,O.jsx)(`button`,{onClick:t,children:`去挑一个活动`})]})]}),(0,O.jsxs)(`div`,{className:`month-summary`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`small`,{children:`本月一起完成`}),(0,O.jsxs)(`strong`,{children:[18+e.length,(0,O.jsx)(`span`,{children:`个活动`})]}),(0,O.jsx)(`p`,{children:`每一次陪伴，都是成长的养分。`})]}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`small`,{children:`孩子说过的话`}),(0,O.jsx)(`blockquote`,{children:r?`“${r}”`:`还没有收藏童言，完成活动时可以记下一句。`}),(0,O.jsx)(`span`,{children:r?`悄悄收藏进花园了`:`第一句话会从这里慢慢长出来`})]})]}),(0,O.jsxs)(`section`,{className:`garden-scene`,children:[(0,O.jsx)(`img`,{className:`garden-base`,src:Me(`assets/garden.webp`),alt:`向日葵、小树、蘑菇和彩色花朵组成的成长花园`,fetchPriority:`high`}),c&&(0,O.jsx)(`img`,{className:`garden-awake-layer garden-${c.id}`,src:Me(`assets/garden.webp`),alt:``,"aria-hidden":`true`},`${c.id}-${c.tick}`),(0,O.jsxs)(`div`,{className:`garden-hotspots`,children:[(0,O.jsx)(`button`,{className:`garden-hotspot hotspot-sunflower`,"aria-label":`轻触向日葵，让它长高一点`,onClick:()=>u(`sunflower`,`向日葵又长高一点啦`)}),(0,O.jsx)(`button`,{className:`garden-hotspot hotspot-tree`,"aria-label":`轻触小树，让它伸伸懒腰`,onClick:()=>u(`tree`,`小树伸了一个懒腰`)}),(0,O.jsx)(`button`,{className:`garden-hotspot hotspot-mushroom`,"aria-label":`轻触小蘑菇，让它跳一跳`,onClick:()=>u(`mushroom`,`小蘑菇开心地跳了跳`)}),(0,O.jsx)(`button`,{className:`garden-hotspot hotspot-flowers`,"aria-label":`轻触彩色花朵，让它们摇一摇`,onClick:()=>u(`flowers`,`彩色花朵轻轻摇摆起来`)})]}),(0,O.jsxs)(`div`,{className:`garden-tags`,children:[(0,O.jsx)(`span`,{children:`语言表达 · 向日葵`}),(0,O.jsx)(`span`,{children:`生活能力 · 小蘑菇`}),(0,O.jsx)(`span`,{children:`艺术创造 · 彩色花朵`})]}),c&&(0,O.jsxs)(`span`,{className:`garden-reaction reaction-${c.id}`,"aria-live":`polite`,children:[`✦ `,c.message]},`message-${c.id}-${c.tick}`),!c&&(0,O.jsx)(`small`,{className:`garden-touch-tip`,children:`轻轻点一点，看看花园会发生什么`}),(0,O.jsx)(`p`,{children:`慢慢长大，也很好。`})]}),(0,O.jsxs)(`section`,{className:`domain-section`,children:[(0,O.jsxs)(`div`,{className:`section-heading`,children:[(0,O.jsx)(`div`,{children:(0,O.jsx)(`h2`,{children:`这月长出的能力`})}),(0,O.jsx)(`small`,{children:`会随着记录慢慢变化`})]}),(0,O.jsx)(`div`,{className:`domain-grid`,children:d.map(e=>(0,O.jsxs)(`button`,{"aria-expanded":o===e.id,className:o===e.id?`active`:``,onClick:()=>s(o===e.id?null:e.id),children:[(0,O.jsx)(`span`,{children:e.emoji}),(0,O.jsx)(`strong`,{children:e.title}),(0,O.jsx)(`small`,{children:e.stage}),(0,O.jsxs)(`em`,{children:[e.count,` 次相关活动`]})]},e.id))}),f&&(0,O.jsxs)(`article`,{className:`domain-detail`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`span`,{children:f.emoji}),(0,O.jsxs)(`div`,{children:[(0,O.jsxs)(`small`,{children:[f.title,` · `,f.stage]}),(0,O.jsx)(`h3`,{children:f.hint})]})]}),(0,O.jsx)(`div`,{className:`domain-progress`,children:(0,O.jsx)(`i`,{style:{width:`${Math.min(100,16+f.count*14)}%`}})}),(0,O.jsxs)(`p`,{children:[`下一步可以：`,f.next,`。`]}),(0,O.jsx)(`p`,{className:`domain-note`,children:`这里不是评分，也不比较孩子；完成并记录相关活动后，文字与成长阶段会慢慢改变。`}),(0,O.jsxs)(`button`,{onClick:t,children:[`去找相关活动 `,(0,O.jsx)(A,{name:`arrow`,size:16})]})]})]}),(0,O.jsxs)(`div`,{className:`section-heading`,children:[(0,O.jsx)(`div`,{children:(0,O.jsx)(`h2`,{children:`最近记录`})}),(0,O.jsxs)(`button`,{onClick:t,children:[`去发现活动 `,(0,O.jsx)(A,{name:`arrow`,size:16})]})]}),e.length===0?(0,O.jsxs)(`div`,{className:`empty-note`,children:[(0,O.jsx)(`span`,{children:`🌱`}),(0,O.jsx)(`h3`,{children:`第一颗种子还在口袋里`}),(0,O.jsx)(`p`,{children:`完成一次活动后，可以从孩子今天说过的一句话开始记录。`}),(0,O.jsx)(`button`,{className:`secondary`,onClick:t,children:`挑一个小活动`})]}):(0,O.jsx)(`div`,{className:`record-list`,children:e.slice(-4).reverse().map((e,t)=>{let n=E.find(t=>t.id===e.activityId);return(0,O.jsxs)(`article`,{children:[(0,O.jsx)(`span`,{className:n.color,children:n.emoji}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`strong`,{children:n.title}),(0,O.jsx)(`p`,{children:e.quote?`“${e.quote}”`:`今天${e.reaction}`}),(0,O.jsxs)(`small`,{children:[e.date,` · `,n.category]})]})]},`${e.activityId}-${t}`)})})]})}function it({data:e,onData:t,onOpenFavorites:n,notify:r}){let i=(0,_.useRef)(null),a=n=>t({...e,...n}),o=e=>{if(!e)return;if(!e.type.startsWith(`image/`)){r(`请选择一张照片`);return}let t=new FileReader;t.onload=()=>{let e=new Image;e.onload=()=>{let t=document.createElement(`canvas`);t.width=256,t.height=256;let n=t.getContext(`2d`),i=Math.min(e.width,e.height);n.drawImage(e,(e.width-i)/2,(e.height-i)/2,i,i,0,0,256,256),a({avatarKind:`upload`,avatarData:t.toDataURL(`image/jpeg`,.82)}),r(`孩子头像已经换好`)},e.src=String(t.result)},t.readAsDataURL(e)},s=t=>a({activityTimes:e.activityTimes.includes(t)?e.activityTimes.filter(e=>e!==t):[...e.activityTimes,t]}),c=n=>{t({...e,age:n,todayIds:ze(n),plan:Te(n*17,n)}),D(`child_age_changed`,{age:n}),r(`已按 ${n} 岁更新今日推荐和周计划`)};return(0,O.jsxs)(`section`,{className:`page profile-page`,children:[(0,O.jsxs)(`div`,{className:`profile-title`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`h1`,{children:`设置`}),(0,O.jsxs)(`p`,{children:[`你和 `,e.nickname,` 的温暖成长空间`]})]}),(0,O.jsx)(`img`,{src:Me(`assets/mascot.webp`),alt:`芽芽陪伴你们`})]}),(0,O.jsxs)(`div`,{className:`profile-hero`,children:[(0,O.jsx)(Ue,{data:e,size:82}),(0,O.jsxs)(`div`,{children:[(0,O.jsxs)(`small`,{children:[e.age,` 岁的小小探索家`]}),(0,O.jsx)(`h2`,{children:e.nickname}),(0,O.jsxs)(`p`,{children:[`每天约 `,e.dailyMinutes,` 分钟 · 家中常见材料`]})]})]}),(0,O.jsxs)(`section`,{className:`profile-section`,children:[(0,O.jsxs)(`div`,{className:`section-heading`,children:[(0,O.jsx)(`div`,{children:(0,O.jsx)(`h2`,{children:`孩子档案`})}),(0,O.jsx)(`small`,{children:`年龄会影响活动推荐`})]}),(0,O.jsxs)(`div`,{className:`profile-fields`,children:[(0,O.jsxs)(`label`,{children:[(0,O.jsx)(`span`,{children:`小名`}),(0,O.jsx)(`input`,{value:e.nickname,maxLength:10,onChange:e=>a({nickname:e.target.value})})]}),(0,O.jsxs)(`label`,{children:[(0,O.jsx)(`span`,{children:`年龄`}),(0,O.jsx)(`select`,{value:e.age,onChange:e=>c(Number(e.target.value)),children:[2,3,4,5,6].map(e=>(0,O.jsxs)(`option`,{value:e,children:[e,` 岁`]},e))})]})]})]}),(0,O.jsxs)(`section`,{className:`profile-section avatar-section`,children:[(0,O.jsxs)(`div`,{className:`section-heading`,children:[(0,O.jsx)(`div`,{children:(0,O.jsx)(`h2`,{children:`选择孩子头像`})}),(0,O.jsx)(`small`,{children:`照片只保存在本机`})]}),(0,O.jsxs)(`div`,{className:`avatar-grid`,children:[Array.from({length:8},(t,n)=>(0,O.jsxs)(`button`,{"aria-label":`选择内置头像 ${n+1}`,className:e.avatarKind===`preset`&&e.avatarPreset===n?`selected`:``,onClick:()=>a({avatarKind:`preset`,avatarPreset:n}),children:[(0,O.jsx)(Ue,{data:{avatarKind:`preset`,avatarPreset:n,avatarData:``},size:62}),e.avatarKind===`preset`&&e.avatarPreset===n&&(0,O.jsx)(`i`,{children:(0,O.jsx)(A,{name:`check`,size:13})})]},n)),(0,O.jsxs)(`button`,{className:`upload-avatar`,onClick:()=>i.current?.click(),children:[(0,O.jsx)(A,{name:`camera`}),(0,O.jsx)(`span`,{children:`上传照片`})]})]}),(0,O.jsx)(`input`,{ref:i,hidden:!0,type:`file`,accept:`image/*`,onChange:e=>o(e.target.files?.[0])})]}),(0,O.jsxs)(`section`,{className:`settings-panel`,children:[(0,O.jsxs)(`div`,{className:`settings-title`,children:[(0,O.jsx)(A,{name:`settings`}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`h2`,{children:`家庭设置`}),(0,O.jsx)(`p`,{children:`让每天的安排更贴近你们的节奏`})]})]}),(0,O.jsxs)(`div`,{className:`setting-block`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`strong`,{children:`每日亲子时长`}),(0,O.jsx)(`small`,{children:`会影响每天推荐的活动数量`})]}),(0,O.jsx)(`div`,{className:`segmented`,children:[20,30,45,60].map(t=>(0,O.jsxs)(`button`,{className:e.dailyMinutes===t?`active`:``,onClick:()=>a({dailyMinutes:t}),children:[t,` 分钟`]},t))})]}),(0,O.jsxs)(`div`,{className:`setting-block`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`strong`,{children:`常用活动时段`}),(0,O.jsx)(`small`,{children:`可多选，不会发送系统通知`})]}),(0,O.jsx)(`div`,{className:`time-choices`,children:[`早餐后`,`上午`,`午睡后`,`傍晚`,`睡前`].map(t=>(0,O.jsx)(`button`,{className:e.activityTimes.includes(t)?`active`:``,onClick:()=>s(t),children:t},t))})]}),(0,O.jsxs)(`div`,{className:`setting-toggle`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(A,{name:`sparkle`}),(0,O.jsxs)(`span`,{children:[(0,O.jsx)(`strong`,{children:`首页温和提示`}),(0,O.jsx)(`small`,{children:`开启后在首页显示一句陪伴提醒；关闭后隐藏，不会发送系统通知`})]})]}),(0,O.jsx)(`button`,{role:`switch`,"aria-label":`首页温和提示`,"aria-checked":e.reminders,className:e.reminders?`on`:``,onClick:()=>a({reminders:!e.reminders}),children:(0,O.jsx)(`i`,{})})]}),(0,O.jsxs)(`div`,{className:`setting-row`,children:[(0,O.jsxs)(`span`,{children:[(0,O.jsx)(A,{name:`leaf`}),`重点关注`]}),(0,O.jsx)(`strong`,{children:e.interests.join(` · `)})]})]}),(0,O.jsxs)(`section`,{className:`profile-section`,children:[(0,O.jsxs)(`div`,{className:`section-heading`,children:[(0,O.jsx)(`div`,{children:(0,O.jsx)(`h2`,{children:`安心使用`})}),(0,O.jsx)(`small`,{children:`留在当前设备`})]}),(0,O.jsx)(`p`,{className:`domain-note`,children:`孩子的小名、年龄、头像、计划与成长记录只保存在当前设备上。`})]}),(0,O.jsxs)(`section`,{className:`update-note`,children:[(0,O.jsx)(`span`,{children:`🌼`}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`small`,{children:`小芽还在慢慢长大`}),(0,O.jsx)(`h2`,{children:`活动项目不断更新中`}),(0,O.jsx)(`p`,{children:`新的亲子游戏、生活课程和英语启蒙灵感，会陆续来到这里陪伴你们。`})]})]}),(0,O.jsxs)(`button`,{className:`favorites-settings-card`,onClick:n,children:[(0,O.jsx)(`span`,{className:`favorites-settings-icon`,children:(0,O.jsx)(A,{name:`heart`,size:23})}),(0,O.jsxs)(`span`,{children:[(0,O.jsx)(`small`,{children:`收藏与灵感`}),(0,O.jsx)(`strong`,{children:`我的活动收藏夹`}),(0,O.jsx)(`em`,{children:e.favorites.length>0?`已经收藏 ${e.favorites.length} 个活动`:`喜欢的活动会安静地收在这里`})]}),(0,O.jsx)(`span`,{className:`favorites-settings-count`,children:e.favorites.length}),(0,O.jsx)(A,{name:`arrow`,size:18})]}),(0,O.jsxs)(`section`,{className:`home-screen-guide`,children:[(0,O.jsxs)(`div`,{className:`home-screen-title`,children:[(0,O.jsx)(`span`,{children:(0,O.jsx)(A,{name:`home`})}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`h2`,{children:`保存到手机，随时打开`}),(0,O.jsx)(`p`,{children:`可以添加到桌面，也可以收藏到微信`})]})]}),(0,O.jsxs)(`details`,{children:[(0,O.jsxs)(`summary`,{children:[`iPhone / iPad 添加方法 `,(0,O.jsx)(A,{name:`arrow`,size:16})]}),(0,O.jsxs)(`ol`,{children:[(0,O.jsx)(`li`,{children:`先用 Safari 打开小芽计划`}),(0,O.jsx)(`li`,{children:`点击浏览器底部的“分享”按钮`}),(0,O.jsx)(`li`,{children:`选择“添加到主屏幕”，再点“添加”`})]})]}),(0,O.jsxs)(`details`,{children:[(0,O.jsxs)(`summary`,{children:[`安卓手机添加方法 `,(0,O.jsx)(A,{name:`arrow`,size:16})]}),(0,O.jsxs)(`ol`,{children:[(0,O.jsx)(`li`,{children:`用手机自带浏览器或平时常用的浏览器打开小芽计划`}),(0,O.jsx)(`li`,{children:`打开浏览器右上角或底部的菜单`}),(0,O.jsx)(`li`,{children:`选择“添加到桌面”“添加到主屏幕”“安装应用”或“创建快捷方式”`})]})]}),(0,O.jsxs)(`details`,{children:[(0,O.jsxs)(`summary`,{children:[`收藏到微信 `,(0,O.jsx)(A,{name:`arrow`,size:16})]}),(0,O.jsxs)(`ol`,{children:[(0,O.jsx)(`li`,{children:`在微信里打开小芽计划网址或扫码进入`}),(0,O.jsx)(`li`,{children:`点击页面右上角的“…”菜单`}),(0,O.jsx)(`li`,{children:`选择“收藏”，以后可在微信“我 → 收藏”中打开`})]})]}),(0,O.jsxs)(`div`,{className:`install-trouble`,children:[(0,O.jsx)(`strong`,{children:`找不到“添加到桌面”？`}),(0,O.jsx)(`p`,{children:`不同品牌手机的名称可能略有不同。如果当前在 GPT、微信等内置页面里，可先选择“在浏览器中打开”；也可以直接收藏到微信，之后从“我 → 收藏”进入。`})]})]}),(0,O.jsxs)(`footer`,{className:`copyright-footer`,children:[(0,O.jsx)(`span`,{className:`copyright-sprout`,children:`🌱`}),(0,O.jsx)(`strong`,{children:`小芽计划 Sprout Plan`}),(0,O.jsx)(`p`,{children:`© 2026 小芽计划。保留所有权利。`}),(0,O.jsx)(`p`,{children:`本产品的界面设计、文字内容、活动方案与原创插画仅供授权家庭个人使用。未经许可，请勿复制、转载、售卖或用于其他商业产品。`}),(0,O.jsxs)(`div`,{children:[(0,O.jsxs)(`span`,{children:[(0,O.jsx)(`small`,{children:`X`}),`@hann7712`]}),(0,O.jsx)(`i`,{}),(0,O.jsxs)(`span`,{children:[(0,O.jsx)(`small`,{children:`微信`}),`Canaan-77`]})]})]})]})}function at({text:e,label:t=`朗读`}){return(0,O.jsxs)(`button`,{className:`speech-button`,"aria-label":`${t}：${e}`,onClick:()=>Ye(e),children:[(0,O.jsx)(A,{name:`volume`,size:18}),(0,O.jsx)(`span`,{children:t})]})}function ot({activity:e}){let t=e.englishGuide;if(!t)return null;let n=[{label:`开场`,phrase:t.opening},{label:`游戏中`,phrase:t.during[0]||t.sentences[0]},{label:`结束`,phrase:t.ending}];return(0,O.jsxs)(`section`,{className:`english-parent-guide`,children:[(0,O.jsxs)(`header`,{children:[(0,O.jsx)(`span`,{children:`🌼`}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`h3`,{children:`家长怎么说`}),(0,O.jsx)(`p`,{children:`不用讲解语法，听一听、做一做、重复几次就够了。`})]})]}),(0,O.jsxs)(`h4`,{children:[`本次核心词 `,(0,O.jsx)(`small`,{children:`最多 3 个`})]}),(0,O.jsx)(`div`,{className:`core-words`,children:t.words.slice(0,3).map(e=>(0,O.jsxs)(`article`,{children:[(0,O.jsx)(`button`,{"aria-label":`朗读 ${e.word}`,onClick:()=>Ye(e.word),children:(0,O.jsx)(A,{name:`volume`,size:16})}),(0,O.jsx)(`strong`,{children:e.word}),(0,O.jsx)(`span`,{children:e.meaning})]},e.word))}),(0,O.jsxs)(`h4`,{children:[`核心句 `,(0,O.jsx)(`small`,{children:`最多 2 句`})]}),(0,O.jsx)(`div`,{className:`core-sentences`,children:t.sentences.slice(0,2).map(e=>(0,O.jsxs)(`div`,{children:[(0,O.jsxs)(`span`,{children:[(0,O.jsx)(`strong`,{children:e.english}),(0,O.jsx)(`small`,{children:e.chinese})]}),(0,O.jsx)(at,{text:e.english})]},e.english))}),(0,O.jsx)(`div`,{className:`parent-script`,children:n.map(e=>(0,O.jsxs)(`article`,{children:[(0,O.jsx)(`span`,{children:e.label}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`strong`,{children:e.phrase.english}),(0,O.jsx)(`small`,{children:e.phrase.chinese})]}),(0,O.jsx)(at,{text:e.phrase.english,label:`播放`})]},e.label))}),(0,O.jsxs)(`p`,{className:`speech-tip`,children:[(0,O.jsx)(A,{name:`volume`,size:16}),` 使用浏览器语音朗读，不需要付费接口；可以和孩子一起慢慢跟读。`]})]})}function st({activity:e,favorite:t,onFavorite:n,onClose:r,onRecord:i}){return(0,O.jsx)(`div`,{className:`modal-backdrop`,onMouseDown:r,children:(0,O.jsxs)(`article`,{className:`sheet activity-sheet`,onMouseDown:e=>e.stopPropagation(),children:[(0,O.jsxs)(`div`,{className:`detail-art ${e.color}`,children:[(0,O.jsx)(Ke,{activity:e}),(0,O.jsx)(`img`,{src:Me(`assets/mascot.webp`),alt:`芽芽陪你开始活动`})]}),(0,O.jsxs)(`div`,{className:`detail-title`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsxs)(`small`,{children:[e.series,` · `,e.durationLabel,` · `,e.location]}),(0,O.jsx)(`h2`,{children:e.title}),(0,O.jsxs)(`div`,{className:`detail-age-row`,children:[(0,O.jsxs)(`span`,{children:[`适合 `,e.minAge,`–`,e.maxAge,` 岁`]}),(0,O.jsx)(`span`,{children:e.difficulty}),(0,O.jsx)(`span`,{children:e.adultSupport})]}),(0,O.jsx)(`p`,{children:e.goal})]}),(0,O.jsx)(`button`,{"aria-label":t?`取消收藏`:`收藏活动`,className:t?`active`:``,onClick:n,children:(0,O.jsx)(A,{name:`heart`})})]}),(0,O.jsxs)(`section`,{className:`material-box`,children:[(0,O.jsx)(`strong`,{children:`准备这些就够了`}),(0,O.jsx)(`p`,{children:e.materials.length?e.materials.join(` · `):`不需要额外材料`})]}),(0,O.jsx)(ot,{activity:e}),(0,O.jsxs)(`section`,{children:[(0,O.jsx)(`h3`,{children:`可以这样开始`}),(0,O.jsxs)(`blockquote`,{children:[`“`,e.opening,`”`]})]}),(0,O.jsxs)(`section`,{children:[(0,O.jsx)(`h3`,{children:`一起慢慢玩`}),(0,O.jsx)(`ol`,{children:e.steps.map((e,t)=>(0,O.jsxs)(`li`,{children:[(0,O.jsx)(`span`,{children:t+1}),e]},e))})]}),(0,O.jsxs)(`section`,{children:[(0,O.jsx)(`h3`,{children:`聊一聊`}),e.questions.map(e=>(0,O.jsxs)(`p`,{className:`question`,children:[`“`,e,`”`]},e))]}),(0,O.jsxs)(`section`,{className:`easy-box`,children:[(0,O.jsx)(`strong`,{children:`今天想轻松一点`}),(0,O.jsx)(`p`,{children:e.easy})]}),(0,O.jsxs)(`section`,{className:`upgrade-box`,children:[(0,O.jsx)(`strong`,{children:`熟悉以后这样升级`}),(0,O.jsx)(`p`,{children:e.upgrade})]}),e.safety&&(0,O.jsxs)(`p`,{className:`safety`,children:[`安全提醒：`,e.safety]}),(0,O.jsx)(`button`,{className:`primary wide sticky-action`,onClick:i,children:`开始这个活动`})]})})}function ct({activity:e,onClose:t,onSave:n}){let[r,i]=(0,_.useState)(`玩得很开心`),[a,o]=(0,_.useState)(``);return(0,O.jsx)(`div`,{className:`modal-backdrop`,onMouseDown:t,children:(0,O.jsxs)(`article`,{className:`sheet record-sheet`,onMouseDown:e=>e.stopPropagation(),children:[(0,O.jsx)(`span`,{className:`record-sprout`,children:`🌱`}),(0,O.jsx)(`h2`,{children:`把这一刻种下来`}),(0,O.jsx)(`p`,{children:`不评分，只记下今天真实发生的事。`}),(0,O.jsx)(`h3`,{children:e.title}),(0,O.jsx)(`div`,{className:`reaction-grid`,children:[`玩得很开心`,`愿意参与`,`今天没兴趣`,`想再玩一次`].map(e=>(0,O.jsx)(`button`,{className:r===e?`active`:``,onClick:()=>i(e),children:e},e))}),(0,O.jsxs)(`label`,{className:`field`,children:[(0,O.jsx)(`span`,{children:`孩子今天说过的话（可选）`}),(0,O.jsx)(`textarea`,{value:a,onChange:e=>o(e.target.value),placeholder:`例如：这片叶子像一艘小船。`})]}),(0,O.jsx)(`button`,{className:`primary wide`,onClick:()=>n(e,r,a),children:`完成并种下一颗种子`})]})})}ke(),v.createRoot(document.getElementById(`root`)).render((0,O.jsx)(_.StrictMode,{children:(0,O.jsx)(We,{})})),`serviceWorker`in navigator&&navigator.serviceWorker.register(`/sprout-plan-web/sw.js`);