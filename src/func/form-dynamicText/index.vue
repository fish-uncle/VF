<template>
  <div class="vf-text">{{text}}</div>
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
    computed: {
      text () {
        const arr = this.currentVal.code.match (/(\$\{[0-9a-zA-Z_]*})/g)
        const split = this.currentVal.code.split (/(\$\{[0-9a-zA-Z_]*})/g)
        if (arr) {
          const data = this.parent.data
          let result_s = '', result_n = 0
          if (this.currentVal.showStyle === 'count') {
            arr.forEach (item => {
              const i = item.replace (/[${}]/g, '')
              if (i) {
                const key = this.parent.child[i].key
                result_n += Number (data[key])
              }
            })
            return result_n
          }
          if (this.currentVal.showStyle === 'string') {
            split.forEach (item => {
              if (/(\$\{[0-9a-zA-Z_]*})/g.test (item)) {
                const i = item.replace (/[${}]/g, '')
                if (i) {
                  const key = this.parent.child[i].key
                  result_s += data[key].toString () || '--'
                }
              } else {
                result_s += item
              }
            })
            return result_s
          }
        } else {
          return '无'
        }
      }
    },
  }
</script>
<style lang="less">
  .vf-text {
    height: 32px;
    line-height: 32px;
  }
</style>
