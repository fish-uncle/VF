<template>
	<Menu
		class="fn-fl vf-help-left vf-scrollbar"
		:open-names="['1','7']"
		:active-name="help.helpName"
		@on-select="handleSelect"
	>
		<Submenu name="1">
			<template slot="title">
				{{ $t('help_left_1') }}
			</template>
			<MenuItem name="Introduce">{{ $t('help_left_1_1') }}</MenuItem>
			<MenuItem name="Catalogue introduction">{{ $t('help_left_1_2') }}</MenuItem>
			<MenuItem name="First example">{{ $t('help_left_1_3') }}</MenuItem>
			<MenuItem name="Quick use">{{ $t('help_left_1_4') }}</MenuItem>
		</Submenu>
		<Submenu name="2">
			<template slot="title">
				{{ $t('help_left_2') }}
			</template>
			<MenuItem name="Basic components">{{ $t('help_left_2_1') }}</MenuItem>
			<MenuItem name="Decorating components">{{ $t('help_left_2_2') }}</MenuItem>
			<MenuItem name="Senior components">{{ $t('help_left_2_3') }}</MenuItem>
		</Submenu>
		<Submenu name="3">
			<template slot="title">
				API
			</template>
			<MenuItem name="statusEdit">statusEdit</MenuItem>
			<MenuItem name="statusRead">statusRead</MenuItem>
			<MenuItem name="reset">reset</MenuItem>
			<MenuItem name="validate">validate</MenuItem>
			<MenuItem name="getData">getData</MenuItem>
			<MenuItem name="getDataByGroup">getDataByGroup</MenuItem>
			<MenuItem name="changeData">changeData</MenuItem>
			<MenuItem name="changeSelectList">changeSelectList</MenuItem>
		</Submenu>
		<Submenu name="4">
			<template slot="title">
				{{ $t('help_left_4') }}
			</template>
			<MenuItem name="onChange">onChange</MenuItem>
			<MenuItem name="onHide">onHide</MenuItem>
			<MenuItem name="onShow">onShow</MenuItem>
			<MenuItem name="onUpdate">onUpdate</MenuItem>
		</Submenu>
		<Submenu name="5">
			<template slot="title">
				{{ $t('help_left_5') }}
			</template>
			<MenuItem name="Dynamic data">{{ $t('help_left_5_1') }}</MenuItem>
			<MenuItem name="Internationalization">{{ $t('help_left_5_2') }}</MenuItem>
			<MenuItem name="Verification">{{ $t('help_left_5_3') }}</MenuItem>
		</Submenu>
		<Submenu name="7">
			<template slot="title">
				{{ $t('help_left_7') }}
			</template>
			<MenuItem name="Friendship sponsorship">{{ $t('help_left_7_1') }}</MenuItem>
			<MenuItem name="Feedback">{{ $t('help_left_7_2') }}</MenuItem>
		</Submenu>
	</Menu>
</template>
<script>
	import { mapState } from 'vuex'

	export default {
		computed: mapState(['help']),
		methods: {
			handleSelect (name) {
				const currentHash = decodeURIComponent(location.hash.replace('#', ''))
				const nowHash = `/help/${name}`
				if (encodeURIComponent(currentHash.replace(/\s+/g, '')) !== encodeURIComponent(nowHash.replace(/\s+/g, ''))) {
					this.$router.push(nowHash)
					window.scrollTo(0, 0)
				}
			}
		}
	}
</script>
<style lang="less">
  .vf-help-left {
    height: calc(100vh - 120px);
    overflow: auto;
  }
</style>
