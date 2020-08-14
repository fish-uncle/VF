<template>
  <div class="vf-center">
    <div class="vf-fn">
      <h2>{{$t('admin_center_title1')}}</h2>
      <ul class="fn-flex flex-row">
        <li class="pointer vf-fn-btn" @click="handleClear">
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
            <DropdownItem name="newPage">{{$t('admin_center_btn2_3')}}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <li class="pointer vf-fn-btn" @click="handlePreviewAll">
          <Icon type="ios-flash-outline" size="18"/>
          {{$t('admin_center_btn3')}}
        </li>
      </ul>
    </div>
    <div class="vf-drag pos-r">
      <grid-layout
        :layout.sync="center.list"
        :col-num="24"
        :row-height="30"
        :is-draggable="true"
        :is-resizable="false"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[0, 0]"
        :use-css-transforms="false"
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
      <div class="vf-center-empty pos-a text-center" v-if="!center.list.length">
        从左侧拖拽添加组件
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex';

  export default {
    data() {
      return {
        canAdd: false
      }
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
      handlePreviewAll() {
        window.open(`${location.origin}/#/previewAll`)
      },
      handlePreview(name) {
        if (name === 'preview') {
          this.$store.commit('model/previewShow');
        }
        if (name === 'data') {
          this.$store.commit('model/dataShow');
        }
        if (name === 'newPage') {
          this.$router.push('/preview');
        }
      },
      layoutUpdatedEvent() {
        this.$store.commit('center/sort');
      },
      handleClear() {
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

  .vf-center-empty {
    font-size: 20px;
    top: 50%;
    width: 100%;
    margin-top: -15px;
    color: #ccc;
  }

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
