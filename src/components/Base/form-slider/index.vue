<template>
  <Slider v-model="parent.data[currentVal.key]"
          v-bind="currentVal.props"
          class="vf-slider"
          :style="{width:`${currentVal.widthRatio}%`}"
          :class="[currentVal.className]"
          :step="Number(currentVal.step)"
          :max="Number(currentVal.max)"
          :min="Number(currentVal.min)"
          :show-input="parent.data[currentVal.showInput]"
          :disabled="currentVal.disabled" @on-change="clickChange">
  </Slider>
</template>
<script>
  import func from '../../../mixins/component'

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
