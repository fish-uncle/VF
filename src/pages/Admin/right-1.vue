<template>
  <div>
    <div v-if="item.dragItem.changeList.indexOf('title')!==-1">
      <label class="fn-block">组件标题</label>
      <i-input v-model="item.dragItem.title" :disabled="item.dragItem.business"
               @on-change="e=>inputChange(e,'title')"/>
    </div>
    <div v-if="item.dragItem.changeList.indexOf('labelTextAlign')!==-1">
      <label class="fn-block">组件标题对齐</label>
      <RadioGroup v-model="item.dragItem.labelTextAlign" type="button" size="large"
                  @on-change="value=>checkChange(value,'labelTextAlign')">
        <Radio label="left" :disabled="item.dragItem.business">左对齐</Radio>
        <Radio label="right" :disabled="item.dragItem.business">右对齐</Radio>
      </RadioGroup>
    </div>
    <div v-if="item.dragItem.changeList.indexOf('labelWidth')!==-1">
      <label class="fn-block">组件标题宽度</label>
      <i-input v-model="item.dragItem.labelWidth" :disabled="item.dragItem.business"
               @on-change="e=>inputChange(e,'labelWidth')"><span slot="append">px</span>
      </i-input>
    </div>
    <div v-if="item.dragItem.changeList.indexOf('widthRatio')!==-1">
      <label class="fn-block">组件宽度</label>
      <i-input v-model="item.dragItem.widthRatio" :disabled="item.dragItem.business"
               @on-change="e=>inputChange(e,'widthRatio')"><span slot="append">%</span>
      </i-input>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex';

  export default {
    computed: {
      ...mapState(["center"]),
      item() {
        if (this.center.list.length > 0) {
          return this.center.list[this.center.current] ? this.center.list[this.center.current] : {dragItem: {changeList: []}}
        } else {
          return {dragItem: {changeList: []}}
        }
      }
    },
    methods: {
      checkChange(value, key) {
        let item = this.item;
        item.dragItem[key] = value;
      },
      keyChange(e, key) {
        const value = e.target.value;
        let item = this.item;
        const data = this.center.data;
        const keyValue = data[item.dragItem.key];
        delete data[item.dragItem.key];
        item.dragItem[key] = value;
        data[value] = keyValue;
      },
      inputChange(e, key) {
        const value = e.target.value;
        let item = this.item;
        item.dragItem[key] = value;
      }
    }
  }
</script>
<style lang="less">
  @import "../../less/conf";

  .fish-right {
    width: 440px;
    margin-top: 10px;
    padding-right: 10px;
    height: calc(100vh - 50px);
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 4px;
      height: 1px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: #535353;
    }

    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background: #ededed;
    }
    .tenant-select{
      width: 200px;
      top: 0;
      right: 10px;
    }
    h2 {
      font-size: 16px;
      height: 40px;
      margin-right: 10px;
      color: rgba(0, 0, 0, .3);
      user-select: none;

      &:hover, &.active {
        color: rgba(0, 0, 0, .65);
      }
    }

    label {
      font-size: 14px;
      margin-bottom: 10px;
    }

    input {
      margin-bottom: 10px;
      width: 100%;
      border-radius: 4px;
      box-shadow: none;
      border: 1px solid #ddd;
      padding-left: 10px;
      padding-right: 10px;
      height: 36px;
    }
  }
</style>
