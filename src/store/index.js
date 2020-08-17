import Vue from 'vue'
import Vuex from 'vuex'
import center from './center'
import component from './component'
import model from './model'
import right from './right'
import top from './top'
import help from './help'
import language from './language'

Vue.use(Vuex);

export default new Vuex.Store({
  strict: false,
  modules: {
    center,
    component,
    model,
    right,
    top,
    help,
    language,
  },
})
