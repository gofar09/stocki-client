const store = require('./store')

const signUpSuccess = function (signUpResponse) {
  $('.SignUpFeedback').html('You have successfully registered.')
  $('#sign-up-form')[0].reset()
}

const signUpError = function () {
  $('.SignUpFeedback').html('Email unavailable or password mismatch.')
  $('#sign-up-form')[0].reset()
}

const signInSuccess = function (response) {
  store.user = response.user
  $('.signInFeedback').html('You have successfully signed in.')
  // $('#sign-in-button').toggle()
  // $('#change-password-button').toggle()
  // $('#sign-out-button').toggle()
  // $('#register-button').toggle()
  // $('.emailDisplay').html('Signed in as: ' + store.user.email)
  $('#sign-in-form')[0].reset()
}

const signInError = function () {
  $('.signInFeedback').html('Username or password is incorrect.')
  $('#sign-in-form')[0].reset()
}

const changePasswordSuccess = function (changePasswordResponse) {
  $('.failedChangePassword').html('You have successfully changed your password.')
  $('#change-password-form')[0].reset()
}

const changePasswordError = function () {
  $('.failedChangePassword').html('Password is incorrect.')
  $('#change-password-form')[0].reset()
}

const signOutSuccess = function (signOutResponse) {
  // $('#sign-in-button').toggle()
  // $('#change-password-button').toggle()
  // $('#sign-out-button').toggle()
  // $('#register-button').toggle()
  // $('.emailDisplay').html('')
  $('.signInFeedback').html('')
  $('.ChangePasswordFeedback').html('')
  $('.SignUpFeedback').html('')
  delete store.user
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  signOutSuccess
}
