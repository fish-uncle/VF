<template>
  <div class="vf-password pos-r" :style="{width:`${currentVal.widthRatio}%`}"
       :class="[currentVal.className,error?'vf-error':'']">
    <i-input
      v-model="parent.data[currentVal.key]"
      v-bind="currentVal.props"
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
  import func from '../../mixins/func'

  export default {
    mixins: [func],
    data() {
      return {
        see: true,
      }
    },
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
        this.timeout = setTimeout(() => {
          const value = e.target.value;
          if (_self.error) {
            _self.parent.errorHide(this.currentVal.id);
          }
          _self.parent.changeData({
            value,
            key: _self.currentVal.key
          })
          if (_self.currentVal.events) {
            if (_self.currentVal.events.onChange) {
              _self.currentVal.events.onChange(value, e)
            }
          }
        }, 1000)
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