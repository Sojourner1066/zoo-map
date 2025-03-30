import{x as a,P as n,bn as d,o as u,w as l}from"./index-DMJZMQ0x.js";import{d as g}from"./FeatureLayerView2D-CUyimw-t.js";import"./Container-Bh06uCf3.js";import"./parser-3OyiJfZK.js";import"./featureConversionUtils-D8yFuqo3.js";import"./OptimizedFeature-DeEJNMu7.js";import"./memoryEstimations-B8m6o7eO.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./FeatureFilter-CwyJNLH8.js";import"./labelingInfo-7IhZ8p_1.js";import"./SimpleRenderer-CRWkJJa5.js";import"./commonProperties-ifikjoA6.js";import"./colorRamps-CS8xI5k1.js";import"./ColorStop-CF8i8cTu.js";import"./visualVariableUtils-jmHDcGNP.js";import"./lengthUtils-BusC8tWV.js";import"./jsonUtils-D8FxNEwZ.js";import"./defaults-BFpwDe_J.js";import"./defaultsJSON-GKolV7NZ.js";import"./UniqueValueRenderer-TnW73j2a.js";import"./defaultCIMValues-Ba1GAjpi.js";import"./enums-BQDXKJnw.js";import"./RendererLegendOptions-DVM_wQxC.js";import"./styleUtils-C_VSABwk.js";import"./NormalizationBinParametersMixin-DHLxECpy.js";import"./labelUtils-CMCFrV75.js";import"./timeSupport-B5rOZjIQ.js";import"./FeatureSet-B-xG4V5t.js";import"./AttributeBinsFeatureSet-Dwq9MoTZ.js";import"./AttributeBinsQuery-BvFptOXP.js";import"./queryUtils-CtYAzWc4.js";import"./json-Wa8cmqdu.js";import"./FixedIntervalBinParameters-B__y8Nms.js";import"./LayerView-DygVhOHf.js";import"./layerViewUtils-B-qn-jP-.js";import"./TechniqueInstance-Ymv5fguT.js";import"./UpdateTracking2D-JfqaDf-2.js";import"./BidiEngine-QXap_35O.js";import"./GeometryUtils-BtCuRjDU.js";import"./utils-Bke9CeJG.js";import"./rasterizingUtils-B9hCnBfL.js";import"./floatRGBA-CwQrNioR.js";import"./Rect-CUzevAry.js";import"./Utils-cjHDlC5Y.js";import"./VertexElementDescriptor-BLyltQyJ.js";import"./FramebufferObject-D6e-kZmh.js";import"./VertexArrayObject-B8nRYPiD.js";import"./TileContainer-CWRK1u9L.js";import"./WGLContainer-_JIef3z8.js";import"./ProgramTemplate-B2lqho8a.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-DBsc2ck4.js";import"./config-BOD8--da.js";import"./earcut-D9gy186-.js";import"./FeatureCommandQueue-0MEGHusE.js";import"./TechniqueType-uMFRS8dR.js";import"./GraphShaderModule-DiLA_NWN.js";import"./ShaderBuilder-DeH8eoiz.js";import"./BindType-BBwFZqyN.js";import"./streamLayerUtils-CKwt2uXH.js";import"./QueueProcessor-CeLZ8kmL.js";import"./CircularArray-CujHzHWW.js";import"./OrderByInfo-DHkCjBn0.js";import"./heatmapUtils-MapJhD5c.js";import"./vec42-CB2_cyGY.js";import"./vec4f64-o2zAXfmz.js";import"./SDFHelper-BgztRqb-.js";import"./constants-B4mRqufT.js";import"./parquet-DEjgGdXs.js";import"./displayFilterUtils-CVfoCFYk.js";import"./FeatureEffect-B1IZVg3c.js";import"./jsonUtils-DODzjMeu.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./popupUtils-BE8ssHtS.js";import"./RefreshableLayerView-XEET5XvE.js";let i=class extends g{initialize(){this.addHandles([a(()=>this.view.scale,()=>this._update(),n)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredPromise!=null,p=!this._workerProxy,m=this.dataUpdating,e=t&&(r||o||p||m);return d("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${e}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${m}
`),e}};i=u([l("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const Gi=i;export{Gi as default};
