<template>
  <div>
    <div class="vf-control" v-if="item.changeList.indexOf('title')!==-1">
      <label>{{$t('admin_right_btn1')}}</label>
      <i-input v-model="item[`title_${language.lang}`]"
               @on-change="e=>inputChange(e,`title_${language.lang}`)"/>
    </div>
    <div class="vf-control" v-if="item.changeList.indexOf('labelTextAlign')!==-1">
      <label>{{$t('admin_right_btn2')}}</label>
      <RadioGroup v-model="item.labelTextAlign" type="button" size="large"
                  @on-change="value=>checkChange(value,'labelTextAlign')">
        <Radio label="left">{{$t('admin_right_btn2_1')}}</Radio>
        <Radio label="right">{{$t('admin_right_btn2_2')}}</Radio>
      </RadioGroup>
    </div>
    <div class="vf-control" v-if="item.changeList.indexOf('dashed')!==-1">
      <label>{{$t('admin_right_btn5')}}</label>
      <RadioGroup :value="item.dashed?1:0" type="button" size="large"
                  @on-change="value=>checkChange(!!value,'dashed')">
        <Radio :label="1">{{$t('admin_right_btn5_1')}}</Radio>
        <Radio :label="0">{{$t('admin_right_btn5_2')}}</Radio>
      </RadioGroup>
    </div>
    <div class="vf-control" v-if="item.changeList.indexOf('labelWidth')!==-1">
      <label>{{$t('admin_right_btn3')}}</label>
      <i-input v-model="item.labelWidth"
               @on-change="e=>numberChange(e,'labelWidth')"><span slot="append">px</span>
      </i-input>
    </div>
    <div class="vf-control" v-if="item.changeList.indexOf('widthRatio')!==-1">
      <label>{{$t('admin_right_btn4')}}</label>
      <Slider v-model="item.widthRatio" :max="100">
      </Slider>
    </div>
    <div class="vf-control" v-if="item.changeList.indexOf('width')!==-1">
      <label>{{$t('admin_right_btn26')}}</label>
      <Slider v-model="item.width" :max="24">
      </Slider>
    </div>
    <div class="vf-control" v-if="item.changeList.indexOf('placeholder')!==-1">
      <label>{{$t('admin_right_btn8')}}</label>
      <i-input v-model="item.placeholder"
               @on-change="e=>inputChange(e,'placeholder')"/>
    </div>
    <div class="vf-control" v-if="item.changeList.indexOf('className')!==-1">
      <label>{{$t('admin_right_btn25')}}</label>
      <i-input v-model="item.className"
               @on-change="e=>inputChange(e,'className')">
      </i-input>
    </div>
    <div class="vf-control" v-if="item.changeList.indexOf('props')!==-1">
      <label>props</label>
      <editor :value="propsVal" @input="value=>editorChange(value,'props')"
              @init="editorInit" lang="json" theme="javascript" height="100"></editor>
    </div>
    <div class="vf-control" v-if="item.changeList.indexOf('javascript')!==-1">
      <label>{{$t('admin_right_btn23')}}</label>
      <editor v-model="item.code"
              @init="editorInit" lang="html" theme="javascript" height="400"></editor>
    </div>
    <div class="vf-control" v-if="item.changeList.indexOf('html')!==-1">
      <label>{{$t('admin_right_btn23')}}</label>
      <editor v-model="item.code"
              @init="editorInit" lang="html" theme="chrome" height="400"></editor>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import { obj2Str, str2Obj } from '../../utils'

  export default {
    data () {
      return {
        html: {
          tabSize: 4,
          mode: 'text/html',
          inputStyle: 'contenteditable',
          theme: 'material',
          lineNumbers: true,
          line: true,
          lineWrapping: true,
        },
        javascript: {
          tabSize: 4,
          mode: 'javascript',
          inputStyle: 'contenteditable',
          theme: 'material',
          lineNumbers: true,
          line: true,
          lineWrapping: true,
        }
      }
    },
    computed: {
      ...mapState ([ "center", "language" ]),
      propsVal () {
        return obj2Str (this.item.props)
      },
      item () {
        if (this.center.list.length > 0) {
          return this.center.list[this.center.currentScale][this.center.current] ?
            this.center.list[this.center.currentScale][this.center.current] : { changeList: [] }
        } else {
          return { changeList: [] }
        }
      }
    },
    methods: {
      editorChange (value, key) {
        let item = this.item;
        try {
          item[key] = str2Obj (value)
        } catch (e) {

        }
      },
      onCmCodeChange (newCode, key) {
        let item = this.item;
        item[key] = newCode;
      },
      checkChange (value, key) {
        let item = this.item;
        item[key] = value;
      },
      numberChange (e, key) {
        const value = e.target.value;
        let item = this.item;
        item[key] = Number (value);
      },
      inputChange (e, key) {
        const value = e.target.value;
        let item = this.item;
        item[key] = value;
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

    .ivu-input-wrapper, .ivu-select {
      margin-bottom: 10px;
    }
  }
</style>
