<template>
  <div class="fn-clear vf-component pos-r"
       v-show="visible"
       :class="[index===center.current&&edit?'active':'',
       edit?'vf-component-edit':'',
       currentVal.lowerVersion?'lower-version':'']"
       @click="choose(index)">
    <label class="fn-fl"
           v-if="currentVal.dragItem.type!=='divider'"
           :class="currentVal.dragItem.required?'has-required':''"
           :style="{width:`${currentVal.dragItem.labelWidth}px`,textAlign:currentVal.dragItem.labelTextAlign}">
      {{currentVal.dragItem.title}}:
    </label>
    <div :style="{marginLeft:`${currentVal.dragItem.labelWidth}px`}">
      <f-input v-if="currentVal.dragItem.type==='input'" :value="currentVal"/>
      <f-textarea v-if="currentVal.dragItem.type==='textarea'" :value="currentVal"/>
      <f-switch v-if="currentVal.dragItem.type==='switch'" :value="currentVal"/>
      <f-radio v-if="currentVal.dragItem.type==='radio'" :value="currentVal"/>
      <f-select v-if="currentVal.dragItem.type==='select'" :value="currentVal"/>
      <f-multiple v-if="currentVal.dragItem.type==='multiple'" :value="currentVal"/>
      <f-date-picker v-if="currentVal.dragItem.type==='datePicker'" :value="currentVal"/>
      <f-date-range v-if="currentVal.dragItem.type==='dateRange'" :value="currentVal"/>
      <f-slider v-if="currentVal.dragItem.type==='slider'" :value="currentVal"/>
      <f-rate v-if="currentVal.dragItem.type==='rate'" :value="currentVal"/>
      <f-color-picker v-if="currentVal.dragItem.type==='colorPicker'" :value="currentVal"/>
      <f-divider v-if="currentVal.dragItem.type==='divider'" :value="currentVal"/>
    </div>
    <div v-if="index===center.current&&edit" class="pos-a vf-component-del pointer text-center" @click="del">
      <Icon type="md-trash"/>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex';

  export default {
    data() {
      return {
        currentVal: this.value,
        id: null,
        visible: true,
      }
    },
    computed: mapState(["center"]),
    props: ["value", "index", 'edit'],
    watch: {
      value(val) {
        this.currentVal = val;
      }
    },
    mounted() {
      this.id = this.currentVal.dragItem.id;
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
<style lang="less" scoped>
  @import "../../less/conf";

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

    label {
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
