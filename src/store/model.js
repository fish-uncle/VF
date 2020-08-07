const store = {
  namespaced: true,
  state: {
    previewVisible: false,
    dataVisible: false,
    buyVisible: false,
    pleaseVisible: false,
    loading: false,
  },
  mutations: {
    pleaseShow: function (state) {
      state.pleaseVisible = true;
    },
    pleaseHide: function (state) {
      state.pleaseVisible = false;
    },
    buyShow: function (state) {
      state.buyVisible = true;
    },
    buyHide: function (state) {
      state.buyVisible = false;
    },
    previewShow: function (state) {
      state.previewVisible = true;
    },
    previewHide: function (state) {
      state.previewVisible = false;
    },
    dataShow: function (state) {
      state.dataVisible = true;
    },
    dataHide: function (state) {
      state.dataVisible = false;
    },
    loadingHide: function (state) {
      state.loading = false
    },
    loadingShow: function (state) {
      state.loading = true
    },
  }
};
export default store
