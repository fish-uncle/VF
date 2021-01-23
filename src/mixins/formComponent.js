import {findComponentUpward} from '../utils'
import chalk from 'chalk'

export default {
	data() {
		return {
			parent: findComponentUpward(this, 'FormList'),
			currentVal: this.value,
			id: null,
			visible: true,
			error: false,
			currentComponent: null,
			readComponent: null,
			type: '',
			errorMsg: ''
		}
	},
	props: {
		index: {},
		value: {
			required: true
		},
		status: {
			type: String,
			required: true
		},
		labelWidth: {},
		labelTextAlign: {},
		props: {
			type: Object,
			default: () => {
			}
		},
		language: {
			type: String,
			default: 'zh'
		}
	},
	mounted() {
		this.id = this.currentVal.id
		const type = this.currentVal.type
		const componentType = this.currentVal.componentType
		this.type = type
		this.currentComponent = () => import(`../components/${componentType}/${type}`)
		this.readComponent = () => import(`../components/${componentType}/${type}/read`)
		if (this.parent) {
			this.parent.childMounted({
				key: this.currentVal.key,
				errorHide: this.errorHide,
				errorShow: this.errorShow,
				visibleStatus: this.visibleStatus,
				show: this.show,
				hide: this.hide,
				update: this.update,
				id: this.id
			})
		}
	},
	computed: {
		currentWidth() {
			if (typeof this.currentVal.labelWidth === 'number') {
				return this.currentVal.width
			} else {
				if (this.currentVal.width) {
					return this.currentVal.width
				} else {
					return 12
				}
			}
		},
		currentRequired() {
			return this.currentVal.required
		},
		currentLabelTextAlign() {
			if (this.currentVal.labelTextAlign) {
				return this.currentVal.labelTextAlign
			} else {
				return this.labelTextAlign
			}
		},
		currentLabelWidth() {
			if (this.currentVal.labelWidth) {
				return `${this.currentVal.labelWidth}px`
			} else {
				if (typeof this.currentVal.labelWidth === 'number') {
					return `${this.currentVal.labelWidth}px`
				} else {
					return `${this.labelWidth}px`
				}
			}
		},
		currentTitle() {
			if (this.currentVal.title) {
				return this.currentVal.title
			}
			if (this.currentVal[`title_${this.language}`]) {
				return this.currentVal[`title_${this.language}`]
			}
		}
	},
	methods: {
		warn(msg) {
			console.log(chalk.bgYellow(msg))
		},
		visibleStatus() {
			return this.visible
		},
		errorShow(msg) {
			this.error = true
			this.errorMsg = msg
		},
		errorHide() {
			this.error = false
		},
		show() {
			this.visible = true
			if (this.currentVal.events) {
				if (this.currentVal.events.onChange) {
					const fun = new Function(this.currentVal.events.onShow)
					fun()
				}
			}
		},
		hide() {
			this.visible = false
			if (this.currentVal.events) {
				if (this.currentVal.events.onChange) {
					const fun = new Function(this.currentVal.events.onHide)
					fun()
				}
			}
		},
		update() {
			if (this.$children[0])
				this.$children[0].update()
			if (this.currentVal.events) {
				if (this.currentVal.events.onUpdate) {
					const fun = new Function(this.currentVal.events.onUpdate)
					fun()
				}
			}
		}
	}
}
