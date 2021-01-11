<template>
	<div>
		<div class="vf-control">
			<label>{{$t('admin_right_btn10')}}</label>
			<RadioGroup :value="requiredVal" type="button" size="large"
						@on-change="requiredChange">
				<Radio :label="1">{{$t('admin_right_btn10_1')}}</Radio>
				<Radio :label="0">{{$t('admin_right_btn10_2')}}</Radio>
			</RadioGroup>
		</div>
		<div class="vf-control">
			<label>{{$t('admin_right_btn32')}}</label>
			<editor v-model="item.rules"
					@init="editorInit"
					lang="jsoniq"
					theme="chrome" height="400"></editor>
		</div>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins:[func],
	}
</script>
