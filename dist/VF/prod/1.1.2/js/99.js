(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{349:function(e,t,n){"use strict";n.r(t);var a=n(363),o=n.n(a),s=n(365),i=n.n(s),m=n(399),r=(n(452),n(2)),c={data:function(){return{currentComponent:null}},components:{Left:m.default},computed:Object(r.b)(["top","help"]),watch:{$route:function(){this.init()}},methods:{init:function(){var e=this;return i()(o.a.mark((function t(){var a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("Feedback"!==(a=(a=e.$route.params.name).replace(/%20/g,""))&&"Friendship sponsorship"!==a&&"First example"!==a){t.next=7;break}e.currentComponent=function(){return n(460)("./".concat(e.help.helpName))},e.$store.commit("help/changeHelp",{helpName:a,helpContent:"",helpType:2}),t.next=11;break;case 7:return t.next=9,n(461)("./".concat(a,"-").concat(e.$i18n.locale,".md"));case 9:s=t.sent,e.$store.commit("help/changeHelp",{helpName:a,helpContent:s,helpType:1});case 11:case"end":return t.stop()}}),t)})))()}},beforeDestroy:function(){this.$agent.$off("languageChange",this.init)},mounted:function(){3!==this.top.topIndex&&this.$store.commit("top/changeTop",{topIndex:3}),this.init(),window.please=function(){this.$store.commit("model/pleaseShow")}.bind(this),this.$agent.$on("languageChange",this.init)}},l=(n(462),n(1)),d=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"fn-clear"},[n("left"),e._v(" "),n("div",{staticClass:"vf-help-content"},[n("div",{staticClass:"markdown-body"},[1===e.help.helpType?n("div",{domProps:{innerHTML:e._s(e.help.helpContent)}}):e._e(),e._v(" "),2===e.help.helpType?n(e.currentComponent,{tag:"component"}):e._e()],1)])],1)])}),[],!1,null,null,null);t.default=d.exports},367:function(e,t,n){var a=n(5),o=n(451);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var s={insert:"head",singleton:!1};a(o,s);e.exports=o.locals||{}},368:function(e,t,n){var a=n(5),o=n(463);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var s={insert:"head",singleton:!1};a(o,s);e.exports=o.locals||{}},399:function(e,t,n){"use strict";n.r(t);var a=n(2),o={computed:Object(a.b)(["help"]),methods:{handleSelect:function(e){var t=decodeURIComponent(location.hash.replace("#","")),n="/help/".concat(e);encodeURIComponent(t.replace(/\s+/g,""))!==encodeURIComponent(n.replace(/\s+/g,""))&&this.$router.push(n)}}},s=(n(450),n(1)),i=Object(s.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Menu",{staticClass:"fn-fl vf-help-left",attrs:{"open-names":["1","2","3","4","5"],"active-name":e.help.helpName},on:{"on-select":e.handleSelect}},[n("Submenu",{attrs:{name:"1"}},[n("template",{slot:"title"},[e._v("\n      "+e._s(e.$t("help_left_1"))+"\n    ")]),e._v(" "),n("MenuItem",{attrs:{name:"Introduce"}},[e._v(e._s(e.$t("help_left_1_1")))]),e._v(" "),n("MenuItem",{attrs:{name:"Catalogue introduction"}},[e._v(e._s(e.$t("help_left_1_2")))]),e._v(" "),n("MenuItem",{attrs:{name:"First example"}},[e._v(e._s(e.$t("help_left_1_3")))])],2),e._v(" "),n("Submenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[e._v("\n      "+e._s(e.$t("help_left_2"))+"\n    ")]),e._v(" "),n("MenuItem",{attrs:{name:"Quick use"}},[e._v(e._s(e.$t("help_left_2_1")))]),e._v(" "),n("MenuItem",{attrs:{name:"Dynamic data"}},[e._v(e._s(e.$t("help_left_2_2")))]),e._v(" "),n("MenuItem",{attrs:{name:"Basic components"}},[e._v(e._s(e.$t("help_left_2_3")))]),e._v(" "),n("MenuItem",{attrs:{name:"Decorating components"}},[e._v(e._s(e.$t("help_left_2_4")))])],2),e._v(" "),n("Submenu",{attrs:{name:"3"}},[n("template",{slot:"title"},[e._v("\n      API\n    ")]),e._v(" "),n("MenuItem",{attrs:{name:"statusEdit"}},[e._v("statusEdit")]),e._v(" "),n("MenuItem",{attrs:{name:"statusRead"}},[e._v("statusRead")]),e._v(" "),n("MenuItem",{attrs:{name:"reset"}},[e._v("reset")]),e._v(" "),n("MenuItem",{attrs:{name:"validate"}},[e._v("validate")]),e._v(" "),n("MenuItem",{attrs:{name:"getData"}},[e._v("getData")]),e._v(" "),n("MenuItem",{attrs:{name:"getDataByGroup"}},[e._v("getDataByGroup")]),e._v(" "),n("MenuItem",{attrs:{name:"changeData"}},[e._v("changeData")]),e._v(" "),n("MenuItem",{attrs:{name:"changeSelectList"}},[e._v("changeSelectList")])],2),e._v(" "),n("Submenu",{attrs:{name:"4"}},[n("template",{slot:"title"},[e._v("\n      "+e._s(e.$t("help_left_3"))+"\n    ")]),e._v(" "),n("MenuItem",{attrs:{name:"Custom components"}},[e._v(e._s(e.$t("help_left_3_1")))]),e._v(" "),n("MenuItem",{attrs:{name:"Internationalization"}},[e._v(e._s(e.$t("help_left_3_2")))])],2),e._v(" "),n("Submenu",{attrs:{name:"5"}},[n("template",{slot:"title"},[e._v("\n      "+e._s(e.$t("help_left_4"))+"\n    ")]),e._v(" "),n("MenuItem",{attrs:{name:"Friendship sponsorship"}},[e._v(e._s(e.$t("help_left_4_1")))]),e._v(" "),n("MenuItem",{attrs:{name:"Feedback"}},[e._v(e._s(e.$t("help_left_4_2")))])],2)],1)}),[],!1,null,null,null);t.default=i.exports},450:function(e,t,n){"use strict";var a=n(367);n.n(a).a},451:function(e,t,n){(t=n(6)(!1)).push([e.i,".vf-help-left{height:calc(100vh - 120px)}",""]),e.exports=t},460:function(e,t,n){var a={"./":[349,9],"./Basic components-en.md":[410,7,57],"./Basic components-zh.md":[411,7,58],"./Catalogue introduction-en.md":[412,7,59],"./Catalogue introduction-zh.md":[413,7,60],"./Custom components-en.md":[414,7,61],"./Custom components-zh.md":[415,7,62],"./Decorating components-en.md":[416,7,63],"./Decorating components-zh.md":[417,7,64],"./Dynamic data-en.md":[418,7,65],"./Dynamic data-zh.md":[419,7,66],"./Feedback":[444,9,93,91],"./Feedback-en.md":[420,7,67],"./Feedback-zh.md":[421,7,68],"./Feedback.vue":[444,9,93,91],"./First example":[445,9,92],"./First example.vue":[445,9,92],"./Friendship sponsorship":[446,9,52],"./Friendship sponsorship.vue":[446,9,52],"./Internationalization-en.md":[422,7,69],"./Internationalization-zh.md":[423,7,70],"./Introduce-en.md":[424,7,71],"./Introduce-zh.md":[425,7,72],"./Quick use-en.md":[426,7,73],"./Quick use-zh.md":[427,7,74],"./changeData-en.md":[428,7,75],"./changeData-zh.md":[429,7,76],"./changeSelectList-en.md":[430,7,77],"./changeSelectList-zh.md":[431,7,78],"./getData-en.md":[432,7,79],"./getData-zh.md":[433,7,80],"./getDataByGroup-en.md":[434,7,81],"./getDataByGroup-zh.md":[435,7,82],"./index":[349,9],"./index.vue":[349,9],"./left":[399,9],"./left.vue":[399,9],"./reset-en.md":[436,7,83],"./reset-zh.md":[437,7,84],"./statusEdit-en.md":[438,7,85],"./statusEdit-zh.md":[439,7,86],"./statusRead-en.md":[440,7,87],"./statusRead-zh.md":[441,7,88],"./validate-en.md":[442,7,89],"./validate-zh.md":[443,7,90]};function o(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(o,t[1])}))}o.keys=function(){return Object.keys(a)},o.id=460,e.exports=o},461:function(e,t,n){var a={"./Basic components-en.md":[410,57],"./Basic components-zh.md":[411,58],"./Catalogue introduction-en.md":[412,59],"./Catalogue introduction-zh.md":[413,60],"./Custom components-en.md":[414,61],"./Custom components-zh.md":[415,62],"./Decorating components-en.md":[416,63],"./Decorating components-zh.md":[417,64],"./Dynamic data-en.md":[418,65],"./Dynamic data-zh.md":[419,66],"./Feedback-en.md":[420,67],"./Feedback-zh.md":[421,68],"./Internationalization-en.md":[422,69],"./Internationalization-zh.md":[423,70],"./Introduce-en.md":[424,71],"./Introduce-zh.md":[425,72],"./Quick use-en.md":[426,73],"./Quick use-zh.md":[427,74],"./changeData-en.md":[428,75],"./changeData-zh.md":[429,76],"./changeSelectList-en.md":[430,77],"./changeSelectList-zh.md":[431,78],"./getData-en.md":[432,79],"./getData-zh.md":[433,80],"./getDataByGroup-en.md":[434,81],"./getDataByGroup-zh.md":[435,82],"./reset-en.md":[436,83],"./reset-zh.md":[437,84],"./statusEdit-en.md":[438,85],"./statusEdit-zh.md":[439,86],"./statusRead-en.md":[440,87],"./statusRead-zh.md":[441,88],"./validate-en.md":[442,89],"./validate-zh.md":[443,90]};function o(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return n.e(t[1]).then((function(){return n.t(o,7)}))}o.keys=function(){return Object.keys(a)},o.id=461,e.exports=o},462:function(e,t,n){"use strict";var a=n(368);n.n(a).a},463:function(e,t,n){(t=n(6)(!1)).push([e.i,".vf-help-content{margin-left:240px;min-height:calc(100vh - 120px);padding:40px 80px;overflow-y:auto}.vf-help-content code{word-break:break-all;white-space:pre-wrap}.markdown-body li,.markdown-body ul{list-style:circle}",""]),e.exports=t}}]);