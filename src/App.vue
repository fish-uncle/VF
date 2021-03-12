<template>
	<div id="app">
		<top/>
		<Spin
			size="large"
			fix
			class="z-index-999"
			v-if="model.loading"
		></Spin>
		<router-view/>
		<modelBuy/>
		<modelPlease/>
		<bottom/>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	import ModelBuy from './components-base/ModelBuy'
	import ModelPlease from './components-base/ModelPlease'
	import Top from './components-base/Top'
	import Bottom from './components-base/Bottom'

	export default {
		components: {
			ModelBuy, ModelPlease, Top, Bottom
		},
		computed: {
			...mapState(['model'])
		},
		mounted () {
			document.title = this.$t('top_description')
		}
	}
</script>
<style lang="less">
	body {
		min-width: 1170px;
	}
</style>
