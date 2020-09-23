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

  .vf-input.vf-error {
    input {
      border-color: @error-color;
      outline: 0;
      box-shadow: 0 0 0 2px rgba(237, 64, 20, .2);
    }
  }
</style>
