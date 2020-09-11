<template>
  <RadioGroup class="f-radio fn-flex flex-row" v-model="parent.data[currentVal.dragItem.key]"
              :class="[currentVal.dragItem.className]"
              @on-change="clickChange">
    <Radio v-if="!currentVal.dragItem.selectListUrl" v-for="item in currentVal.dragItem.selectList"
           :disabled="currentVal.dragItem.disabled" :label="item.value" :key="item.value">
      {{item.title}}
    </Radio>
    <Radio v-if="currentVal.dragItem.selectListUrl" v-for="item in currentVal.dragItem.ajaxList" :label="item.value"
           :disabled="currentVal.dragItem.disabled" :key="item.value">
      {{item.title}}
    </Radio>
  </RadioGroup>
</template>
<script>
  import request from "../../utils/request";
  import { findComponentUpward } from "../../utils";

  export default {
    data () {
      return {
        currentVal: this.value,
        parent: findComponentUpward (this, 'FormList')
      }
    },
    props: [ "value", 'edit' ],
    watch: {
      value (val) {
        this.currentVal = val;
      }
    },
    methods: {
      init () {
        if (this.currentVal.dragItem.selectListUrl) {
          const data = { ...parent.data, ...this.currentVal.dragItem.customAjaxParams };
          request.post (this.currentVal.dragItem.selectListUrl, data).then (res => {
            if (this.edit) {
              this.$store.commit ('center/changeSelectList', {
                value: res,
                key: this.currentVal.dragItem.key
              })
            } else {
              this.parent.changeSelectList ({
                value: res,
                key: this.currentVal.dragItem.key
              })
            }
          })
        }
        this.parent.changeData ({
          value: '',
          key: this.currentVal.dragItem.key
        })
        if (this.currentVal.dragItem.controlOthersUpdateTargetKeys.length) {
          if (this.parent) {
            this.parent.controlOthersUpdate (this.currentVal.dragItem.controlOthersUpdateTargetKeys)
          }
        }
        if (this.currentVal.dragItem.controlOthersHideTargetKeys) {
          if (this.parent) {
            this.parent.controlOthersHide (this.currentVal.dragItem.controlOthersHideTargetKeys, '')
          }
        }
      },
      clickChange (value) {
        this.parent.changeData ({
          value,
          key: this.currentVal.dragItem.key
        })
        if (this.currentVal.dragItem.controlOthersUpdateTargetKeys.length) {
          if (this.parent) {
            this.parent.controlOthersUpdate (this.currentVal.dragItem.controlOthersUpdateTargetKeys)
          }
        }
        if (this.currentVal.dragItem.controlOthersHideTargetKeys) {
          if (this.parent) {
            this.parent.controlOthersHide (this.currentVal.dragItem.controlOthersHideTargetKeys, value)
          }
        }
      }
    }
  }
</script>
<style lang="less">
  .f-radio {
    height: 32px;
    align-items: center;
    display: flex !important;
    display: -webkit-flex !important;
  }
</style>
