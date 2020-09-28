<template>
  <span class="vf-component-read">
    <img :src="item.url" alt="" v-for="item in parent.data[currentVal.key]"
		 :key="item.url"
		 :style="{maxHeight:'58px',maxWidth:'58px',marginRight:'4px'}"/>
  </span>
</template>
<script>
	import {findComponentUpward} from '../../utils'

	export default {
		data() {
			return {
				currentVal: this.value,
				parent: findComponentUpward(this, 'FormList')
			}
		},
		props: ['value'],
		watch: {
			value(val) {
				this.currentVal = val;
			}
		},
	}
</script>
