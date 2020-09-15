<template>
  <div class="vf-text">{{content}}</div>
</template>
<script>
  import { findComponentUpward } from "../../utils";

  export default {
    data () {
      return {
        content: '',
        currentVal: this.value,
        parent: findComponentUpward (this, 'FormList')
      }
    },
    props: [ "value", "language" ],
    watch: {
      value (val) {
        this.currentVal = val;
      }
    },
    methods: {
      init () {
        if (this.currentVal.others.length) {
          if (this.currentVal.showStyle === 'string') {
            let result = ''
            this.currentVal.others.forEach (item => {
              result += this.parent.getData ()[item].toString ()
            })
            this.content = result
          }
          if (this.currentVal.showStyle === 'count') {
            let result = 0
            this.currentVal.others.forEach (item => {
              result += Number (this.parent.getData ()[item])
            })
            this.content = result
          }
        } else {
          this.content = '无'
        }
      },
    }
  }
</script>
<style lang="less">
  .vf-text {
    height: 32px;
    line-height: 32px;
  }
</style>
