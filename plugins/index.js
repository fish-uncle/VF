import Agent from './agent'
import Highlight from './highlight'

const plugins = function (Vue) {
    Vue.prototype.$agent = new Agent()
    Vue.use(Highlight)
}

export default plugins
