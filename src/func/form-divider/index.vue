<template>
  <Divider class="vf-divider"
           v-bind="currentVal.props"
           :style="{width:`${currentVal.widthRatio}%`}"
           :class="[currentVal.className]" :dashed="currentVal.dashed"/>
</template>
<script>
  export default {
    data () {
      return {
        currentVal: this.value,
      }
    },
    props: [ "value" ],
    watch: {
      value (val) {
        this.currentVal = val;
      }
    },
    methods: {
      update () {
      },
    }
  }
</script>
<style lang="less">
  .vf-divider {
    margin: 16px 0 0 0;
    min-width: auto;
  }
</style>
