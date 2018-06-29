const authApi = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpError)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInError)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordError)
}

const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
