import{j as p,dz as e}from"./index-BK4NQ6A4.js";import{n as m}from"./MeshLocalVertexSpace-Bvcok8qz.js";import{B as n}from"./vertexSpaceConversion-9caaqkLM.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4f64-Dk4dwAN8.js";import"./spatialReferenceEllipsoidUtils-CEdUz_W1.js";import"./computeTranslationToOriginAndRotation-9BJ1LK7n.js";import"./projectPointToVector-B1FL3Eu0.js";import"./meshVertexSpaceUtils-BjNX8xzr.js";import"./vec3-CNYyWdbA.js";import"./BufferView-bhH0--6P.js";import"./vec42-gX_7tK6K.js";import"./vec4-CmvYmRek.js";function g(t,i){const o=n(t,m.absolute);if(!o)return null;let r=o.position;return p(t.spatialReference,i)||(r=new Float64Array(o.position.length),e(o.position,t.spatialReference,0,r,i,0))?r:null}export{g as projectMeshVertexPositions};
