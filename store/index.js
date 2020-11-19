import createPersistedState from 'vuex-persistedstate'

export default {
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    },
  },
  plugins: [createPersistedState({ storage: window.sessionStorage })],
}
