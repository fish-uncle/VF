(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{583:function(t,e,n){"use strict";var i=n(27),r=n(584);e.a={data:function(){return{parent:Object(i.b)(this,"FormList"),currentVal:this.value,timeout:null,isMounted:!1,e:void 0}},props:["value","error","language","edit","status"],watch:{value:function(t){this.currentVal=t}},mounted:function(){this.isMounted=!0},methods:{update:function(){},debounceOnChange:Object(r.debounce)(1e3,!1,(function(){if(this.currentVal.events){if("string"==typeof this.currentVal.events.onChange)new Function("value","e",this.currentVal.events.onChange)(this.parent.data[this.currentVal.key],this.e);"function"==typeof this.currentVal.events.onChange&&this.currentVal.events.onChange(this.parent.data[this.currentVal.key],this.e)}})),eventsOnChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;this.e=t,this.debounceOnChange.bind(this)()}}}},584:function(t,e,n){!function(t){"use strict";function e(t,e,n,i){var r,a=!1,o=0;function u(){r&&clearTimeout(r)}function s(){for(var s=arguments.length,c=new Array(s),h=0;h<s;h++)c[h]=arguments[h];var l=this,f=Date.now()-o;function v(){o=Date.now(),n.apply(l,c)}function d(){r=void 0}a||(i&&!r&&v(),u(),void 0===i&&f>t?v():!0!==e&&(r=setTimeout(i?d:v,void 0===i?t-f:t)))}return"boolean"!=typeof e&&(i=n,n=e,e=void 0),s.cancel=function(){u(),a=!0},s}t.debounce=function(t,n,i){return void 0===i?e(t,n,!1):e(t,i,!1!==n)},t.throttle=e,Object.defineProperty(t,"__esModule",{value:!0})}(e)},589:function(t,e,n){var i=n(12),r=n(612);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var a={insert:"head",singleton:!1};i(r,a);t.exports=r.locals||{}},611:function(t,e,n){"use strict";var i=n(589);n.n(i).a},612:function(t,e,n){(e=n(13)(!1)).push([t.i,".vf-text{height:32px;line-height:32px;font-size:14px}",""]),t.exports=e},92:function(t,e,n){"use strict";n.r(e);var i={mixins:[n(583).a],computed:{text:function(){var t=this,e=this.currentVal.code.match(/(\$\{[0-9a-zA-Z_]*})/g),n=this.currentVal.code.split(/(\$\{[0-9a-zA-Z_]*})/g);if(!e)return"无";var i=this.parent.data,r="",a=0;return"count"===this.currentVal.showStyle?(e.forEach((function(e){var n=e.replace(/[${}]/g,"");if(n){var r=t.parent.child[n],o=r.key,u=i[o];r&&u&&(a+=Number(u))}})),a):"string"===this.currentVal.showStyle?(n.forEach((function(e){if(/(\$\{[0-9a-zA-Z_]*})/g.test(e)){var n=e.replace(/[${}]/g,"");if(n){var a=t.parent.child[n],o=a.key,u=i[o];a&&u&&(r+=u.toString())}}else r+=e})),r):void 0}}},r=(n(611),n(2)),a=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"vf-text"},[this._v(this._s(this.text))])}),[],!1,null,null,null);e.default=a.exports}}]);