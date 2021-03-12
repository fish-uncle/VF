<template>
	<div class="vf-control">
		<label>{{ $t('admin_right_btn4') }}</label>
		<Slider v-model="item.widthRatio" :max="100"/>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins: [func]
	}
</script>
