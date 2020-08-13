<template>
  <div class="f-javascript"
        :class="[currentVal.dragItem.className]">
    自定义js片段，仅在编辑时显示该文本，用于占位
  </div>
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
