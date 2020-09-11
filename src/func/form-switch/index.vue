<template>
  <i-switch v-model="parent.data[currentVal.dragItem.key]"
            class="f-switch"
            :class="[currentVal.dragItem.className]"
            :disabled="currentVal.dragItem.disabled" @on-change="clickChange">
    <i/>
  </i-switch>
</template>
<script>
  import { findComponentUpward } from "../../utils";

  export default {
    data () {
      return {
        data: false,
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
          value: false,
          key: this.currentVal.dragItem.key
        })
      },
      clickChange () {
        if (!this.currentVal.dragItem.disabled) {
          this.data = !this.data
          this.parent.changeData ({
            value: this.data,
            key: this.currentVal.dragItem.key
          })
        }
      }
    }
  }
</script>
<style lang="less">
  .f-switch {
    margin-top: 5px;
  }
</style>
