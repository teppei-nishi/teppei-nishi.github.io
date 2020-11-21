import createPersistedState from 'vuex-persistedstate'

export default {
  state: {
    drawer: false,
    count: 0,
    modal: false,
  },
  mutations: {
    increment(state) {
      state.count++
    },
    showModal(state) {
      state.modal = true
    },
    hideModal(state) {
      state.modal = false
    },
    toggleDrawer(state, bool) {
      state.drawer = bool
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    },
    showModal({ commit }) {
      commit('showModal')
    },
    hideModal({ commit }) {
      commit('hideModal')
    },
    toggleDrawer({ commit }, bool) {
      commit('toggleDrawer', bool)
    },
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })],
}
