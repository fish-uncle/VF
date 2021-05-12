<template lang="pug">
.vf-top.fn-flex.flex-row.pos-r.z-index-999
	h2 VF
	Icon(type="ios-analytics", color="white")
	h1 {{ $t('top_description') }}
	span.vf-version v{{ version }}
	ul.fn-flex.flex-row.vf-nav
		li.pointer(
			:class="platform.topIndex === 1 ? 'active' : ''",
			@click="handleIndex") {{ $t('top_home') }}
		li.pointer(
			:class="platform.topIndex === 3 ? 'active' : ''",
			@click="handleHelp") {{ $t('top_documentation') }}
		li.pointer(
			:class="platform.topIndex === 2 ? 'active' : ''",
			@click="handleUpdateLog") {{ $t('top_update_log') }}
		li.pointer(
			:class="platform.topIndex === 4 ? 'active' : ''",
			@click="handleExample") {{ $t('top_example') }}
		li.pointer(@click="handleGithub")
			Icon(type="logo-github")
		//li.pointer(@click="handleBuyShow") {{$t('top_buy')}}
	i-select.vf-lang.pos-r(
		v-model="$i18n.locale",
		@on-change="handleLanguageChange")
		i-option(v-for="lang in langs", :key="lang.value", :value="lang.value") {{ lang.title }}
</template>
<script>
import language from '../../store/language'
import platform from '../../store/platform'
export default {
	data() {
		return {
			platform: platform.state,
			langs: [
				{
					title: '简体中文',
					value: 'zh',
				},
				{
					title: 'English',
					value: 'en',
				},
			],
			version: process.env.VUE_APP_VERSION,
		}
	},
	methods: {
		handleExample() {
			if (this.$route.name !== 'PreviewAll') {
				this.$router.push('/previewAll')
			}
		},
		handleGithub() {
			window.open('https://github.com/fish-uncle/VF')
		},
		handleLanguageChange(data) {
			document.title = this.$t('top_description')
			localStorage.setItem('locale', data)
			language.actions.change(data)
		},
		handleIndex() {
			if (this.$route.name !== 'Admin') {
				this.$router.push('/')
			}
		},
		handleBuyShow() {
			this.$store.commit('model/buyShow')
		},
		handleUpdateLog() {
			if (this.$route.name !== 'UpdateLog') {
				this.$router.push('/updateLog')
			}
		},
		handleHelp() {
			if (this.$route.name !== 'Help') {
				this.$router.push('/help/Introduce')
			}
		},
	},
}
</script>
<style lang="less">
@import '../../less/conf';

.vf-lang {
	width: 100px !important;
	margin-right: 20px;
	margin-left: 20px;
}

.vf-version {
	margin-right: auto;
	margin-left: 10px;
	font-size: 16px;
	color: rgba(255, 255, 255, 0.9);
}

.vf-nav {
	margin-right: 10px;

	li {
		position: relative;
		margin-right: 30px;
		font-size: 16px;
		color: rgba(255, 255, 255, 0.9);
		user-select: none;
		transition: all 0.3s;

		&:hover {
			opacity: 0.7;
		}

		&::before {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 0;
			height: 1px;
			content: '';
			background-color: #fff;
			transition: all 0.3s;
		}

		&:last-child {
			margin-right: 0;
		}

		&.active {
			&::before {
				width: 100%;
			}
		}
	}
}

.vf-top {
	align-items: center;
	height: 80px;
	background: @themeColor;

	&::before {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		content: '';
		background: linear-gradient(
			to right,
			rgba(255, 255, 255, 0.1),
			rgba(255, 255, 255, 0.4)
		);
	}

	h2 {
		margin-right: 10px;
		margin-left: 20px;
		font-size: 34px;
		font-weight: normal;
		color: rgba(255, 255, 255, 0.9);
	}

	h1 {
		max-width: 420px;
		margin-left: 10px;
		overflow: hidden;
		font-size: 20px;
		color: rgba(255, 255, 255, 0.9);
		text-overflow: ellipsis;
		white-space: nowrap;
	}
}
</style>
