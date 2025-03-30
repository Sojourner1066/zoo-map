import{o as r,is as U,it as E,iu as H,A as Q,R as V,O as W,hS as Z,W as J,hT as tt,hU as et,hV as st,hW as ot,hX as it,hY as rt,hZ as at,bg as nt,iv as pt,iw as j}from"./index-BCOvYjsd.js";import{r as dt}from"./vec3f32-nZdmKIgz.js";import{n as ht}from"./WGLContainer-CCZO0g_A.js";import{o as lt}from"./FeatureCommandQueue-D1NCt0Vn.js";import{t as G}from"./utils-ehcGqGxa.js";import{j as ut,_ as P,p as ct,X as ft,C as g,Y as vt,a as mt,w as yt,h as L,g as n,r as wt,U as gt,m as q,b as xt,P as N,v as _t,t as Mt}from"./GraphShaderModule-OVCL3yhU.js";import{e as St}from"./TechniqueType-uMFRS8dR.js";import{t as B}from"./VertexElementDescriptor-BLyltQyJ.js";class T extends xt{}r([L(0,g)],T.prototype,"pos",void 0),r([L(1,g)],T.prototype,"uv",void 0);class $t extends _t{}class F extends N{}r([n(wt)],F.prototype,"dvs",void 0);class m extends N{}r([n(g)],m.prototype,"perspective",void 0),r([n(g)],m.prototype,"texSize",void 0),r([n(P)],m.prototype,"wrapAroundShift",void 0),r([n(P)],m.prototype,"opacity",void 0),r([n(gt)],m.prototype,"texture",void 0);class w extends ut{constructor(){super(...arguments),this.type="OverlayShader"}vertex(e){const t=e.uv.divide(this.config.texSize),s=new P(1).add(ct(t,this.config.perspective)),o=new ft(e.pos.add(new g(this.config.wrapAroundShift,0)),1),i=this.transform.dvs.multiply(o);return{uv:t,glPosition:new vt(i.xy.multiply(s),0,s)}}fragment(e){const t=mt(this.config.texture,e.uv).multiply(this.config.opacity),s=new yt;return s.fragColor=t,s}}r([n(F)],w.prototype,"transform",void 0),r([n(m)],w.prototype,"config",void 0),r([U(0,q(T))],w.prototype,"vertex",null),r([U(0,q($t))],w.prototype,"fragment",null);class bt extends Mt{constructor(){super(...arguments),this.type=St.Overlay,this._mesh=null,this.shaders={overlay:new w}}render(e,t){const{context:s,painter:o}=e,i=this._getMesh(e,t);o.setPipelineState(G);const{isWrapAround:p,wrapAroundShift:u}=t.config,c={...t.config,wrapAroundShift:0},f={shader:this.shaders.overlay,uniforms:{transform:t.transform,config:c},defines:null,optionalAttributes:null,useComputeBuffer:!1};o.setPipelineState({...G,stencil:{write:!1,test:{compare:H.EQUAL,op:{fail:E.KEEP,zFail:E.KEEP,zPass:E.REPLACE},ref:0,mask:255}}}),o.submitDrawMeshUntyped(s,f,i),p&&(c.wrapAroundShift=u,o.submitDrawMeshUntyped(s,f,i))}shutdown(){Q(this._mesh)}_getMesh(e,t){const{context:s}=e;if(this._mesh){const o=this._mesh.vertexBuffers.get("positions");if(!o)throw new Error("Buffer not found");o.buffer.setData(t.position)}else{const o=t.index!=null?t.index.length:t.position.length/2;this._mesh=new lt(s,{vertex:{positions:{data:t.position,attributes:[new B("pos",2,W.FLOAT,0,8)]},uvs:{data:t.tex,attributes:[new B("uv",2,W.UNSIGNED_SHORT,0,4)]}},index:t.index!=null?{index:{data:t.index}}:void 0,groups:[{index:t.index!=null?"index":void 0,primitive:V.TRIANGLE_STRIP}],parts:[{group:0,start:0,count:o}]})}return this._mesh}}class zt extends ht{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=Z(),this._overlayTechnique=new bt}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}doRender(e){if(e.drawPhase!==J.MAP||!this.visible)return;super.doRender(e);const t=this._overlayTechnique;for(const s of this.children)s.draw(e,t)}onDetach(){this._overlayTechnique.shutdown()}_updateMatrices(e){const{state:t}=e,{id:s,size:o,pixelRatio:i,resolution:p,rotation:u,viewpoint:c,displayMat3:f}=t;if(this._viewStateId===s)return;const x=j(u),d=i*o[0],v=i*o[1];this._localOrigin=c.targetGeometry.clone();const{x:y,y:S}=this._localOrigin,_=tt(y,t.spatialReference);this._localOrigin.x=_,this._localOrigin.y=S;const $=p*d,b=p*v,a=et(this._dvsMat3);st(a,a,f),ot(a,a,it(d/2,v/2)),rt(a,a,dt(d/$,-v/b,1)),at(a,a,-x),this._viewStateId=s}_updateOverlays(e,t){const{state:s}=e,{rotation:o,spatialReference:i,worldScreenWidth:p,size:u,viewpoint:c}=s,f=this._localOrigin;let x,d=0;const v=nt(i);if(v&&i.isWrappable){const y=u[0],S=u[1],_=j(o),$=Math.abs(Math.cos(_)),b=Math.abs(Math.sin(_)),a=Math.round(y*$+S*b),[C,I]=v.valid,h=pt(i),{x:z,y:K}=c.targetGeometry,X=[z,K],O=[0,0];s.toScreen(O,X);const M=[0,0];let R;R=a>p?.5*p:.5*a;const D=Math.floor((z+.5*h)/h),Y=C+D*h,k=I+D*h,A=[O[0]+R,0];s.toMap(M,A),M[0]>k&&(d=h),A[0]=O[0]-R,s.toMap(M,A),M[0]<Y&&(d=-h),x={worldWidth:h,xBounds:[C,I]}}for(const y of t)y.updateDrawCoords(f,d,i,x)}}export{zt as u};
