<template>
	<Slider
		v-model="parent.data[currentVal.key]"
		v-bind="currentVal.props"
		class="vf-slider"
		:style="{width:`${currentVal.widthRatio}%`}"
		:class="[currentVal.className]"
		:step="Number(currentVal.step)"
		:max="Number(currentVal.max)"
		:min="Number(currentVal.min)"
		:show-input="parent.data[currentVal.showInput]"
		:disabled="true"
	>
	</Slider>
</template>
<script>
	import { findComponentUpward } from '../../../utils'

	export default {
		data () {
			return {
				currentVal: this.value,
				parent: findComponentUpward(this, 'FormList')
			}
		},
		props: ['value'],
		watch: {
			value (val) {
				this.currentVal = val
			}
		},
		methods: {
			update () {
				this.parent.changeData({
					value: '',
					key: this.currentVal.key
				})
			}
		}
	}
</script>
