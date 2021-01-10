<template>
  <span class="vf-component-read">{{address}}</span>
</template>
<script>
  import {findComponentUpward} from '../../../utils'

  export default {
    data() {
      return {
        currentVal: this.value,
        parent: findComponentUpward(this, 'FormList')
      }
    },
    computed: {
      address() {
        if (this.parent.data[this.currentVal.key].length) {
          return ` 经度${this.parent.data[this.currentVal.key][0]},纬度${this.parent.data[this.currentVal.key][1]}`
        } else {
          return ''
        }
      }
    },
    props: ['value'],
    watch: {
      value(val) {
        this.currentVal = val;
      }
    },
  }
</script>
