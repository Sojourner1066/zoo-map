import{W as s}from"./index-BCOvYjsd.js";import{n as i}from"./WGLContainer-CCZO0g_A.js";import{p as t}from"./BitmapTechnique-DEyi_kDq.js";class o extends i{constructor(){super(...arguments),this._hasCrossfade=!1,this._bitmapTechnique=null}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}onAttach(){super.onAttach(),this._bitmapTechnique=new t}onDetach(){var e;super.onDetach(),(e=this._bitmapTechnique)==null||e.shutdown(),this._bitmapTechnique=null}renderChildren(e){super.renderChildren(e),this.visible&&e.drawPhase===s.MAP&&this._bitmapTechnique!=null&&this._bitmapTechnique.render(e,{bitmaps:this.children})}_manageFade(){this.children.reduce((e,r)=>e+(r.inFadeTransition?1:0),0)>=2?(this.children.forEach(e=>e.blendFunction="additive"),this._hasCrossfade=!0):(this.children.forEach(e=>e.blendFunction="standard"),this._hasCrossfade=!1)}}export{o as r};
