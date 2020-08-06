<template>
  <Modal v-model="model.buyVisible" :closable="false" :footer-hide="true" :scrollable="true" width="700">
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
      注：支付时备注邮件，1个工作日内发送到指定邮箱，如需更换邮箱，请及时发送邮件至<a href="mailto:fishuncle@126.com">fishuncle@126.com</a>告知。
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
            title: '套餐',
            key: 'name'
          },
          {
            title: '价格',
            key: 'price'
          },
          {
            title: '说明',
            key: 'content',
            render: (h, params) => {
              return params.row.content.map(item => {
                return h('div', [
                  h('Icon', {
                    props: {
                      type: 'ios-checkmark',
                      size: 24,
                      color: 'rgba(18, 120, 246, 1)'
                    }
                  }),
                  h('span', item)
                ]);
              })
            }
          }
        ],
        data: [
          {
            name: '永久VIP套餐',
            price: '¥500.00',
            content: ['支持永久更新到最新版本', '支持技术咨询服务', '提供源代码', '允许二次扩展开发']
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
