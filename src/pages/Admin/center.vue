<template>
  <div class="vf-center">
    <div class="vf-fn">
      <h2>{{$t('admin_center_title1')}}</h2>
      <ul class="fn-flex flex-row">
        <li class="pointer vf-fn-btn" @click="clear">
          <Icon type="ios-trash-outline" size="18"/>
          {{$t('admin_center_btn1')}}
        </li>
        <Dropdown @on-click="handlePreview">
          <a>
            <Icon type="ios-eye-outline" size="18"/>
            {{$t('admin_center_btn2')}}
            <Icon type="ios-arrow-down"></Icon>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem name="data">{{$t('admin_center_btn2_1')}}</DropdownItem>
            <DropdownItem name="preview">{{$t('admin_center_btn2_2')}}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </ul>
    </div>
    <div class="vf-drag">
      <grid-layout
        :layout.sync="center.list"
        :col-num="2"
        :row-height="30"
        :is-draggable="true"
        :is-resizable="false"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[0, 0]"
        :use-css-transforms="true"
        @layout-updated="layoutUpdatedEvent"
      >
        <grid-item v-for="(item,index) in center.list"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :key="item.i">
          <f-component :value="item" :index="index" :edit="true"/>
        </grid-item>
      </grid-layout>
    </div>
  </div>
</template>
<script>
  import VueGridLayout from 'vue-grid-layout';
  import {mapState} from 'vuex';

  export default {
    data() {
      return {
        canAdd: false
      }
    },
    components: {
      GridLayout: VueGridLayout.GridLayout,
      GridItem: VueGridLayout.GridItem
    },
    computed: mapState(["center", "component"]),
    beforeDestroy() {
      document.removeEventListener('mousemove', this.move);
      document.removeEventListener('mouseup', this.add);
    },
    mounted() {
      document.addEventListener('mousemove', this.move);
      document.addEventListener('mouseup', this.add);
    },
    methods: {
      handlePreview(name) {
        if (name === 'preview') {
          this.$store.commit('model/previewShow');
        }
        if (name === 'data') {
          this.$store.commit('model/dataShow');
        }
      },
      layoutUpdatedEvent() {
        this.$store.commit('center/sort');
      },
      clear() {
        this.$store.commit('center/clear');
      },
      add() {
        if (this.canAdd) {
          const dragItem = this.component.dragItem
          this.$store.commit('center/add', {dragItem});
        }
      },
      move(e) {
        const x = e.x + document.documentElement.scrollLeft;
        const y = e.y + document.documentElement.scrollTop;
        const drag = document.getElementsByClassName('vf-drag')[0];
        if (x >= 260 && x <= 260 + drag.clientWidth &&
          y >= 10 + 70 + 80 && y <= drag.clientHeight + 70) {
          if (this.component.drag) {
            this.canAdd = true;
          } else {
            this.canAdd = false;
          }
        } else {
          this.canAdd = false;
        }
      }
    }
  }
</script>
<style lang="less">
  @import "../../less/conf";

  .vf-center {
    margin-left: 260px;
    margin-right: 450px;
    margin-top: 10px;
  }

  .vf-drag {
    border: 1px dashed #ddd;
    border-radius: 4px;
    min-height: calc(100vh - 200px);
  }

  .ivu-dropdown {
    margin-right: 10px;

    &.disabled {
      a {
        color: #ddd;
      }
    }
  }

  .vf-fn-btn {
    font-size: 14px;
    color: @themeColor;
    user-select: none;
    margin-right: 10px;

    &:hover {
      color: @themeColor_08;
    }
  }

  .vf-fn {
    height: 50px;
    margin-bottom: 20px;

    h2 {
      font-size: 16px;
      margin-bottom: 15px;
    }
  }
</style>
