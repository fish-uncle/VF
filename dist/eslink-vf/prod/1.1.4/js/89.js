(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{677:function(e,t,n){"use strict";n.r(t);var l={data:function(){var e=this.$t("model_preview_reset");return{html:'<template>\n  <div>\n    <v-list ref="form" :language="language" :view-scale="viewScale" :list="list" :group="group"\n    :labelWidth="labelWidth" :labelTextAlign="labelTextAlign">\n    </v-list>\n    <div class="text-center">\n      <Button type="primary" @click="handleReset">'.concat(e).concat("<",'/Button>\n    </div>\n  </div>\n</template>\n<script>\n  export default {\n    data () {\n      return {\n        list: [[{"width":12,"widthRatio":100,"disabled":false,"className":"","props":{},"required":false,"rules":"{\'pattern\': \'\',\'message\': \'该项格式不正确\'}","events":{"onChange":"","onHide":"","onShow":"","onUpdate":""},"title":"单行文本","id":"input","key":"input","type":"input","placeholder":""}],[]],\n        viewScale: \'12:12\',\n        labelWidth: 120,\n        labelTextAlign: \'right\',\n        language: \'zh\',\n        group: []\n      }\n    },\n    methods: {\n      handleReset () {\n        this.$refs.form.reset ()\n      },\n    },\n  }\n').concat("<","/script>\n")}}},a=n(2),i=Object(a.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("reset")]),e._v(" "),n("p",[e._v(e._s(e.$t("reset")))]),e._v(" "),n("pre",[e._v("    "),n("code",{staticClass:"html"},[e._v(e._s(e.html))]),e._v("\n  ")])])}),[],!1,null,null,null);t.default=i.exports}}]);