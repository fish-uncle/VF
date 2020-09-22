<template>
  <i-input v-bind="currentVal.props"
           type="textarea"
           clas="vf-textarea"
           :class="[currentVal.className,error?'vf-error':'']"
           v-model="parent.data[currentVal.key]"
           :disabled="currentVal.disabled"
           :placeholder="currentVal.placeholder"
           :style="{width:`${currentVal.widthRatio}%`}"
           @on-change="inputChange"
  />
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
      inputChange(e) {
        const _self = this;
        if (this.timeout !== null) clearTimeout(this.timeout)
        if (_self.error) {
          _self.parent.errorHide(this.currentVal.id);
        }
        this.timeout = setTimeout(() => {
          const value = e.target.value;
          _self.parent.changeData({
            value,
            key: _self.currentVal.key
          })
          if (_self.currentVal.events) {
            if (_self.currentVal.events.onChange) {
              const fun = new Function('value', 'e', _self.currentVal.events.onChange)
              fun(value, e)
            }
          }
        }, 1000)
      }
    }
  }
</script>
<style lang="less">
  @import "../../less/conf";

  .vf-textarea.vf-error {
    input {
      border-color: @error-color;
      outline: 0;
      box-shadow: 0 0 0 2px rgba(237, 64, 20, .2);
    }
  }
</style>
