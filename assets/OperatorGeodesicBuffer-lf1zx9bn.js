import{s as Ae,t as qe}from"./SimpleGeometryCursor-B92kdZ15.js";import{c as Ee,z as Re,P as ue,j as Se,y as ze,a as T,E as Be,f as Xe,l as Ye,h as j,v as Oe,L as Fe,R as We,x as W,e as w,G as k,Y as O,U as A}from"./Transformation2D-D0MqPw7t.js";import{n as U,g as M,b as N,o as Ue,k as Je,G as je,l as le,N as ge,P as J,w as ne,e as De,j as pe,m as H,p as He,t as Le,z as B,F as Q,u as Ve,v as $e,x as Z,y as Pe,f as xe,D as oe,A as me,E as Ke,T as ae,H as q,J as X,K as x,L as S,O as ie,Q as ee,R as te,S as be,W as Qe,Z as Ze,_ as et,$ as tt}from"./ProjectionTransformation-B9B51Nu1.js";import{fA as v,fB as E}from"./index-BCOvYjsd.js";import{i as st}from"./GeometryCleaner-BEJM7I4l-Co0ENfAi.js";function nt(p,e,s,t,m,o){t<Number.MAX_VALUE&&t>-Number.MAX_VALUE||ue("Geodesic_bufferer.buffer - bad distance"),Se(p);const i=st(p),r=i.getGeometryType();if(ze(r)){const n=i.getPointCount(),l=8e6;if(Math.abs(t)>l&&(n>50||r!==T.enumMultiPoint&&s===4&&n>2)){let a=i;const c=t>0?1:-1,h=7e6;let _=t,u=1;do u++,_=(Math.abs(_)-h)*c;while(Math.abs(_)>l);_=t;for(let f=0;f<u-1;f++)a=he(a,e,s,h*c,m,u,o),_=(Math.abs(_)-h)*c;return a=he(a,e,s,_,m,u,o),a}}return he(i,e,s,t,m,1,o)}class it{constructor(e){this.m_sr=null,this.m_gcs=null,this.m_transform=null,this.m_a=0,this.m_eSquared=0,this.m_rpu=0,this.m_radTolerance=0,this.m_q90=0,this.m_gcs90=0,this.m_gcs180=0,this.m_gcs360=0,this.m_gcs60=0,this.m_ellipticToGeodesicMaxRatio=0,this.m_curveType=0,this.m_bShapePreserving=!1,this.m_distance=0,this.m_absDistance=0,this.m_convergenceOffset=0,this.m_cornerStep=0,this.m_segmentStep=0,this.m_progressTracker=e}bufferPolygon(e){const s=new N,t=new Ce(this,e,s);return this.processGnomonicBufferPiecesCursor(!0,t)}bufferPolyline(e){const s=new Ce(this,e,null);return this.processGnomonicBufferPiecesCursor(!0,s)}bufferMultiPoint(e){const s=new mt(this,e);return this.processGnomonicBufferPiecesCursor(!1,s)}bufferPoint(e){const s=e.getXY();s.scale(this.m_rpu);let t=new N;if(this.bufferPoint2D(s,!1,t)){const m=B(null,t,!0);t=Q(t,m,!0,!0,-1,this.m_progressTracker,0,!1)}return t=new H().foldInto360RangeGeodetic(t,this.m_gcs,2),t}processGnomonicBufferPiecesCursor(e,s){const t=s;let m=t.getGnomonic();const o=Ve($e());let i=new Z,r=new U().executeMany(i,o,this.m_progressTracker,2);const n=Fe(6,!1),l=We(M,6);this.initializeGrid(n,l);const a=[null,null,null,null,null,null],c=[null,null,null,null,null,null],h=[null,null,null,null,null,null];let _,u,f;for(;(_=t.next())!==null;){if(u=t.getGnomonic(),u!==m){if(m!==null){let d=r.next();if(i=null,r=null,d!=null){const C=B(o,d,!0),P=J(C);d=m.unproject(d,P,this.m_progressTracker),this.putInGridCursors(e,d,o,!0,n,l,a,c,h)}}u!==null&&(i=new Z,r=new U().executeMany(i,o,this.m_progressTracker,2)),m=u}if(t.isRunningInGnomonic()){if(u.project(_),t.needsSimplify()){const d=B(null,_,!0);_=Q(_,d,!0,!0,-1,this.m_progressTracker,0,!1)}i.tick(se(_)),r.tock()}else this.putInGridCursors(e,_,o,!0,n,l,a,c,h)}let g=!1;for(let d=0;d<6;d++)if(h[d]!=null){g=!0;break}if(g){let d=!1;const C=[null,null,null,null,null,null];if(e){const b=t.m_densified;if(t.m_densified=null,b!==null){const y=new W;y.scale(1/this.m_rpu,1/this.m_rpu),b.applyTransformation(y),this.m_distance>0?this.putInGridCursors(e,b,o,!1,n,l,a,c,h):(this.processInGrid(e,b,!1,n,l,a,C),d=!0)}}const P=new Z,D=new U().executeMany(P,this.m_gcs,this.m_progressTracker,2);if(r!==null){let b=r.next();i=null,r=null;const y=B(o,b,!0),G=J(y);b=m.unproject(b,G,this.m_progressTracker),this.putInGridCursors(e,b,o,!0,n,l,a,c,h)}for(let b=0;b<6;b++)if(h[b]!=null){let y=h[b].next();h[b]=null,c[b]=null,d&&C[b]!==null&&(y=new Pe().execute(C[b],y,o,this.m_progressTracker));const G=B(o,y,!0),I=J(G);y=a[b].unproject(y,I,this.m_progressTracker),y=new xe().execute(y,this.m_gcs,!0,this.m_progressTracker),P.tick(se(y)),D.tock()}f=D.next()}else{let d,C=!1;if(e){let y=t.m_densified;if(t.m_densified=null,y!==null){const G=new W;G.scale(1/this.m_rpu,1/this.m_rpu),y.applyTransformation(G),u.project(y);const I=B(null,y,!0);y=Q(y,I,!1,!0,-1,this.m_progressTracker,0,!1),this.m_distance>0?(i.tick(se(y)),r.tock()):(d=y,C=!0)}}let P=r.next();i=null,r=null,C&&(P=new Pe().execute(d,P,o,this.m_progressTracker));const D=B(o,P,!0),b=J(D);f=m.unproject(P,b,this.m_progressTracker),f=new xe().execute(f,this.m_gcs,!0,this.m_progressTracker)}return f=new H().foldInto360RangeGeodetic(f,this.m_gcs,2),f}putInGridCursors(e,s,t,m,o,i,r,n,l){const a=[null,null,null,null,null,null];this.processInGrid(e,s,m,o,i,r,a);for(let c=0;c<6;c++)a[c]!==null&&(n[c]===null&&(n[c]=new Z,l[c]=new U().executeMany(n[c],t,this.m_progressTracker,2)),n[c].tick(se(a[c])),l[c].tock())}processInGrid(e,s,t,m,o,i,r){const l=this.insertGeodeticPointsAlongGrid(s,o,.01);for(let a=0;a<6;a++){if(m[a])continue;const c=o[a].clone();c.inflateCoords(.01,.01);const h=oe(s,c),_=ne(null,h,!1).total();let u=me(l,c,_,Number.NaN,this.m_progressTracker);if(u!==null&&!u.isEmpty()){if(u===l&&(u=u.clone()),i[a]===null){const g=new w;a<3?g.setCoords(0,1):g.setCoords(0,-1);const d=new w;d.setAdd(o[a].getCenter(),g),i[a]=V(this.m_gcs,d)}i[a].project(u);const f=B(null,u,!0);u=Q(u,f,t,!0,-1,this.m_progressTracker,0,!1),r[a]=u}}}insertGeodeticPointsAlongGrid(e,s,t){const m=M.construct(s[3].xmin,s[3].ymin,s[2].xmax,s[2].ymax),o=Ke(this.m_gcs,m,e,!0,this.m_progressTracker),i=new ae,r=i.addGeometry(o);return q(i,r,this.m_gcs,0,2,!0,s[0].xmax+t),q(i,r,this.m_gcs,0,2,!0,s[1].xmax+t),q(i,r,this.m_gcs,0,2,!1,s[1].ymin+t),t!==0&&(q(i,r,this.m_gcs,0,2,!0,s[0].xmax-t),q(i,r,this.m_gcs,0,2,!0,s[1].xmax-t),q(i,r,this.m_gcs,0,2,!1,s[1].ymin-t)),i.getGeometry(r)}initializeGrid(e,s){for(let t=0;t<6;t++)e[t]=!1;s[0].setCoords({xmin:-this.m_gcs180,ymin:0,xmax:-this.m_gcs60,ymax:this.m_gcs90}),s[1].setCoords({xmin:-this.m_gcs60,ymin:0,xmax:this.m_gcs60,ymax:this.m_gcs90}),s[2].setCoords({xmin:this.m_gcs60,ymin:0,xmax:this.m_gcs180,ymax:this.m_gcs90}),s[3].setCoords({xmin:-this.m_gcs180,ymin:-this.m_gcs90,xmax:-this.m_gcs60,ymax:0}),s[4].setCoords({xmin:-this.m_gcs60,ymin:-this.m_gcs90,xmax:this.m_gcs60,ymax:0}),s[5].setCoords({xmin:this.m_gcs60,ymin:-this.m_gcs90,xmax:this.m_gcs180,ymax:0})}checkAndPrepSegmentForCrossingAzimuthsOrPoleWrap(e,s,t,m,o,i){const r=e[0],n=e.at(-1),l=r.y<n.y?r.y:n.y,a=r.y>n.y?r.y:n.y,c=le.q(this.m_a,this.m_eSquared,l),h=le.q(this.m_a,this.m_eSquared,a);if(this.m_q90-(c+s+this.m_absDistance)>.001&&this.m_q90+(h-s-this.m_absDistance)>.001)return!1;const _=t-O,u=m+O,f=_-Math.PI,g=_+Math.PI,d=u+Math.PI,C=[Number.NaN],P=[Number.NaN],D=[Number.NaN],b=[Number.NaN];let y=!1;if(ye(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,r,_,f,n,u,C,P),ye(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,n,d,u,r,f,D,b),(u<C[0]&&C[0]<d||u<P[0]&&P[0]<d)&&(y=!0),y||(f<D[0]&&D[0]<_||f<b[0]&&b[0]<_)&&(y=!0),!y&&o)return!1;const G=[];for(let R=e.length-1;R>=0;R--)G.push(e[R]);i.setEmpty(),i.addPathPoint2D(null,0,!0);let I=0;I=ce(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,this.m_curveType,e,_,u,o,I,i),I=L(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,n,u,d,this.m_cornerStep,o,I,i,C[0],P[0]),I=ce(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,this.m_curveType,G,d,g,o,I,i),I=L(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,r,f,_,this.m_cornerStep,o,I,i,D[0],b[0]);let Y=!1;return o||(Y=this.checkAndPrepForPole(i)),y||Y}bufferPoint2D(e,s,t){t.setEmpty(),t.addPathPoint2D(null,0,!0),L(this.m_a,this.m_eSquared,this.m_rpu,this.m_absDistance,e,-this.m_cornerStep,2*Math.PI,this.m_cornerStep,s,0,t);let o=!1;return s||(o=this.checkAndPrepForPole(t)),o}checkAndPrepForPole(e){const s=this.checkAndPrepForPoleTouch(e),t=this.checkAndPrepForPoleWrap(e);return s||t}checkAndPrepForPoleTouch(e){const s=new M;return e.queryEnvelope(s),!(!X(s.ymax,this.m_gcs90)&&!X(s.ymin,-this.m_gcs90))&&(this.prepPoleTouch(e),!0)}checkAndPrepForPoleWrap(e){const s=e.getXY(0),t=e.getXY(e.getPointCount()-1);return Math.abs(s.x-t.x)>this.m_gcs180?(this.prepSinglePoleWrap(e),!0):this.checkAndPrepForDoublePoleWrap(e)}checkAndPrepForDoublePoleWrap(e){return e.calculateArea2D()<0&&(this.prepDoublePoleWrap(e),!0)}prepPoleTouch(e){const s=new N;s.insertPath2D(-1,null,0,0,!0);const t=e.getPathStart(0),m=e.getPathEnd(0),o=m-t;let i=-1;for(i=t;i<m;i++){const a=e.getXY(i),c=X(a.y,this.m_gcs90),h=X(a.y,-this.m_gcs90);if(!c&&!h)break}let r=i,n=!1,l=Number.NaN;do{const a=e.getXY(r),c=X(a.y,this.m_gcs90),h=X(a.y,-this.m_gcs90),_=t+(r+1-t)%o;if(c||h){let u=w.construct(l,a.y);s.insertPoint2D(0,-1,u);const f=e.getXY(_),g=X(f.y,this.m_gcs90),d=X(f.y,-this.m_gcs90);g||d||(u=w.construct(f.x,a.y),n?s.setXY(s.getPointCount()-1,u):s.insertPoint2D(0,-1,u)),n=!0}else s.insertPoint2D(0,-1,a),l=a.x,n=!1;r=_}while(r!==i);e.setEmpty(),e.add(s,!1)}prepSinglePoleWrap(e){const s=new N,t=new N,m=new W,o=e.getXY(e.getPathStart(0)),i=e.getXY(e.getPathEnd(0)-1),r=this.m_gcs360,n=this.m_gcs180,l=new M;l.setCoords({xmin:-this.m_gcs180,ymin:-this.m_gcs90,xmax:this.m_gcs180,ymax:this.m_gcs90});const a=new M;e.queryEnvelope(a);const c=Math.ceil(a.width()/r);let h,_;o.x>i.x?(h=-r,_=this.m_gcs90):(h=r,_=-this.m_gcs90),m.setShiftCoords(h,0),s.addPath(e,0,!0),t.add(s,!1);const u=new De;for(let z=0;z<c;z++)t.applyTransformation(m),t.getPointByVal(0,u),s.lineToPoint(u),s.addSegmentsFromPath(t,0,0,t.getSegmentCount()-1,!1);const f=s.getXY(0),g=s.getXY(s.getPointCount()-1);f.y=_,g.y=_,s.lineTo(g);const d=new w;for(d.setCoordsPoint2D(g),d.x-=.5*h;Math.abs(d.x-f.x)>n;)s.lineTo(d),d.x-=.5*h;s.lineTo(f);const C=l.getCenterX(),P=new M;s.queryEnvelope(P);let D=0;const b=P.getCenter().x;b-C>n?D=-Math.ceil((b-C-n)/r):C-b>n&&(D=Math.ceil((C-b-n)/r)),D!==0&&(m.setShiftCoords(D*r,0),s.applyTransformation(m));const y=new ae,G=y.addGeometry(s);q(y,G,this.m_gcs,0,2,!0,l.xmin),q(y,G,this.m_gcs,0,2,!0,l.xmax);const I=y.getGeometry(G),Y=oe(I,l);Y.inflateCoords(0,1);const R=ne(null,Y,!0).total(),F=me(I,l,R,Number.NaN,this.m_progressTracker);e.setEmpty(),e.add(F,!1)}prepDoublePoleWrap(e){const s=this.m_gcs360,t=this.m_gcs180,m=new M;m.setCoords({xmin:-this.m_gcs180,ymin:-this.m_gcs90,xmax:this.m_gcs180,ymax:this.m_gcs90});const o=m.getCenter().x,i=new M;e.queryPathEnvelope(0,i);let r,n=0,l=i.getCenter().x;if(l-o>t?n=-Math.ceil((l-o-t)/s):o-l>t&&(n=Math.ceil((o-l-t)/s)),n!==0){const _=new W;_.setShiftCoords(n*s,0),e.getImpl().applyTransformationToPath(_,0),e.queryPathEnvelope(0,i),l=i.getCenter().x}const a=new M;m.containsExclusiveEnvelope(i)?(r=!1,a.setCoords({env2D:m})):(r=!0,a.setCoords({env2D:m}),a.xmin-=s,a.xmax+=s);let c=e.createInstance();c.addPathPoint2D(null,0,!0);const h=new w;if(h.setCoords(a.xmin,a.ymin),c.insertPoint2D(0,-1,h),h.setCoords(a.xmin,a.ymax),c.insertPoint2D(0,-1,h),h.setCoords(.5*(a.xmin+a.xmax),a.ymax),c.insertPoint2D(0,-1,h),h.setCoords(a.xmax,a.ymax),c.insertPoint2D(0,-1,h),h.setCoords(a.xmax,a.ymin),c.insertPoint2D(0,-1,h),h.setCoords(.5*(a.xmin+a.xmax),a.ymin),c.insertPoint2D(0,-1,h),r){c.addPath(e,0,!0);const _=new W;l<o?_.setShiftCoords(s,0):_.setShiftCoords(-s,0),e.getImpl().applyTransformationToPath(_,0),c.addPath(e,0,!0);const u=new ae,f=u.addGeometry(c);q(u,f,this.m_gcs,0,2,!0,m.xmin),q(u,f,this.m_gcs,0,2,!0,m.xmax),c=u.getGeometry(f);const g=oe(c,m);g.inflateCoords(0,1);const d=ne(null,g,!0).total();c=me(c,m,d,Number.NaN,this.m_progressTracker)}else c.addPath(e,0,!0);e.setEmpty(),e.add(c,!1)}setMinCornerStep(){const e={stack:[],error:void 0,hasError:!1};try{let s=Math.min(Math.PI*this.m_a-this.m_absDistance,this.m_absDistance);s=Math.min(s,.125*this.m_a*Math.PI);const t=new w;t.setCoords(0,10*this.m_rpu);const m=0;let o=45*this.m_rpu;const i=v(e,new k(new x,new x),!1),r=v(e,new k(new x,new x),!1),n=v(e,new k(new x,new x),!1),l=v(e,new k(new x,new x),!1),a=new w,c=new w,h=new w,_=new w;for(S.geodesicCoordinate(this.m_a,this.m_eSquared,t.x,t.y,s,m,i.at(0),i.at(1)),a.setCoords(i.at(0).val,i.at(1).val),S.geodesicCoordinate(this.m_a,this.m_eSquared,t.x,t.y,s,o,r.at(0),r.at(1)),c.setCoords(r.at(0).val,r.at(1).val);;){const g={stack:[],error:void 0,hasError:!1};try{const d=.5*(m+o);S.geodesicCoordinate(this.m_a,this.m_eSquared,t.x,t.y,s,d,n.at(0),n.at(1)),h.setCoords(n.at(0).val,n.at(1).val);const C=v(g,new x,!1),P=v(g,new x,!1);S.geodeticDistance(this.m_a,this.m_eSquared,a.x,a.y,c.x,c.y,C,P,null,2),S.geodeticCoordinate(this.m_a,this.m_eSquared,a.x,a.y,.5*C.val,P.val,l.at(0),l.at(1),2),_.setCoords(l.at(0).val,l.at(1).val);const D=v(g,new x,!1);if(S.geodeticDistance(this.m_a,this.m_eSquared,h.x,h.y,_.x,_.y,D,null,null,2),D.val<=this.m_convergenceOffset)break;o*=.9,S.geodesicCoordinate(this.m_a,this.m_eSquared,t.x,t.y,s,o,r.at(0),r.at(1)),c.setCoords(r.at(0).val,r.at(1).val)}catch(d){g.error=d,g.hasError=!0}finally{E(g)}}const u=o-m,f=2*Math.PI/Math.ceil(2*Math.PI/u);this.m_cornerStep=f}catch(s){e.error=s,e.hasError=!0}finally{E(e)}}setMinSegmentStep(){const e={stack:[],error:void 0,hasError:!1};try{let s=Math.min(Math.PI*this.m_a-this.m_absDistance,this.m_absDistance);s=Math.min(s,.125*this.m_a*Math.PI);const t=new w,m=new w;t.setCoords(0,10*this.m_rpu),m.setCoords(10*this.m_rpu,10*this.m_rpu);const o=v(e,new x,!1),i=v(e,new x,!1),r=v(e,new x,!1);S.geodeticDistance(this.m_a,this.m_eSquared,t.x,t.y,m.x,m.y,r,o,i,this.m_curveType);const n=v(e,new k(new x,new x),!1),l=v(e,new k(new x,new x),!1),a=new w,c=v(e,new x,!1),h=v(e,new k(new x,new x),!1),_=v(e,new k(new x,new x),!1),u=v(e,new k(new x,new x),!1),f=v(e,new k(new x,new x),!1),g=new w,d=new w,C=new w,P=new w,D=0;let b=1;const y=o.val,G=i.val,I=y-.5*Math.PI,Y=G+.5*Math.PI,R=r.val;for(S.geodesicCoordinate(this.m_a,this.m_eSquared,t.x,t.y,s,I,h.at(0),h.at(1)),g.setCoords(h.at(0).val,h.at(1).val),S.geodesicCoordinate(this.m_a,this.m_eSquared,m.x,m.y,s,Y,_.at(0),_.at(1)),d.setCoords(_.at(0).val,_.at(1).val);;){const z={stack:[],error:void 0,hasError:!1};try{const re=.5*(D+b);S.geodeticCoordinate(this.m_a,this.m_eSquared,t.x,t.y,re*R,y,n.at(0),n.at(1),this.m_curveType),a.setCoords(n.at(0).val,n.at(1).val),S.geodeticDistance(this.m_a,this.m_eSquared,t.x,t.y,a.x,a.y,null,null,c,this.m_curveType);const Te=c.val+.5*Math.PI;S.geodesicCoordinate(this.m_a,this.m_eSquared,a.x,a.y,s,Te,u.at(0),u.at(1)),C.setCoords(u.at(0).val,u.at(1).val);const _e=v(z,new x,!1),fe=v(z,new x,!1);S.geodeticDistance(this.m_a,this.m_eSquared,g.x,g.y,d.x,d.y,_e,fe,null,2),S.geodeticCoordinate(this.m_a,this.m_eSquared,g.x,g.y,.5*_e.val,fe.val,f.at(0),f.at(1),2),P.setCoords(f.at(0).val,f.at(1).val);const de=v(z,new x,!1);if(S.geodeticDistance(this.m_a,this.m_eSquared,C.x,C.y,P.x,P.y,de,null,null,2),de.val<=this.m_convergenceOffset)break;{const $={stack:[],error:void 0,hasError:!1};try{b*=.9,S.geodeticCoordinate(this.m_a,this.m_eSquared,t.x,t.y,b*R,y,l.at(0),l.at(1),this.m_curveType),m.setCoords(l.at(0).val,l.at(1).val);const K=v($,new x,!1);S.geodeticDistance(this.m_a,this.m_eSquared,t.x,t.y,m.x,m.y,null,null,K,this.m_curveType);const ke=K.val+.5*Math.PI;S.geodesicCoordinate(this.m_a,this.m_eSquared,m.x,m.y,s,ke,_.at(0),_.at(1)),d.setCoords(_.at(0).val,_.at(1).val)}catch(K){$.error=K,$.hasError=!0}finally{E($)}}}catch(re){z.error=re,z.hasError=!0}finally{E(z)}}let F=b*R;F>1e5&&(F=1e5),this.m_segmentStep=F}catch(s){e.error=s,e.hasError=!0}finally{E(e)}}setConvergenceOffset(){let e;e=this.m_absDistance>5e4?100:this.m_absDistance>1e4?10:1,this.m_absDistance/e<500&&(e=this.m_absDistance/500),e<.01&&(e=.01),this.m_convergenceOffset=e}}function he(p,e,s,t,m,o,i){if(p.isEmpty())return new N({vd:p.getDescription()});let r=p;if(Be(r)){const g=10*e.getTolerance(0);r=new Ue().execute(r,0,g,0,i,12e3)}const n=new it(i);n.m_sr=e,n.m_gcs=e.getGCS(),n.m_transform=Je(e,n.m_gcs,null);const l=je();n.m_gcs.querySpheroidData(l);const a=new M;r.queryEnvelope(a),n.m_a=l.majorSemiAxis,n.m_eSquared=l.e2,n.m_rpu=n.m_gcs.getUnit().getUnitToBaseFactor(),n.m_gcs90=.5*Math.PI/n.m_rpu,n.m_gcs180=Math.PI/n.m_rpu,n.m_gcs360=2*Math.PI/n.m_rpu,n.m_gcs60=n.m_gcs360/6,n.m_q90=le.q90(n.m_a,n.m_eSquared),n.m_ellipticToGeodesicMaxRatio=.5*n.m_a*Math.PI/n.m_q90;const c=n.m_gcs.getTolerance(0);n.m_radTolerance=c*n.m_rpu,s===4?(n.m_curveType=2,n.m_bShapePreserving=!0):(n.m_curveType=s,n.m_bShapePreserving=!1),n.m_distance=t,n.m_absDistance=Math.abs(t),Number.isNaN(m)||m<=0?n.setConvergenceOffset():n.m_convergenceOffset=Math.max(m,.001),n.m_convergenceOffset/=o;let h,_=r.getGeometryType();if(Xe(_)){const g=new ge({vd:r.getDescription()});g.addSegment(r,!0),h=g,_=T.enumPolyline}else if(_===T.enumEnvelope){const g=r,d=new M;g.queryEnvelope(d);const C=J(ne(n.m_sr,a,!0));if(d.minDimension()<=C)if(d.maxDimension()===0){const P=new De({vd:r.getDescription()});g.getCenter(P),h=P,_=T.enumPoint}else{const P=new ge({vd:r.getDescription()});P.addEnvelope(g,!1),h=P,_=T.enumPolyline}else{const P=new N({vd:r.getDescription()});P.addEnvelope(g,!1),h=P,_=T.enumPolygon}}else h=r;if(n.setMinCornerStep(),Ye(_)||n.setMinSegmentStep(),n.m_absDistance<=.5*n.m_convergenceOffset)return _!==T.enumPolygon?new N({vd:h.getDescription()}):n.m_bShapePreserving?h:pe(h,n.m_sr,n.m_curveType,n.m_segmentStep,-1,i);if(n.m_distance<0&&_!==T.enumPolygon)return new N({vd:h.getDescription()});if(n.m_bShapePreserving&&j(_)){const g=pe(h,e,4,Number.NaN,n.m_convergenceOffset,i);h=new H().execute(g,n.m_transform,i)}else h=new H().execute(h,n.m_transform,i);if(h=He(h,n.m_gcs),h.isEmpty())return new N({vd:h.getDescription()});!n.m_bShapePreserving&&j(_)&&(h=Le(n.m_rpu,h)),h=rt(h,n.m_gcs);let u=new N;switch(_){case T.enumPolygon:u=n.bufferPolygon(h);break;case T.enumPolyline:u=n.bufferPolyline(h);break;case T.enumMultiPoint:u=n.bufferMultiPoint(h);break;case T.enumPoint:u=n.bufferPoint(h);break;default:Oe("")}const f=new H().execute(u,n.m_transform.getInverse(),i);return f.mergeVertexDescription(h.getDescription()),f}function ce(p,e,s,t,m,o,i,r,n,l,a){const c={stack:[],error:void 0,hasError:!1};try{const h=new w;h.setNAN(),n||a.getPointCount()>0&&(h.setCoordsPoint2D(a.getXY(a.getPointCount()-1)),h.scale(s));const _=v(c,new x,!1),u=v(c,new k(new x,new x),!1),f=new w,g=new w,d=o.at(-1),C=1/s;for(let P=0;P<o.length;P++){const D=o[P];let b;P===0?b=i:P===o.length-1?b=r:(S.geodeticDistance(p,e,d.x,d.y,D.x,D.y,null,null,_,m),b=_.val-.5*Math.PI),S.geodesicCoordinate(p,e,D.x,D.y,t,b,u.at(0),u.at(1)),n?g.setCoords(u.at(0).val,u.at(1).val):(f.setCoords(u.at(0).val,u.at(1).val),l=Ie(D.x,f.x,h.x,l),g.setCoords(l+f.x,f.y),h.setCoordsPoint2D(g)),g.scale(C),a.insertPoint2D(0,-1,g)}return l}catch(h){c.error=h,c.hasError=!0}finally{E(c)}}function L(p,e,s,t,m,o,i,r,n,l,a,c=Number.NaN,h=Number.NaN){const _={stack:[],error:void 0,hasError:!1};try{if(i-o<r)return l;const u=v(_,new k(new x,new x),!1),f=new w,g=new w,d=new w;g.setNAN(),n||a.getPointCount()>0&&(g.setCoordsPoint2D(a.getXY(a.getPointCount()-1)),g.scale(s));let C=Math.ceil(o/r),P=C++*r;P===o&&(P=C++*r);let D=o;const b=1/s;for(;P<i+r&&(D<c&&c<P?(P=c,C--):D<h&&h<P&&(P=h,C--),!(P>=i));)S.geodesicCoordinate(p,e,m.x,m.y,t,P,u.at(0),u.at(1)),n?d.setCoords(u.at(0).val,u.at(1).val):(f.setCoords(u.at(0).val,u.at(1).val),l=Ie(m.x,f.x,g.x,l),d.setCoords(l+f.x,f.y),g.setCoordsPoint2D(d)),d.scale(b),a.insertPoint2D(0,-1,d),D=P,P=C++*r;return l}catch(u){_.error=u,_.hasError=!0}finally{E(_)}}function ye(p,e,s,t,m,o,i,r,n,l,a){const c={stack:[],error:void 0,hasError:!1};try{const h=new w,_=new w,u=v(c,new k(new x,new x),!1);S.geodesicCoordinate(p,e,m.x,m.y,t,o,u.at(0),u.at(1)),h.setCoords(u.at(0).val,u.at(1).val),S.geodesicCoordinate(p,e,m.x,m.y,t,i,u.at(0),u.at(1)),_.setCoords(u.at(0).val,u.at(1).val);const f=v(c,new x,!1);for(S.geodeticDistance(p,e,r.x,r.y,h.x,h.y,null,f,null,0),l[0]=f.val,S.geodeticDistance(p,e,r.x,r.y,_.x,_.y,null,f,null,0),a[0]=f.val;l[0]<=a[0];)l[0]+=A;for(;l[0]>a[0];)l[0]-=A;for(;l[0]>=n;)l[0]-=A,a[0]-=A;for(;l[0]<n;)l[0]+=A,a[0]+=A}catch(h){c.error=h,c.hasError=!0}finally{E(c)}}function Ie(p,e,s,t){if(Number.isNaN(s)){for(;t+e-p>Math.PI;)t-=A;for(;p-(t+e)>Math.PI;)t+=A;return t}return t+e-s>Math.PI?t-=A:s-(t+e)>Math.PI&&(t+=A),t}function rt(p,e){const s=p.getGeometryType();let t;if(t=j(s)?p.getPathCount():s===T.enumMultiPoint?p.getPointCount():1,t===1)return p;const m=[],o=[];for(let r=0;r<t;r++){m.push(r);const n=new w;if(j(s)){const a=new M;p.queryPathEnvelope(r,a),n.assign(a.getCenter())}else n.assign(p.getXY(r));const l=e.toGeohash(n);o.push(l)}m.sort((r,n)=>o[r]<o[n]?-1:o[r]>o[n]?1:0);const i=p.createInstance();for(let r=0;r<t;r++){const n=m[r];j(s)?i.addPath(p,n,!0):i.addPoints(p,n,n+1)}return i}function Ge(p,e,s,t,m,o){const i={stack:[],error:void 0,hasError:!1};try{if(t>=o)return!1;const r=s[0],n=s.at(-1),l=v(i,new x,!1),a=v(i,new x,!1),c=v(i,new x,!1);S.greatEllipticDistance(p,e,m.x,m.y,r.x,r.y,l,null,null),S.greatEllipticDistance(p,e,m.x,m.y,n.x,n.y,a,null,null),S.greatEllipticDistance(p,e,r.x,r.y,n.x,n.y,c,null,null);let h=Math.min(l.val,a.val)+c.val,_=h+t;if(_<o)return!0;const u=v(i,new x,!1);h=Math.max(l.val,a.val);for(let f=1;f<s.length-1;f++){const g=s[f];S.greatEllipticDistance(p,e,m.x,m.y,g.x,g.y,u,null,null),u.val>h&&(h=u.val)}return _=h+t,_<o}catch(r){i.error=r,i.hasError=!0}finally{E(i)}}function we(p,e,s,t,m,o,i,r){let n;if(t.length%2==0){const c=t.length>>1,h=t[c],_=t[c-1];n=w.lerp(h,_,.5)}else n=t[t.length-1>>1].clone();const l=n.clone(),a=ie(p,e,l,75/180*Math.PI);return!!Ge(p,e,t,m,l,a)&&(o!==null&&(o.setCoordsPoint2D(n),o.scale(1/s)),i!==null&&i.setCoordsPoint2D(l),r!==null&&(r[0]=a),!0)}function Me(p,e,s,t,m,o){const i={stack:[],error:void 0,hasError:!1};try{if(t>=o)return!1;const r=v(i,new x,!1);return S.greatEllipticDistance(p,e,m.x,m.y,s.x,s.y,r,null,null),r.val+t<o}catch(r){i.error=r,i.hasError=!0}finally{E(i)}}function ot(p,e,s,t,m,o,i,r){const n=ie(p,e,t,.4166666666666667*Math.PI);return!!Me(p,e,t,m,t,n)&&(o!==null&&(o.setCoordsPoint2D(t),o.scale(1/s)),i!==null&&i.setCoordsPoint2D(t),r!==null&&(r[0]=n),!0)}function V(p,e){return new tt(p,e)}function se(p){return Ze(p,0)||et(p,0),p}class Ne{constructor(e){this.m_bRunningInGnomonic=!1,this.m_bNeedsSimplify=!1,this.m_gnomonic=null,this.m_gnomonicCenterRad=new w,this.m_minGnomonicRadius=Number.NaN,this.m_progressTracker=e}isRunningInGnomonic(){return this.m_bRunningInGnomonic}needsSimplify(){return this.m_bNeedsSimplify}getGnomonic(){return this.m_gnomonic}}class Ce extends Ne{constructor(e,s,t){super(e.m_progressTracker),this.m_segIter=null,this.m_bNextSegmentCannotJoin=!1,this.m_currentDensifiedDelta=[0],this.m_currentBufferedDelta=0,this.m_lastAzimuth=0,this.m_startAzimuth=[0],this.m_endAzimuth=[0],this.m_numWinds=0,this.m_debugCounter=0,this.m_bufferHelper=new N,this.m_densifiedPoints=[],this.m_bufferer=e,this.m_multiPath=s,this.m_densified=t,this.m_bNeedsSimplify=!0;const m=new M;this.m_multiPath.queryEnvelope(m);const o=m.getCenter(),i=o.clone();i.scale(this.m_bufferer.m_rpu),this.m_gnomonic=V(this.m_bufferer.m_gcs,o),this.m_gnomonicCenterRad=i.clone(),this.m_minGnomonicRadius=ie(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,i,75/180*Math.PI)}next(){let e;if(this.m_bNextSegmentCannotJoin)return this.m_bNextSegmentCannotJoin=!1,this.m_segIter.nextSegment(),e=this.m_bufferHelper.clone(),e;if(this.m_segIter===null){if(this.m_segIter=this.m_multiPath.getImpl().querySegmentIterator(),!this.m_segIter.nextPath())return null;this.m_densified!==null&&this.m_densified.addPathPoint2D(null,0,!0)}if(!this.m_segIter.hasNextSegment()){if(!this.m_segIter.nextPath())return null;this.m_densified!=null&&this.m_densified.addPathPoint2D(null,0,!0)}let s=null;this.m_currentBufferedDelta=0,this.m_currentDensifiedDelta=[0],this.m_numWinds=0,this.m_lastAzimuth=Number.NaN,this.m_bNextSegmentCannotJoin=!1,this.m_densifiedPoints.length=0;const t=16;let m=0;const o=new w,i=new w;for(;this.m_segIter.hasNextSegment()&&this.m_numWinds<t;){const r=this.m_segIter.nextSegment();if(o.setCoordsPoint2D(r.getStartXY()),i.setCoordsPoint2D(r.getEndXY()),o.scale(this.m_bufferer.m_rpu),i.scale(this.m_bufferer.m_rpu),ee(o,i))o.x=i.x;else if(te(o,i))i.x=o.x;else{let l=-1,a=-1;const c=this.m_segIter.getPathIndex(),h=this.m_multiPath.getPathStart(c),_=this.m_multiPath.getPathEnd(c);if(l=this.m_segIter.getStartPointIndex()-1,a=this.m_segIter.getEndPointIndex()+1,l<h&&(l=this.m_multiPath.isClosedPath(c)?_-1:-1),a>_-1&&(a=this.m_multiPath.isClosedPath(c)?h:-1),l!==-1){const u=this.m_multiPath.getXY(l);u.scale(this.m_bufferer.m_rpu),te(u,o)&&(o.x=u.x)}if(a!==-1){const u=this.m_multiPath.getXY(a);u.scale(this.m_bufferer.m_rpu),ee(i,u)&&(i.x=u.x)}}this.m_densifiedPoints.length=0;const n=be(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_curveType,o,i,this.m_bufferer.m_segmentStep,Number.NaN,this.m_bufferer.m_radTolerance,this.m_startAzimuth,this.m_endAzimuth,this.m_densifiedPoints,this.m_currentDensifiedDelta);if(m===0)this.m_bRunningInGnomonic=this.isSegmentBufferInCurrentGnomonic(this.m_densifiedPoints),this.m_bRunningInGnomonic||(this.m_bRunningInGnomonic=this.tryUpdateGnomonic(this.m_densifiedPoints));else if(this.m_bRunningInGnomonic){if(!this.isSegmentBufferInCurrentGnomonic(this.m_densifiedPoints)){this.m_segIter.previousSegment(),this.m_segIter.previousSegment(),this.m_segIter.nextSegment();break}}else if(we(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,this.m_densifiedPoints,this.m_bufferer.m_absDistance*this.m_bufferer.m_ellipticToGeodesicMaxRatio,null,null,null)){this.m_segIter.previousSegment(),this.m_segIter.previousSegment(),this.m_segIter.nextSegment();break}if(n===0||Qe(o,i)?(this.m_bufferHelper.setEmpty(),this.m_bufferer.bufferPoint2D(o,this.m_bRunningInGnomonic,this.m_bufferHelper),this.m_bNextSegmentCannotJoin=!0):(this.m_bufferHelper.setEmpty(),this.m_bNextSegmentCannotJoin=this.checkAndPrepSegmentForCrossingAzimuthsOrPoleWrap(n,this.m_bufferHelper)),this.m_bNextSegmentCannotJoin){this.m_segIter.previousSegment(),this.m_segIter.hasPreviousSegment()?(this.m_segIter.previousSegment(),this.m_segIter.nextSegment()):this.m_segIter.resetToFirstSegment(),this.m_densified!=null&&this.m_densified.insertPointsFromPoints(this.m_densified.getPathCount()-1,-1,this.m_densifiedPoints,0,this.m_densifiedPoints.length-1,!0);break}this.m_densified!=null&&this.m_densified.insertPointsFromPoints(this.m_densified.getPathCount()-1,-1,this.m_densifiedPoints,0,this.m_densifiedPoints.length-1,!0),s===null&&(s=new N,s.addPathPoint2D(null,0,!0)),this.addJoinAndBufferLeftSide(s),m++}if(this.m_currentDensifiedDelta=[0],m>0){const r=this.m_segIter.getStartPointIndex(),n=this.m_segIter.getPathIndex();for(;m>0;){if(this.m_segIter.previousSegment(),o.setCoordsPoint2D(this.m_multiPath.getXY(this.m_segIter.getStartPointIndex())),i.setCoordsPoint2D(this.m_multiPath.getXY(this.m_segIter.getEndPointIndex())),o.scale(this.m_bufferer.m_rpu),i.scale(this.m_bufferer.m_rpu),this.m_bRunningInGnomonic)if(ee(o,i))o.x=i.x;else if(te(o,i))i.x=o.x;else{let l=-1,a=-1;const c=this.m_segIter.getPathIndex(),h=this.m_multiPath.getPathStart(c),_=this.m_multiPath.getPathEnd(c);if(l=this.m_segIter.getStartPointIndex()-1,a=this.m_segIter.getEndPointIndex()+1,l<h&&(l=this.m_multiPath.isClosedPath(c)?_-1:-1),a>_-1&&(a=this.m_multiPath.isClosedPath(c)?h:-1),l!==-1){const u=this.m_multiPath.getXY(l);u.scale(this.m_bufferer.m_rpu),te(u,o)&&(o.x=u.x)}if(a!==-1){const u=this.m_multiPath.getXY(a);u.scale(this.m_bufferer.m_rpu),ee(i,u)&&(i.x=u.x)}}this.m_densifiedPoints.length=0,be(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_curveType,i,o,this.m_bufferer.m_segmentStep,Number.NaN,this.m_bufferer.m_radTolerance,this.m_startAzimuth,this.m_endAzimuth,this.m_densifiedPoints,this.m_currentDensifiedDelta),this.addJoinAndBufferLeftSide(s),m--}return o.setCoordsPoint2D(this.m_multiPath.getXY(this.m_segIter.getStartPointIndex())),o.scale(this.m_bufferer.m_rpu),this.m_currentBufferedDelta=L(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,this.m_bufferer.m_absDistance,o,this.m_lastAzimuth+.5*Math.PI,this.m_lastAzimuth+1.5*Math.PI,this.m_bufferer.m_cornerStep,this.m_bRunningInGnomonic,this.m_currentBufferedDelta,s),this.m_segIter.resetToVertex(r,n),this.m_segIter.nextSegment(),s}return this.m_bNextSegmentCannotJoin=!1,this.m_segIter.nextSegment(),e=this.m_bufferHelper.clone(),e}isSegmentBufferInCurrentGnomonic(e){return this.m_gnomonic!==null&&Ge(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,e,this.m_bufferer.m_absDistance*this.m_bufferer.m_ellipticToGeodesicMaxRatio,this.m_gnomonicCenterRad,this.m_minGnomonicRadius)}tryUpdateGnomonic(e){const s=new w,t=new w,m=[0];return we(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,e,this.m_bufferer.m_absDistance*this.m_bufferer.m_ellipticToGeodesicMaxRatio,s,t,m)?(this.m_gnomonicCenterRad.setCoordsPoint2D(t),this.m_minGnomonicRadius=m[0],this.m_gnomonic=V(this.m_bufferer.m_gcs,s),!0):(this.m_gnomonic=null,!1)}checkAndPrepSegmentForCrossingAzimuthsOrPoleWrap(e,s){return this.m_bufferer.checkAndPrepSegmentForCrossingAzimuthsOrPoleWrap(this.m_densifiedPoints,e,this.m_startAzimuth[0],this.m_endAzimuth[0],this.m_bRunningInGnomonic,s)}addJoinAndBufferLeftSide(e){const s=this.m_densifiedPoints[0];let t=Number.NaN,m=this.m_startAzimuth[0]-O;const o=this.m_endAzimuth[0]+O;let i=!1;if(!Number.isNaN(this.m_lastAzimuth)){this.m_lastAzimuth>=this.m_startAzimuth[0]?(t=this.m_lastAzimuth+O,m=t+Math.PI-(this.m_lastAzimuth-this.m_startAzimuth[0])):(t=this.m_lastAzimuth+O,m=t+Math.PI-(A-(this.m_startAzimuth[0]-this.m_lastAzimuth))),i=!(this.m_lastAzimuth>=this.m_startAzimuth[0]&&this.m_lastAzimuth-this.m_startAzimuth[0]<=Math.PI)&&!(this.m_lastAzimuth<this.m_startAzimuth[0]&&this.m_startAzimuth[0]-this.m_lastAzimuth>=Math.PI);let r=!1;if(Math.abs(m-t)<=.5*this.m_bufferer.m_cornerStep&&(i||(r=!0)),r){if(e.removePointFromPath(0,e.getPointCount()-1),!this.m_bRunningInGnomonic){const n=new w;n.setCoordsPoint2D(e.getXY(e.getPointCount()-1)),n.scale(this.m_bufferer.m_rpu),n.x-this.m_currentBufferedDelta<-Math.PI?this.m_currentBufferedDelta-=A:n.x-this.m_currentBufferedDelta>Math.PI&&(this.m_currentBufferedDelta+=A)}m=.5*(m+t)}else if(i){const n=new w;n.setCoordsPoint2D(s),n.scale(1/this.m_bufferer.m_rpu),e.insertPoint2D(0,-1,n)}else L(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,this.m_bufferer.m_absDistance,this.m_densifiedPoints[0],t,m,this.m_bufferer.m_cornerStep,this.m_bRunningInGnomonic,this.m_currentBufferedDelta,e)}this.m_startAzimuth[0]!==this.m_lastAzimuth&&this.m_numWinds++,ce(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,this.m_bufferer.m_absDistance,this.m_bufferer.m_curveType,this.m_densifiedPoints,m,o,this.m_bRunningInGnomonic,this.m_currentBufferedDelta,e),this.m_lastAzimuth=this.m_endAzimuth[0]}}class mt extends Ne{constructor(e,s){super(e.m_progressTracker),this.m_pointIndex=-1,this.m_bufferer=e,this.m_multiPoint=s,this.m_bNeedsSimplify=!1;const t=new M;this.m_multiPoint.queryEnvelope(t);const m=t.getCenter(),o=m.clone();o.scale(this.m_bufferer.m_rpu),this.m_gnomonic=V(this.m_bufferer.m_gcs,m),this.m_gnomonicCenterRad=o.clone(),this.m_minGnomonicRadius=ie(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,o,75/180*Math.PI)}next(){if(this.m_bNeedsSimplify=!1,++this.m_pointIndex===this.m_multiPoint.getPointCount())return null;const e=this.m_multiPoint.getXY(this.m_pointIndex);e.scale(this.m_bufferer.m_rpu),this.m_bRunningInGnomonic=this.isPointBufferInCurrentGnomonic(e),this.m_bRunningInGnomonic||(this.m_bRunningInGnomonic=this.tryUpdateGnomonic(e));const s=new N,t=this.m_bufferer.bufferPoint2D(e,this.m_bRunningInGnomonic,s);return this.m_bNeedsSimplify=t,s}isPointBufferInCurrentGnomonic(e){return this.m_gnomonic!==null&&Me(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,e,this.m_bufferer.m_absDistance*this.m_bufferer.m_ellipticToGeodesicMaxRatio,this.m_gnomonicCenterRad,this.m_minGnomonicRadius)}tryUpdateGnomonic(e){const s=new w,t=new w,m=[0];return ot(this.m_bufferer.m_a,this.m_bufferer.m_eSquared,this.m_bufferer.m_rpu,e,this.m_bufferer.m_absDistance*this.m_bufferer.m_ellipticToGeodesicMaxRatio,s,t,m)?(this.m_gnomonicCenterRad.setCoordsPoint2D(t),this.m_minGnomonicRadius=m[0],this.m_gnomonic=V(this.m_bufferer.m_gcs,s),!0):(this.m_gnomonic=null,!1)}}class _t{getOperatorType(){return 10110}supportsCurves(){return!0}accelerateGeometry(e,s,t){return!1}canAccelerateGeometry(e){return!1}executeMany(e,s,t,m,o,i,r,n){if(r){const l=new ve(e,s,t,m,o,!1,i,n);return new U().executeMany(l,s,n)}return new ve(e,s,t,m,o,!1,i,n)}execute(e,s,t,m,o,i,r){const n=new Ae([e]),l=[m],a=this.executeMany(n,s,t,l,o,!1,i,r).next();return a||Ee("geodesic buffer null output"),a}}class ve extends qe{constructor(e,s,t,m,o,i,r,n){super(),this.m_currentUnionEnvelope2D=new M,this.m_index=-1,this.m_dindex=-1,this.m_progressTracker=n,i&&Re(""),s||ue(""),s.getCoordinateSystemType()===0&&ue(""),this.m_inputGeoms=e,this.m_spatialReference=s,this.m_curveType=t,this.m_distances=m,this.m_convergenceOffset=o,this.m_bOutlineOnly=i,this.m_bUnion=r}next(){let e;for(;e=this.m_inputGeoms.next();)return Se(e),this.m_index=this.m_inputGeoms.getGeometryID(),this.m_dindex+1<this.m_distances.length&&this.m_dindex++,this.geodesicBuffer(e,this.m_distances[this.m_dindex]);return null}getGeometryID(){return this.m_index}tock(){return!0}getRank(){return 1}geodesicBuffer(e,s){return nt(e,this.m_spatialReference,this.m_curveType,s,this.m_convergenceOffset,this.m_progressTracker)}}export{_t as OperatorGeodesicBuffer};
