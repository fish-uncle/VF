<template>
  <div class="vf-html" :class="[currentVal.className]" v-html="currentVal.code"/>
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
