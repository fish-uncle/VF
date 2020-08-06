<template>
  <div class="fish-center">
    <div class="fish-fn">
      <h2>功能区</h2>
      <ul class="fn-flex flex-row">
        <li class="pointer" @click="clear">清空</li>
        <li class="pointer" @click="modelDataShow">数据预览</li>
        <li class="pointer" @click="modelPreviewShow">组件预览</li>
        <li class="pointer" @click="modelBuyShow">源码查看</li>
        <li class="pointer" @click="updateLog">更新日志</li>
      </ul>
    </div>
    <div class="fish-drag">
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
      updateLog(){
        this.$router.push('/updateLog')
      },
      layoutUpdatedEvent(){
        this.$store.commit('center/sort');
      },
      modelPreviewShow() {
        this.$store.commit('model/previewShow');
      },
      modelBuyShow(){
        this.$store.commit('model/buyShow');
      },
      modelDataShow() {
        this.$store.commit('model/dataShow');
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
        const drag = document.getElementsByClassName('fish-drag')[0];
        if (x >= 260 && x <= 260 + drag.clientWidth &&
          y >= 10 + 70 && y <= drag.clientHeight + 70) {
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

  .fish-center {
    margin-left: 260px;
    margin-right: 450px;
    margin-top: 10px;
  }

  .fish-drag {
    border: 1px dashed #ddd;
    border-radius: 4px;
    min-height: calc(100vh - 120px);
  }

  .fish-fn {
    height: 50px;
    margin-bottom: 20px;

    h2 {
      font-size: 16px;
      margin-bottom: 15px;
    }

    li {
      font-size: 14px;
      color: @themeColor;
      user-select: none;
      margin-right: 10px;

      &:hover {
        color: @themeColor_07;
      }
    }
  }
</style>
