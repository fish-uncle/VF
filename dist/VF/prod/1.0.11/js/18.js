(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{46:function(e,t,a){"use strict";a.r(t);var r=a(1),n={data:function(){return{currentVal:this.value}},computed:Object(r.b)(["center"]),props:["value"],watch:{value:function(e){this.currentVal=e}},methods:{init:function(){this.center[this.currentVal.dragItem.key]="",this.$store.commit("center/changeData",{value:"",key:this.currentVal.dragItem.key})},dateChange:function(e){this.$store.commit("center/changeDateRange",{value:e,key:this.currentVal.dragItem.key})}}},c=a(2),l=Object(c.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("Time-picker",{staticClass:"f-date-range",class:[e.currentVal.dragItem.className],attrs:{type:"timerange",clearable:e.currentVal.dragItem.clearable,placeholder:e.currentVal.dragItem.placeholder,format:e.currentVal.dragItem.format,disabled:e.currentVal.dragItem.disabled},on:{"on-change":e.dateChange},model:{value:e.center[e.currentVal.dragItem.key],callback:function(t){e.$set(e.center,e.currentVal.dragItem.key,t)},expression:"center[currentVal.dragItem.key]"}})}),[],!1,null,null,null);t.default=l.exports}}]);