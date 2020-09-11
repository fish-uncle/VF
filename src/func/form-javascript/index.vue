<template>
  <div class="f-javascript"
       :class="[currentVal.dragItem.className]">
    <div class="fn-clear">
      <label class="fn-fl" style="padding-right:10px;line-height:32px;text-align:right;width:100px;">JS:</label>
      {{$t('component_javascript')}}
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentVal: this.value,
      }
    },
    props: ["value"],
    watch: {
      value(val) {
        this.currentVal = val;
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        eval(this.currentVal.dragItem.code);
      },
    }
  }
</script>
