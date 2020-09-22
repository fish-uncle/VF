<template>
  <div class="vf-title"
           :style="{width:`${currentVal.widthRatio}%`}"
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
    /*margin: 16px 0 0 0;*/
    min-width: auto;
  }
</style>
