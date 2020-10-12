import JWTDecode from 'jwt-decode'
import Cookieparser from 'cookieparser'

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (process.server && process.static) { return }
    if (!req.headers.cookie) { return }

    const parsed = Cookieparser.parse(req.headers.cookie)
    const accessTokenCookie = parsed.access_token

    if (!accessTokenCookie) { return }

    const decoded = JWTDecode(accessTokenCookie)

    if (decoded) {
      commit('auth/SAVE_TO_ACCOUNT_STATE', {
        uid: decoded.user_id,
        email: decoded.email
      })
    }
  }
}
