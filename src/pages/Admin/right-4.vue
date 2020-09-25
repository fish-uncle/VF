<template>
  <div>
    <div class="vf-control" v-if="item.changeList.indexOf('events.onChange')!==-1">
      <label>events.onChange(value,e)</label>
      <editor v-model="item.events.onChange"
              @init="editorInit" lang="jsoniq" theme="chrome" height="100"></editor>
    </div>
    <div class="vf-control" v-if="item.changeList.indexOf('events.onHide')!==-1">
      <label>events.onHide()</label>
      <editor v-model="item.events.onHide"
              @init="editorInit" lang="jsoniq" theme="chrome" height="100"></editor>
    </div>
    <div class="vf-control" v-if="item.changeList.indexOf('events.onShow')!==-1">
      <label>events.onShow()</label>
      <editor v-model="item.events.onShow"
              @init="editorInit" lang="jsoniq" theme="chrome" height="100"></editor>
    </div>
    <div class="vf-control" v-if="item.changeList.indexOf('events.onUpdate')!==-1">
      <label>events.onUpdate()</label>
      <editor v-model="item.events.onUpdate"
              @init="editorInit" lang="jsoniq" theme="chrome" height="100"></editor>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['center']),
      item() {
        if (this.center.list[this.center.currentScale][this.center.current]) {
          return this.center.list[this.center.currentScale][this.center.current]
        } else {
          return {changeList: []}
        }
      },
    },
  }
</script>
