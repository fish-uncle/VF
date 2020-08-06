<template>
  <i-input
    v-model="center[currentVal.dragItem.key]"
    :disabled="currentVal.dragItem.disabled"
    :placeholder="currentVal.dragItem.placeholder"
    :style="{width:`${currentVal.dragItem.widthRatio}%`}"
    @on-change="inputChange"
  />
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
        this.center[this.currentVal.dragItem.key] = '';
        this.$store.commit('center/changeData', {
          value: '',
          key: this.currentVal.dragItem.key
        })
      },
      inputChange(e) {
        const value = e.target.value;
        this.$store.commit('center/changeData', {
          value,
          key: this.currentVal.dragItem.key
        })
      }
    }
  }
</script>
