import{cr as r,b1 as i}from"./index-BCOvYjsd.js";function a(e,t){return{type:r(t),value:e,unit:t}}function f(e){return{value:e}}function o(e,t){return{type:r(t),value:e,unit:t}}function c(e,t){return{type:r(t),value:e,unit:t}}function u(e,t,n="arithmetic"){return{type:r(t),value:e,unit:t,rotationType:n}}function p(e,t){const n=l(e,t);return e.type==="angle"?u(n,t,e.rotationType):a(n,t)}function l(e,t){return i(e.value,e.unit,t)}function v(e,t){return e==null?t:t==null||e.value>i(t.value,t.unit,e.unit)?e:t}function y(e,t){return e==null?null:{...e,value:e.value*t}}function g(e,t,n){if(t===n)return e;switch(n){case"arithmetic":case"geographic":return 90-e}}const m=o(0,"meters"),h=c(0,"square-meters");u(0,"radians");const d=u(0,"degrees"),x=u(0,"degrees","geographic");export{d as U,o as a,h as d,l as f,m as h,f as i,x as j,c as l,g as m,u as o,v as p,p as s,y};
