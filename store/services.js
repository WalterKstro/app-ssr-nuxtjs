export const state = () => ({
  errorLoad: '',
  data: []
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
    try {
      await this.$fireStore.collection('services').get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const tempDoc = doc.data()
            tempDoc.id = doc.id
            servicesTemp.push(tempDoc)
          })
          commit('SET_SERVICES', servicesTemp)
        })
    } catch (e) {
      commit('SET_ERROR', e)
    }
  }
}

export const getters = {
  getState (state) {
    return state.data
  }
}
