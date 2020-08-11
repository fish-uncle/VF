<template>
  <Icon class="f-javascript" type="logo-javascript" size="18"/>
</template>
<script>
  import {mapState} from 'vuex';

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
    mounted() {
      eval(this.currentVal.dragItem.code);
    },
    methods: {
      init() {
      },
    }
  }
</script>
<style lang="less">
  .f-javascript {
    margin: 8px 0 0 0;
  }
</style>
