import Vue from 'vue'
const config = require.context('../components', true, /\.(component.js)$/)
const changeListDefault = {
	Base: [
		'labelTextAlign',
		'labelWidth',
		'widthRatio',
		'disabled',
		'title',
		'width',
		'key',
		'className',
		'group',
		'rules',
		'props',
		'events.onChange',
		'events.onHide',
		'events.onShow',
		'events.onUpdate',
		'props',
	],
	Modification: ['width', 'key', 'className', 'group'],
	Senior: [
		'title',
		'width',
		'key',
		'className',
		'group',
		'events.onHide',
		'events.onShow',
		'events.onUpdate',
	],
}
const objDefault = {
	Base: {
		labelWidth: 120,
		width: 12,
		widthRatio: 100,
		labelTextAlign: 'right',
		disabled: false,
		className: '',
		props: {},
		required: false,
		rules: "{'pattern': '','message': '该项格式不正确'}",
		events: {
			onChange: '',
			onHide: '',
			onShow: '',
			onUpdate: '',
		},
	},
	Modification: {
		labelWidth: 120,
		width: 12,
		widthRatio: 100,
		labelTextAlign: 'right',
		className: '',
		dataType: 'Null',
	},
	Senior: {
		labelWidth: 120,
		width: 12,
		widthRatio: 100,
		labelTextAlign: 'right',
		className: '',
		props: {},
		events: {
			onHide: '',
			onShow: '',
			onUpdate: '',
		},
	},
}
const changeList = {}
const list = []
const obj = {}
config.keys().forEach(name => {
	const componentType = name.split('/')[1]
	const type = name.split('/')[2]
	let child = config(name).default
	if (changeListDefault[componentType]) {
		changeList[type] = [
			...changeListDefault[componentType],
			...child.changeList,
		]
		child = {
			...objDefault[componentType],
			...child,
			type,
			componentType,
			changeList: [
				...changeListDefault[componentType],
				...child.changeList,
			],
		}
		list.push(child)
		if (!obj[componentType]) {
			obj[componentType] = []
		}
		obj[componentType].push(child)
	}
})

const state = Vue.observable({
	list,
	obj,
	changeList,
})
const actions = {}
export default { state, actions }
