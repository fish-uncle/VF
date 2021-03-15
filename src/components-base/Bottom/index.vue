<template lang="pug">
	.vf-bottom.fn-flex
		span {{date}} © fish uncle️
		a(href="https://mail.miit.gov.cn/" target="_blank" rel="nofollow") 浙ICP备17040239号-2
</template>
<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator'

	@Component
	export default class Bottom extends Vue {
		date:number=new Date().getFullYear()
	}
</script>
<style lang="less">
	.vf-bottom {
		align-items: center;
		justify-content: center;
		height: 40px;
		color: #ddd;

		a {
			margin-left: 10px;
			color: #ddd;

			&:hover {
				text-decoration: underline;
			}
		}
	}
</style>
