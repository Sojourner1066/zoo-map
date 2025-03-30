import{o as t,v as s,w as h,ap as c,aB as j,ch as d,ff as E,bp as z,cc as fe,cg as je,gx as $e,n as S,bs as re,kQ as Te,jr as _e,jZ as be,s as Fe,ck as Ee,a3 as De,gA as G,gz as Ie,ma as Re,co as Me,mb as oe,jL as Oe,jq as I,kx as ke,i8 as qe,eO as Ae}from"./index-BCOvYjsd.js";import{p as Ne,m as Ce}from"./colorRamps-B5wCt1L1.js";import{a as Le}from"./ColorStop-CjHsqQ4X.js";import{v as Be,e as $,t as He,a as Ue,i as ue}from"./visualVariableUtils-D3neASu_.js";import{r as N}from"./jsonUtils-D0uTwTFl.js";var W;let T=W=class extends c{constructor(e){super(e),this.minValue=0,this.maxValue=0}clone(){return new W({minValue:this.minValue,maxValue:this.maxValue})}};t([s({type:Number,json:{write:!0}})],T.prototype,"minValue",void 0),t([s({type:Number,json:{write:!0}})],T.prototype,"maxValue",void 0),T=W=t([h("esri.renderers.support.AuthoringInfoClassBreakInfo")],T);var J;let w=J=class extends c{constructor(e){super(e),this.field="",this.normalizationField="",this.label="",this.classBreakInfos=new Array}clone(){return new J({field:this.field,normalizationField:this.normalizationField,label:this.label,classBreakInfos:j(this.classBreakInfos)})}};t([s({type:String,json:{write:!0}})],w.prototype,"field",void 0),t([s({type:String,json:{write:!0}})],w.prototype,"normalizationField",void 0),t([s({type:String,json:{write:!0}})],w.prototype,"label",void 0),t([s({type:[T],json:{write:!0}})],w.prototype,"classBreakInfos",void 0),w=J=t([h("esri.renderers.support.AuthoringInfoFieldInfo")],w);var P;let x=P=class extends c{constructor(e){super(e),this.label=null,this.size=null,this.value=null}clone(){return new P({label:this.label,value:this.value,size:this.size})}};t([s({type:String,json:{write:!0}})],x.prototype,"label",void 0),t([s({type:Number,json:{write:!0}})],x.prototype,"size",void 0),t([s({type:Number,json:{write:!0}})],x.prototype,"value",void 0),x=P=t([h("esri.renderers.support.AuthoringInfoSizeStop")],x);const Ge=x;var Q;const R=new d({percentTotal:"percent-of-total",ratio:"ratio",percent:"percent"}),M=new d({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),pe={key:e=>typeof e=="number"?"number":"string",typeMap:{number:Number,string:String},base:null},he=["high-to-low","above-and-below","centered-on","extremes"],ye=[...new Set(["high-to-low","above-and-below","centered-on","extremes","above","below","high-to-low","above-and-below","above","below","reference-size"])],ce=["seconds","minutes","hours","days","months","years"],We=["circle","diamond","hexagon-flat","hexagon-pointy","square"];let p=Q=class extends c{constructor(e){super(e),this.endTime=null,this.field=null,this.maxSliderValue=null,this.minSliderValue=null,this.startTime=null,this.type=null,this.units=null}castEndTime(e){return typeof e=="string"||typeof e=="number"?e:null}get normalizationField(){return this.theme==="reference-size"?this._get("normalizationField"):null}set normalizationField(e){this._set("normalizationField",e)}get referenceSizeScale(){return this.theme==="reference-size"?this._get("referenceSizeScale"):null}set referenceSizeScale(e){this._set("referenceSizeScale",e)}get referenceSizeSymbolStyle(){return this.theme==="reference-size"?this._get("referenceSizeSymbolStyle"):null}set referenceSizeSymbolStyle(e){this._set("referenceSizeSymbolStyle",e)}castStartTime(e){return typeof e=="string"||typeof e=="number"?e:null}get sizeStops(){return this.theme==="reference-size"?this._get("sizeStops"):null}set sizeStops(e){this._set("sizeStops",e)}get style(){return this.type==="color"?this._get("style"):null}set style(e){this._set("style",e)}get theme(){return this.type==="color"||this.type==="size"?this._get("theme")||"high-to-low":null}set theme(e){this._set("theme",e)}clone(){return new Q({endTime:this.endTime,field:this.field,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,normalizationField:this.normalizationField,referenceSizeScale:this.referenceSizeScale,referenceSizeSymbolStyle:this.referenceSizeSymbolStyle,sizeStops:j(this.sizeStops),startTime:this.startTime,style:this.style,theme:this.theme,type:this.type,units:this.units})}};t([s({types:pe,json:{write:!0}})],p.prototype,"endTime",void 0),t([E("endTime")],p.prototype,"castEndTime",null),t([s({type:String,json:{write:!0}})],p.prototype,"field",void 0),t([s({type:Number,json:{write:!0}})],p.prototype,"maxSliderValue",void 0),t([s({type:Number,json:{write:!0}})],p.prototype,"minSliderValue",void 0),t([s({type:String,json:{origins:{"web-scene":{write:!1}},write:!0}})],p.prototype,"normalizationField",null),t([s({type:Number,value:null,json:{origins:{"web-scene":{write:!1}},write:!0}})],p.prototype,"referenceSizeScale",null),t([s({type:We,value:null,json:{origins:{"web-scene":{write:!1}},write:!0}})],p.prototype,"referenceSizeSymbolStyle",null),t([s({types:pe,json:{write:!0}})],p.prototype,"startTime",void 0),t([E("startTime")],p.prototype,"castStartTime",null),t([s({type:[Ge],json:{origins:{"web-scene":{write:!1}},write:!0}})],p.prototype,"sizeStops",null),t([s({type:R.apiValues,value:null,json:{type:R.jsonValues,read:R.read,write:R.write}})],p.prototype,"style",null),t([s({type:ye,value:null,json:{type:ye,origins:{"web-scene":{type:he,write:{writer:(e,i)=>{he.includes(e)&&(i.theme=e)}}}},write:!0}})],p.prototype,"theme",null),t([s({type:M.apiValues,json:{type:M.jsonValues,read:M.read,write:M.write}})],p.prototype,"type",void 0),t([s({type:ce,json:{type:ce,write:!0}})],p.prototype,"units",void 0),p=Q=t([h("esri.renderers.support.AuthoringInfoVisualVariable")],p);const Je=p;var Z;const f=new d({esriClassifyDefinedInterval:"defined-interval",esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),O=new d({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density",flow:"flow"}),de=new d({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density"}),me=["inches","feet","yards","miles","nautical-miles","millimeters","centimeters","decimeters","meters","kilometers"],Pe=["high-to-low","above-and-below","above","below"],Qe=["flow-line","wave-front"],Ze=["caret","circle-caret","arrow","circle-arrow","plus-minus","circle-plus-minus","square","circle","triangle","happy-sad","thumb","custom"];let o=Z=class extends c{constructor(e){super(e),this.colorRamp=null,this.fadeRatio=null,this.isAutoGenerated=!1,this.lengthUnit=null,this.maxSliderValue=null,this.minSliderValue=null,this.visualVariables=null}get classificationMethod(){const e=this._get("classificationMethod"),i=this.type;return i&&i!=="relationship"?i==="class-breaks-size"||i==="class-breaks-color"?e||"manual":null:e}set classificationMethod(e){this._set("classificationMethod",e)}readColorRamp(e){return e?Ne(e):void 0}get fields(){return this.type&&this.type!=="predominance"?null:this._get("fields")}set fields(e){this._set("fields",e)}get field1(){return this.type&&this.type!=="relationship"?null:this._get("field1")}set field1(e){this._set("field1",e)}get field2(){return this.type&&this.type!=="relationship"?null:this._get("field2")}set field2(e){this._set("field2",e)}get flowTheme(){return this.type==="flow"?this._get("flowTheme"):null}set flowTheme(e){this._set("flowTheme",e)}get focus(){return this.type&&this.type!=="relationship"?null:this._get("focus")}set focus(e){this._set("focus",e)}get numClasses(){return this.type&&this.type!=="relationship"?null:this._get("numClasses")}set numClasses(e){this._set("numClasses",e)}get statistics(){return this.type==="univariate-color-size"&&this.univariateTheme==="above-and-below"?this._get("statistics"):null}set statistics(e){this._set("statistics",e)}get standardDeviationInterval(){const e=this.type;return e&&e!=="relationship"&&e!=="class-breaks-size"&&e!=="class-breaks-color"||this.classificationMethod&&this.classificationMethod!=="standard-deviation"?null:this._get("standardDeviationInterval")}set standardDeviationInterval(e){this._set("standardDeviationInterval",e)}get type(){return this._get("type")}set type(e){let i=e;e==="classed-size"?i="class-breaks-size":e==="classed-color"&&(i="class-breaks-color"),this._set("type",i)}get univariateSymbolStyle(){return this.type==="univariate-color-size"&&this.univariateTheme==="above-and-below"?this._get("univariateSymbolStyle"):null}set univariateSymbolStyle(e){this._set("univariateSymbolStyle",e)}get univariateTheme(){return this.type==="univariate-color-size"?this._get("univariateTheme"):null}set univariateTheme(e){this._set("univariateTheme",e)}clone(){var e;return new Z({classificationMethod:this.classificationMethod,colorRamp:j(this.colorRamp),fadeRatio:j(this.fadeRatio),fields:(e=this.fields)==null?void 0:e.slice(),field1:j(this.field1),field2:j(this.field2),isAutoGenerated:this.isAutoGenerated,focus:this.focus,numClasses:this.numClasses,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,lengthUnit:this.lengthUnit,statistics:this.statistics,standardDeviationInterval:this.standardDeviationInterval,type:this.type,visualVariables:this.visualVariables&&this.visualVariables.map(i=>i.clone()),univariateSymbolStyle:this.univariateSymbolStyle,univariateTheme:this.univariateTheme,flowTheme:this.flowTheme})}};t([s({type:f.apiValues,value:null,json:{type:f.jsonValues,read:f.read,write:f.write,origins:{"web-document":{default:"manual",type:f.jsonValues,read:f.read,write:f.write}}}})],o.prototype,"classificationMethod",null),t([s({types:Ce,json:{write:!0}})],o.prototype,"colorRamp",void 0),t([z("colorRamp")],o.prototype,"readColorRamp",null),t([s({json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],o.prototype,"fadeRatio",void 0),t([s({type:[String],value:null,json:{write:!0}})],o.prototype,"fields",null),t([s({type:w,value:null,json:{write:!0}})],o.prototype,"field1",null),t([s({type:w,value:null,json:{write:!0}})],o.prototype,"field2",null),t([s({type:Qe,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],o.prototype,"flowTheme",null),t([s({type:["HH","HL","LH","LL"],value:null,json:{write:!0}})],o.prototype,"focus",null),t([s({type:Boolean,json:{write:!0,default:!1,origins:{"web-scene":{write:!1}}}})],o.prototype,"isAutoGenerated",void 0),t([s({type:Number,value:null,json:{type:fe,write:!0}})],o.prototype,"numClasses",null),t([s({type:me,json:{type:me,read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],o.prototype,"lengthUnit",void 0),t([s({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],o.prototype,"maxSliderValue",void 0),t([s({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],o.prototype,"minSliderValue",void 0),t([s({type:Object,value:null,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],o.prototype,"statistics",null),t([s({type:[.25,.33,.5,1],value:null,json:{type:[.25,.33,.5,1],write:!0}})],o.prototype,"standardDeviationInterval",null),t([s({type:O.apiValues,value:null,json:{type:O.jsonValues,read:O.read,write:O.write,origins:{"web-scene":{type:de.jsonValues,write:{writer:de.write,overridePolicy:e=>({enabled:e!=="flow"})}}}}})],o.prototype,"type",null),t([s({type:[Je],json:{write:!0}})],o.prototype,"visualVariables",void 0),t([s({type:Ze,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],o.prototype,"univariateSymbolStyle",null),t([s({type:Pe,value:null,json:{write:!0,origins:{"web-scene":{write:!1}}}})],o.prototype,"univariateTheme",null),o=Z=t([h("esri.renderers.support.AuthoringInfo")],o);const Ke=o,H=new d({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap",dotDensity:"dot-density",dictionary:"dictionary",pieChart:"pie-chart"},{ignoreUnknown:!0});let _=class extends c{constructor(i){super(i),this.authoringInfo=null,this.type=null}async getRequiredFields(i){if(!this.collectRequiredFields)return[];const r=new Set;return await this.collectRequiredFields(r,i),Array.from(r).sort()}getSymbol(i,r){}async getSymbolAsync(i,r){}get symbols(){return[]}get arcadeRequired(){return!1}getAttributeHash(){return JSON.stringify(this)}getMeshHash(){return JSON.stringify(this)}};t([s({type:Ke,json:{write:!0}})],_.prototype,"authoringInfo",void 0),t([s({type:H.apiValues,readOnly:!0,json:{type:H.jsonValues,read:!1,write:{writer:H.write,ignoreOrigin:!0,isRequired:!0}}})],_.prototype,"type",void 0),_=t([h("esri.renderers.Renderer")],_);const mt=_;let F=class extends je.ClonableMixin(c){constructor(){super(...arguments),this.showLegend=null,this.title=null}};t([s({type:Boolean,json:{write:!0}})],F.prototype,"showLegend",void 0),t([s({type:String,json:{write:!0}})],F.prototype,"title",void 0),F=t([h("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],F);const ge=F,U=new d({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"});let y=class extends c{constructor(i){super(i),this.index=null,this.type=null,this.field=null,this.valueExpression=null,this.valueExpressionTitle=null,this.legendOptions=null}castField(i){return i==null?i:typeof i=="function"?(S.getLogger(this).error(".field: field must be a string value"),null):$e(i)}get arcadeRequired(){return!!this.valueExpression}clone(){}getAttributeHash(){return`${this.type}-${this.field}-${this.valueExpression}`}};t([s()],y.prototype,"index",void 0),t([s({type:U.apiValues,readOnly:!0,json:{read:U.read,write:{writer:U.write,isRequired:!0}}})],y.prototype,"type",void 0),t([s({type:String,json:{write:!0}})],y.prototype,"field",void 0),t([E("field")],y.prototype,"castField",null),t([s({type:String,json:{write:!0}})],y.prototype,"valueExpression",void 0),t([s({type:String,json:{write:!0}})],y.prototype,"valueExpressionTitle",void 0),t([s({readOnly:!0})],y.prototype,"arcadeRequired",null),t([s({type:ge,json:{write:!0}})],y.prototype,"legendOptions",void 0),y=t([h("esri.renderers.visualVariables.VisualVariable")],y);const D=y;var K;let b=K=class extends D{constructor(e){super(e),this.type="color",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(e){e&&Array.isArray(e)&&(e=e.filter(i=>!!i)).sort((i,r)=>i.value-r.value),this._set("stops",e)}clone(){var e;return new K({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(i=>i.clone()),legendOptions:(e=this.legendOptions)==null?void 0:e.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map(e=>e.value||0)}};t([s({readOnly:!0})],b.prototype,"cache",null),t([s({type:["color"],json:{type:["colorInfo"]}})],b.prototype,"type",void 0),t([s({type:String,json:{write:!0}})],b.prototype,"normalizationField",void 0),t([s({type:[Le],json:{write:!0}})],b.prototype,"stops",null),b=K=t([h("esri.renderers.visualVariables.ColorVariable")],b);const Ve=b;var X;let m=X=class extends c{constructor(e){super(e),this.label=null,this.opacity=null,this.value=null}readOpacity(e,i){return Te(i.transparency)}writeOpacity(e,i,r){i[r]=_e(e)}clone(){return new X({label:this.label,opacity:this.opacity,value:this.value})}};t([s({type:String,json:{write:!0}})],m.prototype,"label",void 0),t([s({type:Number,json:{type:fe,write:{target:"transparency",isRequired:!0}}})],m.prototype,"opacity",void 0),t([z("opacity",["transparency"])],m.prototype,"readOpacity",null),t([re("opacity")],m.prototype,"writeOpacity",null),t([s({type:Number,json:{write:{isRequired:!0}}})],m.prototype,"value",void 0),m=X=t([h("esri.renderers.visualVariables.support.OpacityStop")],m);const Xe=m;var Y;let g=Y=class extends D{constructor(e){super(e),this.type="opacity",this.normalizationField=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}}set stops(e){e&&Array.isArray(e)&&(e=e.filter(i=>!!i)).sort((i,r)=>i.value-r.value),this._set("stops",e)}clone(){var e;return new Y({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(i=>i.clone()),legendOptions:(e=this.legendOptions)==null?void 0:e.clone()})}getAttributeHash(){return`${super.getAttributeHash()}-${this.normalizationField}`}_interpolateData(){return this.stops&&this.stops.map(e=>e.value||0)}};t([s({readOnly:!0})],g.prototype,"cache",null),t([s({type:["opacity"],json:{type:["transparencyInfo"]}})],g.prototype,"type",void 0),t([s({type:String,json:{write:!0}})],g.prototype,"normalizationField",void 0),t([s({type:[Xe],json:{write:!0}})],g.prototype,"stops",null),g=Y=t([h("esri.renderers.visualVariables.OpacityVariable")],g);const Se=g;var ee;let V=ee=class extends D{constructor(e){super(e),this.axis=null,this.type="rotation",this.rotationType="geographic"}get cache(){return{hasExpression:!!this.valueExpression,compiledFunc:null}}clone(){var e;return new ee({axis:this.axis,rotationType:this.rotationType,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:(e=this.legendOptions)==null?void 0:e.clone()})}};t([s({readOnly:!0})],V.prototype,"cache",null),t([s({type:["heading","tilt","roll"],json:{origins:{"web-scene":{default:"heading",write:!0}}}})],V.prototype,"axis",void 0),t([s({type:["rotation"],json:{type:["rotationInfo"]}})],V.prototype,"type",void 0),t([s({type:["geographic","arithmetic"],json:{write:!0,origins:{"web-document":{write:!0,default:"geographic"}}}})],V.prototype,"rotationType",void 0),V=ee=t([h("esri.renderers.visualVariables.RotationVariable")],V);const ze=V;function Ye(e){return be(e)}var te;let v=te=class extends c{constructor(e){super(e),this.label=null,this.size=null,this.value=null,this.useMinValue=null,this.useMaxValue=null}clone(){return new te({label:this.label,size:this.size,value:this.value,useMaxValue:this.useMaxValue,useMinValue:this.useMinValue})}};t([s({type:String,json:{write:!0}})],v.prototype,"label",void 0),t([s({type:Number,cast:be,json:{write:{isRequired:!0}}})],v.prototype,"size",void 0),t([s({type:Number,json:{write:{isRequired:!0}}})],v.prototype,"value",void 0),t([s({type:Boolean,json:{write:!1}})],v.prototype,"useMinValue",void 0),t([s({type:Boolean,json:{write:!1}})],v.prototype,"useMaxValue",void 0),v=te=t([h("esri.renderers.visualVariables.support.SizeStop")],v);const et=v;let q=class extends ge{constructor(){super(...arguments),this.customValues=null}};t([s({type:[Number],json:{write:!0}})],q.prototype,"customValues",void 0),q=t([h("esri.renderers.visualVariables.support.SizeVariableLegendOptions")],q);const tt=q;var ie;const k=new d({width:"width",depth:"depth",height:"height",widthAndDepth:"width-and-depth",all:"all"}),se=new d({unknown:"unknown",inch:"inches",foot:"feet",yard:"yards",mile:"miles","nautical-mile":"nautical-miles",millimeter:"millimeters",centimeter:"centimeters",decimeter:"decimeters",meter:"meters",kilometer:"kilometers"});function ve(e){if(e!=null)return typeof e=="string"||typeof e=="number"?Ye(e):e.type==="size"?$(e)?e:(delete(e={...e}).type,new l(e)):void 0}function we(e,i,r){if(typeof e!="object")return e;const a=new l;return a.read(e,r),a}let l=ie=class extends D{constructor(e){super(e),this.axis=null,this.legendOptions=null,this.normalizationField=null,this.scaleBy=null,this.target=null,this.type="size",this.useSymbolValue=null,this.valueExpression=null,this.valueRepresentation=null,this.valueUnit=null}get cache(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null,isScaleDriven:this.valueExpression!=null&&Be.test(this.valueExpression)}}set index(e){$(this.maxSize)&&(this.maxSize.index=`visualVariables[${e}].maxSize`),$(this.minSize)&&(this.minSize.index=`visualVariables[${e}].minSize`),this._set("index",e)}get inputValueType(){return He(this)}set maxDataValue(e){e&&this.stops&&(S.getLogger(this).warn("cannot set maxDataValue when stops is not null."),e=null),this._set("maxDataValue",e)}set maxSize(e){e&&this.stops&&(S.getLogger(this).warn("cannot set maxSize when stops is not null."),e=null),this._set("maxSize",e)}castMaxSize(e){return ve(e)}readMaxSize(e,i,r){return we(e,i,r)}set minDataValue(e){e&&this.stops&&(S.getLogger(this).warn("cannot set minDataValue when stops is not null."),e=null),this._set("minDataValue",e)}set minSize(e){e&&this.stops&&(S.getLogger(this).warn("cannot set minSize when stops is not null."),e=null),this._set("minSize",e)}castMinSize(e){return ve(e)}readMinSize(e,i,r){return we(e,i,r)}get arcadeRequired(){return!!this.valueExpression||this.minSize!=null&&typeof this.minSize=="object"&&this.minSize.arcadeRequired||this.maxSize!=null&&typeof this.maxSize=="object"&&this.maxSize.arcadeRequired}set stops(e){this.minDataValue==null&&this.maxDataValue==null&&this.minSize==null&&this.maxSize==null?e&&Array.isArray(e)&&(e=e.filter(i=>!!i)).sort((i,r)=>i.value-r.value):e&&(S.getLogger(this).warn("cannot set stops when one of minDataValue, maxDataValue, minSize or maxSize is not null."),e=null),this._set("stops",e)}get transformationType(){return Ue(this,this.inputValueType)}readValueExpression(e,i){return e||i.expression&&"$view.scale"}writeValueExpressionWebScene(e,i,r,a){if(e==="$view.scale"){if(a!=null&&a.messages){const n=this.index,u=typeof n=="string"?n:`visualVariables[${n}]`;a.messages.push(new Fe("property:unsupported",this.type+"VisualVariable.valueExpression = '$view.scale' is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:u+".valueExpression",context:a}))}}else i[r]=e}readValueUnit(e){return e?se.read(e):null}clone(){var e,i;return new ie({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:$(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:$(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:(e=this.stops)==null?void 0:e.map(r=>r.clone()),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:(i=this.legendOptions)==null?void 0:i.clone()})}flipSizes(){if(this.transformationType===ue.ClampedLinear){const{minSize:e,maxSize:i}=this;return this.minSize=i,this.maxSize=e,this}if(this.transformationType===ue.Stops){const e=this.stops;if(!e)return this;const i=e.map(a=>a.size).reverse(),r=e.length;for(let a=0;a<r;a++)e[a].size=i[a];return this}return this}getAttributeHash(){return`${super.getAttributeHash()}-${this.target}-${this.normalizationField}`}_interpolateData(){var e;return(e=this.stops)==null?void 0:e.map(i=>i.value||0)}};t([s({readOnly:!0})],l.prototype,"cache",null),t([s({type:k.apiValues,json:{type:k.jsonValues,origins:{"web-map":{read:!1}},read:k.read,write:k.write}})],l.prototype,"axis",void 0),t([s()],l.prototype,"index",null),t([s({type:String,readOnly:!0})],l.prototype,"inputValueType",null),t([s({type:tt,json:{write:!0}})],l.prototype,"legendOptions",void 0),t([s({type:Number,value:null,json:{write:!0}})],l.prototype,"maxDataValue",null),t([s({type:Number,value:null,json:{write:!0}})],l.prototype,"maxSize",null),t([E("maxSize")],l.prototype,"castMaxSize",null),t([z("maxSize")],l.prototype,"readMaxSize",null),t([s({type:Number,value:null,json:{write:!0}})],l.prototype,"minDataValue",null),t([s({type:Number,value:null,json:{write:!0}})],l.prototype,"minSize",null),t([E("minSize")],l.prototype,"castMinSize",null),t([z("minSize")],l.prototype,"readMinSize",null),t([s({type:String,json:{write:!0}})],l.prototype,"normalizationField",void 0),t([s({readOnly:!0})],l.prototype,"arcadeRequired",null),t([s({type:String})],l.prototype,"scaleBy",void 0),t([s({type:[et],value:null,json:{write:!0}})],l.prototype,"stops",null),t([s({type:["outline"],json:{write:!0}})],l.prototype,"target",void 0),t([s({type:String,readOnly:!0})],l.prototype,"transformationType",null),t([s({type:["size"],json:{type:["sizeInfo"]}})],l.prototype,"type",void 0),t([s({type:Boolean,json:{write:!0,origins:{"web-map":{read:!1}}}})],l.prototype,"useSymbolValue",void 0),t([s({type:String,json:{write:!0}})],l.prototype,"valueExpression",void 0),t([z("valueExpression",["valueExpression","expression"])],l.prototype,"readValueExpression",null),t([re("web-scene","valueExpression")],l.prototype,"writeValueExpressionWebScene",null),t([s({type:["radius","diameter","area","width","distance"],json:{write:!0}})],l.prototype,"valueRepresentation",void 0),t([s({type:se.apiValues,json:{write:se.write,origins:{"web-map":{read:!1},"web-scene":{write:!0},"portal-item":{write:!0}}}})],l.prototype,"valueUnit",void 0),t([z("valueUnit")],l.prototype,"readValueUnit",null),l=ie=t([h("esri.renderers.visualVariables.SizeVariable")],l);const xe=l,it={color:Ve,size:xe,opacity:Se,rotation:ze},st=new d({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),rt=/^\[([^\]]+)\]$/i;let A=class extends Ee{constructor(){super(...arguments),this.colorVariables=null,this.opacityVariables=null,this.rotationVariables=null,this.sizeVariables=null}set visualVariables(i){if(this._resetVariables(),i=i==null?void 0:i.filter(r=>!!r),i==null?void 0:i.length){for(const r of i)switch(r.type){case"color":this.colorVariables.push(r);break;case"opacity":this.opacityVariables.push(r);break;case"rotation":this.rotationVariables.push(r);break;case"size":this.sizeVariables.push(r)}this.sizeVariables.length&&this.sizeVariables.some(r=>!!r.target)&&i.sort((r,a)=>{let n=null;return n=r.target===a.target?0:r.target?1:-1,n});for(let r=0;r<i.length;r++)i[r].index=r;this._set("visualVariables",i)}else this._set("visualVariables",i)}readVariables(i,r,a){const{rotationExpression:n,rotationType:u}=r,C=n==null?void 0:n.match(rt),ae=C==null?void 0:C[1];if(ae&&(i||(i=[]),i.push({type:"rotationInfo",rotationType:u,field:ae})),i)return i.map(L=>{const B=st.read(L.type),le=it[B];le||(S.getLogger(this).warn(`Unknown variable type: ${B}`),a!=null&&a.messages&&a.messages.push(new De("visual-variable:unsupported",`visualVariable of type '${B}' is not supported`,{definition:L,context:a})));const ne=new le;return ne.read(L,a),ne})}writeVariables(i,r){const a=[];for(const n of i){const u=n.toJSON(r);u&&a.push(u)}return a}_resetVariables(){this.colorVariables=[],this.opacityVariables=[],this.rotationVariables=[],this.sizeVariables=[]}};t([s()],A.prototype,"visualVariables",null),A=t([h("esri.renderers.visualVariables.VisualVariableFactory")],A);const at=A,lt={base:D,key:"type",typeMap:{opacity:Se,color:Ve,rotation:ze,size:xe}},bt=e=>{let i=class extends e{constructor(){super(...arguments),this._vvFactory=new at}set visualVariables(r){this._vvFactory.visualVariables=r,this._set("visualVariables",this._vvFactory.visualVariables)}readVisualVariables(r,a,n){return this._vvFactory.readVariables(r,a,n)}writeVisualVariables(r,a,n,u){a[n]=this._vvFactory.writeVariables(r,u)}get arcadeRequiredForVisualVariables(){var r;return((r=this.visualVariables)==null?void 0:r.some(({arcadeRequired:a})=>a))??!1}hasVisualVariables(r,a){return r?this.getVisualVariablesForType(r,a).length>0:this.getVisualVariablesForType("size",a).length>0||this.getVisualVariablesForType("color",a).length>0||this.getVisualVariablesForType("opacity",a).length>0||this.getVisualVariablesForType("rotation",a).length>0}getVisualVariablesForType(r,a){var n;return((n=this.visualVariables)==null?void 0:n.filter(u=>u.type===r&&(typeof a=="string"?u.target===a:a!==!1||!u.target)))??[]}async collectVVRequiredFields(r,a){let n=[];this.visualVariables&&(n=n.concat(this.visualVariables));for(const u of n)u&&(u.field&&G(r,a,u.field),u.normalizationField&&G(r,a,u.normalizationField),u.valueExpression&&(nt(u.valueExpression,r,a)||await Ie(r,a,u.valueExpression)))}};return t([s({types:[lt],value:null,json:{write:!0}})],i.prototype,"visualVariables",null),t([z("visualVariables",["visualVariables","rotationType","rotationExpression"])],i.prototype,"readVisualVariables",null),t([re("visualVariables")],i.prototype,"writeVisualVariables",null),i=t([h("esri.renderers.mixins.VisualVariablesMixin")],i),i};function nt(e,i,r){const a=Re(e);return a!=null&&(G(i,r,a),!0)}const ot={types:ke,json:{write:{writer:N},origins:{"web-scene":{types:oe,write:{writer:N},read:{reader:Me({types:oe})}}}}},gt=Oe({json:{origins:{"web-scene":{write:{isRequired:!0}}}}},ot),Vt={types:{base:Ae,key:"type",typeMap:{"simple-fill":I.typeMap["simple-fill"],"picture-fill":I.typeMap["picture-fill"],"polygon-3d":I.typeMap["polygon-3d"],cim:I.typeMap.cim}},json:{write:{writer:N},origins:{"web-scene":{type:qe,write:{writer:N}}}}},St={cast:e=>e==null||typeof e=="string"||typeof e=="number"?e:`${e}`,json:{type:String,write:{writer:(e,i)=>{i.value=e==null?void 0:e.toString()}}}};export{St as a,xe as b,Se as c,D as d,ze as e,Ke as j,gt as m,Vt as n,mt as p,et as u,bt as v,ot as y};
