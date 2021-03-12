<template>
	<div class="vf-control">
		<label>events.onShow()</label>
		<editor
			v-model="item.events.onShow"
			@init="editorInit"
			lang="jsoniq"
			theme="chrome"
			height="100"
		></editor>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins: [func]
	}
</script>
