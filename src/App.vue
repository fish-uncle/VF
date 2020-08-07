<template>
  <div id="app">
    <top/>
    <Spin size="large" fix class="z-index-999" v-if="model.loading"></Spin>
    <router-view/>
    <modelBuy/>
    <modelPlease/>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import ModelBuy from './components/ModelBuy'
  import ModelPlease from './components/ModelPlease'
  import Top from './components/Top';
  export default {
    components: {
      ModelBuy,ModelPlease,Top
    },
    computed: {
      ...mapState(["model"]),
    },
  }
</script>
<style lang="less">
  @import "./less/reset.less";
  @import "./less/index.less";
  body {
    min-width: 1170px;
  }
</style>
