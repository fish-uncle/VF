<template>
  <Rate  v-model="center[currentVal.dragItem.key]"
         class="f-rate"
         :class="[currentVal.dragItem.className]"
         :character="currentVal.dragItem.character"
         :clearable="currentVal.dragItem.clearable"
         :allow-half="true"
         :show-text="currentVal.dragItem.showText"
              :disabled="currentVal.dragItem.disabled" @on-change="clickChange">
  </Rate >
</template>
<script>
  import request from "../../utils/request";
  import {mapState} from "vuex";
  import {findComponentUpward} from "../../utils";

  export default {
    data() {
      return {
        currentVal: this.value,
      }
    },
    computed: mapState(["center"]),
    props: ["value"],
    watch: {
      value(val) {
        this.currentVal = val;
      }
    },
    methods: {
      init() {
        this.center[this.currentVal.dragItem.key] = '';
        this.$store.commit('center/changeData', {
          value: '',
          key: this.currentVal.dragItem.key
        })
      },
      clickChange(value) {
        this.$store.commit('center/changeData', {
          value,
          key: this.currentVal.dragItem.key
        })
      }
    }
  }
</script>
