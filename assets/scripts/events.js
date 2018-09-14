const authApi = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')

const onCheckPrice = function () {
  authApi.checkPrice()
    .then(ui.checkPriceSuccess)
    .catch(ui.checkPriceError)
}

// Add stock to user object in database and initiates stock card display as well
// as stock price check function
const onAddStock = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (data.stock.symbol === '') {
    $('.addStockMessage').text('Please enter stock symbol.')
  } else {
    $('.addStockMessage').text('')
    data.stock.symbol = data.stock.symbol.toUpperCase()
    authApi.addStock(data)
      .then(ui.addStockSuccess)
      .catch(ui.addStockError)
      .then(onGetStocks)
  }
}

const onUpdateStock = function (event) {
  event.preventDefault()
  const updateData = getFormFields(event.target)
  updateData.stock['id'] = $(event.target).data('id')
  authApi.updateStock(updateData)
    .then(ui.updateStockSuccess)
    .catch(ui.updateStockError)
    .then(onGetStocks)
}

const onDeleteStock = function (event) {
  event.preventDefault()
  const data = $(this).data('id')
  authApi.deleteStock(data)
    .then(ui.deleteStockSuccess)
    .catch(ui.deleteStockError)
    .then(onGetStocks)
}

// Contacts server to collect user stock information and inititates stock price API call
const onGetStocks = function (event) {
  authApi.getStocks()
    .then(ui.getStocksSuccess)
    .catch(ui.getStocksError)
    .then(onCheckPrice)
}

// Displays stock share update form on click of update share button
const updateFormShow = function (event) {
  event.preventDefault()
  $('.update-form-' + $(this).data('id')).show()
  $('.update-button').hide()
}

// Auth Events Below

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
    .then(onGetStocks)
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
  onSignOut,
  onAddStock,
  onUpdateStock,
  onDeleteStock,
  onGetStocks,
  updateFormShow,
  onCheckPrice
}
