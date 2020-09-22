import {cssStyle2DomStyle, findComponentUpward} from '../utils'

export default {
  data() {
    return {
      parent: findComponentUpward(this, 'FormList'),
      currentVal: this.value,
      id: null,
      visible: true,
      error: false,
      currentComponent: null,
      readComponent: null,
      type: '',
      errorMsg: ''
    }
  },
  props: {
    index: {},
    value: {}, status: {}, labelWidth: {}, labelTextAlign: {}, props: {},
    language: {
      default: 'zh'
    }
  },
  mounted() {
    this.id = this.currentVal.id
    const type = cssStyle2DomStyle(this.currentVal.type)
    this.type = type
    this.currentComponent = () => import(`../func/form-${type}`)
    this.readComponent = () => import(`../func/form-${type}/read`)
    if (this.parent) {
      this.parent.childMounted({
        key: this.currentVal.key,
        errorHide: this.errorHide,
        errorShow: this.errorShow,
        visibleStatus: this.visibleStatus,
        show: this.show, hide: this.hide, update: this.update, id: this.id
      })
    }
  },
  computed: {
    currentRequired() {
      return this.currentVal.rules ? this.currentVal.rules.required : false
    },
    currentLabelTextAlign() {
      if (this.currentVal.labelTextAlign) {
        return this.currentVal.labelTextAlign
      } else {
        return this.labelTextAlign
      }
    },
    currentLabelWidth() {
      if (this.currentVal.labelWidth) {
        return `${this.currentVal.labelWidth}px`
      } else {
        if (typeof this.currentVal.labelWidth === 'number') {
          return `${this.currentVal.labelWidth}px`
        } else {
          return `${this.labelWidth}px`
        }
      }
    },
    currentTitle() {
      if (this.currentVal.title) {
        return this.currentVal.title
      }
      if (this.currentVal[`title_${this.language}`]) {
        return this.currentVal[`title_${this.language}`]
      }
    }
  },
  methods: {
    visibleStatus() {
      return this.visible
    },
    errorShow(msg) {
      this.error = true
      this.errorMsg = msg
    },
    errorHide() {
      this.error = false
    },
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
    },
    update() {
      this.$children[0].update()
    }
  }
}