<template>
	<div id="app">
		<top/>
		<Spin size="large" fix class="z-index-999" v-if="model.loading"></Spin>
		<router-view/>
		<modelBuy/>
		<modelPlease/>
		<bottom/>
	</div>
</template>
<script>
	import {mapState} from 'vuex';
	import ModelBuy from './components/ModelBuy'
	import ModelPlease from './components/ModelPlease'
	import Top from './components/Top';
	import Bottom from './components/Bottom';

	export default {
		components: {
			ModelBuy, ModelPlease, Top, Bottom
		},
		computed: {
			...mapState(["model"]),
		},
		mounted() {
			document.title = this.$t('top_description');
		}
	}
</script>
<style lang="less">
	body {
		min-width: 1170px;
	}
</style>
