<template>
	<div>
		<template v-for="child in list">
			<component
				:key="child"
				:is="currentComponent[child]"
				v-if="item.changeList.indexOf(child) !== -1"
			/>
		</template>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	import { obj2Str } from '../../utils'

	export default {
		props: ['list'],
		data () {
			return {
				currentComponent: {}
			}
		},
		computed: {
			...mapState(['center']),
			item () {
				if (this.center.list.length > 0) {
					return this.center.list[this.center.currentScale][this.center.current]
						? this.center.list[this.center.currentScale][this.center.current] : { changeList: [] }
				} else {
					return { changeList: [] }
				}
			}
		},
		mounted () {
			const components = require.context('../../components-func', true, /\.(vue)$/)
			components.keys().forEach(child => {
				const name = child.split('/')[1].replace('.vue', '')
				this.currentComponent[name] = components(child).default
			})
		}
	}
</script>
<style lang="less">
	@import "../../less/conf";

	.vf-right {
		width: 440px;
		height: calc(100vh - 130px);
		padding-right: 10px;
		margin-top: 10px;
		overflow-y: auto;

		.tenant-select {
			top: 0;
			right: 10px;
			width: 200px;
		}

		h2 {
			height: 40px;
			margin-right: 10px;
			font-size: 16px;
			color: rgba(0, 0, 0, 0.3);
			user-select: none;

			&:hover,
			&.active {
				color: rgba(0, 0, 0, 0.65);
			}
		}

		.vf-control {
			> label {
				display: block;
				margin-bottom: 10px;
				font-size: 14px;
			}
		}

		.ivu-input,
		.ivu-input-group-append {
			height: 36px;
		}

		.vf-code {
			textarea {
				height: auto;
			}
		}

		.ivu-input-wrapper,
		.ivu-select {
			margin-bottom: 10px;
		}

		.ivu-radio-group-button {
			display: block;
			margin-bottom: 10px;
		}

		.ivu-radio-wrapper {
			width: 50%;
			text-align: center;
		}

		.ivu-radio-group-button .ivu-radio-wrapper-checked {
			color: #fff;
			background: #2d8cf0;
		}
	}

	.vf-select-list {
		margin-top: 10px;

		.ivu-input {
			height: 36px;
		}

		.ivu-input-wrapper {
			margin-bottom: 10px;
		}
	}

	.vf-select-del,
	.vf-select-add {
		width: 36px;
		height: 36px;
		font-size: 18px;
		line-height: 36px;
		color: @themeColor;
		user-select: none;
		border: 1px solid @themeColor;
		border-radius: 4px;
		transition: all 0.3s;

		&:hover {
			color: #fff;
			background: @themeColor;
		}

		&.disabled {
			color: #ddd;
			cursor: not-allowed;
			background: @disabledColor;
			border: 1px solid #ddd;
		}
	}

	.vf-select-del {
		margin-right: 10px;
		margin-left: 10px;
	}
</style>
