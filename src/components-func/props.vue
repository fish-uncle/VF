<template>
	<div class="vf-control">
		<label>props</label>
		<editor :value="propsVal" @input="value=>editorChange(value,'props')"
				@init="editorInit" lang="jsoniq" theme="chrome" height="100"></editor>
	</div>
</template>
<script>
	import func from '../mixins/func'
	export default {
		mixins:[func],
	}
</script>
