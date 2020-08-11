<template>
  <li class="text-center pos-r z-index-9" :title="item.title">
    {{item[`title_${language.lang}`]}}
  </li>
</template>
<script>
  import {mapState} from 'vuex';

  export default {
    props: ['item'],
    computed: mapState(["component", "model", "language"]),
    mounted() {
      document.addEventListener('mouseup', this.remove);
      document.addEventListener('mousedown', this.drag);
      document.addEventListener('mousemove', this.move);
    },
    beforeDestroy() {
      document.removeEventListener('mouseup', this.remove);
      document.removeEventListener('mousedown', this.drag);
      document.removeEventListener('mousemove', this.move);
    },
    methods: {
      move(e) {
        if (this.component.drag) {
          const item = this.component.dragItem;
          const x = e.x - item.xPoint + item.xStart;
          const y = e.y - item.yPoint + item.yStart;
          const dragItem = {
            ...item, x, y
          };
          this.$store.commit('component/drag', {dragItem})
        }
      },
      drag(e) {
        const item = this.item;
        const x = e.x - 10 + document.documentElement.scrollLeft;
        const y = e.y - 41 + document.documentElement.scrollTop;
        if (x >= item.xStart && x <= item.xEnd && y >= item.yStart && y <= item.yEnd) {
          const dragItem = {
            ...item,
            x: item.xStart,
            y: item.yStart,
            xPoint: e.x,
            yPoint: e.y
          };
          if (!this.model.visible) {
            this.$store.commit('component/drag', {dragItem})
          }
        }
      },
      remove(e) {
        if (this.component.drag) {
          this.$store.commit('component/remove')
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../../less/conf";

  li {
    width: 108px;
    height: 30px;
    background: #f4f6fc;
    border: 1px solid #f4f6fc;
    font-size: 14px;
    cursor: move;
    line-height: 30px;
    user-select: none;
    margin-right: 10px;
    border-radius: 4px;

    &:hover {
      color: @themeColor;
      border: 1px dashed @themeColor;
    }
  }
</style>
