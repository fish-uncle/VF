<template>
	<div class="vf-control">
		<label>{{ $t('admin_right_btn22') }}</label>
		<ul v-if="item.selectListUrl">
			<li v-for="child in item.ajaxList" :key="child.value">
				<span>{{ $t('admin_right_btn22_1') }} <strong>{{ child.label }}</strong> {{ $t('admin_right_btn22_2') }}</span>
				<Transfer
					not-found-text=""
					:data="componentList"
					:titles="[$t('admin_right_btn22_3'),$t('admin_right_btn22_4')]"
					:target-keys="item.controlOthersHideTargetKeys[child.value]"
					@on-change="targetKeys=>controlOthersHideChange(targetKeys,child.value)"
				></Transfer>
			</li>
		</ul>
		<ul v-if="!item.selectListUrl">
			<li v-for="child in item.selectList" :key="child.value">
				<span>{{ $t('admin_right_btn22_1') }} <strong>{{ child.label }}</strong> {{ $t('admin_right_btn22_2') }}</span>
				<Transfer
					not-found-text=""
					:data="componentList"
					:titles="[$t('admin_right_btn22_3'),$t('admin_right_btn22_4')]"
					:target-keys="item.controlOthersHideTargetKeys[child.value]"
					@on-change="targetKeys=>controlOthersHideChange(targetKeys,child.value)"
				></Transfer>
			</li>
		</ul>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins: [func]
	}
</script>
