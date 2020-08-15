<template>
  <div>{{currentVal.dragItem[`title_${language.lang}`]}}</div>
</template>
<script>
  import {mapState} from "vuex";

  export default {
    data() {
      return {
        currentVal: this.value,
      }
    },
    computed: mapState(["center", "language"]),
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
