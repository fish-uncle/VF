const store = {
  namespaced: true,
  state: {
    lang: localStorage.getItem ("locale") || 'zh',
  },
  mutations: {
    change (state, newState) {
      state.lang = newState.lang
    },
  }
};
export default store
