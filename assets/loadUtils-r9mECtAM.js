import{t as m,i as p}from"./fetchService-CaJf49Fx.js";import{s as b}from"./associatedFeatureServiceUtils-yu2GJ4nc.js";class g{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const r=this._serviceMetadatas.get(e);if(r)return r;const s=await m(e,a);return this._serviceMetadatas.set(e,s),s}async fetchItemData(e){const{id:a}=e;if(!a)return null;const{_itemDatas:r}=this;if(r.has(a))return r.get(a);const s=await e.fetchData();return r.set(a,s),s}async fetchCustomParameters(e,a){const r=await this.fetchItemData(e);return r&&typeof r=="object"&&(a?a(r):r.customParameters)||null}}function c(t){const e={id:t.id,name:t.name},a=p(t.type);return a!=="FeatureLayer"&&(e.layerType=a),e}async function L(t,e,a){var r,s,l;if((t==null?void 0:t.layers)==null||(t==null?void 0:t.tables)==null){const u=await a.fetchServiceMetadata(e,{customParameters:(r=o(t))==null?void 0:r.customParameters});(t=t||{}).layers=t.layers||((s=u==null?void 0:u.layers)==null?void 0:s.map(c)),t.tables=t.tables||((l=u==null?void 0:u.tables)==null?void 0:l.map(c))}return t}function o(t){if(!t)return null;const{layers:e,tables:a}=t;return e!=null&&e.length?e[0]:a!=null&&a.length?a[0]:null}function w(t,e){return e==null?null:[...t.layers||[],...t.tables||[]].find(a=>a.id===e)}function S(t,e){return[...t.layers||[],...t.tables||[]].filter(({layerType:a})=>a?e.includes(a):e.includes("ArcGISFeatureLayer"))}function I(t){var e,a;return(((e=t==null?void 0:t.layers)==null?void 0:e.length)??0)+(((a=t==null?void 0:t.tables)==null?void 0:a.length)??0)}function v(t){switch(t){case"catalog":return["CatalogLayer"];case"feature":return["ArcGISFeatureLayer"];case"oriented-imagery":return["OrientedImageryLayer"];case"subtype-group":return["SubtypeGroupLayer","SubtypeGroupTable"]}return null}function M(t){switch(t){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":case"SubtypeGroupTable":return"SubtypeGroupLayer"}return"FeatureLayer"}async function P(t,e,a){var l,u,y,f;if(!(t!=null&&t.url))return e??{};if(e??(e={}),!e.layers){const n=await a.fetchServiceMetadata(t.url);e.layers=(l=n.layers)==null?void 0:l.map(c)}const{serverUrl:r,portalItem:s}=await b(t.url,{sceneLayerItem:t,customParameters:(u=o(e))==null?void 0:u.customParameters}).catch(()=>({serverUrl:null,portalItem:null}));if(r==null)return e.tables=[],e;if(!e.tables&&s){const n=await s.fetchData().catch(()=>null);if(n!=null&&n.tables)e.tables=n.tables.map(c);else{const i=await a.fetchServiceMetadata(r,{customParameters:(y=o(n))==null?void 0:y.customParameters}).catch(()=>null);e.tables=(f=i==null?void 0:i.tables)==null?void 0:f.map(c)}}if(e.tables)for(const n of e.tables)n.url=`${r}/${n.id}`;return e}export{L as a,v as c,g as e,M as i,o as l,S as n,P as o,w as s,c as t,I as u};
