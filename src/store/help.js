const store = {
  namespaced: true,
  state: {
    helpName: '',
    helpContent: '',
  },
  mutations: {
    changeHelp: function (state, newState) {
      state.helpName = newState.helpName
      state.helpContent = newState.helpContent.default
    },
  }
};
export default store
