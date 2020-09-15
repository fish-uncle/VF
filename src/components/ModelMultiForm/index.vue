<template>
  <Modal v-model="model.multiFormVisible" :closable="false" :footer-hide="true" :scrollable="true">
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
  </Modal>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState ([ 'model', 'center' ]),
    methods: {
      selectDelChange (index) {
        this.$store.commit ('center/multiFormChangeDel', { index })
        localStorage.removeItem (this.center.multiForm[index].key)
      },
      selectAddChange () {
        const key = Math.random (5).toString (32).replace ('0.', '')
        this.$store.commit ('center/multiFormChangeAdd', { key })
        localStorage.setItem (`form${key}`, JSON.stringify ({ list: [ [], [] ], viewScale: '12:12' }))
      },
      inputValueChange (e, index) {
        const value = e.target.value
        this.$store.commit ('center/multiFormChangeName', { index, value })
      }
    }
  }
</script>
<style lang="less">
  @import "../../less/conf";
</style>
