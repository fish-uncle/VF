<template>
  <Slider  v-model="center[currentVal.dragItem.key]"
           class="f-slider"
           :style="{width:`${currentVal.dragItem.widthRatio}%`}"
           :class="[currentVal.dragItem.className]"
           :step="Number(currentVal.dragItem.step)"
           :max="Number(currentVal.dragItem.max)"
           :min="Number(currentVal.dragItem.min)"
           :show-input="center[currentVal.dragItem.showInput]"
         :disabled="currentVal.dragItem.disabled" @on-change="clickChange">
  </Slider >
</template>
<script>
  import request from "../../utils/request";
  import {mapState} from "vuex";
  import {findComponentUpward} from "../../utils";

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
      clickChange(value) {
        this.$store.commit('center/changeData', {
          value,
          key: this.currentVal.dragItem.key
        })
      }
    }
  }
</script>
