<template>
	<Modal
		v-model="platform.dataVisible"
		:closable="false"
		:footer-hide="true"
		:scrollable="true"
	>
		<json-viewer
			:value="data"
			:expand-depth="5"
			copyable
			boxed
			sort
		></json-viewer>
	</Modal>
</template>
<script>
import platform from '../../store/platform'
export default {
	data() {
		return {
			platform: platform.state,
		}
	},
	props: ['data'],
}
</script>
