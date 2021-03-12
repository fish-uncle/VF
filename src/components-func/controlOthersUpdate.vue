<template>
	<div class="vf-control">
		<label>{{ $t('admin_right_btn21') }}</label>
		<Transfer
			not-found-text=""
			:data="componentList"
			:titles="[$t('admin_right_btn21_1'),$t('admin_right_btn21_2')]"
			:target-keys="item.controlOthersUpdateTargetKeys"
			@on-change="controlOthersUpdateChange"
		></Transfer>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins: [func]
	}
</script>
