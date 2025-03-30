import{_ as g,cI as D,iM as h}from"./index-BCOvYjsd.js";import{_ as A}from"./TextureFormat-1mYWTFa-.js";function S(){return C??(C=(async()=>{const e=await g(()=>import("./basis_encoder-sWYVw54x.js"),[]),t=await e.default({locateFile:a=>D(`esri/libs/basisu/${a}`)});return t.initializeBasis(),t})()),C}let C;function R(){return y??(y=(async()=>await(await g(()=>import("./dxt_encoder-gc8lv37B.js"),[])).default({locateFile:t=>D(`esri/libs/dxtEncoder/${t}`)}))()),y}let y,X,b,o=null,d=null;class _{constructor(t,a){this.internalFormat=t,this.compressedTexture=a}}async function j(e){var a;const t=G(e.data,e.flipped);if(e.hasS3TC){d||await B();const r=new Uint8Array(t.length);d==null||d.encode(new Uint8Array(t),e.width,e.height,r);const n=H(r,!0),l=[r.buffer];return{result:new _((n==null?void 0:n.internalFormat)??null,(n==null?void 0:n.textureData)??null),transferList:l}}if(e.hasETC){o||await x();const r=await F(t,e.width,e.height,e.hasMipmap),n=r?await M(r):null,l=((a=n==null?void 0:n.compressedTexture)==null?void 0:a.levels.map(s=>s.buffer))||[];return{result:new _((n==null?void 0:n.internalFormat)??null,(n==null?void 0:n.compressedTexture)??null),transferList:l}}return{result:new _(null,null)}}async function x(){o||(o=await(X??(X=S())))}async function B(){d||(d=await(b??(b=R())))}async function F(e,t,a,r,n=255,l=0,s=!1,c=!1){if(!o)return null;const i=new o.BasisEncoder;i.setPerceptual(!c),i.setCheckForAlpha(!0),i.setForceAlpha(!1),i.setRenormalize(c),i.setMipGen(r),i.setMipSRGB(!c),i.setCreateKTX2File(!0),i.setKTX2SRGBTransferFunc(!c),i.setQualityLevel(n),i.setCompressionLevel(l);const T=new Uint8Array(e.byteLength);i.setSliceSourceImage(0,new Uint8Array(e),t,a,s);const w=i.encode(T),u=new Uint8Array(T.buffer,0,w),f=new o.KTX2File(new Uint8Array(u));return f.isValid()?(i.delete(),u):(f.close(),f.delete(),i.delete(),null)}async function M(e){if(!o)return new _(null,null);const t=new o.KTX2File(new Uint8Array(e));t.startTranscoding();const[a,r]=t.getHasAlpha()?[A.ETC2_RGBA,h.COMPRESSED_RGBA8_ETC2_EAC]:[A.ETC1_RGB,h.COMPRESSED_RGB8_ETC2],n=t.getLevels(),l=[];for(let s=0;s<n;s++)l.push(new Uint8Array(t.getImageTranscodedSizeInBytes(s,0,0,a))),t.transcodeImage(l[s],s,0,0,a,0,-1,-1);return t.close(),t.delete(),{internalFormat:r,compressedTexture:{type:"compressed",levels:l}}}function G(e,t=!1){const a=new OffscreenCanvas(e.width,e.height),r=a.getContext("2d");return t&&r.scale(1,-1),r.drawImage(e,0,t?-e.height:0),r.getImageData(0,0,a.width,a.height).data}const O=31,v=1,I=2,P=3,U=4,L=7,K=21,k=131072;function m(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const z=m("DXT1"),$=m("DXT3"),V=m("DXT5");function H(e,t){const a=new Int32Array(e.buffer,e.byteOffset,O);let r,n;switch(a[K]){case z:r=8,n=h.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case $:r=16,n=h.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case V:r=16,n=h.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}let l=1,s=a[U],c=a[P];(3&s||3&c)&&(s=s+3&-4,c=c+3&-4);const i=s,T=c;let w,u;a[I]&k&&t!==!1&&(l=Math.max(1,a[L]));let f=e.byteOffset+a[v]+4;const p=[];for(let E=0;E<l;++E)u=(s+3>>2)*(c+3>>2)*r,w=new Uint8Array(e.buffer,f,u),p.push(w),f+=u,s=Math.max(1,s>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:p},internalFormat:n,width:i,height:T}}export{_ as TextureCompressionWorkerOutput,j as compress,F as compressRGBADataToKTX2,M as createTextureDataKTX2,x as initializeBasisEncoder,B as initializeDXTEncoder};
