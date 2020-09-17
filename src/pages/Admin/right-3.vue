<template>
  <div>
    <div class="vf-control" v-if="item.changeList.indexOf('required')!==-1">
      <label>{{$t('admin_right_btn10')}}</label>
      <RadioGroup v-model="item.required?1:0" type="button" size="large"

                  @on-change="value=>checkChange(!!value,'required')">
        <Radio :label="1">{{$t('admin_right_btn10_1')}}</Radio>
        <Radio :label="0">{{$t('admin_right_btn10_2')}}</Radio>
      </RadioGroup>
    </div>
    <div class="vf-control" v-if="item.changeList.indexOf('reg')!==-1">
      <label>{{$t('admin_right_btn32')}}</label>
      <RadioGroup v-model="item.reg?1:0" type="button" size="large"

                  @on-change="value=>checkChange(!!value,'reg')">
        <Radio :label="1">{{$t('admin_right_btn10_1')}}</Radio>
        <Radio :label="0">{{$t('admin_right_btn10_2')}}</Radio>
      </RadioGroup>
    </div>
    <div class="vf-control" v-if="item.changeList.indexOf('reg')!==-1 && item.reg">
      <i-select :clearable="true"
                v-model="item.regular"
                @on-change="e=>selectChange(e,'regular')">
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
      <i-input v-model="item.regular"/>
    </div>
    <div class="vf-control" v-if="item.changeList.indexOf('clearable')!==-1">
      <label>{{$t('admin_right_btn11')}}</label>
      <RadioGroup v-model="item.clearable?1:0" type="button" size="large"

                  @on-change="value=>checkChange(!!value,'clearable')">
        <Radio :label="1">{{$t('admin_right_btn11_1')}}</Radio>
        <Radio :label="0">{{$t('admin_right_btn11_2')}}</Radio>
      </RadioGroup>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState ([ 'center', 'language' ]),
      item () {
        if (this.center.list[this.center.currentScale][this.center.current]) {
          return this.center.list[this.center.currentScale][this.center.current]
        } else {
          return { changeList: [] }
        }
      },
    },
    methods: {
      selectChange (value, key) {
        let item = this.item;
        item[key] = value;
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
