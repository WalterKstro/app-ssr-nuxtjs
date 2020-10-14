export const state = () => ({
  file: null,
  errorLoad: ''
})

export const mutations = {
  setError (state, error) {
    state.errorLoad = error
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
      commit('setError', e)
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
      commit('setError', e)
    }
  }
}
