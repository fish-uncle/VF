<template>
	<div>
		<h2>{{ $t('feedback_h2_1') }}</h2>
		<p>{{ $t('feedback_p_1') }}</p>
		<h2>{{ $t('feedback_h2_2') }}</h2>
		<p>
			<i class="ivu-icon ivu-icon-ios-mail"></i>：<a href="mailto:fishuncle@126.com">fishuncle@126.com</a>
		<p>
			<i class="ivu-icon ivu-icon-logo-github"></i>：<a
				href="https://github.com/fish-uncle"
				target="_blank"
				rel="nofollow"
			>Fish Uncle</a>
		</p>
		<p>
			QQ：184609680
		</p>
		<h2>{{ $t('feedback_h2_3') }}</h2>
		<div id="vcomments"></div>
	</div>
</template>
<script>
	import Valine from 'valine'

	export default {
		mounted () {
			new Valine({
				el: '#vcomments',
				appId: 'a28jr5SdbwSOV3DEyYeosiEp-gzGzoHsz',
				appKey: '6SlGudmOCjpBADcTcR5gaMu0',
				placeholder: '请输入内容',
				path: 'VF',
				avatar: 'mp',
				meta: ['nick', 'mail']
			})
		}
	}
</script>
