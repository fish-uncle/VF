<template>
	<div class="vf-control">
		<label>{{ $t('admin_right_btn11') }}</label>
		<RadioGroup
			:value="item.clearable ? 1 : 0"
			type="button"
			size="large"

			@on-change="value=>checkChange(!!value,'clearable')"
		>
			<Radio :label="1">{{ $t('admin_right_btn11_1') }}</Radio>
			<Radio :label="0">{{ $t('admin_right_btn11_2') }}</Radio>
		</RadioGroup>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins: [func]
	}
</script>
