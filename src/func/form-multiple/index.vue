<template>
  <Checkbox-group class="vf-multiple fn-flex flex-row"
                  v-model="parent.data[currentVal.key]"
                  v-bind="currentVal.props"
                  :class="[currentVal.className,error?'vf-error':'']"
                  :style="{width:`${currentVal.widthRatio}%`}"
                  @on-change="clickChange">
    <template v-if="!currentVal.selectListUrl">
      <Checkbox v-for="item in currentVal.selectList"
                :disabled="currentVal.disabled"
                :label="item.value" :key="item.value">
        <span>{{item.label}}</span>
      </Checkbox>
    </template>
    <template v-if="currentVal.selectListUrl">
      <Checkbox v-for="item in currentVal.ajaxList" :label="item.value"
                :disabled="currentVal.disabled"
                :key="item.value">
        <span>{{item.label}}</span>
      </Checkbox>
    </template>
  </Checkbox-group>
</template>
<script>
  import request from '../../utils/request'
  import func from '../../mixins/func'

  export default {
    mixins: [func],
    mounted() {
      this.init()
    },
    methods: {
      update() {
        this.init()
        this.parent.changeData({
          value: [],
          key: this.currentVal.key
        })
      },
      init() {
        if (this.currentVal.selectListUrl) {
          const data = {...this.parent.data, ...this.currentVal.customAjaxParams};
          request.post(this.currentVal.selectListUrl, data).then(res => {
            if (this.edit) {
              this.$store.commit('center/changeSelectList', {
                value: res,
                key: this.currentVal.key
              })
            } else {
              this.parent.changeSelectList({
                value: res,
                key: this.currentVal.key
              })
            }
          })
        }
        if (this.currentVal.controlOthersUpdateTargetKeys.length) {
          if (this.parent) {
            this.parent.controlOthersUpdate(this.currentVal.controlOthersUpdateTargetKeys)
          }
        }
        if (this.currentVal.controlOthersHideTargetKeys) {
          if (this.parent) {
            this.parent.controlOthersHide(this.currentVal.controlOthersHideTargetKeys, [])
          }
        }
      },
      clickChange() {
        if (this.error) {
          this.parent.errorHide(this.currentVal.id);
        }
        if (this.currentVal.controlOthersUpdateTargetKeys.length) {
          if (this.parent) {
            this.parent.controlOthersUpdate(this.currentVal.controlOthersUpdateTargetKeys)
          }
        }
        if (this.currentVal.controlOthersHideTargetKeys) {
          if (this.parent) {
            this.parent.controlOthersHide(this.currentVal.controlOthersHideTargetKeys, this.data)
          }
        }
        if (this.currentVal.events) {
          if (this.currentVal.events.onChange) {
            const fun = new Function('value', 'e', this.currentVal.events.onChange)
            fun(this.parent.data[this.currentVal.key])
          }
        }
      }
    }
  }
</script>
<style lang="less">
  @import "../../less/conf";

  .vf-multiple {
    height: 32px;
    align-items: center;

    &.vf-error {
      .ivu-checkbox-inner {
        border-color: @error-color;
        outline: 0;
        box-shadow: 0 0 0 2px rgba(237, 64, 20, .2);
      }
    }
  }
</style>
