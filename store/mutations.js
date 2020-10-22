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
  SET_DOCUMENT_SERVICE (state, payload) {
    state.services = payload
  },
  /**
   * SET ALL COLLECTION TO STATE
   * @param state
   * @param payload
   * @constructor
   */
  SET_DOCUMENT_PRODUCT (state, payload) {
    state.products = payload
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
  DELETE_DOCUMENT (state, { id, payload }) {
    /**
     * IT'S PAYLOAD IS SERVICES DELETE
     */
    if (payload === 'servicios') {
      const index = state.services.findIndex((doc) => {
        return doc.id === id
      })
      state.services.splice(index, 1)
    }
    /**
     * IT'S PAYLOAD IS PRODUCTS DELETE
     */
    if (payload === 'productos') {
      const index = state.products.findIndex((doc) => {
        return doc.id === id
      })
      state.products.splice(index, 1)
    }
    /**
     * IT´S PAYLOAD IS CONTACT DELETE
     */
    if (payload === 'contact') {
      const index = state.contact.findIndex((doc) => {
        return doc.id === id
      })
      state.contact.splice(index, 1)
    }
    /**
     * IT'S PAYLOAD IS BLOG DELETE
     */
    if (payload === 'blog') {
      const index = state.posts.findIndex((doc) => {
        return doc.id === id
      })
      state.posts.splice(index, 1)
    }
  },
  /**
   * SET MESSAGES
   * @param state
   * @param payload
   * @constructor
   */
  SET_MESSAGE (state, payload) {
    state.contact = payload
  },
  /**
   * SET ALL DOCUMENTS TO STORE
   * @param state
   * @param payload
   * @constructor
   */
  SET_DOCUMENT_POST (state, payload) {
    state.posts = payload
  }
}
