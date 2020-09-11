<template>
  <Date-picker class="f-date-range"
               :class="[currentVal.dragItem.className]"
               :style="{width:`${currentVal.dragItem.widthRatio}%`}"
               type="daterange"
               v-model="parent.data[currentVal.dragItem.key]"
               :placeholder="currentVal.dragItem.placeholder"
               :format="currentVal.dragItem.timeFormat"
               :clearable="currentVal.dragItem.clearable"
               @on-change="dateChange"
               :disabled="currentVal.dragItem.disabled"/>
</template>
<script>
  import { findComponentUpward } from "../../utils";

  export default {
    data () {
      return {
        currentVal: this.value,
        parent: findComponentUpward (this, 'FormList'),
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
          key: this.currentVal.dragItem.key.split (';')[0]
        })
        this.parent.changeData ({
          value: '',
          key: this.currentVal.dragItem.key.split (';')[1]
        })
        this.parent.changeData ({
          value: [],
          key: this.currentVal.dragItem.key
        })
      },
      dateChange (value) {
        this.parent.changeData ({
          value: value[0],
          key: this.currentVal.dragItem.key.split (';')[0]
        })
        this.parent.changeData ({
          value: value[1],
          key: this.currentVal.dragItem.key.split (';')[1]
        })
        this.parent.changeData ({
          value: value,
          key: this.currentVal.dragItem.key
        })
      }
    }
  }
</script>
