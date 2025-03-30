const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/symbolLayerUtils-B0qqF0ig.js","assets/index-BCOvYjsd.js","assets/index-CrYBktwj.css","assets/LRUCache-DzNwX_CU.js","assets/MemCache-BbdoaGmm.js"])))=>i.map(i=>d[i]);
import{az as a,er as h,gr as m,gs as w,gt as d,gu as g,_ as k}from"./index-BCOvYjsd.js";import"./parser-DAsQTtHB.js";import{C as L}from"./cimSymbolUtils-vAeUgsI8.js";import{e as z}from"./LRUCache-DzNwX_CU.js";import"./defaultCIMValues-Z8gODNqJ.js";new z(1e3);new a([128,128,128]);const j=new a("white");function U(n){if(n==null||!("symbolLayers"in n)||n.symbolLayers==null)return!1;switch(n.type){case"point-3d":return n.symbolLayers.some(r=>r.type==="object");case"line-3d":return n.symbolLayers.some(r=>r.type==="path");case"polygon-3d":return n.symbolLayers.some(r=>r.type==="object"||r.type==="extrude");default:return!1}}function V(n){var r;return((r=n.resource)==null?void 0:r.href)??""}function q(n,r){if(!n)return null;let t=null;return h(n)?t=x(n):m(n)&&(t=n.type==="cim"?L(n):n.color?new a(n.color):null),t?y(t,r):null}function x(n){const r=n.symbolLayers;if(!r)return null;let t=null;return r.forEach(o=>{var l;o.type==="object"&&((l=o.resource)!=null&&l.href)||(t=o.type==="water"?o.color:o.material?o.material.color:null)}),t?new a(t):null}function y(n,r){if(r==null||n==null)return n;const t=n.toRgba();return t[3]=t[3]*r,new a(t)}function _(n,r,t){const o=n.symbolLayers;if(!o)return;const l=e=>y(r=r??e??(t!=null?j:null),t);o.forEach(e=>{var c,s;if(e.type!=="object"||!((c=e.resource)!=null&&c.href)||r)if(e.type==="water")e.color=l(e.color);else{const i=e.material!=null?e.material.color:null,u=l(i);e.material==null?e.material=new w({color:u}):e.material.color=u,t!=null&&"outline"in e&&((s=e.outline)==null?void 0:s.color)!=null&&(e.outline.color=y(e.outline.color,t))}})}function v(n,r,t){var o;(r=r??n.color)&&(n.color=y(r,t)),t!=null&&"outline"in n&&((o=n.outline)!=null&&o.color)&&(n.outline.color=y(n.outline.color,t))}function B(n,r,t){n&&(r||t!=null)&&(r&&(r=new a(r)),h(n)?_(n,r,t):m(n)&&v(n,r,t))}async function S(n,r){const t=n.symbolLayers;t&&await d(t,async o=>E(o,r))}async function E(n,r){switch(n.type){case"extrude":R(n,r);break;case"icon":case"line":case"text":$(n,r);break;case"path":O(n,r);break;case"object":await C(n,r)}}function $(n,r){const t=p(r);t!=null&&(n.size=t)}function p(n){for(const r of n)if(typeof r=="number")return r;return null}function R(n,r){n.size=typeof r[2]=="number"?r[2]:0}async function C(n,r){const{resourceSize:t,symbolSize:o}=await D(n),l=b(r,t,o);n.width=f(r[0],o[0],t[0],l),n.depth=f(r[1],o[1],t[1],l),n.height=f(r[2],o[2],t[2],l)}function O(n,r){const t=b(r,g,[n.width,void 0,n.height]);n.width=f(r[0],n.width,1,t),n.height=f(r[2],n.height,1,t)}function b(n,r,t){for(let o=0;o<3;o++){const l=n[o];switch(l){case"symbol-value":{const e=t[o];return e!=null?e/r[o]:1}case"proportional":break;default:if(l&&r[o])return l/r[o]}}return 1}async function D(n){const{computeObjectLayerResourceSize:r}=await k(()=>import("./symbolLayerUtils-B0qqF0ig.js"),__vite__mapDeps([0,1,2,3,4])),t=await r(n,10),{width:o,height:l,depth:e}=n,c=[o,e,l];let s=1;for(let i=0;i<3;i++){const u=c[i];if(u!=null){s=u/t[i];break}}for(let i=0;i<3;i++)c[i]==null&&(c[i]=t[i]*s);return{resourceSize:t,symbolSize:c}}function f(n,r,t,o){switch(n){case"proportional":return t*o;case"symbol-value":return r??t;default:return n}}function P(n,r){const t=p(r);if(t!=null)switch(n.type){case"simple-marker":n.size=t;break;case"picture-marker":{const o=n.width/n.height;o>1?(n.width=t,n.height=t*o):(n.width=t*o,n.height=t);break}case"simple-line":n.width=t;break;case"text":n.font.size=t}}async function F(n,r){if(n&&r)return h(n)?S(n,r):void(m(n)&&P(n,r))}function G(n,r,t){if(n&&r!=null)if(h(n)){const o=n.symbolLayers;o&&o.forEach(l=>{if(l.type==="object")switch(t){case"tilt":l.tilt=(l.tilt??0)+r;break;case"roll":l.roll=(l.roll??0)+r;break;default:l.heading=(l.heading??0)+r}l.type==="icon"&&(l.angle+=r)})}else m(n)&&(n.type!=="simple-marker"&&n.type!=="picture-marker"&&n.type!=="text"||(n.angle+=r))}function H(n){return n!=null&&n.type==="polygon-3d"&&n.symbolLayers.some(r=>r.type==="extrude")}export{F as D,G as J,H as N,B as g,q as h,V as p,U as y};
