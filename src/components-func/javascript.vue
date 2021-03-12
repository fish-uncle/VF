<template>
	<div class="vf-control">
		<label>{{ $t('admin_right_btn23') }}</label>
		<editor
			v-model="item.code"
			@init="editorInit"
			lang="javascript"
			theme="chrome"
			height="400"
		></editor>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins: [func]
	}
</script>
