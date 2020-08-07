const store = {
  namespaced: true,
  state: {
    topIndex: 1,
  },
  mutations: {
    changeTop: function (state, newState) {
      state.topIndex = newState.topIndex
    },
  }
};
export default store
