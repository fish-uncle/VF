<template>
	<div class="vf-form-list">
		<slot/>
		<modelData :data="data"/>
	</div>
</template>
<script>
	import { mapState } from 'vuex'
	import ModelData from '../ModelData'
	import formList from '../../mixins/formList'

	export default {
		name: 'FormList',
		mixins: [formList],
		components: {
			ModelData
		},
		computed: {
			...mapState(['center']),
			viewScale () {
				return this.center.viewScale.split(':')
			}
		},
		beforeDestroy () {
			this.$agent.$off('formDataRemove', this.handleChangeKeyForRemove)
			this.$agent.$off('formDataAdd', this.handleChangeKeyForDrag)
			this.$agent.$off('formDataChange', this.handleChangeKeyForChangeList)
		},
		mounted () {
			this.$agent.$on('formDataRemove', this.handleChangeKeyForRemove)
			this.$agent.$on('formDataAdd', this.handleChangeKeyForDrag)
			this.$agent.$on('formDataChange', this.handleChangeKeyForChangeList)
		}
	}
</script>
<style lang="less">
	.vf-form-list {
		width: 100%;
	}
</style>
