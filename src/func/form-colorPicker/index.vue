<template>
  <ColorPicker v-model="color"
               v-bind="currentVal.props"
               class="vf-color-picker"
               :class="[currentVal.className,error?'vf-error':'']"
               @on-change="colorChange"
               :alpha="currentVal.alpha"
               :disabled="currentVal.disabled"/>
</template>
<script>

  import { findComponentUpward } from "../../utils";

  export default {
    data () {
      let color = '';
      return {
        color,
        parent: findComponentUpward (this, 'FormList'),
        currentVal: this.value,
      }
    },
    props: [ 'value', 'error' ],
    watch: {
      value (val) {
        this.currentVal = val;
        this.color = parent.data[this.currentVal.key];
      }
    },
    methods: {
      init () {
        this.parent.changeData ({
          value: '',
          key: this.currentVal.key
        })
      },
      colorChange (value) {
        if (this.error) {
          this.parent.errorHide (this.currentVal.id);
        }
        this.parent.changeData ({
          value,
          key: this.currentVal.key
        })
      }
    }
  }
</script>
<style lang="less">
  @import "../../less/conf";

  .vf-color-picker.vf-error {
    .ivu-color-picker-input {
      border-color: @error-color;
      outline: 0;
      box-shadow: 0 0 0 2px rgba(237, 64, 20, .2);
    }
  }
</style>