<template>
  <div>
    <div class="vf-control">
      <label>字段id</label>
      <i-input v-model="item.dragItem.id" :disabled="true"/>
    </div>
    <div class="vf-control" v-if="item.dragItem.type!=='divider'">
      <label>字段标识</label>
      <i-input :value="item.dragItem.key"
               @on-change="e=>keyChange(e)" v-if="item.dragItem.type!=='dateRange'"/>
      <i-input :value="item.dragItem.key.split(';')[0]"
               @on-change="e=>dateRangeKeyChange(e,'0')" v-if="item.dragItem.type==='dateRange'"/>
      <i-input :value="item.dragItem.key.split(';')[1]"
               @on-change="e=>dateRangeKeyChange(e,'1')" v-if="item.dragItem.type==='dateRange'"/>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('placeholder')!==-1">
      <label>组件提示字</label>
      <i-input v-model="item.dragItem.placeholder"
               @on-change="e=>inputChange(e,'placeholder')"/>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('disabled')!==-1">
      <label>组件禁用</label>
      <RadioGroup v-model="item.dragItem.disabled?1:0" type="button" size="large"
                  @on-change="value=>checkChange(!!value,'disabled')">
        <Radio :label="1">禁用</Radio>
        <Radio :label="0">可用</Radio>
      </RadioGroup>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('required')!==-1">
      <label>是否必填</label>
      <RadioGroup v-model="item.dragItem.required?1:0" type="button" size="large"

                  @on-change="value=>checkChange(!!value,'required')">
        <Radio :label="1">是</Radio>
        <Radio :label="0">否</Radio>
      </RadioGroup>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('clearable')!==-1">
      <label>是否可以清除值</label>
      <RadioGroup v-model="item.dragItem.clearable?1:0" type="button" size="large"

                  @on-change="value=>checkChange(!!value,'clearable')">
        <Radio :label="1">是</Radio>
        <Radio :label="0">否</Radio>
      </RadioGroup>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('alpha')!==-1">
      <label>是否支持透明度选择</label>
      <RadioGroup v-model="item.dragItem.alpha?1:0" type="button" size="large"

                  @on-change="value=>checkChange(!!value,'alpha')">
        <Radio :label="1">是</Radio>
        <Radio :label="0">否</Radio>
      </RadioGroup>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('showText')!==-1">
      <label>是否显示提示文字</label>
      <RadioGroup v-model="item.dragItem.showText?1:0" type="button" size="large"

                  @on-change="value=>checkChange(!!value,'showText')">
        <Radio :label="1">是</Radio>
        <Radio :label="0">否</Radio>
      </RadioGroup>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('defaultSelectIndex')!==-1">
      <label>默认选择项（第几项）</label>
      <i-input v-model="item.dragItem.defaultSelectIndex"
               @on-change="e=>inputChange(e,'defaultSelectIndex')"/>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('character')!==-1">
      <label>自定义字符</label>
      <i-input v-model="item.dragItem.character"
               @on-change="e=>inputChange(e,'character')"/>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('step')!==-1">
      <label>步长</label>
      <i-input v-model="item.dragItem.step"
               @on-change="e=>inputChange(e,'step')"/>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('max')!==-1">
      <label>最大值</label>
      <i-input v-model="item.dragItem.max"
               @on-change="e=>inputChange(e,'max')"/>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('min')!==-1">
      <label>最小值</label>
      <i-input v-model="item.dragItem.min"
               @on-change="e=>inputChange(e,'min')"/>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('selectList')!==-1">
      <label>选择项配置</label>
      <RadioGroup v-model="tab" type="button" size="large">
        <Radio :label="1">选择项配置</Radio>
        <Radio :label="2">选择项数据地址</Radio>
      </RadioGroup>
      <ul class="select-list" v-if="tab===1">
        <li class="fn-flex flex-row">
          <span style="width: 205px">项标题</span>
          <span>项值</span>
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
      <label v-if="tab===2" class="fn-block">配置数据地址后，选择项配置将失效</label>
      <i-input v-if="tab===2" v-model="item.dragItem.selectListUrl"
               @on-change="e=>selectListUrlChange(e,'selectListUrl')"/>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('regular')!==-1">
      <label>正则校验</label>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('controlOthersUpdate')!==-1">
      <label>控制其他组件更新</label>
      <Transfer
        not-found-text=""
        :data="componentList"
        :titles="['所有组件','需要更新的组件']"
        :target-keys="item.dragItem.controlOthersUpdateTargetKeys"
        @on-change="controlOthersUpdateChange"></Transfer>
    </div>
    <div class="vf-control" v-if="item.dragItem.changeList.indexOf('controlOthersHide')!==-1">
      <label>控制其他组件隐藏</label>
      <ul>
        <li v-for="child in item.dragItem.ajaxList" v-if="item.dragItem.selectListUrl">
          <span>选择 <strong>{{child.title}}</strong> 时需要隐藏的组件</span>
          <Transfer
            not-found-text=""
            :data="componentList"
            :titles="['所有组件','需要隐藏的组件']"
            :target-keys="item.dragItem.controlOthersHideTargetKeys[child.value]"
            @on-change="targetKeys=>controlOthersHideChange(targetKeys,child.value)"></Transfer>
        </li>
        <li v-for="child in item.dragItem.selectList" v-if="!item.dragItem.selectListUrl">
          <span>选择 <strong>{{child.title}}</strong> 时需要隐藏的组件</span>
          <Transfer

            not-found-text=""
            :data="componentList"
            :titles="['所有组件','需要隐藏的组件']"
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
        tab: 2
      }
    },
    computed: {
      ...mapState(["center"]),
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
          if (this.item.dragItem.id !== this.center.list[i].dragItem.id &&
            this.center.list[i].dragItem.type !== 'divider') {
            mockData.push({
              key: this.center.list[i].dragItem.id,
              label: this.center.list[i].dragItem.title,
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
