<template>
  <Modal v-model="model.pleaseVisible" :closable="false" :footer-hide="true" :scrollable="true" width="700">
    <div>
      <Table border :columns="columns" :data="data"></Table>
    </div>
    <div class="fn-flex flex-row pay">
      <div class="fn-flex flex-column text-center">
        <img :src="wechatpay" alt=""/>
        <span>微信</span>
      </div>
      <div class="fn-flex flex-column text-center">
        <img :src="alipay" alt=""/>
        <span>支付宝</span>
      </div>
    </div>
    <div class="mark">
      注：支付时备注你的大名，我会将捐赠名单晒出来，如果你想做一名匿名大侠，我会铭记于心的。
    </div>
  </Modal>
</template>
<script>
  import {mapState} from 'vuex';

  export default {
    data() {
      return {
        wechatpay: 'https://cdn.shenzhepei.com/hexo-theme-matery/public/medias/reward/wechat.jpg',
        alipay: 'https://cdn.shenzhepei.com/hexo-theme-matery/public/medias/reward/alipay.jpg',
        columns: [
          {
            title: '咖啡',
            key: 'name'
          },
          {
            title: '价格',
            key: 'price'
          },
          {
            title: '说明',
            key: 'content',
          }
        ],
        data: [
          {
            name: '一杯',
            price: '¥5.00',
            content: '一杯精神气爽，码代码速度加快了',
          },
          {
            name: '两杯',
            price: '¥10.00',
            content: '两杯仙气飘飘，熬夜不是问题',
          },
          {
            name: '五杯',
            price: '¥25.00',
            content: '五杯欲仙欲死，需求come',
          },
        ]
      }
    },
    computed: {
      ...mapState(["model", "center"]),
    }
  }
</script>
<style lang="less" scoped>
  .pay {
    margin: 20px 0;

    > div {
      flex: 1;
      align-items: center;
    }

    img {
      width: 100px;
    }
  }

  .mark {
    text-align: justify;
  }
</style>
