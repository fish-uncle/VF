<template>
	<div class="vf-control">
		<label>{{ $t('admin_right_btn12') }}</label>
		<RadioGroup
			:value="item.alpha ? 1 : 0"
			type="button"
			size="large"
    
			@on-change="value=>checkChange(!!value,'alpha')"
		>
			<Radio :label="1">{{ $t('admin_right_btn12_1') }}</Radio>
			<Radio :label="0">{{ $t('admin_right_btn12_2') }}</Radio>
		</RadioGroup>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins: [func]
	}
</script>
