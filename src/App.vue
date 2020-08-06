<template>
  <div id="app">
    <Spin size="large" fix class="z-index-999" v-if="model.loading"></Spin>
    <router-view/>
    <modelBuy/>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import ModelBuy from './components/ModelBuy'

  export default {
    components: {
      ModelBuy,
    },
    computed: {
      ...mapState(["model"]),
    },
  }
</script>
<style lang="less">
  @import "./less/reset.less";
  @import "./less/index.less";
</style>
