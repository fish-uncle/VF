<template>
  <transition name="fade">
    <div class="fn-clear vf-component pos-r"
         v-show="visible"
         transiton="fade"
         :class="[`vf-${type}-box`]"
         :style="{width:`${currentVal.dragItem.width}%`}"
         @click="choose(index)">
      <label class="fn-fl vf-component-label"
             :class="currentVal.dragItem.required?'has-required':''"
             :style="{width:`${currentVal.dragItem.labelWidth}px`,textAlign:currentVal.dragItem.labelTextAlign}">
        {{currentVal.dragItem[`title_${language}`]}}:
      </label>
      <div :style="{marginLeft:`${currentVal.dragItem.labelWidth}px`}">
        <component :is="currentComponent" :value="currentVal" :language="language"></component>
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
        currentComponent: null,
        type: ''
      }
    },
    props: [ "value", "index", 'edit', 'language' ],
    watch: {
      value (val) {
        this.currentVal = val;
      }
    },
    mounted () {
      this.id = this.currentVal.dragItem.id;
      const type = cssStyle2DomStyle (this.currentVal.dragItem.type);
      this.type = type;
      this.currentComponent = () => import(`../../func/form-${type}`)
      if (this.edit) {
        this.$agent.$on ('componentInit', this.init)
      }
      this.parent.childMounted ({
        show: this.show, hide: this.hide, init: this.init, id: this.id
      });
    },
    beforeDestroy () {
      if (this.edit) {
        this.$agent.$off ('componentInit', this.init)
      }
    },
    methods: {
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

  .vf-javascript-box, .vf-divider-box, .vf-html-box, .vf-text-box, .vf-table-box {
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

    .vf-component-label {
      font-size: 14px;
      padding-right: 10px;
      color: rgba(0, 0, 0, .65);
      line-height: 32px;

      &.has-required {
        &:before {
          content: '*';
          color: red;
        }
      }
    }
  }
</style>
