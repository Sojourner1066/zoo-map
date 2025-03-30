import{ap as P,cg as R,az as d,o as t,v as n,cc as h,cB as O,jZ as w,w as m,bG as v,ff as q,c5 as z,iU as D,x as N,c_ as j,V as S,S as E,iV as T,bE as x,T as _,d3 as k,bs as A}from"./index-BCOvYjsd.js";import{c as C}from"./Analysis-BF290TMN.js";import{S as L}from"./MultiOriginJSONSupport-Oi1s1psc.js";import{b as M}from"./OperationalLayer-BQR0UVg7.js";import"./layerContainerType-C5CzMsLd.js";import"./commonProperties-B-IiOJOf.js";import"./ElevationInfo-JgKjtv7t.js";import"./lengthUtils-CDEkLj2v.js";let o=class extends P.JSONSupportMixin(R){constructor(e){super(e),this.type="simple",this.color=new d("black"),this.lineSize=2,this.fontSize=10,this.textColor=new d("black"),this.textBackgroundColor=new d([255,255,255,.6])}};t([n({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],o.prototype,"type",void 0),t([n({type:d,nonNullable:!0,json:{type:[h],write:{isRequired:!0}}})],o.prototype,"color",void 0),t([n({type:Number,cast:w,nonNullable:!0,range:{min:O(1)},json:{write:{isRequired:!0}}})],o.prototype,"lineSize",void 0),t([n({type:Number,cast:w,nonNullable:!0,json:{write:{isRequired:!0}}})],o.prototype,"fontSize",void 0),t([n({type:d,nonNullable:!0,json:{type:[h],write:{isRequired:!0}}})],o.prototype,"textColor",void 0),t([n({type:d,nonNullable:!0,json:{type:[h],write:{isRequired:!0}}})],o.prototype,"textBackgroundColor",void 0),o=t([m("esri.analysis.DimensionSimpleStyle")],o);const g=o;var y;(function(e){e.Horizontal="horizontal",e.Vertical="vertical",e.Direct="direct"})(y||(y={}));const H=[y.Horizontal,y.Vertical,y.Direct];let l=class extends P.JSONSupportMixin(R){constructor(e){super(e),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=y.Direct,this.offset=0,this.orientation=0}};t([n({type:["length"],json:{write:{isRequired:!0}}})],l.prototype,"type",void 0),t([n({type:v,json:{write:{isRequired:!0}}})],l.prototype,"startPoint",void 0),t([n({type:v,json:{write:{isRequired:!0}}})],l.prototype,"endPoint",void 0),t([n({type:H,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"measureType",void 0),t([n({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"offset",void 0),t([n({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),q(e=>z.normalize(D(e),0,!0))],l.prototype,"orientation",void 0),l=t([m("esri.analysis.LengthDimension")],l);const $=l,f=S.ofType($);let u=class extends C{constructor(e){super(e),this.type="dimension",this.style=new g,this.extent=null}initialize(){this.addHandles(N(()=>this._computeExtent(),e=>{(e==null?void 0:e.pending)==null&&this._set("extent",e!=null?e.extent:null)},j))}get dimensions(){return this._get("dimensions")||new f}set dimensions(e){this._set("dimensions",E(e,this.dimensions,f))}get spatialReference(){for(const e of this.dimensions){if(e.startPoint!=null)return e.startPoint.spatialReference;if(e.endPoint!=null)return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce((e,i)=>(e.push(i.startPoint,i.endPoint),e),[])}async waitComputeExtent(){const e=this._computeExtent();return e!=null?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(e==null)return{pending:null,extent:null};const i=[];for(const r of this.dimensions)r.startPoint!=null&&i.push(r.startPoint),r.endPoint!=null&&i.push(r.endPoint);const a=T(i,e);if(a.pending!=null)return{pending:a.pending,extent:null};let c=null;return a.geometries!=null&&(c=a.geometries.reduce((r,p)=>r==null?p!=null?x.fromPoint(p):null:p!=null?r.union(x.fromPoint(p)):r,null)),{pending:null,extent:c}}clear(){this.dimensions.removeAll()}};t([n({type:["dimension"]})],u.prototype,"type",void 0),t([n({cast:_,type:f,nonNullable:!0})],u.prototype,"dimensions",null),t([n({readOnly:!0})],u.prototype,"spatialReference",null),t([n({types:{key:"type",base:null,typeMap:{simple:g}},nonNullable:!0})],u.prototype,"style",void 0),t([n({value:null,readOnly:!0})],u.prototype,"extent",void 0),t([n({readOnly:!0})],u.prototype,"requiredPropertiesForEditing",null),u=t([m("esri.analysis.DimensionAnalysis")],u);const b=u;let s=class extends M(L(k)){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new b,this.opacity=1,e){const{source:i,style:a}=e;i&&a&&(i.style=a)}}initialize(){this.addHandles([N(()=>this.source,(e,i)=>{i!=null&&i.parent===this&&(i.parent=null),e!=null&&(e.parent=this)},j)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new b)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,i,a,c){i.dimensions=e.filter(({startPoint:r,endPoint:p})=>r!=null&&p!=null).map(r=>r.toJSON(c)).toJSON()}};t([n({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),t([n({type:["ArcGISDimensionLayer"]})],s.prototype,"operationalLayerType",void 0),t([n({nonNullable:!0})],s.prototype,"source",void 0),t([n({readOnly:!0})],s.prototype,"spatialReference",null),t([n({types:{key:"type",base:null,typeMap:{simple:g}},json:{write:{ignoreOrigin:!0}}})],s.prototype,"style",null),t([n({readOnly:!0})],s.prototype,"fullExtent",null),t([n({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],s.prototype,"opacity",void 0),t([n({type:["show","hide"]})],s.prototype,"listMode",void 0),t([n({type:S.ofType($),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],s.prototype,"dimensions",null),t([A("web-scene","dimensions")],s.prototype,"writeDimensions",null),s=t([m("esri.layers.DimensionLayer")],s);const Z=s;export{Z as default};
