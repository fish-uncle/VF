<template>
  <div class="f-image" :class="[currentVal.dragItem.className,currentVal.dragItem.disabled?'f-image-disabled':'']"
       :style="{width:`${currentVal.dragItem.widthRatio}%`}">
    <Upload :action="currentVal.dragItem.action" type="drag" :disabled="currentVal.dragItem.disabled">
      <div style="padding: 20px 0">
        <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
        <p>Click or drag files here to upload</p>
      </div>
    </Upload>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        img: '',
        currentVal: this.value,
      }
    },
    props: ["value"],
    watch: {
      value(val) {
        this.currentVal = val;
      }
    },
    methods: {
      fileChange(e) {

      }
    }
  }
</script>
<style lang="less">
</style>
