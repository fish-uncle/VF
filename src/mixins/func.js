import {findComponentUpward} from '../utils'

export default {
  data() {
    return {
      parent: findComponentUpward(this, 'FormList'), // form
      currentVal: this.value, // 当前配置
      timeout: null, // 防抖
      isMounted: false
    }
  },
  props: ['value', 'error', 'language', 'edit', 'status'],
  watch: {
    value(val) {
      this.currentVal = val
    }
  },
  mounted() {
    this.isMounted = true
  },
  methods: {
    // 默认更新事件
    update() {
    },
  }
}