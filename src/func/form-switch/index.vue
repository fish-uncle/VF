<template>
  <i-switch v-model="parent.data[currentVal.key]"
            v-bind="currentVal.props"
            class="vf-switch"
            :class="[currentVal.className]"
            :disabled="currentVal.disabled" @on-change="clickChange">
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
          key: this.currentVal.key
        })
      },
      clickChange () {
        if (!this.currentVal.disabled) {
          this.data = !this.data
          this.parent.changeData ({
            value: this.data,
            key: this.currentVal.key
          })
        }
      }
    }
  }
</script>
<style lang="less">
  .vf-switch {
    margin-top: 5px;
  }
</style>
