<template>
	<Modal
		v-model="platform.buyVisible"
		:closable="false"
		:footer-hide="true"
		:scrollable="true"
		width="700"
	>
		<div>
			<Table border :columns="columns" :data="data"></Table>
		</div>
		<div class="fn-flex flex-row vf-pay">
			<div class="fn-flex flex-column text-center">
				<img :src="wechatpay" alt="" />
				<span>{{ $t('buy_wechat') }}</span>
			</div>
			<div class="fn-flex flex-column text-center">
				<img :src="alipay" alt="" />
				<span>{{ $t('buy_alipay') }}</span>
			</div>
		</div>
		<div class="vf-mark">
			{{ $t('buy_description1') }}
			<a href="mailto:fishuncle@126.com">fishuncle@126.com</a>
			{{ $t('buy_description2') }}
		</div>
	</Modal>
</template>
<script>
import { mapState } from 'vuex'
import platform from '../../store/platform'
export default {
	data() {
		return {
			wechatpay:
				'https://cdn.shenzhepei.com/hexo-theme-matery/public/medias/reward/wechat.jpg',
			alipay: 'https://cdn.shenzhepei.com/hexo-theme-matery/public/medias/reward/alipay.jpg',
			columns: [
				{
					title: '套餐',
					key: 'name',
					render: (h, params) => {
						return h('div', [
							h('Icon', {
								props: {
									type: 'ios-ribbon-outline',
									size: 24,
									color: 'rgba(18, 120, 246, 1)',
								},
							}),
							h('span', params.row.name),
						])
					},
				},
				{
					title: '价格',
					key: 'price',
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
										color: 'rgba(18, 120, 246, 1)',
									},
								}),
								h('span', item),
							])
						})
					},
				},
			],
			data: [],
			platform: platform.state,
		}
	},
	computed: {
		...mapState(['center']),
	},
	methods: {
		init() {
			this.data = [
				{
					name: this.$t('buy_title'),
					price: '¥500.00 / $70.00',
					content: [
						this.$t('buy_content1'),
						this.$t('buy_content2'),
						this.$t('buy_content3'),
						this.$t('buy_content4'),
					],
				},
			]
		},
	},
	watch: {
		language: {
			deep: true,
			immediate: true,
			handler: function () {
				this.init()
			},
		},
	},
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
