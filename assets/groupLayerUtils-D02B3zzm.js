import{P as l,$ as y}from"./utils-yo73Ohhi.js";import{o as f}from"./jsonContext-DwX1pODn.js";import{a as v,E as s,i as d,s as I}from"./portalItemUtils-GAU2GjqI.js";import{p as i}from"./resourceUtils-Dh4HaI94.js";import"./index-BCOvYjsd.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./saveUtils-u2Q-v0fg.js";import"./resourceUtils-CQCgbrdE.js";const n="Group Layer",g="group-layer-save",P="group-layer-save-as",o=s.GROUP_LAYER_MAP;function c(e){return{isValid:e.type==="group",errorMessage:"Layer.type should be 'group'"}}function A(e){return{isValid:I(e,o),errorMessage:`Layer.portalItem.typeKeywords should have '${o}'`}}function u(e,r){return{...f(e,"web-map",!0),initiator:r}}function m(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function R(e,r){r.title||(r.title=e.title),v(r,s.METADATA),d(r,o)}async function D(e,r){return l({layer:e,itemType:n,validateLayer:c,validateItem:A,createJSONContext:t=>u(t,e),createItemData:m,errorNamePrefix:g,saveResources:async(t,a)=>(e.sourceIsPortalItem||await t.removeAllResources().catch(()=>{}),i(e.resourceReferences,a))},r)}async function E(e,r,t){return y({layer:e,itemType:n,validateLayer:c,createJSONContext:a=>u(a,e),createItemData:m,errorNamePrefix:P,newItem:r,setItemProperties:R,saveResources:(a,p)=>i(e.resourceReferences,p)},t)}export{D as save,E as saveAs};
