<template>
	<Time-picker
		class="vf-time-range"
		v-bind="currentVal.props"
		type="timerange"
		v-model="parent.data[currentVal.key]"
		:class="[currentVal.className,error ? 'vf-error' : '']"
		:style="{width:`${currentVal.widthRatio}%`}"
		:clearable="currentVal.clearable"
		:placeholder="currentVal.placeholder"
		:format="currentVal.timeFormat"
		@on-change="dateChange"
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
					key: this.currentVal.key.split(';')[0]
				})
				this.parent.changeData({
					value: '',
					key: this.currentVal.key.split(';')[1]
				})
				this.parent.changeData({
					value: [],
					key: this.currentVal.key
				})
			},
			dateChange (value) {
				if (this.error) {
					this.parent.errorHide(this.currentVal.id)
				}
				this.parent.changeData({
					value: value[0],
					key: this.currentVal.key.split(';')[0]
				})
				this.parent.changeData({
					value: value[1],
					key: this.currentVal.key.split(';')[1]
				})
				this.parent.changeData({
					value: value,
					key: this.currentVal.key
				})
				this.eventsOnChange()
			}
		}
	}
</script>
<style lang="less">
	@import "../../../less/conf";

	.vf-time-range.vf-error {
		input {
			border-color: @error-color;
			outline: 0;
			box-shadow: 0 0 0 2px rgba(237, 64, 20, 0.2);
		}
	}
</style>
