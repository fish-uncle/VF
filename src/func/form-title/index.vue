<template>
  <div class="vf-title"
       :style="{width:`${currentVal.widthRatio}%`,fontSize:`${currentVal.fontSize?currentVal.fontSize:14}px`}"
       :class="[currentVal.className]">
    {{currentVal.content}}
  </div>
</template>
<script>
  import func from '../../mixins/func'

  export default {
    mixins: [func],
  }
</script>
<style lang="less">
  .vf-title {
    min-width: auto;
  }
</style>
