<template>
  <Slider v-model="parent.data[currentVal.dragItem.key]"
          class="f-slider"
          :style="{width:`${currentVal.dragItem.widthRatio}%`}"
          :class="[currentVal.dragItem.className]"
          :step="Number(currentVal.dragItem.step)"
          :max="Number(currentVal.dragItem.max)"
          :min="Number(currentVal.dragItem.min)"
          :show-input="parent.data[currentVal.dragItem.showInput]"
          :disabled="currentVal.dragItem.disabled" @on-change="clickChange">
  </Slider>
</template>
<script>
  import { findComponentUpward } from "../../utils";

  export default {
    data () {
      return {
        currentVal: this.value,
        parent: findComponentUpward (this, 'FormList')
      }
    },
    props: [ "value" ],
    watch: {
      value (val) {
        this.currentVal = val;
      }
    },
    methods: {
      init () {
        this.parent.changeData ({
          value: '',
          key: this.currentVal.dragItem.key
        })
      },
      clickChange (value) {
        this.parent.changeData ({
          value,
          key: this.currentVal.dragItem.key
        })
      }
    }
  }
</script>
