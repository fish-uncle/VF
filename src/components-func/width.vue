<template>
	<div class="vf-control">
		<label>{{$t('admin_right_btn26')}}</label>
		<Slider v-model="item.width" :max="24">
		</Slider>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins:[func],
	}
</script>
