<template>
  <div class="vf-html" :class="[currentVal.className]" v-html="currentVal.code"/>
</template>
<script>
  import func from '../../../mixins/component'

  export default {
    mixins: [func],
  }
</script>
