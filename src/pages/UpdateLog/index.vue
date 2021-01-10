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
	import {Component,Vue} from 'vue-property-decorator'

	@Component
	class UpdateLog extends Vue {
		log:any[]=[]
		async init () {
			const log = await import(`./log-${this.$i18n.locale}`)
			this.log = log.default
		}
		beforeDestroy () {
			this.$agent.$off ('languageChange', this.init)
		}
		mounted () {
			this.$store.commit ('top/changeTop', { topIndex: 2 })
			this.$agent.$on ('languageChange', this.init)
			this.init ()
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
		padding: 20px;
		height: calc(100vh - 120px);
		overflow-y: auto;

		p {
			margin: 5px;
			font-size: 14px;
		}

		code {
			margin: 8px 0 10px;
			background: #f7f7f7;
			padding: 1px 5px;
			border-radius: 3px;
			color: #666;
			border: 1px solid #eee;
			display: inline-block;
		}

		.vf-log {
			list-style: circle;
			padding-left: 22px;

			li {
				list-style: circle;
				margin-bottom: 5px;
				font-size: 14px;
			}
		}
	}
</style>
