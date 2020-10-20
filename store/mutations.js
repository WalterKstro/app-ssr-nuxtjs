export default {
  /**
   * SET ERROR TO STATE
   * @param state
   * @param error
   */
  SET_ERROR (state, error) {
    state.errorLoad = error
  },
  /**
   * SET ALL COLLECTION TO STATE
   * @param state
   * @param services
   */
  SET_DOCUMENT (state, payload) {
    state.services = payload
  },
  /**
   * CHANGE THE STATE OF SPINER LOADING
   * @param state
   * @param payload
   * @constructor
   */
  SET_STATE_SPINER (state, payload) {
    state.stateSpiner = payload
  },
  /**
   * DELETE ON SERVICE OF STATE
   * @param state
   * @param id
   * @constructor
   */
  DELETE_DOCUMENT (state, id) {
    const index = state.services.findIndex((service) => {
      return service.id === id
    })
    state.services.splice(index, 1)
  }
}
