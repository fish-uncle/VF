<template>
	<Divider
		class="vf-divider"
		v-bind="currentVal.props"
		:style="{width:`${currentVal.widthRatio}%`}"
		:class="[currentVal.className]"
		:dashed="currentVal.dashed"
	/>
</template>
<script>
	import func from '../../../mixins/component'

	export default {
		mixins: [func]
	}
</script>
<style lang="less">
  .vf-divider {
    margin: 16px 0 0 0;
    min-width: auto;
  }
</style>
