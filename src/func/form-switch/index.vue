<template>
  <i-switch v-model="parent.data[currentVal.key]"
            v-bind="currentVal.props"
            class="vf-switch"
            :class="[currentVal.className]"
            :disabled="currentVal.disabled" @on-change="clickChange">
  </i-switch>
</template>
<script>
  import func from '../../mixins/func'

  export default {
    mixins: [func],
    methods: {
      update() {
        this.parent.changeData({
          value: false,
          key: this.currentVal.key
        })
      },
      clickChange() {
        if (this.currentVal.events) {
          if (this.currentVal.events.onChange) {
            const fun = new Function('value', this.currentVal.events.onChange)
            fun(this.parent.data[this.currentVal.key])
          }
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
