(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{307:function(e,t,r){"use strict";var n=r(8),a=r(309),s=r.n(a);s.a.defaults.baseURL="/",s.a.defaults.timeout=1e4,s.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)}));var i=localStorage.getItem("locale"),o="网络异常，请重试";"en"===i&&(o="Network exception, please try again"),s.a.interceptors.response.use((function(e){var t=e.data;return t?"0000"===t.resultCode?t.data:(n.Message.error(t.returnMessage||o),Promise.reject(!1)):(n.Message.error(o),Promise.reject(!1))}),(function(e){return n.Message.error(o),Promise.reject(!1)})),t.a=s.a},308:function(e,t,r){"use strict";r.r(t);t.default=["demo-en","demo-zh"]},346:function(e,t){e.exports=[{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Birth",key:"birth"},{title:"Sex",key:"sex"}]},347:function(e,t){e.exports=[{title:"姓名",key:"name"},{title:"年纪",key:"age"},{title:"生日",key:"birth"},{title:"性别",key:"sex"}]},429:function(e,t,r){var n={"./":308,"./demo-en":346,"./demo-en.js":346,"./demo-zh":347,"./demo-zh.js":347,"./index":308,"./index.js":308};function a(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id=429},53:function(e,t,r){"use strict";r.r(t);var n=r(307),a={data:function(){return{currentVal:this.value,data:[],total:0,page:1}},props:["value"],computed:{columns:function(){return this.currentVal.dragItem.columns?r(429)("./".concat(this.currentVal.dragItem.columns)):[]}},watch:{value:function(e){this.currentVal=e}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.currentVal.dragItem.tableAjaxUrl&&n.a.post(this.currentVal.dragItem.tableAjaxUrl).then((function(t){t&&(e.data=t.list,e.total=t.total)}))}}},s=r(1),i=Object(s.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"f-table",class:[this.currentVal.dragItem.className],style:{width:this.currentVal.dragItem.widthRatio+"%"}},[t("Table",{attrs:{columns:this.columns,data:this.data}})],1)}),[],!1,null,null,null);t.default=i.exports}}]);