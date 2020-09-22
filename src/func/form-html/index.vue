<template>
  <div class="vf-html" :class="[currentVal.className]" v-html="currentVal.code"/>
</template>
<script>
  import func from '../../mixins/func'

  export default {
    mixins: [func],
  }
</script>
