import{I as f,dj as c,a6 as p,bC as y,f5 as l,dG as S,j as R,c3 as g}from"./index-BCOvYjsd.js";import{t as d}from"./query-DYVrGv8x.js";import{c as x}from"./AttributeBinsFeatureSet-YRnx344E.js";import J from"./AttributeBinsQuery-CtQellzI.js";import"./pbfQueryUtils-HNAi_uNz.js";import"./pbf-TZphibxX.js";import"./memoryEstimations-cFrur3i9.js";import"./OptimizedFeature-Cmc4IS8F.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-CGIhgTZC.js";import"./FeatureSet-Cu8erNuw.js";import"./queryUtils-Ds9CE_G1.js";import"./json-Wa8cmqdu.js";import"./FixedIntervalBinParameters-LwWUn2bp.js";import"./NormalizationBinParametersMixin-CjJMWKZs.js";function N(n){const e=n.geometry,i=n.toJSON(),t=i;let a,r,o;if(e!=null&&(r=e.spatialReference,o=l(r),t.geometryType=S(e),t.geometry=JSON.stringify(e),t.inSR=o),i.outSR?(t.outSR=l(i.outSR),a=n.outSpatialReference):e&&(t.outSR=t.inSR,a=r),t.bin&&(t.bin=JSON.stringify(t.bin)),t.quantizationParameters&&(t.quantizationParameters=JSON.stringify(t.quantizationParameters)),t.outStatistics&&(t.outStatistics=JSON.stringify(t.outStatistics)),t.outTimeReference&&(t.outTimeReference=JSON.stringify(t.outTimeReference)),i.timeExtent){const u=i.timeExtent,{start:m,end:s}=u;m==null&&s==null||(t.time=m===s?m:`${m??"null"},${s??"null"}`),delete i.timeExtent}return n.defaultSpatialReference&&R(r,a)&&(t.defaultSR=t.inSR,delete t.inSR,delete t.outSR),t}async function O(n,e,i){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{features:[]}}:await q(n,e,i)}async function q(n,e,i={}){const t=typeof n=="string"?f(n):n,a=e.geometry?[e.geometry]:[],r=await c(a,null,{signal:i.signal}),o=r==null?void 0:r[0];o!=null&&((e=e.clone()).geometry=o);const u=d({...t.query,f:"json",...N(e)});return p(y(t.path,"queryBins"),{...i,query:{...u,...i.query}})}async function Q(n,e,i){const{data:t}=await O(g(n),J.from(e),i);return x.fromJSON(t)}export{Q as executeAttributeBinsQuery};
