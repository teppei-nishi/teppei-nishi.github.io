import createPersistedState from 'vuex-persistedstate'

export default {
  state: {
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
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })],
}
