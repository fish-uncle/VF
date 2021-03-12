<template>
	<div class="vf-control">
		<label>{{ $t('admin_right_btn5') }}</label>
		<RadioGroup
			:value="item.dashed ? 1 : 0"
			type="button"
			size="large"
			@on-change="value=>checkChange(!!value,'dashed')"
		>
			<Radio :label="1">{{ $t('admin_right_btn5_1') }}</Radio>
			<Radio :label="0">{{ $t('admin_right_btn5_2') }}</Radio>
		</RadioGroup>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins: [func]
	}
</script>
