<template>
	<ColorPicker
		v-model="parent.data[currentVal.key]"
		v-bind="currentVal.props"
		class="vf-color-picker"
		:class="[currentVal.className,error ? 'vf-error' : '']"
		@on-change="colorChange"
		:alpha="currentVal.alpha"
		:disabled="currentVal.disabled"
	/>
</template>
<script>
	import func from '../../../mixins/component'

	export default {
		mixins: [func],
		methods: {
			update () {
				this.parent.changeData({
					value: '',
					key: this.currentVal.key
				})
			},
			colorChange (value) {
				if (this.error) {
					this.parent.errorHide(this.currentVal.id)
				}
				this.parent.changeData({
					value,
					key: this.currentVal.key
				})
				this.eventsOnChange()
			}
		}
	}
</script>
<style lang="less">
	@import "../../../less/conf";

	.vf-color-picker.vf-error {
		.ivu-color-picker-input {
			border-color: @error-color;
			outline: 0;
			box-shadow: 0 0 0 2px rgba(237, 64, 20, 0.2);
		}
	}
</style>
