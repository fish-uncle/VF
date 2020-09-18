<template>
  <span class="vf-component-read">{{selectList[parent.data[currentVal.key]]}}</span>
</template>
<script>
  import { findComponentUpward } from '../../utils'

  export default {
    data () {
      return {
        currentVal: this.value,
        parent: findComponentUpward (this, 'FormList')
      }
    },
    props: [ 'value' ],
    computed: {
      selectList () {
        let obj = {}
        if (this.currentVal.selectListUrl) {
          this.currentVal.ajaxList.forEach (item => {
            obj[item.value] = item.label
          })
        } else {
          this.currentVal.selectList.forEach (item => {
            obj[item.value] = item.label
          })
        }
        return obj
      }
    },
    watch: {
      value (val) {
        this.currentVal = val;
      }
    },
  }
</script>