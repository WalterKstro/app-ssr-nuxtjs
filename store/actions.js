export default {
  /**
   * CREATE NEW DOCUMENT
   * @param commit
   * @param payload
   * @returns {Promise<string>}
   */
  async createNew ({ commit }, { nombre, precio, descripcion, imagen, collection }) {
    let id = ''
    try {
      await this.$fireStore.collection(collection).add({
        nombre,
        precio,
        descripcion,
        imagen
      })
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
  async uploadImage ({ commit }, { id, file, redirect, collection }) {
    let urlTemp = ''
    const ext = file.name.slice(file.name.lastIndexOf('.'))
    const img = `${id}${ext}`
    try {
      const refImage = await this.$fireStorage.ref().child(collection).child(img)
      await refImage.put(file)
      urlTemp = await refImage.getDownloadURL()
      await this.$fireStore.collection(collection).doc(id).update({
        imagen: urlTemp,
        id
      })
      return urlTemp
    } catch (e) {
      commit('SET_ERROR', e)
    } finally {
      if (redirect) {
        await this.$router.push(`/admin/${collection}`)
      }
    }
  },
  /**
   * GET ALL DOCUMENTS
   * @param commit
   * @returns {Promise<void>}
   */
  async selectDocuments ({ commit }, payload) {
    const temp = []
    commit('SET_STATE_SPINER', true)
    try {
      await this.$fireStore.collection(payload.payload).get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const tempDoc = doc.data()
            tempDoc.id = doc.id
            temp.push(tempDoc)
          })
          commit('SET_STATE_SPINER', false)
        })
      /**
       * IF IT´S SERVICES
       */
      if (payload.payload === 'servicios') {
        commit('SET_DOCUMENT_SERVICE', temp)
      }
      /**
       * IF IT'S PRODUCTS
       */
      if (payload.payload === 'productos') {
        commit('SET_DOCUMENT_PRODUCT', temp)
      }
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
  async deleteOneDocument ({ commit }, payload) {
    try {
      await this.$fireStore.collection(payload.payload).doc(payload.id).delete()
      commit('DELETE_DOCUMENT', payload)
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
      const { id, nombre, precio, descripcion, imagen } = { ...payload }
      await this.$fireStore.collection(payload.collection).doc(payload.id).update({
        id,
        nombre,
        precio,
        descripcion,
        imagen
      })
    } catch (e) {
      commit('SET_ERROR', e)
    } finally {
      await this.$router.push(`/admin/${payload.collection}`)
    }
  }
}
