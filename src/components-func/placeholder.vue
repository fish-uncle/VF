<template>
	<div class="vf-control">
		<label>{{ $t('admin_right_btn8') }}</label>
		<i-input
			v-model="item.placeholder"
			@on-change="e=>inputChange(e,'placeholder')"
		/>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins: [func]
	}
</script>
