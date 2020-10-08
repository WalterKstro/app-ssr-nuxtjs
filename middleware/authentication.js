export default function ({ store, redirect, route }) {
  const blockedRoute = /\/admin\/*/g
  const user = store.state.auth.authenticated

  // If the user is not authenticated
  if (!user && route.path.match(blockedRoute)) {
    return redirect('/signUp')
  }
}
