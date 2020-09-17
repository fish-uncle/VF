const store = {
  namespaced: true,
  state: {
    previewVisible: false,
    dataVisible: false,
    buyVisible: false,
    pleaseVisible: false,
    codeVisible: false,
    loading: false,
  },
  mutations: {
    codeShow (state) {
      state.codeVisible = true;
    },
    codeHide (state) {
      state.codeVisible = false;
    },
    pleaseShow (state) {
      state.pleaseVisible = true;
    },
    pleaseHide (state) {
      state.pleaseVisible = false;
    },
    buyShow (state) {
      state.buyVisible = true;
    },
    buyHide (state) {
      state.buyVisible = false;
    },
    previewShow (state) {
      state.previewVisible = true;
    },
    previewHide (state) {
      state.previewVisible = false;
    },
    dataShow (state) {
      state.dataVisible = true;
    },
    dataHide (state) {
      state.dataVisible = false;
    },
    loadingHide (state) {
      state.loading = false
    },
    loadingShow (state) {
      state.loading = true
    },
  }
};
export default store
