export default {
  toggleDebugMode(state) {
    state.debug = !state.debug
  },
  storeIncidents(state, data) {
    state.incidents = data.data
  },
  setActiveIncident(state, data) {
    state.activeIncident = data
  }
}
