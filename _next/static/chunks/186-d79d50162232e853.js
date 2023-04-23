(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[186],{2350:function(){},3454:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(7663)},9578:function(e,t,n){var r=n(3454);n(2350);var o=n(7294),i=o&&"object"==typeof o&&"default"in o?o:{default:o};function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=void 0!==r&&r.env&&!0,s=function(e){return"[object String]"===Object.prototype.toString.call(e)},a=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,o=t.optimizeForSpeed,i=void 0===o?l:o;c(s(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",c("boolean"==typeof i,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=i,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var u=document.querySelector('meta[property="csp-nonce"]');this._nonce=u?u.getAttribute("content"):null}var t,n=e.prototype;return n.setOptimizeForSpeed=function(e){c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},n.isOptimizeForSpeed=function(){return this._optimizeForSpeed},n.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(l||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},n.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},n.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},n.insertRule=function(e,t){if(c(s(e),"`insertRule` accepts only strings"),this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return l||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},n.replaceRule=function(e,t){if(this._optimizeForSpeed){var n=this.getSheet();if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){l||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];c(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},n.deleteRule=function(e){if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},n.flush=function(){this._injected=!1,this._rulesCount=0,this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]},n.cssRules=function(){var e=this;return this._tags.reduce(function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},n.makeStyleTag=function(e,t,n){t&&c(s(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r},u(e.prototype,[{key:"length",get:function(){return this._rulesCount}}]),t&&u(e,t),e}();function c(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var d=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0},f={};function p(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;return f[r]||(f[r]="jsx-"+d(e+"-"+n)),f[r]}function v(e,t){var n=e+t;return f[n]||(f[n]=t.replace(/__jsx-style-dynamic-selector/g,e)),f[n]}var h=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,i=void 0!==o&&o;this._sheet=r||new a({name:"styled-jsx",optimizeForSpeed:i}),this._sheet.inject(),r&&"boolean"==typeof i&&(this._sheet.setOptimizeForSpeed(i),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts){this._instancesCounts[r]+=1;return}var i=o.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[r]=i,this._instancesCounts[r]=1},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,n;return t=this.cssRules(),void 0===(n=e)&&(n={}),t.map(function(e){var t=e[0],r=e[1];return i.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:n.nonce?n.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})})},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var o=p(r,n);return{styleId:o,rules:Array.isArray(t)?t.map(function(e){return v(o,e)}):[v(o,t)]}}return{styleId:p(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),m=o.createContext(null);m.displayName="StyleSheetContext";var y=i.default.useInsertionEffect||i.default.useLayoutEffect,g=new h;function b(e){var t=g||o.useContext(m);return t&&y(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)]),null}b.dynamic=function(e){return e.map(function(e){return p(e[0],e[1])}).join(" ")},t.style=b},6465:function(e,t,n){"use strict";e.exports=n(9578).style},7663:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var s=[],a=!1,c=-1;function d(){a&&r&&(a=!1,r.length?s=r.concat(s):c=-1,s.length&&f())}function f(){if(!a){var e=l(d);a=!0;for(var t=s.length;t;){for(r=s,s=[];++c<t;)r&&r[c].run();c=-1,t=s.length}r=null,a=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||a||l(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},u=!0;try{t[e](i,i.exports,r),u=!1}finally{u&&delete n[e]}return i.exports}r.ab="//";var o=r(229);e.exports=o}()},1386:function(e,t,n){"use strict";n.d(t,{J:function(){return er}});var r,o,i,u,l,s,a,c,d,f,p,v=n(7294),h=n(2984),m=n(2351),y=n(3784),g=n(6723),b=n(2180),S=n(7896);let E=null!=(p=v.useId)?p:function(){let e=(0,b.H)(),[t,n]=v.useState(e?()=>S.O.nextId():null);return(0,g.e)(()=>{null===t&&n(S.O.nextId())},[t]),null!=t?""+t:void 0};var w=((r=w||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r);function _(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}function P(e){return S.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let F=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var T=((o=T||{})[o.First=1]="First",o[o.Previous=2]="Previous",o[o.Next=4]="Next",o[o.Last=8]="Last",o[o.WrapAround=16]="WrapAround",o[o.NoScroll=32]="NoScroll",o),C=((i=C||{})[i.Error=0]="Error",i[i.Overflow=1]="Overflow",i[i.Success=2]="Success",i[i.Underflow=3]="Underflow",i),O=((u=O||{})[u.Previous=-1]="Previous",u[u.Next=1]="Next",u);function x(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(F)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var R=((l=R||{})[l.Strict=0]="Strict",l[l.Loose=1]="Loose",l);function N(e,t=0){var n;return e!==(null==(n=P(e))?void 0:n.body)&&(0,h.E)(t,{0:()=>e.matches(F),1(){let t=e;for(;null!==t;){if(t.matches(F))return!0;t=t.parentElement}return!1}})}var A=((s=A||{})[s.Keyboard=0]="Keyboard",s[s.Mouse=1]="Mouse",s);function I(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var i,u,l;let s=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,a=Array.isArray(e)?n?function(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let i=r.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}(e):e:x(e);o.length>0&&a.length>1&&(a=a.filter(e=>!o.includes(e))),r=null!=r?r:s.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,a.indexOf(r))-1;if(4&t)return Math.max(0,a.indexOf(r))+1;if(8&t)return a.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},p=0,v=a.length,h;do{if(p>=v||p+v<=0)return 0;let e=d+p;if(16&t)e=(e+v)%v;else{if(e<0)return 3;if(e>=v)return 1}null==(h=a[e])||h.focus(f),p+=c}while(h!==s.activeElement);return 6&t&&null!=(l=null==(u=null==(i=h)?void 0:i.matches)?void 0:u.call(i,"textarea,input"))&&l&&h.select(),2}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));var k=n(6567);function L(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}var j=n(3855);function z(e,t,n){let r=(0,j.E)(t);(0,v.useEffect)(()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}function M(...e){return(0,v.useMemo)(()=>P(...e),[...e])}var D=((a=D||{})[a.None=1]="None",a[a.Focusable=2]="Focusable",a[a.Hidden=4]="Hidden",a);let H=(0,m.yV)(function(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,m.sY)({ourProps:o,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})});var B=n(3781),V=((c=V||{})[c.Forwards=0]="Forwards",c[c.Backwards=1]="Backwards",c);function Z(){var e,t;let n,r=(0,v.useRef)(0);return e="keydown",t=e=>{"Tab"===e.key&&(r.current=e.shiftKey?1:0)},n=(0,j.E)(t),(0,v.useEffect)(()=>{function t(e){n.current(e)}return window.addEventListener(e,t,!0),()=>window.removeEventListener(e,t,!0)},[e,!0]),r}var $=((d=$||{})[d.Open=0]="Open",d[d.Closed=1]="Closed",d),U=((f=U||{})[f.TogglePopover=0]="TogglePopover",f[f.ClosePopover=1]="ClosePopover",f[f.SetButton=2]="SetButton",f[f.SetButtonId=3]="SetButtonId",f[f.SetPanel=4]="SetPanel",f[f.SetPanelId=5]="SetPanelId",f);let q={0:e=>({...e,popoverState:(0,h.E)(e.popoverState,{0:1,1:0})}),1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},G=(0,v.createContext)(null);function Y(e){let t=(0,v.useContext)(G);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Y),t}return t}G.displayName="PopoverContext";let K=(0,v.createContext)(null);function W(e){let t=(0,v.useContext)(K);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,W),t}return t}K.displayName="PopoverAPIContext";let J=(0,v.createContext)(null);function X(){return(0,v.useContext)(J)}J.displayName="PopoverGroupContext";let Q=(0,v.createContext)(null);function ee(e,t){return(0,h.E)(t.type,q,e,t)}Q.displayName="PopoverPanelContext";let et=m.AN.RenderStrategy|m.AN.Static,en=m.AN.RenderStrategy|m.AN.Static,er=Object.assign((0,m.yV)(function(e,t){var n,r,o,i;let u;let l=(0,v.useRef)(null),s=(0,y.T)(t,(0,y.h)(e=>{l.current=e})),a=(0,v.useRef)([]),c=(0,v.useReducer)(ee,{popoverState:1,buttons:a,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:(0,v.createRef)(),afterPanelSentinel:(0,v.createRef)()}),[{popoverState:d,button:f,buttonId:p,panel:g,panelId:b,beforePanelSentinel:S,afterPanelSentinel:E},w]=c,_=M(null!=(n=l.current)?n:f),P=(0,v.useMemo)(()=>{if(!f||!g)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(f))^Number(null==e?void 0:e.contains(g)))return!0;let e=x(),t=e.indexOf(f),n=(t+e.length-1)%e.length,r=(t+1)%e.length,o=e[n],i=e[r];return!g.contains(o)&&!g.contains(i)},[f,g]),F=(0,j.E)(p),T=(0,j.E)(b),C=(0,v.useMemo)(()=>({buttonId:F,panelId:T,close:()=>w({type:1})}),[F,T,w]),O=X(),A=null==O?void 0:O.registerPopover,I=(0,B.z)(()=>{var e;return null!=(e=null==O?void 0:O.isFocusWithinPopoverGroup())?e:(null==_?void 0:_.activeElement)&&((null==f?void 0:f.contains(_.activeElement))||(null==g?void 0:g.contains(_.activeElement)))});(0,v.useEffect)(()=>null==A?void 0:A(C),[A,C]),r=null==_?void 0:_.defaultView,o="focus",i=e=>{var t,n,r,o;0===d&&(I()||f&&g&&e.target!==window&&(null!=(n=null==(t=S.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(o=null==(r=E.current)?void 0:r.contains)&&o.call(r,e.target)||w({type:1})))},u=(0,j.E)(i),(0,v.useEffect)(()=>{function e(e){u.current(e)}return(r=null!=r?r:window).addEventListener(o,e,!0),()=>r.removeEventListener(o,e,!0)},[r,o,!0]),function(e,t,n=!0){let r=(0,v.useRef)(!1);function o(n,o){if(!r.current||n.defaultPrevented)return;let i=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),u=o(n);if(null!==u&&u.getRootNode().contains(u)){for(let e of i){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(u)||n.composed&&n.composedPath().includes(t))return}return N(u,R.Loose)||-1===u.tabIndex||n.preventDefault(),t(n,u)}}(0,v.useEffect)(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);let i=(0,v.useRef)(null);z("mousedown",e=>{var t,n;r.current&&(i.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),z("click",e=>{i.current&&(o(e,()=>i.current),i.current=null)},!0),z("blur",e=>o(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}([f,g],(e,t)=>{w({type:1}),N(t,R.Loose)||(e.preventDefault(),null==f||f.focus())},0===d);let L=(0,B.z)(e=>{w({type:1});let t=e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:f:f;null==t||t.focus()}),D=(0,v.useMemo)(()=>({close:L,isPortalled:P}),[L,P]),H=(0,v.useMemo)(()=>({open:0===d,close:L}),[d,L]);return v.createElement(Q.Provider,{value:null},v.createElement(G.Provider,{value:c},v.createElement(K.Provider,{value:D},v.createElement(k.up,{value:(0,h.E)(d,{0:k.ZM.Open,1:k.ZM.Closed})},(0,m.sY)({ourProps:{ref:s},theirProps:e,slot:H,defaultTag:"div",name:"Popover"})))))}),{Button:(0,m.yV)(function(e,t){let n=E(),{id:r=`headlessui-popover-button-${n}`,...o}=e,[i,u]=Y("Popover.Button"),{isPortalled:l}=W("Popover.Button"),s=(0,v.useRef)(null),a=`headlessui-focus-sentinel-${E()}`,c=X(),d=null==c?void 0:c.closeOthers,f=null!==(0,v.useContext)(Q);(0,v.useEffect)(()=>{if(!f)return u({type:3,buttonId:r}),()=>{u({type:3,buttonId:null})}},[f,r,u]);let[p]=(0,v.useState)(()=>Symbol()),b=(0,y.T)(s,t,f?null:e=>{if(e)i.buttons.current.push(p);else{let e=i.buttons.current.indexOf(p);-1!==e&&i.buttons.current.splice(e,1)}i.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),e&&u({type:2,button:e})}),S=(0,y.T)(s,t),P=M(s),F=(0,B.z)(e=>{var t,n,r;if(f){if(1===i.popoverState)return;switch(e.key){case w.Space:case w.Enter:e.preventDefault(),null==(n=(t=e.target).click)||n.call(t),u({type:1}),null==(r=i.button)||r.focus()}}else switch(e.key){case w.Space:case w.Enter:e.preventDefault(),e.stopPropagation(),1===i.popoverState&&(null==d||d(i.buttonId)),u({type:0});break;case w.Escape:if(0!==i.popoverState)return null==d?void 0:d(i.buttonId);if(!s.current||null!=P&&P.activeElement&&!s.current.contains(P.activeElement))return;e.preventDefault(),e.stopPropagation(),u({type:1})}}),O=(0,B.z)(e=>{f||e.key===w.Space&&e.preventDefault()}),R=(0,B.z)(t=>{var n,r;_(t.currentTarget)||e.disabled||(f?(u({type:1}),null==(n=i.button)||n.focus()):(t.preventDefault(),t.stopPropagation(),1===i.popoverState&&(null==d||d(i.buttonId)),u({type:0}),null==(r=i.button)||r.focus()))}),N=(0,B.z)(e=>{e.preventDefault(),e.stopPropagation()}),A=0===i.popoverState,k=(0,v.useMemo)(()=>({open:A}),[A]),j=function(e,t){let[n,r]=(0,v.useState)(()=>L(e));return(0,g.e)(()=>{r(L(e))},[e.type,e.as]),(0,g.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,s),z=f?{ref:S,type:j,onKeyDown:F,onClick:R}:{ref:b,id:i.buttonId,type:j,"aria-expanded":e.disabled?void 0:0===i.popoverState,"aria-controls":i.panel?i.panelId:void 0,onKeyDown:F,onKeyUp:O,onClick:R,onMouseDown:N},$=Z(),U=(0,B.z)(()=>{let e=i.panel;e&&(0,h.E)($.current,{[V.Forwards]:()=>I(e,T.First),[V.Backwards]:()=>I(e,T.Last)})===C.Error&&I(x().filter(e=>"true"!==e.dataset.headlessuiFocusGuard),(0,h.E)($.current,{[V.Forwards]:T.Next,[V.Backwards]:T.Previous}),{relativeTo:i.button})});return v.createElement(v.Fragment,null,(0,m.sY)({ourProps:z,theirProps:o,slot:k,defaultTag:"button",name:"Popover.Button"}),A&&!f&&l&&v.createElement(H,{id:a,features:D.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:U}))}),Overlay:(0,m.yV)(function(e,t){let n=E(),{id:r=`headlessui-popover-overlay-${n}`,...o}=e,[{popoverState:i},u]=Y("Popover.Overlay"),l=(0,y.T)(t),s=(0,k.oJ)(),a=null!==s?(s&k.ZM.Open)===k.ZM.Open:0===i,c=(0,B.z)(e=>{if(_(e.currentTarget))return e.preventDefault();u({type:1})}),d=(0,v.useMemo)(()=>({open:0===i}),[i]);return(0,m.sY)({ourProps:{ref:l,id:r,"aria-hidden":!0,onClick:c},theirProps:o,slot:d,defaultTag:"div",features:et,visible:a,name:"Popover.Overlay"})}),Panel:(0,m.yV)(function(e,t){let n=E(),{id:r=`headlessui-popover-panel-${n}`,focus:o=!1,...i}=e,[u,l]=Y("Popover.Panel"),{close:s,isPortalled:a}=W("Popover.Panel"),c=`headlessui-focus-sentinel-before-${E()}`,d=`headlessui-focus-sentinel-after-${E()}`,f=(0,v.useRef)(null),p=(0,y.T)(f,t,e=>{l({type:4,panel:e})}),b=M(f);(0,g.e)(()=>(l({type:5,panelId:r}),()=>{l({type:5,panelId:null})}),[r,l]);let S=(0,k.oJ)(),_=null!==S?(S&k.ZM.Open)===k.ZM.Open:0===u.popoverState,P=(0,B.z)(e=>{var t;if(e.key===w.Escape){if(0!==u.popoverState||!f.current||null!=b&&b.activeElement&&!f.current.contains(b.activeElement))return;e.preventDefault(),e.stopPropagation(),l({type:1}),null==(t=u.button)||t.focus()}});(0,v.useEffect)(()=>{var t;e.static||1===u.popoverState&&(null==(t=e.unmount)||t)&&l({type:4,panel:null})},[u.popoverState,e.unmount,e.static,l]),(0,v.useEffect)(()=>{if(!o||0!==u.popoverState||!f.current)return;let e=null==b?void 0:b.activeElement;f.current.contains(e)||I(f.current,T.First)},[o,f,u.popoverState]);let F=(0,v.useMemo)(()=>({open:0===u.popoverState,close:s}),[u,s]),O={ref:p,id:r,onKeyDown:P,onBlur:o&&0===u.popoverState?e=>{var t,n,r,o,i;let s=e.relatedTarget;s&&f.current&&(null!=(t=f.current)&&t.contains(s)||(l({type:1}),(null!=(r=null==(n=u.beforePanelSentinel.current)?void 0:n.contains)&&r.call(n,s)||null!=(i=null==(o=u.afterPanelSentinel.current)?void 0:o.contains)&&i.call(o,s))&&s.focus({preventScroll:!0})))}:void 0,tabIndex:-1},R=Z(),N=(0,B.z)(()=>{let e=f.current;e&&(0,h.E)(R.current,{[V.Forwards]:()=>{var t;I(e,T.First)===C.Error&&(null==(t=u.afterPanelSentinel.current)||t.focus())},[V.Backwards]:()=>{var e;null==(e=u.button)||e.focus({preventScroll:!0})}})}),A=(0,B.z)(()=>{let e=f.current;e&&(0,h.E)(R.current,{[V.Forwards]:()=>{var e;if(!u.button)return;let t=x(),n=t.indexOf(u.button),r=t.slice(0,n+1),o=[...t.slice(n+1),...r];for(let t of o.slice())if("true"===t.dataset.headlessuiFocusGuard||null!=(e=u.panel)&&e.contains(t)){let e=o.indexOf(t);-1!==e&&o.splice(e,1)}I(o,T.First,{sorted:!1})},[V.Backwards]:()=>{var t;I(e,T.Previous)===C.Error&&(null==(t=u.button)||t.focus())}})});return v.createElement(Q.Provider,{value:r},_&&a&&v.createElement(H,{id:c,ref:u.beforePanelSentinel,features:D.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:N}),(0,m.sY)({ourProps:O,theirProps:i,slot:F,defaultTag:"div",features:en,visible:_,name:"Popover.Panel"}),_&&a&&v.createElement(H,{id:d,ref:u.afterPanelSentinel,features:D.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:A}))}),Group:(0,m.yV)(function(e,t){let n=(0,v.useRef)(null),r=(0,y.T)(n,t),[o,i]=(0,v.useState)([]),u=(0,B.z)(e=>{i(t=>{let n=t.indexOf(e);if(-1!==n){let e=t.slice();return e.splice(n,1),e}return t})}),l=(0,B.z)(e=>(i(t=>[...t,e]),()=>u(e))),s=(0,B.z)(()=>{var e;let t=P(n);if(!t)return!1;let r=t.activeElement;return!!(null!=(e=n.current)&&e.contains(r))||o.some(e=>{var n,o;return(null==(n=t.getElementById(e.buttonId.current))?void 0:n.contains(r))||(null==(o=t.getElementById(e.panelId.current))?void 0:o.contains(r))})}),a=(0,B.z)(e=>{for(let t of o)t.buttonId.current!==e&&t.close()}),c=(0,v.useMemo)(()=>({registerPopover:l,unregisterPopover:u,isFocusWithinPopoverGroup:s,closeOthers:a}),[l,u,s,a]),d=(0,v.useMemo)(()=>({}),[]);return v.createElement(J.Provider,{value:c},(0,m.sY)({ourProps:{ref:r},theirProps:e,slot:d,defaultTag:"div",name:"Popover.Group"}))})})},5760:function(e,t,n){"use strict";n.d(t,{u:function(){return A}});var r,o=n(7294),i=n(2351),u=n(6567),l=n(2984),s=n(6723);function a(){let e=(0,o.useRef)(!1);return(0,s.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var c=n(3855),d=n(2180),f=n(3784);function p(){let e=[],t={addEventListener:(e,n,r,o)=>(e.addEventListener(n,r,o),t.add(()=>e.removeEventListener(n,r,o))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add(()=>cancelAnimationFrame(n))},nextFrame:(...e)=>t.requestAnimationFrame(()=>t.requestAnimationFrame(...e)),setTimeout(...e){let n=setTimeout(...e);return t.add(()=>clearTimeout(n))},microTask(...e){var n;let r={current:!0};return n=()=>{r.current&&e[0]()},"function"==typeof queueMicrotask?queueMicrotask(n):Promise.resolve().then(n).catch(e=>setTimeout(()=>{throw e})),t.add(()=>{r.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(e){let t=p();return e(t),this.add(()=>t.dispose())},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function v(e,...t){e&&t.length>0&&e.classList.add(...t)}function h(e,...t){e&&t.length>0&&e.classList.remove(...t)}function m(){let[e]=(0,o.useState)(p);return(0,o.useEffect)(()=>()=>e.dispose(),[e]),e}var y=n(3781),g=n(4067);function b(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let S=(0,o.createContext)(null);S.displayName="TransitionContext";var E=((r=E||{}).Visible="visible",r.Hidden="hidden",r);let w=(0,o.createContext)(null);function _(e){return"children"in e?_(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function P(e,t){let n=(0,c.E)(e),r=(0,o.useRef)([]),u=a(),s=m(),d=(0,y.z)((e,t=i.l4.Hidden)=>{let o=r.current.findIndex(({el:t})=>t===e);-1!==o&&((0,l.E)(t,{[i.l4.Unmount](){r.current.splice(o,1)},[i.l4.Hidden](){r.current[o].state="hidden"}}),s.microTask(()=>{var e;!_(r)&&u.current&&(null==(e=n.current)||e.call(n))}))}),f=(0,y.z)(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>d(e,i.l4.Unmount)}),p=(0,o.useRef)([]),v=(0,o.useRef)(Promise.resolve()),h=(0,o.useRef)({enter:[],leave:[],idle:[]}),g=(0,y.z)((e,n,r)=>{p.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{p.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(h.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?v.current=v.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),b=(0,y.z)((e,t,n)=>{Promise.all(h.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=p.current.shift())||e()}).then(()=>n(t))});return(0,o.useMemo)(()=>({children:r,register:f,unregister:d,onStart:g,onStop:b,wait:v,chains:h}),[f,d,r,g,b,h,v])}function F(){}w.displayName="NestingContext";let T=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function C(e){var t;let n={};for(let r of T)n[r]=null!=(t=e[r])?t:F;return n}let O=i.AN.RenderStrategy,x=(0,i.yV)(function(e,t){let{show:n,appear:r=!1,unmount:l,...a}=e,c=(0,o.useRef)(null),p=(0,f.T)(c,t);(0,d.H)();let v=(0,u.oJ)();if(void 0===n&&null!==v&&(n=(v&u.ZM.Open)===u.ZM.Open),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[h,m]=(0,o.useState)(n?"visible":"hidden"),y=P(()=>{m("hidden")}),[g,b]=(0,o.useState)(!0),E=(0,o.useRef)([n]);(0,s.e)(()=>{!1!==g&&E.current[E.current.length-1]!==n&&(E.current.push(n),b(!1))},[E,n]);let F=(0,o.useMemo)(()=>({show:n,appear:r,initial:g}),[n,r,g]);(0,o.useEffect)(()=>{if(n)m("visible");else if(_(y)){let e=c.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&m("hidden")}else m("hidden")},[n,y]);let T={unmount:l};return o.createElement(w.Provider,{value:y},o.createElement(S.Provider,{value:F},(0,i.sY)({ourProps:{...T,as:o.Fragment,children:o.createElement(R,{ref:p,...T,...a})},theirProps:{},defaultTag:o.Fragment,features:O,visible:"visible"===h,name:"Transition"})))}),R=(0,i.yV)(function(e,t){var n;let r,{beforeEnter:E,afterEnter:F,beforeLeave:T,afterLeave:x,enter:R,enterFrom:N,enterTo:A,entered:I,leave:k,leaveFrom:L,leaveTo:j,...z}=e,M=(0,o.useRef)(null),D=(0,f.T)(M,t),H=z.unmount?i.l4.Unmount:i.l4.Hidden,{show:B,appear:V,initial:Z}=function(){let e=(0,o.useContext)(S);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[$,U]=(0,o.useState)(B?"visible":"hidden"),q=function(){let e=(0,o.useContext)(w);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:G,unregister:Y}=q,K=(0,o.useRef)(null);(0,o.useEffect)(()=>G(M),[G,M]),(0,o.useEffect)(()=>{if(H===i.l4.Hidden&&M.current){if(B&&"visible"!==$){U("visible");return}return(0,l.E)($,{hidden:()=>Y(M),visible:()=>G(M)})}},[$,M,G,Y,B,H]);let W=(0,c.E)({enter:b(R),enterFrom:b(N),enterTo:b(A),entered:b(I),leave:b(k),leaveFrom:b(L),leaveTo:b(j)}),J=(n={beforeEnter:E,afterEnter:F,beforeLeave:T,afterLeave:x},r=(0,o.useRef)(C(n)),(0,o.useEffect)(()=>{r.current=C(n)},[n]),r),X=(0,d.H)();(0,o.useEffect)(()=>{if(X&&"visible"===$&&null===M.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[M,$,X]);let Q=Z&&!V,ee=!X||Q||K.current===B?"idle":B?"enter":"leave",et=function(e=0){let[t,n]=(0,o.useState)(e),r=a(),i=(0,o.useCallback)(e=>{r.current&&n(t=>t|e)},[t,r]),u=(0,o.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:i,hasFlag:u,removeFlag:(0,o.useCallback)(e=>{r.current&&n(t=>t&~e)},[n,r]),toggleFlag:(0,o.useCallback)(e=>{r.current&&n(t=>t^e)},[n])}}(0),en=(0,y.z)(e=>(0,l.E)(e,{enter:()=>{et.addFlag(u.ZM.Opening),J.current.beforeEnter()},leave:()=>{et.addFlag(u.ZM.Closing),J.current.beforeLeave()},idle:()=>{}})),er=(0,y.z)(e=>(0,l.E)(e,{enter:()=>{et.removeFlag(u.ZM.Opening),J.current.afterEnter()},leave:()=>{et.removeFlag(u.ZM.Closing),J.current.afterLeave()},idle:()=>{}})),eo=P(()=>{U("hidden"),Y(M)},q);(function({container:e,direction:t,classes:n,onStart:r,onStop:o}){let i=a(),u=m(),d=(0,c.E)(t);(0,s.e)(()=>{let t=p();u.add(t.dispose);let s=e.current;if(s&&"idle"!==d.current&&i.current){var a,c,f,m;let e,i,u,y,g,b,S;return t.dispose(),r.current(d.current),t.add((a=s,c=n.current,f="enter"===d.current,m=()=>{t.dispose(),o.current(d.current)},i=f?"enter":"leave",u=p(),y=void 0!==m?(e={called:!1},(...t)=>{if(!e.called)return e.called=!0,m(...t)}):()=>{},"enter"===i&&(a.removeAttribute("hidden"),a.style.display=""),g=(0,l.E)(i,{enter:()=>c.enter,leave:()=>c.leave}),b=(0,l.E)(i,{enter:()=>c.enterTo,leave:()=>c.leaveTo}),S=(0,l.E)(i,{enter:()=>c.enterFrom,leave:()=>c.leaveFrom}),h(a,...c.enter,...c.enterTo,...c.enterFrom,...c.leave,...c.leaveFrom,...c.leaveTo,...c.entered),v(a,...g,...S),u.nextFrame(()=>{h(a,...S),v(a,...b),function(e,t){let n=p();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[i,u]=[r,o].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),l=i+u;if(0!==l){n.group(n=>{n.setTimeout(()=>{t(),n.dispose()},l),n.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&n.dispose()})});let r=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),r())})}else t();n.add(()=>t()),n.dispose}(a,()=>(h(a,...g),v(a,...c.entered),y()))}),u.dispose)),t.dispose}},[t])})({container:M,classes:W,direction:ee,onStart:(0,c.E)(e=>{eo.onStart(M,e,en)}),onStop:(0,c.E)(e=>{eo.onStop(M,e,er),"leave"!==e||_(eo)||(U("hidden"),Y(M))})}),(0,o.useEffect)(()=>{Q&&(H===i.l4.Hidden?K.current=null:K.current=B)},[B,Q,$]);let ei=z;return V&&B&&(ei={...ei,className:(0,g.A)(z.className,...W.current.enter,...W.current.enterFrom)}),o.createElement(w.Provider,{value:eo},o.createElement(u.up,{value:(0,l.E)($,{visible:u.ZM.Open,hidden:u.ZM.Closed})|et.flags},(0,i.sY)({ourProps:{ref:D},theirProps:ei,defaultTag:"div",features:O,visible:"visible"===$,name:"Transition.Child"})))}),N=(0,i.yV)(function(e,t){let n=null!==(0,o.useContext)(S),r=null!==(0,u.oJ)();return o.createElement(o.Fragment,null,!n&&r?o.createElement(x,{ref:t,...e}):o.createElement(R,{ref:t,...e}))}),A=Object.assign(x,{Child:N,Root:x})},3781:function(e,t,n){"use strict";n.d(t,{z:function(){return i}});var r=n(7294),o=n(3855);let i=function(e){let t=(0,o.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},6723:function(e,t,n){"use strict";n.d(t,{e:function(){return i}});var r=n(7294),o=n(7896);let i=(e,t)=>{o.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},3855:function(e,t,n){"use strict";n.d(t,{E:function(){return i}});var r=n(7294),o=n(6723);function i(e){let t=(0,r.useRef)(e);return(0,o.e)(()=>{t.current=e},[e]),t}},2180:function(e,t,n){"use strict";n.d(t,{H:function(){return i}});var r=n(7294),o=n(7896);function i(){let[e,t]=(0,r.useState)(o.O.isHandoffComplete);return e&&!1===o.O.isHandoffComplete&&t(!1),(0,r.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,r.useEffect)(()=>o.O.handoff(),[]),e}},3784:function(e,t,n){"use strict";n.d(t,{T:function(){return l},h:function(){return u}});var r=n(7294),o=n(3781);let i=Symbol();function u(e,t=!0){return Object.assign(e,{[i]:t})}function l(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,o.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[i]))?void 0:n}},6567:function(e,t,n){"use strict";n.d(t,{ZM:function(){return u},oJ:function(){return l},up:function(){return s}});var r,o=n(7294);let i=(0,o.createContext)(null);i.displayName="OpenClosedContext";var u=((r=u||{})[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r);function l(){return(0,o.useContext)(i)}function s({value:e,children:t}){return o.createElement(i.Provider,{value:e},t)}},4067:function(e,t,n){"use strict";function r(...e){return e.filter(Boolean).join(" ")}n.d(t,{A:function(){return r}})},7896:function(e,t,n){"use strict";n.d(t,{O:function(){return u}});var r=Object.defineProperty,o=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,i=(e,t,n)=>(o(e,"symbol"!=typeof t?t+"":t,n),n);let u=new class{constructor(){i(this,"current",this.detect()),i(this,"handoffState","pending"),i(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},2984:function(e,t,n){"use strict";function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,r),o}n.d(t,{E:function(){return r}})},2351:function(e,t,n){"use strict";n.d(t,{AN:function(){return s},l4:function(){return a},sY:function(){return c},yV:function(){return p}});var r,o,i=n(7294),u=n(4067),l=n(2984),s=((r=s||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),a=((o=a||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:i=!0,name:u}){let s=f(t,e);if(i)return d(s,n,r,u);let a=null!=o?o:0;if(2&a){let{static:e=!1,...t}=s;if(e)return d(t,n,r,u)}if(1&a){let{unmount:e=!0,...t}=s;return(0,l.E)(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},n,r,u)})}return d(s,n,r,u)}function d(e,t={},n,r){let{as:o=n,children:l,refName:s="ref",...a}=h(e,["unmount","static"]),c=void 0!==e.ref?{[s]:e.ref}:{},d="function"==typeof l?l(t):l;"className"in a&&a.className&&"function"==typeof a.className&&(a.className=a.className(t));let p={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(p["data-headlessui-state"]=n.join(" "))}if(o===i.Fragment&&Object.keys(v(a)).length>0){if(!(0,i.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,u.A)(null==e?void 0:e.className(...t),a.className):(0,u.A)(null==e?void 0:e.className,a.className);return(0,i.cloneElement)(d,Object.assign({},f(d.props,v(h(a,["ref"]))),p,c,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(d.ref,c.ref),t?{className:t}:{}))}return(0,i.createElement)(o,Object.assign({},h(a,["ref"]),o!==i.Fragment&&c,o!==i.Fragment&&p),d)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let o of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;o(t,...r)}}});return t}function p(e){var t;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function v(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function h(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}}}]);