export default {
  getState (state) {
    return state.services
  },
  getStateSpiner (state) {
    return state.stateSpiner
  },
  getFilterDocuments: state => (payload) => {
    const data = []
    if (payload === 'services') {
      for (let i = 0; i < 3; i++) {
        data.push(state.services[i])
      }
    }
    if (payload === 'products') {
      for (let i = 0; i < 3; i++) {
        data.push(state.products[i])
      }
    }
    return data
  }
}
