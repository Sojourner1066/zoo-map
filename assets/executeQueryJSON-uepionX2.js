import{c3 as i,c4 as s}from"./index-BCOvYjsd.js";import{c as e}from"./query-DYVrGv8x.js";import{d as m}from"./FeatureSet-Cu8erNuw.js";async function y(r,o,t){const a=await p(r,o,t);return m.fromJSON(a)}async function p(r,o,t){const a=i(r),c={...t},n=s.from(o),{data:f}=await e(a,n,n.sourceSpatialReference,c);return f}export{p as a,y as s};
