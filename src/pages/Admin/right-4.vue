<template>
  <div>
    <div class="vf-control">
      <label>{{$t('admin_right_btn3')}}</label>
      <i-input v-model="center.labelWidth"
               @on-change="numberChange"><span slot="append">px</span>
      </i-input>
    </div>
    <div class="vf-control">
      <label>{{$t('admin_right_btn2')}}</label>
      <RadioGroup v-model="center.labelTextAlign" type="button" size="large"
                  @on-change="checkChange">
        <Radio label="left">{{$t('admin_right_btn2_1')}}</Radio>
        <Radio label="right">{{$t('admin_right_btn2_2')}}</Radio>
      </RadioGroup>
    </div>
    <div class="vf-control">
      <label>{{$t('multiform1')}}</label>
      <i-switch v-model="center.multiForm.length>1"/>
      <ul class="vf-select-list">
        <li class="fn-flex flex-row">
          <span style="width: 205px">{{$t('multiform2')}}</span>
          <span>{{$t('multiform3')}}</span>
        </li>
        <li class="fn-flex flex-row" v-for="(item ,index) in center.multiForm">
          <i-input style="width: 195px" v-model="item.key" :disabled="true"/>
          <i-input style="width: 195px;margin-left: 10px;" :value="item.name"
                   @on-change="e=>inputValueChange(e,index)"/>
          <span class="vf-select-del text-center pointer"
                :class="Object.keys(center.multiForm).length===1?'disabled':''"
                @click="selectDelChange(index)">-</span>
          <span class="vf-select-add text-center pointer"
                @click="selectAddChange">+</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState ([ 'center' ]),
    },
    methods: {
      checkChange (value) {
        this.$store.commit ('center/labelTextAlignChange', { labelTextAlign: value })
      },
      numberChange (e) {
        this.$store.commit ('center/labelWidthChange', { labelWidth: e.target.value })
      },
      selectDelChange (index) {
        localStorage.removeItem (this.center.multiForm[index].key)
        this.$store.commit ('center/multiFormChangeDel', { index })
      },
      selectAddChange () {
        const key = Math.random (5).toString (32).replace ('0.', '')
        this.$store.commit ('center/multiFormChangeAdd', { key: `form${key}` })
        localStorage.setItem (`form${key}`, JSON.stringify ({ list: [ [], [] ], viewScale: '12:12' }))
        console.log (this.center.multiForm)
      },
      inputValueChange (e, index) {
        const value = e.target.value
        this.$store.commit ('center/multiFormChangeName', { index, value })
      }
    }
  }
</script>