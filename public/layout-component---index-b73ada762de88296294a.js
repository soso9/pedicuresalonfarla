webpackJsonp([0xef47e37750d80000],{"./node_modules/@material/toolbar/dist/mdc.toolbar.js":function(e,t,n){!function(t,n){e.exports=n()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/assets/",t(t.s=95)}({0:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,e),this.adapter_=t}return o(e,null,[{key:"cssClasses",get:function(){return{}}},{key:"strings",get:function(){return{}}},{key:"numbers",get:function(){return{}}},{key:"defaultAdapter",get:function(){return{}}}]),o(e,[{key:"init",value:function(){}},{key:"destroy",value:function(){}}]),e}();t.a=i},1:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(0),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;r(this,e),this.root_=t;for(var o=arguments.length,i=Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];this.initialize.apply(this,i),this.foundation_=void 0===n?this.getDefaultFoundation():n,this.foundation_.init(),this.initialSyncWithDOM()}return i(e,null,[{key:"attachTo",value:function(t){return new e(t,new o.a)}}]),i(e,[{key:"initialize",value:function(){}},{key:"getDefaultFoundation",value:function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}},{key:"initialSyncWithDOM",value:function(){}},{key:"destroy",value:function(){this.foundation_.destroy()}},{key:"listen",value:function(e,t){this.root_.addEventListener(e,t)}},{key:"unlisten",value:function(e,t){this.root_.removeEventListener(e,t)}},{key:"emit",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=void 0;"function"==typeof CustomEvent?r=new CustomEvent(e,{detail:t,bubbles:n}):(r=document.createEvent("CustomEvent"),r.initCustomEvent(e,n,!1,t)),this.root_.dispatchEvent(r)}}]),e}();t.a=a},2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(1),i=n(3);n.d(t,"MDCFoundation",function(){return r.a}),n.d(t,"MDCComponent",function(){return o.a}),n.d(t,"SelectionControlState",function(){return i.a})},3:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=void 0},95:function(e,t,n){e.exports=n(96)},96:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"MDCToolbar",function(){return c});var a=n(2),s=n(97),l=n(99);n.d(t,"MDCToolbarFoundation",function(){return s.a}),n.d(t,"util",function(){return l});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"getDefaultFoundation",value:function(){var e=this;return new s.a({hasClass:function(t){return e.root_.classList.contains(t)},addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},registerScrollHandler:function(e){return window.addEventListener("scroll",e,l.applyPassive())},deregisterScrollHandler:function(e){return window.removeEventListener("scroll",e,l.applyPassive())},registerResizeHandler:function(e){return window.addEventListener("resize",e)},deregisterResizeHandler:function(e){return window.removeEventListener("resize",e)},getViewportWidth:function(){return window.innerWidth},getViewportScrollY:function(){return window.pageYOffset},getOffsetHeight:function(){return e.root_.offsetHeight},getFirstRowElementOffsetHeight:function(){return e.firstRowElement_.offsetHeight},notifyChange:function(t){return e.emit(s.a.strings.CHANGE_EVENT,t)},setStyle:function(t,n){return e.root_.style.setProperty(t,n)},setStyleForTitleElement:function(t,n){return e.titleElement_.style.setProperty(t,n)},setStyleForFlexibleRowElement:function(t,n){return e.firstRowElement_.style.setProperty(t,n)},setStyleForFixedAdjustElement:function(t,n){e.fixedAdjustElement&&e.fixedAdjustElement.style.setProperty(t,n)}})}},{key:"firstRowElement_",get:function(){return this.root_.querySelector(s.a.strings.FIRST_ROW_SELECTOR)}},{key:"titleElement_",get:function(){return this.root_.querySelector(s.a.strings.TITLE_SELECTOR)}},{key:"fixedAdjustElement",set:function(e){this.fixedAdjustElement_=e,this.foundation_.updateAdjustElementStyles()},get:function(){return this.fixedAdjustElement_}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}(a.MDCComponent)},97:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),s=n(98),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,l(t.defaultAdapter,e)));return n.resizeHandler_=function(){return n.checkRowHeight_()},n.scrollHandler_=function(){return n.updateToolbarStyles_()},n.checkRowHeightFrame_=0,n.scrollFrame_=0,n.executedLastChange_=!1,n.calculations_={toolbarRowHeight:0,toolbarRatio:0,flexibleExpansionRatio:0,maxTranslateYRatio:0,scrollThresholdRatio:0,toolbarHeight:0,flexibleExpansionHeight:0,maxTranslateYDistance:0,scrollThreshold:0},n.fixed_=!1,n.fixedLastrow_=!1,n.hasFlexibleRow_=!1,n.useFlexDefaultBehavior_=!1,n}return i(t,e),u(t,null,[{key:"cssClasses",get:function(){return s.a}},{key:"strings",get:function(){return s.c}},{key:"numbers",get:function(){return s.b}},{key:"defaultAdapter",get:function(){return{hasClass:function(){return!1},addClass:function(){},removeClass:function(){},registerScrollHandler:function(){},deregisterScrollHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},getViewportWidth:function(){return 0},getViewportScrollY:function(){return 0},getOffsetHeight:function(){return 0},getFirstRowElementOffsetHeight:function(){return 0},notifyChange:function(){},setStyle:function(){},setStyleForTitleElement:function(){},setStyleForFlexibleRowElement:function(){},setStyleForFixedAdjustElement:function(){}}}}]),u(t,[{key:"init",value:function(){this.fixed_=this.adapter_.hasClass(t.cssClasses.FIXED),this.fixedLastrow_=this.adapter_.hasClass(t.cssClasses.FIXED_LASTROW)&this.fixed_,this.hasFlexibleRow_=this.adapter_.hasClass(t.cssClasses.TOOLBAR_ROW_FLEXIBLE),this.hasFlexibleRow_&&(this.useFlexDefaultBehavior_=this.adapter_.hasClass(t.cssClasses.FLEXIBLE_DEFAULT_BEHAVIOR)),this.initKeyRatio_(),this.setKeyHeights_(),this.adapter_.registerResizeHandler(this.resizeHandler_),this.adapter_.registerScrollHandler(this.scrollHandler_)}},{key:"destroy",value:function(){this.adapter_.deregisterResizeHandler(this.resizeHandler_),this.adapter_.deregisterScrollHandler(this.scrollHandler_)}},{key:"updateAdjustElementStyles",value:function(){this.fixed_&&this.adapter_.setStyleForFixedAdjustElement("margin-top",this.calculations_.toolbarHeight+"px")}},{key:"getFlexibleExpansionRatio_",value:function(e){var t=1e-4;return Math.max(0,1-e/(this.calculations_.flexibleExpansionHeight+t))}},{key:"checkRowHeight_",value:function(){var e=this;cancelAnimationFrame(this.checkRowHeightFrame_),this.checkRowHeightFrame_=requestAnimationFrame(function(){return e.setKeyHeights_()})}},{key:"setKeyHeights_",value:function(){var e=this.getRowHeight_();e!==this.calculations_.toolbarRowHeight&&(this.calculations_.toolbarRowHeight=e,this.calculations_.toolbarHeight=this.calculations_.toolbarRatio*this.calculations_.toolbarRowHeight,this.calculations_.flexibleExpansionHeight=this.calculations_.flexibleExpansionRatio*this.calculations_.toolbarRowHeight,this.calculations_.maxTranslateYDistance=this.calculations_.maxTranslateYRatio*this.calculations_.toolbarRowHeight,this.calculations_.scrollThreshold=this.calculations_.scrollThresholdRatio*this.calculations_.toolbarRowHeight,this.updateAdjustElementStyles(),this.updateToolbarStyles_())}},{key:"updateToolbarStyles_",value:function(){var e=this;cancelAnimationFrame(this.scrollFrame_),this.scrollFrame_=requestAnimationFrame(function(){var t=e.adapter_.getViewportScrollY(),n=e.scrolledOutOfThreshold_(t);if(!n||!e.executedLastChange_){var r=e.getFlexibleExpansionRatio_(t);e.updateToolbarFlexibleState_(r),e.fixedLastrow_&&e.updateToolbarFixedState_(t),e.hasFlexibleRow_&&e.updateFlexibleRowElementStyles_(r),e.executedLastChange_=n,e.adapter_.notifyChange({flexibleExpansionRatio:r})}})}},{key:"scrolledOutOfThreshold_",value:function(e){return e>this.calculations_.scrollThreshold}},{key:"initKeyRatio_",value:function(){var e=this.getRowHeight_(),t=this.adapter_.getFirstRowElementOffsetHeight()/e;this.calculations_.toolbarRatio=this.adapter_.getOffsetHeight()/e,this.calculations_.flexibleExpansionRatio=t-1,this.calculations_.maxTranslateYRatio=this.fixedLastrow_?this.calculations_.toolbarRatio-t:0,this.calculations_.scrollThresholdRatio=(this.fixedLastrow_?this.calculations_.toolbarRatio:t)-1}},{key:"getRowHeight_",value:function(){var e=t.numbers.TOOLBAR_MOBILE_BREAKPOINT;return this.adapter_.getViewportWidth()<e?t.numbers.TOOLBAR_ROW_MOBILE_HEIGHT:t.numbers.TOOLBAR_ROW_HEIGHT}},{key:"updateToolbarFlexibleState_",value:function(e){this.adapter_.removeClass(t.cssClasses.FLEXIBLE_MAX),this.adapter_.removeClass(t.cssClasses.FLEXIBLE_MIN),1===e?this.adapter_.addClass(t.cssClasses.FLEXIBLE_MAX):0===e&&this.adapter_.addClass(t.cssClasses.FLEXIBLE_MIN)}},{key:"updateToolbarFixedState_",value:function(e){var n=Math.max(0,Math.min(e-this.calculations_.flexibleExpansionHeight,this.calculations_.maxTranslateYDistance));this.adapter_.setStyle("transform","translateY("+-n+"px)"),n===this.calculations_.maxTranslateYDistance?this.adapter_.addClass(t.cssClasses.FIXED_AT_LAST_ROW):this.adapter_.removeClass(t.cssClasses.FIXED_AT_LAST_ROW)}},{key:"updateFlexibleRowElementStyles_",value:function(e){if(this.fixed_){var t=this.calculations_.flexibleExpansionHeight*e;this.adapter_.setStyleForFlexibleRowElement("height",t+this.calculations_.toolbarRowHeight+"px")}this.useFlexDefaultBehavior_&&this.updateElementStylesDefaultBehavior_(e)}},{key:"updateElementStylesDefaultBehavior_",value:function(e){var n=t.numbers.MAX_TITLE_SIZE,r=t.numbers.MIN_TITLE_SIZE,o=(n-r)*e+r;this.adapter_.setStyleForTitleElement("font-size",o+"rem")}}]),t}(a.a);t.a=c},98:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"b",function(){return i});var r={FIXED:"mdc-toolbar--fixed",FIXED_LASTROW:"mdc-toolbar--fixed-lastrow-only",FIXED_AT_LAST_ROW:"mdc-toolbar--fixed-at-last-row",TOOLBAR_ROW_FLEXIBLE:"mdc-toolbar--flexible",FLEXIBLE_DEFAULT_BEHAVIOR:"mdc-toolbar--flexible-default-behavior",FLEXIBLE_MAX:"mdc-toolbar--flexible-space-maximized",FLEXIBLE_MIN:"mdc-toolbar--flexible-space-minimized"},o={TITLE_SELECTOR:".mdc-toolbar__title",FIRST_ROW_SELECTOR:".mdc-toolbar__row:first-child",CHANGE_EVENT:"MDCToolbar:change"},i={MAX_TITLE_SIZE:2.125,MIN_TITLE_SIZE:1.25,TOOLBAR_ROW_HEIGHT:64,TOOLBAR_ROW_MOBILE_HEIGHT:56,TOOLBAR_MOBILE_BREAKPOINT:600}},99:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0===o||t){var n=!1;try{e.document.addEventListener("test",null,{get passive(){n=!0}})}catch(e){}o=n}return!!o&&{passive:!0}}Object.defineProperty(t,"__esModule",{value:!0}),t.applyPassive=r;var o=void 0}})})},"./node_modules/deep-equal/index.js":function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,c;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(l(e))return!!l(t)&&(e=a.call(e),t=a.call(t),u(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var f=s(e),d=s(t)}catch(e){return!1}if(f.length!=d.length)return!1;for(f.sort(),d.sort(),i=f.length-1;i>=0;i--)if(f[i]!=d[i])return!1;for(i=f.length-1;i>=0;i--)if(c=f[i],!u(e[c],t[c],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,s=n("./node_modules/deep-equal/lib/keys.js"),l=n("./node_modules/deep-equal/lib/is_arguments.js"),u=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},"./node_modules/deep-equal/lib/is_arguments.js":function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},"./node_modules/deep-equal/lib/keys.js":function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},"./node_modules/exenv/index.js":function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},"./node_modules/react-helmet/lib/Helmet.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n("./node_modules/react/react.js"),f=r(c),d=n("./node_modules/prop-types/index.js"),p=r(d),T=n("./node_modules/react-side-effect/lib/index.js"),h=r(T),_=n("./node_modules/deep-equal/index.js"),E=r(_),y=n("./node_modules/react-helmet/lib/HelmetUtils.js"),b=n("./node_modules/react-helmet/lib/HelmetConstants.js"),m=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return s(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,E.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case b.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return l({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[l({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case b.TAG_NAMES.TITLE:return l({},o,(t={},t[r.type]=a,t.titleAttributes=l({},i),t));case b.TAG_NAMES.BODY:return l({},o,{bodyAttributes:l({},i)});case b.TAG_NAMES.HTML:return l({},o,{htmlAttributes:l({},i)})}return l({},o,(n={},n[r.type]=l({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=l({},t);return Object.keys(e).forEach(function(t){var r;n=l({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return f.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,s=o(i,["children"]),l=(0,y.convertReactPropstoHtmlAttributes)(s);switch(n.warnOnInvalidChildren(e,a),e.type){case b.TAG_NAMES.LINK:case b.TAG_NAMES.META:case b.TAG_NAMES.NOSCRIPT:case b.TAG_NAMES.SCRIPT:case b.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=l({},r);return n&&(i=this.mapChildrenToProps(n,i)),f.default.createElement(e,i)},u(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(f.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,y.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},A=function(){return null},v=(0,h.default)(y.reducePropsToState,y.handleClientStateChange,y.mapStateOnServer)(A),g=m(v);g.renderStatic=g.rewind,t.Helmet=g,t.default=g},"./node_modules/react-helmet/lib/HelmetConstants.js":function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"./node_modules/react-helmet/lib/HelmetUtils.js":function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestIdleCallback=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n("./node_modules/react/react.js"),s=r(a),l=n("./node_modules/object-assign/index.js"),u=r(l),c=n("./node_modules/react-helmet/lib/HelmetConstants.js"),f=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=E(e,c.TAG_NAMES.TITLE),n=E(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=E(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return E(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},h=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[c.TAG_NAMES.BASE]}).map(function(e){return e[c.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},_=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&A("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var s=i[a],l=s.toLowerCase();t.indexOf(l)===-1||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),t.indexOf(s)===-1||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],l=(0,u.default)({},r[s],o[s]);r[s]=l}return e},[]).reverse()},E=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=function(e){return{baseTag:h([c.TAG_PROPERTIES.HREF],e),bodyAttributes:T(c.ATTRIBUTE_NAMES.BODY,e),encode:E(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(c.ATTRIBUTE_NAMES.HTML,e),linkTags:_(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:_(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:_(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:_(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:_(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:T(c.ATTRIBUTE_NAMES.TITLE,e)}},b=function(){return"undefined"!=typeof window&&"undefined"!=typeof window.requestIdleCallback?window.requestIdleCallback:function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)}}(),m=function(){return"undefined"!=typeof window&&"undefined"!=typeof window.cancelIdleCallback?window.cancelIdleCallback:function(e){return clearTimeout(e)}}(),A=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,g=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.htmlAttributes,o=e.linkTags,i=e.metaTags,a=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,d=e.titleAttributes;v&&m(v),v=b(function(){O(c.TAG_NAMES.BODY,n),O(c.TAG_NAMES.HTML,r),S(f,d);var p={baseTag:R(c.TAG_NAMES.BASE,t),linkTags:R(c.TAG_NAMES.LINK,o),metaTags:R(c.TAG_NAMES.META,i),noscriptTags:R(c.TAG_NAMES.NOSCRIPT,a),scriptTags:R(c.TAG_NAMES.SCRIPT,l),styleTags:R(c.TAG_NAMES.STYLE,u)},T={},h={};Object.keys(p).forEach(function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(h[e]=p[e].oldTags)}),v=null,s(e,T,h)})},S=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=Array.isArray(e)?e.join(""):e),O(c.TAG_NAMES.TITLE,t)},O=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),s=0;s<a.length;s++){var l=a[s],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),o.indexOf(l)===-1&&o.push(l);var f=i.indexOf(l);f!==-1&&i.splice(f,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},R=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},w=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},C=function(e,t,n,r){var o=w(n);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+f(t,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+f(t,r)+"</"+e+">"},P=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=c.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t},t)},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t},t)},I=function(e,t,n){var r,o=(r={key:t},r[c.HELMET_ATTRIBUTE]=!0,r),i=L(n,o);return[s.default.createElement(c.TAG_NAMES.TITLE,i,t)]},x=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),s.default.createElement(e,o)})},j=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return I(e,t.title,t.titleAttributes,n)},toString:function(){return C(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return L(t)},toString:function(){return w(t)}};default:return{toComponent:function(){return x(e,t)},toString:function(){return P(e,t,n)}}}},H=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,f=e.title,d=void 0===f?"":f,p=e.titleAttributes;return{base:j(c.TAG_NAMES.BASE,t,r),bodyAttributes:j(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:j(c.ATTRIBUTE_NAMES.HTML,o,r),link:j(c.TAG_NAMES.LINK,i,r),meta:j(c.TAG_NAMES.META,a,r),noscript:j(c.TAG_NAMES.NOSCRIPT,s,r),script:j(c.TAG_NAMES.SCRIPT,l,r),style:j(c.TAG_NAMES.STYLE,u,r),title:j(c.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=M,t.handleClientStateChange=g,t.mapStateOnServer=H,t.reducePropsToState=y,t.requestIdleCallback=b,t.warn=A},"./node_modules/react-side-effect/lib/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n("./node_modules/react/react.js"),l=r(s),u=n("./node_modules/exenv/index.js"),c=r(u),f=n("./node_modules/shallowequal/index.js"),d=r(f);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(u){function f(){T=e(p.map(function(e){return e.props})),h.canUseDOM?t(T):n&&(T=n(T));
}if("function"!=typeof u)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,h=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),f()},t.prototype.render=function(){return l.default.createElement(u,this.props)},t}(s.Component);return h.displayName="SideEffect("+r(u)+")",h.canUseDOM=c.default.canUseDOM,h}}},"./node_modules/shallowequal/index.js":function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var u=i[l];if(!s(u))return!1;var c=e[u],f=t[u];if(o=n?n.call(r,c,f,u):void 0,o===!1||void 0===o&&c!==f)return!1}return!0}},"./src/components/toolbar.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n("./node_modules/react/react.js"),u=r(l),c=n("./node_modules/gatsby-link/index.js"),f=(r(c),n("./node_modules/@material/toolbar/dist/mdc.toolbar.js")),d=n("./src/hero.jpg"),p=(r(d),function(e){function t(){o(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.foundation=new f.MDCToolbarFoundation({}),e}return a(t,e),s(t,[{key:"render",value:function(){return u.default.createElement("header",{className:"mdc-toolbar"},u.default.createElement("div",{className:"mdc-toolbar__row"},u.default.createElement("section",{className:"mdc-toolbar__section mdc-toolbar__section--align-start"},u.default.createElement("span",{className:"mdc-toolbar__title"},"Pedicuresalon Farla"))))}}]),t}(u.default.Component));t.default=p,e.exports=t.default},"./src/hero.jpg":function(e,t,n){e.exports=n.p+"static/hero.4765ba0e.jpg"},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/thomasfarla/Documents/pedicuresalonfarla/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/thomasfarla/Documents/pedicuresalonfarla/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/thomasfarla/Documents/pedicuresalonfarla/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/thomasfarla/Documents/pedicuresalonfarla/node_modules/babel-preset-env/lib/index.js","/Users/thomasfarla/Documents/pedicuresalonfarla/node_modules/babel-preset-stage-0/lib/index.js","/Users/thomasfarla/Documents/pedicuresalonfarla/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("./node_modules/react/react.js"),i=r(o),a=n("./node_modules/prop-types/index.js"),s=r(a),l=n("./node_modules/gatsby-link/index.js"),u=(r(l),n("./node_modules/react-helmet/lib/Helmet.js")),c=r(u),f=n("./src/components/toolbar.js"),d=r(f);n("./src/layouts/index.scss");var p=function(){return i.default.createElement(d.default,null)},T=function(e){var t=e.children;return i.default.createElement("div",null,i.default.createElement(c.default,{title:"Gatsby Default Starter",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"},{name:"viewport",content:"width=device-width, initial-scale=1"}]}),i.default.createElement(p,null),i.default.createElement("div",null,t()))};T.propTypes={children:s.default.func},t.default=T,e.exports=t.default},"./src/layouts/index.scss":function(e,t){}});
//# sourceMappingURL=layout-component---index-b73ada762de88296294a.js.map