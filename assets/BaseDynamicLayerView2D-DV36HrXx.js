import{k as p,n as s,o as e,v as a,w as m}from"./index-BCOvYjsd.js";import{r as n}from"./BitmapContainer-DhEno5xg.js";import{S as h,y as d}from"./LayerView-Bh1bNDvF.js";import{_ as y}from"./ExportStrategy-ByUZekpP.js";import{i as c}from"./RefreshableLayerView-nU9-K61T.js";import"./WGLContainer-CCZO0g_A.js";import"./Utils-DdauoA8s.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./ProgramTemplate-B6BR18rz.js";import"./VertexArrayObject-DHDfdKzA.js";import"./memoryEstimations-cFrur3i9.js";import"./vec3f32-nZdmKIgz.js";import"./Container-DHvNfQYc.js";import"./parser-DAsQTtHB.js";import"./StyleDefinition-DBsc2ck4.js";import"./enums-BQDXKJnw.js";import"./config-BOD8--da.js";import"./earcut-D9gy186-.js";import"./featureConversionUtils-BqGgJklF.js";import"./OptimizedFeature-Cmc4IS8F.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./BitmapTechnique-DEyi_kDq.js";import"./GraphShaderModule-OVCL3yhU.js";import"./FramebufferObject-CHat1_4B.js";import"./ShaderBuilder-DPUaOKaz.js";import"./BindType-BBwFZqyN.js";import"./TechniqueType-uMFRS8dR.js";import"./layerViewUtils-CMuPTx9a.js";let t=class extends c(h(d)){update(r){this._strategy.update(r).catch(i=>{p(i)||s.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new n,this.container.addChild(this._bitmapContainer),this._strategy=new y({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(r,i,o){return this.layer.fetchImageBitmap(r,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};e([a()],t.prototype,"_strategy",void 0),e([a()],t.prototype,"updating",void 0),t=e([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const J=t;export{J as default};
