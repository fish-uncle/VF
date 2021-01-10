import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design'
import './less/reset.less'
import './less/index.less'
import 'view-design/dist/styles/iview.css'
import i18n from '../languages'
import draggable from 'vuedraggable'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import router from './router'
import store from './store'
import plugins from '../plugins'
import FormComponent from './components-base/FormComponents/index.vue'
import FormComponentUse from './components-base/VComponents/index.vue'
import FormList from './components-base/FormList/index.vue'
import FormUse from './components-base/VForm/index.vue'
import FormListUse from './components-base/VList/index.vue'
import JsonViewer from 'vue-json-viewer'

const editor = require('vue2-ace-editor')
Vue.use(VXETable)
Vue.use(ViewUI)
Vue.component('editor', editor)
Vue.component('draggable', draggable)
Vue.component('f-component', FormComponent)
Vue.component('f-list', FormList)
Vue.component('v-list', FormListUse)
Vue.component('v-component', FormComponentUse)
Vue.component('v-form', FormUse)
Vue.prototype.editorInit = function () {
	require('brace/ext/language_tools')
	require('brace/mode/html')
	require('brace/mode/javascript')
	require('brace/mode/less')
	require('brace/mode/jsoniq')
	require('brace/theme/chrome')
	require('brace/snippets/javascript')
}
Vue.config.productionTip = false
Vue.use(plugins)
Vue.use(JsonViewer)

new Vue({
	router,
	store,
	i18n,
	render: h => h(App)
}).$mount("#root")

document.getElementById('vf-loading').remove()
