<template>
	<div class="vf-control">
		<label>{{ $t('admin_right_btn9') }}</label>
		<RadioGroup
			:value="item.disabled ? 1 : 0"
			type="button"
			size="large"
			@on-change="value=>checkChange(!!value,'disabled')"
		>
			<Radio :label="1">{{ $t('admin_right_btn9_1') }}</Radio>
			<Radio :label="0">{{ $t('admin_right_btn9_2') }}</Radio>
		</RadioGroup>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins: [func]
	}
</script>
