export default {
  /**
   * CREATE NEW DOCUMENT
   * @param commit
   * @param payload
   * @returns {Promise<string>}
   */
  async createNew ({ commit }, payload) {
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
  /**
   * UPLOAD ONE IMAGE TO STORAGE
   * @param commit
   * @param payload
   * @returns {Promise<*|string>}
   */
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
   * GET ALL DOCUMENTS
   * @param commit
   * @returns {Promise<void>}
   */
  async selectDocuments ({ commit }) {
    const temp = []
    commit('SET_STATE_SPINER', true)
    try {
      await this.$fireStore.collection('services').get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const tempDoc = doc.data()
            tempDoc.id = doc.id
            temp.push(tempDoc)
          })
          commit('SET_STATE_SPINER', false)
        })
      commit('SET_DOCUMENT', temp)
    } catch (e) {
      commit('SET_ERROR', e)
    }
  },
  /**
   * DELETE ONE DOCUMENT
   * @param commit
   * @param id
   * @returns {Promise<void>}
   */
  async deleteOneDocument ({ commit }, id) {
    try {
      await this.$fireStore.collection('services').doc(id).delete()
      commit('DELETE_DOCUMENT', id)
    } catch (e) {
      commit('SET_ERROR', e)
    }
  },
  /**
   * UPDATE ONE DOCUMENT
   * @param commit
   * @param service
   * @returns {Promise<void>}
   */
  async udpateDocument ({ commit }, payload) {
    try {
      await this.$fireStore.collection('services').doc(payload.id).update(payload)
    } catch (e) {
      commit('SET_ERROR', e)
    } finally {
      await this.$router.push('/admin/servicios')
    }
  }
}
