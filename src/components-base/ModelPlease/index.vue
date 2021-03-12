<template>
	<Modal
		v-model="model.pleaseVisible"
		:closable="false"
		:footer-hide="true"
		:scrollable="true"
		width="700"
	>
		<div>
			<Table
				v-if="model.pleaseVisible"
				border
				:columns="columns"
				:data="data"
			></Table>
		</div>
		<div class="fn-flex flex-row vf-pay">
			<div class="fn-flex flex-column text-center">
				<img :src="wechatpay" alt=""/>
				<span>{{ $t('buy_wechat') }}</span>
			</div>
			<div class="fn-flex flex-column text-center">
				<img :src="alipay" alt=""/>
				<span>{{ $t('buy_alipay') }}</span>
			</div>
		</div>
		<div class="vf-mark">
			{{ $t('please_content1') }}
		</div>
	</Modal>
</template>
<script>
	import { mapState } from 'vuex'

	export default {
		data () {
			return {
				wechatpay: 'https://cdn.shenzhepei.com/hexo-theme-matery/public/medias/reward/wechat.jpg',
				alipay: 'https://cdn.shenzhepei.com/hexo-theme-matery/public/medias/reward/alipay.jpg'
			}
		},
		computed: {
			...mapState(['model', 'center']),
			columns () {
				return [
					{
						title: this.$t('please_columns1'),
						key: 'name',
						render: (h, params) => {
							if (params.row.level === 1) {
								return h('div', [
									h('Icon', {
										props: {
											type: 'ios-cafe-outline',
											size: 24,
											color: 'rgba(18, 120, 246, 1)'
										}
									})
								])
							}
							if (params.row.level === 2) {
								return h('div', [
									h('Icon', {
										props: {
											type: 'ios-ice-cream-outline',
											size: 24,
											color: 'rgba(18, 120, 246, 1)'
										}
									}),
									h('Icon', {
										props: {
											type: 'ios-ice-cream-outline',
											size: 24,
											color: 'rgba(18, 120, 246, 1)'
										}
									})
								])
							}
							if (params.row.level === 3) {
								return h('div', [
									h('Icon', {
										props: {
											type: 'ios-beer-outline',
											size: 24,
											color: 'rgba(18, 120, 246, 1)'
										}
									}),
									h('Icon', {
										props: {
											type: 'ios-beer-outline',
											size: 24,
											color: 'rgba(18, 120, 246, 1)'
										}
									}),
									h('Icon', {
										props: {
											type: 'ios-beer-outline',
											size: 24,
											color: 'rgba(18, 120, 246, 1)'
										}
									})
								])
							}
						}
					},
					{
						title: this.$t('please_columns2'),
						key: 'price'
					},
					{
						title: this.$t('please_columns2'),
						key: 'content'
					}
				]
			},
			data () {
				return [
					{
						level: 1,
						price: '¥10.00 / $1.50',
						content: this.$t('please_table1')
					},
					{
						level: 2,
						price: '¥25.00 / $4.00',
						content: this.$t('please_table2')
					},
					{
						level: 3,
						price: '¥50.00 / $7.50',
						content: this.$t('please_table3')
					}
				]
			}
		}
	}
</script>
<style lang="less">
  .vf-pay {
    margin: 20px 0;

    > div {
      flex: 1;
      align-items: center;
    }

    img {
      width: 100px;
    }
  }

  .vf-mark {
    text-align: justify;
  }
</style>
