import{a6 as f,f5 as y,c3 as m}from"./index-BCOvYjsd.js";import{t as j}from"./query-DYVrGv8x.js";import{d as R}from"./FeatureSet-Cu8erNuw.js";import{d as p}from"./labelingInfo-BKbU-5K2.js";import"./pbfQueryUtils-HNAi_uNz.js";import"./pbf-TZphibxX.js";import"./memoryEstimations-cFrur3i9.js";import"./OptimizedFeature-Cmc4IS8F.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-CGIhgTZC.js";import"./SimpleRenderer-QG4WFGL4.js";import"./commonProperties-Cjoc1SFO.js";import"./colorRamps-B5wCt1L1.js";import"./ColorStop-CjHsqQ4X.js";import"./visualVariableUtils-D3neASu_.js";import"./lengthUtils-CDEkLj2v.js";import"./jsonUtils-D0uTwTFl.js";import"./defaults-BaoV-fz0.js";import"./defaultsJSON-GKolV7NZ.js";import"./UniqueValueRenderer-BF3Ti4K9.js";import"./defaultCIMValues-Z8gODNqJ.js";import"./enums-BQDXKJnw.js";import"./RendererLegendOptions-CzPIuudE.js";import"./styleUtils-2G0NBrba.js";import"./NormalizationBinParametersMixin-CjJMWKZs.js";import"./labelUtils-TH8oGZfH.js";function F(r,e){const t=r.toJSON();return t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.orderByFields&&(t.orderByFields=t.orderByFields.join(",")),t.outFields&&!(e!=null&&e.returnCountOnly)?t.outFields.includes("*")?t.outFields="*":t.outFields=t.outFields.join(","):delete t.outFields,t.outSR&&(t.outSR=y(t.outSR)),t.dynamicDataSource&&(t.layer=JSON.stringify({source:t.dynamicDataSource}),delete t.dynamicDataSource),t}async function b(r,e,t){const i=await l(r,e,t),o=i.data,a=o.geometryType,n=o.spatialReference,s={};for(const c of o.relatedRecordGroups){const d={fields:void 0,objectIdFieldName:void 0,geometryType:a,spatialReference:n,hasZ:!!o.hasZ,hasM:!!o.hasM,features:c.relatedRecords};if(c.objectId!=null)s[c.objectId]=d;else for(const u of Object.keys(c))u!=="relatedRecords"&&(s[c[u]]=d)}return{...i,data:s}}async function h(r,e,t){const i=await l(r,e,t,{returnCountOnly:!0}),o=i.data,a={};for(const n of o.relatedRecordGroups)n.objectId!=null&&(a[n.objectId]=n.count);return{...i,data:a}}async function l(r,e,t={},i){const o=j({...r.query,f:"json",...i,...F(e,i)});return f(r.path+"/queryRelatedRecords",{...t,query:{...t.query,...o}})}async function L(r,e,t){e=p.from(e);const i=m(r);return b(i,e,t).then(o=>{const a=o.data,n={};return Object.keys(a).forEach(s=>n[s]=R.fromJSON(a[s])),n})}async function U(r,e,t){e=p.from(e);const i=m(r);return h(i,e,{...t}).then(o=>o.data)}export{L as executeRelationshipQuery,U as executeRelationshipQueryForCount};
