<template>
  <div class="f-html"  :class="[currentVal.dragItem.className]" v-html="currentVal.dragItem.code"/>
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
    methods: {
      init() {
      },
    }
  }
</script>
