import{ha as U,fv as J,bE as C,s as k,ec as h,ex as W,bz as X,bn as Y,n as D,ai as H,o as r,v as i,w as T,a9 as $,hg as I,cf as L,bX as P,cd as Q,I as z,c4 as y,d3 as V,f7 as A,bs as G,cc as f,y as Z}from"./index-BCOvYjsd.js";import{S as B}from"./MultiOriginJSONSupport-Oi1s1psc.js";import{y as M,u as K}from"./clientSideDefaults-BPnK7OWO.js";import{v as ee,W as te,z as re,Y as ie,S as oe}from"./wfsUtils-CGIGeyIc.js";import{c as se}from"./AttributeBinsFeatureSet-YRnx344E.js";import{d as ae}from"./FeatureSet-Cu8erNuw.js";import{p as ne}from"./BlendLayer-DIDCz6DR.js";import{e as pe}from"./CustomParametersMixin-7IxlY8Dn.js";import{a as le}from"./DisplayFilteredLayer-CDxdqi0n.js";import{c as ue}from"./FeatureEffectLayer-BEfG7oPS.js";import{d as de}from"./FeatureReductionLayer-4cSDQs4U.js";import{b as me}from"./OperationalLayer-BQR0UVg7.js";import{p as ye}from"./OrderedLayer-Bo7gyQUv.js";import{j as ce}from"./PortalLayer-Bfn_oxB5.js";import{f as fe}from"./RefreshableLayer-ooQFJNdP.js";import{t as he}from"./ScaleRangeLayer-Bk87vUHD.js";import{l as ge}from"./TemporalLayer-DHMMu_Da.js";import{e as we}from"./TrackableLayer-aM0UO5kE.js";import{c as ve,p as Fe,d as be,b as xe,l as Oe,s as Se,y as Ie}from"./commonProperties-B-IiOJOf.js";import{s as Re}from"./fieldProperties-CZ0g_JYI.js";import{n as Ce,C as Te}from"./labelingInfo-BKbU-5K2.js";import{u as $e,m as Pe}from"./typeUtils-B5LfJ8En.js";import{p as je}from"./popupUtils-BcPEySeu.js";import"./QueryEngineCapabilities-B_pTbIiR.js";import"./defaultsJSON-GKolV7NZ.js";import"./geojson-CDWeycJs.js";import"./date-Ctp1FiBW.js";import"./OptimizedFeature-Cmc4IS8F.js";import"./memoryEstimations-cFrur3i9.js";import"./xmlUtils-CtUoQO7q.js";import"./layerContainerType-C5CzMsLd.js";import"./jsonUtils--jgndNN5.js";import"./parser-DAsQTtHB.js";import"./scaleUtils-82eOO8r3.js";import"./displayFilterUtils-BEQXfej1.js";import"./FeatureEffect-Bqiw1BNS.js";import"./FeatureFilter-B_Ic7umv.js";import"./FeatureReductionSelection-D4VR3YSF.js";import"./jsonUtils-CmoRpW-q.js";import"./SimpleRenderer-QG4WFGL4.js";import"./commonProperties-Cjoc1SFO.js";import"./colorRamps-B5wCt1L1.js";import"./ColorStop-CjHsqQ4X.js";import"./visualVariableUtils-D3neASu_.js";import"./lengthUtils-CDEkLj2v.js";import"./jsonUtils-D0uTwTFl.js";import"./defaults-BaoV-fz0.js";import"./MD5-C9MwAd2G.js";import"./OrderByInfo-DuLW7zDP.js";import"./portalItemUtils-GAU2GjqI.js";import"./TimeInfo-DbBPJg0D.js";import"./ElevationInfo-JgKjtv7t.js";import"./FieldsIndex--__JKMkT.js";import"./UniqueValueRenderer-BF3Ti4K9.js";import"./defaultCIMValues-Z8gODNqJ.js";import"./enums-BQDXKJnw.js";import"./RendererLegendOptions-CzPIuudE.js";import"./styleUtils-2G0NBrba.js";import"./NormalizationBinParametersMixin-CjJMWKZs.js";import"./labelUtils-TH8oGZfH.js";import"./ClassBreaksRenderer-D2Tiv1Mu.js";import"./LRUCache-DzNwX_CU.js";import"./MemCache-BbdoaGmm.js";import"./utils-BBgV4jpp.js";import"./heatmapUtils-Dzf0MiEZ.js";import"./vec42-BnNr_Lzs.js";import"./vec4f64-o2zAXfmz.js";let u=class extends U{constructor(){super(...arguments),this._connection=null,this._workerHandler=null,this.capabilities=M(!1,!1),this.type="wfs",this.refresh=J(async()=>{await this.load();const e={customParameters:this.layer.customParameters,maxRecordCount:this.layer.maxRecordCount,maxTotalRecordCount:this.layer.maxTotalRecordCount,maxPageCount:this.layer.maxPageCount},{extent:t}=await this._workerHandler.refresh(e);return t&&(this.sourceJSON.extent=t),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:t})),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null,this._workerHandler=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){const s=await this.queryFeaturesJSON(e,t);return ae.fromJSON(s)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._workerHandler.queryFeatures(e?e.toJSON():void 0,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._workerHandler.queryFeatureCount(e?e.toJSON():void 0,t)}async queryObjectIds(e,t={}){return await this.load(t),this._workerHandler.queryObjectIds(e?e.toJSON():void 0,t)}async queryExtent(e,t={}){await this.load(t);const s=await this._workerHandler.queryExtent(e?e.toJSON():void 0,t);return{count:s.count,extent:C.fromJSON(s.extent)}}async querySnapping(e,t={}){return await this.load(t),this._workerHandler.querySnapping(e,t)}async queryAttributeBins(e,t={}){await this.load(t);const s=await this._workerHandler.queryAttributeBins(e==null?void 0:e.toJSON(),t);return se.fromJSON(s)}async _createLoadOptions(e){var O,S;const{url:t,customParameters:s,name:n,namespaceUri:p,fields:a,geometryType:d,maxRecordCount:m,maxPageCount:g,maxTotalRecordCount:w,swapXY:v}=this.layer,c=this.layer.originOf("spatialReference")==="defaults"?void 0:this.layer.spatialReference;if(!t)throw new k("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await ee(t,{customParameters:s,...e}));const j=["fields","geometryType","name","namespaceUri","swapXY"].some(F=>this.layer[F]==null),l=j?await te(this.wfsCapabilities,n,p,{spatialReference:c,customParameters:s,signal:e==null?void 0:e.signal}):{...re(a??[]),geometryType:d,name:n,namespaceUri:p,spatialReference:c,swapXY:v},q=ie(this.wfsCapabilities.readFeatureTypes(),l.name,l.namespaceUri),_=h.toJSON(l.geometryType),{operations:x}=this.wfsCapabilities,N=x.GetFeature.url,E=x.GetFeature.outputFormat;return{customParameters:s,featureType:q,fields:((O=l.fields)==null?void 0:O.map(F=>F.toJSON()))??[],geometryField:l.geometryField,geometryType:_,getFeatureUrl:N,getFeatureOutputFormat:E,maxRecordCount:m,maxPageCount:g,maxTotalRecordCount:w,objectIdField:l.objectIdField,spatialReference:(S=l.spatialReference)==null?void 0:S.toJSON(),swapXY:!!l.swapXY}}async _startWorker(e){const[t,s]=await W([this._createLoadOptions(e),X("WFSSourceWorker",{...e,strategy:Y("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),n=t.error||s.error||null,p=s.value||null;if(n)throw p&&p.close(),n;const a=t.value;this._connection=s.value,this._workerHandler=this._connection.createInvokeProxy();const d=await this._workerHandler.load(a,e);for(const m of d.warnings)D.getLogger(this.layer).warn("#load()",`${m.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:m});this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:H},extent:d.extent,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:K(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:a.maxRecordCount,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}}}};r([i()],u.prototype,"capabilities",void 0),r([i({constructOnly:!0})],u.prototype,"layer",void 0),r([i()],u.prototype,"sourceJSON",void 0),r([i()],u.prototype,"type",void 0),r([i()],u.prototype,"wfsCapabilities",void 0),u=r([T("esri.layers.graphics.sources.WFSSource")],u);var b;const R=Re();let o=b=class extends ye(le(pe(de(ue(ne(ge(we(fe(he(me(ce(B(V))))))))))))){static fromWFSLayerInfo(e){const{customParameters:t,fields:s,geometryField:n,geometryType:p,name:a,namespaceUri:d,objectIdField:m,spatialReference:g,swapXY:w,url:v,wfsCapabilities:c}=e;return new b({customParameters:t,fields:s,geometryField:n,geometryType:p,name:a,namespaceUri:d,objectIdField:m,spatialReference:g,swapXY:w,url:v,wfsCapabilities:c})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxRecordCount=3e3,this.maxPageCount=10,this.maxTotalRecordCount=2e5,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new u({layer:this}),this.spatialReference=$.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),I(this.renderer,this.fieldsIndex),L(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){var e;return(e=this.source)==null?void 0:e.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,t,s){const n=e.filter(p=>p.name!==oe);this.geometryField&&n.unshift(new P({name:this.geometryField,alias:this.geometryField,type:"geometry"})),Q(s,n.map(p=>p.toJSON()),t)}get parsedUrl(){return z(this.url)}set renderer(e){I(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){var e;return(e=this.source)==null?void 0:e.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return je(this,e)}createQuery(){const e=new y({returnGeometry:!0,outFields:["*"],where:this.definitionExpression||"1=1"}),{timeOffset:t,timeExtent:s}=this;return e.timeExtent=t!=null&&s!=null?s.offset(-t.value,t.unit):s||null,e}getFieldDomain(e,t){var s;return(s=this.getField(e))==null?void 0:s.domain}getField(e){var t;return(t=this.fieldsIndex)==null?void 0:t.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(y.from(e)||this.createQuery(),t)).then(s=>{if(s!=null&&s.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(y.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(y.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(y.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh();return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};r([i({readOnly:!0})],o.prototype,"capabilities",null),r([i({type:String})],o.prototype,"copyright",void 0),r([i({readOnly:!0})],o.prototype,"createQueryVersion",null),r([i({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],o.prototype,"customParameters",void 0),r([i(A("dateFieldsTimeReference"))],o.prototype,"dateFieldsTimeZone",void 0),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),r([i({type:String})],o.prototype,"displayField",void 0),r([i(ve)],o.prototype,"elevationInfo",void 0),r([i({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"featureUrl",void 0),r([i({type:[P],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),r([G("fields")],o.prototype,"writeFields",null),r([i(R.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([i({type:C,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),r([i()],o.prototype,"geometryField",void 0),r([i({type:String,json:{read:{source:"layerDefinition.geometryType",reader:h.read},write:{target:"layerDefinition.geometryType",writer:h.write,ignoreOrigin:!0},origins:{service:{read:h.read}}}})],o.prototype,"geometryType",void 0),r([i({type:String})],o.prototype,"id",void 0),r([i(Fe)],o.prototype,"labelsVisible",void 0),r([i({type:[Te],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Ce},write:!0}})],o.prototype,"labelingInfo",void 0),r([i(be)],o.prototype,"legendEnabled",void 0),r([i({type:["show","hide"]})],o.prototype,"listMode",void 0),r([i({type:String})],o.prototype,"objectIdField",void 0),r([i({type:["WFS"]})],o.prototype,"operationalLayerType",void 0),r([i({type:f,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"maxRecordCount",void 0),r([i({type:f})],o.prototype,"maxPageCount",void 0),r([i({type:f})],o.prototype,"maxTotalRecordCount",void 0),r([i({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],o.prototype,"mode",void 0),r([i({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"name",void 0),r([i({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"namespaceUri",void 0),r([i(xe)],o.prototype,"opacity",void 0),r([i(R.outFields)],o.prototype,"outFields",void 0),r([i({readOnly:!0})],o.prototype,"parsedUrl",null),r([i(Oe)],o.prototype,"popupEnabled",void 0),r([i({type:Z,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({types:Pe,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:$e,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],o.prototype,"renderer",null),r([i(Se)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],o.prototype,"source",void 0),r([i({type:$,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],o.prototype,"spatialReference",void 0),r([i({readOnly:!0,type:[f],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"spatialReferences",void 0),r([i({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"swapXY",void 0),r([i({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],o.prototype,"title",void 0),r([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),r([i(Ie)],o.prototype,"url",void 0),r([i({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"version",void 0),r([i()],o.prototype,"wfsCapabilities",null),o=b=r([T("esri.layers.WFSLayer")],o);const Qt=o;export{Qt as default};
