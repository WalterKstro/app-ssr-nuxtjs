export const state = () => ({
  errorLoad: '',
  data: [],
  stateSpiner: null
})

export const mutations = {
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
  SET_SERVICES (state, payload) {
    state.data = payload
  },
  /**
   * CHANGE STATE SPINER LOADING WHILE GET DATA
   * COLLECTION FROM FIREBASE
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
  DELETE_SERVICE (state, id) {
    const index = state.data.findIndex((service) => {
      return service.id === id
    })
    state.data.splice(index, 1)
  }
}

export const actions = {
  /**
   * UPLOAD IMAGE TO STORAGE
   * @param commit
   * @param file
   * @returns {Promise<void>}
   */
  async setImageStorage ({ commit }, file) {
    let urlTemp = ''
    try {
      const refImage = this.$fireStorage.ref().child('services').child(file.name)
      await refImage.put(file)
      urlTemp = await refImage.getDownloadURL()
      return urlTemp
    } catch (e) {
      commit('SET_ERROR', e)
    }
  },
  /**
   * SAVE SERVICE TO FIRESTORE
   * @param commit
   * @param service
   * @returns {Promise<void>}
   */
  async setServiceFirestore ({ commit }, service) {
    try {
      await this.$fireStore.collection('services').add(service)
    } catch (e) {
      commit('SET_ERROR', e)
    }
  },
  /**
   * GET ALL DATA SERVICES FROM FIRESTORE
   * @param commit
   * @returns {Promise<void>}
   */
  async getServicesFirestore ({ commit }) {
    const servicesTemp = []
    commit('SET_STATE_SPINER', true)
    try {
      await this.$fireStore.collection('services').get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const tempDoc = doc.data()
            tempDoc.id = doc.id
            servicesTemp.push(tempDoc)
          })
          commit('SET_STATE_SPINER', false)
        })
      commit('SET_SERVICES', servicesTemp)
    } catch (e) {
      commit('SET_ERROR', e)
    }
  },
  /**
   * DELETE ONE SERVICE FROM FIRESTORE
   * @param commit
   * @param id
   * @returns {Promise<void>}
   */
  async deleteOneService ({ commit }, id) {
    try {
      await this.$fireStore.collection('services').doc(id).delete()
      commit('DELETE_SERVICE', id)
    } catch (e) {
      commit('SET_ERROR', e)
    }
  },
  /**
   * UPDATE ONE SERVICE
   * @param commit
   * @param service
   * @returns {Promise<void>}
   */
  async udpateService ({ commit }, service) {
    try {
      await this.$fireStore.collection('services').doc(service.id).update(service)
    } catch (e) {
      commit('SET_ERROR', e)
    }
  }
}

export const getters = {
  getState (state) {
    return state.data
  },
  getStateSpiner (state) {
    return state.stateSpiner
  }
}
