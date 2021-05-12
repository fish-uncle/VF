import Vue from 'vue'
import Vuex from 'vuex'
import center from './center'

Vue.use(Vuex)

const store:any = new Vuex.Store({
  strict: false,
  modules: {
    center,
  }
})

export default store
