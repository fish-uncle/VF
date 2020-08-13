<template>
  <i-switch v-model="center[currentVal.dragItem.key]"
            class="f-switch"
            :class="[currentVal.dragItem.className]"
            :disabled="currentVal.dragItem.disabled" @on-change="clickChange">
    <i/>
  </i-switch>
</template>
<script>
  import {mapState} from "vuex";

  export default {
    data() {
      return {
        data: false,
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
        this.center[this.currentVal.dragItem.key] = false;
        this.$store.commit('center/changeData', {
          value: false,
          key: this.currentVal.dragItem.key
        })
      },
      clickChange() {
        if (!this.currentVal.dragItem.disabled) {
          this.data = !this.data
          this.$store.commit('center/changeData', {
            value: this.data,
            key: this.currentVal.dragItem.key
          })
        }
      }
    }
  }
</script>
