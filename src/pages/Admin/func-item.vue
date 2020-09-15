<template>
  <li class="pos-r z-index-9 fn-flex vf-func-item" :title="item.title">
    <Icon :type="item.icon" v-if="item.icon" color="#333" size="18"/>
    <span>{{item[`title_${language.lang}`]}}</span>
  </li>
</template>
<script>
  import { mapState } from 'vuex';

  export default {
    props: [ 'item' ],
    computed: mapState ([ 'component', 'model', 'language' ]),
  }
</script>
<style lang="less">
  @import "../../less/conf";

  .vf-func-item {
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
    align-items: center;
    padding-left: 8px;
    transition: all .3s;

    span {
      margin-left: 5px;
    }

    &:hover {
      color: @themeColor;
      border: 1px dashed @themeColor;
    }


  }

  .vf-drag-box {
    .vf-func-item {
      &.sortable-ghost {
        height: 0;
        width: 100%;
        border: 2px solid @move-color;

        span, i {
          display: none;
        }
      }
    }
  }
</style>
