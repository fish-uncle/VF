<template>
	<div class="vf-control">
		<label>{{ $t('admin_right_btn18') }}</label>
		<i-input
			v-model="item.min"
			@on-change="e=>inputChange(e,'min')"
		/>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins: [func]
	}
</script>
