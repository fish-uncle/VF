<template>
  <div>
    <div class="vf-control" v-if="item.changeList.indexOf('rules')!==-1">
      <label>{{$t('admin_right_btn10')}}</label>
      <RadioGroup :value="requiredVal" type="button" size="large"
                  @on-change="requiredChange">
        <Radio :label="1">{{$t('admin_right_btn10_1')}}</Radio>
        <Radio :label="0">{{$t('admin_right_btn10_2')}}</Radio>
      </RadioGroup>
    </div>
    <div class="vf-control" v-if="item.changeList.indexOf('rules')!==-1">
      <label>{{$t('admin_right_btn32')}}</label>
      <i-select :clearable="true"
                v-model="item.rules.pattern"
                @on-change="ruleChange">
        <i-option value="^1[3456789]\d{9}$">手机号</i-option>
        <i-option value="^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$">邮箱</i-option>
        <i-option value="^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$">
          身份证
        </i-option>
        <i-option value="^[1-9]\d*$">正整数</i-option>
        <i-option value="^-[1-9]\d*$">负整数</i-option>
        <i-option value="^-?[1-9]\d*$">整数</i-option>
        <i-option value="^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$">正浮点数</i-option>
        <i-option value="^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$">负浮点数</i-option>
        <i-option value="^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$">浮点数</i-option>
      </i-select>
      <i-input v-model="item.rules.pattern" v-if="item.changeList.indexOf('rules')!==-1" :disabled="true"/>
      <editor :value="rulesVal" v-if="item.changeList.indexOf('rules')!==-1" @init="editorInit" lang="json"
              @input="editorChange" theme="javascript" height="400"></editor>
    </div>
    <div class="vf-control" v-if="item.changeList.indexOf('clearable')!==-1">
      <label>{{$t('admin_right_btn11')}}</label>
      <RadioGroup :value="item.clearable?1:0" type="button" size="large"

                  @on-change="value=>checkChange(!!value,'clearable')">
        <Radio :label="1">{{$t('admin_right_btn11_1')}}</Radio>
        <Radio :label="0">{{$t('admin_right_btn11_2')}}</Radio>
      </RadioGroup>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import { obj2Str, str2Obj } from '../../utils'

  export default {
    computed: {
      ...mapState ([ 'center', 'language' ]),
      requiredVal(){
        return this.item.rules.required?1:0
      },
      rulesVal () {
        return obj2Str (this.item.rules)
      },
      item () {
        if (this.center.list[this.center.currentScale][this.center.current]) {
          return this.center.list[this.center.currentScale][this.center.current]
        } else {
          return { changeList: [] }
        }
      },
    },
    methods: {
      editorChange: function (value) {
        let item = this.item;
        try {
          item.rules = str2Obj (value);
        } catch (e) {
        }
      },
      ruleChange (value) {
        let item = this.item;
        item.rules.pattern = value
      },
      requiredChange (value) {
        let item = this.item
        item.rules.required = !!value
      },
      checkChange (value, key) {
        let item = this.item;
        item[key] = value;
      },
      inputChange (e, key) {
        const value = e.target.value;
        let item = this.item;
        item[key] = value;
      }
    }
  }
</script>
