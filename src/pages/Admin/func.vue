<template>
  <div class="pos-r">
    <div class="vf-func fn-fl pos-r vf-scrollbar" id="func">
      <h2>
        {{$t('admin_left_title1')}}
      </h2>
      <draggable tag="ul" class="fn-flex flex-row" v-model="component.list"
                 :clone="handleClone"
                 :move="handleMove"
                 :group="{ name: 'people', pull: 'clone', put: false }">
        <func-item v-for="(item,key) in component.list" :item="item" :key="key" v-if="item.componentType==='base'"/>
      </draggable>
      <h2>
        {{$t('admin_left_title2')}}
      </h2>
      <draggable tag="ul" class="fn-flex flex-row" v-model="component.list"
                 :clone="handleClone"
                 :move="handleMove"
                 :group="{ name: 'people', pull: 'clone', put: false }">
        <func-item v-for="(item,key) in component.list" :item="item" :key="key"
                   v-if="item.componentType==='modification'"/>
      </draggable>
    </div>
  </div>
</template>
<script>
  import FuncItem from './func-item';
  import { mapState } from 'vuex';

  export default {
    data () {
      return {
        i: '',
        l: ''
      }
    },
    components: {
      FuncItem,
    },
    computed: mapState ([ "component", 'center', 'language' ]),
    mounted () {
      this.init ();
    },
    methods: {
      init () {
        this.i = Math.random (5).toString (32).replace ('0.', '')
        this.l = Math.random (5).toString (32).replace ('0.', '')
      },
      handleMove: function (evt) {
        if (evt.to.className === 'vf-drag-content') {
          return true
        } else {
          return false
        }
      },
      handleClone: function (evt) {
        let dragItem = evt
        let key = `${dragItem.type}_${this.i}`
        if (dragItem.dataType === 'TimeRange') {
          key += `;${this.l}`
        }
        dragItem.key = key
        dragItem.id = key
        dragItem = JSON.parse (JSON.stringify (dragItem))
        this.init ()
        return dragItem
      }
    },
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
</style>
