import{s as n,c3 as c,fr as u,fs as p,a6 as m}from"./index-BCOvYjsd.js";async function $(i,s,o,r){if(!s)throw new n("post:missing-guid","guid for version is missing");const t=c(i),e=o.toJSON(),a=u(t.query,{query:p({...e,f:"json"}),...r,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const d=`${t.path}/versions/${s}/deleteForwardEdits`,{data:f}=await m(d,a);return f}export{$ as deleteForwardEdits};
