(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d21e5c5"],{d4dc:function(t,e,n){"use strict";n.r(e);n("99af");var l=n("5530"),i=n("2f62"),a={computed:Object(l.a)(Object(l.a)({},Object(i.b)(["component"])),{},{html:function(){var t=this.$t("model_preview_submit"),e=this.$t("model_preview_edit"),n=this.$t("model_preview_read"),l=this.$t("model_preview_reset"),i=JSON.parse(JSON.stringify(this.component.list[0]));delete i.changeList,delete i.version,delete i.icon,delete i.labelWidth,delete i.componentType,delete i.labelTextAlign,delete i.title_en,i.key="input",i.title=i.title_zh,delete i.title_zh,i.id="input";var a=[[i],[]];return'<template>\n  <div>\n    <v-list ref="form" :language="language" :view-scale="viewScale" :list="list" :group="group"\n    :labelWidth="labelWidth" :labelTextAlign="labelTextAlign">\n    </v-list>\n    <div class="text-center">\n      <Button type="primary" @click="handleSubmit">'.concat(t).concat("<",'/Button>\n      <Button type="primary" @click="handleReset">').concat(l).concat("<",'/Button>\n      <Button type="primary" @click="handleEdit">').concat(e).concat("<",'/Button>\n      <Button type="primary" @click="handleRead">').concat(n).concat("<","/Button>\n    </div>\n  </div>\n</template>\n<script>\n  export default {\n    data () {\n      return {\n        list: ").concat(JSON.stringify(a),",\n        viewScale: '").concat("12:12","',\n        labelWidth: ").concat(120,",\n        labelTextAlign: '").concat("right","',\n        language: 'zh',\n        group: ").concat(JSON.stringify([]),"\n      }\n    },\n    methods: {\n      handleSubmit () {\n        if (!this.$refs.form.validate.bind (this) ()) {\n          console.log (this.$refs.form.getData ());\n          console.log (this.$refs.form.getDataByGroup ());\n        }\n      },\n      handleReset(){\n        this.$refs.form.reset ()\n      },\n      handleEdit () {\n        this.$refs.form.statusEdit ()\n      },\n      handleRead () {\n        this.$refs.form.statusRead ()\n      }\n    },\n  }\n").concat("<","/script>")}})},c=n("2877"),o=Object(c.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(t._s(t.$t("help_left_1_3")))]),n("pre",[t._v("    "),n("code",{staticClass:"html"},[t._v(t._s(t.html))]),t._v("\n  ")])])}),[],!1,null,null,null);e.default=o.exports}}]);