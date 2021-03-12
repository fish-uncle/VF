<template>
	<span class="vf-component-read">{{ parent.data[currentVal.key] }}</span>
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
		}
	}
</script>
