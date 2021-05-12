<template>
	<Modal
		v-model="platform.readVisible"
		:closable="false"
		:footer-hide="true"
		:scrollable="true"
	>
		<editor
			v-model="config"
			@init="editorInit"
			lang="jsoniq"
			theme="chrome"
			height="400"
		></editor>
		<div class="text-center">
			<Button type="primary" @click="handleRead">{{ $t('model_read') }}</Button>
		</div>
	</Modal>
</template>
<script>
	import { mapState } from 'vuex'
	import { str2Obj } from '../../utils'
	import component from '../../store/component'
	import platform from '../../store/platform'

	export default {
		data () {
			return {
				config: '',
				component: component.state,
				platform: platform.state,
			}
		},
		computed: mapState(['model']),
		methods: {
			handleRead () {
				const config = str2Obj(this.config)
				config.list.forEach(child => {
					child.forEach(item => {
						item.changeList = this.component.changeList[item.type]
						item.title_zh = item.title_zh || item.title
						item.title_en = item.title_en || item.title
						if (!item.labelWidth) {
							item.labelWidth = config.labelWidth
						}
						if (!item.labelTextAlign) {
							item.labelTextAlign = config.labelTextAlign
						}
					})
				})
				this.$store.commit('center/set', {
					list: config.list,
					viewScale: config.viewScale,
					labelWidth: config.labelWidth,
					labelTextAlign: config.labelTextAlign,
					group: config.group
				})
			}
		}
	}
</script>
