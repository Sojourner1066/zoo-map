import{ap as N,B as F,ch as q,cp as P,a9 as w,aB as j,aL as R,o as h,v as d,bp as S,bX as J,bs as T,cq as O,w as M}from"./index-BCOvYjsd.js";var G;const z=new q({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let c=G=class extends N{constructor(n){super(n),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(n,l){return this.readFeaturesWithClass(n,l,F)}writeGeometryType(n,l,o,e){if(n)return void z.write(n,l,o,e);const{features:s}=this;if(s){for(const t of s)if((t==null?void 0:t.geometry)!=null)return void z.write(t.geometry.type,l,o,e)}}readQueryGeometry(n,l){if(!n)return null;const o=!!n.spatialReference,e=P(n);return e&&!o&&l.spatialReference&&(e.spatialReference=w.fromJSON(l.spatialReference)),e}writeSpatialReference(n,l){if(n)return void(l.spatialReference=n.toJSON());const{features:o}=this;if(o){for(const e of o)if(e&&e.geometry!=null&&e.geometry.spatialReference)return void(l.spatialReference=e.geometry.spatialReference.toJSON())}}clone(){return new G(this.cloneProperties())}cloneProperties(){return j({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(n){const l=this.write();if(l.features&&Array.isArray(n)&&n.length>0)for(let o=0;o<l.features.length;o++){const e=l.features[o];if(e.geometry){const s=n==null?void 0:n[o];e.geometry=(s==null?void 0:s.toJSON())||e.geometry}}return l}quantize(n){const{scale:[l,o],translate:[e,s]}=n,t=r=>Math.round((r-e)/l),a=r=>Math.round((s-r)/o),m=this.features,y=this._getQuantizationFunction(this.geometryType,t,a);for(let r=0,u=m.length;r<u;r++)y!=null&&y(m[r].geometry)||(m.splice(r,1),r--,u--);return this.transform=n,this}unquantize(){var f,g;const{geometryType:n,features:l,transform:o}=this;if(!o)return this;const{translate:[e,s],scale:[t,a]}=o,m=p=>p*t+e,y=p=>s-p*a;let r=null,u=null;if(this.hasZ&&((f=o==null?void 0:o.scale)==null?void 0:f[2])!=null){const{translate:[,,p],scale:[,,x]}=o;r=v=>v*x+p}if(this.hasM&&((g=o==null?void 0:o.scale)==null?void 0:g[3])!=null){const{translate:[,,,p],scale:[,,,x]}=o;u=v=>v==null?v:v*x+p}const i=this._getHydrationFunction(n,m,y,r,u);for(const{geometry:p}of l)p!=null&&i&&i(p);return this.transform=null,this}readFeaturesWithClass(n,l,o){var t;const e=w.fromJSON(l.spatialReference),s=[];for(let a=0;a<n.length;a++){const m=n[a],y=o.fromJSON(m),r=(t=m.geometry)==null?void 0:t.spatialReference;y.geometry==null||r||(y.geometry.spatialReference=e);const u=m.aggregateGeometries,i=y.aggregateGeometries;if(u&&i!=null)for(const f in i){const g=i[f],p=u[f],x=p==null?void 0:p.spatialReference;g==null||x||(g.spatialReference=e)}s.push(y)}return s}_quantizePoints(n,l,o){let e,s;const t=[];for(let a=0,m=n.length;a<m;a++){const y=n[a];if(a>0){const r=l(y[0]),u=o(y[1]);r===e&&u===s||(t.push([r-e,u-s]),e=r,s=u)}else e=l(y[0]),s=o(y[1]),t.push([e,s])}return t.length>0?t:null}_getQuantizationFunction(n,l,o){return n==="point"?e=>(e.x=l(e.x),e.y=o(e.y),e):n==="polyline"||n==="polygon"?e=>{const s=R(e)?e.rings:e.paths,t=[];for(let a=0,m=s.length;a<m;a++){const y=s[a],r=this._quantizePoints(y,l,o);r&&t.push(r)}return t.length>0?(R(e)?e.rings=t:e.paths=t,e):null}:n==="multipoint"?e=>{const s=this._quantizePoints(e.points,l,o);return s&&s.length>0?(e.points=s,e):null}:n==="extent"?e=>e:null}_getHydrationFunction(n,l,o,e,s){return n==="point"?t=>{t.x=l(t.x),t.y=o(t.y),e&&(t.z=e(t.z))}:n==="polyline"||n==="polygon"?t=>{const a=R(t)?t.rings:t.paths;let m,y;for(let r=0,u=a.length;r<u;r++){const i=a[r];for(let f=0,g=i.length;f<g;f++){const p=i[f];f>0?(m+=p[0],y+=p[1]):(m=p[0],y=p[1]),p[0]=l(m),p[1]=o(y)}}if(e&&s)for(let r=0,u=a.length;r<u;r++){const i=a[r];for(let f=0,g=i.length;f<g;f++){const p=i[f];p[2]=e(p[2]),p[3]=s(p[3])}}else if(e)for(let r=0,u=a.length;r<u;r++){const i=a[r];for(let f=0,g=i.length;f<g;f++){const p=i[f];p[2]=e(p[2])}}else if(s)for(let r=0,u=a.length;r<u;r++){const i=a[r];for(let f=0,g=i.length;f<g;f++){const p=i[f];p[2]=s(p[2])}}}:n==="extent"?t=>{t.xmin=l(t.xmin),t.ymin=o(t.ymin),t.xmax=l(t.xmax),t.ymax=o(t.ymax),e&&t.zmax!=null&&t.zmin!=null&&(t.zmax=e(t.zmax),t.zmin=e(t.zmin)),s&&t.mmax!=null&&t.mmin!=null&&(t.mmax=s(t.mmax),t.mmin=s(t.mmin))}:n==="multipoint"?t=>{const a=t.points;let m,y;for(let r=0,u=a.length;r<u;r++){const i=a[r];r>0?(m+=i[0],y+=i[1]):(m=i[0],y=i[1]),i[0]=l(m),i[1]=o(y)}if(e&&s)for(let r=0,u=a.length;r<u;r++){const i=a[r];i[2]=e(i[2]),i[3]=s(i[3])}else if(e)for(let r=0,u=a.length;r<u;r++){const i=a[r];i[2]=e(i[2])}else if(s)for(let r=0,u=a.length;r<u;r++){const i=a[r];i[2]=s(i[2])}}:null}};h([d({type:String,json:{write:!0}})],c.prototype,"displayFieldName",void 0),h([d({type:Boolean,json:{write:{overridePolicy:n=>({enabled:n})}}})],c.prototype,"exceededTransferLimit",void 0),h([d({type:[F],json:{write:!0}})],c.prototype,"features",void 0),h([S("features")],c.prototype,"readFeatures",null),h([d({type:[J],json:{write:!0}})],c.prototype,"fields",void 0),h([d({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:z.read}}})],c.prototype,"geometryType",void 0),h([T("geometryType")],c.prototype,"writeGeometryType",null),h([d({type:Boolean,json:{write:{overridePolicy:n=>({enabled:n})}}})],c.prototype,"hasM",void 0),h([d({type:Boolean,json:{write:{overridePolicy:n=>({enabled:n})}}})],c.prototype,"hasZ",void 0),h([d({types:O,json:{write:!0}})],c.prototype,"queryGeometry",void 0),h([S("queryGeometry")],c.prototype,"readQueryGeometry",null),h([d({type:w,json:{write:!0}})],c.prototype,"spatialReference",void 0),h([T("spatialReference")],c.prototype,"writeSpatialReference",null),h([d({json:{write:!0}})],c.prototype,"transform",void 0),c=G=h([M("esri.rest.support.FeatureSet")],c),c.prototype.toJSON.isDefaultToJSON=!0;const _=c;export{_ as d};
