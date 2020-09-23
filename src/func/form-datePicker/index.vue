<template>
  <Date-picker class="vf-date-picker"
               v-bind="currentVal.props"
               :class="[currentVal.className,error?'vf-error':'']"
               :style="{width:`${currentVal.widthRatio}%`}"
               v-model="parent.data[currentVal.key]"
               :clearable="currentVal.clearable"
               :placeholder="currentVal.placeholder"
               :format="currentVal.timeFormat"
               @on-change="dateChange"
               :disabled="currentVal.disabled"/>
</template>
<script>
  import func from '../../mixins/func'

  export default {
    mixins: [func],
    methods: {
      update() {
        this.parent.changeData({
          value: '',
          key: this.currentVal.key
        })
      },
      dateChange(value) {
        if (this.error) {
          this.parent.errorHide(this.currentVal.id);
        }
        this.parent.changeData({
          value,
          key: this.currentVal.key
        })
        this.eventsOnChange()
      }
    }
  }
</script>
<style lang="less">
  @import "../../less/conf";

  .vf-date-picker.vf-error {
    input {
      border-color: @error-color;
      outline: 0;
      box-shadow: 0 0 0 2px rgba(237, 64, 20, .2);
    }
  }
</style>
