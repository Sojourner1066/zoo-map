import{ap as C,o as r,v as e,w as m,aB as p,cu as d,cc as u,az as h}from"./index-BCOvYjsd.js";let l=class extends C{constructor(t){super(t),this.type=null}};r([e({readOnly:!0,json:{read:!1,write:!0}})],l.prototype,"type",void 0),l=r([m("esri.rest.support.ColorRamp")],l);const c=l;var i;let o=i=class extends c{constructor(t){super(t),this.algorithm=null,this.fromColor=null,this.toColor=null,this.type="algorithmic"}clone(){return new i({fromColor:p(this.fromColor),toColor:p(this.toColor),algorithm:this.algorithm})}};r([d({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],o.prototype,"algorithm",void 0),r([e({type:h,json:{type:[u],write:!0}})],o.prototype,"fromColor",void 0),r([e({type:h,json:{type:[u],write:!0}})],o.prototype,"toColor",void 0),r([e({type:["algorithmic"]})],o.prototype,"type",void 0),o=i=r([m("esri.rest.support.AlgorithmicColorRamp")],o);const n=o;var a;let s=a=class extends c{constructor(t){super(t),this.colorRamps=null,this.type="multipart"}clone(){return new a({colorRamps:p(this.colorRamps)})}};r([e({type:[n],json:{write:!0}})],s.prototype,"colorRamps",void 0),r([e({type:["multipart"]})],s.prototype,"type",void 0),s=a=r([m("esri.rest.support.MultipartColorRamp")],s);const y=s,v={key:"type",base:c,typeMap:{algorithmic:n,multipart:y}};function $(t){return t!=null&&t.type?t.type==="algorithmic"?n.fromJSON(t):t.type==="multipart"?y.fromJSON(t):null:null}export{y as a,v as m,$ as p};
