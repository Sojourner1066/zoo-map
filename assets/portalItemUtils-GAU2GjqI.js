import{a8 as l,a9 as f,aa as E,ab as d}from"./index-BCOvYjsd.js";async function p(t){const r=t.spatialReference;if(r.isWGS84)return t.clone();if(r.isWebMercator)return l(t);const e=f.WGS84;return await d(r,e),E(t,e)}function y(t,r){if(!c(t,r)){const e=t.typeKeywords;e?e.push(r):t.typeKeywords=[r]}}function c(t,r){var e;return!!((e=t.typeKeywords)!=null&&e.includes(r))}function R(t){return c(t,A.HOSTED_SERVICE)}function S(t,r){const e=t.typeKeywords;if(e){const n=e.indexOf(r);n>-1&&e.splice(n,1)}}function T(t,r,e){e?y(t,r):S(t,r)}async function _(t){const r=t.clone().normalize();let e;if(r.length>1)for(const n of r)e?n.width>e.width&&(e=n):e=n;else e=r[0];return p(e)}const A={GROUP_LAYER_MAP:"Map",HOSTED_SERVICE:"Hosted Service",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",ORIENTED_IMAGERY_LAYER:"OrientedImageryLayer",SINGLE_LAYER:"Singlelayer",SUBTYPE_GROUP_LAYER:"SubtypeGroupLayer",SUBTYPE_GROUP_TABLE:"SubtypeGroupTable",TABLE:"Table",TILED_IMAGERY:"Tiled Imagery"};function L(t){var o;const{portal:r,isOrgItem:e,itemControl:n}=t,i=(o=r.user)==null?void 0:o.privileges;let s=!i||i.includes("features:user:edit"),a=!!e&&!!(i!=null&&i.includes("features:user:fullEdit"));const u=n==="update"||n==="admin";return u?a=s=!0:a&&(s=!0),{features:{edit:s,fullEdit:a},content:{updateItem:u}}}export{A as E,S as a,R as c,L as f,y as i,_ as l,c as s,T as u};
