import{o as i,v as r,w as l,d as n,br as o,n as u}from"./index-BCOvYjsd.js";const g=s=>{let e=class extends s{get title(){if(this._get("title")&&this.originOf("title")!=="defaults")return this._get("title");if(this.url){const t=n(this.url);if(t!=null&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",o(t,u.getLogger(this)))}};return i([r()],e.prototype,"title",null),i([r({type:String})],e.prototype,"url",null),e=i([l("esri.layers.mixins.ArcGISService")],e),e};export{g as l};
