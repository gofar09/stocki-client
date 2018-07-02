const authApi = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')

const onAddStock = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.addStock(data)
    .then(ui.addStockSuccess)
    .catch(ui.addStockError)
}

const onUpdateStock = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.updateStock(data)
    .then(ui.updateStockSuccess)
    .catch(ui.updateStockError)
}

const onDeleteStock = function (event) {
  event.preventDefault()
  const data = $(this).data('id')
  authApi.deleteStock(data)
    .then(ui.deleteStockSuccess)
    .catch(ui.deleteStockError)
}

const onGetStocks = function (event) {
  event.preventDefault()
  authApi.getStocks()
    .then(ui.getStocksSuccess)
    .catch(ui.getStocksError)
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
    .then(authApi.getStocks)
    .then(ui.getStocksSuccess)
    .catch(ui.getStocksError)
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
  onGetStocks
}
