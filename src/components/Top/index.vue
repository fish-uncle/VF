<template>
  <div class="top fn-flex flex-row">
    <h1>基于Vue的表单设计器，让表单开发简单而高效</h1>
    <span>v1.0.8</span>
    <ul class="fn-flex flex-row">
      <li class="pointer" @click="index">首页</li>
      <li class="pointer" @click="modelBuyShow">源码查看</li>
      <li class="pointer" @click="updateLog">更新日志</li>
    </ul>
  </div>
</template>
<script>
  export default {
    methods: {
      index() {
        this.$router.push('/')
      },
      modelBuyShow() {
        this.$store.commit('model/buyShow');
      },
      updateLog() {
        this.$router.push('/updateLog')
      },
    }
  }
</script>
<style lang="less">
  @import "../../less/conf";

  .top {
    height: 80px;
    background-color: @themeColor;
    align-items: center;

    h1 {
      color: rgba(255, 255, 255, 0.9);
      font-size: 20px;
      margin-left: 10px;
    }

    span {
      color: rgba(255, 255, 255, 0.9);
      margin-left: 10px;
      font-size: 16px;
      margin-right: auto;
    }

    ul {
      margin-right: 10px;

      li {
        font-size: 16px;
        user-select: none;
        margin-right: 30px;
        color: rgba(255, 255, 255, 0.9);

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }


</style>