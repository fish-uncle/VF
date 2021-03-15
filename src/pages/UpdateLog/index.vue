<template lang="pug">
	Timeline.vf-update-log.vf-scrollbar
		TimelineItem(v-for="item in log" :key="item.version")
			.vf-update-version {{item.version}}
			p
				code {{item.time}}
			ul.vf-log
				li(v-for="(child,index) in item.content" :key="index") {{child}}
</template>
<script lang="ts">
	import { Component, Vue, Watch } from 'vue-property-decorator'
	import language from '../../store/language'
	@Component
	class UpdateLog extends Vue {
		log:any[]=[]
		language=language.store

		@Watch('language', { immediate: true, deep: true })
		async init () {
			const log = await import(`./log-${this.$i18n.locale}`)
			this.log = log.default
		}

		mounted () {
			this.$store.commit('top/changeTop', { topIndex: 2 })
		}
	}
	export default UpdateLog
</script>
<style lang="less">
	.vf-update-version {
		font-size: 20px;
		font-weight: 400;
	}

	.vf-update-log {
		height: calc(100vh - 120px);
		padding: 20px;
		overflow-y: auto;

		p {
			margin: 5px;
			font-size: 14px;
		}

		code {
			display: inline-block;
			padding: 1px 5px;
			margin: 8px 0 10px;
			color: #666;
			background: #f7f7f7;
			border: 1px solid #eee;
			border-radius: 3px;
		}

		.vf-log {
			padding-left: 22px;
			list-style: circle;

			li {
				margin-bottom: 5px;
				font-size: 14px;
				list-style: circle;
			}
		}
	}
</style>
