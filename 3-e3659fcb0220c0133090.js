(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{209:function(t,e,n){"use strict";n(238)("link",function(t){return function(e){return t(this,"a","href",e)}})},235:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.withMDXComponents=void 0;var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=s(n(0)),r=s(n(57)),a=s(n(4));function s(t){return t&&t.__esModule?t:{default:t}}var l=(0,r.default)({}),u=l.Provider,c=l.Consumer;e.withMDXComponents=function(t){return function(e){var n=e.components,r=function(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}(e,["components"]);return o.default.createElement(c,null,function(e){return o.default.createElement(t,i({components:n||e},r))})}};var d=function(t){var e=t.components,n=t.children;return o.default.createElement(u,{value:e},n)};d.propTypes={components:a.default.object.isRequired,children:a.default.element.isRequired},e.default=d},284:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MDXScopeProvider=e.withMDXScope=void 0;var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=r(n(0));function r(t){return t&&t.__esModule?t:{default:t}}var a=(0,r(n(57)).default)({}),s=a.Provider,l=a.Consumer;e.withMDXScope=function(t){return function(e){var n=e.scope,r=function(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}(e,["scope"]);return o.default.createElement(l,null,function(e){return o.default.createElement(t,i({scope:n||e},r))})}};e.MDXScopeProvider=function(t){var e=t.__mdxScope,n=t.children;return o.default.createElement(s,{value:e},n)}},304:function(t,e,n){"use strict";var i=n(235),o=n(284);e.a=Object(o.withMDXScope)(Object(i.withMDXComponents)(({scope:t={},components:e={},children:n,...i})=>{const o={components:e,props:i,...t},r=Object.keys(o),a=r.map(t=>o[t]);return new Function("_fn",...r,`${n}`)({},...a)({components:e,...i})}))},305:function(t,e,n){"use strict";var i=n(6),o=n(18),r=n(30),a=n(17),s=[].sort,l=[1,2,3];i(i.P+i.F*(a(function(){l.sort(void 0)})||!a(function(){l.sort(null)})||!n(14)(s)),"Array",{sort:function(t){return void 0===t?s.call(r(this)):s.call(r(this),o(t))}})},306:function(t,e,n){"use strict";var i=n(6),o=n(29),r=n(307),a="".endsWith;i(i.P+i.F*n(308)("endsWith"),"String",{endsWith:function(t){var e=r(this,t,"endsWith"),n=arguments.length>1?arguments[1]:void 0,i=o(e.length),s=void 0===n?i:Math.min(o(n),i),l=String(t);return a?a.call(e,l,s):e.slice(s-l.length,s)===l}})},307:function(t,e,n){var i=n(84),o=n(28);t.exports=function(t,e,n){if(i(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(t))}},308:function(t,e,n){var i=n(3)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,!"/./"[t](e)}catch(t){}}return!0}},309:function(t,e,n){"use strict";var i=n(6),o=n(54)(!0);i(i.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(55)("includes")},310:function(t,e,n){"use strict";var i=n(6),o=n(307);i(i.P+i.F*n(308)("includes"),"String",{includes:function(t){return!!~o(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},311:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=u(n(150)),r=u(n(472)),a=u(n(147)),s=u(n(473)),l=u(n(146));function u(t){return t&&t.__esModule?t:{default:t}}var c=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.default),i(e,[{key:"attached",value:function(){this.keyboardFocusManager_=new s.default(this,"button").setCircularLength(this.tabs.length).start()}},{key:"addTab",value:function(t,e){o.default.isNumber(e)?this.tabs.splice(e,0,t):this.tabs.push(t),this.tabs=this.tabs}},{key:"addTabByName",value:function(t,e,n){if(o.default.isString(t)){var i={label:t,disabled:e};o.default.isDef(e)||(i.disabled=!1),this.addTab(i,n)}}},{key:"created",value:function(){this.lastState_={tab:this.tab},this.on(e.Events.CHANGE_REQUEST,this.defaultChangeRequestFn_,!0)}},{key:"defaultChangeRequestFn_",value:function(t){this.setState_(t.state)}},{key:"dispatchRequest_",value:function(t){this.emit(e.Events.CHANGE_REQUEST,{lastState:this.lastState_,state:t,totalTabs:this.tabs.length})}},{key:"disposed",value:function(){this.keyboardFocusManager_.dispose(),this.keyboardFocusManager_=null}},{key:"findFirstAvailableIndex_",value:function(){if(!this.disabled)for(var t=0;t<this.tabs.length;t++)if(!this.tabs[t].disabled)return t;return-1}},{key:"onClickItem",value:function(t){var e=t.delegateTarget;t.preventDefault();var n=parseInt(e.getAttribute("data-index"));this.dispatchRequest_({tab:n})}},{key:"removeTab",value:function(t){if(o.default.isNumber(t)&&t>-1&&t<this.tabs.length){var e=this.tabs.splice(t,1);return this.tabs=this.tabs,e[0]}}},{key:"setState_",value:function(t){this.tab=t.tab,this.lastState_=t}},{key:"setTabDisabled",value:function(t,e){o.default.isNumber(t)&&o.default.isBoolean(e)&&(this.tabs[t].disabled=e,this.tabs=this.tabs)}},{key:"syncTabs",value:function(){this.keyboardFocusManager_&&this.keyboardFocusManager_.setCircularLength(this.tabs.length)}},{key:"toggleTabDisabled",value:function(t){o.default.isNumber(t)&&t>=0&&t<this.tabs.length&&(this.tabs[t].disabled=!this.tabs[t].disabled,t===this.tab&&(this.tab=this.findFirstAvailableIndex_()),this.tabs=this.tabs)}}]),e}();l.default.register(c,r.default),c.Events={CHANGE_REQUEST:"changeRequest"},c.TYPES={NONE:"none",PILLS:"pills",TABS:"tabs"},c.STATE={disabled:{validator:o.default.isBoolean,value:!1},tab:{validator:o.default.isNumber,valueFn:"findFirstAvailableIndex_"},tabs:{validator:function(t){return t.every(function(t){return!!t.label})},value:[]},type:{validator:function(t){return t.toUpperCase()in c.TYPES},value:c.TYPES.TABS}},e.default=c},312:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ClayTooltip=void 0;var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=f(n(156)),r=f(n(146)),a=n(313),s=n(148),l=n(171),u=n(150),c=n(167),d=f(n(475));function f(t){return t&&t.__esModule?t:{default:t}}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var g=function t(){p(this,t)},b=function(t){function e(t,n,i){if(p(this,e),!t)throw new Error("Use ClayTooltip.init to initialize ClayTooltip");var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n,i));return o._timer=void 0,o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default),i(e,[{key:"created",value:function(){this._eventHandler=new l.EventHandler}},{key:"attached",value:function(){this.addListener("transitionend",this._handleTransitionEnd,!0),this.visible||(this.element.style.display="none")}},{key:"rendered",value:function(){if(this._target){var t=a.Align.align(this.element,this._target,this.position,this.bestAlign);this.alignedPosition!==t&&(this.alignedPosition=t)}}},{key:"detached",value:function(){this._eventHandler.removeAllListeners()}},{key:"disposed",value:function(){this._eventHandler.removeAllListeners()}},{key:"_getContent",value:function(t){var e=t.getAttribute("title");if(e)t.setAttribute("data-title",e),t.setAttribute("data-restore-title","true"),t.removeAttribute("title");else if("svg"===t.tagName){var n=t.querySelector("title");n&&(t.setAttribute("data-title",n.innerHTML),t.setAttribute("data-restore-title","true"),n.remove())}return t.getAttribute("data-title")}},{key:"_handleMouseClick",value:function(t){this._restoreTitle(t.delegateTarget),this._isTransitioning=!0,this.visible=!1}},{key:"_handleMouseEnter",value:function(t){this._showTooltip(t.delegateTarget)}},{key:"_handleMouseEnterTooltip",value:function(){this._isTransitioning&&(this.visible=!0)}},{key:"_handleMouseLeave",value:function(t){this._hideTooltip(t.delegateTarget)}},{key:"_handleTouchStart",value:function(t){var e=this;this._timer=setTimeout(function(){e._showTooltip(t.srcElement),clearTimeout(e._timer)},500)}},{key:"_handleTouchEnd",value:function(t){this._hideTooltip(t.srcElement)}},{key:"_handleTransitionEnd",value:function(){this._isTransitioning=!1,this.visible||(this.element.style.display="none")}},{key:"_hideTooltip",value:function(t){this._timer&&(clearTimeout(this._timer),this._timer=void 0),this.visible&&(this._restoreTitle(t),this._isTransitioning=!0,this.visible=!1)}},{key:"_restoreTitle",value:function(t){var e=t.getAttribute("data-title"),n=t.getAttribute("data-restore-title");if(e&&"true"===n){if("svg"===t.tagName){var i=document.createElement("title");i.innerHTML=e,t.appendChild(i)}else t.setAttribute("title",e);t.removeAttribute("data-restore-title")}}},{key:"_setPreferredAlign",value:function(t){switch(t){case"TopCenter":return a.Align.TopCenter;case"RightCenter":return a.Align.RightCenter;case"BottomCenter":return a.Align.BottomCenter;case"LeftCenter":return a.Align.LeftCenter;case"TopRight":return a.Align.TopRight;case"BottomRight":return a.Align.BottomRight;case"BottomLeft":return a.Align.BottomLeft;case"TopLeft":return a.Align.TopLeft;default:return a.Align.TopCenter}}},{key:"setterClassMapFn_",value:function(t){return u.object.mixin(this.valueClassMapFn_(),t)}},{key:"_showTooltip",value:function(t){var e=this._getContent(t);this._target=t,this._content=e,this.visible||(this.element.style.display="block"),this._isTransitioning=!0,this.visible=!0}},{key:"syncSelectors",value:function(t,e){if(t){var n=Array.isArray(e)?e:[],i=t.reduce(function(t,e){return-1===t.indexOf(e)&&t.push(e),t},n);this._eventHandler.removeAllListeners();for(var o=0,r=i.length;o<r;o++){var a,s=i[o],l=[];/iPad|iPhone|iPod|android/i.test(navigator.userAgent)?l.push(c.dom.delegate(document,"touchstart",s,this._handleTouchStart.bind(this)),c.dom.delegate(document,"touchend",s,this._handleTouchEnd.bind(this)),c.dom.delegate(document,"touchcancel",s,this._handleTouchEnd.bind(this))):l.push(c.dom.delegate(document,"blur",s,this._handleMouseLeave.bind(this)),c.dom.delegate(document,"click",s,this._handleMouseClick.bind(this)),c.dom.delegate(document,"focus",s,this._handleMouseEnter.bind(this)),c.dom.delegate(document,"mouseenter",s,this._handleMouseEnter.bind(this)),c.dom.delegate(document,"mouseleave",s,this._handleMouseLeave.bind(this))),(a=this._eventHandler).add.apply(a,l)}}}},{key:"syncVisible",value:function(){}},{key:"valueClassMapFn_",value:function(){var t;return h(t={},a.Align.TopLeft,"clay-tooltip-top-left"),h(t,a.Align.TopCenter,"clay-tooltip-top"),h(t,a.Align.TopRight,"clay-tooltip-top-right"),h(t,a.Align.BottomLeft,"clay-tooltip-bottom-left"),h(t,a.Align.BottomCenter,"clay-tooltip-bottom"),h(t,a.Align.BottomRight,"clay-tooltip-bottom-right"),h(t,a.Align.RightCenter,"clay-tooltip-right"),h(t,a.Align.LeftCenter,"clay-tooltip-left"),t}}],[{key:"init",value:function(t,n){return this._instance||(this._instance=new e(new g,t,n)),this._instance}}]),e}();b.STATE={_content:s.Config.any().value("").internal(),alignedPosition:{validator:a.Align.isValidPosition},bestAlign:s.Config.bool().value(!0),data:s.Config.object(),defaultEventHandler:s.Config.object(),elementClasses:s.Config.string(),classMap:{setter:"setterClassMapFn_",validator:u.core.isObject,valueFn:"valueClassMapFn_"},position:s.Config.oneOf(["BottomCenter","BottomLeft","BottomRight","LeftCenter","RightCenter","TopCenter","TopLeft","TopRight"]).setter("_setPreferredAlign").value("TopCenter"),selectors:s.Config.array().value(['[data-title]:not([data-title=""])','[title]:not([title=""]']),visible:s.Config.bool().value(!1)},r.default.register(b,d.default),e.ClayTooltip=b,e.default=b},316:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(n(150)),o=a(n(167)),r=a(n(148));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var c=function(t){function e(n){s(this,e);var i=l(this,t.call(this,n));return i.listener_=o.default.on(i.selector,"click",function(t){return i.initialize(t)}),i}return u(e,t),e.prototype.disposeInternal=function(){this.listener_.dispose(),this.listener_=null,this.clipboardAction_&&(this.clipboardAction_.dispose(),this.clipboardAction_=null)},e.prototype.initialize=function(t){this.clipboardAction_&&(this.clipboardAction_=null),this.clipboardAction_=new d({host:this,action:this.action(t.delegateTarget),target:this.target(t.delegateTarget),text:this.text(t.delegateTarget),trigger:t.delegateTarget})},e}(r.default);c.STATE={action:{validator:i.default.isFunction,value:function(t){return t.getAttribute("data-action")}},selector:{value:"[data-clipboard]",validator:i.default.isString},target:{validator:i.default.isFunction,value:function(t){return document.querySelector(t.getAttribute("data-target"))}},text:{validator:i.default.isFunction,value:function(t){return t.getAttribute("data-text")}}};var d=function(t){function e(n){s(this,e);var i=l(this,t.call(this,n));return i.text?i.selectValue():i.target&&i.selectTarget(),i}return u(e,t),e.prototype.clearSelection=function(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()},e.prototype.copyText=function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)},e.prototype.disposeInternal=function(){this.removeFakeElement(),t.prototype.disposeInternal.call(this)},e.prototype.handleResult=function(t){t?this.host.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.host.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})},e.prototype.removeFakeElement=function(){this.fake&&o.default.exitDocument(this.fake),this.removeFakeHandler&&this.removeFakeHandler.removeListener()},e.prototype.selectTarget=function(){if("INPUT"===this.target.nodeName||"TEXTAREA"===this.target.nodeName)this.target.select(),this.selectedText=this.target.value;else{var t=document.createRange(),e=window.getSelection();t.selectNodeContents(this.target),e.addRange(t),this.selectedText=e.toString()}this.copyText()},e.prototype.selectValue=function(){this.removeFakeElement(),this.removeFakeHandler=o.default.once(document,"click",this.removeFakeElement.bind(this)),this.fake=document.createElement("textarea"),this.fake.style.position="fixed",this.fake.style.left="-9999px",this.fake.setAttribute("readonly",""),this.fake.value=this.text,this.selectedText=this.text,o.default.enterDocument(this.fake),this.fake.select(),this.copyText()},e}(r.default);d.STATE={action:{value:"copy",validator:function(t){return"copy"===t||"cut"===t}},host:{validator:function(t){return t instanceof c}},selectedText:{validator:i.default.isString},target:{validator:i.default.isElement},text:{validator:i.default.isString},trigger:{validator:i.default.isElement}},e.default=c},472:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.templates=e.Tabs=void 0;var i,o=a(n(147)),r=a(n(146));function a(t){return t&&t.__esModule?t:{default:t}}goog.loadModule(function(t){goog.module("Tabs.incrementaldom");goog.require("soy"),goog.require("soydata");goog.require("goog.i18n.bidi"),goog.require("goog.asserts"),goog.require("goog.string");var e=goog.require("incrementaldom"),n=e.elementOpen,o=e.elementClose,r=(e.elementVoid,e.elementOpenStart),a=e.elementOpenEnd,s=e.text,l=e.attr;function u(t,e,i){var u;if(t.tabs.length>0){n("ul",null,null,"class","nav "+("none"!=t.type?"nav-"+t.type:"")+" "+(null==(u=t.elementClasses)?"":u),"role","tablist");for(var c=t.tabs,d=c.length,f=0;f<d;f++){var h=c[f],p=null!=t.disabled&&t.disabled||h.disabled,g=t.tab==f;r("li"),l("class",(p?"disabled":"")+" "+(g?"active":"")),l("data-index",f),p||g||l("data-onclick","onClickItem"),l("role","presentation"),a(),r("button"),l("aria-disabled",p?"true":"false"),l("aria-expanded",g?"true":"false"),l("data-unfocusable",p?"true":"false"),l("data-toggle","tab"),p&&l("disabled",""),l("ref","tab-"+f),l("role","tab"),l("type","button"),a();var b=h.label;"function"==typeof b?b():null!=b&&s(b),o("button"),o("li")}o("ul")}}return t.render=u,goog.DEBUG&&(u.soyTemplateName="Tabs.render"),t.render.params=["tab","tabs","disabled","elementClasses","type"],t.render.types={tab:"any",tabs:"any",disabled:"any",elementClasses:"any",type:"any"},t.templates=i=t,t});var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default),e}();r.default.register(s,i),e.Tabs=s,e.templates=i,e.default=i},473:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(n(150));function o(t){return t&&t.__esModule?t:{default:t}}var r=function(t){function e(n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this));return o.component_=n,o.selector_=i||"*",o.handleKey_=o.handleKey_.bind(o),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.buildRef_=function(t,e){return t+e},e.prototype.disposeInternal=function(){t.prototype.disposeInternal.call(this),this.stop(),this.component_=null,this.selector_=null},e.prototype.getNextFocusable_=function(t,e,n){var i=e,o=void 0,r=void 0;do{e=this.increment_(e,n),r=this.buildRef_(t,e),o=this.component_.refs[r]}while(this.isFocusable_(o)&&e!==i);return o?r:null},e.prototype.handleKey_=function(t){var n=this.focusHandler_&&this.focusHandler_(t);this.focusHandler_&&!0!==n||(n=this.handleKeyDefault_(t));var o=n;i.default.isElement(n)||(n=this.component_.refs[n]),n&&(n.focus(),this.emit(e.EVENT_FOCUSED,{element:n,ref:i.default.isString(o)?o:null}))},e.prototype.handleKeyDefault_=function(t){var n=t.delegateTarget.getAttribute("ref"),i=e.REF_REGEX.exec(n);if(i){var o=parseInt(i[1],10),r=n.substr(0,n.length-i[1].length);switch(t.keyCode){case 37:case 38:return this.getNextFocusable_(r,o,-1);case 39:case 40:return this.getNextFocusable_(r,o,1)}}},e.prototype.increment_=function(t,e){var n=this.circularLength_;return t+=e,i.default.isNumber(n)&&(t<0?t=n-1:t>=n&&(t=0)),t},e.prototype.isFocusable_=function(t){return t&&"true"===t.getAttribute("data-unfocusable")},e.prototype.setCircularLength=function(t){return this.circularLength_=t,this},e.prototype.setFocusHandler=function(t){return this.focusHandler_=t,this},e.prototype.start=function(){return this.handle_||(this.handle_=this.component_.delegate("keydown",this.selector_,this.handleKey_)),this},e.prototype.stop=function(){return this.handle_&&(this.handle_.removeListener(),this.handle_=null),this},e}(o(n(171)).default);r.EVENT_FOCUSED="focused",r.REF_REGEX=/.+-(\d+)$/,e.default=r},475:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.templates=e.ClayTooltip=void 0;var i,o=a(n(147)),r=a(n(146));function a(t){return t&&t.__esModule?t:{default:t}}goog.loadModule(function(t){var e=goog.require("soy");goog.require("soydata");goog.module("ClayTooltip.incrementaldom"),goog.require("goog.soy.data.SanitizedContent");var n=goog.require("incrementaldom");goog.require("soy.asserts");var o=goog.require("soy.idom"),r=function(t,i,r){i=r||i,t=t||{};var a=e.asserts.assertType(null==t._content||goog.isFunction(t._content)||goog.isString(t._content)||t._content instanceof goog.soy.data.SanitizedContent,"_content",t._content,"!goog.soy.data.SanitizedContent|function()|null|string|undefined"),s=e.asserts.assertType(null==t.alignedPosition||goog.isNumber(t.alignedPosition),"alignedPosition",t.alignedPosition,"null|number|undefined"),l=t.classMap,u=e.asserts.assertType(null==t.elementClasses||goog.isString(t.elementClasses)||t.elementClasses instanceof goog.soy.data.SanitizedContent,"elementClasses",t.elementClasses,"!goog.soy.data.SanitizedContent|null|string|undefined"),c=e.asserts.assertType(null==t.position||goog.isNumber(t.position),"position",t.position,"null|number|undefined"),d=e.asserts.assertType(null==t.visible||goog.isBoolean(t.visible)||1===t.visible||0===t.visible,"visible",t.visible,"boolean|null|undefined"),f=null!=s?s:c,h=null!=f?(l||["clay-tooltip-top-left","clay-tooltip-top","clay-tooltip-top-right","clay-tooltip-bottom-left","clay-tooltip-bottom","clay-tooltip-bottom-right","clay-tooltip-right","clay-tooltip-left"])[f]:"clay-tooltip-bottom";n.elementOpenStart("div"),n.attr("class","tooltip fade "+h+(u?" "+u:"")+(d?" show":"")),n.attr("data-onmouseenter","_handleMouseEnterTooltip"),n.attr("data-onmouseleave","_handleMouseLeave"),n.attr("role","tooltip"),n.elementOpenEnd(),n.elementOpenStart("div"),n.attr("class","arrow"),n.elementOpenEnd(),n.elementClose("div"),n.elementOpenStart("div"),n.attr("class","tooltip-inner"),n.elementOpenEnd(),o.print(a),n.elementClose("div"),n.elementClose("div")};return t.render=r,goog.DEBUG&&(r.soyTemplateName="ClayTooltip.render"),t.render.params=["_content","alignedPosition","classMap","elementClasses","position","visible"],t.render.types={_content:"html|string",alignedPosition:"number",classMap:"?",elementClasses:"string",position:"number",visible:"bool"},t.templates=i=t,t});var s=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,o.default),e}();r.default.register(s,i),e.ClayTooltip=s,e.templates=i,e.default=i}}]);
//# sourceMappingURL=3-e3659fcb0220c0133090.js.map