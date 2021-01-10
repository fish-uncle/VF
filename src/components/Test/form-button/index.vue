<template>
  <Button type="primary">{{currentVal.placeholder}}</Button>
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
      handleClick () {

      }
    }
  }
</script>
