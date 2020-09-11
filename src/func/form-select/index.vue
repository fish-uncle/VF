<template>
  <i-select v-model="parent.data[currentVal.dragItem.key]"
            class="f-select"
            :class="[currentVal.dragItem.className]"
            :placeholder="currentVal.dragItem.placeholder"
            :disabled="currentVal.dragItem.disabled" :style="{width:`${currentVal.dragItem.widthRatio}%`}"
            @on-change="clickChange" :clearable="currentVal.dragItem.clearable">
    <i-option v-if="!currentVal.dragItem.selectListUrl" v-for="item in currentVal.dragItem.selectList"
              :value="item.value" :key="item.value">
      <span>{{item.title}}</span>
    </i-option>
    <i-option v-if="currentVal.dragItem.selectListUrl" v-for="item in currentVal.dragItem.ajaxList"
              :value="item.value" :key="item.value">
      <span>{{item.title}}</span>
    </i-option>
  </i-select>
</template>
<script>
  import request from '../../utils/request'
  import { findComponentUpward } from '../../utils'

  export default {
    data () {
      return {
        currentVal: this.value,
        parent: findComponentUpward (this, 'FormList')
      }
    },
    props: [ 'value', 'edit' ],
    watch: {
      value (val) {
        this.currentVal = val;
        this.reset ();
        this.init ();
      },
    },
    mounted () {
      this.reset ();
    },
    methods: {
      reset(){
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
        this.parent.changeData ({
          value: '',
          key: this.currentVal.dragItem.key
        })
      },
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
        this.parent.changeData ({
          value: '',
          key: this.currentVal.dragItem.key
        })
        console.log()
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
        const key = this.currentVal.dragItem.diyKey ? this.currentVal.dragItem.diyKey : this.currentVal.dragItem.key;
        this.parent.changeData ({
          value,
          key
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
