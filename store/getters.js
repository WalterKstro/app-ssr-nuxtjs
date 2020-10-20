export default {
  getState (state) {
    return state.services
  },
  getStateSpiner (state) {
    return state.stateSpiner
  },
  getFilterDocuments (state) {
    const data = []
    for (let i = 0; i < 3; i++) {
      data.push(state.services[i])
    }
    return data
  }
}
