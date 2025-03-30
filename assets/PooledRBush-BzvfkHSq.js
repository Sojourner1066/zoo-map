import{bB as w,c$ as F,d0 as D,d1 as v,d2 as I}from"./index-BCOvYjsd.js";class C{constructor(t=9,e){this._compareMinX=y,this._compareMinY=j,this._toBBox=n=>n,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&(typeof e=="function"?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),d.prune(),Y.prune(),m.prune(),X.prune()}all(t){$(this._data,t)}search(t,e){let n=this._data;const h=this._toBBox;if(M(t,n))for(d.clear();n;){for(let s=0,a=n.children.length;s<a;s++){const r=n.children[s],o=n.leaf?h(r):r;M(t,o)&&(n.leaf?e(r):b(t,o)?$(r,e):d.push(r))}n=d.pop()}}collides(t){let e=this._data;const n=this._toBBox;if(!M(t,e))return!1;for(d.clear();e;){for(let h=0,s=e.children.length;h<s;h++){const a=e.children[h],r=e.leaf?n(a):a;if(M(t,r)){if(e.leaf||b(t,r))return!0;d.push(a)}}e=d.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let n=0,h=t.length;n<h;n++)this.insert(t[n]);return this}let e=this._build(t.slice(),0,t.length-1,0);if(this._data.children.length)if(this._data.height===e.height)this._splitRoot(this._data,e);else{if(this._data.height<e.height){const n=this._data;this._data=e,e=n}this._insert(e,this._data.height-e.height-1,!0)}else this._data=e;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new B([]),this}remove(t){if(!t)return this;let e,n=this._data,h=null,s=0,a=!1;const r=this._toBBox(t);for(m.clear(),X.clear();n||m.length>0;){if(n||(n=m.pop(),h=m.data[m.length-1],s=X.pop()??0,a=!0),n.leaf&&(e=F(n.children,D(t),n.children.length,n.indexHint),e!==-1))return n.children.splice(e,1),m.push(n),this._condense(m),this;a||n.leaf||!b(n,r)?h?(s++,n=h.children[s],a=!1):n=null:(m.push(n),X.push(s),s=0,h=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_build(t,e,n,h){const s=n-e+1;let a=this._maxEntries;if(s<=a){const l=new B(t.slice(e,n+1));return f(l,this._toBBox),l}h||(h=Math.ceil(Math.log(s)/Math.log(a)),a=Math.ceil(s/a**(h-1)));const r=new E([]);r.height=h;const o=Math.ceil(s/a),c=o*Math.ceil(Math.sqrt(a));A(t,e,n,c,this._compareMinX);for(let l=e;l<=n;l+=c){const u=Math.min(l+c-1,n);A(t,l,u,o,this._compareMinY);for(let p=l;p<=u;p+=o){const R=Math.min(p+o-1,u);r.children.push(this._build(t,p,R,h-1))}}return f(r,this._toBBox),r}_insert(t,e,n){const h=this._toBBox,s=n?t:h(t);m.clear();const a=J(s,this._data,e,m);for(a.children.push(t),_(a,s);e>=0&&m.data[e].children.length>this._maxEntries;)this._split(m,e),e--;N(s,m,e)}_split(t,e){const n=t.data[e],h=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,h);const a=this._chooseSplitIndex(n,s,h);if(!a)return;const r=n.children.splice(a,n.children.length-a),o=n.leaf?new B(r):new E(r);o.height=n.height,f(n,this._toBBox),f(o,this._toBBox),e?t.data[e-1].children.push(o):this._splitRoot(n,o)}_splitRoot(t,e){this._data=new E([t,e]),this._data.height=t.height+1,f(this._data,this._toBBox)}_chooseSplitIndex(t,e,n){let h,s,a;h=s=1/0;for(let r=e;r<=n-e;r++){const o=x(t,0,r,this._toBBox),c=x(t,r,n,this._toBBox),l=q(o,c),u=S(o)+S(c);l<h?(h=l,a=r,s=u<s?u:s):l===h&&u<s&&(s=u,a=r)}return a}_chooseSplitAxis(t,e,n){const h=t.leaf?this._compareMinX:y,s=t.leaf?this._compareMinY:j;this._allDistMargin(t,e,n,h)<this._allDistMargin(t,e,n,s)&&t.children.sort(h)}_allDistMargin(t,e,n,h){t.children.sort(h);const s=this._toBBox,a=x(t,0,e,s),r=x(t,n-e,n,s);let o=g(a)+g(r);for(let c=e;c<n-e;c++){const l=t.children[c];_(a,t.leaf?s(l):l),o+=g(a)}for(let c=n-e-1;c>=e;c--){const l=t.children[c];_(r,t.leaf?s(l):l),o+=g(r)}return o}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(n.children.length===0)if(e>0){const h=t.data[e-1],s=h.children;s.splice(F(s,n,s.length,h.indexHint),1)}else this.clear();else f(n,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this._compareMinX=new Function("a","b",e.join(t[0])),this._compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function J(i,t,e,n){for(;n.push(t),t.leaf!==!0&&n.length-1!==e;){let h,s=1/0,a=1/0;for(let r=0,o=t.children.length;r<o;r++){const c=t.children[r],l=S(c),u=O(i,c)-l;u<a?(a=u,s=l<s?l:s,h=c):u===a&&l<s&&(s=l,h=c)}t=h||t.children[0]}return t}function $(i,t){let e=i;for(Y.clear();e;){if(e.leaf===!0)for(const n of e.children)t(D(n));else Y.pushArray(e.children);e=Y.pop()??null}}function N(i,t,e){for(let n=e;n>=0;n--)_(t.data[n],i)}function f(i,t){x(i,0,i.children.length,t,i)}function x(i,t,e,n,h){h||(h=new B([])),h.minX=1/0,h.minY=1/0,h.maxX=-1/0,h.maxY=-1/0;for(let s,a=t;a<e;a++)s=i.children[a],_(h,i.leaf?n(s):s);return h}function _(i,t){i.minX=Math.min(i.minX,t.minX),i.minY=Math.min(i.minY,t.minY),i.maxX=Math.max(i.maxX,t.maxX),i.maxY=Math.max(i.maxY,t.maxY)}function y(i,t){return i.minX-t.minX}function j(i,t){return i.minY-t.minY}function S(i){return(i.maxX-i.minX)*(i.maxY-i.minY)}function g(i){return i.maxX-i.minX+(i.maxY-i.minY)}function O(i,t){return(Math.max(t.maxX,i.maxX)-Math.min(t.minX,i.minX))*(Math.max(t.maxY,i.maxY)-Math.min(t.minY,i.minY))}function q(i,t){const e=Math.max(i.minX,t.minX),n=Math.max(i.minY,t.minY),h=Math.min(i.maxX,t.maxX),s=Math.min(i.maxY,t.maxY);return Math.max(0,h-e)*Math.max(0,s-n)}function b(i,t){return i.minX<=t.minX&&i.minY<=t.minY&&t.maxX<=i.maxX&&t.maxY<=i.maxY}function M(i,t){return t.minX<=i.maxX&&t.minY<=i.maxY&&t.maxX>=i.minX&&t.maxY>=i.minY}function A(i,t,e,n,h){const s=[t,e];for(;s.length;){const a=s.pop(),r=s.pop();if(a-r<=n)continue;const o=r+Math.ceil((a-r)/n/2)*n;v(i,o,r,a,h),s.push(r,o,o,a)}}const d=new w,Y=new w,m=new w,X=new w({deallocator:void 0});class k{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class H extends k{constructor(){super(...arguments),this.height=1,this.indexHint=new I}}class B extends H{constructor(t){super(),this.children=t,this.leaf=!0}}class E extends H{constructor(t){super(),this.children=t,this.leaf=!1}}export{k as E,C as s};
