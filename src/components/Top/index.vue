<template>
  <div class="vf-top fn-flex flex-row">
    <h2>VF</h2>
    <h1>基于Vue的表单设计器，让表单开发简单而高效</h1>
    <span>v{{version}}</span>
    <ul class="fn-flex flex-row">
      <li class="pointer" :class="top.topIndex===1?'active':''" @click="handleIndex">首页</li>
      <li class="pointer" @click="handleBuyShow">源码查看</li>
      <li class="pointer" :class="top.topIndex===2?'active':''" @click="handleUpdateLog">更新日志</li>
      <li class="pointer" :class="top.topIndex===3?'active':''" @click="handleHelp">开发文档</li>
    </ul>
  </div>
</template>
<script>
  import {mapState} from "vuex";

  export default {
    computed: mapState(["top"]),
    data() {
      return {
        version: process.env.pkg.version
      }
    },
    methods: {
      handleIndex() {
        if (this.$route.name !== 'Admin')
          this.$router.push('/')
      },
      handleBuyShow() {
        this.$store.commit('model/buyShow');
      },
      handleUpdateLog() {
        if (this.$route.name !== 'UpdateLog')
          this.$router.push('/updateLog');
      },
      handleHelp() {
        if (this.$route.name !== 'Help')
          this.$router.push('/help/介绍');
      }
    }
  }
</script>
<style lang="less">
  @import "../../less/conf";

  .vf-top {
    height: 80px;
    background-color: @themeColor;
    align-items: center;

    h2 {
      color: rgba(255, 255, 255, 0.9);
      font-size: 34px;
      margin-left: 10px;
    }

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
        position: relative;
        transition: all .3s;

        &:hover {
          opacity: 0.7;
        }

        &:before {
          position: absolute;
          content: '';
          width: 0;
          height: 1px;
          background-color: #fff;
          bottom: 0;
          left: 0;
          transition: all .3s;
        }

        &:last-child {
          margin-right: 0;
        }

        &.active {
          &:before {
            width: 100%;
          }
        }
      }
    }
  }
</style>