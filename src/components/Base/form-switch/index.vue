<template>
  <i-switch v-model="parent.data[currentVal.key]"
            v-bind="currentVal.props"
            class="vf-switch"
            :class="[currentVal.className]"
            :disabled="currentVal.disabled" @on-change="clickChange">
  </i-switch>
</template>
<script>
  import func from '../../../mixins/component'

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
        this.eventsOnChange()
      }
    }
  }
</script>
<style lang="less">
  .vf-switch {
    margin-top: 5px;
  }
</style>
