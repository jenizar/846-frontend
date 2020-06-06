export default {
  toggleDebugMode({ commit }) {
    commit('toggleDebugMode')
  },
  storeIncidents({ commit, state }, data) {
    commit('storeIncidents', data)
  },
  setActiveIncident({ commit, state }, data) {
    commit('setActiveIncident', data)
  }
}
