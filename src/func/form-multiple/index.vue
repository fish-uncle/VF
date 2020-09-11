<template>
  <Checkbox-group class="f-multiple fn-flex flex-row" v-model="data"
                  :class="[currentVal.dragItem.className]"
                  :style="{width:`${currentVal.dragItem.widthRatio}%`}"
                  @on-change="clickChange">
    <Checkbox v-if="!currentVal.dragItem.selectListUrl" v-for="item in currentVal.dragItem.selectList"
              :label="item.value" :key="item.value">
      <span>{{item.title}}</span>
    </Checkbox>
    <Checkbox v-if="currentVal.dragItem.selectListUrl" v-for="item in currentVal.dragItem.ajaxList" :label="item.value"
              :key="item.value">
      <span>{{item.title}}</span>
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
    props: [ 'value', 'edit' ],
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
        if (this.currentVal.dragItem.selectListUrl) {
          const data = { ...this.parent.data, ...this.currentVal.dragItem.customAjaxParams };
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
        this.data = [];
        this.parent.changeData ({
          value: [],
          key: this.currentVal.dragItem.key
        })
        if (this.currentVal.dragItem.controlOthersUpdateTargetKeys.length) {
          if (this.parent) {
            this.parent.controlOthersUpdate (this.currentVal.dragItem.controlOthersUpdateTargetKeys)
          }
        }
        if (this.currentVal.dragItem.controlOthersHideTargetKeys) {
          if (this.parent) {
            this.parent.controlOthersHide (this.currentVal.dragItem.controlOthersHideTargetKeys, [])
          }
        }
      },
      clickChange () {
        this.parent.changeData ({
          value: this.data,
          key: this.currentVal.dragItem.key
        })
        if (this.currentVal.dragItem.controlOthersUpdateTargetKeys.length) {
          if (this.parent) {
            this.parent.controlOthersUpdate (this.currentVal.dragItem.controlOthersUpdateTargetKeys)
          }
        }
        if (this.currentVal.dragItem.controlOthersHideTargetKeys) {
          if (this.parent) {
            this.parent.controlOthersHide (this.currentVal.dragItem.controlOthersHideTargetKeys, this.data)
          }
        }
      }
    }
  }
</script>
<style lang="less">
  .f-multiple {
    height: 32px;
    align-items: center;
  }
</style>
