<template>
  <div
    class="vf-diy"
    :class="[currentVal.className,error?'vf-error':'']"
    v-model="parent.data[currentVal.key]"
    :style="{width:`${currentVal.widthRatio}%`}"
  />
</template>
<script>
  import func from '../../mixins/func'

  export default {
    mixins: [func],
  }
</script>
<style lang="less">
  @import "../../less/conf";
</style>
