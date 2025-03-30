import"./index-DDoFGu1Y.js";import"./index-Bm7SSVW8.js";import"./index-BIXYFCbx.js";import"./customElement-BK6zTQiR.js";import"./customElement-Bpep7xI5.js";import{n as t}from"./customElement-CrjvkUfF.js";import{d5 as B,fk as c,d9 as x,fi as C,da as p,dc as I,dd as y}from"./index-BCOvYjsd.js";import{n as f}from"./ref-hHDUa5b7.js";import{i as E}from"./keyed-CtiGmldO.js";import{g as P}from"./dom-rUppw8Km.js";import{m as F,p as A}from"./interactive-CQ3ns4XB.js";import{m as S}from"./component-x4pLxDPh.js";import{s as T}from"./useT9n-4151hjTB.js";import"./guid-BDWAkmkV.js";import"./observers-ByoypgsJ.js";import"./floating-ui-HaYOr0wF.js";import"./debounce-D0G5qrda.js";import"./openCloseComponent-CQjssaoU.js";import"./static-gJLQfnwh.js";import"./FloatingArrow-B_C_IYN9.js";import"./key-ak3_eHKH.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.1.0 */const O={backButton:"back-button"},b={backLeft:"chevron-left",backRight:"chevron-right"},o={actionBar:"action-bar",alerts:"alerts",contentTop:"content-top",contentBottom:"content-bottom",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions",footerEnd:"footer-end",footerStart:"footer-start"},R=I`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:none;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([selected]){display:flex}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-inline-end-width:1px;border-color:var(--calcite-flow-border-color, var(--calcite-color-border-3))}calcite-panel{--calcite-panel-background-color: var(--calcite-flow-background-color);--calcite-panel-border-color: var(--calcite-flow-border-color, var(--calcite-flow-item-header-border-block-end));--calcite-panel-corner-radius: var(--calcite-flow-corner-radius);--calcite-panel-description-text-color: var(--calcite-flow-description-text-color);--calcite-panel-footer-background-color: var(--calcite-flow-footer-background-color);--calcite-panel-footer-space: var(--calcite-flow-footer-space, var(--calcite-flow-item-footer-padding));--calcite-panel-header-action-background-color-hover: var(--calcite-flow-header-action-background-color-hover);--calcite-panel-header-action-background-color-press: var(--calcite-flow-header-action-background-color-press);--calcite-panel-header-action-background-color: var(--calcite-flow-header-action-background-color);--calcite-panel-header-action-indicator-color: var(--calcite-flow-header-action-indicator-color);--calcite-panel-header-action-text-color-press: var(--calcite-flow-header-action-text-color-press);--calcite-panel-header-action-text-color: var(--calcite-flow-header-action-text-color);--calcite-panel-header-background-color: var(--calcite-flow-header-background-color);--calcite-panel-header-content-space: var(--calcite-flow-header-content-space);--calcite-panel-heading-text-color: var(--calcite-flow-heading-text-color);--calcite-panel-space: var(--calcite-flow-space)}:host([hidden]){display:none}[hidden]{display:none}`,i=class i extends B{constructor(){super(...arguments),this.closable=!1,this.closed=!1,this.collapseDirection="down",this.collapsed=!1,this.collapsible=!1,this.disabled=!1,this.loading=!1,this.menuOpen=!1,this.messages=T(),this.overlayPositioning="absolute",this.scale="m",this.selected=!1,this.showBackButton=!1,this.calciteFlowItemBack=c(),this.calciteFlowItemClose=c({cancelable:!1}),this.calciteFlowItemScroll=c({cancelable:!1}),this.calciteFlowItemToggle=c({cancelable:!1}),this.calciteInternalFlowItemChange=c({cancelable:!1})}async scrollContentTo(e){var a;await((a=this.containerEl)==null?void 0:a.scrollContentTo(e))}async setFocus(){await S(this);const{backButtonEl:e,containerEl:a}=this;if(e)return e.setFocus();if(a)return a.setFocus()}willUpdate(e){e.has("selected")&&(this.hasUpdated||this.selected!==!1)&&this.calciteInternalFlowItemChange.emit()}updated(){F(this)}handleInternalPanelScroll(e){e.target===this.containerEl&&(e.stopPropagation(),this.calciteFlowItemScroll.emit())}handleInternalPanelClose(e){e.target===this.containerEl&&(e.stopPropagation(),this.closed=!0,this.calciteFlowItemClose.emit())}handleInternalPanelToggle(e){e.target===this.containerEl&&(e.stopPropagation(),this.collapsed=e.target.collapsed,this.calciteFlowItemToggle.emit())}backButtonClick(){this.calciteFlowItemBack.emit()}setBackRef(e){this.backButtonEl=e}setContainerRef(e){this.containerEl=e}renderBackButton(){const{el:e}=this,a=P(e)==="rtl",{showBackButton:n,backButtonClick:r,messages:d}=this,l=d.back,s=a?b.backRight:b.backLeft;return n?E("flow-back-button",p`<calcite-action .ariaLabel=${l} class=${x(O.backButton)} .icon=${s} @click=${r} scale=s slot=header-actions-start .text=${l} title=${l??C} ${f(this.setBackRef)}></calcite-action>`):null}render(){const{collapsed:e,collapseDirection:a,collapsible:n,closable:r,closed:d,description:l,disabled:s,heading:m,headingLevel:g,loading:$,menuOpen:u,messages:k,overlayPositioning:w,beforeClose:v}=this;return A({disabled:s,children:p`<calcite-panel .beforeClose=${v} .closable=${r} .closed=${d} .collapseDirection=${a} .collapsed=${e} .collapsible=${n} .description=${l} .disabled=${s} .heading=${m} .headingLevel=${g} .loading=${$} .menuOpen=${u} .messageOverrides=${k} @calcitePanelClose=${this.handleInternalPanelClose} @calcitePanelScroll=${this.handleInternalPanelScroll} @calcitePanelToggle=${this.handleInternalPanelToggle} .overlayPositioning=${w} .scale=${this.scale} ${f(this.setContainerRef)}>${this.renderBackButton()}<slot name=${o.actionBar} slot=${t.actionBar}></slot><slot name=${o.alerts} slot=${t.alerts}></slot><slot name=${o.headerActionsStart} slot=${t.headerActionsStart}></slot><slot name=${o.headerActionsEnd} slot=${t.headerActionsEnd}></slot><slot name=${o.headerContent} slot=${t.headerContent}></slot><slot name=${o.headerMenuActions} slot=${t.headerMenuActions}></slot><slot name=${o.fab} slot=${t.fab}></slot><slot name=${o.contentTop} slot=${t.contentTop}></slot><slot name=${o.contentBottom} slot=${t.contentBottom}></slot><slot name=${o.footerStart} slot=${t.footerStart}></slot><slot name=${o.footer} slot=${t.footer}></slot><slot name=${o.footerEnd} slot=${t.footerEnd}></slot><slot name=${o.footerActions} slot=${t.footerActions}></slot><slot></slot></calcite-panel>`})}};i.properties={beforeBack:0,beforeClose:0,closable:7,closed:7,collapseDirection:1,collapsed:7,collapsible:7,description:1,disabled:7,heading:1,headingLevel:11,loading:7,menuOpen:7,messageOverrides:0,overlayPositioning:3,scale:3,selected:7,showBackButton:5},i.styles=R;let h=i;y("calcite-flow-item",h);export{h as FlowItem};
