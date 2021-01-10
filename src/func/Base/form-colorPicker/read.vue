<template>
  <span class="vf-component-read"
        :style="{background:color,width:'18px',height:'18px',display:'inline-block',marginTop:'7px'}"></span>
</template>
<script>
  import { findComponentUpward } from '../../../utils'

  export default {
    data () {
      return {
        currentVal: this.value,
        parent: findComponentUpward (this, 'FormList')
      }
    },
    props: [ 'value' ],
    computed: {
      color () {
        return this.parent.data[this.currentVal.key]
      }
    },
    watch: {
      value (val) {
        this.currentVal = val;
      }
    },
  }
</script>
