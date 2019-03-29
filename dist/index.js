!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var l=o.apply(null,r);l&&e.push(l)}else if("object"===a)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},,,function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=wp.element.Component,f=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,c(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(t,p),n=t,(r=[{key:"render",value:function(){var e=this.props.attributes,t=(e.ctaTitle,e.ctaText,e.buttonText,e.buttonUrl,o()([this.props.className,"blue-cta"]));return wp.element.createElement("section",{className:t||void 0},this.props.children)}}])&&l(n.prototype,r),a&&l(n,a),t}();function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=wp.i18n.__,v=wp.element.Component,_=wp.blocks.registerBlockType,w=wp.editor,g=w.RichText,O=w.URLInput,x=wp.components,E=x.IconButton,T=x.Dashicon,j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,y(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,v),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.attributes,n=t.ctaTitle,r=t.ctaText,a=t.buttonText,l=t.buttonUrl,u=e.isSelected,c=e.setAttributes;return[wp.element.createElement(f,this.props,wp.element.createElement("section",{className:"blue-cta__content"},wp.element.createElement(g,{tagName:"h2",placeholder:h("Call to action headline..."),keepPlaceholderOnFocus:!0,value:n,className:o()("blue-cta__title"),onChange:function(e){return c({ctaTitle:e})}}),wp.element.createElement(g,{tagName:"div",multiline:"p",placeholder:h("Call to action text..."),keepPlaceholderOnFocus:!0,value:r,className:o()("blue-cta__text"),onChange:function(e){return c({ctaText:e})}}),wp.element.createElement(g,{tagName:"span",placeholder:h("Button text..."),value:a,className:o()("blue-cta__button-text"),onChange:function(e){return c({buttonText:e})}}),u&&wp.element.createElement("form",{key:"form-link",className:"blocks-button__inline-link",onSubmit:function(e){return e.preventDefault()}},wp.element.createElement(T,{icon:"admin-links"}),wp.element.createElement(O,{className:"button-url",value:l,onChange:function(e){return c({buttonUrl:e})}}),wp.element.createElement(E,{icon:"editor-break",label:h("Apply"),type:"submit"}))))]}}])&&b(n.prototype,r),a&&b(n,a),t}();_("custom-block/cta-rich",{title:h("Call To Action"),description:h("Add a call to action section with a title, text, and a button."),icon:"megaphone",category:"common",keywords:[h("call to action"),h("cta")],attributes:{ctaTitle:{default:null,type:"array",selector:".blue-cta__title",source:"children"},ctaText:{default:"",type:"array",selector:".blue-cta__text",source:"children"},buttonText:{default:"",type:"string"},buttonUrl:{default:"",type:"string",source:"attribute",selector:"a",attribute:"href"}},getEditWrapperProps:function(e){return{"data-align":"wide"}},edit:j,save:function(e){var t=e.attributes,n=t.ctaTitle,r=t.ctaText,a=t.buttonText,l=t.buttonUrl;return wp.element.createElement(f,e,wp.element.createElement("div",{className:"blue-cta__content"},n&&wp.element.createElement(g.Content,{tagName:"h2",className:o()("blue-cta__title"),value:n}),r&&wp.element.createElement(g.Content,{tagName:"div",className:o()("blue-cta__text"),value:r}),a&&wp.element.createElement("div",{className:"blue-cta__button"},wp.element.createElement("a",{href:l,rel:"noopener noreferrer",className:o()("blue-cta__button-link")},wp.element.createElement(g.Content,{value:a})))))}})}]);