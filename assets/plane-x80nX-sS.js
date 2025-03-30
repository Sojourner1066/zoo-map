import{dX as _,dy as N,dT as o,dU as C,el as x,ed as L,e1 as b,js as z,fO as B,ei as l,bb as G,e0 as Q,dB as X,d_ as M}from"./index-BCOvYjsd.js";import"./vec42-BnNr_Lzs.js";import{e as J}from"./mat3f64-q3fE-ZOt.js";import{e as K}from"./mat4f64-Dk4dwAN8.js";import{e as W}from"./quatf64-aQ5IuZRd.js";import{n as Y}from"./vec4f64-o2zAXfmz.js";function ht(t,e,r){const n=o(t,e)/o(t,t);return b(r,t,n)}function v(t,e){return o(t,e)/L(t)}function Tt(t,e){const r=o(t,e)/(L(t)*L(e));return-x(r)}function _t(t,e,r){_(U,t),_(y,e);const n=o(U,y),c=x(n),s=C(U,U,y);return o(s,r)<0?2*Math.PI-c:c}const U=N(),y=N();let S=class E{constructor(e){this._create=e,this._items=new Array,this._itemsPtr=0}get(){return this._itemsPtr===0&&z(()=>this._reset()),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const e=2*this._itemsPtr;this._items.length>e&&(this._items.length=e),this._itemsPtr=0}static createVec2f64(){return new E(B)}static createVec3f64(){return new E(N)}static createVec4f64(){return new E(Y)}static createMat3f64(){return new E(J)}static createMat4f64(){return new E(K)}static createQuatf64(){return new E(W)}get test(){}};const Mt=S.createVec2f64(),f=S.createVec3f64(),Z=S.createVec4f64();S.createMat3f64();const St=S.createMat4f64(),mt=S.createQuatf64();function $t(t){const e=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],r=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],n=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(e,r,n))}function gt(t,e){const r=Math.sqrt(e[0]*e[0]+e[4]*e[4]+e[8]*e[8]),n=Math.sqrt(e[1]*e[1]+e[5]*e[5]+e[9]*e[9]),c=Math.sqrt(e[2]*e[2]+e[6]*e[6]+e[10]*e[10]);return l(t,r,n,c),t}function tt(t,e,r){Math.abs(t[0])>Math.abs(t[1])?l(e,0,1,0):l(e,1,0,0),C(r,t,e),C(e,r,t),_(r,r),_(e,e)}function j(t=g){return[t[0],t[1],t[2],t[3]]}function lt(t=g[0],e=g[1],r=g[2],n=g[3]){return H(t,e,r,n,Z.get())}function et(t,e){return H(e[0],e[1],e[2],e[3],t)}function Dt(t){return t}function H(t,e,r,n,c=j()){return c[0]=t,c[1]=e,c[2]=r,c[3]=n,c}function rt(t,e,r){const n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],c=Math.abs(n-1)>1e-5&&n>1e-12?1/Math.sqrt(n):1;return r[0]=e[0]*c,r[1]=e[1]*c,r[2]=e[2]*c,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2]),r}function nt(t,e,r,n=j()){const c=r[0]-e[0],s=r[1]-e[1],a=r[2]-e[2],i=t[0]-e[0],D=t[1]-e[1],O=t[2]-e[2],m=s*O-a*D,R=a*i-c*O,q=c*D-s*i,w=m*m+R*R+q*q,V=Math.abs(w-1)>1e-5&&w>1e-12?1/Math.sqrt(w):1;return n[0]=m*V,n[1]=R*V,n[2]=q*V,n[3]=-(n[0]*t[0]+n[1]*t[1]+n[2]*t[2]),n}function k(t,e,r,n=0,c=Math.floor(r*(1/3)),s=Math.floor(r*(2/3))){if(r<3)return!1;e($,n);let a=c,i=!1;for(;a<r-1&&!i;)e(T,a),a++,i=!X($,T);if(!i)return!1;for(a=Math.max(a,s),i=!1;a<r&&!i;)e(h,a),a++,M(P,$,T),_(P,P),M(A,T,h),_(A,A),i=!X($,h)&&!X(T,h)&&Math.abs(o(P,A))<ct;return i?(nt($,T,h,t),!0):(n!==0||c!==1||s!==2)&&k(t,e,r,0,1,2)}function Ot(t,e,r=!0){const n=e.length/3;return k(t,(c,s)=>l(c,e[3*s+0],e[3*s+1],e[3*s+2]),r?n-1:n)}const ct=.99619469809,$=N(),T=N(),h=N(),P=N(),A=N();function Ut(t,e,r){return e!==t&&et(t,e),t[3]=-o(t,r),t}function Pt(t,e){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e}function At(t,e,r,n){return C(h,e,t),rt(r,h,n)}function Ct(t,e,r,n){return F(p(t,e,M(f.get(),r,e),at,n))}function bt(t,e,r){return e!=null&&F(p(t,e.origin,e.direction,st,r))}function dt(t,e,r){return F(p(t,e.origin,e.vector,I.NONE,r))}function Ft(t,e,r){return F(p(t,e.origin,e.vector,I.CLAMP,r))}function pt(t,e){return d(t,e)>=0}function Rt(t,e){const r=o(t,e.ray.direction),n=-d(t,e.ray.origin);if(r>-1e-6&&r<1e-6)return n>0;const c=n/r;return r>0?c<e.c1&&(e.c1=c):c>e.c0&&(e.c0=c),e.c0<=e.c1}function qt(t,e,r){const n=b(f.get(),t,-t[3]),c=it(t,M(f.get(),e,n),f.get());return Q(r,c,n),r}function wt(t,e,r,n){const c=t,s=f.get(),a=f.get();tt(c,s,a);const i=M(f.get(),r,e),D=v(s,i),O=v(a,i),m=v(c,i);return l(n,D,O,m)}function it(t,e,r){const n=b(f.get(),t,o(t,e));return M(r,e,n),r}function Vt(t,e){return Math.abs(d(t,e))}function d(t,e){return o(t,e)+t[3]}var u;function F(t){return t===u.INTERSECTS_INSIDE_OUT||t===u.INTERSECTS_OUTSIDE_IN}function p(t,e,r,n,c){const s=o(t,r),a=d(t,e);if(s===0)return a>=0?u.INSIDE:u.OUTSIDE;let i=-a/s;return n&I.CLAMP&&(i=G(i,0,1)),!(n&I.INFINITE_MIN)&&i<0||!(n&I.INFINITE_MAX)&&i>1?a>=0?u.INSIDE:u.OUTSIDE:(Q(c,e,b(c,r,i)),a>=0?u.INTERSECTS_INSIDE_OUT:u.INTERSECTS_OUTSIDE_IN)}(function(t){t[t.INTERSECTS_INSIDE_OUT=0]="INTERSECTS_INSIDE_OUT",t[t.INTERSECTS_OUTSIDE_IN=1]="INTERSECTS_OUTSIDE_IN",t[t.INSIDE=2]="INSIDE",t[t.OUTSIDE=3]="OUTSIDE"})(u||(u={}));const g=[0,0,1,0];var I;(function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"})(I||(I={}));const at=I.INFINITE_MIN|I.INFINITE_MAX,st=I.INFINITE_MAX;export{Ot as A,lt as D,Rt as G,qt as H,wt as J,Pt as L,j as M,Dt as O,At as P,Vt as Q,H as U,d as V,St as a,Tt as b,f as c,tt as d,v as f,gt as g,et as h,ht as i,Ct as k,rt as l,$t as m,mt as o,nt as p,dt as q,Z as r,Mt as t,_t as u,k as v,Ft as w,bt as x,Ut as y,pt as z};
