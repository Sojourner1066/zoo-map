import{gb as S}from"./index-BCOvYjsd.js";const z=512;var P,f;(function(r){r[r.Unknown=0]="Unknown",r[r.Point=1]="Point",r[r.LineString=2]="LineString",r[r.Polygon=3]="Polygon"})(P||(P={}));let g=class R{constructor(t,i){this.x=t,this.y=i}clone(){return new R(this.x,this.y)}equals(t,i){return t===this.x&&i===this.y}isEqual(t){return t.x===this.x&&t.y===this.y}setCoords(t,i){return this.x=t,this.y=i,this}normalize(){const t=this.x,i=this.y,s=Math.sqrt(t*t+i*i);return this.x/=s,this.y/=s,this}rightPerpendicular(){const t=this.x;return this.x=this.y,this.y=-t,this}leftPerpendicular(){const t=this.x;return this.x=-this.y,this.y=t,this}move(t,i){return this.x+=t,this.y+=i,this}assign(t){return this.x=t.x,this.y=t.y,this}assignAdd(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}assignSub(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}rotate(t,i){const s=this.x,h=this.y;return this.x=s*t-h*i,this.y=s*i+h*t,this}scale(t){return this.x*=t,this.y*=t,this}length(){const t=this.x,i=this.y;return Math.sqrt(t*t+i*i)}sub(t){return this.x-=t.x,this.y-=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}static distance(t,i){const s=i.x-t.x,h=i.y-t.y;return Math.sqrt(s*s+h*h)}static add(t,i){return new R(t.x+i.x,t.y+i.y)}static sub(t,i){return new R(t.x-i.x,t.y-i.y)}};class v{constructor(t,i,s){this.ratio=t,this.x=i,this.y=s}}let H=class{constructor(t,i,s,h=8,n=8){this._lines=[],this._starts=[],this.validateTessellation=!0,this._pixelRatio=h,this._pixelMargin=n,this._tileSize=z*h,this._dz=t,this._yPos=i,this._xPos=s}setPixelMargin(t){t!==this._pixelMargin&&(this._pixelMargin=t,this.setExtent(this._extent))}setExtent(t){this._extent=t,this._finalRatio=this._tileSize/t*(1<<this._dz);let i=this._pixelRatio*this._pixelMargin;i/=this._finalRatio;const s=t>>this._dz;i>s&&(i=s),this._margin=i,this._xmin=s*this._xPos-i,this._ymin=s*this._yPos-i,this._xmax=this._xmin+s+2*i,this._ymax=this._ymin+s+2*i}reset(t){this._type=t,this._lines=[],this._starts=[],this._line=null,this._start=0}moveTo(t,i){this._pushLine(),this._prevIsIn=this._isIn(t,i),this._moveTo(t,i,this._prevIsIn),this._prevPt=new g(t,i),this._firstPt=new g(t,i),this._dist=0}lineTo(t,i){const s=this._isIn(t,i),h=new g(t,i),n=g.distance(this._prevPt,h);let e,l,_,x,d,m,y,p;if(s)this._prevIsIn?this._lineTo(t,i,!0):(e=this._prevPt,l=h,_=this._intersect(l,e),this._start=this._dist+n*(1-this._r),this._lineTo(_.x,_.y,!0),this._lineTo(l.x,l.y,!0));else if(this._prevIsIn)l=this._prevPt,e=h,_=this._intersect(l,e),this._lineTo(_.x,_.y,!0),this._lineTo(e.x,e.y,!1);else{const a=this._prevPt,o=h;if(a.x<=this._xmin&&o.x<=this._xmin||a.x>=this._xmax&&o.x>=this._xmax||a.y<=this._ymin&&o.y<=this._ymin||a.y>=this._ymax&&o.y>=this._ymax)this._lineTo(o.x,o.y,!1);else{const c=[];if((a.x<this._xmin&&o.x>this._xmin||a.x>this._xmin&&o.x<this._xmin)&&(x=(this._xmin-a.x)/(o.x-a.x),p=a.y+x*(o.y-a.y),p<=this._ymin?m=!1:p>=this._ymax?m=!0:c.push(new v(x,this._xmin,p))),(a.x<this._xmax&&o.x>this._xmax||a.x>this._xmax&&o.x<this._xmax)&&(x=(this._xmax-a.x)/(o.x-a.x),p=a.y+x*(o.y-a.y),p<=this._ymin?m=!1:p>=this._ymax?m=!0:c.push(new v(x,this._xmax,p))),(a.y<this._ymin&&o.y>this._ymin||a.y>this._ymin&&o.y<this._ymin)&&(x=(this._ymin-a.y)/(o.y-a.y),y=a.x+x*(o.x-a.x),y<=this._xmin?d=!1:y>=this._xmax?d=!0:c.push(new v(x,y,this._ymin))),(a.y<this._ymax&&o.y>this._ymax||a.y>this._ymax&&o.y<this._ymax)&&(x=(this._ymax-a.y)/(o.y-a.y),y=a.x+x*(o.x-a.x),y<=this._xmin?d=!1:y>=this._xmax?d=!0:c.push(new v(x,y,this._ymax))),c.length===0)d?m?this._lineTo(this._xmax,this._ymax,!0):this._lineTo(this._xmax,this._ymin,!0):m?this._lineTo(this._xmin,this._ymax,!0):this._lineTo(this._xmin,this._ymin,!0);else if(c.length>1&&c[0].ratio>c[1].ratio)this._start=this._dist+n*c[1].ratio,this._lineTo(c[1].x,c[1].y,!0),this._lineTo(c[0].x,c[0].y,!0);else{this._start=this._dist+n*c[0].ratio;for(let u=0;u<c.length;u++)this._lineTo(c[u].x,c[u].y,!0)}this._lineTo(o.x,o.y,!1)}}this._dist+=n,this._prevIsIn=s,this._prevPt=h}close(){if(this._line.length>2){const t=this._firstPt,i=this._prevPt;t.x===i.x&&t.y===i.y||this.lineTo(t.x,t.y);const s=this._line;let h=s.length;for(;h>=4&&(s[0].x===s[1].x&&s[0].x===s[h-2].x||s[0].y===s[1].y&&s[0].y===s[h-2].y);)s.pop(),s[0].x=s[h-2].x,s[0].y=s[h-2].y,--h}}result(t=!0){return this._pushLine(),this._lines.length===0?null:(this._type===P.Polygon&&t&&D.simplify(this._tileSize,this._margin*this._finalRatio,this._lines),this._lines)}resultWithStarts(){if(this._type!==P.LineString)throw new Error("Only valid for lines");this._pushLine();const t=this._lines,i=t.length;if(i===0)return null;const s=[];for(let h=0;h<i;h++)s.push({line:t[h],start:this._starts[h]||0});return s}_isIn(t,i){return t>=this._xmin&&t<=this._xmax&&i>=this._ymin&&i<=this._ymax}_intersect(t,i){let s,h,n;if(i.x>=this._xmin&&i.x<=this._xmax)h=i.y<=this._ymin?this._ymin:this._ymax,n=(h-t.y)/(i.y-t.y),s=t.x+n*(i.x-t.x);else if(i.y>=this._ymin&&i.y<=this._ymax)s=i.x<=this._xmin?this._xmin:this._xmax,n=(s-t.x)/(i.x-t.x),h=t.y+n*(i.y-t.y);else{h=i.y<=this._ymin?this._ymin:this._ymax,s=i.x<=this._xmin?this._xmin:this._xmax;const e=(s-t.x)/(i.x-t.x),l=(h-t.y)/(i.y-t.y);e<l?(n=e,h=t.y+e*(i.y-t.y)):(n=l,s=t.x+l*(i.x-t.x))}return this._r=n,new g(s,h)}_pushLine(){this._line&&(this._type===P.Point?this._line.length>0&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===P.LineString?this._line.length>1&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===P.Polygon&&this._line.length>3&&(this._lines.push(this._line),this._starts.push(this._start))),this._line=[],this._start=0}_moveTo(t,i,s){this._type!==P.Polygon?s&&(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line.push(new g(t,i))):(s||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),i<this._ymin&&(i=this._ymin),i>this._ymax&&(i=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line.push(new g(t,i)),this._isH=!1,this._isV=!1)}_lineTo(t,i,s){let h,n;if(this._type!==P.Polygon)if(s){if(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line.length>0&&(h=this._line[this._line.length-1],h.equals(t,i)))return;this._line.push(new g(t,i))}else this._line&&this._line.length>0&&this._pushLine();else if(s||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),i<this._ymin&&(i=this._ymin),i>this._ymax&&(i=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),i=Math.round((i-(this._ymin+this._margin))*this._finalRatio),this._line&&this._line.length>0){h=this._line[this._line.length-1];const e=h.x===t,l=h.y===i;if(e&&l)return;this._isH&&e||this._isV&&l?(h.x=t,h.y=i,n=this._line[this._line.length-2],n.x===t&&n.y===i?(this._line.pop(),this._line.length<=1?(this._isH=!1,this._isV=!1):(n=this._line[this._line.length-2],this._isH=n.x===t,this._isV=n.y===i)):(this._isH=n.x===t,this._isV=n.y===i)):(this._line.push(new g(t,i)),this._isH=e,this._isV=l)}else this._line.push(new g(t,i))}};class A{setExtent(t){this._ratio=t===4096?1:4096/t}get validateTessellation(){return this._ratio<1}reset(t){this._lines=[],this._line=null}moveTo(t,i){this._line&&this._lines.push(this._line),this._line=[];const s=this._ratio;this._line.push(new g(t*s,i*s))}lineTo(t,i){const s=this._ratio;this._line.push(new g(t*s,i*s))}close(){const t=this._line;t&&!t[0].isEqual(t[t.length-1])&&t.push(t[0])}result(){return this._line&&this._lines.push(this._line),this._lines.length===0?null:this._lines}}(function(r){r[r.sideLeft=0]="sideLeft",r[r.sideRight=1]="sideRight",r[r.sideTop=2]="sideTop",r[r.sideBottom=3]="sideBottom"})(f||(f={}));let D=class T{static simplify(t,i,s){if(!s)return;const h=-i,n=t+i,e=-i,l=t+i,_=[],x=[],d=s.length;for(let y=0;y<d;++y){const p=s[y];if(!p||p.length<2)continue;let a,o=p[0];const c=p.length;for(let u=1;u<c;++u)a=p[u],o.x===a.x&&(o.x<=h&&(o.y>a.y?(_.push(y),_.push(u),_.push(f.sideLeft),_.push(-1)):(x.push(y),x.push(u),x.push(f.sideLeft),x.push(-1))),o.x>=n&&(o.y<a.y?(_.push(y),_.push(u),_.push(f.sideRight),_.push(-1)):(x.push(y),x.push(u),x.push(f.sideRight),x.push(-1)))),o.y===a.y&&(o.y<=e&&(o.x<a.x?(_.push(y),_.push(u),_.push(f.sideTop),_.push(-1)):(x.push(y),x.push(u),x.push(f.sideTop),x.push(-1))),o.y>=l&&(o.x>a.x?(_.push(y),_.push(u),_.push(f.sideBottom),_.push(-1)):(x.push(y),x.push(u),x.push(f.sideBottom),x.push(-1)))),o=a}if(_.length===0||x.length===0)return;T.fillParent(s,x,_),T.fillParent(s,_,x);const m=[];T.calcDeltas(m,x,_),T.calcDeltas(m,_,x),T.addDeltas(m,s)}static fillParent(t,i,s){const h=s.length,n=i.length;for(let e=0;e<n;e+=4){const l=i[e],_=i[e+1],x=i[e+2],d=t[l][_-1],m=t[l][_];let y=8092,p=-1;for(let a=0;a<h;a+=4){if(s[a+2]!==x)continue;const o=s[a],c=s[a+1],u=t[o][c-1],w=t[o][c];switch(x){case f.sideLeft:case f.sideRight:if(I(d.y,u.y,w.y)&&I(m.y,u.y,w.y)){const M=Math.abs(w.y-u.y);M<y&&(y=M,p=a)}break;case f.sideTop:case f.sideBottom:if(I(d.x,u.x,w.x)&&I(m.x,u.x,w.x)){const M=Math.abs(w.x-u.x);M<y&&(y=M,p=a)}}}i[e+3]=p}}static calcDeltas(t,i,s){const h=i.length;for(let n=0;n<h;n+=4){const e=[],l=T.calcDelta(n,i,s,e);t.push(i[n]),t.push(i[n+1]),t.push(i[n+2]),t.push(l)}}static calcDelta(t,i,s,h){const n=i[t+3];if(n===-1)return 0;const e=h.length;return e>1&&h[e-2]===n?0:(h.push(n),T.calcDelta(n,s,i,h)+1)}static addDeltas(t,i){const s=t.length;let h=0;for(let n=0;n<s;n+=4){const e=t[n+3];e>h&&(h=e)}for(let n=0;n<s;n+=4){const e=i[t[n]],l=t[n+1],_=h-t[n+3];switch(t[n+2]){case f.sideLeft:e[l-1].x-=_,e[l].x-=_,l===1&&(e[e.length-1].x-=_),l===e.length-1&&(e[0].x-=_);break;case f.sideRight:e[l-1].x+=_,e[l].x+=_,l===1&&(e[e.length-1].x+=_),l===e.length-1&&(e[0].x+=_);break;case f.sideTop:e[l-1].y-=_,e[l].y-=_,l===1&&(e[e.length-1].y-=_),l===e.length-1&&(e[0].y-=_);break;case f.sideBottom:e[l-1].y+=_,e[l].y+=_,l===1&&(e[e.length-1].y+=_),l===e.length-1&&(e[0].y+=_)}}}};const I=(r,t,i)=>r>=t&&r<=i||r>=i&&r<=t,O=Number.POSITIVE_INFINITY,L=Math.PI,U=2*L,N=128/L,$=256/360,F=L/180,q=1/Math.LN2;function b(r,t){return(r%=t)>=0?r:r+t}function W(r){return b(r*N,256)}function Y(r){return b(r*$,256)}function j(r){return Math.log(r)*q}function G(r,t,i){return r*(1-i)+t*i}const E=8,V=14,k=16;function J(r){return E+Math.max((r-V)*k,0)}function K(r,t,i){let s,h,n,e=0;for(const l of i){s=l.length;for(let _=1;_<s;++_)h=l[_-1],n=l[_],h.y>t!=n.y>t&&((n.x-h.x)*(t-h.y)-(n.y-h.y)*(r-h.x)>0?e++:e--)}return e!==0}function Q(r,t,i,s){let h,n,e,l;const _=s*s;for(const x of i){const d=x.length;if(!(d<2)){h=x[0].x,n=x[0].y;for(let m=1;m<d;++m){if(e=x[m].x,l=x[m].y,S(r,t,h,n,e,l)<_)return!0;h=e,n=l}}}return!1}function X(r,t,i,s,h,n,e){const l=Math.max(s,Math.min(t,n))-t,_=Math.max(h,Math.min(i,e))-i;return l*l+_*_<=r*r}function Z(r,t){if(t===0||Number.isNaN(t))return r;const i=[],s=new g(0,0),h=new g(0,0),n=new g(0,0);for(let e=0;e<r.length;e++){const l=r[e],_=[];for(let x=0;x<l.length;x++){const d=l[x-1],m=l[x],y=l[x+1];x===0?s.setCoords(0,0):s.assignSub(m,d).normalize().rightPerpendicular(),x===l.length-1?h.setCoords(0,0):h.assignSub(y,m).normalize().rightPerpendicular(),n.assignAdd(s,h).normalize();const p=n.x*h.x+n.y*h.y;p!==0&&n.scale(1/p),_.push(g.add(m,n.scale(t)))}i.push(_)}return i}function tt(r,t,i,s){const h=new g(r[0],r[1]);if(h.scale(s),t==="viewport"){const n=-i*(Math.PI/180),e=Math.cos(n),l=Math.sin(n);h.rotate(e,l)}return h}export{K as I,Q as N,Z as P,A as _,b as a,tt as b,j as c,J as d,U as e,W as f,H as g,g as h,P as i,Y as l,L as o,G as p,O as r,F as s,X as w};
