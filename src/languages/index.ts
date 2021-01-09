import Vue from 'vue'
import ViewUI from 'view-design'
import VueI18n from 'vue-i18n'
import en from 'view-design/dist/locale/en-US'
import zh from 'view-design/dist/locale/zh-CN'
import US from './en-US'
import CN from './zh-CN'
Vue.use(VueI18n)
// Vue.locale = () => {}
const messages = {
  en: Object.assign(US, en),
  zh: Object.assign(CN, zh)
}

const i18n = new VueI18n({
  locale: localStorage.getItem("locale") || 'zh',
  messages
})

Vue.use(ViewUI, {
  i18n: (key, value) => i18n.t(key, value)
})

export default i18n
