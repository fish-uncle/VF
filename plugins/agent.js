/**
 * @method agent
 * @description 代理，观察者
 *
 * @example
 * const a = function (data) {
 *    console.log(data)
 * }
 * this.agent.$on('ak47', a)
 * this.agent.$once({data: 1, type: 'ak47'})
 * this.agent.$off('ak47', a)
 * this.agent.$once({data: 2, type: 'ak47'})
 */

const agent = function () {
	this.handlers = {}
}

agent.prototype = {
	constructor: agent,

	/**
	 * @description 添加代理对象
	 */
	$on: function (type, handler) {
		if (typeof this.handlers[type] === "undefined") {
			this.handlers[type] = []
		}
		this.handlers[type].push(handler)
	},

	/**
	 * @description 触发代理
	 */
	$once: function (event) {
		if (!event.target) {
			event.target = this
		}
		if (this.handlers[event.type] instanceof Array) {
			let handlers = this.handlers[event.type], i, len
			for (i = 0, len = handlers.length; i < len; i++) {
				handlers[i](event)
			}
		}
	},

	/**
	 * @description 移除代理对象
	 */
	$off: function (type, handler) {
		if (this.handlers[type] instanceof Array) {
			let handlers = this.handlers[type], i, len
			for (i = 0, len = handlers.length; i < len; i++) {
				if (handlers[i] === handler) {
					break
				}
			}
			handlers.splice(i, 1)
		}
	}
}
export default agent
