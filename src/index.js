import Vue from 'vue'
import App from './App'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import i18n from './languages'
import draggable from 'vuedraggable'

Vue.use (ViewUI)

import router from './router'
import store from './store'
import plugins from '../plugins'
import FormComponent from './components/FormComponents'
import FormComponentUse from './components/VComponents'
import FormList from './components/FormList'
import FormUse from './components/VForm'
import FormListUse from './components/VList'
import JsonViewer from 'vue-json-viewer'

const editor = require ('vue2-ace-editor')
Vue.component ('editor', editor)
Vue.component ('draggable', draggable)
Vue.component ('f-component', FormComponent)
Vue.component ('f-list', FormList)

Vue.component ('v-list', FormListUse)
Vue.component ('v-component', FormComponentUse)
Vue.component ('v-form', FormUse)
Vue.prototype.editorInit = function () {
  require ('brace/ext/language_tools') //language extension prerequsite...
  require ('brace/mode/html')
  require ('brace/mode/javascript')    //language
  require ('brace/mode/less')
  require ('brace/mode/jsoniq')
  require ('brace/theme/chrome')
  require ('brace/snippets/javascript') //snippet
}
Vue.config.productionTip = false
Vue.use (plugins)
Vue.use (JsonViewer)

new Vue ({
  router,
  store,
  i18n,
  render: h => h (App)
}).$mount ("#root")

document.getElementById ('vf-loading').remove ()
console.log (
  `%c VF %c v${process.env.pkg.version} %c`,
  'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
  'background:rgb(18, 120, 245) ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
  'background:transparent'
)
