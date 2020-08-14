<template>
  <div class="pos-r">
    <div class="vf-func fn-fl pos-r vf-scrollbar" id="func">
      <h2>
        {{$t('admin_left_title1')}}
      </h2>
      <ul class="pos-r fn-flex flex-row">
        <func-item v-for="(item,key) in component.list" :item="item" :key="key" v-if="item.componentType==='base'"/>
      </ul>
      <h2>
        {{$t('admin_left_title2')}}
      </h2>
      <ul class="pos-r fn-flex flex-row">
        <func-item v-for="(item,key) in component.list" :item="item" :key="key" v-if="item.componentType==='modification'"/>
      </ul>
      <!--      <div class="pos-a vf-func-disabled z-index-9" v-if="!center.id" :style="{height:scrollHeight}"/>-->
    </div>
    <div class="pos-a vf-drag-item fn-flex"
         v-show="component.drag"
         :class="[component.drag?'active z-index-999':'',component.remove?'remove':'']"
         :style="{left:component.dragItem.x + 10 + 'px',top:component.dragItem.y - 30 - scrollTop+'px'}">
      <Icon :type="component.dragItem.icon" v-if="component.dragItem.icon" color="rgb(18, 120, 245)" size="18"/>
      <span>{{component.dragItem[`title_${language.lang}`]}}</span>
    </div>
  </div>
</template>
<script>
  import FuncItem from './func-item';
  import {mapState} from 'vuex';

  export default {
    data() {
      return {
        scrollTop: 0,
        scrollHeight: '100%',
      }
    },
    components: {
      FuncItem,
    },
    beforeDestroy() {
      const func = document.getElementById('func');
      if (func)
        func.removeEventListener("scroll", this.handleScroll);
    },
    computed: mapState(["component", 'center', 'language']),
    methods: {
      handleScroll(e) {
        const func = document.getElementById('func');
        this.scrollTop = func.scrollTop
      }
    },
    mounted() {
      const func = document.getElementById('func');
      this.scrollHeight = func.scrollHeight + 'px';
      func.addEventListener('scroll', this.handleScroll, true);
    }
  }
</script>
<style lang="less">
  @import "../../less/conf";

  .vf-func-disabled {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, .6);
    top: 0;
    left: 0;
  }

  .vf-func {
    width: 250px;
    height: calc(100vh - 130px);
    padding: 10px;
    overflow-y: auto;
    overflow-x: hidden;

    h2 {
      font-size: 16px;
      height: 40px;
    }

    ul {
      flex-wrap: wrap;
    }

    li {
      margin-bottom: 10px;
      word-break: break-all;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;

      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }

  .vf-drag-item {
    width: 108px;
    height: 30px;
    background: #f4f6fc;
    font-size: 14px;
    cursor: move;
    line-height: 30px;
    user-select: none;
    opacity: 0;
    color: @themeColor;
    border: 1px dashed @themeColor;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    align-items: center;
    padding-left: 8px;

    span {
      margin-left: 5px;
    }

    &.active {
      opacity: 0.8;
    }

    &.remove {
      transition: all .5s;
    }
  }
</style>
