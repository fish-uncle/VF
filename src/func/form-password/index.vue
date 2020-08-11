<template>
  <div class="f-password pos-r" :style="{width:`${currentVal.dragItem.widthRatio}%`}">
    <i-input
      v-model="center[currentVal.dragItem.key]"
      :disabled="currentVal.dragItem.disabled"
      :placeholder="currentVal.dragItem.placeholder"
      :style="{width:`100%`}"
      @on-change="inputChange"
      :type="see?'password':'text'"
    />
    <Icon :type="see?'ios-eye-outline':'ios-eye-off-outline'" size="20" class="pos-a f-password-see pointer"
          @click="see=!see"/>
  </div>
</template>
<script>
  import {mapState} from "vuex";

  export default {
    data() {
      return {
        currentVal: this.value,
        see: true
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
      inputChange(e) {
        const value = e.target.value;
        this.$store.commit('center/changeData', {
          value,
          key: this.currentVal.dragItem.key
        })
      }
    }
  }
</script>
<style lang="less">
  .f-password-see {
    right: 10px;
    top: 50%;
    margin-top: -10px;
  }
</style>