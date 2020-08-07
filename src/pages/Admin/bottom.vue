<template>
  <div class="vf-bottom fn-flex">
    {{date}} © fish uncle️
  </div>
</template>
<script>
  export default {
    data() {
      return {
        date: new Date().getFullYear()
      }
    }
  }
</script>
<style lang="less">
  .vf-bottom{
    height: 40px;
    align-items: center;
    justify-content: center;
    color: #ddd;
  }
</style>
