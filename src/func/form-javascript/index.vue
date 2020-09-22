<template>
  <div class="vf-javascript"
       :class="[currentVal.className]">
    <div class="fn-clear">
      <label class="fn-fl" style="padding-right:10px;line-height:32px;text-align:right;width:100px;">JS:</label>
      {{$t('component_javascript')}}
    </div>
  </div>
</template>
<script>
  import func from '../../mixins/func'

  export default {
    mixins: [func],
    mounted() {
      this.update();
    },
    methods: {
      update() {
        eval(this.currentVal.code);
      },
    }
  }
</script>
