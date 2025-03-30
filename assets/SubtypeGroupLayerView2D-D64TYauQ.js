import{x as a,P as n,bn as d,o as u,w as l}from"./index-BCOvYjsd.js";import{d as g}from"./FeatureLayerView2D-CB-Mj7aj.js";import"./Container-DHvNfQYc.js";import"./parser-DAsQTtHB.js";import"./featureConversionUtils-BqGgJklF.js";import"./OptimizedFeature-Cmc4IS8F.js";import"./memoryEstimations-cFrur3i9.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureFilter-B_Ic7umv.js";import"./labelingInfo-BKbU-5K2.js";import"./SimpleRenderer-QG4WFGL4.js";import"./commonProperties-Cjoc1SFO.js";import"./colorRamps-B5wCt1L1.js";import"./ColorStop-CjHsqQ4X.js";import"./visualVariableUtils-D3neASu_.js";import"./lengthUtils-CDEkLj2v.js";import"./jsonUtils-D0uTwTFl.js";import"./defaults-BaoV-fz0.js";import"./defaultsJSON-GKolV7NZ.js";import"./UniqueValueRenderer-BF3Ti4K9.js";import"./defaultCIMValues-Z8gODNqJ.js";import"./enums-BQDXKJnw.js";import"./RendererLegendOptions-CzPIuudE.js";import"./styleUtils-2G0NBrba.js";import"./NormalizationBinParametersMixin-CjJMWKZs.js";import"./labelUtils-TH8oGZfH.js";import"./timeSupport-CxGvIUMY.js";import"./FeatureSet-Cu8erNuw.js";import"./AttributeBinsFeatureSet-YRnx344E.js";import"./AttributeBinsQuery-CtQellzI.js";import"./queryUtils-Ds9CE_G1.js";import"./json-Wa8cmqdu.js";import"./FixedIntervalBinParameters-LwWUn2bp.js";import"./LayerView-Bh1bNDvF.js";import"./layerViewUtils-CMuPTx9a.js";import"./TechniqueInstance-CNQ6fZml.js";import"./UpdateTracking2D-Bf8IBHcl.js";import"./BidiEngine-QXap_35O.js";import"./GeometryUtils-CF9zyGQA.js";import"./utils-BBgV4jpp.js";import"./rasterizingUtils-Cd-Fnb0q.js";import"./floatRGBA-BBbpw5x1.js";import"./Rect-CUzevAry.js";import"./Utils-DdauoA8s.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./FramebufferObject-CHat1_4B.js";import"./VertexArrayObject-DHDfdKzA.js";import"./TileContainer-Cb1lUW9E.js";import"./WGLContainer-CCZO0g_A.js";import"./ProgramTemplate-B6BR18rz.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-DBsc2ck4.js";import"./config-BOD8--da.js";import"./earcut-D9gy186-.js";import"./FeatureCommandQueue-D1NCt0Vn.js";import"./TechniqueType-uMFRS8dR.js";import"./GraphShaderModule-OVCL3yhU.js";import"./ShaderBuilder-DPUaOKaz.js";import"./BindType-BBwFZqyN.js";import"./streamLayerUtils-CKwt2uXH.js";import"./QueueProcessor-Dwp39X4g.js";import"./CircularArray-CujHzHWW.js";import"./OrderByInfo-DuLW7zDP.js";import"./heatmapUtils-Dzf0MiEZ.js";import"./vec42-BnNr_Lzs.js";import"./vec4f64-o2zAXfmz.js";import"./SDFHelper-iTY9Vw69.js";import"./constants-B4mRqufT.js";import"./parquet-DVhnBTOt.js";import"./displayFilterUtils-BEQXfej1.js";import"./FeatureEffect-Bqiw1BNS.js";import"./jsonUtils--jgndNN5.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./popupUtils-oqbE8F_z.js";import"./RefreshableLayerView-nU9-K61T.js";let i=class extends g{initialize(){this.addHandles([a(()=>this.view.scale,()=>this._update(),n)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredPromise!=null,p=!this._workerProxy,m=this.dataUpdating,e=t&&(r||o||p||m);return d("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),e}};i=u([l("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const Gi=i;export{Gi as default};
