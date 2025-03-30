import{e as me}from"./deduplicate-BeLHZ6C6.js";import{H as F}from"./InterleavedLayout-C00mqD_x.js";import{e as c}from"./VertexAttribute-Cq4MnHjR.js";import{t as Y}from"./glUtil-CgIT5rpI.js";import{dy as w,bB as ee,ej as Ie,ei as W,dZ as oe,dT as j,d_ as re,dU as fe,dX as de,el as Oe,ek as Se,eH as pe,e0 as Ae,kd as Ee}from"./index-BCOvYjsd.js";import{s as q}from"./Normals-BeGU14Op.js";const we=F().vec3f(c.POSITION).u16(c.COMPONENTINDEX).freeze(),Te=F().vec2u8(c.SIDENESS).freeze();Y(Te);const Z=F().vec3f(c.POSITION0).vec3f(c.POSITION1).vec2i16(c.NORMALCOMPRESSED).u16(c.COMPONENTINDEX).u8(c.VARIANTOFFSET,{glNormalized:!0}).u8(c.VARIANTSTROKE).u8(c.VARIANTEXTENSION,{glNormalized:!0}).freeze(),G=F().vec3f(c.POSITION0).vec3f(c.POSITION1).vec2i16(c.NORMALCOMPRESSED).vec2i16(c.NORMAL2COMPRESSED).u16(c.COMPONENTINDEX).u8(c.VARIANTOFFSET,{glNormalized:!0}).u8(c.VARIANTSTROKE).u8(c.VARIANTEXTENSION,{glNormalized:!0}).freeze();c.POSITION0,c.POSITION1,c.COMPONENTINDEX,c.VARIANTOFFSET,c.VARIANTSTROKE,c.VARIANTEXTENSION,c.NORMALCOMPRESSED,c.NORMAL2COMPRESSED,c.SIDENESS;class ve{constructor(){this.position0=w(),this.position1=w(),this.faceNormal0=w(),this.faceNormal1=w(),this.componentIndex=0,this.cosAngle=0}}const k=-1;function ye(e,n,s){const r=e.vertices.position,i=e.vertices.componentIndex,f=m.position0,g=m.position1,h=m.faceNormal0,S=m.faceNormal1,{edges:a,normals:d}=$e(e),I=a.length/4,A=n.allocate(I);let $=0;const b=I,T=s==null?void 0:s.allocate(b);let B=0,t=0,o=0;_.length=0;for(let p=0;p<I;++p){const y=4*p;r.getVec(a.data[y],f),r.getVec(a.data[y+1],g);const x=_.pushNew();x.index=4*p,x.length=Ie(f,g)}_.sort((p,y)=>y.length-p.length);const u=new Array,l=new Array;_.forAll(({length:p,index:y})=>{const x=a.data[y],Ne=a.data[y+1],te=a.data[y+2],ne=a.data[y+3],se=ne===k;if(r.getVec(x,f),r.getVec(Ne,g),se){const E=3*te;W(h,d.data[E],d.data[E+1],d.data[E+2]),oe(S,h),m.componentIndex=i.get(x),m.cosAngle=j(h,S)}else{let E=3*te;if(W(h,d.data[E],d.data[E+1],d.data[E+2]),E=3*ne,W(S,d.data[E],d.data[E+1],d.data[E+2]),m.componentIndex=i.get(x),m.cosAngle=j(h,S),Pe(m,De))return;m.cosAngle<-.9999&&oe(S,h)}t+=p,o++,se||Me(m,Le)?(n.write(A,$++,m),u.push(p)):Re(m,ge)&&(T&&s&&s.write(T,B++,m),l.push(p))});const O=new Float32Array(u.reverse()),v=new Float32Array(l.reverse()),M=T&&s?{instancesData:T.slice(0,B),lodInfo:{lengths:v}}:void 0;return{regular:{instancesData:A.slice(0,$),lodInfo:{lengths:O}},silhouette:M,averageEdgeLength:t/o}}function Me(e,n){return e.cosAngle<n}function Pe(e,n){return e.cosAngle>n}function Re(e,n){const s=Oe(e.cosAngle);return Se(ae,e.position1,e.position0),s*(j(fe(xe,e.faceNormal0,e.faceNormal1),ae)>0?-1:1)>n}function $e(e){const n=e.faces.length/3,s=e.faces,r=e.neighbors,i=e.vertices.position;N.length=H.length=0;for(let f=0;f<n;f++){const g=3*f,h=r[g],S=r[g+1],a=r[g+2],d=s[g],I=s[g+1],A=s[g+2];i.getVec(d,V),i.getVec(I,z),i.getVec(A,X),re(z,z,V),re(X,X,V),fe(V,z,X),de(V,V),H.pushArray(V),(h===k||d<I)&&(N.push(d),N.push(I),N.push(f),N.push(h)),(S===k||I<A)&&(N.push(I),N.push(A),N.push(f),N.push(S)),(a===k||A<d)&&(N.push(A),N.push(d),N.push(f),N.push(a))}return{edges:N,normals:H}}class Ve{constructor(){this.index=0,this.length=0}}const _=new ee({allocator:e=>e||new Ve,deallocator:null}),N=new ee({deallocator:null}),H=new ee({deallocator:null}),m=new ve,xe=w(),ae=w(),V=w(),z=w(),X=w(),ge=pe(4),De=Math.cos(ge),Ce=pe(35),Le=Math.cos(Ce);function ie(e,n,s){const r=n/3,i=new Uint32Array(s+1),f=new Uint32Array(s+1),g=(t,o)=>{t<o?i[t+1]++:f[o+1]++};for(let t=0;t<r;t++){const o=e[3*t],u=e[3*t+1],l=e[3*t+2];g(o,u),g(u,l),g(l,o)}let h=0,S=0;for(let t=0;t<s;t++){const o=i[t+1],u=f[t+1];i[t+1]=h,f[t+1]=S,h+=o,S+=u}const a=new Uint32Array(6*r),d=i[s],I=(t,o,u)=>{if(t<o){const l=i[t+1]++;a[2*l]=o,a[2*l+1]=u}else{const l=f[o+1]++;a[2*d+2*l]=t,a[2*d+2*l+1]=u}};for(let t=0;t<r;t++){const o=e[3*t],u=e[3*t+1],l=e[3*t+2];I(o,u,t),I(u,l,t),I(l,o,t)}const A=(t,o)=>{const u=2*t,l=o-t;for(let O=1;O<l;O++){const v=a[u+2*O],M=a[u+2*O+1];let p=O-1;for(;p>=0&&a[u+2*p]>v;p--)a[u+2*p+2]=a[u+2*p],a[u+2*p+3]=a[u+2*p+1];a[u+2*p+2]=v,a[u+2*p+3]=M}};for(let t=0;t<s;t++)A(i[t],i[t+1]),A(d+f[t],d+f[t+1]);const $=new Int32Array(3*r),b=(t,o)=>t===e[3*o]?0:t===e[3*o+1]?1:t===e[3*o+2]?2:-1,T=(t,o)=>{const u=b(t,o);$[3*o+u]=-1},B=(t,o,u,l)=>{const O=b(t,o);$[3*o+O]=l;const v=b(u,l);$[3*l+v]=o};for(let t=0;t<s;t++){let o=i[t];const u=i[t+1];let l=f[t];const O=f[t+1];for(;o<u&&l<O;){const v=a[2*o],M=a[2*d+2*l];v===M?(B(t,a[2*o+1],M,a[2*d+2*l+1]),o++,l++):v<M?(T(t,a[2*o+1]),o++):(T(M,a[2*d+2*l+1]),l++)}for(;o<u;)T(t,a[2*o+1]),o++;for(;l<O;)T(a[2*d+2*l],a[2*d+2*l+1]),l++}return $}const K=.7;let he=class{updateSettings(n){this.settings=n,this._edgeHashFunction=n.reducedPrecision?be:Fe}write(n,s,r){U.seed=this._edgeHashFunction(r);const i=U.getIntRange(0,255),f=U.getIntRange(0,this.settings.variants-1),g=U.getFloat(),h=255*(.5*Be(-(1-Math.min(g/K,1))+Math.max(0,g-K)/(1-K),1.2)+.5);n.position0.setVec(s,r.position0),n.position1.setVec(s,r.position1),n.componentIndex.set(s,r.componentIndex),n.variantOffset.set(s,i),n.variantStroke.set(s,f),n.variantExtension.set(s,h)}};const P=new Float32Array(6),R=new Uint32Array(P.buffer),L=new Uint32Array(1);function Fe(e){return P[0]=e.position0[0],P[1]=e.position0[1],P[2]=e.position0[2],P[3]=e.position1[0],P[4]=e.position1[1],P[5]=e.position1[2],L[0]=31*(31*(31*(31*(31*(166811+R[0])+R[1])+R[2])+R[3])+R[4])+R[5],L[0]}function be(e){const n=P;n[0]=D(e.position0[0]),n[1]=D(e.position0[1]),n[2]=D(e.position0[2]),n[3]=D(e.position1[0]),n[4]=D(e.position1[1]),n[5]=D(e.position1[2]),L[0]=5381;for(let s=0;s<R.length;s++)L[0]=31*L[0]+R[s];return L[0]}const ce=1e4;function D(e){return Math.round(e*ce)/ce}function Be(e,n){return Math.abs(e)**n*Math.sign(e)}class J{constructor(){this._commonWriter=new he}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return Z.createBuffer(n)}write(n,s,r){this._commonWriter.write(n,s,r),Ae(C,r.faceNormal0,r.faceNormal1),de(C,C);const{typedBuffer:i,typedBufferStride:f}=n.normalCompressed;q(i,s,C[0],C[1],C[2],f)}}J.Layout=Z,J.glLayout=Y(Z,1);class Q{constructor(){this._commonWriter=new he}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return G.createBuffer(n)}write(n,s,r){this._commonWriter.write(n,s,r);{const{typedBuffer:i,typedBufferStride:f}=n.normalCompressed;q(i,s,r.faceNormal0[0],r.faceNormal0[1],r.faceNormal0[2],f)}{const{typedBuffer:i,typedBufferStride:f}=n.normal2Compressed;q(i,s,r.faceNormal1[0],r.faceNormal1[1],r.faceNormal1[2],f)}}}Q.Layout=G,Q.glLayout=Y(G,1);const C=w(),U=new Ee;function qe(e){const n=_e(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return le.updateSettings(e.writerSettings),ue.updateSettings(e.writerSettings),ye(n,le,ue)}function _e(e,n,s,r){if(n){const g=ie(s,r,e.count);return new ze(s,r,g,e)}const i=me(e.buffer,e.stride/4,{originalIndices:s}),f=ie(i.indices,r,i.uniqueCount);return{faces:i.indices,facesLength:i.indices.length,neighbors:f,vertices:we.createView(i.buffer)}}class ze{constructor(n,s,r,i){this.faces=n,this.facesLength=s,this.neighbors=r,this.vertices=i}}const le=new J,ue=new Q,Ze=F().vec3f(c.POSITION0).vec3f(c.POSITION1),Ge=F().vec3f(c.POSITION0).vec3f(c.POSITION1).u16(c.COMPONENTINDEX);export{we as E,Ze as d,qe as f,Ge as m,ye as p,_e as u};
