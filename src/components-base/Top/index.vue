<template lang="pug">
	.vf-top.fn-flex.flex-row.pos-r.z-index-999
		h2 VF
		Icon(type="ios-analytics" color="white")
		h1 {{$t('top_description')}}
		span.vf-version v{{version}}
		ul.fn-flex.flex-row.vf-nav
			li.pointer(:class="top.topIndex===1?'active':''" @click="handleIndex") {{$t('top_home')}}
			li.pointer(:class="top.topIndex===3?'active':''" @click="handleHelp") {{$t('top_documentation')}}
			li.pointer(:class="top.topIndex===2?'active':''" @click="handleUpdateLog") {{$t('top_update_log')}}
			li.pointer(:class="top.topIndex===4?'active':''" @click="handleExample") {{$t('top_example')}}
			li.pointer(@click="handleGithub")
				Icon(type="logo-github")
			//li.pointer(@click="handleBuyShow") {{$t('top_buy')}}
		i-select.vf-lang.pos-r(v-model="$i18n.locale" @on-change="handleLanguageChange")
			i-option(v-for="lang in langs" :key="lang.value" :value="lang.value") {{lang.title}}
</template>
<script>
	import {mapState} from "vuex";
	import language from "../../store/language";
	export default {
		computed: mapState(["top"]),
		data() {
			return {
				langs: [
					{
						title: '简体中文',
						value: 'zh',
					},
					{
						title: 'English',
						value: 'en',
					}
				],
				version: process.env.VUE_APP_VERSION
			}
		},
		methods: {
			handleExample(){
				if (this.$route.name !== 'PreviewAll')
					this.$router.push('/previewAll')
			},
			handleGithub() {
				window.open('https://github.com/fish-uncle/VF')
			},
			handleLanguageChange(data) {
				document.title = this.$t('top_description')
				localStorage.setItem("locale", data)
				language.mutations.change({lang: data})
			},
			handleIndex() {
				if (this.$route.name !== 'Admin')
					this.$router.push('/')
			},
			handleBuyShow() {
				this.$store.commit('model/buyShow')
			},
			handleUpdateLog() {
				if (this.$route.name !== 'UpdateLog')
					this.$router.push('/updateLog')
			},
			handleHelp() {
				if (this.$route.name !== 'Help')
					this.$router.push('/help/Introduce')
			}
		}
	}
</script>
<style lang="less">
	@import "../../less/conf";

	.vf-lang {
		margin-right: 20px;
		width: 100px !important;
		margin-left: 20px;
	}

	.vf-version {
		color: rgba(255, 255, 255, 0.9);
		margin-left: 10px;
		font-size: 16px;
		margin-right: auto;
	}

	.vf-nav {
		margin-right: 10px;

		li {
			font-size: 16px;
			user-select: none;
			margin-right: 30px;
			color: rgba(255, 255, 255, 0.9);
			position: relative;
			transition: all .3s;

			&:hover {
				opacity: 0.7;
			}

			&:before {
				position: absolute;
				content: '';
				width: 0;
				height: 1px;
				background-color: #fff;
				bottom: 0;
				left: 0;
				transition: all .3s;
			}

			&:last-child {
				margin-right: 0;
			}

			&.active {
				&:before {
					width: 100%;
				}
			}
		}
	}

	.vf-top {
		height: 80px;
		background: @themeColor;
		align-items: center;

		&:before {
			position: absolute;
			content: '';
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background: linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.4));
		}

		h2 {
			color: rgba(255, 255, 255, 0.9);
			font-size: 34px;
			margin-left: 20px;
			font-weight: normal;
			margin-right: 10px;
		}

		h1 {
			color: rgba(255, 255, 255, 0.9);
			font-size: 20px;
			margin-left: 10px;
			white-space: nowrap;
			max-width: 420px;
			text-overflow: ellipsis;
			overflow: hidden;
		}
	}
</style>
