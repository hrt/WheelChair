// ==UserScript==
// @name         Krunker Powered WheelChair
// @namespace    https://github.com/hrt
// @version      1.8.2
// @description  WheelChair
// @author       hrt x ttap x MasterP
// @match        *://krunker.io/*
// @run-at       document-start
// @require      http://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js
// @grant        none
// ==/UserScript==

WebFont.load({
    google: {
        families: ['Roboto']
    }
});
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).MyGUI=t()}}(function(){var t={};function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){function t(e,i,n,o,s,r,h){var l=arguments.length>7&&void 0!==arguments[7]&&arguments[7];!function(e,i){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this.styles=e,this.text=i,this.size=n,this.fillStyle=s,this.fontFamily=o,this.x=r,this.y=h,this.center=l}var i,n;return i=t,(n=[{key:"draw",value:function(t){t.font=this.size+" "+this.fontFamily,t.fillStyle=this.fillStyle,this.center?t.textAlign="center":t.textAlign="start",t.fillText(this.text,this.x,this.y-this.styles.itemHeight/2+3)}}])&&e(i.prototype,n),t}();t.default=i;var n={};function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=function(){function t(){!function(e,i){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this)}var e,i;return e=t,(i=[{key:"contains",value:function(t,e){return this.x<=t&&t<=this.x+this.width&&this.y<=e-1&&e<=this.y+this.height-1}},{key:"onChange",value:function(e){this.__onChange=e,this.children.forEach(function(i){i instanceof t&&(i.__onChange=e)})}},{key:"updateStats",value:function(t,e,i,n,o,s){this.contains(t,e)&&s?(this.hovered=!0,i&&(o?this.uuid===o:s)&&(this.clicked=!0)):(i&&(this.fClicked=!0),this.hovered=!1),n&&s||(this.clicked=!1,this.fClicked=!1)}}])&&o(e.prototype,i),t}();n.default=s;var r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var h,l=(h=n)&&h.__esModule?h:{default:h};function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=function(t){function e(t,i,n,o,s,r){var h,l,u;return function(t,i){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),(l=this,u=c(e).call(this),h=!u||"object"!==a(u)&&"function"!=typeof u?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(l):u).styles=t,h.width=12,h.height=12,h.leftPadding=o-2*h.width,h.topPadding=h.height/2+2,h.x=i+h.leftPadding,h.y=n+h.topPadding,h.containerWidth=o,h.obj=s,h.name="name",h.clicked=!1,h.hovered=!1,h.val=r,h}var i,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,l.default),i=e,(n=[{key:"toggle",value:function(){this.obj[this.val]=!this.obj[this.val],this.__onChange&&this.__onChange.call(this,this.obj[this.val])}},{key:"update",value:function(t,e,i,n,o,s){var r=!this.clicked;this.updateStats(t,e,i,n,o,s),this.clicked&&r&&this.toggle()}},{key:"draw",value:function(t){this.obj[this.val]||(t.fillStyle=this.styles.checkbox.background),this.obj[this.val]&&(t.fillStyle=this.styles.checkbox.checkedBg),this.hovered&&!this.obj[this.val]&&(t.fillStyle=this.styles.checkbox.hovered),t.fillRect(this.x,this.y,this.width,this.height)}}])&&u(i.prototype,n),e}();r.default=d;var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;var p,v=(p=n)&&p.__esModule?p:{default:p};function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function w(t,e){return(w=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var x=function(t){function e(t,i,n,o,s,r){var h,l,a;return function(t,i){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),(l=this,a=m(e).call(this,o,s),h=!a||"object"!==b(a)&&"function"!=typeof a?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(l):a).styles=t,h.width=89,h.height=20,h.leftPadding=105,h.topPadding=h.height/2-6,h.x=i+h.leftPadding,h.y=n+h.topPadding,h.obj=o,h.val=s,h.min=r.min,h.max=r.max,h.step=r.step||!1,h.clicked=!1,h.hovered=!1,h.value=o[s],h}var i,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&w(t,e)}(e,v.default),i=e,(n=[{key:"update",value:function(t,e,i,n,o,s){if(this.updateStats(t,e,i,n,o,s),this.clicked){var r=t;r=Math.max(r,this.x),r=Math.min(r,this.x+this.width);var h=this.max-this.min,l=(r-this.x)/this.width;this.value=Math.round(this.min+l*h),this.step&&(this.value=Math.round(this.value/this.step)*this.step),this.obj[this.val]=this.value,this.__onChange&&this.__onChange(this.obj[val])}}},{key:"draw",value:function(t){this.hovered||(t.fillStyle=this.styles.slider.background),this.hovered&&(t.fillStyle=this.styles.slider.hovered),t.fillRect(this.x,this.y,this.width,this.height);var e=this.max-this.min,i=(this.obj[this.val]-this.min)/e,n=this.width*i;t.fillStyle=this.styles.slider.slider,t.fillRect(this.x,this.y,n,this.height),t.fillStyle=this.styles.slider.color,t.fillText(this.obj[this.val].toString(),this.width+this.x+5,this.y+2*this.topPadding+6)}}])&&g(i.prototype,n),e}();y.default=x;var k={};Object.defineProperty(k,"__esModule",{value:!0}),k.default=void 0;var P,S=(P=n)&&P.__esModule?P:{default:P};function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function C(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function T(t,e){return(T=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var M=function(t){function e(t,i,n,o,s,r,h,l){var a,u;return function(t,i){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this,(a=!(u=O(e).call(this))||"object"!==j(u)&&"function"!=typeof u?C(this):u).styles=t,a.width=s,a.height=t.itemHeight-4,a.topPadding=i*a.height+a.height-4,a.x=n,a.y=o,a.val=r,a.visible=!1,a.name=r,a.hovered=!1,a.uuid=l,a.cb=h,a.hide=a.hide.bind(C(a)),a}var i,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&T(t,e)}(e,S.default),i=e,(n=[{key:"update",value:function(t,e,i,n,o,s){var r=!this.clicked;this.updateStats(t,e,i,n,o,s),this.clicked&&r&&this.visible&&this.cb(this.val)}},{key:"hide",value:function(){this.visible=!1}},{key:"draw",value:function(t){this.visible&&(this.hovered||(t.fillStyle=this.styles.option.background),this.hovered&&(t.fillStyle=this.styles.option.hovered),t.fillRect(this.x,this.y,this.width,this.height),t.strokeStyle=this.styles.item.background,t.lineWidth=.8,t.beginPath(),t.moveTo(this.x,this.y),t.lineTo(this.x+this.width,this.y),t.closePath(),t.stroke(),t.fillStyle=this.hovered?this.styles.option.hoveredColor:this.styles.option.color,t.fillText(this.val,this.x+4,this.y+this.height/2+4))}}])&&_(i.prototype,n),e}();k.default=M;var E={};Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;var D=I(k),A=I(n);function I(t){return t&&t.__esModule?t:{default:t}}function H(t){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function L(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function W(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function B(t,e){return(B=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var U=function(t){function e(t,i,n,o,s,r,h,l,a,u,c){var f,d;!function(t,i){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),d=R(e).call(this),(f=!d||"object"!==H(d)&&"function"!=typeof d?W(this):d).styles=t,f.x=i,f.y=n,f.obj=r,f.vals=l,f.children=[],f.val=h,f.height=24*("object"===H(l)?Object.keys(l).length:Array.isArray(l)?Array.length:1),f.width=o,f.containerHeight=s,f.visible=!1,f.uuid=a;var y=u;return f.valsLength=c,f.delOption=f.delOption.bind(W(f)),u=function(t){f.visible=!1,y(t)},f.cb=u,f.buildList(),f}var i,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&B(t,e)}(e,A.default),i=e,(n=[{key:"changeValues",value:function(){var t=this;Array.isArray(this.vals)?this.vals.forEach(function(e,i){t.children[i].val=e}):"object"===H(this.vals)&&Object.entries(this.vals).forEach(function(e,i){t.children[i].val=e[0]})}},{key:"buildList",value:function(){var t=this;this.children=[],Array.isArray(this.vals)?this.vals.forEach(function(e,i){var n=new D.default(t.styles,i,t.x,t.y,t.width,e,t.cb,t.uuid);t.children.push(n)}):"object"===H(this.vals)&&Object.entries(this.vals).forEach(function(e,i){var n=new D.default(t.styles,i,t.x,t.y,t.width,e[0],t.cb,t.uuid);t.children.push(n)})}},{key:"hide",value:function(){this.visible=!1,this.children.map(function(t){t.hide()})}},{key:"delOption",value:function(t,e){this.children=this.children.filter(function(e){return e.name!==t}),this.vals=e,this.changeValues(),this.updatePos()}},{key:"updateValues",value:function(t){this.vals=t,this.buildList(),this.updatePos()}},{key:"updateInfo",value:function(t){this.obj=t,this.changeValues(),this.updatePos()}},{key:"updatePos",value:function(){var t=this;this.children.forEach(function(e){e.y=t.y+e.topPadding,e.x=t.x,e.updatePos&&e.updatePos()})}},{key:"update",value:function(t,e,i,n,o,s){var r=this;this.updateStats(t,e,i,n,o,s),this.children.forEach(function(t){return t.visible=r.visible})}},{key:"draw",value:function(){}}])&&L(i.prototype,n),e}();E.default=U;var Y={};Object.defineProperty(Y,"__esModule",{value:!0}),Y.default=void 0;var F=G(E),N=G(n);function G(t){return t&&t.__esModule?t:{default:t}}function V(t){return(V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function J(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function K(t){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function z(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function X(t,e){return(X=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Q=function(t){function e(t,i,n,o,s,r,h){var l,a;return function(t,i){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this,a=K(e).call(this),(l=!a||"object"!==V(a)&&"function"!=typeof a?z(this):a).uuid=l.uuidv4(),l.styles=t,l.height=20,l.topPadding=l.height/2-2,l.width=80,l.leftPadding=t.gui.width-l.width-13,l.y=n+l.topPadding,l.x=i,l.obj=o,l.val=s,l.vals=r,l.visible=!1,l.valText="",l.cb=h,l.updateInfo=l.updateInfo.bind(z(l)),l.updatePos=l.updatePos.bind(z(l)),l.getDefaultSelected=l.getDefaultSelected.bind(z(l)),l.getDefaultSelected(),l.delVal=l.delVal.bind(z(l)),l.dropDown=new F.default(l.styles,l.x,l.y,l.width,l.height,o,s,r,l.uuid,l.updateInfo,function(t){return l.valsLength=t}),l.children=[l.dropDown],l.updatePos(),l}var i,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&X(t,e)}(e,N.default),i=e,(n=[{key:"getDefaultSelected",value:function(){var t=this;if(Array.isArray(this.vals))this.valText=this.vals[this.obj[this.val]],this.valText||(this.valText=this.obj[this.val]);else if("object"===V(this.vals)){var e=Object.entries(this.vals).find(function(e){return e[1]===t.obj[t.val]});this.valText=e[0]}}},{key:"updateInfo",value:function(t){if("string"==typeof this.vals)this.obj[this.val]=this.vals[t];else if(Array.isArray(this.vals))"string"==typeof this.obj[this.val]?this.obj[this.val]=this.vals[this.vals.indexOf(t)]:this.obj[this.val]=this.vals.indexOf(t);else if("object"===V(this.vals)){var e=Object.entries(this.vals).find(function(e){return e[0]===t});this.obj[this.val]=e[1]}this.valText=t,this.__onChange&&this.__onChange(this.obj[this.val]),this.dropDown.updateInfo(this.vals,this.obj[this.val]),this.visible=!1}},{key:"uuidv4",value:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})}},{key:"update",value:function(t,e,i,n,o,s,r){var h=!this.clicked;this.updateStats(t,e,i,n,o,s,r),this.clicked&&h&&(this.dropDown.visible=!0,this.visible=!0,this.cb())}},{key:"hideAll",value:function(){this.visible=!1,this.children.forEach(function(t){t.hide()})}},{key:"updatePos",value:function(){var t=this;this.children.forEach(function(e){e.y=t.y,e.x=t.x,e.updatePos&&e.updatePos()})}},{key:"delVal",value:function(t){this.dropDown.delOption(t)}},{key:"draw",value:function(t){t&&(t.strokeStyle=this.styles.select.outline,this.hovered||(t.fillStyle=this.styles.select.background),this.hovered&&(t.fillStyle=this.styles.select.hovered),t.lineWidth=1,t.strokeRect(this.x,this.y-this.topPadding/2,this.width,this.height),t.fillRect(this.x,this.y-this.topPadding/2,this.width,this.height),t.fillStyle=this.styles.select.color,t.font=this.styles.item.fontSize+" "+this.styles.fontFamily,t.fillText(this.valText,this.x+4,this.y-10+this.height),t.beginPath(),t.moveTo(this.x+this.width-10,this.y+this.topPadding-5),t.lineTo(this.x+this.width-4,this.y+this.topPadding-5),t.lineTo(this.x+this.width-7,this.y+this.topPadding+2),t.closePath(),t.fill())}}])&&J(i.prototype,n),e}();Y.default=Q;var q={};Object.defineProperty(q,"__esModule",{value:!0}),q.default=void 0;var Z,$=(Z=n)&&Z.__esModule?Z:{default:Z};function tt(t){return(tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function et(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function it(t){return(it=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function nt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ot(t,e){return(ot=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var st=function(t){function e(t,i,n,o,s,r){var h,l;return function(t,i){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this,(h=!(l=it(e).call(this))||"object"!==tt(l)&&"function"!=typeof l?nt(this):l).obj=n,h.val=o,h.styles=t,h.topPadding=0,h.ctx=void 0,h.gradientWidth=75,h.graidentHeight=75,h.sliderWidth=15,h.sliderHeight=h.graidentHeight,h.width=h.gradientWidth+h.sliderWidth,h.height=h.graidentHeight,h.leftPadding=h.gradientWidth/2-h.sliderWidth,h.x=0,h.y=i,h.topPadding=t.itemHeight,h.paddingBetween=4,h.visible=!1,h.uuid=s,h.setText=r,h.sliderY=h.y,h.sliderDiff=0,h.sliderColor=Object.assign({},n[o]),h.selectedColor=n[o],h.isHex=h.isHexColor(n[o]),h.getColor=h.getColor.bind(nt(h)),h}var i,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ot(t,e)}(e,$.default),i=e,(n=[{key:"hide",value:function(t){this.hovered||(this.visible=!1,t())}},{key:"rgbToHex",value:function(t,e,i){return"#"+((1<<24)+(t<<16)+(e<<8)+i).toString(16).slice(1)}},{key:"isHexColor",value:function(t){return/^#[0-9A-F]{6}$/i.test(t)}},{key:"setGraident",value:function(t,e){this.sliderColor=this.getColor(t,e),this.fillGradient(this.ctx)}},{key:"setColor",value:function(t,e){this.selectedColor=this.isHex?this.getColorHex(t,e):this.getColor(t,e),this.obj[this.val]=this.selectedColor,this.setText(this.selectedColor),this.__onChange&&this.__onChange(this.obj[this.val])}},{key:"getColorHex",value:function(t,e){var i=this.ctx.getImageData(t,e,1,1).data;return this.rgbToHex(i[0],i[1],i[2])}},{key:"getColor",value:function(t,e){var i=this.ctx.getImageData(t,e,1,1).data;return"rgba("+i[0]+","+i[1]+","+i[2]+",1)".toString()}},{key:"isOverGraident",value:function(t,e){return t>=this.x&&t<=this.x+this.gradientWidth&&e>=this.y&&e<=this.y+this.graidentHeight}},{key:"isOverSlider",value:function(t,e){return t>=this.x+this.gradientWidth+this.paddingBetween&&t<=this.x+this.gradientWidth+4*this.paddingBetween+this.sliderWidth&&e>=this.y&&e<=this.y+this.sliderHeight}},{key:"getDefaultSelected",value:function(){this.selectedColor=this.obj[this.val],this.setText(this.selectedColor)}},{key:"update",value:function(t,e,i,n,o,s,r,h,l){t-=1,e-=1,this.setText(this.obj[this.val]),this.updateStats(t,e,i,n,o,!0),this.hovered&&this.ctx&&this.visible&&this.clicked?(l(!1),this.isOverGraident(t,e)?this.setColor(t,e):this.isOverSlider(t,e)&&(this.sliderY=e,this.sliderDiff=e-this.y,this.setGraident(this.x+this.gradientWidth+this.paddingBetween+1,e))):this.fClicked&&l(!0)}},{key:"fillGradient",value:function(t){t.fillStyle=this.sliderColor,t.fillRect(this.x,this.y,this.gradientWidth,this.graidentHeight);var e=t.createLinearGradient(this.x,this.y,this.gradientWidth+this.x,this.y);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(this.x,this.y,this.gradientWidth,this.graidentHeight);var i=t.createLinearGradient(this.x,this.y,this.x,this.y+this.graidentHeight);i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(1,"rgba(0,0,0,1)"),t.fillStyle=i,t.fillRect(this.x,this.y,this.gradientWidth,this.graidentHeight),t.fill()}},{key:"updatePos",value:function(){this.sliderY=this.y+this.sliderDiff}},{key:"draw",value:function(t){if(this.ctx||(this.ctx=t),this.visible){this.fillGradient(t);var e=t.createLinearGradient(this.x+this.gradientWidth+this.paddingBetween,this.y,this.x+this.sliderWidth+this.sliderHeight-2*this.paddingBetween,this.y+this.sliderHeight);e.addColorStop(0,"rgba(255, 0, 0, 1)"),e.addColorStop(.17,"rgba(255, 255, 0, 1)"),e.addColorStop(.34,"rgba(0, 255, 0, 1)"),e.addColorStop(.51,"rgba(0, 255, 255, 1)"),e.addColorStop(.68,"rgba(0, 0, 255, 1)"),e.addColorStop(.85,"rgba(255, 0, 255, 1)"),e.addColorStop(1,"rgba(255, 0, 0, 1)"),t.fillStyle=e,t.fillRect(this.x+this.gradientWidth+this.paddingBetween,this.y,this.sliderWidth,this.sliderHeight),this.ctx.beginPath(),this.ctx.moveTo(this.x+this.gradientWidth+this.paddingBetween+this.sliderWidth/2,this.sliderY),this.ctx.lineTo(this.x+this.gradientWidth+this.paddingBetween+this.sliderWidth/2+8,this.sliderY),this.ctx.stroke()}}}])&&et(i.prototype,n),e}();q.default=st;var rt={};Object.defineProperty(rt,"__esModule",{value:!0}),rt.default=void 0;var ht=at(q),lt=at(n);function at(t){return t&&t.__esModule?t:{default:t}}function ut(t){return(ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ct(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function ft(t){return(ft=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function dt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function yt(t,e){return(yt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var pt=function(t){function e(t,i,n,o,s,r,h){var l,a;return function(t,i){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this,(l=!(a=ft(e).call(this))||"object"!==ut(a)&&"function"!=typeof a?dt(this):a).styles=t,l.topPadding=2,l.y=n,l.width=120,l.height=22,l.leftPadding=t.gui.width-l.width-12,l.obj=o,l.val=s,l.x=i+l.leftPadding,l.uuid=l.uuidv4(),l.children=[],l.visible=!1,l.handleKeys=!1,l.text=o[s],l.setText=l.setText.bind(dt(l)),"Color"===r?(l.item=new ht.default(t,n,l.obj,l.val,l.uuid,l.setText),l.children.push(l.item)):"Input"===r&&(l.handleKeys=!0),l.cb=h,l}var i,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&yt(t,e)}(e,lt.default),i=e,(n=[{key:"setText",value:function(t){this.text=this.obj[t]||t,this.__onChange&&this.__onChange(this.obj[t]||t)}},{key:"uuidv4",value:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})}},{key:"updatePos",value:function(){var t=this;this.children.forEach(function(e){e.y=t.y+e.topPadding,e.x=t.x+e.leftPadding,e.updatePos&&e.updatePos()})}},{key:"hideAll",value:function(){var t=this;this.children.forEach(function(e){e.hide(function(){return t.visible=!1})}),this.visible=!1}},{key:"update",value:function(t,e,i,n,o,s,r,h){var l=!this.clicked;if(this.updateStats(t,e,i,n,o,s),this.handleKeys&&h&&this.visible){if("backspace"===h.toLowerCase())return void(this.text=this.text.toString().substring(0,this.text.toString().length-1));"enter"===h.toLowerCase()&&(this.visible=!1),1===h.length&&(this.text+=h),this.obj[this.val]=this.text}this.clicked&&l&&(this.item&&(this.item.visible=!0),this.visible=!0,this.cb())}},{key:"draw",value:function(t){var e=t.measureText(this.text).width;t.fillStyle=this.styles.input.background,t.fillRect(this.x,this.y,this.width,this.height),t.fillStyle=this.styles.input.color,t.font=this.styles.item.fontSize+" "+this.styles.fontFamily,this.item instanceof ht.default&&(t.fillStyle=this.text),t.fillText(this.text,this.x+2,this.y+this.height/2+4),this.handleKeys&&this.visible&&(t.strokeStyle=this.styles.input.cursor,t.beginPath(),t.moveTo(e+this.x+5,this.y+2),t.lineTo(e+this.x+5,this.y+this.height-2),t.stroke())}}])&&ct(i.prototype,n),e}();rt.default=pt;var vt={};Object.defineProperty(vt,"__esModule",{value:!0}),vt.default=void 0;var bt=Pt(r),gt=Pt(y),mt=Pt(Y),wt=Pt(rt),xt=Pt(t),kt=Pt(n);function Pt(t){return t&&t.__esModule?t:{default:t}}function St(t){return(St="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function jt(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _t(t){return(_t=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Ot(t,e){return(Ot=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Ct=function(t){function e(t,i,n,o,s,r,h,l,a,u){var c,f,d;return function(t,i){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),(f=this,d=_t(e).call(this,l,a),c=!d||"object"!==St(d)&&"function"!=typeof d?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(f):d).styles=t,c.text=n,c.x=o,c.y=s,c.width=r,c.height=t.itemHeight,c.obj=l,c.type=h,c.val=a,c.vals=u,c.children=[],c.doOnce=!1,c.id=i,c.topPadding=-t.itemHeight-2,c.active=0,c.uuid=c.uuidv4(),c.leftPadding=8,c.itemText=new xt.default(t,c.text,t.item.fontSize,t.fontFamily,t.item.color,c.x,c.y+c.topPadding),"Check"===c.type?(c.item=new bt.default(t,c.x,c.y,c.width,l,a),c.children.push(c.item)):"Slider"==c.type?(c.item=new gt.default(t,c.x,c.y,l,a,u),c.children.push(c.item)):"Select"===c.type?(c.item=new mt.default(t,c.x,c.y,l,a,u,function(){return c.active=c.item}),c.children.push(c.item)):"Color"===c.type?(c.item=new wt.default(t,c.x,c.y,l,a,"Color",function(){return c.active=c.item}),c.children.push(c.item)):"Input"===c.type&&(c.item=new wt.default(t,c.x,c.y,l,a,"Input",function(){return c.active=c.item}),c.children.push(c.item)),c.children.push(c.itemText),c}var i,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ot(t,e)}(e,kt.default),i=e,(n=[{key:"uuidv4",value:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})}},{key:"update",value:function(t,e,i,n){arguments.length>4&&void 0!==arguments[4]&&arguments[4];var o=arguments.length>5?arguments[5]:void 0,s=arguments.length>6?arguments[6]:void 0,r=!this.clicked;this.updateStats(t,e,i,n,!1,o,s),this.clicked&&r&&s(this.uuid)}},{key:"updatePos",value:function(){var t=this;this.children.forEach(function(e){if(e instanceof xt.default)return e.x=t.x,void(e.y=t.y+t.styles.itemHeight+2);e.x=t.x+e.leftPadding,e.y=t.y+e.topPadding,e.updatePos&&e.updatePos()})}},{key:"draw",value:function(t){t.fillStyle=this.styles.item.background,t.strokeStyle=this.styles.folder.header.background,t.lineWidth=.7,t.fillRect(this.x-this.leftPadding,this.y,this.width,this.height),t.beginPath(),t.moveTo(this.x-this.leftPadding,this.y+this.height),t.lineTo(this.x+this.width-this.leftPadding,this.y+this.height),t.stroke()}}])&&jt(i.prototype,n),e}();vt.default=Ct;var Tt={};Object.defineProperty(Tt,"__esModule",{value:!0}),Tt.default=void 0;var Mt=At(t),Et=At(vt),Dt=At(n);function At(t){return t&&t.__esModule?t:{default:t}}function It(t){return(It="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Ht(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Lt(t){return(Lt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Rt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Wt(t,e){return(Wt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var Bt=function(t){function e(t,i,n,o,s,r,h,l){var a,u;return function(t,i){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this,(a=!(u=Lt(e).call(this))||"object"!==It(u)&&"function"!=typeof u?Rt(this):u).styles=t,a.leftPadding=4,a.x=n,a.y=o,a.width=s,a.height=r,a.headerText=new Mt.default(t,i,t.folder.header.fontSize,t.fontFamily,t.folder.header.color,a.x+32,a.y+t.itemHeight+3),a.children=[a.headerText],a.oldChildren=[a.headerText],a.add=a.add.bind(Rt(a)),a.itemCount=1,a.open=!0,a.cb=h,a.object=l,a}var i,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Wt(t,e)}(e,Dt.default),i=e,(n=[{key:"update",value:function(t,e,i,n,o,s,r){var h=!this.clicked;t<=this.x||t>=this.x+28||(this.updateStats(t,e,i,n,!1,s),this.clicked&&h&&s&&(this.open=!this.open,this.open?(this.children=this.oldChildren,this.itemCount=this.children.length):(this.children=this.children.filter(function(t){return t instanceof Mt.default}),this.itemCount=1),this.cb()))}},{key:"uuidv4",value:function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})}},{key:"draw",value:function(t){t.fillStyle=this.styles.folder.header.background,t.fillRect(this.x,this.y,this.width,this.height),t.strokeStyle=this.styles.folder.header.color,t.lineWidth=1,this.open?(t.beginPath(),t.moveTo(this.x+16-5,this.y+this.height/2-5),t.lineTo(this.x+16+5,this.y+this.height/2+5),t.stroke(),t.moveTo(this.x+16+5,this.y+this.height/2-5),t.lineTo(this.x+16-5,this.y+this.height/2+5),t.stroke()):(t.beginPath(),t.moveTo(this.x+10,this.y+this.height/2),t.lineTo(this.x+10+4,this.y+this.height/2+5),t.lineTo(this.x+20,this.y+8+2),t.stroke())}},{key:"updatePos",value:function(t,e,i){var n=this;this.x=t,this.y=e+i*this.height,this.children.map(function(e){return e instanceof Mt.default?(e.x=t+32,e.y=n.y+n.height+2,e):(e.x=t+e.leftPadding,e.y=n.y+n.height*e.id-n.styles.itemHeight,e.updatePos(),e)})}},{key:"add",value:function(t,e,i,n,o){this.itemCount+=1;var s=new Et.default(this.styles,this.itemCount,t,this.x+8,this.y,this.width,n,this.object||e,i,o);return this.open?(this.children.push(s),this.oldChildren.push(s)):(this.oldChildren.push(s),this.itemCount=1),s}}])&&Ht(i.prototype,n),e}();Tt.default=Bt;var Ut={};function Yt(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(Ut,"__esModule",{value:!0}),Ut.default=void 0;var Ft=function(){function t(e,i,n,o){!function(e,i){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this.ctx=e,this.guiX=i,this.guiY=n,this.allowOverride=!1,this.position={x:0,y:0},this.lastPosition=this.position,this.actions={clicked:!1,isDown:!1},this.hotkeys={move:!1,hide:!1},this.menukey=45,this.guiWidth=o,this.guiHeight=0,this.inputKey=void 0,this.isMouseLocked=!1,this.mousemoved=!0,this.pointer=new Image,this.contains=this.contains.bind(this),this.pointer.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAABY0lEQVQ4jWNgoDao6J7TQYp6Jixi5bUTFkykxAAGYX7elPqJi2Yy/P/PSJYB6ZE+XMICfNF1kxYtbGhowKoGrwEc7GwM6ZHe3BIiQkEMgoprGhoaWEgygIGBgYGNlYUhJdSDW1JU2O2/kOJaXIbgdR4rKwtDUpgHt5ykmAuDkPKmtJkzWUkygIGBgYGFmZkhPtCNS15a1F7qB8fOhob5HCjyuDT++/ePgZGRkWHfyYv/Tl+8+fXz16+cTExMBr95/pYwMDC04DXgx89fDIs37vlpb6rHLikiyPT9x4/X3xl5dfoLw74T5YWJC9d/ffjk1cVDZy5/1lCWY2BlYRFn//9JA5taTAMYGf9++vy18hsjt8OjZ68YP3z6wmBtrM3BzsJaQpQB/xn+O7WVJE/uLwr7zvj//9yt+0/+vnX/yY8/f/85YotKvEm1pnu2IiMr67a/f/71sn1hXNLQkPgDn3qyAADk7Xbu3OP7PgAAAABJRU5ErkJggg==",this.mousedown=this.mousedown.bind(this),this.mouseup=this.mouseup.bind(this),this.mousemove=this.mousemove.bind(this),this.lockchange=this.lockchange.bind(this),this.keyup=this.keyup.bind(this),this.keydown=this.keydown.bind(this),this.hackKeys={},document.addEventListener("mousedown",this.mousedown,!0),document.addEventListener("mouseup",this.mousepp,!0),document.addEventListener("mousemove",this.mousemove,!0),document.addEventListener("keydown",this.keydown),document.addEventListener("keyup",this.keyup),document.addEventListener("pointerlockchange",this.lockchange,!1),document.addEventListener("mspointerlockchange",this.lockchange,!1),document.addEventListener("mozpointerlockchange",this.lockchange,!1),document.addEventListener("webkitpointerlockchange",this.lockchange,!1),document.requestPointerLock=document.requestPointerLock||document.msRequestPointerLock||document.mozRequestPointerLock||document.webkitRequestPointerLock}var e,i;return e=t,(i=[{key:"clearInputKey",value:function(){this.inputKey=void 0}},{key:"throttled",value:function(t,e){var i=0;return function(){var n=(new Date).getTime();if(!(n-i<t))return i=n,e.apply(void 0,arguments)}}},{key:"keydown",value:function(t){t.which===this.menukey&&(this.hotkeys.hide=!this.hotkeys.hide),18===t.which&&(this.hotkeys.move=!0)}},{key:"keyup",value:function(t){18===t.which?this.hotkeys.move=!1:this.inputKey=t.key}},{key:"lockchange",value:function(){document.pointerLockElement instanceof HTMLCanvasElement||document.msPointerLockElement instanceof HTMLCanvasElement||document.mozPointerLockElement instanceof HTMLCanvasElement||document.webkitPointerLockElement instanceof HTMLCanvasElement?(this.isMouseLocked=!0,this.lastOverride=this.allowOverride):(this.isMouseLocked=!1,this.hotkeys.move=!1,this.stop=!1,void 0!==this.lastOverride&&(this.allowOverride=this.lastOverride))}},{key:"contains",value:function(t,e,i,n){return this.guiX<=t&&t<=this.guiX+i&&this.guiY<=e&&e<=this.guiY+n}},{key:"clamp",value:function(t,e,i){return t>i?i:t<e?e:t}},{key:"draw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t&&!this.ctx&&(this.ctx=t),(this.isMouseLocked||e)&&this.ctx&&this.ctx.drawImage(this.pointer,this.position.x-4,this.position.y-2)}},{key:"mousemove",value:function(t){this.ctx&&this.hotkeys.hide&&(this.isMouseLocked&&(this.position.x+=t.movementX,this.position.y+=t.movementY,this.position.x=this.clamp(this.position.x,0,this.ctx.canvas.width-2),this.position.y=this.clamp(this.position.y,0,this.ctx.canvas.height-2)),this.actions.clicked=1===t.which&&!this.actions.isDown,this.actions.isDown=1===t.which)}},{key:"mousedown",value:function(t){this.hotkeys.hide&&(this.actions.clicked=!this.actions.isDown,this.actions.isDown=!0,this.stop&&(t.preventDefault(),t.stopPropagation()))}},{key:"mouseup",value:function(t){this.hotkeys.hide&&(this.actions.isDown=!1,this.actions.clicked=!1,this.stop&&(t.preventDefault(),t.stopPropagation()))}}])&&Yt(e.prototype,i),t}();Ut.default=Ft;var Nt={};Object.defineProperty(Nt,"__esModule",{value:!0}),Nt.default=void 0;var Gt=Jt(n),Vt=Jt(t);function Jt(t){return t&&t.__esModule?t:{default:t}}function Kt(t){return(Kt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function zt(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Xt(t){return(Xt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Qt(t,e){return(Qt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var qt=function(t){function e(t,i,n,o,s,r){var h,l,a;return function(t,i){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),(l=this,a=Xt(e).call(this),h=!a||"object"!==Kt(a)&&"function"!=typeof a?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(l):a).styles=t,h.x=n,h.y=o,h.leftPadding=s+4,h.topPadding=4,h.width=45,h.height=20,h.cb=r,h.itemText=new Vt.default(t,i,t.item.fontSize,t.fontFamily,t.button.color,n+h.width/2,o+h.height+5,!0),h.children=[h.itemText],h}var i,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Qt(t,e)}(e,Gt.default),i=e,(n=[{key:"update",value:function(t,e,i,n){var o=!this.clicked;this.updateStats(t,e,i,n,!1,!0),this.clicked&&o&&this.cb()}},{key:"updatePos",value:function(){var t=this;this.children.forEach(function(e){e.x=t.x+t.width/2,e.y=t.y+t.height+5})}},{key:"draw",value:function(t){t.fillStyle=this.styles.item.background,t.fillRect(this.x,this.y,this.width,this.height),t.strokeStyle=this.styles.button.lineTop,t.beginPath(),t.moveTo(this.x,this.y),t.lineTo(this.x+this.width,this.y),t.stroke()}}])&&zt(i.prototype,n),e}();Nt.default=qt;var Zt={};Object.defineProperty(Zt,"__esModule",{value:!0}),Zt.default=void 0;var $t=ne(n),te=ne(Y),ee=ne(Nt),ie=ne(rt);function ne(t){return t&&t.__esModule?t:{default:t}}function oe(t){return(oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function se(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function re(t){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function he(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function le(t,e){return(le=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var ae=function(t){function e(t,i,n,o,s,r,h){var l,a;return function(t,i){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this),this,a=re(e).call(this),(l=!a||"object"!==oe(a)&&"function"!=typeof a?he(this):a).x=o,l.y=s,l.object=i,l.width=t.gui.width,l.height=t.itemHeight,l.styles=t,l.getSavedData=r,l.changePreset=h,l.prefix=n+"-myGuiMenu",l.loaded=l.getSavedProfiles()||!1,l.profiles=l.loaded||{currentProfile:"Default",profileNames:[],values:[],position:{x:o,y:s}},l.currentProfile=l.profiles.currentProfile||"Default",l.profileNames=l.profiles.profileNames||[],l.currentValues=l.profiles.values.find(function(t){return t.profile===l.currentProfile})||void 0,l.profileSelect=new te.default(t,o+4,s,{currentProfile:l.currentProfile},"currentProfile",l.profileNames,function(){}),l.currentValues&&(console.log(l.object),l.object=Object.assign(l.object,l.currentValues.values)),l.handleSave=l.handleSave.bind(he(l)),l.handleDelete=l.handleDelete.bind(he(l)),l.handleNew=l.handleNew.bind(he(l)),l.changeProfile=l.changeProfile.bind(he(l)),l.saveButton=new ee.default(t,"Save",o+l.profileSelect.width+8,l.y+4,l.profileSelect.width,l.handleSave),l.deleteButton=new ee.default(t,"Delete",o+l.profileSelect.width+l.saveButton.width+16,l.y+4,l.profileSelect.width+l.saveButton.width+8,l.handleDelete),l.newButton=new ee.default(t,"New",o+l.profileSelect.width+2*l.saveButton.width+24,l.y+4,l.profileSelect.width+2*l.saveButton.width+16,l.handleNew),l.children=[l.profileSelect,l.saveButton,l.deleteButton,l.newButton],l.userInput={input:""},l.profileSelect.__onChange=function(t){l.changeProfile(t)},l}var i,n;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&le(t,e)}(e,$t.default),i=e,(n=[{key:"handleSave",value:function(){this.saveProfile(this.profiles.currentProfile,this.getSavedData())}},{key:"handleDelete",value:function(){var t=this;"Default"!==this.profiles.currentProfile&&(this.profileSelect.delVal(this.profiles.currentProfile),this.profiles={profileNames:this.profiles.profileNames.filter(function(e){return e!==t.profiles.currentProfile}),values:this.profiles.values.filter(function(e){return e.profile!==t.profiles.currentProfile}),currentProfile:"Default"},this.profileNames=this.profiles.profileNames,this.profileSelect.updateInfo(this.profiles.currentProfile),this.changePreset(),localStorage.setItem(this.prefix,JSON.stringify(this.profiles)))}},{key:"update",value:function(){this.input&&(this.input.visible||(this.saveProfile(this.userInput.input,this.getSavedData()),this.profiles.currentProfile=this.userInput.input,this.profileSelect.vals=this.profileNames,this.profileSelect.dropDown.buildList(),this.profileSelect.updateInfo(this.userInput.input),this.children=this.oldChildren,this.input=void 0))}},{key:"handleNew",value:function(){var t=this;this.oldChildren=this.children,this.userInput.input="",this.input=new ie.default(this.styles,this.x,this.y+3,this.userInput,"input","Input",function(){return t.active=t.input}),this.input.visible=!0,this.children=[this.input]}},{key:"getSavedProfiles",value:function(){try{return JSON.parse(localStorage.getItem(this.prefix))}catch(t){return!1}}},{key:"saveProfile",value:function(t,e){this.loaded=!0;var i=!!this.profiles.values&&this.profiles.values.find(function(e){return e.profile===t});i?(i.values=e,this.profiles.currentProfile=t,this.currentValues=i,localStorage.setItem(this.prefix,JSON.stringify(this.profiles)),this.profiles=this.getSavedProfiles(),this.changePreset()):(Array.isArray(this.profiles.values)?this.profiles.values.push({profile:t,values:e}):this.profiles.values=[{profile:t,values:e}],this.profiles.currentProfile=t,this.profiles.profileNames.push(t),localStorage.setItem(this.prefix,JSON.stringify(this.profiles)))}},{key:"changeProfile",value:function(t){this.profiles.currentProfile=t,this.currentValues=this.profiles.values.find(function(e){return e.profile===t}),this.changePreset()}},{key:"updatePos",value:function(t,e){this.profiles.position={x:t,y:e},this.x=t,this.y=e,this.children.forEach(function(i){i.x=i instanceof te.default?t+4:t+4+i.leftPadding,i.y=e+i.topPadding,i.updatePos&&i.updatePos()})}},{key:"updateData",value:function(t){this.profiles.saveProfile(t)}},{key:"draw",value:function(t){t&&(t.fillStyle=this.styles.profiles.background,t.strokeStyle=this.styles.profiles.borderBottom,t.fillRect(this.x,this.y,this.width,this.height),t.beginPath(),t.moveTo(this.x,this.y+this.height),t.lineTo(this.x+this.width,this.y+this.height),t.stroke())}}])&&se(i.prototype,n),e}();Zt.default=ae;var ue=ye(Tt),ce=ye(vt),fe=ye(Ut),de=ye(Zt);function ye(t){return t&&t.__esModule?t:{default:t}}function pe(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return ye(Y),function(){function t(e,i,n,o,s,r){var h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1;!function(e,i){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this),this.version=h,this.ctx=e,this.x=i,this.y=n,this.width=o,this.height=s,this.styles=r,this.fixFolders=!1,this.inputManager=new fe.default(e,this.x,this.y,o),this.getSaveData=this.getSaveData.bind(this),this.changePreset=this.changePreset.bind(this),this.updateFolders=this.updateFolders.bind(this),this.folders=[],this.children=[],this.lastChange=(new Date).getTime(),this.canChange=!0,this.visibleUUID={id:!1,lastChange:(new Date).getTime(),set uuid(t){this.id=t},get uuid(){return this.id}},this.hideChild=this.hideChild.bind(this)}var e,i;return e=t,(i=[{key:"remember",value:function(t){this.object=t,this.profileManager=new de.default(this.styles,this.object,this.version,this.x,this.y,this.getSaveData,this.changePreset,this.updateFolders),this.profileManager.loaded&&(this.x=this.profileManager.profiles.position.x,this.y=this.profileManager.profiles.position.y,this.profileManager.x=this.x,this.profileManager.y=this.y,this.inputManager.guiX=this.x,this.inputManager.guiY=this.y)}},{key:"throttled",value:function(t,e){var i=0;return function(){var n=(new Date).getTime();if(!(n-i<t))return i=n,e.apply(void 0,arguments)}}},{key:"hideChild",value:function(t){var e=this;this.visibleUUID.uuid&&t!==this.visibleUUID.uuid&&this.activeChild.hideAll&&(this.canChange=!1,this.activeChild.hideAll&&this.activeChild.hideAll(),this.inputManager.actions.isDown=!1,this.inputManager.actions.clicked=!1,setTimeout(function(){return e.canChange=!0},100))}},{key:"update",value:function(){var t=this,e=this.inputManager.position,i=e.x,n=e.y,o=this.inputManager.actions,s=o.clicked,r=o.isDown;this.inputManager.hotkeys.move&&(this.x=i,this.y=n,this.inputManager.guiX=this.x,this.inputManager.guiY=this.y,this.profileManager&&this.profileManager.updatePos(this.x,this.y),this.updateFolders()),function e(o){o.forEach(function(o){o.update&&(o.update(i,n,s,r,t.visibleUUID.uuid,t.canChange,t.hideChild,t.inputManager.inputKey,function(e){return t.canChange=e}),o.handleKeys&&t.inputManager.inputKey&&t.inputManager.clearInputKey()),o.children&&e(o.children)})}(this.children)}},{key:"getSaveData",value:function(){return this.object}},{key:"flattenChildren",value:function(){var t=this,e=this.profileManager?[this.profileManager.profileSelect,this.profileManager]:[];!function i(n){n.forEach(function(n){n.draw&&(n instanceof ce.default&&n.active.visible&&(e.push(n),t.visibleUUID.uuid===n.active.uuid&&e.push(n.active),t.visibleUUID.uuid!==n.active.uuid&&t.canChange&&(t.activeChild=n.active,t.lastChange=(new Date).getTime(),t.visibleUUID.uuid=n.active.uuid)),e.push(n)),n instanceof ce.default||n.children&&i(n.children)})}(this.folders),this.children=e.sort(function(t,e){return t.visible===e.visible?0:t.visible?1:-1})}},{key:"changePreset",value:function(){var t=this;if(!(arguments.length>0&&void 0!==arguments[0])||arguments[0],this.profileManager.loaded){var e=this.profileManager.currentValues;this.object=Object.assign(this.object,e.values),function e(i){i.forEach(function(i){i.obj&&(i.obj=t.object),i.getDefaultSelected&&i.getDefaultSelected(i.obj[i.val]),i.children&&e(i.children)})}(this.folders)}else this.profileManager.saveProfile("Default",this.getSaveData());this.updateFolders()}},{key:"draw",value:function(t,e){var i=this;if((this.ctx||(t&&(t instanceof CanvasRenderingContext2D&&(this.ctx=t),t instanceof HTMLCanvasElement&&(this.ctx=t.getContext("2d"))),this.ctx))&&(e&&this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.fixFolders||(this.fixFolders=!0,this.profileManager&&this.changePreset(),this.updateFolders()),this.inputManager.hotkeys.hide)){this.flattenChildren();var n=0;!function t(e){e.forEach(function(e){e.draw&&((e instanceof ce.default||e instanceof ue.default)&&e.height&&(n+=e.height),e.uuid!==i.visibleUUID.uuid||e.visible||(i.visibleUUID.uuid=!1),i.visibleUUID.uuid||i.canChange||(e.clicked=!1),e.draw(i.ctx)),e instanceof ue.default||e.children&&t(e.children)})}(this.children),this.inputManager.guiHeight=this.profileManager?this.profileManager.height+n:n,this.inputManager.draw(this.ctx),this.update()}}},{key:"updateFolders",value:function(){var t=this;this.folders.map(function(e,i){var n=t.folders[i-1];e.updatePos(t.x,n?t.folders[i-1].y:t.y+(t.profileManager?t.profileManager.height:0),n?t.folders[i-1].itemCount:0)}),this.profileManager&&this.profileManager.updatePos(this.x,this.y),this.activeChild&&this.activeChild.hideAll(),this.flattenChildren()}},{key:"addFolder",value:function(t){var e=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=new ue.default(this.styles,t,this.x,this.y,this.width,this.styles.itemHeight,function(){return e.updateFolders()},this.object);return i||(n.open=!1),this.folders.push(n),n}}])&&pe(e.prototype,i),t}()});
(function () {
    const options = {
        aimbot: true,
        silentAim: false,
        boxEsp: true,
        boxColor: "#FF3232",
        weaponEsp: true,
        healthEsp: true,
        nameEsp: true,
        chams: true,
        autoReload: true,
        autoJump: true,
        orgNameTags: false,
    };
    window.options = options;
    const styles = {
        fontFamily: "Roboto",
        gui: {
            x: 0,
            y: 0,
            width: 250
        },
        itemHeight: 28,
        profiles: {
            background: "#090F22",
            borderBottom: "#4c698d"
        },
        folder: {
            header: {
                color: "#4c698d",
                fontSize: "15.4px",
                background: "#0B132B"
            }
        },
        item: {
            color: "#839cbc",
            fontSize: "13.2px",
            background: "#1C2541"
        },
        button: {
            background: "#1C2541",
            lineTop: "#5BC0BE",
            color: "#4c698d"
        },
        checkbox: {
            background: "#242f53",
            checkedBg: "#5BC0BE",
            hovered: "rgba(91,192,190,0.3)"
        },
        input: {
            background: "#242f53",
            color: "#4c698d",
            cursor: "#839cbc"
        },
        select: {
            background: "#242f53",
            color: "#4c698d",
            hovered: "#3A506B"
        },
        option: {
            background: "#242f53",
            color: "#4c698d",
            hovered: "#3A506B",
            hoveredColor: "white",
            outline: "#0B132B"
        },
        slider: {
            background: "#242f53",
            color: "#5BC0BE",
            slider: "#5BC0BE",
            hovered: "#3A506B"
        }
    };
    let lastValues = {}
    var hideHook = function (fn, oFn) {
        fn.toString = oFn.toString.bind(oFn);
    }
    const menu = new MyGUI(false, 0, 0, 250, 250, styles)
    menu.remember(window.options)
    window.menu = menu;
    const poweredWheelAimbot = menu.addFolder("Aimbot", true)
    const poweredWheelVisuals = menu.addFolder("Visuals", true)
    poweredWheelAimbot.add("Aimbot", window.options, "aimbot", "Check")
    poweredWheelAimbot.add("Silent Aim", window.options, "silentAim", "Check")
    poweredWheelAimbot.add("Auto Reload", window.options, "autoReload", "Check")
    poweredWheelVisuals.add("Game Esp", window.options, "orgNameTags", "Check")
        .onChange((val) =>{
            if (val) {
                window.options.nameEsp = false;
                window.options.boxEsp = false;
                window.options.weaponEsp = false;
                window.options.healthEsp = false;
            }
        })
    poweredWheelVisuals.add("Name Esp", window.options, "nameEsp", "Check")
    poweredWheelVisuals.add("Box Esp", window.options, "boxEsp", "Check")
    poweredWheelVisuals.add("Weapon Esp", window.options, "weaponEsp", "Check")
    poweredWheelVisuals.add("Health Esp", window.options, "healthEsp", "Check")
    poweredWheelVisuals.add("Chams", window.options, "chams", "Check")
    poweredWheelVisuals.add("Box Color", window.options, "boxColor", "Color")
    var hrtCheat = function (me, inputs, world, consts, math, overlay) {
        var controls = world.controls;
        const SHOOT = 5,
            SCOPE = 6,
            xDr = 3,
            yDr = 2,
            JUMP = 7,
            CROUCH = 8;
        var isEnemy = function (player) {
            return !me.team || player.team != me.team
        };
        var canHit = function (player) {
            return null == world.canHit(me, player.x3, player.y3 - player.crouchVal * consts.crouchDst, player.z3)
        };
        var normaliseYaw = function (yaw) {
            return (yaw % Math.PI2 + Math.PI2) % Math.PI2;
        };
        var dAngleTo = function (x, y, z) {
            var ty = normaliseYaw(math.getDirection(controls.object.position.z, controls.object.position.x, z, x));
            var tx = math.getXDir(controls.object.position.x, controls.object.position.y, controls.object.position.z, x, y, z);
            var oy = normaliseYaw(controls.object.rotation.y);
            var ox = controls.pitchObject.rotation.x;
            var dYaw = Math.min(Math.abs(ty - oy), Math.abs(ty - oy - Math.PI2), Math.abs(ty - oy + Math.PI2));
            var dPitch = tx - ox;
            return Math.hypot(dYaw, dPitch);
        };
        var calcAngleTo = function (player) {
            return dAngleTo(e.x3, e.y3 + consts.playerHeight - (consts.headScale + consts.hitBoxPad) / 2 - e.crouchVal * consts.crouchDst, e.z3);
        };
        var calcDistanceTo = function (player) {
            return math.getDistance3D(player.x3, player.y3, player.z3, me.x, me.y, me.z)
        };
        var isCloseEnough = function (player) {
            var distance = calcDistanceTo(player);
            return me.weapon.range >= distance && ("Shotgun" != me.weapon.name || distance < 70) && ("Akimbo Uzi" != me.weapon.name || distance < 100);
        };
        var haveAmmo = function () {
            return me.ammos[me.weaponIndex];
        };
        // runs once
        if (!window.init) {
            window.init = true;
            /*************************************/
            /* crimpeek / faster bullets removed */
            /*************************************/
            window.drawVisuals = function (c, scalingFactor, perspective) {
                if (!window.ctx) {
                    window.ctx = c.getContext("2d")
                }
                c = window.ctx;
                var scaledWidth = c.canvas.width / scalingFactor;
                var scaledHeight = c.canvas.height / scalingFactor;
                var worldPosition = perspective.camera.getWorldPosition();
                for (var i = 0; i < world.players.list.length; i++) {
                    var player = world.players.list[i];
                    var e = players[i];
                    if (e.isYou || !e.active || !e.objInstances || !isEnemy(e)) {
                        continue;
                    }
                    // find min x, max x, min y, max y
                    // optimisation: we can already tell what ymin ymax is
                    var xmin = Infinity;
                    var xmax = -Infinity;
                    var ymin = Infinity;
                    var ymax = -Infinity;
                    var br = false;
                    for (var j = -1; !br && j < 2; j += 2) {
                        for (var k = -1; !br && k < 2; k += 2) {
                            for (var l = 0; !br && l < 2; l++) {
                                var position = e.objInstances.position.clone();
                                position.x += j * consts.playerScale;
                                position.z += k * consts.playerScale;
                                position.y += l * (consts.playerHeight - e.crouchVal * consts.crouchDst);
                                if (!perspective.frustum.containsPoint(position)) {
                                    br = true;
                                    break;
                                }
                                position.project(perspective.camera);
                                xmin = Math.min(xmin, position.x);
                                xmax = Math.max(xmax, position.x);
                                ymin = Math.min(ymin, position.y);
                                ymax = Math.max(ymax, position.y);
                            }
                        }
                    }

                    if (br) {
                        continue;
                    }

                    xmin = (xmin + 1) / 2;
                    ymin = (ymin + 1) / 2;
                    xmax = (xmax + 1) / 2;
                    ymax = (ymax + 1) / 2;


                    c.save();
                    c.scale(scalingFactor, scalingFactor)
                    // perfect box esp


                    var distanceScale = Math.max(.3, 1 - math.getDistance3D(worldPosition.x, worldPosition.y, worldPosition.z, e.x, e.y, e.z) / 600);
                    c.scale(distanceScale, distanceScale);
                    var xScale = scaledWidth / distanceScale;
                    var yScale = scaledHeight / distanceScale;
                    ymin = yScale * (1 - ymin);
                    ymax = yScale * (1 - ymax);
                    xmin = xScale * xmin;
                    xmax = xScale * xmax;
                    if (window.options.boxEsp) {
                        c.lineWidth = 5;
                        c.strokeStyle = window.options.boxColor;
                        c.beginPath();
                        c.moveTo(xmin, ymin);
                        c.lineTo(xmin, ymax);
                        c.lineTo(xmax, ymax);
                        c.lineTo(xmax, ymin);
                        c.lineTo(xmin, ymin);
                        c.stroke();
                    }
                    // health bar
                    if (window.options.healthEsp) {
                        c.fillStyle = "rgba(255,50,50,1)";
                        var barMaxHeight = ymax - ymin;
                        c.fillRect(xmin - 7, ymin, -10, barMaxHeight);
                        c.fillStyle = "#00FFFF";
                        c.fillRect(xmin - 7, ymin, -10, barMaxHeight * (e.health / e.maxHealth));
                    }
                    // info
                    var x = xmax + 7;
                    var y = ymax;
                    c.fillStyle = "white";
                    c.strokeStyle = 'black';
                    c.lineWidth = 1;
                    if (window.options.nameEsp) {
                        c.font = "60px Roboto";
                        c.fillText(e.name, x, y);
                        c.strokeText(e.name, x, y);
                    }
                    c.font = "30px Sans-serif";
                    if (window.options.weaponEsp) {
                        y += 35;
                        c.fillText(e.weapon.name, x, y);
                        c.strokeText(e.weapon.name, x, y);
                    }
                    if (window.options.healthEsp) {
                        y += 35;
                        c.fillText(e.health + ' HP', x, y);
                        c.strokeText(e.health + ' HP', x, y);
                    }
                    c.restore();

                    // skelly chams
                    // note: this should probably be else where - it affects all players
                    var material = e.legMeshes[0].material;
                    if (window.options.chams && !material.chams) {
                        material.alphaTest = 1;
                        material.depthTest = false;
                        material.fog = false;
                        material.emissive.r = 1;
                        material.emissive.g = 1;
                        material.emissive.b = 1;
                        material.wireframe = true;
                        material.chams = true;
                    } else if (!window.options.chams && material.chams) {
                        material.alphaTest = 0;
                        material.depthTest = true;
                        material.fog = true;
                        material.emissive.r = 0;
                        material.emissive.g = 0;
                        material.emissive.b = 0;
                        material.wireframe = false;
                    }
                }
            }
        }

       // auto reload
        if (window.options.autoReload) controls.keys[controls.reloadKey] = !haveAmmo();
        // auto jump
        if (window.options.autoJump) inputs[JUMP] = (controls.keys[controls.jumpKey] && !me.didJump) * 1;
        // target selector - based on closest to aim
        var closest = null,
            closestAngle = Infinity;
        var players = world.players.list;


        if(!window.options.aimbot) return;
        for (var i = 0; me.active && i < players.length; i++) {
            var e = players[i];
            if (e.isYou || !e.active || !e.objInstances || !isEnemy(e)) {
                continue;
            }

            // experimental prediction
            // just use normal xyz values instead for potentially better aim :shrug:
            var scale = Math.min(1.6, e.dt / (consts.serverSendRate * consts.interpolation));
            // this check is so that we don't shoot people that just respawn
            if (math.getDistance3D(e.x2, e.y2, e.z2, e.x, e.y, e.z) < 100) {
                e.x3 = e.x + (e.x2 - e.x) * scale;
                e.y3 = e.y + (e.y2 - e.y) * scale;
                e.z3 = e.z + (e.z2 - e.z) * scale;
            } else {
                e.x3 = e.x;
                e.y3 = e.y;
                e.z3 = e.z;
            }

            if (!isCloseEnough(e) || !canHit(e)) {
                continue;
            }

            var angle = calcAngleTo(e);
            if (angle < closestAngle) {
                closestAngle = angle;
                closest = e;
            }
        }

        // aimbot
        // hrt's big brain got a six pack
        var ty = controls.object.rotation.y,
            tx = controls.pitchObject.rotation.x;
        if (closest) {
            var target = closest;
            // No idea why public cheats are using target distance in aimbot calc
            // No idea why it's so difficult for people to not use magic numbers here
            var y = target.y3 + consts.playerHeight - (consts.headScale /* + consts.hitBoxPad*/ ) / 2 - target.crouchVal * consts.crouchDst;
            if (me.weapon.nAuto && me.didShoot) {
                inputs[SHOOT] = 0;
            } else if (!me.aimVal) { // me.recoilAnimY < 0.1 - if you want to shoot more slower and perhaps more accurately
                // inputs[CROUCH] = 1; // auto crouch
                inputs[SHOOT] = 1;
                inputs[SCOPE] = 1;
            } else {
                // inputs[CROUCH] = 1; // auto crouch
                inputs[SCOPE] = 1;
            }

            ty = math.getDirection(controls.object.position.z, controls.object.position.x, target.z3, target.x3);
            tx = math.getXDir(controls.object.position.x, controls.object.position.y, controls.object.position.z, target.x3, y, target.z3);

            // perfect recoil control..?
            tx -= .3 * me.recoilAnimY;
        } else {
            inputs[SHOOT] = controls.mouseDownL;
            inputs[SCOPE] = controls.mouseDownR;
            // inputs[CROUCH] = controls.keys[controls.crouchKey] * 1; // auto crouch
        }

        // silent aim
        const newY = (ty % Math.PI2).round(3);
        const newX = (tx % Math.PI2).round(3);
        inputs[xDr] = newX;
        inputs[yDr] = newY;
        if (!window.options.silentAim) {
            controls.object.rotation.y = newY
            controls.pitchObject.rotation.x = newX
        }

    }

    // only big iq people read this ttap#4547
    // big up my boy hrt and ttap for releasing
    const handler = {
        construct(target, args) {
            if (args.length == 2 && args[1].includes('Seen')) {
                var script = args[1];

                var hook = /(\w+)\['tmpInputs'\]\['push'\]\((\w+)\),/;
                var tokens = script.match(hook);
                var inputs = tokens[2];
                var world = script.match(/(\w+)\['players'\]\['updateMesh'\]/)[1];
                var consts = script.match(/(\w+)\['thirdPX'\],/)[1];
                var me = script.match(/\((\w+)\|\|window\['spectating'\]\)/)[1];
                var math = script.match(/\['xDr'\]\+(\w+)\['getDirection'\]/)[1];

                var ttapParams = [me, inputs, world, consts, math];

                //Remove clear rect inside overlay render.
                script = script.replace(/,\w+\['clearRect'\]\(0x0,0x0,\w+,\w+\)/, "");

                //Hook overlay render and force menu to clear frame
                script = script.replace(/(\w+)\[\'render\'\]\((\w+),\w+,(\w+),\w+,\w+\),/, (a, b, c, d) => `window.menu.draw(${b}.canvas,true),(window.drawVisuals && window.drawVisuals(${b}.canvas,${c},${d})),${a} `);

                // Doesn't make sense to hook aimbot anywhere else - unlike every other public cheat
                script = script.replace(hook, tokens[0] + '(' + hrtCheat.toString() + ')(' + ttapParams + '),');

                // remove renders
                script = script.replace(/'none'==menuHolder\['style'\]\['display'\]&&'none'==endUI\['style'\]\['display'\]\)/g, '!window.options.boxEsp && !window.options.weaponEsp && !window.options.healthEsp && !window.options.healthEsp)');

                // all weapons trails on
                script = script.replace(/\w+\['weapon'\]&&\w+\['weapon'\]\['trail'\]/g, "true")

                // color blind mode
                script = script.replace(/#9eeb56/g, '#00FFFF');

                // no zoom
                script = script.replace(/,'zoom':.+?(?=,)/g, ",'zoom':1");

                // an extremely old canHit / autowall function creator that doesn't alter canSee
                // dumb asf but if it still works then should I touch it :thinking:
                var canSee = script.match(/this\['canSee'\]\=function.+?(?=return null;})/)[0] + "return null;}";
                var canHit = canSee.replace(/canSee/g, "canHit");
                canHit = canHit.replace(/\|\|0x0;/, "||0x0;var pcount=0;");
                var player = canHit.match(/function\(([a-zA-Z0-9]*),/)[1];
                var object = canHit.match(/([a-zA-Z0-9]*)\=this\['map'\]\['manager'\]\['objects'/)[1];
                var statement = canHit.match(/\['transparent'\]\){(.+?(?=}))/)[1];
                var ret = statement.match(/return [a-zA-Z0-9]*/)[0];
                statement = statement.replace(ret, "{pcount+=1; if(pcount>1&&" + player + ".weapon.pierce>0.8){" + ret + "}}");
                var search = canHit.match(/return [a-zA-Z0-9]*;\}/)[0];
                canHit = canHit.replace(search, search + 'else if(' + object + '.active&&' + object + '.penetrable){' + statement + '}')
                search = canHit.match(/\![a-zA-Z0-9]*\['transparent'\]/)[0];
                // todo: onhit logic doesn't make sense
                canHit = canHit.replace(search, "(!" + object + ".penetrable||!" + player + ".weapon.pierce)");
                script = script.replace(",this['canSee']", "," + canHit + ",this['canSee']");

                args[1] = script;
            }
            return new target(...args);
        }
    };
    // credits for bypass: https://github.com/hrt/
    var original_Function = Function;
    Function = new Proxy(Function, handler);
    hideHook(Function, original_Function);
})()