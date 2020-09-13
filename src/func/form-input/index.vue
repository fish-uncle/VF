<template>
  <i-input
    class="f-input"
    :class="[currentVal.dragItem.className]"
    v-model="parent.data[currentVal.dragItem.key]"
    :disabled="currentVal.dragItem.disabled"
    :placeholder="currentVal.dragItem.placeholder"
    :style="{width:`${currentVal.dragItem.widthRatio}%`}"
    @on-change="inputChange"
  />
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
          value: '1',
          key: this.currentVal.dragItem.key
        })
      },
      inputChange (e) {
        const value = e.target.value;
        this.parent.changeData ({
          value,
          key: this.currentVal.dragItem.key
        })
      }
    }
  }
</script>
