<template>
  <Rate v-model="parent.data[currentVal.key]"
        v-bind="currentVal.props"
        class="vf-rate"
        :class="[currentVal.className]"
        :character="currentVal.character"
        :clearable="currentVal.clearable"
        :allow-half="true"
        :show-text="currentVal.showText"
        :disabled="currentVal.disabled" @on-change="clickChange">
  </Rate>
</template>
<script>
  import func from '../../../mixins/func'

  export default {
    mixins: [func],
    methods: {
      update() {
        this.parent.changeData({
          value: '',
          key: this.currentVal.key
        })
      },
      clickChange(value) {
        this.parent.changeData({
          value,
          key: this.currentVal.key
        })
        this.eventsOnChange()
      }
    }
  }
</script>
