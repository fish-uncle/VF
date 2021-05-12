import Vue from 'vue'

const state = Vue.observable({
	topIndex: 1,
	previewVisible: false,
	readVisible: false,
	dataVisible: false,
	buyVisible: false,
	pleaseVisible: false,
	codeVisible: false,
})

const actions = {
	changeTop(topIndex) {
		state.topIndex = topIndex
	},
}
export default { state, actions }
