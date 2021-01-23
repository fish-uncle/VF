<template>
	<i-select v-model="parent.data[currentVal.key]"
			  v-bind="currentVal.props"
			  class="vf-select"
			  :class="[currentVal.className,error?'vf-error':'']"
			  :placeholder="currentVal.placeholder"
			  :disabled="currentVal.disabled" :style="{width:`${currentVal.widthRatio}%`}"
			  @on-change="clickChange" :clearable="currentVal.clearable">
		<template v-if="!currentVal.selectListUrl">
			<i-option v-for="item in currentVal.selectList"
					  :value="item.value" :key="item.value">
				{{item.label}}
			</i-option>
		</template>
		<template v-if="currentVal.selectListUrl">
			<i-option v-for="item in currentVal.ajaxList"
					  :value="item.value" :key="item.value">
				{{item.label}}
			</i-option>
		</template>
	</i-select>
</template>
<script>
	import request from '../../../utils/request'
	import func from '../../../mixins/component'

	export default {
		mixins: [func],
		mounted() {
			this.init()
		},
		methods: {
			update() {
				this.init()
				this.parent.changeData({
					value: '',
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
				if (this.currentVal.controlOthersUpdateTargetKeys) {
					if (this.currentVal.controlOthersUpdateTargetKeys.length) {
						if (this.parent) {
							this.parent.controlOthersUpdate(this.currentVal.controlOthersUpdateTargetKeys)
						}
					}
				}
				if (this.currentVal.controlOthersHideTargetKeys) {
					if (this.parent) {
						this.parent.controlOthersHide(this.currentVal.controlOthersHideTargetKeys, '')
					}
				}

			},
			clickChange(value) {
				if (this.error) {
					this.parent.errorHide(this.currentVal.id);
				}
				if (this.currentVal.controlOthersUpdateTargetKeys) {
					if (this.currentVal.controlOthersUpdateTargetKeys.length) {
						if (this.parent) {
							this.parent.controlOthersUpdate(this.currentVal.controlOthersUpdateTargetKeys)
						}
					}
				}
				if (this.currentVal.controlOthersHideTargetKeys) {
					if (this.parent) {
						this.parent.controlOthersHide(this.currentVal.controlOthersHideTargetKeys, value)
					}
				}
				this.eventsOnChange()
			}
		}
	}
</script>
<style lang="less">
	@import "../../../less/conf";

	.vf-select.vf-error {
		.ivu-select-selection {
			border-color: @error-color;
			outline: 0;
			box-shadow: 0 0 0 2px rgba(237, 64, 20, .2);
		}
	}
</style>
