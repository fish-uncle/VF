<template>
  <div class="f-password pos-r" :style="{width:`${currentVal.dragItem.widthRatio}%`}"
       :class="[currentVal.dragItem.className]">
    <i-input
      v-model="parent.data[currentVal.dragItem.key]"
      :disabled="currentVal.dragItem.disabled"
      :placeholder="currentVal.dragItem.placeholder"
      :style="{width:`100%`}"
      @on-change="inputChange"
      :type="see?'password':'text'"
    />
    <Icon :type="see?'ios-eye-outline':'ios-eye-off-outline'" size="20" class="pos-a f-password-see pointer"
          @click="see=!see"/>
  </div>
</template>
<script>
  import { findComponentUpward } from "../../utils";

  export default {
    data() {
      return {
        currentVal: this.value,
        see: true,
        parent: findComponentUpward (this, 'FormList'),
      }
    },
    props: ["value"],
    watch: {
      value(val) {
        this.currentVal = val;
      }
    },
    methods: {
      init() {
        this.parent.changeData ({
          value: '',
          key: this.currentVal.dragItem.key
        })
      },
      inputChange(e) {
        const value = e.target.value;
        this.parent.changeData ({
          value,
          key: this.currentVal.dragItem.key
        })
      }
    }
  }
</script>
<style lang="less">
  .f-password-see {
    right: 10px;
    top: 50%;
    margin-top: -10px;
  }
</style>