<template>
  <Date-picker class="f-date-picker"
               :class="[currentVal.dragItem.className]"
               :style="{width:`${currentVal.dragItem.widthRatio}%`}"
               v-model="center[currentVal.dragItem.key]"
               :clearable="currentVal.dragItem.clearable"
               :placeholder="currentVal.dragItem.placeholder"
               :format="currentVal.dragItem.timeFormat"
               @on-change="dateChange"
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
      dateChange(value) {
        this.$store.commit('center/changeData', {
          value,
          key: this.currentVal.dragItem.key
        })
      }
    }
  }
</script>
