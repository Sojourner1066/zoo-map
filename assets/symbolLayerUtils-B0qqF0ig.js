const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/objectResourceUtils-ClppfU-Y.js","assets/index-BCOvYjsd.js","assets/index-CrYBktwj.css","assets/devEnvironmentUtils-CnNDiFMM.js","assets/mat3f64-q3fE-ZOt.js","assets/mat4f64-Dk4dwAN8.js","assets/Geometry-D4aVS-cR.js","assets/renderState-MevOroNg.js","assets/basicInterfaces-CZwQPxTp.js","assets/ShaderOutput-DnYY5J1_.js","assets/BindType-BBwFZqyN.js","assets/glsl-BH37Aalp.js","assets/VertexAttribute-Cq4MnHjR.js","assets/vec42-BnNr_Lzs.js","assets/vec4f64-o2zAXfmz.js","assets/lengthUtils-CDEkLj2v.js","assets/boundedPlane-BXohhyj2.js","assets/sphere-BQ5ZB9Re.js","assets/plane-x80nX-sS.js","assets/quatf64-aQ5IuZRd.js","assets/lineSegment-2xl08-9r.js","assets/orientedBoundingBox-_eqfxZUw.js","assets/quat-MYA8xVX1.js","assets/spatialReferenceEllipsoidUtils-BYsBZJyV.js","assets/computeTranslationToOriginAndRotation-BveyOUsd.js","assets/requestImageUtils-Bk8YZVG4.js","assets/TextureFormat-1mYWTFa-.js","assets/InterleavedLayout-C00mqD_x.js","assets/BufferView-D0KxYgAz.js","assets/types-D0PSWh4d.js","assets/Indices-CfCU2dWR.js","assets/triangle-4kW5jU3O.js","assets/vec3-CMpiTgOg.js","assets/vec4-_4-I52wh.js","assets/indexUtils-DToMy3R_.js","assets/resourceUtils-819wUiUV.js","assets/memoryEstimations-cFrur3i9.js","assets/NestedMap-GuqgquCN.js","assets/DefaultMaterial-I7Nq4agw.js","assets/NormalAttribute.glsl-gdjlGR8E.js","assets/doublePrecisionUtils-B0owpBza.js","assets/ShaderBuilder-DPUaOKaz.js"])))=>i.map(i=>d[i]);
import{s,_ as v,fm as l,dy as f,cT as y,fn as b,a6 as w}from"./index-BCOvYjsd.js";import{e as _}from"./LRUCache-DzNwX_CU.js";import"./MemCache-BbdoaGmm.js";let u=m();function m(){return new _(50)}function x(){u=m()}async function B(e,r){var i,t;if((i=e.resource)!=null&&i.href)return g(e.resource.href).then(n=>[n.width,n.height]);if((t=e.resource)!=null&&t.primitive)return r!=null?[r,r]:[256,256];throw new s("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function g(e){return w(e,{responseType:"image"}).then(r=>r.data)}async function R(e,r=null){var t,n;if(!e.isPrimitive){const o=(t=e.resource)==null?void 0:t.href;if(!o)throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const a=u.get(o);if(a!==void 0)return a;const{fetch:h}=await v(()=>import("./objectResourceUtils-ClppfU-Y.js").then(p=>p.o),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41])),d=await h(o,{disableTextures:!0,spherical:!0,doublePrecisionRequiresObfuscation:!0}),c=l(d.referenceBoundingBox,f());return u.put(o,c),c}if(!((n=e.resource)!=null&&n.primitive))throw new s("symbol:invalid-resource","The symbol does not have a valid resource");const i=y(b(e.resource.primitive));if(r!=null)for(let o=0;o<i.length;o++)i[o]*=r;return l(i,f())}export{x as clearBoundingBoxCache,B as computeIconLayerResourceSize,R as computeObjectLayerResourceSize};
