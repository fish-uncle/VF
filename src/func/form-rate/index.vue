<template>
  <Rate v-model="parent.data[currentVal.dragItem.key]"
        class="f-rate"
        :class="[currentVal.dragItem.className]"
        :character="currentVal.dragItem.character"
        :clearable="currentVal.dragItem.clearable"
        :allow-half="true"
        :show-text="currentVal.dragItem.showText"
        :disabled="currentVal.dragItem.disabled" @on-change="clickChange">
  </Rate>
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
      clickChange (value) {
        this.parent.changeData ({
          value,
          key: this.currentVal.dragItem.key
        })
      }
    }
  }
</script>
