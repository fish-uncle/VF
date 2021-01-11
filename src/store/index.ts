import Vue from 'vue'
import Vuex from 'vuex'
import center from './center'
import component from './component'
import model from './model'
import top from './top'
import help from './help'

Vue.use(Vuex)

const store:any = new Vuex.Store({
  strict: false,
  modules: {
    center,
    component,
    model,
    top,
    help,
  },
})

export default store
