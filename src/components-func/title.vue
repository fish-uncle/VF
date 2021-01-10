<template>
	<div class="vf-control">
		<label>{{$t('admin_right_btn1')}}</label>
		<i-input v-model="item[`title_${language.lang}`]"
				 @on-change="e=>inputChange(e,`title_${language.lang}`)"/>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins:[func],
	}
</script>
