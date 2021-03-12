<template>
	<div class="vf-control">
		<label>{{ $t('admin_right_btn36') }}</label>
		<i-input v-model="item.amapKey"></i-input>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins: [func]
	}
</script>
