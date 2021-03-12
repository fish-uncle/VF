<template>
	<Rate
		v-model="parent.data[currentVal.key]"
		v-bind="currentVal.props"
		class="vf-rate"
		:class="[currentVal.className]"
		:character="currentVal.character"
		:clearable="currentVal.clearable"
		:allow-half="true"
		:show-text="currentVal.showText"
		:disabled="true"
	>
	</Rate>
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
