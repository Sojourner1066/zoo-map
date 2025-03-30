import{n as M,s as I,aB as y,g8 as O,az as x}from"./index-BCOvYjsd.js";import{i as h}from"./colorUtils-BADZFW2t.js";import{B as S,W as b,U as k,v as g,a as N,c as P,z as T}from"./utils-BBgV4jpp.js";import{B as w,H as $,D as G,C as E}from"./quantizationUtils-D3PpB7ao.js";function C(c,e,r,t,i){if(c==null)return null;const s=c.references("geometry")&&i?A(e,t,i):e,o=c.repurposeFeature(s);try{return c.evaluate({...r,$feature:o},c.services)}catch(a){return M.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",a),null}}const u=new Map;function A(c,e,r){const{transform:t,hasZ:i,hasM:s}=r;u.has(e)||u.set(e,L(e));const o=u.get(e)(c.geometry,t,i,s);return{...c,geometry:o}}function L(c){const e={};switch(c){case"esriGeometryPoint":return(r,t,i,s)=>E(t,e,r,i,s);case"esriGeometryPolygon":return(r,t,i,s)=>G(t,e,r,i,s);case"esriGeometryPolyline":return(r,t,i,s)=>$(t,e,r,i,s);case"esriGeometryMultipoint":return(r,t,i,s)=>w(t,e,r,i,s);default:return M.getLogger("esri.views.2d.support.arcadeOnDemand").error(new I("mapview-arcade",`Unable to handle geometryType: ${c}`)),r=>r}}const H=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),D=c=>{if(!c)return[0,0,0,0];const{r:e,g:r,b:t,a:i}=c;return[e,r,t,255*i]};class n{static findApplicableOverrides(e,r,t){if(e&&r){if(e.primitiveName){let i=!1;for(const s of t)if(s.primitiveName===e.primitiveName){i=!0;break}if(!i)for(const s of r)s.primitiveName===e.primitiveName&&t.push(s)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const i of e.effects)n.findApplicableOverrides(i,r,t);if(e.symbolLayers)for(const i of e.symbolLayers)n.findApplicableOverrides(i,r,t);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const i of e.effects)n.findApplicableOverrides(i,r,t);if(e.markerPlacement&&n.findApplicableOverrides(e.markerPlacement,r,t),e.type==="CIMVectorMarker"){if(e.markerGraphics)for(const i of e.markerGraphics)n.findApplicableOverrides(i,r,t),n.findApplicableOverrides(i.symbol,r,t)}else e.type==="CIMCharacterMarker"?n.findApplicableOverrides(e.symbol,r,t):e.type==="CIMHatchFill"?n.findApplicableOverrides(e.lineSymbol,r,t):e.type==="CIMPictureMarker"&&n.findApplicableOverrides(e.animatedSymbolProperties,r,t)}}}static findEffectOverrides(e,r){if(!e)return null;if(e.type==="CIMGeometricEffectDashes"&&S(e),!r||!e.primitiveName)return{type:"cim-effect-param",effect:e,overrides:[]};const t=b(e),i=e.primitiveName,s=[];for(const o of r)o.primitiveName===i&&s.push(b(o));return{type:"cim-effect-param",effect:t,overrides:k(s)}}static async resolveSymbolOverrides(e,r,t,i,s,o,a){if(!(e!=null&&e.symbol))return null;let{symbol:p,primitiveOverrides:l}=e;const d=!!l;if(!d&&!i)return p;p=y(p),l=y(l);let v=!0;if(r||(r={attributes:{}},v=!1),d){if(v||(l=l.filter(f=>{var m;return!((m=f.valueExpressionInfo)!=null&&m.expression.includes("$feature"))})),a||(l=l.filter(f=>{var m;return!((m=f.valueExpressionInfo)!=null&&m.expression.includes("$view"))})),l.length>0){const f={spatialReference:t,fields:g(r.attributes),geometryType:s};await n.createRenderExpressions(l,f),n.evaluateOverrides(l,r,s??"esriGeometryPoint",o,a)}n.applyOverrides(p,l)}return i&&n.applyDictionaryTextOverrides(p,r,i,null),p}static async createRenderExpressions(e,r){const t=[];for(const i of e){const s=i.valueExpressionInfo;if(!s||n._expressionToRenderExpression.has(s.expression))continue;const o=O(s.expression,r.spatialReference,r.fields);t.push(o),o.then(a=>n._expressionToRenderExpression.set(s.expression,a))}t.length>0&&await Promise.all(t)}static evaluateOverrides(e,r,t,i,s){const o={$view:{scale:s==null?void 0:s.scale}};for(const a of e){a.value&&typeof a.value=="object"&&h(a.value)&&(a.propertyName==="Color"||a.propertyName==="StrokeColor")&&(a.value=D(a.value));const p=a.valueExpressionInfo;if(!p)continue;const l=n._expressionToRenderExpression.get(p.expression);l&&(a.value=C(l,r,o,t,i))}}static applyDictionaryTextOverrides(e,r,t,i,s="Normal"){if(e!=null&&e.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const o=e.symbolLayers;if(!o)return;for(const a of o)a&&a.type==="CIMVectorMarker"&&n.applyDictionaryTextOverrides(a,r,t,i,e.type==="CIMTextSymbol"?e.textCase:s)}break;case"CIMVectorMarker":{const o=e.markerGraphics;if(!o)return;for(const a of o)a&&n.applyDictionaryTextOverrides(a,r,t,i)}break;case"CIMMarkerGraphic":{const o=e.textString;if(o&&o.includes("[")){const a=N(o,t);e.textString=P(r,a,i,s)}}}}static applyOverrides(e,r,t,i){if(e.primitiveName){for(const s of r)if(s.primitiveName===e.primitiveName){const o=T(s.propertyName);if(i&&i.push({cim:e,nocapPropertyName:o,value:e[o]}),t){let a=!1;for(const p of t)p.primitiveName===e.primitiveName&&(a=!0);a||t.push(s)}s.value!=null&&(e[o]=s.value)}}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const s of e.effects)n.applyOverrides(s,r,t,i);if(e.symbolLayers)for(const s of e.symbolLayers)n.applyOverrides(s,r,t,i);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const s of e.effects)n.applyOverrides(s,r,t,i);if(e.type==="CIMVectorMarker"&&e.markerGraphics)for(const s of e.markerGraphics)n.applyOverrides(s,r,t,i),n.applyOverrides(s.symbol,r,t,i)}}static restoreOverrides(e){for(const r of e)r.cim[r.nocapPropertyName]=r.value}static buildOverrideKey(e){let r="";for(const t of e)t.value!==void 0&&(r+=`${t.primitiveName}${t.propertyName}${JSON.stringify(t.value)}`);return r}static toValue(e,r){if(e==="DashTemplate")return r.split(" ").map(t=>Number(t));if(e==="Color"){const t=new x(r).toRgba();return t[3]*=255,t}return r}}n._expressionToRenderExpression=new Map;const z=Object.freeze(Object.defineProperty({__proto__:null,OverrideHelper:n},Symbol.toStringTag,{value:"Module"}));export{z as O,H as c,n as y};
