<template>
  <Time-picker class="f-date-picker" type="time" v-model="parent.data[currentVal.dragItem.key]"
               :class="[currentVal.dragItem.className]"
               :style="{width:`${currentVal.dragItem.widthRatio}%`}"
               :clearable="currentVal.dragItem.clearable"
               :placeholder="currentVal.dragItem.placeholder"
               :format="currentVal.dragItem.timeFormat"
               @on-change="dateChange"
               :disabled="currentVal.dragItem.disabled"/>
</template>
<script>
  import { findComponentUpward } from "../../utils";

  export default {
    data () {
      return {
        currentVal: this.value,
        parent: findComponentUpward (this, 'FormList')
      }
    },
    props: [ "value" ],
    watch: {
      value (val) {
        this.currentVal = val;
      }
    },
    methods: {
      init () {
        this.parent.changeData ({
          value: '',
          key: this.currentVal.dragItem.key
        })
      },
      dateChange (value) {
        this.parent.changeData ({
          value,
          key: this.currentVal.dragItem.key
        })
      }
    }
  }
</script>
