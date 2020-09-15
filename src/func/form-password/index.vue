<template>
  <div class="vf-password pos-r" :style="{width:`${currentVal.widthRatio}%`}"
       :class="[currentVal.className,error?'vf-error':'']">
    <i-input
      v-model="parent.data[currentVal.key]"
      :disabled="currentVal.disabled"
      :placeholder="currentVal.placeholder"
      :style="{width:`100%`}"
      @on-change="inputChange"
      :type="see?'password':'text'"
    />
    <Icon :type="see?'ios-eye-outline':'ios-eye-off-outline'" size="20" class="pos-a vf-password-see pointer"
          @click="see=!see"/>
  </div>
</template>
<script>
  import { findComponentUpward } from "../../utils";

  export default {
    data () {
      return {
        currentVal: this.value,
        see: true,
        parent: findComponentUpward (this, 'FormList'),
      }
    },
    props: [ 'value', 'error' ],
    watch: {
      value (val) {
        this.currentVal = val;
      }
    },
    methods: {
      init () {
        this.parent.changeData ({
          value: '',
          key: this.currentVal.key
        })
      },
      inputChange (e) {
        const value = e.target.value;
        if (this.error) {
          this.parent.errorHide (this.currentVal.id);
        }
        this.parent.changeData ({
          value,
          key: this.currentVal.key
        })
        if (this.currentVal.controlOthersUpdateTargetKeys.length) {
          if (this.parent) {
            this.parent.controlOthersUpdate (this.currentVal.controlOthersUpdateTargetKeys)
          }
        }
      }
    }
  }
</script>
<style lang="less">
  @import "../../less/conf";

  .vf-password-see {
    right: 10px;
    top: 50%;
    margin-top: -10px;
  }

  .vf-password.vf-error {
    input {
      border-color: @error-color;
      outline: 0;
      box-shadow: 0 0 0 2px rgba(237, 64, 20, .2);
    }
  }
</style>