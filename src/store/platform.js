import Vue from 'vue'

const state = Vue.observable({
	topIndex: 1,
})

const actions = {
	changeTop(topIndex) {
		state.topIndex = topIndex
	},
}
export default { state, actions }
