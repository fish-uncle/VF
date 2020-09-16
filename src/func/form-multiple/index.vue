<template>
  <Checkbox-group class="vf-multiple fn-flex flex-row" v-model="data"
                  :class="[currentVal.className,error?'vf-error':'']"
                  :style="{width:`${currentVal.widthRatio}%`}"
                  @on-change="clickChange">
    <Checkbox v-if="!currentVal.selectListUrl" v-for="item in currentVal.selectList"
              :label="item.value" :key="item.value">
      <span>{{item.label}}</span>
    </Checkbox>
    <Checkbox v-if="currentVal.selectListUrl" v-for="item in currentVal.ajaxList" :label="item.value"
              :key="item.value">
      <span>{{item.label}}</span>
    </Checkbox>
  </Checkbox-group>
</template>
<script>
  import request from "../../utils/request";
  import { findComponentUpward } from "../../utils";

  export default {
    data () {
      return {
        data: [],
        currentVal: this.value,
        parent: findComponentUpward (this, 'FormList')
      }
    },
    props: [ 'value', 'edit', 'error' ],
    watch: {
      value (val) {
        this.currentVal = val;
        this.init ();
      }
    },
    mounted () {
      this.init ();
    },
    methods: {
      init () {
        if (this.currentVal.selectListUrl) {
          const data = { ...this.parent.data, ...this.currentVal.customAjaxParams };
          request.post (this.currentVal.selectListUrl, data).then (res => {
            if (this.edit) {
              this.$store.commit ('center/changeSelectList', {
                value: res,
                key: this.currentVal.key
              })
            } else {
              this.parent.changeSelectList ({
                value: res,
                key: this.currentVal.key
              })
            }
          })
        }
        this.data = [];
        this.parent.changeData ({
          value: [],
          key: this.currentVal.key
        })
        if (this.currentVal.controlOthersUpdateTargetKeys.length) {
          if (this.parent) {
            this.parent.controlOthersUpdate (this.currentVal.controlOthersUpdateTargetKeys)
          }
        }
        if (this.currentVal.controlOthersHideTargetKeys) {
          if (this.parent) {
            this.parent.controlOthersHide (this.currentVal.controlOthersHideTargetKeys, [])
          }
        }
      },
      clickChange () {
        this.parent.changeData ({
          value: this.data,
          key: this.currentVal.key
        })
        if (this.error) {
          this.parent.errorHide (this.currentVal.id);
        }
        if (this.currentVal.controlOthersUpdateTargetKeys.length) {
          if (this.parent) {
            this.parent.controlOthersUpdate (this.currentVal.controlOthersUpdateTargetKeys)
          }
        }
        if (this.currentVal.controlOthersHideTargetKeys) {
          if (this.parent) {
            this.parent.controlOthersHide (this.currentVal.controlOthersHideTargetKeys, this.data)
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
