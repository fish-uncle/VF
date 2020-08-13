<template>
  <i-select v-model="center[currentVal.dragItem.key]"
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
  import {mapState} from 'vuex';
  import {findComponentUpward} from '../../utils'

  let ajax = {};
  export default {
    data() {
      return {
        currentVal: this.value,
        parent: findComponentUpward(this, 'FormList')
      }
    },
    computed: mapState(["center"]),
    props: ["value"],
    watch: {
      value(val) {
        this.currentVal = val;
        this.init();
      },
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        const key = this.currentVal.dragItem.diyKey ? this.currentVal.dragItem.diyKey : this.currentVal.dragItem.key;
        ajax[key] = true;
        if (this.currentVal.dragItem.selectListUrl) {
          const data = {...this.center.data, ...this.currentVal.dragItem.customAjaxParams};
          request.post(this.currentVal.dragItem.selectListUrl, data).then(res => {
            ajax[key] = false;
            this.$store.commit('center/changeSelectList', {
              value: res,
              key: this.currentVal.dragItem.key
            })
          }).catch(() => {
            ajax[key] = false;
          })
        } else {
          ajax[key] = false;
        }
        this.center[key] = '';
        this.$store.commit('center/changeData', {
          value: '',
          key
        })
      },
      clickChange(value) {
        const key = this.currentVal.dragItem.diyKey ? this.currentVal.dragItem.diyKey : this.currentVal.dragItem.key;
        this.$store.commit('center/changeData', {
          value,
          key
        })
        if (this.currentVal.dragItem.controlOthersUpdateTargetKeys.length) {
          if (this.parent) {
            this.parent.controlOthersUpdate(this.currentVal.dragItem.controlOthersUpdateTargetKeys)
          }
        }
        if (this.currentVal.dragItem.controlOthersHideTargetKeys) {
          if (this.parent) {
            this.parent.controlOthersHide(this.currentVal.dragItem.controlOthersHideTargetKeys, value)
          }
        }
      }
    }
  }
</script>
