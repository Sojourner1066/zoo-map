import{hS as p,g6 as O,aJ as v,R as z,O as R,hT as V,hU as D,hV as I,hW as $,hX as E,hY as w,hZ as C,Q as b,A as k,h_ as L}from"./index-BCOvYjsd.js";import{i as N,r as F,n as T}from"./TechniqueInstance-CNQ6fZml.js";import{j as u}from"./FeatureCommandQueue-D1NCt0Vn.js";import{r as P}from"./vec3f32-nZdmKIgz.js";import{e as U}from"./Container-DHvNfQYc.js";import{$ as W}from"./Utils-DdauoA8s.js";import{E as x,o as H}from"./VertexArrayObject-DHDfdKzA.js";let j=0;function h(f,e){return new N(F(j++),f,e)}const c={visualVariableColor:null,visualVariableOpacity:null,visualVariableSizeMinMaxValue:null,visualVariableSizeScaleStops:null,visualVariableSizeStops:null,visualVariableSizeUnitValue:null,visualVariableRotation:null,visualVariableSizeOutlineScaleStops:null};class q{constructor(){this.instances={fill:h(u.fill,{uniforms:c,optionalAttributes:{zoomRange:!0}}),marker:h(u.marker,{uniforms:c,optionalAttributes:{zoomRange:!0}}),line:h(u.line,{uniforms:c,optionalAttributes:{zoomRange:!0}}),text:h(u.text,{uniforms:c,optionalAttributes:{zoomRange:!0,referenceSymbol:!1,clipAngle:!1}}),complexFill:h(u.complexFill,{uniforms:c,optionalAttributes:{zoomRange:!0}}),gradientFill:h(u.gradientFill,{uniforms:c,optionalAttributes:{zoomRange:!0}}),texturedLine:h(u.texturedLine,{uniforms:c,optionalAttributes:{zoomRange:!0}}),gradientStroke:h(u.gradientStroke,{uniforms:c,optionalAttributes:{zoomRange:!0}}),animatedMarker:h(u.animatedMarker,{uniforms:c,optionalAttributes:{zoomRange:!0}})},this._instancesById=Object.values(this.instances).reduce((e,t)=>(e.set(t.instanceId,t),e),new Map)}getInstance(e){return this._instancesById.get(e)}}const Y=Math.PI/180,G=4;class J extends U{constructor(e){super(),this._program=null,this._vao=null,this._vertexBuffer=null,this._indexBuffer=null,this._dvsMat3=p(),this._localOrigin={x:0,y:0},this._getBounds=e}destroy(){this._vao&&(this._vao.dispose(),this._vao=null,this._vertexBuffer=null,this._indexBuffer=null),this._program=O(this._program)}doRender(e){const{context:t}=e,r=this._getBounds();if(r.length<1)return;this._createShaderProgram(t),this._updateMatricesAndLocalOrigin(e),this._updateBufferData(t,r),t.setBlendingEnabled(!0),t.setDepthTestEnabled(!1),t.setStencilWriteMask(0),t.setStencilTestEnabled(!1),t.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),t.setColorMask(!0,!0,!0,!0);const s=this._program;t.bindVAO(this._vao),t.useProgram(s),s.setUniformMatrix3fv("u_dvsMat3",this._dvsMat3),t.gl.lineWidth(1),t.drawElements(z.LINES,8*r.length,R.UNSIGNED_INT,0),t.bindVAO()}_createTransforms(){return{displayViewScreenMat3:p()}}_createShaderProgram(e){if(this._program)return;const t=`precision highp float;
        uniform mat3 u_dvsMat3;

        attribute vec2 a_position;

        void main() {
          mediump vec3 pos = u_dvsMat3 * vec3(a_position, 1.0);
          gl_Position = vec4(pos.xy, 0.0, 1.0);
        }`,r=`precision mediump float;
      void main() {
        gl_FragColor = vec4(0.75, 0.0, 0.0, 0.75);
      }`;this._program=e.programCache.acquire(t,r,S().attributes)}_updateMatricesAndLocalOrigin(e){const{state:t}=e,{displayMat3:r,size:s,resolution:_,pixelRatio:a,rotation:o,viewpoint:i}=t,l=Y*o,{x:n,y:M}=i.targetGeometry,A=V(n,t.spatialReference);this._localOrigin.x=A,this._localOrigin.y=M;const g=a*s[0],m=a*s[1],y=_*g,B=_*m,d=D(this._dvsMat3);I(d,d,r),$(d,d,E(g/2,m/2)),w(d,d,P(s[0]/y,-m/B,1)),C(d,d,-l)}_updateBufferData(e,t){const{x:r,y:s}=this._localOrigin,_=2*G*t.length,a=new Float32Array(_),o=new Uint32Array(8*t.length);let i=0,l=0;for(const n of t)n&&(a[2*i]=n[0]-r,a[2*i+1]=n[1]-s,a[2*i+2]=n[0]-r,a[2*i+3]=n[3]-s,a[2*i+4]=n[2]-r,a[2*i+5]=n[3]-s,a[2*i+6]=n[2]-r,a[2*i+7]=n[1]-s,o[l]=i+0,o[l+1]=i+3,o[l+2]=i+3,o[l+3]=i+2,o[l+4]=i+2,o[l+5]=i+1,o[l+6]=i+1,o[l+7]=i+0,i+=4,l+=8);if(this._vertexBuffer?this._vertexBuffer.setData(a.buffer):this._vertexBuffer=x.createVertex(e,b.DYNAMIC_DRAW,a.buffer),this._indexBuffer?this._indexBuffer.setData(o):this._indexBuffer=x.createIndex(e,b.DYNAMIC_DRAW,o),!this._vao){const n=S();this._vao=new H(e,n.attributes,n.bufferLayouts,new Map([["geometry",this._vertexBuffer]]),this._indexBuffer)}}}const S=()=>W("bounds",{geometry:[{location:0,name:"a_position",count:2,type:R.FLOAT}]});class re extends T{constructor(e){super(e),this._instanceStore=new q,this.checkHighlight=()=>!0}destroy(){super.destroy(),this._boundsRenderer=k(this._boundsRenderer)}get instanceStore(){return this._instanceStore}enableRenderingBounds(e){this._boundsRenderer=new J(e),this.requestRender()}get hasHighlight(){return this.checkHighlight()}onTileData(e,t){e.onMessage(t),this.contains(e)||this.addChild(e),this.requestRender()}_renderChildren(e,t){e.selection=t;for(const r of this.children){if(!r.visible)continue;const s=r.getDisplayList(this._instanceStore,L.STRICT_ORDER);s==null||s.render(e)}}}export{re as i};
