<template>
	<div class="vf-control">
		<label>{{ $t('admin_right_btn17') }}</label>
		<i-input
			v-model="item.max"
			@on-change="e=>inputChange(e,'max')"
		/>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins: [func]
	}
</script>
