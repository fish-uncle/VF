<template>
	<div id="app">
		<top />
		<router-view />
		<modelBuy />
		<modelPlease />
		<bottom />
	</div>
</template>
<script>
import ModelBuy from './components-base/ModelBuy'
import ModelPlease from './components-base/ModelPlease'
import Top from './components-base/Top'
import Bottom from './components-base/Bottom'

export default {
	components: {
		ModelBuy,
		ModelPlease,
		Top,
		Bottom,
	},
	mounted() {
		document.title = this.$t('top_description')
	},
}
</script>
<style lang="less">
body {
	min-width: 1170px;
}
</style>
