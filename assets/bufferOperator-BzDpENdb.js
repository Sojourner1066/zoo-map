import{fC as p,G as x}from"./index-BCOvYjsd.js";import{f as G,l as y}from"./operatorBuffer-CrlXasmU.js";import{getSpatialReference as f,fromGeometry as g,toGeometry as u,fromGeometries as I}from"./jsonConverter-D-LEZm1T.js";import"./SimpleGeometryCursor-B92kdZ15.js";import"./Transformation2D-D0MqPw7t.js";import"./ProjectionTransformation-B9B51Nu1.js";import"./GeometryCleaner-BEJM7I4l-Co0ENfAi.js";import"./OperatorGeneralize-Cir3ZKmX.js";function B(o,e,i={}){const{unit:t}=i,a=f(o);t&&a&&(e=p(e,t,a));const m=g(o),r=m.getSpatialReference();return u(G(m.getGeometry(),r,e),r)}function D(o,e,i={}){let{maxDeviation:t=NaN,maxVerticesInFullCircle:a=96,union:m=!1,unit:r}=i;const n=f(o);r&&n&&(e=e.map(c=>p(c,r,n)),t&&(t=p(t,r,n)));const[l,s]=I(o);return y(l,s,e,t,a,m).map(c=>u(c,s)).filter(x)}export{B as execute,D as executeMany};
