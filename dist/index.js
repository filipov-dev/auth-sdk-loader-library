!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(this,(()=>(()=>{"use strict";var e={};return((e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.loader=void 0,t.loader=()=>new Promise(((e,t)=>{try{const o=document.createElement("script");o.onload=()=>{e(window.FD.auth)},o.onabort=e=>{t(e)},o.src=`https://static.filipov.dev/loaders/auth/index.js?${Math.random}`,document.getElementsByName("head")[0].append(o)}catch(e){t(e)}})),t.default={loader:t.loader}})(0,e),e})()));