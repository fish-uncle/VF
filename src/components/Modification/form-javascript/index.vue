<template>
  <div class="vf-javascript"
       :class="[currentVal.className]">
    <div class="fn-clear">
      <label class="fn-fl" style="padding-right:10px;line-height:32px;text-align:right;width:100px;">JS:</label>
      {{language==='zh'?'自定义js片段，仅在编辑时显示该文本，用于占位，请尽量放置在表单末端':'Custom JS fragment, only display the text when editing,for occupation, Please try to place it at the end of the form'}}
    </div>
  </div>
</template>
<script>
  import func from '../../../mixins/component'

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
