import{o as e,v as t,w as D,ck as B,dK as G,cg as $,ap as z,ch as k,s as Q,aB as X,ce as Z,cd as ee}from"./index-BCOvYjsd.js";import te from"./FeatureLayer-CZayvNCM.js";import{f as ie}from"./TemporalLayer-DHMMu_Da.js";import{A as q}from"./interfaces-CL2NbQte.js";import"./MultiOriginJSONSupport-Oi1s1psc.js";import"./layerContainerType-C5CzMsLd.js";import"./FeatureLayerBase-CtKRb1Cy.js";import"./commonProperties-B-IiOJOf.js";import"./ElevationInfo-JgKjtv7t.js";import"./lengthUtils-CDEkLj2v.js";import"./labelingInfo-BKbU-5K2.js";import"./SimpleRenderer-QG4WFGL4.js";import"./commonProperties-Cjoc1SFO.js";import"./colorRamps-B5wCt1L1.js";import"./ColorStop-CjHsqQ4X.js";import"./visualVariableUtils-D3neASu_.js";import"./jsonUtils-D0uTwTFl.js";import"./defaults-BaoV-fz0.js";import"./defaultsJSON-GKolV7NZ.js";import"./UniqueValueRenderer-BF3Ti4K9.js";import"./defaultCIMValues-Z8gODNqJ.js";import"./enums-BQDXKJnw.js";import"./RendererLegendOptions-CzPIuudE.js";import"./styleUtils-2G0NBrba.js";import"./NormalizationBinParametersMixin-CjJMWKZs.js";import"./labelUtils-TH8oGZfH.js";import"./LayerFloorInfo-BeHjwybR.js";import"./Relationship-DolWmHis.js";import"./serviceCapabilitiesUtils-CR0bqX1g.js";import"./infoFor3D-dHKPbXlj.js";import"./editsZScale-404HdNvb.js";import"./queryZScale-CGIhgTZC.js";import"./FeatureSet-Cu8erNuw.js";import"./APIKeyMixin-D-h4ucHB.js";import"./ArcGISService-DES2rAJg.js";import"./BlendLayer-DIDCz6DR.js";import"./jsonUtils--jgndNN5.js";import"./parser-DAsQTtHB.js";import"./CustomParametersMixin-7IxlY8Dn.js";import"./DisplayFilteredLayer-CDxdqi0n.js";import"./scaleUtils-82eOO8r3.js";import"./displayFilterUtils-BEQXfej1.js";import"./EditBusLayer-CB8voeXb.js";import"./FeatureEffectLayer-BEfG7oPS.js";import"./FeatureEffect-Bqiw1BNS.js";import"./FeatureFilter-B_Ic7umv.js";import"./FeatureReductionLayer-4cSDQs4U.js";import"./FeatureReductionSelection-D4VR3YSF.js";import"./jsonUtils-CmoRpW-q.js";import"./typeUtils-B5LfJ8En.js";import"./ClassBreaksRenderer-D2Tiv1Mu.js";import"./LRUCache-DzNwX_CU.js";import"./MemCache-BbdoaGmm.js";import"./FieldsIndex--__JKMkT.js";import"./utils-BBgV4jpp.js";import"./heatmapUtils-Dzf0MiEZ.js";import"./vec42-BnNr_Lzs.js";import"./vec4f64-o2zAXfmz.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-BQR0UVg7.js";import"./OrderedLayer-Bo7gyQUv.js";import"./OrderByInfo-DuLW7zDP.js";import"./PortalLayer-Bfn_oxB5.js";import"./portalItemUtils-GAU2GjqI.js";import"./RefreshableLayer-ooQFJNdP.js";import"./ScaleRangeLayer-Bk87vUHD.js";import"./TrackableLayer-aM0UO5kE.js";import"./TimeInfo-DbBPJg0D.js";import"./FeatureTemplate-G-ij7qqF.js";import"./FeatureType-DMI1gjxX.js";import"./fieldProperties-CZ0g_JYI.js";import"./TitleCreator-DOllxEuP.js";import"./versionUtils-Bku7od5p.js";import"./styleUtils-WnwDoC9h.js";import"./popupUtils-BcPEySeu.js";let N=class extends B{set horizontalWKID(r){r?G({wkid:+r})?this._set("horizontalWKID",+r):this._set("horizontalWKID",r):this._set("horizontalWKID",null)}set verticalWKID(r){r?this._set("verticalWKID",isFinite(r)&&G({wkid:+r})?+r:null):this._set("verticalWKID",null)}get isAdvanced(){const{affineTransformations:r,focalLength:o,principalOffsetPoint:n,radialDistortionCoefficients:u,tangentialDistortionCoefficients:s}=this;return(r==null?void 0:r.length)>1&&!Number.isNaN(o)&&(n==null?void 0:n.length)>1&&(u==null?void 0:u.length)>1&&(s==null?void 0:s.length)>1}};e([t({json:{write:!0}})],N.prototype,"affineTransformations",void 0),e([t({json:{write:!0}})],N.prototype,"focalLength",void 0),e([t({json:{write:!0}})],N.prototype,"principalOffsetPoint",void 0),e([t({json:{write:!0}})],N.prototype,"radialDistortionCoefficients",void 0),e([t({json:{write:!0}})],N.prototype,"tangentialDistortionCoefficients",void 0),e([t({json:{write:!0}})],N.prototype,"horizontalWKID",null),e([t({json:{write:!0}})],N.prototype,"verticalWKID",null),e([t({json:{write:!0}})],N.prototype,"x",void 0),e([t({json:{write:!0}})],N.prototype,"y",void 0),e([t({json:{write:!0}})],N.prototype,"z",void 0),e([t({json:{write:!0}})],N.prototype,"type",void 0),N=e([D("esri.layers.orientedImagery.core.CameraOrientation")],N);const H=N;let w=class extends $.ClonableMixin(z.JSONSupportMixin(H)){constructor(){super(...arguments),this.type=1}toString(){const{type:r,horizontalWKID:o,verticalWKID:n,x:u,y:s,z:c,heading:l,pitch:f,roll:b,affineTransformations:h,focalLength:x,principalOffsetPoint:d,radialDistortionCoefficients:g,tangentialDistortionCoefficients:v}=this,m=[r,o,n,u,s,c,l,f,b];return this.isAdvanced&&(h==null||h.forEach(a=>m.push(a)),m.push(x),d==null||d.forEach(a=>m.push(a)),g==null||g.forEach(a=>m.push(a)),v==null||v.forEach(a=>m.push(a))),m.map(a=>Number.isNaN(a)?"":a).join("|")}};e([t({json:{write:!0}})],w.prototype,"type",void 0),e([t({type:[Number],json:{write:!0}})],w.prototype,"affineTransformations",void 0),e([t({type:Number,json:{write:!0}})],w.prototype,"focalLength",void 0),e([t({type:[Number],json:{write:!0}})],w.prototype,"principalOffsetPoint",void 0),e([t({type:[Number],json:{write:!0}})],w.prototype,"radialDistortionCoefficients",void 0),e([t({type:[Number],json:{write:!0}})],w.prototype,"tangentialDistortionCoefficients",void 0),e([t({type:Number,json:{write:!0}})],w.prototype,"heading",void 0),e([t({type:Number,json:{write:!0}})],w.prototype,"pitch",void 0),e([t({type:Number,json:{write:!0}})],w.prototype,"roll",void 0),e([t({type:Number,json:{write:!0}})],w.prototype,"x",void 0),e([t({type:Number,json:{write:!0}})],w.prototype,"y",void 0),e([t({type:Number,json:{write:!0}})],w.prototype,"z",void 0),w=e([D("esri.layers.orientedImagery.core.CameraOrientationHPR")],w);const re=w;let I=class extends $.ClonableMixin(z.JSONSupportMixin(H)){constructor(){super(...arguments),this.type=4}toString(){const{type:r,latitude:o,longitude:n,ellipsoidRadius:u,squaredEccentricity:s,properties:c}=this,l=`${c}`.split("|");return l.splice(1,1),`${r}|${o}|${n}|${u}|${s}|${l.join("|")}`}};e([t({json:{write:!0}})],I.prototype,"type",void 0),e([t({json:{write:!0},type:Number})],I.prototype,"latitude",void 0),e([t({json:{write:!0},type:Number})],I.prototype,"longitude",void 0),e([t({json:{write:!0},type:Number})],I.prototype,"ellipsoidRadius",void 0),e([t({json:{write:!0},type:Number})],I.prototype,"squaredEccentricity",void 0),e([t({json:{write:!0}})],I.prototype,"properties",void 0),I=e([D("esri.layers.orientedImagery.core.CameraOrientationLTP")],I);const oe=I;let j=class extends $.ClonableMixin(z.JSONSupportMixin(H)){constructor(){super(...arguments),this.type=2}toString(){const{type:r,horizontalWKID:o,verticalWKID:n,x:u,y:s,z:c,omega:l,phi:f,kappa:b,affineTransformations:h,focalLength:x,principalOffsetPoint:d,radialDistortionCoefficients:g,tangentialDistortionCoefficients:v}=this,m=[r,o,n,u,s,c,l,f,b];return this.isAdvanced&&(h==null||h.forEach(a=>m.push(a)),m.push(x),d==null||d.forEach(a=>m.push(a)),g==null||g.forEach(a=>m.push(a)),v==null||v.forEach(a=>m.push(a))),m.map(a=>isNaN(a)?"":a).join("|")}};e([t({json:{write:!0}})],j.prototype,"type",void 0),e([t({type:[Number],json:{write:!0}})],j.prototype,"affineTransformations",void 0),e([t({type:Number,json:{write:!0}})],j.prototype,"focalLength",void 0),e([t({type:[Number],json:{write:!0}})],j.prototype,"principalOffsetPoint",void 0),e([t({type:[Number],json:{write:!0}})],j.prototype,"radialDistortionCoefficients",void 0),e([t({type:[Number],json:{write:!0}})],j.prototype,"tangentialDistortionCoefficients",void 0),e([t({type:Number,json:{write:!0}})],j.prototype,"omega",void 0),e([t({type:Number,json:{write:!0}})],j.prototype,"phi",void 0),e([t({type:Number,json:{write:!0}})],j.prototype,"kappa",void 0),e([t({type:Number,json:{write:!0}})],j.prototype,"x",void 0),e([t({type:Number,json:{write:!0}})],j.prototype,"y",void 0),e([t({type:Number,json:{write:!0}})],j.prototype,"z",void 0),j=e([D("esri.layers.orientedImagery.core.CameraOrientationOPK")],j);const ne=j;let P=class extends $.ClonableMixin(z.JSONSupportMixin(H)){constructor(){super(...arguments),this.type=3}get isAdvanced(){const{affineTransformations:r,focalLength:o,principalOffsetPoint:n,radialDistortionCoefficients:u,tangentialDistortionCoefficients:s}=this;return(r==null?void 0:r.length)>1||!Number.isNaN(o)||(n==null?void 0:n.length)>1||(u==null?void 0:u.length)>1||(s==null?void 0:s.length)>1}toString(){const{type:r,horizontalWKID:o,verticalWKID:n,x:u,y:s,z:c,yaw:l,pitch:f,roll:b,affineTransformations:h,focalLength:x,principalOffsetPoint:d,radialDistortionCoefficients:g,tangentialDistortionCoefficients:v}=this,m=[r,o,n,u,s,c,l,f,b];return this.isAdvanced&&(h==null||h.forEach(a=>m.push(a)),m.push(x),d==null||d.forEach(a=>m.push(a)),d==null||d.forEach(a=>m.push(a)),g==null||g.forEach(a=>m.push(a)),v==null||v.forEach(a=>m.push(a))),m.map(a=>Number.isNaN(a)?"":a).join("|")}};e([t({json:{write:!0}})],P.prototype,"type",void 0),e([t({type:[Number],json:{write:!0}})],P.prototype,"affineTransformations",void 0),e([t({type:Number,json:{write:!0}})],P.prototype,"focalLength",void 0),e([t({type:[Number],json:{write:!0}})],P.prototype,"principalOffsetPoint",void 0),e([t({type:[Number],json:{write:!0}})],P.prototype,"radialDistortionCoefficients",void 0),e([t({type:[Number],json:{write:!0}})],P.prototype,"tangentialDistortionCoefficients",void 0),e([t({type:Number,json:{write:!0}})],P.prototype,"yaw",void 0),e([t({type:Number,json:{write:!0}})],P.prototype,"pitch",void 0),e([t({type:Number,json:{write:!0}})],P.prototype,"roll",void 0),e([t({type:Number,json:{write:!0}})],P.prototype,"x",void 0),e([t({type:Number,json:{write:!0}})],P.prototype,"y",void 0),e([t({type:Number,json:{write:!0}})],P.prototype,"z",void 0),P=e([D("esri.layers.orientedImagery.core.CameraOrientationYPR")],P);const ae=P;var S;(function(i){i[i.HPR=1]="HPR",i[i.OPK=2]="OPK",i[i.YPR=3]="YPR",i[i.LTP=4]="LTP"})(S||(S={}));const M=new Map;M.set(`${S.OPK}`,{desc:"Using Omega Phi Kappa",constructor:ne}),M.set(`${S.HPR}`,{desc:"Using Heading, Pitch and Roll",constructor:re}),M.set(`${S.YPR}`,{desc:"Using Yaw, Pitch and Roll",constructor:ae}),M.set(`${S.LTP}`,{desc:"Using Local Tangent Plane",constructor:oe});let O=class extends $.ClonableMixin(z){constructor(){super(...arguments),this.url=null}};e([t({type:Number,json:{write:!0}})],O.prototype,"lod",void 0),e([t({type:String,json:{write:!0}})],O.prototype,"rasterFunction",void 0),e([t({type:String,json:{write:!0}})],O.prototype,"url",void 0),O=e([D("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ElevationSource")],O);let U=class extends $.ClonableMixin(z){constructor(){super(...arguments),this.constantElevation=null}};e([t({type:Number,json:{write:!0}})],U.prototype,"constantElevation",void 0),U=e([D("esri.layers.orientedImagery.core.ElevationSourceDefinitions.ConstantElevation")],U);const se=i=>i!=null&&typeof i.constantElevation=="number";function pe(i,r,o){return r&&(i=`${r}${i}`),o&&(i+=`${o}`),i}function ue(i,r,o){let{url:n}=i;return n?(n=pe(n,r,o),new O({...i,url:n})):null}function le(i,r,o){return i&&(se(i)?new U(i):ue(i,r,o))}const F=new k({Minutes:"minutes",Hours:"hours",Days:"days",Weeks:"weeks",Months:"months",Years:"years"}),A=new k({Feet:"feet",Meter:"meter"}),_=new k({360:"360",Horizontal:"horizontal",Inspection:"inspection",Nadir:"nadir",Oblique:"oblique","":null}),W=new Map;function me(i){const[r,o,n,u,s,c,l,f,b,h,x,d,g,v,m,a,C,T,K,E,R,L]=i.slice(1);return{horizontalWKID:r,verticalWKID:o,x:n,y:u,z:s,omega:c,phi:l,kappa:f,...Y([b,h,x,d,g,v],[a,C],[T,K,E],[R,L],m)}}W.set(`${S.HPR}`,ye),W.set(`${S.YPR}`,ce),W.set(`${S.OPK}`,me),W.set(`${S.LTP}`,de);const V=i=>{const r=i.map(o=>parseFloat(o)).filter(o=>!isNaN(o));if(r.length===i.length)return r};function Y(i,r,o,n,u){const s=V(i),c=V(r),l=V(o),f=V(n);return{affineTransformations:(s==null?void 0:s.length)===6?s:void 0,focalLength:(s==null?void 0:s.length)===6?parseFloat(u):void 0,principalOffsetPoint:(c==null?void 0:c.length)!==2?[0,0]:c,radialDistortionCoefficients:(l==null?void 0:l.length)!==3?[0,0,0]:l,tangentialDistortionCoefficients:(f==null?void 0:f.length)!==2?[0,0]:f}}function ye(i){const[r,o,n,u,s,c,l,f,b,h,x,d,g,v,m,a,C,T,K,E,R,L]=i.slice(1);return{horizontalWKID:r,verticalWKID:o,x:n,y:u,z:s,heading:c,pitch:l,roll:f,...Y([b,h,x,d,g,v],[a,C],[T,K,E],[R,L],m)}}function ce(i){const[r,o,n,u,s,c,l,f,b,h,x,d,g,v,m,a,C,T,K,E,R,L]=i.slice(1);return{horizontalWKID:r,verticalWKID:o,x:n,y:u,z:s,yaw:c,pitch:l,roll:f,...Y([b,h,x,d,g,v],[a,C],[T,K,E],[R,L],m)}}function de(i){var b;const[r,o,n,u,s,...c]=i.slice(1),l=W.get(s),f=(b=M.get(s))==null?void 0:b.constructor;return!l||!f?null:{latitude:r,longitude:o,ellipsoidRadius:n,squaredEccentricity:u,properties:new f(l([s,"",...c]))}}function fe(i){return Array.isArray(i)&&(i==null?void 0:i.length)===9&&!i.some(isNaN)}const he=new Set(["demPathPrefix","demPathSuffix","depthImagePathPrefix","depthImagePathSuffix","elevationSource","horizontalMeasurementUnit","imageGeometryField","imageReferenceField","verticalMeasurementUnit","videoPathPrefix","videoPathSuffix","timeAnimation","visibilityTimeExtent"]),J=(i,r)=>!he.has(r)&&i,ge=(i,r,o)=>{const n=`orientedImageryProperties.${i}`;return{name:n,write:r?{ignoreOrigin:!0,target:n,writer:r}:{ignoreOrigin:!0},read:o?{ignoreOrigin:!0,source:n,reader:o}:{ignoreOrigin:!0}}};function ve(i){return i.json&&(i.json.origins=i.json.origins??{},i.json.origins["web-scene"]={write:!1,read:!1}),i}function y(i,r,o,n){const{name:u,write:s,read:c}=ge(i,r,o),l={name:u,write:s,read:c,origins:{service:{name:`orientedImageryInfo.${u}`,write:r,read:o},"web-scene":{name:u,write:J(s,i),read:J(c,i)},"web-map":{name:u,write:s,read:c}}};return n&&l.origins&&(l.type=n,l.origins["web-map"].type=n,l.origins["web-scene"].type=n),l}let p=class extends te{constructor(){super(...arguments),this.cameraHeading=null,this.cameraHeight=null,this.cameraPitch=null,this.cameraRoll=null,this.coveragePercent=null,this.demPathPrefix=null,this.demPathSuffix=null,this.depthImagePathPrefix=null,this.depthImagePathSuffix=null,this.elevationSource=null,this.farDistance=null,this.geometryType="point",this.horizontalFieldOfView=null,this.horizontalMeasurementUnit=null,this.imageGeometryField="ImageGeometry",this.imagePathPrefix=null,this.imagePathSuffix=null,this.imageReferenceField="OIObjectID",this.imageRotation=null,this.maximumDistance=null,this.nearDistance=null,this.operationalLayerType="OrientedImageryLayer",this.orientationAccuracy=null,this.orientedImageryType=null,this.supportedSourceTypes=new Set(["Oriented Imagery Layer"]),this.type="oriented-imagery",this.timeIntervalUnit="days",this.useViewTime=!0,this.verticalFieldOfView=null,this.verticalMeasurementUnit=null,this.videoPathPrefix=null,this.videoPathSuffix=null,this.visibilityTimeExtent=null}get effectiveElevationSource(){const{elevationSource:i,demPathPrefix:r,demPathSuffix:o}=this;return le(i,r,o)}async save(i){return this._debouncedSaveOperations(q.SAVE,i)}async saveAs(i,r){return this._debouncedSaveOperations(q.SAVE_AS,r,i)}findFirstValidLayerId(i){var r,o;return(o=(r=i.layers)==null?void 0:r.find(n=>this.supportedSourceTypes.has(n.type)))==null?void 0:o.id}_verifySource(){if(super._verifySource(),this.geometryType!=="point")throw new Q("oriented-imagery-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};e([t({type:Number,json:y("cameraHeading")})],p.prototype,"cameraHeading",void 0),e([t({type:Number,json:y("cameraHeight")})],p.prototype,"cameraHeight",void 0),e([t({type:Number,json:y("cameraPitch")})],p.prototype,"cameraPitch",void 0),e([t({type:Number,json:y("cameraRoll")})],p.prototype,"cameraRoll",void 0),e([t({type:Number,json:y("coveragePercent")})],p.prototype,"coveragePercent",void 0),e([t({type:String,json:y("demPathPrefix")})],p.prototype,"demPathPrefix",void 0),e([t({type:String,json:y("demPathSuffix")})],p.prototype,"demPathSuffix",void 0),e([t({type:String,json:y("depthImagePathPrefix")})],p.prototype,"depthImagePathPrefix",void 0),e([t({type:String,json:y("depthImagePathSuffix")})],p.prototype,"depthImagePathSuffix",void 0),e([t({type:Object,json:y("elevationSource")})],p.prototype,"elevationSource",void 0),e([t({readOnly:!0})],p.prototype,"effectiveElevationSource",null),e([t({type:Number,json:y("farDistance")})],p.prototype,"farDistance",void 0),e([t()],p.prototype,"geometryType",void 0),e([t({type:Number,json:y("horizontalFieldOfView")})],p.prototype,"horizontalFieldOfView",void 0),e([t({type:String,json:y("horizontalMeasurementUnit")})],p.prototype,"horizontalMeasurementUnit",void 0),e([t({type:String,json:{...y("imageGeometryField"),default:"ImageGeometry"}})],p.prototype,"imageGeometryField",void 0),e([t({type:String,json:y("imagePathPrefix")})],p.prototype,"imagePathPrefix",void 0),e([t({type:String,json:y("imagePathSuffix")})],p.prototype,"imagePathSuffix",void 0),e([t({type:String,json:{...y("imageReferenceField"),default:"OIObjectID"}})],p.prototype,"imageReferenceField",void 0),e([t({type:Number,json:y("imageRotation")})],p.prototype,"imageRotation",void 0),e([t({type:Number,json:y("maximumDistance")})],p.prototype,"maximumDistance",void 0),e([t({type:Number,json:y("nearDistance")})],p.prototype,"nearDistance",void 0),e([t({type:["OrientedImageryLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],p.prototype,"operationalLayerType",void 0),e([t({json:{...y("orientationAccuracy",(i,r,o)=>{ee(o,i.join(";"),r)},i=>{var o;const r=(o=i==null?void 0:i.split(";"))==null?void 0:o.map(Number);return fe(r)?r:[0,0,0,0,0,0,0,0,0]},String)}})],p.prototype,"orientationAccuracy",void 0),e([t({json:{...y("orientedImageryType",_.write,_.read,_.jsonValues.slice(1))}})],p.prototype,"orientedImageryType",void 0),e([t({json:{read:!1},value:"oriented-imagery",readOnly:!0})],p.prototype,"type",void 0),e([t({type:F.apiValues,json:{...y("timeIntervalUnit",F.write,F.read,F.jsonValues)}})],p.prototype,"timeIntervalUnit",void 0),e([t(ve(X(ie)))],p.prototype,"useViewTime",void 0),e([t({type:Number,json:y("verticalFieldOfView")})],p.prototype,"verticalFieldOfView",void 0),e([t({type:A.apiValues,json:{...y("verticalMeasurementUnit",A.write,A.read,A.jsonValues)}})],p.prototype,"verticalMeasurementUnit",void 0),e([t({type:String,json:y("videoPathPrefix")})],p.prototype,"videoPathPrefix",void 0),e([t({type:String,json:y("videoPathSuffix")})],p.prototype,"videoPathSuffix",void 0),e([t({type:Z,json:{origins:{"web-scene":{write:!1,read:!1}}}})],p.prototype,"visibilityTimeExtent",void 0),p=e([D("esri.layers.OrientedImageryLayer")],p);const kt=p;export{kt as default};
