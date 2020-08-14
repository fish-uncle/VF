<template>
  <Button type="primary">{{currentVal.dragItem.placeholder}}</Button>
</template>
<script>
  import {mapState} from "vuex";

  export default {
    data() {
      return {
        currentVal: this.value,
      }
    },
    computed: mapState(["center"]),
    props: ["value"],
    watch: {
      value(val) {
        this.currentVal = val;
      }
    },
    methods: {
      init() {
      },
      handleClick(){

      }
    }
  }
</script>
