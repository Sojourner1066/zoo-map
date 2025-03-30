import{ha as v,fv as w,bE as S,bz as b,bn as O,o as i,v as r,w as m,a9 as F,a5 as I,I as q,c4 as l,s as h,bp as N,hb as _,f0 as J}from"./index-BCOvYjsd.js";import C from"./FeatureLayer-CZayvNCM.js";import{d as P}from"./FeatureSet-Cu8erNuw.js";import{y as j}from"./clientSideDefaults-BPnK7OWO.js";import"./MultiOriginJSONSupport-Oi1s1psc.js";import"./layerContainerType-C5CzMsLd.js";import"./FeatureLayerBase-CtKRb1Cy.js";import"./commonProperties-B-IiOJOf.js";import"./ElevationInfo-JgKjtv7t.js";import"./lengthUtils-CDEkLj2v.js";import"./labelingInfo-BKbU-5K2.js";import"./SimpleRenderer-QG4WFGL4.js";import"./commonProperties-Cjoc1SFO.js";import"./colorRamps-B5wCt1L1.js";import"./ColorStop-CjHsqQ4X.js";import"./visualVariableUtils-D3neASu_.js";import"./jsonUtils-D0uTwTFl.js";import"./defaults-BaoV-fz0.js";import"./defaultsJSON-GKolV7NZ.js";import"./UniqueValueRenderer-BF3Ti4K9.js";import"./defaultCIMValues-Z8gODNqJ.js";import"./enums-BQDXKJnw.js";import"./RendererLegendOptions-CzPIuudE.js";import"./styleUtils-2G0NBrba.js";import"./NormalizationBinParametersMixin-CjJMWKZs.js";import"./labelUtils-TH8oGZfH.js";import"./LayerFloorInfo-BeHjwybR.js";import"./Relationship-DolWmHis.js";import"./serviceCapabilitiesUtils-CR0bqX1g.js";import"./infoFor3D-dHKPbXlj.js";import"./editsZScale-404HdNvb.js";import"./queryZScale-CGIhgTZC.js";import"./APIKeyMixin-D-h4ucHB.js";import"./ArcGISService-DES2rAJg.js";import"./BlendLayer-DIDCz6DR.js";import"./jsonUtils--jgndNN5.js";import"./parser-DAsQTtHB.js";import"./CustomParametersMixin-7IxlY8Dn.js";import"./DisplayFilteredLayer-CDxdqi0n.js";import"./scaleUtils-82eOO8r3.js";import"./displayFilterUtils-BEQXfej1.js";import"./EditBusLayer-CB8voeXb.js";import"./FeatureEffectLayer-BEfG7oPS.js";import"./FeatureEffect-Bqiw1BNS.js";import"./FeatureFilter-B_Ic7umv.js";import"./FeatureReductionLayer-4cSDQs4U.js";import"./FeatureReductionSelection-D4VR3YSF.js";import"./jsonUtils-CmoRpW-q.js";import"./typeUtils-B5LfJ8En.js";import"./ClassBreaksRenderer-D2Tiv1Mu.js";import"./LRUCache-DzNwX_CU.js";import"./MemCache-BbdoaGmm.js";import"./FieldsIndex--__JKMkT.js";import"./utils-BBgV4jpp.js";import"./heatmapUtils-Dzf0MiEZ.js";import"./vec42-BnNr_Lzs.js";import"./vec4f64-o2zAXfmz.js";import"./MD5-C9MwAd2G.js";import"./OperationalLayer-BQR0UVg7.js";import"./OrderedLayer-Bo7gyQUv.js";import"./OrderByInfo-DuLW7zDP.js";import"./PortalLayer-Bfn_oxB5.js";import"./portalItemUtils-GAU2GjqI.js";import"./RefreshableLayer-ooQFJNdP.js";import"./ScaleRangeLayer-Bk87vUHD.js";import"./TemporalLayer-DHMMu_Da.js";import"./TimeInfo-DbBPJg0D.js";import"./TrackableLayer-aM0UO5kE.js";import"./FeatureTemplate-G-ij7qqF.js";import"./FeatureType-DMI1gjxX.js";import"./fieldProperties-CZ0g_JYI.js";import"./TitleCreator-DOllxEuP.js";import"./versionUtils-Bku7od5p.js";import"./styleUtils-WnwDoC9h.js";import"./popupUtils-BcPEySeu.js";import"./interfaces-CL2NbQte.js";import"./QueryEngineCapabilities-B_pTbIiR.js";let n=class extends v{constructor(t){super(t),this.type="csv",this.refresh=w(async e=>{await this.load();const{extent:o,timeExtent:a}=await this._connection.invoke("refresh",e);return o&&(this.sourceJSON.extent=o),a&&(this.sourceJSON.timeInfo.timeExtent=[a.start,a.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(t){const e=t!=null?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){var t;(t=this._connection)==null||t.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t,e={}){await this.load(e);const o=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return P.fromJSON(o)}async queryFeaturesJSON(t,e={}){return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t,e={}){return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t,e={}){return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t,e={}){await this.load(e);const o=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return{count:o.count,extent:S.fromJSON(o.extent)}}async querySnapping(t,e={}){return await this.load(e),this._connection.invoke("querySnapping",t,e)}async queryAttributeBins(t,e={}){return await this.load(),this._connection.invoke("queryAttributeBins",t?t.toJSON():null,e)}async _startWorker(t){this._connection=await b("CSVSourceWorker",{strategy:O("feature-layers-workers")?"dedicated":"local",signal:t,registryTarget:this});const{url:e,delimiter:o,fields:a,latitudeField:y,longitudeField:f,spatialReference:u,timeInfo:p}=this.loadOptions,d=await this._connection.invoke("load",{url:e,customParameters:this.customParameters,parsingOptions:{delimiter:o,fields:a==null?void 0:a.map(g=>g.toJSON()),latitudeField:y,longitudeField:f,spatialReference:u==null?void 0:u.toJSON(),timeInfo:p==null?void 0:p.toJSON()}},{signal:t});this.locationInfo=d.locationInfo,this.sourceJSON=d.layerDefinition,this.delimiter=d.delimiter}};i([r()],n.prototype,"type",void 0),i([r()],n.prototype,"loadOptions",void 0),i([r()],n.prototype,"customParameters",void 0),i([r()],n.prototype,"locationInfo",void 0),i([r()],n.prototype,"sourceJSON",void 0),i([r()],n.prototype,"delimiter",void 0),n=i([m("esri.layers.graphics.sources.CSVSource")],n);function c(t,e){throw new h(e,`CSVLayer (title: ${t.title}, id: ${t.id}) cannot be saved to a portal item`)}let s=class extends C{constructor(...t){super(...t),this.geometryType="point",this.capabilities=j(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=F.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(t,e){return typeof t=="string"?{url:t,...e}:t}load(t){const e=t!=null?t.signal:null,o=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},t).catch(I).then(async()=>this.initLayerProperties(await this.createGraphicsSource(e)));return this.addResolvingPromise(o),Promise.resolve(this)}get isTable(){return this.loaded&&this.geometryType==null}readWebMapLabelsVisible(t,e){var o,a;return e.showLabels!=null?e.showLabels:!!((a=(o=e.layerDefinition)==null?void 0:o.drawingInfo)!=null&&a.labelingInfo)}set url(t){if(!t)return void this._set("url",t);const e=q(t);this._set("url",e.path),e.query&&(this.customParameters={...this.customParameters,...e.query})}async createGraphicsSource(t){const e=new n({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField??void 0,longitudeField:this.longitudeField??void 0,spatialReference:this.spatialReference??void 0,timeInfo:this.timeInfo??void 0,url:this.url},customParameters:this.customParameters??void 0});return this._set("source",e),await e.load({signal:t}),this.read({locationInfo:e.locationInfo,columnDelimiter:e.delimiter},{origin:"service",url:this.parsedUrl}),e}queryFeatures(t,e){return this.load().then(()=>this.source.queryFeatures(l.from(t)||this.createQuery())).then(o=>{if(o!=null&&o.features)for(const a of o.features)a.layer=a.sourceLayer=this;return o})}async queryObjectIds(t,e){return await this.load(),this.source.queryObjectIds(l.from(t)||this.createQuery())}queryFeatureCount(t,e){return this.load().then(()=>this.source.queryFeatureCount(l.from(t)||this.createQuery()))}queryExtent(t,e){return this.load().then(()=>this.source.queryExtent(l.from(t)||this.createQuery()))}read(t,e){super.read(t,e),e&&e.origin==="service"&&this.revert(["latitudeField","longitudeField"],"service")}write(t,e){return super.write(t,{...e,writeLayerSchema:!0})}clone(){throw new h("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(t){return c(this,"csv-layer:save")}async saveAs(t,e){return c(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:t,updates:e}=await this.source.refresh(this.customParameters);return e!=null&&this.read(e,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),t}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};i([r({readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"capabilities",void 0),i([r({type:[","," ",";","|","	"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],s.prototype,"delimiter",void 0),i([r({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],s.prototype,"editingEnabled",void 0),i([r({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],s.prototype,"fields",void 0),i([r({type:Boolean,readOnly:!0})],s.prototype,"isTable",null),i([N("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],s.prototype,"readWebMapLabelsVisible",null),i([r({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],s.prototype,"latitudeField",void 0),i([r({type:["show","hide"]})],s.prototype,"listMode",void 0),i([r({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],s.prototype,"locationType",void 0),i([r({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],s.prototype,"longitudeField",void 0),i([r({type:["CSV"]})],s.prototype,"operationalLayerType",void 0),i([r()],s.prototype,"outFields",void 0),i([r({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],s.prototype,"path",void 0),i([r({json:{read:!1},cast:null,type:n,readOnly:!0})],s.prototype,"source",void 0),i([r({json:{read:!1},value:"csv",readOnly:!0})],s.prototype,"type",void 0),i([r({json:{read:J,write:{isRequired:!0,ignoreOrigin:!0,writer:_}}})],s.prototype,"url",null),s=i([m("esri.layers.CSVLayer")],s);const ee=s;export{ee as default};
