<template>
  <div>
    <div class="fish-control" v-if="item.dragItem.changeList.indexOf('title')!==-1">
      <label>组件标题</label>
      <i-input v-model="item.dragItem.title"
               @on-change="e=>inputChange(e,'title')"/>
    </div>
    <div class="fish-control" v-if="item.dragItem.changeList.indexOf('labelTextAlign')!==-1">
      <label>组件标题对齐</label>
      <RadioGroup v-model="item.dragItem.labelTextAlign" type="button" size="large"
                  @on-change="value=>checkChange(value,'labelTextAlign')">
        <Radio label="left">左对齐</Radio>
        <Radio label="right">右对齐</Radio>
      </RadioGroup>
    </div>
    <div class="fish-control" v-if="item.dragItem.changeList.indexOf('dashed')!==-1">
      <label>组件是否虚线</label>
      <RadioGroup v-model="item.dragItem.dashed?1:0" type="button" size="large"
                  @on-change="value=>checkChange(!!value,'dashed')">
        <Radio :label="1">是</Radio>
        <Radio :label="0">否</Radio>
      </RadioGroup>
    </div>
    <div class="fish-control" v-if="item.dragItem.changeList.indexOf('labelWidth')!==-1">
      <label>组件标题宽度</label>
      <i-input v-model="item.dragItem.labelWidth"
               @on-change="e=>inputChange(e,'labelWidth')"><span slot="append">px</span>
      </i-input>
    </div>
    <div class="fish-control" v-if="item.dragItem.changeList.indexOf('widthRatio')!==-1">
      <label>组件宽度</label>
      <i-input v-model="item.dragItem.widthRatio"
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
    height: calc(100vh - 130px);
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

    .tenant-select {
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

    .fish-control {
      >label {
        display: block;
        font-size: 14px;
        margin-bottom: 10px;
      }
    }


    .ivu-input, .ivu-input-group-append {
      height: 36px;
    }

    .ivu-input-wrapper {
      margin-bottom: 10px;
    }
  }
</style>
