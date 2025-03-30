import{o as t,v as r,w as d,ap as y,aB as c,ch as h,cp as v,cq as m,a9 as w,bs as a,ce as S,cH as R}from"./index-BCOvYjsd.js";var s;let o=s=class extends y{constructor(i){super(i),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new s({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};t([r({type:[String],json:{write:!0}})],o.prototype,"groupByFields",void 0),t([r({type:Number,json:{write:!0}})],o.prototype,"topCount",void 0),t([r({type:[String],json:{write:!0}})],o.prototype,"orderByFields",void 0),o=s=t([d("esri.rest.support.TopFilter")],o);const j=o;var n;const p=new h({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),u=new h({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let e=n=class extends y{constructor(i){super(i),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(i,l){l.resultOffset=this.start,l.resultRecordCount=this.num||10}clone(){return new n(c({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};t([r({type:Boolean,json:{write:!0}})],e.prototype,"cacheHint",void 0),t([r({type:Number,json:{write:{overridePolicy:i=>({enabled:i>0})}}})],e.prototype,"distance",void 0),t([r({types:m,json:{read:v,write:!0}})],e.prototype,"geometry",void 0),t([r({type:Number,json:{write:!0}})],e.prototype,"geometryPrecision",void 0),t([r({type:Number,json:{write:!0}})],e.prototype,"maxAllowableOffset",void 0),t([r({type:Number,json:{read:{source:"resultRecordCount"}}})],e.prototype,"num",void 0),t([r({json:{write:!0}})],e.prototype,"objectIds",void 0),t([r({type:[String],json:{write:!0}})],e.prototype,"orderByFields",void 0),t([r({type:[String],json:{write:!0}})],e.prototype,"outFields",void 0),t([r({type:w,json:{read:{source:"outSR"},write:{target:"outSR"}}})],e.prototype,"outSpatialReference",void 0),t([r({type:String,json:{write:!0}})],e.prototype,"resultType",void 0),t([r({json:{write:!0}})],e.prototype,"returnGeometry",void 0),t([r({type:Boolean,json:{write:{overridePolicy:i=>({enabled:i})}}})],e.prototype,"returnM",void 0),t([r({type:Boolean,json:{write:{overridePolicy:i=>({enabled:i})}}})],e.prototype,"returnZ",void 0),t([r({type:Number,json:{read:{source:"resultOffset"}}})],e.prototype,"start",void 0),t([a("start"),a("num")],e.prototype,"writeStart",null),t([r({type:String,json:{read:{source:"spatialRel",reader:p.read},write:{target:"spatialRel",writer:p.write}}})],e.prototype,"spatialRelationship",void 0),t([r({type:S,json:{write:!0}})],e.prototype,"timeExtent",void 0),t([r({type:j,json:{write:!0}})],e.prototype,"topFilter",void 0),t([r({type:String,json:{read:u.read,write:{writer:u.write,overridePolicy(i){return{enabled:i!=null&&this.distance!=null}}}}})],e.prototype,"units",void 0),t([r({type:String,json:{write:!0}})],e.prototype,"where",void 0),e=n=t([d("esri.rest.support.TopFeaturesQuery")],e),e.from=R(e);const F=e;export{F as default};
