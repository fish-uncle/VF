import Vue from 'vue'
import VueRouter from 'vue-router'

const routes: Array<any> = []
const context = require.context('./pages', true, /\.(route.ts)$/)

context.keys().forEach(name => {
	routes.push(context(name).default)
})

Vue.use(VueRouter)

const router: VueRouter = new VueRouter({
	routes: [
		...routes,
	]
})

export default router