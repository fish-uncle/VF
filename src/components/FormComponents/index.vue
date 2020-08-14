<template>
  <div class="fn-clear vf-component pos-r"
       v-show="visible"
       :class="[index===center.current&&edit?'active':'',
       edit?'vf-component-edit':'',
       `vf-${type}-box`,
       currentVal.lowerVersion?'lower-version':'']"
       @click="choose(index)">
    <label class="fn-fl vf-component-label"
           :class="currentVal.dragItem.required?'has-required':''"
           :style="{width:`${currentVal.dragItem.labelWidth}px`,textAlign:currentVal.dragItem.labelTextAlign}">
      {{currentVal.dragItem[`title_${language.lang}`]}}:
    </label>
    <div :style="{marginLeft:`${currentVal.dragItem.labelWidth}px`}">
      <component :is="currentComponent" :value="currentVal"></component>
    </div>
    <div v-if="index===center.current&&edit" class="pos-a vf-component-del pointer text-center" @click="del">
      <Icon type="md-trash"/>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import {cssStyle2DomStyle} from '../../utils';

  export default {
    data() {
      return {
        currentVal: this.value,
        id: null,
        visible: true,
        currentComponent: null,
        type: ''
      }
    },
    computed: mapState(["center", "language"]),
    props: ["value", "index", 'edit'],
    watch: {
      value(val) {
        this.currentVal = val;
      }
    },
    mounted() {
      this.id = this.currentVal.dragItem.id;
      const type = cssStyle2DomStyle(this.currentVal.dragItem.type);
      this.type = type;
      this.currentComponent = () => import(`../../func/form-${type}`)
      if (this.edit) {
        this.$agent.$on('componentInit', this.init)
      }
    },
    beforeDestroy() {
      if (this.edit) {
        this.$agent.$off('componentInit', this.init)
      }
    },
    methods: {
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      },
      init() {
        this.$children[0].init();
      },
      del() {
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
        this.$store.commit('center/remove', {index: this.index});
        this.$store.commit('right/changeTab', {tabIndex: 1});
      },
      choose(index) {
        if (!this.edit)
          return
        this.$store.commit('center/choose', {index});
      }
    }
  }
</script>
<style lang="less">
  @import "../../less/conf";

  .vf-javascript-box, .vf-divider-box, .vf-html-box {
    .vf-component-label {
      display: none;
    }
  }

  .vf-javascript-box {
    display: none;

    &.vf-component-edit {
      display: block;
    }
  }


  .vf-component {
    border: 2px dashed rgba(0, 0, 0, 0);
    min-height: 100%;
    border-radius: 4px;
    padding: 10px;

    &.vf-component-edit {
      &:hover {
        border: 2px dashed @themeColor_04;
      }

      &.active {
        border: 2px dashed @themeColor;
      }

      &.lower-version {
        background: rgba(255, 153, 0, 0.32);
      }
    }

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

  .vf-component-del {
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    user-select: none;
    background-color: @themeColor;
    color: #fff;
    border-radius: 4px;

    &:hover {
      background-color: @themeColor_07;
    }
  }
</style>
