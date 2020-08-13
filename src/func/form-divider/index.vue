<template>
  <Divider class="f-divider"  :class="[currentVal.dragItem.className]" :dashed="currentVal.dragItem.dashed"/>
</template>
<script>
  import {mapState} from 'vuex';

  export default {
    data() {
      return {
        currentVal: this.value,
      }
    },
    computed: mapState(["center"]),
    props: ["value"],
    watch: {
      value(val) {
        this.currentVal = val;
      }
    },
    methods: {
      init() {
      },
    }
  }
</script>
<style lang="less">
  .f-divider {
    margin: 16px 0 0 0;
  }
</style>
