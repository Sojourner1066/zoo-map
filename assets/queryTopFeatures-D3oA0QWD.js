import{I as m,dj as p,a6 as F,bC as f,dG as E,f5 as a}from"./index-BCOvYjsd.js";import{t as j}from"./query-DYVrGv8x.js";import{t as x}from"./queryZScale-CGIhgTZC.js";const c="Layer does not support extent calculation.";function O(o,e){var s,y;const n=o.geometry,t=o.toJSON(),r=t;if(n!=null&&(r.geometry=JSON.stringify(n),r.geometryType=E(n),r.inSR=a(n.spatialReference)),(s=t.topFilter)!=null&&s.groupByFields&&(r.topFilter.groupByFields=t.topFilter.groupByFields.join(",")),(y=t.topFilter)!=null&&y.orderByFields&&(r.topFilter.orderByFields=t.topFilter.orderByFields.join(",")),t.topFilter&&(r.topFilter=JSON.stringify(r.topFilter)),t.objectIds&&(r.objectIds=t.objectIds.join(",")),t.orderByFields&&(r.orderByFields=t.orderByFields.join(",")),t.outFields&&!(e!=null&&e.returnCountOnly||e!=null&&e.returnExtentOnly||e!=null&&e.returnIdsOnly)?t.outFields.includes("*")?r.outFields="*":r.outFields=t.outFields.join(","):delete r.outFields,t.outSR?r.outSR=a(t.outSR):n&&t.returnGeometry&&(r.outSR=r.inSR),t.returnGeometry&&delete t.returnGeometry,t.timeExtent){const i=t.timeExtent,{start:u,end:l}=i;u==null&&l==null||(r.time=u===l?u:`${u??"null"},${l??"null"}`),delete t.timeExtent}return r}async function I(o,e,n,t){const r=await d(o,e,"json",t);return x(e,n,r.data),r}async function R(o,e,n){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:d(o,e,"json",n,{returnIdsOnly:!0})}async function h(o,e,n){return e.timeExtent!=null&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:d(o,e,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then(t=>{const r=t.data;if(r.hasOwnProperty("extent"))return t;if(r.features)throw new Error(c);if(r.hasOwnProperty("count"))throw new Error(c);return t})}function w(o,e,n){return e.timeExtent!=null&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):d(o,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function d(o,e,n,t={},r={}){const s=typeof o=="string"?m(o):o,y=e.geometry?[e.geometry]:[];return t.responseType="json",p(y,null,t).then(i=>{const u=i==null?void 0:i[0];u!=null&&((e=e.clone()).geometry=u);const l=j({...s.query,f:n,...r,...O(e,r)});return F(f(s.path,"queryTopFeatures"),{...t,query:{...l,...t.query}})})}export{w as c,h as d,R as m,I as p};
