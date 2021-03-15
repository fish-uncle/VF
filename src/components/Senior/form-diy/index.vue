<template>
	<div
		class="vf-diy"
		:class="[currentVal.className,error ? 'vf-error' : '']"
		:style="{width:`${currentVal.widthRatio}%`}"
	/>
</template>
<script>
	import func from '../../../mixins/component'

	export default {
		mixins: [func]
	}
</script>
<style lang="less">
	@import "../../../less/conf";
</style>
