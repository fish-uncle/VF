(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{309:function(e,t,r){"use strict";var n=r(8),a=r(311),s=r.n(a);s.a.defaults.baseURL="/",s.a.defaults.timeout=1e4,s.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)}));var i=localStorage.getItem("locale"),o="网络异常，请重试";"en"===i&&(o="Network exception, please try again"),s.a.interceptors.response.use((function(e){var t=e.data;return t?"0000"===t.resultCode?t.data:(n.Message.error(t.returnMessage||o),Promise.reject(!1)):(n.Message.error(o),Promise.reject(!1))}),(function(e){return n.Message.error(o),Promise.reject(!1)})),t.a=s.a},310:function(e,t,r){"use strict";r.r(t);t.default=["demo-en","demo-zh"]},357:function(e,t){e.exports=[{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Birth",key:"birth"},{title:"Sex",key:"sex"}]},358:function(e,t){e.exports=[{title:"姓名",key:"name"},{title:"年纪",key:"age"},{title:"生日",key:"birth"},{title:"性别",key:"sex"}]},451:function(e,t,r){var n={"./":310,"./demo-en":357,"./demo-en.js":357,"./demo-zh":358,"./demo-zh.js":358,"./index":310,"./index.js":310};function a(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id=451},53:function(e,t,r){"use strict";r.r(t);var n=r(309),a={data:function(){return{currentVal:this.value,data:[],total:0,page:1}},props:["value"],computed:{columns:function(){return this.currentVal.columns?r(451)("./".concat(this.currentVal.columns)):[]}},watch:{value:function(e){this.currentVal=e}},mounted:function(){this.init()},methods:{init:function(){var e=this;this.currentVal.tableAjaxUrl&&n.a.post(this.currentVal.tableAjaxUrl).then((function(t){t&&(e.data=t.list,e.total=t.total)}))}}},s=r(1),i=Object(s.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"vf-table",class:[this.currentVal.className],style:{width:this.currentVal.widthRatio+"%"}},[t("Table",{attrs:{columns:this.columns,data:this.data}})],1)}),[],!1,null,null,null);t.default=i.exports}}]);