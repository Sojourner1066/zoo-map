import{a0 as P,a4 as h,s as c}from"./index-BCOvYjsd.js";import{i as d}from"./originUtils-D69mHv66.js";import{o as x}from"./jsonContext-DwX1pODn.js";import{i as N,E as S}from"./portalItemUtils-GAU2GjqI.js";import{t as b}from"./saveUtils-u2Q-v0fg.js";function g(e,a,r){const t=r(e);if(!t.isValid)throw new c(`${a}:invalid-parameters`,t.errorMessage,{layer:e})}async function y(e){const{layer:a,errorNamePrefix:r,validateLayer:t}=e;await a.load(),g(a,r,t)}function f(e,a){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${a}`}function w(e){const{item:a,errorNamePrefix:r,layer:t,validateItem:i}=e;if(O(e),i){const s=i(a);if(!s.isValid)throw new c(`${r}:invalid-parameters`,s.errorMessage,{layer:t})}}function O(e){const{item:a,itemType:r,additionalItemType:t,errorNamePrefix:i,layer:s}=e,n=[r];if(t&&n.push(t),!n.includes(a.type)){const p=n.map(o=>`'${o}'`).join(", ");throw new c(`${i}:portal-item-wrong-type`,`Portal item type should be one of: "${p}"`,{item:a,layer:s})}}function E(e){const{layer:a,errorNamePrefix:r}=e,{portalItem:t}=a;if(!t)throw new c(`${r}:portal-item-not-set`,f(a,"requires the portalItem property to be set"));if(!t.loaded)throw new c(`${r}:portal-item-not-loaded`,f(a,"cannot be saved to a portal item that does not exist or is inaccessible"));w({...e,item:t})}function J(e){const{newItem:a,itemType:r}=e;let t=P.from(a);return t.id&&(t=t.clone(),t.id=null),t.type??(t.type=r),t.portal??(t.portal=h.getDefault()),w({...e,item:t}),t}function I(e){return x(e,"portal-item")}async function $(e,a,r){var i;"beforeSave"in e&&typeof e.beforeSave=="function"&&await e.beforeSave();const t=e.write({},a);return await Promise.all(((i=a.resources)==null?void 0:i.pendingOperations)??[]),b(a,{errorName:"layer-write:unsupported"},r),t}function v(e){N(e,S.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter((a,r,t)=>t.indexOf(a)===r))}async function C(e,a,r){const t=e.portal;await t.signIn(),await t.user.addItem({item:e,data:a,folder:r==null?void 0:r.folder})}async function M(e,a){const{layer:r,createItemData:t,createJSONContext:i,setItemProperties:s,saveResources:n,supplementalUnsupportedErrors:p}=e;await y(e),E(e);const o=r.portalItem,l=i?i(o):I(o),u=await $(r,l,{...a,supplementalUnsupportedErrors:p}),m=await t({layer:r,layerJSON:u},o);return await(s==null?void 0:s(r,o,m)),v(o),await o.update({data:m}),d(l),await(n==null?void 0:n(o,l)),o}async function R(e,a){const{layer:r,createItemData:t,createJSONContext:i,setItemProperties:s,saveResources:n,supplementalUnsupportedErrors:p}=e;await y(e);const o=J(e),l=i?i(o):I(o),u=await $(r,l,{...a,supplementalUnsupportedErrors:p}),m=await t({layer:r,layerJSON:u},o);return await s(r,o,m),v(o),await C(o,m,a),r.portalItem=o,d(l),await(n==null?void 0:n(o,l)),o}export{R as $,v as I,M as P,J as d,E as f,f as m,g as p,C as v,$ as w};
