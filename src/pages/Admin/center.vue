<template>
  <div class="vf-center">
    <div class="vf-fn">
      <h2>{{$t('admin_center_title1')}}</h2>
      <ul class="fn-flex flex-row vf-fn-btn-box">
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
            <DropdownItem name="code">{{$t('admin_center_btn2_3')}}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <li class="pointer vf-fn-btn" @click="handlePreviewAll">
          <Icon type="ios-flash-outline" size="18"/>
          {{$t('admin_center_btn3')}}
        </li>
        <li class="pointer vf-fn-btn" :style="{marginLeft:'auto'}">
          <i-select v-model="center.currentScale" @on-change="handleCurrentScale">
            <i-option :value="index" v-for="(item,index) in viewScale">
              {{$t('admin_center_btn4_1')}}{{index+1}}{{$t('admin_center_btn4_2')}}
            </i-option>
          </i-select>
        </li>
        <li class="pointer vf-fn-btn">
          <i-select v-model="center.viewScale" @on-change="handleViewScale">
            <i-option value="24:0">1:0</i-option>
            <i-option value="12:12">1:1</i-option>
            <i-option value="16:8">2:1</i-option>
            <i-option value="8:16">1:2</i-option>
          </i-select>
        </li>
      </ul>
    </div>
    <div class="vf-drag-box fn-flex">
      <f-list>
        <div class="fn-flex pos-r"
             :class="['vf-drag','ivu-col',`ivu-col-span-${item}`,scaleIndex===center.currentScale?'vf-drag-active':'']"
             v-for="(item,scaleIndex) in viewScale"
             @click="()=>handleCurrentScale(scaleIndex)">

          <draggable v-model="center.list[scaleIndex]" group="people">
            <f-component :value="item" :index="index" :edit="scaleIndex===center.currentScale"
                         :key="item.dragItem.id"
                         v-for="(item,index) in center.list[scaleIndex]"/>
          </draggable>
          <div class="vf-center-empty pos-a text-center" v-if="!center.list[scaleIndex].length">
            {{$t('admin_center')}}
          </div>
        </div>
      </f-list>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  import draggable from 'vuedraggable'

  export default {
    data () {
      return {
        canAdd: false
      }
    },
    components: {
      draggable,
    },
    computed: {
      ...mapState ([ "center", "component" ]),
      viewScale () {
        return this.center.viewScale.split (':')
      }
    },
    beforeDestroy () {
      document.removeEventListener ('mousemove', this.move);
      document.removeEventListener ('mouseup', this.add);
    },
    mounted () {
      document.addEventListener ('mousemove', this.move);
      document.addEventListener ('mouseup', this.add);
    },
    methods: {
      handleCurrentScale (currentScale) {
        this.$store.commit ('center/currentScaleChange', { currentScale });
      },
      handleViewScale (viewScale) {
        this.$store.commit ('center/viewScaleChange', { viewScale });
      },
      handlePreviewAll () {
        window.open (`${location.origin}/#/previewAll`)
      },
      handlePreview (name) {
        if (name === 'preview') {
          this.$store.commit ('model/previewShow');
        }
        if (name === 'data') {
          this.$store.commit ('model/dataShow');
        }
        if (name === 'code') {
          this.$store.commit ('model/codeShow');
        }
      },
      handleClear () {
        this.$store.commit ('center/clear');
      },
      add () {
        if (this.canAdd) {
          const dragItem = this.component.dragItem
          const i = Math.random (5).toString (32).replace ('0.', '')
          const l = Math.random (5).toString (32).replace ('0.', '')
          let key = `${dragItem.type}_${i}`
          if (dragItem.dataType === 'TimeRange') {
            key += `;${l}`
          }
          dragItem.key = key
          dragItem.id = key
          this.$store.commit ('center/add', { dragItem });
          this.$agent.$once ({ type: 'formDataAdd', dragItem });
        }
      },
      move (e) {
        const x = e.x + document.documentElement.scrollLeft;
        const y = e.y + document.documentElement.scrollTop;
        const drag = document.getElementsByClassName ('vf-drag-box')[0];
        if (x >= 260 && x <= 260 + drag.clientWidth &&
          y >= 10 + 90 + 80 && y <= drag.clientHeight + 90) {
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

  .sortable-chosen {
    background-color: rgba(255, 0, 0, 0.2);
  }

  .vf-center-empty {
    font-size: 20px;
    top: 50%;
    width: 100%;
    margin-top: -15px;
    color: #ccc;
    justify-content: center;
  }

  .vf-center {
    margin-left: 260px;
    margin-right: 450px;
    margin-top: 10px;
  }

  .vf-drag-box {
    border: 1px dashed #ddd;
    border-radius: 4px;
    min-height: calc(100vh - 220px);

    .vf-component {
      cursor: move;
    }

    > div {
      transition: all .3s;
    }
  }

  .vf-drag-active {
    background-color: rgba(18, 120, 246, .05);
  }

  .vue-grid-item {
    width: 100% !important;
  }

  .ivu-dropdown {
    margin-right: 10px;

    &.disabled {
      a {
        color: #ddd;
      }
    }
  }

  .vf-drag {
    > div {
      display: flex;
      display: -webkit-flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  .vf-fn-btn-box {
    align-items: center;
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
    height: 90px;

    h2 {
      font-size: 16px;
      margin-bottom: 15px;
    }
  }
</style>
