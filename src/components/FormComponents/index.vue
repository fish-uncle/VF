<template>
  <div class="fn-clear vf-component pos-r"
       v-show="visible"
       :style="{width:`${currentVal.width/24*100}%`,background:currentGroupColor}"
       :class="[index===center.current&&edit?'active':'',
       edit?'vf-component-edit':'',
       `vf-${type}-box`]"
       @click="choose(index)">
    <div class="vf-component-model pos-a z-index-9"/>
    <label class="fn-fl vf-component-label"
           :class="currentRequired?'has-required':''"
           :style="{width:`${currentLabelWidth}`,textAlign:currentLabelTextAlign}">
      {{currentTitle}}:
    </label>
    <div class="vf-component-content" :style="{marginLeft:`${currentLabelWidth}`}">
      <component :is="currentComponent" :value="currentVal" :edit="edit" :language="language.lang"></component>
    </div>
    <div v-if="index===center.current&&edit" class="z-index-9 pos-a vf-component-del pointer text-center" @click="handleDelete">
      <Icon type="md-trash"/>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import { cssStyle2DomStyle, findComponentUpward } from '../../utils'

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
    computed: {
      ...mapState ([ 'center' ]),
      currentGroupColor () {
        if (this.currentVal.group) {
          let color = ''
          this.center.group.forEach (item => {
            if (item.id === this.currentVal.group) {
              color = item.color
            }
          })
          return color
        } else {
          return 'rgba(255,255,255,0)'
        }
      },
      currentRequired () {
        return this.currentVal.rules ? this.currentVal.rules.required : false
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
      },
      currentTitle () {
        if (this.currentVal.title) {
          return this.currentVal.title
        }
        if (this.currentVal[`title_${this.language}`]) {
          return this.currentVal[`title_${this.language}`]
        }
      }
    },
    props: [ 'value', 'index', 'edit', 'language', 'labelTextAlign', 'labelWidth' ],
    watch: {
      value (val) {
        this.currentVal = val
      }
    },
    mounted () {
      this.id = this.currentVal.id
      const type = cssStyle2DomStyle (this.currentVal.type)
      this.type = type
      this.currentComponent = () => import(`../../func/form-${type}`)
      this.parent.childMounted ({
        key: this.currentVal.key,
        show: this.show, hide: this.hide, init: this.init, id: this.id
      })
    },
    beforeDestroy () {
    },
    methods: {
      show () {
        this.visible = true;
      },
      hide () {
        this.visible = false;
      },
      update () {
        this.$children[0].update ();
      },
      handleDelete () {
        this.$store.commit ('center/remove', { index: this.index });
        this.$store.commit ('right/changeTab', { tabIndex: 1 });
        this.$agent.$once ({ type: 'formDataRemove', key: this.currentVal.key });
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

  .vf-component-model {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
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

    &.vf-component-edit {
      display: block;
    }
  }


  .vf-component {
    border: 2px solid rgba(0, 0, 0, 0);
    border-radius: 4px;
    padding: 10px;
    transition: all .3s;

    &.vf-component-edit {
      &:hover {
        border: 2px solid @themeColor_04;
      }

      &.active {
        border: 2px solid @themeColor;
      }
    }

    &.sortable-ghost {
      height: 0;
      padding: 0;
      width: 100%;
      border: 2px solid @move-color !important;

      span, i, .vf-component-del, label, input, div {
        display: none;
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
    border-radius: 2px;

    &:hover {
      background-color: @themeColor_07;
    }
  }
</style>
