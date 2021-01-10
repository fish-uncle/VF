<template>
	<div>
		<v-list ref="form" :language="language" :view-scale="viewScale" :list="list" :labelWidth="labelWidth"
				:labelTextAlign="labelTextAlign">
			<template slot="component" slot-scope="{status,labelTextAlign,labelWidth,language}">
				<v-component
					:status="status"
					:value="{id:'a1',key:'a1',type:'input',
          labelTextAlign,labelWidth,language,
          required: false,
          widthRatio: 100,
          width:12,title:'slot-input',rules:'{\'pattern\': \'\',\'message\': \'该项格式不正确\'}'}"></v-component>
			</template>
			<template slot="table2_hover" slot-scope="{row,rowIndex}">
				<div class="text-right">slot table2_hover{{rowIndex}}</div>
			</template>
		</v-list>
		<div class="text-center">
			<Button type="primary" @click="handleSubmit">{{$t('model_preview_submit')}}</Button>
			<Button type="primary" @click="handleReset">{{$t('model_preview_reset')}}</Button>
			<Button type="primary" @click="handleEdit">{{$t('model_preview_edit')}}</Button>
			<Button type="primary" @click="handleRead">{{$t('model_preview_read')}}</Button>
		</div>
	</div>
</template>
<script>
	import {mapState} from 'vuex'
	import Select from '../../func/Base/form-select/index.component'
	import {uuid} from '../../utils'

	export default {
		data() {
			return {
				list: [[], []],
				viewScale: '24:0',
				labelWidth: 120,
				labelTextAlign: 'right',
				language: 'zh'
			}
		},
		computed: mapState(["component"]),
		methods: {
			handleReset() {
				this.$refs.form.reset()
			},
			handleEdit() {
				this.$refs.form.statusEdit()
			},
			handleRead() {
				this.$refs.form.statusRead()
			},
			handleSubmit() {
				if (!this.$refs.form.validate()) {
					alert(JSON.stringify(this.$refs.form.getData()))
				}
			},
			mockList() {
				let result = [];
				const component = JSON.parse(JSON.stringify(this.component.list));
				const i = Math.floor(Math.random() * (component.length - 1));
				const j = Math.floor(Math.random() * (component.length - 1));
				component.forEach((dragItem, index) => {
					const key_i = uuid()
					const key_l = uuid()
					let key = `${dragItem.type}_${key_i}`
					if (dragItem.dataType === 'MultiData') {
						key += `;${key_l}`
					}
					i === index ? dragItem.required = true : void 0;
					j === index ? dragItem.required = true : void 0;
					if (dragItem.type === 'image') {
						dragItem.action = 'https://cdn.shenzhepei.com/VF/upload.json'
					}
					if (dragItem.type === 'input') {
						key = 'test_hide_key'
					}
					if (dragItem.type === 'radio') {
						dragItem.title_zh = '单项（点我）'
						dragItem.controlOthersHideTargetKeys = {
							'11': 'test_hide_key'
						}
					}
					if (dragItem.type === 'select') {
						dragItem.title_zh = '下拉（看我）'
						dragItem.selectListUrl = 'https://cdn.shenzhepei.com/VF/select.json?a=1'
					}
					if (dragItem.type === 'table') {
						dragItem.tableAjaxUrl = 'https://cdn.shenzhepei.com/VF/table.json'
					}
					if (dragItem.type === 'table2') {
						dragItem.tableHover = true
						dragItem.tableAjaxUrl = 'https://cdn.shenzhepei.com/VF/table.json'
					}
					result.push({
						...dragItem,
						key, id: key, width: 12
					})
				});
				result.push(
					{
						...Select,
						title_zh: '下拉（看我）',
						key: 'select2', id: 'select2',
						widthRatio: 100,
						width: 12,
						controlOthersUpdateTargetKeys: ['select3']
					},
					{
						...Select,
						title_zh: '下拉（看我）',
						key: 'select3', id: 'select3',
						widthRatio: 100,
						selectListUrl: 'https://cdn.shenzhepei.com/VF/select.json?a=3',
						width: 12,
						controlOthersUpdateTargetKeys: ['select4']
					},
					{
						...Select,
						title_zh: '下拉（看我）',
						key: 'select4', id: 'select4',
						widthRatio: 100,
						selectListUrl: 'https://cdn.shenzhepei.com/VF/select.json?a=4',
						width: 12,
						controlOthersUpdateTargetKeys: ['test_hide_key']
					}
				)
				result.forEach(item => {
					delete item.icon
					delete item.labelWidth
					delete item.labelTextAlign
					delete item.changeList
					delete item.version
					delete item.componentType
					item.title = item.title_zh
					delete item.title_zh
					delete item.title_en
				})
				this.list = [result, []]
			}
		},
		mounted() {
			this.mockList();
		}
	}
</script>
