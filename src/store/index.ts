import Vue from 'vue'
import Vuex from 'vuex'
import center from './center'
import model from './model'

Vue.use(Vuex)

const store:any = new Vuex.Store({
  strict: false,
  modules: {
    center,
    model,
  }
})

export default store
