<template>
  <div>
    <div class="vf-control" v-if="this.center.list.length > 0">
      <label>{{$t('admin_right_btn6')}}</label>
      <i-input v-model="item.dragItem.id" :disabled="true"/>
    </div>
    <div class="vf-control" v-if="this.center.list.length > 0">
      <label>{{$t('admin_right_btn7')}}</label>
      <i-input :value="item.dragItem.key"
               @on-change="e=>keyChange(e)" v-if="item.dragItem.dataType!=='Array'"/>
      <i-input :value="item.dragItem.key.split(';')[0]"
               @on-change="e=>dateRangeKeyChange(e,'0')" v-if="item.dragItem.dataType==='Array'"/>
      <i-input :value="item.dragItem.key.split(';')[1]"
               @on-change="e=>dateRangeKeyChange(e,'1')" v-if="item.dragItem.dataType==='Array'"/>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('placeholder')!==-1">
      <label>{{$t('admin_right_btn8')}}</label>
      <i-input v-model="item.dragItem.placeholder"
               @on-change="e=>inputChange(e,'placeholder')"/>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('format')!==-1">
      <label>{{$t('admin_right_btn24')}}</label>
      <i-input v-model="item.dragItem.format"
               @on-change="e=>inputChange(e,'format')"/>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('disabled')!==-1">
      <label>{{$t('admin_right_btn9')}}</label>
      <RadioGroup v-model="item.dragItem.disabled?1:0" type="button" size="large"
                  @on-change="value=>checkChange(!!value,'disabled')">
        <Radio :label="1">{{$t('admin_right_btn9_1')}}</Radio>
        <Radio :label="0">{{$t('admin_right_btn9_2')}}</Radio>
      </RadioGroup>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('required')!==-1">
      <label>{{$t('admin_right_btn10')}}</label>
      <RadioGroup v-model="item.dragItem.required?1:0" type="button" size="large"

                  @on-change="value=>checkChange(!!value,'required')">
        <Radio :label="1">{{$t('admin_right_btn10_1')}}</Radio>
        <Radio :label="0">{{$t('admin_right_btn10_2')}}</Radio>
      </RadioGroup>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('clearable')!==-1">
      <label>{{$t('admin_right_btn11')}}</label>
      <RadioGroup v-model="item.dragItem.clearable?1:0" type="button" size="large"

                  @on-change="value=>checkChange(!!value,'clearable')">
        <Radio :label="1">{{$t('admin_right_btn11_1')}}</Radio>
        <Radio :label="0">{{$t('admin_right_btn11_2')}}</Radio>
      </RadioGroup>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('alpha')!==-1">
      <label>{{$t('admin_right_btn12')}}</label>
      <RadioGroup v-model="item.dragItem.alpha?1:0" type="button" size="large"

                  @on-change="value=>checkChange(!!value,'alpha')">
        <Radio :label="1">{{$t('admin_right_btn12_1')}}</Radio>
        <Radio :label="0">{{$t('admin_right_btn12_2')}}</Radio>
      </RadioGroup>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('showText')!==-1">
      <label>{{$t('admin_right_btn13')}}</label>
      <RadioGroup v-model="item.dragItem.showText?1:0" type="button" size="large"

                  @on-change="value=>checkChange(!!value,'showText')">
        <Radio :label="1">{{$t('admin_right_btn13_1')}}</Radio>
        <Radio :label="0">{{$t('admin_right_btn13_2')}}</Radio>
      </RadioGroup>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('defaultSelectIndex')!==-1">
      <label>{{$t('admin_right_btn14')}}</label>
      <i-input v-model="item.dragItem.defaultSelectIndex"
               @on-change="e=>inputChange(e,'defaultSelectIndex')"/>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('character')!==-1">
      <label>{{$t('admin_right_btn15')}}</label>
      <i-input v-model="item.dragItem.character"
               @on-change="e=>inputChange(e,'character')"/>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('step')!==-1">
      <label>{{$t('admin_right_btn16')}}</label>
      <i-input v-model="item.dragItem.step"
               @on-change="e=>inputChange(e,'step')"/>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('max')!==-1">
      <label>{{$t('admin_right_btn17')}}</label>
      <i-input v-model="item.dragItem.max"
               @on-change="e=>inputChange(e,'max')"/>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('min')!==-1">
      <label>{{$t('admin_right_btn18')}}</label>
      <i-input v-model="item.dragItem.min"
               @on-change="e=>inputChange(e,'min')"/>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('selectList')!==-1">
      <label>{{$t('admin_right_btn19')}}</label>
      <RadioGroup v-model="tab" type="button" size="large">
        <Radio :label="1">{{$t('admin_right_btn19_1')}}</Radio>
        <Radio :label="2">{{$t('admin_right_btn19_2')}}</Radio>
      </RadioGroup>
      <ul class="select-list" v-if="tab===1">
        <li class="fn-flex flex-row">
          <span style="width: 205px">{{$t('admin_right_btn19_3')}}</span>
          <span>{{$t('admin_right_btn19_4')}}</span>
        </li>
        <li class="fn-flex flex-row" v-for="(child,index) in item.dragItem.selectList">
          <i-input style="width: 195px" v-model="child.title"

                   @on-change="e=>inputTitleChange(e,index)"/>
          <i-input style="width: 195px;margin-left: 10px;" v-model="child.value"

                   @on-change="e=>inputValueChange(e,index)"/>
          <span :class="item.dragItem.selectList.length>1?'':'disabled'" class="select-del text-center pointer"
                @click="selectDelChange(index)">-</span>
          <span class="select-add text-center pointer" @click="selectAddChange(index)">+</span>
        </li>
      </ul>
      <label v-if="tab===2" class="fn-block">{{$t('admin_right_btn19_5')}}</label>
      <i-input v-if="tab===2" v-model="item.dragItem.selectListUrl"
               @on-change="e=>selectListUrlChange(e,'selectListUrl')"/>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('regular')!==-1">
      <label>{{$t('admin_right_btn20')}}</label>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('controlOthersUpdate')!==-1">
      <label>{{$t('admin_right_btn21')}}</label>
      <Transfer
        not-found-text=""
        :data="componentList"
        :titles="[$t('admin_right_btn21_1'),$t('admin_right_btn21_2')]"
        :target-keys="item.dragItem.controlOthersUpdateTargetKeys"
        @on-change="controlOthersUpdateChange"></Transfer>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('controlOthersHide')!==-1">
      <label>{{$t('admin_right_btn22')}}</label>
      <ul>
        <li v-for="child in item.dragItem.ajaxList" v-if="item.dragItem.selectListUrl">
          <span>{{$t('admin_right_btn22_1')}} <strong>{{child.title}}</strong> {{$t('admin_right_btn22_2')}}</span>
          <Transfer
            not-found-text=""
            :data="componentList"
            :titles="[$t('admin_right_btn22_3'),$t('admin_right_btn22_4')]"
            :target-keys="item.dragItem.controlOthersHideTargetKeys[child.value]"
            @on-change="targetKeys=>controlOthersHideChange(targetKeys,child.value)"></Transfer>
        </li>
        <li v-for="child in item.dragItem.selectList" v-if="!item.dragItem.selectListUrl">
          <span>{{$t('admin_right_btn22_1')}} <strong>{{child.title}}</strong> {{$t('admin_right_btn22_2')}}</span>
          <Transfer
            not-found-text=""
            :data="componentList"
            :titles="[$t('admin_right_btn22_3'),$t('admin_right_btn22_4')]"
            :target-keys="item.dragItem.controlOthersHideTargetKeys[child.value]"
            @on-change="targetKeys=>controlOthersHideChange(targetKeys,child.value)"></Transfer>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex';

  export default {
    data() {
      return {
        tab: 1,
      }
    },
    computed: {
      ...mapState(["center",'language']),
      item() {
        if (this.center.list.length > 0) {
          return this.center.list[this.center.current]
        } else {
          return {dragItem: {changeList: []}}
        }
      },
      componentList() {
        let mockData = [];
        for (let i = 0; i <= this.center.list.length - 1; i++) {
          if (this.item.dragItem.id !== this.center.list[i].dragItem.id && !this.center.list[i].dragItem.business) {
            mockData.push({
              key: this.center.list[i].dragItem.id,
              label: this.center.list[i].dragItem[`title_${this.language.lang}`],
            });
          }
        }
        return mockData;
      }
    },
    methods: {
      selectListUrlChange(e, key) {
        const value = e.target.value;
        let item = this.item;
        item.dragItem[key] = value;
        this.$agent.$once({type: 'componentInit'})
      },
      controlOthersHideChange(targetKeys, value) {
        let item = this.item;
        if (item.dragItem.business) return;
        const obj = Object.assign({}, item.dragItem.controlOthersHideTargetKeys);
        obj[value] = targetKeys;
        item.dragItem.controlOthersHideTargetKeys = obj;
      },
      controlOthersUpdateChange(targetKeys) {
        let item = this.item;
        if (item.dragItem.business) return;
        item.dragItem.controlOthersUpdateTargetKeys = targetKeys;
      },
      inputValueChange(e, index) {
        const value = e.target.value;
        let item = this.item;
        item.dragItem.selectList[index].value = value;
      },
      inputTitleChange(e, index) {
        const value = e.target.value;
        let item = this.item;
        item.dragItem.selectList[index].title = value;
      },
      selectDelChange(index) {
        let item = this.item;
        if (item.dragItem.selectList.length > 1) {
          item.dragItem['selectList'].splice(index, 1)
        }
      },
      selectAddChange(index) {
        let item = this.item;
        item.dragItem['selectList'].splice(index + 1, 0, {title: '新建项标题', value: '新建项值'})
        if (item.dragItem.selectList.length > 10 && item.h < 3) {
          item.h = 3;
        }
      },
      checkChange(value, key) {
        let item = this.item;
        item.dragItem[key] = value;
      },
      dateRangeKeyChange(e, key) {
        const value = e.target.value;
        let item = this.item;
        const data = this.center.data;
        let keyValue;
        if (key === '0') {
          keyValue = data[item.dragItem.key.split(';')[0]];
          delete data[item.dragItem.key.split(';')[0]];
          item.dragItem.key = value + ';' + item.dragItem.key.split(';')[1];
        }
        if (key === '1') {
          keyValue = data[item.dragItem.key.split(';')[1]];
          delete data[item.dragItem.key.split(';')[1]];
          item.dragItem.key = item.dragItem.key.split(';')[0] + ';' + value;
        }
        data[value] = keyValue;
      },
      keyChange(e) {
        const value = e.target.value;
        let item = this.item;
        const data = this.center.data;
        const keyValue = data[item.dragItem.key];
        delete data[item.dragItem.key];
        item.dragItem.key = value;
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
    .ivu-radio-group-button {
      display: block;
      margin-bottom: 10px;
    }

    .ivu-radio-wrapper {
      width: 50%;
      text-align: center;
    }

    .ivu-radio-group-button .ivu-radio-wrapper-checked {
      background: #2d8cf0;
      color: #fff;
    }

    .select-list {
      max-height: 251px;
      overflow-y: auto;
    }

    .select-del, .select-add {
      height: 36px;
      line-height: 36px;
      border: 1px solid @themeColor;
      transition: all .3s;
      color: @themeColor;
      width: 36px;
      user-select: none;
      font-size: 18px;
      border-radius: 4px;

      &:hover {
        background: @themeColor;
        color: #fff;
      }

      &.disabled {
        border: 1px solid #ddd;
        color: #ddd;
        background: @disabledColor;
      }
    }

    .select-del {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
</style>
