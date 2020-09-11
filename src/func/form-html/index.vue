<template>
  <div class="f-html" :class="[currentVal.dragItem.className]" v-html="currentVal.dragItem.code"/>
</template>
<script>
  export default {
    data() {
      return {
        currentVal: this.value,
      }
    },
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
