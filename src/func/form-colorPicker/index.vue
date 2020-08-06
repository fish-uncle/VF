<template>
  <ColorPicker v-model="color"
               @on-change="colorChange"
               :alpha="currentVal.dragItem.alpha"
               :disabled="currentVal.dragItem.disabled"/>
</template>
<script>
  import {mapState} from 'vuex';

  export default {
    data() {
      let color = '';
      return {
        color,
        currentVal: this.value,
      }
    },
    computed: {
      ...mapState(["center"]),
    },
    props: ["value"],
    watch: {
      value(val) {
        this.currentVal = val;
        this.color = this.center[this.currentVal.dragItem.key];
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
      colorChange(value) {
        this.$store.commit('center/changeData', {
          value,
          key: this.currentVal.dragItem.key
        })
      }
    }
  }
</script>
