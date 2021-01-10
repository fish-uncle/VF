import agent from './agent'
import Highlight from './highlight'

const plugins = function (Vue) {
	Vue.prototype.$agent = new agent()
	Vue.use(Highlight)
}

export default plugins
