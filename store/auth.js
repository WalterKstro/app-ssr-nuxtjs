import Coockie from 'js-cookie'

export const state = () => ({
  authenticated: null
})

export const mutations = {
  /**
   * SAVE ACCOUNT WHEN NEW REGISTER
   * @param state
   * @param account
   * @constructor
   */
  SAVE_TO_ACCOUNT_STATE (state, account) {
    state.authenticated = account
  },
  /**
   * OBSERVABLE WHEN ACCOUNT IS SESSION
   * @param state
   * @param authUser
   * @constructor
   */
  ON_AUTH_STATE_CHANGED_MUTATION (state, authUser) {
    if (!authUser) {
      state.authenticated = authUser
    } else {
      const { uid, email, emailVerified } = authUser
      state.authenticated = { uid, email, emailVerified }
    }
  }
}

export const actions = {
  /**
   * INIT SESSION WITH EMAIL WITH PASSWORD
   * @param commit
   * @param account
   * @returns {Promise<void>}
   */
  async authnWithEmailAndPassword ({ commit }, account) {
    try {
      // Login with email and password
      await this.$fireAuth.signInWithEmailAndPassword(account.email, account.pass)

      // Get token JWT from Firebase Auth
      const token = await this.$fireAuth.currentUser.getIdToken()
      const { email, uid, emailVerified } = this.$fireAuth.currentUser

      // Set token JWT to Cookie
      Coockie.set('access_token', token)
      // Set user store
      commit('SAVE_TO_ACCOUNT_STATE', { email, uid, emailVerified })

      // Redirect path protected
      await this.$router.push('/admin')
    } catch (e) {
      console.log(e)
    }
  },
  /**
   * CREATE NEW ACCOUNT WITH EMAIL AND PASSWORD
   * @param commit
   * @param account
   * @returns {Promise<void>}
   */
  async signUpWithEmailAndPassword ({ commit }, account) {
    try {
      await this.$fireAuth.createUserWithEmailAndPassword(account.email, account.pass)
      commit('SAVE_TO_ACCOUNT_STATE', account)
      await this.$router.push('/admin')
    } catch (e) {
      console.log('Error create admin: ' + e)
    }
  },
  /**
   * OBSERVABLE WHEN AN ACCOUNT IS ACTIVED
   * @param commit
   * @param authUser
   * @returns {Promise<void>}
   */
  async onAuthStateChangedAction ({ commit }, { authUser }) {
    if (authUser === null) {
      await commit('ON_AUTH_STATE_CHANGED_MUTATION', null)
      return
    }
    await commit('ON_AUTH_STATE_CHANGED_MUTATION', authUser)
  },
  /**
   * CLOSE SESSION IN AUTH FIREBASE
   * @param commit
   * @returns {Promise<void>}
   */
  async signOutSession ({ commit }) {
    // eslint-disable-next-line no-useless-catch
    try {
      await this.$fireAuthUnsubscribe()
      await this.$fireAuth.signOut()
      await Coockie.remove('access_token')
      await this.$router.push('/')
      commit('SAVE_TO_ACCOUNT_STATE', null)
    } catch (e) {
      throw e
    }
  }
}

export const getters = {
  getCurrentUser (state) {
    return state.authenticated
  }
}
