export default {
  namespaced: true,
  state: {
    opened: true
  },
  getters: {
    isOpened(state) {
      return !!state.opened;
    }
  },
  mutations: {
    toggle(state) {
      state.opened = !state.opened;
    }
  }
};
