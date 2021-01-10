<template>
	<Checkbox-group class="vf-multiple fn-flex flex-row"
					v-model="parent.data[currentVal.key]"
					v-bind="currentVal.props"
					:class="[currentVal.className,error?'vf-error':'']"
					:style="{width:`${currentVal.widthRatio}%`}">
		<Checkbox v-for="item in selectList" :label="item.value"
				  :disabled="currentVal.disabled"
				  :key="item.value">
			<span>{{item.label}}</span>
		</Checkbox>
	</Checkbox-group>
</template>
<script>
	import request from "../../../utils/request";
	import {findComponentUpward} from "../../../utils";
	import func from "../../../mixins/func";

	export default {
		mixins: [func],
		computed: {
			selectList() {
				if (this.currentVal.selectListUrl) {
					return this.currentVal.ajaxList
				}
				return this.currentVal.selectList
			}
		},
		watch: {
			value(val) {
				this.currentVal = val;
				this.init();
			}
		},
		mounted() {
			this.init();
		},
		methods: {
			update() {
				this.init()
				this.parent.changeData({
					value: [],
					key: this.currentVal.key
				})
			},
			init() {
				if (this.currentVal.selectListUrl) {
					const data = {...this.parent.data, ...this.currentVal.customAjaxParams};
					request.post(this.currentVal.selectListUrl, data).then(res => {
						if (this.edit) {
							this.$store.commit('center/changeSelectList', {
								value: res,
								key: this.currentVal.key
							})
						} else {
							this.parent.changeSelectList({
								value: res,
								key: this.currentVal.key
							})
						}
					})
				}
				if (this.currentVal.controlOthersUpdateTargetKeys.length) {
					if (this.parent) {
						this.parent.controlOthersUpdate(this.currentVal.controlOthersUpdateTargetKeys)
					}
				}
				if (this.currentVal.controlOthersHideTargetKeys) {
					if (this.parent) {
						this.parent.controlOthersHide(this.currentVal.controlOthersHideTargetKeys, [])
					}
				}
			}
		}
	}
</script>
<style lang="less">
	@import "../../../less/conf";

	.vf-multiple {
		height: 32px;
		align-items: center;

		&.vf-error {
			.ivu-checkbox-inner {
				border-color: @error-color;
				outline: 0;
				box-shadow: 0 0 0 2px rgba(237, 64, 20, .2);
			}
		}
	}
</style>
