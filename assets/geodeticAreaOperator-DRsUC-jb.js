const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OperatorGeodeticArea-kD1vpw4J.js","assets/Transformation2D-D0MqPw7t.js","assets/ProjectionTransformation-B9B51Nu1.js","assets/SimpleGeometryCursor-B92kdZ15.js","assets/index-BCOvYjsd.js","assets/index-CrYBktwj.css","assets/OperatorShapePreservingLength-D682XnqY.js","assets/apiConverter-BM0-3yTU.js","assets/jsonConverter-D-LEZm1T.js"])))=>i.map(i=>d[i]);
import{_ as i,dO as g,dQ as v,dP as O,b1 as P}from"./index-BCOvYjsd.js";import{e as y}from"./geodeticCurveType-CirnHLSB.js";let n;function _(){return!!n&&O()}async function b(){if(!_()){const[e,r]=await Promise.all([i(()=>import("./OperatorGeodeticArea-kD1vpw4J.js"),__vite__mapDeps([0,1,2,3,4,5,6])),i(()=>import("./ProjectionTransformation-B9B51Nu1.js").then(t=>t.aW),__vite__mapDeps([2,1,3,4,5])).then(t=>t.aG).then(({injectPe:t})=>t),g()]);n=new e.OperatorGeodeticArea,r(v)}}function E(e,r,t){return n.execute(e,r,t,null)}function S(){return n.supportsCurves()}let u,l,p,a;function s(){return!!u&&_()}async function d(){if(!s()){const[e]=await Promise.all([i(()=>import("./apiConverter-BM0-3yTU.js"),__vite__mapDeps([7,1,2,3,4,5,8])),b()]);u=e.fromGeometry,l=e.fromSpatialReference,p=e.getSpatialReference,a=S()}}function f(e,r={}){const{curveType:t="geodesic",unit:c}=r,m=p(e);let o=E(u(e),l(m),y[t]);return o&&c&&(o=P(o,"square-meters",c)),o}const x=Object.freeze(Object.defineProperty({__proto__:null,execute:f,isLoaded:s,load:d,get supportsCurves(){return a}},Symbol.toStringTag,{value:"Module"})),A=Object.freeze(Object.defineProperty({__proto__:null,execute:f,isLoaded:s,load:d,get supportsCurves(){return a}},Symbol.toStringTag,{value:"Module"}));export{x as f,A as g,d as m};
