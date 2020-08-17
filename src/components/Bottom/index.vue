<template>
  <div class="vf-bottom fn-flex">
    {{date}} © fish uncle️ <a href="https://mail.miit.gov.cn/" target="_blank" rel="nofollow">浙ICP备17040239号-2</a>
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
  .vf-bottom {
    height: 40px;
    align-items: center;
    justify-content: center;
    color: #ddd;

    a {
      color: #ddd;
      margin-left: 10px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
