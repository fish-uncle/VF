<template>
  <ColorPicker v-model="color"
               class="f-color-picker"
               :class="[currentVal.dragItem.className]"
               @on-change="colorChange"
               :alpha="currentVal.dragItem.alpha"
               :disabled="currentVal.dragItem.disabled"/>
</template>
<script>

  import { findComponentUpward } from "../../utils";

  export default {
    data () {
      let color = '';
      return {
        color,
        parent: findComponentUpward(this, 'FormList'),
        currentVal: this.value,
      }
    },
    props: [ "value" ],
    watch: {
      value (val) {
        this.currentVal = val;
        this.color = parent.data[this.currentVal.dragItem.key];
      }
    },
    methods: {
      init () {
        this.parent.changeData ({
          value: '',
          key: this.currentVal.dragItem.key
        })
      },
      colorChange (value) {
        this.parent.changeData ({
          value,
          key: this.currentVal.dragItem.key
        })
      }
    }
  }
</script>
