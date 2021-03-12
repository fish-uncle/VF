import { findComponentUpward } from '../utils'
import { debounce } from 'throttle-debounce'

export default {
	data () {
		return {
			parent: findComponentUpward(this, 'FormList'), // form
			currentVal: this.value, // 当前配置
			timeout: null, // 防抖
			isMounted: false,
			e: undefined
		}
	},
	props: ['value', 'error', 'language', 'edit', 'status'],
	watch: {
		value (val) {
			this.currentVal = val
		}
	},
	mounted () {
		this.isMounted = true
	},
	methods: {
		// 默认更新事件
		update () {
		},
		// 防抖
		debounceOnChange: debounce(1000, false, function () {
			if (this.currentVal.events) {
				if (typeof this.currentVal.events.onChange === 'string') {
					const fun = new Function('value', 'e', this.currentVal.events.onChange)
					fun(this.parent.data[this.currentVal.key], this.e)
				}
				if (typeof this.currentVal.events.onChange === 'function') {
					this.currentVal.events.onChange(this.parent.data[this.currentVal.key], this.e)
				}
			}
		}),
		// 数据改变回调
		eventsOnChange (e = undefined) {
			this.e = e
			this.debounceOnChange.bind(this)()
		}
	}
}
