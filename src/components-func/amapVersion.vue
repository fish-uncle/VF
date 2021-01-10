<template>
	<div class="vf-control">
		<label>{{$t('admin_right_btn35')}}</label>
		<i-input v-model="item.amapVersion"></i-input>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins:[func],
	}
</script>
