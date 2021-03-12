<template>
	<div class="vf-control">
		<label>{{ $t('admin_right_btn31') }}</label>
		<i-input
			v-model="item.tableAjaxUrl"
			@on-change="e=>inputChange(e,'tableAjaxUrl')"
		/>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins: [func]
	}
</script>
