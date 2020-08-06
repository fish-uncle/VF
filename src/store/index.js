import Vue from 'vue'
import Vuex from 'vuex'
import center from './center'
import component from './component'
import model from './model'
import right from './right'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    center,
    component,
    model,
    right
  },
})
