<template>
  <div class="vf-text">{{text}}</div>
</template>
<script>
  import func from '../../mixins/func'

  export default {
    mixins: [func],
    computed: {
      text() {
        const arr = this.currentVal.code.match(/(\$\{[0-9a-zA-Z_]*})/g)
        const split = this.currentVal.code.split(/(\$\{[0-9a-zA-Z_]*})/g)
        if (arr) {
          const data = this.parent.data
          let result_s = '', result_n = 0
          if (this.currentVal.showStyle === 'count') {
            arr.forEach(item => {
              const i = item.replace(/[${}]/g, '')
              if (i) {
                const child = this.parent.child[i]
                const key = child.key
                const d = data[key]
                if (child && d) {
                  result_n += Number(d)
                }
              }
            })
            return result_n
          }
          if (this.currentVal.showStyle === 'string') {
            split.forEach(item => {
              if (/(\$\{[0-9a-zA-Z_]*})/g.test(item)) {
                const i = item.replace(/[${}]/g, '')
                if (i) {
                  const child = this.parent.child[i]
                  const key = child.key
                  const d = data[key]
                  if (child && d) {
                    result_s += d.toString()
                  }
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
