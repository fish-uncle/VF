import Vue from 'vue'
const state = Vue.observable({
	helpName: '',
	helpType: 1,
	helpContent: '',
})
const actions = {
	changeHelp(newState) {
		state.helpName = newState.helpName
		state.helpContent = newState.helpContent
			? newState.helpContent.default
			: ''
		state.helpType = newState.helpType
	},
}
export default { state, actions }
