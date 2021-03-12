<template>
	<div class="vf-control">
		<label>{{ $t('admin_right_btn24') }}</label>
		<i-select v-model="item.timeFormat">
			<i-option value="yyyy-MM-dd">年-月-日</i-option>
			<i-option value="yyyy-MM-dd HH-mm-ss">年-月-日 时-分-秒</i-option>
			<i-option value="yyyy/MM/dd">年/月/日</i-option>
			<i-option value="yyyy/MM/dd HH-mm-ss">年/月/日 时/分/秒</i-option>
			<i-option value="HH’mm’ss">时’分’秒</i-option>
			<i-option value="HH-mm-ss">时-分-秒</i-option>
			<i-option value="HH/mm/ss">时/分/秒</i-option>
		</i-select>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins: [func]
	}
</script>
