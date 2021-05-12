import Schema from 'async-validator'
import { str2Obj } from '../utils'

export default {
	data() {
		return {
			data: {},
			tableData: {},
			child: {},
		}
	},
	methods: {
		// 修改值
		changeTableData({ key, value }) {
			this.$set(this.tableData, key, value)
		},
		// 修改值
		changeData({ key, value }) {
			this.data[key] = value
		},
		// 获取 form 数据
		getData() {
			const data = JSON.parse(JSON.stringify(this.data))
			const componentList = []
			for (let i = 0; i <= this.currentList.length - 1; i++) {
				componentList.push(...this.currentList[i])
			}
			for (let i = 0; i <= componentList.length - 1; i++) {
				if (componentList[i].dataType === 'MultiData') {
					delete data[componentList[i].key]
					if (!this.child[componentList[i].id].visibleStatus()) {
						delete data[componentList[i].key.split(';')[0]]
						delete data[componentList[i].key.split(';')[1]]
					}
				}
				if (!this.child[componentList[i].id].visibleStatus()) {
					delete data[componentList[i].key]
				}
			}
			return data
		},
		// 获取 form 数据 进行了分组
		getDataByGroup() {
			const data = JSON.parse(JSON.stringify(this.data))
			const componentList = []
			for (let i = 0; i <= this.currentList.length - 1; i++) {
				componentList.push(...this.currentList[i])
			}
			for (let i = 0; i <= componentList.length - 1; i++) {
				if (componentList[i].group) {
					let have = false
					this.group.forEach(item => {
						if (componentList[i].group === item.id) {
							have = item.key
						}
					})
					if (have) {
						if (!data[have]) {
							data[have] = {}
						}
						if (!this.child[componentList[i].id].visibleStatus()) {
							delete data[componentList[i].key]
							if (componentList[i].dataType === 'MultiData') {
								delete data[componentList[i].key.split(';')[0]]
								delete data[componentList[i].key.split(';')[1]]
							}
						} else {
							if (componentList[i].dataType === 'MultiData') {
								data[have][componentList[i].key.split(';')[0]] =
									data[componentList[i].key.split(';')[0]]
								data[have][componentList[i].key.split(';')[1]] =
									data[componentList[i].key.split(';')[1]]
								delete data[componentList[i].key]
								delete data[componentList[i].key.split(';')[0]]
								delete data[componentList[i].key.split(';')[1]]
							} else {
								data[have][componentList[i].key] =
									data[componentList[i].key]
								delete data[componentList[i].key]
							}
						}
					}
				}
			}
			return data
		},
		// 控制其他隐藏
		controlOthersHide(controlOthersHideTargetKeys, value) {
			for (const key in controlOthersHideTargetKeys) {
				for (const id in this.child) {
					if (controlOthersHideTargetKeys[key].indexOf(id) !== -1) {
						const k = key.toString()
						if (Array.isArray(value)) {
							const v = value.map(item => item.toString())
							if (v.indexOf(k) !== -1) {
								this.child[id].hide()
							} else {
								this.child[id].show()
							}
						} else {
							const v = value ? value.toString() : value
							if (k === v) {
								this.child[id].hide()
							} else {
								this.child[id].show()
							}
						}
					}
				}
			}
		},
		// 控制其他更新
		controlOthersUpdate(controlOthersUpdateTargetKeys) {
			controlOthersUpdateTargetKeys.forEach(item => {
				this.child[item].update()
			})
		},
		// 暴露方法以供调用
		childMounted(obj) {
			this.child[obj.id] = obj
		},
		// 拖动面板 添加组件时，添加key
		handleChangeKeyForDrag({ dragItem }) {
			const data = this.data
			switch (dragItem.dataType) {
				case 'Boolean':
					this.$set(data, dragItem.key, false)
					break
				case 'Number':
					this.$set(data, dragItem.key, 0)
					break
				case 'Null':
					break
				case 'Table':
					this.$set(this.tableData, dragItem.key, [])
					break
				case 'Array':
					this.$set(data, dragItem.key, [])
					break
				case 'MultiData':
					this.$set(data, dragItem.key, [])
					this.$set(data, dragItem.key.split(';')[0], '')
					this.$set(data, dragItem.key.split(';')[1], '')
					break
				case undefined:
					this.$set(data, dragItem.key, '')
					break
				default:
					this.$set(data, dragItem.key, '')
			}
			this.data = data
		},
		// 拖动面板 修改组件时，修改list
		handleChangeKeyForChangeList({ oldKey, newKey }) {
			const data = this.data[oldKey]
			this.$delete(this.data, oldKey)
			this.$set(this.data, newKey, data)
		},
		// 拖动面板 移除组件时，移除key
		handleChangeKeyForRemove({ key }) {
			const data = this.data
			if (key.indexOf(';') !== '-1') {
				const _key = key.split(';')
				_key.forEach(item => {
					this.$delete(data, item)
				})
			}
			this.$delete(data, key)
		},
		// 重置
		reset() {
			this.init()
			for (const key in this.child) {
				this.errorHide(key)
			}
		},
		// 校验 form
		validate() {
			const data = this.data
			let error = false
			const componentList = []
			const descriptor = {}
			for (let i = 0; i <= this.currentList.length - 1; i++) {
				componentList.push(...this.currentList[i])
			}
			for (let i = 0; i <= componentList.length - 1; i++) {
				const item = componentList[i]
				if (
					item.dataType !== 'Null' &&
					this.child[item.id].visibleStatus()
				) {
					if (item.rules) {
						const rules = str2Obj(item.rules)
						let type = item.dataType
							? item.dataType.toLowerCase()
							: 'string'
						if (type === 'multidata') {
							type = 'array'
						}
						descriptor[item.key] = {
							id: item.id,
							type,
							message: rules.message,
							required: item.required,
						}
						if (rules.pattern) {
							descriptor[item.key].pattern = new RegExp(
								rules.pattern,
							)
						}
						if (rules.validator) {
							descriptor[item.key].validator = new Function(
								'rule',
								'value',
								rules.validator,
							)
						}
					}
				}
			}
			console.log(descriptor)
			const validator = new Schema(descriptor)
			validator.validate(data, errors => {
				if (errors) {
					error = true
					errors.forEach(item => {
						this.child[descriptor[item.field].id].errorShow(
							item.message,
						)
					})
				}
			})
			return error
		},
		// 编辑状态
		statusEdit() {
			this.status = 'edit'
		},
		// 只读状态
		statusRead() {
			this.status = 'read'
		},
		// 隐藏错误信息
		errorHide(id) {
			this.child[id].errorHide()
		},
		// 修改组件时，修改list
		changeSelectList({ key, value }) {
			const currentList = this.currentList
			currentList.forEach(child => {
				child.forEach(item => {
					if (item.key === key) {
						item.ajaxList = value
					}
				})
			})
			this.currentList = currentList
		},
	},
}
