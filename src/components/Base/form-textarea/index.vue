<template>
	<i-input
		v-bind="currentVal.props"
		type="textarea"
		clas="vf-textarea"
		:class="[currentVal.className,error ? 'vf-error' : '']"
		v-model="parent.data[currentVal.key]"
		:disabled="currentVal.disabled"
		:placeholder="currentVal.placeholder"
		:style="{width:`${currentVal.widthRatio}%`}"
		@on-change="inputChange"
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
			inputChange (e) {
				if (this.error) {
					this.parent.errorHide(this.currentVal.id)
				}
				this.eventsOnChange(e)
			}
		}
	}
</script>
<style lang="less">
	@import "../../../less/conf";

	.vf-textarea.vf-error {
		input {
			border-color: @error-color;
			outline: 0;
			box-shadow: 0 0 0 2px rgba(237, 64, 20, 0.2);
		}
	}
</style>
