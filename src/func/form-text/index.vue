<template>
  <div>{{currentVal.dragItem[`title_${language}`]}}</div>
</template>
<script>
  export default {
    data () {
      return {
        currentVal: this.value,
      }
    },
    props: [ "value", "language" ],
    watch: {
      value (val) {
        this.currentVal = val;
      }
    },
    methods: {
      init () {
      },
    }
  }
</script>
