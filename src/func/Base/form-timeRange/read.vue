<template>
  <span class="vf-component-read">{{date}}</span>
</template>
<script>
  import { findComponentUpward } from '../../../utils'
  import { format } from 'date-fns'

  export default {
    data () {
      return {
        currentVal: this.value,
        parent: findComponentUpward (this, 'FormList')
      }
    },
    props: [ 'value' ],
    computed: {
      date () {
        let date = [], dateSting = ''
        if (this.parent.data[this.currentVal.key].length) {
          this.parent.data[this.currentVal.key].forEach (item => {
            if (item) {
              if (typeof item === 'string') {
                date.push (item)
              } else {
                date.push (format (item, 'hh\'mm\'ss'))
              }
            }
          })
        }
        if (date.length) {
          dateSting = `从${date[0]}至${date[1]}`
        }
        return dateSting
      }
    },
    watch: {
      value (val) {
        this.currentVal = val;
      }
    },
  }
</script>
