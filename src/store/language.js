import Vue from 'vue'

const state = Vue.observable({
	lang: localStorage.getItem('locale') || 'zh',
})

const actions = {
	change(lang) {
		state.lang = lang
	},
}
export default { state, actions }
