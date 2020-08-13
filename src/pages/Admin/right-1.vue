<template>
  <div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('title')!==-1">
      <label>{{$t('admin_right_btn1')}}</label>
      <i-input v-model="item.dragItem[`title_${language.lang}`]"
               @on-change="e=>inputChange(e,`title_${language.lang}`)"/>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('labelTextAlign')!==-1">
      <label>{{$t('admin_right_btn2')}}</label>
      <RadioGroup v-model="item.dragItem.labelTextAlign" type="button" size="large"
                  @on-change="value=>checkChange(value,'labelTextAlign')">
        <Radio label="left">{{$t('admin_right_btn2_1')}}</Radio>
        <Radio label="right">{{$t('admin_right_btn2_2')}}</Radio>
      </RadioGroup>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('dashed')!==-1">
      <label>{{$t('admin_right_btn5')}}</label>
      <RadioGroup v-model="item.dragItem.dashed?1:0" type="button" size="large"
                  @on-change="value=>checkChange(!!value,'dashed')">
        <Radio :label="1">{{$t('admin_right_btn5_1')}}</Radio>
        <Radio :label="0">{{$t('admin_right_btn5_2')}}</Radio>
      </RadioGroup>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('labelWidth')!==-1">
      <label>{{$t('admin_right_btn3')}}</label>
      <i-input v-model="item.dragItem.labelWidth"
               @on-change="e=>inputChange(e,'labelWidth')"><span slot="append">px</span>
      </i-input>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('widthRatio')!==-1">
      <label>{{$t('admin_right_btn4')}}</label>
      <i-input v-model="item.dragItem.widthRatio"
               @on-change="e=>inputChange(e,'widthRatio')"><span slot="append">%</span>
      </i-input>
    </div>
    <div class="vf-control" v-if="this.center.list.length > 0">
      <label>{{$t('admin_right_btn25')}}</label>
      <i-input v-model="item.dragItem.className"
               @on-change="e=>inputChange(e,'className')">
      </i-input>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('code')!==-1">
      <label>{{$t('admin_right_btn23')}}</label>
      <i-input v-model="item.dragItem.code" type="textarea"
               class="vf-code"
               :rows="20"
               @on-change="e=>inputChange(e,'code')">
      </i-input>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex';

  export default {
    computed: {
      ...mapState(["center", "language"]),
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

  .vf-right {
    width: 440px;
    margin-top: 10px;
    padding-right: 10px;
    height: calc(100vh - 130px);
    overflow-y: auto;

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

    .vf-control {
      > label {
        display: block;
        font-size: 14px;
        margin-bottom: 10px;
      }
    }


    .ivu-input, .ivu-input-group-append {
      height: 36px;
    }

    .vf-code {
      textarea {
        height: auto;
      }
    }

    .ivu-input-wrapper {
      margin-bottom: 10px;
    }
  }
</style>
