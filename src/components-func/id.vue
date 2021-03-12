<template>
	<div class="vf-control">
		<label>{{ $t('admin_right_btn6') }}</label>
		<i-input v-model="item.id" :disabled="true"/>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins: [func]
	}
</script>
