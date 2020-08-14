const store = {
  namespaced: true,
  state: {
    helpName: '',
    helpType: 1,
    helpContent: '',
  },
  mutations: {
    changeHelp: function (state, newState) {
      state.helpName = newState.helpName
      state.helpContent = newState.helpContent ? newState.helpContent.default : ''
      state.helpType = newState.helpType
    },
  }
};
export default store
