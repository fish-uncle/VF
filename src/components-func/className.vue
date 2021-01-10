<template>
	<div class="vf-control">
		<label>{{$t('admin_right_btn25')}}</label>
		<i-input v-model="item.className"
				 @on-change="e=>inputChange(e,'className')">
		</i-input>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins:[func],
	}
</script>
