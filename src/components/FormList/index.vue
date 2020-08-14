<template>
  <div>
    <grid-layout
      :layout.sync="center.list"
      :col-num="24"
      :row-height="30"
      :is-draggable="false"
      :is-resizable="false"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[0, 0]"
      :use-css-transforms="true"
    >
      <grid-item v-for="(item,index) in center.list"
                 :x="item.x"
                 :y="item.y"
                 :w="item.w"
                 :h="item.dragItem.type==='javascript'?0:item.h"
                 :i="item.i"
                 :key="item.i">
        <f-component :value="item" :index="index"/>
      </grid-item>
    </grid-layout>
  </div>
</template>
<script>
  import {mapState} from 'vuex';

  export default {
    name: 'FormList',
    computed: {
      ...mapState(["center"]),
    },
    methods: {
      controlOthersHide(controlOthersHideTargetKeys, value) {
        if (this.$children) {
          this.$children.forEach(child => {
            for (let key in controlOthersHideTargetKeys) {
              const k = key.toString();
              if (controlOthersHideTargetKeys[key].indexOf(child.id) !== -1) {
                if (Array.isArray(value)) {
                  const v = value.map(item => item.toString());
                  if (v.indexOf(k) !== -1) {
                    child.hide();
                  } else {
                    child.show();
                  }
                } else {
                  const v = value.toString();
                  if (k === v) {
                    child.hide();
                  } else {
                    child.show();
                  }
                }
              }
            }
          });
        }
      },
      controlOthersUpdate(controlOthersUpdateTargetKeys) {
        if (this.$children) {
          this.$children.forEach(child => {
            if (controlOthersUpdateTargetKeys.indexOf(child.id) !== -1) {
              child.init();
            }
          });
        }
      },
    },
  }
</script>
