<template>
  <div class="fn-clear vf-component pos-r"
       v-show="visible"
       :class="[`vf-${type}-box`]"
       :style="{width:`${currentVal.width/24*100}%`}">
    <label class="fn-fl vf-component-label"
           :class="[currentRequired?'has-required':'',currentLabelWidth==='0px'?'fn-hide':'']"
           :style="{width:`${currentLabelWidth}`,textAlign:currentLabelTextAlign}">
      {{currentTitle}}:
    </label>
    <div class="vf-component-content" :style="{marginLeft:`${currentLabelWidth}`}">
      <component v-if="status==='edit'" :is="currentComponent" :value="currentVal" :language="language"
                 :status="status"
                 :error="error"></component>
      <component v-if="status==='read'" :is="readComponent" :value="currentVal" :language="language" :status="status"></component>
    </div>
    <div v-if="error && status==='edit' " class="pos-a vf-component-error-msg"
         :style="{left:`${currentVal.labelWidth+10}px`}">
      {{errorMsg}}
    </div>
  </div>
</template>
<script>
  import { cssStyle2DomStyle, findComponentUpward } from '../../utils'

  export default {
    name: 'FormComponents',
    data () {
      return {
        parent: findComponentUpward (this, 'FormList'),
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
    computed: {
      currentRequired () {
        return this.currentVal.rules ? this.currentVal.rules.required : false
      },
      currentTitle () {
        if (this.currentVal.title) {
          return this.currentVal.title
        }
        if (this.currentVal[`title_${this.language}`]) {
          return this.currentVal[`title_${this.language}`]
        }
      },
      currentLabelTextAlign () {
        if (this.currentVal.labelTextAlign) {
          return this.currentVal.labelTextAlign
        } else {
          return this.labelTextAlign
        }
      },
      currentLabelWidth () {
        if (this.currentVal.labelWidth) {
          return `${this.currentVal.labelWidth}px`
        } else {
          if (typeof this.currentVal.labelWidth === 'number') {
            return `${this.currentVal.labelWidth}px`
          } else {
            return `${this.labelWidth}px`
          }
        }
      }
    },
    props: {
      value: {}, status: {}, labelWidth: {}, labelTextAlign: {}, props: {},
      language: {
        default: 'zh'
      }
    },
    watch: {
      value (val) {
        this.currentVal = val;
        this.id = this.currentVal.id;
        const type = cssStyle2DomStyle (this.currentVal.type);
        this.type = type;
        this.currentComponent = () => import(`../../func/form-${type}`)
        this.readComponent = () => import(`../../func/form-${type}/read`)
        if (parent) {
          this.parent.childMounted ({
            key: this.currentVal.key,
            errorHide: this.errorHide,
            errorShow: this.errorShow,
            visibleStatus: this.visibleStatus,
            show: this.show, hide: this.hide, update: this.update, id: this.id
          });
        }
      }
    },
    mounted () {
      this.id = this.currentVal.id;
      const type = cssStyle2DomStyle (this.currentVal.type);
      this.type = type;
      this.currentComponent = () => import(`../../func/form-${type}`)
      this.readComponent = () => import(`../../func/form-${type}/read`)
      if (parent) {
        this.parent.childMounted ({
          key: this.currentVal.key,
          errorHide: this.errorHide,
          errorShow: this.errorShow,
          visibleStatus: this.visibleStatus,
          show: this.show, hide: this.hide, update: this.update, id: this.id
        });
      }
    },
    methods: {
      visibleStatus () {
        return this.visible
      },
      errorShow (msg) {
        this.error = true
        this.errorMsg = msg
      },
      errorHide () {
        this.error = false
      },
      show () {
        this.visible = true
      },
      hide () {
        this.visible = false
      },
      update () {
        this.$children[0].update ()
      }
    }
  }
</script>
<style lang="less">
  @import "../../less/conf";

  .vf-component-error-msg {
    color: @error-color;
  }

  .vf-component-read {
    font-size: 14px;
    line-height: 32px;
    word-break: break-all;
  }

  .vf-javascript-box, .vf-divider-box, .vf-html-box, .vf-table-box {
    .vf-component-label {
      display: none;
    }

    .vf-component-content {
      margin-left: 0 !important;
    }
  }

  .vf-javascript-box {
    display: none;
  }

  .vf-component {
    border: 2px solid rgba(0, 0, 0, 0);
    border-radius: 4px;
    padding: 10px;
    transition: all .3s;

    &.vf-component-error {

    }

    .vf-component-label {
      font-size: 14px;
      padding-right: 10px;
      color: rgba(0, 0, 0, .65);
      line-height: 32px;

      &.has-required {
        &:before {
          content: '*';
          color: @error-color;
        }
      }
    }
  }
</style>
