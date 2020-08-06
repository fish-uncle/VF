<template>
  <div>
    <top/>
    <div class="fn-clear">
      <div class="fn-fl">
        <func/>
      </div>
      <div class="fn-fr">
        <div class="fish-right">
          <div class="fn-flex flex-row">
            <h2 class="pointer" :class="right.tabIndex===1?'active':''" @click="changeTab(1)">
              表单属性
            </h2>
            <h2 class="pointer" :class="right.tabIndex===2?'active':''" @click="changeTab(2)">
              字段属性
            </h2>
          </div>
          <right-1 v-if="right.tabIndex===1"/>
          <right-2 v-if="right.tabIndex===2"/>
        </div>
      </div>
      <center/>
      <modelData/>
      <modelPreview/>
      <bottom/>
    </div>
  </div>
</template>
<script>
  import Center from './center'
  import Bottom from './bottom'
  import Func from './func'
  import Top from '../../components/Top'
  import Right1 from './right-1'
  import Right2 from './right-2'
  import ModelData from '../../components/ModelData'
  import ModelPreview from '../../components/ModelPreview'

  import {mapState} from 'vuex';

  export default {
    computed: mapState(["right"]),
    components: {
      Center,
      Bottom,
      ModelData,
      ModelPreview,
      Func,
      Right1,
      Right2,
      Top
    },
    methods: {
      changeTab(tabIndex) {
        this.$store.commit('right/changeTab', {tabIndex})
      },
    }
  }
</script>
<style lang="less">
  body {
    min-width: 1170px;
  }
</style>
