const store = {
  namespaced: true,
  state: {
    tabIndex: 1,
  },
  mutations: {
    changeTab: function (state, newState) {
      state.tabIndex = newState.tabIndex
    },
  }
};
export default store
