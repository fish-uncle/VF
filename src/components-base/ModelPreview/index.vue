<template>
	<Modal width="1000" v-model="model.previewVisible" :closable="false" :footer-hide="true" :scrollable="true">
		<v-list ref="form" :view-scale="center.viewScale" :list="center.list"
				:labelTextAlign="center.labelTextAlign"
				:language="language.lang"
				:group="center.group"
				:labelWidth="center.labelWidth"/>
		<div class="text-center">
			<Button type="primary" @click="handleAdd">{{$t('model_preview_add')}}</Button>
			<Button type="primary" @click="handleSubmit">{{$t('model_preview_submit')}}</Button>
			<Button type="primary" @click="handleReset">{{$t('model_preview_reset')}}</Button>
			<Button type="primary" @click="handleEdit">{{$t('model_preview_edit')}}</Button>
			<Button type="primary" @click="handleRead">{{$t('model_preview_read')}}</Button>
		</div>
	</Modal>
</template>
<script>
	import {mapState} from 'vuex'
	import {uuid} from '../../utils'
	import language from '../../store/language'
	import component from '../../store/component'

	export default {
		data() {
			return {
				show: false,
				language: language.store,
				component: component.store,
			}
		},
		computed: mapState(['model', 'center']),
		watch: {
			"$store.state.model.previewVisible"(newVal) {
				if (newVal) {
					this.$refs.form.reset()
				}
			},
		},
		methods: {
			handleAdd() {
				const list = this.center.list
				const dragItem = JSON.parse(JSON.stringify(this.component.list[0]))
				const id = uuid()
				dragItem.id = id
				dragItem.key = id
				dragItem.labelWidth = this.center.labelWidth
				dragItem.labelTextAlign = this.center.labelTextAlign
				list[0].push(dragItem)
				const viewScale = this.center.viewScale
				this.$store.commit('center/set', {list, viewScale})
			},
			handleSubmit() {
				if (!this.$refs.form.validate()) {
					alert(JSON.stringify(this.$refs.form.getData()))
					alert(JSON.stringify(this.$refs.form.getDataByGroup()))
				}
			},
			handleReset() {
				this.$refs.form.reset()
			},
			handleEdit() {
				this.$refs.form.statusEdit()
			},
			handleRead() {
				this.$refs.form.statusRead()
			}
		}
	}
</script>
