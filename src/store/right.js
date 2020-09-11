const store = {
  namespaced: true,
  state: {
    tabIndex: 1,
  },
  mutations: {
    changeTab (state, newState) {
      state.tabIndex = newState.tabIndex
    },
  }
};
export default store
