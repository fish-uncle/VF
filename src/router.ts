import Vue from 'vue'
import VueRouter from 'vue-router'

const routes: Array<any> = []
const context = require.context('./pages', true, /\.(route.ts)$/)
const test = require.context('../test/pages', true, /\.(route.js)$/)

const isProduction = process.env.NODE_ENV === 'production'
context.keys().forEach(name => {
	routes.push(context(name).default)
})

if (!isProduction) {
	test.keys().forEach(name => {
		routes.push(test(name).default)
	})
}

Vue.use(VueRouter)

const router: VueRouter = new VueRouter({
	routes: [
		...routes
	]
})

export default router
