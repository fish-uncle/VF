<template>
	<div class="vf-control">
		<label>{{ $t('admin_right_btn16') }}</label>
		<i-input
			v-model="item.step"
			@on-change="e=>inputChange(e,'step')"
		/>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins: [func]
	}
</script>
