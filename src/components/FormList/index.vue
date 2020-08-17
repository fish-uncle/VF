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
      :use-css-transforms="false"
    >
      <grid-item v-for="(item,index) in center.list"
                 :x="item.x"
                 :y="item.y"
                 :w="item.w"
                 :h="item.h"
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
        const children = this.$children[0].$children;
        if (children) {
          children.forEach(child => {
            for (let key in controlOthersHideTargetKeys) {
              const k = key.toString();
              const c = child.$children[0];
              if (c) {
                if (controlOthersHideTargetKeys[key].indexOf(c.id) !== -1) {
                  if (Array.isArray(value)) {
                    const v = value.map(item => item.toString());
                    if (v.indexOf(k) !== -1) {
                      c.hide();
                    } else {
                      c.show();
                    }
                  } else {
                    const v = value ? value.toString() : value;
                    if (k === v) {
                      c.hide();
                    } else {
                      c.show();
                    }
                  }
                }
              }
            }
          });
        }
      },
      controlOthersUpdate(controlOthersUpdateTargetKeys) {
        const children = this.$children[0].$children;
        if (children) {
          children.forEach(child => {
            const c = child.$children[0];
            if (c) {
              if (controlOthersUpdateTargetKeys.indexOf(c.id) !== -1) {
                c.init();
              }
            }
          });
        }
      },
    },
  }
</script>
