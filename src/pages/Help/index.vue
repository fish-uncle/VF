<template lang="pug">
.fn-clear
	left
	.vf-help-content
		.markdown-body(v-highlight)
			div(v-html="help.helpContent", v-if="help.helpType === 1")
			component(:is="currentComponent", v-if="help.helpType === 2")
</template>
<script>
import Left from './left'
import 'markdown-it-vue/dist/markdown-it-vue.css'
import language from '../../store/language'
import help from '../../store/help'
import platform from '../../store/platform'

export default {
	data() {
		return {
			currentComponent: null,
			language: language.state,
			help: help.state,
			platform: platform.state,
		}
	},
	components: { Left },
	watch: {
		$route: function () {
			this.init()
		},
		language: {
			deep: true,
			immediate: true,
			handler: function () {
				this.init()
			},
		},
	},
	methods: {
		async init() {
			let { name } = this.$route.params
			name = name.replace(/%20/g, '')
			if (
				name === 'Feedback' ||
				name === 'Friendship sponsorship' ||
				name === 'First example' ||
				name === 'statusEdit' ||
				name === 'statusRead' ||
				name === 'validate' ||
				name === 'getData' ||
				name === 'getDataByGroup' ||
				name === 'reset' ||
				name === 'changeSelectList' ||
				name === 'changeData' ||
				name === 'onChange' ||
				name === 'onHide' ||
				name === 'onShow' ||
				name === 'onUpdate'
			) {
				this.currentComponent = () =>
					import(`../../../doc/${this.help.helpName}`)
				help.actions.changeHelp({
					helpName: name,
					helpContent: '',
					helpType: 2,
				})
			} else {
				const content = await import(
					`../../../doc/${name}-${this.$i18n.locale}.md`
				)
				help.actions.changeHelp({
					helpName: name,
					helpContent: content,
					helpType: 1,
				})
			}
		},
	},
	mounted() {
		if (this.platform.topIndex !== 3) {
			platform.actions.changeTop(3)
		}
		window.please = function () {
			this.$store.commit('model/pleaseShow')
		}.bind(this)
	},
}
</script>
<style lang="less">
.vf-help-content {
	min-height: calc(100vh - 120px);
	padding: 40px 80px;
	margin-left: 240px;
	overflow-y: auto;

	code {
		word-break: break-all;
		white-space: pre-wrap;
	}
}

.markdown-body {
	ul,
	li {
		list-style: circle;
	}
}
</style>
