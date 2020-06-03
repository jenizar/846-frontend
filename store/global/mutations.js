export default {
  toggleDebugMode(state) {
    state.debug = !state.debug
  },
  storeIncidents(state, data) {
    state.incidents = data.data
  }
}
