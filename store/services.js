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
  async createService ({ commit }, payload) {
    let id = ''
    try {
      await this.$fireStore.collection('services').add(payload)
        .then(function (docRef) {
          id = docRef.id
        })
      return id
    } catch (e) {
      commit('SET_ERROR', e)
    }
  },
  async uploadImage ({ commit }, payload) {
    let urlTemp = ''
    const ext = payload.file.name.slice(payload.file.name.lastIndexOf('.'))
    const img = `${payload.id}${ext}`
    try {
      const refImage = await this.$fireStorage.ref().child('services').child(img)
      await refImage.put(payload.file)
      urlTemp = await refImage.getDownloadURL()
      await this.$fireStore.collection('services').doc(payload.id).update({
        imagen: urlTemp
      })
      return urlTemp
    } catch (e) {
      commit('SET_ERROR', e)
    } finally {
      if (payload.opt) {
        await this.$router.push('/admin/servicios')
      }
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
    } finally {
      await this.$router.push('/admin/servicios')
    }
  }
}

export const getters = {
  getState (state) {
    return state.data
  },
  getStateSpiner (state) {
    return state.stateSpiner
  },
  getIndexServices (state) {
    const data = []
    for (let i = 0; i < 3; i++) {
      data.push(state.data[i])
    }
    return data
  }
}
