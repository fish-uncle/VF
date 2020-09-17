<template>
  <div>
    <div class="fn-clear">
      <div class="fn-fl">
        <func/>
      </div>
      <div class="fn-fr">
        <div class="vf-right vf-scrollbar">
          <div class="fn-flex flex-row">
            <h2 class="pointer" :class="right.tabIndex===1?'active':''" @click="changeTab(1)">
              {{$t('admin_right_title1')}}
            </h2>
            <h2 class="pointer" :class="right.tabIndex===2?'active':''" @click="changeTab(2)">
              {{$t('admin_right_title2')}}
            </h2>
            <h2 class="pointer" :class="right.tabIndex===3?'active':''" @click="changeTab(3)">
              {{$t('admin_right_title3')}}
            </h2>
            <h2 class="pointer" :class="right.tabIndex===4?'active':''" @click="changeTab(4)">
              {{$t('admin_right_title4')}}
            </h2>
          </div>
          <right-1 v-if="right.tabIndex===1"/>
          <right-2 v-if="right.tabIndex===2"/>
          <right-3 v-if="right.tabIndex===3"/>
          <right-4 v-if="right.tabIndex===4"/>
        </div>
      </div>
      <center/>
      <modelPreview/>
      <modelCode/>
    </div>
  </div>
</template>
<script>
  import Center from './center'
  import Func from './func'
  import Right1 from './right-1'
  import Right2 from './right-2'
  import Right3 from './right-3'
  import Right4 from './right-4'
  import ModelCode from '../../components/modelCode'
  import ModelPreview from '../../components/ModelPreview'

  import { mapState } from 'vuex';

  export default {
    computed: mapState ([ "right" ]),
    components: {
      Center,
      ModelPreview,
      ModelCode,
      Func,
      Right1,
      Right2,
      Right3,
      Right4,
    },
    methods: {
      changeTab (tabIndex) {
        this.$store.commit ('right/changeTab', { tabIndex })
      },
    },
    mounted () {
      this.$store.commit ('top/changeTop', { topIndex: 1 });
      this.$store.commit ('center/clear');
    }
  }
</script>
