import{W as n,bn as l}from"./index-BCOvYjsd.js";import{n as i,_ as a,y as o}from"./WGLContainer-CCZO0g_A.js";const c=(r,e)=>r.key.level-e.key.level!=0?r.key.level-e.key.level:r.key.row-e.key.row!=0?r.key.row-e.key.row:r.key.col-e.key.col;class u extends i{constructor(e){super(),this.tileInfoView=e,this.sortFunction=c}renderChildren(e){this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:s}=e,t=super.createRenderParams(e);return t.requiredLevel=this.tileInfoView.getClosestInfoForScale(s.scale).level,t.displayLevel=this.tileInfoView.tileInfo.scaleToZoom(s.scale),t}prepareRenderPasses(e){const s=super.prepareRenderPasses(e);return s.push(e.registerRenderPass({name:"stencil",brushes:[a],drawPhase:n.DEBUG|n.MAP|n.HIGHLIGHT|n.LABEL,target:()=>this.getStencilTarget()})),l("esri-tiles-debug")&&s.push(e.registerRenderPass({name:"tileInfo",brushes:[o],drawPhase:n.DEBUG,target:()=>this.children})),s}getStencilTarget(){return this.children}setStencilReference(e){let s=1;for(const t of this.children)t.stencilRef=s++}}export{u as i};
