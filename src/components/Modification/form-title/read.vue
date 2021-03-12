<template>
	<index :language="language" :value="value"/>
</template>
<script>
	import index from './index'

	export default {
		components: {
			index
		},
		props: ['language', 'value']
	}
</script>
