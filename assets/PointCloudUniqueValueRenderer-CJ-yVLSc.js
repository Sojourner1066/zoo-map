import{o as e,v as t,w as i,ap as f,ch as z,cu as m,aB as o,cv as O,cc as P,az as I}from"./index-BCOvYjsd.js";import{u as x}from"./RendererLegendOptions-CzPIuudE.js";import{a as B}from"./ColorStop-CjHsqQ4X.js";var T;let c=T=class extends f{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new T({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};e([t({type:String,json:{write:{isRequired:!0}}})],c.prototype,"field",void 0),e([t({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],c.prototype,"minValue",void 0),e([t({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],c.prototype,"maxValue",void 0),c=T=e([i("esri.renderers.support.pointCloud.ColorModulation")],c);const D=c,v=new z({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let b=class extends f{};e([t({type:v.apiValues,readOnly:!0,nonNullable:!0,json:{type:v.jsonValues,read:!1,write:{writer:v.write,isRequired:!0}}})],b.prototype,"type",void 0),b=e([i("esri.renderers.support.pointCloud.PointSizeAlgorithm")],b);const $=b;var g;let y=g=class extends ${constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new g({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};e([m({pointCloudFixedSizeAlgorithm:"fixed-size"})],y.prototype,"type",void 0),e([t({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],y.prototype,"size",void 0),e([t({type:Boolean,json:{write:!0}})],y.prototype,"useRealWorldSymbolSizes",void 0),y=g=e([i("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],y);const K=y;var V;let h=V=class extends ${constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new V({scaleFactor:this.scaleFactor})}};e([m({pointCloudSplatAlgorithm:"splat"})],h.prototype,"type",void 0),e([t({type:Number,value:1,nonNullable:!0,json:{write:{isRequired:!0}}})],h.prototype,"scaleFactor",void 0),h=V=e([i("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],h);const k=h,A={key:"type",base:$,typeMap:{"fixed-size":K,splat:k}},w=O()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let l=class extends f{constructor(N){super(N),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:o(this.pointSizeAlgorithm),colorModulation:o(this.colorModulation),pointsPerInch:o(this.pointsPerInch)}}};e([t({type:w.apiValues,readOnly:!0,nonNullable:!0,json:{type:w.jsonValues,read:!1,write:{writer:w.write,isRequired:!0}}})],l.prototype,"type",void 0),e([t({types:A,json:{write:!0}})],l.prototype,"pointSizeAlgorithm",void 0),e([t({type:D,json:{write:!0}})],l.prototype,"colorModulation",void 0),e([t({json:{write:!0},nonNullable:!0,type:Number})],l.prototype,"pointsPerInch",void 0),l=e([i("esri.renderers.PointCloudRenderer")],l),function(s){s.fieldTransformTypeKebabDict=new z({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(l||(l={}));const r=l;var j;let n=j=class extends f{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new j({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:o(this.color)})}};e([t({type:String,json:{write:!0}})],n.prototype,"description",void 0),e([t({type:String,json:{write:!0}})],n.prototype,"label",void 0),e([t({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue",isRequired:!0}}})],n.prototype,"minValue",void 0),e([t({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue",isRequired:!0}}})],n.prototype,"maxValue",void 0),e([t({type:I,json:{type:[P],write:{isRequired:!0}}})],n.prototype,"color",void 0),n=j=e([i("esri.renderers.support.pointCloud.ColorClassBreakInfo")],n);const M=n;var R;let p=R=class extends r{constructor(s){super(s),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new R({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:o(this.colorClassBreakInfos),legendOptions:o(this.legendOptions)})}};e([m({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],p.prototype,"type",void 0),e([t({json:{write:{isRequired:!0}},type:String})],p.prototype,"field",void 0),e([t({type:x,json:{write:!0}})],p.prototype,"legendOptions",void 0),e([t({type:r.fieldTransformTypeKebabDict.apiValues,json:{type:r.fieldTransformTypeKebabDict.jsonValues,read:r.fieldTransformTypeKebabDict.read,write:r.fieldTransformTypeKebabDict.write}})],p.prototype,"fieldTransformType",void 0),e([t({type:[M],json:{write:{isRequired:!0}}})],p.prototype,"colorClassBreakInfos",void 0),p=R=e([i("esri.renderers.PointCloudClassBreaksRenderer")],p);const J=p;var S;let u=S=class extends r{constructor(s){super(s),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new S({...this.cloneProperties(),field:o(this.field),fieldTransformType:o(this.fieldTransformType),stops:o(this.stops),legendOptions:o(this.legendOptions)})}};e([m({pointCloudStretchRenderer:"point-cloud-stretch"})],u.prototype,"type",void 0),e([t({json:{write:{isRequired:!0}},type:String})],u.prototype,"field",void 0),e([t({type:x,json:{write:!0}})],u.prototype,"legendOptions",void 0),e([t({type:r.fieldTransformTypeKebabDict.apiValues,json:{type:r.fieldTransformTypeKebabDict.jsonValues,read:r.fieldTransformTypeKebabDict.read,write:r.fieldTransformTypeKebabDict.write}})],u.prototype,"fieldTransformType",void 0),e([t({type:[B],json:{write:{isRequired:!0}}})],u.prototype,"stops",void 0),u=S=e([i("esri.renderers.PointCloudStretchRenderer")],u);const L=u;var C;let d=C=class extends f{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new C({description:this.description,label:this.label,values:o(this.values),color:o(this.color)})}};e([t({type:String,json:{write:!0}})],d.prototype,"description",void 0),e([t({type:String,json:{write:!0}})],d.prototype,"label",void 0),e([t({type:[String],json:{write:{isRequired:!0}}})],d.prototype,"values",void 0),e([t({type:I,json:{type:[P],write:{isRequired:!0}}})],d.prototype,"color",void 0),d=C=e([i("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],d);const F=d;var q;let a=q=class extends r{constructor(s){super(s),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new q({...this.cloneProperties(),field:o(this.field),fieldTransformType:o(this.fieldTransformType),colorUniqueValueInfos:o(this.colorUniqueValueInfos),legendOptions:o(this.legendOptions)})}};e([m({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],a.prototype,"type",void 0),e([t({json:{write:{isRequired:!0}},type:String})],a.prototype,"field",void 0),e([t({type:r.fieldTransformTypeKebabDict.apiValues,json:{type:r.fieldTransformTypeKebabDict.jsonValues,read:r.fieldTransformTypeKebabDict.read,write:r.fieldTransformTypeKebabDict.write}})],a.prototype,"fieldTransformType",void 0),e([t({type:[F],json:{write:{isRequired:!0}}})],a.prototype,"colorUniqueValueInfos",void 0),e([t({type:x,json:{write:!0}})],a.prototype,"legendOptions",void 0),a=q=e([i("esri.renderers.PointCloudUniqueValueRenderer")],a);const Q=a;export{L as a,J as b,r as c,Q as d};
