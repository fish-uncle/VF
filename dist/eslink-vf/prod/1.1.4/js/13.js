(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{104:function(t,e,i){"use strict";i.r(e);var n={mixins:[i(583).a],data:function(){return{visible:!1,uploadList:[],imgUrl:""}},computed:{fileFormat:function(){return this.currentVal.fileFormat.split(",")}},mounted:function(){this.init()},methods:{init:function(){this.uploadList=this.parent.data[this.currentVal.key]},update:function(){this.parent.changeData({value:[],key:this.currentVal.key})},handleExceededError:function(){this.$Message.error("当前文件大小超出".concat(this.currentVal.maxSize,"kb"))},handleFormatError:function(){this.$Message.error("当前文件格式不符合要求")},handleRemove:function(t){var e=this.$refs.upload.fileList;this.$refs.upload.fileList.splice(e.indexOf(t),1);var i=e.map((function(t){return{url:t.url,name:t.name}}));this.parent.changeData({value:i,key:this.currentVal.key})},handleView:function(t){this.imgUrl=t,this.visible=!0},handleSuccess:function(t,e,i){e.url=t.data,e.name=t.data,this.parent.data[this.currentVal.key].push({url:t.data,name:t.data}),this.error&&this.parent.errorHide(this.currentVal.id),this.eventsOnChange()}}},a=(i(721),i(2)),r=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vf-image",class:[t.currentVal.className,t.currentVal.disabled?"f-image-disabled":"",t.currentVal.className,t.error?"vf-error":""],style:{width:t.currentVal.widthRatio+"%"}},[t._l(t.parent.data[t.currentVal.key],(function(e){return i("div",{staticClass:"vf-image-upload-list"},[i("img",{attrs:{src:e.url}}),t._v(" "),i("div",{staticClass:"vf-image-upload-list-cover"},[i("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(i){return t.handleView(e.url)}}}),t._v(" "),i("Icon",{attrs:{type:"ios-trash-outline"},nativeOn:{click:function(i){return t.handleRemove(e)}}})],1)])})),t._v(" "),i("Upload",t._b({ref:"upload",staticStyle:{display:"inline-block",width:"58px"},attrs:{action:t.currentVal.action,type:"drag","max-size":t.currentVal.maxSize,"show-upload-list":!1,format:t.fileFormat,accept:t.currentVal.fileAccept,multiple:!0,"on-success":t.handleSuccess,"on-format-error":t.handleFormatError,"on-exceeded-size":t.handleExceededError,disabled:t.currentVal.disabled}},"Upload",t.currentVal.props,!1),[i("div",{staticStyle:{width:"58px",height:"58px","line-height":"58px"}},[i("Icon",{attrs:{type:"ios-camera",size:"20"}})],1)]),t._v(" "),i("Modal",{attrs:{title:"View Image"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.visible?i("img",{staticStyle:{width:"100%"},attrs:{src:t.imgUrl}}):t._e()])],2)}),[],!1,null,null,null);e.default=r.exports},583:function(t,e,i){"use strict";var n=i(27),a=i(584);e.a={data:function(){return{parent:Object(n.b)(this,"FormList"),currentVal:this.value,timeout:null,isMounted:!1,e:void 0}},props:["value","error","language","edit","status"],watch:{value:function(t){this.currentVal=t}},mounted:function(){this.isMounted=!0},methods:{update:function(){},debounceOnChange:Object(a.debounce)(1e3,!1,(function(){if(this.currentVal.events){if("string"==typeof this.currentVal.events.onChange)new Function("value","e",this.currentVal.events.onChange)(this.parent.data[this.currentVal.key],this.e);"function"==typeof this.currentVal.events.onChange&&this.currentVal.events.onChange(this.parent.data[this.currentVal.key],this.e)}})),eventsOnChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;this.e=t,this.debounceOnChange.bind(this)()}}}},584:function(t,e,i){!function(t){"use strict";function e(t,e,i,n){var a,r=!1,o=0;function s(){a&&clearTimeout(a)}function l(){for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];var d=this,h=Date.now()-o;function p(){o=Date.now(),i.apply(d,u)}function f(){a=void 0}r||(n&&!a&&p(),s(),void 0===n&&h>t?p():!0!==e&&(a=setTimeout(n?f:p,void 0===n?t-h:t)))}return"boolean"!=typeof e&&(n=i,i=e,e=void 0),l.cancel=function(){s(),r=!0},l}t.debounce=function(t,i,n){return void 0===n?e(t,i,!1):e(t,n,!1!==i)},t.throttle=e,Object.defineProperty(t,"__esModule",{value:!0})}(e)},613:function(t,e,i){var n=i(12),a=i(722);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var r={insert:"head",singleton:!1};n(a,r);t.exports=a.locals||{}},721:function(t,e,i){"use strict";var n=i(613);i.n(n).a},722:function(t,e,i){(e=i(13)(!1)).push([t.i,".vf-image.vf-error .ivu-upload{border-color:#ed4014;outline:0;-webkit-box-shadow:0 0 0 2px rgba(237,64,20,.2);box-shadow:0 0 0 2px rgba(237,64,20,.2)}.vf-image-upload-list{display:inline-block;width:60px;height:60px;text-align:center;line-height:60px;border:1px solid transparent;border-radius:4px;overflow:hidden;background:#fff;position:relative;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.2);box-shadow:0 1px 1px rgba(0,0,0,.2);margin-right:4px}.vf-image-upload-list:hover .vf-image-upload-list-cover{opacity:1}.vf-image-upload-list img{width:100%;height:100%}.vf-image-upload-list-cover{opacity:0;-webkit-transition:all .3s;-o-transition:all .3s;transition:all .3s;position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.6)}.vf-image-upload-list-cover i{color:#fff;font-size:20px;cursor:pointer;margin:0 2px}",""]),t.exports=e}}]);