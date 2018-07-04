'use strict'
const events = require('./events.js')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#sign-out-button').click(events.onSignOut)

  $('#add-stock-form').on('submit', events.onAddStock)
  $('#update-stock-form').on('submit', events.onUpdateStock)
  // $('#delete-stock-form').on('submit', events.onDeleteStock)
  // $('#delete-stock-form').on('submit', events.onDeleteStock)

  $('.content').on('click', '.delete-button', events.onDeleteStock)
  $('.content').on('click', '.update-button', events.updateFormShow)
  $('.content').on('submit', '.stock-update-form', events.onUpdateStock)
})
