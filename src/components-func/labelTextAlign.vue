<template>
	<div class="vf-control">
		<label>{{$t('admin_right_btn2')}}</label>
		<RadioGroup v-model="item.labelTextAlign" type="button" size="large"
					@on-change="value=>checkChange(value,'labelTextAlign')">
			<Radio label="left">{{$t('admin_right_btn2_1')}}</Radio>
			<Radio label="right">{{$t('admin_right_btn2_2')}}</Radio>
		</RadioGroup>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins:[func],
	}
</script>
