<template>
  <ColorPicker v-model="formatValue"
               @on-change="colorChange"
               :alpha="currentVal.dragItem.alpha"
               :disabled="currentVal.dragItem.disabled"/>
</template>
<script>
  import {mapState} from 'vuex';

  export default {
    data() {
      return {
        currentVal: this.value,
      }
    },
    computed: {
      ...mapState(["center"]),
      formatValue() {
        if (this.center[this.currentVal.dragItem.key]) {
          return this.center[this.currentVal.dragItem.key]
        } else {
          return ''
        }
      }
    },
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
      colorChange(value) {
        this.$store.commit('center/changeData', {
          value,
          key: this.currentVal.dragItem.key
        })
      }
    }
  }
</script>
