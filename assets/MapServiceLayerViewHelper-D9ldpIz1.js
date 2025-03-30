const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/visualVariableUtils-D3neASu_.js","assets/index-BCOvYjsd.js","assets/index-CrYBktwj.css","assets/lengthUtils-CDEkLj2v.js"])))=>i.map(i=>d[i]);
import{dG as W,f5 as Y,cY as U,ap as H,b6 as C,o as n,v as u,cp as K,cq as X,bs as Q,bE as B,a9 as ee,V as te,ce as re,w as N,B as J,hn as se,bp as ie,c3 as oe,dj as ae,fs as ne,fr as le,a6 as ue,ck as pe,fv as ye,Z as ce,s as T,as as L,_ as de,am as he,aw as fe,bn as me,a2 as M,jE as ge,G as we,bW as be}from"./index-BCOvYjsd.js";import{i as ve,u as xe}from"./scaleUtils-82eOO8r3.js";import{n as V}from"./floorFilterUtils-DZ5C6FQv.js";import{o as A}from"./drapedUtils-DW7jZrty.js";import{i as $e}from"./sublayerUtils-V4EdyIqY.js";import{n as Se,p as Fe}from"./popupUtils-oqbE8F_z.js";function Ee(t,e){const{dpi:s,gdbVersion:o,geometry:r,geometryPrecision:a,height:i,historicMoment:d,layerOption:c,mapExtent:l,maxAllowableOffset:p,returnFieldName:y,returnGeometry:m,returnUnformattedValues:x,returnZ:S,spatialReference:j,timeExtent:f,tolerance:E,width:b}=t.toJSON(),{dynamicLayers:w,layerDefs:v,layerIds:R}=je(t),P=(e==null?void 0:e.geometry)!=null?e.geometry:null,g={historicMoment:d,geometryPrecision:a,maxAllowableOffset:p,returnFieldName:y,returnGeometry:m,returnUnformattedValues:x,returnZ:S,tolerance:E},$=(P==null?void 0:P.toJSON())||r;g.imageDisplay=`${b},${i},${s}`,o&&(g.gdbVersion=o),$&&(delete $.spatialReference,g.geometry=JSON.stringify($),g.geometryType=W($));const _=j??($==null?void 0:$.spatialReference)??(l==null?void 0:l.spatialReference);if(_&&(g.sr=Y(_)),g.time=f?[f.start,f.end].join(","):null,l){const{xmin:z,ymin:k,xmax:D,ymax:Z}=l;g.mapExtent=`${z},${k},${D},${Z}`}return v&&(g.layerDefs=v),w&&!v&&(g.dynamicLayers=w),g.layers=c==="popup"?"visible":c,R&&!w&&(g.layers+=`:${R.join(",")}`),g}function je(t){var S,j;const{mapExtent:e,floors:s,width:o,sublayers:r,layerIds:a,layerOption:i,gdbVersion:d}=t,c=(j=(S=r==null?void 0:r.find(f=>f.layer!=null))==null?void 0:S.layer)==null?void 0:j.serviceSublayers,l=i==="popup",p={},y=ve({extent:e,width:o,spatialReference:e==null?void 0:e.spatialReference}),m=[],x=f=>{const E=y===0,b=f.minScale===0||y<=f.minScale,w=f.maxScale===0||y>=f.maxScale;if(f.visible&&(E||b&&w))if(f.sublayers)f.sublayers.forEach(x);else{if((a==null?void 0:a.includes(f.id))===!1||l&&(!f.popupTemplate||!f.popupEnabled))return;m.unshift(f)}};if(r==null||r.forEach(x),r&&!m.length)p.layerIds=[];else{const f=$e(m,c,d),E=m.map(b=>{const w=V(s,b);return b.toExportImageJSON(w)});if(f)p.dynamicLayers=JSON.stringify(E);else{if(r){let w=m.map(({id:v})=>v);a&&(w=w.filter(v=>a.includes(v))),p.layerIds=w}else a!=null&&a.length&&(p.layerIds=a);const b=Oe(s,m);if(b!=null&&b.length){const w={};for(const v of b)v.definitionExpression&&(w[v.id]=v.definitionExpression);Object.keys(w).length&&(p.layerDefs=JSON.stringify(w))}}}return p}function Oe(t,e){const s=!!(t!=null&&t.length),o=e.filter(r=>r.definitionExpression!=null||s&&r.floorInfo!=null);return o.length?o.map(r=>{const a=V(t,r),i=U(a,r.definitionExpression);return{id:r.id,definitionExpression:i??void 0}}):null}var I;let h=I=class extends H{static from(t){return C(I,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}};n([u({type:Number,json:{write:!0}})],h.prototype,"dpi",void 0),n([u()],h.prototype,"floors",void 0),n([u({type:String,json:{write:!0}})],h.prototype,"gdbVersion",void 0),n([u({types:X,json:{read:K,write:!0}})],h.prototype,"geometry",void 0),n([u({type:Number,json:{write:!0}})],h.prototype,"geometryPrecision",void 0),n([u({type:Number,json:{write:!0}})],h.prototype,"height",void 0),n([u({type:Date})],h.prototype,"historicMoment",void 0),n([Q("historicMoment")],h.prototype,"writeHistoricMoment",null),n([u({type:[Number],json:{write:!0}})],h.prototype,"layerIds",void 0),n([u({type:["top","visible","all","popup"],json:{write:!0}})],h.prototype,"layerOption",void 0),n([u({type:B,json:{write:!0}})],h.prototype,"mapExtent",void 0),n([u({type:Number,json:{write:!0}})],h.prototype,"maxAllowableOffset",void 0),n([u({type:Boolean,json:{write:!0}})],h.prototype,"returnFieldName",void 0),n([u({type:Boolean,json:{write:!0}})],h.prototype,"returnGeometry",void 0),n([u({type:Boolean,json:{write:!0}})],h.prototype,"returnM",void 0),n([u({type:Boolean,json:{write:!0}})],h.prototype,"returnUnformattedValues",void 0),n([u({type:Boolean,json:{write:!0}})],h.prototype,"returnZ",void 0),n([u({type:ee,json:{write:!0}})],h.prototype,"spatialReference",void 0),n([u({type:te})],h.prototype,"sublayers",void 0),n([u({type:re,json:{write:!0}})],h.prototype,"timeExtent",void 0),n([u({type:Number,json:{write:!0}})],h.prototype,"tolerance",void 0),n([u({type:Number,json:{write:!0}})],h.prototype,"width",void 0),h=I=n([N("esri.rest.support.IdentifyParameters")],h);const q=h;let F=class extends H{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return J.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:s,geometry:o}=t;s&&(e.attributes={...s}),o!=null&&(e.geometry=o.toJSON(),e.geometryType=se.toJSON(o.type))}};n([u({type:String,json:{write:!0}})],F.prototype,"displayFieldName",void 0),n([u({type:J})],F.prototype,"feature",void 0),n([ie("feature",["attributes","geometry"])],F.prototype,"readFeature",null),n([Q("feature")],F.prototype,"writeFeature",null),n([u({type:Number,json:{write:!0}})],F.prototype,"layerId",void 0),n([u({type:String,json:{write:!0}})],F.prototype,"layerName",void 0),F=n([N("esri.rest.support.IdentifyResult")],F);const Pe=F;async function Re(t,e,s){const o=(e=Ge(e)).geometry?[e.geometry]:[],r=oe(t);return r.path+="/identify",ae(o).then(a=>{const i=Ee(e,{geometry:a==null?void 0:a[0]}),d=ne({...r.query,f:"json",...i}),c=le(d,s);return ue(r.path,c).then(_e).then(l=>Ie(l,e.sublayers))})}function _e(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(s=>Pe.fromJSON(s)),e}function Ge(t){return t=q.from(t)}function Ie(t,e){if(!(e!=null&&e.length))return t;const s=new Map;function o(r){s.set(r.id,r),r.sublayers&&r.sublayers.forEach(o)}e.forEach(o);for(const r of t.results)r.feature.sourceLayer=s.get(r.layerId);return t}let G=null;function Je(t,e){return e.type==="tile"||e.type==="map-image"}let O=class extends pe{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=ye(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{for(const s of e){const{sourceLayer:o}=s;o!=null&&"geometryType"in o&&o.geometryType==="point"&&(s.visible=!1)}this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([ce(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeaturesAtLocation(t,e){var i,d;const{layerView:{layer:s,view:{scale:o}}}=this;if(!t)throw new T("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:s});const r=Ne(s.sublayers,o,e);if(!r.length)return[];const a=await Te(s,r);if(!((((d=(i=s.capabilities)==null?void 0:i.operations)==null?void 0:d.supportsIdentify)??!0)&&s.version>=10.5)&&!a)throw new T("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:s});return a?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){var t;(t=this.highlightGraphics)==null||t.removeAll()}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:s,highlightGraphicUpdated:o}=this;if(s&&o)for(const r of t){const a=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&a&&"getSymbolAsync"in a&&a.getSymbolAsync(r).then(async i=>{var l;i||(i=new L);let d=null;const c="visualVariables"in a?(l=a.visualVariables)==null?void 0:l.find(p=>p.type==="size"):void 0;c&&(G||(G=(await de(async()=>{const{getSize:p}=await import("./visualVariableUtils-D3neASu_.js").then(y=>y.b);return{getSize:p}},__vite__mapDeps([0,1,2,3]))).getSize),d=G(c,r,{view:e.type,scale:e.scale,shape:i.type==="simple-marker"?i.style:null})),d||(d="width"in i&&"height"in i&&i.width!=null&&i.height!=null?Math.max(i.width,i.height):"size"in i?i.size:16),s.includes(r)&&(r.symbol=new L({style:"square",size:d,xoffset:"xoffset"in i?i.xoffset:0,yoffset:"yoffset"in i?i.yoffset:0}),o(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:s},highlightGraphics:o,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!(o!=null&&o.length)||!e.capabilities.operations.supportsQuery)return;const a=this._getTargetResolution(t),i=new Map;for(const l of o)if(!this._featuresResolutions.has(l)||this._featuresResolutions.get(l)>a){const p=l.sourceLayer;he(i,p,()=>new Map).set(l.getObjectId(),l)}const d=Array.from(i,([l,p])=>{const y=l.createQuery();return y.objectIds=[...p.keys()],y.outFields=[l.objectIdField],y.returnGeometry=!0,y.maxAllowableOffset=a,y.outSpatialReference=s.spatialReference,l.queryFeatures(y)}),c=await Promise.all(d);if(!this.destroyed)for(const{features:l}of c)for(const p of l){const y=p.sourceLayer,m=i.get(y).get(p.getObjectId());m&&o.includes(m)&&(m.geometry=p.geometry,r(m,"geometry"),this._featuresResolutions.set(m,a))}}_getTargetResolution(t){const e=t*fe(this.layerView.view.spatialReference),s=e/16;return s<=10?0:t/e*s}async _fetchPopupFeaturesUsingIdentify(t,e,s){const o=await this._createIdentifyParameters(t,e,s);if(o==null)return[];const{results:r}=await Re(this.layerView.layer.parsedUrl,o,s);return r.map(a=>a.feature)}async _createIdentifyParameters(t,e,s){const{floors:o,layer:r,timeExtent:a,view:{spatialReference:i,scale:d}}=this.layerView;if(!e.length)return null;await Promise.all(e.map(({sublayer:x})=>x.load(s).catch(()=>{})));const c=Math.min(me("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((x,S)=>S.renderer?A({renderer:S.renderer,pointerType:s==null?void 0:s.pointerType}):x,2)),l=this.createFetchPopupFeaturesQueryGeometry(t,c),p=xe(d,i),y=Math.round(l.width/p),m=new B({xmin:l.center.x-p*y,ymin:l.center.y-p*y,xmax:l.center.x+p*y,ymax:l.center.y+p*y,spatialReference:l.spatialReference});return new q({floors:o,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:y,layerOption:"popup",mapExtent:m,returnGeometry:!0,spatialReference:i,sublayers:r.sublayers,timeExtent:a,tolerance:c,width:y})}async _fetchPopupFeaturesUsingQueries(t,e,s){const{layerView:{floors:o,timeExtent:r}}=this,a=e.map(async({sublayer:i,popupTemplate:d})=>{var v,R,P;if(await i.load(s).catch(()=>{}),i.capabilities&&!i.capabilities.operations.supportsQuery)return[];const c=i.createQuery(),l=A({renderer:i.renderer,pointerType:s==null?void 0:s.pointerType}),p=this.createFetchPopupFeaturesQueryGeometry(t,l),y=new Set,[m]=await Promise.all([Se(i,d),(v=i.renderer)==null?void 0:v.collectRequiredFields(y,i.fieldsIndex)]);M(s),ge(y,i.fieldsIndex,m);const x=Array.from(y).sort();c.geometry=p,c.outFields=x,c.timeExtent=r;const S=V(o,i);if(c.where=U(c.where,S),((R=i.capabilities)==null?void 0:R.query.supportsOrderBy)&&((P=i.orderBy)==null?void 0:P[0])){const g=i.orderBy[0],$=!g.valueExpression&&g.field,_=g.order==="ascending"?"asc":"desc";$&&(c.orderByFields=[`${$} ${_}`])}const j=this._getTargetResolution(p.width/l),f=await Ve(d);M(s);const E=i.geometryType==="point"||f&&f.arcadeUtils.hasGeometryOperations(d);E||(c.maxAllowableOffset=j);let{features:b}=await i.queryFeatures(c,s);const w=E?0:j;b=await Le(i,b,s);for(const g of b)this._featuresResolutions.set(g,w);return b});return(await Promise.allSettled(a)).reduce((i,d)=>d.status==="fulfilled"?[...i,...d.value]:i,[]).filter(we)}};function Ne(t,e,s){const o=[];if(!t)return o;const r=a=>{const i=a.minScale===0||e<=a.minScale,d=a.maxScale===0||e>=a.maxScale;if(a.visible&&i&&d){if(a.sublayers)a.sublayers.forEach(r);else if(a.popupEnabled){const c=Fe(a,{...s,defaultPopupTemplateEnabled:!1});c!=null&&o.unshift({sublayer:a,popupTemplate:c})}}};return t.map(r),o}function Ve(t){var e;return(e=t.expressionInfos)!=null&&e.length||Array.isArray(t.content)&&t.content.some(s=>s.type==="expression")?be():Promise.resolve()}async function Te(t,e){var s,o;if((o=(s=t.capabilities)==null?void 0:s.operations)!=null&&o.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:r})=>r.load().then(()=>r.capabilities.operations.supportsQuery)))}catch{return!1}}async function Le(t,e,s){const o=t.renderer;return o&&"defaultSymbol"in o&&!o.defaultSymbol&&(e=o.valueExpression?await Promise.all(e.map(r=>o.getSymbolAsync(r,s).then(a=>a?r:null))).then(r=>r.filter(a=>a!=null)):e.filter(r=>o.getSymbol(r)!=null)),e}n([u({constructOnly:!0})],O.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),n([u({constructOnly:!0})],O.prototype,"layerView",void 0),n([u({constructOnly:!0})],O.prototype,"highlightGraphics",void 0),n([u({constructOnly:!0})],O.prototype,"highlightGraphicUpdated",void 0),n([u({constructOnly:!0})],O.prototype,"updatingHandles",void 0),O=n([N("esri.views.layers.support.MapServiceLayerViewHelper")],O);export{Je as P,O as S};
