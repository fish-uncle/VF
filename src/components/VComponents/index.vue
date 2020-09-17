<template>
  <transition name="fade">
    <div class="fn-clear vf-component pos-r"
         v-show="visible"
         transiton="fade"
         :class="[`vf-${type}-box`]"
         :style="{width:`${currentVal.width/24*100}%`}"
         @click="choose(index)">
      <label class="fn-fl vf-component-label"
             :class="currentVal.required?'has-required':''"
             :style="{width:`${currentLabelWidth}`,textAlign:currentLabelTextAlign}">
        {{currentVal[`title_${language}`]}}:
      </label>
      <div :style="{marginLeft:`${currentLabelWidth}`}">
        <component v-if="status==='edit'" :is="currentComponent" :value="currentVal" :language="language"
                   :error="error"></component>
        <span class="vf-component-read" v-if="status==='read'">{{parent.data[currentVal.key]}}</span>
      </div>
      <div v-if="error" class="pos-a vf-component-error-msg" :style="{left:`${currentVal.labelWidth+10}px`}">
        {{errorType==='required'?'该项为必填项':''}}
        {{errorType==='reg'?'该项格式不正确':''}}
      </div>
    </div>
  </transition>
</template>
<script>
  import { cssStyle2DomStyle, findComponentUpward } from '../../utils';

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
        type: '',
        errorType: ''
      }
    },
    computed: {
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
          return `${this.labelWidth}px`
        }
      }
    },
    props: [ "value", "index", 'language', 'status', 'labelWidth', 'labelTextAlign' ],
    watch: {
      value (val) {
        this.currentVal = val;
        this.id = this.currentVal.id;
        const type = cssStyle2DomStyle (this.currentVal.type);
        this.type = type;
        this.currentComponent = () => import(`../../func/form-${type}`)
        this.parent.childMounted ({
          errorHide: this.errorHide,
          errorShow: this.errorShow,
          visibleStatus: this.visibleStatus,
          show: this.show, hide: this.hide, init: this.init, id: this.id
        });
      }
    },
    mounted () {
      this.id = this.currentVal.id;
      const type = cssStyle2DomStyle (this.currentVal.type);
      this.type = type;
      this.currentComponent = () => import(`../../func/form-${type}`)
      this.parent.childMounted ({
        errorHide: this.errorHide,
        errorShow: this.errorShow,
        visibleStatus: this.visibleStatus,
        show: this.show, hide: this.hide, init: this.init, id: this.id
      });
    },
    methods: {
      visibleStatus () {
        return this.visible
      },
      errorShow (type) {
        this.error = true
        this.errorType = type
      },
      errorHide () {
        this.error = false
      },
      show () {
        this.visible = true;
      },
      hide () {
        this.visible = false;
      },
      init () {
        this.$children[0].init ();
      },
      del () {
        this.$destroy (true);
        this.$el.parentNode.removeChild (this.$el);
        this.$store.commit ('center/remove', { index: this.index });
        this.$store.commit ('right/changeTab', { tabIndex: 1 });
      },
      choose (index) {
        if (!this.edit)
          return
        this.$store.commit ('center/choose', { index });
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
  }

  .vf-javascript-box, .vf-divider-box, .vf-html-box, .vf-table-box {
    .vf-component-label {
      display: none;
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
