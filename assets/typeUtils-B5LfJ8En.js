const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OverrideHelper-D7HuFmBg.js","assets/index-BCOvYjsd.js","assets/index-CrYBktwj.css","assets/colorUtils-BADZFW2t.js","assets/vec42-BnNr_Lzs.js","assets/vec4f64-o2zAXfmz.js","assets/utils-BBgV4jpp.js","assets/defaultCIMValues-Z8gODNqJ.js","assets/enums-BQDXKJnw.js","assets/quantizationUtils-D3PpB7ao.js"])))=>i.map(i=>d[i]);
import{ap as T,o as i,v as r,cc as le,az as v,w as I,k as ae,aL as ue,aM as pe,n as V,a6 as Q,bW as ye,s as ce,iQ as de,lR as he,_ as fe,aB as p,fQ as me,gz as O,bs as W,ff as ge,gx as be,at as J,au as ve,cu as U,cg as Z,as as Y,gA as we,jZ as ee,G as xe}from"./index-BCOvYjsd.js";import{w as te}from"./ClassBreaksRenderer-D2Tiv1Mu.js";import{v as G,p as C,j as Se,n as _e,c as $e,b as je,d as Ie}from"./commonProperties-Cjoc1SFO.js";import{e as Ee}from"./LRUCache-DzNwX_CU.js";import{Z as Re}from"./FieldsIndex--__JKMkT.js";import{J as De,R as Me}from"./utils-BBgV4jpp.js";import{a as Ve,e as Ce,c as Pe}from"./heatmapUtils-Dzf0MiEZ.js";import{u as Te}from"./RendererLegendOptions-CzPIuudE.js";import{p as ie}from"./SimpleRenderer-QG4WFGL4.js";import{A as se}from"./UniqueValueRenderer-BF3Ti4K9.js";var A;let P=A=class extends T{constructor(e){super(e),this.color=null,this.ratio=null}clone(){return new A({color:this.color&&this.color.clone(),ratio:this.ratio})}};i([r({type:v,json:{type:[le],default:null,write:{isRequired:!0}}})],P.prototype,"color",void 0),i([r({type:Number,json:{write:{isRequired:!0}}})],P.prototype,"ratio",void 0),P=A=i([I("esri.renderers.support.HeatmapColorStop")],P);const N=P,K="esri.renderers.support.DictionaryLoader",Ne={type:"CIMSimpleLineCallout",lineSymbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:.5,color:[0,0,0,255]}]}};class re{constructor(t,s,o){this.config=null,this.fieldMap=null,this.url=null,this._ongoingRequests=new Map,this._symbolCache=new Ee(100),this._dictionaryVersion=null,this._fieldIndex=null,this._dictionaryPromise=null,this.url=t,this.config=s,this.fieldMap=o}getSymbolFields(){return this._symbolFields}async getSymbolAsync(t,s){var R;let o;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(s));try{o=await this._dictionaryPromise}catch(d){if(ae(d))return this._dictionaryPromise=null,null}const c=(R=this._dictionaryVersion)==null?void 0:R.greaterEqual(4,0),a={};if(this.fieldMap)for(const d of this._symbolFields){const n=De(this.fieldMap[d],this._fieldIndex);if(n){const l=t.attributes[n];a[d]=c?l:l!=null?""+t.attributes[n]:""}else a[d]=""}let u=null;try{u=o==null?void 0:o(a,s)}catch{return null}if(!u||typeof u!="string"||u==="invalid")return null;const m=u.split(";"),S=[],g=[];for(let d=0;d<m.length;d++){const n=m[d];if(n){if(n.includes("po:")){const l=n.slice(3).split("|");if(l.length===3){const E=l[0],$=l[1];let _=l[2];const q="countrylabel";if(E===q&&$==="TextString"){if(this.fieldMap!=null){let b=this.fieldMap[q];b==null&&(b=q,this.fieldMap[b]=b),t.attributes[b]=_}continue}if($==="DashTemplate")_=_.split(" ").map(b=>Number(b));else if($==="Color"){const b=new v(_).toRgba();_=[b[0],b[1],b[2],255*b[3]]}else _=Number(_);g.push({primitiveName:E,propertyName:$,value:_,defaultValue:null})}}else if(n.includes("|")){for(const l of n.split("|"))if(this._itemNames.has(l)){S.push(l);break}}else if(this._itemNames.has(n))S.push(n);else if(d===0){S.length=0;let l="Invalid_P";t.geometry!=null&&(ue(t.geometry)?l="Invalid_A":pe(t.geometry)&&(l="Invalid_L")),S.push(l);break}}}const w=t.geometry==null||!t.geometry.hasZ&&t.geometry.type==="point";return this._cimPartsToCIMSymbol(t,S,g,w,s)}async fetchResources(t){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void V.getLogger(K).error("no valid URL!");const s=Q(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},signal:t!=null?t.signal:null}),[{data:o}]=await Promise.all([s,ye()]);if(!o)throw this._dictionaryPromise=null,new ce("esri.renderers.DictionaryRenderer","Bad dictionary data!");const{authoringInfo:c,dictionary_version:a,expression:u,itemsNames:m}=o,S=u;let g=!1;a&&(this._dictionaryVersion=de.parse(a),g=this._dictionaryVersion.greaterEqual(4,0)),this._refSymbolUrlTemplate=this.url+"/"+o.cimRefTemplateUrl,this._itemNames=new Set(m),this._symbolFields=c.symbol;const w={};if(this.config){const n=this.config;for(const l in n)w[l]=n[l]}if(c.configuration)for(const n of c.configuration)w.hasOwnProperty(n.name)||(w[n.name]=n.value);const R=[];if(t!=null&&t.fields&&this.fieldMap)for(const n in this.fieldMap){const l=this.fieldMap[n],E=t.fields.filter($=>$.name.toLowerCase()===(l==null?void 0:l.toLowerCase()));E.length>0&&R.push({...E[0],type:g?E[0].type:"esriFieldTypeString"})}R.length>0&&(this._fieldIndex=new Re(R));const d=he(S,t!=null?t.spatialReference:null,R,w).then(n=>{const l={scale:0};return(E,$)=>{if(n==null)return null;const _=n.repurposeFeature({geometry:null,attributes:E});return l.scale=$!=null?$.scale??void 0:void 0,n.evaluate({$feature:_,$view:l},n.services)}}).catch(n=>(V.getLogger(K).error("Creating dictionary expression failed:",n),null));return this._dictionaryPromise=d,d}async _cimPartsToCIMSymbol(t,s,o,c,a){const u=new Array(s.length);for(let g=0;g<s.length;g++)u[g]=this._getSymbolPart(s[g],a);let m=await Promise.all(u);const S=this.fieldMap;if(S&&m.length>0){const{OverrideHelper:g}=await fe(()=>import("./OverrideHelper-D7HuFmBg.js").then(w=>w.O),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]));m=p(m);for(const w of m)g.applyDictionaryTextOverrides(w,t,S,this._fieldIndex,Me(w))}return new me({data:Le(m,o,c)})}async _getSymbolPart(t,s){const o=this._symbolCache.get(t);if(o)return o;if(this._ongoingRequests.has(t))return this._ongoingRequests.get(t).then(u=>u.data);const c=this._refSymbolUrlTemplate.replaceAll(/\{itemName\}/gi,t),a=Q(c,{responseType:"json",query:{f:"json"},...s});this._ongoingRequests.set(t,a),a.finally(()=>this._ongoingRequests.delete(t));try{const u=await a;return this._symbolCache.put(t,u.data),u.data}catch(u){throw u}}}function Le(e,t,s){if(!e||e.length===0)return null;const o={...e[0]};if(e.length>1){o.effects=null,o.symbolLayers=[];for(const c of e){const a=c;if(a.effects!=null)for(const u of a.symbolLayers)u.effects==null?u.effects=a.effects:u.effects.unshift(...a.effects);o.symbolLayers.unshift(...a.symbolLayers)}}return s&&(o.callout=Ne),{type:"CIMSymbolReference",symbol:o,primitiveOverrides:t}}var k;let x=k=class extends G(C){constructor(e){super(e),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}get _loader(){return new re(this.url,this.config,this.fieldMap)}writeData(e,t){e&&(t.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,t,s,o){o!=null&&o.origin||super.writeVisualVariables(e,t,s,o)}clone(){return new k({config:p(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:p(this.fieldMap),url:p(this.url),visualVariables:p(this.visualVariables)})}async getSymbolAsync(e,t){return this._loader.getSymbolAsync(e,t)}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t),this.scaleExpression&&await O(e,t,this.scaleExpression);for(const s in this.fieldMap){const o=this.fieldMap[s];t.has(o)&&e.add(o)}}get arcadeRequired(){return!0}getSymbol(){return null}get symbols(){return[]}getAttributeHash(){var e;return((e=this.visualVariables)==null?void 0:e.reduce((t,s)=>t+s.getAttributeHash(),""))??""}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._loader.getSymbolFields()}};i([r({type:re})],x.prototype,"_loader",null),i([r({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],x.prototype,"config",void 0),i([r({type:Object,json:{write:!0}})],x.prototype,"fieldMap",void 0),i([r({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],x.prototype,"scaleExpression",void 0),i([W("scaleExpression")],x.prototype,"writeData",null),i([r({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],x.prototype,"scaleExpressionTitle",void 0),i([r({type:String,json:{write:!0}})],x.prototype,"url",void 0),i([W("visualVariables")],x.prototype,"writeVisualVariables",null),x=k=i([I("esri.renderers.DictionaryRenderer")],x);const Oe=x;var F;let j=F=class extends T{constructor(e){super(e),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(e){return e==null?e:typeof e=="function"?(V.getLogger(this).error(".field: field must be a string value"),null):be(e)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){var e;return new F({color:(e=this.color)==null?void 0:e.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};i([r({type:v,json:{type:[Number],write:!0}})],j.prototype,"color",void 0),i([r({type:String,json:{write:!0}})],j.prototype,"field",void 0),i([ge("field")],j.prototype,"castField",null),i([r({type:String,json:{write:!0}})],j.prototype,"label",void 0),i([r({type:String,json:{write:!0}})],j.prototype,"valueExpression",void 0),i([r({type:String,json:{write:!0}})],j.prototype,"valueExpressionTitle",void 0),j=F=i([I("esri.renderers.support.AttributeColorInfo")],j);const oe=j;var H;let L=H=class extends T{constructor(){super(...arguments),this.unit=null}clone(){return new H({unit:this.unit})}};i([r({type:String,json:{write:!0}})],L.prototype,"unit",void 0),L=H=i([I("esri.renderers.support.DotDensityLegendOptions")],L);const qe=L;var z;let h=z=class extends G(C){constructor(e){super(e),this.attributes=null,this.backgroundColor=new v([0,0,0,0]),this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new J,this.dotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(this.referenceScale==null)return this.dotValue;const t=e/this.referenceScale*this.dotValue;return t<1?1:t}getSymbol(){return new ve({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}get symbols(){return[this.getSymbol()]}getAttributeHash(){var e;return((e=this.attributes)==null?void 0:e.reduce((t,s)=>t+s.getAttributeHash(),""))??""}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new z({attributes:p(this.attributes),backgroundColor:p(this.backgroundColor),dotBlendingEnabled:p(this.dotBlendingEnabled),dotShape:p(this.dotShape),dotSize:p(this.dotSize),dotValue:p(this.dotValue),legendOptions:p(this.legendOptions),outline:p(this.outline),referenceScale:p(this.referenceScale),seed:p(this.seed),visualVariables:p(this.visualVariables),authoringInfo:p(this.authoringInfo)})}getControllerHash(){var t;return`${(t=this.attributes)==null?void 0:t.map(s=>s.field||s.valueExpression||"")}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const s of this.attributes??[])s.valueExpression&&await O(e,t,s.valueExpression),s.field&&e.add(s.field)}};i([r({type:[oe],json:{write:!0}})],h.prototype,"attributes",void 0),i([r({type:v,json:{write:!0}})],h.prototype,"backgroundColor",void 0),i([r({type:Boolean,json:{write:!0}})],h.prototype,"dotBlendingEnabled",void 0),i([r({type:String,json:{write:!1}})],h.prototype,"dotShape",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"dotSize",void 0),i([r({type:qe,json:{write:!0}})],h.prototype,"legendOptions",void 0),i([r({type:J,json:{default:null,write:!0}})],h.prototype,"outline",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"dotValue",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"referenceScale",void 0),i([r({type:Number,json:{write:!0}})],h.prototype,"seed",void 0),i([U({dotDensity:"dot-density"})],h.prototype,"type",void 0),h=z=i([I("esri.renderers.DotDensityRenderer")],h);const Ae=h;let M=class extends Z.ClonableMixin(T){constructor(){super(...arguments),this.minLabel=null,this.maxLabel=null,this.title=null}};i([r({type:String,json:{write:!0}})],M.prototype,"minLabel",void 0),i([r({type:String,json:{write:!0}})],M.prototype,"maxLabel",void 0),i([r({type:String,json:{write:!0}})],M.prototype,"title",void 0),M=i([I("esri.renderers.support.HeatmapLegendOptions")],M);var B;function X(e){if(e!=null){const{maxDensity:t,minDensity:s,radius:o}=e;if(t!=null||s!=null||o!=null){const{blurRadius:c,maxPixelIntensity:a,minPixelIntensity:u,...m}=e;return m}}return e}let y=B=class extends C{constructor(e){super(e),this.authoringInfo=null,this.colorStops=[new N({ratio:0,color:new v("rgba(255, 140, 0, 0)")}),new N({ratio:.75,color:new v("rgba(255, 140, 0, 1)")}),new N({ratio:.9,color:new v("rgba(255, 0,   0, 1)")})],this.field=null,this.legendOptions=null,this.maxDensity=.04,this.minDensity=0,this.radius=18,this.referenceScale=0,this.type="heatmap",this.valueExpression=null,this.valueExpressionTitle=null}normalizeCtorArgs(e){return X(e)}get blurRadius(){return Ve(this.radius)}set blurRadius(e){const t=this.maxPixelIntensity,s=this.minPixelIntensity;this._set("radius",Ce(e)),this._set("maxDensity",t*this._pixelIntensityToDensity),this._set("minDensity",s*this._pixelIntensityToDensity)}get maxPixelIntensity(){return this.maxDensity/this._pixelIntensityToDensity}set maxPixelIntensity(e){this._set("maxDensity",e*this._pixelIntensityToDensity)}get minPixelIntensity(){return this.minDensity/this._pixelIntensityToDensity}set minPixelIntensity(e){this._set("minDensity",e*this._pixelIntensityToDensity)}get _pixelIntensityToDensity(){return 24/(Pe**2*this.blurRadius**4)}read(e,t){e=X(e),super.read(e,t)}getSymbol(){return new Y}async getSymbolAsync(){return this.getSymbol()}get symbols(){return[this.getSymbol()]}async collectRequiredFields(e,t){const s=this.field,o=this.valueExpression;s&&typeof s=="string"&&we(e,t,s),o&&typeof o=="string"&&await O(e,t,o)}getAttributeHash(){return""}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new B({authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),colorStops:p(this.colorStops),field:this.field,legendOptions:p(this.legendOptions),maxDensity:this.maxDensity,minDensity:this.minDensity,radius:this.radius,referenceScale:this.referenceScale,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};i([r({type:Se,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],y.prototype,"authoringInfo",void 0),i([r({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],y.prototype,"blurRadius",null),i([r({type:[N],json:{write:{isRequired:!0}}})],y.prototype,"colorStops",void 0),i([r({type:String,json:{write:!0}})],y.prototype,"field",void 0),i([r({type:M,json:{write:!0}})],y.prototype,"legendOptions",void 0),i([r({type:Number,json:{write:!0}})],y.prototype,"maxDensity",void 0),i([r({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],y.prototype,"maxPixelIntensity",null),i([r({type:Number,json:{write:!0}})],y.prototype,"minDensity",void 0),i([r({type:Number,json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],y.prototype,"minPixelIntensity",null),i([r({type:Number,cast:ee,json:{write:!0}})],y.prototype,"radius",void 0),i([r({type:Number,range:{min:0},json:{default:0,write:!0}})],y.prototype,"referenceScale",void 0),i([U({heatmap:"heatmap"})],y.prototype,"type",void 0),i([r({type:String,json:{write:!0,origins:{"web-document":{write:!1},"portal-item":{write:!1}}}})],y.prototype,"valueExpression",void 0),i([r({type:String})],y.prototype,"valueExpressionTitle",void 0),i([r({readOnly:!0})],y.prototype,"_pixelIntensityToDensity",null),y=B=i([I("esri.renderers.HeatmapRenderer")],y);const ne=y;let D=class extends Z.ClonableMixin(T){constructor(){super(...arguments),this.color=new v([0,0,0,0]),this.label=null,this.threshold=0}};i([r({type:v,json:{write:!0}})],D.prototype,"color",void 0),i([r({type:String,json:{write:!0}})],D.prototype,"label",void 0),i([r({type:Number,range:{min:0,max:1},json:{write:!0}})],D.prototype,"threshold",void 0),D=i([I("esri.renderers.support.OthersCategory")],D);const ke={base:Ie,key:"type",typeMap:{size:je,opacity:$e}};let f=class extends G(Z.ClonableMixin(C)){constructor(e){super(e),this.attributes=null,this.backgroundFillSymbol=null,this.defaultColor=new v([0,0,0,0]),this.defaultLabel=null,this.holePercentage=0,this.othersCategory=new D,this.legendOptions=null,this.outline=null,this.size=12,this.type="pie-chart",this.visualVariables=null}getSymbol(){var e;return new Y({size:this.size?this.size/2+(((e=this.outline)==null?void 0:e.width)||0):0})}async getSymbolAsync(){return this.getSymbol()}get symbols(){return[this.getSymbol(),this.backgroundFillSymbol].filter(xe)}getAttributeHash(){var e;return((e=this.visualVariables)==null?void 0:e.reduce((t,s)=>t+s.getAttributeHash(),""))??""}getMeshHash(){return this.symbols.reduce((e,t)=>e+JSON.stringify(t),"")}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const s of this.attributes)s.valueExpression&&await O(e,t,s.valueExpression),s.field&&e.add(s.field)}};i([r({type:[oe],json:{write:!0}})],f.prototype,"attributes",void 0),i([r(_e)],f.prototype,"backgroundFillSymbol",void 0),i([r({type:v,json:{write:!0}})],f.prototype,"defaultColor",void 0),i([r({type:String,json:{write:!0}})],f.prototype,"defaultLabel",void 0),i([r({type:Number,range:{min:0,max:1},json:{write:!0}})],f.prototype,"holePercentage",void 0),i([r({type:D,json:{write:!0}})],f.prototype,"othersCategory",void 0),i([r({type:Te,json:{write:!0}})],f.prototype,"legendOptions",void 0),i([r({type:J,json:{default:null,write:!0}})],f.prototype,"outline",void 0),i([r({type:Number,cast:ee,json:{write:!0}})],f.prototype,"size",void 0),i([U({pieChart:"pie-chart"})],f.prototype,"type",void 0),i([r({types:[ke]})],f.prototype,"visualVariables",void 0),f=i([I("esri.renderers.PieChartRenderer")],f);const Fe=f,it={key:"type",base:C,typeMap:{heatmap:ne,simple:ie,"unique-value":se,"class-breaks":te,"dot-density":Ae,dictionary:Oe,"pie-chart":Fe},errorContext:"renderer"},st={key:"type",base:C,typeMap:{simple:ie,"unique-value":se,"class-breaks":te,heatmap:ne},errorContext:"renderer",validate:He};function He(e){switch(e.type){case"simple":return ze(e);case"unique-value":return Be(e);case"class-breaks":return Je(e);case"heatmap":return e}}function ze(e){if(e.symbol)return e;V.getLogger("esri.renderers.support.types").error("Removed invalid 'simple' renderer without a symbol from web scene.")}function Be(e){const t=e.uniqueValueInfos,s=t==null?void 0:t.filter(({symbol:o,label:c},a)=>(o||V.getLogger("esri.renderers.support.types").error(`Removed invalid unique value info ([${a}] ${c}) without a symbol from web scene.`),!!o));return(s==null?void 0:s.length)!==(t==null?void 0:t.length)&&(e.uniqueValueInfos=s),e}function Je(e){const t=e.classBreakInfos,s=t==null?void 0:t.filter(({symbol:o,label:c},a)=>(o||V.getLogger("esri.renderers.support.types").error(`Removed invalid class break info ([${a}] ${c}) without a symbol from web scene.`),!!o));return(s==null?void 0:s.length)!==(t==null?void 0:t.length)&&(e.classBreakInfos=s),e}export{N as l,it as m,st as u};
