<template>
	<div class="vf-control">
		<label>{{$t('admin_right_btn3')}}</label>
		<i-input v-model="item.labelWidth"
				 @on-change="e=>numberChange(e,'labelWidth')"><span slot="append">px</span>
		</i-input>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins:[func],
	}
</script>
