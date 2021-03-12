import Vue from 'vue'

const store = Vue.observable({
	lang: localStorage.getItem('locale') || 'zh'
})

const mutations = {
	change (state) {
		store.lang = state.lang
	}
}
export default { store, mutations }
