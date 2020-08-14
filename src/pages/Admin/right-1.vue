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
               @on-change="e=>numberChange(e,'labelWidth')"><span slot="append">px</span>
      </i-input>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('widthRatio')!==-1">
      <label>{{$t('admin_right_btn4')}}</label>
      <Slider v-model="item.dragItem.widthRatio" :max="100">
      </Slider>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('width')!==-1">
      <label>{{$t('admin_right_btn26')}}</label>
      <Slider v-model="item.w" :max="24">
      </Slider>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('placeholder')!==-1">
      <label>{{$t('admin_right_btn8')}}</label>
      <i-input v-model="item.dragItem.placeholder"
               @on-change="e=>inputChange(e,'placeholder')"/>
    </div>
    <div class="vf-control" v-if="this.center.list.length > 0">
      <label>{{$t('admin_right_btn25')}}</label>
      <i-input v-model="item.dragItem.className"
               @on-change="e=>inputChange(e,'className')">
      </i-input>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('javascript')!==-1">
      <label>{{$t('admin_right_btn23')}}</label>
      <codemirror :value="item.dragItem.code"
                  :options="javascript"
                  @input="newCode=>onCmCodeChange(newCode,'code')"/>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('html')!==-1">
      <label>{{$t('admin_right_btn23')}}</label>
      <codemirror :value="item.dragItem.code"
                  :options="html"
                  @input="newCode=>onCmCodeChange(newCode,'code')"/>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import {codemirror} from 'vue-codemirror';
  import 'codemirror/lib/codemirror.css';
  import 'codemirror/theme/material.css';

  export default {
    data(){
      return {
        html: {
          tabSize: 4,
          mode: 'text/html',
          theme: 'material',
          lineNumbers: true,
          line: true,
          lineWrapping: true,
        },
        javascript: {
          tabSize: 4,
          mode: 'text/javascript',
          theme: 'material',
          lineNumbers: true,
          line: true,
          lineWrapping: true,
        }
      }
    },
    components: {
      codemirror
    },
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
      onCmCodeChange(newCode, key) {
        let item = this.item;
        item.dragItem[key] = newCode;
      },
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
      numberChange(e,key){
        const value = e.target.value;
        let item = this.item;
        item.dragItem[key] = Number(value);
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
  .CodeMirror-vscrollbar{
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
  }
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
