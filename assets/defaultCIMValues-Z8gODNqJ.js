import{ga as x,V as I,ck as A}from"./index-BCOvYjsd.js";import{a as C,s as w,d as P}from"./enums-BQDXKJnw.js";const G=new Set(["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"]);function m(e){return e instanceof A}function h(e){return e instanceof I?Object.keys(e.items):m(e)?x(e).keys():e?Object.keys(e):[]}function d(e,t){return e instanceof I?e.items[t]:e[t]}function v(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}function s(e){return e?e.declaredClass:null}function b(e,t){var M;const o=e.diff;if(o&&typeof o=="function")return o(e,t);const l=h(e),a=h(t);if(l.length===0&&a.length===0)return;if(!l.length||!a.length||v(e,t))return{type:"complete",oldValue:e,newValue:t};const c=a.filter(n=>!l.includes(n)),k=l.filter(n=>!a.includes(n)),y=l.filter(n=>a.includes(n)&&d(e,n)!==d(t,n)).concat(c,k).sort(),g=s(e);if(g&&G.has(g)&&y.length)return{type:"complete",oldValue:e,newValue:t};let u;const S=m(e)&&m(t);for(const n of y){const r=d(e,n),i=d(t,n);let f;if((S||typeof r!="function"&&typeof i!="function")&&r!==i&&(r!=null||i!=null)){if(o&&o[n]&&typeof o[n]=="function")f=(M=o[n])==null?void 0:M.call(o,r,i);else if(r instanceof Date&&i instanceof Date){if(r.getTime()===i.getTime())continue;f={type:"complete",oldValue:r,newValue:i}}else f=typeof r=="object"&&typeof i=="object"&&s(r)===s(i)?b(r,i):{type:"complete",oldValue:r,newValue:i};f!=null&&(u!=null?u.diff[n]=f:u={type:"partial",diff:{[n]:f}})}}return u}function R(e,t){return E(e,t)}function E(e,t){if(e==null)return!1;const o=t.split(".");let l=e;for(const a of o){if(l.type==="complete")return!0;if(l.type!=="partial")return!1;{const c=l.diff[a];if(!c)return!1;l=c}}return!0}function V(e,t){if(!e)return!1;if(e.type==="partial"){const o=Object.keys(e.diff);return o.length===1&&o[0]===t}return!1}function j(e,t){if(typeof e!="function"&&typeof t!="function"&&(e!=null||t!=null))return e==null||t==null||typeof e=="object"&&typeof t=="object"&&s(e)!==s(t)?{type:"complete",oldValue:e,newValue:t}:b(e,t)}function p(e){if(e==null)return!0;switch(e.type){case"complete":return!1;case"collection":{const t=e;for(const o of t.added)if(!p(o))return!1;for(const o of t.removed)if(!p(o))return!1;for(const o of t.changed)if(!p(o))return!1;return!0}case"partial":for(const t in e.diff)if(!p(e.diff[t]))return!1;return!0}}const L={color:[128,128,128,1],outlinecolor:[0,0,0,1],backgroundcolor:[128,128,128,1],borderlinecolor:[0,0,0,1],tintcolor:[255,255,255,1]},O={CIMVectorMarker:{scalesymbolsproportionally:!1,respectframe:!0,anchorpointunits:"Relative",offsetx:0,offsety:0,rotateclockwise:!1,rotation:0,size:10,enable:!0,colorlocked:!1},CIMPictureMarker:{scalex:1,texturefilter:"Draft",anchorpointunits:"Relative",offsetx:0,offsety:0,rotateclockwise:!1,rotation:0,size:10,enable:!0,colorlocked:!1},CIMTextSymbol:{angle:0,anglex:0,angley:0,halosize:1,height:10,horizontalalignment:"Left",kerning:!0,letterspacing:0,letterwidth:100,ligatures:!0,linegap:0,offsetx:0,offsety:0,strikethrough:!1,textcase:"Normal",textstring:"",underline:!1,verticalalignment:"Bottom",enable:!0,colorlocked:!1},CIMSolidStroke:{capstyle:"Round",joinstyle:"Round",miterlimit:4,width:4,enable:!0,colorlocked:!1},CIMPictureStroke:{texturefilter:"Draft",capstyle:"Round",joinstyle:"Round",miterlimit:4,width:4,enable:!0,colorlocked:!1},CIMGradientStroke:{capstyle:"Round",joinstyle:"Round",miterlimit:4,width:4,enable:!0,colorlocked:!1,gradientMethod:"AcrossLine",gradientSize:75,gradientSizeUnits:C.Relative,gradientType:"Discrete",interval:5},CIMSolidFill:{enable:!0,colorlocked:!1},CIMPictureFill:{offsetx:0,offsety:0,rotation:0,scalex:1,height:10,texturefilter:"Draft",enable:!0,colorlocked:!1},CIMHatchFill:{offsetx:0,offsety:0,rotation:0,separation:4,enable:!0,colorlocked:!1},CIMGradientFill:{enable:!0,angle:90,gradientMethod:"Linear",gradientSize:75,gradientSizeUnits:C.Relative,gradientType:"Discrete",interval:5},CIMGeometricEffectAddControlPoints:{angletolerance:120},CIMGeometricEffectArrow:{arrowtype:"OpenEnded",width:5},CIMGeometricEffectBuffer:{size:1},CIMGeometricEffectCut:{begincut:1,endcut:1,middlecut:0,invert:!1},CIMGeometricEffectDashes:{customendingoffset:0,linedashending:"NoConstraint",offsetalongline:0},CIMGeometricEffectDonut:{method:"Mitered",option:"Accurate",width:2},CIMGeometricEffectJog:{angle:225,length:20,position:50},CIMGeometricEffectControlMeasureLine:{rule:"FullGeometry"},CIMGeometricEffectMove:{offsetx:1,offsety:-1},CIMGeometricEffectOffset:{method:"Square",offset:1,option:"Fast"},CIMGeometricEffectRotate:{angle:15},CIMGeometricEffectScale:{xscalefactor:1.15,yscalefactor:1.15},CIMGeometricEffectWave:{amplitude:2,period:3,seed:1,waveform:"Sinus"},CIMMarkerPlacementAlongLine:{customendingoffset:0,endings:"WithHalfGap",offsetalongline:0,placeperpart:!0,angletoline:!0,offset:0},CIMMarkerPlacementAtExtremities:{extremityplacement:"Both",offsetalongline:0,angletoline:!0,offset:0},CIMMarkerPlacementAtRatioPositions:{beginposition:0,endposition:0,flipfirst:!0,angletoline:!0,offset:0},CIMMarkerPlacementInsidePolygon:{gridangle:0,gridtype:"Fixed",offsetx:0,offsety:0,randomness:100,seed:0,shiftoddrows:!1,stepx:16,stepy:16,clipping:"ClipAtBoundary"},CIMMarkerPlacementOnLine:{relativeto:"LineMiddle",startpointoffset:0,angletoline:!0,offset:0},CIMMarkerPlacementOnVertices:{placeperpart:!0,placeoncontrolpoints:!0,placeonendpoints:!0,placeonregularvertices:!0,angletoline:!0,offset:0},CIMMarkerPlacementPolygonCenter:{method:"OnPolygon",offsetx:0,offsety:0,clipatboundary:!1},CIMAnimatedSymbolProperties:{playanimation:!1,reverseanimation:!1,randomizestarttime:!1,randomizestartseed:0,starttimeoffset:0,duration:3,endingduration:3,useendingduration:!1,repeattype:P.Loop,repeatdelay:0,easing:w.Linear},CIMSymbolAnimationSize:{tosize:10},CIMSymbolAnimationScale:{scalefactor:1},CIMSymbolAnimationColor:{tocolor:[255,255,255,1]},CIMSymbolAnimationTransparency:{totransparency:0},CIMSymbolAnimationRotation:{torotation:0,rotateclockwise:!1},CIMSymbolAnimationOffset:{offsetx:0,offsety:0}};export{V as a,p as d,L as i,O as n,E as p,R as s,j as y};
