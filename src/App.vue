<template>
  <div id="app">
    <Spin size="large" fix class="z-index-999" v-if="model.loading"></Spin>
    <router-view/>
  </div>
</template>
<script>
  import {mapState} from 'vuex';

  export default {
    computed: {
      ...mapState(["model"]),
    },
  }
</script>
<style lang="less">
  @import "./less/reset.less";
  @import "./less/index.less";
</style>
