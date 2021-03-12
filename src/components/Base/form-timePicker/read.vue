<template>
	<span class="vf-component-read">{{ date }}</span>
</template>
<script>
	import { findComponentUpward } from '../../../utils'
	import { format } from 'date-fns'

	export default {
		data () {
			return {
				currentVal: this.value,
				parent: findComponentUpward(this, 'FormList')
			}
		},
		props: ['value'],
		computed: {
			date () {
				if (typeof this.parent.data[this.currentVal.key] === 'string') {
					return this.parent.data[this.currentVal.key]
				}
				return format(this.parent.data[this.currentVal.key], 'hh\'mm\'ss')
			}
		},
		watch: {
			value (val) {
				this.currentVal = val
			}
		}
	}
</script>
