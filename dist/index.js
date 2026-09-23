"use strict";var d=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var s=d(function(p,n){
var o=require('@stdlib/ndarray-base-numel-dimension/dist'),t=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),v=require('@stdlib/ndarray-base-data-buffer/dist'),m=require('@stdlib/blas-ext-base-dxdy/dist').ndarray;function x(i){var r,e;return r=i[0],e=i[1],m(o(r,0),v(r),t(r,0),u(r),v(e),t(e,0),u(e)),e}n.exports=x
});var f=require("path").join,y=require('@stdlib/utils-try-require/dist'),c=require('@stdlib/assert-is-error/dist'),g=s(),a,q=y(f(__dirname,"./native.js"));c(q)?a=g:a=q;module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
