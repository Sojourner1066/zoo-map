import{I as S,dj as x,a6 as E,bC as O,f5 as f,dG as g}from"./index-BCOvYjsd.js";import{t as R}from"./pbfQueryUtils-HNAi_uNz.js";import{t as j}from"./queryZScale-CGIhgTZC.js";function p(r){const e={};for(const i in r){if(i==="declaredClass")continue;const t=r[i];if(t!=null&&typeof t!="function")if(Array.isArray(t)){e[i]=[];for(let n=0;n<t.length;n++)e[i][n]=p(t[n])}else typeof t=="object"?t.toJSON&&(e[i]=JSON.stringify(t)):e[i]=t}return e}const m="Layer does not support extent calculation.";function F(r,e){if(e&&r.type==="extent")return`${r.xmin},${r.ymin},${r.xmax},${r.ymax}`;if(e&&r.type==="point")return`${r.x},${r.y}`;const i=r.toJSON();return delete i.spatialReference,JSON.stringify(i)}function b(r,e){var l;const i=r.geometry,t=r.toJSON();delete t.compactGeometryEnabled,delete t.defaultSpatialReferenceEnabled;const n=t;let a,u,o;if(i!=null&&(u=i.spatialReference,o=f(u),n.geometryType=g(i),n.geometry=F(i,r.compactGeometryEnabled),n.inSR=o),t.groupByFieldsForStatistics&&(n.groupByFieldsForStatistics=t.groupByFieldsForStatistics.join(",")),t.objectIds&&(n.objectIds=t.objectIds.join(",")),t.orderByFields&&(n.orderByFields=t.orderByFields.join(",")),!t.outFields||!t.returnDistinctValues&&(e!=null&&e.returnCountOnly||e!=null&&e.returnExtentOnly||e!=null&&e.returnIdsOnly)?delete n.outFields:t.outFields.includes("*")?n.outFields="*":n.outFields=t.outFields.join(","),t.outSR?(n.outSR=f(t.outSR),a=r.outSpatialReference):i&&(t.returnGeometry||t.returnCentroid)&&(n.outSR=n.inSR,a=u),t.returnGeometry&&delete t.returnGeometry,t.outStatistics&&(n.outStatistics=JSON.stringify(t.outStatistics)),t.fullText&&(n.fullText=JSON.stringify(t.fullText)),t.pixelSize&&(n.pixelSize=JSON.stringify(t.pixelSize)),t.quantizationParameters&&(r.defaultSpatialReferenceEnabled&&u!=null&&((l=r.quantizationParameters)==null?void 0:l.extent)!=null&&u.equals(r.quantizationParameters.extent.spatialReference)&&delete t.quantizationParameters.extent.spatialReference,n.quantizationParameters=JSON.stringify(t.quantizationParameters)),t.parameterValues&&(n.parameterValues=JSON.stringify(t.parameterValues)),t.rangeValues&&(n.rangeValues=JSON.stringify(t.rangeValues)),t.dynamicDataSource&&(n.layer=JSON.stringify({source:t.dynamicDataSource}),delete t.dynamicDataSource),t.timeExtent){const y=t.timeExtent,{start:c,end:d}=y;c==null&&d==null||(n.time=c===d?c:`${c??"null"},${d??"null"}`),delete t.timeExtent}return r.defaultSpatialReferenceEnabled&&u!=null&&a!=null&&u.equals(a)&&(n.defaultSR=n.inSR,delete n.inSR,delete n.outSR),n}async function w(r,e,i,t){const n=e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{features:[]}}:await s(r,e,"json",t);return j(e,i,n.data),n}async function z(r,e,i,t){if(e.timeExtent!=null&&e.timeExtent.isEmpty)return{data:i.createFeatureResult()};const n=await $(r,e,t),a=n;return a.data=R(n.data,i),a}function $(r,e,i){return s(r,e,"pbf",i)}function I(r,e,i){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):s(r,e,"json",i,{returnIdsOnly:!0})}function V(r,e,i){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):s(r,e,"json",i,{returnIdsOnly:!0,returnCountOnly:!0})}async function C(r,e,i){if(e.timeExtent!=null&&e.timeExtent.isEmpty)return{data:{count:0,extent:null}};const t=await s(r,e,"json",i,{returnExtentOnly:!0,returnCountOnly:!0}),n=t.data;if(n.hasOwnProperty("extent"))return t;if(n.features)throw new Error(m);if(n.hasOwnProperty("count"))throw new Error(m);return t}async function s(r,e,i,t={},n={}){const a=typeof r=="string"?S(r):r,u=e.geometry?[e.geometry]:[],o=await x(u,null,{signal:t.signal}),l=o==null?void 0:o[0];l!=null&&((e=e.clone()).geometry=l);const y=p({...a.query,f:i,...n,...b(e,n)});return E(O(a.path,q(e,n)?"query3d":"query"),{...t,responseType:i==="pbf"?"array-buffer":"json",query:{...y,...t.query}})}function q(r,e){return r.formatOf3DObjects!=null&&!(e.returnCountOnly||e.returnExtentOnly||e.returnIdsOnly)}export{V as S,w as c,$ as d,z as f,I as p,p as t,C as x};
